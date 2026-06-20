# CML-002R — Published Runtime Recovery Report

## Identity

- **Branch**: `cml-002r-published-runtime-recovery-resume`
- **Base**: `master@f8cfe76`
- **Cycle**: CML-002R (recovery resume after CML-002E PDF hard reset)

## Objective

Map the published runtime folder `_published_snapshot/netlify-current/`, recover the architecture map after the PDF-hotfix cycle, and analytically compare against the CML-001/CML-002 prototypes to produce a safe baseline for CML-003R.

## Method

1. Enumerate all files in `_published_snapshot/netlify-current/` (11 entries)
2. Read and analyze `index.html` (2135 lines) — extract data model, views, logic, localStorage schema, export functions
3. Read and analyze prototype `cml001` (app.js + content.js + styles.css + index.html)
4. Read and analyze prototype `cml002` (app.js + content.js — same architecture, different storage key)
5. Compare runtime vs prototypes across: architecture, data model, views, decision model, persistence, export, PWA support

## Key Findings

### 1. Runtime is a functional superset of prototypes

The published single-file SPA contains:
- Production data for **all 14 disciplines** across 3 school orders (Infanzia, Primaria, Secondaria)
- **Side-by-side IN2012 → IN2025 comparison** with per-item status tracking
- **Full approve/reject/edit decision workflow**
- **Progress tracking** per discipline and school order
- **PWA support** with service worker, manifest, install guidance
- **Multiple export formats**: Word, Markdown, PDF, plain text
- **User profile** with school-order-based editability

### 2. Prototypes are concept models only

Both cml001 and cml002 contain:
- Only **3 sample disciplines** with placeholder or excerpt content
- **No comparison UI** (no side-by-side panels)
- A **revision-proposal metadata model** (revisions array with priority/status)
- **No ordine (school level) filtering**
- **No progress tracking**
- **No PWA support**

### 3. Zero code lineage

The runtime and prototypes share no code. They were built independently:
- Runtime: single-file SPA with inline data
- Prototypes: modular architecture (app.js + content.js + styles.css) with `window.CURMANLIGHT_DATA` global

### 4. localStorage model mismatch

| Aspect | Runtime | Prototypes |
|--------|---------|------------|
| Key | `curricoloVerticaleDonMilani.v3.ibrido.localState` | `curmanlight.cml00{1,2}.revisions.v1` |
| Content | Entire DATA + profile + UI state | revisions array only |
| Granularity | Per-item decisions | Per-proposal metadata |

## Critical Conclusion

**Do not copy CML-001/CML-002 prototype code into the runtime for CML-003R.**

Prototypes may be used only as **conceptual reference** for:
- Guided-view clarity and orientation
- Read-only institutional/general sections
- Separation between official content and revision workflow
- Simplified user orientation

## CML-003R Recommendation

Start from the published runtime and perform **conservative integration**:
- Improve orientation (navigation clarity, user pathway)
- Add or expose guided read-only institutional/general sections
- Preserve all 14-discipline dataset
- Preserve comparison workflow
- Preserve approve/reject/edit logic
- Preserve progress tracking
- Preserve PWA, sw.js, _headers, and PDF cache-safe links
- Avoid localStorage key collisions
- Avoid replacing runtime architecture

## Files Changed

This recovery slice touches only:
- `docs/03_execution/CML-002R.md`
- `report/CML-002R_published_runtime_recovery.md`

No runtime files are modified.

## Validation

```
git diff --check
git status --short --untracked-files=all
```

Expected: only `docs/` and `report/` files shown.

## Verdict

```
CML_002R_PUBLISHED_RUNTIME_RECOVERY_READY
```
