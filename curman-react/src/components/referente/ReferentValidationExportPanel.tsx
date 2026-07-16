import { useEffect, useMemo, useState } from 'react'
import { Download, FileUp } from 'lucide-react'
import { readDepartmentOutcomeFiles, type DepartmentOutcomeImportRecord } from '@/lib/departmentOutcomeImport'
import { downloadReferentValidation, getReferentValidationExportReadiness } from '@/lib/referentValidationExport'
import { isRoleAccessGranted } from '@/lib/roleAccess'
import { useReferentValidationStore } from '@/stores/useReferentValidationStore'

export function ReferentValidationExportPanel() {
  const [records, setRecords] = useState<DepartmentOutcomeImportRecord[]>([])
  const [reading, setReading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { validations, hydrate } = useReferentValidationStore()

  useEffect(() => hydrate(), [hydrate])

  const readiness = useMemo(
    () => getReferentValidationExportReadiness(records, validations),
    [records, validations],
  )

  async function handleFiles(files: FileList | null) {
    if (!isRoleAccessGranted()) {
      setError('Sblocca prima l’area Referente nel pannello precedente.')
      return
    }
    if (!files?.length) return
    setReading(true)
    setRecords(await readDepartmentOutcomeFiles(files))
    setReading(false)
    setError(null)
  }

  function exportValidation() {
    try {
      if (!isRoleAccessGranted()) throw new Error('L’accesso operativo non è più attivo.')
      downloadReferentValidation(records, validations)
      setError(null)
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : 'La validazione non può essere esportata.')
    }
  }

  return (
    <section className="card p-5" aria-labelledby="referent-validation-export-title">
      <p className="text-xs font-[650] uppercase tracking-wide text-emerald-700">Chiusura del passaggio</p>
      <h3 id="referent-validation-export-title" className="mt-1 text-base font-[650] text-slate-800">Esporta validazione Referente</h3>
      <p className="mt-1 text-sm leading-6 text-slate-500">Ricarica gli stessi esiti dipartimentali. Le validazioni locali vengono riconosciute tramite fingerprint e identificativo della proposta. Il file finale può essere esportato solo quando tutti gli esiti selezionati sono stati validati.</p>

      <label className="mt-4 flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-dashed border-emerald-300 bg-emerald-50/50 px-4 py-5 text-sm font-[650] text-emerald-800 hover:bg-emerald-50">
        <FileUp size={17} /> {reading ? 'Verifica in corso…' : 'Seleziona esiti da includere'}
        <input type="file" accept=".cml,application/json" multiple className="sr-only" disabled={reading} onChange={event => void handleFiles(event.target.files)} />
      </label>

      {records.length > 0 && (
        <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50/60 p-4">
          <p className="text-sm font-[650] text-slate-800">{readiness.validated} di {readiness.imported} esiti validati</p>
          <p role="status" className="mt-1 text-xs leading-5 text-slate-600">
            {readiness.validated === 0
              ? 'Non sono state trovate validazioni locali associate agli esiti selezionati.'
              : readiness.pending > 0
                ? `Completa le ${readiness.pending} validazioni mancanti prima di esportare il passaggio finale.`
                : 'Tutti gli esiti selezionati risultano validati. Il file finale può essere esportato.'}
          </p>
          <button type="button" onClick={exportValidation} disabled={!readiness.ready}
            className="mt-3 inline-flex items-center gap-2 rounded-lg bg-emerald-700 px-4 py-2 text-sm font-[650] text-white hover:bg-emerald-800 disabled:cursor-not-allowed disabled:bg-slate-300">
            <Download size={16} /> Scarica referent_validation.cml
          </button>
        </div>
      )}
      {error && <p className="mt-3 text-xs font-[600] text-red-700">{error}</p>}
    </section>
  )
}
