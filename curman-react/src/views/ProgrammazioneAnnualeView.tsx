import { useEffect, useMemo, useRef, useState } from 'react'
import { Save, BookOpen } from 'lucide-react'
import { useAppStore } from '@/stores/useAppStore'
import { CurriculumReusePanel } from '@/components/didattica/CurriculumReusePanel'
import { DuplicateDocumentPanel } from '@/components/didattica/DuplicateDocumentPanel'
import { appendUniqueLines, mergeSourceIds } from '@/lib/curriculum-reuse'
import type { CurriculumReusePayload } from '@/lib/curriculum-reuse'

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
  obiettivi: string
  nuclei: string
  metodologia: string
  valutazione: string
  sourceUnitIds?: string[]
}

type EditableAnnualPlan = Omit<AnnualPlan, 'savedAt' | 'disciplina' | 'annoScolastico' | 'ordine'>

type AnnualPlanStore = {
  version: typeof STORE_VERSION
  plans: Record<string, AnnualPlan>
}

const EMPTY_PLAN: EditableAnnualPlan = {
  version: 'cml-programmazione-annuale-v1',
  classe: '',
  titolo: '',
  finalita: '',
  competenze: '',
  obiettivi: '',
  nuclei: '',
  metodologia: '',
  valutazione: '',
  sourceUnitIds: [],
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
  const [plan, setPlan] = useState<EditableAnnualPlan>(EMPTY_PLAN)
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
      const previousPlanKey = loadedPlanKey.current
      const saved = readStore().plans[planKey]
      loadedPlanKey.current = planKey
      setStorageError(null)

      if (!saved) {
        if (previousPlanKey !== null) {
          setPlan(current => ({ ...EMPTY_PLAN, classe: current.classe }))
        }
        setSavedAt(null)
        return
      }

      setPlan({
        version: saved.version,
        classe: saved.classe ?? '',
        titolo: saved.titolo ?? '',
        finalita: saved.finalita ?? '',
        competenze: saved.competenze ?? '',
        obiettivi: saved.obiettivi ?? '',
        nuclei: saved.nuclei ?? '',
        metodologia: saved.metodologia ?? '',
        valutazione: saved.valutazione ?? '',
        sourceUnitIds: saved.sourceUnitIds ?? [],
      })
      setSavedAt(saved.savedAt)
    } catch {
      loadedPlanKey.current = planKey
      setSavedAt(null)
      setStorageError('Non è stato possibile leggere il salvataggio locale. Il piano corrente non è stato modificato.')
    }
  }, [planKey])

  function update<K extends keyof EditableAnnualPlan>(key: K, value: EditableAnnualPlan[K]) {
    if (key === 'classe') loadedPlanKey.current = null
    setStorageError(null)
    setPlan(current => ({ ...current, [key]: value }))
  }

  function insertCurriculum(payload: CurriculumReusePayload) {
    setPlan(current => ({
      ...current,
      competenze: appendUniqueLines(current.competenze, payload.competenze),
      obiettivi: appendUniqueLines(current.obiettivi, payload.obiettivi),
      nuclei: appendUniqueLines(current.nuclei, payload.contenuti),
      sourceUnitIds: mergeSourceIds(current.sourceUnitIds, payload.sourceUnitIds),
    }))
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

  function duplicate(targetClass: string) {
    if (!planKey || !savedAt) return { ok: false, message: 'Salva prima la programmazione corrente.' }
    if (!targetClass) return { ok: false, message: 'Indica la classe di destinazione.' }
    if (targetClass.trim().toLocaleLowerCase('it-IT') === plan.classe.trim().toLocaleLowerCase('it-IT')) {
      return { ok: false, message: 'La classe di destinazione deve essere diversa da quella corrente.' }
    }

    const targetKey = buildPlanKey(contesto.disciplina, contesto.ordine, contesto.annoScolastico, targetClass)
    try {
      const store = readStore()
      if (store.plans[targetKey]) return { ok: false, message: 'Esiste già una programmazione per la classe indicata. La copia non è stata creata.' }

      const copiedAt = new Date().toISOString()
      const copy: AnnualPlan = {
        ...plan,
        ...contesto,
        classe: targetClass,
        titolo: plan.titolo.trim() ? `${plan.titolo} — copia` : 'Programmazione — copia',
        savedAt: copiedAt,
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ version: STORE_VERSION, plans: { ...store.plans, [targetKey]: copy } } satisfies AnnualPlanStore))
      loadedPlanKey.current = targetKey
      setPlan({ ...copy })
      setSavedAt(copiedAt)
      setStorageError(null)
      return { ok: true, message: `Copia creata per la classe ${targetClass}. Ora stai modificando la copia.` }
    } catch {
      return { ok: false, message: 'Duplicazione non riuscita. Verifica lo spazio disponibile o le impostazioni del browser.' }
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

      <DuplicateDocumentPanel currentClass={plan.classe} documentLabel="la programmazione" disabled={!savedAt || missingContext} onDuplicate={duplicate} />
      <CurriculumReusePanel disciplina={contesto.disciplina} ordine={contesto.ordine} classe={plan.classe} destinationLabel="programmazione" onInsert={insertCurriculum} />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Classe" value={plan.classe} onChange={value => update('classe', value)} />
        <Field label="Titolo della programmazione" value={plan.titolo} onChange={value => update('titolo', value)} />
        <TextArea label="Finalità formative" value={plan.finalita} onChange={value => update('finalita', value)} />
        <TextArea label="Competenze attese" value={plan.competenze} onChange={value => update('competenze', value)} />
        <TextArea label="Obiettivi di apprendimento" value={plan.obiettivi} onChange={value => update('obiettivi', value)} />
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
