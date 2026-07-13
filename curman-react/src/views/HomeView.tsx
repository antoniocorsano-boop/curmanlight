import { BookOpen, Download, FilePenLine, Info, PencilRuler, Settings } from 'lucide-react'
import { GuidedTeacherEvaluation } from '@/components/evaluation/GuidedTeacherEvaluation'
import { resolveCurriculumApplicability, type SchoolOrder } from '@/lib/temporal-applicability'
import { useAppStore } from '@/stores/useAppStore'
import type { ViewId } from '@/types/state'

const FRAMEWORK_LABELS = {
  IN_2012: 'Indicazioni nazionali 2012',
  IN_2025: 'Indicazioni nazionali 2025',
} as const

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
  const baseClass = 'rounded-2xl border p-5 text-left transition-colors min-h-40 flex flex-col justify-between gap-4'
  const activeClass = primary
    ? 'bg-white border-indigo-300 text-slate-900 hover:border-indigo-500'
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
        <Icon size={25} className={unavailable ? 'text-slate-400' : 'text-indigo-600'} />
        {!unavailable && <span aria-hidden="true" className="text-xl leading-none text-slate-500">›</span>}
      </div>
      <div>
        <h3 className="text-base font-[650]">{title}</h3>
        <p className="mt-1.5 text-sm leading-6 text-slate-500">{description}</p>
        {unavailable && <p className="mt-2.5 text-xs font-[600] text-slate-500">Sarà disponibile quando il percorso sarà completo.</p>}
      </div>
    </button>
  )
}

function ApplicabilityCard() {
  const profilo = useAppStore(s => s.profilo)
  const setVista = useAppStore(s => s.setVista)

  const hasUsableOrder = profilo?.ordine === 'Infanzia' || profilo?.ordine === 'Primaria' || profilo?.ordine === 'Secondaria'
  const classYear = profilo?.ordine === 'Infanzia' ? null : Number(profilo?.classe)
  const resolution = profilo && hasUsableOrder
    ? resolveCurriculumApplicability({
        academicYear: profilo.annoScolastico,
        order: profilo.ordine as SchoolOrder,
        classYear: Number.isInteger(classYear) ? classYear : null,
        discipline: profilo.disciplina || null,
      })
    : null

  const frameworkLabel = resolution?.framework ? FRAMEWORK_LABELS[resolution.framework] : null
  const isResolved = resolution?.status === 'applicabile' && frameworkLabel !== null

  return (
    <section aria-labelledby="applicability-title" className="rounded-2xl border border-slate-200 bg-white p-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-3">
          <Info size={22} className="mt-0.5 shrink-0 text-indigo-600" />
          <div>
            <h2 id="applicability-title" className="text-sm font-[650] text-slate-900">Curricolo applicabile</h2>
            {isResolved ? (
              <>
                <p className="mt-1.5 text-lg font-[700] text-indigo-800">{frameworkLabel}</p>
                <p className="mt-1.5 max-w-3xl text-sm leading-6 text-slate-600">{resolution.message}</p>
                <p className="mt-2.5 text-xs leading-5 text-slate-500">
                  Questo dato indica il quadro nazionale applicabile. Non certifica che il curricolo d’istituto sia già aggiornato, deliberato o approvato.
                </p>
              </>
            ) : (
              <>
                <p className="mt-1.5 text-sm font-[650] text-amber-800">Applicabilità da verificare</p>
                <p className="mt-1.5 max-w-3xl text-sm leading-6 text-slate-600">
                  Imposta anno scolastico, ordine e classe per determinare quale quadro nazionale si applica al contesto selezionato.
                </p>
              </>
            )}
          </div>
        </div>
        <button type="button" onClick={() => setVista('impostazioni')} className="shrink-0 rounded-xl border border-indigo-200 bg-white px-4 py-2 text-sm font-[600] text-indigo-700 hover:bg-indigo-50">
          {isResolved ? 'Modifica contesto' : 'Imposta il contesto'}
        </button>
      </div>
    </section>
  )
}

export function HomeView() {
  const setVista = useAppStore(s => s.setVista)
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-6 py-2">
      <section>
        <h1 className="text-3xl font-[700] text-indigo-800">Cosa vuoi fare oggi?</h1>
        <p className="mt-2 max-w-3xl text-base leading-7 text-slate-600">
          Consulta il curricolo, prepara una proposta, avvia una progettazione o produci un documento in un percorso guidato e sempre soggetto a validazione umana.
        </p>
      </section>

      <ApplicabilityCard />

      <section aria-label="Attività principali" className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
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

      <GuidedTeacherEvaluation />

      <section className="flex flex-col justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 sm:flex-row sm:items-center">
        <div className="flex items-start gap-3">
          <Settings size={22} className="mt-0.5 shrink-0 text-indigo-600" />
          <div>
            <h2 className="text-sm font-[650] text-slate-900">Imposta il tuo contesto di lavoro</h2>
            <p className="mt-1 text-sm leading-6 text-slate-600">Ruolo, istituto, anno scolastico, ordine, classe e disciplina si gestiscono nelle Impostazioni.</p>
          </div>
        </div>
        <button type="button" onClick={() => setVista('impostazioni')} className="shrink-0 rounded-xl border border-indigo-200 bg-white px-4 py-2 text-sm font-[600] text-indigo-700 hover:bg-indigo-50">
          Vai a Impostazioni
        </button>
      </section>
    </div>
  )
}
