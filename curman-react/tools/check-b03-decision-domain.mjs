import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const read = path => readFile(resolve(root, path), 'utf8')
const [types, policy, gap, gapFields, gapTypes, state, store, actions, persistence, app, revisionView, comparison] = await Promise.all([
  read('src/types/decision.ts'),
  read('src/lib/decision-policy.ts'),
  read('src/lib/gap.ts'),
  read('src/lib/gap-fields.ts'),
  read('src/types/gap.ts'),
  read('src/types/state.ts'),
  read('src/stores/useRevisioneStore.ts'),
  read('src/components/curriculum/DecisioneActions.tsx'),
  read('src/lib/work-decision-persistence.ts'),
  read('src/App.tsx'),
  read('src/views/RevisioneView.tsx'),
  read('src/components/revisione/GapComparison.tsx'),
])

function requireText(source, text, file) {
  if (!source.includes(text)) throw new Error(`${file}: contenuto obbligatorio assente: ${text}`)
}

for (const outcome of ['accepted_proposal', 'kept_current', 'revision_requested', 'accepted_custom', 'reopened']) {
  requireText(types, outcome, 'decision.ts')
}
for (const field of ['disciplina', 'ordine', 'nucleo', 'unitaId', 'targetField', 'ruoloDichiarato', 'ambitoDecisione', 'statoGap', 'versioneCurricolare', 'fonteVigente', 'fonteProposta']) {
  requireText(types, field, 'decision.ts')
}
for (const token of ['canPerformDecisionAction', 'isDecisionActionableStatus', "'proposta'", "'non_validato'", "'lavoro_personale'", "'lavoro_dipartimentale'", "'save_in_progress'", 'normalizeDiscipline']) {
  requireText(policy, token, 'decision-policy.ts')
}
requireText(gap, 'isDecisionActionableStatus(gap.status)', 'gap.ts')
requireText(gap, 'filter(entry => isDecisionActionableStatus(entry.status))', 'gap.ts')

for (const token of ['GapTargetField', 'targetField: GapTargetField']) {
  requireText(gapTypes, token, 'gap.ts types')
}
for (const token of ['composeUnitText', 'getFieldText', 'FIELD_LABELS', "targetField === 'obiettivi'"]) {
  requireText(gapFields, token, 'gap-fields.ts')
}

for (const token of ['WorkDecisionMap', 'RecordWorkDecisionInput', 'toLegacyDecision']) {
  requireText(types, token, 'decision.ts')
}
requireText(types, "decision.outcome === 'reopened' || decision.outcome === 'revision_requested'", 'decision.ts')
for (const token of ['workDecisioni', 'recordWorkDecision', 'reopenWorkDecision', 'getWorkDecision']) {
  requireText(state, token, 'state.ts')
  requireText(store, token, 'useRevisioneStore.ts')
}
for (const token of ['decisionePrecedenteId', 'toLegacyDecision(workDecision)', "outcome: 'reopened'"]) {
  requireText(store, token, 'useRevisioneStore.ts')
}

for (const token of [
  'recordWorkDecision({',
  "record('accepted_proposal', entry.proposto)",
  "record('kept_current', entry.testoOriginale)",
  "runAllowed('revision_requested'",
  "record('accepted_custom', value",
  'reopenWorkDecision(entry.unitaId, context)',
  'composeUnitText(unita, entry.targetField, replacement)',
  'targetField: entry.targetField',
]) {
  requireText(actions, token, 'DecisioneActions.tsx')
}
for (const label of ['Chiedi revisione', 'Personalizza il campo', 'Motivo della revisione richiesta', 'Nota facoltativa']) {
  requireText(actions, label, 'DecisioneActions.tsx')
}
for (const token of ['getFieldText', 'FIELD_LABELS', 'Il resto dell’unità resta invariato']) {
  requireText(comparison, token, 'GapComparison.tsx')
}

for (const token of ['WorkDecisionLocalPayload', 'lastWorkDecisionSaved', 'workDecisionHydrated', 'WorkDecisionPersistenceStatus', 'hydrateWorkDecisions', 'saveWorkDecisions', 'loadWorkDecisions', 'clearWorkDecisionPersistence']) {
  requireText(state, token, 'state.ts')
}
for (const token of ['WORK_DECISION_STORAGE_KEY', "'cml-work-decisions-v1'", "'cml-local-v3'", 'parseWorkDecisionPayload', 'saveWorkDecisionPayload', 'loadWorkDecisionPayload', 'clearWorkDecisionPayload']) {
  requireText(persistence, token, 'work-decision-persistence.ts')
}
for (const token of ['get().saveWorkDecisions()', 'loadWorkDecisionPayload(storage)', 'clearWorkDecisionPayload(storage)', "workDecisionPersistenceStatus: 'restored'", "workDecisionPersistenceStatus: 'saved'"]) {
  requireText(store, token, 'useRevisioneStore.ts')
}
requireText(app, 'hydrateWorkDecisions()', 'App.tsx')
for (const token of ['workDecisionPersistenceStatus', 'workDecisionPersistenceMessage', 'Ultimo salvataggio', 'aria-live="polite"']) {
  requireText(revisionView, token, 'RevisioneView.tsx')
}

console.log('B03 field-level decision workflow completion contract: PASS')
