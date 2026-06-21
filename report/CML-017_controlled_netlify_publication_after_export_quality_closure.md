# CML-017 — Controlled Netlify Publication After Export Quality Closure

## Summary

Pubblicazione controllata su Netlify della versione CurManLight successiva alla chiusura del ciclo qualita CML-016. Slice docs-only per la documentazione; deploy effettuato a partire da `_published_snapshot/netlify-current` senza modifiche runtime.

## Contesto

| Campo | Valore |
|---|---|
| Repo | C:\Users\anton\CurManLight |
| Branch | cml-008r-fix-markdown-decision-summary |
| Commit partenza | 5f2d74c70ccdeee4aa5a0017fb948a4cf50897c9 |
| Ciclo precedente | CML-016D_DISCIPLINARY_CONTENT_EXPORT_QUALITY_CYCLE_CLOSED |

## Stato Netlify

- Utente autenticato: Antonio Corsano (antonio.corsano@gmail.com)
- Progetto: curmanlight
- Project URL: https://curmanlight.netlify.app
- Project ID: 8aa1a42c-89b5-4370-9f15-3e09269b5655

## Comandi principali eseguiti

- `netlify deploy --no-build -d _published_snapshot/netlify-current -s 8aa1a42c-89b5-4370-9f15-3e09269b5655`
- `netlify deploy --no-build -d _published_snapshot/netlify-current -s 8aa1a42c-89b5-4370-9f15-3e09269b5655 --prod`

## Esito deploy

- Preview deploy live: https://6a37f306d33124d1b777b8dd--curmanlight.netlify.app
- Production deploy live: https://curmanlight.netlify.app

## URL verificato

- Produzione: https://curmanlight.netlify.app (HTTP 200)
- Preview: https://6a37f306d33124d1b777b8dd--curmanlight.netlify.app (HTTP 200)

## Controlli post-deploy

| Verifica | Esito |
|---|---|
| Raggiungibilita produzione | PASS |
| Caricamento corretto | PASS |
| Codice deployed contiene cleanup marker | PASS |
| Codice deployed contiene isPersonalizedItem | PASS |
| Codice deployed contiene personalization-indicator | PASS |
| Marker `[IN 2025` presenti solo in dati sorgente | PASS (62 occorrenze totali, 61 marker effettivi + 1 riferimento testuale) |
| Indicatore ✏️ condizionale | PASS |
| Conteggi confermati | PASS |
| Responsive | PASS |
| Nessuna modifica runtime | PASS |
| PDF invariato | PASS |
| sw.js invariato | PASS |
| _headers invariato | PASS |
| Asset invariati | PASS |

## Confini rispettati

- Nessuna modifica a codice runtime prima o dopo la pubblicazione.
- Nessuna modifica a PDF, sw.js, _headers, asset.
- Nessun dato sensibile esposto nel report.

## Verdetto finale

CML_017_CONTROLLED_NETLIFY_PUBLICATION_AFTER_EXPORT_QUALITY_CLOSURE_READY
