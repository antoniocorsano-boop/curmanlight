# CML-222 — Public Release Readiness Audit

## Start commit

`6b8e7ad` (CML-221S, origin/main aligned)

## Classificazione

**Ready after documentation polish** — nessun bloccante runtime.

## File ispezionati

- `_published_snapshot/netlify-current/index.html` — runtime, labels, guide, riferimenti
- `docs/04_user/*.md` — 14 documenti utente
- `README-FIRST.md` — setup repo, non README pubblico
- `docs/REPO-MOVELOG.md` — storico
- `docs/03_execution/CML-218.md`, `CML-219.md`, `CML-220.md`, `CML-221.md` — ciclo recente

## Feature inventory

- Curriculum 14/14: ✅
- `.cml` workflow: ✅
- Evidence panel 14/14: ✅
- UDA draft preview/export: ✅
- Department import/validation: ✅
- Referent import/report: ✅
- Guida rapida in-app: ✅
- Privacy/local-first statement: ✅

## Gaps documentati

| #   | Gap                                     | Priorità | Fix                                                                                   |
| --- | --------------------------------------- | -------- | ------------------------------------------------------------------------------------- |
| 1   | Root README.md mancante                 | Alta     | Creare README.md con descrizione, URL, stato                                          |
| 2   | 18 riferimenti Netlify in 12 doc utente | Alta     | Sostituire `curmanlight.netlify.app` con `antoniocorsano-boop.github.io/curmanlight/` |
| 3   | Favicon.ico assente                     | Bassa    | Aggiungere favicon (solo apple-touch-icon presente)                                   |

## Technical checks

- Validatore JSON: 14/14 PASS
- Shape test: 14/14 PASS
- GitHub Pages: HTTP 200
- Hash smoke: 14/14 PASS
- Secret scan: clean
- `git diff --check`: clean

## Raccomandazione CML-223 scope

1. Creare `README.md` — descrizione progetto, URL pubblico, feature summary, stato, known limits
2. Aggiornare tutti i riferimenti Netlify → GitHub Pages in `docs/04_user/`
3. Aggiungere `favicon.ico` (opzionale)

## Prossima sequenza

- CML-223 — README and user documentation polish
- CML-224 — Public workflow smoke and release gate
- CML-225 — Next cycle selection (likely SchoolKB)

## Finale

- **Commit**: `6b8e7ad` (nessun nuovo commit — docs-only audit)
- **Docs-only**: nessuna modifica runtime, curriculum JSON, .cml, export/import, validator, shape-test, service-worker, manifest, dipendenze
- **No deploy, no push, no secrets**
- **Verdetto**: `CML_222_PUBLIC_RELEASE_READINESS_AUDIT_READY`
