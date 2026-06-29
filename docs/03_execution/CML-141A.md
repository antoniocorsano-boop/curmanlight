# CML-141A — Adapter Output vs MAPPA_DATI Shape Confrontation

**Verdetto:** `CML_141A_ADAPTER_OUTPUT_SHAPE_SMOKE_READY`

**Stato:** Concluso.

## Obiettivo

Confrontare l'output dello strumento `scripts/adapter-mappa-dati.js` con la struttura `MAPPA_DATI` hardcoded in `index.html`, per verificare la compatibilità prima dell'integrazione adapter→runtime.

## Risultati principali

| Chiave                  | Compatibilità  | Dettaglio                                                   |
| ----------------------- | -------------- | ----------------------------------------------------------- |
| `disciplina`            | ✅ Diretta     | Stringa, identica                                           |
| `struttureSostanziali`  | ⚠️ Parziale    | Adapter usa `unita[]` invece di flat `{descrizione, fonte}` |
| `nodiDisciplinari`      | ✅ Gap colmato | Tecnologia mancava — adesso generato                        |
| `progressioneVerticale` | ⚠️ Parziale    | Adapter raggruppa unità, manca `descrizioneProgressione`    |
| `decisioniCurricolari`  | ✅ Diretta     | Pass-through identico                                       |

## Impatto

L'integrazione adapter→runtime **non è diretta**. Necessario contratto CML-142 per decidere come colmare lo shape gap senza rompere la UI.

## File prodotti

- `report/CML-141A_adapter_confronto_output.md` — report di confronto dettagliato

## Verdetto

```
CML_141A_ADAPTER_OUTPUT_SHAPE_SMOKE_READY
```
