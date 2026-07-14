import type { ProposalItem } from '@/types/cml'
import type { Ordine } from '@/types/curriculum'

export type DepartmentDecisionValue = 'accettata' | 'respinta' | 'modificata' | 'rinviata'

export type DepartmentDecision = {
  value: DepartmentDecisionValue
  note: string
  testoModificato: string | null
  decidedAt: string
}

export type DepartmentDecisionInput = {
  value: DepartmentDecisionValue
  note?: string
  testoModificato?: string
}

export type DepartmentQueueItem = {
  id: string
  sourceFingerprint: string
  sourceFileName: string
  importedAt: string
  discipline: string
  ordine: Ordine
  annoScolastico: string
  author: string
  proposal: ProposalItem
  decision: DepartmentDecision | null
}

export type DepartmentQueueImportResult = {
  added: number
  skipped: number
}
