import { create } from 'zustand'
import type { TeacherProposalDraft, TeacherProposalDraftInput } from '@/types/proposal'

const STORAGE_KEY = 'curmanlight.teacher-proposal-drafts.v1'

type ProposalState = {
  drafts: Record<string, TeacherProposalDraft>
  hydrated: boolean
  selectedUnitId: string | null
  persistenceError: string | null
  selectUnit: (unitId: string | null) => void
  hydrate: () => void
  saveDraft: (input: TeacherProposalDraftInput) => TeacherProposalDraft | null
  deleteDraft: (unitId: string) => boolean
}

function persist(drafts: Record<string, TeacherProposalDraft>) {
  if (typeof window === 'undefined') return false
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ version: 'cml-teacher-proposals-v1', drafts }))
    return true
  } catch {
    return false
  }
}

export const useProposalStore = create<ProposalState>((set, get) => ({
  drafts: {},
  hydrated: false,
  selectedUnitId: null,
  persistenceError: null,
  selectUnit: selectedUnitId => set({ selectedUnitId }),
  hydrate: () => {
    if (get().hydrated || typeof window === 'undefined') return
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY)
      if (!raw) return set({ hydrated: true, persistenceError: null })
      const parsed = JSON.parse(raw) as { drafts?: Record<string, TeacherProposalDraft> }
      set({ drafts: parsed.drafts ?? {}, hydrated: true, persistenceError: null })
    } catch {
      set({ drafts: {}, hydrated: true, persistenceError: 'Le bozze locali non possono essere lette in questo browser.' })
    }
  },
  saveDraft: input => {
    const previous = get().drafts[input.unitaId]
    const timestamp = new Date().toISOString()
    const draft: TeacherProposalDraft = {
      ...input,
      id: previous?.id ?? `${input.unitaId}:${timestamp}`,
      stato: 'bozza',
      createdAt: previous?.createdAt ?? timestamp,
      updatedAt: timestamp,
    }
    const drafts = { ...get().drafts, [input.unitaId]: draft }
    if (!persist(drafts)) {
      set({ persistenceError: 'La bozza non è stata salvata. Verifica che l’archiviazione locale del browser sia disponibile.' })
      return null
    }
    set({ drafts, persistenceError: null })
    return draft
  },
  deleteDraft: unitId => {
    const drafts = { ...get().drafts }
    delete drafts[unitId]
    if (!persist(drafts)) {
      set({ persistenceError: 'La bozza non è stata eliminata perché l’archiviazione locale non è disponibile.' })
      return false
    }
    set({ drafts, persistenceError: null })
    return true
  },
}))
