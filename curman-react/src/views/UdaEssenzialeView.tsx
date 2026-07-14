import { useEffect, useMemo, useRef, useState } from 'react'
import { FileText, Save } from 'lucide-react'
import { useAppStore } from '@/stores/useAppStore'
import { CurriculumReusePanel } from '@/components/didattica/CurriculumReusePanel'
import { appendUniqueLines, mergeSourceIds } from '@/lib/curriculum-reuse'
import type { CurriculumReusePayload } from '@/lib/curriculum-reuse'

const STORAGE_KEY = 'cml-uda-essenziale-v1'
const STORE_VERSION = 'cml-uda-essenziale-store-v1'

type UdaDraft = {
  version: 'cml-uda-essenziale-v1'
  savedAt: string
  disciplina: string
  annoScolastico: string
  ordine: string
  classe: string
  titolo: string
  situazioneProblema: string
  competenze: string
  obiettivi: string
  attivita: string
  tempi: string
  prodottoFinale: string
  valutazione: string
  sourceUnitIds?: string[]
}

type UdaStore = {
  version: typeof STORE_VERSION
  drafts: Record<string, UdaDraft>
}

type EditableDraft = Omit<UdaDraft, 'savedAt' | 'disciplina' | 'annoScolastico' | 'ordine'>

const EMPTY_DRAFT: EditableDraft = {
  version: 'cml-uda-essenziale-v1',
  classe: '',
  titolo: '',
  situazioneProblema: '',
  competenze: '',
  obiettivi: '',
  attivita: '',
  tempi: '',
  prodottoFinale: '',
  valutazione: '',
  sourceUnitIds: [],
}

function buildDraftKey(disciplina: string, ordine: string, annoScolastico: string, classe: string) {
  return [disciplina, ordine, annoScolastico, classe]
    .map(value => encodeURIComponent(value.trim().toLocaleLowerCase('it-IT')))
    .join('::')
}

function readStore(): UdaStore {
  const raw = localStorage.getItem(STORAGE_KEY)
  if (!raw) return { version: STORE_VERSION, drafts: {} }
  const parsed = JSON.parse(raw) as UdaStore
  if (parsed.version === STORE_VERSION && parsed.drafts && typeof parsed.drafts === 'object') return parsed
  return { version: STORE_VERSION, drafts: {} }
}

export function UdaEssenzialeView() {
  const profilo = useAppStore(s => s.profilo)
  const disciplinaSelezionata = useAppStore(s => s.disciplinaSelezionata)
  const [draft, setDraft] = useState<EditableDraft>(EMPTY_DRAFT)
  const [savedAt, setSavedAt] = useState<string | null>(null)
  const [storageError, setStorageError] = useState<string | null>(null)
  const loadedDraftKey = useRef<string | null>(null)

  const contesto = useMemo(() => ({
    disciplina: disciplinaSelezionata ?? '',
    annoScolastico: profilo?.annoScolastico ?? '',
    ordine: profilo?.ordine ?? '',
  }), [disciplinaSelezionata, profilo])

  const draftKey = useMemo(() => {
    if (!contesto.disciplina || !contesto.annoScolastico || !contesto.ordine || !draft.classe.trim()) return null
    return buildDraftKey(contesto.disciplina, contesto.ordine, contesto.annoScolastico, draft.classe)
  }, [contesto, draft.classe])

  useEffect(() => {
    if (!draftKey || loadedDraftKey.current === draftKey) return

    try {
      const saved = readStore().drafts[draftKey]
      const previousKey = loadedDraftKey.current
      loadedDraftKey.current = draftKey
      setStorageError(null)

      if (!saved) {
        if (previousKey !== null) {
          setDraft(current => ({ ...EMPTY_DRAFT, classe: current.classe }))
        }
        setSavedAt(null)
        return
      }

      setDraft({
        version: saved.version,
        classe: saved.classe ?? '',
        titolo: saved.titolo ?? '',
        situazioneProblema: saved.situazioneProblema ?? '',
        competenze: saved.competenze ?? '',
        obiettivi: saved.obiettivi ?? '',
        attivita: saved.attivita ?? '',
        tempi: saved.tempi ?? '',
        prodottoFinale: saved.prodottoFinale ?? '',
        valutazione: saved.valutazione ?? '',
        sourceUnitIds: saved.sourceUnitIds ?? [],
      })
      setSavedAt(saved.savedAt)
    } catch {
      loadedDraftKey.current = draftKey
      setSavedAt(null)
      setStorageError('Non è stato possibile leggere la bozza locale. I dati presenti nel modulo non sono stati modificati.')
    }
  }, [draftKey])

  function update<K extends keyof EditableDraft>(key: K, value: EditableDraft[K]) {
    if (key === 'classe') loadedDraftKey.current = null
    setStorageError(null)
    setDraft(current => ({ ...current, [key]: value }))
  }

  function insertCurriculum(payload: CurriculumReusePayload) {
    setDraft(current => ({
      ...current,
      competenze: appendUniqueLines(current.competenze, payload.competenze),
      obiettivi: appendUniqueLines(current.obiettivi, payload.obiettivi),
      attivita: appendUniqueLines(current.attivita, payload.contenuti),
      sourceUnitIds: mergeSourceIds(current.sourceUnitIds, payload.sourceUnitIds),
    }))
  }

  function save() {
    if (!draftKey) return

    const payload: UdaDraft = { ...draft, ...contesto, savedAt: new Date().toISOString() }
    try {
      const store = readStore()
      const nextStore: UdaStore = {
        version: STORE_VERSION,
        drafts: { ...store.drafts, [draftKey]: payload },
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(nextStore))
      setSavedAt(payload.savedAt)
      setStorageError(null)
    } catch {
      setStorageError('Salvataggio non riuscito. Verifica lo spazio disponibile o le impostazioni del browser e riprova.')
    }
  }

  const missingContext = !contesto.disciplina || !contesto.annoScolastico || !contesto.ordine || !draft.classe.trim()
  const missingRequired = missingContext || !draft.titolo.trim() || !draft.situazioneProblema.trim()

  return (
    <div className="mx-auto w-full max-w-5xl p-5 sm:p-8">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="mb-1 text-xs font-[650] uppercase tracking-wide text-indigo-600">Progettazione didattica</p>
          <h1 className="text-2xl font-[700] text-slate-900">UDA essenziale</h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">Costruisci una prima unità di apprendimento collegata al contesto selezionato. La bozza resta nel browser e richiede revisione professionale.</p>
        </div>
        <button type="button" onClick={save} disabled={missingRequired} className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-[650] text-white disabled:cursor-not-allowed disabled:opacity-40">
          <Save size={17} /> Salva nel browser
        </button>
      </div>

      <section className="mb-6 rounded-2xl border border-indigo-100 bg-indigo-50/50 p-4">
        <div className="flex gap-3">
          <FileText size={19} className="mt-0.5 shrink-0 text-indigo-600" />
          <div className="text-sm leading-6 text-slate-600">
            <p><strong>Disciplina:</strong> {contesto.disciplina || 'da selezionare'}</p>
            <p><strong>Ordine:</strong> {contesto.ordine || 'da impostare'} · <strong>Anno scolastico:</strong> {contesto.annoScolastico || 'da impostare'}</p>
            {missingRequired && <p className="mt-1 font-[600] text-amber-700">Completa il contesto, indica la classe, il titolo e la situazione-problema prima del salvataggio.</p>}
            {savedAt && <p className="mt-1 text-emerald-700">Ultimo salvataggio: {new Date(savedAt).toLocaleString('it-IT')}</p>}
            {storageError && <p role="alert" className="mt-1 font-[600] text-red-700">{storageError}</p>}
          </div>
        </div>
      </section>

      <CurriculumReusePanel disciplina={contesto.disciplina} ordine={contesto.ordine} classe={draft.classe} destinationLabel="UDA" onInsert={insertCurriculum} />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Classe" value={draft.classe} onChange={value => update('classe', value)} />
        <Field label="Titolo dell’UDA" value={draft.titolo} onChange={value => update('titolo', value)} />
        <div className="sm:col-span-2"><TextArea label="Situazione-problema o compito autentico" value={draft.situazioneProblema} onChange={value => update('situazioneProblema', value)} /></div>
        <TextArea label="Competenze attese" value={draft.competenze} onChange={value => update('competenze', value)} />
        <TextArea label="Obiettivi di apprendimento" value={draft.obiettivi} onChange={value => update('obiettivi', value)} />
        <TextArea label="Attività e fasi" value={draft.attivita} onChange={value => update('attivita', value)} />
        <TextArea label="Tempi e organizzazione" value={draft.tempi} onChange={value => update('tempi', value)} />
        <TextArea label="Prodotto finale o evidenza" value={draft.prodottoFinale} onChange={value => update('prodottoFinale', value)} />
        <TextArea label="Criteri e strumenti di valutazione" value={draft.valutazione} onChange={value => update('valutazione', value)} />
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
