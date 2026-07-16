import assert from 'node:assert/strict'
import {
  PILOT_EVALUATION_SCHEMA,
  PILOT_EVALUATION_STEPS,
  createPilotEvaluation,
  normalizePilotEvaluation,
  readPilotEvaluation,
  serializePilotEvaluationJson,
  serializePilotEvaluationMarkdown,
  writePilotEvaluation,
} from '../src/features/pilot-evaluation/pilot-evaluation.mjs'

function createMemoryStorage() {
  const values = new Map()
  return {
    getItem: key => values.has(key) ? values.get(key) : null,
    setItem: (key, value) => values.set(key, String(value)),
    removeItem: key => values.delete(key),
  }
}

const draft = createPilotEvaluation()
assert.equal(draft.schema, PILOT_EVALUATION_SCHEMA)
assert.equal(draft.notes.length, PILOT_EVALUATION_STEPS.length)
assert.equal(draft.completed, false)
assert.deepEqual(draft.context, { role: '', schoolOrder: '', experienceNote: '' })

const legacy = normalizePilotEvaluation({
  schema: 'cml-guided-teacher-evaluation-v1',
  id: 'legacy-test',
  createdAt: '2026-01-01T00:00:00.000Z',
  updatedAt: '2026-01-01T00:00:00.000Z',
  currentStep: 99,
  completed: false,
  notes: ['A'],
  secondTestAvailable: null,
})
assert.ok(legacy)
assert.equal(legacy.schema, PILOT_EVALUATION_SCHEMA)
assert.equal(legacy.currentStep, PILOT_EVALUATION_STEPS.length - 1)
assert.equal(legacy.notes[0], 'A')
assert.equal(legacy.notes.length, PILOT_EVALUATION_STEPS.length)

const storage = createMemoryStorage()
const completed = {
  ...draft,
  completed: true,
  notes: PILOT_EVALUATION_STEPS.map((step, index) => `${step.title} nota ${index + 1}`),
  context: { role: 'docente', schoolOrder: 'secondaria', experienceNote: 'Primo utilizzo' },
  secondTestAvailable: true,
}
writePilotEvaluation(storage, completed)
const restored = readPilotEvaluation(storage)
assert.ok(restored)
assert.equal(restored.completed, true)
assert.equal(restored.context.role, 'docente')

const markdown = serializePilotEvaluationMarkdown(restored)
assert.match(markdown, /# Osservazioni sul test pilota di CurManLight/)
assert.match(markdown, /Ruolo dichiarato: docente/)
assert.match(markdown, /## 5\. Restituire un giudizio/)
assert.match(markdown, /Compilazione anonima/)

const json = JSON.parse(serializePilotEvaluationJson(restored))
assert.equal(json.schema, PILOT_EVALUATION_SCHEMA)
assert.equal(json.responses.length, PILOT_EVALUATION_STEPS.length)
assert.equal(json.context.schoolOrder, 'secondaria')
assert.equal(json.privacy.includes('non viene inviato automaticamente'), true)

assert.equal(normalizePilotEvaluation(null), null)
assert.equal(normalizePilotEvaluation({ schema: 'unknown', notes: [] }), null)

console.log('CML-525O pilot evaluation contract: PASS')
