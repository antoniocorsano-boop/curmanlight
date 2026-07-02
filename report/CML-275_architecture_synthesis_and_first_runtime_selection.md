# CML-275 ARCHITECTURE SYNTHESIS AND FIRST RUNTIME SELECTION — Report

## Sintesi

CML-275 chiude la fase di definizione dei layer principali con una sintesi architetturale e con la selezione del primo runtime minimo ad alto valore: Home/cruscotto, modale minimo, discipline secondarie.

## Stato di partenza

- repository allineato in partenza;
- CML-274 gia consolidata localmente;
- nessuna modifica runtime richiesta per questa slice;
- focus esclusivo su sintesi e selezione.

## Decisione architetturale

Il sistema ha ora una visione completa: ambiente, ingresso, contesto, applicabilita, allineamento, revisione, didattica e documenti.

La prima runtime selection deve rendere visibile questo cambio di visione, senza introdurre rischio sui dati o sullo schema.

## Contenuti fissati

- visione operativa consolidata;
- incoerenza principale dell'interfaccia attuale;
- criterio di selezione del primo runtime;
- valutazione dei candidati;
- raccomandazione finale;
- criteri di accettazione per una futura runtime slice.

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

`CML_275_ARCHITECTURE_SYNTHESIS_AND_FIRST_RUNTIME_SELECTION_READY_LOCAL_NOT_PUSHED`
