import type { ProposalItem } from '@/types/cml'
import type { Ordine } from '@/types/curriculum'

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
}

export type DepartmentQueueImportResult = {
  added: number
  skipped: number
}
