import { ArrowLeft, ClipboardCheck, Home, PlayCircle } from 'lucide-react'
import { useState } from 'react'
import { useAppStore } from '@/stores/useAppStore'
import type { ViewId } from '@/types/state'

type PilotStep = 'intro' | 'tasks'

type PilotTask = {
  id: string
  title: string
  objective: string
  instruction: string
  observe: string
  destination: ViewId
  actionLabel: string
}

const RULES = [
  'non inserire nomi o dati personali reali',
  'non usare documenti riservati',
  "le attivita svolte non modificano automaticamente il curricolo d'istituto",
  'le osservazioni servono a migliorare il prodotto',
  'non esistono risposte giuste o sbagliate',
]

let sessionPilotTaskIndex: number | null = null

const PILOT_TASKS: PilotTask[] = [
  {
    id: 'home-orientation',
    title: 'Orientarsi nella Home',
    objective: 'Riconoscere le aree principali e capire da dove iniziare.',
    instruction: 'Apri la Home e osserva da dove inizieresti: individua dove consultare il curricolo e dove avviare una attivita.',
    observe: 'Nota quali parole sono chiare, dove nasce esitazione e quale azione proveresti per prima.',
    destination: 'home',
    actionLabel: 'Vai alla Home',
  },
  {
    id: 'curriculum-consultation',
    title: 'Consultare una disciplina',
    objective: 'Aprire il curricolo e leggere contenuti, obiettivi, conoscenze e fonte.',
    instruction: 'Scegli ordine, disciplina o nucleo e osserva se capisci da dove provengono le informazioni.',
    observe: 'Guarda se obiettivi, conoscenze e fonte sono facili da distinguere.',
    destination: 'consultazione',
    actionLabel: 'Vai al curricolo',
  },
  {
    id: 'teacher-proposal',
    title: 'Avviare una proposta',
    objective: 'Raggiungere la superficie docente e capire cosa resta salvato localmente.',
    instruction: 'Apri il percorso per proporre un aggiornamento senza completare necessariamente tutto il flusso.',
    observe: 'Nota se e chiaro cosa viene salvato, cosa resta bozza e cosa richiede una decisione umana.',
    destination: 'revisione',
    actionLabel: 'Vai alla proposta',
  },
  {
    id: 'validation-passage',
    title: 'Riconoscere il passaggio di validazione',
    objective: 'Distinguere proposta docente, decisione dipartimentale e consolidamento finale.',
    instruction: "Leggi il percorso dei ruoli e verifica se e chiaro che nessuna azione modifica automaticamente il curricolo d'istituto.",
    observe: 'Osserva se capisci quale file passa a chi e quale scelta resta collegiale.',
    destination: 'processo',
    actionLabel: 'Vai al processo',
  },
]

export function GuidedTeacherPilotView() {
  const [step, setStep] = useState<PilotStep>('intro')
  const [currentTaskIndex, setCurrentTaskIndex] = useState<number>(sessionPilotTaskIndex ?? 0)
  const [lastVisitedTaskIndex, setLastVisitedTaskIndex] = useState<number | null>(sessionPilotTaskIndex)
  const setVista = useAppStore(state => state.setVista)

  const currentTask = PILOT_TASKS[currentTaskIndex]
  const canGoBack = currentTaskIndex > 0
  const canContinue = currentTaskIndex < PILOT_TASKS.length - 1

  function rememberTask(index: number) {
    sessionPilotTaskIndex = index
    setLastVisitedTaskIndex(index)
    setCurrentTaskIndex(index)
  }

  function startTasks() {
    rememberTask(lastVisitedTaskIndex ?? sessionPilotTaskIndex ?? 0)
    setStep('tasks')
  }

  function goToFunction() {
    rememberTask(currentTaskIndex)
    setVista(currentTask.destination)
  }

  if (step === 'tasks') {
    return (
      <div className="mx-auto flex max-w-4xl flex-col gap-5 py-2">
        <section aria-labelledby="pilot-task-title" data-cml-first-task="Compito 1" className="rounded-2xl border border-indigo-100 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex items-start gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700">
                <ClipboardCheck size={21} />
              </span>
              <div>
                <p className="text-xs font-[750] uppercase tracking-wide text-indigo-600">Passaggio {currentTaskIndex + 1} di {PILOT_TASKS.length} · Compito {currentTaskIndex + 1}</p>
                <h1 id="pilot-task-title" className="mt-1 text-2xl font-[750] text-slate-900">{currentTask.title}</h1>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">{currentTask.objective}</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setStep('intro')}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-[650] text-slate-700 hover:bg-slate-50"
            >
              <ArrowLeft size={17} />
              Torna alle regole
            </button>
          </div>

          <div className="mt-5 flex flex-wrap gap-2" aria-label="Avanzamento della prova guidata">
            {PILOT_TASKS.map((task, index) => (
              <span
                key={task.id}
                className={`rounded-full border px-3 py-1 text-xs font-[700] ${index === currentTaskIndex ? 'border-indigo-600 bg-indigo-50 text-indigo-700' : 'border-slate-200 bg-white text-slate-500'}`}
              >
                {index + 1}. {task.title}
              </span>
            ))}
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h2 className="text-sm font-[700] text-slate-900">Istruzione</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">{currentTask.instruction}</p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h2 className="text-sm font-[700] text-slate-900">Cosa osservare</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">{currentTask.observe}</p>
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4">
            <h2 className="text-sm font-[700] text-amber-950">Prima di usare la funzione</h2>
            <p className="mt-2 text-sm leading-6 text-amber-900">
              Non compilare dati reali e non considerare il passaggio come completato automaticamente: torna qui quando vuoi proseguire.
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <button
              type="button"
              onClick={() => rememberTask(Math.max(0, currentTaskIndex - 1))}
              disabled={!canGoBack}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-indigo-200 bg-white px-4 py-2.5 text-sm font-[650] text-indigo-700 hover:bg-indigo-50 disabled:cursor-not-allowed disabled:opacity-45"
            >
              Precedente
            </button>
            <button
              type="button"
              onClick={() => rememberTask(Math.min(PILOT_TASKS.length - 1, currentTaskIndex + 1))}
              disabled={!canContinue}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-700 px-4 py-2.5 text-sm font-[700] text-white hover:bg-indigo-800 disabled:cursor-not-allowed disabled:opacity-45"
            >
              Continua
            </button>
            <button
              type="button"
              onClick={goToFunction}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-indigo-200 bg-white px-4 py-2.5 text-sm font-[650] text-indigo-700 hover:bg-indigo-50"
            >
              {currentTask.actionLabel}
              <span className="sr-only">Vai alla funzione</span>
            </button>
            <button
              type="button"
              onClick={() => setVista('home')}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-[650] text-slate-700 hover:bg-slate-50"
            >
              Esci dalla prova
            </button>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-5 py-2">
      <section aria-labelledby="pilot-intro-title" className="rounded-2xl border border-indigo-100 bg-white p-5 shadow-sm sm:p-6">
        <div className="flex items-start gap-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700">
            <ClipboardCheck size={21} />
          </span>
          <div>
            <p className="text-xs font-[750] uppercase tracking-wide text-indigo-600">Pilot docenti</p>
            <h1 id="pilot-intro-title" className="mt-1 text-2xl font-[750] text-slate-900">Prova guidata per docenti</h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
              Questa prova serve a capire se lo strumento e chiaro, utile e adatto al lavoro reale dei docenti.
            </p>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <h2 className="text-sm font-[700] text-slate-900">Regole essenziali</h2>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
              {RULES.map(rule => (
                <li key={rule} className="flex gap-2">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>
          <aside className="rounded-xl border border-slate-200 bg-white p-4">
            <h2 className="text-sm font-[700] text-slate-900">Durata indicativa</h2>
            <p className="mt-2 text-2xl font-[750] text-indigo-800">Circa 15-20 minuti</p>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Puoi interrompere la prova in qualsiasi momento e tornare al normale uso dell'app.
            </p>
          </aside>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={startTasks}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-700 px-4 py-2.5 text-sm font-[700] text-white hover:bg-indigo-800"
          >
            <PlayCircle size={18} />
            {lastVisitedTaskIndex === null ? 'Inizia la prova' : 'Riprendi la prova'}
          </button>
          <button
            type="button"
            onClick={() => setVista('home')}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-indigo-200 bg-white px-4 py-2.5 text-sm font-[650] text-indigo-700 hover:bg-indigo-50"
          >
            <Home size={18} />
            Torna alla Home
          </button>
        </div>
      </section>
    </div>
  )
}
