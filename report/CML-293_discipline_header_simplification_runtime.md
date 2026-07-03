# CML-293 - Discipline Header Simplification Runtime

## Attività svolta

- Ispezionata la funzione `renderTecnologiaNorm()` nei runtime.
- Identificati elementi ridondanti/duplicati nella testata della vista Consulta (title con suffisso, meta line duplicata).
- Applicate modifiche minime a entrambi i runtime.
- Verificata parità runtime (hash identico).
- Aggiornati project-state, progress, backlog, execution doc, report, movelog.

## Modifiche apportate

### 1. Titolo disciplina

**Prima:** `[Disciplina] — curricolo della disciplina`
**Dopo:** `[Disciplina]`

### 2. Meta line eliminata

Rimosso: `Stato sezione: sola consultazione · Leggi i contenuti prima di passare a Revisione o Esportazioni`

Informazione già coperta da badge e notice box. Elimina la doppia indicazione di uscire dalla vista Consulta, riducendo la percezione di logiche miste.

### 3. Notice preservato (non modificato)

`In questa sezione consulti i contenuti. La modifica operativa avviene in Revisione.`

## Stato UX post intervento

- **UX-001**: da PARZIALMENTE RISOLTO a **RISOLTO IN CML-293** (la testata non mescola più segnali di consultazione con inviti espliciti a revisione/esportazioni).
- **UX-011**: da TODO a **RISOLTO IN CML-293** (testata semplificata, meno messaggi simultanei).

## Stato PM-04

- **Prima**: 55%
- **Dopo**: 65% (chiusura UX-001 + UX-011)
- **Avanzamento**: +10% giustificato dalla risoluzione di 2/8 voci UX (P0 + P1).

## File modificati

- index.html
- _published_snapshot/netlify-current/index.html
- docs/02_system/PROJECT-STATE.md
- docs/02_system/PRODUCT-MATURITY-PROGRESS.md
- docs/02_system/PRODUCT-USABILITY-BACKLOG.md
- docs/03_execution/CML-293.md
- report/CML-293_discipline_header_simplification_runtime.md
- docs/REPO-MOVELOG.md
