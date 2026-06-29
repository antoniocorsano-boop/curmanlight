# CML-008R — Controlled Netlify Publication Report

## Scopo

Pubblicare su Netlify la fix CML-008R-FIX (Markdown decision summary alignment) già validata e auditata.

## Preflight

| Check                           | Esito                                                                |
| ------------------------------- | -------------------------------------------------------------------- |
| Branch                          | `cml-008r-fix-markdown-decision-summary`                             |
| HEAD commit                     | `8c92fea` (docs: close CML-008R markdown decision summary fix audit) |
| Working tree                    | CLEAN                                                                |
| File da pubblicare              | `_published_snapshot/netlify-current/index.html`                     |
| PDF, sw.js, _headers, assets    | Invariati                                                            |
| Contenuto pre-deploy verificato | ✅                                                                   |

## Content verification

| Elemento                                                   | Stato |
| ---------------------------------------------------------- | ----- |
| "Voci da validare" presente                                | ✅    |
| "Dettaglio delle proposte di modifica / Gap 2025" presente | ✅    |
| "Voci mantenute da validare" presente                      | ✅    |
| "Da decidere" assente                                      | ✅    |
| D.M. 221/2025 nel disclaimer assente                       | ✅    |
| 12 voci totali / 8 Gap 2025 / 4 mantenute distinte         | ✅    |

## Deploy

| Comando           | `npx netlify deploy --prod --dir _published_snapshot/netlify-current` |
| ----------------- | --------------------------------------------------------------------- |
| Sito              | `curmanlight` (ID: `8aa1a42c-89b5-4370-9f15-3e09269b5655`)            |
| URL produzione    | `https://curmanlight.netlify.app`                                     |
| Unique deploy URL | `https://6a37838939d8c88a7b18eaed--curmanlight.netlify.app`           |
| Durata            | 4 secondi                                                             |

## Post-deploy verification

| Check                                                      | Esito |
| ---------------------------------------------------------- | ----- |
| Pagina risponde HTTP 200                                   | ✅    |
| "Voci da validare" presente                                | ✅    |
| "Dettaglio delle proposte di modifica / Gap 2025" presente | ✅    |
| "Voci mantenute da validare" presente                      | ✅    |
| "Da decidere" assente                                      | ✅    |
| Disclaimer pulito (no D.M. 221/2025)                       | ✅    |
| PDF cache-safe preservato                                  | ✅    |
| Vecchio PDF non referenziato                               | ✅    |

## Modifiche apportate

- Nessuna modifica funzionale
- Nessuna modifica a PDF, sw.js, _headers, assets
- Nessuna modifica a configurazioni Netlify
- Nessun merge
- Solo deploy del file `index.html` già modificato

## Verdetto finale

Deploy controllato completato e verificato positivamente.
