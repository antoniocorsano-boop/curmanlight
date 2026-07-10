import { ChevronRight } from 'lucide-react'
import type { UnitaApprendimento } from '@/types/curriculum'
import type { Decisione } from '@/types/gap'
import { GapBadge } from './GapBadge'
import { DecisioneActions } from './DecisioneActions'
import { needsDecision } from '@/lib/gap'

export function UnitaCard({ unita, decisione, onExpand }: { unita: UnitaApprendimento; decisione: Decisione | undefined; onExpand?: () => void }) {
  const gap = unita.gap
  return (
    <div className="bg-white border border-slate-200 rounded-lg p-4 flex flex-col gap-3">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-[11px] text-slate-400">{unita.ordine}{unita.fascia ? ` · ${unita.fascia}` : ''}</span>
            {gap && <GapBadge status={gap.status} />}
          </div>
          <p className="text-sm text-slate-700 leading-relaxed">{unita.traguardo}</p>
        </div>
        {onExpand && (
          <button onClick={onExpand} className="p-1 rounded hover:bg-slate-100 transition-colors shrink-0" aria-label="Espandi">
            <ChevronRight size={15} className="text-slate-400" />
          </button>
        )}
      </div>
      <div className="flex gap-3 text-[11px] text-slate-400">
        <span>{unita.nucleo}</span>
        {unita.ambito && <span>{unita.ambito}</span>}
      </div>
      {gap && (needsDecision(gap, decisione) || decisione?.decisione) && (
        <div className="pt-2.5 border-t border-slate-100">
          <DecisioneActions entry={gap} decisione={decisione} />
        </div>
      )}
    </div>
  )
}
