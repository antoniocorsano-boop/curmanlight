import type { GapStatus, DecisioneValore } from './gap'
import type { Ordine, OrdineEsteso } from './curriculum'

export interface ProposalItem {
  unitaId: string
  status: GapStatus
  testoAttuale: string
  proposta: string
  decisione: DecisioneValore
  testoFinale: string | null
  note?: string
}

export type DepartmentHandlingValue =
  | 'accettata'
  | 'respinta'
  | 'modificata'
  | 'rinviata'
  | 'confluita_nella_sintesi'
  | 'riformulata_dal_dipartimento'
  | 'assorbita_in_altra_proposta'
  | 'da_chiarire'

export interface HandlingItem {
  proposalId: string
  handling: DepartmentHandlingValue
  note?: string
  testoModificato?: string
  timestamp: string
}

export interface ValidationItem {
  proposalId: string
  validazione: 'confermata' | 'respinta' | 'sospesa'
  note?: string
  timestamp: string
}

export interface CmlTeacherProposal {
  schemaVersion: '1.0'
  fileType: 'teacher_proposal'
  appName: 'CurManLight'
  createdAt: string
  role: 'teacher'
  discipline: string
  ordine: Ordine
  annoScolastico: string
  profilo: { nome?: string; cognome?: string; istituto?: string }
  proposals: ProposalItem[]
  humanValidationRequired: true
}

export interface CmlDepartmentOutcome {
  schemaVersion: '1.0'
  fileType: 'department_outcome'
  appName: 'CurManLight'
  createdAt: string
  role: 'department'
  discipline: string
  disciplineWorkStatus: 'completed'
  disciplines: string[]
  ordine: OrdineEsteso
  annoScolastico: string
  proposalHandling: HandlingItem[]
  summary: { totale: number; accettate: number; respinte: number; modificate: number; rinviate: number }
  humanValidationRequired: true
}

export interface CmlReferentValidation {
  schemaVersion: '1.0'
  fileType: 'referent_validation'
  appName: 'CurManLight'
  createdAt: string
  role: 'referent'
  disciplines: string[]
  annoScolastico: string
  validations: ValidationItem[]
  summary: { totale: number; confermate: number; respinte: number; sospese: number }
  humanValidationRequired: true
}

export type CmlFile = CmlTeacherProposal | CmlDepartmentOutcome | CmlReferentValidation