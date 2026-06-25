# CML-143A — RUNTIME_SHAPE_TRANSFORMER_OUTPUT_SMOKE

**Stato:** Concluso.
**Verdetto:** `CML_143A_RUNTIME_SHAPE_TRANSFORMER_OUTPUT_SMOKE_READY`

## Obiettivo

Verificare che l'output flat di `tools/to-runtime-mappa-dati-transformer.mjs` sia realmente compatibile con i campi letti da `renderMappaDisciplinare()` nel runtime.

## Stato di partenza

```
Branch:        main
HEAD:          384530f (7 ahead of origin)
origin/main:   85bbab4
Working tree:  pulito
Validatore:    7/94, overallValid: true ✅
```

## Campi runtime letti da `renderMappaDisciplinare()`

| Sezione UI | Campo | Accesso | Obbligatorio |
|------------|-------|---------|:------------:|
| struttureSostanziali | `nome` | `s.nome` | sì |
| struttureSostanziali | `descrizione` | `s.descrizione` | sì |
| struttureSostanziali | `fonte` | `s.fonte` | sì |
| nodiDisciplinari | `etichetta` | `n.etichetta` | sì |
| nodiDisciplinari | `tipo` | `n.tipo` | sì |
| nodiDisciplinari | `descrizione` | `n.descrizione` | sì |
| nodiDisciplinari | `fonte` | `n.fonte` | sì |
| progressioneVerticale | `ordine` | `p.ordine` | sì |
| progressioneVerticale | `fascia` / `classe` | `p.fascia`, `p.classe` | sì (almeno uno) |
| progressioneVerticale | `descrizioneProgressione` | `p.descrizioneProgressione` | sì |
| progressioneVerticale | `fonte` | `p.fonte` | sì |
| decisioniCurricolari | `tipo` | `d.tipo` | sì |
| decisioniCurricolari | `motivazione` | `d.motivazione` | sì |
| decisioniCurricolari | `fonte` | `d.fonte` | sì |

## Discipline testate

| Disciplina | Strutture | Nodi | Progressioni | Decisioni | Tutti i campi OK |
|-----------|:---------:|:----:|:------------:|:---------:|:----------------:|
| Tecnologia | 6 | 6 | 10 | 2 | ✅ |
| Italiano | 12 | 6 | 10 | 4 | ✅ |
| Matematica | 12 | 5 | 6 | 4 | ✅ |
| Scienze (opz) | 15 | 5 | 9 | 0 | ✅ |

## Risultati confronto Tecnologia

| Area | Esito | Dettaglio |
|------|:-----:|-----------|
| `disciplina` | ✅ | Stringa identica |
| `struttureSostanziali` | ✅ | Stesso count (6), tutti i campi presenti |
| `nodiDisciplinari` | ✅ Gap colmato | Hardcoded non aveva, ora generato per tutte le discipline |
| `progressioneVerticale` | ✅ | Stesso count (10), tutti i campi presenti |
| `decisioniCurricolari` | ✅ | Pass-through identico |

## Gap residui

| Gap | Severità | Note |
|-----|:--------:|------|
| `descrizione` generata automaticamente vs scritta a mano | Basso | Meno curata semanticamente ma presente |
| `fonte` statica `"JSON curriculum strutturato"` vs specifica | Basso | Non riporta ID unità |
| Ordinamento output diverso dall'hardcoded | Nullo | Non impatta la UI |
| `nodiRiferimento` assenti in progressioneVerticale | Basso | Erano già vuoti in hardcoded Tecnologia |

## Decisione per CML-144

Opzione selezionata: **C — Test harness senza runtime**

Motivazione: lo shape è compatibile, tutti i campi sono presenti, ma non esiste ancora un controllo automatico ripetibile che garantisca che l'output del transformer abbia sempre tutti i campi letti dalla UI.

CML-144 sarà `RUNTIME_MAPPA_DATI_SHAPE_TEST_HARNESS` — uno script di test che verifica automaticamente che ogni output transformer abbia tutti i campi richiesti da `renderMappaDisciplinare()`.

## Verifica vincoli

- Runtime non modificato ✅
- JSON disciplinari non modificati ✅
- Adapter non modificato ✅
- Transformer non modificato ✅
- Validatore non modificato ✅
- File temporanei rimossi ✅

## Prossimo passo

CML-144 — RUNTIME_MAPPA_DATI_SHAPE_TEST_HARNESS: test automatico che verifica campi obbligatori dell'output transformer.
