import { Check, X } from 'lucide-react'
import { useRevisioneStore } from '@/stores/useRevisioneStore'
import type { GapEntry, Decisione } from '@/types/gap'

export function DecisioneActions({ entry, decisione }: { entry: GapEntry; decisione: Decisione | undefined }) {
  const { approve, reject, undoDecision } = useRevisioneStore()
  if (decisione?.decisione) {
    return (
      <div className="flex items-center gap-2">
        <span className={`text-xs font-[500] ${decisione.decisione === 'approvata' ? 'text-emerald-600' : 'text-red-500'}`}>
          {decisione.decisione === 'approvata' ? 'Approvata' : 'Rifiutata'}
        </span>
        <button onClick={() => undoDecision(entry.unitaId)} className="text-xs text-slate-400 hover:text-slate-600 underline">Annulla</button>
      </div>
    )
  }
  return (
    <div className="flex items-center gap-2">
      <button onClick={() => approve(entry.unitaId)} className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-[500] rounded-md bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors">
        <Check size={13} /> Approva
      </button>
      <button onClick={() => reject(entry.unitaId)} className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-[500] rounded-md bg-red-50 text-red-600 hover:bg-red-100 transition-colors">
        <X size={13} /> Rifiuta
      </button>
    </div>
  )
}
