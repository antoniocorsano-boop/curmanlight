export type PilotFindingPriority = 'bassa' | 'media' | 'alta'
export type PilotFindingStatus = 'da_valutare' | 'in_analisi' | 'pianificato' | 'chiuso'
export type PilotFinding = {
  id: string
  createdAt: string
  updatedAt: string
  title: string
  description: string
  source: { step: number | null; stepTitle: string; evaluationId: string; excerpt: string }
  priority: PilotFindingPriority
  status: PilotFindingStatus
  rationale: string
  decision: string
}
export type PilotFindingsBacklog = { schema: 'cml-pilot-findings-backlog-v1'; updatedAt: string; items: PilotFinding[] }
export const PILOT_FINDINGS_STORAGE_KEY: string
export const PILOT_FINDINGS_SCHEMA: 'cml-pilot-findings-backlog-v1'
export const PILOT_FINDING_PRIORITIES: PilotFindingPriority[]
export const PILOT_FINDING_STATUSES: PilotFindingStatus[]
export function createPilotFinding(input?: Partial<PilotFinding>): PilotFinding
export function normalizePilotFindingsBacklog(value: unknown): PilotFindingsBacklog | null
export function createPilotFindingsBacklog(): PilotFindingsBacklog
export function readPilotFindingsBacklog(storage?: Storage | null): PilotFindingsBacklog
export function writePilotFindingsBacklog(storage: Storage | null | undefined, backlog: PilotFindingsBacklog): PilotFindingsBacklog
export function addPilotFinding(backlog: PilotFindingsBacklog, input: Partial<PilotFinding>): PilotFindingsBacklog
export function updatePilotFinding(backlog: PilotFindingsBacklog, id: string, patch: Partial<PilotFinding>): PilotFindingsBacklog
export function removePilotFinding(backlog: PilotFindingsBacklog, id: string): PilotFindingsBacklog
export function serializePilotFindingsBacklogMarkdown(backlog: PilotFindingsBacklog): string
