import type { Ordine } from './curriculum'

export type ProposalTargetField =
  | 'traguardo'
  | 'competenza'
  | 'obiettivi'
  | 'conoscenze'
  | 'abilita'
  | 'evidenze'
  | 'criteriValutazione'

export type TeacherProposalDraft = {
  id: string
  unitaId: string
  disciplina: string
  ordine: Ordine
  nucleo: string
  targetField: ProposalTargetField
  testoVigente: string
  testoProposto: string
  motivazione: string
  fonte: string
  note: string
  stato: 'bozza'
  createdAt: string
  updatedAt: string
}

export type TeacherProposalDraftInput = Omit<TeacherProposalDraft, 'id' | 'stato' | 'createdAt' | 'updatedAt'>
