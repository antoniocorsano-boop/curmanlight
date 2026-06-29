# CML-008R-FIX — Markdown Export Decision Summary Alignment

## Scopo

Micro-correzione dell'export Markdown Tecnologia per allineare sintesi decisionale, dettaglio proposte e voci mantenute senza ambiguità.

## Problema rilevato in produzione

La sintesi mostrava "Da decidere: 12" ma il dettaglio proposte elencava solo 8 voci. Le 4 voci invarianti non avevano una sezione dedicata, creando confusione.

## Modifiche applicate

| Modifica          | Dettaglio                                                                                                                                        |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| Etichetta sintesi | "Da decidere" → "Voci da validare" (mostra 12, il totale)                                                                                        |
| Nota post-sintesi | "Le voci invarianti richiedono conferma come mantenimento del curricolo vigente; le voci modificate richiedono valutazione della proposta 2025." |
| Titolo dettaglio  | "Dettaglio delle proposte di revisione" → "Dettaglio delle proposte di modifica / Gap 2025"                                                      |
| Nota metodologica | Aggiunto "mantenimenti"                                                                                                                          |
| Nuova sezione     | "Voci mantenute da validare" con tabella Area / Testo vigente mantenuto / Stato                                                                  |
| Doppio separatore | Rimosso prima del footer                                                                                                                         |

## Chiarimento voci

| Categoria                       | Conteggio | Sezione                                         |
| ------------------------------- | --------- | ----------------------------------------------- |
| Proposte di modifica / Gap 2025 | 8         | Dettaglio delle proposte di modifica / Gap 2025 |
| Voci mantenute da confermare    | 4         | Voci mantenute da validare                      |
| **Voci da validare**            | **12**    | Sintesi delle decisioni                         |

## Verifiche

- [x] Dettaglio modifiche mostra 8 proposte
- [x] Voci mantenute mostra 4 elementi
- [x] "Voci da validare" mostra 12
- [x] Footer pulito, nessun D.M. 221/2025
- [x] Doppio separatore rimosso
- [x] Nessuna modifica funzionale
- [x] Nessuna modifica a PDF/sw.js/_headers/assets
- [x] Nessun backend/API/auth/Netlify Forms
- [x] Nessun deploy
- [x] Smoke test passato

## Output finale

```
CML_008R_FIX_MARKDOWN_DECISION_SUMMARY_READY
hash: da definire post-commit
stato: micro-correzione completata, smoke passato
```
