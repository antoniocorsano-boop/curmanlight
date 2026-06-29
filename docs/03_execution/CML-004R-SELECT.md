# CML-004R-SELECT — Institutional General Sections Read-only Exposure

## Scope

Audit the published CurManLight runtime and the source curriculum document to select the safest point for exposing read-only general curriculum sections without altering the existing disciplinary workflow.

## Baseline

- **CML-003R**: closed, committed (`4dcff5b`), deployed to production
- **Runtime state**: orientation card active, 14 disciplines preserved, approve/reject/edit preserved
- **Branch**: `cml-004r-select-general-sections-readonly` from `master@4dcff5b`

## Source Document Analysed

`_handoff/sources/Curricolo disciplinare WORD.docx` — 101,571 characters, 265 paragraphs before disciplinary content.

## General Sections Identified

The document's general sections (lines 1–264 in paragraph order) contain the following macro-blocks:

| Section                                      | Content                                                                                                       | Approx paragraphs |
| -------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ----------------- |
| Premessa                                     | Constitutional foundation, mission, role of school/family/territory                                           | ~2                |
| Indicazioni Nazionali 2025                   | Curriculum vision statement, vertical continuity                                                              | ~2                |
| Le Nuove Indicazioni Nazionali 2025          | Reform overview — D.M. 221/2025 context                                                                       | ~4                |
| Perché una nuova riforma                     | Rationale for updating from IN2012 to IN2025                                                                  | ~2                |
| I principi ispiratori                        | Centralità persona, Ruolo docente, Inclusione, Comunità educante, Curricolo verticale, Educazione finanziaria | ~25               |
| Cosa cambia                                  | Concrete changes in the new Indicazioni                                                                       | ~10               |
| Come cambia la didattica                     | Methodological shift: laboratory, cooperative learning, digital                                               | ~10               |
| Metodologie promosse                         | List of promoted methodologies                                                                                | ~8                |
| Valutazione e competenze                     | Formative assessment, competence evaluation                                                                   | ~10               |
| RIFERIMENTI NORMATIVI                        | D.M. 221/2025, D.Lgs. 62/2017, Raccomandazione UE 2018                                                        | ~5                |
| PROFILO DELLO STUDENTE                       | Student profile at end of first cycle                                                                         | ~3                |
| COMPETENZE CHIAVE AL TERMINE DEL PRIMO CICLO | 8 key competences with descriptors                                                                            | ~40               |
| Obiettivi generali del processo formativo    | Objectives per competence, per school level                                                                   | ~155              |
| Competenze chiave — Scuola dell'Infanzia     | Key competences specific to Infanzia                                                                          | ~10               |

**Total general content**: ~38,000 characters, 221 non-empty paragraphs.

## Options Evaluated

### Option A — Expand "Riferimenti normativi" tab

| Criterion                      | Assessment                                                                                                                                                                                                                                    |
| ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Interface impact               | Add general sections inside existing `tab-normativa` div as additional cards after the current normative content                                                                                                                              |
| Files touched                  | `index.html` only — static HTML additions                                                                                                                                                                                                     |
| Risk for disciplinary workflow | None — separate tab, no JS changes, no data changes                                                                                                                                                                                           |
| Risk for PWA/cache             | None — static HTML only                                                                                                                                                                                                                       |
| Risk for localStorage          | None                                                                                                                                                                                                                                          |
| User clarity                   | **Low** — general sections (Premessa, Profilo, Competenze chiave) are NOT normative references. Mixing them with external PTOF/RAV/legislation sources creates confusion between "what the curriculum says" and "what external documents say" |
| Coherence with CML-003R        | Weak — CML-003R orientation card refers to discipline workflow, not to "normative browsing"                                                                                                                                                   |
| **Verdict**                    | ❌ Rejected — category confusion risk outweighs convenience of reusing existing tab                                                                                                                                                           |

### Option B — New block in "Curricolo definitivo" tab

| Criterion                      | Assessment                                                                                                                                                  |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Interface impact               | Add static content at top of `tab-riepilogo` div, before the dynamically generated riepilogo-body                                                           |
| Files touched                  | `index.html` — static HTML + possibly minor JS in `renderRiepilogo()`                                                                                       |
| Risk for disciplinary workflow | **Medium** — user may perceive general sections as "already definitive/approved" content, creating false expectation of editability or finality             |
| Risk for PWA/cache             | None                                                                                                                                                        |
| Risk for localStorage          | None                                                                                                                                                        |
| User clarity                   | **Low** — the tab label "Curricolo definitivo" implies approved/final content. General sections are reference material, not output of the revision workflow |
| Coherence with CML-003R        | Weak — CML-003R establishes "revision → definitivo → export" path; general sections are consultation, not output                                            |
| **Verdict**                    | ❌ Rejected — misleading collocation with definitive/approved content                                                                                       |

### Option C — New "Sezioni generali" consultative tab

| Criterion                      | Assessment                                                                                                                                                                                                                                       |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Interface impact               | Add a 4th tab button + new `tab-generali` div with static HTML content. Add ~4 lines of CSS for responsive tab wrapping                                                                                                                          |
| Files touched                  | `index.html` — ~4 lines for tab button, ~1 line for tab content div reference, static HTML for the content itself                                                                                                                                |
| Risk for disciplinary workflow | **None** — completely separate tab, no interaction with workflow functions                                                                                                                                                                       |
| Risk for PWA/cache             | Low — additional static HTML content; still single-file SPA                                                                                                                                                                                      |
| Risk for localStorage          | None                                                                                                                                                                                                                                             |
| User clarity                   | **High** — "Sezioni generali" clearly communicates consultation. Separated from "Revisione" (work) and "Definitivo" (output). User understands: read here, work there                                                                            |
| Coherence with CML-003R        | Strong — CML-003R orientation card describes "choose discipline → compare → decide → export". Adding "Sezioni generali" as a separate consultative table completes the picture: read the institutional framework first, then work on disciplines |
| Mobile sustainability          | Requires responsive tab wrapping (tested: 4 tabs fit on 360px viewport with `font-size: 11px` and `gap: 4px`)                                                                                                                                    |
| **Verdict**                    | ✅ **Recommended**                                                                                                                                                                                                                               |

## Recommended Option: C

**Recommended for CML-004R implementation**: a new consultative tab "Sezioni generali" displayed alongside the existing 3 tabs.

Motivation:

- Maximum clarity for the user — "leggi qui, lavora là"
- Zero risk to the disciplinary workflow
- No JavaScript changes required — pure static HTML
- No localStorage changes
- No PWA/cache impact
- Coherent with the orientation already established by CML-003R
- Minimal interface footprint (4th tab + static content)

## Perimeter for CML-004R Implementation

### Files allowed

- `_published_snapshot/netlify-current/index.html` — add:
  1. 4th tab button in `.tabbar`
  2. New `<div id="tab-generali">` with static HTML
  3. CSS for responsive tab wrapping (if needed)
  4. Update `setTab()` to handle `"generali"` mapping (4 entries)

### Files strictly forbidden

- `sw.js` — no change
- `_headers` — no change
- Any PDF file — no change
- `riferimenti_istituzionali_normativa.json` — no change
- `motto-non-multa-sed-multum/index.html` — no change
- `manifest.webmanifest` — no change
- `assets/`, `icons/`, `docs_distribuzione/` — no change

### Data forbidden

- `DATA` object — no change
- `DISCIPLINE_META` — no change
- `ORDINI` — no change
- Any existing item's `testo`, `proposto`, `decisione`, `testoFinale` — no change

### Contents to show

**Source**: `_handoff/sources/Curricolo disciplinare WORD.docx` — general sections only (paragraphs 1–264).

**Sections to include** (selective, for readability):

1. Premessa (short mission paragraph)
2. Le Nuove Indicazioni Nazionali 2025 (reform context)
3. I principi ispiratori (6 principles as expandable cards)
4. Profilo dello studente (concise profile)
5. Competenze chiave al termine del primo ciclo (8 competences with descriptors)
6. Raccordi tra infanzia, primaria e secondaria (if present)
7. Riferimenti normativi (legislation references, complementing the existing Normativa tab)

**Mode**: purely static HTML, read-only. No form controls, no edit buttons, no approve/reject.

### Microcopy

Tab label: `📖 Sezioni generali`
Tab intro title: `"Sezioni generali del curricolo"`
Tab intro text: `"Queste sezioni descrivono la cornice istituzionale e pedagogica del curricolo. Sono in sola consultazione: ogni modifica va proposta e validata nel percorso di revisione disciplinare."`

### Acceptance criteria

1. Tab is visible and selectable alongside existing 3 tabs
2. Content is rendered as static HTML — no dynamic rendering
3. All existing tabs continue to work unchanged
4. No discipline data modified
5. No workflow logic modified
6. No localStorage keys added
7. No backend/API/auth/Netlify Forms
8. Print style hides the tab content appropriately

### Smoke test required (CML-004R implementation)

1. Open all 4 tabs — verify no JS errors
2. Verify discipline workflow still functional in "Revisione" tab
3. Verify "Curricolo definitivo" export still works
4. Verify "Riferimenti normativi" unchanged
5. Verify "Sezioni generali" renders all sections correctly
6. Test on mobile viewport (360px width)
7. Test PDF export
8. Test service worker registration (no breakage)
