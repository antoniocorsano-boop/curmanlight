import { useState } from 'react'
import { useAppStore } from '@/stores/useAppStore'
import type { Ruolo, ProfiloUtente } from '@/types/gap'
import type { OrdineEsteso } from '@/types/curriculum'

export function ProfiloView() {
  const { profilo, setProfilo } = useAppStore()
  const [form, setForm] = useState<Partial<ProfiloUtente>>({ ruolo: profilo?.ruolo ?? 'docente', ordine: profilo?.ordine ?? 'Tutti', disciplina: profilo?.disciplina ?? '', annoScolastico: profilo?.annoScolastico ?? '2025-2026', nome: profilo?.nome ?? '', cognome: profilo?.cognome ?? '', istituto: profilo?.istituto ?? '' })

  return (
    <div className="max-w-md mx-auto flex flex-col gap-6">
      <div>
        <h2 className="text-lg font-[600] text-slate-800">Profilo</h2>
        <p className="text-sm text-slate-500">Configura il tuo ruolo e il contesto di lavoro.</p>
      </div>
      <div className="flex flex-col gap-4">
        {[{label:'Ruolo', field:'ruolo', type:'select', opts:[['docente','Docente'],['dipartimento','Dipartimento'],['referente','Referente curricolare'],['dirigenza','Dirigenza'],['consultatore','Consultatore']]},
          {label:'Ordine', field:'ordine', type:'select', opts:[['Tutti','Tutti'],['Infanzia','Infanzia'],['Primaria','Primaria'],['Secondaria','Secondaria I grado']]},
          {label:'Anno scolastico', field:'annoScolastico', type:'text'},
          {label:'Nome', field:'nome', type:'text'},
          {label:'Cognome', field:'cognome', type:'text'},
          {label:'Istituto', field:'istituto', type:'text'},
        ].map(f => (
          <div key={f.field}>
            <label className="text-xs font-[500] text-slate-500 block mb-1.5">{f.label}</label>
            {f.type === 'select' ? (
              <select value={(form as Record<string, unknown>)[f.field] as string} onChange={e => setForm({...form, [f.field]: e.target.value})} className="input-field">
                {f.opts?.map(([v,l]) => <option key={v} value={v}>{l}</option>)}
              </select>
            ) : (
              <input type="text" value={(form as Record<string, unknown>)[f.field] as string} onChange={e => setForm({...form, [f.field]: e.target.value})} className="input-field" />
            )}
          </div>
        ))}
        <button onClick={() => setProfilo({ ruolo: form.ruolo as Ruolo, ordine: form.ordine as OrdineEsteso, disciplina: form.disciplina ?? '', annoScolastico: form.annoScolastico ?? '2025-2026', nome: form.nome, cognome: form.cognome, istituto: form.istituto })}
          className="mt-2 px-4 py-2 text-sm font-[500] rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors w-fit">
          Salva profilo
        </button>
      </div>
    </div>
  )
}
