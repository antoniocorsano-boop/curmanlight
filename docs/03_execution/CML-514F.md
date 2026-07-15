# CML-514F — Proposta Economia circolare per Tecnologia Primaria

## Obiettivo

Trasformare la seconda integrazione prioritaria emersa dal crosswalk Milani in una proposta docente `.cml`, senza modificare direttamente il curricolo canonico.

## Unità coinvolte

- `tec_pri_2_001` — Materiali e trasformazioni, classe seconda;
- `tec_pri_4_001` — Energia e sostenibilità, classe quarta.

## Contenuti proposti

- distinzione tra materiale vergine, riciclato e riutilizzato;
- scelta dei materiali in base a proprietà, durata e recuperabilità;
- ciclo di vita essenziale di materiali e manufatti;
- distinzione tra riduzione, riuso, riparazione, riciclo e recupero;
- progettazione di un semplice oggetto o comportamento secondo criteri di economia circolare;
- motivazione delle scelte effettuate.

## Decisioni di modellazione

- nessuna nuova unità canonica viene creata;
- la proposta coordina due unità già esistenti;
- la classe seconda introduce proprietà, trasformazioni e riuso;
- la classe quarta sviluppa ciclo di vita, sostenibilità e progettazione;
- il Dipartimento deve decidere la distribuzione effettiva per classe;
- il raccordo con Educazione civica resta esplicito ma non sostituisce la disciplina Tecnologia.

## Compatibilità del file

Il file include il blocco `counts` richiesto dal workflow pubblicato e mantiene `decisione: null` per entrambe le proposte, così il contenuto resta importabile come proposta docente non ancora deliberata.

## Governance

Il file mantiene:

- ruolo `teacher`;
- `humanValidationRequired: true`;
- decisioni non concluse;
- note dipartimentali;
- fonte d'istituto tracciata;
- nessuna precompilazione dell'esito del Dipartimento o della validazione del Referente.

## Confini

- nessuna modifica a `tecnologia.normalized.json`;
- nessuna modifica runtime;
- nessuna importazione automatica;
- nessun backend o servizio remoto;
- nessuna dichiarazione di approvazione formale.

## Verdetto atteso

`CML_514F_CIRCULAR_ECONOMY_PRIMARY_TEACHER_PROPOSAL_READY_NO_CANONICAL_DATA_CHANGED`
