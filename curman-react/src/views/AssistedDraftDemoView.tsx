import { useCallback, useMemo, useState } from 'react'
import { AssistedDraftWorkspaceShell } from '@/features/assisted-drafts/assisted-draft-workspace-shell'
import { DraftProposalEditor } from '@/features/assisted-drafts/draft-proposal-editor'
import { createAssistedDraftApplicationService, type AssistedDraftInspection } from '@/features/assisted-drafts/application-service.mjs'
import { createDexieDraftStorage } from '@/features/assisted-drafts/dexie-draft-storage'
import { createAssistedDraftRepository } from '@/features/assisted-drafts/local-draft-repository.mjs'
import { assistedDraftDemoRegistry, createAssistedDraftDemo } from '@/features/assisted-drafts/demo-data'
import type { AssistedCurriculumDraft } from '@/features/assisted-drafts/contracts'

export function AssistedDraftDemoView() {
  const [draft, setDraft] = useState<AssistedCurriculumDraft>(() => createAssistedDraftDemo())

  const service = useMemo(() => {
    const storage = createDexieDraftStorage('curmanlight-assisted-drafts-demo')
    const repository = createAssistedDraftRepository({
      storage,
      registry: assistedDraftDemoRegistry,
    })
    return createAssistedDraftApplicationService({ repository })
  }, [])

  const handleInspectionChange = useCallback((inspection: AssistedDraftInspection | null) => {
    if (inspection?.stable?.draft) {
      setDraft(inspection.stable.draft)
    }
  }, [])

  return (
    <div className="mx-auto max-w-6xl space-y-4 p-4 sm:p-6">
      <section aria-labelledby="assisted-demo-intro" className="rounded-xl border border-indigo-200 bg-indigo-50 p-4 text-sm text-indigo-950">
        <h1 id="assisted-demo-intro" className="font-semibold">Dimostrazione locale controllata</h1>
        <p className="mt-1">
          Usa esclusivamente dati dimostrativi. Le modifiche restano nel browser e non aggiornano il curricolo ufficiale.
        </p>
        <ol className="mt-3 grid gap-2 sm:grid-cols-3" aria-label="Passaggi suggeriti">
          <li className="rounded-lg bg-white/80 p-3"><strong>1. Rivedi</strong><span className="mt-1 block">Modifica il testo proposto e controlla le evidenze.</span></li>
          <li className="rounded-lg bg-white/80 p-3"><strong>2. Salva</strong><span className="mt-1 block">Salva la bozza locale oppure crea una copia di recupero.</span></li>
          <li className="rounded-lg bg-white/80 p-3"><strong>3. Decidi</strong><span className="mt-1 block">Una copia di recupero richiede sempre ripristino o scarto esplicito.</span></li>
        </ol>
        <p className="mt-3 text-xs text-indigo-800">
          Puoi chiudere o ricaricare la pagina: la versione salvata rimane disponibile solo in questo browser.
        </p>
      </section>

      <AssistedDraftWorkspaceShell
        service={service}
        packageId={draft.packageId}
        draft={draft}
        title="Laboratorio di revisione assistita"
        onInspectionChange={handleInspectionChange}
      >
        <DraftProposalEditor
          draft={draft}
          registry={assistedDraftDemoRegistry}
          onChange={setDraft}
        />
      </AssistedDraftWorkspaceShell>
    </div>
  )
}
