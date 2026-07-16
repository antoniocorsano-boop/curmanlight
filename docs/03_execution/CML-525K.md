# CML-525K — Assisted Draft Workspace Shell and Explicit Recovery Decision UI

## Obiettivo

Aggiungere una shell React accessibile per il lavoro sulle bozze assistite, con decisione esplicita sul recovery e rappresentazione chiara di salvataggio, conflitto ed errore.

## Modifiche

- nuova `AssistedDraftWorkspaceShell`;
- stato locale e versione corrente esposti con `aria-live`;
- pannello recovery non modale con azioni esplicite di ripristino e scarto;
- salvataggio e checkpoint bloccati finché il recovery non viene deciso;
- conflitto tra schede con avviso e ricaricamento esplicito;
- click handler protetti da Promise rifiutate;
- gate `npm run test:cml525k`.

## Confini

Nessuna generazione automatica, nessun autosave temporizzato, nessuna promozione canonica, nessuna modifica allo schema `.cml`, nessun backend, autenticazione, cloud sync o telemetria.

## Validazione

Eseguire i test CML-525G, H, I, J e K, quindi lint e build nella directory `curman-react`.

CML_525K_ASSISTED_DRAFT_WORKSPACE_SHELL_AND_EXPLICIT_RECOVERY_DECISION_UI_READY_FOR_REVIEW
