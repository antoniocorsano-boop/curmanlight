import type { Ordine } from './curriculum'
import type { GapStatus, Ruolo } from './gap'

export type DecisionScope = 'lavoro_personale' | 'lavoro_dipartimentale'

export type DecisionOutcome =
  | 'accepted_proposal'
  | 'kept_current'
  | 'revision_requested'
  | 'accepted_custom'
  | 'reopened'

export type DecisionAction = DecisionOutcome

export interface DecisionContext {
  disciplina: string
  ordine: Ordine
  nucleo: string
  unitaId: string
  ruoloDichiarato: Ruolo
  ambitoDecisione: DecisionScope
  statoGap: GapStatus
  versioneCurricolare: string
  fonteVigente: string
  fonteProposta: string
}

export interface WorkDecision {
  id: string
  unitaId: string
  outcome: DecisionOutcome
  testoFinale: string | null
  motivazione: string | null
  note: string | null
  timestamp: string
  autore: string | null
  ruolo: Ruolo
  ambitoDecisione: DecisionScope
  contesto: DecisionContext
  decisionePrecedenteId: string | null
}

export type DecisionPermissionReason =
  | 'allowed'
  | 'missing_profile'
  | 'role_not_allowed'
  | 'missing_order'
  | 'order_mismatch'
  | 'discipline_mismatch'
  | 'scope_mismatch'
  | 'entry_mismatch'
  | 'status_not_actionable'
  | 'missing_context_data'
  | 'save_in_progress'

export interface DecisionPermission {
  allowed: boolean
  reason: DecisionPermissionReason
}
