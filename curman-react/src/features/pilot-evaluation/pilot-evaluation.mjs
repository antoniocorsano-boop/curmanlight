export const PILOT_EVALUATION_STORAGE_KEY = 'curmanlight:guided-teacher-evaluation:v2'
export const LEGACY_PILOT_EVALUATION_STORAGE_KEY = 'curmanlight:guided-teacher-evaluation:v1'
export const PILOT_EVALUATION_SCHEMA = 'cml-pilot-evaluation-v2'

export const PILOT_EVALUATION_STEPS = [
  {
    title: 'Orientarsi',
    instruction: 'Osserva la Home e prova a capire da dove inizieresti senza consultare istruzioni esterne.',
    prompt: 'Che cosa rende chiaro o poco chiaro il primo passo?',
  },
  {
    title: 'Consultare',
    instruction: 'Chiudi temporaneamente questo pannello, apri Consulta il curricolo e osserva disciplina, filtri e dettaglio di una unità.',
    prompt: 'Che cosa facilita o ostacola la comprensione del curricolo?',
  },
  {
    title: 'Provare un’attività',
    instruction: 'Apri Proponi un aggiornamento oppure il Laboratorio assistito e prova una modifica locale senza aggiornare il curricolo ufficiale.',
    prompt: 'Il processo e il significato delle azioni risultano comprensibili?',
  },
  {
    title: 'Valutare il supporto',
    instruction: 'Esamina messaggi, indicazioni contestuali e possibilità di tornare al punto precedente.',
    prompt: 'Quale aiuto è utile e quale supporto manca?',
  },
  {
    title: 'Restituire un giudizio',
    instruction: 'Raccogli una valutazione complessiva dell’esperienza appena svolta.',
    prompt: 'Indica punti di forza, difficoltà e il miglioramento prioritario.',
  },
]

const nowIso = () => new Date().toISOString()
const makeId = () => globalThis.crypto?.randomUUID?.() ?? `cml-${Date.now()}-${Math.random().toString(16).slice(2)}`

export function createPilotEvaluation() {
  const now = nowIso()
  return {
    schema: PILOT_EVALUATION_SCHEMA,
    id: makeId(),
    createdAt: now,
    updatedAt: now,
    currentStep: 0,
    completed: false,
    notes: PILOT_EVALUATION_STEPS.map(() => ''),
    secondTestAvailable: null,
    context: {
      role: '',
      schoolOrder: '',
      experienceNote: '',
    },
  }
}

export function normalizePilotEvaluation(value) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return null
  if (value.schema !== PILOT_EVALUATION_SCHEMA && value.schema !== 'cml-guided-teacher-evaluation-v1') return null
  if (!Array.isArray(value.notes)) return null

  const fallback = createPilotEvaluation()
  return {
    ...fallback,
    ...value,
    schema: PILOT_EVALUATION_SCHEMA,
    currentStep: Math.min(Math.max(Number(value.currentStep) || 0, 0), PILOT_EVALUATION_STEPS.length - 1),
    completed: value.completed === true,
    notes: PILOT_EVALUATION_STEPS.map((_, index) => typeof value.notes[index] === 'string' ? value.notes[index] : ''),
    secondTestAvailable: value.secondTestAvailable === true || value.secondTestAvailable === false ? value.secondTestAvailable : null,
    context: {
      role: typeof value.context?.role === 'string' ? value.context.role : '',
      schoolOrder: typeof value.context?.schoolOrder === 'string' ? value.context.schoolOrder : '',
      experienceNote: typeof value.context?.experienceNote === 'string' ? value.context.experienceNote : '',
    },
  }
}

export function readPilotEvaluation(storage) {
  for (const key of [PILOT_EVALUATION_STORAGE_KEY, LEGACY_PILOT_EVALUATION_STORAGE_KEY]) {
    try {
      const raw = storage.getItem(key)
      if (!raw) continue
      const normalized = normalizePilotEvaluation(JSON.parse(raw))
      if (normalized) return normalized
    } catch {
      // A malformed local record is ignored without blocking the product.
    }
  }
  return null
}

export function writePilotEvaluation(storage, evaluation) {
  const normalized = normalizePilotEvaluation({ ...evaluation, schema: PILOT_EVALUATION_SCHEMA, updatedAt: nowIso() })
  if (!normalized) throw new TypeError('Valutazione pilota non valida.')
  storage.setItem(PILOT_EVALUATION_STORAGE_KEY, JSON.stringify(normalized))
  storage.removeItem(LEGACY_PILOT_EVALUATION_STORAGE_KEY)
  return normalized
}

export function clearPilotEvaluation(storage) {
  storage.removeItem(PILOT_EVALUATION_STORAGE_KEY)
  storage.removeItem(LEGACY_PILOT_EVALUATION_STORAGE_KEY)
}

export function buildPilotEvaluationExport(evaluation) {
  const normalized = normalizePilotEvaluation(evaluation)
  if (!normalized) throw new TypeError('Valutazione pilota non valida.')
  return {
    schema: normalized.schema,
    product: 'CurManLight React',
    evaluationId: normalized.id,
    createdAt: normalized.createdAt,
    exportedAt: nowIso(),
    completed: normalized.completed,
    context: normalized.context,
    secondTestAvailable: normalized.secondTestAvailable,
    responses: PILOT_EVALUATION_STEPS.map((step, index) => ({
      step: index + 1,
      title: step.title,
      prompt: step.prompt,
      note: normalized.notes[index],
    })),
    privacy: 'Compilazione anonima. Il file è creato sul dispositivo e non viene inviato automaticamente.',
  }
}

const cleanLine = value => String(value ?? '').trim() || 'Non indicato'

export function serializePilotEvaluationMarkdown(evaluation) {
  const payload = buildPilotEvaluationExport(evaluation)
  const lines = [
    '# Osservazioni sul test pilota di CurManLight',
    '',
    `- Identificativo anonimo: ${payload.evaluationId}`,
    `- Esportato il: ${payload.exportedAt}`,
    `- Percorso completato: ${payload.completed ? 'Sì' : 'No'}`,
    `- Ruolo dichiarato: ${cleanLine(payload.context.role)}`,
    `- Ordine di scuola: ${cleanLine(payload.context.schoolOrder)}`,
    `- Familiarità o contesto d’uso: ${cleanLine(payload.context.experienceNote)}`,
    `- Disponibilità a un secondo test: ${payload.secondTestAvailable === true ? 'Sì' : payload.secondTestAvailable === false ? 'No' : 'Non indicata'}`,
    '',
  ]

  for (const response of payload.responses) {
    lines.push(`## ${response.step}. ${response.title}`, '', `**Domanda di riflessione:** ${response.prompt}`, '', cleanLine(response.note), '')
  }

  lines.push('---', payload.privacy, '')
  return lines.join('\n')
}

export function serializePilotEvaluationJson(evaluation) {
  return JSON.stringify(buildPilotEvaluationExport(evaluation), null, 2)
}
