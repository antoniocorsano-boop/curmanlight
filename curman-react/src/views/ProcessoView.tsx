export function ProcessoView() {
  const steps = [
    { fase: 'Proposta', desc: 'Il docente esamina le proposte IN 2025 e decide per ciascuna.', attiva: true },
    { fase: 'Validazione dipartimentale', desc: 'Il dipartimento disciplinare valida le decisioni.', attiva: false },
    { fase: 'Verifica referente', desc: 'Il referente curricolare verifica la coerenza verticale.', attiva: false },
    { fase: 'Approvazione', desc: 'La dirigenza approva il curricolo revisionato.', attiva: false },
    { fase: 'Applicazione', desc: "Il curricolo approvato diventa applicabile per l'anno scolastico.", attiva: false },
  ]
  return (
    <div className="max-w-2xl mx-auto flex flex-col gap-6">
      <div>
        <h2 className="text-lg font-[600] text-slate-800">Processo</h2>
        <p className="text-sm text-slate-500">Flusso di revisione: proposta, validazione, verifica, approvazione.</p>
      </div>
      <div className="flex flex-col gap-3">
        {steps.map((step, i) => (
          <div key={i} className={`card flex items-start gap-3 p-4 ${step.attiva ? 'border-indigo-200' : ''}`}>
            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-[500] shrink-0 mt-0.5 ${step.attiva ? 'bg-indigo-500 text-white' : 'bg-slate-100 text-slate-400'}`}>{i + 1}</div>
            <div>
              <p className={`text-sm font-[500] ${step.attiva ? 'text-indigo-700' : 'text-slate-700'}`}>{step.fase}</p>
              <p className="text-xs text-slate-400 mt-0.5">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
