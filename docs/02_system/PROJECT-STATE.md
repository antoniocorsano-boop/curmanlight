# Project State

## Snapshot

- Last milestone: CML-433M — Versioned Movelog Sync
- Last slice: CML-433M — Versioned Movelog Sync
- Last completed design merge: 67e27da (CML-433U)
- Active PM: PM-03 (50%), PM-05 (100%), PM-06 (75%), PM-07 (45%), PM-09 (specifiche utente pre-bozzetto fuse; movelog operativo v2 aperto)
- Critical Path: Validazione con utenti → Architettura viste docente → Specifica target → Specifiche utente pre-bozzetto → Bozzetto controllato → Runtime controllato
- Next action: CML-434D bozzetti alternativi pre-runtime
- Last verdict: `CML_433M_VERSIONED_MOVELOG_SYNC_MERGED_REMOTE`
- Repository status: main documentale riallineato; runtime e dati curricolari invariati; movelog corrente `docs/REPO-MOVELOG-v2.md`; movelog legacy conservato e non modificato

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

Dopo CML-433U, il bozzetto grafico deve essere valutato contro le specifiche utente, non contro preferenze estetiche isolate.

Ogni bozzetto deve dichiarare:

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
