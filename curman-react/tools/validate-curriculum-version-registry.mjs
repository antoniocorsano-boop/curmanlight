import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const registryPath = path.join(root, 'src/data/curriculum-version-registry.json')
const registry = JSON.parse(fs.readFileSync(registryPath, 'utf8'))

const frameworks = new Set(['IN_2012', 'IN_2025', 'UNSPECIFIED'])
const scopes = new Set(['nazionale', 'istituto', 'repository'])
const orders = new Set(['Infanzia', 'Primaria', 'Secondaria', 'Tutti'])
const lifecycleStatuses = new Set(['disponibile', 'in_preparazione', 'in_revisione', 'sostituita', 'archiviata'])
const deliberationStatuses = new Set(['non_applicabile', 'bozza', 'proposta_dipartimentale', 'validata_referente', 'approvata_collegio', 'adottata_istituto', 'revocata'])
const academicYearPattern = /^\d{4}\/\d{4}$/
const versionIdPattern = /^(nazionale|istituto|repository):[A-Za-z0-9_:-]+$/
const errors = []

function fail(message) { errors.push(message) }
function isString(value) { return typeof value === 'string' }
function isNullableString(value) { return value === null || isString(value) }
function validAcademicYear(value) {
  if (value === null) return true
  if (!isString(value) || !academicYearPattern.test(value)) return false
  const [start, end] = value.split('/').map(Number)
  return end === start + 1
}

if (registry.schemaVersion !== 'cml-curriculum-version-registry-v1') fail('schemaVersion non supportata')
if (!(registry.generatedAt === null || !Number.isNaN(Date.parse(registry.generatedAt)))) fail('generatedAt non valido')
if (!Array.isArray(registry.versions)) fail('versions deve essere un array')

const versions = Array.isArray(registry.versions) ? registry.versions : []
const ids = new Set()
for (const [index, version] of versions.entries()) {
  const prefix = `versions[${index}]`
  if (!version || typeof version !== 'object' || Array.isArray(version)) {
    fail(`${prefix}: descrittore non valido`)
    continue
  }

  if (!isString(version.versionId) || !versionIdPattern.test(version.versionId)) fail(`${prefix}: versionId non valido`)
  else if (ids.has(version.versionId)) fail(`${prefix}: versionId duplicato`)
  else ids.add(version.versionId)

  for (const field of ['label', 'discipline', 'contentRef']) {
    if (!isString(version[field]) || version[field].trim() === '') fail(`${prefix}: ${field} obbligatorio`)
  }
  if (!frameworks.has(version.framework)) fail(`${prefix}: framework non valido`)
  if (!scopes.has(version.scope)) fail(`${prefix}: scope non valido`)
  if (!orders.has(version.order)) fail(`${prefix}: order non valido`)
  if (!lifecycleStatuses.has(version.lifecycleStatus)) fail(`${prefix}: lifecycleStatus non valido`)
  if (!deliberationStatuses.has(version.deliberationStatus)) fail(`${prefix}: deliberationStatus non valido`)

  for (const field of ['institutionId', 'classBand', 'supersedesVersionId', 'derivedFromVersionId', 'createdAt', 'updatedAt', 'notes']) {
    if (!isNullableString(version[field])) fail(`${prefix}: ${field} deve essere stringa o null`)
  }
  if (!validAcademicYear(version.academicYearFrom) || !validAcademicYear(version.academicYearTo)) fail(`${prefix}: intervallo anno scolastico non valido`)
  if (version.academicYearFrom && version.academicYearTo && version.academicYearFrom > version.academicYearTo) fail(`${prefix}: intervallo temporale invertito`)
  if (!Array.isArray(version.sourceRefs) || version.sourceRefs.some(ref => !isString(ref) || ref.trim() === '')) fail(`${prefix}: sourceRefs non valido`)

  if (version.scope === 'nazionale') {
    if (version.institutionId !== null) fail(`${prefix}: versione nazionale con institutionId`)
    if (version.framework === 'UNSPECIFIED') fail(`${prefix}: versione nazionale senza framework documentato`)
    if (version.deliberationStatus !== 'non_applicabile') fail(`${prefix}: versione nazionale con stato deliberativo`)
  }
  if (version.scope === 'istituto') {
    if (!isString(version.institutionId) || version.institutionId.trim() === '') fail(`${prefix}: versione d'istituto senza institutionId`)
    if (version.framework === 'UNSPECIFIED') fail(`${prefix}: versione d'istituto senza framework di derivazione`)
    if (version.deliberationStatus === 'non_applicabile') fail(`${prefix}: versione d'istituto senza stato deliberativo`)
  }
  if (version.scope === 'repository') {
    if (version.institutionId !== null) fail(`${prefix}: versione repository con institutionId`)
    if (version.deliberationStatus !== 'non_applicabile') fail(`${prefix}: versione repository con stato deliberativo`)
  }
}

for (const [index, version] of versions.entries()) {
  for (const relation of ['supersedesVersionId', 'derivedFromVersionId']) {
    const target = version[relation]
    if (target !== null && !ids.has(target)) fail(`versions[${index}]: ${relation} punta a una versione inesistente`)
    if (target === version.versionId) fail(`versions[${index}]: ${relation} autoreferenziale`)
  }
}

if (errors.length) {
  console.error(`CML-482 registry validation FAILED (${errors.length})`)
  for (const error of errors) console.error(`- ${error}`)
  process.exit(1)
}

console.log(`CML-482 curriculum version registry validation PASS (${versions.length} versioni)`)
