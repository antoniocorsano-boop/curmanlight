import type { Ordine, UnitaApprendimento } from './curriculum'
import type { Decisione, GapStatus, GapTargetField, Ruolo } from './gap'
import type { CurriculumFieldValue } from '@/lib/field-decision'

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
  targetField: GapTargetField
  ruoloDichiarato: Ruolo
  ambitoDecisione: DecisionScope
  statoGap: GapStatus
  versioneCurricolare: string
  fonteVigente: string
  fonteProposta: string
}

export interface FieldDecisionSnapshot {
  targetField: GapTargetField
  valoreVigente: CurriculumFieldValue
  valoreProposto: CurriculumFieldValue
  valoreDeciso: CurriculumFieldValue | null
  fotografiaUnita: UnitaApprendimento | null
}

export interface WorkDecision {
  id: string
  unitaId: string
  outcome: DecisionOutcome
  testoFinale: string | null
  fieldDecision: FieldDecisionSnapshot | null
  motivazione: string | null
  note: string | null
  timestamp: string
  autore: string | null
  ruolo: Ruolo
  ambitoDecisione: DecisionScope
  contesto: DecisionContext
  decisionePrecedenteId: string | null
}

export type WorkDecisionMap = Record<string, WorkDecision>

export interface RecordWorkDecisionInput {
  outcome: Exclude<DecisionOutcome, 'reopened'>
  contesto: DecisionContext
  testoFinale?: string | null
  fieldDecision: FieldDecisionSnapshot
  motivazione?: string | null
  note?: string | null
  autore?: string | null
}

export function toLegacyDecision(decision: WorkDecision): Decisione | null {
  if (decision.outcome === 'reopened' || decision.outcome === 'revision_requested') return null
  return {
    unitaId: decision.unitaId,
    decisione: decision.outcome === 'kept_current' ? 'rifiutata' : 'approvata',
    testoFinale: decision.testoFinale,
    timestamp: decision.timestamp,
    autore: decision.autore ?? undefined,
    ruolo: decision.ruolo,
    note: decision.note ?? undefined,
  }
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
