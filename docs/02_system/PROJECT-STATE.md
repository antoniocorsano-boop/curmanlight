# Project State

## Snapshot

- Last milestone: CML-437 — Post CML-436 Chain State Sync
- Last slice: CML-437 — Post CML-436 Chain State Sync
- Last completed design/runtime merge: CML-436 merged and live content smoke PASS
- Last completed evidence/report commit: CML-418 live visual smoke report pushed (`3b9eda0`)
- Last governance update: `CLAUDE.md` §10 mock conformance rule updated (`ed64938`)
- Active PM: PM-03 (50%), PM-05 (100%), PM-06 (75%), PM-07 (45%), PM-09 (Home mock conformance chain closed; live Home no longer serves stale duplicate blocks)
- Critical Path: Validazione con utenti → Architettura viste docente → Specifica target → Specifiche utente pre-bozzetto → Bozzetto controllato → Runtime controllato → Live content smoke → Pilot evidence
- Next action: merge CML-437 docs-only state sync via PR #28; then select the next PM-09 / pilot-validation slice
- Last verdict: `CML_437_POST_CML436_CHAIN_STATE_SYNC_READY_REMOTE_BRANCH_NOT_MERGED`
- Repository status: main includes CML-436 live cache fix, CML-418 report/screenshots, and `CLAUDE.md` §10 rule; CML-437 is docs-only on branch `codex/cml-437-post-chain-state-sync`, PR #28 aperta non mergiata; movelog corrente `docs/REPO-MOVELOG-v2.md`

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

## Current Movelog

Il registro operativo corrente è:

```text
docs/REPO-MOVELOG-v2.md
```

Il file `docs/REPO-MOVELOG.md` resta archivio legacy e non va riscritto da remoto.
