import { create } from 'zustand'
import type { TeacherProposalDraft, TeacherProposalDraftInput } from '@/types/proposal'

const STORAGE_KEY = 'curmanlight.teacher-proposal-drafts.v1'

type ProposalState = {
  drafts: Record<string, TeacherProposalDraft>
  hydrated: boolean
  selectedUnitId: string | null
  selectUnit: (unitId: string | null) => void
  hydrate: () => void
  saveDraft: (input: TeacherProposalDraftInput) => TeacherProposalDraft
  deleteDraft: (unitId: string) => void
}

function persist(drafts: Record<string, TeacherProposalDraft>) {
  if (typeof window === 'undefined') return
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ version: 'cml-teacher-proposals-v1', drafts }))
}

export const useProposalStore = create<ProposalState>((set, get) => ({
  drafts: {},
  hydrated: false,
  selectedUnitId: null,
  selectUnit: selectedUnitId => set({ selectedUnitId }),
  hydrate: () => {
    if (get().hydrated || typeof window === 'undefined') return
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY)
      if (!raw) return set({ hydrated: true })
      const parsed = JSON.parse(raw) as { drafts?: Record<string, TeacherProposalDraft> }
      set({ drafts: parsed.drafts ?? {}, hydrated: true })
    } catch {
      set({ drafts: {}, hydrated: true })
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
    set({ drafts })
    persist(drafts)
    return draft
  },
  deleteDraft: unitId => {
    const drafts = { ...get().drafts }
    delete drafts[unitId]
    set({ drafts })
    persist(drafts)
  },
}))
