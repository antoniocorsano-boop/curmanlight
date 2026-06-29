# CML-008R-FIX — Closure Audit Report

## Verdetto

```
CML_008R_FIX_CLOSURE_AUDIT_READY_FOR_CONTROLLED_PUBLICATION
```

## Dettaglio audit

### 1. Stato Git

| Campo           | Valore                                   |
| --------------- | ---------------------------------------- |
| Branch          | `cml-008r-fix-markdown-decision-summary` |
| HEAD            | `9179418`                                |
| Commit partenza | `dc179ce` (CML-008R pubblicato)          |
| Working tree    | CLEAN                                    |
| File modificati | 3 attesi                                 |

### 2. Diff commit 9179418

| Aspetto                                       | Esito |
| --------------------------------------------- | ----- |
| Solo testo Markdown generato                  | ✅    |
| Nessuna modifica runtime                      | ✅    |
| Nessuna modifica funzioni                     | ✅    |
| Nessuna modifica workflow approve/reject/edit | ✅    |

### 3. Contenuto HTML

#### Presenze verificate

- "Voci da validare" ✅ (1 occorrenza)
- "Dettaglio delle proposte di modifica / Gap 2025" ✅ (1 occorrenza)
- "Voci mantenute da validare" ✅ (1 occorrenza)
- Riferimento metodologico ai mantenimenti ✅
- Nota esplicativa post-sintesi ✅
- Disclaimer footer ✅
- Footer pulito (lista Markdown) ✅

#### Assenze verificate

- "Da decidere" (vecchia etichetta) ✅ assente
- D.M. 221/2025 nel disclaimer ✅ assente
- Doppio separatore pre-footer ✅ assente

### 4. Preservazione asset

| Asset                                                         | Stato                    |
| ------------------------------------------------------------- | ------------------------ |
| PDF (`Corso_CurricoloDonMilani_IN2025_arianese_20260620.pdf`) | ✅ invariato             |
| sw.js                                                         | ✅ invariato (1334 byte) |
| _headers                                                      | ✅ invariato (362 byte)  |
| assets/                                                       | ✅ invariato             |
| Nuovi file binari                                             | ✅ nessuno               |

### 5. Coerenza totale

| Elemento                               | Conteggio  | Corretto |
| -------------------------------------- | ---------- | -------- |
| Voci modificate / Gap 2025 (dettaglio) | 8 righe    | ✅       |
| Voci mantenute da validare             | 4 righe    | ✅       |
| "Voci da validare" (sintesi)           | 12         | ✅       |
| "Totale voci" (sintesi)                | 12         | ✅       |
| Voci modificate + Voci mantenute       | 8 + 4 = 12 | ✅       |

### 6. Rischi residui

| Rischio                                           | Impatto | Mitigazione                                          |
| ------------------------------------------------- | ------- | ---------------------------------------------------- |
| Nome "Tecnologia" hardcoded in `disciplineFilter` | Basso   | Già presente in CML-008R, non toccato                |
| Preview non aggiornata dopo approve/reject        | Basso   | Pulsante "Genera bozza" rigenera da zero             |
| Utente copia Markdown come definitivo             | Basso   | Badge "Documento di lavoro" + avvertenza nell'output |

### 7. Decisione

- ✅ **Nessun deploy eseguito**
- ✅ **Fix pronta per pubblicazione controllata**
- ✅ **Nessuna modifica a runtime, PDF, sw.js, \_headers, assets**
- ✅ **Solo 3 file coinvolti: index.html (modificato), 2 docs/report (creati)**
