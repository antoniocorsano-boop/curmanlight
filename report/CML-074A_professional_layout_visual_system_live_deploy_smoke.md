# CML-074A: Professional Layout Visual System — Live Deploy Smoke Report

## Technical Report

### Deploy Details

| Field       | Value                                                |
| ----------- | ---------------------------------------------------- |
| Commit      | `ed8caa4735ef5ec90b97e4e9031bc9ee0f6ed347`           |
| Branch      | `main`                                               |
| Remote      | `origin/main`                                        |
| Push        | `4ee026b..ed8caa4 main -> main`                      |
| URL         | `https://antoniocorsano-boop.github.io/curmanlight/` |
| Deploy type | GitHub Pages automatic                               |

### Changes Deployed

All CML-074 visual system refinements from commit `ed8caa4`:

1. **Badge system** — `.badge--readonly`, `.badge--prototype`, `.badge--warning`, `.badge--success`, `.badge--info`
2. **Badge contrast fix** (P3 CML-071) — darker colors for all status badges
3. **Card unification** — 9px radius, status left border, subtle shadow
4. **Button hierarchy** — `.btn-primary`, `.btn-secondary`, `.btn-tertiary`
5. **Notice-box system** — `.warning`, `.tip`, `.success` variants
6. **Section heading accent** — colored left border
7. **Visual polish** — left borders on esport-group, guida-card, export-group, tool-group
8. **Mobile readability** — reduced sizes, tighter padding
9. **Focus-visible ring** — consistent outline across interactive elements
10. **10 HTML elements** updated with design system classes

### Not Changed (verified live)

- Functions (JS) — untouched
- Schema `.cml` — untouched
- Export/import — untouched
- Role-access gating — untouched (CML2025 required)
- Navigation — 5 tabs + sub-nav invariant
- PWA/service worker — untouched

### Anomalies

None. All checks PASS.

### Verdict

```
CML_074A_PROFESSIONAL_LAYOUT_VISUAL_SYSTEM_LIVE_DEPLOY_SMOKE_READY
```
