import { readFileSync } from 'node:fs'
import { join } from 'node:path'

const root = process.cwd().endsWith('curman-react') ? process.cwd() : join(process.cwd(), 'curman-react')

function read(relativePath) {
  return readFileSync(join(root, relativePath), 'utf8')
}

function assert(condition, message) {
  if (!condition) throw new Error(message)
}

const view = read('src/views/GuidedTeacherPilotView.tsx')
const packageJson = JSON.parse(read('package.json'))

for (const expected of [
  'type PilotObservation',
  'sessionPilotObservations',
  'Che cosa hai osservato?',
  'Che cosa miglioreresti?',
  'Annotazioni del passaggio',
  'restano nella sessione corrente e non vengono inviate',
  'Cancella annotazioni della sessione',
  'maxLength={1200}',
  "updateObservation('evidence'",
  "updateObservation('opinion'",
]) {
  assert(view.includes(expected), `Contratto CML-537 mancante: ${expected}`)
}

for (const forbidden of [
  'localStorage',
  'sessionStorage',
  'fetch(',
  'XMLHttpRequest',
  'navigator.sendBeacon',
  'downloadMarkdown',
  'registro-decisioni',
]) {
  assert(!view.includes(forbidden), `CML-537 non deve introdurre: ${forbidden}`)
}

assert(
  packageJson.scripts?.['test:cml537'] === 'node tools/check-cml537-guided-pilot-observation-capture.mjs',
  'Script npm test:cml537 mancante o non coerente',
)

const textareas = (view.match(/<textarea/g) ?? []).length
assert(textareas === 2, `Attese 2 aree di annotazione, trovate ${textareas}`)

console.log('CML-537 guided pilot observation capture contract: PASS')
