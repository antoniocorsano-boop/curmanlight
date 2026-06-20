# CML-002R — Published Runtime Recovery

Data audit: 2026-06-20

## Stato iniziale Git

- Branch corrente: `cml-002r-published-runtime-recovery`
- Commit di partenza: `c17fd55d55013ca97789a6021efcaaaaf7b21f51`
- Commit effettuato: `75cdf1b495704d19c2008ffa5244b02f847f70f6`
- Working tree iniziale: non pulita, con snapshot parziali già presenti in `_published_snapshot/netlify-current/`
- Stato recuperato nel proseguimento: snapshot parziali coerenti con la slice; nessun file runtime modificato fuori dalla cartella dedicata

## Esito slice

Runtime pubblicato recuperato da:

- `https://curmanlight.netlify.app/`

File recuperati nella cartella dedicata:

- `_published_snapshot/netlify-current/index.html`
- `_published_snapshot/netlify-current/manifest.webmanifest`
- `_published_snapshot/netlify-current/sw.js`
- `_published_snapshot/netlify-current/icons/icon-192.png`
- `_published_snapshot/netlify-current/icons/icon-512.png`
- `_published_snapshot/netlify-current/Corso_CurricoloDonMilani_IN2025.pdf`
- `_published_snapshot/netlify-current/motto-non-multa-sed-multum.html`
- `_published_snapshot/netlify-current/riferimenti_istituzionali_normativa.json`
- `_published_snapshot/netlify-current/docs_distribuzione/FONTI_PTOF_RAV_NORMATIVA.md`
- `_published_snapshot/netlify-current/docs_distribuzione/NOTE_TESTATA_ESPANDIBILE_MOBILE.txt`

Report dettagliato prodotto in:

- `report/CML-002R_published_runtime_recovery.md`

## Vincoli rispettati

- Non sono stati modificati file runtime esistenti fuori da `_published_snapshot`, `docs` e `report`.
- Non sono stati copiati `_handoff/generated/cml001` o `_handoff/generated/cml002` sopra il runtime pubblicato.
- Non sono stati introdotti backend, API, autenticazione, database, Netlify Forms o deploy.
- Il collegamento alias interno `curriculum-verticale-v3-responsive-salvataggio-profilo.html`, referenziato dalla pagina motto, è stato verificato e risulta attualmente `404`; non è stato salvato.
- La libreria esterna referenziata `https://cdnjs.cloudflare.com/ajax/libs/docx/8.5.0/docx.umd.min.js` è stata verificata e risulta attualmente `404`; non è stata salvata.

## Verdetto

`CML_002R_PUBLISHED_RUNTIME_RECOVERY_READY`
