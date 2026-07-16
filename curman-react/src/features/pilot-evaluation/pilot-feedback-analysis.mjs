import { PILOT_EVALUATION_SCHEMA, PILOT_EVALUATION_STEPS } from './pilot-evaluation.mjs'

const allowedRoles = new Set(['', 'docente', 'dipartimento', 'referente', 'altro'])
const allowedOrders = new Set(['', 'infanzia', 'primaria', 'secondaria'])
const text = value => typeof value === 'string' ? value.trim() : ''

export function validatePilotFeedbackPayload(value) {
  const errors = []
  if (!value || typeof value !== 'object' || Array.isArray(value)) return { valid: false, errors: ['Il file non contiene un oggetto JSON.'] }
  if (value.schema !== PILOT_EVALUATION_SCHEMA) errors.push('Schema non riconosciuto.')
  if (value.product !== 'CurManLight React') errors.push('Prodotto non riconosciuto.')
  if (!text(value.evaluationId)) errors.push('Identificativo anonimo mancante.')
  if (!Array.isArray(value.responses) || value.responses.length !== PILOT_EVALUATION_STEPS.length) errors.push('Le cinque risposte attese non sono presenti.')
  if (!value.context || typeof value.context !== 'object') errors.push('Contesto anonimo mancante.')
  if (value.context && !allowedRoles.has(text(value.context.role))) errors.push('Ruolo non ammesso.')
  if (value.context && !allowedOrders.has(text(value.context.schoolOrder))) errors.push('Ordine di scuola non ammesso.')
  if (Array.isArray(value.responses)) {
    value.responses.forEach((response, index) => {
      if (!response || typeof response !== 'object') errors.push(`Risposta ${index + 1} non valida.`)
      else if (Number(response.step) !== index + 1 || text(response.title) !== PILOT_EVALUATION_STEPS[index]?.title) errors.push(`Risposta ${index + 1} non coerente con il percorso.`)
    })
  }
  return { valid: errors.length === 0, errors }
}

export function parsePilotFeedbackJson(raw, sourceName = 'file.json') {
  let parsed
  try { parsed = JSON.parse(raw) } catch { return { ok: false, sourceName, errors: ['JSON non leggibile.'] } }
  const validation = validatePilotFeedbackPayload(parsed)
  if (!validation.valid) return { ok: false, sourceName, errors: validation.errors }
  return {
    ok: true,
    sourceName,
    record: {
      evaluationId: text(parsed.evaluationId),
      exportedAt: text(parsed.exportedAt),
      completed: parsed.completed === true,
      secondTestAvailable: parsed.secondTestAvailable === true || parsed.secondTestAvailable === false ? parsed.secondTestAvailable : null,
      context: {
        role: text(parsed.context.role),
        schoolOrder: text(parsed.context.schoolOrder),
        experienceNote: text(parsed.context.experienceNote),
      },
      responses: parsed.responses.map((response, index) => ({
        step: index + 1,
        title: PILOT_EVALUATION_STEPS[index].title,
        prompt: PILOT_EVALUATION_STEPS[index].prompt,
        note: text(response.note),
      })),
    },
  }
}

const countBy = (records, selector) => records.reduce((acc, record) => {
  const key = selector(record) || 'non_indicato'
  acc[key] = (acc[key] || 0) + 1
  return acc
}, {})

export function aggregatePilotFeedback(records) {
  const unique = []
  const duplicateIds = []
  const seen = new Set()
  for (const record of records) {
    if (seen.has(record.evaluationId)) { duplicateIds.push(record.evaluationId); continue }
    seen.add(record.evaluationId)
    unique.push(record)
  }
  return {
    records: unique,
    duplicateIds,
    total: unique.length,
    completed: unique.filter(record => record.completed).length,
    roles: countBy(unique, record => record.context.role),
    schoolOrders: countBy(unique, record => record.context.schoolOrder),
    secondTest: {
      yes: unique.filter(record => record.secondTestAvailable === true).length,
      no: unique.filter(record => record.secondTestAvailable === false).length,
      unspecified: unique.filter(record => record.secondTestAvailable === null).length,
    },
    steps: PILOT_EVALUATION_STEPS.map((step, index) => ({
      step: index + 1,
      title: step.title,
      prompt: step.prompt,
      answered: unique.filter(record => text(record.responses[index]?.note)).length,
      notes: unique.flatMap(record => {
        const note = text(record.responses[index]?.note)
        return note ? [{ evaluationId: record.evaluationId, note }] : []
      }),
    })),
  }
}

export function serializePilotFeedbackAggregateMarkdown(aggregate) {
  const lines = [
    '# Analisi descrittiva del test pilota CurManLight', '',
    `- File validi e unici: ${aggregate.total}`,
    `- Percorsi completati: ${aggregate.completed}`,
    `- Duplicati esclusi: ${aggregate.duplicateIds.length}`, '',
    'I contenuti sono riportati senza classificazione automatica o giudizi generati.', '',
  ]
  for (const step of aggregate.steps) {
    lines.push(`## ${step.step}. ${step.title}`, '', `Risposte presenti: ${step.answered}/${aggregate.total}`, '')
    if (!step.notes.length) lines.push('_Nessuna osservazione._', '')
    else step.notes.forEach(item => lines.push(`- ${item.note}`))
    lines.push('')
  }
  return lines.join('\n')
}
