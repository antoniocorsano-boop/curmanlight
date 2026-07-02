# CML-276C HOME DASHBOARD LIVE DEPLOY SMOKE — Report

## Sintesi

La smoke live di Home non conferma ancora CML-276: la pagina pubblica risulta su runtime precedente nonostante il repository `main` contenga il runtime nuovo.

## Evidenza tecnica

Endpoint live:

- `https://antoniocorsano-boop.github.io/curmanlight/`
- HTTP 200
- marker runtime nuovo assente
- marker runtime vecchio presente

Confronto con raw `main`:

- `https://raw.githubusercontent.com/antoniocorsano-boop/curmanlight/main/index.html`
- HTTP 200
- marker runtime nuovo presente
- chiamata `showWelcome()` assente

Cache-busting:

- `?nocache=<timestamp>` non modifica l'esito live

Smoke browser live:

- Home visualizza layout precedente (`Da dove vuoi iniziare?`)
- modale automatico ancora presente

## Verifica marker

- LIVE_HAS_NEW_BANNER=False
- LIVE_HAS_OLD_HOME=True
- LIVE_HAS_AUTOWELCOME=True
- RAW_HAS_NEW_BANNER=True
- RAW_HAS_AUTOWELCOME=False

## Valutazione

Stato live non allineato al runtime consolidato su `main`. Necessaria azione di controlled publication e nuova smoke live.

## Verdict

`CML_276C_HOME_DASHBOARD_LIVE_DEPLOY_SMOKE_FAILED_STALE_LIVE`
