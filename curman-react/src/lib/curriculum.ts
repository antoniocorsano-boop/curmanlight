import type { UnitaApprendimento, Ordine } from '@/types/curriculum'
import type { GapEntry, GapLayer } from '@/types/gap'

export function filterByOrdine(unita: UnitaApprendimento[], ordine: Ordine | 'Tutti'): UnitaApprendimento[] {
  if (ordine === 'Tutti') return unita
  return unita.filter(u => u.ordine === ordine)
}

export function filterByNucleo(unita: UnitaApprendimento[], nucleo?: string): UnitaApprendimento[] {
  if (!nucleo || nucleo === 'Tutti') return unita
  return unita.filter(u => u.nucleo === nucleo)
}

export function mergeGapLayer(unita: UnitaApprendimento[], gapLayer: GapLayer | null): UnitaApprendimento[] {
  if (!gapLayer) return unita
  const map = new Map<string, GapEntry>()
  for (const entry of gapLayer.entries) {
    map.set(entry.unitaId, entry)
  }
  return unita.map(u => {
    const gap = map.get(u.id)
    if (!gap) return u
    return { ...u, gap }
  })
}
