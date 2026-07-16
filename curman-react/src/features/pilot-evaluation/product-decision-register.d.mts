export type DecisionCategory =
  | 'UX'
  | 'Funzionalità'
  | 'Contenuti'
  | 'Architettura'
  | 'Accessibilità'
  | 'Prestazioni'
  | 'Documentazione'
  | 'Processo'

export type DecisionArea =
  | 'Home'
  | 'Curricolo'
  | 'Laboratorio'
  | 'Guida'
  | 'Esportazione'
  | 'Runtime'
  | 'React'
  | 'Documentazione'
  | 'Altro'

export type DecisionPriority = 'bassa' | 'media' | 'alta' | 'critical'

export type DecisionStatus =
  | 'proposto'
  | 'approvato'
  | 'pianificato'
  | 'in_sviluppo'
  | 'in_verifica'
  | 'completato'
  | 'archiviato'

export type DecisionRecord = {
  id: string
  createdAt: string
  updatedAt: string
  pilotFindingIds: string[]
  title: string
  description: string
  category: DecisionCategory
  area: DecisionArea
  priority: DecisionPriority
  status: DecisionStatus
  rationale: string
  decision: string
  implementationNotes: string
  verificationNotes: string
  plannedVersion: string
  implementedVersion: string
  branchName: string
  pullRequest: string
  mergeCommit: string
  publishedVersion: string
  publishedAt: string
  closedAt: string
}

export type DecisionRegister = {
  schema: 'cml-product-decision-register-v1'
  updatedAt: string
  items: DecisionRecord[]
}

export const DECISION_STORAGE_KEY: string
export const DECISION_SCHEMA: 'cml-product-decision-register-v1'

export const DECISION_CATEGORIES: DecisionCategory[]
export const DECISION_AREAS: DecisionArea[]
export const DECISION_PRIORITIES: DecisionPriority[]
export const DECISION_STATUSES: DecisionStatus[]

export function createDecision(input?: Partial<DecisionRecord>): DecisionRecord
export function normalizeDecisionRegister(value: unknown): DecisionRegister | null
export function createDecisionRegister(): DecisionRegister
export function readDecisionRegister(storage?: Storage | null): DecisionRegister
export function writeDecisionRegister(storage: Storage | null | undefined, register: DecisionRegister): DecisionRegister
export function updateDecision(register: DecisionRegister, id: string, patch: Partial<DecisionRecord>): DecisionRegister
export function deleteDecision(register: DecisionRegister, id: string): DecisionRegister
export function serializeDecisionRegisterMarkdown(register: DecisionRegister, findingsById?: Record<string, { title: string; excerpt: string }>): string
