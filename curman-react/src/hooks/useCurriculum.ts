import { useMemo } from 'react'
import type { CurriculumDisciplina, UnitaApprendimento, Ordine, DisciplinaSlug } from '@/types/curriculum'
import { filterByOrdine, filterByNucleo, mergeGapLayer } from '@/lib/curriculum'
import type { GapLayer } from '@/types/gap'

const curriculumModules = import.meta.glob<CurriculumDisciplina>('../data/curriculum/*.json', { eager: true, import: 'default' })

export function useCurriculum(slug: DisciplinaSlug | null): CurriculumDisciplina | null {
  return useMemo(() => {
    if (!slug) return null
    const path = `../data/curriculum/${slug}.json`
    return (curriculumModules[path] as CurriculumDisciplina) ?? null
  }, [slug])
}

export function useFilteredUnita(curriculum: CurriculumDisciplina | null, gapLayer: GapLayer | null, ordine: Ordine | 'Tutti', nucleo?: string): UnitaApprendimento[] {
  return useMemo(() => {
    if (!curriculum) return []
    let unita = mergeGapLayer(curriculum.unitaApprendimento, gapLayer)
    unita = filterByOrdine(unita, ordine)
    if (nucleo) unita = filterByNucleo(unita, nucleo)
    return unita
  }, [curriculum, gapLayer, ordine, nucleo])
}
