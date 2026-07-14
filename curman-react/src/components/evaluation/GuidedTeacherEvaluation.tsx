import { useEffect, useMemo, useRef, useState } from 'react'
import { ClipboardCheck, Download, RotateCcw, Trash2, X } from 'lucide-react'

const STORAGE_KEY = 'curmanlight:guided-teacher-evaluation:v1'
const SCHEMA = 'cml-guided-teacher-evaluation-v1'

const STEPS = [
  {
    title: 'Orientarsi',
    instruction: 'Osserva la Home e prova a capire da dove inizieresti senza consultare istruzioni esterne.',
    prompt: 'Che cosa rende chiaro o poco chiaro il primo passo?',
  },
  {
    title: 'Consultare',
    instruction: 'Chiudi temporaneamente questo pannello, apri Consulta il curricolo e osserva disciplina, filtri e dettaglio di una unità.',
    prompt: 'Che cosa facilita o ostacola la comprensione del curricolo?',
  },
  {
    title: 'Provare un’attività',
    instruction: 'Apri Proponi un aggiornamento e osserva il confronto disponibile. Non è necessario registrare una scelta.',
    prompt: 'Il processo e il significato delle azioni risultano comprensibili?',
  },
  {
    title: 'Valutare il supporto',
    instruction: 'Esamina messaggi, indicazioni contestuali e possibilità di tornare al punto precedente.',
    prompt: 'Quale aiuto è utile e quale supporto manca?',
  },
  {
    title: 'Restituire un giudizio',
    instruction: 'Raccogli una valutazione complessiva dell’esperienza appena svolta.',
    prompt: 'Indica punti di forza, difficoltà e il miglioramento prioritario.',
  },
] as const

type EvaluationData = {
  schema: typeof SCHEMA
  id: string
  createdAt: string
  updatedAt: string
  currentStep: number
  completed: boolean
  notes: string[]
  secondTestAvailable: boolean | null
}

function createEvaluation(): EvaluationData {
  const now = new Date().toISOString()
  return {
    schema: SCHEMA,
    id: globalThis.crypto?.randomUUID?.() ?? `cml-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    createdAt: now,
    updatedAt: now,
    currentStep: 0,
    completed: false,
    notes: STEPS.map(() => ''),
    secondTestAvailable: null,
  }
}

function loadEvaluation(): EvaluationData | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as Partial<EvaluationData>
    if (parsed.schema !== SCHEMA || !Array.isArray(parsed.notes)) return null
    return {
      ...createEvaluation(),
      ...parsed,
      currentStep: Math.min(Math.max(Number(parsed.currentStep) || 0, 0), STEPS.length - 1),
      notes: STEPS.map((_, index) => typeof parsed.notes?.[index] === 'string' ? parsed.notes[index] : ''),
    }
  } catch {
    return null
  }
}

function saveEvaluation(data: EvaluationData) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...data, updatedAt: new Date().toISOString() }))
}

function downloadEvaluation(data: EvaluationData) {
  const payload = {
    ...data,
    updatedAt: new Date().toISOString(),
    product: 'CurManLight React',
    responses: STEPS.map((step, index) => ({
      step: index + 1,
      title: step.title,
      prompt: step.prompt,
      note: data.notes[index],
    })),
    privacy: 'Dati raccolti ed esportati esclusivamente sul dispositivo dell’utente.',
  }
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = `curmanlight-osservazioni-${data.id.slice(0, 8)}.json`
  document.body.appendChild(anchor)
  anchor.click()
  anchor.remove()
  URL.revokeObjectURL(url)
}

export function GuidedTeacherEvaluation() {
  const [isOpen, setIsOpen] = useState(false)
  const [data, setData] = useState<EvaluationData>(() => loadEvaluation() ?? createEvaluation())
  const [confirmDelete, setConfirmDelete] = useState(false)
  const dialogRef = useRef<HTMLDivElement>(null)
  const skipSaveRef = useRef(false)
  const hasSavedProgress = useMemo(
    () => data.completed || data.currentStep > 0 || data.notes.some(note => note.trim().length > 0),
    [data],
  )

  useEffect(() => {
    if (skipSaveRef.current) { skipSaveRef.current = false; return }
    saveEvaluation(data)
  }, [data])

  useEffect(() => {
    if (!isOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setIsOpen(false); setConfirmDelete(false) }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen])

  const step = STEPS[data.currentStep]

  const updateNote = (value: string) => {
    setData(current => ({
      ...current,
      notes: current.notes.map((note, index) => index === current.currentStep ? value : note),
    }))
  }

  const resetEvaluation = () => {
    localStorage.removeItem(STORAGE_KEY)
    skipSaveRef.current = true
    setData(createEvaluation())
    setConfirmDelete(false)
    setIsOpen(false)
  }

  return (
    <>
      <section aria-labelledby="guided-evaluation-title" className="rounded-2xl border border-slate-200 bg-white p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-start gap-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center">
              <ClipboardCheck size={22} className="text-emerald-700" />
            </span>
            <div>
              <h2 id="guided-evaluation-title" className="text-base font-[700] text-slate-900">Esplora lo strumento e lascia le tue osservazioni</h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
                Un breve percorso guidato per provare alcune funzioni e indicare ciò che può essere migliorato. Le osservazioni sono facoltative e restano salvate solo sul dispositivo fino all’esportazione.
              </p>
              {hasSavedProgress && (
                <p className="mt-2 text-xs font-[650] text-emerald-800">
                  Percorso salvato: tappa {data.currentStep + 1} di {STEPS.length}{data.completed ? ' — completato' : ''}.
                </p>
              )}
            </div>
          </div>
          <button type="button" onClick={() => setIsOpen(true)} className="shrink-0 rounded-xl bg-emerald-700 px-4 py-2.5 text-sm font-[650] text-white hover:bg-emerald-800">
            {hasSavedProgress ? 'Riprendi il percorso' : 'Inizia il percorso'}
          </button>
        </div>
      </section>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/55 p-3 sm:p-6" role="dialog" aria-modal="true" aria-labelledby="evaluation-dialog-title" ref={dialogRef}>
          <div className="flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
            <header className="flex items-start justify-between gap-4 border-b border-slate-200 px-5 py-4 sm:px-6">
              <div>
                {data.completed ? (
                  <>
                    <p className="text-xs font-[700] uppercase tracking-wide text-emerald-700">Percorso di valutazione</p>
                    <h2 id="evaluation-dialog-title" className="mt-1 text-xl font-[750] text-slate-900">Percorso completato</h2>
                  </>
                ) : (
                  <>
                    <p className="text-xs font-[700] uppercase tracking-wide text-emerald-700">Percorso di valutazione · {data.currentStep + 1}/{STEPS.length}</p>
                    <h2 id="evaluation-dialog-title" className="mt-1 text-xl font-[750] text-slate-900">{step.title}</h2>
                  </>
                )}
              </div>
              <button type="button" onClick={() => { setIsOpen(false); setConfirmDelete(false) }} className="rounded-lg p-2 text-slate-500 hover:bg-slate-100" aria-label="Chiudi e continua più tardi">
                <X size={21} />
              </button>
            </header>

            <div className="overflow-y-auto px-5 py-5 sm:px-6">
              {data.completed ? (
                <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5 text-center">
                  <p className="text-sm font-[650] text-emerald-800">Grazie, il percorso è stato completato.</p>
                  <p className="mt-2 text-sm text-slate-600">Puoi esportare le osservazioni in qualsiasi momento oppure chiudere il pannello.</p>
                </div>
              ) : (
                <>
                  <div className="mb-5 h-2 overflow-hidden rounded-full bg-slate-100" aria-hidden="true">
                    <div className="h-full bg-emerald-600 transition-all" style={{ width: `${((data.currentStep + 1) / STEPS.length) * 100}%` }} />
                  </div>

                  <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-4">
                    <p className="text-sm leading-6 text-slate-700">{step.instruction}</p>
                    <p className="mt-3 text-xs text-slate-500">Puoi chiudere il pannello, usare liberamente lo strumento e riprendere il percorso dalla Home.</p>
                  </div>

                  <label className="mt-5 block text-sm font-[650] text-slate-800" htmlFor="guided-evaluation-note">{step.prompt}</label>
                  <textarea
                    id="guided-evaluation-note"
                    value={data.notes[data.currentStep]}
                    onChange={event => updateNote(event.target.value)}
                    rows={7}
                    placeholder="Annotazione facoltativa"
                    className="mt-2 w-full resize-y rounded-xl border border-slate-300 p-3 text-sm leading-6 text-slate-800 outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                  />

                  {data.currentStep === STEPS.length - 1 && (
                    <fieldset className="mt-5">
                      <legend className="text-sm font-[650] text-slate-800">Saresti disponibile per un secondo breve test?</legend>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {[
                          { value: true, label: 'Sì' },
                          { value: false, label: 'No' },
                          { value: null, label: 'Preferisco non indicarlo' },
                        ].map(option => (
                          <button
                            key={option.label}
                            type="button"
                            onClick={() => setData(current => ({ ...current, secondTestAvailable: option.value }))}
                            className={`rounded-xl border px-3 py-2 text-sm ${data.secondTestAvailable === option.value ? 'border-emerald-600 bg-emerald-50 text-emerald-800' : 'border-slate-200 text-slate-600 hover:bg-slate-50'}`}
                          >
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
                <div className="flex items-center justify-between gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3">
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
                  <button type="button" onClick={() => downloadEvaluation(data)} className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm font-[600] text-slate-700 hover:bg-slate-100">
                    <Download size={17} /> Esporta osservazioni
                  </button>
                </div>
              )}
              <div className="flex items-center justify-between gap-3">
                {!data.completed && (
                  <button
                    type="button"
                    disabled={data.currentStep === 0}
                    onClick={() => setData(current => ({ ...current, currentStep: Math.max(0, current.currentStep - 1), completed: false }))}
                    className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-[600] text-slate-700 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Indietro
                  </button>
                )}
                {!data.completed && data.currentStep < STEPS.length - 1 && (
                  <button type="button" onClick={() => setData(current => ({ ...current, currentStep: Math.min(STEPS.length - 1, current.currentStep + 1) }))} className="ml-auto rounded-xl bg-emerald-700 px-4 py-2 text-sm font-[650] text-white hover:bg-emerald-800">
                    Continua
                  </button>
                )}
                {!data.completed && data.currentStep === STEPS.length - 1 && (
                  <button type="button" onClick={() => setData(current => ({ ...current, completed: true }))} className="ml-auto inline-flex items-center gap-2 rounded-xl bg-emerald-700 px-4 py-2 text-sm font-[650] text-white hover:bg-emerald-800">
                    <RotateCcw size={17} /> Salva e completa
                  </button>
                )}
              </div>
              <p className="text-center text-xs text-slate-500">Nessun dato viene inviato all’esterno. La chiusura del pannello conserva localmente le annotazioni.</p>
            </footer>
          </div>
        </div>
      )}
    </>
  )
}
