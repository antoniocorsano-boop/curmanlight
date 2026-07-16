import { downloadCml } from '@/lib/cml'
import type { CmlDepartmentOutcome, DepartmentHandlingValue, HandlingItem, ProposalItem } from '@/types/cml'
import type { OrdineEsteso } from '@/types/curriculum'
import type { DepartmentDecisionValue, DepartmentQueueItem } from '@/types/departmentQueue'

type SourceProposal = {
  queueItemId: string
  sourceFingerprint: string
  sourceFileName: string
  proposalId: string
  unitaId: string
  discipline: string
  ordine: DepartmentQueueItem['ordine']
  annoScolastico: string
  author: string
  testoAttuale: string
  testoProposto: string
  decisione: DepartmentDecisionValue
  testoFinale: string | null
  notaDipartimentale?: string
}

export type DepartmentOutcomeFile = CmlDepartmentOutcome & {
  sourceProposals: SourceProposal[]
  checks: {
    hasDecisions: true
    allModifiedHaveFinalText: true
    pendingExcluded: number
  }
}

export type DepartmentOutcomeReadiness = {
  decided: number
  pending: number
  invalid: number
  conflicts: number
  ready: boolean
}

type CompatibleProposalItem = ProposalItem & { id?: string }

function decisionIsComplete(item: DepartmentQueueItem) {
  if (!item.decision) return false
  return item.decision.value !== 'modificata' || Boolean(item.decision.testoModificato?.trim())
}

function conflictKey(item: DepartmentQueueItem) {
  return [item.discipline, item.ordine, item.annoScolastico, item.proposal.unitaId].join('::')
}

function isPositiveDecision(item: DepartmentQueueItem) {
  return item.decision?.value === 'accettata' || item.decision?.value === 'modificata'
}

export function getDepartmentConflictCount(items: DepartmentQueueItem[]) {
  const positiveByUnit = new Map<string, number>()
  for (const item of items) {
    if (!decisionIsComplete(item) || !isPositiveDecision(item)) continue
    const key = conflictKey(item)
    positiveByUnit.set(key, (positiveByUnit.get(key) ?? 0) + 1)
  }
  return [...positiveByUnit.values()].filter(count => count > 1).length
}

export function getDepartmentOutcomeReadiness(items: DepartmentQueueItem[]): DepartmentOutcomeReadiness {
  const decided = items.filter(decisionIsComplete).length
  const pending = items.filter(item => !item.decision).length
  const invalid = items.filter(item => item.decision && !decisionIsComplete(item)).length
  const conflicts = getDepartmentConflictCount(items)
  return { decided, pending, invalid, conflicts, ready: decided > 0 && invalid === 0 && conflicts === 0 }
}

function resolveOrder(items: DepartmentQueueItem[]): OrdineEsteso {
  const orders = new Set(items.map(item => item.ordine))
  return orders.size === 1 ? [...orders][0] : 'Tutti'
}

function resolveSchoolYear(items: DepartmentQueueItem[]) {
  const years = [...new Set(items.map(item => item.annoScolastico).filter(Boolean))]
  return years.length === 1 ? years[0] : years.join(', ')
}

function finalText(item: DepartmentQueueItem) {
  if (!item.decision) return null
  if (item.decision.value === 'accettata') return item.proposal.proposta
  if (item.decision.value === 'modificata') return item.decision.testoModificato
  if (item.decision.value === 'respinta') return item.proposal.testoAttuale
  return null
}

function referentHandling(value: DepartmentDecisionValue): DepartmentHandlingValue {
  if (value === 'accettata') return 'confluita_nella_sintesi'
  if (value === 'modificata') return 'riformulata_dal_dipartimento'
  if (value === 'respinta') return 'assorbita_in_altra_proposta'
  return 'da_chiarire'
}

function proposalIdentity(item: DepartmentQueueItem) {
  const proposal = item.proposal as CompatibleProposalItem
  return proposal.id?.trim() || proposal.unitaId
}

export function buildDepartmentOutcomeFile(items: DepartmentQueueItem[]): DepartmentOutcomeFile {
  const readiness = getDepartmentOutcomeReadiness(items)
  if (readiness.conflicts > 0) {
    throw new Error('Risolvi i conflitti tra decisioni positive sulla stessa unità prima di esportare.')
  }

  const decidedItems = items.filter(decisionIsComplete)
  if (decidedItems.length === 0) throw new Error('Non ci sono decisioni complete da esportare.')

  const disciplines = [...new Set(decidedItems.map(item => item.discipline))].sort()
  const discipline = disciplines.length === 1 ? disciplines[0] : 'Multidisciplinare'

  const proposalHandling: HandlingItem[] = decidedItems.map(item => ({
    proposalId: proposalIdentity(item),
    handling: referentHandling(item.decision!.value),
    note: item.decision!.note || undefined,
    testoModificato: item.decision!.value === 'modificata' ? item.decision!.testoModificato ?? undefined : undefined,
    timestamp: item.decision!.decidedAt,
  }))

  const summary = {
    totale: decidedItems.length,
    accettate: decidedItems.filter(item => item.decision!.value === 'accettata').length,
    respinte: decidedItems.filter(item => item.decision!.value === 'respinta').length,
    modificate: decidedItems.filter(item => item.decision!.value === 'modificata').length,
    rinviate: decidedItems.filter(item => item.decision!.value === 'rinviata').length,
  }

  return {
    schemaVersion: '1.0',
    fileType: 'department_outcome',
    appName: 'CurManLight',
    createdAt: new Date().toISOString(),
    role: 'department',
    discipline,
    disciplineWorkStatus: 'completed',
    disciplines,
    ordine: resolveOrder(decidedItems),
    annoScolastico: resolveSchoolYear(decidedItems),
    proposalHandling,
    summary,
    sourceProposals: decidedItems.map(item => ({
      queueItemId: item.id,
      sourceFingerprint: item.sourceFingerprint,
      sourceFileName: item.sourceFileName,
      proposalId: proposalIdentity(item),
      unitaId: item.proposal.unitaId,
      discipline: item.discipline,
      ordine: item.ordine,
      annoScolastico: item.annoScolastico,
      author: item.author,
      testoAttuale: item.proposal.testoAttuale,
      testoProposto: item.proposal.proposta,
      decisione: item.decision!.value,
      testoFinale: finalText(item),
      notaDipartimentale: item.decision!.note || undefined,
    })),
    checks: {
      hasDecisions: true,
      allModifiedHaveFinalText: true,
      pendingExcluded: items.length - decidedItems.length,
    },
    humanValidationRequired: true,
  }
}

function safeFilePart(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 56)
}

export function departmentOutcomeFilename(items: DepartmentQueueItem[]) {
  const decidedItems = items.filter(decisionIsComplete)
  const disciplines = [...new Set(decidedItems.map(item => item.discipline))]
  const discipline = disciplines.length === 1 ? safeFilePart(disciplines[0]) : 'multidisciplinare'
  const year = safeFilePart(resolveSchoolYear(decidedItems)) || 'anno-scolastico'
  return `curmanlight-esito-dipartimento-${discipline}-${year}.cml`
}

export function downloadDepartmentOutcome(items: DepartmentQueueItem[]) {
  downloadCml(buildDepartmentOutcomeFile(items), departmentOutcomeFilename(items))
}
