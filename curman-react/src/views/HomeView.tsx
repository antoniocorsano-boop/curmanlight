import { BookOpen, Eye } from 'lucide-react'
import { useAppStore } from '@/stores/useAppStore'

export function HomeView() {
  const setVista = useAppStore(s => s.setVista)
  return (
    <div className="max-w-2xl mx-auto flex flex-col gap-8 pt-4">
      <div>
        <h2 className="text-xl font-[600] text-slate-800 mb-1">Revisione curricolare</h2>
        <p className="text-sm text-slate-500">Strumento per la revisione del curricolo verticale d'istituto, dalla consultazione alla validazione collegiale.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <button onClick={() => setVista('consultazione')} className="card flex flex-col items-start gap-3 p-5 text-left hover:border-indigo-200 transition-colors">
          <BookOpen size={22} className="text-indigo-500" />
          <div>
            <p className="text-sm font-[500] text-slate-700">Curriculum</p>
            <p className="text-xs text-slate-400 mt-0.5">Consulta, revisiona e approva le proposte di aggiornamento curricolare.</p>
          </div>
        </button>
        <button onClick={() => setVista('evidenze-valutazione')} className="card flex flex-col items-start gap-3 p-5 text-left hover:border-indigo-200 transition-colors">
          <Eye size={22} className="text-indigo-500" />
          <div>
            <p className="text-sm font-[500] text-slate-700">Didattica</p>
            <p className="text-xs text-slate-400 mt-0.5">Evidenze di valutazione, programmazione annuale e modelli UDA.</p>
          </div>
        </button>
      </div>
    </div>
  )
}
