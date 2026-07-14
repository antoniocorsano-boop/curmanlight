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

function profileLabel(model: CmlTeacherProposal) {
  const fullName = [model.profilo?.nome, model.profilo?.cognome].filter(Boolean).join(' ').trim()
  return fullName || model.profilo?.istituto || 'Profilo non indicato'
}

function proposalFingerprint(model: CmlTeacherProposal) {
  const rows = model.proposals.map((proposal: ProposalItem) => [
    proposal.unitaId,
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
      const parsed = parseCmlFile(JSON.parse(await file.text()))
      if (!parsed || parsed.fileType !== 'teacher_proposal') {
        records.push({
          ...base,
          status: 'invalid',
          message: 'Formato non riconosciuto come proposta docente CurManLight v1.0.',
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
