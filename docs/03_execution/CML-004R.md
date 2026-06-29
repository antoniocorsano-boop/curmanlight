# CML-004R — Institutional General Sections Read-only Tab

## Scope

Add a new consultative tab "Sezioni generali" to the published CurManLight runtime, positioned alongside the existing three tabs, displaying read-only institutional curriculum sections extracted from the source document.

## Baseline

- **CML-004R-SELECT**: closed — Option C selected (new tab "Sezioni generali")
- **Runtime state**: master@4dcff5b (CML-003R deployed) + 468ef3d (CML-004R-SELECT)
- **Branch**: `cml-004r-general-sections-readonly-tab` from `master@468ef3d`

## Source Document

`_handoff/sources/Curricolo disciplinare WORD.docx` — general sections only (paragraphs 1–264, ~38K chars)

## Implementation Details

### Files modified

- `_published_snapshot/netlify-current/index.html` — 113 insertions, 2 deletions

### Changes made

**1. CSS additions** (lines 410–431 of final file)

- `.tab-generali` — container for the new tab content
- `.gen-card` — card component with left accent border (#5c6bc0)
- `.gen-badge` — "Consultazione — non modificabile" tag
- `.gen-tag` — inline tags for metadata
- `.gen-note` — warning-style note box
- `.gen-source` — source attribution
- Responsive tab wrapping for 4 tabs at 560px and 400px breakpoints
- `#tab-generali` added to `@media print` hide list

**2. Tab bar** (line 456)

Added 4th button: `<button onclick="setTab('generali')">📖 Sezioni generali</button>`

**3. Tab content** (before line 727)

New `<div id="tab-generali">` containing 8 sections:

| Section                          | Content                                        | Source                 |
| -------------------------------- | ---------------------------------------------- | ---------------------- |
| Premessa                         | Constitutional mission, school-family alliance | Word doc para 2        |
| Nuove Indicazioni Nazionali 2025 | D.M. 221/2025 context, principles              | Word doc paras 4–24    |
| Riferimenti normativi            | 8 legislation references                       | Word doc paras 53–57   |
| Profilo dello studente           | Student profile summary                        | Word doc para 58 area  |
| Competenze chiave                | 8 competences with descriptors                 | Word doc paras 60–95   |
| Obiettivi generali               | Summary + link to original doc                 | Word doc paras 96–97   |
| Raccordo verticale               | Infanzia → Primaria → Secondaria               | Word doc paras 251–264 |
| Nota finale                      | Guarantee: no auto-approval                    | Original microcopy     |

**4. setTab() function** (line 1429)

- Added `document.getElementById("tab-generali")` toggling
- Extended `map` array to `["lavoro","riepilogo","normativa","generali"]`

## Preserved Functionality

- Discipline sidebar (14 disciplines) ✓
- IN2012→IN2025 comparison cards ✓
- approve/reject/edit ✓
- Progress tracking ✓
- Filter buttons ✓
- Export (Word, Copy, Markdown, PDF) ✓
- PDF cache-safe link ✓
- Welcome modal / settings ✓
- PWA installation ✓
- Service worker registration ✓
- Print styles ✓
- Orientation card (CML-003R) ✓
- No old PDF user links ✓

## Smoke Test Required

1. Open all 4 tabs — verify no JS errors in console
2. "Revisione per disciplina" — verify discipline selection, comparison, workflow
3. "Curricolo definitivo" — verify export still works
4. "Riferimenti normativi" — verify unchanged
5. "Sezioni generali" — verify all 8 sections render, no editable fields
6. Mobile viewport (360px) — verify tab wrapping works
7. PDF export — verify no regression
8. Service worker registration — verify no breakage

## Risks

| Risk                                       | Mitigation                                                          |
| ------------------------------------------ | ------------------------------------------------------------------- |
| 4-tab navigation cramped on small screens  | Responsive CSS at 560px/400px reduces font-size/padding             |
| General sections content may become stale  | Static HTML, manually updatable; source attribution in each section |
| User may expect edit capability in new tab | Clear badge "Consultazione — non modificabile" + note at bottom     |
