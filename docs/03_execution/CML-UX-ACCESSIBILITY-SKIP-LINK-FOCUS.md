# CML-UX-ACCESSIBILITY-SKIP-LINK-FOCUS

## Stato della slice

- **Tipo**: runtime accessibility microfix
- **Scope**: skip link e gestione focus per navigazione tastiera nel runtime pubblicato
- **Runtime modificato**: `_published_snapshot/netlify-current/index.html`
- **Commit di partenza**: `1ba184b` (HEAD == origin/main)
- **Verdetto**: `CML_UX_ACCESSIBILITY_SKIP_LINK_FOCUS_READY`

## Obiettivo

Ridurre il primo P1 dell'audit accessibilita' aggiungendo un percorso tastiera diretto al contenuto principale e sincronizzando il focus quando la navigazione runtime cambia pannello o disciplina.

## Modifiche apportate

### `_published_snapshot/netlify-current/index.html`

| Intervento                 | Azione                                                                        | Dettaglio                                                                                                   |
| -------------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| Skip link                  | Aggiunto link iniziale verso `#main-content`                                  | Il primo Tab intercetta `Salta al contenuto principale`; il link e' nascosto off-screen e visibile su focus |
| Focus target               | `main-content` reso focusabile dinamicamente                                  | `setTab()` e `selectDisc()` impostano `tabindex="-1"` prima del focus programmato                           |
| Focus su cambio tab        | `setTab()` porta il focus al contenuto principale quando appropriato          | `opts.focus!==false` evita focus forzato nei flussi che lo disabilitano                                     |
| Focus su cambio disciplina | `selectDisc()` mantiene scroll e focus coerenti con la disciplina selezionata | Hash, titolo, breadcrumb e disciplina restano sincronizzati                                                 |

### Cosa NON e' stato modificato

- `content/curriculum/` invariato
- `manifest.json`, `service-worker.js`, `sw.js` invariati
- JSON, export/import `.cml` invariati
- Bottom bar mobile invariata
- Export Center invariato
- `tools/smoke-hash-nav.mjs` non incluso, resta untracked

## Verifiche

- `git diff --check`: PASS
- Validatore curriculum: 14/14 PASS (`overallValid: true`, `invalidCount: 0`)
- Shape test runtime: 14/14 PASS (`14 passed`, `0 failed`)
- Smoke tastiera/focus: `SMOKE_PASS_WITH_NON_BLOCKING_RESOURCE_WARNINGS`

## Smoke tastiera/focus

| Check                                                          | Esito |
| -------------------------------------------------------------- | ----- |
| Primo Tab intercetta lo skip link                              | PASS  |
| Invio sullo skip link porta a `#main-content`                  | PASS  |
| Focus visibile sullo skip link                                 | PASS  |
| Nessuna trappola da tastiera rilevata                          | PASS  |
| Cambio tab da menu principale porta il focus a `#main-content` | PASS  |
| Cambio disciplina conserva titolo, breadcrumb e hash           | PASS  |
| Hash navigation non genera loop                                | PASS  |
| Bottom bar mobile invariata                                    | PASS  |
| Export Center invariato                                        | PASS  |
| Errori JavaScript reali                                        | 0     |
| Resource warning / 404 non bloccanti                           | 3     |

## Note sui warning

Lo smoke ha prodotto 3 warning di risorsa non bloccanti collegati a risorse/target precedenti o 404 locali. Non sono state rilevate eccezioni runtime dell'app ne' console error applicativi.

## Verdict

```text
CML_UX_ACCESSIBILITY_SKIP_LINK_FOCUS_READY
```
