# Report: CML-083B — LIGHT_MODE_ONLY_DESIGN_SYSTEM_RUNTIME_FIX

## Commit
`fix: restore CML light mode only design system`

## File modificati
- `_published_snapshot/netlify-current/index.html` (+163/−159, solo commenti CSS)

## Motivo della rimozione della dark mode
L'utente ha verificato la dark mode dopo CML-083 e l'ha giudicata non soddisfacente. Decisione progettuale: CurManLight torna a modalità chiara unica.

## Fix applicato
- Commentato il blocco `@media(prefers-color-scheme:dark){...}` (151 regole CSS, righe 905-1062) con prefisso `/* ... */` riga per riga.
- Aggiunto `color-scheme:light` alle variabili `:root`.
- Nessuna modifica alle variabili light mode esistenti.

## Controlli desktop/mobile
- Desktop: tutte le sezioni in modalità chiara (da verificare live in CML-083C)
- Mobile: layout invariato (nessuna modifica a media query responsive)
- Overflow orizzontale: nessuna modifica al layout
- Testo scuro su sfondo scuro: impossibile (tutti i colori sono light mode)

## Conferma light mode only
- ✅ `color-scheme:light` su `:root`
- ✅ `@media(prefers-color-scheme:dark)` commentato — nessuna regola attiva
- ✅ Il sito appare chiaro indipendentemente dalla preferenza del sistema operativo

## Conferma nessuna modifica funzionale
- ✅ Nessuna riga di JavaScript modificata
- ✅ Nessuna funzione aggiunta/rimossa/alterata
- ✅ Nessuna modifica a layout, classi HTML o struttura DOM

## Conferma schema .cml, export/import e role-access invariati
- ✅ Schema `.cml` non toccato
- ✅ Export/import docente, dipartimento, referente non toccati
- ✅ Role-access gating non toccato

## Controlli PASS/FAIL

| Controllo | Esito |
|---|---|
| Braces CSS bilanciate | PASS |
| `git diff --check` nessun warning | PASS |
| Nessuna occorrenza attiva `prefers-color-scheme` | PASS |
| `color-scheme:light` presente | PASS |
| Nessuna nuova dipendenza esterna | PASS |
| `sw.js` non modificato | PASS |
| Schema `.cml` non modificato | PASS |
| Export/import invariati | PASS |
| Role-access invariato | PASS |
| `localStorage`/`sessionStorage` invariati | PASS |
| Nessuna `@media` orfana | PASS |
