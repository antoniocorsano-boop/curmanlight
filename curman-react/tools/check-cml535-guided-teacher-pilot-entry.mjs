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
  if (!source.includes(expected)) {
    throw new Error(`${label}: missing "${expected}"`)
  }
}

function assertNotContains(source, forbidden, label) {
  if (source.includes(forbidden)) {
    throw new Error(`${label}: forbidden "${forbidden}"`)
  }
}

const app = read('src/App.tsx')
const state = read('src/types/state.ts')
const home = read('src/views/HomeView.tsx')
const pilotView = read('src/views/GuidedTeacherPilotView.tsx')
const sidebar = read('src/components/layout/Sidebar.tsx')
const historicalRuntime = readRepo('index.html') + readRepo('_published_snapshot/netlify-current/index.html') + readRepo('sw.js') + readRepo('_published_snapshot/netlify-current/sw.js')

assertContains(state, "'pilot-guidato-docenti'", 'ViewId')
assertContains(state, 'Prova guidata docenti', 'view title')
assertContains(state, 'user-check', 'navigation icon')
assertContains(sidebar, 'UserCheck', 'sidebar icon')
assertContains(app, 'GuidedTeacherPilotView', 'app route import')
assertContains(app, "'pilot-guidato-docenti': <GuidedTeacherPilotView />", 'app route registration')

assertContains(home, 'Partecipa alla prova guidata', 'home entry title')
assertContains(home, 'Esplora alcune funzioni di CurManLight', 'home entry support text')
assertContains(home, "setVista('pilot-guidato-docenti')", 'home entry destination')

assertContains(pilotView, 'Prova guidata per docenti', 'pilot intro title')
assertContains(pilotView, 'Questa prova serve a capire se lo strumento e chiaro, utile e adatto al lavoro reale dei docenti.', 'pilot purpose')
assertContains(pilotView, 'non inserire nomi o dati personali reali', 'personal data rule')
assertContains(pilotView, "non modificano automaticamente il curricolo d'istituto", 'canonical curriculum rule')
assertContains(pilotView, 'Inizia la prova', 'primary action')
assertContains(pilotView, 'Torna alla Home', 'home return action')
assertContains(pilotView, 'Compito 1', 'first task number')
assertContains(pilotView, 'Apri la Home e osserva da dove inizieresti', 'first task instruction')
assertContains(pilotView, 'Vai alla Home', 'task app action')
assertContains(pilotView, 'Torna alle regole', 'return to pilot intro')
assertContains(pilotView, "setVista('home')", 'safe exit to home')
assertContains(pilotView, "setStep('intro')", 'safe return to intro')

for (const forbidden of ['fetch(', 'XMLHttpRequest', 'navigator.sendBeacon', 'analytics', 'telemetry', 'localStorage.setItem']) {
  assertNotContains(pilotView, forbidden, 'no remote or persistent pilot collection')
}

for (const forbidden of ['Prova guidata per docenti', 'Partecipa alla prova guidata', 'pilot-guidato-docenti']) {
  assertNotContains(historicalRuntime, forbidden, 'historical runtime untouched by CML-535')
}

console.log('CML-535 guided teacher pilot entry check passed')
