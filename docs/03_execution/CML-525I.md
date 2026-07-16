# CML-525I — Local Draft Repository, Atomic Persistence and Recovery Adapter

## Obiettivo

Introdurre il primo repository locale dei draft assistiti con validazione preventiva, controllo di versione, salvataggio atomico e recovery separato.

## Modifiche

- repository runtime riusabile e fail-closed;
- adapter in-memory deterministico per i test;
- adapter Dexie/IndexedDB per il browser;
- controllo ottimistico `expectedVersion`;
- snapshot di recovery separato dal record stabile;
- restore additivo come nuova versione;
- errori strutturati `ADR-001`–`ADR-005`;
- gate `npm run test:cml525i`.

## Invarianti

- ogni draft viene validato con CML-525H prima della persistenza;
- un commit fallito non sostituisce l’ultima versione valida;
- il recovery non modifica il record stabile finché non viene ripristinato;
- il restore incrementa la versione e poi elimina lo snapshot;
- scrittura canonica disabilitata e validazione umana obbligatoria;
- nessuna UI, backend, autenticazione, cloud sync o telemetria;
- runtime storico e dati canonici invariati.

## Validazione richiesta

```bash
cd curman-react
npm run test:cml525g
npm run test:cml525h
npm run test:cml525i
npm run lint
npm run build
```

Il diff include `curman-react/**`; il merge su `main` attiverà il deploy Pages combinato.

```text
CML_525I_LOCAL_DRAFT_REPOSITORY_ATOMIC_PERSISTENCE_AND_RECOVERY_READY_FOR_REVIEW
```
