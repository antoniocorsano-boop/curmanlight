# CML-324 — PM-04 Post-Remediation Real User Retest — Report

**Slice:** CML-324
**Tipo:** docs-only (post-remediation retest)
**Stato:** READY_LOCAL_NOT_PUSHED
**Data:** 2026-07-03

## Tester reale

`REAL_USER_RETEST_NOT_AVAILABLE`

Verifica condotta come proxy tecnico sui marker live GitHub Pages.

## Verifica live

| Marker | Esito |
|--------|-------|
| HTTP | 200 |
| "Ambiente curricolare" | presente |
| "File e salvataggio" | presente |
| "Bozza di lavoro" | presente |
| "Sola consultazione" | presente |
| "Indicazioni Nazionali 2012" | presente |
| "Indicazioni Nazionali 2025" | presente |
| "Motto e metodo" | presente |
| "responsabilità" | pulita |
| FE0F live | 0 |
| FFFD live | 0 |

## Matrice CML-317 vs CML-324

| Scenario | CML-317 | CML-324 | Migliorato |
|----------|---------|---------|------------|
| A — Home | PARTIAL/FAIL | PARTIAL | sì |
| B — Curriculum | PASS riserva | PASS | sì |
| C — Disciplina | PARTIAL | PARTIAL | parziale |
| D — Linguaggio | FAIL/PARTIAL | PARTIAL | sì |
| E — Mojibake | FAIL | PASS | sì |
| F — Console | NOT TESTED | NOT TESTED | = |

## Decisione

`READY_FOR_FORMAL_CLOSURE_REVIEW`

PM-04: 55%, non chiusa.