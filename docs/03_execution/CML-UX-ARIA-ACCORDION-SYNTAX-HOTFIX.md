# CML-UX-ARIA-ACCORDION-SYNTAX-HOTFIX

## Stato della slice

- **Tipo**: runtime hotfix mirata
- **Commit base locale**: `c5ac7d0` (docs-only smoke live pending)
- **Runtime remoto verificato**: `48ce346`
- **File runtime modificato**: `_published_snapshot/netlify-current/index.html`
- **Verdict di ingresso**: `CML_UX_ACCESSIBILITY_ARIA_ACCORDION_LIVE_SMOKE_FAIL_NEEDS_HOTFIX`
- **Verdict di uscita**: `CML_UX_ARIA_ACCORDION_SYNTAX_HOTFIX_READY`

## Problema osservato

Lo smoke live sugli accordion ARIA Evidenze ha rilevato un blocco di parsing JavaScript:

- `SyntaxError: Unexpected identifier 'open'`
- `ReferenceError: setTab is not defined`

Il secondo errore era un effetto a cascata: lo script inline non veniva completato, quindi le funzioni runtime globali non venivano definite.

## Causa individuata

Dentro `renderDidattica()`, due stringhe HTML generate da JavaScript usavano apici singoli esterni e contenevano handler inline con altri apici singoli non escapati:

- `classList.toggle('open')`
- `classList.contains('open')`
- `setAttribute('aria-expanded', ...)`
- confronti tastiera con `event.key=='Enter'` e `event.key==' '`

Questi apici chiudevano prematuramente la stringa JavaScript, causando il parse error su `open`.

Durante il controllo sintattico e' emersa anche una graffa `}` fuori posto dopo la sezione Obiettivi, che chiudeva anticipatamente il ciclo sulle unita' e lasciava il rendering successivo fuori contesto.

## Fix applicato

Intervento limitato a `renderDidattica()`:

- escapati gli apici interni negli handler inline degli accordion gruppi ordine;
- escapati gli apici interni negli handler inline degli accordion unita' interne;
- rimossa la graffa fuori posto dopo il blocco Obiettivi.

Non sono stati modificati JSON, contenuti curricolari, service worker, manifest, asset, export/import `.cml`, deploy config o tooling.

## Verifiche

| Check                              | Esito                                           |
| ---------------------------------- | ----------------------------------------------- |
| Estrazione script + `node --check` | PASS                                            |
| Validatore curriculum              | 14/14 PASS                                      |
| Shape test runtime                 | 14/14 PASS                                      |
| Smoke locale errori JS reali       | 0                                               |
| `setTab` globale                   | definita                                        |
| `selectDisc` globale               | definita                                        |
| Accordion gruppi ordine            | PASS, 3 gruppi renderizzati                     |
| Accordion unita' interne           | PASS, 13 unita' renderizzate nello smoke        |
| `aria-expanded`                    | PASS, aggiornato da Enter/Space                 |
| `aria-controls`                    | PASS, target esistenti                          |
| Filtri Evidenze                    | PASS, controlli presenti                        |
| Skip link/focus precedente         | nessuna regressione rilevata nello smoke locale |
| Export Center                      | presente                                        |
| Mobile bottom bar                  | presente                                        |

## Note smoke

Lo smoke e' stato eseguito contro il file locale corretto via Chrome DevTools Protocol, senza creare nuovi file di test. Il controllo ha confermato che il runtime non genera eccezioni JavaScript e che gli accordion ARIA funzionano da tastiera.

## File modificati

- `_published_snapshot/netlify-current/index.html`
- `docs/03_execution/CML-UX-ARIA-ACCORDION-SYNTAX-HOTFIX.md`
- `report/CML-UX-ARIA-ACCORDION-SYNTAX-HOTFIX.md`
- `docs/REPO-MOVELOG.md`

## Esclusioni

Restano fuori commit:

- `.tmp/`
- `test-results/`
- `tools/smoke-hash-nav.mjs`
- `.tmp-curmanlight-hotfix-script-check.js`

## Verdict

`CML_UX_ARIA_ACCORDION_SYNTAX_HOTFIX_READY`
