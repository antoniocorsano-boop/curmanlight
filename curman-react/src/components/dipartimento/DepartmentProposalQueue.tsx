import { useEffect, useMemo } from 'react'
import { Inbox, Trash2, X } from 'lucide-react'
import { useDepartmentQueueStore } from '@/stores/useDepartmentQueueStore'

export function DepartmentProposalQueue() {
  const { items, hydrated, persistenceError, hydrate, removeItem, clearQueue } = useDepartmentQueueStore()

  useEffect(() => hydrate(), [hydrate])

  const summary = useMemo(() => ({
    total: items.length,
    disciplines: new Set(items.map(item => item.discipline)).size,
    authors: new Set(items.map(item => item.author)).size,
  }), [items])

  return (
    <section className="card p-5" aria-labelledby="department-queue-title">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-[650] uppercase tracking-wide text-indigo-600">Area dipartimentale</p>
          <h3 id="department-queue-title" className="mt-1 text-base font-[650] text-slate-800">Coda delle proposte</h3>
          <p className="mt-1 text-sm leading-6 text-slate-500">Raccoglie nel browser le proposte valide importate. Le decisioni saranno gestite in un passaggio successivo.</p>
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
          <div className="mt-5 grid gap-3 sm:grid-cols-3" aria-label="Riepilogo coda dipartimentale">
            {[
              ['Proposte', summary.total],
              ['Discipline', summary.disciplines],
              ['Docenti', summary.authors],
            ].map(([label, value]) => (
              <div key={label} className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-3">
                <p className="text-xs text-slate-500">{label}</p>
                <p className="mt-1 text-lg font-[700] text-slate-800">{value}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 grid gap-3">
            {items.map(item => (
              <article key={item.id} className="rounded-xl border border-slate-200 bg-white p-4">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-sm font-[650] text-slate-800">{item.discipline} · {item.proposal.unitaId}</p>
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
                <p className="mt-3 text-[11px] text-slate-400">Origine: {item.sourceFileName}</p>
              </article>
            ))}
          </div>
        </>
      )}
    </section>
  )
}
