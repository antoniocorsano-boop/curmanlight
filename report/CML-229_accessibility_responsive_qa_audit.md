# CML-229 — Accessibility/responsive QA audit

## Start commit

`432a3e8` (CML-228S, aligned)

## Files inspected

- `_published_snapshot/netlify-current/index.html` (5783 lines — CSS + HTML + JS)
- `tools/validate-cml-normalized-curriculum.mjs`
- `tools/test-runtime-mappa-dati-shape.mjs`

## Viewport/responsive findings

- Media queries at 380px, 400px, 560px, 640px, 700px, 760px, 900px, 1180px
- `(hover:none)` media query suppresses hover shadows on touch devices
- No query below 380px — 360px viewport may have minor overflow
- Good coverage at common breakpoints (390px, 768px, 1024px, desktop)

## Keyboard/focus findings

- `button:focus-visible{outline:2px solid #1a237e}` — good
- `.motto-link:focus{outline:none}` — focus indicator removed
- No `tabindex` found — natural tab order used
- Good `focus-visible` on toolbar toggles, export toggles, mobile nav

## Touch usability findings

| Issue | Target | Severity |
|---|---|---|
| Tabbar buttons at 400px | ~21px height | P1 |
| Mappa disc buttons | ~34px height | P3 |

## Labels/semantic findings

- Settings form: all fields have `<label for="...">` ✅
- Code access dialog: `aria-labelledby="role-access-title"` ✅
- **Missing**: `aria-current` on tabbar buttons — screen reader can't identify active tab (P2)
- **Missing**: `aria-pressed` on discipline selector buttons — screen reader can't identify selected (P2)
- **Missing**: `<label for="disc-md-preview">` for export preview textarea (P2)

## Workflow-critical findings

All workflows (curriculum, evidence, UDA, .cml export, department import, referent validation, Fonti) are functionally accessible. No blocking issues.

## Issue list by severity

### P1 — High user-impact
1. Tabbar buttons at 400px viewport: insufficient touch target size

### P2 — Medium polish/clarity
2. Missing `aria-current` on tabbar
3. Missing `aria-pressed` on discipline selector
4. Missing `aria-current` on subnav buttons
5. Export preview textarea missing `<label>`
6. `.motto-link:focus` outline removed
7. No media query below 380px

### P3 — Low priority
8. Mappa disc buttons inline fixed size (~34px)
9. Emoji-only icon buttons without accessible text

## Recommendation for CML-230

**Targeted microfix** for P1 + top P2 issues (6 fixes):

1. CSS: fix tabbar touch targets at 400px — `padding:8px 6px`, remove `min-width:0`
2. JS: `setTab()` — add `aria-current="page"` to tabbar active button
3. JS: `setMappaDisciplina()` — add `aria-pressed="true/false"` to discipline buttons
4. JS: `setTab()` — add `aria-current="page"` to subnav active button
5. HTML: add `<label for="disc-md-preview">` to export preview textarea
6. CSS: add `outline:2px solid #1a237e` to `motto-link:focus`

Rejected:
- Media query for 360px: not justified for single device size
- Emoji accessible labels: complex, low impact

## Finale

| Field | Value |
|---|---|
| Start commit | `432a3e8` |
| Final commit | da definire |
| Scope | docs-only |
| No runtime | Confirmed (this slice) |
| No JSON | Confirmed |
| No `.cml` | Confirmed |
| No SchoolKB | Confirmed |
| No deploy | Confirmed |
| No push | Confirmed |
| No secrets | Confirmed |
| Verdict | `CML_229_ACCESSIBILITY_RESPONSIVE_QA_AUDIT_COMPLETE` |
| Next | CML-230 — targeted accessibility/responsive microfix |
