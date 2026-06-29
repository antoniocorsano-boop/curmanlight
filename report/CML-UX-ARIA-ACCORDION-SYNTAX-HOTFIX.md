# CML-UX-ARIA-ACCORDION-SYNTAX-HOTFIX - Report

## Riepilogo

Hotfix runtime mirata per correggere la regressione di sintassi introdotta nella generazione degli accordion ARIA della sezione Evidenze. Il problema impediva il completamento dello script inline e produceva a cascata `setTab is not defined`.

| Aspetto | Valore |
|---------|--------|
| Branch | `main` |
| Commit iniziale | `c5ac7d0` |
| Runtime remoto verificato | `48ce346` |
| Runtime modificato | si |
| File runtime | `_published_snapshot/netlify-current/index.html` |
| Push eseguito | no |
| Verdict | `CML_UX_ARIA_ACCORDION_SYNTAX_HOTFIX_READY` |

## Diagnosi

La riga generata per gli header degli accordion conteneva handler inline con apici singoli non escapati dentro una stringa JavaScript delimitata da apici singoli. Il parser interpretava quindi `open` come identificatore fuori stringa e interrompeva il caricamento dello script.

Esempi della causa:

- `this.classList.toggle('open')`
- `this.setAttribute('aria-expanded', ...)`
- `event.key=='Enter'`

Dopo l'escape degli apici, il controllo sintattico ha evidenziato anche una graffa superflua nel blocco Obiettivi; rimossa come parte della stessa hotfix per ripristinare la struttura corretta del ciclo sulle unita'.

## Correzione

- Escape degli apici interni negli handler inline dei gruppi ordine.
- Escape degli apici interni negli handler inline delle unita' interne.
- Rimozione della graffa extra dopo `html+='</ul></div>';` nel blocco Obiettivi.

## Verifiche eseguite

| Verifica | Esito |
|----------|-------|
| `node --check` sugli script estratti | PASS |
| Validatore curriculum | 14/14 PASS |
| Shape test | 14/14 PASS |
| Smoke locale via CDP | PASS |
| Errori JavaScript reali | 0 |
| `setTab` | `function` |
| `selectDisc` | `function` |
| Accordion gruppi ordine | PASS |
| Accordion unita' interne | PASS |
| `aria-expanded` dinamico | PASS con Enter/Space |
| `aria-controls` | PASS, target presenti |
| Filtri Evidenze | PASS |
| Export Center | presente |
| Mobile bottom bar | presente |

## Evidenza smoke locale

- Gruppi ordine renderizzati: 3.
- Unita' interne nello smoke: 13.
- Primo gruppo con `aria-expanded="true"` e `aria-controls` valido.
- Unita' interne con `aria-expanded="false"` iniziale e `aria-controls` valido.
- Enter e Space alternano `aria-expanded` su gruppo e unita'.
- Nessuna eccezione raccolta da `window.onerror` / `unhandledrejection`.

## Scope rispettato

Non sono stati toccati:

- `index.html`
- `content/curriculum/`
- service worker
- manifest
- asset
- deploy config
- `.cml` schema/export/import
- `tools/`

## Untracked esclusi

- `.tmp/`
- `test-results/`
- `tools/smoke-hash-nav.mjs`
- `.tmp-curmanlight-hotfix-script-check.js`

## Conclusione

La regressione `Unexpected identifier 'open'` e' risolta. Il runtime torna a definire `setTab` e preserva la funzionalita' ARIA degli accordion Evidenze.