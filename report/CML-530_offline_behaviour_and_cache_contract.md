# CML-530 — Offline Behaviour and Cache Contract Report

## Riferimenti verificati

- Commit runtime: `02207f555ad73848e8f50bb8a3768809d797bf23`
- Workflow: `Deploy CurManLight to GitHub Pages`
- Run: `29559635946`
- Esito: `completed / success`

## Risultati live consolidati

- pagina pubblicata: HTTP 200;
- intestazione principale: `Curricolo Verticale`;
- service worker attivo;
- `offlineFallbackResponse` presente nel file pubblicato;
- navigation offline con cache vuota: HTTP 503;
- asset offline con cache vuota: HTTP 504;
- nessun page error;
- gli errori console osservati durante la simulazione corrispondono esclusivamente agli status HTTP intenzionali 503/504.

## Interpretazione

Il service worker non promette disponibilità offline completa. Garantisce invece un comportamento deterministico: installazione resiliente e risposta esplicita anche quando rete e cache non forniscono una risorsa.

## Perimetro CML-530

Attività solo documentale. Nessuna modifica a runtime, dati, HTML, React, workflow o `APP_SHELL`.

## Verdetto

```text
CML_530_OFFLINE_BEHAVIOUR_AND_CACHE_CONTRACT_READY_REMOTE_BRANCH
```
