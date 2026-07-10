# CML-438 — Pilot Validation Evidence Start Pack Report

## Sintesi

CML-438 prepara un pacchetto operativo per validare CurManLight con docenti non tecnici dopo la stabilizzazione della Home CML-435/436.

## Baseline

- Home live conforme al mock approvato.
- Blocchi duplicati rimossi.
- Cache/service worker riallineati.
- CML-418 visual smoke report disponibile.
- Regola `CLAUDE.md` §10 acquisita: la UI deve inibire ciò che non è conforme al mock.

## Output prodotti

- Istruzioni docente tester.
- Griglia osservativa.
- Template sintesi evidenze.
- Execution doc CML-438.
- Stato programma e movelog aggiornati.

## Principio metodologico

Non si raccolgono opinioni generiche sul gusto dell'interfaccia. Si raccolgono evidenze sul comportamento del docente davanti allo strumento:

- cosa comprende senza spiegazioni;
- quale azione sceglie;
- dove si ferma;
- quali parole risultano ambigue;
- quali aspettative professionali emergono.

## Vincoli rispettati

- Nessun runtime modificato.
- Nessun dato curricolare modificato.
- Nessun backend/account/OAuth.
- Nessun file legacy `docs/REPO-MOVELOG.md` modificato.
- Nessuna trasformazione automatica delle evidenze in patch UI.

## Verdetto

```text
CML_438_PILOT_VALIDATION_EVIDENCE_START_PACK_READY_REMOTE_BRANCH_NOT_MERGED
```
