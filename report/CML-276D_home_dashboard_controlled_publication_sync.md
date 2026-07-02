# CML-276D HOME DASHBOARD CONTROLLED PUBLICATION SYNC — Report

## Sintesi

Tentativo di sync pubblicazione live non completato. GitHub Pages rifiuta nuovi deployment per lock su deployment in-progress precedente.

## Stato live vs main

Live:

- Home vecchia (`Da dove vuoi iniziare?`)
- modale automatico presente

Main/raw:

- Home nuova (banner inline)
- `showWelcome()` automatico assente

## Runs analizzate

- `28598881752` (workflow_dispatch): in-progress/queue prolungata, deploy non concluso
- `28597650676` (push CML-276): failure per timeout `deployment_queued`
- `28599127618` (workflow_dispatch retry): failure `Deployment cancelled`
- `28599380782` (push su SHA nuovo `975e40d`): failure con errore lock
- `28599570256` (workflow_dispatch retry): rimasta queued/in-progress al momento della cancellazione richiesta

## Errore bloccante rilevato

`Deployment request failed for 975e40d... due to in progress deployment. Please cancel 1380aa6... first or wait for it to complete.`

## Valutazione

Blocco infrastrutturale lato GitHub Pages deployment queue/lock. Non risolvibile dal codice runtime locale nel perimetro della slice.

## Verdict

`CML_276D_HOME_DASHBOARD_CONTROLLED_PUBLICATION_SYNC_BLOCKED_BY_PAGES_DEPLOYMENT_QUEUE`
