import { useAppStore } from '@/stores/useAppStore'
import { useRevisioneStore } from '@/stores/useRevisioneStore'
import { useProposalStore } from '@/stores/useProposalStore'
import { useCurriculum, useFilteredUnita } from '@/hooks/useCurriculum'
import { useGapLayer } from '@/hooks/useGapLayer'
import { useProgress } from '@/hooks/useProgress'
import { GapComparison } from '@/components/revisione/GapComparison'
import { ProgressBar } from '@/components/revisione/ProgressBar'
import { TeacherProposalDraftEditor } from '@/components/proposte/TeacherProposalDraftEditor'
import { ApplicabilityContextBanner } from '@/components/curriculum/ApplicabilityContextBanner'
import { DISCIPLINE_SLUGS, DISCIPLINE_LABELS } from '@/types/curriculum'
import { needsDecision } from '@/lib/gap'
import type { DisciplinaSlug, OrdineEsteso } from '@/types/curriculum'
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
  const ordine = (profilo?.ordine ?? 'Tutti') as OrdineEsteso
  const unita = useFilteredUnita(curriculum, gapLayer, ordine)
  const proposalUnits = curriculum
    ? curriculum.unitaApprendimento.filter(unit => ordine === 'Tutti' || unit.ordine === ordine)
    : []
  const selectedUnitId = useProposalStore(state => state.selectedUnitId)
  const selectUnit = useProposalStore(state => state.selectUnit)
  const proposalDrafts = useProposalStore(state => state.drafts)
  const selectedProposalUnit = proposalUnits.find(unit => unit.id === selectedUnitId) ?? null
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
  const disciplineDraftCount = proposalUnits.filter(unit => proposalDrafts[unit.id]).length

  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-6">
      <header>
        <h1 className="text-2xl font-[700] text-slate-800">Proponi un aggiornamento</h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">Scegli un contenuto del curricolo, prepara una modifica motivata e salvala come bozza locale prima della condivisione.</p>
      </header>

      <ApplicabilityContextBanner profilo={profilo} ordine={ordine} disciplina={slug} mode="revisione" />

      <section className="rounded-2xl border border-slate-200 bg-white p-5" aria-labelledby="new-proposal-title">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h2 id="new-proposal-title" className="text-base font-[700] text-slate-800">Nuova proposta docente</h2>
            <p className="mt-1 text-sm leading-6 text-slate-500">Le bozze restano sul dispositivo e non producono decisioni né modifiche automatiche.</p>
          </div>
          {disciplineDraftCount > 0 && <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-[600] text-amber-700">{disciplineDraftCount} {disciplineDraftCount === 1 ? 'bozza' : 'bozze'}</span>}
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <label className="text-sm font-[600] text-slate-700">Disciplina
            <select value={slug ?? ''} onChange={event => { setDisciplina(event.target.value || null); selectUnit(null) }} className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm">
              <option value="">Seleziona una disciplina</option>
              {DISCIPLINE_SLUGS.map(item => <option key={item} value={item}>{DISCIPLINE_LABELS[item]}</option>)}
            </select>
          </label>
          <label className="text-sm font-[600] text-slate-700">Contenuto da aggiornare
            <select value={selectedUnitId ?? ''} onChange={event => selectUnit(event.target.value || null)} disabled={!slug || proposalUnits.length === 0} className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm disabled:bg-slate-50">
              <option value="">Seleziona un contenuto</option>
              {proposalUnits.map(unit => <option key={unit.id} value={unit.id}>{unit.nucleo} · {unit.traguardo.slice(0, 90)}{unit.traguardo.length > 90 ? '…' : ''}</option>)}
            </select>
          </label>
        </div>
      </section>

      {selectedProposalUnit ? (
        <TeacherProposalDraftEditor key={selectedProposalUnit.id} unit={selectedProposalUnit} />
      ) : slug ? (
        <section className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center text-sm text-slate-500">Seleziona un contenuto per aprire la bozza.</section>
      ) : null}

      <section className="border-t border-slate-200 pt-6" aria-labelledby="existing-proposals-title">
        <h2 id="existing-proposals-title" className="text-lg font-[700] text-slate-800">Valuta proposte già disponibili</h2>
        <p className="mt-1 text-sm leading-6 text-slate-500">Confronta il testo vigente con le proposte IN 2025 e registra una scelta di lavoro nel contesto dichiarato.</p>
      </section>

      <div className="rounded-2xl border border-violet-200 bg-violet-50 p-4 text-sm leading-6 text-violet-950">
        <p className="font-[650]">Confronto transitorio, non sostituzione automatica</p>
        <p className="mt-1">Il testo vigente resta leggibile insieme alla proposta. Accogliere una proposta registra una scelta di lavoro locale e non modifica da sola il curricolo deliberato dell'istituto.</p>
      </div>

      <div className={`rounded-lg border px-3 py-2 text-xs leading-5 ${STATUS_CLASSES[persistenceStatus]}`} role="status" aria-live="polite">
        {statusMessage}{savedLabel}
      </div>
      <div className="flex flex-wrap items-end gap-4">
        <div className="flex gap-1">
          {FILTRI.map(f => (
            <button key={f.value} onClick={() => setFiltroStato(f.value)} className={`rounded-md px-3 py-1.5 text-xs transition-colors ${filtroStato === f.value ? 'bg-indigo-50 text-indigo-700 font-[500]' : 'text-slate-500 hover:bg-slate-50'}`}>
              {f.label}
            </button>
          ))}
        </div>
      </div>
      {slug && !gapLayer ? (
        <div className="card border-amber-200 bg-amber-50 p-5">
          <p className="text-sm font-[500] text-amber-800">Confronto non disponibile</p>
          <p className="mt-1 text-xs text-amber-700">Puoi comunque preparare una nuova bozza docente. Il livello di allineamento non è ancora stato generato per questa disciplina.</p>
        </div>
      ) : (
        <>
          {slug && <ProgressBar stats={progress} label={DISCIPLINE_LABELS[slug]} />}
          {filteredUnita.length > 0 ? (
            <div className="flex flex-col gap-4">
              {filteredUnita.map(u => <GapComparison key={u.id} unita={u} entry={u.gap!} decisione={decisioni[u.id]} profilo={profilo} />)}
            </div>
          ) : slug ? (
            <p className="py-8 text-center text-sm text-slate-400">{filtroStato === 'tutti' ? 'Nessuna proposta già disponibile per questa disciplina.' : 'Nessun elemento corrisponde al filtro.'}</p>
          ) : (
            <p className="py-8 text-center text-sm text-slate-400">Seleziona una disciplina per iniziare.</p>
          )}
        </>
      )}
    </div>
  )
}
