import applicabilityData from '@/data/temporal-applicability.json'

export type CurriculumFramework = 'IN_2012' | 'IN_2025'
export type SchoolOrder = 'Infanzia' | 'Primaria' | 'Secondaria'
export type ApplicabilityStatus = 'applicabile' | 'da_verificare'
export type ApplicabilityRuleType =
  | 'pre_transizione'
  | 'avvio_infanzia'
  | 'coorte_progressiva'
  | 'anticipazione_transitoria'
  | 'piena_applicazione'
  | 'fallback'

export interface ApplicabilityContext {
  academicYear: string
  order: SchoolOrder
  classYear?: number | null
  discipline?: string | null
}

export interface ApplicabilityResolution {
  status: ApplicabilityStatus
  framework: CurriculumFramework | null
  ruleType: ApplicabilityRuleType
  message: string
  sourceRefs: string[]
}

interface ApplicabilityException {
  academicYear: string
  order: SchoolOrder
  classYear: number
  discipline: string
  framework: CurriculumFramework
  ruleType: 'anticipazione_transitoria'
  sourceRefs: string[]
}

function parseAcademicYearStart(academicYear: string): number | null {
  const match = /^(\d{4})\/(\d{4})$/.exec(academicYear.trim())
  if (!match) return null

  const start = Number(match[1])
  const end = Number(match[2])
  return end === start + 1 ? start : null
}

function normalizeDiscipline(value: string | null | undefined): string {
  return value?.trim().toLocaleLowerCase('it-IT') ?? ''
}

function frameworkLabel(framework: CurriculumFramework): string {
  return applicabilityData.normativeFrameworks[framework].label
}

function resolved(
  framework: CurriculumFramework,
  ruleType: ApplicabilityRuleType,
  message: string,
  sourceRefs: string[],
): ApplicabilityResolution {
  return {
    status: 'applicabile',
    framework,
    ruleType,
    message,
    sourceRefs,
  }
}

function fallback(): ApplicabilityResolution {
  return {
    status: 'da_verificare',
    framework: null,
    ruleType: 'fallback',
    message: applicabilityData.fallback.message,
    sourceRefs: [],
  }
}

export function resolveCurriculumApplicability(
  context: ApplicabilityContext,
): ApplicabilityResolution {
  const startYear = parseAcademicYearStart(context.academicYear)
  if (startYear === null) return fallback()

  if (startYear < 2026) {
    return resolved(
      'IN_2012',
      'pre_transizione',
      `${frameworkLabel('IN_2012')} applicabili prima dell'avvio della transizione 2026/2027.`,
      applicabilityData.normativeFrameworks.IN_2012.sourceRefs,
    )
  }

  if (context.order === 'Infanzia') {
    return resolved(
      'IN_2025',
      startYear === 2026 ? 'avvio_infanzia' : 'piena_applicazione',
      `${frameworkLabel('IN_2025')} applicabili a tutte le sezioni dell'infanzia dal 2026/2027.`,
      applicabilityData.normativeFrameworks.IN_2025.sourceRefs,
    )
  }

  const classYear = context.classYear
  const maxClass = context.order === 'Primaria' ? 5 : 3
  if (!Number.isInteger(classYear) || classYear === null || classYear < 1 || classYear > maxClass) {
    return fallback()
  }

  const exception = (applicabilityData.exceptions as ApplicabilityException[]).find(
    (entry) =>
      entry.academicYear === context.academicYear &&
      entry.order === context.order &&
      entry.classYear === classYear &&
      normalizeDiscipline(entry.discipline) === normalizeDiscipline(context.discipline),
  )

  if (exception) {
    return resolved(
      exception.framework,
      exception.ruleType,
      `${frameworkLabel(exception.framework)} applicabili per anticipazione transitoria a ${exception.discipline}, classe ${classYear}ª ${context.order.toLocaleLowerCase('it-IT')}.`,
      exception.sourceRefs,
    )
  }

  const fullApplicationYear = context.order === 'Primaria' ? 2030 : 2028
  if (startYear >= fullApplicationYear) {
    return resolved(
      'IN_2025',
      'piena_applicazione',
      `${frameworkLabel('IN_2025')} pienamente applicabili per questo ordine di scuola.`,
      applicabilityData.normativeFrameworks.IN_2025.sourceRefs,
    )
  }

  const highestNewFrameworkClass = Math.min(maxClass, startYear - 2025)
  if (classYear <= highestNewFrameworkClass) {
    return resolved(
      'IN_2025',
      'coorte_progressiva',
      `${frameworkLabel('IN_2025')} applicabili alla classe ${classYear}ª per progressione della coorte avviata dal 2026/2027.`,
      applicabilityData.normativeFrameworks.IN_2025.sourceRefs,
    )
  }

  return resolved(
    'IN_2012',
    'coorte_progressiva',
    `${frameworkLabel('IN_2012')} ancora applicabili alla classe ${classYear}ª fino alla conclusione del percorso della coorte.`,
    applicabilityData.normativeFrameworks.IN_2012.sourceRefs,
  )
}
