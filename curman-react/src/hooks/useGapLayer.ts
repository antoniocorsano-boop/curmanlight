import { useMemo } from 'react'
import type { GapLayer, GapEntry } from '@/types/gap'
import type { DisciplinaSlug } from '@/types/curriculum'

const gapModules = import.meta.glob<GapLayer>('../data/gap/*.gap.json', { eager: true, import: 'default' })

export function useGapLayer(slug: DisciplinaSlug | null): GapLayer | null {
  return useMemo(() => {
    if (!slug) return null
    const path = `../data/gap/${slug}.gap.json`
    return (gapModules[path] as GapLayer) ?? null
  }, [slug])
}

export function useGapEntries(gapLayer: GapLayer | null, filter?: 'actionable' | 'all'): GapEntry[] {
  return useMemo(() => {
    if (!gapLayer) return []
    if (filter === 'actionable') return gapLayer.entries.filter(e => e.status === 'proposta' || e.status === 'non_validato')
    return gapLayer.entries
  }, [gapLayer, filter])
}
