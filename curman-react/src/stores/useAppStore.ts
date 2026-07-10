import { create } from 'zustand'
import type { AppState, ViewId, FiltroStato } from '@/types/state'
import type { ProfiloUtente } from '@/types/gap'

const initialSidebarOpen = typeof window === 'undefined'
  ? true
  : !window.matchMedia('(max-width: 639px)').matches

export const useAppStore = create<AppState>((set) => ({
  vistaAttiva: 'home',
  setVista: (vista: ViewId) => set({ vistaAttiva: vista }),
  profilo: null,
  setProfilo: (profilo: ProfiloUtente) => set({ profilo }),
  disciplinaSelezionata: null,
  setDisciplina: (disc: string | null) => set({ disciplinaSelezionata: disc }),
  filtroStato: 'tutti',
  setFiltroStato: (filtro: FiltroStato) => set({ filtroStato: filtro }),
  sidebarOpen: initialSidebarOpen,
  setSidebarOpen: (open: boolean) => set({ sidebarOpen: open }),
  toggleSidebar: () => set(s => ({ sidebarOpen: !s.sidebarOpen })),
  darkMode: false,
  toggleDarkMode: () => set(s => ({ darkMode: !s.darkMode })),
}))
