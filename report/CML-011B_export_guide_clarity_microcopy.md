# CML-011B — Report

**Task**: Export and Guide Clarity Microcopy  
**Data**: 21/06/2026  
**Base**: CML-011A (6c97da4) — Export and Guide Clarity Selection Audit

## Intervento

Implementazione Opzione A (microcopy) + fix C2 (disclaimer validazione):

1. **Toolbar export**: aggiunto `(confronto)` a tutti e 4 i pulsanti (Word, Copia per Word, Markdown, PDF)
2. **Curricolo Definitivo**: aggiunto `(definitivo)` a Copia per Word e PDF (mancanti)
3. **Disclaimer validazione**: aggiunto "⚠️ Documento di lavoro — da validare. Non sostituisce delibera del Collegio Docenti." dopo la sezione Curricolo Definitivo

Tutte le etichette sono autoesplicative e non richiedono tooltip aggiuntivi.

## File modificati

- `_published_snapshot/netlify-current/index.html` (7 insertions, 6 deletions — solo testo)
- `docs/03_execution/CML-011B.md` (creato)
- `report/CML-011B_export_guide_clarity_microcopy.md` (creato)
- `docs/REPO-MOVELOG.md` (aggiornato)

## Verifica

- [x] Toolbar export: Word (confronto), Copia per Word (confronto), Markdown (confronto), PDF (confronto)
- [x] Curricolo Definitivo: Word (definitivo), Copia per Word (definitivo), Markdown (definitivo), PDF (definitivo)
- [x] Disclaimer: "⚠️ Documento di lavoro — da validare. Non sostituisce delibera del Collegio Docenti."
- [x] Nessuna regressione logica (approvazione/rifiuto, conteggi, card, CSS strutturale)
- [x] Deployato su Netlify: https://curmanlight.netlify.app
