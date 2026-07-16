import { useEffect, useMemo, useRef, useState } from 'react'
import { ClipboardCheck, Download, FileJson, RotateCcw, Trash2, X } from 'lucide-react'
import {
  PILOT_EVALUATION_STEPS,
  clearPilotEvaluation,
  createPilotEvaluation,
  readPilotEvaluation,
  serializePilotEvaluationJson,
  serializePilotEvaluationMarkdown,
  writePilotEvaluation,
  type PilotEvaluationData,
} from '@/features/pilot-evaluation/pilot-evaluation.mjs'

function downloadText(filename: string, content: string, type: string) {
  const blob = new Blob([content], { type })
  const url = URL.createObjectURL(blob)
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = filename
  document.body.appendChild(anchor)
  anchor.click()
  anchor.remove()
  URL.revokeObjectURL(url)
}

export function GuidedTeacherEvaluation() {
  const [isOpen, setIsOpen] = useState(false)
  const [data, setData] = useState<PilotEvaluationData>(() => readPilotEvaluation(localStorage) ?? createPilotEvaluation())
  const [confirmDelete, setConfirmDelete] = useState(false)
  const skipSaveRef = useRef(false)
  const hasSavedProgress = useMemo(
    () => data.completed || data.currentStep > 0 || data.notes.some(note => note.trim().length > 0),
    [data],
  )

  useEffect(() => {
    if (skipSaveRef.current) {
      skipSaveRef.current = false
      return
    }
    try {
      writePilotEvaluation(localStorage, data)
    } catch {
      // La raccolta resta utilizzabile anche se lo storage locale non è disponibile.
    }
  }, [data])

  useEffect(() => {
    if (!isOpen) return
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
        setConfirmDelete(false)
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  const step = PILOT_EVALUATION_STEPS[data.currentStep]
  const exportStem = `curmanlight-osservazioni-${data.id.slice(0, 8)}`

  const updateNote = (value: string) => {
    setData(current => ({
      ...current,
      notes: current.notes.map((note, index) => index === current.currentStep ? value : note),
    }))
  }

  const updateContext = (field: keyof PilotEvaluationData['context'], value: string) => {
    setData(current => ({ ...current, context: { ...current.context, [field]: value } }))
  }

  const resetEvaluation = () => {
    clearPilotEvaluation(localStorage)
    skipSaveRef.current = true
    setData(createPilotEvaluation())
    setConfirmDelete(false)
    setIsOpen(false)
  }

  const exportMarkdown = () => downloadText(
    `${exportStem}.md`,
    serializePilotEvaluationMarkdown(data),
    'text/markdown;charset=utf-8',
  )

  const exportJson = () => downloadText(
    `${exportStem}.json`,
    serializePilotEvaluationJson(data),
    'application/json;charset=utf-8',
  )

  return (
    <>
      <section aria-labelledby="guided-evaluation-title" className="rounded-2xl border border-emerald-200 bg-white p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-start gap-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center">
              <ClipboardCheck size={22} className="text-emerald-700" />
            </span>
            <div>
              <p className="text-xs font-[700] uppercase tracking-wide text-emerald-700">Test pilota per docenti</p>
              <h2 id="guided-evaluation-title" className="mt-1 text-base font-[700] text-slate-900">Esplora lo strumento e lascia le tue osservazioni</h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
                Un percorso breve per provare funzioni reali e riflettere su chiarezza, utilità e supporto. Le annotazioni sono facoltative, anonime e restano sul dispositivo fino all’esportazione.
              </p>
              {hasSavedProgress && (
                <p className="mt-2 text-xs font-[650] text-emerald-800">
                  Percorso salvato: tappa {data.currentStep + 1} di {PILOT_EVALUATION_STEPS.length}{data.completed ? ' — completato' : ''}.
                </p>
              )}
            </div>
          </div>
          <button type="button" onClick={() => setIsOpen(true)} className="shrink-0 rounded-xl bg-emerald-700 px-4 py-2.5 text-sm font-[650] text-white hover:bg-emerald-800">
            {hasSavedProgress ? 'Riprendi il test pilota' : 'Inizia il test pilota'}
          </button>
        </div>
      </section>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/55 p-3 sm:p-6" role="dialog" aria-modal="true" aria-labelledby="evaluation-dialog-title">
          <div className="flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
            <header className="flex items-start justify-between gap-4 border-b border-slate-200 px-5 py-4 sm:px-6">
              <div>
                <p className="text-xs font-[700] uppercase tracking-wide text-emerald-700">Test pilota CurManLight</p>
                <h2 id="evaluation-dialog-title" className="mt-1 text-xl font-[750] text-slate-900">
                  {data.completed ? 'Percorso completato' : `${data.currentStep + 1}. ${step.title}`}
                </h2>
              </div>
              <button type="button" onClick={() => { setIsOpen(false); setConfirmDelete(false) }} className="rounded-lg p-2 text-slate-500 hover:bg-slate-100" aria-label="Chiudi e continua più tardi">
                <X size={21} />
              </button>
            </header>

            <div className="overflow-y-auto px-5 py-5 sm:px-6">
              {data.completed ? (
                <div className="space-y-4">
                  <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5 text-center">
                    <p className="text-sm font-[650] text-emerald-800">Grazie. Le osservazioni sono pronte per essere condivise.</p>
                    <p className="mt-2 text-sm text-slate-600">Il file Markdown è leggibile direttamente; il JSON conserva una copia strutturata per l’analisi.</p>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <button type="button" onClick={exportMarkdown} className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-700 px-4 py-3 text-sm font-[650] text-white hover:bg-emerald-800">
                      <Download size={18} /> Esporta relazione leggibile
                    </button>
                    <button type="button" onClick={exportJson} className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-[650] text-slate-700 hover:bg-slate-50">
                      <FileJson size={18} /> Esporta dati strutturati
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="mb-5 h-2 overflow-hidden rounded-full bg-slate-100" aria-hidden="true">
                    <div className="h-full bg-emerald-600 transition-all" style={{ width: `${((data.currentStep + 1) / PILOT_EVALUATION_STEPS.length) * 100}%` }} />
                  </div>

                  <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-4">
                    <p className="text-sm leading-6 text-slate-700">{step.instruction}</p>
                    <p className="mt-3 text-xs text-slate-500">Puoi chiudere il pannello, usare liberamente lo strumento e riprendere il test dalla Home.</p>
                  </div>

                  {data.currentStep === 0 && (
                    <fieldset className="mt-5 rounded-xl border border-slate-200 p-4">
                      <legend className="px-1 text-sm font-[650] text-slate-800">Contesto facoltativo e anonimo</legend>
                      <div className="grid gap-4 sm:grid-cols-2">
                        <label className="text-sm text-slate-700">Ruolo
                          <select value={data.context.role} onChange={event => updateContext('role', event.target.value)} className="mt-1 block w-full rounded-xl border border-slate-300 bg-white px-3 py-2">
                            <option value="">Non indicato</option>
                            <option value="docente">Docente</option>
                            <option value="dipartimento">Dipartimento</option>
                            <option value="referente">Referente</option>
                            <option value="altro">Altro</option>
                          </select>
                        </label>
                        <label className="text-sm text-slate-700">Ordine di scuola
                          <select value={data.context.schoolOrder} onChange={event => updateContext('schoolOrder', event.target.value)} className="mt-1 block w-full rounded-xl border border-slate-300 bg-white px-3 py-2">
                            <option value="">Non indicato</option>
                            <option value="infanzia">Infanzia</option>
                            <option value="primaria">Primaria</option>
                            <option value="secondaria">Secondaria di primo grado</option>
                          </select>
                        </label>
                      </div>
                      <label className="mt-4 block text-sm text-slate-700">Familiarità o contesto d’uso
                        <input value={data.context.experienceNote} onChange={event => updateContext('experienceNote', event.target.value)} placeholder="Per esempio: primo utilizzo, lavoro di dipartimento…" className="mt-1 block w-full rounded-xl border border-slate-300 px-3 py-2" />
                      </label>
                      <p className="mt-3 text-xs text-slate-500">Non inserire nomi, email o altri dati personali.</p>
                    </fieldset>
                  )}

                  <label className="mt-5 block text-sm font-[650] text-slate-800" htmlFor="guided-evaluation-note">{step.prompt}</label>
                  <textarea id="guided-evaluation-note" value={data.notes[data.currentStep]} onChange={event => updateNote(event.target.value)} rows={7} placeholder="Annotazione facoltativa" className="mt-2 w-full resize-y rounded-xl border border-slate-300 p-3 text-sm leading-6 text-slate-800 outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100" />

                  {data.currentStep === PILOT_EVALUATION_STEPS.length - 1 && (
                    <fieldset className="mt-5">
                      <legend className="text-sm font-[650] text-slate-800">Saresti disponibile per un secondo breve test?</legend>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {[
                          { value: true, label: 'Sì' },
                          { value: false, label: 'No' },
                          { value: null, label: 'Preferisco non indicarlo' },
                        ].map(option => (
                          <button key={option.label} type="button" onClick={() => setData(current => ({ ...current, secondTestAvailable: option.value }))} aria-pressed={data.secondTestAvailable === option.value} className={`rounded-xl border px-3 py-2 text-sm ${data.secondTestAvailable === option.value ? 'border-emerald-600 bg-emerald-50 text-emerald-800' : 'border-slate-200 text-slate-600 hover:bg-slate-50'}`}>
                            {option.label}
                          </button>
                        ))}
                      </div>
                    </fieldset>
                  )}
                </>
              )}
            </div>

            <footer className="flex flex-col gap-3 border-t border-slate-200 bg-slate-50 px-5 py-4 sm:px-6">
              {confirmDelete ? (
                <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3">
                  <p className="text-sm text-red-800">Eliminare tutte le annotazioni e il percorso?</p>
                  <div className="flex gap-2">
                    <button type="button" onClick={() => setConfirmDelete(false)} className="rounded-xl border border-slate-300 bg-white px-3 py-1.5 text-sm font-[600] text-slate-700 hover:bg-slate-100">Annulla</button>
                    <button type="button" onClick={resetEvaluation} className="rounded-xl bg-red-700 px-3 py-1.5 text-sm font-[600] text-white hover:bg-red-800">Sì, elimina</button>
                  </div>
                </div>
              ) : (
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <button type="button" onClick={() => setConfirmDelete(true)} className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-[600] text-red-700 hover:bg-red-50">
                    <Trash2 size={17} /> Cancella il percorso locale
                  </button>
                  {!data.completed && (
                    <button type="button" onClick={exportMarkdown} className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm font-[600] text-slate-700 hover:bg-slate-100">
                      <Download size={17} /> Esporta bozza osservazioni
                    </button>
                  )}
                </div>
              )}

              {!data.completed && (
                <div className="flex items-center justify-between gap-3">
                  <button type="button" disabled={data.currentStep === 0} onClick={() => setData(current => ({ ...current, currentStep: Math.max(0, current.currentStep - 1), completed: false }))} className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-[600] text-slate-700 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40">
                    Indietro
                  </button>
                  {data.currentStep < PILOT_EVALUATION_STEPS.length - 1 ? (
                    <button type="button" onClick={() => setData(current => ({ ...current, currentStep: Math.min(PILOT_EVALUATION_STEPS.length - 1, current.currentStep + 1) }))} className="ml-auto rounded-xl bg-emerald-700 px-4 py-2 text-sm font-[650] text-white hover:bg-emerald-800">Continua</button>
                  ) : (
                    <button type="button" onClick={() => setData(current => ({ ...current, completed: true }))} className="ml-auto inline-flex items-center gap-2 rounded-xl bg-emerald-700 px-4 py-2 text-sm font-[650] text-white hover:bg-emerald-800">
                      <RotateCcw size={17} /> Salva e completa
                    </button>
                  )}
                </div>
              )}
              <p className="text-center text-xs text-slate-500">Nessun dato viene inviato all’esterno. La chiusura del pannello conserva localmente le annotazioni.</p>
            </footer>
          </div>
        </div>
      )}
    </>
  )
}
