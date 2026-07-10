import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')

async function read(path) {
  return readFile(resolve(root, path), 'utf8')
}

function requireText(source, text, file) {
  if (!source.includes(text)) {
    throw new Error(`${file}: contenuto obbligatorio assente: ${text}`)
  }
}

function forbidText(source, text, file) {
  if (source.includes(text)) {
    throw new Error(`${file}: contenuto non ammesso nella navigazione operativa: ${text}`)
  }
}

const [home, state, sidebar, header, app, settings] = await Promise.all([
  read('src/views/HomeView.tsx'),
  read('src/types/state.ts'),
  read('src/components/layout/Sidebar.tsx'),
  read('src/components/layout/Header.tsx'),
  read('src/App.tsx'),
  read('src/views/ImpostazioniView.tsx'),
])

for (const label of [
  'Consulta il curricolo',
  'Prepara una progettazione',
  'Proponi un aggiornamento',
  'Esporta un documento',
  'Vai a Impostazioni',
]) {
  requireText(home, label, 'HomeView.tsx')
}

requireText(home, 'unavailable', 'HomeView.tsx')
requireText(home, 'destination="consultazione"', 'HomeView.tsx')
requireText(home, 'destination="revisione"', 'HomeView.tsx')
requireText(home, 'destination="esportazioni"', 'HomeView.tsx')
requireText(state, "id: 'impostazioni'", 'state.ts')
requireText(state, 'available: false', 'state.ts')
requireText(sidebar, 'NAVIGATION.filter(item => item.available)', 'Sidebar.tsx')
requireText(header, 'VIEW_TITLES[vistaAttiva]', 'Header.tsx')
requireText(app, 'ImpostazioniView', 'App.tsx')
requireText(settings, 'Salva il contesto', 'ImpostazioniView.tsx')
requireText(settings, 'Contesto aggiornato.', 'ImpostazioniView.tsx')

for (const label of ['Evidenze e valutazione', 'Programmazione annuale', 'UDA modello']) {
  forbidText(sidebar, `label: '${label}'`, 'Sidebar.tsx')
}

console.log('B01 entry and orientation contract: PASS')
