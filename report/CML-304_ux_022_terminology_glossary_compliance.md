# Report — CML-304: UX-022 Terminology Glossary Compliance

## Sintesi

CML-304 ha applicato una micro-correzione lessicale al runtime visibile: il badge "Prototipo" nella Guida note è stato sostituito con "Bozza di lavoro", in conformità con le preferenze terminologiche del glossario scolastico.

## Ricerca lessicale completa

Sono stati ricercati 9 termini target in **entrambi i file runtime** (`index.html` e `_published_snapshot/netlify-current/index.html`). La ricerca ha coperto CSS, HTML, JS e commenti.

### Risultati per termine

#### "pacchetto"
- 1 occorrenza (commento codice, linea 6261)
- **Verdetto**: interno — non visibile all'utente. Nessuna modifica.

#### "voci"
- 15+ occorrenze in testo UI (statistiche, esportazioni, note)
- **Verdetto**: italiano scolastico standard. Nessuna modifica.

#### "snapshot"
- 2 occorrenze in proprietà CSS (`scroll-snap-type`, `scroll-snap-align`)
- **Verdetto**: CSS interno. Nessuna modifica.

#### "mappa dati"
- 34 variabili JS (`*_MAPPA_DATI`) e una variabile di funzione (`mappaDisciplinaCorrente`)
- **Verdetto**: nomi variabili interni. Nessuna modifica.

#### "normalizzato"
- 1 occorrenza (commento codice, linea 6261)
- **Verdetto**: commento interno. Nessuna modifica.

#### "prototipo"
- 1 occorrenza in testo visibile (badge Guida note, linea 2280)
- 2 occorrenze in CSS class (`badge--prototype`, righe CSS commentate)
- **Verdetto**: VISIBILE → CORRETTO: "Prototipo" → "Bozza di lavoro"

#### "readonly"
- 12+ occorrenze in classi CSS, variabili JS, attributi HTML
- 3 occorrenze in testo visibile: tutte già "Sola consultazione" (corretto)
- **Verdetto**: testo UI già conforme; CSS/HTML interni. Nessuna modifica.

#### "badge"
- 30+ occorrenze in classi CSS; 0 in testo visibile
- **Verdetto**: nome classe CSS interno. Nessuna modifica.

#### "runtime"
- 0 occorrenze
- **Verdetto**: assente. Nessuna modifica.

## Modifica applicata

| Prima | Dopo |
|-------|------|
| `📋 Prototipo` | `📋 Bozza di lavoro` |

File: `index.html:2280` + `_published_snapshot/netlify-current/index.html:2280`

## Coerenza interna

"Bozza di lavoro" è già usato in altre parti dell'interfaccia:
- `Bozza disciplina` (tab Esportazioni, linea 2172)
- `Genera una bozza per vedere l'anteprima...` (placeholder UDA, linea 1745)
- `Passo 1 bozza annuale` (Guida, linea 2249)
- `Bozza di lavoro generata localmente` (JS UDA smart draft, linea 3014)

## Impatto

- **2 linee modificate** (1 per file runtime)
- **0 impatto** su funzionalità, dati, schema `.cml`, esportazioni, import, storage, service worker, deploy
- **0 impatto** su tool di validazione

## Non regressione

Tutti i UX item precedentemente chiusi sono stati verificati non regrediti:
- UX-001, UX-004, UX-006, UX-009, UX-011, UX-013, UX-014, UX-015 — confermati invariati

## Conclusione

CML-304 chiude UX-022 con una micro-correzione singola. Il lessico del runtime è ora conforme alle preferenze terminologiche del glossario scolastico per tutti i 9 termini target. Non sono emersi termini ambigui che richiedano valutazione caso per caso: tutte le occorrenze sono state classificate in modo univoco come visibili (1) o interne (tutte le altre).
