# CML-433M — Versioned Movelog Sync

## Type

docs-only / repository governance / movelog transition

## Macro-program

PM-01 Governance / PM-09 Validazione con utenti / Documentation integrity

## Stato

MERGED_REMOTE

## Base

- Branch base: `main`
- Base post-merge: CML-433UP (`c99dfda`)
- Branch remoto di lavoro: `codex/cml-433m-versioned-movelog-sync`

## Obiettivo

Chiudere il debito `REPO-MOVELOG` senza riscrivere il file storico molto esteso.

La soluzione adottata è aprire un nuovo movelog versionato e append-only:

```text
docs/REPO-MOVELOG-v2.md
```

## Decisione

`docs/REPO-MOVELOG.md` resta archivio legacy e non viene modificato.

Da CML-433M in avanti, il registro operativo corrente è:

```text
docs/REPO-MOVELOG-v2.md
```

## File prodotti

- `docs/REPO-MOVELOG-v2.md`
- `docs/03_execution/CML-433M.md`

## File aggiornati

- `docs/02_system/PROJECT-STATE.md`
- `docs/02_system/PRODUCT-MATURITY-PROGRESS.md`

## File non modificato intenzionalmente

- `docs/REPO-MOVELOG.md`

Motivo: file legacy molto esteso, non sicuro da riscrivere da remoto tramite risposta potenzialmente troncata.

## Voci recuperate nel nuovo movelog

- CML-432 — Teacher Task View Architecture and Mock Comparison
- CML-433 — Teacher Task View Target Specification
- CML-433U — Specifiche utente pre-bozzetto
- CML-433UP — User Specifications Post-Merge State Sync
- CML-433M — Versioned Movelog Sync

## Perimetro

Incluso:

- apertura registro versionato v2;
- recupero catena CML-432 → CML-433UP;
- aggiornamento stato documentale;
- chiusura debito movelog corrente.

Escluso:

- modifica runtime;
- modifica dati curricolari;
- modifica file legacy `docs/REPO-MOVELOG.md`;
- bozzetti;
- implementazione runtime CML-434.

## Controlli remoti

- Branch creata da `main`: OK.
- File legacy non modificato: OK.
- Nuovo movelog creato: OK.
- Slice docs-only: OK.
- Runtime modificato: NO.
- Dati curricolari modificati: NO.

Nota: via API GitHub non è disponibile shell locale per eseguire `git diff --check` o validatori. La slice modifica solo documentazione.

## Verdetto

```text
CML_433M_VERSIONED_MOVELOG_SYNC_MERGED_REMOTE
```
