import { ArrowLeft, ClipboardCheck, Home, PlayCircle } from 'lucide-react'
import { useState } from 'react'
import { useAppStore } from '@/stores/useAppStore'

type PilotStep = 'intro' | 'task-1'

const RULES = [
  'non inserire nomi o dati personali reali',
  'non usare documenti riservati',
  "le attivita svolte non modificano automaticamente il curricolo d'istituto",
  'le osservazioni servono a migliorare il prodotto',
  'non esistono risposte giuste o sbagliate',
]

export function GuidedTeacherPilotView() {
  const [step, setStep] = useState<PilotStep>('intro')
  const setVista = useAppStore(state => state.setVista)

  if (step === 'task-1') {
    return (
      <div className="mx-auto flex max-w-4xl flex-col gap-5 py-2">
        <section aria-labelledby="pilot-task-title" className="rounded-2xl border border-indigo-100 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex items-start gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700">
                <ClipboardCheck size={21} />
              </span>
              <div>
                <p className="text-xs font-[750] uppercase tracking-wide text-indigo-600">Compito 1</p>
                <h1 id="pilot-task-title" className="mt-1 text-2xl font-[750] text-slate-900">Orientati nella Home</h1>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                  Apri la Home e osserva da dove inizieresti senza istruzioni esterne.
                </p>
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

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h2 className="text-sm font-[700] text-slate-900">Obiettivo</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Capire se un docente riconosce subito lo scopo dell'app e la prima azione utile.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <h2 className="text-sm font-[700] text-slate-900">Cosa osservare</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Quale area attira l'attenzione, quali parole risultano chiare e dove nasce esitazione.
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4">
            <h2 className="text-sm font-[700] text-amber-950">Prima di andare alla Home</h2>
            <p className="mt-2 text-sm leading-6 text-amber-900">
              Non compilare dati reali. Per questa prova basta esplorare e annotare cosa risulta chiaro,
              difficile o migliorabile.
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => setVista('home')}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-700 px-4 py-2.5 text-sm font-[700] text-white hover:bg-indigo-800"
            >
              <Home size={18} />
              Vai alla Home
            </button>
            <button
              type="button"
              onClick={() => setStep('intro')}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-indigo-200 bg-white px-4 py-2.5 text-sm font-[650] text-indigo-700 hover:bg-indigo-50"
            >
              Torna alle regole
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
            onClick={() => setStep('task-1')}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-700 px-4 py-2.5 text-sm font-[700] text-white hover:bg-indigo-800"
          >
            <PlayCircle size={18} />
            Inizia la prova
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
