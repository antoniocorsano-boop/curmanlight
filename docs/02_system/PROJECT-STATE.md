# Project State

## Snapshot

- Last milestone: CML-442 — React Migration Build Stabilization
- Last completed sync: CML-441 committed (`f7fe7ca`)
- Active slice: CML-442 — React Migration Build Stabilization (branch `codex/react-migration-stabilization`)
- Last completed design/runtime merge: CML-441 Home action-only simplification runtime ready
- Last committed: CML-441 (Home action-only simplification) + CML-442 (React migration foundation)
- Active PM: PM-03 (50%), PM-05 (100%), PM-06 (75%), PM-07 (45%), PM-09 (ongoing)
- Critical path: React migration (curman-react/) — filone separato e non produttivo
- Next action: push CML-441 mainline on approval; continue CML-442 React stabilization on `codex/react-migration-stabilization`
- Last verdict: `CML_442_REACT_MIGRATION_BUILD_STABILIZATION_COMMITTED_LOCAL_NOT_PUSHED`
- Repository status: main at CML-441 (Home action-only simplification, not pushed); `codex/react-migration-stabilization` branched from origin/main with CML-442 build stabilization

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
