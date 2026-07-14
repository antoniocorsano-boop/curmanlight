import { parseCmlFile } from '@/lib/cml'
import type { CmlDepartmentOutcome, HandlingItem } from '@/types/cml'

export type DepartmentOutcomeImportStatus = 'valid' | 'invalid' | 'duplicate'

export type DepartmentOutcomeImportRecord = {
  id: string
  fileName: string
  fileSize: number
  status: DepartmentOutcomeImportStatus
  message: string
  model: CmlDepartmentOutcome | null
  fingerprint: string | null
}

type ValidationResult = { valid: boolean; message: string }

function isRecord(value: unknown): value is Record<string, unknown> {
  return !!value && typeof value === 'object' && !Array.isArray(value)
}

function nonEmpty(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0
}

function validateHandling(value: unknown, index: number): ValidationResult {
  if (!isRecord(value)) return { valid: false, message: `L’esito ${index + 1} non è valido.` }
  if (!nonEmpty(value.proposalId)) return { valid: false, message: `L’esito ${index + 1} non contiene l’identificativo della proposta.` }
  if (!nonEmpty(value.handling)) return { valid: false, message: `L’esito ${index + 1} non contiene la decisione dipartimentale.` }
  return { valid: true, message: '' }
}

export function validateDepartmentOutcomeModel(value: unknown): ValidationResult {
  if (!isRecord(value)) return { valid: false, message: 'Il contenuto del file non è un oggetto valido.' }
  if (value.appName !== 'CurManLight' || value.schemaVersion !== '1.0' || value.fileType !== 'department_outcome') {
    return { valid: false, message: 'Formato non riconosciuto come esito dipartimentale CurManLight v1.0.' }
  }
  if (value.role !== 'department') return { valid: false, message: 'Il file non è stato prodotto dal ruolo Dipartimento.' }
  if (!nonEmpty(value.discipline)) return { valid: false, message: 'La disciplina principale non è indicata.' }
  if (value.disciplineWorkStatus !== 'completed') return { valid: false, message: 'Il lavoro dipartimentale non risulta completato.' }
  if (value.humanValidationRequired !== true) return { valid: false, message: 'Il file non dichiara la validazione umana obbligatoria.' }
  if (!Array.isArray(value.proposalHandling) || value.proposalHandling.length === 0) {
    return { valid: false, message: 'Il file non contiene esiti dipartimentali.' }
  }

  const proposalIds = new Set<string>()
  for (const [index, handling] of value.proposalHandling.entries()) {
    const result = validateHandling(handling, index)
    if (!result.valid) return result
    const proposalId = (handling as Record<string, unknown>).proposalId as string
    if (proposalIds.has(proposalId)) {
      return { valid: false, message: `Il file contiene più esiti per la proposta ${proposalId}.` }
    }
    proposalIds.add(proposalId)
  }
  return { valid: true, message: '' }
}

function fingerprint(model: CmlDepartmentOutcome) {
  const rows = model.proposalHandling.map((item: HandlingItem) => [item.proposalId, item.handling, item.note ?? ''])
  return JSON.stringify([model.discipline, model.createdAt, rows])
}

export async function readDepartmentOutcomeFiles(files: FileList | File[]) {
  const seen = new Set<string>()
  const records: DepartmentOutcomeImportRecord[] = []

  for (const [index, file] of Array.from(files).entries()) {
    const base = { id: `${file.name}-${file.size}-${file.lastModified}-${index}`, fileName: file.name, fileSize: file.size }
    if (!file.name.toLowerCase().endsWith('.cml')) {
      records.push({ ...base, status: 'invalid', message: 'Il file non usa l’estensione .cml.', model: null, fingerprint: null })
      continue
    }
    try {
      const raw: unknown = JSON.parse(await file.text())
      const validation = validateDepartmentOutcomeModel(raw)
      const parsed = validation.valid ? parseCmlFile(raw) : null
      if (!validation.valid || !parsed || parsed.fileType !== 'department_outcome') {
        records.push({ ...base, status: 'invalid', message: validation.message, model: null, fingerprint: null })
        continue
      }
      const key = fingerprint(parsed)
      const duplicate = seen.has(key)
      seen.add(key)
      records.push({ ...base, status: duplicate ? 'duplicate' : 'valid', message: duplicate ? 'Esito duplicato nel gruppo selezionato.' : 'Esito pronto per la consultazione del Referente.', model: parsed, fingerprint: key })
    } catch {
      records.push({ ...base, status: 'invalid', message: 'Il file non contiene JSON valido.', model: null, fingerprint: null })
    }
  }
  return records
}
