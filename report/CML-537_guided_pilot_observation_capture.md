# CML-537 — Guided Pilot Observation Capture Report

## Sintesi

Il flusso guidato React dispone ora di una raccolta di annotazioni per ciascuno dei quattro passaggi. La raccolta distingue evidenze osservabili e opinioni, in coerenza con il protocollo CML-534.

## Perimetro implementato

- due aree di annotazione per il passaggio corrente;
- stato mantenuto nella sessione del modulo React;
- ripresa delle annotazioni dopo il ritorno da Home, consultazione, proposta o processo;
- conteggio dei passaggi con annotazioni;
- cancellazione esplicita di tutte le annotazioni della sessione;
- limite di 1200 caratteri per campo;
- messaggio esplicito: le annotazioni non vengono inviate.

## Esclusioni

- nessun `localStorage` o `sessionStorage`;
- nessun backend o chiamata remota;
- nessuna telemetria;
- nessun export;
- nessuna analisi automatica;
- nessun collegamento al Registro decisioni;
- nessuna modifica al runtime storico, dati, workflow o schema `.cml`.

## Validazione prevista

- `npm run test:cml537`;
- `npm run test:cml536`;
- `npm run test:cml535`;
- `npm run lint`;
- `npm run build`;
- controlli automatici della pull request;
- verifica interattiva desktop e mobile sull'anteprima.

## Verdetto

```text
CML_537_GUIDED_PILOT_OBSERVATION_CAPTURE_READY_REMOTE_BRANCH
```
