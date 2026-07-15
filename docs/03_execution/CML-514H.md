# CML-514H — Proposta Prototipazione per Tecnologia Secondaria

## Obiettivo

Trasformare la quarta integrazione prioritaria emersa dal crosswalk Milani in una proposta docente `.cml`, senza modificare direttamente il curricolo canonico.

## Unità coinvolte

- `tec_sec_1_001` — Disegno, rappresentazione e progettazione, classe prima;
- `tec_sec_2_001` — Materiali e trasformazioni, classe seconda.

## Contenuti proposti

- analisi di un bisogno;
- definizione di vincoli e requisiti;
- schizzi, disegni in scala e modello;
- scelta motivata dei materiali;
- realizzazione di un prototipo;
- prove, verifiche e iterazioni;
- documentazione delle modifiche;
- valutazione di funzionalità, sicurezza e sostenibilità.

## Decisioni di modellazione

- nessuna nuova unità canonica viene creata;
- la classe prima collega disegno tecnico e modello;
- la classe seconda collega materiali, ciclo produttivo e prototipo funzionale;
- `id` e `unitaId` coincidono per garantire la tracciabilità degli esiti;
- il blocco `counts` usa le chiavi del contratto `.cml` v1;
- le decisioni dipartimentali restano `null`.

## Governance

Il Dipartimento deve definire:

- complessità dei prototipi;
- materiali e strumenti ammessi;
- norme di sicurezza;
- distribuzione tra classe prima e seconda;
- criteri per funzionalità, sostenibilità e documentazione.

## Confini

- nessuna modifica a `tecnologia.normalized.json`;
- nessuna modifica runtime;
- nessuna approvazione precompilata;
- nessuna importazione automatica;
- nessun backend o servizio remoto;
- validazione umana obbligatoria.

## Verdetto atteso

`CML_514H_PROTOTYPING_SECONDARY_TEACHER_PROPOSAL_READY_NO_CANONICAL_DATA_CHANGED`
