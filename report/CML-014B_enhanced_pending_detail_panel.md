# CML-014B — Enhanced Pending Detail Panel

**Data:** 2026-06-21
**Branch:** `cml-008r-fix-markdown-decision-summary`
**HEAD:** `9243e9e` + modifiche runtime
**Stato:** Modifica runtime completata — in attesa di CML-014C smoke audit

## Modifiche

| Modifica             | Prima                                 | Dopo                                           |
| -------------------- | ------------------------------------- | ---------------------------------------------- |
| Label fonte attuale  | 📄 IN 2012 (attuale)                  | 📄 DM 254/2012 (vigente)                       |
| Label fonte proposta | ✨ Proposta IN 2025                   | ✏️ DM 221/2025 — proposta di aggiornamento     |
| Label assente        | 🆕 Non presente nel curricolo attuale | 🆕 DM 254/2012 — assente nel curricolo attuale |
| Evidenziazione diff  | Nessuna                               | Colored left borders (arancione/verde)         |
| "Personalizza testo" | Solo nel dettaglio 🔍                 | Sempre visibile nella riga azioni              |
| Scroll dettaglio     | Nessuno                               | max-height 200px (150px mobile)                |
| Truncation proposta  | 90 caratteri                          | 120 caratteri                                  |

## Verdetto

```
CML_014B_ENHANCED_PENDING_DETAIL_PANEL_READY
```

## Prossimo step

**CML-014C — Enhanced Pending Detail Smoke Audit**
