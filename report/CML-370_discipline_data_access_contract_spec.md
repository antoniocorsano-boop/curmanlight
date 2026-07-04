# Discipline Data Access Contract — Design Specification

## 1. Motivazione

CML-369 ha identificato quattro pattern fragili nell'accesso ai dati disciplinari del runtime CurManLight:

1. **Hardcoded Tecnologia**: 4 funzioni con `discKey === 'tecnologia'` che bypassano `ALL_CURRICULUM_DATA` per usare `TECNOLOGIA_NORM_DATA`
2. **Duplicazione dati**: `TECNOLOGIA_NORM` (L6202) copia identica dei dati dentro `ALL_CURRICULUM_DATA.tecnologia` (L6206)
3. **14-way if/else**: `renderMappaDisciplinare()` usa una catena di 14 `if/else if` per selezionare la variabile `*_MAPPA_DATI` corretta
4. **Doppia nomenclatura**: display name ("Arte e Immagine") vs kebab-case ("arte-immagine"), senza funzione inversa `discKeyToName()`

Questo documento definisce il contratto che elimina questi pattern, centralizzando l'accesso ai dati disciplinari in un layer unico.

## 2. Contratto — DisciplineDataAccess

### 2.1 `getUnitsForDiscipline(discKey)`

```typescript
getUnitsForDiscipline(discKey: string): UnitaApprendimento[]
```

**Scopo**: accesso centralizzato alle unità di apprendimento per una disciplina.

**Comportamento**:
- Cerca `ALL_CURRICULUM_DATA[discKey]?.unitaApprendimento`
- Nessun branch speciale per `tecnologia`
- Se `discKey` non valida o dati mancanti → restituisce `[]`
- Non accede mai a `TECNOLOGIA_NORM_DATA`

**Sostituisce**:
- `getDisciplineEvidenceData()` (L2960) — intera funzione
- `getAnnualDraftUnitsFor()` (L3085) — intera funzione
- `getUdaDisciplineUnits()` (L3280) — intera funzione
- Branch ternario in `renderTecnologiaNorm()` (L6362)

### 2.2 `getCurriculumDataForDiscipline(discKey)`

```typescript
getCurriculumDataForDiscipline(discKey: string): CurriculumRecord | null
```

**Scopo**: accesso al record completo di curriculum per una disciplina.

**Comportamento**:
- Cerca `ALL_CURRICULUM_DATA[discKey]` (record intero, non solo `.unitaApprendimento`)
- Se non trovato → restituisce `null`

**Uso**: per funzioni che necessitano dei metadati della disciplina oltre alle unità.

### 2.3 `getMappaForDiscipline(discKey)`

```typescript
getMappaForDiscipline(discKey: string): MappaDati | null
```

**Scopo**: accesso centralizzato ai dati della mappa disciplinare.

**Comportamento**:
- Cerca in `MAPPA_DATI_INDEX[discKey]`
- `MAPPA_DATI_INDEX` è l'aggregato delle 14 variabili `*_MAPPA_DATI`
- Se non trovato → restituisce `null`

**Sostituisce**: catena `if/else if` 14 rami in `renderMappaDisciplinare()` (L2874-L2887)

**Impatto**: da ~40 righe di if/else a 1 riga: `var data = getMappaForDiscipline(discKey); if (!data) return;`

### 2.4 Funzioni di utilità

```typescript
discKeyToName(discKey: string): string | null
```

Inverso di `discKeyFromName()`. Data una chiave kebab-case, restituisce il display name.
```
discKeyToName("arte-immagine") → "Arte e Immagine"
discKeyToName("tecnologia")    → "Tecnologia"
discKeyToName("non-esiste")    → null
```

```typescript
isValidDiscKey(discKey: string): boolean
```
Restituisce `true` se `discKey` esiste in `ALL_CURRICULUM_DATA`, `false` altrimenti.

```typescript
listAllDiscKeys(): string[]
```
Restituisce tutte le chiavi kebab-case disponibili (da `Object.keys(ALL_CURRICULUM_DATA)`).

```typescript
listAllDiscNames(): string[]
```
Restituisce tutti i display name (da `DISCIPLINE`).

## 3. Eliminazione duplicazioni

### 3.1 `TECNOLOGIA_NORM` / `TECNOLOGIA_NORM_DATA`

**Stato attuale**: costante inline L6202-L6204, ~3.5 KB di JSON con 16 unità Tecnologia.
**Duplicato dentro**: `ALL_CURRICULUM_DATA.tecnologia` (stesse 16 unità identiche).

**Differenze TECNOLOGIA_NORM vs ALL_CURRICULUM_DATA.tecnologia**:

| Campo | TECNOLOGIA_NORM | ALL_CURRICULUM_DATA.tecnologia |
|---|---|---|
| `schemaVersion` | `"cml-normalized-curriculum-v1"` | assente |
| `humanValidationRequired` | `true` | assente |
| `source` | stringa descrittiva | assente |
| `unitaApprendimento` | 16 unità | 16 unità identiche |
| `disciplina` | "Tecnologia" | "Tecnologia" |

**Verifica**: i 3 campi extra (`schemaVersion`, `humanValidationRequired`, `source`) non sono letti da nessuna funzione del runtime. Sono metadati di prototipo.

**Decisione**: eliminare `TECNOLOGIA_NORM` e `TECNOLOGIA_NORM_DATA`. I dati restano in `ALL_CURRICULUM_DATA.tecnologia`.

### 3.2 Variabili individuali `*_MAPPA_DATI`

**Stato attuale**: 14 variabili `var` dichiarate separatamente (L2549-L2846), accedute via catena if/else in `renderMappaDisciplinare()`.

**Decisione**: aggregare in un unico oggetto:

```javascript
const MAPPA_DATI_INDEX = {
  "arte-immagine":    ARTE_IMMAGINE_MAPPA_DATI,
  "educazione-civica": EDUCAZIONE_CIVICA_MAPPA_DATI,
  // ... tutte le 14 discipline
};
```

Le variabili individuali rimangono come definizioni per la fase 1 (non rompere referenze esistenti). In fase 3 si valutano per eliminazione.

## 4. Piano di migrazione in 3 fasi

### Fase 1 — CML-371 (runtime increment controllato)
- Aggiungere `MAPPA_DATI_INDEX` come aggregato
- Definire `getMappaForDiscipline()`, `getUnitsForDiscipline()`, `getCurriculumDataForDiscipline()`
- Aggiungere `discKeyToName()`, `isValidDiscKey()`, `listAllDiscKeys()`
- Convertire `renderMappaDisciplinare()` → usa `getMappaForDiscipline()`
- Mantenere variabili individuali `*_MAPPA_DATI` (non eliminate)
- **Non toccare** ancora `TECNOLOGIA_NORM` né i branch tecnologia

### Fase 2 — CML-372 (runtime increment controllato)
- Convertire `getDisciplineEvidenceData()`, `getAnnualDraftUnitsFor()`, `getUdaDisciplineUnits()` → `getUnitsForDiscipline()`
- Rimuovere i 4 branch `discKey === 'tecnologia'`
- `TECNOLOGIA_NORM` / `TECNOLOGIA_NORM_DATA` presenti ma non referenziati

### Fase 3 — CML-373 (runtime microfix)
- Eliminare `TECNOLOGIA_NORM` e `TECNOLOGIA_NORM_DATA`
- Eliminare variabili `*_MAPPA_DATI` se nessun riferimento residuo
- Allineare snapshot netlify

### Diagramma dipendenze

```
CML-370 (docs-only contract)
    │
    ▼
CML-371 (Fase 1: MAPPA_INDEX + funzioni base + renderMappa)
    │
    ▼
CML-372 (Fase 2: converti accesso unità, elimina branch tecnologia)
    │
    ▼
CML-373 (Fase 3: cleanup, elimina duplicati)
```

## 5. Criteri di accettazione

### Per CML-371
- [ ] `MAPPA_DATI_INDEX` definito con tutte le 14 discipline
- [ ] `getMappaForDiscipline()` implementato e funzionante
- [ ] `renderMappaDisciplinare()` usa `getMappaForDiscipline()` — nessuna if/else catena
- [ ] `getUnitsForDiscipline()` definito (può non essere ancora chiamato)
- [ ] `discKeyToName()` definito e usato dove serve
- [ ] `isValidDiscKey()`, `listAllDiscKeys()` definiti
- [ ] `TECNOLOGIA_NORM` ancora presente (non eliminato in fase 1)
- [ ] Variabili individuali `*_MAPPA_DATI` ancora presenti
- [ ] `node tools/validate-cml-normalized-curriculum.mjs` — PASS
- [ ] `node tools/test-runtime-mappa-dati-shape.mjs` — PASS
- [ ] `git diff --check` — PASS
- [ ] `index.html` modificato solo per le aggiunte previste

### Per CML-372
- [ ] `getDisciplineEvidenceData()` rimossa o convertita a `getUnitsForDiscipline()`
- [ ] `getAnnualDraftUnitsFor()` rimossa o convertita
- [ ] `getUdaDisciplineUnits()` rimossa o convertita
- [ ] Branch ternario in `renderTecnologiaNorm()` rimosso
- [ ] Zero occorrenze di `discKey === 'tecnologia'`
- [ ] `TECNOLOGIA_NORM` / `TECNOLOGIA_NORM_DATA` non referenziati (ma ancora presenti)

### Per CML-373
- [ ] `TECNOLOGIA_NORM` rimosso
- [ ] `TECNOLOGIA_NORM_DATA` rimosso
- [ ] Variabili `*_MAPPA_DATI` individuali rimosse (se referenziate solo da MAPPA_DATI_INDEX)
- [ ] Snapshot netlify allineato

## 6. Rischi e mitigazioni

| Rischio | Probabilità | Impatto | Mitigazione |
|---|---|---|---|
| Regressione visiva in renderMappaDisciplinare | Bassa | Alto | Test shape esistente + smoke visivo post-deploy |
| discKeyToName() non copre tutti i casi | Bassa | Medio | Derivare da `discKeyFromName` invertendo la mappa |
| Variabili `*_MAPPA_DATI` referenziate altrove | Media | Medio | `grep` su tutto index.html prima di eliminarle in fase 3 |
| `TECNOLOGIA_NORM` referenziato in snapshot netlify | Alta (è clonato) | Basso | Allineamento manuale in fase 3 |
| Funzioni consumer fuori index.html | Nessuna | — | Singolo file, tutto in unico HTML |

## 7. Appendice: Mappa completa delle funzioni interessate

### Funzioni da modificare in Fase 1

| Funzione | Linea | Modifica |
|---|---|---|
| `renderMappaDisciplinare()` | 2869 | Da if/else 14 rami a `getMappaForDiscipline()` |
| (nuova) | — | `getMappaForDiscipline(discKey)` |
| (nuova) | — | `MAPPA_DATI_INDEX` aggregato |
| (nuova) | — | `getUnitsForDiscipline(discKey)` |
| (nuova) | — | `getCurriculumDataForDiscipline(discKey)` |
| (nuova) | — | `discKeyToName(discKey)` |
| (nuova) | — | `isValidDiscKey(discKey)` |
| (nuova) | — | `listAllDiscKeys()` |

### Funzioni da modificare in Fase 2

| Funzione | Linea | Modifica |
|---|---|---|
| `getDisciplineEvidenceData()` | 2960 | Sostituire corpo con `getUnitsForDiscipline()` |
| `getAnnualDraftUnitsFor()` | 3085 | Sostituire corpo con `getUnitsForDiscipline()` |
| `getUdaDisciplineUnits()` | 3280 | Sostituire corpo con `getUnitsForDiscipline()` |
| `renderTecnologiaNorm()` | 6358 | Rimuovere branch ternario, usare `getUnitsForDiscipline()` |

### Variabili da eliminare in Fase 3

| Variabile | Linea | Note |
|---|---|---|
| `TECNOLOGIA_NORM` | 6202 | ~3.5 KB, dati duplicati |
| `TECNOLOGIA_NORM_DATA` | 6204 | Semplice alias |
| 14 variabili `*_MAPPA_DATI` | L2549–L2846 | Solo se referenziate solo da `MAPPA_DATI_INDEX` |
