import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..', '..')
const CONTENT_DIR = join(ROOT, 'content', 'curriculum')
const DATA_DIR = join(__dirname, '..', 'src', 'data', 'curriculum')

function slugFromFilename(filename) {
  return filename.replace(/\.normalized\.json$/i, '')
}

if (!existsSync(DATA_DIR)) {
  mkdirSync(DATA_DIR, { recursive: true })
}

const files = readdirSync(CONTENT_DIR).filter(f => f.endsWith('.normalized.json'))

if (files.length === 0) {
  console.error('Nessun file normalized.json trovato in', CONTENT_DIR)
  process.exit(1)
}

for (const file of files) {
  const raw = readFileSync(join(CONTENT_DIR, file), 'utf-8')
  const data = JSON.parse(raw)

  const keep = {
    schemaVersion: data.schemaVersion,
    disciplina: data.disciplina,
    stato: data.stato,
    readiness: data.readiness,
    humanValidationRequired: data.humanValidationRequired,
    source: data.source,
    metaDiscipline: data.metaDiscipline,
    unitaApprendimento: data.unitaApprendimento,
    struttureSostanziali: data.struttureSostanziali,
    progressioneVerticale: data.progressioneVerticale,
    decisioniCurricolari: data.decisioniCurricolari,
  }

  const slug = slugFromFilename(file)
  const outPath = join(DATA_DIR, `${slug}.json`)
  writeFileSync(outPath, JSON.stringify(keep, null, 2), 'utf-8')
  console.log(`✓ ${file} → ${slug}.json (${keep.unitaApprendimento.length} unità)`)
}

console.log(`\nSincronizzazione completata: ${files.length} file`)
