import { Library } from 'lucide-react'
import { useAppStore } from '@/stores/useAppStore'

export function Header() {
  const { profilo, toggleSidebar } = useAppStore()
  return (
    <header className="h-14 border-b border-slate-200 bg-white flex items-center justify-between px-4 shrink-0">
      <div className="flex items-center gap-3">
        <button onClick={toggleSidebar} className="p-1.5 rounded-md hover:bg-slate-100 transition-colors" aria-label="Menu">
          <Library size={19} className="text-indigo-600" />
        </button>
        <span className="text-[15px] font-[600] text-slate-800">CurManLight</span>
        <span className="text-xs text-slate-400 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded">Revisione curricolare</span>
      </div>
      {profilo && (
        <div className="text-sm text-slate-500">
          {profilo.nome && <span className="font-[500] text-slate-700">{profilo.nome} {profilo.cognome}</span>}
          {profilo.istituto && <span className="ml-2 text-xs">{profilo.istituto}</span>}
        </div>
      )}
    </header>
  )
}
