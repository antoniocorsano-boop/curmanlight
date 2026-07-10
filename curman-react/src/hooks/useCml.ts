import { useCallback } from 'react'
import type { GapLayer, DecisioniMap, ProfiloUtente } from '@/types/gap'
import type { CmlFile } from '@/types/cml'
import { buildTeacherProposal, parseCmlFile, downloadCml } from '@/lib/cml'

export function useExportProposal(disciplina: string | null, gapLayer: GapLayer | null, decisioni: DecisioniMap, profilo: ProfiloUtente | null) {
  const exportProposal = useCallback(() => {
    if (!disciplina || !gapLayer || !profilo) return
    const proposal = buildTeacherProposal(disciplina, gapLayer, decisioni, profilo)
    downloadCml(proposal, `proposta_${disciplina.toLowerCase().replace(/\s+/g, '_')}_${profilo.annoScolastico}`)
  }, [disciplina, gapLayer, decisioni, profilo])
  return { exportProposal, canExport: !!disciplina && !!gapLayer && !!profilo }
}

export function useImportCml() {
  const importFile = useCallback(async (): Promise<CmlFile | null> => {
    return new Promise((resolve) => {
      const input = document.createElement('input')
      input.type = 'file'
      input.accept = '.cml,.json'
      input.onchange = async () => {
        const file = input.files?.[0]
        if (!file) { resolve(null); return }
        try { resolve(parseCmlFile(JSON.parse(await file.text()))) }
        catch { resolve(null) }
      }
      input.click()
    })
  }, [])
  return { importFile }
}
