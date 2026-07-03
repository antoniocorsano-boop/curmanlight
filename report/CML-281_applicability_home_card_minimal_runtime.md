# Report CML-281 — Applicability Home Card Minimal Runtime

## Summary

Implemented the first runtime entry of the Applicability Layer (CML-270): a "Curricolo applicabile" card in the Home dashboard that reads work context (CML-279) and shows prudent applicability state.

## Files modified

| File | Type | Lines changed |
|---|---|---|
| `index.html` | Runtime | +~60 |
| `_published_snapshot/netlify-current/index.html` | Snapshot sync | +~60 |

## Files created

| File | Type |
|---|---|
| `docs/03_execution/CML-281.md` | Execution doc |
| `report/CML-281_applicability_home_card_minimal_runtime.md` | This report |

## Scope

- New "Curricolo applicabile" card in Home with orange left border (#e65100)
- Three states: no context, incomplete context, applicability to verify
- Reads context from `cml_work_context_v1` via `loadWorkContext()`
- One new SVG icon: `icon-target`
- CSS for card, summary, warning, detail
- JS function `renderApplicabilityCard()` with full state rendering
- Integration via `renderWorkContextSummary()` — covers init, apply, reset, setTab home
- "Applicazione per classi" action button (shows toast "sezione in preparazione")
- Institutional warning about IN 2025 proposals vs vigente

## States implemented

1. **Contesto non impostato** — no context data at all
2. **Contesto incompleto** — context exists but missing year/class
3. **Applicabilità da verificare** — year + class set, prudent message

## Constraints respected

- No curriculum data modifications
- No .cml schema changes
- No export/import modifications
- No new dependencies
- No backend
- No personal data
- No hardcoded institutional rules
- Root/snapshot hash parity maintained
- CML-276 Home validated UI preserved
- CML-279 Work Context preserved (read-only)

## Gate results

| Gate | Result |
|---|---|
| `git status --short` | Clean (only 2 files) |
| `git diff --check` | Clean |
| Hash parity root/snapshot | PASS |
| `validate-cml-normalized-curriculum.mjs` | PASS (14/14 valid) |
| `test-runtime-mappa-dati-shape.mjs` | PASS (14/14) |
| Smoke: card visible | PASS |
| Smoke: states correct | PASS |
| Smoke: institutional warning | PASS |

## Verdict

`CML_281_APPLICABILITY_HOME_CARD_MINIMAL_RUNTIME_READY_LOCAL_NOT_PUSHED`
