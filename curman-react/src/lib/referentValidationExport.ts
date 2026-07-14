import { downloadCml } from '@/lib/cml'
import type { DepartmentOutcomeImportRecord } from '@/lib/departmentOutcomeImport'
import type { CmlReferentValidation, ValidationItem } from '@/types/cml'
import type { ReferentValidationMap } from '@/types/referentValidation'

export type ReferentValidationExportReadiness = {
  imported: number
  validated: number
  pending: number
  ready: boolean
}

export type ReferentValidationFile = CmlReferentValidation & {
  sourceOutcomes: Array<{
    sourceFingerprint: string
    sourceFileName: string
    discipline: string
    ordine: string
    annoScolastico: string
    proposalId: string
  }>
  checks: {
    hasValidations: true
    pendingExcluded: number
  }
}

function validationKey(fingerprint: string, proposalId: string) {
  return `${fingerprint}:${proposalId}`
}

function validRecords(records: DepartmentOutcomeImportRecord[]) {
  return records.filter(record => record.status === 'valid' && record.model && record.fingerprint)
}

export function getReferentValidationExportReadiness(
  records: DepartmentOutcomeImportRecord[],
  validations: ReferentValidationMap,
): ReferentValidationExportReadiness {
  const imported = validRecords(records).reduce((total, record) => total + record.model!.proposalHandling.length, 0)
  const validated = validRecords(records).reduce((total, record) => total + record.model!.proposalHandling.filter(item => validations[validationKey(record.fingerprint!, item.proposalId)]).length, 0)
  return { imported, validated, pending: imported - validated, ready: validated > 0 }
}

export function buildReferentValidationFile(
  records: DepartmentOutcomeImportRecord[],
  validations: ReferentValidationMap,
): ReferentValidationFile {
  const sources = validRecords(records).flatMap(record => record.model!.proposalHandling.map(item => ({
    record,
    item,
    validation: validations[validationKey(record.fingerprint!, item.proposalId)] ?? null,
  }))).filter(entry => entry.validation)

  if (sources.length === 0) throw new Error('Non ci sono validazioni del Referente da esportare.')

  const disciplines = [...new Set(sources.map(entry => entry.record.model!.discipline))].sort()
  const years = [...new Set(sources.map(entry => entry.record.model!.annoScolastico).filter(Boolean))]

  const validationItems: ValidationItem[] = sources.map(entry => ({
    proposalId: entry.item.proposalId,
    validazione: entry.validation!.value,
    note: entry.validation!.note || undefined,
    timestamp: entry.validation!.validatedAt,
  }))

  return {
    schemaVersion: '1.0',
    fileType: 'referent_validation',
    appName: 'CurManLight',
    createdAt: new Date().toISOString(),
    role: 'referent',
    disciplines,
    annoScolastico: years.length === 1 ? years[0] : years.join(', '),
    validations: validationItems,
    summary: {
      totale: validationItems.length,
      confermate: validationItems.filter(item => item.validazione === 'confermata').length,
      respinte: validationItems.filter(item => item.validazione === 'respinta').length,
      sospese: validationItems.filter(item => item.validazione === 'sospesa').length,
    },
    sourceOutcomes: sources.map(entry => ({
      sourceFingerprint: entry.record.fingerprint!,
      sourceFileName: entry.record.fileName,
      discipline: entry.record.model!.discipline,
      ordine: entry.record.model!.ordine,
      annoScolastico: entry.record.model!.annoScolastico,
      proposalId: entry.item.proposalId,
    })),
    checks: {
      hasValidations: true,
      pendingExcluded: getReferentValidationExportReadiness(records, validations).pending,
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
    .slice(0, 56)
}

export function referentValidationFilename(records: DepartmentOutcomeImportRecord[]) {
  const available = validRecords(records)
  const disciplines = [...new Set(available.map(record => record.model!.discipline))]
  const years = [...new Set(available.map(record => record.model!.annoScolastico).filter(Boolean))]
  const discipline = disciplines.length === 1 ? safeFilePart(disciplines[0]) : 'multidisciplinare'
  const year = safeFilePart(years.length === 1 ? years[0] : years.join('-')) || 'anno-scolastico'
  return `curmanlight-validazione-referente-${discipline}-${year}.cml`
}

export function downloadReferentValidation(
  records: DepartmentOutcomeImportRecord[],
  validations: ReferentValidationMap,
) {
  downloadCml(buildReferentValidationFile(records, validations), referentValidationFilename(records))
}
