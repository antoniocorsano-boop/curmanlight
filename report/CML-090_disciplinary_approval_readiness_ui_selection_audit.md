# CML-090 — Disciplinary Approval Readiness UI Selection Audit — Report

## Commit iniziale

`7f78310` — docs: define CML disciplinary approval readiness states

## File modificati

- `docs/03_execution/CML-090.md` (creato)
- `report/CML-090_disciplinary_approval_readiness_ui_selection_audit.md` (creato)
- `docs/REPO-MOVELOG.md` (modificato)

## Conferma docs-only

✅ Nessuna modifica runtime
✅ Nessuna modifica dati curricolari
✅ Nessuna modifica schema `.cml`
✅ Nessuna modifica export/import
✅ Nessuna modifica role-access

## Opzioni valutate

| Opzione | Descrizione | Esito |
|---|---|---|
| **A** | Badge readiness dentro sezione "Completezza" esistente | Scartata — troppo debole |
| **B** | Pannello "Readiness approvazione" sotto "Completezza" | **Selezionata** |
| **C** | Sezione dedicata "Approvazione"/"Stati approvazione" | Scartata — prematura |

## Opzione selezionata

**Opzione B — Pannello "Readiness approvazione" dentro Curriculum**

Motivazione: miglior compromesso tra chiarezza e prudenza. Separa completezza da approvazione, non introduce un nuovo tab, non sembra funzione approvativa, mantiene headroom, prepara evoluzione futura.

## Rischio residuo

Il pannello potrebbe essere interpretato come "funzione di approvazione" se la microcopy non è sufficientemente chiara. Mitigazione: microcopy esplicita in ogni elemento ("La completezza non equivale ad approvazione", "L'approvazione resta esterna"). Nessun pulsante, nessuna azione.

## Classificazione attuale confermata

- Tecnologia: `bozza_generabile / in_revisione` — Non pronta per approvazione
- Italiano: `bozza_generabile / in_revisione` — Non pronta per approvazione
- Altre 13 discipline: `solo_consultazione` — Non pronte per approvazione
- Pronte per approvazione: **0**

## Prossimo step raccomandato

`CML-091 — DISCIPLINARY_APPROVAL_READINESS_PANEL_RUNTIME_INCREMENT`
