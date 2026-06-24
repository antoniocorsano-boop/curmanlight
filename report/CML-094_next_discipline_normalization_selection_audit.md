# Report: CML-094 — Next Discipline Normalization Selection Audit

## Commit iniziale
`6b95a0b` — docs: smoke CML Matematica readiness live

## File modificati
- `docs/03_execution/CML-094.md` (creato)
- `report/CML-094_next_discipline_normalization_selection_audit.md` (creato)
- `docs/REPO-MOVELOG.md` (aggiornato)

## Conferma docs-only
✅ Solo documentazione. Nessuna modifica runtime.

## Conferma runtime non modificato
✅ `_published_snapshot/netlify-current/index.html`, `sw.js`, `_headers` — non modificati.

## Conferma dati curricolari non modificati
✅ `content/curriculum/*.normalized.json` — non modificati.

## Conferma `.cml`, export/import e role-access invariati
✅ Schema `.cml`, funzioni export/import, codice operativo `CML2025` — invariati.

## Discipline candidate valutate
9 candidate (escluse Seconda Lingua e Latino LEL per copertura ridotta):
1. **Scienze** — raccomandata
2. Inglese
3. Storia
4. Geografia
5. Arte e Immagine
6. Musica
7. Educazione Fisica
8. Religione Cattolica
9. Educazione Civica

## Disciplina selezionata
**Scienze**

## Motivazione
1. Completa l'asse matematico-scientifico dopo Tecnologia e Matematica.
2. Forte copertura verticale Infanzia/Primaria/Secondaria.
3. 5 nuclei chiari e distinti (Chimica, Biologia, Geologia, Fisica e astronomia, Fonti di energia).
4. Dati DATA sufficienti (5 traguardi + 4 obiettivi, multi-ordine).
5. Evidenze osservabili naturali dal metodo scientifico.
6. D.M. 221/2025: nuovo nucleo "Fonti di energia" già presente nei dati con proposte editoriali.
7. Complementarità con Tecnologia (stesso tema "Fonti di energia" da prospettive diverse).
8. Nessuna duplicazione con Tecnologia (disegno tecnico, materiali, cicli, informatica) o Matematica (numeri, geometria, dati).

## Distinzione completezza/readiness preservata
✅ I due contatori sono documentati come distinti anche se oggi coincidono numericamente (3/12/0):
- **Completezza**: presenza struttura normalizzata.
- **Readiness**: stato nel processo di revisione/approvazione.

## Nota SMART: contatori derivati, dati/stati verificabili
✅ I contatori non sono SMART in sé. Sono derivati da dati e stati SMART-verificabili:
- Scienze ha dati specifici, misurabili/ osservabili, attuabili, rilevanti e temporalmente collocati.
- Il modello di normalizzazione produce automaticamente evidenze e criteri descrittivi.

## Rischi residui
1. **Overlap Fonti di energia con Tecnologia**: confine chiaro (scientifico vs produttivo), ma da monitorare in fase di redazione.
2. **Densità contenutistica**: 5 nuclei ampi potrebbero generare molte unità. Mitigazione: 12-14 unità iniziali.
3. **Aggiornamento D.M. 221/2025**: Scienze è impattata. I dati DATA già contengono proposte di modifica.

## Prossimo step raccomandato
**CML-095 — SCIENZE_DISCIPLINE_NORMALIZED_CURRICULUM_DRAFT**

Perimetro:
- Creare `content/curriculum/scienze.normalized.json`
- Benchmark strutturale: Tecnologia (12 unità), Italiano (14 unità), Matematica (13 unità)
- Non copiare contenuti
- Coprire Infanzia, Primaria e Secondaria
- Nuclei: Chimica, Biologia, Geologia, Fisica e astronomia, Fonti di energia
- Stato massimo: `bozza_generabile / in_revisione`
- Validazione umana esplicita

## Verdetto finale
`CML_094_NEXT_DISCIPLINE_NORMALIZATION_SELECTED`
