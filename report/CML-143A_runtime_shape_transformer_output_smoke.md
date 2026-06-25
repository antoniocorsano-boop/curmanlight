# CML-143A: Runtime Shape Transformer Output Smoke

## Fotografia iniziale

| Parametro | Valore |
|-----------|--------|
| Branch | `main` |
| HEAD | `384530f` |
| origin/main | `85bbab4` |
| Local ahead | 7 commits |
| Working tree | Pulito |
| Validatore | 7/94, `overallValid: true` ✅ |

## Riferimenti

| Slice | Contenuto |
|-------|-----------|
| CML-141A | Confronto shape adapter `unita[]` vs flat — gap strutturale |
| CML-142 | Contratto integrazione: opzione **B + D** |
| CML-143 | Implementazione `toRuntimeMappaDati()` transformer standalone |

## Campi runtime letti da `renderMappaDisciplinare()`

### struttureSostanziali (linea 2075)
```
s.nome         — titolo strong
s.descrizione  — testo descrittivo dopo :
s.fonte        — small grigio "Fonte: ..."
```

### nodiDisciplinari (linea 2082)
```
n.etichetta    — titolo strong
n.tipo         — tra parentesi
n.descrizione  — testo descrittivo dopo :
n.fonte        — small grigio
```

### progressioneVerticale (linea 2089-2090)
```
p.ordine                    — label "Infanzia/Primaria/Secondaria"
p.fascia / p.classe          — label "Fascia X" o "Classe X"
p.descrizioneProgressione    — testo descrittivo
p.fonte                      — small grigio
```

### decisioniCurricolari (linea 2097)
```
d.tipo         — titolo strong
d.motivazione  — testo descrittivo
d.fonte        — small grigio
```

## Discipline testate

| Disciplina | Adapter OK | Transformer OK | JSON valido | Shape flat completo | Campi mancanti |
|-----------|:----------:|:--------------:|:-----------:|:-------------------:|:--------------:|
| Tecnologia | ✅ | ✅ | ✅ | ✅ | Nessuno |
| Italiano | ✅ | ✅ | ✅ | ✅ | Nessuno |
| Matematica | ✅ | ✅ | ✅ | ✅ | Nessuno |
| Scienze | ✅ | ✅ | ✅ | ✅ | Nessuno |

## Risultati confronto Tecnologia (transformer vs hardcoded MAPPA_DATI)

| Area | Conteggio | Campi presenti | Compatibilità |
|------|:---------:|:--------------:|:-------------:|
| `disciplina` | 1 | ✅ | Compatibile |
| `struttureSostanziali` | 6 vs 6 | `{nome, descrizione, fonte}` | Compatibile |
| `nodiDisciplinari` | 6 vs 0 (gap colmato) | `{etichetta, tipo, descrizione, fonte}` | Compatibile |
| `progressioneVerticale` | 10 vs 10 | `{ordine, fascia/classe, descrizioneProgressione, fonte}` | Compatibile |
| `decisioniCurricolari` | 2 vs 2 | `{tipo, motivazione, fonte}` | Compatibile |

## Gap residui

| Gap | Severità |
|-----|:--------:|
| `descrizione` generata vs scritta a mano | Bassa — presente ma meno curata |
| `fonte` statica vs specifica con ID unità | Bassa — presente ma generica |
| `nodiRiferimento` non prodotti | Bassa — erano già vuoti in hardcoded Tecnologia |
| Ordinamento diverso dall'hardcoded | Nullo — non impatta la UI |

## Verdetto

L'output flat del transformer è **compatibile** con tutti i campi letti da `renderMappaDisciplinare()`. Nessun campo obbligatorio manca in nessuna disciplina.

## Decisione CML-144

**Opzione C — Test harness senza runtime**: creare uno script di test automatico che verifichi che ogni output del transformer abbia sempre tutti i campi richiesti dal rendering, prima di qualunque integrazione.

## File temporanei

Rimossi: `tmp-tecnologia-runtime-mappa.json`, `tmp-italiano-runtime-mappa.json`, `tmp-matematica-runtime-mappa.json`, `tmp-scienze-runtime-mappa.json` ✅
