import { Library, Settings } from 'lucide-react'
import { useAppStore } from '@/stores/useAppStore'
import { VIEW_TITLES } from '@/types/state'

export function Header() {
  const { profilo, vistaAttiva, setVista, toggleSidebar } = useAppStore()
  return (
    <header className="min-h-14 border-b border-slate-200 bg-white flex items-center justify-between gap-4 px-4 py-2 shrink-0">
      <div className="flex items-center gap-3 min-w-0">
        <button onClick={toggleSidebar} className="p-1.5 rounded-md hover:bg-slate-100 transition-colors" aria-label="Apri o chiudi il menu">
          <Library size={19} className="text-indigo-600" />
        </button>
        <div className="min-w-0">
          <div className="flex items-center gap-2 min-w-0">
            <span className="text-[15px] font-[650] text-slate-800 shrink-0">CurManLight</span>
            <span className="text-xs text-slate-400" aria-hidden="true">/</span>
            <span className="text-sm font-[550] text-indigo-700 truncate">{VIEW_TITLES[vistaAttiva]}</span>
          </div>
          {profilo?.istituto && <p className="text-xs text-slate-500 truncate">{profilo.istituto}</p>}
        </div>
      </div>

      <div className="flex items-center gap-3 shrink-0">
        {profilo && (
          <div className="hidden sm:block text-right">
            {(profilo.nome || profilo.cognome) && <p className="text-sm font-[500] text-slate-700">{profilo.nome} {profilo.cognome}</p>}
            <p className="text-xs text-slate-500 capitalize">{profilo.ruolo} · {profilo.annoScolastico}</p>
          </div>
        )}
        <button type="button" onClick={() => setVista('impostazioni')} className="p-2 rounded-lg hover:bg-slate-100 transition-colors" aria-label="Apri Impostazioni">
          <Settings size={18} className="text-slate-600" />
        </button>
      </div>
    </header>
  )
}
