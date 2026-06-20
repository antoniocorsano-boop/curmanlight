# CML-002D — Anti-cache residual motto PDF link

Data esecuzione: 2026-06-20

## Stato Git iniziale

- Branch iniziale: `cml-002c-anti-cache-pdf-hotfix`
- Commit di partenza: `fb3fa2362808029584a4a42be2d0afabbc9be8bb`
- Working tree iniziale: pulita
- Branch creata: `cml-002d-anti-cache-residual-motto-pdf-link`

## Intervento

È stato aggiornato esclusivamente il collegamento PDF in `_published_snapshot/netlify-current/motto-non-multa-sed-multum.html`:

- prima: `Corso_CurricoloDonMilani_IN2025.pdf`
- dopo: `Corso_CurricoloDonMilani_IN2025.pdf?v=452b421`

Riferimenti PDF non versionati nel runtime pubblicabile:

- prima: **1**
- dopo: **0**

## Invarianti

- PDF invariato; blob Git: `9d392ca5b72a53fda0f7b36cdccc90ba99eab494`
- `index.html` invariato; blob Git: `207414aaa83aaf7660ec34d505b82c3d600d380c`
- `sw.js` invariato; blob Git: `721be36acb3d203bb40cfce5314b102a9509f2de`
- Nessun contenuto, vista, navigazione o logica non pertinente modificata
- Nessun backend, API, autenticazione o Netlify Forms introdotto
- Nessun deploy eseguito

## File della slice

- `_published_snapshot/netlify-current/motto-non-multa-sed-multum.html`
- `docs/03_execution/CML-002D.md`
- `report/CML-002D_anti_cache_residual_motto_pdf_link.md`

## Verdetto

`CML_002D_ANTI_CACHE_RESIDUAL_LINK_READY`
