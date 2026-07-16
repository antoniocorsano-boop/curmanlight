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
      <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-4 text-sm text-indigo-950">
        <strong>Dimostrazione locale controllata.</strong>
        <p className="mt-1">
          Usa esclusivamente dati dimostrativi. Le modifiche restano nel browser e non aggiornano il curricolo ufficiale.
        </p>
      </div>

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
