import assert from 'node:assert/strict'
import {
  addPilotFinding,
  createPilotFindingsBacklog,
  readPilotFindingsBacklog,
  removePilotFinding,
  serializePilotFindingsBacklogMarkdown,
  updatePilotFinding,
  writePilotFindingsBacklog,
} from '../src/features/pilot-evaluation/pilot-findings-backlog.mjs'

const memory = new Map()
const storage = {
  getItem: key => memory.get(key) ?? null,
  setItem: (key, value) => memory.set(key, value),
  removeItem: key => memory.delete(key),
}

let backlog = createPilotFindingsBacklog()
backlog = addPilotFinding(backlog, {
  title: 'Rendere più chiaro il primo passo',
  description: 'La Home non indica abbastanza chiaramente il percorso iniziale.',
  source: { step: 1, stepTitle: 'Orientarsi', evaluationId: 'anon-001', excerpt: 'Non capisco da dove iniziare.' },
})
assert.equal(backlog.items.length, 1)
assert.equal(backlog.items[0].priority, 'media')
assert.equal(backlog.items[0].status, 'da_valutare')

const id = backlog.items[0].id
backlog = updatePilotFinding(backlog, id, { priority: 'alta', status: 'pianificato', rationale: 'Blocca il primo utilizzo.', decision: 'Rivedere la gerarchia della Home.' })
assert.equal(backlog.items[0].priority, 'alta')
assert.equal(backlog.items[0].status, 'pianificato')
assert.equal(backlog.items[0].source.evaluationId, 'anon-001')

writePilotFindingsBacklog(storage, backlog)
const restored = readPilotFindingsBacklog(storage)
assert.equal(restored.items.length, 1)
assert.equal(restored.items[0].decision, 'Rivedere la gerarchia della Home.')

const markdown = serializePilotFindingsBacklogMarkdown(restored)
assert.match(markdown, /Backlog dei miglioramenti/)
assert.match(markdown, /Nessuna classificazione automatica/)
assert.match(markdown, /Priorità: Alta/)
assert.match(markdown, /Fonte anonima: anon-001/)

const empty = removePilotFinding(restored, id)
assert.equal(empty.items.length, 0)
assert.equal(readPilotFindingsBacklog(null).items.length, 0)

console.log('CML-525Q pilot findings triage gate: PASS')
