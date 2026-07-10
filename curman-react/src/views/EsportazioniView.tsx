import { Download } from 'lucide-react'
import { useAppStore } from '@/stores/useAppStore'
import { useRevisioneStore } from '@/stores/useRevisioneStore'
import { useGapLayer } from '@/hooks/useGapLayer'
import { useExportProposal } from '@/hooks/useCml'
import type { DisciplinaSlug } from '@/types/curriculum'
import { DISCIPLINE_LABELS } from '@/types/curriculum'

export function EsportazioniView() {
  const { disciplinaSelezionata, profilo } = useAppStore()
  const slug = disciplinaSelezionata as DisciplinaSlug | null
  const gapLayer = useGapLayer(slug)
  const decisioni = useRevisioneStore(s => s.decisioni)
  const { exportProposal, canExport } = useExportProposal(slug ? DISCIPLINE_LABELS[slug] : null, gapLayer, decisioni, profilo)

  return (
    <div className="max-w-2xl mx-auto flex flex-col gap-6">
      <div>
        <h2 className="text-lg font-[600] text-slate-800">Esportazioni</h2>
        <p className="text-sm text-slate-500">Genera i file di proposta per la condivisione con il dipartimento.</p>
      </div>
      {gapLayer === null && slug ? (
        <div className="card p-5 bg-amber-50 border-amber-200">
          <p className="text-sm font-[500] text-amber-800">Funzione non disponibile</p>
          <p className="text-xs text-amber-700 mt-1">Il livello di allineamento non è ancora stato generato per questa disciplina. Le esportazioni saranno disponibili dopo la generazione del gap layer.</p>
        </div>
      ) : (
        <div className="card p-5 flex flex-col gap-3">
          <p className="text-sm font-[500] text-slate-700">Proposta docente (.cml)</p>
          <p className="text-xs text-slate-400">Esporta le tue decisioni in formato .cml per la validazione dipartimentale.</p>
          <button onClick={exportProposal} disabled={!canExport}
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-[500] rounded-lg transition-colors w-fit disabled:opacity-40 disabled:cursor-not-allowed bg-indigo-50 text-indigo-700 hover:bg-indigo-100">
            <Download size={15} /> Esporta proposta
          </button>
          {!canExport && <p className="text-xs text-slate-400">Seleziona una disciplina e configura il profilo.</p>}
        </div>
      )}
    </div>
  )
}
