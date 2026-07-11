# CML-466 — B03 WorkDecision Local Persistence Report

La slice aggiunge una persistenza locale dedicata alle decisioni di lavoro B03 senza coinvolgere ancora Dexie o l'intero stato applicativo.

## Contratto

Il payload `cml-work-decisions-v1` conserva:

- data del salvataggio;
- mappa `workDecisioni`;
- proiezione legacy `decisioni`.

## Compatibilità

Il parser riconosce anche `cml-local-v3`. In quel caso recupera le sole decisioni legacy e inizializza vuota la mappa `WorkDecision`, evitando di inventare dati di contesto assenti.

## Sicurezza operativa

- accesso a `localStorage` protetto;
- errori di parsing o quota restituiti come esito negativo;
- nessuna cancellazione di altre chiavi locali;
- caricamento solo da payload riconosciuti;
- nessun backend e nessuna credenziale.

## Rischi residui

- la persistenza non è ancora esposta con feedback completo nell'interfaccia;
- le vecchie API dello store restano disponibili;
- non esiste storico completo persistito delle revisioni successive;
- la migrazione completa del payload applicativo resta una slice separata.
