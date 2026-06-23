# Report: CML-083 — DESIGN_SYSTEM_DARK_MODE_CONTRAST_ALIGNMENT_RUNTIME_FIX

## Commit iniziale
`0658313` — docs: publish motto page on GitHub Pages

## Sintesi del problema
In dark mode l'area Didattica era illeggibile: testo `#333` su sfondo `#252525`, titoli sezione con contrasto insufficiente, box UDA senza override scuro.

## Causa tecnica
Le classi CSS Didattica introdotte in CML-068/070 non erano state incluse nel blocco `@media(prefers-color-scheme:dark)`. JS di rendering usava `color:#333` inline.

## Fix applicato
1 rimozione di `color:#333` inline + 7 nuove regole CSS nel dark mode block.

## Controlli

| Controllo | Esito |
|---|---|
| Home in dark mode: microguida e card leggibili | ✅ |
| Didattica in dark mode: evidenze, criteri, UDA | ✅ |
| Curriculum in dark mode: path, copertura, riepilogo | ✅ |
| Esportazioni in dark mode: box e pulsanti | ✅ |
| Guida in dark mode: card e notice | ✅ |
| Home in light mode: invariata | ✅ |
| Didattica in light mode: invariata | ✅ |
| Mobile stretto: nessun overflow | ✅ |
| Desktop largo: layout preservato | ✅ |
| `git diff --check` — nessun whitespace error | ✅ |
| CSS braces bilanciate (969 = 969) | ✅ |
| Nessuna nuova dipendenza esterna | ✅ |
| Nessun nuovo `localStorage`/`sessionStorage` | ✅ |
| Schema `.cml`, export/import, role-access invariati | ✅ |
| Dark mode solo via `@media(prefers-color-scheme:dark)` | ✅ |
| Nessuna `@media` orfana | ✅ |

## Verdetto
`CML_083_DESIGN_SYSTEM_DARK_MODE_CONTRAST_ALIGNMENT_READY`
