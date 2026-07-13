import { readFile } from 'node:fs/promises'

const component = await readFile(new URL('../src/components/evaluation/GuidedTeacherEvaluation.tsx', import.meta.url), 'utf8')
const home = await readFile(new URL('../src/views/HomeView.tsx', import.meta.url), 'utf8')

const required = [
  'curmanlight:guided-teacher-evaluation:v1',
  'cml-guided-teacher-evaluation-v1',
  'Esplora lo strumento e lascia le tue osservazioni',
  'localStorage',
  'Blob',
  'Esporta osservazioni',
  'Cancella il percorso locale',
  'Nessun dato viene inviato all’esterno',
]

const missing = required.filter(token => !component.includes(token))
if (!home.includes('<GuidedTeacherEvaluation />')) missing.push('Home integration')
if (/\bfetch\s*\(/.test(component)) missing.push('unexpected fetch()')

if (missing.length > 0) {
  console.error('CML-483 contract check failed:', missing.join(', '))
  process.exit(1)
}

console.log('CML-483 guided evaluation contract: PASS')
