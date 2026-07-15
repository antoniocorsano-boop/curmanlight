# CML-514J — Proposta Riassunto, riscrittura e revisione per Italiano

## Obiettivo

Trasformare una seconda integrazione prioritaria del crosswalk Milani in una proposta docente `.cml`, senza modificare direttamente il curricolo canonico di Italiano.

## Unità coinvolte

- `ita_pri_4_001` — Produzione scritta e ortografia, classe quarta Primaria;
- `ita_sec_2_001` — Produzione scritta e riscrittura, classe seconda Secondaria.

## Contenuti proposti

- selezione delle informazioni essenziali;
- costruzione di scalette;
- riassunto con parole proprie;
- parafrasi e riscrittura da testi-modello;
- variazione di punto di vista, destinatario, registro o forma;
- revisione guidata e autonoma;
- confronto tra prima e seconda versione;
- motivazione delle modifiche apportate.

## Decisioni di modellazione

- nessuna nuova unità canonica viene creata;
- la proposta amplia due unità esistenti;
- le attività restano graduate per ordine e classe;
- quantità, lunghezza dei testi e rubriche non sono predefinite;
- gli strumenti digitali restano una possibilità didattica, non un obbligo;
- le esigenze di accessibilità devono essere definite dal Dipartimento.

## Contratto e governance

Il file mantiene:

- formato `teacher_proposal` versione 1;
- blocco `counts` con chiavi `total`, `ok`, `modifica`, `nuovo`;
- identificativi stabili `id` e `unitaId`;
- `decisione: null`;
- `humanValidationRequired: true`;
- fonte d'istituto e note dipartimentali tracciate.

## Confini

- nessuna modifica a `italiano.normalized.json`;
- nessuna modifica runtime;
- nessuna importazione automatica;
- nessuna approvazione precompilata;
- nessun backend o servizio remoto.

## Verdetto atteso

`CML_514J_ITALIAN_SUMMARY_REWRITING_TEACHER_PROPOSAL_READY_NO_CANONICAL_DATA_CHANGED`
