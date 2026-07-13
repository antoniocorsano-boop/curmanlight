import { useCallback, useEffect, useState } from 'react'
import type { CurriculumDisciplina, UnitaApprendimento, Ordine, DisciplinaSlug } from '@/types/curriculum'
import { filterByOrdine, filterByNucleo, mergeGapLayer } from '@/lib/curriculum'
import type { GapLayer } from '@/types/gap'

const curriculumModules = import.meta.glob<{ default: CurriculumDisciplina }>(
  '../data/curriculum/*.json'
)

export type CurriculumResource = {
  data: CurriculumDisciplina | null
  status: 'idle' | 'loading' | 'success' | 'error'
  error: string | null
  retry: () => void
}

export function useCurriculumResource(slug: DisciplinaSlug | null): CurriculumResource {
  const [data, setData] = useState<CurriculumDisciplina | null>(null)
  const [status, setStatus] = useState<CurriculumResource['status']>('idle')
  const [error, setError] = useState<string | null>(null)
  const [attempt, setAttempt] = useState(0)

  const retry = useCallback(() => setAttempt(current => current + 1), [])

  useEffect(() => {
    if (!slug) {
      setData(null)
      setStatus('idle')
      setError(null)
      return
    }

    const path = `../data/curriculum/${slug}.json`
    const loader = curriculumModules[path]
    if (!loader) {
      setData(null)
      setStatus('error')
      setError('Il curricolo selezionato non è presente nei dati disponibili.')
      return
    }

    let cancelled = false
    setData(null)
    setStatus('loading')
    setError(null)

    loader()
      .then(mod => {
        if (cancelled) return
        setData(mod.default)
        setStatus('success')
      })
      .catch(() => {
        if (cancelled) return
        setData(null)
        setStatus('error')
        setError('Non è stato possibile caricare il curricolo selezionato.')
      })

    return () => { cancelled = true }
  }, [slug, attempt])

  return { data, status, error, retry }
}

export function useCurriculum(slug: DisciplinaSlug | null): CurriculumDisciplina | null {
  return useCurriculumResource(slug).data
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
