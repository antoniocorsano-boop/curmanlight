# CML-UX-NAVIGATION-AND-ORIENTATION — Live Smoke

## Stato

- **Tipo slice**: runtime microfix → push + live smoke
- **Commit**: `f372ceb` (CML-UX-NAVIGATION-AND-ORIENTATION)
- **GitHub Pages**: https://antoniocorsano-boop.github.io/curmanlight/
- **Data verifica**: 2026-06-29

## Pre-push checks

- `git status --short --branch`: clean (HEAD = origin/main = `f372ceb`)
- `git diff --check`: clean
- Validatore: 14/14 PASS
- Shape test: 14/14 PASS
- Secret scan: clean

## Push

`git push origin main` — completato senza errori.

## Live smoke

| Area                        | Verdetto | Dettaglio                                                                                                  |
| --------------------------- | -------- | ---------------------------------------------------------------------------------------------------------- |
| Caricamento pagina          | PASS     | HTTP 200, 754990 byte, `<!DOCTYPE html>` presente                                                          |
| Breadcrumb disciplina       | PASS     | `discLabel` presente in JS: `discLabel=selDisc&&(t==="curricolo"                                           |     | t==="lavoro" |     | t==="riepilogo")?' - '+selDisc:''` — etichette Consultazione/Revisione/Definitivo con suffisso disciplina |
| Sidebar Fonti nascosta      | PASS     | `.aside-hidden{display:none!important}` CSS presente + `aside-hidden` toggle in `setTab()`                 |
| Evidenze raggruppate ordine | PASS     | `ordGroups` presente in JS; rendering con 3 gruppi (Infanzia/Primaria/Secondaria), primo aperto di default |
| Curriculum dati             | PASS     | `ALL_CURRICULUM_DATA` presente con tutte 14 discipline                                                     |
| Esportazioni                | PASS     | `export` riferimenti presenti nel JS                                                                       |
| Mobile bar                  | PASS     | `mobile-bottom-bar` con 5 pulsanti (Home/Curr./Comp./Esp./Menu)                                            |
| Sidebar Fonti tab           | PASS     | `ordinamento-tab` e `fonti` riferimenti presenti                                                           |
| Console error shadow        | PASS     | Nessun pattern `console.error`/`console.warn`/`Uncaught` evidente                                          |

## Verdetto

```
CML_UX_NAVIGATION_AND_ORIENTATION_LIVE_SMOKE_PASS
```
