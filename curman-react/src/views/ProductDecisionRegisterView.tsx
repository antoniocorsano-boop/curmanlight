import { useEffect, useMemo, useState } from 'react'
import { Archive, Download, FileSearch, Plus, Trash2 } from 'lucide-react'
import { getSafeStorage, downloadMarkdown } from '@/lib/local-storage'
import {
  DECISION_AREAS,
  DECISION_CATEGORIES,
  DECISION_PRIORITIES,
  DECISION_STATUSES,
  createDecision,
  deleteDecision,
  readDecisionRegister,
  serializeDecisionRegisterMarkdown,
  updateDecision,
  writeDecisionRegister,
  type DecisionArea,
  type DecisionCategory,
  type DecisionPriority,
  type DecisionRecord,
  type DecisionRegister,
  type DecisionStatus,
} from '@/features/pilot-evaluation/product-decision-register.mjs'
import {
  readPilotFindingsBacklog,
  type PilotFinding,
} from '@/features/pilot-evaluation/pilot-findings-backlog.mjs'

const labelPriority = (value: DecisionPriority) => ({ bassa: 'Bassa', media: 'Media', alta: 'Alta', critical: 'Critica' }[value] ?? value)
const labelStatus = (value: DecisionStatus) => ({
  proposto: 'Proposto', approvato: 'Approvato', pianificato: 'Pianificato',
  in_sviluppo: 'In sviluppo', in_verifica: 'In verifica', completato: 'Completato', archiviato: 'Archiviato',
}[value] ?? value)

function DecisionEditor({
  item,
  findings,
  onChange,
  onRemove,
  onArchive,
}: {
  item: DecisionRecord
  findings: PilotFinding[]
  onChange: (patch: Partial<DecisionRecord>) => void
  onRemove: () => void
  onArchive: () => void
}) {
  const isClosed = item.status === 'completato' || item.status === 'archiviato'
  const linkedFindings = findings.filter(finding => item.pilotFindingIds.includes(finding.id))
  const toggleFinding = (id: string) => {
    const next = item.pilotFindingIds.includes(id)
      ? item.pilotFindingIds.filter(value => value !== id)
      : [...item.pilotFindingIds, id]
    onChange({ pilotFindingIds: next })
  }
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start">
        <div className="min-w-0 flex-1 space-y-4">
          <label className="block text-sm font-[650] text-slate-800">Titolo
            <input value={item.title} onChange={event => onChange({ title: event.target.value })} className="mt-1 block w-full rounded-xl border border-slate-300 px-3 py-2 text-sm" />
          </label>
          <label className="block text-sm font-[650] text-slate-800">Descrizione
            <textarea value={item.description} onChange={event => onChange({ description: event.target.value })} rows={3} className="mt-1 block w-full resize-y rounded-xl border border-slate-300 px-3 py-2 text-sm leading-6" />
          </label>
          <label className="block text-sm font-[650] text-slate-800">Motivazione
            <textarea value={item.rationale} onChange={event => onChange({ rationale: event.target.value })} rows={2} className="mt-1 block w-full resize-y rounded-xl border border-slate-300 px-3 py-2 text-sm leading-6" />
          </label>
          <label className="block text-sm font-[650] text-slate-800">Decisione
            <textarea value={item.decision} onChange={event => onChange({ decision: event.target.value })} rows={2} className="mt-1 block w-full resize-y rounded-xl border border-slate-300 px-3 py-2 text-sm leading-6" />
          </label>
          <label className="block text-sm font-[650] text-slate-800">Intervento CML (note di implementazione)
            <textarea value={item.implementationNotes} onChange={event => onChange({ implementationNotes: event.target.value })} rows={2} className="mt-1 block w-full resize-y rounded-xl border border-slate-300 px-3 py-2 text-sm leading-6" />
          </label>
          <label className="block text-sm font-[650] text-slate-800">Verifica
            <textarea value={item.verificationNotes} onChange={event => onChange({ verificationNotes: event.target.value })} rows={2} className="mt-1 block w-full resize-y rounded-xl border border-slate-300 px-3 py-2 text-sm leading-6" />
          </label>
          <div className="grid gap-3 sm:grid-cols-2">
            <label className="block text-sm font-[650] text-slate-800">Versione prevista
              <input value={item.plannedVersion} onChange={event => onChange({ plannedVersion: event.target.value })} className="mt-1 block w-full rounded-xl border border-slate-300 px-3 py-2 text-sm" />
            </label>
            <label className="block text-sm font-[650] text-slate-800">Versione pubblicata
              <input value={item.publishedVersion} onChange={event => onChange({ publishedVersion: event.target.value })} className="mt-1 block w-full rounded-xl border border-slate-300 px-3 py-2 text-sm" />
            </label>
            <label className="block text-sm font-[650] text-slate-800">Branch
              <input value={item.branchName} onChange={event => onChange({ branchName: event.target.value })} className="mt-1 block w-full rounded-xl border border-slate-300 px-3 py-2 text-sm" />
            </label>
            <label className="block text-sm font-[650] text-slate-800">Pull request
              <input value={item.pullRequest} onChange={event => onChange({ pullRequest: event.target.value })} className="mt-1 block w-full rounded-xl border border-slate-300 px-3 py-2 text-sm" />
            </label>
            <label className="block text-sm font-[650] text-slate-800">Merge commit
              <input value={item.mergeCommit} onChange={event => onChange({ mergeCommit: event.target.value })} className="mt-1 block w-full rounded-xl border border-slate-300 px-3 py-2 text-sm" />
            </label>
            <label className="block text-sm font-[650] text-slate-800">Pubblicata il
              <input value={item.publishedAt} onChange={event => onChange({ publishedAt: event.target.value })} placeholder="YYYY-MM-DD" className="mt-1 block w-full rounded-xl border border-slate-300 px-3 py-2 text-sm" />
            </label>
          </div>
          <fieldset className="rounded-xl border border-slate-200 p-3">
            <legend className="px-1 text-xs font-[700] uppercase tracking-wide text-slate-500">PilotFinding collegate (origine)</legend>
            {findings.length ? (
              <div className="flex flex-wrap gap-2">
                {findings.map(finding => (
                  <label key={finding.id} className="inline-flex items-start gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs">
                    <input type="checkbox" checked={item.pilotFindingIds.includes(finding.id)} onChange={() => toggleFinding(finding.id)} className="mt-0.5" />
                    <span className="max-w-[16rem] leading-5">{finding.title || finding.source.excerpt || finding.id}</span>
                  </label>
                ))}
              </div>
            ) : <p className="text-xs italic text-slate-500">Nessuna PilotFinding disponibile nel backlog locale.</p>}
            {linkedFindings.length > 0 && (
              <ul className="mt-3 space-y-1 text-xs text-slate-600">
                {linkedFindings.map(finding => <li key={finding.id}>• {finding.title || finding.source.excerpt || finding.id}</li>)}
              </ul>
            )}
          </fieldset>
        </div>
        <div className="grid shrink-0 gap-3 sm:grid-cols-2 lg:w-56 lg:grid-cols-1">
          <label className="text-sm font-[650] text-slate-800">Categoria
            <select value={item.category} onChange={event => onChange({ category: event.target.value as DecisionCategory })} className="mt-1 block w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm">
              {DECISION_CATEGORIES.map(value => <option key={value} value={value}>{value}</option>)}
            </select>
          </label>
          <label className="text-sm font-[650] text-slate-800">Area
            <select value={item.area} onChange={event => onChange({ area: event.target.value as DecisionArea })} className="mt-1 block w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm">
              {DECISION_AREAS.map(value => <option key={value} value={value}>{value}</option>)}
            </select>
          </label>
          <label className="text-sm font-[650] text-slate-800">Priorità
            <select value={item.priority} onChange={event => onChange({ priority: event.target.value as DecisionPriority })} className="mt-1 block w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm">
              {DECISION_PRIORITIES.map(value => <option key={value} value={value}>{labelPriority(value)}</option>)}
            </select>
          </label>
          <label className="text-sm font-[650] text-slate-800">Stato
            <select value={item.status} onChange={event => onChange({ status: event.target.value as DecisionStatus })} className="mt-1 block w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm">
              {DECISION_STATUSES.map(value => <option key={value} value={value}>{labelStatus(value)}</option>)}
            </select>
          </label>
          <button type="button" onClick={onArchive} disabled={isClosed} className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm font-[600] text-slate-700 disabled:opacity-40"><Archive size={16} /> Archivia</button>
          <button type="button" onClick={onRemove} className="inline-flex items-center justify-center gap-2 rounded-xl px-3 py-2 text-sm font-[600] text-red-700 hover:bg-red-50"><Trash2 size={16} /> Elimina</button>
        </div>
      </div>
    </article>
  )
}

export function ProductDecisionRegisterView() {
  const [register, setRegister] = useState<DecisionRegister>(() => readDecisionRegister(getSafeStorage()))
  const [findings] = useState<PilotFinding[]>(() => readPilotFindingsBacklog(getSafeStorage()).items)
  const [query, setQuery] = useState('')
  const [filterStatus, setFilterStatus] = useState<'tutti' | DecisionStatus>('tutti')
  const [filterArea, setFilterArea] = useState<'tutte' | DecisionArea>('tutte')

  useEffect(() => {
    try { writeDecisionRegister(getSafeStorage(), register) } catch { /* Il registro resta utilizzabile in memoria. */ }
  }, [register])

  const findingsById = useMemo(() => Object.fromEntries(findings.map(finding => [finding.id, { title: finding.title, excerpt: finding.source.excerpt }])), [findings])

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase()
    return register.items.filter(item => {
      if (filterStatus !== 'tutti' && item.status !== filterStatus) return false
      if (filterArea !== 'tutte' && item.area !== filterArea) return false
      if (!q) return true
      const haystack = [item.title, item.description, item.rationale, item.decision, item.implementationNotes, item.verificationNotes, item.publishedVersion].join(' ').toLowerCase()
      return haystack.includes(q)
    })
  }, [register.items, query, filterStatus, filterArea])

  const addDecision = () => setRegister(current => ({ ...current, items: [...current.items, createDecision({})] }))
  const exportMarkdown = () => downloadMarkdown(`curmanlight-registro-decisioni-${new Date().toISOString().slice(0, 10)}.md`, serializeDecisionRegisterMarkdown(register, findingsById))

  return (
    <div className="mx-auto max-w-6xl space-y-6 p-4 sm:p-6">
      <header>
        <p className="text-xs font-[700] uppercase tracking-wide text-indigo-700">Decisioni di prodotto e tracciabilità</p>
        <h1 className="mt-1 text-2xl font-[750] text-slate-900">Registro decisioni</h1>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">Collega le osservazioni del test pilota a una decisione, all'intervento CML e alla versione pubblicata. Tutto resta salvato solo su questo dispositivo e richiede validazione umana.</p>
      </header>

      <section className="rounded-2xl border border-slate-200 bg-white p-5 space-y-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex items-start gap-3">
            <FileSearch className="mt-0.5 text-indigo-700" size={22} />
            <div>
              <h2 className="text-lg font-[750] text-slate-900">Decisioni registrate</h2>
              <p className="text-sm text-slate-600">{register.items.length} decisioni · {visible.length} visibili nei filtri correnti.</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <button type="button" onClick={addDecision} className="inline-flex items-center gap-2 rounded-xl bg-indigo-700 px-4 py-2.5 text-sm font-[650] text-white hover:bg-indigo-800"><Plus size={18} /> Nuova decisione</button>
            <button type="button" disabled={!register.items.length} onClick={exportMarkdown} className="inline-flex items-center gap-2 rounded-xl border border-indigo-200 bg-white px-4 py-2.5 text-sm font-[650] text-indigo-700 hover:bg-indigo-50 disabled:opacity-40"><Download size={17} /> Esporta Markdown</button>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          <input value={query} onChange={event => setQuery(event.target.value)} placeholder="Cerca nel registro…" className="block w-full rounded-xl border border-slate-300 px-3 py-2 text-sm" />
          <select value={filterStatus} onChange={event => setFilterStatus(event.target.value as 'tutti' | DecisionStatus)} className="block w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm">
            <option value="tutti">Tutti gli stati</option>
            {DECISION_STATUSES.map(value => <option key={value} value={value}>{labelStatus(value)}</option>)}
          </select>
          <select value={filterArea} onChange={event => setFilterArea(event.target.value as 'tutte' | DecisionArea)} className="block w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm">
            <option value="tutte">Tutte le aree</option>
            {DECISION_AREAS.map(value => <option key={value} value={value}>{value}</option>)}
          </select>
        </div>
      </section>

      {register.items.length ? (
        <section className="space-y-4" aria-live="polite">
          {visible.length ? visible.map(item => (
            <DecisionEditor
              key={item.id}
              item={item}
              findings={findings}
              onChange={patch => setRegister(current => updateDecision(current, item.id, patch))}
              onRemove={() => setRegister(current => deleteDecision(current, item.id))}
              onArchive={() => setRegister(current => updateDecision(current, item.id, { status: 'archiviato' }))}
            />
          )) : <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center text-sm text-slate-600">Nessuna decisione corrisponde ai filtri selezionati.</div>}
        </section>
      ) : (
        <section className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center">
          <FileSearch className="mx-auto text-slate-400" />
          <p className="mt-3 text-sm text-slate-600">Ancora nessuna decisione. Usa «Nuova decisione» per avviare la tracciabilità da una PilotFinding.</p>
        </section>
      )}
    </div>
  )
}
