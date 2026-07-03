# CML-287 - Roadmap Residual UX Closure Audit

## Attività svolta

- Verificato stato git e baseline post CML-286.
- Analizzati i documenti di governance: PROJECT-STATE.md, PRODUCT-MATURITY-PROGRESS.md, PRODUCT-USABILITY-BACKLOG.md, PRODUCT-USABILITY-AND-UX-MATURITY-ROADMAP.md, PRODUCT-MATURITY-ACCEPTANCE-CRITERIA.md.
- Verificato stato di PM-04, UX-001, UX-009, UX-003, UX-006.
- Selezionata opzione di roadmap: **B — Prossima slice runtime minima su UX-001 (CML-293)**.
- Aggiornati PROJECT-STATE.md, PRODUCT-MATURITY-PROGRESS.md, REPO-MOVELOG.md.

## Stato PM-04

| Voce | Stato | Slice |
|---|---|---|
| UX-001 Logiche miste | PARZIALMENTE RISOLTO | CML-293 |
| UX-003 Indicatori | RISOLTO | CML-285 |
| UX-006 Lessico Curriculum | RISOLTO | CML-285 |
| UX-011 Testata sovraccarica | TODO | CML-293 |
| UX-013 Indicatori duplicati | TODO | CML-295 |
| UX-014 Fonti non contestualizzate | TODO | CML-296 |
| UX-015 Proposte 2025 non chiare | TODO | CML-297 |
| UX-022 Terminologia tecnica | TODO | CML-304 |

**Progresso**: 55% → 70% atteso dopo CML-293 (chiusura UX-001 + UX-011).

## Stato UX-009

| Voce | Stato | Prossima slice |
|---|---|---|
| UX-009 Badge non univoci | PARZIALMENTE RISOLTO (CML-283, CML-285) | CML-291 |

La parzialità riguarda l'estensione dell'uniformazione oltre la sezione Curriculum (Esportazioni, Didattica). P2, non blocca il critical path.

## Verifica UX-003 / UX-006

Entrambe correttamente classificate come RISOLTO. Nessuna regressione rilevata.

## Decisione di roadmap

**Scelta**: Opzione B — CML-293 come prossima slice operativa.
**Motivo**: UX-001 è P0 e blocca PM-04. CML-293 risolve UX-001 e UX-011 simultaneamente.

## Azioni in sospeso

- CML-293 rimane da schedulare come prossima slice runtime.
- CML-291 (UX-009) e UX items minori rimangono nel backlog.
- Aggiornamento PRODUCT-MATURITY-PROGRESS.md: allineata ultima slice a CML-286, prossima slice a CML-293.

## File modificati

- docs/03_execution/CML-287.md
- report/CML-287_roadmap_residual_ux_closure_audit.md
- docs/02_system/PROJECT-STATE.md
- docs/02_system/PRODUCT-MATURITY-PROGRESS.md
- docs/REPO-MOVELOG.md
