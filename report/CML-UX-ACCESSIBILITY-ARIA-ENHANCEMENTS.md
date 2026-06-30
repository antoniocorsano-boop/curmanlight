# Report: CML-UX-ACCESSIBILITY-ARIA-ENHANCEMENTS

## Task

Aggiungere aria-live announcements per cambio disciplina/tab e nascondere emoji decorativi agli screen reader tramite `aria-hidden="true"`.

## Commit

- **Commit base**: `3276da2` (CML UDA evidence export UI increment + hardening)
- **File modificato**: `_published_snapshot/netlify-current/index.html` (+167/−152)

## Scope

runtime increment — solo `_published_snapshot/netlify-current/index.html`

## Invarianti verificate

| Invariante | Stato |
|---|---|
| `content/curriculum/` non modificato | ✅ |
| `manifest.json`, `service-worker.js`, `sw.js` non modificati | ✅ |
| JSON, export/import `.cml` non modificati | ✅ |
| Funzioni esportazione non modificate | ✅ |
| Navigazione hash invariata | ✅ |
| `tools/` non modificato | ✅ |
| Nessun secret/credenziale nel diff | ✅ |
| Validatore curriculum 14/14 PASS | ✅ |
| Shape test 14/14 PASS | ✅ |
| `git diff --check` clean | ✅ |

## Cosa è stato fatto

1. **aria-live status region**: `<div id="a11y-status" class="sr-only" role="status" aria-live="polite" aria-atomic="true">`
2. **Funzione `announceStatus()`**: svuota textContent + setTimeout 30ms per trigger screen reader
3. **`selectDisc()` e `setTab()`**: chiamano `announceStatus()` per annunciare cambio disciplina/tab
4. **`aria-hidden="true"` su emoji decorativi**: copre tutti i principali elementi UI statici e dinamici:
   - Tabbar, subnav, cruscotto, quick-actions
   - Home page (percorso, card, microguide)
   - Didattica, UDA, Revisione, Processo, Riepilogo
   - Normativa/Fonti (icone, titoli, link)
   - Esportazioni, Guida, Header
   - JS template strings (sidebar, disc header, curricolo view)

## Cosa NON è stato fatto

- Modifica di `ORDINE_LABEL` e `DISCIPLINE_META` JS constants (usate anche per stripping emoji)
- Modifica di showToast (messaggi brevi e auto-dismiss)
- Modifica di esportazioni Markdown/Word (.replace regex che strip emoji)

## Stato consolidato

| Indicatore | Stato |
|---|---|
| Normalizzato | 14/14 |
| Runtime mappa | 14/14 |
| Validatore | 14/14 PASS |
| Shape test | 14/14 PASS |
| GitHub Pages | HTTP 200 — stabile |
| Evidence panel | 14/14 |
| UDA draft | disponibile |
| OPS guardrails | chiuso |
| SchoolKB | differito (CML-227) |

## Verdetto

```
CML_UX_ACCESSIBILITY_ARIA_ENHANCEMENTS_READY
```
