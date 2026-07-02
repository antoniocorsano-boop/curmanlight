# CML-276A HOME DASHBOARD POST-PUSH SMOKE — Report

## Sintesi

La smoke post-push di CML-276 conferma il comportamento UX atteso della Home. Emerge pero un disallineamento root/snapshot: il commit runtime ha aggiornato solo lo snapshot pubblicato.

## Controllo commit path

Comando: `git show --name-only --oneline 617b9db`

Esito:

- presente `_published_snapshot/netlify-current/index.html`
- assente `index.html`

## Controllo parita root/snapshot

Comando: `git diff --no-index -- index.html _published_snapshot/netlify-current/index.html`

Esito:

- differenze presenti
- parita root/snapshot non allineata

## Smoke runtime Home

Pagina verificata: `file:///C:/Users/anton/CurManLight/_published_snapshot/netlify-current/index.html`

Esiti:

- modale iniziale automatico: non presente all'avvio
- banner inline Home: presente
- ingressi per bisogno professionale: presenti
- discipline secondarie: pannello chiuso/apribile funzionante
- Guida rapida: modale aperto solo su richiesta
- page errors al reload in smoke: nessuno

## Valutazione

- UX CML-276: coerente con decisione runtime
- Integrita runtime root/snapshot: da riallineare con microfix dedicato

## Verdict

`CML_276A_HOME_DASHBOARD_POST_PUSH_SMOKE_PASSED_WITH_PARITY_GAP`
