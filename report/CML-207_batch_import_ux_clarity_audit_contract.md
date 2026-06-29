# CML-207 - BATCH_IMPORT_UX_CLARITY_AUDIT_CONTRACT

## 1. Baseline

| Item                   | Value           |
| ---------------------- | --------------- |
| Repo                   | `curmanlight`   |
| Branch                 | `main`          |
| Start commit           | `a3481e4`       |
| `origin/main` at start | `a3481e4`       |
| Working tree at start  | Clean           |
| Slice type             | Audit docs-only |
| Deploy                 | None            |
| Push                   | None            |
| Secrets                | None            |

## 2. Current UX Findings

### 2.1 Teacher Proposal Import (Department UI)

- **Entry point**: button "Importa proposte .cml" with `<input type="file" multiple accept=".cml">`
- **Pre-importer feedback**: "Seleziona almeno un file .cml." if no files selected
- **Post-importer feedback**: toast "✅ Proposte docenti importate localmente" or "⚠️ Nessun file .cml valido importato"
- **File list**: cards with `valid`/`invalid` class, filename, message, and extra info (duplicate, warnings, missing fields)
- **Warnings**: rendered inline from `file.warnings.join("; ")`
- **Mixed-discipline**: info chip "ℹ️ Sono presenti discipline diverse: il dato è segnalato ma non blocca la lettura."
- **Duplicate**: "Duplicato probabile" chip in file card and as proposal issue
- **Grouping**: by `discipline` → `status` with `<section>` headings
- **Preview**: none — files parsed and imported immediately
- **Recovery guidance**: none explicit beyond error messages

### 2.2 Department Outcome Import (Referent UI)

- **Entry point**: button with role-access gate + `<input type="file" multiple accept=".cml">`
- **Pre-importer feedback**: "Seleziona almeno un file .cml."
- **Post-importer feedback**: toast "✅ Esiti dipartimentali importati localmente" or similar warning
- **File list**: list items with `valid`/`invalid` class, filename, message, warnings, missing
- **Mixed-discipline**: same info chip as department
- **Duplicate**: flagged in state but **not rendered as visible chip** (inconsistency with department)
- **Outcome rendering**: cards with header (discipline, status), details (totals by handling type)
- **Preview**: none
- **Recovery guidance**: none explicit

### 2.3 Common Patterns

| Pattern               | Department                                | Referent               |
| --------------------- | ----------------------------------------- | ---------------------- |
| Multi-file selection  | `<input multiple>`                        | `<input multiple>`     |
| Role gate             | No                                        | Yes                    |
| Validation codes      | Yes                                       | Yes                    |
| Warnings array        | Yes (inline)                              | Yes (inline)           |
| Duplicate chip        | Yes                                       | **No** (inconsistency) |
| Mixed-discipline chip | Yes                                       | Yes                    |
| Summary stats         | Yes (6 blocks)                            | Yes (6 blocks)         |
| Empty state           | "I file non validi sono stati esclusi..." | N/A                    |
| Fallback message      | Manual download hint                      | N/A                    |

## 3. UX Gaps by Severity

### P1 — High Impact

| #   | Gap                               | Impact                                   |
| --- | --------------------------------- | ---------------------------------------- |
| 1   | No preview before import          | User imports blindly                     |
| 2   | Duplicate rendering inconsistency | Referent hides duplicate flag visually   |
| 3   | Mixed-discipline message generic  | Doesn't list which disciplines are mixed |

### P2 — Medium Impact

| #   | Gap                              | Impact                                      |
| --- | -------------------------------- | ------------------------------------------- |
| 4   | No compact import summary        | Overview buried in card layout              |
| 5   | No recovery guidance per error   | User infers next action                     |
| 6   | File size warnings not prominent | Large files slow UI; warning is inline only |

### P3 — Low Impact

| #   | Gap                    | Impact                           |
| --- | ---------------------- | -------------------------------- |
| 7   | No drag-and-drop       | Must use file picker             |
| 8   | No file count feedback | Could select 100+ files silently |
| 9   | No reset/clear import  | Must reload page                 |

## 4. Selected Minimal UX Increment (CML-208)

Four focused UI-only changes:

1. **Helper text for multi-file selection** — clarifies that multiple `.cml` files can be selected at once (P1)
2. **Mixed-discipline list warning** — shows actual discipline names in the chip (P1)
3. **Duplicate chip in referent** — consistent visual "Duplicato probabile" chip (P1)
4. **Compact import summary banner** — "Importati N file: M validi, K non riconoscibili" (P2)

## 5. Rejected Enhancements

- **Drag-and-drop**: P3, adds complexity without strong demand
- **Preview panel**: P1 but requires significant new UI state
- **File count limit**: P3, no current pain point
- **Reset button**: P3, user can reload
- **Schema/validator/export changes**: out of scope

## 6. CML-208 Scope

- **File**: `_published_snapshot/netlify-current/index.html`
- **Changes**: helper text, mixed-discipline chip enhancement, duplicate chip in referent, summary banner
- **Constraints**: no schema, validator, export/import behavior, dependency, or content changes

## 7. Compatibility

- Existing `.cml` files: unaffected
- Validators: unaffected
- Export: unaffected
- Batch logic: unaffected (UI-only)
