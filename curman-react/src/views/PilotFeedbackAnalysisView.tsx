import { useEffect, useMemo, useRef, useState } from 'react'
import { ClipboardList, Download, FileSearch, Plus, Trash2, Upload } from 'lucide-react'
import {
  aggregatePilotFeedback,
  parsePilotFeedbackJson,
  serializePilotFeedbackAggregateMarkdown,
  type PilotFeedbackImportResult,
  type PilotFeedbackRecord,
} from '@/features/pilot-evaluation/pilot-feedback-analysis.mjs'
import {
  addPilotFinding,
  readPilotFindingsBacklog,
  removePilotFinding,
  serializePilotFindingsBacklogMarkdown,
  updatePilotFinding,
  writePilotFindingsBacklog,
  type PilotFinding,
  type PilotFindingsBacklog,
} from '@/features/pilot-evaluation/pilot-findings-backlog.mjs'
import { getSafeStorage, downloadMarkdown } from '@/lib/local-storage'

const LABELS: Record<string, string> = {
  docente: 'Docente', dipartimento: 'Dipartimento', referente: 'Referente', altro: 'Altro',
  infanzia: 'Infanzia', primaria: 'Primaria', secondaria: 'Secondaria di primo grado', non_indicato: 'Non indicato',
}

function BacklogItemEditor({ item, onChange, onRemove }: {
  item: PilotFinding
  onChange: (patch: Partial<PilotFinding>) => void
  onRemove: () => void
}) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start">
        <div className="min-w-0 flex-1 space-y-4">
          <label className="block text-sm font-[650] text-slate-800">Titolo
            <input value={item.title} onChange={event => onChange({ title: event.target.value })} className="mt-1 block w-full rounded-xl border border-slate-300 px-3 py-2 text-sm" />
          </label>
          <label className="block text-sm font-[650] text-slate-800">Problema o opportunità
            <textarea value={item.description} onChange={event => onChange({ description: event.target.value })} rows={3} className="mt-1 block w-full resize-y rounded-xl border border-slate-300 px-3 py-2 text-sm leading-6" />
          </label>
          <div className="rounded-xl border-l-4 border-indigo-200 bg-slate-50 px-4 py-3">
            <p className="text-xs font-[700] uppercase tracking-wide text-slate-500">Evidenza originale · tappa {item.source.step ?? '—'}</p>
            <p className="mt-1 text-sm leading-6 text-slate-700">{item.source.excerpt || 'Nessun estratto disponibile.'}</p>
            <p className="mt-2 text-xs text-slate-500">Fonte anonima: {item.source.evaluationId || 'non indicata'}</p>
          </div>
          <label className="block text-sm font-[650] text-slate-800">Motivazione della priorità
            <textarea value={item.rationale} onChange={event => onChange({ rationale: event.target.value })} rows={2} className="mt-1 block w-full resize-y rounded-xl border border-slate-300 px-3 py-2 text-sm leading-6" />
          </label>
          <label className="block text-sm font-[650] text-slate-800">Decisione o prossimo passo
            <textarea value={item.decision} onChange={event => onChange({ decision: event.target.value })} rows={2} className="mt-1 block w-full resize-y rounded-xl border border-slate-300 px-3 py-2 text-sm leading-6" />
          </label>
        </div>
        <div className="grid shrink-0 gap-3 sm:grid-cols-2 lg:w-52 lg:grid-cols-1">
          <label className="text-sm font-[650] text-slate-800">Priorità
            <select value={item.priority} onChange={event => onChange({ priority: event.target.value as PilotFinding['priority'] })} className="mt-1 block w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm">
              <option value="bassa">Bassa</option><option value="media">Media</option><option value="alta">Alta</option>
            </select>
          </label>
          <label className="text-sm font-[650] text-slate-800">Stato
            <select value={item.status} onChange={event => onChange({ status: event.target.value as PilotFinding['status'] })} className="mt-1 block w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm">
              <option value="da_valutare">Da valutare</option><option value="in_analisi">In analisi</option><option value="pianificato">Pianificato</option><option value="chiuso">Chiuso</option>
            </select>
          </label>
          <button type="button" onClick={onRemove} className="inline-flex items-center justify-center gap-2 rounded-xl px-3 py-2 text-sm font-[600] text-red-700 hover:bg-red-50"><Trash2 size={16} /> Rimuovi voce</button>
        </div>
      </div>
    </article>
  )
}

export function PilotFeedbackAnalysisView() {
  const [records, setRecords] = useState<PilotFeedbackRecord[]>([])
  const [imports, setImports] = useState<PilotFeedbackImportResult[]>([])
  const [backlog, setBacklog] = useState<PilotFindingsBacklog>(() => readPilotFindingsBacklog(getSafeStorage()))
  const inputRef = useRef<HTMLInputElement>(null)
  const aggregate = useMemo(() => aggregatePilotFeedback(records), [records])
  const summaryCards: Array<{ label: string; value: number }> = [
    { label: 'File unici', value: aggregate.total },
    { label: 'Percorsi completati', value: aggregate.completed },
    { label: 'Duplicati esclusi', value: aggregate.duplicateIds.length },
    { label: 'Voci nel backlog', value: backlog.items.length },
  ]
  const distributions: Array<{ title: string; values: Record<string, number> }> = [
    { title: 'Ruoli dichiarati', values: aggregate.roles },
    { title: 'Ordini di scuola', values: aggregate.schoolOrders },
  ]

  useEffect(() => {
    try { writePilotFindingsBacklog(getSafeStorage(), backlog) } catch { /* Il backlog resta utilizzabile in memoria. */ }
  }, [backlog])

  const importFiles = async (files: FileList | null) => {
    if (!files) return
    const results = await Promise.all(Array.from(files).map(async file => parsePilotFeedbackJson(await file.text(), file.name)))
    setImports(results)
    setRecords(current => [...current, ...results.flatMap(result => result.ok ? [result.record] : [])])
    if (inputRef.current) inputRef.current.value = ''
  }

  const resetImports = () => { setRecords([]); setImports([]) }
  const addToBacklog = (step: { step: number; title: string }, item: { evaluationId: string; note: string }) => {
    const alreadyPresent = backlog.items.some(finding => finding.source.step === step.step && finding.source.evaluationId === item.evaluationId && finding.source.excerpt === item.note)
    if (alreadyPresent) return
    setBacklog(current => addPilotFinding(current, {
      title: `Miglioramento da valutare — ${step.title}`,
      description: '',
      source: { step: step.step, stepTitle: step.title, evaluationId: item.evaluationId, excerpt: item.note },
      priority: 'media', status: 'da_valutare', rationale: '', decision: '',
    }))
  }

  return (
    <div className="mx-auto max-w-6xl space-y-6 p-4 sm:p-6">
      <header>
        <p className="text-xs font-[700] uppercase tracking-wide text-indigo-700">Analisi e decisione umana</p>
        <h1 className="mt-1 text-2xl font-[750] text-slate-900">Osservazioni del test pilota</h1>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">Importa i file anonimi, leggi le osservazioni e scegli manualmente quali trasformare in punti di miglioramento. Nessun testo viene classificato o prioritizzato automaticamente.</p>
      </header>

      <section className="rounded-2xl border border-slate-200 bg-white p-5" aria-labelledby="pilot-import-title">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div><h2 id="pilot-import-title" className="font-[700] text-slate-900">Importa i file strutturati</h2><p className="mt-1 text-sm text-slate-600">I file importati restano nella sessione corrente. Il backlog curato viene invece salvato localmente nel browser.</p></div>
          <div className="flex flex-wrap gap-2">
            <input ref={inputRef} type="file" accept="application/json,.json" multiple className="sr-only" onChange={event => void importFiles(event.target.files)} />
            <button type="button" onClick={() => inputRef.current?.click()} className="inline-flex items-center gap-2 rounded-xl bg-indigo-700 px-4 py-2.5 text-sm font-[650] text-white hover:bg-indigo-800"><Upload size={18} /> Importa JSON</button>
            <button type="button" onClick={resetImports} disabled={!records.length && !imports.length} className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-[600] text-slate-700 disabled:opacity-40"><Trash2 size={17} /> Svuota import</button>
          </div>
        </div>
        {imports.length > 0 && <div className="mt-4 space-y-2" aria-live="polite">{imports.map((result, index) => <div key={`${result.sourceName}-${index}`} className={`rounded-xl border px-3 py-2 text-sm ${result.ok ? 'border-emerald-200 bg-emerald-50 text-emerald-800' : 'border-red-200 bg-red-50 text-red-800'}`}><strong>{result.sourceName}</strong>: {result.ok ? 'file valido' : result.errors.join(' ')}</div>)}</div>}
      </section>

      <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4" aria-label="Riepilogo importazione">{summaryCards.map(card => <div key={card.label} className="rounded-2xl border border-slate-200 bg-white p-4"><p className="text-xs font-[650] uppercase tracking-wide text-slate-500">{card.label}</p><p className="mt-2 text-2xl font-[750] text-indigo-800">{card.value}</p></div>)}</section>

      {aggregate.total === 0 ? <section className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center"><FileSearch className="mx-auto text-slate-400" /><p className="mt-3 text-sm text-slate-600">Importa uno o più file JSON per leggere le osservazioni. Il backlog locale già creato resta disponibile più sotto.</p></section> : <>
        <section className="grid gap-4 md:grid-cols-2">{distributions.map(distribution => <div key={distribution.title} className="rounded-2xl border border-slate-200 bg-white p-5"><h2 className="font-[700] text-slate-900">{distribution.title}</h2><dl className="mt-3 space-y-2">{Object.entries(distribution.values).map(([key, value]) => <div key={key} className="flex justify-between gap-4 text-sm"><dt className="text-slate-600">{LABELS[key] ?? key}</dt><dd className="font-[700] text-slate-900">{value}</dd></div>)}</dl></div>)}</section>
        <section className="space-y-4" aria-labelledby="pilot-notes-title">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><div><h2 id="pilot-notes-title" className="text-lg font-[750] text-slate-900">Osservazioni per tappa</h2><p className="text-sm text-slate-600">Aggiungi al backlog soltanto le evidenze che richiedono una valutazione umana.</p></div><button type="button" onClick={() => downloadMarkdown(`curmanlight-analisi-test-pilota-${new Date().toISOString().slice(0, 10)}.md`, serializePilotFeedbackAggregateMarkdown(aggregate))} className="inline-flex items-center gap-2 rounded-xl border border-indigo-200 bg-white px-4 py-2 text-sm font-[650] text-indigo-700 hover:bg-indigo-50"><Download size={17} /> Esporta analisi</button></div>
          {aggregate.steps.map(step => <article key={step.step} className="rounded-2xl border border-slate-200 bg-white p-5"><div className="flex flex-wrap items-baseline justify-between gap-3"><h3 className="font-[700] text-slate-900">{step.step}. {step.title}</h3><span className="text-xs font-[650] text-slate-500">{step.answered}/{aggregate.total} risposte</span></div><p className="mt-1 text-sm text-slate-500">{step.prompt}</p><div className="mt-4 space-y-3">{step.notes.length ? step.notes.map((item, index) => { const added = backlog.items.some(finding => finding.source.step === step.step && finding.source.evaluationId === item.evaluationId && finding.source.excerpt === item.note); return <div key={`${item.evaluationId}-${index}`} className="rounded-xl border border-slate-200 bg-slate-50 p-4"><blockquote className="text-sm leading-6 text-slate-700">{item.note}</blockquote><button type="button" disabled={added} onClick={() => addToBacklog(step, item)} className="mt-3 inline-flex items-center gap-2 rounded-xl border border-indigo-200 bg-white px-3 py-2 text-xs font-[650] text-indigo-700 disabled:cursor-default disabled:border-emerald-200 disabled:text-emerald-700"><Plus size={15} /> {added ? 'Già nel backlog' : 'Aggiungi al backlog'}</button></div> }) : <p className="text-sm italic text-slate-500">Nessuna osservazione.</p>}</div></article>)}
        </section>
      </>}

      <section className="space-y-4" aria-labelledby="pilot-backlog-title">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><div className="flex items-start gap-3"><ClipboardList className="mt-0.5 text-indigo-700" size={22} /><div><h2 id="pilot-backlog-title" className="text-lg font-[750] text-slate-900">Backlog dei miglioramenti</h2><p className="text-sm text-slate-600">Priorità, stato e decisioni sono compilati manualmente e salvati solo su questo dispositivo.</p></div></div><button type="button" disabled={!backlog.items.length} onClick={() => downloadMarkdown(`curmanlight-backlog-test-pilota-${new Date().toISOString().slice(0, 10)}.md`, serializePilotFindingsBacklogMarkdown(backlog))} className="inline-flex items-center gap-2 rounded-xl bg-indigo-700 px-4 py-2.5 text-sm font-[650] text-white disabled:opacity-40"><Download size={17} /> Esporta backlog</button></div>
        {backlog.items.length ? backlog.items.map(item => <BacklogItemEditor key={item.id} item={item} onChange={patch => setBacklog(current => updatePilotFinding(current, item.id, patch))} onRemove={() => setBacklog(current => removePilotFinding(current, item.id))} />) : <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center text-sm text-slate-600">Nessuna voce ancora selezionata. Le osservazioni non vengono trasformate automaticamente in attività.</div>}
      </section>
    </div>
  )
}
