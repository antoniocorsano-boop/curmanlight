import { useEffect, useState } from 'react'
import { Copy } from 'lucide-react'

type Props = {
  currentClass: string
  documentLabel: string
  disabled?: boolean
  onDuplicate: (targetClass: string) => { ok: boolean; message: string }
}

export function DuplicateDocumentPanel({ currentClass, documentLabel, disabled = false, onDuplicate }: Props) {
  const [targetClass, setTargetClass] = useState('')
  const [feedback, setFeedback] = useState<{ kind: 'success' | 'error'; message: string } | null>(null)

  useEffect(() => {
    setTargetClass('')
    setFeedback(null)
  }, [currentClass, documentLabel])

  function duplicate() {
    const result = onDuplicate(targetClass.trim())
    setFeedback({ kind: result.ok ? 'success' : 'error', message: result.message })
    if (result.ok) setTargetClass('')
  }

  const unavailable = disabled || !currentClass.trim()

  return (
    <section className="mb-6 rounded-2xl border border-slate-200 bg-white p-5" aria-labelledby={`${documentLabel}-duplicate-title`}>
      <div className="flex items-start gap-3">
        <Copy size={19} className="mt-0.5 shrink-0 text-indigo-600" />
        <div className="min-w-0 flex-1">
          <h2 id={`${documentLabel}-duplicate-title`} className="text-base font-[700] text-slate-800">Duplica {documentLabel}</h2>
          <p className="mt-1 text-sm leading-6 text-slate-500">Crea una copia autonoma per un’altra classe. L’originale resta invariato e la copia può essere modificata e salvata separatamente.</p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-end">
            <label className="flex-1 text-sm font-[600] text-slate-700">Classe di destinazione
              <input value={targetClass} onChange={event => { setTargetClass(event.target.value); setFeedback(null) }} disabled={unavailable} placeholder="Es. 2B" className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2.5 font-normal outline-none focus:border-indigo-400 disabled:bg-slate-50" />
            </label>
            <button type="button" onClick={duplicate} disabled={unavailable || !targetClass.trim()} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-indigo-200 bg-indigo-50 px-4 py-2.5 text-sm font-[650] text-indigo-700 hover:bg-indigo-100 disabled:cursor-not-allowed disabled:opacity-40">
              <Copy size={16} /> Crea copia
            </button>
          </div>
          {unavailable && <p className="mt-3 text-xs leading-5 text-amber-700">Salva o completa prima il documento corrente e indica la classe.</p>}
          {feedback && <p role={feedback.kind === 'error' ? 'alert' : 'status'} className={`mt-3 text-sm font-[600] ${feedback.kind === 'error' ? 'text-red-700' : 'text-emerald-700'}`}>{feedback.message}</p>}
        </div>
      </div>
    </section>
  )
}
