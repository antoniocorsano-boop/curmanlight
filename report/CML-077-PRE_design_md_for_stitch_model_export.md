# CML-077-PRE: DESIGN.md for Stitch Model Export — Report

## Technical Report

### Scope

| Field | Value |
|-------|-------|
| Task | Create DESIGN.md for Stitch/code agent consumption |
| Source | CSS `<style>` block in `index.html` (lines 16-864) |
| Also referenced | CML-072 Design System Contract, CML-074 visual runtime |
| Output | `DESIGN.md` at repository root |
| Runtime modified | None |
| Branch | `main` |
| Base commit | `b15e7a3` |

### DESIGN.md Structure

13 sections, ~300 lines:

| # | Section | Description |
|---|---------|-------------|
| 1 | Principi di design | 6 core principles: one-screen/one-decision, Curriculum/Didattica separation, export secondary, badge clarity, microcopy brevity, mobile-first |
| 2 | Colori | Institutional palette, neutral palette, state colors (6 badge + 6 semantic), export colors, gradients, notice-box variants |
| 3 | Tipografia | Font stack, scale (9px-22px), weights (600/700/800), letter spacing |
| 4 | Spaziatura | Common padding (6px-16px) and gap (4px-14px) values |
| 5 | Border radius | Scale from 4px to 999px with component usage |
| 6 | Ombre | 9 shadow definitions for cards, panels, dialogs, mobile menu |
| 7 | Layout | Breakpoints (420-1600px), sidebar, tab bar, sub-nav, mobile bottom bar, home dashboard, cruscotto |
| 8 | Componenti | Card, buttons (4 hierarchies), state badges, semantic badges, dual panel, notice boxes, export groups, guide cards, tool groups |
| 9 | Accessibilità | Contrast WCAG AA, focus-visible, touch target 44px, text badges |
| 10 | Animazioni | 5 animation definitions (savePulse, saveDotPulse, localSavedFlash, fadeIn, slideUp) |
| 11 | Convenzioni naming | Class naming patterns for badges, buttons, cards, notices, panels, didattica, normativa, tecnologia |
| 12 | Microcopy pattern | 8 canonical copy phrases for disclaimers, warnings, status |
| 13 | Schema navigazione | ASCII diagram of full navigation structure |

### Key Design Decisions

- **DESIGN.md is a design truth source for agents, NOT a runtime-interpreted engine**
- Any Stitch output will be reviewed and manually integrated in a future controlled slice (CML-077B)
- No automatic CSS generation from DESIGN.md — prevents breakage of runtime stability

### Files Created

| File | Path |
|------|------|
| DESIGN.md | `./DESIGN.md` |
| Execution doc | `docs/03_execution/CML-077-PRE.md` |
| Report | `report/CML-077-PRE_design_md_for_stitch_model_export.md` |
| Movelog update | `docs/REPO-MOVELOG.md` |

### Verdict

```
CML_077_PRE_DESIGN_MD_FOR_STITCH_MODEL_EXPORT_READY
```
