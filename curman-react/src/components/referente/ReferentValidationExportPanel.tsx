import { useMemo, useState } from 'react'
import { Download } from 'lucide-react'
import type { DepartmentOutcomeImportRecord } from '@/lib/departmentOutcomeImport'
import { downloadReferentValidation, getReferentValidationExportReadiness } from '@/lib/referentValidationExport'
import type { ReferentValidationMap } from '@/types/referentValidation'

export function ReferentValidationExportPanel({
  records,
  validations,
  accessGranted,
}: {
  records: DepartmentOutcomeImportRecord[]
  validations: ReferentValidationMap
  accessGranted: boolean
}) {
  const [error, setError] = useState<string | null>(null)
  const readiness = useMemo(
    () => getReferentValidationExportReadiness(records, validations),
    [records, validations],
  )

  function exportValidation() {
    try {
      downloadReferentValidation(records, validations)
      setError(null)
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : 'La validazione non può essere esportata.')
    }
  }

  return (
    <div className="mt-3 rounded-xl border border-emerald-200 bg-emerald-50/60 p-4">
      <p className="text-xs font-[650] uppercase tracking-wide text-emerald-700">File del Referente</p>
      <p className="mt-1 text-sm font-[650] text-slate-800">{readiness.validated} validazioni esportabili</p>
      <p className="mt-1 text-xs leading-5 text-slate-600">
        {readiness.pending > 0
          ? `${readiness.pending} esiti ancora senza validazione saranno esclusi.`
          : 'Tutti gli esiti importati risultano validati.'}
      </p>
      <button
        type="button"
        onClick={exportValidation}
        disabled={!accessGranted || !readiness.ready}
        className="mt-3 inline-flex items-center gap-2 rounded-lg bg-emerald-700 px-4 py-2 text-sm font-[650] text-white hover:bg-emerald-800 disabled:cursor-not-allowed disabled:bg-slate-300"
      >
        <Download size={16} /> Esporta validazione Referente
      </button>
      {!readiness.ready && <p className="mt-2 text-xs text-slate-500">Registra almeno una validazione per preparare il file `.cml`.</p>}
      {error && <p className="mt-2 text-xs font-[600] text-red-700">{error}</p>}
    </div>
  )
}
