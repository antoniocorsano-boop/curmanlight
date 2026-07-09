# CML-400 — User Validation Entry Runtime Report

## Summary

Home entry point for teacher-guided validation test, consistent with CML-399 scenario pack.

## Changes

### Home card (`.home-validation-entry`)

- Positioned after "Operazioni di supporto" cards, before context card
- Purple left border (`#6a1b9a`) for visual distinction
- Title: "Partecipa al test guidato"
- Description: "Aiuta a verificare se lo strumento è chiaro, utile e coerente con il lavoro scolastico reale."
- Button: "Avvia test guidato" → calls `openValidationPanel()`

### Validation dialog (modal overlay)

Reuses established modal pattern (`.validation-overlay` + `.validation-dialog`):
- Title: "Test guidato per docenti"
- Intro: disclaimer about usability observation
- Scenario block: teacher narrative from CML-399
- Tasks list: 5 observation tasks (numbered)
- Textarea: "Annotazioni non vincolanti" with placeholder
- Prudent text: "Le annotazioni sono materiale di riflessione..."
- Actions: "Esporta osservazioni" (`.txt`) + "Chiudi"

### Export function

Reuses existing `downloadBlob()`:
- Filename: `curmanlight-test-guidato-osservazioni.txt`
- Content: data, contesto, scenario, annotations
- No remote saving, no tracking, no endpoint

## Pair alignment

Both `index.html` and `_published_snapshot/netlify-current/index.html` patched with identical changes.

## Validators

- `git diff --check`: PASS
- `validate-cml-normalized-curriculum.mjs`: 14/14 PASS
- `test-runtime-mappa-dati-shape.mjs`: 14/14 PASS

## Constraints respected

- No backend, no accounts, no remote send
- No curriculum data modified
- No service-worker changes
- No external libraries
- No `git add .`
- No push
