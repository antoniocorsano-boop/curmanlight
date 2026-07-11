import { useAppStore } from '@/stores/useAppStore'
import { useRevisioneStore } from '@/stores/useRevisioneStore'
import { useCurriculum, useFilteredUnita } from '@/hooks/useCurriculum'
import { useGapLayer } from '@/hooks/useGapLayer'
import { useProgress } from '@/hooks/useProgress'
import { GapComparison } from '@/components/revisione/GapComparison'
import { ProgressBar } from '@/components/revisione/ProgressBar'
import { DISCIPLINE_SLUGS, DISCIPLINE_LABELS } from '@/types/curriculum'
import { needsDecision } from '@/lib/gap'
import type { DisciplinaSlug } from '@/types/curriculum'
import type { FiltroStato, WorkDecisionPersistenceStatus } from '@/types/state'

const FILTRI: { value: FiltroStato; label: string }[] = [
  { value: 'tutti', label: 'Tutte' },
  { value: 'da_decidere', label: 'Da decidere' },
  { value: 'approvati', label: 'Proposte accolte' },
  { value: 'rifiutati', label: 'Testo vigente mantenuto' },
]

const STATUS_CLASSES: Record<WorkDecisionPersistenceStatus, string> = {
  idle: 'border-slate-200 bg-slate-50 text-slate-600',
  loading: 'border-amber-200 bg-amber-50 text-amber-700',
  restored: 'border-sky-200 bg-sky-50 text-sky-700',
  saved: 'border-emerald-200 bg-emerald-50 text-emerald-700',
  error: 'border-red-200 bg-red-50 text-red-700',
}

export function RevisioneView() {
  const { disciplinaSelezionata, setDisciplina, profilo, filtroStato, setFiltroStato } = useAppStore()
  const slug = disciplinaSelezionata as DisciplinaSlug | null
  const curriculum = useCurriculum(slug)
  const gapLayer = useGapLayer(slug)
  const unita = useFilteredUnita(curriculum, gapLayer, profilo?.ordine ?? 'Tutti')
  const decisioni = useRevisioneStore(s => s.decisioni)
  const workDecisionHydrated = useRevisioneStore(s => s.workDecisionHydrated)
  const persistenceStatus = useRevisioneStore(s => s.workDecisionPersistenceStatus)
  const persistenceMessage = useRevisioneStore(s => s.workDecisionPersistenceMessage)
  const lastSaved = useRevisioneStore(s => s.lastWorkDecisionSaved)
  const progress = useProgress(disciplinaSelezionata, gapLayer, decisioni)

  const filteredUnita = unita.filter(u => {
    if (!u.gap) return false
    const dec = decisioni[u.id]
    switch (filtroStato) {
      case 'da_decidere': return needsDecision(u.gap, dec)
      case 'approvati': return dec?.decisione === 'approvata'
      case 'rifiutati': return dec?.decisione === 'rifiutata'
      default: return u.gap.status !== 'vigente' && u.gap.status !== 'archiviato'
    }
  })

  const statusMessage = persistenceMessage ?? (workDecisionHydrated
    ? 'Le scelte vengono conservate automaticamente su questo dispositivo.'
    : 'Preparazione del lavoro locale in corso…')
  const savedLabel = lastSaved
    ? ` Ultimo salvataggio: ${new Date(lastSaved).toLocaleString('it-IT', { dateStyle: 'short', timeStyle: 'short' })}.`
    : ''

  return (
    <div className="max-w-3xl mx-auto flex flex-col gap-6">
      <div>
        <h2 className="text-lg font-[600] text-slate-800">Revisione</h2>
        <p className="text-sm text-slate-500">Confronta il curricolo vigente con le proposte IN 2025 e registra una scelta di lavoro nel contesto dichiarato.</p>
      </div>
      <div className={`rounded-lg border px-3 py-2 text-xs leading-5 ${STATUS_CLASSES[persistenceStatus]}`} role="status" aria-live="polite">
        {statusMessage}{savedLabel}
      </div>
      <div className="flex flex-wrap gap-4 items-end">
        <div>
          <label className="text-xs font-[500] text-slate-500 block mb-1.5">Disciplina</label>
          <select value={slug ?? ''} onChange={e => setDisciplina(e.target.value || null)} className="px-3 py-2 text-sm border border-slate-200 rounded-lg bg-white">
            <option value="">Seleziona</option>
            {DISCIPLINE_SLUGS.map(s => <option key={s} value={s}>{DISCIPLINE_LABELS[s]}</option>)}
          </select>
        </div>
        <div className="flex gap-1">
          {FILTRI.map(f => (
            <button key={f.value} onClick={() => setFiltroStato(f.value)}
              className={`px-3 py-1.5 text-xs rounded-md transition-colors ${filtroStato === f.value ? 'bg-indigo-50 text-indigo-700 font-[500]' : 'text-slate-500 hover:bg-slate-50'}`}>
              {f.label}
            </button>
          ))}
        </div>
      </div>
      {slug && !gapLayer ? (
        <div className="card p-5 bg-amber-50 border-amber-200">
          <p className="text-sm font-[500] text-amber-800">Funzione non disponibile</p>
          <p className="text-xs text-amber-700 mt-1">Il livello di allineamento non è ancora stato generato per questa disciplina. Torna più tardi o contatta il referente curricolare.</p>
        </div>
      ) : (
        <>
          {slug && <ProgressBar stats={progress} label={DISCIPLINE_LABELS[slug]} />}
          {filteredUnita.length > 0 ? (
            <div className="flex flex-col gap-4">
              {filteredUnita.map(u => (
                <GapComparison key={u.id} unita={u} entry={u.gap!} decisione={decisioni[u.id]} profilo={profilo} />
              ))}
            </div>
          ) : slug ? (
            <p className="text-sm text-slate-400 text-center py-8">
              {filtroStato === 'tutti' ? 'Nessuna proposta per questa disciplina.' : 'Nessun elemento corrisponde al filtro.'}
            </p>
          ) : (
            <p className="text-sm text-slate-400 text-center py-8">Seleziona una disciplina per iniziare.</p>
          )}
        </>
      )}
    </div>
  )
}
