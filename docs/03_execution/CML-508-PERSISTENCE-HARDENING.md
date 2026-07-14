# CML-508 — Persistence hardening

## Rilievi chiusi

- piano annuale isolato per disciplina, ordine, anno scolastico e classe;
- archivio locale indicizzato con compatibilità per il precedente record singolo;
- nessun caricamento o sovrascrittura tra contesti differenti;
- salvataggio disabilitato finché anche la classe non è definita;
- errori di lettura e scrittura `localStorage` intercettati;
- errore di salvataggio mostrato all’utente tramite messaggio con `role="alert"`.

## Vincoli invariati

Nessun backend, export, UDA, servizio remoto o telemetria.

`CML_508_PROGRAMMAZIONE_ANNUALE_PERSISTENCE_HARDENED_READY_FOR_REMOTE_VALIDATION`
