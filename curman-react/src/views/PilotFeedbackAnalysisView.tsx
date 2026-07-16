import { useMemo, useRef, useState } from 'react'
import { Download, FileSearch, Trash2, Upload } from 'lucide-react'
import {
  aggregatePilotFeedback,
  parsePilotFeedbackJson,
  serializePilotFeedbackAggregateMarkdown,
  type PilotFeedbackImportResult,
  type PilotFeedbackRecord,
} from '@/features/pilot-evaluation/pilot-feedback-analysis.mjs'

const LABELS: Record<string, string> = {
  docente: 'Docente', dipartimento: 'Dipartimento', referente: 'Referente', altro: 'Altro',
  infanzia: 'Infanzia', primaria: 'Primaria', secondaria: 'Secondaria di primo grado', non_indicato: 'Non indicato',
}

function downloadMarkdown(content: string) {
  const blob = new Blob([content], { type: 'text/markdown;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = `curmanlight-analisi-test-pilota-${new Date().toISOString().slice(0, 10)}.md`
  document.body.appendChild(anchor)
  anchor.click()
  anchor.remove()
  URL.revokeObjectURL(url)
}

export function PilotFeedbackAnalysisView() {
  const [records, setRecords] = useState<PilotFeedbackRecord[]>([])
  const [imports, setImports] = useState<PilotFeedbackImportResult[]>([])
  const inputRef = useRef<HTMLInputElement>(null)
  const aggregate = useMemo(() => aggregatePilotFeedback(records), [records])
  const summaryCards: Array<{ label: string; value: number }> = [
    { label: 'File unici', value: aggregate.total },
    { label: 'Percorsi completati', value: aggregate.completed },
    { label: 'Duplicati esclusi', value: aggregate.duplicateIds.length },
    { label: 'Disponibili al secondo test', value: aggregate.secondTest.yes },
  ]
  const distributions: Array<{ title: string; values: Record<string, number> }> = [
    { title: 'Ruoli dichiarati', values: aggregate.roles },
    { title: 'Ordini di scuola', values: aggregate.schoolOrders },
  ]

  const importFiles = async (files: FileList | null) => {
    if (!files) return
    const results = await Promise.all(Array.from(files).map(async file => parsePilotFeedbackJson(await file.text(), file.name)))
    setImports(results)
    setRecords(current => [...current, ...results.flatMap(result => result.ok ? [result.record] : [])])
    if (inputRef.current) inputRef.current.value = ''
  }

  const reset = () => { setRecords([]); setImports([]) }

  return (
    <div className="mx-auto max-w-6xl space-y-5 p-4 sm:p-6">
      <header>
        <p className="text-xs font-[700] uppercase tracking-wide text-indigo-700">Analisi locale e anonima</p>
        <h1 className="mt-1 text-2xl font-[750] text-slate-900">Osservazioni del test pilota</h1>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">Importa manualmente i file JSON esportati dai docenti. I dati restano nella sessione corrente e non vengono inviati o classificati automaticamente.</p>
      </header>

      <section className="rounded-2xl border border-slate-200 bg-white p-5" aria-labelledby="pilot-import-title">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 id="pilot-import-title" className="font-[700] text-slate-900">Importa i file strutturati</h2>
            <p className="mt-1 text-sm text-slate-600">Sono accettati solo file JSON CurManLight con schema riconosciuto. I duplicati vengono esclusi dall’analisi.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <input ref={inputRef} type="file" accept="application/json,.json" multiple className="sr-only" onChange={event => void importFiles(event.target.files)} />
            <button type="button" onClick={() => inputRef.current?.click()} className="inline-flex items-center gap-2 rounded-xl bg-indigo-700 px-4 py-2.5 text-sm font-[650] text-white hover:bg-indigo-800"><Upload size={18} /> Importa JSON</button>
            <button type="button" onClick={reset} disabled={!records.length && !imports.length} className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-2.5 text-sm font-[600] text-slate-700 disabled:opacity-40"><Trash2 size={17} /> Svuota sessione</button>
          </div>
        </div>
        {imports.length > 0 && (
          <div className="mt-4 space-y-2" aria-live="polite">
            {imports.map((result, index) => <div key={`${result.sourceName}-${index}`} className={`rounded-xl border px-3 py-2 text-sm ${result.ok ? 'border-emerald-200 bg-emerald-50 text-emerald-800' : 'border-red-200 bg-red-50 text-red-800'}`}><strong>{result.sourceName}</strong>: {result.ok ? 'file valido' : result.errors.join(' ')}</div>)}
          </div>
        )}
      </section>

      <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4" aria-label="Riepilogo importazione">
        {summaryCards.map(card => <div key={card.label} className="rounded-2xl border border-slate-200 bg-white p-4"><p className="text-xs font-[650] uppercase tracking-wide text-slate-500">{card.label}</p><p className="mt-2 text-2xl font-[750] text-indigo-800">{card.value}</p></div>)}
      </section>

      {aggregate.total === 0 ? (
        <section className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center"><FileSearch className="mx-auto text-slate-400" /><p className="mt-3 text-sm text-slate-600">Importa uno o più file JSON per iniziare l’analisi descrittiva.</p></section>
      ) : (
        <>
          <section className="grid gap-4 md:grid-cols-2">
            {distributions.map(distribution => <div key={distribution.title} className="rounded-2xl border border-slate-200 bg-white p-5"><h2 className="font-[700] text-slate-900">{distribution.title}</h2><dl className="mt-3 space-y-2">{Object.entries(distribution.values).map(([key, value]) => <div key={key} className="flex justify-between gap-4 text-sm"><dt className="text-slate-600">{LABELS[key] ?? key}</dt><dd className="font-[700] text-slate-900">{value}</dd></div>)}</dl></div>)}
          </section>

          <section className="space-y-4" aria-labelledby="pilot-notes-title">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"><div><h2 id="pilot-notes-title" className="text-lg font-[750] text-slate-900">Osservazioni per tappa</h2><p className="text-sm text-slate-600">I testi sono riportati integralmente e senza interpretazione automatica.</p></div><button type="button" onClick={() => downloadMarkdown(serializePilotFeedbackAggregateMarkdown(aggregate))} className="inline-flex items-center gap-2 rounded-xl border border-indigo-200 bg-white px-4 py-2 text-sm font-[650] text-indigo-700 hover:bg-indigo-50"><Download size={17} /> Esporta analisi leggibile</button></div>
            {aggregate.steps.map(step => <article key={step.step} className="rounded-2xl border border-slate-200 bg-white p-5"><div className="flex flex-wrap items-baseline justify-between gap-3"><h3 className="font-[700] text-slate-900">{step.step}. {step.title}</h3><span className="text-xs font-[650] text-slate-500">{step.answered}/{aggregate.total} risposte</span></div><p className="mt-1 text-sm text-slate-500">{step.prompt}</p><div className="mt-4 space-y-3">{step.notes.length ? step.notes.map((item, index) => <blockquote key={`${item.evaluationId}-${index}`} className="rounded-xl border-l-4 border-indigo-200 bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-700">{item.note}</blockquote>) : <p className="text-sm italic text-slate-500">Nessuna osservazione.</p>}</div></article>)}
          </section>
        </>
      )}
    </div>
  )
}
