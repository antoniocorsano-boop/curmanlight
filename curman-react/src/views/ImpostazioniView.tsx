import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { useAppStore } from '@/stores/useAppStore'
import type { ProfiloUtente, Ruolo } from '@/types/gap'
import type { OrdineEsteso } from '@/types/curriculum'
import { DISCIPLINE_LABELS, DISCIPLINE_SLUGS } from '@/types/curriculum'

const RUOLI: Array<{ value: Ruolo; label: string }> = [
  { value: 'docente', label: 'Docente' },
  { value: 'dipartimento', label: 'Dipartimento' },
  { value: 'referente', label: 'Referente del curricolo' },
  { value: 'dirigenza', label: 'Dirigenza' },
  { value: 'consultatore', label: 'Solo consultazione' },
]

const ORDINI: OrdineEsteso[] = ['Tutti', 'Infanzia', 'Primaria', 'Secondaria']

const DEFAULT_PROFILE: ProfiloUtente = {
  ruolo: 'docente',
  ordine: 'Tutti',
  disciplina: '',
  annoScolastico: '2026/2027',
  istituto: '',
  nome: '',
  cognome: '',
}

export function ImpostazioniView() {
  const { profilo, setProfilo, disciplinaSelezionata, setDisciplina } = useAppStore()
  const [form, setForm] = useState<ProfiloUtente>(() => ({
    ...(profilo ?? DEFAULT_PROFILE),
    disciplina: disciplinaSelezionata ?? profilo?.disciplina ?? '',
  }))
  const [saved, setSaved] = useState(false)

  function update<K extends keyof ProfiloUtente>(key: K, value: ProfiloUtente[K]) {
    setSaved(false)
    setForm(current => ({ ...current, [key]: value }))
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setProfilo(form)
    setDisciplina(form.disciplina || null)
    setSaved(true)
  }

  const fieldClass = 'mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-800 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-100'

  return (
    <div className="max-w-3xl mx-auto py-4">
      <div>
        <h1 className="text-2xl font-[700] text-slate-800">Impostazioni</h1>
        <p className="mt-2 text-sm leading-6 text-slate-600">Definisci il contesto che CurManLight userà per orientare consultazione, proposte e documenti.</p>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
        <label className="text-sm font-[550] text-slate-700">
          Ruolo
          <select value={form.ruolo} onChange={event => update('ruolo', event.target.value as Ruolo)} className={fieldClass}>
            {RUOLI.map(role => <option key={role.value} value={role.value}>{role.label}</option>)}
          </select>
        </label>

        <label className="text-sm font-[550] text-slate-700">
          Anno scolastico
          <input value={form.annoScolastico} onChange={event => update('annoScolastico', event.target.value)} className={fieldClass} placeholder="2026/2027" required />
        </label>

        <label className="text-sm font-[550] text-slate-700 sm:col-span-2">
          Istituto
          <input value={form.istituto ?? ''} onChange={event => update('istituto', event.target.value)} className={fieldClass} placeholder="Nome dell’istituto" />
        </label>

        <label className="text-sm font-[550] text-slate-700">
          Ordine di scuola
          <select value={form.ordine} onChange={event => update('ordine', event.target.value as OrdineEsteso)} className={fieldClass}>
            {ORDINI.map(order => <option key={order} value={order}>{order}</option>)}
          </select>
        </label>

        <label className="text-sm font-[550] text-slate-700">
          Disciplina
          <select value={form.disciplina} onChange={event => update('disciplina', event.target.value)} className={fieldClass}>
            <option value="">Nessuna disciplina selezionata</option>
            {DISCIPLINE_SLUGS.map(slug => <option key={slug} value={slug}>{DISCIPLINE_LABELS[slug]}</option>)}
          </select>
        </label>

        <label className="text-sm font-[550] text-slate-700">
          Nome
          <input value={form.nome ?? ''} onChange={event => update('nome', event.target.value)} className={fieldClass} />
        </label>

        <label className="text-sm font-[550] text-slate-700">
          Cognome
          <input value={form.cognome ?? ''} onChange={event => update('cognome', event.target.value)} className={fieldClass} />
        </label>

        <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
          <div aria-live="polite">
            {saved && (
              <p className="flex items-center gap-2 text-sm font-[550] text-emerald-700">
                <CheckCircle2 size={18} /> Contesto aggiornato.
              </p>
            )}
          </div>
          <button type="submit" className="rounded-xl bg-indigo-700 px-5 py-2.5 text-sm font-[600] text-white hover:bg-indigo-800">
            Salva il contesto
          </button>
        </div>
      </form>
    </div>
  )
}
