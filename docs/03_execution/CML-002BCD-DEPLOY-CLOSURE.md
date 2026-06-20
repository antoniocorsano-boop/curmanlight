# CML-002BCD — Deploy closure PDF hotfix e anti-cache

Data esecuzione: 2026-06-20

## Scopo della chiusura

Verifica finale di deploy per chiudere in modo documentale le slice:

- `CML-002B — PDF_TERM_HOTFIX_ARIANESE`
- `CML-002C — Anti-cache PDF Hotfix`
- `CML-002D — Anti-cache residual motto PDF link`

L'obiettivo era accertare che il PDF pubblicato in produzione su Netlify sia quello corretto e che i collegamenti locali e pubblicati siano protetti contro cache obsolete tramite query versionata.

## Stato Git iniziale

- Branch iniziale: `master`
- Commit di partenza: `8fd4b846a3ee5f3e62aec8b46af26f9acb6ca2c8`
- Working tree iniziale: pulita
- Commit slice confermati in `master`:
  - `452b42184a03b21256ad8f9217885e0648de99b9` — `CML-002B`
  - `cd5996e6ce01cebf7424a4433f6bbc98636aa477` — `CML-002C`
  - `8fd4b846a3ee5f3e62aec8b46af26f9acb6ca2c8` — `CML-002D`

## Asset verificati

- `https://curmanlight.netlify.app/`
- `https://curmanlight.netlify.app/Corso_CurricoloDonMilani_IN2025.pdf`
- Snapshot locale pubblicabile: `_published_snapshot/netlify-current/`

## Verifiche locali

File pubblicabili locali confermati:

- `_published_snapshot/netlify-current/Corso_CurricoloDonMilani_IN2025.pdf`
- `_published_snapshot/netlify-current/index.html`
- `_published_snapshot/netlify-current/sw.js`
- `_published_snapshot/netlify-current/motto-non-multa-sed-multum.html`

PDF locale:

- `ariana`, parola intera case-insensitive: `0`
- `arianese`, parola intera case-insensitive: `6`

Link anti-cache locali:

- riferimenti HTML al PDF: `4`
- riferimenti HTML versionati con `?v=452b421`: `4`
- riferimenti HTML non versionati: `0`
- `sw.js`: nessun riferimento al PDF in precache
- `sw.js`: contiene `curmanlight-cache-v452b421`

## Verifiche produzione

PDF prodotto scaricato con query anti-cache:

- URL PDF verificato: `https://curmanlight.netlify.app/Corso_CurricoloDonMilani_IN2025.pdf?v=452b421-final-20260620183558`
- Percorso temporaneo: `C:\Users\anton\AppData\Local\Temp\curmanlight-prod-final.pdf`
- Esito download: `PASS`, `curl_exit=0`
- Dimensione file scaricato: `875527` byte
- SHA256 PDF produzione: `DD9E19617397C21B6926D73280A7EA8DC8513EFA010BFAE33C45CA22A1D0564A`
- SHA256 snapshot locale: `DD9E19617397C21B6926D73280A7EA8DC8513EFA010BFAE33C45CA22A1D0564A`

Conteggio testuale PDF produzione con PyMuPDF:

- `ariana`: `0`
- `arianese`: `6`

Verifica visiva:

- Apertura automatica tentata con `Invoke-Item`
- Pagine indicate: `4`, `5`, `8`, `12`
- Esito visivo: `NOT_VERIFIED`, perché il controllo manuale delle pagine non è disponibile nella sessione CLI

## Deploy Netlify

- Deploy manuale già eseguito dall'utente da `_published_snapshot/netlify-current`
- `deployId` produzione: non disponibile nel log locale
- Nessun nuovo deploy eseguito durante questa slice

## Invarianti rispettate

- Nessun file runtime modificato in questa slice:
  - `index.html` non modificato
  - `sw.js` non modificato
  - PDF non modificato
  - `motto-non-multa-sed-multum.html` non modificato
- Nessuna logica applicativa modificata
- Nessun backend introdotto
- Nessuna API introdotta
- Nessuna autenticazione introdotta
- Nessun Netlify Form introdotto
- Nessun file `CML-002R` committato o modificato
- File non tracciati esclusi: nessuno rilevato; working tree iniziale pulita

## Rischi residui

- Client già aperti possono conservare cache HTTP/browser indipendente dal service worker fino a refresh/riavvio.
- Il `deployId` produzione non è disponibile nei log locali.
- La verifica visiva delle pagine `4`, `5`, `8`, `12` resta non confermata manualmente; la verifica testuale del PDF produzione è positiva.

## Verdetto finale

`CML_002BCD_DEPLOY_CLOSED`
