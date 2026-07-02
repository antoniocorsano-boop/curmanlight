# CML-276C — HOME DASHBOARD LIVE DEPLOY SMOKE

Tipo slice: docs-only
Runtime modificato: no
Deploy: non eseguito
Push: non eseguito
Verdict atteso: `CML_276C_HOME_DASHBOARD_LIVE_DEPLOY_SMOKE_FAILED_STALE_LIVE`

## Contesto

Dopo CML-276/276A/276B il runtime locale e i file su `main` sono allineati al nuovo Home dashboard. Questa slice verifica la versione effettivamente servita su GitHub Pages.

## Obiettivo

- verificare Home pubblica;
- confermare assenza modale automatico;
- confermare banner inline;
- confermare discipline secondarie/toggle;
- confermare Guida rapida on demand;
- verificare errori runtime in smoke;
- verificare che il deploy stia servendo il runtime aggiornato.

## Verifiche eseguite

1. `Invoke-WebRequest https://antoniocorsano-boop.github.io/curmanlight/`
2. confronto marker live:
   - `CurManLight - ambiente curricolare d'Istituto`
   - `Da dove vuoi iniziare?`
   - `showWelcome()`
3. confronto con raw di `main`:
   - `https://raw.githubusercontent.com/antoniocorsano-boop/curmanlight/main/index.html`
4. retry live con query cache-busting `?nocache=<timestamp>`
5. smoke browser sulla pagina pubblica.

## Esito

- `main`/raw contiene runtime nuovo (banner inline presente, `showWelcome()` assente);
- live GitHub Pages serve runtime precedente (banner inline assente, Home vecchia presente, `showWelcome()` presente);
- query cache-busting non cambia il risultato;
- smoke browser conferma modale automatico ancora presente in live.

Conclusione: la pubblicazione live non e ancora allineata al commit runtime aggiornato.

## Invarianti

- nessuna modifica runtime in questa slice;
- nessuna modifica a dati, schema `.cml`, export/import, storage, validatori;
- nessun deploy eseguito.

## Azione consigliata

Aprire una slice di controlled publication/deploy sync per forzare riallineamento della pagina pubblica e ripetere smoke live.

## Verdict

`CML_276C_HOME_DASHBOARD_LIVE_DEPLOY_SMOKE_FAILED_STALE_LIVE`
