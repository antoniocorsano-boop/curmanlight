export const DECISION_STORAGE_KEY = 'curmanlight:product-decision-register:v1'
export const DECISION_SCHEMA = 'cml-product-decision-register-v1'

export const DECISION_CATEGORIES = [
  'UX',
  'Funzionalità',
  'Contenuti',
  'Architettura',
  'Accessibilità',
  'Prestazioni',
  'Documentazione',
  'Processo',
]

export const DECISION_AREAS = [
  'Home',
  'Curricolo',
  'Laboratorio',
  'Guida',
  'Esportazione',
  'Runtime',
  'React',
  'Documentazione',
  'Altro',
]

export const DECISION_PRIORITIES = ['bassa', 'media', 'alta', 'critical']

export const DECISION_STATUSES = [
  'proposto',
  'approvato',
  'pianificato',
  'in_sviluppo',
  'in_verifica',
  'completato',
  'archiviato',
]

const nowIso = () => new Date().toISOString()
const makeId = () => globalThis.crypto?.randomUUID?.() ?? `decision-${Date.now()}-${Math.random().toString(16).slice(2)}`
const text = value => (typeof value === 'string' ? value.trim() : '')
const uniqStrings = value => {
  const list = Array.isArray(value) ? value.filter(item => typeof item === 'string' && item.trim()) : []
  return [...new Set(list.map(item => item.trim()))]
}

export function createDecision(input = {}) {
  const now = nowIso()
  const status = DECISION_STATUSES.includes(input.status) ? input.status : 'proposto'
  const shouldClose = status === 'completato' || status === 'archiviato'
  return {
    id: makeId(),
    createdAt: now,
    updatedAt: now,
    pilotFindingIds: uniqStrings(input.pilotFindingIds),
    title: text(input.title) || 'Nuova decisione di prodotto',
    description: text(input.description),
    category: DECISION_CATEGORIES.includes(input.category) ? input.category : 'Funzionalità',
    area: DECISION_AREAS.includes(input.area) ? input.area : 'Altro',
    priority: DECISION_PRIORITIES.includes(input.priority) ? input.priority : 'media',
    status,
    rationale: text(input.rationale),
    decision: text(input.decision),
    implementationNotes: text(input.implementationNotes),
    verificationNotes: text(input.verificationNotes),
    plannedVersion: text(input.plannedVersion),
    implementedVersion: text(input.implementedVersion),
    branchName: text(input.branchName),
    pullRequest: text(input.pullRequest),
    mergeCommit: text(input.mergeCommit),
    publishedVersion: text(input.publishedVersion),
    publishedAt: text(input.publishedAt),
    closedAt: shouldClose ? (text(input.closedAt) || now) : '',
  }
}

export function normalizeDecisionRegister(value) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return null
  if (value.schema !== DECISION_SCHEMA || !Array.isArray(value.items)) return null
  const items = value.items.flatMap(item => {
    if (!item || typeof item !== 'object' || !text(item.id)) return []
    const normalized = createDecision(item)
    return [{
      ...normalized,
      id: text(item.id),
      createdAt: text(item.createdAt) || normalized.createdAt,
      updatedAt: text(item.updatedAt) || normalized.updatedAt,
    }]
  })
  return { schema: DECISION_SCHEMA, updatedAt: text(value.updatedAt) || nowIso(), items }
}

export function createDecisionRegister() {
  return { schema: DECISION_SCHEMA, updatedAt: nowIso(), items: [] }
}

export function readDecisionRegister(storage) {
  if (!storage) return createDecisionRegister()
  try {
    const raw = storage.getItem(DECISION_STORAGE_KEY)
    if (!raw) return createDecisionRegister()
    return normalizeDecisionRegister(JSON.parse(raw)) ?? createDecisionRegister()
  } catch {
    return createDecisionRegister()
  }
}

export function writeDecisionRegister(storage, register) {
  const normalized = normalizeDecisionRegister({ ...register, schema: DECISION_SCHEMA, updatedAt: nowIso() })
  if (!normalized) throw new TypeError('Registro decisioni non valido.')
  if (storage) storage.setItem(DECISION_STORAGE_KEY, JSON.stringify(normalized))
  return normalized
}

export function updateDecision(register, id, patch) {
  const current = normalizeDecisionRegister(register) ?? createDecisionRegister()
  const updatedAt = nowIso()
  return {
    ...current,
    updatedAt,
    items: current.items.map(item => {
      if (item.id !== id) return item
      const next = { ...item, ...patch, id: item.id, createdAt: item.createdAt, updatedAt }
      if (Array.isArray(patch.pilotFindingIds)) next.pilotFindingIds = uniqStrings(patch.pilotFindingIds)
      const closed = next.status === 'completato' || next.status === 'archiviato'
      if (!closed) next.closedAt = ''
      else if (!text(next.closedAt)) next.closedAt = updatedAt
      return next
    }),
  }
}

export function deleteDecision(register, id) {
  const current = normalizeDecisionRegister(register) ?? createDecisionRegister()
  return { ...current, updatedAt: nowIso(), items: current.items.filter(item => item.id !== id) }
}

const labelCategory = value => value
const labelArea = value => value
const labelPriority = value => ({ bassa: 'Bassa', media: 'Media', alta: 'Alta', critical: 'Critica' }[value] ?? value)
const labelStatus = value => ({
  proposto: 'Proposto',
  approvato: 'Approvato',
  pianificato: 'Pianificato',
  in_sviluppo: 'In sviluppo',
  in_verifica: 'In verifica',
  completato: 'Completato',
  archiviato: 'Archiviato',
}[value] ?? value)
const line = value => text(value) || 'Non indicato'

export function serializeDecisionRegisterMarkdown(register, findingsById = {}) {
  const current = normalizeDecisionRegister(register) ?? createDecisionRegister()
  const counts = Object.fromEntries(DECISION_STATUSES.map(status => [status, current.items.filter(item => item.status === status).length]))
  const lines = [
    '# Registro delle decisioni di prodotto', '',
    `- Decisioni totali: ${current.items.length}`,
    `- Proposte: ${counts.proposto}`,
    `- Approvate: ${counts.approvato}`,
    `- Pianificate: ${counts.pianificato}`,
    `- In sviluppo: ${counts.in_sviluppo}`,
    `- In verifica: ${counts.in_verifica}`,
    `- Completate: ${counts.completato}`,
    `- Archiviate: ${counts.archiviato}`, '',
    '> Le decisioni sono tracciate e validate manualmente. Nessuna classificazione automatica è stata applicata.', '',
  ]
  current.items.forEach((item, index) => {
    const origins = item.pilotFindingIds
      .map(findingId => {
        const finding = findingsById[findingId]
        if (!finding) return null
        return `- ${line(finding.title)}${finding.excerpt ? ` — ${line(finding.excerpt)}` : ''}`
      })
      .filter(Boolean)
    lines.push(
      `## ${index + 1}. ${line(item.title)}`, '',
      `- Categoria: ${labelCategory(item.category)}`,
      `- Area: ${labelArea(item.area)}`,
      `- Priorità: ${labelPriority(item.priority)}`,
      `- Stato: ${labelStatus(item.status)}`, '',
      `**Origine (PilotFinding collegate):**`,
      origins.length ? origins.join('\n') : '  Nessuna osservazione pilota collegata.', '',
      `**Descrizione:** ${line(item.description)}`, '',
      `**Motivazione:** ${line(item.rationale)}`, '',
      `**Decisione:** ${line(item.decision)}`, '',
      `**Intervento CML:** ${line(item.implementationNotes)}`, '',
      `**Verifica:** ${line(item.verificationNotes)}`, '',
      `- Versione prevista: ${line(item.plannedVersion)}`,
      `- Versione implementata: ${line(item.implementedVersion)}`,
      `- Versione pubblicata: ${line(item.publishedVersion)}`,
      `- Pubblicata il: ${line(item.publishedAt)}`, '',
      item.branchName || item.pullRequest || item.mergeCommit ? [
        '- Tracciamento:',
        item.branchName ? `  - Branch: ${line(item.branchName)}` : null,
        item.pullRequest ? `  - Pull request: ${line(item.pullRequest)}` : null,
        item.mergeCommit ? `  - Merge commit: ${line(item.mergeCommit)}` : null,
      ].filter(Boolean).join('\n') : '  - Tracciamento: non indicato', '',
    )
  })
  return lines.join('\n')
}
