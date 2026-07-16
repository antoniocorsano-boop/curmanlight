# CML-518D — Department Conflict Guard

## Obiettivo

Bloccare l'esportazione di esiti dipartimentali che contengono più decisioni positive sulla stessa unità.

## Modifiche

- raggruppamento per disciplina, ordine, anno scolastico e unità;
- rilevazione di più decisioni `accettata` o `modificata` nello stesso gruppo;
- conteggio visibile dei conflitti;
- messaggio operativo nella coda;
- export disabilitato fino alla risoluzione;
- controllo duplicato nel builder del file per evitare bypass della UI.

## Confini

- schema `.cml` invariato;
- runtime storico invariato;
- dati curricolari canonici invariati;
- nessun backend o telemetria;
- validazione umana obbligatoria.

## Criterio di accettazione

Ogni unità può avere al massimo una decisione positiva nell'esito esportato.

## Verdetto

`CML_518D_DEPARTMENT_CONFLICT_GUARD_READY_FOR_CI_NO_CANONICAL_CHANGE`
