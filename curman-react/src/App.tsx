import { useEffect } from 'react'
import { Layout } from '@/components/layout/Layout'
import { useAppStore } from '@/stores/useAppStore'
import { useRevisioneStore } from '@/stores/useRevisioneStore'
import { useProposalStore } from '@/stores/useProposalStore'
import { HomeView } from '@/views/HomeView'
import { ConsultazioneView } from '@/views/ConsultazioneView'
import { RevisioneView } from '@/views/RevisioneView'
import { ProcessoView } from '@/views/ProcessoView'
import { EsportazioniView } from '@/views/EsportazioniView'
import { ImpostazioniView } from '@/views/ImpostazioniView'
import { ProgrammazioneAnnualeView } from '@/views/ProgrammazioneAnnualeView'
import type { ViewId } from '@/types/state'

function NotAvailableView() {
  const setVista = useAppStore(s => s.setVista)
  return (
    <div className="flex flex-col items-center justify-center h-full text-center gap-4 p-8">
      <h1 className="text-lg font-[650] text-slate-700">Percorso non ancora disponibile</h1>
      <p className="text-sm leading-6 text-slate-500 max-w-md">Questa attività sarà resa accessibile quando potrà essere completata dall’inizio alla fine.</p>
      <button type="button" onClick={() => setVista('home')} className="rounded-xl border border-indigo-200 bg-white px-4 py-2 text-sm font-[600] text-indigo-700 hover:bg-indigo-50">
        Torna alla Home
      </button>
    </div>
  )
}

export default function App() {
  const vistaAttiva = useAppStore(s => s.vistaAttiva)
  const hydrateWorkDecisions = useRevisioneStore(s => s.hydrateWorkDecisions)
  const hydrateProposalDrafts = useProposalStore(s => s.hydrate)

  useEffect(() => {
    hydrateWorkDecisions()
    hydrateProposalDrafts()
  }, [hydrateProposalDrafts, hydrateWorkDecisions])

  const views: Record<ViewId, React.ReactNode> = {
    home: <HomeView />,
    consultazione: <ConsultazioneView />,
    revisione: <RevisioneView />,
    processo: <ProcessoView />,
    esportazioni: <EsportazioniView />,
    impostazioni: <ImpostazioniView />,
    'evidenze-valutazione': <NotAvailableView />,
    'programmazione-annuale': <ProgrammazioneAnnualeView />,
    'uda-modello': <NotAvailableView />,
    guida: <NotAvailableView />,
  }
  return <Layout>{views[vistaAttiva] ?? <HomeView />}</Layout>
}
