# CML-273 DIDACTICS LAYER CONTRACT — Report

## Sintesi

CML-273 formalizza il Didactics Layer come traduzione operativa del curricolo: programmazione annuale, UDA, attivita, materiali, rubriche, griglie e competenze restano legati alla base curricolare dichiarata.

## Stato di partenza

- repository allineato in partenza;
- CML-272 gia consolidata localmente;
- nessuna modifica runtime richiesta per questa slice;
- focus esclusivo su documentazione architetturale.

## Decisione architetturale

La didattica non e un secondo ambiente. E il livello operativo del curricolo applicabile.

- CML-065 definisce il modello base.
- CML-267 definisce l'ambiente professionale.
- CML-268 definisce l'ingresso.
- CML-269 definisce il contesto.
- CML-270 definisce l'applicabilita.
- CML-271 definisce l'allineamento.
- CML-272 definisce il processo di revisione.
- CML-273 definisce il lavoro didattico che usa quei livelli.

## Contenuti fissati

- curricolo applicabile;
- competenze;
- programmazione annuale;
- UDA;
- attivita e materiali operativi;
- rubriche e griglie;
- stato istituzionale della base curricolare usata;
- messaggi concettuali;
- criteri di accessibilita e accettazione per futura runtime slice.

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

`CML_273_DIDACTICS_LAYER_CONTRACT_READY_LOCAL_NOT_PUSHED`
