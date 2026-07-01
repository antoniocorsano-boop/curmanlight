# CML-238 UDA SMART EMPTY STATES MICRO-SLICE — Report

## Sintesi

Micro-aggiornamento degli stati vuoti UDA smart e programmazione annuale: messaggi orientati all'azione, conteggi filtri più chiari, rimandi a Passo 1 e Curriculum. Comportamento e storage invariati.

## Intervento

| Area | Modifica |
|---|---|
| Libreria vuota | Passo suggerito Passo 1 → Genera/Salva → UDA modello |
| Filtri senza match | Spiegazione + Pulisci filtri |
| Conteggio filtri | Testi contestuali al posto di «0 UDA trovate su 0» |
| Anteprime | Microcopy iniziale più chiaro |
| Unità annual draft | Rimando a Curriculum → Consulta |
| Generazione senza bozza | Messaggi senza chiave storage tecnica |

## Stringhe JS aggiornate (solo microcopy)

- `renderAnnualDraftUnits` — empty units HTML
- `setGeneratedUdaSmartPreview` — default text
- `setUdaSmartLibraryResultsCount` — display text only
- `setUdaSmartMarkdownPreview` — default text
- `generateUdaSmartDraftFromAnnualPlanning` — warn messages
- `renderUdaSmartLibrary` — empty library e no-filter-match HTML

Logica filtri, persistenza e handler: invariati.

## Smoke test (ispezione statica)

| Verifica | Esito |
|---|---|
| Testi empty library nel sorgente | PASS |
| Testi no-filter-match nel sorgente | PASS |
| Conteggio filtri contestuale | PASS |
| Sezione Passo 2 UDA smart HTML | PASS |
| JS syntax check | PASS |
| Validator 14/14 | PASS |
| Shape test 14/14 | PASS |

## Invarianti

- Schema storage locale: invariato (`UDA_SMART_LIBRARY_KEY` non toccato)
- Formato `.cml`: non modificato
- JSON curriculum: non modificati
- Tools: non modificati

## Rischi residui

| Rischio | Livello | Nota |
|---|---|---|
| Messaggi leggermente più lunghi su mobile | Basso | Accettabile per chiarezza |
| Duplicato `renderUdaSmartLibrary` legacy (riga ~2849) | Basso | Sovrascritto dalla versione con filtri |

## Prossima slice consigliata

**CML-238S — controlled push**, poi valutazione chiusura ciclo UX leggero o micro-polish residui P3.
