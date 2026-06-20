# Report CML-002C — Anti-cache PDF Hotfix

## Risultato

I tre collegamenti al corso PDF nell'entry point `index.html` ora usano:

`Corso_CurricoloDonMilani_IN2025.pdf?v=452b421`

URL pubblico consigliato:

`https://curmanlight.netlify.app/Corso_CurricoloDonMilani_IN2025.pdf?v=452b421`

## Riferimenti rilevati

Prima dell'intervento erano presenti 5 riferimenti nel runtime:

- 3 in `index.html`, aggiornati con la query string;
- 1 in `sw.js`, rimosso dalla precache;
- 1 in `motto-non-multa-sed-multum.html`, non modificato perché esterno alla whitelist della slice.

Dopo l'intervento:

- `index.html`: 3 riferimenti, tutti con `?v=452b421`;
- `sw.js`: nessun riferimento al PDF;
- `manifest.webmanifest`: nessun riferimento al PDF;
- pagina motto: 1 riferimento canonico non versionato, registrato come rischio residuo.

## Service worker

`sw.js` mantiene la strategia esistente. Sono state effettuate soltanto due modifiche:

1. nome cache impostato a `curmanlight-cache-v452b421`;
2. rimozione del PDF da `APP_SHELL`.

L'attivazione continua a cancellare le cache con nome diverso, quindi la cache precedente viene rimossa quando il nuovo service worker entra in funzione.

## Integrità del PDF

- File: `_published_snapshot/netlify-current/Corso_CurricoloDonMilani_IN2025.pdf`
- Nome canonico invariato: `Corso_CurricoloDonMilani_IN2025.pdf`
- Blob Git locale e `HEAD`: `9d392ca5b72a53fda0f7b36cdccc90ba99eab494`
- `ariana`, parola intera case-insensitive: 0
- `arianese`, parola intera case-insensitive: 6

Il contenuto del PDF non è stato modificato e non sono state create copie duplicate.

## Ambito e rischi residui

Nessuna modifica a testi, viste, navigazione, logiche applicative o localStorage. Nessun backend, API, autenticazione o Netlify Forms. Nessun deploy automatico.

Rischi residui: il link della pagina motto resta non versionato; cache HTTP gestite dal browser/CDN sono indipendenti dal service worker; client già aperti devono ricevere e attivare il nuovo service worker. Il deploy successivo dovrà partire da `_published_snapshot/netlify-current`.

## Verdetto

`CML_002C_ANTI_CACHE_PDF_HOTFIX_READY`
