import { useMemo, useState } from 'react'
import { FileCheck2, LockKeyhole, Upload } from 'lucide-react'
import { readDepartmentOutcomeFiles, type DepartmentOutcomeImportRecord } from '@/lib/departmentOutcomeImport'
import { grantRoleAccess, isRoleAccessGranted, revokeRoleAccess } from '@/lib/roleAccess'

const HANDLING_LABELS: Record<string, string> = {
  confluita_nella_sintesi: 'Confluita nella sintesi',
  riformulata_dal_dipartimento: 'Riformulata dal Dipartimento',
  assorbita_in_altra_proposta: 'Assorbita in altra proposta',
  da_chiarire: 'Da chiarire',
  accettata: 'Accettata',
  respinta: 'Respinta',
  modificata: 'Modificata',
  rinviata: 'Rinviata',
}

export function DepartmentOutcomeImport() {
  const [records, setRecords] = useState<DepartmentOutcomeImportRecord[]>([])
  const [reading, setReading] = useState(false)
  const [accessGranted, setAccessGranted] = useState(() => isRoleAccessGranted())
  const [code, setCode] = useState('')
  const [accessError, setAccessError] = useState<string | null>(null)

  const validRecords = records.filter(record => record.status === 'valid' && record.model)
  const summary = useMemo(() => ({
    files: validRecords.length,
    disciplines: new Set(validRecords.map(record => record.model!.discipline)).size,
    outcomes: validRecords.reduce((total, record) => total + record.model!.proposalHandling.length, 0),
  }), [validRecords])

  function unlockAccess() {
    if (!grantRoleAccess(code)) {
      setAccessError('Codice operativo non valido.')
      return
    }
    setAccessGranted(true)
    setAccessError(null)
    setCode('')
  }

  function lockAccess() {
    revokeRoleAccess()
    setAccessGranted(false)
    setRecords([])
  }

  async function handleFiles(files: FileList | null) {
    if (!accessGranted) {
      setAccessError('Inserisci il codice operativo prima di selezionare i file.')
      return
    }
    if (!files?.length) return
    setReading(true)
    setRecords(await readDepartmentOutcomeFiles(files))
    setReading(false)
  }

  return (
    <section className="card p-5" aria-labelledby="referent-outcome-import-title">
      <div>
        <p className="text-xs font-[650] uppercase tracking-wide text-indigo-600">Area Referente</p>
        <h3 id="referent-outcome-import-title" className="mt-1 text-base font-[650] text-slate-800">Esiti dipartimentali</h3>
        <p className="mt-1 text-sm leading-6 text-slate-500">Importa uno o più file `.cml` prodotti dai Dipartimenti e consultali in modalità sola lettura prima della validazione finale.</p>
      </div>

      {!accessGranted ? (
        <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4">
          <div className="flex items-start gap-3">
            <LockKeyhole size={18} className="mt-0.5 shrink-0 text-amber-700" />
            <div className="min-w-0 flex-1">
              <p className="text-sm font-[650] text-amber-900">Accesso operativo richiesto</p>
              <p className="mt-1 text-xs leading-5 text-amber-800">Inserisci il codice condiviso per abilitare l’import degli esiti del Dipartimento in questa sessione.</p>
              <div className="mt-3 flex flex-col gap-2 sm:flex-row">
                <input type="password" value={code} onChange={event => setCode(event.target.value)} onKeyDown={event => { if (event.key === 'Enter') unlockAccess() }}
                  aria-label="Codice operativo" className="min-w-0 flex-1 rounded-lg border border-amber-300 bg-white px-3 py-2 text-sm outline-none focus:border-amber-500" />
                <button type="button" onClick={unlockAccess} className="rounded-lg bg-amber-700 px-4 py-2 text-sm font-[650] text-white hover:bg-amber-800">Sblocca import</button>
              </div>
              {accessError && <p className="mt-2 text-xs font-[600] text-red-700">{accessError}</p>}
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="mt-4 flex justify-end">
            <button type="button" onClick={lockAccess} className="text-xs font-[600] text-slate-500 hover:text-slate-700">Blocca di nuovo</button>
          </div>
          <label className="mt-2 flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-dashed border-indigo-300 bg-indigo-50/50 px-4 py-5 text-sm font-[650] text-indigo-700 hover:bg-indigo-50">
            <Upload size={17} /> {reading ? 'Lettura in corso…' : 'Seleziona esiti dipartimentali'}
            <input type="file" accept=".cml,application/json" multiple className="sr-only" disabled={reading} onChange={event => void handleFiles(event.target.files)} />
          </label>
        </>
      )}

      {records.length > 0 && (
        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          {[
            ['File validi', summary.files],
            ['Discipline', summary.disciplines],
            ['Esiti', summary.outcomes],
          ].map(([label, value]) => (
            <div key={label} className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-3">
              <p className="text-xs text-slate-500">{label}</p>
              <p className="mt-1 text-lg font-[700] text-slate-800">{value}</p>
            </div>
          ))}
        </div>
      )}

      <div className="mt-5 grid gap-3">
        {records.map(record => (
          <article key={record.id} className="rounded-xl border border-slate-200 bg-white p-4">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-[650] text-slate-800">{record.fileName}</p>
                <p className={`mt-1 text-xs ${record.status === 'valid' ? 'text-emerald-700' : record.status === 'duplicate' ? 'text-amber-700' : 'text-red-700'}`}>{record.message}</p>
              </div>
              {record.status === 'valid' && <FileCheck2 size={18} className="text-emerald-600" />}
            </div>

            {record.status === 'valid' && record.model && (
              <div className="mt-4">
                <p className="text-xs text-slate-500">{record.model.discipline} · {record.model.ordine} · {record.model.annoScolastico}</p>
                <div className="mt-3 grid gap-2">
                  {record.model.proposalHandling.map(item => (
                    <div key={`${record.id}-${item.proposalId}`} className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-3 text-xs">
                      <p className="font-[650] text-slate-700">{item.proposalId}</p>
                      <p className="mt-1 text-slate-600">{HANDLING_LABELS[item.handling] ?? item.handling}</p>
                      {item.note && <p className="mt-1 leading-5 text-slate-500">{item.note}</p>}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}
