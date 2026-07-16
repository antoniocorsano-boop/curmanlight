import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const here = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(here, '..')
const libPath = path.join(root, 'src/lib/referentValidationExport.ts')
const panelPath = path.join(root, 'src/components/referente/ReferentValidationExportPanel.tsx')

const libSource = fs.readFileSync(libPath, 'utf8')
const panelSource = fs.readFileSync(panelPath, 'utf8')

function assert(condition, message) {
  if (!condition) throw new Error(message)
}

function requireText(source, text, file) {
  assert(source.includes(text), `${file}: contenuto obbligatorio assente: ${text}`)
}

function validationKey(fingerprint, proposalId) {
  return `${fingerprint}:${proposalId}`
}

function validRecords(records) {
  return records.filter(record => record.status === 'valid' && record.model && record.fingerprint)
}

function getReadiness(records, validations) {
  const imported = validRecords(records).reduce((total, record) => total + record.model.proposalHandling.length, 0)
  const validated = validRecords(records).reduce(
    (total, record) => total + record.model.proposalHandling.filter(item => validations[validationKey(record.fingerprint, item.proposalId)]).length,
    0,
  )
  const pending = imported - validated
  return { imported, validated, pending, ready: validated > 0 && pending === 0 }
}

function buildFile(records, validations) {
  const readiness = getReadiness(records, validations)
  if (readiness.validated === 0) throw new Error('Non ci sono validazioni del Referente da esportare.')
  if (readiness.pending > 0) {
    throw new Error(`Completa le ${readiness.pending} validazioni mancanti prima di esportare il passaggio finale.`)
  }
  const sources = validRecords(records)
    .flatMap(record => record.model.proposalHandling.map(item => ({
      record,
      item,
      validation: validations[validationKey(record.fingerprint, item.proposalId)] ?? null,
    })))
    .filter(entry => entry.validation)
  const items = sources.map(entry => ({ proposalId: entry.item.proposalId, validazione: entry.validation.value }))
  return {
    fileType: 'referent_validation',
    role: 'referent',
    validations: items,
    summary: {
      totale: items.length,
      confermate: items.filter(item => item.validazione === 'confermata').length,
      respinte: items.filter(item => item.validazione === 'respinta').length,
      sospese: items.filter(item => item.validazione === 'sospesa').length,
    },
    checks: { hasValidations: true, pendingExcluded: 0 },
    humanValidationRequired: true,
  }
}

function makeRecord(fingerprint, proposalIds, discipline = 'Tecnologia') {
  return {
    status: 'valid',
    fingerprint,
    fileName: `${fingerprint}.cml`,
    model: {
      discipline,
      ordine: 'Primaria',
      annoScolastico: '2026/2027',
      proposalHandling: proposalIds.map(proposalId => ({ proposalId })),
    },
  }
}

const records = [makeRecord('fp1', ['p1', 'p2'])]

// 1. zero validazioni -> ready === false
{
  const readiness = getReadiness(records, {})
  assert(readiness.validated === 0, '1: validated deve essere 0')
  assert(readiness.pending === 2, '1: pending deve essere 2')
  assert(readiness.ready === false, '1: ready deve essere false con zero validazioni')
}

// 2. una validazione su due -> validated 1, pending 1, ready false
{
  const validations = { 'fp1:p1': { value: 'confermata' } }
  const readiness = getReadiness(records, validations)
  assert(readiness.validated === 1, '2: validated deve essere 1')
  assert(readiness.pending === 1, '2: pending deve essere 1')
  assert(readiness.ready === false, '2: ready deve essere false con validazioni pendenti')
}

// 3. tutte complete -> pending 0, ready true
{
  const validations = { 'fp1:p1': { value: 'confermata' }, 'fp1:p2': { value: 'respinta' } }
  const readiness = getReadiness(records, validations)
  assert(readiness.pending === 0, '3: pending deve essere 0')
  assert(readiness.ready === true, '3: ready deve essere true con tutte le validazioni complete')
}

// 4. builder con validazione parziale -> errore
{
  const validations = { 'fp1:p1': { value: 'confermata' } }
  let threw = false
  try {
    buildFile(records, validations)
  } catch (error) {
    threw = true
    assert(/Completa le 1 validazioni mancanti/.test(error.message), '4: messaggio errore parziale inatteso')
  }
  assert(threw, '4: il builder deve sollevare errore con validazione parziale')
}

// 5. builder completo -> file valido con invarianti
{
  const validations = { 'fp1:p1': { value: 'confermata' }, 'fp1:p2': { value: 'respinta' } }
  const file = buildFile(records, validations)
  assert(file.checks.pendingExcluded === 0, '5: pendingExcluded deve essere 0')
  assert(file.humanValidationRequired === true, '5: humanValidationRequired deve essere true')
  assert(file.checks.hasValidations === true, '5: hasValidations deve essere true')
  assert(file.summary.totale === 2, '5: summary.totale deve essere 2')
  assert(file.summary.confermate === 1, '5: summary.confermate deve essere 1')
  assert(file.summary.respinte === 1, '5: summary.respinte deve essere 1')
  assert(file.summary.sospese === 0, '5: summary.sospese deve essere 0')
  assert(file.validations.length === 2, '5: validations deve contenere 2 elementi')
  assert(file.fileType === 'referent_validation', '5: fileType deve restare referent_validation')
  assert(file.role === 'referent', '5: role deve restare referent')
}

// Invarianti sorgente: la guardia deve essere presente nel codice reale
requireText(libSource, 'ready: validated > 0 && pending === 0', 'referentValidationExport.ts')
requireText(libSource, 'if (readiness.pending > 0)', 'referentValidationExport.ts')
requireText(libSource, 'pendingExcluded: 0', 'referentValidationExport.ts')
requireText(libSource, 'humanValidationRequired: true', 'referentValidationExport.ts')

// Invarianti UI: messaggio coerente e nessuna esclusione silenziosa
requireText(panelSource, 'role="status"', 'ReferentValidationExportPanel.tsx')
requireText(panelSource, 'Completa le ${readiness.pending} validazioni mancanti prima di esportare il passaggio finale.', 'ReferentValidationExportPanel.tsx')
requireText(panelSource, 'disabled={!readiness.ready}', 'ReferentValidationExportPanel.tsx')
assert(!panelSource.includes('saranno esclusi'), 'ReferentValidationExportPanel.tsx: il testo obsoleto "saranno esclusi" non deve più essere presente')

console.log('CML-518E referent completeness guard: PASS')
