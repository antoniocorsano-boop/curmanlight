import fs from 'node:fs'
import assert from 'node:assert/strict'

const view = fs.readFileSync('src/views/AssistedDraftDemoView.tsx', 'utf8')
const spec = fs.readFileSync('e2e/cml-525n-assisted-draft-demo.spec.ts', 'utf8')
const config = fs.readFileSync('playwright.cml525n.config.ts', 'utf8')

for (const expected of [
  'Dimostrazione locale controllata',
  'Passaggi suggeriti',
  '1. Rivedi',
  '2. Salva',
  '3. Decidi',
  'solo in questo browser',
]) {
  assert.ok(view.includes(expected), `missing user guidance: ${expected}`)
}

for (const expected of [
  'Salva bozza locale',
  'Crea copia di recupero',
  'Scarta copia di recupero',
  'Versione locale 1',
  'toBeDisabled',
  'consoleErrors',
]) {
  assert.ok(spec.includes(expected), `missing interactive smoke assertion: ${expected}`)
}

assert.ok(config.includes('cml-525n-assisted-draft-demo.spec.ts'))
assert.equal(view.includes('fetch('), false)
assert.equal(view.includes('canonicalWriteAllowed: true'), false)

console.log('CML-525N PASS: guidance and interactive recovery smoke contract.')
