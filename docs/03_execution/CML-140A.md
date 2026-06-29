# CML-140A — TECNOLOGIA_NUCLEO_FIELD_READINESS_FIX

## Obiettivo

Aggiungere il campo `nucleo` al JSON di Tecnologia (13 unità) per abilitare l'adapter JSON → MAPPA_DATI (CML-141). Tecnologia era l'unica disciplina senza il campo `nucleo` — le unità avevano solo `ambito`, senza raggruppamento per nucleo fondante.

## Problema

```
Tecnologia: nucleoFondante: "" e nucleo: ""  (campo assente)
Altre 6 discipline: nucleo popolato
```

Senza `nucleo`, l'adapter non può costruire `nodiDisciplinari` per Tecnologia.

## Vincoli rispettati

- Runtime non modificato ✅
- Altri JSON disciplinari non modificati ✅
- Validatore non modificato ✅
- Schema `.cml` non modificato ✅
- CSS, layout, icone, funzioni JS non modificate ✅

## Passo 1 — Fotografia iniziale

```
Branch:   main
HEAD:     266490e (2 ahead of origin)
Working tree: pulito ✅
Validatore: 7 file / 94 unità / overallValid: true ✅
```

## Passo 2 — Ispezione JSON Tecnologia

13 unità trovate. Nessuna aveva `nucleo` o `nucleoFondante`.

| Unità         | Ambito                                                  | Nucleo originale | Problema |
| ------------- | ------------------------------------------------------- | :--------------: | -------- |
| tec_inf_3_001 | Osservazione e analisi di oggetti, strumenti e ambienti |        —         | Assente  |
| tec_inf_5_001 | Digitale, dati, procedure e sicurezza                   |        —         | Assente  |
| tec_pri_1_001 | Osservazione e analisi di oggetti, strumenti e ambienti |        —         | Assente  |
| tec_pri_2_001 | Materiali e trasformazioni                              |        —         | Assente  |
| tec_pri_3_001 | Disegno, rappresentazione e progettazione               |        —         | Assente  |
| tec_pri_4_001 | Energia, sostenibilità e ambiente                       |        —         | Assente  |
| tec_pri_5_001 | Cittadinanza tecnologica e uso responsabile             |        —         | Assente  |
| tec_sec_1_001 | Disegno, rappresentazione e progettazione               |        —         | Assente  |
| tec_sec_1_002 | Digitale, dati, procedure e sicurezza                   |        —         | Assente  |
| tec_sec_2_001 | Materiali e trasformazioni                              |        —         | Assente  |
| tec_sec_2_002 | Energia, sostenibilità e ambiente                       |        —         | Assente  |
| tec_sec_3_001 | Digitale, dati, procedure e sicurezza                   |        —         | Assente  |
| tec_sec_3_002 | Cittadinanza tecnologica e uso responsabile             |        —         | Assente  |

## Passo 3 — Criteri di compilazione

- Ogni `nucleo` è derivato dal valore di `ambito` della stessa unità (conservativo)
- Stesso `ambito` → stesso `nucleo` (consistenza tra unità)
- Nessuna invenzione di nuovi raggruppamenti

| Ambito                                                  | Nucleo assegnato           | Giustificazione                   |
| ------------------------------------------------------- | -------------------------- | --------------------------------- |
| Osservazione e analisi di oggetti, strumenti e ambienti | Osservazione e analisi     | Dalla prima parte del nome ambito |
| Digitale, dati, procedure e sicurezza                   | Digitale e informatica     | Digital literacy + programming    |
| Materiali e trasformazioni                              | Materiali e trasformazioni | Invariato (già nome nucleo)       |
| Disegno, rappresentazione e progettazione               | Disegno e rappresentazione | Dalla prima parte del nome ambito |
| Energia, sostenibilità e ambiente                       | Energia e sostenibilità    | Dalle competenze energetiche      |
| Cittadinanza tecnologica e uso responsabile             | Cittadinanza tecnologica   | Dalla prima parte del nome ambito |

## Passo 4 — Modifica

File: `content/curriculum/tecnologia.normalized.json`
Aggiunta `"nucleo": "<valore>"` come ultimo campo di ogni unità (dopo `noteDipartimento`).
Nessun altro campo modificato.

## Passo 5 — Verifica

```
Validatore: 7/94, overallValid: true ✅
Nuclei vuoti: 0/13 ✅
Warnings: "nucleo presente ma nucleoFondante assente (retrocompatibile)" — stessa warning delle altre 6 discipline
```

### Distribuzione nuclei

| Nucleo                     | Unità |
| -------------------------- | ----: |
| Osservazione e analisi     |     2 |
| Digitale e informatica     |     3 |
| Materiali e trasformazioni |     2 |
| Disegno e rappresentazione |     2 |
| Energia e sostenibilità    |     2 |
| Cittadinanza tecnologica   |     2 |

## Verdetto

Tecnologia è pronta per l'adapter. Tutte le 13 unità hanno `nucleo` popolato. L'adapter potrà raggruppare per `nucleo` per generare `nodiDisciplinari`.

```
CML_140A_TECNOLOGIA_NUCLEO_FIELD_READINESS_READY
```

## Next

CML-141 — implementazione adapter `tools/json-to-mappa-dati-adapter.mjs`
