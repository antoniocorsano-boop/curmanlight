import { downloadCml } from '@/lib/cml'
import type { CmlTeacherProposal, ProposalItem } from '@/types/cml'
import type { ProfiloUtente } from '@/types/gap'
import type { TeacherProposalDraft } from '@/types/proposal'

type CompatibleProposalItem = ProposalItem & {
  id: string
  discipline: string
  ordine: TeacherProposalDraft['ordine']
  classe: string
  type: TeacherProposalDraft['targetField']
  motivazione: string
  fonte: string
}

export type TeacherProposalFile = CmlTeacherProposal & {
  sourceContext: {
    currentFramework: 'D.M. 254/2012'
    revisionFramework: 'D.M. 221/2025'
  }
  counts: {
    total: number
    ok: number
    modifica: number
    nuovo: number
  }
  proposals: CompatibleProposalItem[]
  checks: {
    hasProposals: true
    hasDiscipline: true
    hasSources: boolean
  }
}

export function buildTeacherProposalFile(
  proposal: TeacherProposalDraft,
  profilo: ProfiloUtente | null,
): TeacherProposalFile {
  const item: CompatibleProposalItem = {
    id: proposal.id,
    unitaId: proposal.unitaId,
    discipline: proposal.disciplina,
    ordine: proposal.ordine,
    classe: profilo?.classe ?? '',
    type: proposal.targetField,
    status: 'proposta',
    decisione: null,
    testoAttuale: proposal.testoVigente,
    proposta: proposal.testoProposto,
    testoFinale: null,
    motivazione: proposal.motivazione,
    fonte: proposal.fonte,
    note: proposal.note || undefined,
  }

  return {
    schemaVersion: '1.0',
    fileType: 'teacher_proposal',
    appName: 'CurManLight',
    createdAt: new Date().toISOString(),
    role: 'teacher',
    discipline: proposal.disciplina,
    ordine: proposal.ordine,
    annoScolastico: profilo?.annoScolastico ?? '',
    profilo: {
      nome: profilo?.nome,
      cognome: profilo?.cognome,
      istituto: profilo?.istituto,
    },
    sourceContext: {
      currentFramework: 'D.M. 254/2012',
      revisionFramework: 'D.M. 221/2025',
    },
    counts: {
      total: 1,
      ok: 0,
      modifica: 1,
      nuovo: 0,
    },
    proposals: [item],
    checks: {
      hasProposals: true,
      hasDiscipline: true,
      hasSources: proposal.fonte.trim().length > 0,
    },
    humanValidationRequired: true,
  }
}

function safeFilePart(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 48)
}

export function teacherProposalFilename(proposal: TeacherProposalDraft) {
  const discipline = safeFilePart(proposal.disciplina) || 'disciplina'
  const unit = safeFilePart(proposal.unitaId) || 'unita'
  return `curmanlight-proposta-${discipline}-${unit}.cml`
}

export function downloadTeacherProposal(
  proposal: TeacherProposalDraft,
  profilo: ProfiloUtente | null,
) {
  downloadCml(buildTeacherProposalFile(proposal, profilo), teacherProposalFilename(proposal))
}
