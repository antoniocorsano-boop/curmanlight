import type { UnitaApprendimento } from '@/types/curriculum'
import type { GapTargetField } from '@/types/gap'

export const GAP_FIELD_LABELS: Record<GapTargetField, string> = {
  traguardo: 'Traguardo',
  obiettivi: 'Obiettivi',
  conoscenze: 'Conoscenze',
  abilita: 'Abilità',
  evidenze: 'Evidenze',
  criteriValutazione: 'Criteri di valutazione',
}

const ARRAY_FIELDS: GapTargetField[] = ['obiettivi', 'conoscenze', 'abilita', 'evidenze', 'criteriValutazione']

export function getUnitFieldText(unita: UnitaApprendimento, field: GapTargetField): string {
  if (field === 'traguardo') return unita.traguardo
  return unita[field].join('; ')
}

export function composeUnitText(
  unita: UnitaApprendimento,
  targetField: GapTargetField,
  replacement: string,
): string {
  const fieldValue = (field: GapTargetField): string => {
    if (field === targetField) return replacement.trim()
    return getUnitFieldText(unita, field)
  }

  return [
    `Traguardo: ${fieldValue('traguardo')}`,
    `Obiettivi: ${fieldValue('obiettivi')}`,
    `Conoscenze: ${fieldValue('conoscenze')}`,
    `Abilità: ${fieldValue('abilita')}`,
    `Evidenze: ${fieldValue('evidenze')}`,
    `Criteri di valutazione: ${fieldValue('criteriValutazione')}`,
  ].join('\n')
}

export function isArrayGapField(field: GapTargetField): boolean {
  return ARRAY_FIELDS.includes(field)
}
