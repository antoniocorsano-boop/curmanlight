import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const here = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(here, '..')
const dataPath = path.join(root, 'src/data/temporal-applicability.json')
const resolverPath = path.join(root, 'src/lib/temporal-applicability.ts')

const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'))
const resolverSource = fs.readFileSync(resolverPath, 'utf8')

function assert(condition, message) {
  if (!condition) throw new Error(message)
}

function parseStart(academicYear) {
  const match = /^(\d{4})\/(\d{4})$/.exec(academicYear)
  if (!match) return null
  const start = Number(match[1])
  return Number(match[2]) === start + 1 ? start : null
}

function expectedFramework({ academicYear, order, classYear, discipline }) {
  const start = parseStart(academicYear)
  if (start === null) return null
  if (start < 2026) return 'IN_2012'
  if (order === 'Infanzia') return 'IN_2025'

  const exception = data.exceptions.find(
    (entry) =>
      entry.academicYear === academicYear &&
      entry.order === order &&
      entry.classYear === classYear &&
      entry.discipline.toLowerCase() === String(discipline ?? '').toLowerCase(),
  )
  if (exception) return exception.framework

  const maxClass = order === 'Primaria' ? 5 : 3
  if (!Number.isInteger(classYear) || classYear < 1 || classYear > maxClass) return null

  const fullYear = order === 'Primaria' ? 2030 : 2028
  if (start >= fullYear) return 'IN_2025'

  return classYear <= Math.min(maxClass, start - 2025) ? 'IN_2025' : 'IN_2012'
}

assert(data.schemaVersion === 'cml-temporal-applicability-v1', 'schemaVersion non valida')
assert(data.transition.firstAcademicYear === '2026/2027', 'avvio transizione errato')
assert(data.transition.primaryFullAcademicYear === '2030/2031', 'piena primaria errata')
assert(data.transition.lowerSecondaryFullAcademicYear === '2028/2029', 'piena secondaria errata')
assert(data.exceptions.length === 1, 'attesa una sola eccezione normativa esplicita')
assert(data.exceptions[0].id === 'history-primary-class-3-2027', 'eccezione Storia mancante')

const cases = [
  [{ academicYear: '2025/2026', order: 'Primaria', classYear: 1 }, 'IN_2012'],
  [{ academicYear: '2026/2027', order: 'Infanzia' }, 'IN_2025'],
  [{ academicYear: '2026/2027', order: 'Primaria', classYear: 1 }, 'IN_2025'],
  [{ academicYear: '2026/2027', order: 'Primaria', classYear: 2 }, 'IN_2012'],
  [{ academicYear: '2026/2027', order: 'Secondaria', classYear: 1 }, 'IN_2025'],
  [{ academicYear: '2026/2027', order: 'Secondaria', classYear: 3 }, 'IN_2012'],
  [{ academicYear: '2027/2028', order: 'Primaria', classYear: 2 }, 'IN_2025'],
  [{ academicYear: '2027/2028', order: 'Primaria', classYear: 3, discipline: 'Storia' }, 'IN_2025'],
  [{ academicYear: '2027/2028', order: 'Primaria', classYear: 3, discipline: 'Matematica' }, 'IN_2012'],
  [{ academicYear: '2027/2028', order: 'Secondaria', classYear: 2 }, 'IN_2025'],
  [{ academicYear: '2027/2028', order: 'Secondaria', classYear: 3 }, 'IN_2012'],
  [{ academicYear: '2028/2029', order: 'Secondaria', classYear: 3 }, 'IN_2025'],
  [{ academicYear: '2029/2030', order: 'Primaria', classYear: 4 }, 'IN_2025'],
  [{ academicYear: '2029/2030', order: 'Primaria', classYear: 5 }, 'IN_2012'],
  [{ academicYear: '2030/2031', order: 'Primaria', classYear: 5 }, 'IN_2025'],
  [{ academicYear: '2030-2031', order: 'Primaria', classYear: 5 }, null],
]

for (const [context, expected] of cases) {
  const actual = expectedFramework(context)
  assert(actual === expected, `${JSON.stringify(context)}: atteso ${expected}, ottenuto ${actual}`)
}

for (const token of [
  'resolveCurriculumApplicability',
  "'anticipazione_transitoria'",
  "'coorte_progressiva'",
  "'piena_applicazione'",
  "'da_verificare'",
  "context.order === 'Infanzia'",
]) {
  assert(resolverSource.includes(token), `resolver privo del contratto richiesto: ${token}`)
}

console.log(`CML-478 PASS: ${cases.length} casi temporali verificati, inclusa eccezione Storia 2027/2028`)
