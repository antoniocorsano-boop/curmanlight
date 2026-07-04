# Report: CML-350 — PM-07 Cross-Tab Button Uniformity Microfix

## Branch e baseline
- Branch: `codex/cml-350-cross-tab-button-uniformity-microfix`
- Commit iniziale: `b41d9b7` (merge CML-349 su `main`)
- Dipendenza: CML-349 (PM-07 Residual Uniformity Selection Audit)
- Tipo slice: runtime microfix
- Macroprogramma: PM-07 Uniformità

## Perimetro
Allineamento `border-radius` a 8px per quattro classi pulsante cross-tab:
- `.filter-btn`: 18px → 8px
- `.export-btn`: 7px → 8px
- `.act`: 6px → 8px
- `.add-btn`: 7px → 8px

Solo CSS. Nessuna modifica HTML, JS, logica, dati, export/import.

## File modificati
- `index.html`
- `_published_snapshot/netlify-current/index.html`

## Fuori perimetro
- Nessuna modifica a `.cml`, import/export, localStorage/sessionStorage
- Nessuna modifica a service worker, workflow Pages, deploy config
- Nessuna modifica a `onclick`, `id`, `aria-label`, funzioni JS
- Nessuna modifica a layout, navigazione, card, callout
- Nessuna nuova dipendenza, build, backend, API, OAuth
- Nessun push, nessun PR, nessun deploy

## Controlli
- `git status --short --branch`: PASS
- `git diff --check`: PASS
- `node tools/validate-cml-normalized-curriculum.mjs`: PASS
- `node tools/test-runtime-mappa-dati-shape.mjs`: PASS
- Runtime modificato: Sì (solo CSS)
- Import/export modificati: No
- Working tree finale pulito: Sì (solo file di questa slice)

## Commit
`8274623` su branch `codex/cml-350-cross-tab-button-uniformity-microfix`

## Verdict
`CML_350_MERGED_AND_PUBLISHED`

## Stato post-merge e pubblicazione
- PR: #8
- Merge su `main`: eseguito
- Commit `main` post-merge: `5376298`
- Workflow GitHub Pages: `28701067028` — success
- URL pubblico: https://antoniocorsano-boop.github.io/curmanlight/
- Verifica HTTP: 200
- Smoke pubblico: PASS
- Stato finale: `CML_350_MERGED_AND_PUBLISHED`
