# CML-434D — Bozzetti alternativi pre-runtime

## Macroprogramma

PM-03 Orientamento / PM-05 Esperienza di lavoro / PM-06 Accompagnamento / PM-09 Validazione con utenti

## Backlog

UX-005 / UX-007 / UX-016 / UX-017 / UX-018 / UX-020 / Product design governance

## Dipende da

- CML-432 — Teacher Task View Architecture and Mock Comparison
- CML-433 — Teacher Task View Target Specification
- CML-433U — Specifiche utente pre-bozzetto
- CML-433M — Versioned Movelog Sync

## Aggiorna

- `docs/02_system/PROJECT-STATE.md`
- `docs/02_system/PRODUCT-MATURITY-PROGRESS.md`
- `docs/REPO-MOVELOG-v2.md`

## Type

docs-only / product design / pre-runtime mock alternatives

## Stato

MERGED_REMOTE

## Base

- Branch base: `main`
- Base post-merge: CML-433M (`85beb1a`)
- Branch remoto di lavoro: `codex/cml-434d-pre-runtime-mock-alternatives`

## Obiettivo

Produrre tre bozzetti alternativi pre-runtime per CurManLight, confrontabili contro le specifiche utente CML-433U prima di qualunque modifica all'interfaccia.

La slice non crea grafica definitiva, non modifica HTML, non introduce componenti e non tocca dati curricolari.

## Bozzetti prodotti

1. **Bozzetto A — Cruscotto istituzionale**
2. **Bozzetto B — Percorso guidato docente**
3. **Bozzetto C — Ambiente professionale di lavoro**

Documento principale:

- `report/CML-434D_bozzetti_alternativi_pre_runtime.md`

## Decisione principale

Il bozzetto raccomandato per la prima micro-slice runtime non è un layout completo, ma una soluzione ibrida:

```text
B come ingresso docente + C come logica di lavoro + A come vista futura di governo
```

La prima implementazione runtime candidata deve limitarsi a:

```text
Home task selector + intestazione compatta + pannello contestuale leggero
```

## Perimetro

Incluso:

- definizione di tre direzioni alternative;
- wireframe testuali;
- criteri di valutazione;
- matrice specifiche utente → bozzetto;
- scelta raccomandata per CML-434 runtime.

Escluso:

- `index.html`;
- `_published_snapshot/netlify-current/index.html`;
- dati curricolari;
- service worker;
- grafica definitiva;
- implementazione runtime;
- nuove dipendenze.

## Controlli remoti

- Branch creata da `main`: OK.
- Slice docs-only: OK.
- Runtime modificato: NO.
- Dati curricolari modificati: NO.
- Movelog corrente aggiornato: `docs/REPO-MOVELOG-v2.md`.

Nota: via API GitHub non è disponibile shell locale per eseguire `git diff --check` o validatori. La slice modifica solo documentazione.

## Verdetto

```text
CML_434D_PRE_RUNTIME_MOCK_ALTERNATIVES_MERGED_REMOTE
```
