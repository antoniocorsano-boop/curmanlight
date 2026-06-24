# CML-112 — Disciplinary Hash Selection and Title Generalization Fix

## Bug P0 corretto
Disallineamento hash URL / disciplina selezionata / menu attivo / corpo pagina.

## Modifiche
| Modifica | Descrizione |
|----------|-------------|
| `resolveDiscFromHash()` | Nuova funzione: legge `location.hash`, riconosce `#cur-{slug}`, restituisce disciplina |
| `selectDisc()` | Ora aggiorna `location.hash` |
| `hashchange` listener | Se hash disciplinare diverso, aggiorna `selDisc` |
| INIT | Legge hash all'avvio per inizializzare `selDisc` |
| `renderTecnologiaNorm()` | Titolo dinamico: `selDisc + " — pacchetto curricolare normalizzato"` |

## Hash verificati
14/14 hash disciplinari funzionanti. Hash non validi: fallback a Tecnologia o nessun cambiamento.

## Verdetto
`CML_112_DISCIPLINARY_HASH_SELECTION_AND_TITLE_GENERALIZATION_FIX_READY`
