# CML-144: Runtime MAPPA_DATI Shape Test Harness

## Fotografia iniziale

| Parametro | Valore |
|-----------|--------|
| Branch | `main` |
| HEAD | `558ca5f` |
| origin/main | `85bbab4` |
| Local ahead | 8 commits |
| Working tree | Pulito |
| Validatore | 7/94, `overallValid: true` ✅ |

## Riferimenti

| Slice | Contenuto |
|-------|-----------|
| CML-142 | Contratto integrazione: opzione B + D |
| CML-143 | Implementazione `toRuntimeMappaDati()` transformer |
| CML-143A | Smoke: output flat compatibile con `renderMappaDisciplinare()` |

## File test creato

`tools/test-runtime-mappa-dati-shape.mjs`

### Flusso del test

```
JSON normalizzato → json-to-mappa-dati-adapter → to-runtime-mappa-dati-transformer → shape check
```

### Campi obbligatori verificati

| Sezione | Campo | Obbligatorio |
|---------|-------|:------------:|
| root | `disciplina` | sì |
| `struttureSostanziali[]` (per item) | `nome`, `descrizione`, `fonte` | tutti e 3 |
| `nodiDisciplinari[]` (per item) | `etichetta`, `tipo`, `descrizione`, `fonte` | tutti e 4 |
| `progressioneVerticale[]` (per item) | `ordine`, `fascia` o `classe`, `descrizioneProgressione`, `fonte` | tutti e 4 |
| `decisioniCurricolari[]` | array valido (per item: `tipo`, `motivazione`, `fonte`) | 3 campi per item |

## Copertura discipline

| Disciplina | S | N | P | D | Esito |
|-----------|:-:|:-:|:-:|:-:|:-----:|
| Tecnologia | 6 | 6 | 10 | 2 | PASS |
| Italiano | 12 | 6 | 10 | 4 | PASS |
| Matematica | 12 | 5 | 6 | 4 | PASS |
| Scienze | 15 | 5 | 9 | 0 | PASS |
| Storia | 15 | 5 | 9 | 0 | PASS |
| Geografia | 12 | 3 | 9 | 0 | PASS |
| Inglese | 12 | 11 | 9 | 0 | PASS |

**overall: PASS** — 7/7 discipline, 0 errori di campo

## Warning

Nessuno — tutti i campi obbligatori sono presenti in tutte le discipline.

## Verifica vincoli

| Vincolo | Esito |
|---------|:-----:|
| Runtime non modificato | ✅ |
| JSON disciplinari non modificati | ✅ |
| Adapter non modificato | ✅ |
| Transformer non modificato | ✅ |
| Validatore non modificato | ✅ |
| Dipendenze esterne non introdotte | ✅ |
| File temporanei nel working tree | Nessuno ✅ |

## Prossimo passo

CML-145 — Integrazione pilota Tecnologia nel runtime, oppure closure/push controllato della sequenza CML-138→144.
