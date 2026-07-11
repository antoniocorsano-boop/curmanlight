# Gap layer canonici

Questa directory contiene esclusivamente pacchetti disciplinari `*.gap.json` verificabili.

Regole:

- un file per disciplina, denominato con lo slug canonico (`tecnologia.gap.json`);
- schema `gap-v1` conforme a `schemas/gap-layer-v1.schema.json`;
- ogni `unitaId` deve esistere nel curriculum normalizzato della stessa disciplina;
- sono ammessi solo stati B03 azionabili: `proposta` e `non_validato`;
- ogni proposta deve indicare motivazione e riferimenti di fonte;
- `humanValidationRequired` deve essere `true`;
- nessun testo può essere generato o inferito automaticamente senza una fonte dichiarata;
- i file vengono copiati in `curman-react/src/data/gap/` solo dopo validazione.

L'assenza di file è uno stato valido della pipeline, ma mantiene B03 non utilizzabile finché non viene aggiunto almeno un pacchetto disciplinare reale.
