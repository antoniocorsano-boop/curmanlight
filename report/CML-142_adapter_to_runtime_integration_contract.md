# CML-142: Adapter to Runtime Integration Contract

## Fotografia iniziale

| Parametro        | Valore                                            |
| ---------------- | ------------------------------------------------- |
| Branch           | `main`                                            |
| HEAD             | `31ef98e`                                         |
| origin/main      | `85bbab4`                                         |
| Local ahead      | 5 commits                                         |
| Working tree     | Pulito (3 tmp-*.json untracked ignorabili)        |
| Validatore       | 7/94, `overallValid: true` ✅                     |
| Residui ignorati | `.agents`, `skills-lock.json`, `Consultazione` ✅ |

## Sintesi CML-139 → CML-141A

| Slice    | Output                | Risultato chiave                                               |
| -------- | --------------------- | -------------------------------------------------------------- |
| CML-139  | Mappatura layer dati  | 7 JSON, 3 MAPPA_DATI hardcoded, 0 usati nel rendering          |
| CML-140  | Design adapter        | 4 trasformazioni (ambito, nucleo, ordine, decisioni)           |
| CML-140A | Fix nucleo Tecnologia | 13/13 unità ora hanno `nucleo`                                 |
| CML-141  | Adapter tool          | `tools/json-to-mappa-dati-adapter.mjs` testato su 4 discipline |
| CML-141A | Confronto shape       | `unita[]` vs flat — gap strutturale confermato                 |

## Shape runtime atteso

Da `renderMappaDisciplinare()` in `index.html`:

### `struttureSostanziali`

```
{nome: string, descrizione: string, fonte: string}
```

- `nome`: titolo strong
- `descrizione`: testo dopo `:`
- `fonte`: small grigio "Fonte: ..."
- Tutti obbligatori.

### `nodiDisciplinari`

```
{etichetta: string, tipo: string, descrizione: string, fonte: string}
```

- `etichetta`: titolo strong
- `tipo`: tra parentesi
- `descrizione`: testo dopo `:`
- `fonte`: small grigio
- Tutti obbligatori.

### `progressioneVerticale`

```
{ordine: string, fascia?: string, classe?: string, descrizioneProgressione: string, fonte: string}
```

- `ordine`: label "Infanzia" / "Primaria" / "Secondaria"
- `fascia` o `classe`: label "Fascia X" o "Classe X"
- `descrizioneProgressione`: testo descrittivo
- `fonte`: small grigio

### `decisioniCurricolari`

```
{tipo: string, motivazione: string, fonte: string}
```

- `tipo`: titolo strong
- `motivazione`: testo descrittivo
- `fonte`: small grigio
- Pass-through, già compatibile.

## Shape adapter attuale

| Area                    | Output adapter                                                             |
| ----------------------- | -------------------------------------------------------------------------- |
| `struttureSostanziali`  | `{nome, unita: [{id, titolo, ordine, classe, fascia, nucleo}]}`            |
| `nodiDisciplinari`      | `{etichetta, unita: [...]}`                                                |
| `progressioneVerticale` | `{ordine, classe, fascia, unita: [...]}`                                   |
| `decisioniCurricolari`  | `{id, tipo, nodiRiferimento, unitaRiferimento, motivazione, stato, fonte}` |

## Gap contract

### `struttureSostanziali`

| Campo richiesto | Adapter    | Gap                                          |
| --------------- | ---------- | -------------------------------------------- |
| `nome`          | ✅ `nome`  | Nessuno                                      |
| `descrizione`   | ❌ Assente | 👉 Generabile da prima competenza del gruppo |
| `fonte`         | ❌ Assente | 👉 Generabile da id unità aggregate          |

### `nodiDisciplinari`

| Campo richiesto | Adapter        | Gap                                          |
| --------------- | -------------- | -------------------------------------------- |
| `etichetta`     | ✅ `etichetta` | Nessuno                                      |
| `tipo`          | ❌ Assente     | 👉 Fisso `"sostanziale"`                     |
| `descrizione`   | ❌ Assente     | 👉 Generabile da prima competenza del gruppo |
| `fonte`         | ❌ Assente     | 👉 Generabile da id unità aggregate          |

### `progressioneVerticale`

| Campo richiesto           | Adapter     | Gap                                          |
| ------------------------- | ----------- | -------------------------------------------- |
| `ordine`                  | ✅ `ordine` | Nessuno                                      |
| `fascia`                  | ✅ `fascia` | Nessuno                                      |
| `classe`                  | ✅ `classe` | Nessuno                                      |
| `descrizioneProgressione` | ❌ Assente  | 👉 Generabile da prima competenza del gruppo |
| `fonte`                   | ❌ Assente  | 👉 Generabile da id unità aggregate          |

### `decisioniCurricolari`

✅ Nessun gap — pass-through compatibile.

## Opzioni valutate

| Opzione                                        | Vantaggi               | Svantaggi                  |    Verdetto     |
| ---------------------------------------------- | ---------------------- | -------------------------- | :-------------: |
| **A** — Adattare adapter a flat                | Integrazione diretta   | Perde `unita[]`            |   ❌ Scartata   |
| **B** — `toRuntimeMappaDati()` intermedio      | Separa dati, testabile | Passaggio extra            | ✅ Raccomandata |
| **C** — Modificare `renderMappaDisciplinare()` | Usa dati ricchi        | Viola vincoli, regressioni |   ❌ Scartata   |
| **D** — Pilota solo Tecnologia                 | Rischio controllato    | Doppio regime              | ✅ Raccomandata |
| **E** — Completare prima discipline            | Base omogenea          | Ritarda integrazione       |   ❌ Scartata   |

## Opzione selezionata

```
B + D: toRuntimeMappaDati() intermedio, pilota Tecnologia
```

## Contratto CML-143

```
CML-143 — TO_RUNTIME_MAPPA_DATI_TRANSFORMER_DESIGN_AND_TOOL
```

### Specifiche

- **Nome**: `toRuntimeMappaDati(outputAdapter)` → shape flat
- **Input**: output di `toMappaDati()` (con `unita[]`)
- **Output**: `{disciplina, struttureSostanziali[], nodiDisciplinari[], progressioneVerticale[], decisioniCurricolari[]}` con campi flat
- **Disciplina pilota**: Tecnologia
- **Fallback descrizione**: prima competenza del gruppo unità o stringa statica
- **Fallback fonte**: `"Derivato da unità {id1}, {id2}, ..."`
- **File modificabili**: solo `tools/` (nuovo `.mjs`)
- **File vietati**: `index.html`, JSON, validator, `.cml`, CSS, JS runtime
- **Smoke**: validatore invariato
- **Stop**: se altera JSON o runtime

### Criteri accettazione

1. `toRuntimeMappaDati(toMappaDati(tecnologia.json))` produce output semanticamente equivalente a `TECNOLOGIA_MAPPA_DATI`
2. Validatore 7/94 overallValid: true
3. Runtime invariato

## Rischi

1. `descrizione` generata automaticamente potrebbe essere meno curata di quella hardcoded
2. `nodiRiferimento` assenti (ma già vuoti in hardcoded Tecnologia)
3. Doppio regime (adapter + hardcoded) fino a migrazione completa

## Stop conditions

- L'output del trasformatore non è semanticamente equivalente a MAPPA_DATI
- Il validatore non passa
- Viene modificato runtime o JSON
- Viene introdotta integrazione diretta in `index.html`

## Verifica vincoli

- Runtime non modificato ✅
- JSON disciplinari non modificati ✅
- Adapter non modificato ✅
- Validatore non modificato ✅
- Schema `.cml` non modificato ✅
- CSS, layout, icone, funzioni JS non modificate ✅
- Nessun push ✅
