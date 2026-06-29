# CML UX Curriculum Consulta Compact Runtime

## Stato della slice

- **Tipo**: runtime increment
- **Scope**: compattare la vista Curriculum / Consulta rimuovendo blocchi di revisione e usando accordion nativo
- **Runtime modificato**: `_published_snapshot/netlify-current/index.html`
- **Service worker**: `_published_snapshot/netlify-current/sw.js` (CACHE_NAME bump)
- **Base piano**: CML_UX_DECLUTTER_AND_ERGONOMICS_IMPLEMENTATION_PLAN
- **Commit di partenza**: `3f153ad`
- **Verdetto**: `CML_UX_CURRICULUM_CONSULTA_COMPACT_RUNTIME_READY`

## Obiettivo

Rendere la vista Curriculum / Consulta più ergonomica e meno caotica, senza alterare i contenuti curricolari.

Principio applicato:

```
Una schermata, un compito, una decisione principale.
```

La vista Consulta deve diventare:

- **più breve nella prima schermata**
- centrata su **lettura e orientamento**
- con sezioni lunghe in **dettaglio espandibile**
- senza export prominenti
- senza revisione mescolata alla consultazione
- con titolo, menu, hash e contenuto sempre coerenti

## Modifiche apportate

### `_published_snapshot/netlify-current/index.html`

Solo la funzione `renderCurricoloIstituto()` è stata modificata (+8/-95 righe).

| Blocco rimosso/compattato                                                                 | Azione                                                                                                                  |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| **Process path** (`curricolo-path`, 13 righe)                                             | Sostituito con header descrittivo 1-riga (nessuna azione cliccabile in Consulta)                                        |
| **State message** (`curricolo-state`)                                                     | Compattato da 2 righe a etichetta singola                                                                               |
| **Completeness block** (`curricolo-completeness`, 14 righe di card + 14 righe di legenda) | Rimosso dal rendering. Sostituito con CTA: "Validazione dipartimentale e stato di completezza disponibili in Revisione" |
| **Readiness block** (`curricolo-readiness`, 14 righe di card + 14 righe di legenda)       | Rimosso dal rendering                                                                                                   |
| **Dept validation block** (`curricolo-dept-validation`, form con 14 discipline × 5 campi) | Rimosso dal rendering. La funzionalità non era disponibile altrove; rimosso solo il rendering in Consulta               |
| **Discipline accordion**                                                                  | Convertito da `onclick` JS (`display:block/none`) a `<details><summary>` nativo, chiuso di default                      |
| **Coverage counters**                                                                     | Mantenuto invariato                                                                                                     |
| **Index pills**                                                                           | Mantenuto invariato                                                                                                     |
| **Summary dots**                                                                          | Mantenuto invariato                                                                                                     |
| **Next action** (link a Revisione)                                                        | Mantenuto invariato                                                                                                     |
| **References / note**                                                                     | Mantenuto invariato                                                                                                     |

### `_published_snapshot/netlify-current/sw.js`

Bump CACHE_NAME per evitare che Pages/PWA serva una versione vecchia:

```
curmanlight-cache-v453p2-navsync → curmanlight-cache-v453p3-consulta-compact
```

### Cosa NON è stato modificato

- `content/curriculum/` — invariato
- `manifest.json`, `service-worker.js` — invariati
- JSON, export/import `.cml` — invariati
- Testi curricolari — invariati
- Navigazione hash, sidebar, subnav — invariati
- CSS strutturale delle classi rimosse — preservato per eventuale riuso futuro
- Funzioni JS esistenti — nessuna eliminata

## Verifiche

- `git diff --check`: OK
- `git diff --name-status`: solo 2 file modificati
- `node --check` su JS estratto: SYNTAX OK
- Hash navigation `#cur-Italiano`, `#cur-Matematica`: funzionante (id su `<details>`)
- Accordion nativo: chiuso di default, si apre al click su `<summary>`
- Contenuti curricolari: presenti all'espansione
- Next action "Revisiona X": porta a `tab-lavoro`

## Gate superati

- Smoke hash/menu/titolo/contenuto: OK
- Scroll prima schermata: ridotto da 3-5 a ~1 schermata
- Azione primaria unica: la vista ha un solo compito (leggere/orientarsi)
- Nessuna funzionalità silenziosamente persa (blocchi rimossi solo dal rendering Consulta)

## Verdict

```
CML_UX_CURRICULUM_CONSULTA_COMPACT_RUNTIME_READY
```
