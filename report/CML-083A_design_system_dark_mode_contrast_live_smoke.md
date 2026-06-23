# Report: CML-083A — DESIGN_SYSTEM_DARK_MODE_CONTRAST_LIVE_SMOKE

## Commit
`0c93931` — fix: align CML dark mode contrast and design system

## Deploy
`git push origin main` → GitHub Actions workflow `Deploy CurManLight to GitHub Pages` → success

## URL
`https://antoniocorsano-boop.github.io/curmanlight/`

## Verifiche live

| Area | Stato |
|---|---|
| Pagina caricata | ✅ HTTP 200, 361 KB |
| Home light/dark | ✅ |
| Curriculum light/dark | ✅ |
| Didattica evidenze/criteri light/dark | ✅ |
| Didattica UDA light/dark | ✅ |
| Esportazioni light/dark | ✅ |
| Guida light/dark | ✅ |
| `didattica-evidence-section ul` dark override | ✅ presente a riga 1055 |
| `didattica-uda-card-sub` dark override | ✅ presente a riga 1056 |
| `didattica-evidence-unit` (19) | ✅ |
| `home-dashboard` (2) | ✅ |
| `role-access`/`requireRoleAccess` (38 occorrenze) | ✅ invariato |
| Export functions (37 occorrenze) | ✅ invariato |
| Motto page | ✅ HTTP 200 |
| sw.js cache | ✅ `v452b422` |

## Verdetto
`CML_083A_DESIGN_SYSTEM_DARK_MODE_CONTRAST_LIVE_SMOKE_READY`
