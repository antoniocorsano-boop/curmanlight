# CML-141 — JSON to MAPPA_DATI Adapter Standalone Tool

## Fotografia iniziale
- **Branch:** `main`, **HEAD:** `ac4c724` (3 ahead of origin)
- **Working tree:** pulito ✅
- **Validatore:** 7 file, 94 unità, `overallValid: true` ✅

## Tool creato
`tools/json-to-mappa-dati-adapter.mjs`

### Contratto
```javascript
toMappaDati(json) → {
  disciplina: string,
  struttureSostanziali: [{nome, unita: [{id, titolo, ordine, classe, fascia, nucleo}]}],
  nodiDisciplinari: [{etichetta, unita: [...]}],
  progressioneVerticale: [{ordine, classe, fascia, unita: [...]}],
  decisioniCurricolari: [] | pass-through
}
```

### Aggregazioni
| Sezione | Da | Chiave |
|---------|----|--------|
| struttureSostanziali | unitaApprendimento[].ambito | Raggruppa per ambito, ordina A-Z |
| nodiDisciplinari | unitaApprendimento[].nucleo | Raggruppa per nucleo, ordina A-Z |
| progressioneVerticale | {ordine, classe, fascia} | Raggruppa, ordina Infanzia→Primaria→Secondaria |
| decisioniCurricolari | data.decisioniCurricolari | Pass-through se array |

## Discipline testate: 4

| Disciplina | Esito | Warning |
|-----------|:-----:|:-------:|
| Tecnologia | ✅ | 0 |
| Italiano | ✅ | 0 |
| Matematica | ✅ | 0 |
| Scienze | ✅ | 0 |

## Output strutturale per disciplina

- **Tecnologia**: 6 strutture, 6 nodi, 10 progressioni, 2 decisioni
- **Italiano**: 12 strutture, 6 nodi, 10 progressioni, 4 decisioni
- **Matematica**: 12 strutture, 5 nodi, 6 progressioni, 4 decisioni
- **Scienze**: 15 strutture, 5 nodi, 9 progressioni, 0 decisioni

## Errori testati
- File inesistente → `[ERROR] File non trovato` + exit 1 ✅

## Modifiche
- **Modificato**: nessun file esistente
- **Creato**: `tools/json-to-mappa-dati-adapter.mjs` (161 linee)
- **Runtime**, **JSON**, **validatore**, **CSS**: non toccati ✅

## Stato finale
```
## main...origin/main [ahead 3]
?? tools/json-to-mappa-dati-adapter.mjs
```

## Verdetto
`CML_141_JSON_TO_MAPPA_DATI_ADAPTER_TOOL_READY`

## Prossimo passo raccomandato
CML-141A — Adapter Output Shape Smoke: confrontare output generato con struttura MAPPA_DATI hardcoded.
