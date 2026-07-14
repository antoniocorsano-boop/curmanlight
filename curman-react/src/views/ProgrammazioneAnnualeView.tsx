import { useEffect, useMemo, useRef, useState } from 'react'
import { Save, BookOpen } from 'lucide-react'
import { useAppStore } from '@/stores/useAppStore'

const STORAGE_KEY = 'cml-programmazione-annuale-v1'
const STORE_VERSION = 'cml-programmazione-annuale-store-v1'

type AnnualPlan = {
  version: 'cml-programmazione-annuale-v1'
  savedAt: string
  disciplina: string
  annoScolastico: string
  ordine: string
  classe: string
  titolo: string
  finalita: string
  competenze: string
  nuclei: string
  metodologia: string
  valutazione: string
}

type AnnualPlanStore = {
  version: typeof STORE_VERSION
  plans: Record<string, AnnualPlan>
}

const EMPTY_PLAN: Omit<AnnualPlan, 'savedAt' | 'disciplina' | 'annoScolastico' | 'ordine'> = {
  version: 'cml-programmazione-annuale-v1',
  classe: '',
  titolo: '',
  finalita: '',
  competenze: '',
  nuclei: '',
  metodologia: '',
  valutazione: '',
}

function buildPlanKey(disciplina: string, ordine: string, annoScolastico: string, classe: string) {
  return [disciplina, ordine, annoScolastico, classe]
    .map(value => encodeURIComponent(value.trim().toLocaleLowerCase('it-IT')))
    .join('::')
}

function readStore(): AnnualPlanStore {
  const raw = localStorage.getItem(STORAGE_KEY)
  if (!raw) return { version: STORE_VERSION, plans: {} }

  const parsed = JSON.parse(raw) as AnnualPlanStore | AnnualPlan
  if ('plans' in parsed && parsed.version === STORE_VERSION) return parsed

  if (parsed.version === 'cml-programmazione-annuale-v1') {
    const legacyKey = buildPlanKey(parsed.disciplina, parsed.ordine, parsed.annoScolastico, parsed.classe)
    return { version: STORE_VERSION, plans: { [legacyKey]: parsed } }
  }

  return { version: STORE_VERSION, plans: {} }
}

export function ProgrammazioneAnnualeView() {
  const profilo = useAppStore(s => s.profilo)
  const disciplinaSelezionata = useAppStore(s => s.disciplinaSelezionata)
  const [plan, setPlan] = useState(EMPTY_PLAN)
  const [savedAt, setSavedAt] = useState<string | null>(null)
  const [storageError, setStorageError] = useState<string | null>(null)
  const loadedPlanKey = useRef<string | null>(null)

  const contesto = useMemo(() => ({
    disciplina: disciplinaSelezionata ?? '',
    annoScolastico: profilo?.annoScolastico ?? '',
    ordine: profilo?.ordine ?? '',
  }), [disciplinaSelezionata, profilo])

  const planKey = useMemo(() => {
    if (!contesto.disciplina || !contesto.annoScolastico || !contesto.ordine || !plan.classe.trim()) return null
    return buildPlanKey(contesto.disciplina, contesto.ordine, contesto.annoScolastico, plan.classe)
  }, [contesto, plan.classe])

  useEffect(() => {
    if (!planKey || loadedPlanKey.current === planKey) return

    try {
      const saved = readStore().plans[planKey]
      loadedPlanKey.current = planKey
      setStorageError(null)

      if (!saved) {
        setPlan(current => ({ ...EMPTY_PLAN, classe: current.classe }))
        setSavedAt(null)
        return
      }

      setPlan({
        version: saved.version,
        classe: saved.classe ?? '',
        titolo: saved.titolo ?? '',
        finalita: saved.finalita ?? '',
        competenze: saved.competenze ?? '',
        nuclei: saved.nuclei ?? '',
        metodologia: saved.metodologia ?? '',
        valutazione: saved.valutazione ?? '',
      })
      setSavedAt(saved.savedAt)
    } catch {
      loadedPlanKey.current = planKey
      setSavedAt(null)
      setStorageError('Non è stato possibile leggere il salvataggio locale. Il piano corrente non è stato modificato.')
    }
  }, [planKey])

  function update<K extends keyof typeof plan>(key: K, value: (typeof plan)[K]) {
    if (key === 'classe') loadedPlanKey.current = null
    setStorageError(null)
    setPlan(current => ({ ...current, [key]: value }))
  }

  function save() {
    if (!planKey) return

    const payload: AnnualPlan = { ...plan, ...contesto, savedAt: new Date().toISOString() }

    try {
      const store = readStore()
      const nextStore: AnnualPlanStore = {
        version: STORE_VERSION,
        plans: { ...store.plans, [planKey]: payload },
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(nextStore))
      setSavedAt(payload.savedAt)
      setStorageError(null)
    } catch {
      setStorageError('Salvataggio non riuscito. Verifica lo spazio disponibile o le impostazioni del browser e riprova.')
    }
  }

  const missingContext = !contesto.disciplina || !contesto.annoScolastico || !contesto.ordine || !plan.classe.trim()

  return (
    <div className="mx-auto w-full max-w-5xl p-5 sm:p-8">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="mb-1 text-xs font-[650] uppercase tracking-wide text-indigo-600">Progettazione didattica</p>
          <h1 className="text-2xl font-[700] text-slate-900">Programmazione annuale</h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">Prepara una prima struttura di lavoro collegata al contesto curricolare. I dati restano nel browser e richiedono validazione umana.</p>
        </div>
        <button type="button" onClick={save} disabled={missingContext} className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-[650] text-white disabled:cursor-not-allowed disabled:opacity-40">
          <Save size={17} /> Salva nel browser
        </button>
      </div>

      <section className="mb-6 rounded-2xl border border-indigo-100 bg-indigo-50/50 p-4">
        <div className="flex gap-3">
          <BookOpen size={19} className="mt-0.5 shrink-0 text-indigo-600" />
          <div className="text-sm leading-6 text-slate-600">
            <p><strong>Disciplina:</strong> {contesto.disciplina || 'da selezionare'}</p>
            <p><strong>Ordine:</strong> {contesto.ordine || 'da impostare'} · <strong>Anno scolastico:</strong> {contesto.annoScolastico || 'da impostare'}</p>
            {missingContext && <p className="mt-1 font-[600] text-amber-700">Completa il contesto, seleziona una disciplina e indica la classe prima del salvataggio.</p>}
            {savedAt && <p className="mt-1 text-emerald-700">Ultimo salvataggio: {new Date(savedAt).toLocaleString('it-IT')}</p>}
            {storageError && <p role="alert" className="mt-1 font-[600] text-red-700">{storageError}</p>}
          </div>
        </div>
      </section>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Classe" value={plan.classe} onChange={value => update('classe', value)} />
        <Field label="Titolo della programmazione" value={plan.titolo} onChange={value => update('titolo', value)} />
        <TextArea label="Finalità formative" value={plan.finalita} onChange={value => update('finalita', value)} />
        <TextArea label="Competenze attese" value={plan.competenze} onChange={value => update('competenze', value)} />
        <TextArea label="Nuclei e contenuti" value={plan.nuclei} onChange={value => update('nuclei', value)} />
        <TextArea label="Metodologia" value={plan.metodologia} onChange={value => update('metodologia', value)} />
        <div className="sm:col-span-2"><TextArea label="Criteri e strumenti di valutazione" value={plan.valutazione} onChange={value => update('valutazione', value)} /></div>
      </div>
    </div>
  )
}

function Field({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  return <label className="text-sm font-[600] text-slate-700">{label}<input value={value} onChange={event => onChange(event.target.value)} className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2.5 font-normal outline-none focus:border-indigo-400" /></label>
}

function TextArea({ label, value, onChange }: { label: string; value: string; onChange: (value: string) => void }) {
  return <label className="block text-sm font-[600] text-slate-700">{label}<textarea value={value} onChange={event => onChange(event.target.value)} rows={5} className="mt-2 w-full resize-y rounded-xl border border-slate-200 px-3 py-2.5 font-normal leading-6 outline-none focus:border-indigo-400" /></label>
}
