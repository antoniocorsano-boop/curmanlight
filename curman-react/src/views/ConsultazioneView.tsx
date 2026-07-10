import { useAppStore } from '@/stores/useAppStore'
import { useCurriculum, useFilteredUnita } from '@/hooks/useCurriculum'
import { useGapLayer } from '@/hooks/useGapLayer'
import { UnitaCard } from '@/components/curriculum/UnitaCard'
import { useRevisioneStore } from '@/stores/useRevisioneStore'
import { DISCIPLINE_SLUGS, DISCIPLINE_LABELS } from '@/types/curriculum'
import type { DisciplinaSlug } from '@/types/curriculum'

export function ConsultazioneView() {
  const { disciplinaSelezionata, setDisciplina, profilo } = useAppStore()
  const slug = disciplinaSelezionata as DisciplinaSlug | null
  const curriculum = useCurriculum(slug)
  const gapLayer = useGapLayer(slug)
  const unita = useFilteredUnita(curriculum, gapLayer, profilo?.ordine ?? 'Tutti')
  const decisioni = useRevisioneStore(s => s.decisioni)

  return (
    <div className="max-w-3xl mx-auto flex flex-col gap-6">
      <div>
        <h2 className="text-lg font-[600] text-slate-800">Consultazione</h2>
        <p className="text-sm text-slate-500">Esplora il curricolo verticale per disciplina.</p>
      </div>
      <div>
        <label className="text-xs font-[500] text-slate-500 block mb-1.5">Disciplina</label>
        <select value={slug ?? ''} onChange={e => setDisciplina(e.target.value || null)} className="w-full max-w-xs px-3 py-2 text-sm border border-slate-200 rounded-lg bg-white">
          <option value="">Seleziona una disciplina</option>
          {DISCIPLINE_SLUGS.map(s => <option key={s} value={s}>{DISCIPLINE_LABELS[s]}</option>)}
        </select>
      </div>
      {curriculum && (
        <div className="flex flex-col gap-3">
          <p className="text-xs text-slate-400">{unita.length} unità di apprendimento</p>
          {unita.map(u => <UnitaCard key={u.id} unita={u} decisione={decisioni[u.id]} />)}
        </div>
      )}
      {!curriculum && slug && <p className="text-sm text-slate-400">Dati non disponibili per questa disciplina.</p>}
    </div>
  )
}
