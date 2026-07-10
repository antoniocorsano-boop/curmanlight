import type { ProfiloUtente, DecisioniMap, GapLayer, ProgressStats } from './gap'

export type AreaId = 'home' | 'curriculum' | 'didattica' | 'guida'
export type ViewId = 'home' | 'consultazione' | 'revisione' | 'processo' | 'esportazioni' | 'evidenze-valutazione' | 'programmazione-annuale' | 'uda-modello' | 'guida'
export type FiltroStato = 'tutti' | 'da_decidere' | 'approvati' | 'rifiutati'

export interface NavigationItem {
  id: ViewId
  label: string
  area: AreaId
  icon: string
}

export const NAVIGATION: NavigationItem[] = [
  { id: 'home', label: 'Home', area: 'home', icon: 'house' },
  { id: 'consultazione', label: 'Consultazione', area: 'curriculum', icon: 'book-open' },
  { id: 'revisione', label: 'Revisione', area: 'curriculum', icon: 'refresh-cw' },
  { id: 'processo', label: 'Processo', area: 'curriculum', icon: 'workflow' },
  { id: 'esportazioni', label: 'Esportazioni', area: 'curriculum', icon: 'download' },
  { id: 'evidenze-valutazione', label: 'Evidenze e Valutazione', area: 'didattica', icon: 'eye' },
  { id: 'programmazione-annuale', label: 'Programmazione Annuale', area: 'didattica', icon: 'layers' },
  { id: 'uda-modello', label: 'UDA Modello', area: 'didattica', icon: 'file-text' },
  { id: 'guida', label: 'Guida', area: 'guida', icon: 'circle-help' },
]

export interface AppState {
  vistaAttiva: ViewId
  setVista: (vista: ViewId) => void
  profilo: ProfiloUtente | null
  setProfilo: (profilo: ProfiloUtente) => void
  disciplinaSelezionata: string | null
  setDisciplina: (disc: string | null) => void
  filtroStato: FiltroStato
  setFiltroStato: (filtro: FiltroStato) => void
  sidebarOpen: boolean
  toggleSidebar: () => void
  darkMode: boolean
  toggleDarkMode: () => void
}

export interface RevisioneState {
  decisioni: DecisioniMap
  approve: (unitaId: string, testoCustom?: string) => void
  reject: (unitaId: string) => void
  undoDecision: (unitaId: string) => void
  resetAll: () => void
  resetDisciplina: (disciplina: string, gapLayer: GapLayer) => void
  getDecisione: (unitaId: string) => import('./gap').Decisione | undefined
  getProgress: (disciplina: string, gapLayer: GapLayer) => ProgressStats
}

export interface PersistenzaState {
  lastSaved: string | null
  autoSaveEnabled: boolean
  setAutoSave: (enabled: boolean) => void
  save: () => Promise<void>
  load: () => Promise<void>
  clear: () => Promise<void>
  exportState: () => string
  importState: (json: string) => boolean
}

export interface LocalSavePayload {
  version: 'cml-local-v3'
  savedAt: string
  profilo: ProfiloUtente
  decisioni: DecisioniMap
  preferenze: { darkMode: boolean; autoSave: boolean; ultimaDisciplina: string | null; ultimaVista: ViewId }
}
