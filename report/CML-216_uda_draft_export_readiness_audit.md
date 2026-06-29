# CML-216 — UDA Draft Export Readiness Audit

Data: 2026-06-28

## Summary

Docs-only audit of readiness for introducing UDA draft/export workflow after CML-215 generalized evidence panel across all 14 disciplines. Recommends **Option B**: UDA draft preview + markdown copy/download as the safest next increment.

## Start commit

`28a0c3c` — CML-215 generalize evidence panel across 14 disciplines

## Files inspected

| File                                                            | Lines | Content                                                                   |
| --------------------------------------------------------------- | ----- | ------------------------------------------------------------------------- |
| `docs/02_system/EVIDENZE-UDA-WORKFLOW-CONTRACT.md`              | 328   | CML-214 contract: ev structures, roles, states, privacy, success criteria |
| `_published_snapshot/netlify-current/index.html`                | 5488  | Full runtime: evidence panel, UDA modeli, export functions                |
| `content/curriculum/tecnologia.normalized.json`                 | —     | 13 units, ~50 evidence items                                              |
| `content/curriculum/italiano.normalized.json`                   | —     | 14 units, ~60 evidence items                                              |
| `content/curriculum/matematica.normalized.json`                 | —     | 13 units, ~55 evidence items                                              |
| `content/curriculum/educazione-fisica.normalized.json`          | —     | 7 units, ~28 evidence items                                               |
| `content/curriculum/seconda-lingua-comunitaria.normalized.json` | —     | 6 units, ~24 evidence items                                               |

## Readiness assessment

| Area                            | Status                                                                          |
| ------------------------------- | ------------------------------------------------------------------------------- |
| Evidence panel coverage         | ✅ 14/14 disciplines                                                            |
| Evidence marking (localStorage) | ✅ `cml_evidenze_state` — adottata/adattata/non_applicabile                     |
| UDA data sources                | ✅ All fields available from curriculum data                                    |
| Export infrastructure           | ✅ downloadBlob, copyMarkdownToClipboard, downloadMarkdownString                |
| UI placement (UDA tab)          | ✅ `didattica_uda` section exists, currently Tecnologia-only hardcoded examples |
| Privacy safeguards              | ✅ Contract prohibits student data, grades, remote persistence                  |
| Validator                       | ✅ 14/14 PASS                                                                   |
| Shape test                      | ✅ 14/14 PASS                                                                   |

## Evidence-marking status

- **localStorage key**: `cml_evidenze_state`
- **States**: `proposta` (default), `adottata`, `adattata`, `non_applicabile`
- **Evidence IDs**: `{unitId}_ev_{N}` — e.g., `tec_pri_1_001_ev_0`
- **Scope**: Single key for all disciplines
- **Reset**: `resetEvidenceStates()` removes entire key
- **No upgrade risk**: UDA draft can read existing states without schema change

## UDA draft risks

| Risk                                  | Assessment                                              |
| ------------------------------------- | ------------------------------------------------------- |
| Data fragmentation                    | Low — generated on demand, not persisted                |
| Premature schema lock-in              | Low — no `.cml` change, no new data model               |
| Feature creep (grades, students)      | Low — contract forbids, CML-216 excludes explicitly     |
| Teacher confusion (draft vs approved) | Low — microcopy "bozza non approvata" in all UDA output |

## Export risks

| Risk                      | Assessment                                                                 |
| ------------------------- | -------------------------------------------------------------------------- |
| Markdown format issues    | Low — already proven in codebase (exportMarkdown, copyMarkdownToClipboard) |
| Clipboard API failures    | Low — fallback window with textarea exists                                 |
| Filename collisions       | Low — includes timestamp suffix                                            |
| .cml format contamination | None — explicitly excluded                                                 |

## Privacy assessment

| Vector                      | Risk                 | Mitigation                                      |
| --------------------------- | -------------------- | ----------------------------------------------- |
| Evidence state localStorage | None                 | Only IDs and state strings                      |
| UDA draft localStorage      | Low (if implemented) | Per contract: no student data, no grades        |
| Teacher author name         | Low                  | From settings profile, optional                 |
| Student data                | None (contract)      | Explicitly prohibited by CML-214 §10            |
| Remote sync                 | None                 | No backend, no drive for UDA in first increment |

## Option comparison

| Option                                   | Risk | Complexity | Utility | Recommendation           |
| ---------------------------------------- | ---- | ---------- | ------- | ------------------------ |
| A — Preview only, on demand              | ★☆☆  | ★☆☆        | ★★☆     | ✅ Fallback if B blocked |
| **B — Preview + markdown copy/download** | ★☆☆  | ★☆☆        | ★★★     | ✅ **Recommended**       |
| C — With localStorage persistence        | ★★☆  | ★★☆        | ★★☆     | ❌ Defer to later cycle  |
| D — .cml export extension                | ★★★  | ★★★        | ★☆☆     | ❌ Reject (per CML-214)  |
| E — Defer UDA, harden evidence           | ★☆☆  | ☆☆☆        | ★☆☆     | ❌ Too conservative      |

## Recommendation

**Option B: UDA draft preview + markdown copy/download**

Selected for CML-217:

- Reuses proven patterns (downloadBlob, copyMarkdownToClipboard)
- No `.cml` schema change
- No student data, no grades
- No persistent UDA model (generated on demand)
- localStorage limited to evidence marking only
- Aligned with CML-214 contract §14

## Proposed CML-217 acceptance criteria

1. UDA draft preview for selected discipline/unit
2. Evidence selection: defaults to `adottata` marking
3. Markdown export: clipboard + download
4. No curriculum JSON changes
5. No `.cml` schema changes
6. No student data in localStorage
7. localStorage `cml_evidenze_state` unchanged
8. UDA generated on demand (no persistent model)
9. Mobile responsive
10. Validator 14/14 PASS
11. Shape test 14/14 PASS
12. Microcopy: "bozza non approvata" / "da adattare"

## Verdict

`CML_216_UDA_DRAFT_EXPORT_READINESS_AUDIT_COMPLETE`

## Constraints confirmed

- ✅ docs-only: no runtime, no data, no schema changes
- ✅ no deploy, no push
- ✅ no secrets
- ✅ git diff --check: clean
- ✅ secret scan: clean
- ✅ HEAD and origin/main: 28a0c3c
- ✅ working tree: clean
- ✅ validator: 14/14 PASS
- ✅ shape test: 14/14 PASS
