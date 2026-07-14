import { create } from 'zustand'
import type { TeacherProposalImportRecord } from '@/lib/teacherProposalImport'
import type { ProposalItem } from '@/types/cml'
import type {
  DepartmentDecisionInput,
  DepartmentQueueImportResult,
  DepartmentQueueItem,
} from '@/types/departmentQueue'

const STORAGE_KEY = 'curmanlight.department-proposal-queue.v1'

type CompatibleProposalItem = ProposalItem & { id?: string }

type DepartmentQueueState = {
  items: DepartmentQueueItem[]
  hydrated: boolean
  persistenceError: string | null
  hydrate: () => void
  importRecords: (records: TeacherProposalImportRecord[]) => DepartmentQueueImportResult
  saveDecision: (itemId: string, input: DepartmentDecisionInput) => boolean
  clearDecision: (itemId: string) => boolean
  removeItem: (itemId: string) => boolean
  clearQueue: () => boolean
}

function persist(items: DepartmentQueueItem[]) {
  if (typeof window === 'undefined') return false
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ version: 'cml-department-queue-v1', items }))
    return true
  } catch {
    return false
  }
}

function authorLabel(record: TeacherProposalImportRecord) {
  return record.author || 'Profilo non indicato'
}

function normalizeStoredItems(value: unknown): DepartmentQueueItem[] {
  if (!Array.isArray(value)) return []
  return value.map(item => ({ ...item, decision: item?.decision ?? null })) as DepartmentQueueItem[]
}

export const useDepartmentQueueStore = create<DepartmentQueueState>((set, get) => ({
  items: [],
  hydrated: false,
  persistenceError: null,
  hydrate: () => {
    if (get().hydrated || typeof window === 'undefined') return
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY)
      if (!raw) return set({ hydrated: true, persistenceError: null })
      const parsed = JSON.parse(raw) as { items?: unknown }
      set({ items: normalizeStoredItems(parsed.items), hydrated: true, persistenceError: null })
    } catch {
      set({ items: [], hydrated: true, persistenceError: 'La coda dipartimentale locale non può essere letta in questo browser.' })
    }
  },
  importRecords: records => {
    const existing = new Set(get().items.map(item => item.id))
    const importedAt = new Date().toISOString()
    const additions: DepartmentQueueItem[] = []
    let skipped = 0

    for (const record of records) {
      if (record.status !== 'valid' || !record.model || !record.fingerprint) continue
      const model = record.model
      const fingerprint = record.fingerprint

      model.proposals.forEach((proposal, index) => {
        const compatibleProposal = proposal as CompatibleProposalItem
        const unitId = compatibleProposal.unitaId ?? compatibleProposal.id
        if (!unitId) return

        const id = `${fingerprint}:${unitId}:${index}`
        if (existing.has(id)) {
          skipped += 1
          return
        }
        existing.add(id)
        additions.push({
          id,
          sourceFingerprint: fingerprint,
          sourceFileName: record.fileName,
          importedAt,
          discipline: model.discipline,
          ordine: model.ordine,
          annoScolastico: model.annoScolastico,
          author: authorLabel(record),
          proposal: { ...proposal, unitaId: unitId },
          decision: null,
        })
      })
    }

    const items = [...get().items, ...additions]
    if (additions.length > 0 && !persist(items)) {
      set({ persistenceError: 'Le proposte non sono state aggiunte perché l’archiviazione locale non è disponibile.' })
      return { added: 0, skipped }
    }
    set({ items, persistenceError: null })
    return { added: additions.length, skipped }
  },
  saveDecision: (itemId, input) => {
    const note = input.note?.trim() ?? ''
    const testoModificato = input.testoModificato?.trim() ?? ''
    if (input.value === 'modificata' && !testoModificato) {
      set({ persistenceError: 'Per una proposta modificata è necessario indicare il testo concordato.' })
      return false
    }

    const items = get().items.map(item => item.id === itemId ? {
      ...item,
      decision: {
        value: input.value,
        note,
        testoModificato: input.value === 'modificata' ? testoModificato : null,
        decidedAt: new Date().toISOString(),
      },
    } : item)

    if (!persist(items)) {
      set({ persistenceError: 'La decisione non è stata salvata perché l’archiviazione locale non è disponibile.' })
      return false
    }
    set({ items, persistenceError: null })
    return true
  },
  clearDecision: itemId => {
    const items = get().items.map(item => item.id === itemId ? { ...item, decision: null } : item)
    if (!persist(items)) {
      set({ persistenceError: 'La decisione non è stata rimossa perché l’archiviazione locale non è disponibile.' })
      return false
    }
    set({ items, persistenceError: null })
    return true
  },
  removeItem: itemId => {
    const items = get().items.filter(item => item.id !== itemId)
    if (!persist(items)) {
      set({ persistenceError: 'La proposta non è stata rimossa perché l’archiviazione locale non è disponibile.' })
      return false
    }
    set({ items, persistenceError: null })
    return true
  },
  clearQueue: () => {
    if (!persist([])) {
      set({ persistenceError: 'La coda non è stata svuotata perché l’archiviazione locale non è disponibile.' })
      return false
    }
    set({ items: [], persistenceError: null })
    return true
  },
}))
