import { useState } from 'react'
import { Check, MessageSquareText, PencilLine, RotateCcw, X } from 'lucide-react'
import { useRevisioneStore } from '@/stores/useRevisioneStore'
import { canPerformDecisionAction, getDecisionScopeForRole } from '@/lib/decision-policy'
import { composeUnitText } from '@/lib/gap-fields'
import type { DecisionAction, DecisionContext, DecisionPermissionReason, WorkDecision } from '@/types/decision'
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

const OUTCOME_MESSAGES: Record<WorkDecision['outcome'], string> = {
  accepted_proposal: 'Proposta accolta nel lavoro corrente',
  kept_current: 'Testo vigente mantenuto',
  revision_requested: 'Revisione richiesta prima della scelta finale',
  accepted_custom: 'Testo personalizzato registrato nel lavoro corrente',
  reopened: 'Scelta riaperta',
}

function buildDecisionContext(unita: UnitaApprendimento, entry: GapEntry, profilo: ProfiloUtente | null): DecisionContext {
  const ruolo = profilo?.ruolo ?? 'consultatore'
  return {
    disciplina: unita.disciplina,
    ordine: unita.ordine,
    nucleo: unita.nucleo,
    unitaId: unita.id,
    targetField: entry.targetField,
    ruoloDichiarato: ruolo,
    ambitoDecisione: getDecisionScopeForRole(ruolo) ?? 'lavoro_personale',
    statoGap: entry.status,
    versioneCurricolare: 'IN 2012 → IN 2025',
    fonteVigente: unita.fonte,
    fonteProposta: 'Indicazioni Nazionali 2025',
  }
}

export function DecisioneActions({ unita, entry, decisione, profilo }: {
  unita: UnitaApprendimento
  entry: GapEntry
  decisione: Decisione | undefined
  profilo: ProfiloUtente | null
}) {
  const recordWorkDecision = useRevisioneStore(s => s.recordWorkDecision)
  const reopenWorkDecision = useRevisioneStore(s => s.reopenWorkDecision)
  const workDecision = useRevisioneStore(s => s.workDecisioni[entry.unitaId])
  const [editorMode, setEditorMode] = useState<'revision' | 'custom' | null>(null)
  const [revisionReason, setRevisionReason] = useState('')
  const [customText, setCustomText] = useState(entry.proposto)
  const [customNote, setCustomNote] = useState('')
  const context = buildDecisionContext(unita, entry, profilo)

  const permissionFor = (action: DecisionAction) => canPerformDecisionAction(profilo, context, entry, action)
  const runAllowed = (action: DecisionAction, operation: () => void) => {
    if (permissionFor(action).allowed) operation()
  }

  const activeWorkDecision = workDecision?.outcome !== 'reopened' ? workDecision : undefined
  const hasRecordedDecision = Boolean(activeWorkDecision || decisione?.decisione)

  if (hasRecordedDecision) {
    const reopenPermission = permissionFor('reopened')
    const message = activeWorkDecision
      ? OUTCOME_MESSAGES[activeWorkDecision.outcome]
      : decisione?.decisione === 'approvata' ? 'Proposta accolta nel lavoro corrente' : 'Testo vigente mantenuto'
    const detail = activeWorkDecision?.outcome === 'revision_requested' ? activeWorkDecision.motivazione : null

    return (
      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <span className={`text-xs font-[500] ${activeWorkDecision?.outcome === 'revision_requested' ? 'text-amber-700' : decisione?.decisione === 'rifiutata' ? 'text-slate-600' : 'text-emerald-700'}`}>{message}</span>
          <button type="button" disabled={!reopenPermission.allowed} title={PERMISSION_MESSAGES[reopenPermission.reason]}
            onClick={() => runAllowed('reopened', () => reopenWorkDecision(entry.unitaId, context))}
            className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-slate-700 underline disabled:no-underline disabled:cursor-not-allowed disabled:opacity-50">
            <RotateCcw size={12} /> Riapri
          </button>
        </div>
        {detail && <p className="text-xs leading-5 text-slate-600">{detail}</p>}
        {!reopenPermission.allowed && <p className="text-xs text-amber-700" role="status">{PERMISSION_MESSAGES[reopenPermission.reason]}</p>}
      </div>
    )
  }

  const acceptPermission = permissionFor('accepted_proposal')
  const keepPermission = permissionFor('kept_current')
  const revisionPermission = permissionFor('revision_requested')
  const customPermission = permissionFor('accepted_custom')
  const firstDenied = [acceptPermission, keepPermission, revisionPermission, customPermission].find(permission => !permission.allowed)
  const sharedReason = firstDenied ? PERMISSION_MESSAGES[firstDenied.reason] : ''

  const record = (outcome: 'accepted_proposal' | 'kept_current' | 'accepted_custom', replacement: string, note?: string | null) => {
    runAllowed(outcome, () => recordWorkDecision({
      outcome,
      contesto: context,
      testoFinale: composeUnitText(unita, entry.targetField, replacement),
      motivazione: entry.motivazione ?? null,
      note: note ?? entry.note ?? null,
      autore: profilo?.nome ?? null,
    }))
  }

  const submitRevisionRequest = () => {
    const motivazione = revisionReason.trim()
    if (!motivazione) return
    runAllowed('revision_requested', () => recordWorkDecision({
      outcome: 'revision_requested', contesto: context, testoFinale: null, motivazione,
      note: entry.note ?? null, autore: profilo?.nome ?? null,
    }))
    setEditorMode(null)
    setRevisionReason('')
  }

  const submitCustomText = () => {
    const value = customText.trim()
    if (!value) return
    record('accepted_custom', value, customNote.trim() || null)
    setEditorMode(null)
    setCustomNote('')
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap items-center gap-2">
        <button type="button" disabled={!acceptPermission.allowed} title={PERMISSION_MESSAGES[acceptPermission.reason]}
          onClick={() => record('accepted_proposal', entry.proposto)}
          className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-[500] rounded-md bg-emerald-50 text-emerald-700 hover:bg-emerald-100 disabled:cursor-not-allowed disabled:opacity-50">
          <Check size={13} /> Accogli proposta
        </button>
        <button type="button" disabled={!keepPermission.allowed} title={PERMISSION_MESSAGES[keepPermission.reason]}
          onClick={() => record('kept_current', entry.testoOriginale)}
          className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-[500] rounded-md bg-slate-100 text-slate-700 hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-50">
          <X size={13} /> Mantieni vigente
        </button>
        <button type="button" disabled={!revisionPermission.allowed} title={PERMISSION_MESSAGES[revisionPermission.reason]}
          onClick={() => setEditorMode(editorMode === 'revision' ? null : 'revision')}
          className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-[500] rounded-md bg-amber-50 text-amber-700 hover:bg-amber-100 disabled:cursor-not-allowed disabled:opacity-50">
          <MessageSquareText size={13} /> Chiedi revisione
        </button>
        <button type="button" disabled={!customPermission.allowed} title={PERMISSION_MESSAGES[customPermission.reason]}
          onClick={() => setEditorMode(editorMode === 'custom' ? null : 'custom')}
          className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-[500] rounded-md bg-indigo-50 text-indigo-700 hover:bg-indigo-100 disabled:cursor-not-allowed disabled:opacity-50">
          <PencilLine size={13} /> Personalizza il campo
        </button>
      </div>

      {editorMode === 'revision' && (
        <div className="rounded-lg border border-amber-200 bg-amber-50/60 p-3 flex flex-col gap-2">
          <label className="text-xs font-[600] text-amber-800" htmlFor={`revision-${entry.unitaId}`}>Motivo della revisione richiesta</label>
          <textarea id={`revision-${entry.unitaId}`} value={revisionReason} onChange={event => setRevisionReason(event.target.value)} rows={3}
            className="w-full rounded-md border border-amber-200 bg-white px-3 py-2 text-sm" />
          <div className="flex justify-end gap-2">
            <button type="button" onClick={() => setEditorMode(null)} className="px-3 py-1.5 text-xs text-slate-600">Annulla</button>
            <button type="button" disabled={!revisionReason.trim()} onClick={submitRevisionRequest} className="rounded-md bg-amber-600 px-3 py-1.5 text-xs font-[600] text-white disabled:opacity-50">Registra richiesta</button>
          </div>
        </div>
      )}

      {editorMode === 'custom' && (
        <div className="rounded-lg border border-indigo-200 bg-indigo-50/50 p-3 flex flex-col gap-2">
          <label className="text-xs font-[600] text-indigo-800" htmlFor={`custom-${entry.unitaId}`}>Testo personalizzato per il campo {entry.targetField}</label>
          <textarea id={`custom-${entry.unitaId}`} value={customText} onChange={event => setCustomText(event.target.value)} rows={5}
            className="w-full rounded-md border border-indigo-200 bg-white px-3 py-2 text-sm" />
          <label className="text-xs font-[500] text-slate-600" htmlFor={`custom-note-${entry.unitaId}`}>Nota facoltativa</label>
          <textarea id={`custom-note-${entry.unitaId}`} value={customNote} onChange={event => setCustomNote(event.target.value)} rows={2}
            className="w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm" />
          <div className="flex justify-end gap-2">
            <button type="button" onClick={() => setEditorMode(null)} className="px-3 py-1.5 text-xs text-slate-600">Annulla</button>
            <button type="button" disabled={!customText.trim()} onClick={submitCustomText} className="rounded-md bg-indigo-600 px-3 py-1.5 text-xs font-[600] text-white disabled:opacity-50">Registra testo</button>
          </div>
        </div>
      )}

      {sharedReason && <p className="text-xs text-amber-700" role="status">{sharedReason}</p>}
    </div>
  )
}
