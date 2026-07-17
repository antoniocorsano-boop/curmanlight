import { useEffect } from 'react'
import { Sidebar } from './Sidebar'
import { Header } from './Header'
import { useAppStore } from '@/stores/useAppStore'

export function Layout({ children }: { children: React.ReactNode }) {
  const { sidebarOpen, setSidebarOpen } = useAppStore()

  useEffect(() => {
    const media = window.matchMedia('(max-width: 639px)')

    const syncSidebar = (event: MediaQueryListEvent | MediaQueryList) => {
      setSidebarOpen(!event.matches)
    }

    syncSidebar(media)
    media.addEventListener('change', syncSidebar)
    return () => media.removeEventListener('change', syncSidebar)
  }, [setSidebarOpen])

  useEffect(() => {
    const mobileOpen = window.matchMedia('(max-width: 639px)').matches && sidebarOpen
    document.body.style.overflow = mobileOpen ? 'hidden' : ''

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && mobileOpen) setSidebarOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [sidebarOpen, setSidebarOpen])

  const mobileSidebarOpen = sidebarOpen

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Header />
      <div className="relative flex min-h-0 flex-1 overflow-hidden">
        {mobileSidebarOpen && (
          <button
            type="button"
            aria-label="Chiudi il menu"
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-x-0 bottom-0 top-14 z-30 hidden bg-slate-950/45 max-sm:block"
          />
        )}
        <Sidebar />
        <main className="min-h-0 flex-1 overflow-y-auto p-6 max-sm:p-4 bg-[var(--color-surface-page)]">
          {children}
        </main>
      </div>
    </div>
  )
}
