# Project State

## Snapshot

- Last milestone: CML-436 — Pages Stale Home Cache Invalidation
- Last slice: CML-436 — Pages Stale Home Cache Invalidation
- Last completed design merge: 748b468 (CML-435 via PR #26)
- Active PM: PM-03 (50%), PM-05 (100%), PM-06 (75%), PM-07 (45%), PM-09 (CML-434 merged su main via PR #24; CML-435 merged su main via PR #26; CML-436 cache fix su branch)
- Critical Path: Validazione con utenti → Architettura viste docente → Specifica target → Specifiche utente pre-bozzetto → Bozzetto controllato → Runtime controllato
- Next action: Merge CML-436 via PR; smoke post-merge e live verification Home CML-435
- Last verdict: `CML_436_PAGES_STALE_HOME_CACHE_INVALIDATION_READY_BRANCH_NOT_MERGED`
- Repository status: CML-434 e CML-435 merged su main; CML-436 su branch `codex/cml-436-pages-stale-home-cache-invalidation`; movelog corrente `docs/REPO-MOVELOG-v2.md`

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
