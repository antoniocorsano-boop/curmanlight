import { create } from 'zustand'
import type { AppState, ViewId, FiltroStato } from '@/types/state'
import type { ProfiloUtente } from '@/types/gap'

export const useAppStore = create<AppState>((set) => ({
  vistaAttiva: 'home',
  setVista: (vista: ViewId) => set({ vistaAttiva: vista }),
  profilo: null,
  setProfilo: (profilo: ProfiloUtente) => set({ profilo }),
  disciplinaSelezionata: null,
  setDisciplina: (disc: string | null) => set({ disciplinaSelezionata: disc }),
  filtroStato: 'tutti',
  setFiltroStato: (filtro: FiltroStato) => set({ filtroStato: filtro }),
  sidebarOpen: true,
  toggleSidebar: () => set(s => ({ sidebarOpen: !s.sidebarOpen })),
  darkMode: false,
  toggleDarkMode: () => set(s => ({ darkMode: !s.darkMode })),
}))
