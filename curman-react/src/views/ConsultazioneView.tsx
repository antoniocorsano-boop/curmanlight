import { useEffect, useMemo, useState } from 'react'
import { AlertTriangle, LoaderCircle, RotateCcw, Search, X } from 'lucide-react'
import { useAppStore } from '@/stores/useAppStore'
import { useCurriculumResource } from '@/hooks/useCurriculum'
import { filterByNucleo, filterByOrdine } from '@/lib/curriculum'
import { UnitaCard } from '@/components/curriculum/UnitaCard'
import { ApplicabilityContextBanner } from '@/components/curriculum/ApplicabilityContextBanner'
import { DISCIPLINE_SLUGS, DISCIPLINE_LABELS } from '@/types/curriculum'
import type { DisciplinaSlug, OrdineEsteso, UnitaApprendimento } from '@/types/curriculum'

const ORDINI: OrdineEsteso[] = ['Tutti', 'Infanzia', 'Primaria', 'Secondaria']
const normalize = (value: string) => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('it').trim()
const matchesSearch = (unit: UnitaApprendimento, query: string) => !normalize(query) || normalize(JSON.stringify(unit)).includes(normalize(query))

function labelStato(value?: string) {
  if (!value) return 'Stato non indicato'
  const normalized = value.replace(/_/g, ' ')
  return normalized.charAt(0).toUpperCase() + normalized.slice(1)
}

export function ConsultazioneView() {
  const { disciplinaSelezionata, setDisciplina, profilo } = useAppStore()
  const slug = disciplinaSelezionata as DisciplinaSlug | null
  const { data: curriculum, status, error, retry } = useCurriculumResource(slug)
  const initialOrder = profilo?.ordine ?? 'Tutti'
  const [ordine, setOrdine] = useState<OrdineEsteso>(initialOrder)
  const [nucleo, setNucleo] = useState('Tutti')
  const [query, setQuery] = useState('')

  useEffect(() => {
    setNucleo('Tutti')
    setQuery('')
  }, [slug])

  useEffect(() => { setNucleo('Tutti') }, [ordine])

  const nuclei = useMemo(() => {
    if (!curriculum) return []
    const values = filterByOrdine(curriculum.unitaApprendimento, ordine).map(unit => unit.nucleo).filter(Boolean)
    return Array.from(new Set(values)).sort((a, b) => a.localeCompare(b, 'it'))
  }, [curriculum, ordine])

  const structuralResults = useMemo(() => {
    if (!curriculum) return []
    return filterByNucleo(filterByOrdine(curriculum.unitaApprendimento, ordine), nucleo)
  }, [curriculum, ordine, nucleo])

  const unita = useMemo(() => structuralResults.filter(unit => matchesSearch(unit, query)), [structuralResults, query])
  const hasActiveFilters = ordine !== initialOrder || nucleo !== 'Tutti' || query.trim().length > 0

  function resetFilters() {
    setOrdine(initialOrder)
    setNucleo('Tutti')
    setQuery('')
  }

  const selectClass = 'mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-800 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-100'

  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-6">
      <header>
        <h1 className="text-2xl font-[700] text-slate-800">Consulta il curricolo</h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">Scegli disciplina, ordine e nucleo, oppure cerca parole presenti nei contenuti. La consultazione non modifica né approva il curricolo.</p>
      </header>

      <ApplicabilityContextBanner profilo={profilo} ordine={ordine} disciplina={slug} mode="consultazione" />

      <section className="rounded-2xl border border-slate-200 bg-white p-5" aria-label="Filtri del curricolo">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-[1.2fr_1fr_1fr_auto] md:items-end">
          <label className="text-sm font-[550] text-slate-700">Disciplina
            <select value={slug ?? ''} onChange={event => setDisciplina(event.target.value || null)} className={selectClass}>
              <option value="">Seleziona una disciplina</option>
              {DISCIPLINE_SLUGS.map(item => <option key={item} value={item}>{DISCIPLINE_LABELS[item]}</option>)}
            </select>
          </label>
          <label className="text-sm font-[550] text-slate-700">Ordine di scuola
            <select value={ordine} onChange={event => setOrdine(event.target.value as OrdineEsteso)} className={selectClass} disabled={!slug || status === 'loading'}>
              {ORDINI.map(item => <option key={item} value={item}>{item === 'Tutti' ? 'Tutti gli ordini' : item}</option>)}
            </select>
          </label>
          <label className="text-sm font-[550] text-slate-700">Nucleo
            <select value={nucleo} onChange={event => setNucleo(event.target.value)} className={selectClass} disabled={status !== 'success'}>
              <option value="Tutti">Tutti i nuclei</option>
              {nuclei.map(item => <option key={item} value={item}>{item}</option>)}
            </select>
          </label>
          <button type="button" onClick={resetFilters} disabled={!slug || status === 'loading' || !hasActiveFilters} className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-[600] text-slate-600 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50">
            <RotateCcw size={16} /> Azzera filtri
          </button>
        </div>
        <label className="mt-4 block text-sm font-[550] text-slate-700">Cerca nei contenuti
          <span className="relative mt-1 block">
            <Search size={17} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input type="search" value={query} onChange={event => setQuery(event.target.value)} disabled={status !== 'success'} placeholder="Es. cittadinanza, frazioni, paesaggio, energia…" className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-10 text-sm text-slate-800 placeholder:text-slate-400 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-100 disabled:bg-slate-50" />
            {query && <button type="button" onClick={() => setQuery('')} aria-label="Cancella ricerca" className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100"><X size={16} /></button>}
          </span>
        </label>
      </section>

      {status === 'idle' && <section className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center"><h2 className="text-base font-[650] text-slate-700">Seleziona una disciplina</h2><p className="mt-2 text-sm text-slate-500">Potrai poi restringere la consultazione per ordine, nucleo e parole presenti nei contenuti.</p></section>}

      {status === 'loading' && <section aria-live="polite" className="flex items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white p-8 text-slate-600"><LoaderCircle size={20} className="animate-spin text-indigo-600" /><p className="text-sm font-[600]">Caricamento del curricolo in corso…</p></section>}

      {status === 'success' && curriculum && <>
        <section className="rounded-2xl border border-indigo-100 bg-indigo-50/50 p-5">
          <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between"><div><p className="text-xs font-[650] uppercase tracking-wide text-indigo-600">Curricolo mostrato</p><h2 className="mt-1 text-lg font-[700] text-indigo-950">{curriculum.disciplina} · {ordine === 'Tutti' ? 'Tutti gli ordini' : ordine}</h2></div><span className="self-start rounded-full bg-white px-3 py-1 text-xs font-[600] text-indigo-700">{labelStato(curriculum.readiness ?? curriculum.stato)}</span></div>
          <dl className="mt-4 grid gap-3 text-sm text-slate-700 md:grid-cols-2"><div><dt className="font-[650]">Fonte</dt><dd className="mt-1 leading-6">{curriculum.source || 'Fonte generale non indicata'}</dd></div><div><dt className="font-[650]">Validazione</dt><dd className="mt-1 leading-6">{curriculum.humanValidationRequired ? 'Richiede validazione umana' : 'Indicazione non disponibile'}</dd></div></dl>
          <p className="mt-4 border-t border-indigo-100 pt-3 text-xs leading-5 text-indigo-800">Il curricolo mostrato non cambia automaticamente quando varia il quadro nazionale applicabile. La corrispondenza tra versione consultata e contesto deve restare esplicita e verificabile.</p>
        </section>

        <section aria-label="Orientamento dei risultati" className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"><p className="text-sm font-[650] text-slate-800">{unita.length} {unita.length === 1 ? 'unità trovata' : 'unità trovate'}{unita.length !== structuralResults.length && <span className="font-[500] text-slate-500"> su {structuralResults.length}</span>}</p><p className="text-xs text-slate-500">Disciplina: {DISCIPLINE_LABELS[slug!]}</p></div>
          <div className="mt-2 flex flex-wrap gap-2" aria-label="Filtri attivi"><span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-600">Ordine: {ordine === 'Tutti' ? 'tutti' : ordine}</span><span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs text-slate-600">Nucleo: {nucleo === 'Tutti' ? 'tutti' : nucleo}</span>{query.trim() && <span className="rounded-full bg-indigo-50 px-2.5 py-1 text-xs text-indigo-700">Ricerca: “{query.trim()}”</span>}</div>
        </section>

        {unita.length > 0 ? <section className="flex flex-col gap-3" aria-label="Unità del curricolo">{unita.map(unit => <UnitaCard key={unit.id} unita={unit} readOnly />)}</section> : <section className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center"><h2 className="text-base font-[650] text-slate-700">Nessun contenuto con questi filtri</h2><p className="mt-2 text-sm text-slate-500">Prova termini più generali, modifica ordine o nucleo, oppure ripristina la vista completa.</p><button type="button" onClick={resetFilters} className="mt-4 rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-[600] text-slate-700 hover:bg-slate-100">Mostra tutti i contenuti</button></section>}
      </>}

      {status === 'error' && slug && <section role="alert" className="rounded-2xl border border-amber-200 bg-amber-50 p-5"><div className="flex items-start gap-3"><AlertTriangle size={20} className="mt-0.5 shrink-0 text-amber-700" /><div className="flex-1"><h2 className="font-[650] text-amber-900">Curricolo non caricato</h2><p className="mt-1 text-sm leading-6 text-amber-800">{error ?? 'Si è verificato un problema durante il caricamento.'}</p><div className="mt-4 flex flex-wrap gap-3"><button type="button" onClick={retry} className="rounded-xl bg-amber-800 px-4 py-2 text-sm font-[650] text-white hover:bg-amber-900">Riprova</button><button type="button" onClick={() => setDisciplina(null)} className="rounded-xl border border-amber-300 bg-white px-4 py-2 text-sm font-[600] text-amber-900 hover:bg-amber-100">Cambia disciplina</button></div></div></div></section>}
    </div>
  )
}
