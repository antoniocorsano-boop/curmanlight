import { readFileSync } from 'node:fs'
import { join } from 'node:path'

const root = process.cwd().endsWith('curman-react') ? process.cwd() : join(process.cwd(), 'curman-react')
const repoRoot = process.cwd().endsWith('curman-react') ? join(process.cwd(), '..') : process.cwd()

function read(relativePath) {
  return readFileSync(join(root, relativePath), 'utf8')
}

function readRepo(relativePath) {
  return readFileSync(join(repoRoot, relativePath), 'utf8')
}

function assertContains(source, expected, label) {
  if (!source.includes(expected)) throw new Error(`${label}: missing "${expected}"`)
}

function assertNotContains(source, forbidden, label) {
  if (source.includes(forbidden)) throw new Error(`${label}: forbidden "${forbidden}"`)
}

const pilotView = read('src/views/GuidedTeacherPilotView.tsx')
const packageJson = read('package.json')
const historicalRuntime = readRepo('index.html') + readRepo('_published_snapshot/netlify-current/index.html') + readRepo('sw.js') + readRepo('_published_snapshot/netlify-current/sw.js')

assertContains(packageJson, '"test:cml536": "node tools/check-cml536-guided-teacher-pilot-step-flow.mjs"', 'npm script')
assertContains(pilotView, 'PILOT_TASKS', 'task list')
assertContains(pilotView, "id: 'home-orientation'", 'task 1 id')
assertContains(pilotView, "id: 'curriculum-consultation'", 'task 2 id')
assertContains(pilotView, "id: 'teacher-proposal'", 'task 3 id')
assertContains(pilotView, "id: 'validation-passage'", 'task 4 id')

for (const label of [
  'Orientarsi nella Home',
  'Consultare una disciplina',
  'Avviare una proposta',
  'Riconoscere il passaggio di validazione',
]) {
  assertContains(pilotView, label, `task label ${label}`)
}

for (const text of [
  'Passaggio',
  'Precedente',
  'Continua',
  'Vai alla funzione',
  'Esci dalla prova',
  'Torna alle regole',
  'Riprendi la prova',
  "nessuna azione modifica automaticamente il curricolo d'istituto",
]) {
  assertContains(pilotView, text, `flow text ${text}`)
}

for (const destination of [
  "destination: 'home'",
  "destination: 'consultazione'",
  "destination: 'revisione'",
  "destination: 'processo'",
]) {
  assertContains(pilotView, destination, `task destination ${destination}`)
}

assertContains(pilotView, "useState<number>(sessionPilotTaskIndex ?? 0)", 'local current step state')
assertContains(pilotView, 'setLastVisitedTaskIndex', 'session-only resume state')
assertContains(pilotView, 'setVista(currentTask.destination)', 'go to operational view')
assertContains(pilotView, "setStep('tasks')", 'resume task flow')
assertContains(pilotView, "setVista('home')", 'safe exit')

for (const forbidden of [
  'localStorage',
  'sessionStorage',
  'fetch(',
  'XMLHttpRequest',
  'navigator.sendBeacon',
  'analytics',
  'telemetry',
  'download',
  'serialize',
  'Registro decisioni',
]) {
  assertNotContains(pilotView, forbidden, 'no persistence/export/remote analysis')
}

for (const forbidden of [
  'Consultare una disciplina',
  'Avviare una proposta',
  'Riconoscere il passaggio di validazione',
]) {
  assertNotContains(historicalRuntime, forbidden, 'historical runtime unchanged by CML-536')
}

console.log('CML-536 guided teacher pilot step flow check passed')
