# CML-465 — B03 Work Decision Store Bridge

La slice introduce una doppia rappresentazione controllata nello store React:

- `workDecisioni` è la nuova sorgente di dominio per le scelte B03;
- `decisioni` resta la proiezione legacy usata temporaneamente da filtri, contatori ed esportazioni esistenti.

## Compatibilità

L’adattatore `toLegacyDecision()` rende esplicita la traduzione:

- `accepted_proposal` → `approvata`;
- `kept_current` → `rifiutata`;
- `reopened` → nessuna decisione legacy corrente.

Le API legacy restano disponibili esclusivamente per i chiamanti non ancora migrati.

## Tracciabilità

Ogni nuova `WorkDecision` conserva:

- identificativo;
- contesto completo;
- ruolo e ambito;
- testo finale;
- motivazione e note;
- autore e timestamp;
- riferimento alla decisione precedente.

## Rischio residuo

La cronologia completa non è ancora persistita come sequenza: `workDecisioni` conserva l’ultimo evento per unità e collega quello precedente tramite identificativo. La persistenza e lo storico completo appartengono a una slice successiva.

## Controllo

`npm run test:b03` verifica ora anche contratti, store bridge e collegamento della superficie di azione.

```text
CML_465_B03_WORK_DECISION_STORE_BRIDGE_IMPLEMENTED_REMOTE_READY_FOR_LOCAL_VALIDATION
```
