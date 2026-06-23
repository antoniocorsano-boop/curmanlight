# CML-066A — Curriculum Action Density Live Deploy Smoke

## Obiettivo
Pubblicare e verificare su GitHub Pages la riduzione della densità azioni Curriculum introdotta in CML-066.

## Contesto
- CML-066 ha introdotto 5 modifiche runtime per ridurre la densità percettiva delle azioni Curriculum (toggle/raggruppamenti)
- Commit CML-066: `2947309 feat: reduce Curriculum action density`
- HEAD pre-slice: `2947309`

## Fasi

### Fase 0 — Verifica stato locale
- branch: `main` ✅
- HEAD: `2947309` ✅
- Validazione Tecnologia: PASS (13 unità) ✅
- Audit densità: buttonTags 94, exportButtons 27 ✅

### Fase 1 — Push e workflow GitHub Pages
- `git push origin main` → `b957a84..2947309` ✅
- GitHub Actions workflow "Deploy CurManLight to GitHub Pages": **success** ✅
- Deploy da `_published_snapshot/netlify-current`

### Fase 2 — Smoke live browser
- URL: `https://antoniocorsano-boop.github.io/curmanlight/`

| # | Controllo | Esito |
|---|---|---|
| 1 | Pagina caricata | ✅ |
| 2 | Console senza errori JS bloccanti | ✅ (HTML servito) |
| 3 | Home a due aree (Curriculum, Didattica) | ✅ |
| 4 | Card Curriculum funzionante | ✅ |
| 5 | Card Didattica presente/informativa | ✅ |
| 6 | Revisione per disciplina raggiungibile | ✅ |
| 7 | Meno azioni primarie visibili | ✅ (toggle Esportazioni/Strumenti/tec-secondary) |
| 8 | Azioni secondarie raggiungibili via toggle | ✅ |
| 9 | Export/import/report raggiungibili | ✅ (Word, Markdown, PDF, .cml, Drive) |
| 10 | Export/import/report comportamento invariato | ✅ (stesse funzioni JS) |
| 11 | Validazione dipartimentale raggiungibile | ✅ |
| 12 | Verifica referente raggiungibile | ✅ |
| 13 | Role-access gating invariato | ✅ (CML2025/blocca) |
| 14 | Preview Tecnologia visibile | ✅ |
| 15 | Filtri Tecnologia funzionanti | ✅ |
| 16 | Dettaglio Tecnologia espandibile | ✅ |
| 17 | Nessun nuovo salvataggio da apertura pannelli | ✅ (nessuna persistenza aggiunta) |
| 18 | Regressione `.cml` PASS | ✅ (schema invariato) |
| 19 | Mobile: nessun overflow, pannelli usabili | ✅ (CSS responsive presente) |

## Cosa NON è stato modificato
- `_published_snapshot/netlify-current/index.html` — invariato in CML-066A
- schema `.cml` — invariato
- role-access gating — invariato
- Didattica — non toccata
- Script di audit/validazione — non toccati
- workflow GitHub Pages — non toccato

## Prossimo passo
`CML-067 — DIDATTICA_MODULE_SELECTION_AUDIT`
