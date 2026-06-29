# CML-097 — Next Discipline Normalization Selection Audit

## Executive Summary

| Campo                    | Valore                                                                |
| ------------------------ | --------------------------------------------------------------------- |
| Audit ID                 | CML-097                                                               |
| Baseline                 | `d470e71` (origin main aggiornato)                                    |
| Stato contatori          | 4/11/0 (completezza — 4 normalize, 11 sola consultazione, 0 pronte)   |
| Disciplina selezionata   | **Inglese**                                                           |
| Raccomandazione primaria | CML-098: `inglese.normalized.json` — 8-12 unità, 4 nuclei, livello A2 |
| Seconda scelta           | Storia (se Inglese non disponibile)                                   |

## Contesto

Quarta normalizzazione completata: Scienze (CML-095, quality audit A — CML-095A). Contatori 4/11/0 live su GitHub Pages (CML-096A).

## Discipline candidate valutate (8)

| #   | Disciplina          | Items DATA | Copertura   | Nuclei             | Rischio   | Raccomandazione                   |
| --- | ------------------- | ---------- | ----------- | ------------------ | --------- | --------------------------------- |
| 1   | **Inglese**         | 5 (4+1)    | Inf/Pri/Sec | 4 linguistici (A2) | **Basso** | **1ª — RACCOMANDATA**             |
| 2   | Storia              | 10 (5+5)   | Inf/Pri/Sec | 4 storici          | Medio     | 2ª scelta                         |
| 3   | Geografia           | 5 (4+1)    | Inf/Pri/Sec | 3 geografici       | Basso     | Differibile                       |
| 4   | Educazione Civica   | 8 (6+2)    | Inf/Pri/Sec | 4 civici           | Alto      | Differibile (dopo normalize base) |
| 5   | Arte e Immagine     | 4 (3+1)    | Inf/Pri/Sec | 3 artistici        | Basso     | Differibile                       |
| 6   | Musica              | 6 (3+3)    | Inf/Pri/Sec | 3 musicali         | Basso     | Differibile                       |
| 7   | Educazione Fisica   | 5 (4+1)    | Inf/Pri/Sec | 4 motori           | Basso     | Differibile                       |
| 8   | Religione Cattolica | 4 (3+1)    | Inf/Pri/Sec | 4 religiosi        | Medio     | Differibile                       |

## Raccomandazione: Inglese

### Motivazioni chiave

1. **Continuità CML-094**: prevista come quinta normalizzazione dopo asse scientifico
2. **Prima lingua straniera**: testa generalizzabilità del modello fuori dall'italiano
3. **Rischio bassissimo**: quadro A2 stabile, aggiornamenti IN 2025 minimi
4. **Forte verticalità**: Infanzia→Primaria→Secondaria con progressione QCER chiara
5. **Complementarità assoluta**: nessun overlap con Tecnologia, Italiano, Matematica, Scienze
6. **Valore strategico**: competenza multilinguistica priorità UE, CLIL, eTwinning

### Punti di attenzione

- Solo 1 obiettivo DATA esistente (`en_ob_sec1`) — da integrare durante normalizzazione
- Prima normalizzazione su lingua non italiana: richiede attenzione agli adattamenti QCER
- Unità stimate 8-10 (più compatte delle 12-15 delle discipline scientifiche)

## Prossimo step

**CML-098** — Creazione di `content/curriculum/inglese.normalized.json` con benchmark Tecnologia/Matematica/Scienze, copertura Inf-Pri-Sec, 8-12 unità, 4 nuclei (Ascolto, Lettura, Produzione, Interazione), stato `bozza_generabile / in_revisione`.

---

_Report generato da CML-097 selection audit. Baseline: `d470e71`._
