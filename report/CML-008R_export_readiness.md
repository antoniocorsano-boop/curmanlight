# CML-008R — Export Readiness: Tecnologia Markdown

```
CML_008R_EXPORT_READINESS_TECNOLOGIA_MARKDOWN_READY
```

## Stato iniziale

- **Branch:** `cml-008r-export-readiness-tecnologia-markdown-clean` (ricreata da master)
- **HEAD partenza:** `40957ea` (master con CML-007R chiuso)
- **Riferimento audit:** `dde523c` (solo consultivo, non cherry-piccato)
- **File modificato:** `_published_snapshot/netlify-current/index.html` (+202/-16, 218 righe)

## Modifiche

### Funzioni modificate (comportamento legacy preservato)

- `buildDocumentModel(onlyApproved, opts)` — filtro `disciplineFilter`
- `modelToMarkdown(model, onlyApproved, opts)` — flag strutturati (introNote, generliRef, decisionSummary, gapMarkers, disclaimer)
- `exportMarkdown(onlyApproved, disciplineFilter)` — filtro per singola disciplina

### Funzioni aggiunte

- `downloadMarkdownString()`, `copyMarkdownToClipboard()` — helper
- `generateTecnologiaBozza()`, `copyTecnologiaMarkdown()`, `downloadTecnologiaMarkdown()` — handler UI
- `_tecnologiaMarkdownCache` — cache bozza

### UI aggiunta

- Pannello export visibile solo per Tecnologia con: Genera bozza, Copia Markdown, Scarica Markdown, preview textarea

## Output Markdown

- Intestazione + nota "Documento di lavoro — da validare"
- Riferimenti 8 sezioni generali
- Sintesi decisioni
- Confronto IN2012→IN2025 con Gap 2025 markers
- Avvertenza non deliberativa

## Conferme

- ✅ Export limitato a Tecnologia
- ✅ Nessun DOCX
- ✅ Approve/reject/edit preservati
- ✅ Dati 14 discipline invariati
- ✅ Nessuna libreria esterna
- ✅ Nessuna nuova chiave localStorage
- ✅ PDF/sw.js/_headers/manifest non modificati
- ✅ Nessun backend/API/auth
- ✅ Nessun deploy
- ✅ Nessun cherry-pick da dde523c

## Refinement post-audit

Dopo lo smoke iniziale:

- ✅ Aggiunta sezione "Dettaglio delle proposte di revisione" con tabella Area/Base/Proposta/Stato
- ✅ Rinominata disciplina in "Tecnologia — raccordo verticale"
- ✅ Aggiunta nota metodologica nel dettaglio proposte
- ✅ Footer riscritto con lista Markdown pulita e citazione normativa generica
- ✅ `generateTecnologiaBozza()` passa a `onlyApproved=false` per includere voci da decidere
- ✅ Citazione D.M. 221/2025 rimossa dal footer (da validare dal gruppo di lavoro)

## Verdetto finale

```
CML_008R_EXPORT_READINESS_TECNOLOGIA_MARKDOWN_READY
hash: da definire dopo commit
stato: implementazione completata + refinements, smoke statico passato, ricostruzione pulita da master
```
