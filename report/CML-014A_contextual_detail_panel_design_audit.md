# CML-014A — Contextual Detail Panel Design Audit

**Data:** 2026-06-21
**Branch:** `cml-008r-fix-markdown-decision-summary`
**HEAD:** `b7d7f72`
**Stato:** Solo audit — nessuna modifica runtime, nessun deploy

## Risultati

| Punto                         | Esito                                                           |
| ----------------------------- | --------------------------------------------------------------- |
| Preflight                     | ✅ Branch/HEAD/tree/URL confermati                              |
| Criticità individuate         | 7 (C1-C7)                                                       |
| Opzioni valutate              | 3 (A: expand migliorato, B: pannello laterale, C: modal/drawer) |
| Opzione selezionata           | **A — Dettaglio espandibile migliorato**                        |
| Criteri accettazione CML-014B | 16 criteri definiti                                             |
| Problemi cosmetici CML-013G   | Lasciati come debt non bloccante                                |
| Modifica runtime              | ❌ Nessuna                                                      |
| Deploy                        | ❌ Nessuno                                                      |

## Opzione selezionata: Dettaglio espandibile migliorato

- Confronto con gerarchia e fonti specifiche (es. "DM 254/2012, Traguardo X.1")
- Differenze IN2012/IN2025 evidenziate visivamente
- Pulsante "Personalizza testo" sempre nella riga azioni (non solo nel dettaglio)
- Mobile: pannelli 1 colonna con scroll interno e max-height
- Desktop: pannelli 2 colonne (invariato)
- Card ok/decise invariate
- Nessuna modifica a layout, dati, conteggi, export, asset

## Verdetto

```
CML_014A_CONTEXTUAL_DETAIL_PANEL_DESIGN_AUDIT_READY
```

## Prossimo step

**CML-014B — Enhanced pending detail panel**
Implementare Opzione A: miglioramento confronto card pending (fonti contestuali, differenze evidenziate, Personalizza in primo piano).
