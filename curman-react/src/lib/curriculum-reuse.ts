import type { UnitaApprendimento } from '@/types/curriculum'

export type CurriculumReusePayload = {
  competenze: string[]
  obiettivi: string[]
  contenuti: string[]
  sourceUnitIds: string[]
}

function clean(values: Array<string | null | undefined>) {
  return values.map(value => value?.trim() ?? '').filter(Boolean)
}

export function buildCurriculumReusePayload(units: UnitaApprendimento[]): CurriculumReusePayload {
  return {
    competenze: unique(clean(units.flatMap(unit => [unit.competenza, unit.traguardo]))),
    obiettivi: unique(clean(units.flatMap(unit => unit.obiettivi))),
    contenuti: unique(clean(units.flatMap(unit => [unit.nucleo, ...unit.conoscenze, ...unit.abilita]))),
    sourceUnitIds: unique(units.map(unit => unit.id)),
  }
}

export function appendUniqueLines(current: string, values: string[]) {
  const existing = current
    .split('\n')
    .map(value => value.trim())
    .filter(Boolean)
  const existingKeys = new Set(existing.map(normalize))
  const additions = values.filter(value => !existingKeys.has(normalize(value)))
  return [...existing, ...additions].join('\n')
}

export function mergeSourceIds(current: string[] | undefined, additions: string[]) {
  return unique([...(current ?? []), ...additions])
}

export function filterUnitsForContext(units: UnitaApprendimento[], ordine: string, classe: string) {
  const byOrder = ordine === 'Tutti' ? units : units.filter(unit => unit.ordine === ordine)
  const normalizedClass = normalize(classe)
  if (!normalizedClass) return byOrder

  const classMatches = byOrder.filter(unit => unit.classe && normalize(unit.classe) === normalizedClass)
  return classMatches.length > 0 ? classMatches : byOrder.filter(unit => !unit.classe)
}

function normalize(value: string) {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('it-IT').trim()
}

function unique(values: string[]) {
  const seen = new Set<string>()
  return values.filter(value => {
    const key = normalize(value)
    if (!key || seen.has(key)) return false
    seen.add(key)
    return true
  })
}
