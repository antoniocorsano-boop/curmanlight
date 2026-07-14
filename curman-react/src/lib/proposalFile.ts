import type { TeacherProposalDraft } from '@/types/proposal'

export const TEACHER_PROPOSAL_FILE_SCHEMA = 'cml-teacher-proposal-v1' as const

export type TeacherProposalFile = {
  schema: typeof TEACHER_PROPOSAL_FILE_SCHEMA
  kind: 'teacher_proposal'
  exportedAt: string
  product: 'CurManLight React'
  proposal: TeacherProposalDraft
}

export function buildTeacherProposalFile(proposal: TeacherProposalDraft): TeacherProposalFile {
  return {
    schema: TEACHER_PROPOSAL_FILE_SCHEMA,
    kind: 'teacher_proposal',
    exportedAt: new Date().toISOString(),
    product: 'CurManLight React',
    proposal,
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

export function downloadTeacherProposal(proposal: TeacherProposalDraft) {
  const payload = buildTeacherProposalFile(proposal)
  const blob = new Blob([JSON.stringify(payload, null, 2)], {
    type: 'application/vnd.curmanlight.proposal+json;charset=utf-8',
  })
  const url = URL.createObjectURL(blob)
  const anchor = document.createElement('a')
  anchor.href = url
  anchor.download = teacherProposalFilename(proposal)
  document.body.appendChild(anchor)
  anchor.click()
  anchor.remove()
  URL.revokeObjectURL(url)
}
