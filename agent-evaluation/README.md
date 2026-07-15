# Synthetic User Browser Agent Harness

Questa cartella contiene la configurazione operativa dello swarm sintetico definito in `docs/02_system/SYNTHETIC-USER-SWARM-MODEL.md`.

## Baseline

- 6 agenti-persona;
- 5 scenari orientati a obiettivi utente;
- matrice attesa: 30 esecuzioni;
- desktop: 1440 × 1000;
- mobile: 390 × 844;
- dati esclusivamente sintetici;
- nessuna telemetria;
- nessun dato personale;
- nessuna modifica automatica al curricolo canonico.

## File

- `personas/personas.json` — profili stabili degli utenti sintetici;
- `scenarios/scenarios.json` — obiettivi e criteri di successo;
- `browser-driver-contract.json` — interfaccia richiesta al futuro driver Playwright;
- `evidence-schema.json` — formato uniforme delle evidenze.

## Regola di esecuzione

Gli agenti ricevono il solo obiettivo utente. Non ricevono selettori, nomi dei pulsanti o sequenze di click che rivelino la soluzione.

Ogni combinazione persona-scenario deve produrre un record conforme a `evidence-schema.json` e almeno una evidenza osservabile per ogni blocco o ambiguità segnalata.

## Gate CML-517B

La configurazione è valida quando:

1. esistono esattamente 6 personas con ID univoco;
2. esistono esattamente 5 scenari con ID univoco;
3. la matrice produce 30 combinazioni;
4. ogni scenario contiene criteri di successo;
5. il driver non può approvare, modificare dati canonici o inviare dati all’esterno;
6. lo swarm resta pre-validazione e non sostituisce il pilot umano.

## Limite attuale

Il repository contiene riferimenti a Playwright ma la dipendenza non è dichiarata nel `package.json` React. CML-517B non introduce un lockfile parziale. L’installazione del driver browser e l’esecuzione visuale sono demandate alla successiva slice controllata CML-517C.
