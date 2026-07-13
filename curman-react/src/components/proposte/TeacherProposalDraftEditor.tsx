import { useEffect, useMemo, useState } from 'react'
import { Save, Trash2 } from 'lucide-react'
import { useProposalStore } from '@/stores/useProposalStore'
import type { ProposalTargetField } from '@/types/proposal'
import type { UnitaApprendimento } from '@/types/curriculum'

const FIELDS: { value: ProposalTargetField; label: string }[] = [
  { value: 'traguardo', label: 'Traguardo' },
  { value: 'competenza', label: 'Competenza' },
  { value: 'obiettivi', label: 'Obiettivi' },
  { value: 'conoscenze', label: 'Conoscenze' },
  { value: 'abilita', label: 'Abilità' },
  { value: 'evidenze', label: 'Evidenze' },
  { value: 'criteriValutazione', label: 'Criteri di valutazione' },
]

function fieldText(unit: UnitaApprendimento, field: ProposalTargetField) {
  const value = unit[field]
  return Array.isArray(value) ? value.join('\n') : value ?? ''
}

export function TeacherProposalDraftEditor({ unit }: { unit: UnitaApprendimento }) {
  const existing = useProposalStore(state => state.drafts[unit.id])
  const saveDraft = useProposalStore(state => state.saveDraft)
  const deleteDraft = useProposalStore(state => state.deleteDraft)
  const [targetField, setTargetField] = useState<ProposalTargetField>(existing?.targetField ?? 'traguardo')
  const currentText = useMemo(() => fieldText(unit, targetField), [unit, targetField])
  const [proposedText, setProposedText] = useState(existing?.testoProposto ?? currentText)
  const [motivation, setMotivation] = useState(existing?.motivazione ?? '')
  const [source, setSource] = useState(existing?.fonte ?? '')
  const [notes, setNotes] = useState(existing?.note ?? '')
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    if (existing) {
      setTargetField(existing.targetField)
      setProposedText(existing.testoProposto)
      setMotivation(existing.motivazione)
      setSource(existing.fonte)
      setNotes(existing.note)
    }
  }, [existing])

  useEffect(() => {
    if (!existing || existing.targetField !== targetField) setProposedText(currentText)
  }, [currentText, existing, targetField])

  const canSave = proposedText.trim().length > 0 && motivation.trim().length > 0

  function handleSave() {
    if (!canSave) return
    saveDraft({
      unitaId: unit.id,
      disciplina: unit.disciplina,
      ordine: unit.ordine,
      nucleo: unit.nucleo,
      targetField,
      testoVigente: currentText,
      testoProposto: proposedText.trim(),
      motivazione: motivation.trim(),
      fonte: source.trim(),
      note: notes.trim(),
    })
    setSaved(true)
    window.setTimeout(() => setSaved(false), 1800)
  }

  return (
    <section className="rounded-2xl border border-indigo-200 bg-white p-5" aria-labelledby="proposal-draft-title">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-[650] uppercase tracking-wide text-indigo-600">Bozza docente</p>
          <h2 id="proposal-draft-title" className="mt-1 text-lg font-[700] text-slate-900">Prepara una proposta di aggiornamento</h2>
          <p className="mt-1 text-sm leading-6 text-slate-600">{unit.disciplina} · {unit.ordine} · {unit.nucleo}</p>
        </div>
        {existing && <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-[600] text-amber-700">Bozza salvata</span>}
      </div>

      <div className="mt-5 grid gap-5">
        <label className="text-sm font-[600] text-slate-700">Campo da aggiornare
          <select value={targetField} onChange={event => setTargetField(event.target.value as ProposalTargetField)} className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm">
            {FIELDS.map(field => <option key={field.value} value={field.value}>{field.label}</option>)}
          </select>
        </label>

        <div className="grid gap-4 lg:grid-cols-2">
          <label className="text-sm font-[600] text-slate-700">Testo vigente
            <textarea value={currentText} readOnly rows={8} className="mt-1 w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm leading-6 text-slate-600" />
          </label>
          <label className="text-sm font-[600] text-slate-700">Testo proposto
            <textarea value={proposedText} onChange={event => setProposedText(event.target.value)} rows={8} className="mt-1 w-full rounded-xl border border-indigo-200 bg-white px-3 py-2.5 text-sm leading-6 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-100" />
          </label>
        </div>

        <label className="text-sm font-[600] text-slate-700">Motivazione <span className="text-red-600">*</span>
          <textarea value={motivation} onChange={event => setMotivation(event.target.value)} rows={4} placeholder="Spiega perché la modifica è utile e coerente con il contesto scolastico." className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm leading-6 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-100" />
        </label>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="text-sm font-[600] text-slate-700">Fonte o riferimento
            <input value={source} onChange={event => setSource(event.target.value)} className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm" />
          </label>
          <label className="text-sm font-[600] text-slate-700">Nota facoltativa
            <input value={notes} onChange={event => setNotes(event.target.value)} className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2.5 text-sm" />
          </label>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4">
        <p className="text-xs leading-5 text-slate-500">La bozza resta sul dispositivo e non modifica il curricolo vigente.</p>
        <div className="flex gap-2">
          {existing && <button type="button" onClick={() => deleteDraft(unit.id)} className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 text-sm font-[600] text-slate-600 hover:bg-slate-50"><Trash2 size={16} /> Elimina bozza</button>}
          <button type="button" disabled={!canSave} onClick={handleSave} className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-[650] text-white hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-50"><Save size={16} /> {saved ? 'Bozza salvata' : 'Salva bozza'}</button>
        </div>
      </div>
    </section>
  )
}
