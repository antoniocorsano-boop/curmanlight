import { Check, RotateCcw, X } from 'lucide-react'
import { useRevisioneStore } from '@/stores/useRevisioneStore'
import { canPerformDecisionAction, getDecisionScopeForRole } from '@/lib/decision-policy'
import type { DecisionAction, DecisionContext, DecisionPermissionReason } from '@/types/decision'
import type { UnitaApprendimento } from '@/types/curriculum'
import type { Decisione, GapEntry, ProfiloUtente } from '@/types/gap'

const PERMISSION_MESSAGES: Record<DecisionPermissionReason, string> = {
  allowed: '',
  missing_profile: 'Configura ruolo e ordine di scuola per registrare una scelta.',
  role_not_allowed: 'Il ruolo selezionato può consultare il confronto, ma non registrare scelte in questa fase.',
  missing_order: 'Seleziona un ordine di scuola specifico nel profilo.',
  order_mismatch: 'L’ordine di scuola del profilo non coincide con quello della proposta.',
  discipline_mismatch: 'La disciplina del profilo non coincide con quella della proposta.',
  scope_mismatch: 'Il contesto di lavoro non è coerente con il ruolo selezionato.',
  entry_mismatch: 'I dati della proposta non coincidono con il contesto decisionale.',
  status_not_actionable: 'Questo contenuto è consultabile, ma non richiede una scelta in B03.',
  missing_context_data: 'Mancano informazioni necessarie per registrare la scelta.',
  save_in_progress: 'Salvataggio in corso. Attendi il completamento dell’operazione.',
}

function buildDecisionContext(
  unita: UnitaApprendimento,
  entry: GapEntry,
  profilo: ProfiloUtente | null,
): DecisionContext {
  const ruolo = profilo?.ruolo ?? 'consultatore'
  return {
    disciplina: unita.disciplina,
    ordine: unita.ordine,
    nucleo: unita.nucleo,
    unitaId: unita.id,
    ruoloDichiarato: ruolo,
    ambitoDecisione: getDecisionScopeForRole(ruolo) ?? 'lavoro_personale',
    statoGap: entry.status,
    versioneCurricolare: 'IN 2012 → IN 2025',
    fonteVigente: unita.fonte,
    fonteProposta: 'Indicazioni Nazionali 2025',
  }
}

export function DecisioneActions({
  unita,
  entry,
  decisione,
  profilo,
}: {
  unita: UnitaApprendimento
  entry: GapEntry
  decisione: Decisione | undefined
  profilo: ProfiloUtente | null
}) {
  const { approve, reject, undoDecision } = useRevisioneStore()
  const context = buildDecisionContext(unita, entry, profilo)

  const permissionFor = (action: DecisionAction) =>
    canPerformDecisionAction(profilo, context, entry, action)

  const runAllowed = (action: DecisionAction, operation: () => void) => {
    const permission = permissionFor(action)
    if (permission.allowed) operation()
  }

  if (decisione?.decisione) {
    const reopenPermission = permissionFor('reopened')
    return (
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className={`text-xs font-[500] ${decisione.decisione === 'approvata' ? 'text-emerald-700' : 'text-slate-600'}`}>
            {decisione.decisione === 'approvata' ? 'Proposta accolta nel lavoro corrente' : 'Testo vigente mantenuto'}
          </span>
          <button
            type="button"
            disabled={!reopenPermission.allowed}
            title={PERMISSION_MESSAGES[reopenPermission.reason]}
            onClick={() => runAllowed('reopened', () => undoDecision(entry.unitaId))}
            className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-slate-700 underline disabled:no-underline disabled:cursor-not-allowed disabled:opacity-50"
          >
            <RotateCcw size={12} /> Riapri
          </button>
        </div>
        {!reopenPermission.allowed && (
          <p className="text-xs text-amber-700" role="status">{PERMISSION_MESSAGES[reopenPermission.reason]}</p>
        )}
      </div>
    )
  }

  const acceptPermission = permissionFor('accepted_proposal')
  const keepPermission = permissionFor('kept_current')
  const sharedReason = !acceptPermission.allowed
    ? PERMISSION_MESSAGES[acceptPermission.reason]
    : !keepPermission.allowed
      ? PERMISSION_MESSAGES[keepPermission.reason]
      : ''

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          disabled={!acceptPermission.allowed}
          title={PERMISSION_MESSAGES[acceptPermission.reason]}
          onClick={() => runAllowed('accepted_proposal', () => approve(entry.unitaId))}
          className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-[500] rounded-md bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors disabled:cursor-not-allowed disabled:opacity-50"
        >
          <Check size={13} /> Accogli proposta
        </button>
        <button
          type="button"
          disabled={!keepPermission.allowed}
          title={PERMISSION_MESSAGES[keepPermission.reason]}
          onClick={() => runAllowed('kept_current', () => reject(entry.unitaId))}
          className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-[500] rounded-md bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors disabled:cursor-not-allowed disabled:opacity-50"
        >
          <X size={13} /> Mantieni vigente
        </button>
      </div>
      {sharedReason && <p className="text-xs text-amber-700" role="status">{sharedReason}</p>}
    </div>
  )
}
