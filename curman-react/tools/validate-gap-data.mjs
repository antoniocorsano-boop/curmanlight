import { existsSync, readFileSync, readdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..', '..')
const GAP_DIR = join(ROOT, 'content', 'gap')
const CURRICULUM_DIR = join(ROOT, 'content', 'curriculum')
const allowedStatuses = new Set(['proposta', 'non_validato'])

function fail(message) {
  console.error(`✗ ${message}`)
  process.exitCode = 1
}

const files = existsSync(GAP_DIR)
  ? readdirSync(GAP_DIR).filter(file => file.endsWith('.gap.json')).sort()
  : []

if (files.length === 0) {
  console.log('Gap data: 0 pacchetti canonici. Fondazione valida; B03 resta non azionabile.')
  process.exit(0)
}

for (const file of files) {
  const slug = file.replace(/\.gap\.json$/i, '')
  const curriculumPath = join(CURRICULUM_DIR, `${slug}.normalized.json`)
  if (!existsSync(curriculumPath)) {
    fail(`${file}: curriculum normalizzato mancante per ${slug}`)
    continue
  }

  let gap
  let curriculum
  try {
    gap = JSON.parse(readFileSync(join(GAP_DIR, file), 'utf8'))
    curriculum = JSON.parse(readFileSync(curriculumPath, 'utf8'))
  } catch (error) {
    fail(`${file}: JSON non valido (${error.message})`)
    continue
  }

  if (gap.schemaVersion !== 'gap-v1') fail(`${file}: schemaVersion deve essere gap-v1`)
  if (gap.humanValidationRequired !== true) fail(`${file}: humanValidationRequired deve essere true`)
  if (!gap.disciplina || typeof gap.disciplina !== 'string') fail(`${file}: disciplina mancante`)
  if (!gap.source || !gap.source.title || !gap.source.reference || !gap.source.retrievedAt) {
    fail(`${file}: metadati source incompleti`)
  }
  if (!Array.isArray(gap.entries) || gap.entries.length === 0) {
    fail(`${file}: entries deve contenere almeno una proposta`)
    continue
  }

  const unitIds = new Set((curriculum.unitaApprendimento ?? []).map(unit => unit.id))
  const seen = new Set()
  for (const [index, entry] of gap.entries.entries()) {
    const prefix = `${file} entries[${index}]`
    if (!entry.unitaId || !unitIds.has(entry.unitaId)) fail(`${prefix}: unitaId non presente nel curriculum`)
    if (seen.has(entry.unitaId)) fail(`${prefix}: unitaId duplicato`)
    seen.add(entry.unitaId)
    if (!allowedStatuses.has(entry.status)) fail(`${prefix}: status non azionabile`)
    if (!entry.proposto?.trim()) fail(`${prefix}: proposto mancante`)
    if (!entry.testoOriginale?.trim()) fail(`${prefix}: testoOriginale mancante`)
    if (!entry.motivazione?.trim()) fail(`${prefix}: motivazione mancante`)
    if (!Array.isArray(entry.sourceRefs) || entry.sourceRefs.length === 0 || entry.sourceRefs.some(ref => !String(ref).trim())) {
      fail(`${prefix}: sourceRefs mancanti`)
    }
    if (entry.proposto && entry.testoOriginale) {
      const normalizza = s => s.replace(/\s+/g, ' ').trim().toLowerCase()
      if (normalizza(entry.proposto) === normalizza(entry.testoOriginale)) {
        fail(`${prefix}: proposto identico a testoOriginale dopo normalizzazione — nessuna differenza reale`)
      }
    }
  }

  if (!process.exitCode) console.log(`✓ ${file}: ${gap.entries.length} proposte valide`)
}

if (!process.exitCode) console.log(`Gap data validation PASS: ${files.length} pacchetti`)
