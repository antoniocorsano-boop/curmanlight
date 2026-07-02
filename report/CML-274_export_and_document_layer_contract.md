# CML-274 EXPORT AND DOCUMENT LAYER CONTRACT — Report

## Sintesi

CML-274 formalizza l'Export and Document Layer come layer che organizza i documenti per scopo: istituzionali, di revisione, didattici, file `.cml`, backup e report di avanzamento.

## Stato di partenza

- repository allineato in partenza;
- CML-273 gia consolidata localmente;
- nessuna modifica runtime richiesta per questa slice;
- focus esclusivo su documentazione architetturale.

## Decisione architetturale

L'esportazione non parte dal formato. Parte dal documento da produrre e dallo stato della fonte.

- CML-065 definisce il modello base.
- CML-267 definisce l'ambiente professionale.
- CML-268 definisce l'ingresso.
- CML-269 definisce il contesto.
- CML-270 definisce l'applicabilita.
- CML-271 definisce l'allineamento.
- CML-272 definisce la revisione.
- CML-273 definisce la didattica.
- CML-274 definisce la produzione documentale e l'esportazione.

## Contenuti fissati

- tipi di documento;
- relazione tra documento esportato e stato della fonte;
- distinzione tra ufficiale, lavoro e operativo;
- regole per documenti istituzionali, di revisione e didattici;
- regole per i file `.cml`;
- backup e report di avanzamento;
- avvertenze per materiale non validato;
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

`CML_274_EXPORT_AND_DOCUMENT_LAYER_CONTRACT_READY_LOCAL_NOT_PUSHED`
