import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const read = file => fs.readFileSync(path.join(root, file), 'utf8')

const banner = read('src/components/curriculum/ApplicabilityContextBanner.tsx')
const consultation = read('src/views/ConsultazioneView.tsx')
const revision = read('src/views/RevisioneView.tsx')

const checks = [
  ['shared resolver used', banner.includes('resolveCurriculumApplicability')],
  ['consultation mode contract', banner.includes("mode === 'consultazione'")],
  ['revision mode contract', banner.includes("mode: 'consultazione' | 'revisione'")],
  ['fallback visible', banner.includes('Applicabilità da verificare')],
  ['institutional separation', banner.includes("non certifica che il curricolo d'istituto sia aggiornato, deliberato o approvato")],
  ['consultation mounts banner', consultation.includes('mode="consultazione"')],
  ['consultation names shown curriculum', consultation.includes('Curricolo mostrato')],
  ['consultation blocks automatic switch claim', consultation.includes('non cambia automaticamente')],
  ['revision mounts banner', revision.includes('mode="revisione"')],
  ['revision keeps comparison separate', banner.includes('Testo vigente, proposta e decisione restano separati')],
  ['revision blocks automatic application', banner.includes('nessuna proposta viene applicata automaticamente')],
]

for (const [label, passed] of checks) {
  if (!passed) throw new Error(`CML-480 contract failed: ${label}`)
}

console.log(`CML-480 transition-aware consultation/revision contract PASS (${checks.length}/${checks.length})`)
