# CML-269 WORK CONTEXT LAYER CONTRACT — Report

## Sintesi

CML-269 formalizza il Work Context Layer come strato che tiene insieme ruolo, anno scolastico, classe, disciplina opzionale, versione curricolare, modalità d'uso e ultimo percorso aperto, distinguendo chiaramente consultazione libera e contesto impostato.

## Stato di partenza

- repository allineato in partenza;
- CML-268 già consolidata localmente;
- nessuna modifica runtime richiesta per questa slice;
- focus esclusivo su documentazione architetturale.

## Decisione architetturale

Il contesto non è una nuova area del prodotto. È lo strato che rende coerenti le aree già definite.

- CML-065 definisce il modello base Curriculum / Didattica.
- CML-267 definisce l'ambiente curricolare professionale.
- CML-268 definisce il cruscotto.
- CML-269 definisce il contesto operativo di lavoro.

## Contenuti fissati

- definizione del Work Context Layer;
- differenza tra consultazione libera e contesto impostato;
- campi del contesto;
- ruoli previsti;
- relazione tra contesto e aree;
- regole di persistenza locale non sensibile;
- messaggi UI;
- criteri di accessibilità;
- criteri di accettazione per futura runtime slice.

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

`CML_269_WORK_CONTEXT_LAYER_CONTRACT_READY_LOCAL_NOT_PUSHED`
