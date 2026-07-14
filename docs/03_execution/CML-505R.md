# CML-505R — Roadmap React 1.0 Realignment

## Obiettivo

Riallineare la roadmap CurManLight React 1.0 allo stato reale del repository dopo CML-504 e dopo l’audit end-to-end CML-505.

## Baseline

- `main`: `77e1818dd4ca69190fc9b8b912935807a16162fa`
- CML-505 già assegnata e chiusa come audit end-to-end
- modifica esclusivamente documentale

## Vincolo emerso

L’audit CML-505 ha individuato due P1:

1. incompatibilità tra export Docente React e import Dipartimento React per i campi `motivazione` e `fonte`;
2. parser comune incompleto perché non gestisce `referent_validation`.

Per questo CML-506 resta riservata alla chiusura contrattuale e ai test round-trip.

## Modifiche

- avanzamento complessivo riallineato all’88%;
- processo Referente registrato come implementato;
- audit CML-505 registrato come completato;
- nuova fase dedicata alla chiusura dei contratti `.cml`;
- CML-506 confermata come prossima slice;
- progettazione didattica rinumerata da CML-507 a CML-511;
- persistenza e sicurezza locale rinumerate da CML-512 a CML-515;
- qualità del prodotto rinumerata da CML-516 a CML-520;
- release 1.0 rinumerata da CML-521 a CML-525;
- introdotte regole esplicite contro il riuso dei codici già assegnati.

## Vincoli rispettati

- nessuna modifica runtime;
- nessuna modifica ai dati curricolari;
- nessun backend, upload, telemetria o servizio remoto;
- nessuna sovrascrittura di CML-505;
- nessuna collisione con CML-506.

## Verdetto

`CML_505R_ROADMAP_REALIGNMENT_READY_FOR_REVIEW`
