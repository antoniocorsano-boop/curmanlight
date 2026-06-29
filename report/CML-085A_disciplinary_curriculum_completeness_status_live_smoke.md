# Report: CML-085A — DISCIPLINARY_CURRICULUM_COMPLETENESS_STATUS_LIVE_SMOKE

## Commit runtime

`627e05f` — feat: show CML disciplinary curriculum completeness status

## Deploy

`git push origin main` → workflow Deploy CurManLight to GitHub Pages → success (14s)

## URL

`https://antoniocorsano-boop.github.io/curmanlight/`

## Verifiche live

| Area                             | Stato                                                |
| -------------------------------- | ---------------------------------------------------- |
| Pagina caricata                  | ✅ HTTP 200, 366 KB                                  |
| Sezione completezza visibile     | ✅ 10 riferimenti a `.curricolo-completeness`        |
| Titolo sezione                   | ✅ "Stato di completezza dei curricoli disciplinari" |
| "Bozza completa disponibile"     | ✅ (contatore + legenda)                             |
| "Solo consultazione"             | ✅ (legenda)                                         |
| "Non pronta per approvazione"    | ✅                                                   |
| "approvazione resta esterna"     | ✅                                                   |
| home-dashboard                   | ✅ 2 occorrenze                                      |
| didattica-evidence-unit          | ✅ 26 occorrenze                                     |
| requireRoleAccess                | ✅ 5 occorrenze                                      |
| color-scheme:light               | ✅ 1                                                 |
| prefers-color-scheme:dark attivo | ✅ 0                                                 |
| Motto page                       | ✅ HTTP 200                                          |
| `.cml` / export / role-access    | ✅ invariati                                         |

## Verdetto

`CML_085A_DISCIPLINARY_CURRICULUM_COMPLETENESS_STATUS_LIVE_SMOKE_READY`
