# Project State

## Snapshot

- Last milestone: CML-437 — Post CML-436 Chain State Sync
- Last completed sync: CML-437 merged remote (`ea775da`)
- Active slice: CML-438 — Pilot Validation Evidence Start Pack
- Last completed design/runtime merge: CML-436 merged and live content smoke PASS
- Last completed evidence/report commit: CML-418 live visual smoke report pushed (`3b9eda0`)
- Last governance update: `CLAUDE.md` §10 mock conformance rule updated (`ed64938`)
- Active PM: PM-03 (50%), PM-05 (100%), PM-06 (75%), PM-07 (45%), PM-09 (Home mock conformance chain closed; pilot validation evidence pack in progress)
- Critical Path: Validazione con utenti → Architettura viste docente → Specifica target → Specifiche utente pre-bozzetto → Bozzetto controllato → Runtime controllato → Live content smoke → Pilot evidence
- Next action: review/merge CML-438 docs-only pack; then run a controlled teacher pilot using Home live CML-435/436 as baseline
- Last verdict: `CML_438_PILOT_VALIDATION_EVIDENCE_START_PACK_READY_REMOTE_BRANCH_NOT_MERGED`
- Repository status: main includes CML-437 merged state sync; CML-438 is docs-only on branch `codex/cml-438-pilot-validation-evidence-start-pack`; movelog corrente `docs/REPO-MOVELOG-v2.md`

## Recent Refactor Chain (CML-371 → CML-380)

La catena CML-371 → CML-380 ha completato il refactor dell'accesso runtime ai dati disciplinari:

- Runtime access generalizzato via `getUnitsForDiscipline(discKey)`
- Rimozione dead code `TECNOLOGIA_NORM` / `TECNOLOGIA_NORM_DATA`
- Zero residui hardcoded disciplinari certificati
- Runtime stabile, nessuna regressione

## Runtime Perimeter Reminder

Always treat runtime scope as:

- index.html
- _published_snapshot/netlify-current/index.html

Never reference only one runtime file in execution summaries.

## Product Design Governance Reminder

Dopo CML-434D, la prima micro-slice runtime deve seguire la direzione ibrida:

```text
B come ingresso docente + C come logica operativa + A come evoluzione istituzionale futura
```

CML-434 runtime non va applicata da remoto se l'unica modalità disponibile è riscrivere integralmente file HTML grandi da contenuto potenzialmente troncato.

Ogni intervento runtime deve dichiarare:

- profilo utente servito;
- contesto d'uso supportato;
- vista o pannello interessato;
- stato curricolare rappresentato;
- azione primaria consentita;
- criterio di accettazione soddisfatto;
- elementi volutamente esclusi.

## Mock Conformance Rule

Dopo un mock approvato, la UI deve inibire ciò che non è conforme. Non basta aggiungere nuovi blocchi sopra quelli vecchi.

## Pilot Validation Rule

Durante la validazione pilota non chiedere solo se lo strumento piace. Raccogliere evidenze osservabili: cosa il docente capisce, cosa prova a fare, dove si blocca, quali parole o passaggi risultano ambigui.

## Current Movelog

Il registro operativo corrente è:

```text
docs/REPO-MOVELOG-v2.md
```

Il file `docs/REPO-MOVELOG.md` resta archivio legacy e non va riscritto da remoto.
