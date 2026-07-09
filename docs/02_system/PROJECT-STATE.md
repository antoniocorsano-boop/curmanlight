# Project State

## Snapshot

- Last milestone: CML-435 — Home Mock Conformance Visibility Gate
- Last slice: CML-435 — Home Mock Conformance Visibility Gate
- Last completed design merge: 67e27da (CML-433U)
- Active PM: PM-03 (50%), PM-05 (100%), PM-06 (75%), PM-07 (45%), PM-09 (CML-434 merged su main via PR #24; CML-435 su branch `codex/cml-435-home-mock-conformance`, PR #26 aperta non mergiata, ready for merge remoto)
- Critical Path: Validazione con utenti → Architettura viste docente → Specifica target → Specifiche utente pre-bozzetto → Bozzetto controllato → Runtime controllato
- Next action: Merge CML-435 via PR #26; smoke post-merge e live verification su main
- Last verdict: `CML_435_HOME_MOCK_CONFORMANCE_VISIBILITY_GATE_READY_FOR_MERGE_REMOTE_BRANCH`
- Repository status: CML-434 merged su main via PR #24; CML-435 su branch `codex/cml-435-home-mock-conformance`, PR #26 aperta non mergiata, ready for merge remoto; movelog corrente `docs/REPO-MOVELOG-v2.md`

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

## Current Movelog

Il registro operativo corrente è:

```text
docs/REPO-MOVELOG-v2.md
```

Il file `docs/REPO-MOVELOG.md` resta archivio legacy e non va riscritto da remoto.
