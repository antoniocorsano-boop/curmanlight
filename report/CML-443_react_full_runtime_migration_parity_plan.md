# React Full Runtime Migration — Parity Plan

> CML-443 — Mappatura sistematica della parità tra runtime legacy e candidato React

## Classificazione priorità

| Livello | Significato | Regola per il passaggio |
|---------|-------------|------------------------|
| **P0** | Indispensabile | Obbligatorio prima della sostituzione |
| **P1** | Importante | Blocca solo se manca una decisione formale di rinvio |
| **P2** | Miglioramento | Fuori dalla migrazione di parità |

---

## 1. Navigazione e viste

| ID | Capacità legacy | Evidenza | Stato React | Priorità |
|----|-----------------|----------|-------------|----------|
| NAV-01 | Home con azioni Curriculum/Didattica | home page reindirizzamento | Presente (HomeView.tsx) | P0 |
| NAV-02 | Sidebar navigazione viste | menu laterale sidebar | Presente (Sidebar.tsx) | P0 |
| NAV-03 | Header con breadcrumb | header navigazione | Presente (Header.tsx) | P0 |
| NAV-04 | Vista Consultazione disciplina | tabella unità apprendimento | Presente (ConsultazioneView.tsx) | P0 |
| NAV-05 | Vista Revisione con gap layer | confronto IN2012/IN2025 | Presente (RevisioneView.tsx) | P0 |
| NAV-06 | Vista Processo | flusso fasi approvazione | Presente (ProcessoView.tsx) | P1 |
| NAV-07 | Vista Esportazioni | download .cml | Presente (EsportazioniView.tsx) | P0 |
| NAV-08 | Vista Profilo/Configurazione | impostazioni utente | Presente (ProfiloView.tsx) | P0 |
| NAV-09 | Vista Evidenze e Valutazione | gestione evidenze | Assente | P0 |
| NAV-10 | Vista Programmazione Annuale | piano annuale | Assente | P0 |
| NAV-11 | Vista UDA Modello | modelli UDA | Assente | P0 |
| NAV-12 | Vista Guida | help online | Assente | P2 |
| NAV-13 | Mobile: navigazione compatta | hamburger menu/barra mobile | Parziale | P1 |

---

## 2. Funzioni e azioni utente

| ID | Capacità legacy | Evidenza | Stato React | Priorità |
|----|-----------------|----------|-------------|----------|
| FUN-01 | Selezione disciplina da dropdown | select consultazione/revisione | Presente | P0 |
| FUN-02 | Filtro per ordine scolastico | Infanzia/Primaria/Secondaria | Presente (useFilteredUnita) | P0 |
| FUN-03 | Filtro per nucleo tematico | filtro consultazione | Presente (filterByNucleo) | P0 |
| FUN-04 | Filtro stato revisione | tutti/da decidere/approvati/rifiutati | Presente | P0 |
| FUN-05 | Approvazione proposta IN2025 | approve in revisione | Presente (useRevisioneStore) | P0 |
| FUN-06 | Rifiuto proposta IN2025 | reject in revisione | Presente | P0 |
| FUN-07 | Annullamento decisione | undo decisione | Presente | P0 |
| FUN-08 | Reset decisioni per disciplina | resetDisciplina | Presente | P0 |
| FUN-09 | Reset tutte le decisioni | resetAll | Presente | P0 |
| FUN-10 | Espansione dettaglio unità | onExpand in UnitaCard | Presente | P1 |
| FUN-11 | Esportazione proposta .cml | download proposta docente | Presente (useExportProposal) | P0 |
| FUN-12 | Importazione file .cml | parse e validazione | Presente (useImportCml) | P1 |
| FUN-13 | Backup dati locali | export stato completo | Assente | P0 |
| FUN-14 | Ripristino dati da backup | import stato | Assente | P0 |
| FUN-15 | Auto-salvataggio decisioni | autoSave | Assente | P0 |

---

## 3. Modello dei dati

| ID | Capacità legacy | Evidenza | Stato React | Priorità |
|----|-----------------|----------|-------------|----------|
| DAT-01 | Caricamento dati curricolari da JSON | import.meta.glob('../data/curriculum/*.json') | Presente (useCurriculum.ts) | P0 |
| DAT-02 | Caricamento gap layer | import.meta.glob('../data/gap/*.gap.json') | Presente (useGapLayer.ts) | P0 |
| DAT-03 | Struttura UnitaApprendimento completa | 20+ campi per unità | Presente (types/curriculum.ts) | P0 |
| DAT-04 | Strutture sostanziali | dati curricolari aggiuntivi | Parziale (type definito) | P1 |
| DAT-05 | Progressione verticale | progressione per ordine | Parziale (type definito) | P1 |
| DAT-06 | Decisioni curricolari | scelte di istituto | Parziale (type definito) | P1 |
| DAT-07 | Sync dati da fonte canonica | prebuild sync | Presente (sync-curriculum-data.mjs) | P0 |
| DAT-08 | Dati didattici: evidenze valutazione | modelli valutativi | Assente | P0 |
| DAT-09 | Dati didattici: programmazione annuale | piani annuali | Assente | P0 |
| DAT-10 | Dati didattici: modelli UDA | template UDA | Assente | P0 |

---

## 4. Chiavi di persistenza locale

| ID | Chiave legacy (localStorage) | Funzione | Stato React | Priorità |
|----|------------------------------|----------|-------------|----------|
| PER-01 | `cml_decisioni` | decisioni revisione | Assente (Zustand in memoria) | P0 |
| PER-02 | `cml_profilo` | profilo utente | Assente (Zustand in memoria) | P0 |
| PER-03 | `cml_preferenze` | darkMode, ultimaDisciplina, ecc. | Assente | P0 |
| PER-04 | `cml_backup_*` | backup automatici | Assente | P0 |
| PER-05 | Dati didattici locali | bozze UDA, programmazioni | Assente | P0 |
| PER-06 | Cache service worker | asset offline | Assente | P0 |

---

## 5. Formati di importazione ed esportazione

| ID | Formato | Direzione | Stato React | Priorità |
|----|---------|-----------|-------------|----------|
| CML-01 | `.cml` teacher_proposal | Export | Presente (buildTeacherProposal) | P0 |
| CML-02 | `.cml` teacher_proposal | Import | Presente (parseCmlFile) | P1 |
| CML-03 | `.cml` department_outcome | Export | Assente | P1 |
| CML-04 | `.cml` department_outcome | Import | Presente (parseCmlFile) | P1 |
| CML-05 | Backup JSON completo | Export | Assente | P0 |
| CML-06 | Backup JSON completo | Import | Assente | P0 |
| CML-07 | Compatibilità legacy→React export/import | Round-trip | Non verificata | P0 |
| CML-08 | Compatibilità React→legacy export/import | Round-trip | Non verificata | P0 |

---

## 6. Ruoli e processo decisionale

| ID | Capacità legacy | Evidenza | Stato React | Priorità |
|----|-----------------|----------|-------------|----------|
| ROL-01 | Selezione ruolo (docente/dipartimento/...) | ProfiloUtente.ruolo | Presente | P0 |
| ROL-02 | Filtro per ordine del profilo | ProfiloUtente.ordine | Presente | P0 |
| ROL-03 | Processo a fasi (Proposta→Validazione→Verifica→Approvazione→Applicazione) | ProcessoView | Parziale (solo step 1) | P0 |
| ROL-04 | Visualizzazione stato processo | ProgressBar | Presente | P1 |
| ROL-05 | Transizione tra fasi | passaggio da proposta a validazione | Assente | P0 |

---

## 7. Generazione documenti

| ID | Capacità legacy | Evidenza | Stato React | Priorità |
|----|-----------------|----------|-------------|----------|
| DOC-01 | Proposta docente (.cml) | download file | Presente | P0 |
| DOC-02 | Verbale dipartimento (.cml) | download file | Assente | P1 |
| DOC-03 | Backup stato applicativo | export JSON | Assente | P0 |
| DOC-04 | Report riepilogativo disciplina | visualizzazione progresso | Presente (ProgressBar) | P1 |
| DOC-05 | Report comparativo (prima/dopo) | gap comparison | Presente (GapComparison) | P1 |

---

## 8. Didattica e progettazione

| ID | Capacità legacy | Evidenza | Stato React | Priorità |
|----|-----------------|----------|-------------|----------|
| DID-01 | Evidenze di valutazione per disciplina | schede valutazione | Assente | P0 |
| DID-02 | Programmazione annuale editabile | piano annuale | Assente | P0 |
| DID-03 | Modello UDA con campi strutturati | template UDA | Assente | P0 |
| DID-04 | Libreria UDA smart (salvataggio/recupero) | bozze UDA | Assente | P0 |
| DID-05 | Esportazione UDA | formato documento | Assente | P0 |

---

## 9. PWA, manifest, cache e service worker

| ID | Capacità legacy | Evidenza | Stato React | Priorità |
|----|-----------------|----------|-------------|----------|
| PWA-01 | Service worker per offline | sw.js | Assente | P0 |
| PWA-02 | Cache versionata | CACHE_NAME, versione incrementale | Assente | P0 |
| PWA-03 | Manifest applicazione | manifest.json | Assente | P0 |
| PWA-04 | Installazione come app | PWA installabile | Assente | P0 |
| PWA-05 | Strategia aggiornamento cache | nuova versione → refresh cache | Assente | P0 |
| PWA-06 | Rollback service worker | ritorno a versione precedente | Assente | P0 |

---

## 10. Responsive e dispositivi mobili

| ID | Capacità legacy | Evidenza | Stato React | Priorità |
|----|-----------------|----------|-------------|----------|
| RSP-01 | Layout adattivo (desktop/tablet/mobile) | media queries, grid | Parziale (Tailwind responsive) | P0 |
| RSP-02 | Touch: gesture tap | interazione mobile | Parziale | P1 |
| RSP-03 | Sidebar collassabile su mobile | hamburger menu | Presente (toggleSidebar) | P0 |
| RSP-04 | Schermata loading iniziale | stato caricamento | Assente | P1 |

---

## 11. Messaggi, errori e stati vuoti

| ID | Capacità legacy | Evidenza | Stato React | Priorità |
|----|-----------------|----------|-------------|----------|
| MSG-01 | Messaggio "nessuna disciplina selezionata" | stato vuoto selettore | Presente | P0 |
| MSG-02 | Messaggio "nessuna proposta gap" | stato vuoto revisione | Presente | P0 |
| MSG-03 | Messaggio gap layer assente | banner ambrato REV/ESP | Presente (CML-442) | P0 |
| MSG-04 | Toast notifica operazione | feedback azioni | Presente (Toast.tsx) | P0 |
| MSG-05 | Messaggio errore caricamento dati | errore glob/import | Assente | P0 |
| MSG-06 | Messaggio errore esportazione | errore download | Assente | P1 |
| MSG-07 | Conferma uscita con dati non salvati | beforeunload | Assente | P0 |
| MSG-08 | Messaggio offline/browser non supportato | PWA fallback | Assente | P1 |

---

## 12. Accessibilità

| ID | Capacità legacy | Evidenza | Stato React | Priorità |
|----|-----------------|----------|-------------|----------|
| A11-01 | Navigazione da tastiera | focus visibile, tab order | Parziale (da verificare) | P0 |
| A11-02 | ARIA labels su elementi interattivi | aria-label, role | Parziale (da verificare) | P0 |
| A11-03 | Contrasto colore sufficiente | WCAG AA | Parziale (da verificare) | P0 |
| A11-04 | Screen reader: struttura semantica | heading, landmark, live region | Parziale (da verificare) | P0 |
| A11-05 | Skip link navigazione | salto contenuto principale | Assente | P1 |
| A11-06 | Ridimensionamento font | zoom, testo fluido | Parziale (Tailwind rem) | P1 |
| A11-07 | Annunci dinamici (aria-live) | notifiche operazioni | Assente | P1 |

---

## 13. Dipendenze esterne

| ID | Dipendenza | Ruolo | Stato React | Priorità |
|----|------------|-------|-------------|----------|
| DEP-01 | React 19 | UI framework | Presente | P0 |
| DEP-02 | Vite 8 | Build tool | Presente | P0 |
| DEP-03 | TypeScript 6 | Type safety | Presente | P0 |
| DEP-04 | Zustand 5 | State management | Presente | P0 |
| DEP-05 | TanStack React Query | Data fetching/caching | Presente | P1 |
| DEP-06 | Dexie | IndexedDB wrapper | Presente (non utilizzato) | P1 |
| DEP-07 | Tailwind 4 | CSS utility framework | Presente | P0 |
| DEP-08 | lucide-react | Icone | Presente | P0 |
| DEP-09 | oxlint | Linter | Presente | P0 |
| DEP-10 | Nessuna dipendenza runtime legacy | zero dipendenze | Non applicabile | — |

---

## 14. Verifiche già disponibili

| ID | Verifica | Comando | Stato React | Priorità |
|----|----------|---------|-------------|----------|
| TST-01 | Lint TypeScript | `npm run lint` (oxlint) | Presente | P0 |
| TST-02 | Compilazione TypeScript | `tsc -b` | Presente | P0 |
| TST-03 | Build Vite | `vite build` | Presente | P0 |
| TST-04 | CI workflow | `.github/workflows/react-ci.yml` | Presente | P0 |
| TST-05 | Sync dati curricolari | `npm run sync-data` | Presente | P0 |
| TST-06 | Validazione shape dati | `tools/validate-cml-normalized-curriculum.mjs` | Solo legacy | P1 |
| TST-07 | Test runtime mappa dati | `tools/test-runtime-mappa-dati-shape.mjs` | Solo legacy | P1 |
| TST-08 | Test visivi/comparativi | screenshot, smoke test | Assente | P1 |

---

## 15. Funzioni residue o non più utilizzate

| ID | Funzione | Note |
|----|----------|------|
| OBS-01 | Cache service worker legacy v454/v455 | Da eliminare al passaggio |
| OBS-02 | Chiavi localStorage legacy | Da migrare a Dexie/IndexedDB |
| OBS-03 | Dipendenze non più usate | Nessuna al momento |
| OBS-04 | Pagine HTML legacy | index.html da sostituire |

---

## Riepilogo per priorità

| Priorità | Presente | Parziale | Assente | Totale |
|----------|----------|----------|---------|--------|
| **P0** | 23 | 3 | 20 | 46 |
| **P1** | 8 | 3 | 6 | 17 |
| **P2** | 0 | 0 | 2 | 2 |
| **TOTALE** | 31 | 6 | 28 | **65** |

---

## Prossimi passi

1. CML-444 — Inventario dettagliato del runtime legacy (senza modificarlo)
2. CML-445+ — Slice realizzative React per colmare i gap P0
3. Verifica parità completa prima del passaggio

## Verdetto

```
CML_443_REACT_FULL_RUNTIME_MIGRATION_PARITY_PLAN_COMMITTED_LOCAL_NOT_PUSHED
```
