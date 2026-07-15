export type LocalArchiveKind = 'annual-plan' | 'uda' | 'teacher-proposal' | 'department-item' | 'referent-validation'

export type LocalArchiveEntry = {
  id: string
  kind: LocalArchiveKind
  title: string
  context: string
  status: string
  updatedAt: string | null
  storageKey: string
}

export type LocalArchiveSnapshot = {
  scannedAt: string
  entries: LocalArchiveEntry[]
  errors: string[]
}

type UnknownRecord = Record<string, unknown>

const STORAGE_KEYS = {
  annual: 'cml-programmazione-annuale-v1',
  uda: 'cml-uda-essenziale-v1',
  proposals: 'curmanlight.teacher-proposal-drafts.v1',
  department: 'curmanlight.department-proposal-queue.v1',
  referent: 'curmanlight.referent-validations.v1',
} as const

export function readLocalArchive(storage: Storage = window.localStorage): LocalArchiveSnapshot {
  const entries: LocalArchiveEntry[] = []
  const errors: string[] = []

  readAnnualPlans(storage, entries, errors)
  readUdaDrafts(storage, entries, errors)
  readTeacherProposals(storage, entries, errors)
  readDepartmentItems(storage, entries, errors)
  readReferentValidations(storage, entries, errors)

  entries.sort((a, b) => (b.updatedAt ?? '').localeCompare(a.updatedAt ?? ''))
  return { scannedAt: new Date().toISOString(), entries, errors }
}

function parse(storage: Storage, key: string, errors: string[]): UnknownRecord | null {
  const raw = storage.getItem(key)
  if (!raw) return null
  try {
    const parsed = JSON.parse(raw)
    return isRecord(parsed) ? parsed : null
  } catch {
    errors.push(`Archivio non leggibile: ${key}`)
    return null
  }
}

function readAnnualPlans(storage: Storage, entries: LocalArchiveEntry[], errors: string[]) {
  const parsed = parse(storage, STORAGE_KEYS.annual, errors)
  if (!parsed) return
  const records = isRecord(parsed.plans)
    ? Object.entries(parsed.plans)
    : parsed.version === 'cml-programmazione-annuale-v1'
      ? [['legacy', parsed] as const]
      : []

  for (const [key, value] of records) {
    if (!isRecord(value)) continue
    entries.push({
      id: `annual:${key}`,
      kind: 'annual-plan',
      title: text(value.titolo) || 'Programmazione annuale',
      context: joinContext(value),
      status: 'Salvata',
      updatedAt: text(value.savedAt) || null,
      storageKey: STORAGE_KEYS.annual,
    })
  }
}

function readUdaDrafts(storage: Storage, entries: LocalArchiveEntry[], errors: string[]) {
  const parsed = parse(storage, STORAGE_KEYS.uda, errors)
  if (!parsed || !isRecord(parsed.drafts)) return
  for (const [key, value] of Object.entries(parsed.drafts)) {
    if (!isRecord(value)) continue
    entries.push({
      id: `uda:${key}`,
      kind: 'uda',
      title: text(value.titolo) || 'UDA essenziale',
      context: joinContext(value),
      status: 'Salvata',
      updatedAt: text(value.savedAt) || null,
      storageKey: STORAGE_KEYS.uda,
    })
  }
}

function readTeacherProposals(storage: Storage, entries: LocalArchiveEntry[], errors: string[]) {
  const parsed = parse(storage, STORAGE_KEYS.proposals, errors)
  if (!parsed || !isRecord(parsed.drafts)) return
  for (const [key, value] of Object.entries(parsed.drafts)) {
    if (!isRecord(value)) continue
    entries.push({
      id: `proposal:${key}`,
      kind: 'teacher-proposal',
      title: text(value.titolo) || text(value.unitaTitolo) || 'Proposta docente',
      context: [text(value.disciplina), text(value.ordine)].filter(Boolean).join(' · ') || 'Contesto non indicato',
      status: text(value.stato) || 'Bozza',
      updatedAt: text(value.updatedAt) || text(value.createdAt) || null,
      storageKey: STORAGE_KEYS.proposals,
    })
  }
}

function readDepartmentItems(storage: Storage, entries: LocalArchiveEntry[], errors: string[]) {
  const parsed = parse(storage, STORAGE_KEYS.department, errors)
  if (!parsed || !Array.isArray(parsed.items)) return
  parsed.items.forEach((value, index) => {
    if (!isRecord(value)) return
    const proposal = isRecord(value.proposal) ? value.proposal : {}
    const decision = isRecord(value.decision) ? value.decision : null
    entries.push({
      id: `department:${text(value.id) || index}`,
      kind: 'department-item',
      title: text(proposal.titolo) || text(proposal.unitaTitolo) || 'Proposta in Dipartimento',
      context: [text(value.discipline), text(value.ordine), text(value.annoScolastico)].filter(Boolean).join(' · ') || 'Contesto non indicato',
      status: decision ? `Decisione: ${text(decision.value) || 'registrata'}` : 'Da decidere',
      updatedAt: decision ? text(decision.decidedAt) || text(value.importedAt) || null : text(value.importedAt) || null,
      storageKey: STORAGE_KEYS.department,
    })
  })
}

function readReferentValidations(storage: Storage, entries: LocalArchiveEntry[], errors: string[]) {
  const parsed = parse(storage, STORAGE_KEYS.referent, errors)
  if (!parsed || !isRecord(parsed.validations)) return
  for (const [key, value] of Object.entries(parsed.validations)) {
    if (!isRecord(value)) continue
    entries.push({
      id: `referent:${key}`,
      kind: 'referent-validation',
      title: 'Validazione del Referente',
      context: key,
      status: text(value.value) || 'Registrata',
      updatedAt: text(value.validatedAt) || null,
      storageKey: STORAGE_KEYS.referent,
    })
  }
}

function joinContext(value: UnknownRecord) {
  return [text(value.disciplina), text(value.ordine), text(value.annoScolastico), text(value.classe)]
    .filter(Boolean)
    .join(' · ') || 'Contesto non indicato'
}

function isRecord(value: unknown): value is UnknownRecord {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

function text(value: unknown) {
  return typeof value === 'string' ? value.trim() : ''
}
