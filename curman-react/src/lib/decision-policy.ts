import type { GapEntry, GapStatus, ProfiloUtente, Ruolo } from '@/types/gap'
import type {
  DecisionAction,
  DecisionContext,
  DecisionPermission,
  DecisionScope,
} from '@/types/decision'

const ACTIONABLE_STATUSES: ReadonlySet<GapStatus> = new Set(['proposta', 'non_validato'])
const DECISION_ROLES: ReadonlySet<Ruolo> = new Set(['docente', 'dipartimento'])

export function isDecisionActionableStatus(status: GapStatus): boolean {
  return ACTIONABLE_STATUSES.has(status)
}

export function getDecisionScopeForRole(ruolo: Ruolo): DecisionScope | null {
  if (ruolo === 'docente') return 'lavoro_personale'
  if (ruolo === 'dipartimento') return 'lavoro_dipartimentale'
  return null
}

function hasRequiredContextData(context: DecisionContext): boolean {
  return [
    context.disciplina,
    context.ordine,
    context.nucleo,
    context.unitaId,
    context.versioneCurricolare,
    context.fonteVigente,
    context.fonteProposta,
  ].every(value => value.trim().length > 0)
}

export function canPerformDecisionAction(
  profile: ProfiloUtente | null,
  context: DecisionContext,
  entry: GapEntry,
  _action: DecisionAction,
  isSaving = false,
): DecisionPermission {
  if (!profile) return { allowed: false, reason: 'missing_profile' }
  if (!DECISION_ROLES.has(profile.ruolo)) return { allowed: false, reason: 'role_not_allowed' }
  if (profile.ordine === 'Tutti') return { allowed: false, reason: 'missing_order' }
  if (profile.ordine !== context.ordine) return { allowed: false, reason: 'order_mismatch' }
  if (profile.disciplina.trim().length > 0 && profile.disciplina !== context.disciplina) {
    return { allowed: false, reason: 'discipline_mismatch' }
  }

  const expectedScope = getDecisionScopeForRole(profile.ruolo)
  if (!expectedScope || context.ambitoDecisione !== expectedScope || context.ruoloDichiarato !== profile.ruolo) {
    return { allowed: false, reason: 'scope_mismatch' }
  }
  if (entry.unitaId !== context.unitaId || entry.status !== context.statoGap) {
    return { allowed: false, reason: 'entry_mismatch' }
  }
  if (!isDecisionActionableStatus(entry.status)) {
    return { allowed: false, reason: 'status_not_actionable' }
  }
  if (!hasRequiredContextData(context)) {
    return { allowed: false, reason: 'missing_context_data' }
  }
  if (isSaving) return { allowed: false, reason: 'save_in_progress' }

  return { allowed: true, reason: 'allowed' }
}
