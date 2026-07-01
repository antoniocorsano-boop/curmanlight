# CML-UX-NON-TECHNICAL-USER-EXPERIENCE-AUDIT

## Sintesi esecutiva
Audit completato su UI ordinaria con focus su lessico tecnico percepito da utenti scolastici non specialisti.

Esito:
- presenza diffusa di termini tecnici in Home, Programmazione annuale, Libreria UDA, Processo, Esportazioni;
- criticita piu alta su esposizione di chiavi interne e riferimenti a schema/storage;
- richiesta una slice runtime di solo microcopy, senza nuove funzionalita.

## Evidenze puntuali
- Home mostra riferimento diretto a file .cml e lessico "codice operativo".
- Programmazione annuale e Libreria UDA espongono chiavi interne cml_* e testo tecnico su export/import/schema.
- UDA/Revisione usano "Markdown" come etichetta primaria.
- Processo dipartimento/referente usa "Importa" e riferimento estensione .cml senza mediazione lessicale.
- Esportazioni enfatizza formati tecnici prima del compito utente.

## Tabella problemi (estratto operativo)
| Area | Testo attuale | Severita | Impatto | Azione | Proposta |
|---|---|---|---|---|---|
| Home | Esporta il file .cml | P1 | distanza cognitiva | rinominare | Scarica file di lavoro CurManLight |
| Home | azioni protette sotto codice operativo | P1 | sfiducia/linguaggio non scolastico | sostituire | azioni riservate ai ruoli autorizzati |
| Programmazione | chiave cml_annual_planning_draft_v1 | P0 | esposizione dettaglio interno | nascondere | bozza salvata sul dispositivo |
| Programmazione | export/import e schema .cml | P0 | tecnicita non necessaria | spostare in report | non cambia il documento ufficiale |
| Libreria UDA | Anteprima/Copia/Scarica Markdown | P1 | comprensione parziale | rinominare | Anteprima/Copia/Scarica testo modificabile |
| Libreria UDA | chiave cml_uda_smart_library_v1 | P0 | esposizione infrastruttura interna | nascondere | bozze sul dispositivo |
| Processo | Importa proposte/esiti + .cml | P1 | azione poco guidata | rinominare | Carica proposte/esiti ricevuti |
| Esportazioni | elenco formati tecnici in primo piano | P1 | orientamento per formato, non per compito | riordinare | Scarica documento, Scarica testo, Scarica file di lavoro |

## Parti tecniche da nascondere dalla UI ordinaria
- chiavi interne cml_*.
- riferimenti a schema/import-export tecnico.
- dettagli su formato json e segnali implementativi.
- terminologia da QA/dev (validator, shape, hash, endpoint, commit, branch, deploy, smoke).

## Testi da riscrivere con priorita
1. Privacy/info box Programmazione annuale.
2. Intro + privacy box Libreria UDA smart.
3. Etichette Markdown nelle aree UDA/Revisione/Esportazioni.
4. Micro-guida Home su file .cml.
5. Processo dipartimento/referente: da "Importa" a "Carica file ricevuto".

## Rischi se non si interviene
- riduzione fiducia percepita da parte dei docenti.
- aumento errori operativi per incomprensione lessicale.
- dipendenza dal supporto del referente anche per operazioni semplici.
- maggiore distanza tra esperienza didattica e percezione "strumento tecnico".

## Proposta di prossima slice
Nome consigliato:
- CML-UX-NON-TECHNICAL-COPY-RUNTIME-MICROFIX

Perimetro:
- solo microcopy e helper UI;
- nessuna modifica logica;
- validazione rapida con smoke test linguistico per Home, Programmazione, UDA, Processo, Esportazioni.

## Decisione
- Audit approvato.
- Necessaria una slice runtime successiva dedicata alla semplificazione linguistica.
- In questa slice: nessuna modifica runtime.

## Verdict
CML_UX_NON_TECHNICAL_USER_EXPERIENCE_AUDIT_READY_LOCAL_NOT_PUSHED
