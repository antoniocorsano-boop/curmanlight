import { useMemo, useState } from 'react'
import { FileCheck2, Upload } from 'lucide-react'
import { readDepartmentOutcomeFiles, type DepartmentOutcomeImportRecord } from '@/lib/departmentOutcomeImport'

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

  const validRecords = records.filter(record => record.status === 'valid' && record.model)
  const summary = useMemo(() => ({
    files: validRecords.length,
    disciplines: new Set(validRecords.map(record => record.model!.discipline)).size,
    outcomes: validRecords.reduce((total, record) => total + record.model!.proposalHandling.length, 0),
  }), [validRecords])

  async function handleFiles(files: FileList | null) {
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

      <label className="mt-4 flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-dashed border-indigo-300 bg-indigo-50/50 px-4 py-5 text-sm font-[650] text-indigo-700 hover:bg-indigo-50">
        <Upload size={17} /> {reading ? 'Lettura in corso…' : 'Seleziona esiti dipartimentali'}
        <input type="file" accept=".cml,application/json" multiple className="sr-only" disabled={reading} onChange={event => void handleFiles(event.target.files)} />
      </label>

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
