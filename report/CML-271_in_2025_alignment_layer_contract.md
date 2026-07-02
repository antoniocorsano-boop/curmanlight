# CML-271 IN 2025 ALIGNMENT LAYER CONTRACT — Report

## Sintesi

CML-271 formalizza l'IN 2025 Alignment Layer come strato che separa con rigore il curricolo vigente dalle proposte di adeguamento e dai materiali in vari stati di validazione.

## Stato di partenza

- repository allineato in partenza;
- CML-270 già consolidata localmente;
- nessuna modifica runtime richiesta per questa slice;
- focus esclusivo su documentazione architetturale.

## Decisione architetturale

L'allineamento non è un sinonimo di applicabilità. È lo stato del contenuto rispetto al percorso verso il quadro istituzionale.

- CML-065 definisce il modello base.
- CML-267 definisce l'ambiente professionale.
- CML-268 definisce l'ingresso.
- CML-269 definisce il contesto.
- CML-270 definisce l'applicabilità.
- CML-271 definisce l'allineamento IN 2025.

## Contenuti fissati

- stati del layer;
- separazione tra vigente, proposta e validato;
- relazione con curricolo vigente;
- relazione con processo di revisione;
- relazione con Applicability Layer;
- impatto su progettazione, UDA ed esportazioni;
- messaggi concettuali;
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

`CML_271_IN_2025_ALIGNMENT_LAYER_CONTRACT_READY_LOCAL_NOT_PUSHED`
