export const PILOT_FINDINGS_STORAGE_KEY = 'curmanlight:pilot-findings-backlog:v1'
export const PILOT_FINDINGS_SCHEMA = 'cml-pilot-findings-backlog-v1'

export const PILOT_FINDING_PRIORITIES = ['bassa', 'media', 'alta']
export const PILOT_FINDING_STATUSES = ['da_valutare', 'in_analisi', 'pianificato', 'chiuso']

const nowIso = () => new Date().toISOString()
const makeId = () => globalThis.crypto?.randomUUID?.() ?? `finding-${Date.now()}-${Math.random().toString(16).slice(2)}`
const text = value => typeof value === 'string' ? value.trim() : ''

export function createPilotFinding(input = {}) {
  const now = nowIso()
  return {
    id: makeId(),
    createdAt: now,
    updatedAt: now,
    title: text(input.title) || 'Nuovo punto di miglioramento',
    description: text(input.description),
    source: {
      step: Number.isInteger(input.source?.step) ? input.source.step : null,
      stepTitle: text(input.source?.stepTitle),
      evaluationId: text(input.source?.evaluationId),
      excerpt: text(input.source?.excerpt),
    },
    priority: PILOT_FINDING_PRIORITIES.includes(input.priority) ? input.priority : 'media',
    status: PILOT_FINDING_STATUSES.includes(input.status) ? input.status : 'da_valutare',
    rationale: text(input.rationale),
    decision: text(input.decision),
  }
}

export function normalizePilotFindingsBacklog(value) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return null
  if (value.schema !== PILOT_FINDINGS_SCHEMA || !Array.isArray(value.items)) return null
  const items = value.items.flatMap(item => {
    if (!item || typeof item !== 'object' || !text(item.id)) return []
    const normalized = createPilotFinding(item)
    return [{ ...normalized, id: text(item.id), createdAt: text(item.createdAt) || normalized.createdAt, updatedAt: text(item.updatedAt) || normalized.updatedAt }]
  })
  return { schema: PILOT_FINDINGS_SCHEMA, updatedAt: text(value.updatedAt) || nowIso(), items }
}

export function createPilotFindingsBacklog() {
  return { schema: PILOT_FINDINGS_SCHEMA, updatedAt: nowIso(), items: [] }
}

export function readPilotFindingsBacklog(storage) {
  if (!storage) return createPilotFindingsBacklog()
  try {
    const raw = storage.getItem(PILOT_FINDINGS_STORAGE_KEY)
    if (!raw) return createPilotFindingsBacklog()
    return normalizePilotFindingsBacklog(JSON.parse(raw)) ?? createPilotFindingsBacklog()
  } catch {
    return createPilotFindingsBacklog()
  }
}

export function writePilotFindingsBacklog(storage, backlog) {
  const normalized = normalizePilotFindingsBacklog({ ...backlog, schema: PILOT_FINDINGS_SCHEMA, updatedAt: nowIso() })
  if (!normalized) throw new TypeError('Backlog pilota non valido.')
  if (storage) storage.setItem(PILOT_FINDINGS_STORAGE_KEY, JSON.stringify(normalized))
  return normalized
}

export function addPilotFinding(backlog, input) {
  const current = normalizePilotFindingsBacklog(backlog) ?? createPilotFindingsBacklog()
  return { ...current, updatedAt: nowIso(), items: [...current.items, createPilotFinding(input)] }
}

export function updatePilotFinding(backlog, id, patch) {
  const current = normalizePilotFindingsBacklog(backlog) ?? createPilotFindingsBacklog()
  return {
    ...current,
    updatedAt: nowIso(),
    items: current.items.map(item => item.id === id ? createPilotFinding({ ...item, ...patch, id: item.id, source: { ...item.source, ...(patch.source ?? {}) } }) : item).map(item => item.id === id ? { ...item, id, createdAt: current.items.find(candidate => candidate.id === id)?.createdAt ?? item.createdAt, updatedAt: nowIso() } : item),
  }
}

export function removePilotFinding(backlog, id) {
  const current = normalizePilotFindingsBacklog(backlog) ?? createPilotFindingsBacklog()
  return { ...current, updatedAt: nowIso(), items: current.items.filter(item => item.id !== id) }
}

const labelPriority = value => ({ bassa: 'Bassa', media: 'Media', alta: 'Alta' }[value] ?? value)
const labelStatus = value => ({ da_valutare: 'Da valutare', in_analisi: 'In analisi', pianificato: 'Pianificato', chiuso: 'Chiuso' }[value] ?? value)
const line = value => text(value) || 'Non indicato'

export function serializePilotFindingsBacklogMarkdown(backlog) {
  const current = normalizePilotFindingsBacklog(backlog) ?? createPilotFindingsBacklog()
  const counts = Object.fromEntries(PILOT_FINDING_STATUSES.map(status => [status, current.items.filter(item => item.status === status).length]))
  const lines = [
    '# Backlog dei miglioramenti dal test pilota', '',
    `- Voci totali: ${current.items.length}`,
    `- Da valutare: ${counts.da_valutare}`,
    `- In analisi: ${counts.in_analisi}`,
    `- Pianificate: ${counts.pianificato}`,
    `- Chiuse: ${counts.chiuso}`, '',
    '> Le priorità e le decisioni sono state definite manualmente. Nessuna classificazione automatica è stata applicata.', '',
  ]
  current.items.forEach((item, index) => {
    lines.push(
      `## ${index + 1}. ${line(item.title)}`, '',
      `- Priorità: ${labelPriority(item.priority)}`,
      `- Stato: ${labelStatus(item.status)}`,
      `- Tappa di origine: ${item.source.step ? `${item.source.step}. ${line(item.source.stepTitle)}` : 'Non indicata'}`,
      `- Fonte anonima: ${line(item.source.evaluationId)}`, '',
      line(item.description), '',
      `**Evidenza originale:** ${line(item.source.excerpt)}`, '',
      `**Motivazione:** ${line(item.rationale)}`, '',
      `**Decisione:** ${line(item.decision)}`, '',
    )
  })
  return lines.join('\n')
}
