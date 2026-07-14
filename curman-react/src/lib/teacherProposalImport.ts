import { parseCmlFile } from '@/lib/cml'
import type { CmlTeacherProposal, ProposalItem } from '@/types/cml'

export type TeacherProposalImportStatus = 'valid' | 'invalid' | 'duplicate'

export type TeacherProposalImportRecord = {
  id: string
  fileName: string
  fileSize: number
  status: TeacherProposalImportStatus
  message: string
  model: CmlTeacherProposal | null
  proposalCount: number
  discipline: string
  ordine: string
  author: string
  fingerprint: string | null
}

type ValidationResult = {
  valid: boolean
  message: string
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return !!value && typeof value === 'object' && !Array.isArray(value)
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.trim().length > 0
}

function validateProposalItem(value: unknown, index: number): ValidationResult {
  if (!isRecord(value)) {
    return { valid: false, message: `La proposta ${index + 1} non è un oggetto valido.` }
  }

  const identifier = value.unitaId ?? value.id
  if (!isNonEmptyString(identifier)) {
    return { valid: false, message: `La proposta ${index + 1} non contiene un identificativo.` }
  }
  if (!isNonEmptyString(value.status)) {
    return { valid: false, message: `La proposta ${index + 1} non indica lo stato.` }
  }
  if (typeof value.testoAttuale !== 'string') {
    return { valid: false, message: `La proposta ${index + 1} non contiene il testo vigente.` }
  }
  if (!isNonEmptyString(value.proposta)) {
    return { valid: false, message: `La proposta ${index + 1} non contiene il testo proposto.` }
  }
  if (!isNonEmptyString(value.motivazione)) {
    return { valid: false, message: `La proposta ${index + 1} non contiene la motivazione.` }
  }
  if (!isNonEmptyString(value.fonte)) {
    return { valid: false, message: `La proposta ${index + 1} non contiene la fonte.` }
  }
  if (value.decisione !== null && value.decisione !== 'approvata' && value.decisione !== 'rifiutata') {
    return { valid: false, message: `La proposta ${index + 1} contiene una decisione non riconosciuta.` }
  }
  if (value.testoFinale !== null && value.testoFinale !== undefined && typeof value.testoFinale !== 'string') {
    return { valid: false, message: `La proposta ${index + 1} contiene un testo finale non valido.` }
  }

  return { valid: true, message: '' }
}

export function validateTeacherProposalModel(value: unknown): ValidationResult {
  if (!isRecord(value)) {
    return { valid: false, message: 'Il contenuto del file non è un oggetto valido.' }
  }
  if (value.appName !== 'CurManLight' || value.schemaVersion !== '1.0' || value.fileType !== 'teacher_proposal') {
    return { valid: false, message: 'Formato non riconosciuto come proposta docente CurManLight v1.0.' }
  }
  if (value.role !== 'teacher') {
    return { valid: false, message: 'Il file non è stato prodotto per il ruolo docente.' }
  }
  if (!isNonEmptyString(value.discipline)) {
    return { valid: false, message: 'La disciplina non è indicata.' }
  }
  if (!isNonEmptyString(value.ordine)) {
    return { valid: false, message: 'L’ordine di scuola non è indicato.' }
  }
  if (!isNonEmptyString(value.annoScolastico)) {
    return { valid: false, message: 'L’anno scolastico non è indicato.' }
  }
  if (!isRecord(value.profilo)) {
    return { valid: false, message: 'Il profilo docente non è presente.' }
  }
  if (value.humanValidationRequired !== true) {
    return { valid: false, message: 'Il file non dichiara la validazione umana obbligatoria.' }
  }
  if (!Array.isArray(value.proposals) || value.proposals.length === 0) {
    return { valid: false, message: 'Il file non contiene proposte da importare.' }
  }

  for (const [index, proposal] of value.proposals.entries()) {
    const result = validateProposalItem(proposal, index)
    if (!result.valid) return result
  }

  return { valid: true, message: '' }
}

function profileLabel(model: CmlTeacherProposal) {
  const fullName = [model.profilo?.nome, model.profilo?.cognome].filter(Boolean).join(' ').trim()
  return fullName || model.profilo?.istituto || 'Profilo non indicato'
}

function proposalFingerprint(model: CmlTeacherProposal) {
  const rows = model.proposals.map((proposal: ProposalItem & { id?: string }) => [
    proposal.unitaId || proposal.id || '',
    proposal.status,
    proposal.proposta,
  ])
  return JSON.stringify([model.discipline, model.ordine, model.annoScolastico, rows])
}

export async function readTeacherProposalFiles(files: FileList | File[]) {
  const seen = new Set<string>()
  const records: TeacherProposalImportRecord[] = []

  for (const [index, file] of Array.from(files).entries()) {
    const base = {
      id: `${file.name}-${file.size}-${file.lastModified}-${index}`,
      fileName: file.name,
      fileSize: file.size,
    }

    if (!file.name.toLowerCase().endsWith('.cml')) {
      records.push({
        ...base,
        status: 'invalid',
        message: 'Il file non usa l’estensione .cml.',
        model: null,
        proposalCount: 0,
        discipline: '',
        ordine: '',
        author: '',
        fingerprint: null,
      })
      continue
    }

    try {
      const raw: unknown = JSON.parse(await file.text())
      const validation = validateTeacherProposalModel(raw)
      const parsed = validation.valid ? parseCmlFile(raw) : null
      if (!validation.valid || !parsed || parsed.fileType !== 'teacher_proposal') {
        records.push({
          ...base,
          status: 'invalid',
          message: validation.message || 'Formato non riconosciuto come proposta docente CurManLight v1.0.',
          model: null,
          proposalCount: 0,
          discipline: '',
          ordine: '',
          author: '',
          fingerprint: null,
        })
        continue
      }

      const fingerprint = proposalFingerprint(parsed)
      const duplicate = seen.has(fingerprint)
      seen.add(fingerprint)
      records.push({
        ...base,
        status: duplicate ? 'duplicate' : 'valid',
        message: duplicate ? 'Proposta duplicata nel gruppo selezionato.' : 'Proposta pronta per la coda dipartimentale.',
        model: parsed,
        proposalCount: parsed.proposals.length,
        discipline: parsed.discipline,
        ordine: parsed.ordine,
        author: profileLabel(parsed),
        fingerprint,
      })
    } catch {
      records.push({
        ...base,
        status: 'invalid',
        message: 'Il file non contiene JSON valido.',
        model: null,
        proposalCount: 0,
        discipline: '',
        ordine: '',
        author: '',
        fingerprint: null,
      })
    }
  }

  return records
}
