# CML-425 — Home D2 Context Chip Patch Contract Report

## 1. Scopo

Aprire in remoto la slice successiva a CML-424 senza modificare subito il runtime.

## 2. Branch remoto

```text
cml-425-home-d2-context-chip
```

Base:

```text
main post CML-424
```

## 3. Decisione

Preparare la patch runtime per:

```text
Home D2 con chip Contesto di lavoro
```

senza applicarla via connettore remoto.

## 4. Motivazione

CML-424 ha introdotto il contesto e l'anno scolastico.

La Home è la prima vista che deve sfruttare quel contesto con:

```text
chip sintetico;
quattro azioni guidate;
avviso validazione umana;
linguaggio docente;
cornice istituzionale sobria.
```

## 5. Perimetro futuro

Dentro:

```text
chip contesto Home
getWorkContextChip()
Cosa vuoi fare oggi?
quattro azioni principali
validazione umana compatta
mobile a una colonna
```

Fuori:

```text
nuova navigazione completa
refactor ampio
nuovi export
modifica dati curricolari
modifica .cml
backend/login/Drive
intero mock D2
```

## 6. Runtime status

```text
Runtime non modificato
Main non modificato
Deploy non eseguito
```

## 7. Prossima azione applicativa

Quando disponibile ambiente patch-aware/local:

```text
CML-426 — Apply Home D2 Context Chip Runtime Patch
```

## Verdict

```text
CML_425_HOME_D2_CONTEXT_CHIP_RUNTIME_PATCH_CONTRACT_READY_REMOTE_BRANCH_NOT_APPLIED
```
