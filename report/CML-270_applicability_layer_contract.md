# CML-270 APPLICABILITY LAYER CONTRACT — Report

## Sintesi

CML-270 formalizza l'Applicability Layer come strato che risponde alla domanda istituzionale fondamentale: quale curricolo vale per una specifica classe in un determinato anno scolastico.

## Stato di partenza

- repository allineato in partenza;
- CML-269 già consolidata localmente;
- nessuna modifica runtime richiesta per questa slice;
- focus esclusivo su documentazione architetturale.

## Decisione architetturale

L'applicability layer non è un filtro UI generico. È la regola istituzionale che collega curricolo, anno, classe, stato e note operative.

- CML-065 definisce il modello base.
- CML-267 definisce l'ambiente professionale.
- CML-268 definisce l'ingresso.
- CML-269 definisce il contesto.
- CML-270 definisce l'applicabilità.

## Contenuti fissati

- definizione del layer;
- domanda guida;
- matrice anno scolastico × classe;
- granularità per disciplina;
- stati di applicabilità;
- relazione con Work Context Layer;
- relazione con curricolo vigente e IN 2025;
- impatto su progettazione, UDA ed esportazioni;
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

`CML_270_APPLICABILITY_LAYER_CONTRACT_READY_LOCAL_NOT_PUSHED`
