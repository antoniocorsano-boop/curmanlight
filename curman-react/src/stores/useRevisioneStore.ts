import { create } from 'zustand'
import type { RevisioneState } from '@/types/state'
import type { Decisione, DecisioniMap, GapLayer, ProgressStats } from '@/types/gap'
import type { RecordWorkDecisionInput, WorkDecision, WorkDecisionMap } from '@/types/decision'
import { toLegacyDecision } from '@/types/decision'
import { computeProgress } from '@/lib/gap'
import {
  clearWorkDecisionPayload,
  getBrowserStorage,
  loadWorkDecisionPayload,
  saveWorkDecisionPayload,
} from '@/lib/work-decision-persistence'

function createWorkDecision(
  input: RecordWorkDecisionInput,
  previous: WorkDecision | undefined,
): WorkDecision {
  const timestamp = new Date().toISOString()
  return {
    id: `${input.contesto.unitaId}:${timestamp}`,
    unitaId: input.contesto.unitaId,
    outcome: input.outcome,
    testoFinale: input.testoFinale ?? null,
    motivazione: input.motivazione ?? null,
    note: input.note ?? null,
    timestamp,
    autore: input.autore ?? null,
    ruolo: input.contesto.ruoloDichiarato,
    ambitoDecisione: input.contesto.ambitoDecisione,
    contesto: input.contesto,
    decisionePrecedenteId: previous?.id ?? null,
  }
}

export const useRevisioneStore = create<RevisioneState>((set, get) => ({
  decisioni: {} as DecisioniMap,
  workDecisioni: {} as WorkDecisionMap,
  lastWorkDecisionSaved: null,
  workDecisionHydrated: false,
  workDecisionPersistenceStatus: 'idle',
  workDecisionPersistenceMessage: null,

  recordWorkDecision: input => {
    const previous = get().workDecisioni[input.contesto.unitaId]
    const workDecision = createWorkDecision(input, previous)
    const legacyDecision = toLegacyDecision(workDecision)

    set(state => {
      const nextLegacy = { ...state.decisioni }
      if (legacyDecision) nextLegacy[workDecision.unitaId] = legacyDecision
      else delete nextLegacy[workDecision.unitaId]
      return {
        workDecisioni: {
          ...state.workDecisioni,
          [workDecision.unitaId]: workDecision,
        },
        decisioni: nextLegacy,
      }
    })

    get().saveWorkDecisions()
    return workDecision
  },

  reopenWorkDecision: (unitaId, contesto) => {
    const previous = get().workDecisioni[unitaId]
    if (!previous) return null

    const timestamp = new Date().toISOString()
    const reopened: WorkDecision = {
      ...previous,
      id: `${unitaId}:${timestamp}`,
      outcome: 'reopened',
      testoFinale: null,
      motivazione: null,
      note: null,
      timestamp,
      ruolo: contesto.ruoloDichiarato,
      ambitoDecisione: contesto.ambitoDecisione,
      contesto,
      decisionePrecedenteId: previous.id,
    }

    set(state => {
      const nextLegacy = { ...state.decisioni }
      delete nextLegacy[unitaId]
      return {
        workDecisioni: { ...state.workDecisioni, [unitaId]: reopened },
        decisioni: nextLegacy,
      }
    })

    get().saveWorkDecisions()
    return reopened
  },

  hydrateWorkDecisions: () => {
    if (get().workDecisionHydrated) return
    get().loadWorkDecisions()
  },

  saveWorkDecisions: () => {
    const storage = getBrowserStorage()
    if (!storage) {
      set({
        workDecisionPersistenceStatus: 'error',
        workDecisionPersistenceMessage: 'Il salvataggio locale non è disponibile in questo browser.',
      })
      return false
    }
    const savedAt = saveWorkDecisionPayload(storage, get().workDecisioni, get().decisioni)
    if (!savedAt) {
      set({
        workDecisionPersistenceStatus: 'error',
        workDecisionPersistenceMessage: 'Non è stato possibile salvare le scelte sul dispositivo.',
      })
      return false
    }
    set({
      lastWorkDecisionSaved: savedAt,
      workDecisionPersistenceStatus: 'saved',
      workDecisionPersistenceMessage: 'Scelte salvate su questo dispositivo.',
    })
    return true
  },

  loadWorkDecisions: () => {
    set({ workDecisionPersistenceStatus: 'loading', workDecisionPersistenceMessage: 'Ripristino delle scelte locali…' })
    const storage = getBrowserStorage()
    if (!storage) {
      set({
        workDecisionHydrated: true,
        workDecisionPersistenceStatus: 'error',
        workDecisionPersistenceMessage: 'Il salvataggio locale non è disponibile in questo browser.',
      })
      return false
    }
    const hydrated = loadWorkDecisionPayload(storage)
    if (!hydrated) {
      set({
        workDecisionHydrated: true,
        workDecisionPersistenceStatus: 'idle',
        workDecisionPersistenceMessage: 'Nessun lavoro precedente da ripristinare.',
      })
      return false
    }
    set({
      workDecisioni: hydrated.workDecisioni,
      decisioni: hydrated.decisioni,
      lastWorkDecisionSaved: hydrated.savedAt,
      workDecisionHydrated: true,
      workDecisionPersistenceStatus: 'restored',
      workDecisionPersistenceMessage: hydrated.migratedFromLegacy
        ? 'Scelte precedenti recuperate in modalità compatibile.'
        : 'Scelte precedenti ripristinate da questo dispositivo.',
    })
    return true
  },

  clearWorkDecisionPersistence: () => {
    const storage = getBrowserStorage()
    if (!storage || !clearWorkDecisionPayload(storage)) {
      set({
        workDecisionPersistenceStatus: 'error',
        workDecisionPersistenceMessage: 'Non è stato possibile cancellare il salvataggio locale.',
      })
      return false
    }
    set({
      lastWorkDecisionSaved: null,
      workDecisionPersistenceStatus: 'idle',
      workDecisionPersistenceMessage: 'Salvataggio locale cancellato.',
    })
    return true
  },

  // Compatibilità transitoria per chiamanti non ancora migrati.
  approve: (unitaId: string, testoCustom?: string) => {
    set(state => ({
      decisioni: {
        ...state.decisioni,
        [unitaId]: {
          unitaId,
          decisione: 'approvata',
          testoFinale: testoCustom ?? null,
          timestamp: new Date().toISOString(),
        },
      },
    }))
    get().saveWorkDecisions()
  },
  reject: (unitaId: string) => {
    set(state => ({
      decisioni: {
        ...state.decisioni,
        [unitaId]: {
          unitaId,
          decisione: 'rifiutata',
          testoFinale: null,
          timestamp: new Date().toISOString(),
        },
      },
    }))
    get().saveWorkDecisions()
  },
  undoDecision: (unitaId: string) => {
    set(state => {
      const nextLegacy = { ...state.decisioni }
      const nextWork = { ...state.workDecisioni }
      delete nextLegacy[unitaId]
      delete nextWork[unitaId]
      return { decisioni: nextLegacy, workDecisioni: nextWork }
    })
    get().saveWorkDecisions()
  },
  resetAll: () => {
    set({ decisioni: {}, workDecisioni: {}, lastWorkDecisionSaved: null })
    get().clearWorkDecisionPersistence()
  },
  resetDisciplina: (_disciplina: string, gapLayer: GapLayer) => {
    set(state => {
      const ids = new Set(gapLayer.entries.map(entry => entry.unitaId))
      const nextLegacy: DecisioniMap = {}
      const nextWork: WorkDecisionMap = {}

      for (const [id, decision] of Object.entries(state.decisioni)) {
        if (!ids.has(id)) nextLegacy[id] = decision
      }
      for (const [id, decision] of Object.entries(state.workDecisioni)) {
        if (!ids.has(id)) nextWork[id] = decision
      }

      return { decisioni: nextLegacy, workDecisioni: nextWork }
    })
    get().saveWorkDecisions()
  },
  getDecisione: (unitaId: string): Decisione | undefined => get().decisioni[unitaId],
  getWorkDecision: (unitaId: string): WorkDecision | undefined => get().workDecisioni[unitaId],
  getProgress: (disciplina: string, gapLayer: GapLayer): ProgressStats =>
    computeProgress(disciplina, get().decisioni, gapLayer),
}))
