import { Layout } from '@/components/layout/Layout'
import { useAppStore } from '@/stores/useAppStore'
import { HomeView } from '@/views/HomeView'
import { ConsultazioneView } from '@/views/ConsultazioneView'
import { RevisioneView } from '@/views/RevisioneView'
import { ProcessoView } from '@/views/ProcessoView'
import { EsportazioniView } from '@/views/EsportazioniView'
import type { ViewId } from '@/types/state'

function PlaceholderView({ titolo }: { titolo: string }) {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center gap-3 p-8">
      <h2 className="text-base font-[600] text-slate-700">{titolo}</h2>
      <p className="text-sm text-slate-400 max-w-sm">Questa sezione sarà disponibile nelle prossime iterazioni.</p>
    </div>
  )
}

export default function App() {
  const vistaAttiva = useAppStore(s => s.vistaAttiva)
  const views: Record<ViewId, React.ReactNode> = {
    home: <HomeView />,
    consultazione: <ConsultazioneView />,
    revisione: <RevisioneView />,
    processo: <ProcessoView />,
    esportazioni: <EsportazioniView />,
    'evidenze-valutazione': <PlaceholderView titolo="Evidenze e Valutazione" />,
    'programmazione-annuale': <PlaceholderView titolo="Programmazione Annuale" />,
    'uda-modello': <PlaceholderView titolo="UDA Modello" />,
    guida: <PlaceholderView titolo="Guida" />,
  }
  return <Layout>{views[vistaAttiva] ?? <HomeView />}</Layout>
}
