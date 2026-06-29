# CML-002E — PDF cache hard reset

## Obiettivo

Risolvere il caso di utenti che vedono ancora la vecchia versione cacheata del PDF creando una nuova URL fisica del PDF corretto, aggiornando tutti i link pubblicabili e aggiungendo intestazioni anti-cache.

## Attività

1. Branch: `cml-002e-pdf-cache-hard-reset` da `master` (HEAD `67c4db4`)
2. Copiato `Corso_CurricoloDonMilani_IN2025.pdf` → `Corso_CurricoloDonMilani_IN2025_arianese_20260620.pdf`
3. Verificati byte-identici (SHA256: `DD9E1961...`)
4. Aggiornati 4 link utente in 2 file HTML verso il nuovo nome
5. Creato `_headers` con Cache-Control: no-store per PDF e sw.js
6. Analizzato `sw.js`: già ok (skipWaiting + clients.claim presenti, nessun PDF in precache)
7. Verificato che il vecchio PDF sia presente ma non linkato

## File modificati/creati

- `_published_snapshot/netlify-current/Corso_CurricoloDonMilani_IN2025_arianese_20260620.pdf` (nuovo)
- `_published_snapshot/netlify-current/index.html` (link aggiornati)
- `_published_snapshot/netlify-current/motto-non-multa-sed-multum.html` (link aggiornato)
- `_published_snapshot/netlify-current/_headers` (nuovo)
- `docs/03_execution/CML-002E.md` (questo)
- `report/CML-002E_pdf_cache_hard_reset.md`

## Verdetto

`CML_002E_PDF_CACHE_HARD_RESET_READY`
