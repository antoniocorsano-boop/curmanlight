import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'

const home = await readFile(new URL('../src/views/HomeView.tsx', import.meta.url), 'utf8')
const settings = await readFile(new URL('../src/views/ImpostazioniView.tsx', import.meta.url), 'utf8')

assert.match(home, /resolveCurriculumApplicability/)
assert.match(home, /Curricolo applicabile/)
assert.match(home, /Indicazioni nazionali 2012/)
assert.match(home, /Indicazioni nazionali 2025/)
assert.match(home, /non certifica l’aggiornamento o l’approvazione del curricolo d’istituto/i)
assert.match(home, /Applicabilità da verificare/)
assert.match(home, /Imposta il contesto/)

assert.match(settings, /Classe o sezione/)
assert.match(settings, /Tutte le sezioni/)
assert.match(settings, /5 },/)
assert.match(settings, /3 },/)
assert.match(settings, /required=\{form\.ordine === 'Primaria' \|\| form\.ordine === 'Secondaria'\}/)

console.log('CML-479 Home applicability contract: PASS')
