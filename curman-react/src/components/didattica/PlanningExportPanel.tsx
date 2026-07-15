import { useState } from 'react'
import { Download, FileJson, FileText } from 'lucide-react'

type ExportSection = {
  label: string
  value: string
}

type PlanningExportPanelProps = {
  kind: 'annual_plan' | 'uda'
  documentLabel: string
  filenameBase: string
  title: string
  metadata: Record<string, string>
  sections: ExportSection[]
  sourceUnitIds?: string[]
  savedAt: string | null
  disabled?: boolean
}

export function PlanningExportPanel({
  kind,
  documentLabel,
  filenameBase,
  title,
  metadata,
  sections,
  sourceUnitIds = [],
  savedAt,
  disabled = false,
}: PlanningExportPanelProps) {
  const [message, setMessage] = useState<string | null>(null)
  const unavailable = disabled || !savedAt

  function exportMarkdown() {
    try {
      const metadataLines = Object.entries(metadata).map(([label, value]) => `- **${label}:** ${value || 'Non indicato'}`)
      const sectionLines = sections.flatMap(section => [
        `## ${section.label}`,
        '',
        section.value.trim() || '_Non compilato_',
        '',
      ])
      const sourceLines = sourceUnitIds.length > 0
        ? ['## Riferimenti curricolari', '', ...sourceUnitIds.map(id => `- ${id}`), '']
        : []
      const markdown = [
        `# ${title.trim() || documentLabel}`,
        '',
        ...metadataLines,
        `- **Ultimo salvataggio:** ${new Date(savedAt!).toLocaleString('it-IT')}`,
        '',
        ...sectionLines,
        ...sourceLines,
        '> Documento prodotto localmente in CurManLight. Richiede revisione e validazione professionale.',
        '',
      ].join('\n')
      download(`${safeFilename(filenameBase)}.md`, markdown, 'text/markdown;charset=utf-8')
      setMessage('Documento Markdown scaricato.')
    } catch {
      setMessage('Esportazione non riuscita. Verifica le impostazioni del browser e riprova.')
    }
  }

  function exportJson() {
    try {
      const payload = {
        schemaVersion: 'cml-planning-export-v1',
        kind,
        exportedAt: new Date().toISOString(),
        savedAt,
        title,
        metadata,
        sections: Object.fromEntries(sections.map(section => [section.label, section.value])),
        sourceUnitIds,
        humanValidationRequired: true,
      }
      download(`${safeFilename(filenameBase)}.json`, JSON.stringify(payload, null, 2), 'application/json;charset=utf-8')
      setMessage('Dati JSON scaricati.')
    } catch {
      setMessage('Esportazione non riuscita. Verifica le impostazioni del browser e riprova.')
    }
  }

  return (
    <section className="mb-6 rounded-2xl border border-slate-200 bg-white p-4">
      <div className="flex gap-3">
        <Download size={19} className="mt-0.5 shrink-0 text-indigo-600" />
        <div className="min-w-0 flex-1">
          <h2 className="text-sm font-[700] text-slate-800">Esporta {documentLabel}</h2>
          <p className="mt-1 text-sm leading-6 text-slate-500">Scarica una copia leggibile in Markdown oppure i dati versionati in JSON. L’esportazione non modifica il salvataggio locale.</p>
          <div className="mt-3 flex flex-col gap-2 sm:flex-row">
            <button type="button" onClick={exportMarkdown} disabled={unavailable} className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-sm font-[650] text-slate-700 disabled:cursor-not-allowed disabled:opacity-40">
              <FileText size={16} /> Scarica documento (.md)
            </button>
            <button type="button" onClick={exportJson} disabled={unavailable} className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-sm font-[650] text-slate-700 disabled:cursor-not-allowed disabled:opacity-40">
              <FileJson size={16} /> Scarica dati (.json)
            </button>
          </div>
          {unavailable && <p className="mt-2 text-xs font-[600] text-amber-700">Salva prima il documento corrente per abilitarne l’esportazione.</p>}
          {message && <p role="status" className="mt-2 text-xs font-[600] text-slate-600">{message}</p>}
        </div>
      </div>
    </section>
  )
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
