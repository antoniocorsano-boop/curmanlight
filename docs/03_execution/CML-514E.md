# CML-514E — Proposta strutturata “Intelligenza artificiale consapevole”

## Obiettivo

Trasformare la proposta prioritaria P4 emersa dal crosswalk Tecnologia Milani ↔ CurManLight in un artefatto compatibile con il flusso Docente → Dipartimento → Referente, senza modificare direttamente il curricolo canonico.

## Artefatto

`docs/04_user/esempi_cml/proposta_ia_consapevole_tecnologia.cml`

Il file usa il contratto `teacher_proposal` versione `1.0` e contiene due proposte coordinate:

1. estensione di `tec_sec_3_001` — programmazione e automazione;
2. estensione di `tec_sec_3_002` — cittadinanza tecnologica.

## Contenuti introdotti

- distinzione tra procedura programmata e sistema basato su dati e modelli;
- schema input → elaborazione → output → verifica umana;
- qualità e provenienza dei dati;
- errori, limiti e bias;
- confronto con fonti attendibili;
- privacy e diritto d’autore;
- dichiarazione dell’uso dell’IA;
- responsabilità dell’utilizzatore;
- documentazione delle verifiche svolte.

## Decisione di modellazione

La proposta non crea una nuova unità canonica. Estende due unità esistenti perché:

- gli aspetti procedurali appartengono a `tec_sec_3_001`;
- gli aspetti etici, critici e di cittadinanza appartengono a `tec_sec_3_002`;
- il Dipartimento può accettare, respingere, modificare o rinviare separatamente le due parti;
- il Referente mantiene la validazione finale esterna al file docente.

## Garanzie

- `humanValidationRequired: true`;
- nessuna decisione dipartimentale precompilata;
- nessun `testoFinale` imposto;
- nessuna modifica a `tecnologia.normalized.json`;
- nessuna modifica runtime;
- nessuna importazione automatica;
- fonte Milani dichiarata come fonte d’istituto candidata, non come norma certificata.

## Criterio di accettazione

Il file deve poter essere usato come esempio realistico e come input del processo locale, mantenendo chiaramente separati proposta docente, decisione dipartimentale e validazione del Referente.

## Verdetto atteso

`CML_514E_AI_AWARENESS_TEACHER_PROPOSAL_READY_NO_CANONICAL_DATA_CHANGED`
