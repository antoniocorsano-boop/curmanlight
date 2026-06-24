# CML-089 — Disciplinary Approval Readiness State Model Contract — Report

## Commit iniziale

`31dfc9d` — feat: update CML curriculum completeness status for Italian

## File modificati

- `docs/02_system/DISCIPLINARY_APPROVAL_READINESS_STATE_MODEL_CONTRACT.md` (creato)
- `docs/03_execution/CML-089.md` (creato)
- `report/CML-089_disciplinary_approval_readiness_state_model_contract.md` (creato)
- `docs/REPO-MOVELOG.md` (modificato)

## Conferma docs-only

✅ Nessuna modifica runtime
✅ Nessuna modifica dati curricolari
✅ Nessuna modifica schema `.cml`
✅ Nessuna modifica export/import
✅ Nessuna modifica role-access

## Sintesi modello stati

| Stato | Descrizione | Chi attribuisce | UI mostra |
|---|---|---|---|
| `solo_consultazione` | Traguardi/obiettivi base | Default | Badge "Solo consultazione" |
| `bozza_generabile` | Struttura normalizzata completa | Sviluppatore + validatore | Badge "Bozza completa disponibile" |
| `in_revisione` | Bozza in controllo dipartimentale | Coordinatore dipartimento | Badge "In revisione" |
| `sintesi_pronta` | Revisionata, pronta per organi | Referente curricolo | Badge "Sintesi pronta" |
| `pronto_approvazione` | Check umano + documento | Referente / DS | Badge "Pronta per approvazione" |
| `approvato_esternamente` | Delibera esterna documentata | DS / Segreteria | Badge "Approvata esternamente" |

## Classificazione attuale

| Disciplina | Stato | Readiness |
|---|---|---|
| Tecnologia | `bozza_generabile / in_revisione` | Non pronta per approvazione |
| Italiano | `bozza_generabile / in_revisione` | Non pronta per approvazione |
| Altre 13 discipline | `solo_consultazione` | Non pronte per approvazione |
| **Pronte per approvazione** | **0** | — |

## Rischio residuo

Il modello è dichiarativo e documentale. Il rischio principale è l'interpretazione errata degli stati in fase di futura implementazione UI. Mitigazione: microcopy esplicita in ogni stato, divieto di stati automatici, obbligo di riferimento a delibera per `approvato_esternamente`.

## Prossimo step raccomandato

`CML-090 — DISCIPLINARY_APPROVAL_READINESS_UI_SELECTION_AUDIT` — valutare come mostrare il modello stati nell'interfaccia utente senza introdurre pulsanti di approvazione.
