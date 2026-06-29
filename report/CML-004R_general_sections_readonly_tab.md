# CML-004R — Institutional General Sections Read-only Tab Report

## Identity

- **Branch**: `cml-004r-general-sections-readonly-tab`
- **Base**: `master@468ef3d` (CML-004R-SELECT merged)
- **Starting commit**: `468ef3d` — `docs: select read-only general curriculum sections`
- **Cycle**: CML-004R (implementation)

## Objective

Implement a new consultative read-only tab "Sezioni generali" in the published CurManLight runtime, following the recommendation from CML-004R-SELECT (Option C).

## Source Document

`_handoff/sources/Curricolo disciplinare WORD.docx` — general sections only

## General Sections Exposed

1. Premessa
2. Nuove Indicazioni Nazionali 2025 (D.M. 221/2025)
3. Riferimenti normativi (8 legislation references)
4. Profilo dello studente
5. Competenze chiave al termine del primo ciclo (8 competences)
6. Obiettivi generali del processo formativo (summary)
7. Raccordo verticale tra ordini di scuola

## Files Modified

- `_published_snapshot/netlify-current/index.html` — 113 insertions, 2 deletions

## Confirmation Checklist

| Check                                           | Status |
| ----------------------------------------------- | ------ |
| New tab "Sezioni generali" visible              | ✓      |
| Tab is read-only (no inputs, no edit buttons)   | ✓      |
| 14 disciplines preserved                        | ✓      |
| IN2012→IN2025 comparison preserved              | ✓      |
| approve/reject/edit workflow preserved          | ✓      |
| Progress tracking preserved                     | ✓      |
| PDF cache-safe link preserved                   | ✓      |
| No old PDF referenced as user link              | ✓      |
| No prototype code copied                        | ✓      |
| No sw.js modified                               | ✓      |
| No _headers modified                            | ✓      |
| No PDF modified                                 | ✓      |
| No localStorage keys added                      | ✓      |
| No backend/API/auth/Netlify Forms               | ✓      |
| No deploy                                       | ✓      |
| `git diff --check` clean                        | ✓      |
| Only intended file modified (`git diff --stat`) | ✓      |

## Residual Risks

1. Content may need future refinement — the 8 sections are a first increment, selected from ~38K chars of source material. If users need more details, additional sections can be added.
2. 4 tabs at 400px viewport are tight but functional with responsive CSS.
3. The "Obiettivi generali" section is summarized (full content is ~24K chars) — users needing the complete text must refer to the source document.

## Recommended Smoke Test

```
npx serve _published_snapshot/netlify-current
```

Verify: 4 tabs render correctly, all workflows preserved in existing tabs, new tab shows content without JS errors.

## Final Verdict

```
CML_004R_GENERAL_SECTIONS_READONLY_READY
```
