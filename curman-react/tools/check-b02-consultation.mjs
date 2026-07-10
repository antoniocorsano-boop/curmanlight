import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const read = path => readFile(resolve(root, path), 'utf8')
const [view, card, sync] = await Promise.all([
  read('src/views/ConsultazioneView.tsx'),
  read('src/components/curriculum/UnitaCard.tsx'),
  read('tools/sync-curriculum-data.mjs'),
])

function requireText(source, text, file) {
  if (!source.includes(text)) throw new Error(`${file}: contenuto obbligatorio assente: ${text}`)
}

for (const label of ['Disciplina', 'Ordine di scuola', 'Nucleo', 'Azzera filtri', 'Curricolo di riferimento', 'Richiede validazione umana', 'Nessun risultato']) {
  requireText(view, label, 'ConsultazioneView.tsx')
}
requireText(view, 'readOnly', 'ConsultazioneView.tsx')
requireText(card, 'aria-expanded', 'UnitaCard.tsx')
for (const label of ['Competenza', 'Obiettivi', 'Conoscenze', 'Abilità', 'Evidenze', 'Criteri di valutazione', 'Fonte', 'Validazione']) {
  requireText(card, label, 'UnitaCard.tsx')
}
for (const field of ['schemaVersion', 'humanValidationRequired', 'source', 'readiness']) {
  requireText(sync, field, 'sync-curriculum-data.mjs')
}
if (view.includes('DecisioneActions') || view.includes('useRevisioneStore')) {
  throw new Error('ConsultazioneView.tsx: la consultazione non deve contenere azioni decisionali')
}
console.log('B02 consultation and understanding contract: PASS')
