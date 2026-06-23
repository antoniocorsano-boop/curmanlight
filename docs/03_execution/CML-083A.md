# CML-083A — DESIGN_SYSTEM_DARK_MODE_CONTRAST_LIVE_SMOKE

## Contesto
CML-083 ha corretto il contrasto dark mode per l'area Didattica (7 regole CSS + fix inline `color:#333`). CML-083A verifica la pubblicazione live su GitHub Pages.

## URL verificato
`https://antoniocorsano-boop.github.io/curmanlight/`

## Commit
`0c93931` — fix: align CML dark mode contrast and design system

## Verifiche

| Controllo | Esito |
|---|---|
| Home leggibile in light/dark mode | ✅ |
| Curriculum leggibile in light/dark mode | ✅ |
| Didattica leggibile in light/dark mode (evidenze, criteri, UDA) | ✅ |
| Esportazioni e Guida leggibili | ✅ |
| Desktop e mobile senza overflow | ✅ |
| Contrasto sufficiente su card, badge, link e pulsanti | ✅ |
| Nessuna regressione su `.cml`, export/import, role-access | ✅ |
| GitHub Pages aggiornato (workflow success) | ✅ |

## Controlli tecnici live
- Pagina principale: HTTP 200, 361 KB
- Dark mode CSS fix `didattica-evidence-section ul,.didattica-evidence-section p{color:var(--cml-text)}` presente
- Dark mode override `didattica-uda-card-sub{color:#b39ddb}` presente
- Didattica: 19 occorrenze `didattica-evidence-unit`
- Home: 2 occorrenze `home-dashboard`
- Role-access: 38 occorrenze funzioni/blocchi
- Export: 37 occorrenze funzioni
- Motto page: HTTP 200
- sw.js: HTTP 200, cache `curmanlight-cache-v452b422`

## Verdetto
`CML_083A_DESIGN_SYSTEM_DARK_MODE_CONTRAST_LIVE_SMOKE_READY`

## Prossimo step
Da definire (possibile: CML-084 — NEXT_FUNCTIONAL_INCREMENT_SELECTION_AUDIT)
