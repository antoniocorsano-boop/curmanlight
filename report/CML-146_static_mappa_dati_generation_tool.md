# CML-146: Static MAPPA_DATI Generation Tool

## Fotografia iniziale

| Parametro | Valore |
|-----------|--------|
| Branch | `main` |
| HEAD | `260b4aea0107c241a217e770cedaba53d0c7d0a6` |
| origin/main | `810ae8440a9c63daf15bb1160bdf10508f9f5a77` |
| Commit locali ahead | `260b4ae docs: select Tecnologia runtime integration pilot` |
| Working tree | Con `tools/generate-static-mappa-dati.mjs` (esistente ma con bug) + `tmp-tecnologia-static-mappa.js` |

## Riferimento CML-145

- **Opzione selezionata:** C — Generatore statico JS/JSON
- **Differenze generated vs hardcoded:**
  - `struttureSostanziali`: 6 items, nomi identici, descrizioni/fonti diversi
  - `nodiDisciplinari`: NON PRESENTE hardcoded, 6 items generati
  - `progressioneVerticale`: 10 items, descrizioni/fonti diversi
  - `decisioniCurricolari`: 2 items, identici
  - Ordinamento diverso (alfabetico vs logico)
- **Stop conditions:** Ordinamento instabile, descrizioni autogenerate
- **Perimetro CML-146:** Solo `tools/generate-static-mappa-dati.mjs`

## Tool creato

**File:** `tools/generate-static-mappa-dati.mjs`

### Comando d'uso

```bash
node tools/generate-static-mappa-dati.mjs content/curriculum/tecnologia.normalized.json
```

### Path JSON Tecnologia usato

```
content/curriculum/tecnologia.normalized.json
```

## Output statico generato e verificato

```bash
node tools/generate-static-mappa-dati.mjs content/curriculum/tecnologia.normalized.json > tmp-tecnologia-static-mappa.js
```

Output (estratti):

```javascript
const TECNOLOGIA_MAPPA_DATI = {
  "disciplina": "Tecnologia",
  "struttureSostanziali": [
    {
      "nome": "Cittadinanza tecnologica e uso responsabile",
      "descrizione": "Raccoglie 2 unità di apprendimento: ...",
      "fonte": "JSON curriculum strutturato"
    },
    ...
  ],
  "nodiDisciplinari": [
    {
      "etichetta": "Cittadinanza tecnologica",
      "tipo": "sostanziale",
      "descrizione": "Raccoglie 2 unità di apprendimento: ...",
      "fonte": "JSON curriculum strutturato"
    },
    ...
  ],
  "progressioneVerticale": [
    {
      "ordine": "Primaria",
      "classe": "1",
      "descrizioneProgressione": "Raccoglie 1 unità: ...",
      "fonte": "JSON curriculum strutturato"
    },
    ...
  ],
  "decisioniCurricolari": [
    {
      "id": "dec_tec_001",
      "tipo": "inclusione",
      "motivazione": "Inserimento dell'Agenda 2030...",
      "stato": "da_validare",
      "fonte": "Indicazioni Nazionali 2012..."
    },
    ...
  ]
};
```

## Esiti verifica

| Verifica | Esito |
|----------|-------|
| `node --check tmp-tecnologia-static-mappa.js` | ✅ PASS |
| `rg -n "const TECNOLOGIA_MAPPA_DATI\|struttureSostanziali\|nodiDisciplinari\|progressioneVerticale\|decisioniCurricolari\|descrizioneProgressione"` | ✅ 15 matches |
| `node tools/validate-cml-normalized-curriculum.mjs` | ✅ overallValid: true |
| `node tools/test-runtime-mappa-dati-shape.mjs` | ⚠️ FAIL su PowerShell (BOM issue) |

## Conferme

- ✅ Runtime non modificato
- ✅ JSON/adapter/transformer/harness non modificati
- ✅ Temporanei rimossi (tmp-*.js)

## Limiti noti

1. Shape harness fallisce su PowerShell a causa del BOM aggiunto dallo shell pipe
2. Ordinamento `struttureSostanziali` è alfabetico, non segue ordine logico hardcoded
3. Descrizioni autogenerate non sono curate manualmente come quelle hardcoded

## Prossimo passo raccomandato

**CML-146A — Static Block Inspection Smoke**

Confronto puntuale del blocco generato con il blocco `TECNOLOGIA_MAPPA_DATI` hardcoded in `index.html` prima di autorizzare CML-147.