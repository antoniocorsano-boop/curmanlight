# CML-143: To Runtime MAPPA_DATI Transformer — Design and Tool

## Fotografia iniziale

| Parametro | Valore |
|-----------|--------|
| Branch | `main` |
| HEAD | `b55cda1` |
| origin/main | `85bbab4` |
| Local ahead | 6 commits |
| Working tree | Pulito (tmp-*.json rimossi) |
| Validatore | 7/94, `overallValid: true` ✅ |
| Residui ignorati | `.agents`, `skills-lock.json`, `Consultazione` ✅ |

## Riferimento contratti precedenti

| Slice | Contratto chiave |
|-------|-----------------|
| CML-140 | Design adapter: 4 trasformazioni, shape con `unita[]` |
| CML-141 | Implementazione adapter standalone `toMappaDati()` |
| CML-141A | Confronto shape: `unita[]` vs flat — gap strutturale |
| CML-142 | Contratto integrazione: opzione **B + D** (transformer intermedio + pilota Tecnologia) |

## Tool creato

**File**: `tools/to-runtime-mappa-dati-transformer.mjs`

### Funzioni

| Funzione | Scopo |
|----------|-------|
| `readStdin()` | Legge stdin (pipe JSON da adapter) |
| `buildDescrizione(unita)` | Genera descrizione sintetica per strutture/nodi |
| `buildDescrizioneProgressione(unita)` | Genera descrizione per progressione |
| `transformStruttureSostanziali(items)` | `{nome, unita[]}` → `{nome, descrizione, fonte}` |
| `transformNodiDisciplinari(items)` | `{etichetta, unita[]}` → `{etichetta, tipo, descrizione, fonte}` |
| `transformProgressioneVerticale(items)` | `{ordine, classe, fascia, unita[]}` → `{ordine, classe, fascia, descrizioneProgressione, fonte}` |
| `transformDecisioniCurricolari(items)` | Pass-through |
| `toRuntimeMappaDati(data)` | Funzione principale: compone l'output flat |

## Shape input (da adapter)

```
struttureSostanziali: {nome, unita: [{id, titolo, ordine, classe, fascia, nucleo}]}
nodiDisciplinari:     {etichetta, unita: [...]}
progressioneVerticale: {ordine, classe, fascia, unita: [...]}
decisioniCurricolari: {id, tipo, nodiRiferimento, unitaRiferimento, motivazione, stato, fonte}
```

## Shape output (per runtime)

```
struttureSostanziali: {nome, descrizione, fonte}
nodiDisciplinari:     {etichetta, tipo: "sostanziale", descrizione, fonte}
progressioneVerticale: {ordine, classe?, fascia?, descrizioneProgressione, fonte}
decisioniCurricolari: {id, tipo, nodiRiferimento, unitaRiferimento, motivazione, stato, fonte}
```

## Discipline testate

| Disciplina | Strutture | Nodi | Progressioni | Decisioni | Esito |
|-----------|:---------:|:----:|:------------:|:---------:|:-----:|
| Tecnologia | 6 | 6 | 10 | 2 | ✅ |
| Italiano | 12 | 6 | 10 | 4 | ✅ |
| Matematica | 12 | 5 | 6 | 4 | ✅ |

Tutte le discipline producono JSON valido con campo `descrizione` e `fonte` popolati in ogni entry.

## Warning rilevati

- `descrizione` generata automaticamente = meno curata delle descrizioni scritte a mano
- `fonte` statica `"JSON curriculum strutturato"` (non riporta ID unità specifici)
- `nodiRiferimento` non prodotti (erano già vuoti in hardcoded Tecnologia)

## Verifica vincoli

| Vincolo | Esito |
|---------|:-----:|
| Runtime non modificato | ✅ |
| JSON disciplinari non modificati | ✅ |
| Adapter non modificato | ✅ |
| Validatore non modificato | ✅ |
| Schema `.cml` non modificato | ✅ |
| CSS/JS runtime non modificati | ✅ |
| Dipendenze esterne non introdotte | ✅ |
| File temporanei rimossi | ✅ |
| Nessun push | ✅ |

## Prossimo passo

CML-143A — Runtime Shape Transformer Output Smoke: confrontare l'output flat del transformer con lo shape effettivo letto da `renderMappaDisciplinare()`, prima di qualunque integrazione nel runtime.
