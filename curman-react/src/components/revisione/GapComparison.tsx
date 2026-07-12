import type { GapEntry, Decisione, ProfiloUtente } from '@/types/gap'
import type { UnitaApprendimento } from '@/types/curriculum'
import { GAP_FIELD_LABELS, getUnitFieldText } from '@/lib/gap-fields'
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
  const fieldLabel = GAP_FIELD_LABELS[entry.targetField]
  const currentFieldText = getUnitFieldText(unita, entry.targetField)

  return (
    <div className="bg-white border border-slate-200 rounded-lg p-4 flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <span className="text-xs text-slate-400">{unita.ordine}{unita.fascia ? ` · ${unita.fascia}` : ''} · {unita.nucleo}</span>
        <GapBadge status={entry.status} />
        <span className="text-[11px] rounded-full bg-slate-100 px-2 py-0.5 text-slate-600">Campo: {fieldLabel}</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <p className="text-[11px] font-[500] text-slate-400">{fieldLabel} vigenti (IN 2012)</p>
          <p className="text-sm text-slate-700 leading-relaxed p-3 bg-slate-50 rounded-lg border border-slate-200">{currentFieldText}</p>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-[11px] font-[500] text-indigo-600">{fieldLabel} proposti (IN 2025)</p>
          <p className="text-sm text-slate-700 leading-relaxed p-3 bg-indigo-50 rounded-lg border border-indigo-100">{entry.proposto}</p>
        </div>
      </div>
      <p className="text-xs text-slate-500">La scelta aggiorna solo il campo indicato; gli altri contenuti dell’unità restano invariati.</p>
      {entry.motivazione && <p className="text-xs text-slate-400 italic">{entry.motivazione}</p>}
      <div className="pt-2 border-t border-slate-100">
        <DecisioneActions unita={unita} entry={entry} decisione={decisione} profilo={profilo} />
      </div>
    </div>
  )
}
