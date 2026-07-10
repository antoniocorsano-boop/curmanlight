import { useMemo } from 'react'
import type { GapLayer, DecisioniMap, ProgressStats } from '@/types/gap'
import { computeProgress } from '@/lib/gap'

export function useProgress(disciplina: string | null, gapLayer: GapLayer | null, decisioni: DecisioniMap): ProgressStats {
  return useMemo(() => {
    if (!disciplina || !gapLayer) return { totale: 0, decise: 0, approvate: 0, rifiutate: 0, percentuale: 100 }
    return computeProgress(disciplina, decisioni, gapLayer)
  }, [disciplina, gapLayer, decisioni])
}
