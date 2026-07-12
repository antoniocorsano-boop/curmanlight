# Gap layer canonici

Questa directory contiene esclusivamente pacchetti disciplinari `*.gap.json` verificabili.

Regole:

- un file per disciplina, denominato con lo slug canonico (`tecnologia.gap.json`);
- schema `gap-v1` conforme a `schemas/gap-layer-v1.schema.json`;
- ogni `unitaId` deve esistere nel curriculum normalizzato della stessa disciplina;
- ogni entry deve dichiarare `targetField` scegliendo esclusivamente tra `traguardo`, `obiettivi`, `conoscenze`, `abilita`, `evidenze` e `criteriValutazione`;
- `testoOriginale` deve coincidere con il valore corrente del campo indicato da `targetField`;
- `proposto` deve descrivere un delta reale rispetto a `testoOriginale`;
- sono ammessi solo stati B03 azionabili: `proposta` e `non_validato`;
- ogni proposta deve indicare motivazione e riferimenti di fonte;
- `humanValidationRequired` deve essere `true`;
- nessun testo può essere generato o inferito automaticamente senza una fonte dichiarata;
- i file vengono copiati in `curman-react/src/data/gap/` solo dopo validazione.

Il contratto field-level non modifica automaticamente il curricolo canonico: la proposta resta separata e richiede una decisione umana esplicita nel flusso B03.

L'assenza di file è uno stato valido della pipeline, ma mantiene B03 non utilizzabile finché non viene aggiunto almeno un pacchetto disciplinare reale.
