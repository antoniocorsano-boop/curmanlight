import { useEffect, useMemo, useState } from 'react'
import { CheckCircle2, Clock3, Download, Inbox, PencilLine, RotateCcw, Trash2, X, XCircle } from 'lucide-react'
import {
  downloadDepartmentOutcome,
  getDepartmentOutcomeReadiness,
} from '@/lib/departmentOutcomeExport'
import { useDepartmentQueueStore } from '@/stores/useDepartmentQueueStore'
import type { DepartmentDecisionValue, DepartmentQueueItem } from '@/types/departmentQueue'

const DECISIONS: Array<{ value: DepartmentDecisionValue; label: string; icon: typeof CheckCircle2 }> = [
  { value: 'accettata', label: 'Accetta', icon: CheckCircle2 },
  { value: 'respinta', label: 'Respingi', icon: XCircle },
  { value: 'modificata', label: 'Modifica', icon: PencilLine },
  { value: 'rinviata', label: 'Rinvia', icon: Clock3 },
]

const DECISION_LABELS: Record<DepartmentDecisionValue, string> = {
  accettata: 'Accettata',
  respinta: 'Respinta',
  modificata: 'Modificata',
  rinviata: 'Rinviata',
}

function DecisionEditor({ item, onClose }: { item: DepartmentQueueItem; onClose: () => void }) {
  const saveDecision = useDepartmentQueueStore(state => state.saveDecision)
  const [value, setValue] = useState<DepartmentDecisionValue>(item.decision?.value ?? 'accettata')
  const [note, setNote] = useState(item.decision?.note ?? '')
  const [testoModificato, setTestoModificato] = useState(item.decision?.testoModificato ?? item.proposal.proposta)

  function handleSave() {
    if (saveDecision(item.id, { value, note, testoModificato })) onClose()
  }

  return (
    <div className="mt-4 rounded-xl border border-indigo-200 bg-indigo-50/60 p-4">
      <p className="text-xs font-[650] uppercase tracking-wide text-indigo-700">Decisione dipartimentale</p>
      <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {DECISIONS.map(option => {
          const Icon = option.icon
          const selected = value === option.value
          return (
            <button key={option.value} type="button" onClick={() => setValue(option.value)} aria-pressed={selected}
              className={`inline-flex items-center justify-center gap-2 rounded-lg border px-3 py-2 text-sm font-[600] transition-colors ${selected ? 'border-indigo-500 bg-white text-indigo-700' : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'}`}>
              <Icon size={15} /> {option.label}
            </button>
          )
        })}
      </div>

      {value === 'modificata' && (
        <label className="mt-4 block">
          <span className="text-xs font-[600] text-slate-600">Testo concordato</span>
          <textarea value={testoModificato} onChange={event => setTestoModificato(event.target.value)} rows={4}
            className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm leading-6 text-slate-700 outline-none focus:border-indigo-400" />
        </label>
      )}

      <label className="mt-4 block">
        <span className="text-xs font-[600] text-slate-600">Nota dipartimentale <span className="font-normal text-slate-400">(facoltativa)</span></span>
        <textarea value={note} onChange={event => setNote(event.target.value)} rows={2}
          className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm leading-6 text-slate-700 outline-none focus:border-indigo-400" />
      </label>

      <div className="mt-4 flex flex-wrap gap-2">
        <button type="button" onClick={handleSave} className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-[650] text-white hover:bg-indigo-700">Salva decisione</button>
        <button type="button" onClick={onClose} className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-[600] text-slate-600 hover:bg-slate-50">Annulla</button>
      </div>
    </div>
  )
}

export function DepartmentProposalQueue() {
  const { items, hydrated, persistenceError, hydrate, clearDecision, removeItem, clearQueue } = useDepartmentQueueStore()
  const [editingId, setEditingId] = useState<string | null>(null)
  const [exportError, setExportError] = useState<string | null>(null)

  useEffect(() => hydrate(), [hydrate])

  const summary = useMemo(() => ({
    total: items.length,
    decided: items.filter(item => item.decision).length,
    pending: items.filter(item => !item.decision).length,
    disciplines: new Set(items.map(item => item.discipline)).size,
  }), [items])

  const readiness = useMemo(() => getDepartmentOutcomeReadiness(items), [items])
  const decisionCounts = useMemo(() => ({
    accettate: items.filter(item => item.decision?.value === 'accettata').length,
    respinte: items.filter(item => item.decision?.value === 'respinta').length,
    modificate: items.filter(item => item.decision?.value === 'modificata').length,
    rinviate: items.filter(item => item.decision?.value === 'rinviata').length,
  }), [items])

  function handleExport() {
    try {
      downloadDepartmentOutcome(items)
      setExportError(null)
    } catch (error) {
      setExportError(error instanceof Error ? error.message : 'Non è stato possibile creare il file di esito.')
    }
  }

  return (
    <section className="card p-5" aria-labelledby="department-queue-title">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-[650] uppercase tracking-wide text-indigo-600">Area dipartimentale</p>
          <h3 id="department-queue-title" className="mt-1 text-base font-[650] text-slate-800">Coda delle proposte</h3>
          <p className="mt-1 text-sm leading-6 text-slate-500">Esamina ogni proposta, registra la decisione e scarica localmente l’esito dipartimentale.</p>
        </div>
        {items.length > 0 && (
          <button type="button" onClick={clearQueue} className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm font-[600] text-slate-600 hover:bg-slate-50">
            <Trash2 size={15} /> Svuota coda
          </button>
        )}
      </div>

      {persistenceError && <p className="mt-4 rounded-lg bg-red-50 px-3 py-2 text-xs text-red-700">{persistenceError}</p>}

      {!hydrated ? (
        <p className="mt-4 text-sm text-slate-500">Caricamento della coda locale…</p>
      ) : items.length === 0 ? (
        <div className="mt-5 rounded-xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center">
          <Inbox className="mx-auto text-slate-400" size={24} />
          <p className="mt-2 text-sm font-[600] text-slate-700">Nessuna proposta in coda</p>
          <p className="mt-1 text-xs leading-5 text-slate-500">Importa uno o più file `.cml` validi e aggiungili alla coda dipartimentale.</p>
        </div>
      ) : (
        <>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5" aria-label="Riepilogo coda dipartimentale">
            {[
              ['Proposte', summary.total],
              ['Da decidere', summary.pending],
              ['Decise', summary.decided],
              ['Discipline', summary.disciplines],
              ['Conflitti', readiness.conflicts],
            ].map(([label, value]) => (
              <div key={label} className={`rounded-xl border px-3 py-3 ${label === 'Conflitti' && Number(value) > 0 ? 'border-amber-300 bg-amber-50' : 'border-slate-200 bg-slate-50'}`}>
                <p className="text-xs text-slate-500">{label}</p>
                <p className="mt-1 text-lg font-[700] text-slate-800">{value}</p>
              </div>
            ))}
          </div>

          <section className="mt-5 rounded-xl border border-indigo-200 bg-indigo-50/50 p-4" aria-labelledby="department-export-title">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <p className="text-xs font-[650] uppercase tracking-wide text-indigo-700">Esito dipartimentale</p>
                <h4 id="department-export-title" className="mt-1 text-sm font-[700] text-slate-800">File pronto per la validazione umana</h4>
                <p className="mt-1 text-xs leading-5 text-slate-600">
                  {readiness.decided} decisioni complete saranno esportate. {readiness.pending} proposte ancora da decidere saranno escluse.
                </p>
                <p className="mt-2 text-[11px] text-slate-500">Accettate {decisionCounts.accettate} · Respinte {decisionCounts.respinte} · Modificate {decisionCounts.modificate} · Rinviate {decisionCounts.rinviate}</p>
                {readiness.invalid > 0 && <p className="mt-2 text-xs font-[600] text-red-700">{readiness.invalid} decisioni modificate non hanno un testo concordato valido.</p>}
                {readiness.conflicts > 0 && <p role="alert" className="mt-2 text-xs font-[650] text-amber-800">{readiness.conflicts} {readiness.conflicts === 1 ? 'unità contiene' : 'unità contengono'} più decisioni positive. Mantieni una sola proposta accettata o modificata per unità prima di esportare.</p>}
                {exportError && <p className="mt-2 text-xs font-[600] text-red-700">{exportError}</p>}
              </div>
              <button type="button" onClick={handleExport} disabled={!readiness.ready}
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-[650] text-white hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-slate-300">
                <Download size={16} /> Esporta esito dipartimentale
              </button>
            </div>
          </section>

          <div className="mt-5 grid gap-3">
            {items.map(item => (
              <article key={item.id} className="rounded-xl border border-slate-200 bg-white p-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <p className="text-sm font-[650] text-slate-800">{item.discipline} · {item.proposal.unitaId}</p>
                      {item.decision && <span className="rounded-full bg-indigo-50 px-2.5 py-1 text-xs font-[650] text-indigo-700">{DECISION_LABELS[item.decision.value]}</span>}
                    </div>
                    <p className="mt-1 text-xs text-slate-500">{item.author} · {item.ordine} · {item.annoScolastico}</p>
                  </div>
                  <button type="button" onClick={() => removeItem(item.id)} aria-label="Rimuovi proposta dalla coda" className="rounded-lg border border-slate-200 p-2 text-slate-500 hover:bg-slate-50 hover:text-slate-700">
                    <X size={15} />
                  </button>
                </div>

                <dl className="mt-3 grid gap-3 text-xs sm:grid-cols-2">
                  <div><dt className="text-slate-400">Testo vigente</dt><dd className="mt-1 leading-5 text-slate-600">{item.proposal.testoAttuale}</dd></div>
                  <div><dt className="text-slate-400">Testo proposto</dt><dd className="mt-1 leading-5 text-slate-700">{item.proposal.proposta}</dd></div>
                </dl>

                {item.decision && (
                  <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-3 text-xs leading-5 text-slate-600">
                    {item.decision.testoModificato && <p><span className="font-[650] text-slate-700">Testo concordato:</span> {item.decision.testoModificato}</p>}
                    {item.decision.note && <p className={item.decision.testoModificato ? 'mt-2' : ''}><span className="font-[650] text-slate-700">Nota:</span> {item.decision.note}</p>}
                  </div>
                )}

                {editingId === item.id ? (
                  <DecisionEditor item={item} onClose={() => setEditingId(null)} />
                ) : (
                  <div className="mt-4 flex flex-wrap gap-2">
                    <button type="button" onClick={() => setEditingId(item.id)} className="inline-flex items-center gap-2 rounded-lg bg-indigo-50 px-3 py-2 text-sm font-[600] text-indigo-700 hover:bg-indigo-100">
                      <PencilLine size={15} /> {item.decision ? 'Modifica decisione' : 'Decidi'}
                    </button>
                    {item.decision && (
                      <button type="button" onClick={() => clearDecision(item.id)} className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm font-[600] text-slate-600 hover:bg-slate-50">
                        <RotateCcw size={15} /> Rimuovi decisione
                      </button>
                    )}
                  </div>
                )}

                <p className="mt-3 text-[11px] text-slate-400">Origine: {item.sourceFileName}</p>
              </article>
            ))}
          </div>
        </>
      )}
    </section>
  )
}
