import { useEffect, useMemo, useState } from 'react'
import { RotateCcw } from 'lucide-react'
import { useAppStore } from '@/stores/useAppStore'
import { useCurriculum } from '@/hooks/useCurriculum'
import { filterByNucleo, filterByOrdine } from '@/lib/curriculum'
import { UnitaCard } from '@/components/curriculum/UnitaCard'
import { DISCIPLINE_SLUGS, DISCIPLINE_LABELS } from '@/types/curriculum'
import type { DisciplinaSlug, OrdineEsteso } from '@/types/curriculum'

const ORDINI: OrdineEsteso[] = ['Tutti', 'Infanzia', 'Primaria', 'Secondaria']

function labelStato(value?: string) {
  if (!value) return 'Stato non indicato'
  const normalized = value.replaceAll('_', ' ')
  return normalized.charAt(0).toUpperCase() + normalized.slice(1)
}

export function ConsultazioneView() {
  const { disciplinaSelezionata, setDisciplina, profilo } = useAppStore()
  const slug = disciplinaSelezionata as DisciplinaSlug | null
  const curriculum = useCurriculum(slug)
  const initialOrder = profilo?.ordine ?? 'Tutti'
  const [ordine, setOrdine] = useState<OrdineEsteso>(initialOrder)
  const [nucleo, setNucleo] = useState('Tutti')

  useEffect(() => {
    setNucleo('Tutti')
  }, [slug, ordine])

  const nuclei = useMemo(() => {
    if (!curriculum) return []
    const values = filterByOrdine(curriculum.unitaApprendimento, ordine).map(unit => unit.nucleo).filter(Boolean)
    return Array.from(new Set(values)).sort((a, b) => a.localeCompare(b, 'it'))
  }, [curriculum, ordine])

  const unita = useMemo(() => {
    if (!curriculum) return []
    return filterByNucleo(filterByOrdine(curriculum.unitaApprendimento, ordine), nucleo)
  }, [curriculum, ordine, nucleo])

  function resetFilters() {
    setOrdine(initialOrder)
    setNucleo('Tutti')
  }

  const selectClass = 'mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-800 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-100'

  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-6">
      <header>
        <h1 className="text-2xl font-[700] text-slate-800">Consulta il curricolo</h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">Scegli disciplina, ordine e nucleo per consultare il curricolo di riferimento senza modificare o approvare contenuti.</p>
      </header>

      <section className="grid grid-cols-1 gap-4 rounded-2xl border border-slate-200 bg-white p-5 md:grid-cols-[1.2fr_1fr_1fr_auto] md:items-end" aria-label="Filtri del curricolo">
        <label className="text-sm font-[550] text-slate-700">
          Disciplina
          <select value={slug ?? ''} onChange={event => setDisciplina(event.target.value || null)} className={selectClass}>
            <option value="">Seleziona una disciplina</option>
            {DISCIPLINE_SLUGS.map(item => <option key={item} value={item}>{DISCIPLINE_LABELS[item]}</option>)}
          </select>
        </label>

        <label className="text-sm font-[550] text-slate-700">
          Ordine di scuola
          <select value={ordine} onChange={event => setOrdine(event.target.value as OrdineEsteso)} className={selectClass} disabled={!slug}>
            {ORDINI.map(item => <option key={item} value={item}>{item === 'Tutti' ? 'Tutti gli ordini' : item}</option>)}
          </select>
        </label>

        <label className="text-sm font-[550] text-slate-700">
          Nucleo
          <select value={nucleo} onChange={event => setNucleo(event.target.value)} className={selectClass} disabled={!curriculum}>
            <option value="Tutti">Tutti i nuclei</option>
            {nuclei.map(item => <option key={item} value={item}>{item}</option>)}
          </select>
        </label>

        <button type="button" onClick={resetFilters} disabled={!slug} className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-[600] text-slate-600 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50">
          <RotateCcw size={16} /> Azzera filtri
        </button>
      </section>

      {!slug && (
        <section className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center">
          <h2 className="text-base font-[650] text-slate-700">Seleziona una disciplina</h2>
          <p className="mt-2 text-sm text-slate-500">Potrai poi restringere la consultazione per ordine di scuola e nucleo.</p>
        </section>
      )}

      {slug && curriculum && (
        <>
          <section className="rounded-2xl border border-indigo-100 bg-indigo-50/50 p-5">
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-xs font-[650] uppercase tracking-wide text-indigo-600">Curricolo di riferimento</p>
                <h2 className="mt-1 text-lg font-[700] text-indigo-950">{curriculum.disciplina} · {ordine === 'Tutti' ? 'Tutti gli ordini' : ordine}</h2>
              </div>
              <span className="self-start rounded-full bg-white px-3 py-1 text-xs font-[600] text-indigo-700">{labelStato(curriculum.readiness ?? curriculum.stato)}</span>
            </div>
            <dl className="mt-4 grid gap-3 text-sm text-slate-700 md:grid-cols-2">
              <div><dt className="font-[650]">Fonte</dt><dd className="mt-1 leading-6">{curriculum.source || 'Fonte generale non indicata'}</dd></div>
              <div><dt className="font-[650]">Validazione</dt><dd className="mt-1 leading-6">{curriculum.humanValidationRequired ? 'Richiede validazione umana' : 'Indicazione non disponibile'}</dd></div>
            </dl>
          </section>

          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm font-[600] text-slate-700">{unita.length} {unita.length === 1 ? 'unità trovata' : 'unità trovate'}</p>
            <p className="text-xs text-slate-500">Disciplina: {DISCIPLINE_LABELS[slug]} · Ordine: {ordine} · Nucleo: {nucleo}</p>
          </div>

          {unita.length > 0 ? (
            <section className="flex flex-col gap-3" aria-label="Unità del curricolo">
              {unita.map(unit => <UnitaCard key={unit.id} unita={unit} readOnly />)}
            </section>
          ) : (
            <section className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center">
              <h2 className="text-base font-[650] text-slate-700">Nessun risultato</h2>
              <p className="mt-2 text-sm text-slate-500">Modifica ordine o nucleo, oppure azzera i filtri.</p>
            </section>
          )}
        </>
      )}

      {slug && !curriculum && (
        <section className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
          <h2 className="font-[650] text-amber-900">Dati non disponibili</h2>
          <p className="mt-1 text-sm text-amber-800">Scegli un’altra disciplina oppure riprova dopo aver aggiornato la pagina.</p>
        </section>
      )}
    </div>
  )
}
