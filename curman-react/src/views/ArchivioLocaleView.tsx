import { useMemo, useState } from 'react'
import { Archive, RefreshCw } from 'lucide-react'
import { readLocalArchive } from '@/lib/localArchive'
import type { LocalArchiveKind, LocalArchiveSnapshot } from '@/lib/localArchive'

const LABELS: Record<LocalArchiveKind, string> = {
  'annual-plan': 'Programmazioni annuali',
  uda: 'UDA',
  'teacher-proposal': 'Proposte docente',
  'department-item': 'Lavori dipartimentali',
  'referent-validation': 'Validazioni Referente',
}

export function ArchivioLocaleView() {
  const [snapshot, setSnapshot] = useState<LocalArchiveSnapshot>(() => readLocalArchive())
  const [filter, setFilter] = useState<LocalArchiveKind | 'all'>('all')

  const visibleEntries = useMemo(
    () => filter === 'all' ? snapshot.entries : snapshot.entries.filter(entry => entry.kind === filter),
    [filter, snapshot.entries],
  )

  const counts = useMemo(() => {
    const result = new Map<LocalArchiveKind, number>()
    snapshot.entries.forEach(entry => result.set(entry.kind, (result.get(entry.kind) ?? 0) + 1))
    return result
  }, [snapshot.entries])

  return (
    <div className="mx-auto w-full max-w-6xl p-5 sm:p-8">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="mb-1 text-xs font-[650] uppercase tracking-wide text-indigo-600">Persistenza locale</p>
          <h1 className="text-2xl font-[700] text-slate-900">Archivio locale</h1>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-500">Raccoglie in un’unica vista i lavori salvati nel browser. Non sposta, modifica o elimina i dati originali.</p>
        </div>
        <button type="button" onClick={() => setSnapshot(readLocalArchive())} className="inline-flex items-center justify-center gap-2 rounded-xl border border-indigo-200 bg-white px-4 py-2.5 text-sm font-[650] text-indigo-700 hover:bg-indigo-50">
          <RefreshCw size={16} /> Aggiorna archivio
        </button>
      </div>

      <section className="mb-6 rounded-2xl border border-indigo-100 bg-indigo-50/50 p-4">
        <div className="flex gap-3">
          <Archive size={20} className="mt-0.5 shrink-0 text-indigo-600" />
          <div className="text-sm leading-6 text-slate-600">
            <p><strong>{snapshot.entries.length}</strong> elementi rilevati in questo browser.</p>
            <p>Ultima lettura: {new Date(snapshot.scannedAt).toLocaleString('it-IT')}</p>
            {snapshot.errors.length > 0 && <p role="alert" className="mt-1 font-[600] text-red-700">{snapshot.errors.join(' · ')}</p>}
          </div>
        </div>
      </section>

      <div className="mb-5 flex flex-wrap gap-2" aria-label="Filtra archivio">
        <FilterButton active={filter === 'all'} onClick={() => setFilter('all')}>Tutti ({snapshot.entries.length})</FilterButton>
        {(Object.keys(LABELS) as LocalArchiveKind[]).map(kind => (
          <FilterButton key={kind} active={filter === kind} onClick={() => setFilter(kind)}>
            {LABELS[kind]} ({counts.get(kind) ?? 0})
          </FilterButton>
        ))}
      </div>

      {visibleEntries.length === 0 ? (
        <section className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center">
          <h2 className="text-base font-[700] text-slate-800">Nessun lavoro in questa sezione</h2>
          <p className="mt-2 text-sm leading-6 text-slate-500">I documenti compariranno dopo un salvataggio locale nelle rispettive aree di lavoro.</p>
        </section>
      ) : (
        <div className="grid gap-3">
          {visibleEntries.map(entry => (
            <article key={entry.id} className="rounded-2xl border border-slate-200 bg-white p-4">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                  <p className="text-xs font-[650] uppercase tracking-wide text-indigo-600">{LABELS[entry.kind]}</p>
                  <h2 className="mt-1 break-words text-base font-[700] text-slate-800">{entry.title}</h2>
                  <p className="mt-1 break-words text-sm leading-6 text-slate-500">{entry.context}</p>
                </div>
                <div className="shrink-0 text-left sm:text-right">
                  <p className="text-sm font-[650] text-slate-700">{entry.status}</p>
                  <p className="mt-1 text-xs text-slate-500">{entry.updatedAt ? new Date(entry.updatedAt).toLocaleString('it-IT') : 'Data non disponibile'}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}

function FilterButton({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button type="button" onClick={onClick} aria-pressed={active} className={`rounded-xl border px-3 py-2 text-sm font-[650] ${active ? 'border-indigo-300 bg-indigo-50 text-indigo-700' : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'}`}>
      {children}
    </button>
  )
}
