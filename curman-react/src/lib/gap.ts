import type { GapEntry, GapLayer, GapStatus, Decisione, DecisioniMap, ProfiloUtente, ProgressStats } from '@/types/gap'
import type { Ordine, UnitaApprendimento } from '@/types/curriculum'

export function needsDecision(gap: GapEntry | undefined, decisione: Decisione | undefined): boolean {
  if (!gap) return false
  if (gap.status === 'vigente' || gap.status === 'applicabile' || gap.status === 'archiviato') return false
  return !decisione?.decisione
}

export function canEditOrder(ordine: Ordine, profilo: ProfiloUtente): boolean {
  if (profilo.ruolo === 'consultatore') return false
  if (profilo.ordine === 'Tutti') return true
  return profilo.ordine === ordine
}

export function computeProgress(_disciplina: string, decisioni: DecisioniMap, gapLayer: GapLayer): ProgressStats {
  const entries = gapLayer.entries.filter(e => e.status !== 'vigente' && e.status !== 'archiviato')
  const totale = entries.length
  let approvate = 0, rifiutate = 0
  for (const entry of entries) {
    const dec = decisioni[entry.unitaId]
    if (dec?.decisione === 'approvata') approvate++
    else if (dec?.decisione === 'rifiutata') rifiutate++
  }
  const decise = approvate + rifiutate
  return { totale, decise, approvate, rifiutate, percentuale: totale > 0 ? Math.round((decise / totale) * 100) : 100 }
}

export function getTestoFinale(unita: UnitaApprendimento, decisione: Decisione | undefined, gap: GapEntry | undefined): string {
  if (decisione?.testoFinale) return decisione.testoFinale
  if (decisione?.decisione === 'approvata' && gap?.proposto) return gap.proposto
  return unita.traguardo
}

export function filterByStatus(entries: GapEntry[], status: GapStatus | 'tutti'): GapEntry[] {
  if (status === 'tutti') return entries
  return entries.filter(e => e.status === status)
}

export function isActionableStatus(status: GapStatus): boolean {
  return status === 'proposta' || status === 'non_validato'
}
