import fs from 'node:fs'
import assert from 'node:assert/strict'

const read = (path) => fs.readFileSync(path, 'utf8')
const app = read('src/App.tsx')
const state = read('src/types/state.ts')
const sidebar = read('src/components/layout/Sidebar.tsx')
const view = read('src/views/AssistedDraftDemoView.tsx')
const editor = read('src/features/assisted-drafts/draft-proposal-editor.tsx')
const demo = read('src/features/assisted-drafts/demo-data.ts')

for (const required of [
  'laboratorio-assistito',
  'AssistedDraftDemoView',
  'AssistedDraftWorkspaceShell',
  'DraftProposalEditor',
  'createDexieDraftStorage',
  'createAssistedDraftApplicationService',
  'onInspectionChange',
]) {
  assert.ok(`${app}${state}${sidebar}${view}`.includes(required), `composition contract missing: ${required}`)
}

for (const stateValue of ['generated_unreviewed', 'teacher_edited', 'teacher_accepted', 'teacher_rejected', 'teacher_deferred']) {
  assert.ok(editor.includes(stateValue), `validator-compatible state missing: ${stateValue}`)
}

assert.ok(demo.includes("canonicalWriteAllowed: false"))
assert.ok(demo.includes("humanValidationRequired: true"))
assert.equal(view.includes('fetch('), false)
assert.equal(view.includes('localStorage'), false)
assert.equal(view.includes('canonicalWriteAllowed: true'), false)

console.log('CML-525M PASS: local end-to-end assisted draft workspace composition and demo route.')
