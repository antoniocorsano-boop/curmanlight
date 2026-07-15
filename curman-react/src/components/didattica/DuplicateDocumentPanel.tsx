import { useEffect, useState } from 'react'
import { Copy, FileJson, FileText } from 'lucide-react'
import { useAppStore } from '@/stores/useAppStore'

type Props = {
  currentClass: string
  documentLabel: string
  disabled?: boolean
  onDuplicate: (targetClass: string) => { ok: boolean; message: string }
}

type SavedDocument = Record<string, unknown> & {
  version?: string
  savedAt?: string
  disciplina?: string
  annoScolastico?: string
  ordine?: string
  classe?: string
  titolo?: string
  sourceUnitIds?: string[]
}

export function DuplicateDocumentPanel({ currentClass, documentLabel, disabled = false, onDuplicate }: Props) {
  const profilo = useAppStore(state => state.profilo)
  const disciplina = useAppStore(state => state.disciplinaSelezionata)
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

  function exportDocument(format: 'markdown' | 'json') {
    try {
      const saved = readSavedDocument()
      if (!saved) {
        setFeedback({ kind: 'error', message: 'Il documento salvato non è disponibile. Salva nuovamente e riprova.' })
        return
      }

      const kind = isUda() ? 'uda' : 'annual_plan'
      const filename = safeFilename(`${kind}-${disciplina ?? 'disciplina'}-${currentClass}-${saved.titolo ?? 'documento'}`)

      if (format === 'json') {
        const payload = {
          schemaVersion: 'cml-planning-export-v1',
          kind,
          exportedAt: new Date().toISOString(),
          document: saved,
          humanValidationRequired: true,
        }
        download(`${filename}.json`, JSON.stringify(payload, null, 2), 'application/json;charset=utf-8')
        setFeedback({ kind: 'success', message: 'Dati JSON scaricati.' })
        return
      }

      const markdown = buildMarkdown(saved)
      download(`${filename}.md`, markdown, 'text/markdown;charset=utf-8')
      setFeedback({ kind: 'success', message: 'Documento Markdown scaricato.' })
    } catch {
      setFeedback({ kind: 'error', message: 'Esportazione non riuscita. Verifica le impostazioni del browser e riprova.' })
    }
  }

  function readSavedDocument(): SavedDocument | null {
    const ordine = profilo?.ordine ?? ''
    const annoScolastico = profilo?.annoScolastico ?? ''
    if (!disciplina || !ordine || !annoScolastico || !currentClass.trim()) return null

    const key = [disciplina, ordine, annoScolastico, currentClass]
      .map(value => encodeURIComponent(value.trim().toLocaleLowerCase('it-IT')))
      .join('::')
    const storageKey = isUda() ? 'cml-uda-essenziale-v1' : 'cml-programmazione-annuale-v1'
    const collection = isUda() ? 'drafts' : 'plans'
    const raw = localStorage.getItem(storageKey)
    if (!raw) return null

    const parsed = JSON.parse(raw) as Record<string, unknown>
    const records = parsed[collection]
    if (records && typeof records === 'object') {
      const saved = (records as Record<string, SavedDocument>)[key]
      if (saved) return saved
    }

    if (!isUda() && isLegacyAnnualPlan(parsed, disciplina, ordine, annoScolastico, currentClass)) {
      return parsed as SavedDocument
    }

    return null
  }

  function buildMarkdown(saved: SavedDocument) {
    const sectionLabels = isUda()
      ? {
          situazioneProblema: 'Situazione-problema o compito autentico',
          competenze: 'Competenze attese',
          obiettivi: 'Obiettivi di apprendimento',
          attivita: 'Attività e fasi',
          tempi: 'Tempi e organizzazione',
          prodottoFinale: 'Prodotto finale o evidenza',
          valutazione: 'Criteri e strumenti di valutazione',
        }
      : {
          finalita: 'Finalità formative',
          competenze: 'Competenze attese',
          obiettivi: 'Obiettivi di apprendimento',
          nuclei: 'Nuclei e contenuti',
          metodologia: 'Metodologia',
          valutazione: 'Criteri e strumenti di valutazione',
        }

    const sections = Object.entries(sectionLabels).flatMap(([key, label]) => [
      `## ${label}`,
      '',
      String(saved[key] ?? '').trim() || '_Non compilato_',
      '',
    ])
    const sourceIds = Array.isArray(saved.sourceUnitIds) ? saved.sourceUnitIds : []
    const references = sourceIds.length > 0
      ? ['## Riferimenti curricolari', '', ...sourceIds.map(id => `- ${id}`), '']
      : []

    return [
      `# ${String(saved.titolo ?? '').trim() || (isUda() ? 'UDA essenziale' : 'Programmazione annuale')}`,
      '',
      `- **Disciplina:** ${String(saved.disciplina ?? disciplina ?? 'Non indicata')}`,
      `- **Ordine:** ${String(saved.ordine ?? profilo?.ordine ?? 'Non indicato')}`,
      `- **Anno scolastico:** ${String(saved.annoScolastico ?? profilo?.annoScolastico ?? 'Non indicato')}`,
      `- **Classe:** ${String(saved.classe ?? currentClass)}`,
      `- **Ultimo salvataggio:** ${saved.savedAt ? new Date(saved.savedAt).toLocaleString('it-IT') : 'Non disponibile'}`,
      '',
      ...sections,
      ...references,
      '> Documento prodotto localmente in CurManLight. Richiede revisione e validazione professionale.',
      '',
    ].join('\n')
  }

  function isUda() {
    return documentLabel.toLocaleLowerCase('it-IT').includes('uda')
  }

  const unavailable = disabled || !currentClass.trim()

  return (
    <section className="mb-6 rounded-2xl border border-slate-200 bg-white p-5" aria-labelledby={`${documentLabel}-actions-title`}>
      <div className="min-w-0">
        <h2 id={`${documentLabel}-actions-title`} className="text-base font-[700] text-slate-800">Azioni su {documentLabel}</h2>
        <p className="mt-1 text-sm leading-6 text-slate-500">Crea una copia autonoma per un’altra classe oppure scarica il documento salvato. L’originale resta invariato.</p>

        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-end">
          <label className="flex-1 text-sm font-[600] text-slate-700">Classe di destinazione
            <input value={targetClass} onChange={event => { setTargetClass(event.target.value); setFeedback(null) }} disabled={unavailable} placeholder="Es. 2B" className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2.5 font-normal outline-none focus:border-indigo-400 disabled:bg-slate-50" />
          </label>
          <button type="button" onClick={duplicate} disabled={unavailable || !targetClass.trim()} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-indigo-200 bg-indigo-50 px-4 py-2.5 text-sm font-[650] text-indigo-700 hover:bg-indigo-100 disabled:cursor-not-allowed disabled:opacity-40">
            <Copy size={16} /> Crea copia
          </button>
        </div>

        <div className="mt-3 flex flex-col gap-2 sm:flex-row">
          <button type="button" onClick={() => exportDocument('markdown')} disabled={unavailable} className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-sm font-[650] text-slate-700 disabled:cursor-not-allowed disabled:opacity-40">
            <FileText size={16} /> Scarica documento (.md)
          </button>
          <button type="button" onClick={() => exportDocument('json')} disabled={unavailable} className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-sm font-[650] text-slate-700 disabled:cursor-not-allowed disabled:opacity-40">
            <FileJson size={16} /> Scarica dati (.json)
          </button>
        </div>

        {unavailable && <p className="mt-3 text-xs leading-5 text-amber-700">Salva o completa prima il documento corrente e indica la classe.</p>}
        {feedback && <p role={feedback.kind === 'error' ? 'alert' : 'status'} className={`mt-3 text-sm font-[600] ${feedback.kind === 'error' ? 'text-red-700' : 'text-emerald-700'}`}>{feedback.message}</p>}
      </div>
    </section>
  )
}

function isLegacyAnnualPlan(
  value: Record<string, unknown>,
  disciplina: string,
  ordine: string,
  annoScolastico: string,
  classe: string,
) {
  return value.version === 'cml-programmazione-annuale-v1'
    && sameValue(value.disciplina, disciplina)
    && sameValue(value.ordine, ordine)
    && sameValue(value.annoScolastico, annoScolastico)
    && sameValue(value.classe, classe)
}

function sameValue(value: unknown, expected: string) {
  return String(value ?? '').trim().toLocaleLowerCase('it-IT') === expected.trim().toLocaleLowerCase('it-IT')
}

function safeFilename(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLocaleLowerCase('it-IT')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '') || 'curmanlight-progettazione'
}

function download(filename: string, content: string, type: string) {
  const blob = new Blob([content], { type })
  const url = URL.createObjectURL(blob)
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = filename
  document.body.appendChild(anchor)
  anchor.click()
  anchor.remove()
  URL.revokeObjectURL(url)
}
