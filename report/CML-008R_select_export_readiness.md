# CML-008R-SELECT — Export Readiness: Markdown strutturato disciplina campione Tecnologia

```
CML_008R_SELECT_EXPORT_READINESS_READY
```

## Stato iniziale

- **Branch partenza:** `cml-007r-post-consolidation-production-smoke` (HEAD `b1e3e88`, CML-006R)
- **Master contiene CML-006R:** sì, commit `b1e3e88`
- **CML-007R:** completato, produzione stabile, report in `docs/03_execution/CML-007R.md`

## Opzione selezionata

**Opzione A — Markdown strutturato per singola disciplina (Tecnologia come campione)**

### Motivazione

1. Impatto minimo: estende `buildDocumentModel()` con filtro, non refactor
2. Zero dipendenze esterne: JS nativo
3. Massimo beneficio immediato per il Dipartimento di Tecnologia
4. Comportamento legacy preservato
5. Meccanismo di filtro riutilizzabile per future estensioni
6. Output esplicitamente marcato come documento di lavoro, non deliberativo

## Perimetro implementativo

### File ammessi

- `_published_snapshot/netlify-current/index.html`

### File vietati

- `sw.js`, `_headers`, `manifest.webmanifest`, assets, PDF
- `exportWord()`, `exportPDF()`, `copyForWord()` (non modificati)

### Modifiche chiave

- `buildDocumentModel(onlyApproved, {disciplineFilter})` — filtro per singola disciplina
- `modelToMarkdown()` — flag strutturati (introNote, generliRef, decisionSummary, gapMarkers, disclaimer)
- `exportMarkdown(onlyApproved, disciplineFilter)` — nuovo parametro
- UI: pulsante "📝 Esporta Markdown (Tecnologia)" nella barra titolo disciplina (solo per Tecnologia)

## Output Markdown previsto

- Intestazione con nota "Documento di lavoro — da validare"
- Riferimenti alle 8 sezioni generali
- Sintesi decisioni (conteggi)
- Confronto IN2012↔IN2025 per ogni item
- Gap 2025 marcati
- Avvertenza finale non deliberativa

## Criteri di accettazione

1. Export singola disciplina funzionante
2. Export legacy invariato
3. Pulsante UI presente solo per Tecnologia
4. Nessuna regressione su approve/reject/edit
5. Nessuna modifica ad altri formati export

## Verdetto

```
CML_008R_SELECT_EXPORT_READINESS_READY
commit: da definire
stato: selezione completata, spec revisionata, perimetro definito, pronta per implementazione CML-008R
```
