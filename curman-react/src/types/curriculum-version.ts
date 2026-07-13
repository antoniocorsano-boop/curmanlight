export type CurriculumFramework = 'IN_2012' | 'IN_2025' | 'UNSPECIFIED'
export type CurriculumVersionScope = 'nazionale' | 'istituto' | 'repository'
export type CurriculumVersionLifecycleStatus =
  | 'disponibile'
  | 'in_preparazione'
  | 'in_revisione'
  | 'sostituita'
  | 'archiviata'

export type CurriculumDeliberationStatus =
  | 'non_applicabile'
  | 'bozza'
  | 'proposta_dipartimentale'
  | 'validata_referente'
  | 'approvata_collegio'
  | 'adottata_istituto'
  | 'revocata'

export interface CurriculumVersionDescriptor {
  versionId: string
  label: string
  framework: CurriculumFramework
  scope: CurriculumVersionScope
  institutionId: string | null
  discipline: string
  order: 'Infanzia' | 'Primaria' | 'Secondaria' | 'Tutti'
  classBand: string | null
  academicYearFrom: string | null
  academicYearTo: string | null
  contentRef: string
  sourceRefs: string[]
  lifecycleStatus: CurriculumVersionLifecycleStatus
  deliberationStatus: CurriculumDeliberationStatus
  supersedesVersionId: string | null
  derivedFromVersionId: string | null
  createdAt: string | null
  updatedAt: string | null
  notes: string | null
}

export interface CurriculumVersionRegistry {
  schemaVersion: 'cml-curriculum-version-registry-v1'
  generatedAt: string | null
  versions: CurriculumVersionDescriptor[]
}
