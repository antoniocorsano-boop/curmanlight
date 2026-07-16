# CML-525P — Pilot Feedback Import, Aggregate Review and Anonymized Analysis Workspace

## Obiettivo

Consentire al referente di importare manualmente i file JSON esportati dal test pilota, verificarli localmente e leggere le osservazioni aggregate senza backend, telemetria o classificazione automatica.

## Implementazione

- runtime fail-closed per validazione e parsing dei file;
- accettazione del solo schema `cml-pilot-evaluation-v2` e prodotto `CurManLight React`;
- deduplicazione per identificativo anonimo;
- conteggi descrittivi per completamento, ruolo, ordine di scuola e disponibilità al secondo test;
- copertura delle cinque tappe;
- osservazioni testuali riportate integralmente per domanda;
- export Markdown dell’analisi descrittiva;
- workspace React raggiungibile da `Analizza feedback pilota`;
- dati mantenuti soltanto nella sessione corrente.

## Vincoli preservati

- nessun upload o invio automatico;
- nessun dato personale richiesto;
- nessuna persistenza automatica dei file importati;
- nessuna analisi semantica, sentiment o punteggio automatico;
- nessuna modifica al curricolo canonico;
- nessun backend, autenticazione o telemetria.

## Gate

```bash
cd curman-react
npm run test:cml525p
npm run lint
npm run build
```

## Verdetto atteso

`CML_525P_PILOT_FEEDBACK_IMPORT_AGGREGATE_REVIEW_AND_ANONYMIZED_ANALYSIS_WORKSPACE_READY`
