import { BookOpen, Download, FilePenLine, PencilRuler, Settings } from 'lucide-react'
import { useAppStore } from '@/stores/useAppStore'
import type { ViewId } from '@/types/state'

type TaskCardProps = {
  title: string
  description: string
  icon: React.ComponentType<{ size?: number; className?: string }>
  destination?: ViewId
  primary?: boolean
  unavailable?: boolean
}

function TaskCard({ title, description, icon: Icon, destination, primary = false, unavailable = false }: TaskCardProps) {
  const setVista = useAppStore(s => s.setVista)
  const baseClass = 'rounded-2xl border p-5 text-left transition-colors min-h-44 flex flex-col justify-between gap-6'
  const activeClass = primary
    ? 'bg-indigo-700 border-indigo-700 text-white hover:bg-indigo-800'
    : 'bg-white border-slate-200 text-slate-800 hover:border-indigo-300'
  const unavailableClass = 'bg-slate-50 border-slate-200 text-slate-500 cursor-not-allowed'

  return (
    <button
      type="button"
      onClick={() => destination && !unavailable && setVista(destination)}
      disabled={unavailable}
      className={`${baseClass} ${unavailable ? unavailableClass : activeClass}`}
      aria-disabled={unavailable}
    >
      <div className="flex items-start justify-between gap-4">
        <Icon size={26} className={primary ? 'text-white' : unavailable ? 'text-slate-400' : 'text-indigo-600'} />
        {!unavailable && <span aria-hidden="true" className="text-2xl">›</span>}
      </div>
      <div>
        <h3 className="text-base font-[650]">{title}</h3>
        <p className={`mt-2 text-sm leading-6 ${primary ? 'text-indigo-100' : 'text-slate-500'}`}>{description}</p>
        {unavailable && <p className="mt-3 text-xs font-[600] text-slate-500">Sarà disponibile quando il percorso sarà completo.</p>}
      </div>
    </button>
  )
}

export function HomeView() {
  const setVista = useAppStore(s => s.setVista)
  return (
    <div className="max-w-6xl mx-auto flex flex-col gap-8 py-4">
      <section>
        <h1 className="text-3xl font-[700] text-indigo-800">Cosa vuoi fare oggi?</h1>
        <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
          Consulta il curricolo, prepara una proposta, avvia una progettazione o produci un documento in un percorso guidato e sempre soggetto a validazione umana.
        </p>
      </section>

      <section aria-label="Attività principali" className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <TaskCard
          title="Consulta il curricolo"
          description="Leggi il curricolo vigente e trova i contenuti della disciplina che ti interessa."
          icon={BookOpen}
          destination="consultazione"
          primary
        />
        <TaskCard
          title="Prepara una progettazione"
          description="Evidenze, programmazione annuale e UDA saranno disponibili al completamento del relativo percorso."
          icon={PencilRuler}
          unavailable
        />
        <TaskCard
          title="Proponi un aggiornamento"
          description="Confronta i contenuti e prepara una proposta da discutere nel dipartimento."
          icon={FilePenLine}
          destination="revisione"
        />
        <TaskCard
          title="Esporta un documento"
          description="Produci un documento finale, un file di lavoro o una copia di sicurezza."
          icon={Download}
          destination="esportazioni"
        />
      </section>

      <section className="rounded-2xl border border-indigo-100 bg-indigo-50/40 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <Settings size={22} className="mt-0.5 text-indigo-600 shrink-0" />
          <div>
            <h2 className="text-sm font-[650] text-indigo-900">Imposta il tuo contesto di lavoro</h2>
            <p className="mt-1 text-sm text-slate-600">Ruolo, istituto, anno scolastico e disciplina si gestiscono nelle Impostazioni.</p>
          </div>
        </div>
        <button type="button" onClick={() => setVista('impostazioni')} className="shrink-0 rounded-xl border border-indigo-200 bg-white px-4 py-2 text-sm font-[600] text-indigo-700 hover:bg-indigo-50">
          Vai a Impostazioni
        </button>
      </section>
    </div>
  )
}
