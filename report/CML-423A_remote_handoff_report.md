# CML-423A — Remote Handoff Report

## 1. Scopo

Gestire il fatto che non è possibile eseguire ora in locale.

## 2. Decisione

Non forzare la patch runtime via connettore remoto.

Preparare invece un handoff eseguibile per:

```text
agente patch-aware
futura sessione locale
ambiente Codex/opencode con patch controllata
```

## 3. Output prodotto

```text
docs/03_execution/CML-423A.md
```

Il documento contiene:

```text
punti di ricerca nel runtime
sostituzioni precise
helper da inserire
campo UI anno scolastico
riga UDA da aggiungere
validazioni obbligatorie
acceptance criteria
```

## 4. Stato runtime

```text
Runtime non modificato
Main non modificato
Deploy non eseguito
```

## 5. Prossima azione quando sarà possibile patchare

Aprire una micro-slice applicativa:

```text
CML-424 — Apply Work Context and School Year Runtime Patch
```

con runtime pair:

```text
index.html
_published_snapshot/netlify-current/index.html
```

## Verdict

```text
CML_423A_REMOTE_HANDOFF_WORK_CONTEXT_SCHOOL_YEAR_PATCH_READY_NOT_APPLIED
```
