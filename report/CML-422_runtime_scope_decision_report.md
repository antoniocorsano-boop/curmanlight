# CML-422 — Runtime Scope Decision Report

## 1. Scopo

Registrare la decisione di perimetro runtime dopo la chiusura di CML-421F/G/H.

## 2. Opzioni valutate

```text
1. Impostazioni / Contesto di lavoro con anno scolastico
2. Home D2 con chip contesto e quattro azioni guidate
3. Esportazione per documento con avviso contesto mancante
```

## 3. Decisione

La prima micro-slice runtime deve essere:

```text
CML-423 — Work Context and School Year Runtime Micro-slice
```

## 4. Motivazione

```text
Anno scolastico è dato globale.
Progettazione ed Esportazione dipendono dal Contesto di lavoro.
Home D2 richiede chip contesto.
I documenti scolastici per classe richiedono anno scolastico, disciplina e classi.
```

## 5. Perimetro CML-423

Dentro:

```text
Contesto di lavoro
Anno scolastico
chip contesto sintetico
salvataggio locale controllato
riuso di funzioni profilo/contesto esistenti
```

Fuori:

```text
nuovi export completi
nuova navigazione completa
implementazione intero mock D2
backend/login/Drive
modifiche dati curricolari
```

## 6. Acceptance criteria

```text
Anno scolastico configurabile nel Contesto di lavoro.
Contesto salvato localmente.
Chip contesto mostra almeno disciplina/ordine/anno scolastico se disponibili.
Messaggio chiaro se anno scolastico manca.
Nessuna modifica ai dati curricolari.
Nessun cambio al flusso .cml esistente.
Runtime pair allineato quando implementato.
```

## 7. Stato

```text
Runtime non modificato
Main non modificato
Deploy non eseguito
```

## Verdict

```text
CML_422_RUNTIME_SCOPE_DECISION_WORK_CONTEXT_AND_SCHOOL_YEAR_FIRST_REMOTE_BRANCH
```
