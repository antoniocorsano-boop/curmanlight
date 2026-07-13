import { useState } from 'react'
import { ChevronDown, ChevronRight, FilePenLine } from 'lucide-react'
import type { UnitaApprendimento } from '@/types/curriculum'
import type { Decisione } from '@/types/gap'
import { useAppStore } from '@/stores/useAppStore'
import { GapBadge } from './GapBadge'
import { DecisioneActions } from './DecisioneActions'
import { needsDecision } from '@/lib/gap'

function DetailList({ title, items }: { title: string; items: string[] }) {
  if (!items.length) return null
  return (
    <section>
      <h4 className="text-xs font-[650] uppercase tracking-wide text-slate-500">{title}</h4>
      <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-6 text-slate-700">
        {items.map(item => <li key={item}>{item}</li>)}
      </ul>
    </section>
  )
}

export function UnitaCard({
  unita,
  decisione,
  readOnly = false,
  expanded: controlledExpanded,
  onExpandedChange,
  onPrepareProposal,
}: {
  unita: UnitaApprendimento
  decisione?: Decisione
  readOnly?: boolean
  expanded?: boolean
  onExpandedChange?: (expanded: boolean) => void
  onPrepareProposal?: (unit: UnitaApprendimento) => void
}) {
  const [internalExpanded, setInternalExpanded] = useState(false)
  const profilo = useAppStore(s => s.profilo)
  const gap = unita.gap
  const detailId = `unita-detail-${unita.id}`
  const expanded = controlledExpanded ?? internalExpanded

  function toggleExpanded() {
    const next = !expanded
    if (controlledExpanded === undefined) setInternalExpanded(next)
    onExpandedChange?.(next)
  }

  return (
    <article className="overflow-hidden rounded-xl border border-slate-200 bg-white">
      <button
        type="button"
        onClick={toggleExpanded}
        aria-expanded={expanded}
        aria-controls={detailId}
        className="flex w-full items-start justify-between gap-4 p-4 text-left transition-colors hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-indigo-500"
      >
        <span className="min-w-0 flex-1">
          <span className="mb-2 flex flex-wrap items-center gap-2">
            <span className="text-xs font-[600] text-indigo-700">{unita.ordine}{unita.classe ? ` · Classe ${unita.classe}` : ''}{unita.fascia ? ` · Fascia ${unita.fascia}` : ''}</span>
            <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] text-slate-600">{unita.nucleo}</span>
            {!readOnly && gap && <GapBadge status={gap.status} />}
          </span>
          {unita.ambito && <span className="mb-2 block text-xs text-slate-500">{unita.ambito}</span>}
          <span className="block text-sm leading-6 text-slate-800">{unita.traguardo}</span>
        </span>
        <span className="flex shrink-0 items-center gap-1.5 rounded-lg px-2 py-1.5 text-xs font-[600] text-slate-600">
          <span className="hidden sm:inline">{expanded ? 'Nascondi dettagli' : 'Mostra dettagli'}</span>
          {expanded ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
        </span>
      </button>

      {expanded && (
        <div id={detailId} className="border-t border-slate-100 p-4">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
            {unita.competenza && <section><h4 className="text-xs font-[650] uppercase tracking-wide text-slate-500">Competenza</h4><p className="mt-2 text-sm leading-6 text-slate-700">{unita.competenza}</p></section>}
            <DetailList title="Obiettivi" items={unita.obiettivi} />
            <DetailList title="Conoscenze" items={unita.conoscenze} />
            <DetailList title="Abilità" items={unita.abilita} />
            <DetailList title="Evidenze" items={unita.evidenze} />
            <DetailList title="Criteri di valutazione" items={unita.criteriValutazione} />
          </div>
          <section className="mt-6 rounded-lg bg-slate-50 p-3 text-xs leading-5 text-slate-600">
            <p><strong>Stato:</strong> {unita.stato || 'Non indicato'}</p>
            <p><strong>Fonte:</strong> {unita.fonte || 'Non indicata'}</p>
            <p><strong>Validazione:</strong> {unita.validazioneUmana ? 'Richiede validazione umana' : 'Non indicata'}</p>
            {unita.noteDipartimento && <p><strong>Nota:</strong> {unita.noteDipartimento}</p>}
          </section>
        </div>
      )}

      {onPrepareProposal && (
        <div className="flex justify-end border-t border-slate-100 p-3">
          <button type="button" onClick={() => onPrepareProposal(unita)} className="inline-flex items-center gap-2 rounded-xl border border-indigo-200 bg-white px-3 py-2 text-sm font-[600] text-indigo-700 hover:bg-indigo-50">
            <FilePenLine size={16} /> Prepara una proposta
          </button>
        </div>
      )}

      {!readOnly && gap && (needsDecision(gap, decisione) || decisione?.decisione) && (
        <div className="border-t border-slate-100 p-4 pt-3">
          <DecisioneActions unita={unita} entry={gap} decisione={decisione} profilo={profilo} />
        </div>
      )}
    </article>
  )
}
