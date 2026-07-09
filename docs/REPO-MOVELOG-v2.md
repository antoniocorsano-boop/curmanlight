# REPO-MOVELOG v2

Registro operativo versionato delle modifiche CurManLight.

## Versione

- File: `docs/REPO-MOVELOG-v2.md`
- Versione: v2
- Data apertura: 2026-07-09
- Stato: registro corrente append-only
- Registro precedente: `docs/REPO-MOVELOG.md`

## Regola di transizione

Il file storico `docs/REPO-MOVELOG.md` resta conservato come archivio legacy e non deve essere riscritto da remoto perché supera diecimila righe e una risposta troncata può produrre cancellazioni massive.

Da CML-433M in avanti, il registro operativo corrente è `docs/REPO-MOVELOG-v2.md`.

## Regola append-only

Ogni nuova voce deve essere aggiunta in testa o in sezione dedicata senza riscrivere blocchi storici estesi.

Ogni voce deve indicare almeno:

- codice slice;
- tipo;
- stato;
- branch/commit/PR se disponibili;
- file modificati o prodotti;
- perimetro runtime;
- controlli rilevanti;
- verdetto.

---

## CML-433M — Versioned Movelog Sync

- Tipo: docs-only / repository governance
- Stato: MERGED_REMOTE
- Branch: `codex/cml-433m-versioned-movelog-sync`
- Base: `main` dopo CML-433UP
- PR: da apertura/merge controllato remoto
- Scopo: chiudere il debito movelog senza riscrivere il file legacy molto esteso.

### Decisione

Creare un nuovo movelog versionato:

```text
`docs/REPO-MOVELOG-v2.md`
```

Il file storico resta invariato e consultabile come archivio legacy.

### File prodotti

- `docs/REPO-MOVELOG-v2.md`
- `docs/03_execution/CML-433M.md`

### File aggiornati

- `docs/02_system/PROJECT-STATE.md`
- `docs/02_system/PRODUCT-MATURITY-PROGRESS.md`

### Runtime

- `index.html`: non modificato
- `_published_snapshot/netlify-current/index.html`: non modificato

### Dati curricolari

Non modificati.

### Verdetto

```text
CML_433M_VERSIONED_MOVELOG_SYNC_MERGED_REMOTE
```

---

## CML-433UP — User Specifications Post-Merge State Sync

- Tipo: docs-only / post-merge state sync
- Stato: MERGED_REMOTE
- PR: #20
- Merge commit: `c99dfda6caa8a28d38705c258779c4a3179ee0a4`
- Scopo: riallineare lo stato documentale dopo il merge di CML-433U.

### File prodotti

- `docs/03_execution/CML-433UP.md`

### File aggiornati

- `docs/02_system/PROJECT-STATE.md`
- `docs/02_system/PRODUCT-MATURITY-PROGRESS.md`
- `docs/03_execution/CML-433U.md`

### Runtime

Non modificato.

### Dati curricolari

Non modificati.

### Verdetto

```text
CML_433UP_USER_SPECIFICATIONS_POST_MERGE_STATE_SYNC_MERGED_REMOTE
```

---

## CML-433U — Specifiche utente pre-bozzetto

- Tipo: docs-only / user specification / product design governance
- Stato: MERGED_REMOTE
- PR: #19
- Merge commit: `67e27da5326c1486f9ba6db86a8cadc4d8a51cad`
- Scopo: formalizzare le specifiche utente preliminari al bozzetto grafico.

### File prodotti

- `docs/03_execution/CML-433U.md`
- `report/CML-433U_specifiche_utente_pre_bozzetto.md`

### File aggiornati

- `docs/02_system/PROJECT-STATE.md`
- `docs/02_system/PRODUCT-MATURITY-PROGRESS.md`

### Decisione di governance

Il bozzetto grafico deve essere valutato contro specifiche utente verificabili, non contro preferenze estetiche isolate.

### Runtime

Non modificato.

### Dati curricolari

Non modificati.

### Verdetto

```text
CML_433U_USER_SPECIFICATIONS_PRE_BOZZETTO_MERGED
```

---

## CML-433 — Teacher Task View Target Specification

- Tipo: docs-only / product design specification
- Stato: PUSHED_REMOTE
- Commit: `55c23ab98111b934d1c71ab7d0c88a519f4f753c`
- Scopo: definire la vista target task-oriented per il docente prima di nuove patch runtime.

### Output principali

- Specifica target Home task selector.
- Specifica target Curricolo vigente/proposta/stato.
- Specifica target Progetta per percorsi.
- Specifica target Esportazioni per compito.
- Specifica target Guida contestuale.
- Regola: niente micro-patch isolate prima di specifica utente/bozzetto controllato.

### Runtime

Non modificato.

### Dati curricolari

Non modificati.

### Verdetto

```text
CML_433_TEACHER_TASK_VIEW_TARGET_SPEC_PUSHED_REMOTE
```

---

## CML-432 — Teacher Task View Architecture and Mock Comparison

- Tipo: docs-only / product design audit
- Stato: PUSHED_REMOTE
- Commit noto: `4537af2`
- Scopo: analizzare le viste principali di CurManLight in relazione ai task reali del docente e confrontarle con una logica di interfaccia più professionale.

### Decisione

La progettazione deve partire dalla domanda:

```text
Il docente, in questa vista, cosa deve capire e cosa deve fare?
```

### Viste analizzate

- Home
- Curricolo
- Progetta
- Esportazioni
- Guida
- Test guidato

### Runtime

Non modificato.

### Dati curricolari

Non modificati.

### Verdetto

```text
CML_432_TEACHER_TASK_VIEW_ARCHITECTURE_AND_MOCK_COMPARISON_PUSHED_REMOTE
```
