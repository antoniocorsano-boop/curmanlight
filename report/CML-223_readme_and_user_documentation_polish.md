# CML-223 — README and User Documentation Polish

## Start commit

`9d14357` (CML-222S, origin/main aligned)

## File modificati

- `README.md` — creato (nuovo)
- `docs/04_user/CML_MESSAGGIO_INVITO_PROVA_CONTROLLATA.md` — URL aggiornato
- `docs/04_user/CML_CHECKLIST_AVVIO_PILOT_OSSERVAZIONI.md` — URL aggiornato
- `docs/04_user/CML_SCHEDA_CONDUZIONE_INCONTRO.md` — URL aggiornato
- `docs/04_user/CML_TRACCIA_INCONTRO_PRESENTAZIONE_OPERATIVA.md` — URL aggiornato
- `docs/04_user/CML_SCHEDA_STATO_PROGETTO.md` — URL aggiornato
- `docs/04_user/CML_NOTA_RILASCIO_STATO_ATTUALE.md` — URL aggiornato
- `docs/04_user/CML_SCHEDA_REFERENTE_CURRICOLO.md` — URL aggiornato
- `docs/04_user/CML_VADEMECUM_DIPARTIMENTI.md` — URL aggiornato
- `docs/04_user/CML_GUIDA_SIMULAZIONE_ESEMPI.md` — URL aggiornato
- `docs/04_user/CML_GUIDA_RAPIDA_UTENTE.md` — URL aggiornato
- `docs/04_user/CML_PRESENTAZIONE_DS.md` — URL aggiornato
- `docs/04_user/CML_NOTA_COLLEGIO_DOCENTI.md` — URL aggiornato
- `docs/03_execution/CML-223.md`
- `report/CML-223_readme_and_user_documentation_polish.md`
- `docs/REPO-MOVELOG.md`

## README summary

README.md descrive CurManLight come strumento web locale/privacy-first per consultazione e revisione curricolo verticale. Include: URL pubblico, principi, feature inventory tabellare, uso rapido, limitazioni note, comandi validazione.

## Netlify reference handling

- 18 riferimenti obsoleti in 12 file utente: tutti aggiornati a GitHub Pages
- Riferimenti storici in file tecnici/execution docs (CML-_, CML-REPO-_): preservati come documentazione storica
- Zero riferimenti Netlify rimasti in `docs/04_user/`

## Favicon deferral

favicon.ico rimandato a ciclo futuro (bassa priorità). Non implementato in questa slice.

## Technical checks

- Validatore JSON: 14/14 PASS
- Shape test: 14/14 PASS
- `git diff --check`: clean
- Runtime/JSON/.cml: nessuna modifica

## Prossima sequenza

- CML-223S — Controlled push
- CML-224 — Public workflow smoke and release gate
- CML-225 — Next cycle selection (likely SchoolKB)

## Finale

- **Start commit**: `9d14357`
- **Final commit**: da definire dopo commit
- **Docs-only**: nessuna modifica runtime, curriculum JSON, .cml, export/import, validator, shape-test, service-worker, manifest, dipendenze
- **No deploy, no push, no secrets**
- **Verdetto**: `CML_223_README_AND_USER_DOCUMENTATION_POLISH_READY`
