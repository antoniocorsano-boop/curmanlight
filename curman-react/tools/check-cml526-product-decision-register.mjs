import assert from 'node:assert/strict'
import {
  createDecision,
  createDecisionRegister,
  readDecisionRegister,
  writeDecisionRegister,
  updateDecision,
  deleteDecision,
  normalizeDecisionRegister,
  serializeDecisionRegisterMarkdown,
  DECISION_SCHEMA,
} from '../src/features/pilot-evaluation/product-decision-register.mjs'
import {
  addPilotFinding,
  createPilotFindingsBacklog,
  readPilotFindingsBacklog,
  writePilotFindingsBacklog,
} from '../src/features/pilot-evaluation/pilot-findings-backlog.mjs'

const memory = new Map()
const storage = {
  getItem: key => memory.get(key) ?? null,
  setItem: (key, value) => memory.set(key, value),
  removeItem: key => memory.delete(key),
}

// --- Modello dati + creazione ---
let register = createDecisionRegister()
const finding1 = addPilotFinding(createPilotFindingsBacklog(), {
  title: 'Home poco chiara',
  source: { step: 1, stepTitle: 'Orientarsi', evaluationId: 'anon-001', excerpt: 'Non capisco da dove iniziare.' },
}).items[0]
const finding2 = addPilotFinding(createPilotFindingsBacklog(), {
  title: 'Export markdown mancante',
  source: { step: 2, stepTitle: 'Esportare', evaluationId: 'anon-002', excerpt: 'Voglio il markdown.' },
}).items[0]

register = { ...register, items: [createDecision({
  title: 'Rendere chiara la Home',
  description: 'La Home non indica il percorso iniziale.',
  category: 'UX',
  area: 'Home',
  priority: 'alta',
  status: 'proposto',
  rationale: 'Blocca il primo utilizzo.',
  decision: 'Rivedere la gerarchia della Home.',
  pilotFindingIds: [finding1.id, finding2.id],
  plannedVersion: 'v1.2',
})] }

const created = register.items[0]
assert.equal(register.items.length, 1)
assert.equal(created.status, 'proposto')
assert.equal(created.priority, 'alta')
assert.equal(created.closedAt, '')
assert.deepEqual(created.pilotFindingIds.sort(), [finding1.id, finding2.id].sort())

// --- Normalizzazione / valori non validi ---
assert.equal(normalizeDecisionRegister({ schema: 'altro', items: [] }), null)
assert.equal(normalizeDecisionRegister(null), null)
const normalized = normalizeDecisionRegister(register)
assert.ok(normalized)
assert.equal(normalized.items[0].id, created.id)

// --- Aggiornamento (workflow) ---
const id = created.id
register = updateDecision(register, id, { status: 'approvato' })
assert.equal(register.items[0].status, 'approvato')
register = updateDecision(register, id, {
  status: 'in_sviluppo',
  implementationNotes: 'Branch feat/cml-526.',
  branchName: 'feat/cml-526-product-decision-register',
})
register = updateDecision(register, id, {
  status: 'in_verifica',
  verificationNotes: 'Smoke test superato.',
  implementedVersion: 'v1.2-rc1',
})
register = updateDecision(register, id, {
  status: 'completato',
  publishedVersion: 'v1.2',
  publishedAt: '2026-07-16',
})
assert.equal(register.items[0].status, 'completato')
assert.match(register.items[0].closedAt, /^\d{4}-\d{2}-\d{2}/)
assert.equal(register.items[0].publishedVersion, 'v1.2')

// --- Archiviazione ---
register = updateDecision(register, id, { status: 'archiviato' })
assert.equal(register.items[0].status, 'archiviato')
assert.match(register.items[0].closedAt, /^\d{4}-\d{2}-\d{2}/)

// --- Persistenza ---
writeDecisionRegister(storage, register)
const restored = readDecisionRegister(storage)
assert.equal(restored.items.length, 1)
assert.equal(restored.items[0].publishedVersion, 'v1.2')
assert.deepEqual(restored.items[0].pilotFindingIds.sort(), [finding1.id, finding2.id].sort())

// --- Collegamento PilotFinding (sorgente non duplicata) ---
// Il backlog persistito è la sorgente: la decisione collega per id, non duplica il contenuto.
const persistedBacklog = writePilotFindingsBacklog(storage, addPilotFinding(
  addPilotFinding(createPilotFindingsBacklog(), {
    title: finding1.title,
    source: finding1.source,
  }),
  {
    title: finding2.title,
    source: finding2.source,
  },
))
const readBacklog = readPilotFindingsBacklog(storage)
assert.equal(readBacklog.items.length, 2)
assert.ok(readBacklog.items.some(f => f.id === persistedBacklog.items[0].id))
// La decisione mantiene riferimenti agli id del backlog, senza copiarne il testo.
assert.equal(restored.items[0].title, 'Rendere chiara la Home')
assert.notEqual(restored.items[0].description, readBacklog.items[0].source.excerpt)

// --- Export Markdown ---
const findingsById = Object.fromEntries([
  ...readBacklog.items.map(f => [f.id, { title: f.title, excerpt: f.source.excerpt }]),
  [finding1.id, { title: finding1.title, excerpt: finding1.source.excerpt }],
  [finding2.id, { title: finding2.title, excerpt: finding2.source.excerpt }],
])
const markdown = serializeDecisionRegisterMarkdown(restored, findingsById)
assert.match(markdown, /Registro delle decisioni di prodotto/)
assert.match(markdown, /Nessuna classificazione automatica/)
assert.match(markdown, /Home poco chiara/)
assert.match(markdown, /Versione prevista: v1\.2/)
assert.match(markdown, /Versione pubblicata: v1\.2/)
assert.match(markdown, /Stato: Archiviato/)

// --- Eliminazione ---
const emptied = deleteDecision(restored, id)
assert.equal(emptied.items.length, 0)
assert.equal(readDecisionRegister(null).items.length, 0)

// --- Resilienza storage ---
// Storage assente: ritorna registro vuoto, nessun errore.
assert.equal(readDecisionRegister(null).items.length, 0)
assert.equal(readDecisionRegister(undefined).items.length, 0)

// Registro vuoto: export coerente.
const emptyMarkdown = serializeDecisionRegisterMarkdown(createDecisionRegister(), {})
assert.match(emptyMarkdown, /Registro delle decisioni di prodotto/)
assert.match(emptyMarkdown, /Decisioni totali: 0/)

// Storage corrotto: JSON non valido -> registro vuoto.
const corruptStorage = {
  getItem: () => '{ this is not valid json',
  setItem: () => {},
  removeItem: () => {},
}
assert.equal(readDecisionRegister(corruptStorage).items.length, 0)

// Chiave mancante: getItem null -> registro vuoto.
const emptyKeyStorage = {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {},
}
assert.equal(readDecisionRegister(emptyKeyStorage).items.length, 0)

// Aggiornamento schema (forward-compatibility): campo sconosciuto ignorato,
// campo mancante normalizzato, items non array rifiutato.
const legacyLike = { schema: DECISION_SCHEMA, updatedAt: '2026-01-01T00:00:00.000Z', items: [{ id: 'dec-legacy', title: 'Voce legacy', status: 'completato', priority: 'alta', category: 'UX', area: 'Home', unknownField: 'ignorato' }] }
const normalizedLegacy = normalizeDecisionRegister(legacyLike)
assert.ok(normalizedLegacy)
assert.equal(normalizedLegacy.items[0].title, 'Voce legacy')
assert.equal(normalizedLegacy.items[0].unknownField, undefined)
assert.equal(normalizedLegacy.items[0].description, '')
assert.equal(normalizeDecisionRegister({ schema: 'altro-schema', items: [] }), null)
assert.equal(normalizeDecisionRegister({ schema: DECISION_SCHEMA, items: 'non-array' }), null)

// Eliminazione di un PilotFinding: la decisione mantiene il riferimento per id
// (non duplica il contenuto); l'export risolve solo i finding ancora disponibili.
let orphanRegister = { ...createDecisionRegister(), items: [createDecision({ title: 'Decisione con finding eliminato', pilotFindingIds: ['finding-ghost'] })] }
writeDecisionRegister(storage, orphanRegister)
const orphanRestored = readDecisionRegister(storage)
assert.equal(orphanRestored.items[0].pilotFindingIds[0], 'finding-ghost')
const orphanMarkdown = serializeDecisionRegisterMarkdown(orphanRestored, {})
assert.match(orphanMarkdown, /Nessuna osservazione pilota collegata\./)

// Export con molti record: ogni decisione appare con il proprio titolo.
let bigRegister = createDecisionRegister()
for (let i = 0; i < 25; i++) {
  bigRegister = { ...bigRegister, items: [...bigRegister.items, createDecision({ title: `Decisione numerata ${i}`, category: 'Processo', area: 'React', status: i % 2 ? 'completato' : 'proposto' })] }
}
const bigMarkdown = serializeDecisionRegisterMarkdown(bigRegister, {})
assert.match(bigMarkdown, /Decisioni totali: 25/)
assert.match(bigMarkdown, /Decisione numerata 0/)
assert.match(bigMarkdown, /Decisione numerata 24/)

console.log('CML-526 product decision register gate: PASS')
