import assert from 'node:assert/strict'
import { buildPilotEvaluationExport, createPilotEvaluation } from '../src/features/pilot-evaluation/pilot-evaluation.mjs'
import { aggregatePilotFeedback, parsePilotFeedbackJson, serializePilotFeedbackAggregateMarkdown } from '../src/features/pilot-evaluation/pilot-feedback-analysis.mjs'

const first = createPilotEvaluation()
first.completed = true
first.context.role = 'docente'
first.context.schoolOrder = 'secondaria'
first.notes[0] = 'La Home è chiara.'
first.notes[4] = 'Serve una guida più visibile.'
const payload = buildPilotEvaluationExport(first)

const parsed = parsePilotFeedbackJson(JSON.stringify(payload), 'uno.json')
assert.equal(parsed.ok, true)
if (!parsed.ok) throw new Error('Import inatteso non valido')

const malformed = parsePilotFeedbackJson('{', 'rotto.json')
assert.equal(malformed.ok, false)

const unknown = parsePilotFeedbackJson(JSON.stringify({ ...payload, schema: 'sconosciuto' }), 'schema.json')
assert.equal(unknown.ok, false)

const aggregate = aggregatePilotFeedback([parsed.record, parsed.record])
assert.equal(aggregate.total, 1)
assert.equal(aggregate.completed, 1)
assert.equal(aggregate.duplicateIds.length, 1)
assert.equal(aggregate.roles.docente, 1)
assert.equal(aggregate.steps[0].answered, 1)
assert.equal(aggregate.steps[1].answered, 0)

const markdown = serializePilotFeedbackAggregateMarkdown(aggregate)
assert.match(markdown, /Analisi descrittiva/)
assert.match(markdown, /La Home è chiara/)
assert.doesNotMatch(markdown, /classificazione automatica positiva/)

console.log('CML_525P_PILOT_FEEDBACK_ANALYSIS_PASS')
