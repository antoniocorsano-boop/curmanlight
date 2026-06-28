# CML-215 - Minimal Evidence Panel Runtime Increment

Data: 2026-06-27

## Summary

Generalized the Evidenze/UDA panel from Tecnologia-only to all 14 disciplines in the Didattica tab, based on CML-214 contract and CML-213 evidence coverage confirmation.

## Changes

**File**: `_published_snapshot/netlify-current/index.html` (93 insertions, 27 deletions)

### What changed

1. **CSS**: evidence-badge classes, action buttons, reset bar
2. **Function** `getDisciplineEvidenceData()`: returns unit data for current discipline from `ALL_CURRICULUM_DATA`
3. **Function** `renderDidattica()`: now uses generic data source
4. **Function** `getEvidenceState()`, `setEvidenceState()`, `resetEvidenceStates()`: localStorage-based evidence marking
5. **Data** `ALL_CURRICULUM_DATA`: inline object with curriculum data for all 14 disciplines
6. **Text**: "Tecnologia" → generic "curricolo" in evidence section labels
7. **Fix**: Arte key `arte-e-immagine` → `arte-immagine`, Latino key `latino--lel-` → `latino-lel`

### What did NOT change

- Curriculum JSON files
- .cml schema, export/import
- UDA generator, UDA export
- Persistent UDA data model
- Validator, shape test
- Service worker, manifest
- Secrets, deploy

## Smoke results

| Check | Result |
|---|---|
| Validator | 14/14 PASS |
| Shape test | 14/14 PASS |
| Hash navigation | 14/14 PASS |
| Evidence panel coverage | 14/14 |
| Tecnologia-only references | Removed |
| Secret scan | Clean |

## Verdict

`CML_215_MINIMAL_EVIDENCE_PANEL_RUNTIME_INCREMENT_COMPLETE`
