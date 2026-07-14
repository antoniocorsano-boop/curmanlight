import { useMemo, useState } from 'react'
import { AlertTriangle, BookOpenCheck, LoaderCircle, Plus, RotateCcw } from 'lucide-react'
import { useCurriculumResource } from '@/hooks/useCurriculum'
import { buildCurriculumReusePayload, filterUnitsForContext } from '@/lib/curriculum-reuse'
import type { CurriculumReusePayload } from '@/lib/curriculum-reuse'
import type { DisciplinaSlug } from '@/types/curriculum'

interface CurriculumReusePanelProps {
  disciplina: string
  ordine: string
  classe: string
  destinationLabel: string
  onInsert: (payload: CurriculumReusePayload) => void
}

export function CurriculumReusePanel({ disciplina, ordine, classe, destinationLabel, onInsert }: CurriculumReusePanelProps) {
  const slug = disciplina as DisciplinaSlug | ''
  const { data, status, error, retry } = useCurriculumResource(slug || null)
  const [selectedIds, setSelectedIds] = useState<Set<string>>(() => new Set())
  const [insertedMessage, setInsertedMessage] = useState<string | null>(null)

  const units = useMemo(
    () => data ? filterUnitsForContext(data.unitaApprendimento, ordine, classe) : [],
    [classe, data, ordine],
  )
  const selectedUnits = useMemo(() => units.filter(unit => selectedIds.has(unit.id)), [selectedIds, units])
  const preview = useMemo(() => buildCurriculumReusePayload(selectedUnits), [selectedUnits])
  const contextReady = Boolean(disciplina && ordine && classe.trim())

  function toggle(id: string) {
    setInsertedMessage(null)
    setSelectedIds(current => {
      const next = new Set(current)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  function reset() {
    setSelectedIds(new Set())
    setInsertedMessage(null)
  }

  function insert() {
    if (selectedUnits.length === 0) return
    onInsert(preview)
    setInsertedMessage(`${selectedUnits.length} ${selectedUnits.length === 1 ? 'unità aggiunta' : 'unità aggiunte'} a ${destinationLabel}.`)
    setSelectedIds(new Set())
  }

  return (
    <section className="mb-6 rounded-2xl border border-slate-200 bg-white p-5" aria-labelledby={`reuse-${destinationLabel}`}>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-[650] uppercase tracking-wide text-indigo-600">Riutilizzo guidato</p>
          <h2 id={`reuse-${destinationLabel}`} className="mt-1 text-base font-[700] text-slate-900">Aggiungi dal curricolo</h2>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-600">Seleziona contenuti reali del curricolo. L’inserimento avviene solo dopo conferma, non sovrascrive i testi presenti e resta modificabile.</p>
        </div>
        {selectedIds.size > 0 && <button type="button" onClick={reset} className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-sm font-[600] text-slate-600 hover:bg-slate-50"><RotateCcw size={15} /> Annulla selezione</button>}
      </div>

      {!contextReady && <div className="mt-4 rounded-xl border border-dashed border-amber-300 bg-amber-50 p-4 text-sm leading-6 text-amber-800">Completa disciplina, ordine e classe per vedere i contenuti curricolari pertinenti.</div>}

      {contextReady && status === 'loading' && <div aria-live="polite" className="mt-4 flex items-center gap-3 rounded-xl bg-slate-50 p-4 text-sm text-slate-600"><LoaderCircle size={18} className="animate-spin text-indigo-600" /> Caricamento dei contenuti curricolari…</div>}

      {contextReady && status === 'error' && <div role="alert" className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4"><div className="flex gap-3"><AlertTriangle size={18} className="mt-0.5 shrink-0 text-amber-700" /><div><p className="text-sm font-[650] text-amber-900">Curricolo non disponibile</p><p className="mt-1 text-sm leading-6 text-amber-800">{error}</p><button type="button" onClick={retry} className="mt-3 rounded-lg bg-amber-800 px-3 py-2 text-sm font-[650] text-white">Riprova</button></div></div></div>}

      {contextReady && status === 'success' && units.length === 0 && <div className="mt-4 rounded-xl border border-dashed border-slate-300 bg-slate-50 p-4 text-sm leading-6 text-slate-600">Non risultano unità curricolari compatibili con il contesto selezionato.</div>}

      {contextReady && status === 'success' && units.length > 0 && (
        <>
          <div className="mt-4 grid gap-3 md:grid-cols-2" role="group" aria-label="Contenuti curricolari selezionabili">
            {units.map(unit => {
              const selected = selectedIds.has(unit.id)
              return (
                <label key={unit.id} className={`cursor-pointer rounded-xl border p-4 transition-colors ${selected ? 'border-indigo-400 bg-indigo-50' : 'border-slate-200 hover:bg-slate-50'}`}>
                  <span className="flex items-start gap-3">
                    <input type="checkbox" checked={selected} onChange={() => toggle(unit.id)} className="mt-1 h-4 w-4 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" />
                    <span className="min-w-0">
                      <span className="block text-xs font-[650] uppercase tracking-wide text-indigo-600">{unit.nucleo || 'Nucleo non indicato'}</span>
                      <span className="mt-1 block text-sm font-[650] leading-5 text-slate-900">{unit.competenza || unit.traguardo || unit.ambito}</span>
                      <span className="mt-2 block text-xs leading-5 text-slate-500">{unit.obiettivi.length} obiettivi · {unit.conoscenze.length} conoscenze · {unit.abilita.length} abilità</span>
                    </span>
                  </span>
                </label>
              )
            })}
          </div>

          {selectedUnits.length > 0 && <div className="mt-4 rounded-xl border border-indigo-100 bg-indigo-50/50 p-4">
            <div className="flex items-start gap-3"><BookOpenCheck size={18} className="mt-0.5 shrink-0 text-indigo-600" /><div className="min-w-0"><p className="text-sm font-[650] text-indigo-950">Anteprima dell’inserimento</p><dl className="mt-2 grid gap-2 text-xs leading-5 text-indigo-900 sm:grid-cols-3"><div><dt className="font-[650]">Competenze e traguardi</dt><dd>{preview.competenze.length}</dd></div><div><dt className="font-[650]">Obiettivi</dt><dd>{preview.obiettivi.length}</dd></div><div><dt className="font-[650]">Nuclei, conoscenze e abilità</dt><dd>{preview.contenuti.length}</dd></div></dl></div></div>
            <button type="button" onClick={insert} className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-[650] text-white sm:w-auto"><Plus size={16} /> Aggiungi a {destinationLabel}</button>
          </div>}
        </>
      )}

      {insertedMessage && <p role="status" className="mt-4 text-sm font-[600] text-emerald-700">{insertedMessage}</p>}
    </section>
  )
}
