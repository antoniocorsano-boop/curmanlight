# CML-166 — Educazione Civica Normalized Data Preparation

Data: 2026-06-26

## Scopo

Creare il file `content/curriculum/educazione-civica.normalized.json` come fonte dati strutturata per la disciplina Educazione Civica, completando l'asse Storico-sociale (Storia + Geografia + Educazione Civica).

## Baseline tecnica

- Branch: `main`
- Commit iniziale: `39c066d`
- `origin/main`: `39c066d`
- Working tree: pulito (sync)
- Push: non eseguito
- Deploy: non eseguito

## Stato pre-intervento

| Indicatore | Valore |
|-----------|:------:|
| File `.normalized.json` esistenti | 7 |
| Unità normalizzate totali | 94 |
| Discipline integrate runtime | 7/14 |
| Asse Storico-sociale | Storia + Geografia (manca Educazione Civica) |

## File creato

`content/curriculum/educazione-civica.normalized.json`

## Struttura

| Proprietà | Valore |
|-----------|--------|
| schemaVersion | `cml-normalized-curriculum-v1` |
| disciplina | Educazione Civica |
| stato | `bozza_generabile` |
| readiness | `in_revisione` |
| humanValidationRequired | true |
| metaDiscipline | Storico-sociale |
| unità totali | 11 |

### Nuclei coperti (4/4)

1. **Costituzione** — regole di convivenza, diritti dei bambini, Costituzione, istituzioni, legalità, partecipazione democratica, organizzazioni internazionali
2. **Sviluppo sostenibile** — educazione ambientale, Agenda 2030, riciclo, patrimonio culturale, impronta ecologica, sostenibilità
3. **Cittadinanza digitale** — navigazione sicura, netiquette, media literacy, identità digitale, cyberbullismo, diritto d'autore
4. **Educazione finanziaria** — denaro e risparmio, budget personale, strumenti finanziari, previdenza, fisco

### Distribuzione unità

| Ordine | Unità | Classi/fasce coperte |
|--------|:-----:|---------------------|
| Infanzia | 2 | fascia 5 |
| Primaria | 5 | classe 1, 2, 3, 4, 5 |
| Secondaria | 4 | classe 1, 2, 3 (x2) |
| **Totale** | **11** | |

## Riferimenti normativi

- Legge 20 agosto 2019, n. 92 — Insegnamento trasversale dell'Educazione Civica
- D.M. 254/2012 — Indicazioni Nazionali per il curricolo della scuola dell'infanzia e del primo ciclo
- D.M. 221/2025 — Nuove Indicazioni Nazionali
- D.M. 183/2024 — Educazione finanziaria, assicurativa e previdenziale
- Convenzione ONU sui diritti dell'infanzia e dell'adolescenza (1989)
- Agenda 2030 ONU per lo sviluppo sostenibile
- Costituzione della Repubblica Italiana

## Validazioni

| Controllo | Esito |
|-----------|:-----:|
| `validate-cml-normalized-curriculum.mjs` | ✅ 8 file, 105 unità, overallValid: true |
| `generate-static-mappa-dati.mjs` | ✅ Output generato |
| UTF-8 senza BOM | ✅ |
| No U+FFFD | ✅ |
| Nessun `???` o `??` | ✅ |
| JSON valido | ✅ |
| Accenti italiani | ✅ presenti |

## Stato post-intervento

| Indicatore | Prima | Dopo |
|-----------|:-----:|:----:|
| File `.normalized.json` | 7 | **8** |
| Unità normalizzate | 94 | **105** |
| Asse Storico-sociale | 2/3 discipline | **3/3** ✅ |
| Discipline pronte per runtime | 7 | **8** |

## Rischi residui

- I contenuti di Educazione Civica toccano temi normativi e valoriali — richiedono validazione umana (stato `in_revisione`)
- L'assenza di un file `.normalized.json` precedente significa che non c'è un pattern diretto da seguire oltre ai 4 nuclei dichiarati
- La decostruzione della Legge 92/2019 in unità verticali è interpretativa e va validata dal dipartimento

## Verdetto

`CML_166_EDUCAZIONE_CIVICA_NORMALIZED_DATA_PREPARATION_READY`
