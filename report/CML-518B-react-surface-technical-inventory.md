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

## Contratti `.cml`

| Capacità | Evidenza |
|---|---|
| Parser e serializzazione condivisa | `curman-react/src/lib/cml.ts` |
| `teacher_proposal.cml` | contratto e flusso Docente |
| `department_outcome.cml` | contratto e flusso Dipartimento |
| `referent_validation.cml` | contratto e flusso Referente |
| Round-trip | CML-505, CML-506 e libreria consolidata CML-516 |

## Test e workflow

| Verifica | Evidenza |
|---|---|
| CI React | workflow React CI del repository |
| Regressione swarm | `.github/workflows/cml-517e-regression-swarm.yml` |
| Protocollo sintetico | CML-517A → CML-517E |
| Confronto umano/sintetico | CML-517D |

## Gap ancora da mappare puntualmente

1. file esatti delle superfici Dipartimento;
2. file esatti delle superfici Referente;
3. test unitari e browser associati a ciascuna capacità;
4. workflow specifici oltre React CI e CML-517E;
5. percorsi di backup, ripristino e archivio locale;
6. gestione dei casi `.cml` malformati, duplicati o incompatibili;
7. copertura accessibilità e mobile per singola superficie.

## Decisione operativa

L’inventario non assegna lo stato `completa` sulla sola presenza di una vista. Ogni capacità deve risultare collegata almeno a:

- superficie utente;
- stato o persistenza, se necessari;
- parser o contratto di trasferimento, se applicabile;
- test o workflow verificabile;
- limite residuo esplicito.

`CML_518B_REACT_SURFACE_TECHNICAL_INVENTORY_STARTED_WITH_VERIFIED_CORE_PATHS`
