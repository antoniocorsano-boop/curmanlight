import { useState } from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'
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
      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-700">
        {items.map(item => <li key={item}>{item}</li>)}
      </ul>
    </section>
  )
}

export function UnitaCard({
  unita,
  decisione,
  readOnly = false,
}: {
  unita: UnitaApprendimento
  decisione?: Decisione
  readOnly?: boolean
}) {
  const [expanded, setExpanded] = useState(false)
  const profilo = useAppStore(s => s.profilo)
  const gap = unita.gap
  const detailId = `unita-detail-${unita.id}`

  return (
    <article className="rounded-xl border border-slate-200 bg-white p-4">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <span className="text-xs font-[600] text-indigo-700">{unita.ordine}{unita.classe ? ` · Classe ${unita.classe}` : ''}{unita.fascia ? ` · Fascia ${unita.fascia}` : ''}</span>
            <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[11px] text-slate-600">{unita.nucleo}</span>
            {!readOnly && gap && <GapBadge status={gap.status} />}
          </div>
          {unita.ambito && <p className="mb-2 text-xs text-slate-500">{unita.ambito}</p>}
          <p className="text-sm leading-6 text-slate-800">{unita.traguardo}</p>
        </div>
        <button
          type="button"
          onClick={() => setExpanded(value => !value)}
          aria-expanded={expanded}
          aria-controls={detailId}
          className="shrink-0 rounded-lg p-2 text-slate-500 hover:bg-slate-100"
          aria-label={expanded ? 'Chiudi il dettaglio' : 'Apri il dettaglio'}
        >
          {expanded ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
        </button>
      </div>

      {expanded && (
        <div id={detailId} className="mt-4 grid gap-5 border-t border-slate-100 pt-4">
          {unita.competenza && <section><h4 className="text-xs font-[650] uppercase tracking-wide text-slate-500">Competenza</h4><p className="mt-2 text-sm leading-6 text-slate-700">{unita.competenza}</p></section>}
          <DetailList title="Obiettivi" items={unita.obiettivi} />
          <DetailList title="Conoscenze" items={unita.conoscenze} />
          <DetailList title="Abilità" items={unita.abilita} />
          <DetailList title="Evidenze" items={unita.evidenze} />
          <DetailList title="Criteri di valutazione" items={unita.criteriValutazione} />
          <section className="rounded-lg bg-slate-50 p-3 text-xs leading-5 text-slate-600">
            <p><strong>Stato:</strong> {unita.stato || 'Non indicato'}</p>
            <p><strong>Fonte:</strong> {unita.fonte || 'Non indicata'}</p>
            <p><strong>Validazione:</strong> {unita.validazioneUmana ? 'Richiede validazione umana' : 'Non indicata'}</p>
            {unita.noteDipartimento && <p><strong>Nota:</strong> {unita.noteDipartimento}</p>}
          </section>
        </div>
      )}

      {!readOnly && gap && (needsDecision(gap, decisione) || decisione?.decisione) && (
        <div className="mt-4 border-t border-slate-100 pt-3">
          <DecisioneActions unita={unita} entry={gap} decisione={decisione} profilo={profilo} />
        </div>
      )}
    </article>
  )
}
