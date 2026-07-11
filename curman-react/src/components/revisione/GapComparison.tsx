import type { GapEntry, Decisione, ProfiloUtente } from '@/types/gap'
import type { UnitaApprendimento } from '@/types/curriculum'
import { GapBadge } from '@/components/curriculum/GapBadge'
import { DecisioneActions } from '@/components/curriculum/DecisioneActions'

export function GapComparison({
  unita,
  entry,
  decisione,
  profilo,
}: {
  unita: UnitaApprendimento
  entry: GapEntry
  decisione: Decisione | undefined
  profilo: ProfiloUtente | null
}) {
  return (
    <div className="bg-white border border-slate-200 rounded-lg p-4 flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <span className="text-xs text-slate-400">{unita.ordine}{unita.fascia ? ` · ${unita.fascia}` : ''} · {unita.nucleo}</span>
        <GapBadge status={entry.status} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <p className="text-[11px] font-[500] text-slate-400">Testo vigente (IN 2012)</p>
          <p className="text-sm text-slate-700 leading-relaxed p-3 bg-slate-50 rounded-lg border border-slate-200">{unita.traguardo}</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-[11px] font-[500] text-indigo-600">Proposta aggiornamento (IN 2025)</p>
          <p className="text-sm text-slate-700 leading-relaxed p-3 bg-indigo-50 rounded-lg border border-indigo-100">{entry.proposto}</p>
        </div>
      </div>
      {entry.motivazione && <p className="text-xs text-slate-400 italic">{entry.motivazione}</p>}
      <div className="pt-2 border-t border-slate-100">
        <DecisioneActions unita={unita} entry={entry} decisione={decisione} profilo={profilo} />
      </div>
    </div>
  )
}
