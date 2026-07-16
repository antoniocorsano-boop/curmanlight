# CML-518B — Inventario tecnico verificato delle superfici React

## Scopo

Collegare le capacità dichiarate della baseline React ai file effettivi che le implementano o le verificano, senza modificare comportamento, runtime storico o dati curricolari canonici.

## Baseline verificata

- branch di lavoro: `codex/cml-518b-react-surface-inventory`;
- baseline: `main` a `e3c02cbcf5f3de90fc3f1f1b7f80b7607a6d9b53`;
- baseline evolutiva: `curman-react/`;
- runtime storico: fallback invariato;
- persistenza applicativa: locale nel browser;
- validazione umana: obbligatoria.

## Superfici trasversali

| Capacità | Superficie principale | Stato tecnico | Evidenza verificata |
|---|---|---|---|
| Routing e composizione applicativa | `curman-react/src/App.tsx` | presente | registra e seleziona le viste React |
| Layout generale | `curman-react/src/components/layout/Layout.tsx` | presente | shell applicativa |
| Navigazione laterale | `curman-react/src/components/layout/Sidebar.tsx` | presente | accesso alle superfici per ruolo e funzione |
| Header e contesto | `curman-react/src/components/layout/Header.tsx` | presente | contesto corrente e azioni trasversali |
| Stato applicativo condiviso | `curman-react/src/stores/useAppStore.ts` | presente | profilo, disciplina selezionata e stato globale |
| Profilo e contesto | `curman-react/src/views/ProfiloView.tsx` | presente | configurazione del contesto |
| Home contestuale | `curman-react/src/views/HomeView.tsx` | presente | orientamento e accesso ai flussi |
| Impostazioni locali | `curman-react/src/views/ImpostazioniView.tsx` | presente | configurazione e opzioni locali |

## Consultazione del curricolo

| Capacità | Superficie | Supporto | Stato |
|---|---|---|---|
| Consultazione unità | `curman-react/src/views/ConsultazioneView.tsx` | `curman-react/src/components/curriculum/UnitaCard.tsx` | completa tecnica |
| Selezione disciplina | `useAppStore.ts` e layout | dati curricolari canonici | completa tecnica |
| Stato, fonti e dettaglio | `ConsultazioneView.tsx` / `UnitaCard.tsx` | dati normalizzati | da validare con utenti reali |

## Docente

| Capacità | Superficie principale | Supporto tecnico | Stato |
|---|---|---|---|
| Creazione proposta | `curman-react/src/components/proposte/TeacherProposalDraftEditor.tsx` | `useAppStore.ts` | completa tecnica |
| Revisione proposta | `curman-react/src/views/RevisioneView.tsx` | componenti proposta | completa tecnica |
| Esportazioni | `curman-react/src/views/EsportazioniView.tsx` | `curman-react/src/lib/cml.ts` | completa tecnica |
| Programmazione annuale | `curman-react/src/views/ProgrammazioneAnnualeView.tsx` | persistenza locale contestuale | completa tecnica |
| UDA essenziale | `curman-react/src/views/UdaEssenzialeView.tsx` | persistenza locale e dati curricolari | completa tecnica |
| Duplicazione documenti | `curman-react/src/components/didattica/DuplicateDocumentPanel.tsx` | documenti didattici locali | completa tecnica |

## Dipartimento

| Capacità | Superficie principale | Store/parser | Stato e limite residuo |
|---|---|---|---|
| Import multiplo proposte docente | `curman-react/src/components/dipartimento/TeacherProposalMultiImport.tsx` | `curman-react/src/lib/teacherProposalImport.ts`, `useDepartmentQueueStore` | completa tecnica; utenti reali devono verificare messaggi e gestione dei duplicati |
| Verifica file validi, duplicati e non validi | `TeacherProposalMultiImport.tsx` | parser `.cml` e fingerprint di import | completa tecnica |
| Coda dipartimentale | componenti `curman-react/src/components/dipartimento/` | `useDepartmentQueueStore` | completa tecnica; priorità e casi conflittuali restano da pilotare |
| Decisione dipartimentale | flusso CML-499→500 | store della coda | completa tecnica; motivazioni e fusione di proposte complesse restano parziali |
| Export `department_outcome.cml` | `curman-react/src/lib/departmentOutcomeExport.ts` | tipi e parser condivisi | completa tecnica |

L’import multiplo opera interamente nel browser, accetta file `.cml`, separa validi, duplicati e non validi, e aggiunge alla coda soltanto le proposte valide non già presenti.

## Referente

| Capacità | Superficie principale | Store/parser | Stato e limite residuo |
|---|---|---|---|
| Import esiti dipartimentali | `curman-react/src/components/referente/DepartmentOutcomeImport.tsx` | `curman-react/src/lib/departmentOutcomeImport.ts` | completa tecnica |
| Controllo accesso operativo | `DepartmentOutcomeImport.tsx` | `curman-react/src/lib/roleAccess.ts` | presente; non equivale ad autenticazione |
| Validazione confermata/respinta/sospesa | `DepartmentOutcomeImport.tsx` | `useReferentValidationStore` | completa tecnica; comprensione del ruolo da pilotare |
| Persistenza validazioni locali | `useReferentValidationStore` | fingerprint esito + proposal ID | completa tecnica |
| Export `referent_validation.cml` | `curman-react/src/components/referente/ReferentValidationExportPanel.tsx` | `curman-react/src/lib/referentValidationExport.ts` | completa tecnica |

Il parser `departmentOutcomeImport.ts` verifica schema, ruolo, disciplina, stato completato, obbligo di validazione umana, presenza degli esiti e duplicati interni. L’export Referente include soltanto validazioni locali associate tramite fingerprint e identificativo proposta.

## Archivio, backup e ripristino

| Capacità | Superficie | Supporto | Stato e limite residuo |
|---|---|---|---|
| Inventario locale unificato | `curman-react/src/views/ArchivioLocaleView.tsx` | `curman-react/src/lib/localArchive.ts` | completa tecnica |
| Filtri per tipo | `ArchivioLocaleView.tsx` | annual plan, UDA, proposte, lavori dipartimentali, validazioni Referente | completa tecnica |
| Creazione backup | `ArchivioLocaleView.tsx` | `curman-react/src/lib/localBackup.ts` | completa tecnica |
| Preview backup | `ArchivioLocaleView.tsx` | `parseBackup` | completa tecnica |
| Ripristino con conferma | `ArchivioLocaleView.tsx` | `restoreLocalBackup` | completa tecnica; casi avversariali e comprensione umana da ampliare |
| Feedback errori | `ArchivioLocaleView.tsx` | stati `alert`/`status` | presente |

Il ripristino è distruttivo rispetto agli archivi supportati: sostituisce i dati locali e rimuove quelli non presenti nel backup, ma richiede preview e conferma esplicita prima del reload applicativo.

## Contratti `.cml`

| Capacità | Evidenza | Stato |
|---|---|---|
| Parser e serializzazione condivisa | `curman-react/src/lib/cml.ts` | completa tecnica |
| Tipi contrattuali | `curman-react/src/types/cml.ts` | presente |
| Import `teacher_proposal.cml` | `teacherProposalImport.ts` | completa tecnica |
| Export `department_outcome.cml` | `departmentOutcomeExport.ts` | completa tecnica |
| Import `department_outcome.cml` | `departmentOutcomeImport.ts` | completa tecnica |
| Export `referent_validation.cml` | `referentValidationExport.ts` | completa tecnica |
| Round-trip | CML-505, CML-506 e libreria consolidata CML-516 | completa tecnica |
| File malformati | controlli nei parser di import | copertura presente, da stressare sistematicamente |
| Duplicati | fingerprint e controlli per proposta | copertura presente, casi cross-file da ampliare |

## Test e workflow

| Verifica | Evidenza | Copertura |
|---|---|---|
| CI React | workflow React CI del repository | build e controlli generali |
| Regressione swarm | `.github/workflows/cml-517e-regression-swarm.yml` | scenari sintetici browser |
| Protocollo sintetico | CML-517A → CML-517E | persone sintetiche, scenari ed evidenze |
| Confronto umano/sintetico | CML-517D | contratto di confronto, non pilot umano |
| Contratti `.cml` | CML-505, CML-506, CML-516 | round-trip e libreria esempi |
| Persistenza e recovery | CML-513, CML-514 | archivio, backup e ripristino |

## Classificazione consolidata

### Complete tecniche

- consultazione del curricolo;
- proposta docente ed export;
- programmazione annuale e UDA essenziale;
- import, coda, decisione ed export Dipartimento;
- import, validazione ed export Referente;
- archivio locale, backup e ripristino;
- contratti `.cml` e round-trip;
- regressione browser sintetica.

### Parziali

- comprensione del contesto e dei ruoli;
- gestione umana di duplicati, conflitti e proposte complesse;
- chiarezza delle motivazioni dipartimentali;
- comprensione degli effetti del backup e del ripristino;
- accessibilità completa e uso mobile sui compiti reali;
- stress test sistematico di file incompatibili o avversariali.

### Mancanti o fuori perimetro 1.0

- applicazione automatica delle modifiche al curricolo canonico;
- backend centrale, autenticazione proprietaria e telemetria;
- consolidamento istituzionale completo per Collegio/Consiglio;
- integrazione Drive/Workspace completa.

## Gap residui CML-518B

1. associare i test esatti ai singoli componenti e store;
2. inventariare i workflow specifici oltre React CI e CML-517E;
3. verificare copertura accessibilità e mobile per superficie;
4. classificare in modo puntuale i casi avversariali già coperti e quelli mancanti;
5. eseguire CI e review finale del solo diff documentale.

## Decisione operativa

L’inventario non assegna lo stato `completa` sulla sola presenza di una vista. Ogni capacità deve risultare collegata almeno a superficie utente, stato o persistenza, parser o contratto di trasferimento quando applicabile, verifica riproducibile e limite residuo esplicito.

`CML_518B_REACT_SURFACE_INVENTORY_CORE_ROLES_RECOVERY_AND_CML_CONTRACTS_VERIFIED`