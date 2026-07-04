# CML-374 — Curriculum Runtime Access Residual Hardcode Audit

## Meta

- **Data audit:** 2026-07-04
- **HEAD auditato:** `43a932d` (CML-373 commit)
- **Branch:** `codex/cml-372-get-units-for-discipline`
- **Slice type:** docs-only
- **Auditor:** AI agent (opencode)

## Perimetro

Certificare zero residui hardcoded disciplinari nei runtime files dopo la catena CML-371 → CML-372 → CML-373.

## Tabella audit

| # | Criterio | Risultato | Evidenza |
|---|----------|-----------|----------|
| 1 | `TECNOLOGIA_NORM` / `TECNOLOGIA_NORM_DATA` assenti | ✅ PASS | 0 hits in entrambi i runtime |
| 2 | Pattern `*_NORM` residui assenti | ✅ PASS | 0 hits (nessun `MUSICA_NORM` o simili) |
| 3 | Accessi dot-direct `ALL_CURRICULUM_DATA.<disciplina>` assenti | ✅ PASS | 0 hits — tutto in bracket notation |
| 4 | Branch `discKey === 'tecnologia'` assenti | ✅ PASS | 0 hits |
| 5 | `validate-cml-normalized-curriculum.mjs` | ✅ PASS | overallValid: true, 14/14 |
| 6 | `test-runtime-mappa-dati-shape.mjs` | ✅ PASS | overall: PASS, 14/14 |

## Comandi eseguiti

```bash
grep -R "TECNOLOGIA_NORM\|TECNOLOGIA_NORM_DATA" index.html _published_snapshot/netlify-current/index.html
→ (nessun output)

grep -R "_NORM" index.html _published_snapshot/netlify-current/index.html
→ (nessun output)

grep -R "ALL_CURRICULUM_DATA\." index.html _published_snapshot/netlify-current/index.html
→ (nessun output)

grep -R "discKey === 'tecnologia'" index.html _published_snapshot/netlify-current/index.html
→ (nessun output)

node tools/validate-cml-normalized-curriculum.mjs | grep overallValid
→ "overallValid": true

node tools/test-runtime-mappa-dati-shape.mjs | grep overall
→ overall: PASS
```

## Dettaglio accessi ALL_CURRICULUM_DATA

Tutti gli accessi runtime a `ALL_CURRICULUM_DATA` avvengono esclusivamente tramite:
- `ALL_CURRICULUM_DATA[discKey]` (nei helper)
- `ALL_CURRICULUM_DATA[discKey].unitaApprendimento` (nei helper)

Nessun accesso diretto per disciplina (`ALL_CURRICULUM_DATA.tecnologia`, `ALL_CURRICULUM_DATA.italiano`, ecc.) nei runtime files.

## Verdict formale

```text
CML_374_CURRICULUM_RUNTIME_ACCESS_RESIDUAL_HARDCODE_AUDIT_READY_LOCAL_NOT_PUSHED
```

## Riepilogo catena

| CML | Titolo | Stato |
|-----|--------|-------|
| CML-371 | MAPPA_DATI_INDEX access helper | READY_LOCAL_NOT_PUSHED |
| CML-372 | getUnitsForDiscipline and Tecnologia Guard Removal | READY_LOCAL_NOT_PUSHED |
| CML-373 | TECNOLOGIA_NORM Dead Code Removal | READY_LOCAL_NOT_PUSHED |
| CML-374 | Curriculum Runtime Access Residual Hardcode Audit | READY_LOCAL_NOT_PUSHED |
