import { House, BookOpen, RefreshCw, Workflow, Download, Settings } from 'lucide-react'
import { useAppStore } from '@/stores/useAppStore'
import type { AreaId } from '@/types/state'
import { NAVIGATION } from '@/types/state'

const ICON_MAP: Record<string, React.FC<{ size?: number; className?: string }>> = {
  house: House,
  'book-open': BookOpen,
  'refresh-cw': RefreshCw,
  workflow: Workflow,
  download: Download,
  settings: Settings,
}

const AREA_LABELS: Record<AreaId, string> = {
  home: '',
  curriculum: 'Curricolo',
  didattica: 'Didattica',
  sistema: 'Contesto',
}

export function Sidebar() {
  const { vistaAttiva, setVista, sidebarOpen } = useAppStore()
  if (!sidebarOpen) return null

  const availableItems = NAVIGATION.filter(item => item.available)
  const areas = new Map<AreaId, typeof availableItems>()
  for (const item of availableItems) {
    const list = areas.get(item.area) || []
    list.push(item)
    areas.set(item.area, list)
  }

  return (
    <aside className="w-64 h-full border-r border-[var(--color-border)] bg-[var(--color-surface)] flex flex-col py-4 px-3 shrink-0 max-sm:absolute max-sm:z-20 max-sm:shadow-xl">
      <nav className="flex flex-col gap-1" aria-label="Navigazione principale">
        {Array.from(areas.entries()).map(([area, items]) => (
          <div key={area} className="mb-2">
            {AREA_LABELS[area] && (
              <p className="text-[11px] text-[var(--color-text-muted)] font-[500] uppercase tracking-wide px-3 mb-1">{AREA_LABELS[area]}</p>
            )}
            {items.map(item => {
              const Icon = ICON_MAP[item.icon]
              const active = vistaAttiva === item.id
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setVista(item.id)}
                  aria-current={active ? 'page' : undefined}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-left transition-colors ${
                    active ? 'bg-indigo-50 text-indigo-700 font-[550]' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700'
                  }`}
                >
                  {Icon && <Icon size={17} />}
                  <span>{item.label}</span>
                </button>
              )
            })}
          </div>
        ))}
      </nav>
    </aside>
  )
}
