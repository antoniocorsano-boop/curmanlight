# CML-003R — Conservative Orientation Integration Report

## Identity

- **Branch**: `cml-003r-conservative-orientation-integration`
- **Base**: `master@52d8f5d` (CML-002R merged)
- **Starting commit**: `52d8f5d` — `docs: recover published curmanlight runtime map`
- **Cycle**: CML-003R

## Objective

Improve initial orientation and comprehensibility of the published CurManLight runtime without replacing architecture, data, workflow, or existing logic.

## Method

1. Merge CML-002R into master (fast-forward)
2. Create new branch `cml-003r-conservative-orientation-integration`
3. Map runtime entry point — first visible area is `tab-lavoro` with filter toolbar, progress bar, and cards
4. Identify safe insertion point: static HTML between `quick-info-bar` and `layout` div — visible on all tabs, outside dynamic rendering
5. Add orientation card using only static HTML + CSS (no new JS functions, no new views, no new localStorage keys)
6. Verify all existing workflows preserved via grep and diff review
7. Create execution doc and this report

## File Modified

- `_published_snapshot/netlify-current/index.html` — 26 insertions, 1 deletion

## Orientation Added

A dismissible card at the top of the page containing:

- **Title**: "Revisione guidata del curricolo"
- **Description**: explains the tool's purpose (IN2012 vs IN2025 comparison)
- **5-step workflow pills**: Scegli disciplina → Confronta 2012 e 2025 → Valuta e decidi → Approva/modifica/mantieni → Consulta ed esporta
- **Note**: "Il sistema non approva automaticamente il curricolo: organizza il lavoro e rende tracciabili le decisioni."
- **Dismiss button** (×): removes card from DOM, reappears on page reload

## Confirmation Checklist

| Check | Status |
|-------|--------|
| Runtime is the reference (no prototype code copied) | ✓ |
| Data for 14 disciplines preserved | ✓ |
| IN2012→IN2025 comparison preserved | ✓ |
| approve/reject/edit workflow preserved | ✓ |
| Progress tracking preserved | ✓ |
| PDF cache-safe link preserved | ✓ |
| No old PDF (`Corso_CurricoloDonMilani_IN2025.pdf`) referenced as user link | ✓ — only in `_headers` as cache rule for the file still on disk |
| PWA/service worker preserved | ✓ |
| _headers preserved | ✓ |
| No new views added | ✓ |
| No new global JavaScript functions | ✓ |
| No new localStorage keys | ✓ |
| No backend/API/auth/Netlify Forms | ✓ |
| No deploy | ✓ |
| Only intended files modified (`git diff --stat`) | ✓ |
| `git diff --check` clean | ✓ |
| `git status` clean | ✓ |

## Residual Risks

1. Orientation card is not session-persistent — it reappears on every reload. This is intentional: no new localStorage key.
2. On very small screens the step pills may wrap awkwardly — mitigated by responsive CSS at 760px and 560px breakpoints.

## Suggested Next Step

Local visual inspection with a static server, then deploy preview:
```powershell
cd C:\Users\anton\CurManLight\_published_snapshot\netlify-current
npx serve .
```

## Final Verdict

```
CML_003R_CONSERVATIVE_ORIENTATION_READY
```
