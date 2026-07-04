# CML-383 — PM Residual Intervention Map

## Meta
- **HEAD main:** `1c90c4f`
- **Catena:** CML-371 → CML-383 (13 slice)
- **Stato:** mappa interventi residui completata

## Output prodotti

### 1. Stato sintetico PM
- PM-03 (30%): 2 UX completati, 4 parzialmente risolti
- PM-06 (60%): 1 UX completato, 1 parzialmente risolto
- PM-07 (20%): 3 UX completati, 1 non risolto

### 2. Problemi residui identificati
- PM-03: Home sovraccarica, navigazione discontinua, menu incoerenti, mobile poco esplicito
- PM-06: Guida rapida non rapida, onboarding incompleto
- PM-07: Sidebar senza legenda, microcopy incoerente

### 3. Interventi runtime ammessi
- CML-384: Home de-densificazione (PM-03)
- CML-385: Navigazione mobile (PM-03)
- CML-386: Percorsi coerenti (PM-03)
- CML-387: Guida rapida task-oriented (PM-06)
- CML-388: Onboarding refresh (PM-06)
- CML-389: Sidebar legenda (PM-07)
- CML-390: Microcopy uniform (PM-07)

### 4. Interventi docs-only
- CML-391: Audit navigazione mobile (PM-03)
- CML-392: Mappa percorsi utente (PM-03)
- CML-393: Guida rapida restructuring plan (PM-06)
- CML-394: Onboarding content audit (PM-06)
- CML-395: Sidebar marker audit (PM-07)
- CML-396: Microcopy consistency audit (PM-07)

### 5. Interventi da escludere
- Refactor architetturale
- Nuove funzionalità non mappate
- Modifiche schema .cml o validatori
- Nuove dipendenze
- Interventi su PM completati

### 6. Rischi regressivi
- Home de-densificazione rompe flusso utente (Media/Alto)
- Guida rapida perde contenuti utili (Basso/Medio)
- Sidebar legenda aumenta complessità (Media/Basso)
- Mobile estesa riduce spazio contenuto (Media/Medio)

### 7. Criteri di chiusura
Definiti per ciascun PM con checklist verificabile

### 8. Catena CML consigliata
**Opzione A (incrementale)**: intervento diretto + audit finale
**Opzione B (audit-first)**: audit approfonditi prima di implementare

**Raccomandazione**: Opzione A

## Verdict
```text
CML_383_PM_RESIDUAL_INTERVENTION_MAP_READY
```
