# CML-145: Tecnologia Runtime Integration Pilot Selection Audit

## Fotografia iniziale

| Parametro             | Valore                                            |
| --------------------- | ------------------------------------------------- |
| Branch                | `main`                                            |
| HEAD                  | `810ae84`                                         |
| origin/main           | `810ae84`                                         |
| HEAD == origin/main   | ✅                                                |
| Working tree          | Pulito                                            |
| Validatore curriculum | 7 file / 94 unità / `overallValid: true` ✅       |
| Shape harness         | 7 PASS, 0 FAIL ✅                                 |
| Residui ignorati      | `.agents`, `skills-lock.json`, `Consultazione` ✅ |

## Analisi punti integrazione runtime

### Definitizione MAPPA_DATI

```
Linea 2036-2043:
  var TECNOLOGIA_MAPPA_DATI = { ... }
  var MATEMATICA_MAPPA_DATI = { ... }
  var ITALIANO_MAPPA_DATI   = { ... }
```

Blocchi hardcoded inline. L'integrazione pilota richiede modifica della linea 2039.

### renderMappaDisciplinare (linee 2056-2103)

Legge da variabili globali via:

```javascript
if (
  mappaDisciplinaCorrente === 'tecnologia' &&
  typeof TECNOLOGIA_MAPPA_DATI !== 'undefined'
)
  dati = TECNOLOGIA_MAPPA_DATI
```

Campi letti:

- `dati.disciplina`
- `s.nome`, `s.descrizione`, `s.fonte` (struttureSostanziali)
- `n.etichetta`, `n.tipo`, `n.descrizione`, `n.fonte` (nodiDisciplinari)
- `p.ordine`, `p.fascia`/`p.classe`, `p.descrizioneProgressione`, `p.fonte` (progressioneVerticale)
- `d.tipo`, `d.motivazione`, `d.fonte` (decisioniCurricolari)

### Selettori HTML (linee 1388-1390)

Pulsanti statici per Tecnologia, Matematica, Italiano. Non modificati.

### Container mappa (linee 1392-1393)

- `mappa-disciplinare-content` — contenuto renderizzato
- `mappa-disciplinare-empty` — fallback quando dati non presenti

## Output generato Tecnologia

```
JSON → adapter → transformer (7/7 discipline validate, shape OK)
```

| Metrica               | Valore |
| --------------------- | ------ |
| struttureSostanziali  | 6      |
| nodiDisciplinari      | 6      |
| progressioneVerticale | 10     |
| decisioniCurricolari  | 2      |

## Confronto generato vs hardcoded

### struttureSostanziali

| Nome (generato = hardcoded) | Descrizione | Fonte |
| --------------------------- | ----------- | ----- |
| Cittadinanza tecnologica    | DIFF        | DIFF  |
| Digitale, dati, procedure   | DIFF        | DIFF  |
| Disegno, rappresentazione   | DIFF        | DIFF  |
| Energia, sostenibilità      | DIFF        | DIFF  |
| Materiali e trasformazioni  | DIFF        | DIFF  |
| Osservazione e analisi      | DIFF        | DIFF  |

**Nomi identici** (6/6), **descrizioni e fonti diverse** (6/6).

### nodiDisciplinari

| Item | Etichetta                  | Tipo        | Descrizione          |
| ---- | -------------------------- | ----------- | -------------------- |
| 0    | Cittadinanza tecnologica   | sostanziale | Raccoglie 2 unità... |
| 1    | Digitale e informatica     | sostanziale | Raccoglie 3 unità... |
| 2    | Disegno e rappresentazione | sostanziale | Raccoglie 2 unità... |
| 3    | Energia e sostenibilità    | sostanziale | Raccoglie 2 unità... |
| 4    | Materiali e trasformazioni | sostanziale | Raccoglie 2 unità... |
| 5    | Osservazione e analisi     | sostanziale | Raccoglie 2 unità... |

**Hardcoded: NON PRESENTE.** La sezione "🔗 Nodi disciplinari" non esiste nella UI attuale per Tecnologia. Con l'integrazione, comparirà per la prima volta.

### progressioneVerticale

| Ordine     | Fascia/Classe | Gen count | Hard count | Descrizione match |
| ---------- | ------------- | :-------: | :--------: | :---------------: |
| Infanzia   | 3-4           |     1     |     1      |       DIFF        |
| Infanzia   | 5             |     1     |     1      |       DIFF        |
| Primaria   | 1-5           |     5     |     5      |       DIFF        |
| Secondaria | 1-3           |     3     |     3      |       DIFF        |

**10/10 descrizioni e fonti differenti.**

### decisioniCurricolari

| Tipo       | Fonte                                    | Match |
| ---------- | ---------------------------------------- | :---: |
| inclusione | Indicazioni 2012 + Agenda 2030 / DM 2025 |  OK   |
| inclusione | Indicazioni 2012 + DM 2025 — PC          |  OK   |

**Identiche.**

### Ordinamento

- Hardcoded: Osservazione → Digitale → Materiali → Disegno → Energia → Cittadinanza
- Generato: Cittadinanza → Digitale → Disegno → Energia → Materiali → Osservazione

**Ordine completamente diverso** — il generato segue l'ordine interno delle unità JSON, non un ordine logico/sequenziale.

## Opzioni valutate

### Opzione A — Sostituzione diretta

Rimpiazzo del blocco `TECNOLOGIA_MAPPA_DATI` in `index.html`.

- **Pro**: semplice (1 sola modifica)
- **Contro**: regressione visuale immediata (descrizioni, ordine, nuovi nodi)

### Opzione B — Affiancamento con fallback

Doppio dato: `TECNOLOGIA_MAPPA_DATI_HARDCODED` + `TECNOLOGIA_MAPPA_DATI_GENERATED`, selezione via flag.

- **Pro**: rollback immediato
- **Contro**: modifica più invasiva a index.html (nuova variabile + logica in render)

### Opzione C — Generatore statico **⇐ SELEZIONATA**

Tool produce blocco statico JSON/JS dal pipeline, ispezionabile prima di integrare.

- **Pro**: massimo controllo, zero rischi runtime
- **Contro**: passaggio intermedio

### Opzione D — Runtime loader JSON

Caricare il JSON normalizzato direttamente via fetch.

- **Pro**: architettura pulita
- **Contro**: alto per app statica (CORS, path relativi, fallback)

### Opzione E — Flag interno

Costante JS per attivare dato generato solo in fase di test.

- **Pro**: testabile
- **Contro**: complessità runtime aggiuntiva

## Opzione selezionata

**Opzione C — Generatore statico JS/JSON**.

## Perimetro CML-146

**`tools/generate-static-mappa-dati.mjs`**:

- Prende in input un JSON normalizzato + disciplina key
- Esegue adapter → transformer
- Produce output identico a `var KEY_MAPPA_DATI = { ... }` (formato JS o JSON)
- Supporta override ordinamento strutture (opzionale)
- Output su stdout o file

## Stop conditions

| Condizione                           |                      Esito                      |
| ------------------------------------ | :---------------------------------------------: |
| Output non allineato a shape runtime |       ✅ NON ATTIVATA — test harness 7/7        |
| Differenza semantica troppo forte    | ⚠️ ATTIVATA PARZIALMENTE — descrizioni + ordine |
| Perdita info utente                  |      ✅ NON ATTIVATA — anzi aggiunge nodi       |
| Ordinamento instabile                |                   ⚠️ ATTIVATA                   |
| Mancanza fallback                    |           Da risolvere in CML-146/147           |
| Rischio rompere navigazione          |                 ✅ NON ATTIVATA                 |
| Modifica multi-disciplina            |        ✅ NON ATTIVATA (solo Tecnologia)        |

## Pulizia file temporanei

Nessun file `tmp-*.json` residuo.

## Varie

- Runtime non modificato ✅
- JSON disciplinari non modificati ✅
- Adapter/transformer/harness/validator non toccati ✅
- Working tree pulito, HEAD == origin/main ✅

## Prossimo passo

```text
CML-146 — TECHNOLOGIA_STATIC_MAPPA_DATI_GENERATION_TOOL
CML-147 — CONTROLLED_TECNOLOGIA_RUNTIME_INTEGRATION
```
