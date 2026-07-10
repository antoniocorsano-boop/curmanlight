import { useState, useEffect } from 'react'
import type { CurriculumDisciplina, UnitaApprendimento, Ordine, DisciplinaSlug } from '@/types/curriculum'
import { filterByOrdine, filterByNucleo, mergeGapLayer } from '@/lib/curriculum'
import type { GapLayer } from '@/types/gap'

const curriculumModules = import.meta.glob<{ default: CurriculumDisciplina }>(
  '../data/curriculum/*.json'
)

export function useCurriculum(slug: DisciplinaSlug | null): CurriculumDisciplina | null {
  const [data, setData] = useState<CurriculumDisciplina | null>(null)

  useEffect(() => {
    if (!slug) { setData(null); return }
    const path = `../data/curriculum/${slug}.json`
    const loader = curriculumModules[path]
    if (!loader) { setData(null); return }
    let cancelled = false
    loader().then(mod => { if (!cancelled) setData(mod.default) })
    return () => { cancelled = true }
  }, [slug])

  return data
}

export function useFilteredUnita(
  curriculum: CurriculumDisciplina | null,
  gapLayer: GapLayer | null,
  ordine: Ordine | 'Tutti',
  nucleo?: string
): UnitaApprendimento[] {
  if (!curriculum) return []
  let unita = mergeGapLayer(curriculum.unitaApprendimento, gapLayer)
  unita = filterByOrdine(unita, ordine)
  if (nucleo) unita = filterByNucleo(unita, nucleo)
  return unita
}
