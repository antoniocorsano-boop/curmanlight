# CML-426 — Home D2 Context Chip Runtime Handoff Report

## 1. Scopo

Preparare l'applicazione della patch Home D2 dopo CML-425, senza modificare il runtime tramite connettore remoto.

## 2. Branch

```text
cml-425-home-d2-context-chip
```

## 3. Output prodotto

```text
docs/03_execution/CML-426.md
```

## 4. Perimetro della futura patch

```text
chip Contesto di lavoro in Home
getWorkContextChip()
Cosa vuoi fare oggi?
quattro azioni principali
validazione umana compatta
mobile semplice
```

## 5. Perimetro escluso

```text
refactor generale
nuova navigazione
nuovi export
modifica dati curricolari
modifica flusso .cml
backend/login/Drive
intero mock D2
```

## 6. Runtime status

```text
Runtime non modificato
Main non modificato
Deploy non eseguito
```

## 7. Prossima azione effettiva

Applicare la patch in ambiente locale o patch-aware su:

```text
index.html
_published_snapshot/netlify-current/index.html
```

poi validare:

```text
git diff --check
validator curriculum 14/14
runtime shape test 14/14
smoke Home desktop/mobile
runtime pair allineato
```

## Verdict

```text
CML_426_HOME_D2_CONTEXT_CHIP_RUNTIME_HANDOFF_READY_REMOTE_BRANCH_NOT_APPLIED
```
