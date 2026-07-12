import type { UnitaApprendimento } from '@/types/curriculum'
import type { GapEntry, GapTargetField } from '@/types/gap'

export type CurriculumFieldValue = string | string[]

const ARRAY_FIELDS: readonly GapTargetField[] = [
  'obiettivi',
  'conoscenze',
  'abilita',
  'evidenze',
  'criteriValutazione',
]

export function isArrayField(field: GapTargetField): boolean {
  return ARRAY_FIELDS.includes(field)
}

export function getCurrentFieldValue(
  unit: UnitaApprendimento,
  targetField: GapTargetField,
): CurriculumFieldValue {
  if (targetField === 'traguardo') return unit.traguardo
  return [...unit[targetField]]
}

function parseListValue(value: string): string[] {
  return value
    .split(/\r?\n|;/)
    .map(item => item.trim())
    .filter(Boolean)
}

export function normalizeFieldValue(
  targetField: GapTargetField,
  value: CurriculumFieldValue,
): CurriculumFieldValue {
  if (targetField === 'traguardo') {
    if (typeof value !== 'string') throw new Error('Il campo traguardo richiede un valore testuale.')
    const normalized = value.trim()
    if (!normalized) throw new Error('Il campo traguardo non può essere vuoto.')
    return normalized
  }

  const normalized = Array.isArray(value)
    ? value.map(item => item.trim()).filter(Boolean)
    : parseListValue(value)

  if (!normalized.length) throw new Error(`Il campo ${targetField} richiede almeno un elemento.`)
  return normalized
}

export function normalizeProposedFieldValue(entry: GapEntry): CurriculumFieldValue {
  return normalizeFieldValue(entry.targetField, entry.proposto)
}

export function applyFieldDecisionToUnit(
  unit: UnitaApprendimento,
  targetField: GapTargetField,
  decidedValue: CurriculumFieldValue,
): UnitaApprendimento {
  const normalized = normalizeFieldValue(targetField, decidedValue)

  if (targetField === 'traguardo') {
    return { ...unit, traguardo: normalized as string }
  }

  return {
    ...unit,
    [targetField]: [...(normalized as string[])],
  }
}

export function composeCandidateUnitSnapshot(
  unit: UnitaApprendimento,
  targetField: GapTargetField,
  decidedValue: CurriculumFieldValue,
): UnitaApprendimento {
  return applyFieldDecisionToUnit(unit, targetField, decidedValue)
}

export function serializeFieldValue(value: CurriculumFieldValue): string {
  return Array.isArray(value) ? value.join('; ') : value
}
