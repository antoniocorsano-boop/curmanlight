# CML-272 REVISION PROCESS LAYER CONTRACT — Report

## Sintesi

CML-272 formalizza il Revision Process Layer come percorso istituzionale che attraversa proposta, confronto, verifica, validazione, approvazione, applicabilità e archiviazione.

## Stato di partenza

- repository allineato in partenza;
- CML-271 già consolidata localmente;
- nessuna modifica runtime richiesta per questa slice;
- focus esclusivo su documentazione architetturale.

## Decisione architetturale

La revisione non è un generico flusso UI. È un processo istituzionale con ruoli, atti, stati e messaggi di cautela.

- CML-065 definisce il modello base.
- CML-267 definisce l'ambiente professionale.
- CML-268 definisce il cruscotto.
- CML-269 definisce il contesto.
- CML-270 definisce l'applicabilità.
- CML-271 definisce l'allineamento IN 2025.
- CML-272 definisce il processo di revisione.

## Contenuti fissati

- ruoli operativi;
- azioni consentite per ruolo;
- documenti attesi per fase;
- passaggi del processo;
- stati di avanzamento;
- relazione tra proposta, validazione, approvazione e applicabilità;
- messaggi di cautela;
- criteri per futura interfaccia runtime.

## Controlli richiesti

- `git status` iniziale
- `git diff --name-only`
- `git diff --check`
- verifica docs-only
- validatore curriculum
- shape test runtime
- secret scan base sui file modificati
- commit locale con messaggio previsto

## Invarianti

- runtime invariato
- schema `.cml` invariato
- storage invariato
- export/import invariati
- nessun deploy
- nessun push

## Verdict

`CML_272_REVISION_PROCESS_LAYER_CONTRACT_READY_LOCAL_NOT_PUSHED`
