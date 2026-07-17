import type { ProfiloUtente, DecisioniMap, GapLayer, ProgressStats } from './gap'
import type { DecisionContext, RecordWorkDecisionInput, WorkDecision, WorkDecisionMap } from './decision'

export type AreaId = 'home' | 'curriculum' | 'didattica' | 'sistema'
export type ViewId = 'home' | 'consultazione' | 'revisione' | 'laboratorio-assistito' | 'processo' | 'esportazioni' | 'evidenze-valutazione' | 'programmazione-annuale' | 'uda-modello' | 'archivio-locale' | 'pilot-guidato-docenti' | 'analisi-feedback-pilota' | 'registro-decisioni' | 'guida' | 'impostazioni'
export type FiltroStato = 'tutti' | 'da_decidere' | 'approvati' | 'rifiutati'
export type WorkDecisionPersistenceStatus = 'idle' | 'loading' | 'restored' | 'saved' | 'error'

export interface NavigationItem {
  id: ViewId
  label: string
  area: AreaId
  icon: string
  available: boolean
}

export const NAVIGATION: NavigationItem[] = [
  { id: 'home', label: 'Home', area: 'home', icon: 'house', available: true },
  { id: 'consultazione', label: 'Consulta il curricolo', area: 'curriculum', icon: 'book-open', available: true },
  { id: 'revisione', label: 'Proponi un aggiornamento', area: 'curriculum', icon: 'refresh-cw', available: true },
  { id: 'laboratorio-assistito', label: 'Laboratorio assistito', area: 'curriculum', icon: 'sparkles', available: true },
  { id: 'processo', label: 'Segui il processo', area: 'curriculum', icon: 'workflow', available: true },
  { id: 'esportazioni', label: 'Esporta un documento', area: 'curriculum', icon: 'download', available: true },
  { id: 'evidenze-valutazione', label: 'Evidenze e valutazione', area: 'didattica', icon: 'eye', available: false },
  { id: 'programmazione-annuale', label: 'Programmazione annuale', area: 'didattica', icon: 'layers', available: true },
  { id: 'uda-modello', label: 'UDA essenziale', area: 'didattica', icon: 'file-text', available: true },
  { id: 'archivio-locale', label: 'Archivio locale', area: 'sistema', icon: 'archive', available: true },
  { id: 'pilot-guidato-docenti', label: 'Prova guidata docenti', area: 'sistema', icon: 'user-check', available: true },
  { id: 'analisi-feedback-pilota', label: 'Analizza feedback pilota', area: 'sistema', icon: 'chart-no-axes-column', available: true },
  { id: 'registro-decisioni', label: 'Registro decisioni', area: 'sistema', icon: 'gavel', available: true },
  { id: 'guida', label: 'Guida', area: 'sistema', icon: 'circle-help', available: false },
  { id: 'impostazioni', label: 'Impostazioni', area: 'sistema', icon: 'settings', available: true },
]

export const VIEW_TITLES: Record<ViewId, string> = {
  home: 'Home',
  consultazione: 'Consulta il curricolo',
  revisione: 'Proponi un aggiornamento',
  'laboratorio-assistito': 'Laboratorio assistito',
  processo: 'Segui il processo',
  esportazioni: 'Esporta un documento',
  'evidenze-valutazione': 'Evidenze e valutazione',
  'programmazione-annuale': 'Programmazione annuale',
  'uda-modello': 'UDA essenziale',
  'archivio-locale': 'Archivio locale',
  'pilot-guidato-docenti': 'Prova guidata docenti',
  'analisi-feedback-pilota': 'Analizza feedback pilota',
  'registro-decisioni': 'Registro decisioni',
  guida: 'Guida',
  impostazioni: 'Impostazioni',
}

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
  setSidebarOpen: (open: boolean) => void
  toggleSidebar: () => void
  darkMode: boolean
  toggleDarkMode: () => void
}

export interface RevisioneState {
  decisioni: DecisioniMap
  workDecisioni: WorkDecisionMap
  lastWorkDecisionSaved: string | null
  workDecisionHydrated: boolean
  workDecisionPersistenceStatus: WorkDecisionPersistenceStatus
  workDecisionPersistenceMessage: string | null
  recordWorkDecision: (input: RecordWorkDecisionInput) => WorkDecision
  reopenWorkDecision: (unitaId: string, contesto: DecisionContext) => WorkDecision | null
  hydrateWorkDecisions: () => void
  saveWorkDecisions: () => boolean
  loadWorkDecisions: () => boolean
  clearWorkDecisionPersistence: () => boolean
  approve: (unitaId: string, testoCustom?: string) => void
  reject: (unitaId: string) => void
  undoDecision: (unitaId: string) => void
  resetAll: () => void
  resetDisciplina: (disciplina: string, gapLayer: GapLayer) => void
  getDecisione: (unitaId: string) => import('./gap').Decisione | undefined
  getWorkDecision: (unitaId: string) => WorkDecision | undefined
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

export interface WorkDecisionLocalPayload {
  version: 'cml-work-decisions-v2'
  savedAt: string
  workDecisioni: WorkDecisionMap
  decisioni: DecisioniMap
}
