import { create } from 'zustand'
import type { RevisioneState } from '@/types/state'
import type { Decisione, DecisioniMap, GapLayer, ProgressStats } from '@/types/gap'
import { computeProgress } from '@/lib/gap'

export const useRevisioneStore = create<RevisioneState>((set, get) => ({
  decisioni: {} as DecisioniMap,
  approve: (unitaId: string, testoCustom?: string) => set(s => ({ decisioni: { ...s.decisioni, [unitaId]: { unitaId, decisione: 'approvata', testoFinale: testoCustom ?? null, timestamp: new Date().toISOString() } } })),
  reject: (unitaId: string) => set(s => ({ decisioni: { ...s.decisioni, [unitaId]: { unitaId, decisione: 'rifiutata', testoFinale: null, timestamp: new Date().toISOString() } } })),
  undoDecision: (unitaId: string) => set(s => { const next = { ...s.decisioni }; delete next[unitaId]; return { decisioni: next } }),
  resetAll: () => set({ decisioni: {} }),
  resetDisciplina: (_disciplina: string, gapLayer: GapLayer) => set(s => {
    const ids = new Set(gapLayer.entries.map(e => e.unitaId))
    const next: DecisioniMap = {}
    for (const [id, dec] of Object.entries(s.decisioni)) { if (!ids.has(id)) next[id] = dec }
    return { decisioni: next }
  }),
  getDecisione: (unitaId: string): Decisione | undefined => get().decisioni[unitaId],
  getProgress: (disciplina: string, gapLayer: GapLayer): ProgressStats => computeProgress(disciplina, get().decisioni, gapLayer),
}))
