# CML-106A — GEOGRAFIA_COMPLETENESS_READINESS_LIVE_SMOKE

## Contesto

Progetto: CurManLight / CML
Branch: `main`
Commit runtime: `ffcd8f3` (CML-106)
Ultimo step: CML-106 — contatori UI aggiornati a 7/8/0 per Geografia

## Commit runtime verificato

`ffcd8f3` — pushato su `origin/main`, workflow GitHub Pages completato con successo

## URL verificati

- https://antoniocorsano-boop.github.io/curmanlight/ ✅ HTTP 200
- https://antoniocorsano-boop.github.io/curmanlight/motto-non-multa-sed-multum/ ✅ HTTP 200

## Checklist live

| #   | Controllo                                                                                      | Esito                |
| --- | ---------------------------------------------------------------------------------------------- | -------------------- |
| 1   | Deploy GitHub Pages completato                                                                 | ✅ PASS              |
| 2   | Home visibile e integra                                                                        | ✅ PASS              |
| 3   | Curriculum > Consultazione accessibile                                                         | ✅ PASS              |
| 4   | Sezione "Stato di completezza" visibile                                                        | ✅ PASS              |
| 5   | Contatori completezza: 7 / 8 / 0                                                               | ✅ PASS              |
| 6   | Pannello "Readiness per approvazione" visibile                                                 | ✅ PASS              |
| 7   | Contatori readiness: 7 / 8 / 0                                                                 | ✅ PASS              |
| 8   | Geografia presente tra le bozze complete                                                       | ✅ PASS              |
| 9   | Geografia presente tra le discipline in revisione                                              | ✅ PASS              |
| 10  | Tecnologia, Italiano, Matematica, Scienze, Inglese, Storia, Geografia: complete / in revisione | ✅ PASS              |
| 11  | Discipline restanti: sola consultazione / non pronte                                           | ✅ PASS              |
| 12  | Verifica coerenza elenco restanti: 8 contatore vs 7 nomi elencati                              | ⚠️ NOTA (vedi sotto) |
| 13  | Nessun pulsante di approvazione                                                                | ✅ PASS              |
| 14  | Nessuna disciplina approvata                                                                   | ✅ PASS              |
| 15  | Nessuna disciplina pronta per approvazione                                                     | ✅ PASS              |
| 16  | Nota prudenziale: approvazione esterna, validazione organi competenti                          | ✅ PASS              |
| 17  | Light mode only preservato                                                                     | ✅ PASS              |
| 18  | Nessun overflow orizzontale su mobile                                                          | ✅ PASS              |
| 19  | Didattica integra                                                                              | ✅ PASS              |
| 20  | Esportazioni integra                                                                           | ✅ PASS              |
| 21  | Guida integra                                                                                  | ✅ PASS              |
| 22  | `.cml`, export/import, role-access invariati                                                   | ✅ PASS              |
| 23  | Motto page HTTP 200                                                                            | ✅ PASS              |

## Verifica specifica: coerenza conteggio/elenco discipline restanti

### Rilevato

- Il contatore "Sola consultazione" mostra **8**
- La riga di testo corrispondente elenca **7 nomi**: Seconda Lingua Comunitaria, Educazione Civica, Arte e Immagine, Musica, Educazione Fisica, Religione Cattolica, Latino (LEL)
- **DISCIPLINE_META** contiene **14 discipline totali** (verificato: 14 chiavi)

### Analisi

14 totali - 7 complete = 7 restanti. Il contatore 8 è **+1 rispetto al valore atteso**.
Questa discrepanza è **pre-esistente a CML-106**: è stata introdotta in CML-085, dove il contatore "Sola consultazione" era 14 (invece di 13 su 14 discipline totali). Il numero è stato poi decrementato a ogni normalizzazione (14→13→12→11→10→9→8) senza mai correggere la base.

### Impatto

- **Funzionale**: nullo — il contatore è informativo, non pilota logiche di business
- **Visivo minimo**: il numero nel badge è 1 superiore al totale delle discipline elencate
- **Non è una regressione di CML-106**: il pattern è presente dal primo rilascio (CML-085)

### Decisione per questa slice

Non si modifica runtime. La correzione è rinviabile a microfix dedicato (CML-106B).

## Vincoli rispettati

- Nessuna modifica runtime
- Nessuna modifica dati curricolari
- Nessuna modifica `.cml`, export/import, role-access
- Nessuna approvazione introdotta
- Light mode only preservato

## Verdetto

`CML_106A_GEOGRAFIA_COMPLETENESS_READINESS_LIVE_SMOKE_READY`

## Prossimo step raccomandato

CML-106B — DISCIPLINARY_COUNTER_LIST_MICROFIX (correzione contatore sola consultazione da 8 a 7)
oppure
CML-107 — NEXT_DISCIPLINE_NORMALIZATION_SELECTION_AUDIT (se si accetta la discrepanza come non bloccante)
