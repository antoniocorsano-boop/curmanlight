# CML-518E — Referent Completeness Guard

## Obiettivo

Impedire l’esportazione di una validazione Referente parziale quando uno o più esiti selezionati non hanno ancora una decisione.

## Problema

La precedente implementazione consentiva di esportare solo gli elementi già validati e di escludere silenziosamente quelli pendenti. La UI comunicava ancora "N esiti ancora senza validazione saranno esclusi", in contrasto con il nuovo comportamento di blocco.

## Soluzione

- readiness completa solo con almeno una validazione e zero pendenti;
- controllo nel builder contro bypass della UI;
- `pendingExcluded: 0`;
- messaggio UI coerente con tre stati (nessuna validazione, validazioni pendenti, tutte complete);
- export disabilitato finché tutte le validazioni non sono complete;
- messaggio di avanzamento con `role="status"`;
- test mirati.

## Modifiche

- `curman-react/src/lib/referentValidationExport.ts` (guardia già presente sul branch remoto, verificata invariata);
- `curman-react/src/components/referente/ReferentValidationExportPanel.tsx` (messaggistica UI e testo introduttivo);
- `curman-react/tools/check-cml518e-referent-completeness-guard.mjs` (test mirato);
- `curman-react/package.json` (script `test:cml518e`).

## Casi coperti dal test

1. zero validazioni: `ready === false`;
2. una validazione su due esiti: `validated === 1`, `pending === 1`, `ready === false`;
3. tutte complete: `pending === 0`, `ready === true`;
4. builder con validazione parziale: solleva errore;
5. builder completo: file valido, `checks.pendingExcluded === 0`, `humanValidationRequired === true`, summary coerente.

## Invarianti

- schema `.cml` invariato;
- runtime storico invariato;
- dati curricolari canonici invariati;
- nessun backend;
- nessuna telemetria;
- validazione umana obbligatoria.

## Verdetto atteso

`CML_518E_REFERENT_COMPLETENESS_GUARD_READY_FOR_REVIEW_NO_CANONICAL_CHANGE`
