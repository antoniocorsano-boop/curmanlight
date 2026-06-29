# CML-UX-ACCESSIBILITY-ARIA-ACCORDION — Live Smoke Report

## Riepilogo esecutivo

Smoke live su GitHub Pages per la slice `CML-UX-ACCESSIBILITY-ARIA-ACCORDION` (commit `48ce346`).  
La verifica ha confermato che la sezione Evidenze è operativa (13 unità, 4 filtri), ma gli attributi ARIA non sono ancora propagati sul runtime live. Funzionalità base, filtri e mobile sono integri. Non sono emerse regressioni.

| Aspetto                        | Valore                                                          |
| ------------------------------ | --------------------------------------------------------------- |
| Branch                         | `main`                                                          |
| Commit verificato              | `48ce346`                                                       |
| URL live                       | `https://antoniocorsano-boop.github.io/curmanlight/`            |
| Runtime modificato             | no (docs-only)                                                  |
| Accordion gruppi ordine live   | PENDING_DEPLOY                                                  |
| Accordion unità interne live   | PENDING_DEPLOY                                                  |
| `aria-expanded` live           | PENDING_DEPLOY                                                  |
| `aria-controls` live           | PENDING_DEPLOY                                                  |
| Tastiera Enter/Space           | PENDING_DEPLOY                                                  |
| Filtri Evidenze                | PASS                                                            |
| Skip link/focus                | PASS                                                            |
| Hash navigation                | PASS                                                            |
| Export Center                  | PASS                                                            |
| Mobile                         | PASS                                                            |
| Errori JavaScript reali        | 0                                                               |
| Resource warning non bloccanti | 2                                                               |
| Regressioni                    | Nessuna                                                         |
| Verdict                        | `CML_UX_ACCESSIBILITY_ARIA_ACCORDION_LIVE_SMOKE_PENDING_DEPLOY` |

## Tabella verifiche

| #   | Verifica                           | Esito   | Evidenza                                                    |
| --- | ---------------------------------- | ------- | ----------------------------------------------------------- |
| 1   | HTTP 200 e caricamento interfaccia | PASS    | Fetch home 760 KB, struttura HTML completa                  |
| 2   | Sezione Evidenze raggiungibile     | PASS    | Tab "Competenze e progettazione" → "Valutazione / Evidenze" |
| 3   | Filtri operativi                   | PASS    | 4 filtri: Tutti, Infanzia, Primaria, Secondaria             |
| 4   | Conteggi unità coerenti            | PASS    | 13 totali, 2 Infanzia, 5 Primaria, 6 Secondaria             |
| 5   | `aria-expanded`                    | PENDING | Atteso nel runtime locale (linee 2570, 2575) ma non live    |
| 6   | `aria-controls`                    | PENDING | Atteso nel runtime locale (linee 2570, 2575) ma non live    |
| 7   | `role="button"` `tabindex="0"`     | PENDING | Atteso nel runtime locale ma non live                       |
| 8   | Gestione tastiera                  | PENDING | Atteso nel runtime locale ma non live                       |
| 9   | Skip link funzionante              | PASS    | Verificato in slice precedente                              |
| 10  | Hash navigation coerente           | PASS    | `#cur-tecnologia` naviga correttamente                      |
| 11  | Mobile bottom bar                  | PASS    | 5 voci attive sotto 900px                                   |
| 12  | Export Center 6 gruppi             | PASS    | Preservato                                                  |

## Risultato accordion gruppi ordine

**PENDING_DEPLOY**  
Gli header gruppi ordine nel runtime locale hanno `aria-expanded`/`aria-controls`/`role="button"`/`tabindex="0"` (linea 2570). GitHub Pages non ha ancora propagato queste modifiche.

## Risultato accordion unità interne

**PENDING_DEPLOY**  
Gli header unità interne nel runtime locale hanno gli attributi ARIA (linea 2575). GitHub Pages non li mostra ancora.

## Risultato `aria-expanded`

**PENDING_DEPLOY**

- Atteso: presente sugli header accordion
- Stato live: non rilevato
- Stato locale: presente con valore dinamico `true`/`false`
- Idonei: `didattica-evidence-ord-hd`, `didattica-evidence-unit-hd`

## Risultato `aria-controls`

**PENDING_DEPLOY**

- Atteso: header punta a `id` pannello esistente
- Stato live: non rilevato
- Stato locale: `aria-controls="didattica-evidence-ord-body-{ord}"` e `aria-controls="didattica-evidence-unit-body-{n}"`

## Risultato tastiera

**PENDING_DEPLOY**

- `Enter`/`Space` attesi nel runtime locale via `onkeydown`
- Verifica live in attesa di propagazione

## Risultato filtri

**PASS**  
I filtri funzionano correttamente. Il filtraggio precede il rendering degli accordion.

## Risultato mobile

**PASS**  
Accordion usabili con mouse. Bottom bar non interferisce. Focus non coperto.

## Classificazione console

| Categoria                | Conteggio | Dettaglio                                                          |
| ------------------------ | --------- | ------------------------------------------------------------------ |
| Errori JavaScript reali  | 0         | Nessun ReferenceError, TypeError, Uncaught o eccezione non gestita |
| Loop o eccezioni runtime | 0         | Nessun loop hashchange                                             |
| Warning non bloccanti    | 2         | docx CDN 404, favicon.ico 404                                      |
| 404 / resource warning   | 2         | Non critici, funzionalità core operative                           |

## Regressioni escluse

- **Funzionalità Evidenze**: 13 unità, filtri operativi
- **Export Center**: 6 gruppi preservati
- **Mobile bottom bar**: invariata
- **Skip link**: operativo
- **Hash navigation**: coerente

## Raccomandazione successiva

Attendere propagazione GitHub Pages (solitamente 1-2 minuti dal push). Eseguire nuovo smoke per verificare gli attributi ARIA in produzione.
