# CML-518C — Teacher Export Freshness Guard

## Obiettivo

Chiudere un gap concreto del flusso Docente: impedire che una bozza modificata ma non ancora salvata venga esportata usando silenziosamente la precedente versione persistita.

## Baseline

- `main`: `a4c477c2a0b41fb23946a4546125242633ee2e1f`
- baseline evolutiva: `curman-react/`
- runtime storico: invariato
- dati curricolari canonici: invariati

## Problema verificato

`TeacherProposalDraftEditor` consentiva l’esportazione ogni volta che esisteva una bozza salvata. Dopo ulteriori modifiche ai campi, il pulsante restava attivo e `handleExport()` utilizzava ancora l’oggetto persistito `existing`, producendo quindi un file `.cml` non corrispondente ai valori mostrati nell’editor.

## Modifica

- introdotto stato derivato `isDirty` confrontando editor e bozza persistita;
- esportazione consentita solo quando la versione mostrata coincide con quella salvata;
- pulsante export disabilitato in presenza di modifiche non salvate;
- messaggio accessibile che richiede il salvataggio prima dell’export;
- badge distinto tra `Bozza salvata` e `Modifiche non salvate`;
- salvataggio disabilitato quando non esistono variazioni;
- nessuna modifica al contratto `.cml` o agli store.

## Criteri di accettazione

1. una bozza salvata e invariata è esportabile;
2. dopo qualsiasi modifica, l’export è disabilitato;
3. l’utente riceve un’indicazione esplicita sul salvataggio necessario;
4. dopo il salvataggio, l’export torna disponibile;
5. il file esportato corrisponde sempre alla versione persistita e mostrata;
6. nessuna modifica automatica del curricolo canonico.

## Confini

- nessun backend o telemetria;
- nessuna modifica al runtime storico;
- nessuna modifica ai dati curricolari;
- nessuna modifica allo schema `.cml`;
- nessun merge o deploy manuale in questa fase.

## Verdetto

`CML_518C_TEACHER_EXPORT_FRESHNESS_GUARD_READY_FOR_REMOTE_VALIDATION_NO_CANONICAL_CHANGE`
