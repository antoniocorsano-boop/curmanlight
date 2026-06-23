# CML-077-PRE: DESIGN MD for Stitch Model Export

**Status:** Done
**Date:** 2026-06-23
**Commit base:** `b15e7a3` (CML-076A live deploy smoke docs)
**Type:** Docs-only — no runtime changes

## Summary

Created `DESIGN.md` at repository root — a comprehensive design system reference describing CurManLight's existing visual system (colors, typography, components, spacing, layout, principles). Intended as a machine-readable model for Stitch and code agents, not as a runtime-interpreted style engine.

## Scope

- **Allowed files:** `DESIGN.md`, `docs/03_execution/CML-077-PRE.md`, `report/CML-077-PRE_design_md_for_stitch_model_export.md`, `docs/REPO-MOVELOG.md`
- **Explicitly excluded:** `index.html`, `sw.js`, `_headers`, manifest, PWA assets, `content/`, `tools/`
- **Design tokens extracted from:** `_published_snapshot/netlify-current/index.html` CSS `<style>` block (lines 16-864)
- **Output:** DESIGN.md with 13 sections covering colors, typography, spacing, border-radius, shadows, layout breakpoints, components, accessibility, animations, naming conventions, microcopy, and navigation schema

## Process

1. Extract CSS tokens from `index.html` via subagent
2. Examine CML-074 design system references and CML-072 contract
3. Synthesize into DESIGN.md with consistent structure
4. Write execution doc, report, update movelog
5. Validate: `git status`, `git diff --check`, confirm `index.html` unchanged
6. Commit only the 4 allowed files
7. **Refinements post-review:** fix typo "gradiend" → "inizio gradiente", "Invaliato" → "Invariato / confermato", clarificato "Mobile-first" → "Priorità alla fruizione da dispositivi mobili (mobile-first)", aggiunte sezioni 14 (vincoli funzionali) e 15 (prompt Stitch)

## Validation

| Check | Result |
|-------|--------|
| `git diff --name-only -- _published_snapshot/netlify-current` | Empty |
| `git status` | Only 4 expected files |
| DESIGN.md readable | Yes |
| `index.html` unchanged | Confirmed |

## Verdict

```
CML_077_PRE_DESIGN_MD_FOR_STITCH_MODEL_EXPORT_READY
```

## Next step

CML-077B — Controlled integration of Stitch output (future slice)
