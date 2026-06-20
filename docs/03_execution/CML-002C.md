# CML-002C — Anti-cache PDF Hotfix

Data esecuzione: 2026-06-20

## Stato Git iniziale

- Branch iniziale: `master`
- Commit di partenza: `541caceb437a242c0ce792f2edaa3d8f5e7a363f` (`docs: recover published curmanlight runtime snapshot`)
- Branch creata: `cml-002c-anti-cache-pdf-hotfix`
- Working tree iniziale non pulita: `docs/03_execution/CML-002R.md` risultava modificato; la modifica preesistente è stata preservata ed esclusa dalla slice

## Motivo e intervento

La query string `?v=452b421` riduce il rischio che i collegamenti principali riaprano una risposta PDF memorizzata con la stessa URL canonica. Sono stati aggiornati i 3 riferimenti utente presenti in `index.html`.

Il service worker è stato modificato in modo minimale:

- cache rinominata da `curricolo-don-milani-v4-testata-espandibile` a `curmanlight-cache-v452b421`;
- PDF rimosso da `APP_SHELL`, così non viene più precaricato;
- strategia di fetch invariata.

## File modificati

- `_published_snapshot/netlify-current/index.html`
- `_published_snapshot/netlify-current/sw.js`
- `docs/03_execution/CML-002C.md`
- `report/CML-002C_anti_cache_pdf_hotfix.md`

Il PDF `_published_snapshot/netlify-current/Corso_CurricoloDonMilani_IN2025.pdf` non è stato modificato. Il blob Git del file locale e quello in `HEAD` coincidono: `9d392ca5b72a53fda0f7b36cdccc90ba99eab494`.

Il nome canonico resta `Corso_CurricoloDonMilani_IN2025.pdf`. Il link pubblico consigliato è:

`https://curmanlight.netlify.app/Corso_CurricoloDonMilani_IN2025.pdf?v=452b421`

## Verifiche

- Riferimenti in `index.html`: 3, tutti versionati con `?v=452b421`
- Riferimenti PDF in `sw.js`: 0
- Riferimenti PDF in `manifest.webmanifest`: 0
- Testo PDF locale: `ariana` 0; `arianese` 6
- Nessuna modifica a contenuto PDF, testi applicativi, viste, navigazione, logiche, localStorage o strategia runtime
- Nessun backend, API, autenticazione o Netlify Forms introdotto
- Nessun deploy eseguito automaticamente

## Rischi residui

La pagina secondaria `motto-non-multa-sed-multum.html` conserva un collegamento non versionato al PDF. Non è stata modificata perché non inclusa nella whitelist dei file della slice. Il cambio del nome cache elimina la cache precedente all'attivazione del nuovo service worker e la rimozione dalla precache evita che il PDF venga installato come parte dell'app shell; restano possibili cache HTTP/browser indipendenti e client che non abbiano ancora attivato il nuovo service worker.

## Verdetto

`CML_002C_ANTI_CACHE_PDF_HOTFIX_READY`
