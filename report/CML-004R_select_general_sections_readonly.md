# CML-004R-SELECT — Institutional General Sections Read-only Exposure Selection Report

## Identity

- **Branch**: `cml-004r-select-general-sections-readonly`
- **Base**: `master@4dcff5b` (CML-003R deployed)
- **Starting commit**: `4dcff5b` — `feat: add conservative orientation to curmanlight`
- **Cycle**: CML-004R-SELECT (audit/selection only — no runtime modifications)

## Initial State

- `master@4dcff5b` — CML-003R merged and deployed to production
- Working tree: clean
- Branch created: `cml-004r-select-general-sections-readonly`

## Runtime Analysed

- `_published_snapshot/netlify-current/index.html` — tabs: Revisione (lavoro), Curricolo definitivo (riepilogo), Riferimenti normativi (normativa)
- Tab switching via `setTab()` — maps string IDs to DOM visibility
- Orientation card (CML-003R) visible on all tabs
- Sidebar discipline list with 14 disciplines, comparison cards, progress tracking

## Source Document Considered

- **File**: `_handoff/sources/Curricolo disciplinare WORD.docx`
- **Format**: Word document (standard DOCX)
- **Total size**: ~101,571 characters
- **General sections**: ~38,000 characters (paragraphs 1–264)
- **Disciplinary sections**: paragraphs 265+ (14 disciplines)

## General Sections Identified

1. **Premessa** — Constitutional and pedagogical foundation
2. **Indicazioni Nazionali 2025** — Curriculum vision statement
3. **Le Nuove Indicazioni Nazionali 2025** — Reform overview (D.M. 221/2025)
4. **Perché una nuova riforma** — Rationale for IN2025
5. **I principi ispiratori** — 6 pedagogical principles
6. **Cosa cambia** — Concrete changes from IN2012
7. **Come cambia la didattica** — Methodological implications
8. **Metodologie promosse** — Teaching methods endorsed
9. **Valutazione e competenze** — Assessment framework
10. **RIFERIMENTI NORMATIVI** — Legislation references
11. **PROFILO DELLO STUDENTE** — Student profile
12. **COMPETENZE CHIAVE AL TERMINE DEL PRIMO CICLO** — 8 competences with descriptors
13. **Obiettivi generali del processo formativo** — Per-competence, per-order objectives
14. **Competenze chiave — Scuola dell'Infanzia** — Infanzia-specific competences

## Options Evaluated

| # | Option | Verdict | Justification |
|---|--------|---------|---------------|
| A | Expand "Riferimenti normativi" tab | ❌ Rejected | Category confusion: general sections are part of the curriculum, not external references. Users would conflate "what the curriculum says" with "what external documents say" |
| B | New block in "Curricolo definitivo" tab | ❌ Rejected | Misleading collocation: the "Definitivo" tab implies approved/output content. General sections are reference/consultation material, which would create false expectations of editability or finality |
| C | New "Sezioni generali" tab | ✅ **Recommended** | Clean separation of concerns: "leggi qui, lavora là". Zero risk to disciplinary workflow. No JS changes. No localStorage changes. Coherent with CML-003R orientation model |

## Recommended Option: C — New "Sezioni generali" consultative tab

### Rationale
- Maximum user clarity — separates consultation from revision
- Zero risk to the existing disciplinary workflow
- Pure static HTML — no JavaScript, no localStorage, no PWA impact
- Coherent with CML-003R orientation: "first understand the framework, then work on disciplines"
- Minimal interface footprint: 4th tab button + static content div

### Required changes (for CML-004R implementation)
1. Add 4th button in `.tabbar` with `onclick="setTab('generali')"`
2. Add `<div id="tab-generali">` with static HTML content (general sections from Word doc)
3. Update `setTab()` to handle 4 tabs
4. CSS for responsive tab wrapping on small screens

### Contents to include
Premessa, Le Nuove Indicazioni Nazionali 2025, I principi ispiratori, Profilo dello studente, Competenze chiave, Obiettivi generali (selection). Source: Word doc general sections only. Read-only mode.

## Confirmation Checklist

| Check | Status |
|-------|--------|
| No runtime files modified | ✓ |
| No index.html modified | ✓ |
| No PDF modified | ✓ |
| No sw.js modified | ✓ |
| No _headers modified | ✓ |
| No discipline data modified | ✓ |
| No workflow logic modified | ✓ |
| No approve/reject/edit altered | ✓ |
| No IN2012→IN2025 comparison altered | ✓ |
| No new localStorage keys | ✓ |
| No backend/API/auth/Netlify Forms | ✓ |
| No deploy | ✓ |
| `git diff --check` clean | ✓ |
| `git status` shows only docs/report files | ✓ |
| Source document only read, not moved or copied | ✓ |

## Residual Risks

1. 4-tab navigation may feel cramped on very small screens (<360px). Mitigation: responsive CSS with reduced font-size and gap.
2. General sections content from the Word doc (~38K chars) must be carefully selected and condensed for readability in the runtime.
3. Users may still mistake the read-only tab for an editable area. Mitigation: clear microcopy stating "sola consultazione — ogni modifica va proposta e validata nel percorso di revisione".

## Next Step

Open **CML-004R implementation slice**:
```
git switch -c cml-004r-general-sections-readonly master
```

Implement Option C: add 4th tab "Sezioni generali" with curated read-only content from the source document, following the perimeter defined in `docs/03_execution/CML-004R-SELECT.md`.

## Verdict

```
CML_004R_SELECT_GENERAL_SECTIONS_READY
```
