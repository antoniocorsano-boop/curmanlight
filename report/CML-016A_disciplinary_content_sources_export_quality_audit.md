# CML-016A — Disciplinary Content, Sources and Export Quality Audit

## Summary

Audit completo della qualità dei contenuti disciplinari, delle fonti e dei documenti esportati. Solo analisi e progettazione — nessuna modifica runtime, nessun deploy.

## Preflight

- **Branch:** `cml-008r-fix-markdown-decision-summary`
- **HEAD:** `9a6343f`
- **Working tree:** Pulita ✅

## Risultati

| Area                                    | Giudizio                                                                                     |
| --------------------------------------- | -------------------------------------------------------------------------------------------- |
| Contenuti disciplinari (14 discipline)  | ✅ Buono — linguaggio adeguato, riferimenti territoriali, distinzione vigente/proposta       |
| Fonti (header, card, normativa, export) | ✅ Buono — DM 254/2012 e DM 221/2025 specifici e contestuali                                 |
| Curricolo definitivo (Tab Riepilogo)    | ✅ Buono — struttura chiara, disclaimer presente                                             |
| Export (Markdown, Word, PDF, Copia)     | ✅ Molto buono — professionale, confronto/definitivo distinti, disclaimer in tutti i formati |

## Criticità (8 totali, 2 a media gravità)

| #   | Criticità                                                  | Gravità     |
| --- | ---------------------------------------------------------- | ----------- |
| C1  | Marker `[IN 2025: ...]` inline nel testo proposta          | ⚠️ Media    |
| C2  | Nessuna distinzione approvato/personalizzato nel Riepilogo | ⚠️ Media    |
| C3  | Export parziale non segnalato abbastanza                   | Bassa       |
| C4  | Fonti card non linkate alla normativa                      | Bassa       |
| C5  | Nome file export in formato ISO                            | Molto bassa |
| C6  | Fonti PTOF/RAV statiche                                    | Molto bassa |
| C7  | Discipline senza dati (Ed. Fisica, Religione)              | Media       |
| C8  | Latino (LEL) tutto nuovo — volume contenuti                | Bassa       |

## Opzioni per CML-016B

| Opzione | Descrizione                                    | Impatto    | C risolte   |
| ------- | ---------------------------------------------- | ---------- | ----------- |
| A       | Separare marker `[IN 2025]` dal testo proposta | Basso      | C1          |
| B       | Indicatore personalizzazione nel Riepilogo     | Medio      | C2          |
| C       | Link fonti card → normativa                    | Medio-alto | C4          |
| **D ✓** | **A + B combinato (consigliata)**              | **Basso**  | **C1 + C2** |

## Verdetto

```
CML_016A_DISCIPLINARY_CONTENT_SOURCES_EXPORT_QUALITY_AUDIT_READY
```

## Prossimo step

CML-016B — Implementazione Opzione D: cleanup marker IN 2025 + indicatore personalizzazione nel Riepilogo.
