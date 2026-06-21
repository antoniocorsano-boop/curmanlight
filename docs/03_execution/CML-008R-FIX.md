# CML-008R-FIX — Markdown Export Decision Summary Alignment

## Stato iniziale

| Campo | Valore |
|---|---|
| Branch | `cml-008r-fix-markdown-decision-summary` |
| HEAD partenza | `dc179ce` (master con CML-008R pubblicato) |
| Working tree | pulita |
| File modificato | `_published_snapshot/netlify-current/index.html` |
| File creati | `docs/03_execution/CML-008R-FIX.md`, `report/CML-008R_fix_markdown_decision_summary.md` |

## Problema

Nell'export Markdown Tecnologia il summary mostrava:

| Da decidere | 12 |

ma il dettaglio proposte mostrava solo 8 voci modificate. Questo generava ambiguità: l'utente si aspettava 12 righe nel dettaglio.

Causa: le 4 voci invarianti (status="ok") non venivano incluse nel dettaglio proposte, ma il conteggio "Da decidere" aggregava tutte le voci non approvate/rifiutate.

## Modifiche applicate

### modelToMarkdown() — solo ramo Tecnologia (includeDecisionSummary + introNote)

1. **Sintesi decisioni**: "Da decidere" → "Voci da validare" con totale voci (12)
2. **Nota esplicativa**: aggiunta subito dopo la tabella sintesi
3. **Sezione dettaglio**: rinominata "Dettaglio delle proposte di modifica / Gap 2025"
4. **Nota metodologica**: aggiornata con "mantenimenti"
5. **Nuova sezione**: "Voci mantenute da validare" — elenca le 4 voci invarianti con tabella Area / Testo vigente mantenuto / Stato
6. **Doppio separatore**: rimosso il `---` finale dalla sezione dettaglio e dalla sezione voci mantenute; unico `---` prima del disclaimer
7. **Footer**: invariato, pulito, senza D.M. 221/2025

### Coerenza dati

| Elemento | Conteggio |
|---|---|
| Voci modificate / Gap 2025 (dettaglio) | 8 |
| Voci mantenute da validare | 4 |
| Voci da validare (sintesi) | 12 |
| Totale voci (sintesi) | 12 |

### File non modificati

- PDF (`Corso_CurricoloDonMilani_IN2025_arianese_20260620.pdf`) — preservato
- sw.js — non toccato
- _headers — non toccato
- assets — non toccati
- localStorage — non modificato
- Dati 14 discipline — non modificati
- Workflow approve/reject/edit — preservato
- Confronto IN2012→IN2025 — preservato
- DOCX — non introdotto
- PDF browser — non introdotto
- Export completo — non introdotto
- Backend/API/auth/Netlify Forms — non toccati
- Librerie esterne — non aggiunte
- Nessun deploy

## Smoke test

Server locale su `http://localhost:5000`. Verificato:

- [x] App carica
- [x] Tecnologia selezionabile
- [x] Pannello export visibile solo per Tecnologia
- [x] Genera bozza Tecnologia funziona
- [x] Markdown contiene "Voci da validare"
- [x] Markdown contiene "Dettaglio delle proposte di modifica / Gap 2025"
- [x] Dettaglio modifiche mostra 8 voci
- [x] Markdown contiene "Voci mantenute da validare"
- [x] Voci mantenute mostra 4 elementi
- [x] Nessun doppio separatore prima del footer
- [x] Footer pulito, nessun D.M. 221/2025
- [x] Copia Markdown funziona
- [x] Scarica Markdown produce .md
- [x] Approve/reject/edit preservati
- [x] PDF cache-safe preservato

## Commit

```bash
git add _published_snapshot/netlify-current/index.html docs/03_execution/CML-008R-FIX.md report/CML-008R_fix_markdown_decision_summary.md
git commit -m "fix: align tecnologia markdown decision summary"
```
