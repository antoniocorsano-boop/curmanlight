import { create } from 'zustand'
import type {
  ReferentValidationInput,
  ReferentValidationMap,
} from '@/types/referentValidation'

const STORAGE_KEY = 'curmanlight.referent-validations.v1'

type ReferentValidationState = {
  validations: ReferentValidationMap
  hydrated: boolean
  persistenceError: string | null
  hydrate: () => void
  saveValidation: (key: string, input: ReferentValidationInput) => boolean
  clearValidation: (key: string) => boolean
  clearAll: () => boolean
}

function persist(validations: ReferentValidationMap) {
  if (typeof window === 'undefined') return false
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ version: 'cml-referent-validations-v1', validations }))
    return true
  } catch {
    return false
  }
}

export const useReferentValidationStore = create<ReferentValidationState>((set, get) => ({
  validations: {},
  hydrated: false,
  persistenceError: null,
  hydrate: () => {
    if (get().hydrated || typeof window === 'undefined') return
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY)
      if (!raw) return set({ hydrated: true, persistenceError: null })
      const parsed = JSON.parse(raw) as { validations?: unknown }
      const validations = parsed.validations && typeof parsed.validations === 'object' && !Array.isArray(parsed.validations)
        ? parsed.validations as ReferentValidationMap
        : {}
      set({ validations, hydrated: true, persistenceError: null })
    } catch {
      set({ validations: {}, hydrated: true, persistenceError: 'Le validazioni locali del Referente non possono essere lette in questo browser.' })
    }
  },
  saveValidation: (key, input) => {
    const note = input.note?.trim() ?? ''
    if ((input.value === 'respinta' || input.value === 'sospesa') && !note) {
      set({ persistenceError: 'Per una validazione respinta o sospesa è necessario indicare una nota.' })
      return false
    }
    const validations = {
      ...get().validations,
      [key]: {
        value: input.value,
        note,
        validatedAt: new Date().toISOString(),
      },
    }
    if (!persist(validations)) {
      set({ persistenceError: 'La validazione non è stata salvata perché l’archiviazione locale non è disponibile.' })
      return false
    }
    set({ validations, persistenceError: null })
    return true
  },
  clearValidation: key => {
    const validations = { ...get().validations }
    delete validations[key]
    if (!persist(validations)) {
      set({ persistenceError: 'La validazione non è stata rimossa perché l’archiviazione locale non è disponibile.' })
      return false
    }
    set({ validations, persistenceError: null })
    return true
  },
  clearAll: () => {
    if (!persist({})) {
      set({ persistenceError: 'Le validazioni non sono state rimosse perché l’archiviazione locale non è disponibile.' })
      return false
    }
    set({ validations: {}, persistenceError: null })
    return true
  },
}))
