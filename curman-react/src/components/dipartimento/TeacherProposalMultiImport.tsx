import { useMemo, useRef, useState } from 'react'
import { AlertTriangle, CheckCircle2, Copy, FileUp, RotateCcw } from 'lucide-react'
import { readTeacherProposalFiles, type TeacherProposalImportRecord } from '@/lib/teacherProposalImport'

function statusBadge(record: TeacherProposalImportRecord) {
  if (record.status === 'valid') {
    return <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-[650] text-emerald-700"><CheckCircle2 size={14} /> Valido</span>
  }
  if (record.status === 'duplicate') {
    return <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-[650] text-amber-700"><Copy size={14} /> Duplicato</span>
  }
  return <span className="inline-flex items-center gap-1 rounded-full bg-red-50 px-2.5 py-1 text-xs font-[650] text-red-700"><AlertTriangle size={14} /> Non valido</span>
}

export function TeacherProposalMultiImport() {
  const inputRef = useRef<HTMLInputElement>(null)
  const [records, setRecords] = useState<TeacherProposalImportRecord[]>([])
  const [reading, setReading] = useState(false)

  const summary = useMemo(() => ({
    files: records.length,
    valid: records.filter(record => record.status === 'valid').length,
    duplicates: records.filter(record => record.status === 'duplicate').length,
    invalid: records.filter(record => record.status === 'invalid').length,
    proposals: records.filter(record => record.status === 'valid').reduce((total, record) => total + record.proposalCount, 0),
  }), [records])

  async function handleFiles(files: FileList | null) {
    if (!files?.length) return
    setReading(true)
    try {
      setRecords(await readTeacherProposalFiles(files))
    } finally {
      setReading(false)
      if (inputRef.current) inputRef.current.value = ''
    }
  }

  return (
    <section className="card p-5" aria-labelledby="department-import-title">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-[650] uppercase tracking-wide text-indigo-600">Area dipartimentale</p>
          <h3 id="department-import-title" className="mt-1 text-base font-[650] text-slate-800">Importa più proposte docente</h3>
          <p className="mt-1 text-sm leading-6 text-slate-500">Seleziona uno o più file `.cml`. I file vengono letti e verificati solo nel browser.</p>
        </div>
        {records.length > 0 && (
          <button type="button" onClick={() => setRecords([])} className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm font-[600] text-slate-600 hover:bg-slate-50">
            <RotateCcw size={15} /> Azzera
          </button>
        )}
      </div>

      <input ref={inputRef} type="file" accept=".cml" multiple className="sr-only" onChange={event => handleFiles(event.target.files)} />
      <button type="button" disabled={reading} onClick={() => inputRef.current?.click()} className="mt-4 inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-[650] text-white hover:bg-indigo-700 disabled:cursor-wait disabled:opacity-60">
        <FileUp size={16} /> {reading ? 'Verifica in corso…' : 'Seleziona file .cml'}
      </button>

      {records.length > 0 && (
        <>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5" aria-label="Riepilogo importazione">
            {[
              ['File', summary.files],
              ['Validi', summary.valid],
              ['Duplicati', summary.duplicates],
              ['Non validi', summary.invalid],
              ['Proposte pronte', summary.proposals],
            ].map(([label, value]) => (
              <div key={label} className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-3">
                <p className="text-xs text-slate-500">{label}</p>
                <p className="mt-1 text-lg font-[700] text-slate-800">{value}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 grid gap-3">
            {records.map(record => (
              <article key={record.id} className="rounded-xl border border-slate-200 bg-white p-4">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-[650] text-slate-800">{record.fileName}</p>
                    <p className="mt-1 text-xs leading-5 text-slate-500">{record.message}</p>
                  </div>
                  {statusBadge(record)}
                </div>
                {record.model && (
                  <dl className="mt-3 grid gap-2 text-xs text-slate-600 sm:grid-cols-2 lg:grid-cols-4">
                    <div><dt className="text-slate-400">Disciplina</dt><dd className="mt-0.5 font-[600]">{record.discipline}</dd></div>
                    <div><dt className="text-slate-400">Ordine</dt><dd className="mt-0.5 font-[600]">{record.ordine}</dd></div>
                    <div><dt className="text-slate-400">Profilo</dt><dd className="mt-0.5 font-[600]">{record.author}</dd></div>
                    <div><dt className="text-slate-400">Proposte</dt><dd className="mt-0.5 font-[600]">{record.proposalCount}</dd></div>
                  </dl>
                )}
              </article>
            ))}
          </div>

          <p className="mt-4 text-xs leading-5 text-slate-500">Solo i file validi e non duplicati saranno disponibili alla futura coda decisionale dipartimentale. Nessun dato viene caricato o inviato all’esterno.</p>
        </>
      )}
    </section>
  )
}
