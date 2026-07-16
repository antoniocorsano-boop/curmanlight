# CML-518B — Inventario tecnico verificato delle superfici React

## Stato

IN CORSO — SECONDO LOTTO COMPLETATO.

## Obiettivo

Verificare il perimetro React collegando ogni capacità dichiarata a componenti, store, parser, persistenza, test e workflow effettivi.

## Baseline

- `main`: `e3c02cbcf5f3de90fc3f1f1b7f80b7607a6d9b53`;
- branch: `codex/cml-518b-react-surface-inventory`;
- CML-518A integrata;
- runtime storico e dati curricolari canonici invariati;
- PR di lavoro: #140, draft.

## Output

`report/CML-518B-react-surface-technical-inventory.md`

## Percorsi verificati

### Trasversali e Docente

- routing, layout, sidebar, header e contesto;
- consultazione curricolare;
- proposta docente, revisione ed export;
- programmazione annuale e UDA;
- duplicazione documenti;
- parser condiviso `.cml`.

### Dipartimento

- `TeacherProposalMultiImport.tsx`;
- `teacherProposalImport.ts`;
- `useDepartmentQueueStore`;
- coda e decisione dipartimentale;
- `departmentOutcomeExport.ts`.

### Referente

- `DepartmentOutcomeImport.tsx`;
- `departmentOutcomeImport.ts`;
- `useReferentValidationStore`;
- `roleAccess.ts`;
- `ReferentValidationExportPanel.tsx`;
- `referentValidationExport.ts`.

### Persistenza e recovery

- `ArchivioLocaleView.tsx`;
- `localArchive.ts`;
- `localBackup.ts`;
- creazione, preview e ripristino backup;
- feedback esplicito per errori e conferma prima del ripristino.

## Risultato del secondo lotto

- superfici Dipartimento e Referente mappate puntualmente;
- import/export `.cml` collegati ai parser effettivi;
- persistenza locale e fingerprint verificati;
- archivio, backup e restore collegati ai file reali;
- matrice completa/parziale/mancante aggiornata;
- nessuna modifica al comportamento applicativo.

## Lavoro residuo

1. associare i test esatti ai singoli componenti e store;
2. inventariare i workflow specifici oltre React CI e CML-517E;
3. verificare accessibilità e mobile per superficie;
4. consolidare i casi avversariali `.cml`;
5. rieseguire CI e review del diff documentale;
6. aggiornare la PR e decidere il passaggio da draft a ready.

## Confini

Slice documentale e di audit tecnico. Nessuna modifica al comportamento React, al runtime storico o ai dati canonici. Nessun backend, telemetria o approvazione automatica.

## Verdetto corrente

`CML_518B_SECOND_INVENTORY_LOT_COMPLETE_CORE_ROLES_RECOVERY_AND_CML_CONTRACTS_VERIFIED`