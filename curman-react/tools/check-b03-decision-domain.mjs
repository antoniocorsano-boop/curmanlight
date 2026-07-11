import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const read = path => readFile(resolve(root, path), 'utf8')
const [types, policy, gap] = await Promise.all([
  read('src/types/decision.ts'),
  read('src/lib/decision-policy.ts'),
  read('src/lib/gap.ts'),
])

function requireText(source, text, file) {
  if (!source.includes(text)) throw new Error(`${file}: contenuto obbligatorio assente: ${text}`)
}

for (const outcome of ['accepted_proposal', 'kept_current', 'revision_requested', 'accepted_custom', 'reopened']) {
  requireText(types, outcome, 'decision.ts')
}
for (const field of ['disciplina', 'ordine', 'nucleo', 'unitaId', 'ruoloDichiarato', 'ambitoDecisione', 'statoGap', 'versioneCurricolare', 'fonteVigente', 'fonteProposta']) {
  requireText(types, field, 'decision.ts')
}
for (const token of ['canPerformDecisionAction', 'isDecisionActionableStatus', "'proposta'", "'non_validato'", "'lavoro_personale'", "'lavoro_dipartimentale'", "'save_in_progress'"]) {
  requireText(policy, token, 'decision-policy.ts')
}
requireText(gap, 'isDecisionActionableStatus(gap.status)', 'gap.ts')
requireText(gap, 'filter(entry => isDecisionActionableStatus(entry.status))', 'gap.ts')

console.log('B03 decision domain foundation contract: PASS')
