import { useState, useEffect } from 'react'
import type { GapLayer, GapEntry } from '@/types/gap'
import type { DisciplinaSlug } from '@/types/curriculum'

const gapModules = import.meta.glob<{ default: GapLayer }>(
  '../data/gap/*.gap.json'
)

export function useGapLayer(slug: DisciplinaSlug | null): GapLayer | null {
  const [data, setData] = useState<GapLayer | null>(null)

  useEffect(() => {
    if (!slug) { setData(null); return }
    const path = `../data/gap/${slug}.gap.json`
    const loader = gapModules[path]
    if (!loader) { setData(null); return }
    let cancelled = false
    loader().then(mod => { if (!cancelled) setData(mod.default) })
    return () => { cancelled = true }
  }, [slug])

  return data
}

export function useGapEntries(
  gapLayer: GapLayer | null,
  filter?: 'actionable' | 'all'
): GapEntry[] {
  if (!gapLayer) return []
  if (filter === 'actionable') return gapLayer.entries.filter(e => e.status === 'proposta' || e.status === 'non_validato')
  return gapLayer.entries
}
