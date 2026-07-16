# CML-518B — Inventario tecnico verificato delle superfici React

## Stato

IN CORSO.

## Obiettivo

Verificare il perimetro React collegando ogni capacità dichiarata a componenti, store, parser, persistenza, test e workflow effettivi.

## Baseline

- `main`: `e3c02cbcf5f3de90fc3f1f1b7f80b7607a6d9b53`;
- branch: `codex/cml-518b-react-surface-inventory`;
- CML-518A integrata;
- nessuna PR preesistente aperta;
- runtime storico e dati curricolari canonici invariati.

## Primo output

Creato:

`report/CML-518B-react-surface-technical-inventory.md`

Percorsi core già verificati:

- `curman-react/src/App.tsx`;
- `curman-react/src/stores/useAppStore.ts`;
- layout e navigazione;
- consultazione curricolare;
- proposta docente;
- programmazione annuale;
- UDA essenziale;
- duplicazione documenti;
- parser condiviso `.cml`;
- workflow di regressione CML-517E.

## Lavoro residuo

1. mappare puntualmente Dipartimento e Referente;
2. collegare test e workflow a ogni capacità;
3. verificare archivio, backup e ripristino;
4. registrare casi avversariali e limiti residui;
5. produrre una matrice finale completa/parziale/mancante;
6. rieseguire CI e review prima della chiusura.

## Confini

Slice documentale e di audit tecnico. Nessuna modifica al comportamento React, al runtime storico o ai dati canonici. Nessun backend, telemetria o approvazione automatica.

## Verdetto corrente

`CML_518B_VERIFIED_REACT_SURFACE_INVENTORY_IN_PROGRESS`
