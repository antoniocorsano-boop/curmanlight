import type { GapLayer, DecisioniMap, ProfiloUtente } from '@/types/gap'
import type { CmlTeacherProposal, CmlDepartmentOutcome, CmlFile, ProposalItem, HandlingItem } from '@/types/cml'
import type { Ordine } from '@/types/curriculum'

export type HandlingMap = Record<string, HandlingItem>

export function buildTeacherProposal(disciplina: string, gapLayer: GapLayer, decisioni: DecisioniMap, profilo: ProfiloUtente): CmlTeacherProposal {
  const proposals: ProposalItem[] = gapLayer.entries
    .filter(e => e.status !== 'vigente' && e.status !== 'archiviato')
    .map(entry => {
      const dec = decisioni[entry.unitaId]
      return { unitaId: entry.unitaId, status: entry.status, testoAttuale: entry.testoOriginale || '', proposta: entry.proposto, decisione: dec?.decisione ?? null, testoFinale: dec?.testoFinale ?? null, note: dec?.note }
    })
  return { schemaVersion: '1.0', fileType: 'teacher_proposal', appName: 'CurManLight', createdAt: new Date().toISOString(), role: 'teacher', discipline: disciplina, ordine: (profilo.ordine === 'Tutti' ? 'Primaria' : profilo.ordine) as Ordine, annoScolastico: profilo.annoScolastico, profilo: { nome: profilo.nome, cognome: profilo.cognome, istituto: profilo.istituto }, proposals, humanValidationRequired: true }
}

export function buildDepartmentOutcome(_proposals: ProposalItem[], handlings: HandlingMap, disciplines: string[], annoScolastico: string): CmlDepartmentOutcome {
  const handlingList = Object.values(handlings)
  const summary = { totale: handlingList.length, accettate: handlingList.filter(h => h.handling === 'accettata' || h.handling === 'confluita_nella_sintesi').length, respinte: handlingList.filter(h => h.handling === 'respinta' || h.handling === 'assorbita_in_altra_proposta').length, modificate: handlingList.filter(h => h.handling === 'modificata' || h.handling === 'riformulata_dal_dipartimento').length, rinviate: handlingList.filter(h => h.handling === 'rinviata' || h.handling === 'da_chiarire').length }
  const uniqueDisciplines = [...new Set(disciplines.filter(Boolean))]
  const discipline = uniqueDisciplines.length === 1 ? uniqueDisciplines[0] : 'Multidisciplinare'
  return { schemaVersion: '1.0', fileType: 'department_outcome', appName: 'CurManLight', createdAt: new Date().toISOString(), role: 'department', discipline, disciplineWorkStatus: 'completed', disciplines: uniqueDisciplines, ordine: 'Tutti', annoScolastico, proposalHandling: handlingList, summary, humanValidationRequired: true }
}

export function parseCmlFile(json: unknown): CmlFile | null {
  if (!json || typeof json !== 'object') return null
  const obj = json as Record<string, unknown>
  if (obj.appName !== 'CurManLight' || obj.schemaVersion !== '1.0') return null
  switch (obj.fileType) {
    case 'teacher_proposal': return Array.isArray(obj.proposals) ? obj as unknown as CmlTeacherProposal : null
    case 'department_outcome': return Array.isArray(obj.proposalHandling) ? obj as unknown as CmlDepartmentOutcome : null
    default: return null
  }
}

export function downloadCml(model: CmlFile, filename: string): void {
  const blob = new Blob([JSON.stringify(model, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename.endsWith('.cml') ? filename : `${filename}.cml`
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}