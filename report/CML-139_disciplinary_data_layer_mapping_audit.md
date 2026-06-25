# CML-139 — Disciplinary Data Layer Mapping Audit

## Fotografia Git iniziale
- **Branch:** `main`
- **HEAD / origin/main:** `85bbab4` (allineato)
- **Commit locali:** 0 ✅
- **Working tree:** pulito ✅
- **Validatore:** 7 file, 94 unità, `overallValid: true` ✅

## JSON disciplinari (7 file)

| JSON | Discipline | Unità | Sezioni aggregate | Warnings |
|------|-----------|------:|:-----------------:|----------|
| tecnologia.normalized.json | Tecnologia | 13 | struttureSostanziali, progressioneVerticale, decisioniCurricolari | nessuno ✅ |
| italiano.normalized.json | Italiano | 14 | struttureSostanziali, nodiDisciplinari, progressioneVerticale, decisioniCurricolari | nucleo legacy (14) |
| matematica.normalized.json | Matematica | 13 | struttureSostanziali, nodiDisciplinari, progressioneVerticale, decisioniCurricolari | nucleo legacy (13) + gap classi 2-4 |
| scienze.normalized.json | Scienze | 15 | ❌ nessuna | nucleo legacy (15) |
| storia.normalized.json | Storia | 15 | ❌ nessuna | nucleo legacy (15) |
| geografia.normalized.json | Geografia | 12 | ❌ nessuna | nucleo legacy (12) |
| inglese.normalized.json | Inglese | 12 | ❌ nessuna | nucleo legacy (12) |

**Campi per unità (tutti):** id, disciplina, ordine, classe, fascia, ambito, nucleo/nucleoFondante, competenza, traguardo, obiettivi[], conoscenze[], abilita[], evidenze[], criteriValutazione[], fonte, stato, validazioneUmana, noteDipartimento

## Strutture runtime hardcoded

| Struttura | Linee | Discipline | Usata da |
|-----------|:-----:|:----------:|----------|
| `TECNOLOGIA_MAPPA_DATI` | 2039 | Tecnologia | `renderMappaDisciplinare()` |
| `MATEMATICA_MAPPA_DATI` | 2041 | Matematica | `renderMappaDisciplinare()` |
| `ITALIANO_MAPPA_DATI` | 2043 | Italiano | `renderMappaDisciplinare()` |
| `TECNOLOGIA_NORM` | 4621 | Tecnologia | `renderDidattica()` |
| `DATA` | 1887 | 11 discipline | Curriculum editing |
| `DISCIPLINE_META` | 1869 | 14 discipline | Sidebar, profilo |
| `DISCIPLINE` | 1885 | 14 chiavi | Navigazione |

## Mapping JSON → runtime

| Area | JSON | Runtime | Tipo mapping | Facilità |
|------|------|---------|-------------|:--------:|
| Disciplina | `disciplina` | `MAPPA_DATI.disciplina` | 1:1 | ✅ Facile |
| Unità → strutture | `unitaApprendimento[].ambito` | `struttureSostanziali[].nome` | Aggregazione per ambito | 🔶 Media |
| Nuclei → nodi | `unitaApprendimento[].nucleo` | `nodiDisciplinari[].etichetta` | Aggregazione per nucleo | 🔶 Media |
| Unità → progressione | `{ordine,classe,fascia}` | `progressioneVerticale[]` | Aggregazione per ordine | ✅ Bassa |
| Decisioni | — | `decisioniCurricolari[]` | Non derivabile | ❌ Manuale |
| Unità → NORM | `unitaApprendimento[]` | `TECNOLOGIA_NORM.unitaApprendimento` | 1:1 diretto | ✅ Facile |

## Gap principali

1. **P0 — 7 JSON validati, 0 usati**: il runtime non consuma mai i JSON per il rendering
2. **P0 — MAPPA_DATI indipendente dai JSON**: 3 oggetti hardcoded possono divergere
3. **P1 — Solo 3/7 discipline hanno mappa**: 4 discipline mostrano sezione vuota
4. **P2 — Solo 1/7 ha vista strutturata**: pannello didattica Tecnologia-only
5. **P2 — `nucleo` vs `nucleoFondante`**: campo legacy in 6/7 discipline
6. **P2 — Sezioni aggregate assenti in 4/7 JSON**: Scienze, Storia, Geografia, Inglese non hanno struttureSostanziali, nodiDisciplinari, progressioneVerticale
7. **P3 — Decisioni curricolari non derivabili**: richiedono intervento manuale
8. **P3 — Matematica gap classi 2-4**: unità mancanti

## Mappa ad albero concettuale JSON → UI

```
JSON (normalizzato)
├── unitaApprendimento[] ──────────────────→ TECNOLOGIA_NORM (Didattica, 1:1)
│   ├── ambito ──→ struttureSostanziali[].nome ─→ Mappa (aggregato)
│   ├── nucleo ──→ nodiDisciplinari[].etichetta ─→ Mappa (aggregato)
│   └── {ordine,classe,fascia} ──→ progressioneVerticale[] ─→ Mappa (aggregato)
├── struttureSostanziali[] ──→ MAPPA_DATI.struttureSostanziali (3/7 JSON)
├── nodiDisciplinari[] ──→ MAPPA_DATI.nodiDisciplinari (3/7 JSON)
├── progressioneVerticale[] ──→ MAPPA_DATI.progressioneVerticale (3/7 JSON)
└── decisioniCurricolari[] ──→ MAPPA_DATI.decisioniCurricolari (3/7 JSON, manuale)
```

## Opzione selezionata per CML-140
**B+D combinata**: Adapter JSON → MAPPA_DATI per 1 disciplina pilota (Tecnologia), poi estensione progressiva. `renderMappaDisciplinare()` rimane invariato — l'adapter produce dati nel formato atteso.

## Perimetro raccomandato CML-140
Progettare adapter JavaScript che da JSON normalizzato generi struttura compatibile con `renderMappaDisciplinare()`:
1. `ambito` → struttureSostanziali (aggregazione)
2. `nucleo` → nodiDisciplinari (aggregazione)
3. `{ordine,classe,fascia}` → progressioneVerticale (raggruppamento)
4. `decisioniCurricolari` → pass-through (se presenti nel JSON)

## Modifiche effettuate
Nessuna modifica a runtime, JSON, validatore, CSS, JS applicativo.

## Verdetto
```
CML_139_DISCIPLINARY_DATA_LAYER_MAPPING_AUDIT_READY
```
