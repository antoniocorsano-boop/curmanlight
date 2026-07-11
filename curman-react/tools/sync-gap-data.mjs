import { cpSync, existsSync, mkdirSync, readdirSync, rmSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..', '..')
const SOURCE_DIR = join(ROOT, 'content', 'gap')
const TARGET_DIR = join(__dirname, '..', 'src', 'data', 'gap')

mkdirSync(TARGET_DIR, { recursive: true })
for (const file of readdirSync(TARGET_DIR).filter(name => name.endsWith('.gap.json'))) {
  rmSync(join(TARGET_DIR, file))
}

const files = existsSync(SOURCE_DIR)
  ? readdirSync(SOURCE_DIR).filter(name => name.endsWith('.gap.json')).sort()
  : []

for (const file of files) {
  cpSync(join(SOURCE_DIR, file), join(TARGET_DIR, file))
  console.log(`✓ ${file} → src/data/gap/${file}`)
}

console.log(`Gap sync completato: ${files.length} pacchetti`)
