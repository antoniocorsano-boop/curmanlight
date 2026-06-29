# CML-083B — LIGHT_MODE_ONLY_DESIGN_SYSTEM_RUNTIME_FIX

## Contesto

- CML-078 ha introdotto CSS variables, iconografia e dark mode automatica (`@media(prefers-color-scheme:dark)`).
- CML-083/CML-083A hanno corretto il contrasto in dark mode.
- Dopo verifica utente, la dark mode non è soddisfacente.

## Decisione progettuale

CurManLight torna a modalità chiara unica. Nessuna dark mode automatica, nessun toggle manuale, nessun storage di preferenza tema.

## Problema della dark mode

Il blocco `@media(prefers-color-scheme:dark){...}` (159 righe, 151 regole CSS) rendeva il sito scuro su sistemi con tema scuro. Le correzioni CML-083 hanno migliorato il contrasto ma l'esperienza complessiva non è stata giudicata soddisfacente dall'utente.

## Intervento applicato

1. Commentato l'intero blocco dark mode (righe 905-1062), preservandolo come riferimento commentato.
2. Aggiunto `color-scheme:light` su `:root` per forzare tema chiaro al browser.
3. Nessuna modifica a variabili CSS light mode, iconografia, spaziatura o layout.

## Perimetro

- Solo `index.html` — CSS inline commentato.
- Nessuna modifica a JS, schema `.cml`, export/import, role-access.

## Vincoli rispettati

- ✅ Nessuna nuova funzione
- ✅ Nessuna modifica schema `.cml`
- ✅ Nessuna modifica export/import docente, dipartimento, referente
- ✅ Nessuna modifica role-access
- ✅ Nessuna modifica codice operativo
- ✅ Nessuna modifica `localStorage`/`sessionStorage`
- ✅ Nessuna dipendenza esterna
- ✅ Nessun toggle tema
- ✅ Nessuna riscrittura layout
- ✅ Iconografia e spaziatura già valide mantenute

## Controlli

- Braces CSS: 2088 = 2088 ✅
- `git diff --check`: nessun warning ✅
- `prefers-color-scheme` solo in commento ✅
- `color-scheme:light` presente su `:root` ✅
- Nessuna occorrenza attiva di `@media(prefers-color-scheme:dark)` ✅
- Nessuna nuova dipendenza (tailwind, fonts.googleapis, fonts.gstatic, CDN) ✅
- `localStorage`/`sessionStorage` invariati (solo uso preesistente in JS) ✅
- schema `.cml` non toccato ✅
- `sw.js` non toccato ✅

## Verdetto

`CML_083B_LIGHT_MODE_ONLY_DESIGN_SYSTEM_RUNTIME_FIX_READY`

## Prossimo step

CML-083C — LIGHT_MODE_ONLY_LIVE_SMOKE
