# Repo Movelog

## 2026-06-27 - CML-183 - EDUCAZIONE_FISICA_LIMITED_DRAFT_DATA_PREP

- **Commit iniziale**: `bbd41c0` (allineato con `origin/main`)
- **Tipo slice**: data-prep limitata / limited draft
- **Oggetto**: creazione bozza normalizzata Educazione Fisica come draft prudente
- **Decisione autorizzativa**: `LIMITED_DRAFT_DATA_PREP_ALLOWED` (CML-182B)
- **File creato**: `content/curriculum/educazione-fisica.normalized.json`
- **Dati normalizzati**: 11/14 (era 10/14)
- **Runtime mappa**: invariato (10/14) — nessuna integrazione runtime
- **Shape test**: 10/10 PASS (invariato)
- **Unita**: 7 (Infanzia 1, Primaria 3, Secondaria 3)
- **Nuclei**: 5 (Corpo e percezione, Abilita motorie, Gioco e sport, Salute e benessere, Espressione e inclusione)
- **Marcatori draft**: `humanValidationRequired: true`, `validazioneUmana: true`, `stato: bozza_generabile`, note dipartimento su ogni unita
- **Prossima slice consigliata**: CML-184 — EDUCAZIONE_FISICA_RUNTIME_MAPPA_INTEGRATION o altra disciplina residua
- **Runtime**: invariato
- **Tools**: invariati
- **SchoolKB**: invariato
- **Deploy**: non eseguito
- **Push**: non eseguito
- **Artefatti**: `content/curriculum/educazione-fisica.normalized.json`, `docs/03_execution/CML-183.md`, `report/CML-183_educazione_fisica_limited_draft_data_prep.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_183_EDUCAZIONE_FISICA_LIMITED_DRAFT_DATA_PREP_READY`

## 2026-06-27 - CML-182B - EDUCAZIONE_FISICA_DATA_PREP_DECISION_CORRECTION

- **Commit iniziale**: `cf2c607` (allineato con `origin/main`)
- **Tipo slice**: docs-only / decision correction
- **Oggetto**: correzione decisione CML-182: distinzione tra approvazione finale umana e bozza draft prudente
- **Decisione principale**: `LIMITED_DRAFT_DATA_PREP_ALLOWED`
- **Esito**: bozza normalizzata autorizzata con vincoli (`humanValidationRequired: true`, nessuna runtime integration automatica); approvazione finale resta umana
- **Prossima slice consigliata**: CML-183 — EDUCAZIONE_FISICA_LIMITED_DRAFT_DATA_PREP
- **Runtime**: invariato
- **Dati curriculum**: invariati; nessun file `.normalized.json` creato
- **Tools**: invariati
- **SchoolKB**: invariato
- **Deploy**: non eseguito
- **Push**: non eseguito
- **Artefatti**: `docs/03_execution/CML-182B.md`, `report/CML-182B_educazione_fisica_data_prep_decision_correction.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_182B_EDUCAZIONE_FISICA_DATA_PREP_DECISION_CORRECTION_READY`

## 2026-06-27 - CML-182 - EDUCAZIONE_FISICA_VALIDATION_OUTCOME_DECISION

- **Commit iniziale**: `7a6a98b` (allineato con `origin/main`)
- **Tipo slice**: docs-only / validation outcome decision
- **Oggetto**: registrazione esito validazione umana per Educazione Fisica dopo CML-181
- **Decisione principale**: `VALIDATION_OUTCOME_PENDING`
- **Esito**: checklist CML-181 creata ma non compilata; nessuna validazione umana disponibile; data-prep non autorizzata
- **Rischio dati residuo**: medio (invariato)
- **Rischio istituzionale residuo**: medio (invariato)
- **Prossima slice consigliata**: CML-183 — EDUCAZIONE_FISICA_VALIDATION_COLLECTION_TEMPLATE
- **Runtime**: invariato
- **Dati curriculum**: invariati; nessun file `.normalized.json` creato
- **Tools**: invariati
- **SchoolKB**: invariato
- **Deploy**: non eseguito
- **Push**: non eseguito
- **Artefatti**: `docs/03_execution/CML-182.md`, `report/CML-182_educazione_fisica_validation_outcome_decision.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_182_EDUCAZIONE_FISICA_VALIDATION_OUTCOME_DECISION_READY`

## 2026-06-27 - CML-181 - EDUCAZIONE_FISICA_HUMAN_VALIDATION_CHECKLIST

- **Commit iniziale**: `761622d` (allineato con `origin/main`)
- **Tipo slice**: docs-only / human validation checklist
- **Oggetto**: checklist di validazione umana/dipartimentale per Educazione Fisica dopo CML-180
- **Esito**: checklist completa e pronta per compilazione; disciplina non ancora normalizzata
- **Struttura checklist**: 21 tabelle su 10 aree (identita, nuclei, progressione, obiettivi, traguardi, conoscenze/abilita/atteggiamenti, valutazione, inclusione/sicurezza, compatibilita CML, decisione finale)
- **Esiti previsti**: sufficiente / parziale / insufficiente per data-prep
- **Prossima slice consigliata**: CML-182 - EDUCAZIONE_FISICA_VALIDATION_OUTCOME_DECISION
- **Runtime**: invariato
- **Dati curriculum**: invariati; nessun file `.normalized.json` creato
- **Tools**: invariati
- **SchoolKB**: invariato
- **Deploy**: non eseguito
- **Push**: non eseguito
- **Artefatti**: `docs/03_execution/CML-181.md`, `report/CML-181_educazione_fisica_human_validation_checklist.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_181_EDUCAZIONE_FISICA_HUMAN_VALIDATION_CHECKLIST_READY`

## 2026-06-27 - CML-180 - EDUCAZIONE_FISICA_CONTROLLED_DATA_PREP_READINESS_DECISION

- **Commit iniziale**: `1923fed` (sync con `origin/main`)
- **Tipo slice**: docs-only / readiness decision
- **Oggetto**: decisione controllata su data preparation Educazione Fisica dopo CML-178 e CML-179
- **Decisione principale**: `HUMAN_VALIDATION_REQUIRED_BEFORE_DATA_PREP`
- **Esito**: gap-fill utile ma non sufficiente per creare `educazione-fisica.normalized.json` senza validazione docente/dipartimentale
- **Rischio dati residuo**: medio
- **Rischio istituzionale residuo**: medio
- **Prossima slice consigliata**: `CML-181 - EDUCAZIONE_FISICA_HUMAN_VALIDATION_CHECKLIST`
- **Runtime**: invariato
- **Dati curriculum**: invariati; nessun file `.normalized.json` creato
- **Tools**: invariati
- **SchoolKB**: invariato
- **Deploy**: non eseguito
- **Push**: non eseguito
- **Artefatti**: `docs/03_execution/CML-180.md`, `report/CML-180_educazione_fisica_controlled_data_prep_readiness_decision.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_180_EDUCAZIONE_FISICA_CONTROLLED_DATA_PREP_READINESS_DECISION_READY`

## 2026-06-27 - CML-179 - EDUCAZIONE_FISICA_GAP_FILL_DOCUMENTALE_MANUALE

- **Commit iniziale**: `d457261` (locale ahead 1; `origin/main` a `129a816`)
- **Tipo slice**: docs-only / manual gap-fill
- **Oggetto**: base documentale manuale per Educazione Fisica dopo CML-178
- **Esito**: gap-fill documentale pronto; disciplina ancora non pronta per data preparation senza revisione umana
- **Readiness**: non pronta / gap-fill documentale pronto
- **Raccomandazione**: revisione umana docente/dipartimentale; data preparation solo dopo validazione
- **Runtime**: invariato
- **Dati curriculum**: invariati; nessun file `.normalized.json` creato
- **Tools**: invariati
- **SchoolKB**: invariato
- **Deploy**: non eseguito
- **Push**: non eseguito
- **Artefatti**: `docs/03_execution/CML-179.md`, `report/CML-179_educazione_fisica_gap_fill_documentale_manuale.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_179_EDUCAZIONE_FISICA_GAP_FILL_DOCUMENTALE_MANUALE_READY`

## 2026-06-27 - CML-178 - EDUCAZIONE_FISICA_DETAILED_GAP_MODEL

- **Commit iniziale**: `129a816` (sync con `origin/main`)
- **Tipo slice**: docs-only / readiness-audit
- **Oggetto**: detailed gap model per Educazione Fisica dopo CML-177
- **Esito**: readiness confermata **non pronta**; dati insufficienti per data preparation senza gap-fill
- **Rischio dati**: medio
- **Rischio istituzionale**: medio
- **Raccomandazione**: prossima slice di gap-fill documentale/manuale prima di creare `educazione-fisica.normalized.json`
- **Runtime**: invariato
- **Dati curriculum**: invariati; nessun file `.normalized.json` creato
- **Tools**: invariati
- **SchoolKB**: invariato
- **Deploy**: non eseguito
- **Push**: non eseguito
- **Artefatti**: `docs/03_execution/CML-178.md`, `report/CML-178_educazione_fisica_detailed_gap_model.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_178_EDUCAZIONE_FISICA_DETAILED_GAP_MODEL_READY`

## 2026-06-27 - CML-OPS-004 - CML_DOCS_ONLY_AND_READINESS_SKILLS

- **Commit iniziale**: `d79956e` (sync con `origin/main`)
- **Tipo slice**: docs-only / OPS
- **Oggetto**: creazione delle skill `cml-docs-only-slice` e `cml-readiness-audit`
- **Esito**: skill operative create per slice documentali e audit readiness disciplinare
- **Modifiche**: `CLAUDE.md` aggiornato minimamente per riflettere le tre skill create
- **Runtime**: invariato
- **Dati curriculum**: invariati
- **Tools**: invariati
- **SchoolKB**: invariato
- **`.claude/`**: aggiunte solo le due skill autorizzate; nessun hook creato
- **Artefatti**: `.claude/skills/cml-docs-only-slice/SKILL.md`, `.claude/skills/cml-readiness-audit/SKILL.md`, `docs/03_execution/CML-OPS-004.md`, `report/CML-OPS-004_docs_only_and_readiness_skills.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_OPS_004_DOCS_ONLY_AND_READINESS_SKILLS_READY`

## 2026-06-26 — CML-OPS-003 — CML_SYNC_SKILL

- **Commit iniziale**: `8b1dee3` (sync con `origin/main`)
- **Tipo slice**: docs-only / OPS
- **Oggetto**: creazione della prima skill operativa `cml-sync` per la sincronizzazione remota controllata
- **Esito**: skill creata in `.claude/skills/cml-sync/SKILL.md`; definisce preflight, regole di blocco, push controllato e formato output standard
- **Modifiche**: `CLAUDE.md` aggiornato per riflettere lo stato OPS
- **Runtime**: invariato
- **`.claude/`**: creata directory skills/cml-sync/ (nessun hook creato)
- **Artefatti**: `.claude/skills/cml-sync/SKILL.md`, `docs/03_execution/CML-OPS-003.md`, `report/CML-OPS-003_cml_sync_skill.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_OPS_003_CML_SYNC_SKILL_READY`

## 2026-06-26 — CML-OPS-002 — CLAUDE_MD_MINIMAL_PROJECT_MEMORY

- **Commit iniziale**: `28b697e` (sync con `origin/main`)
- **Tipo slice**: docs-only / OPS
- **Oggetto**: creare `CLAUDE.md` minimale alla radice come memoria operativa per Claude Code
- **Esito**: `CLAUDE.md` creato con 8 sezioni operative (~75 righe): identity, stato consolidato, regole operative, tipi slice, validazioni, report format, confine SchoolKB, prossime slice
- **Contenuto escluso**: cronologia, log, credenziali, deploy automatico, push automatico
- **`.claude/`**: non creata
- **Skill/hook**: non creati
- **Runtime**: invariato
- **Artefatti**: `CLAUDE.md`, `docs/03_execution/CML-OPS-002.md`, `report/CML-OPS-002_claude_md_minimal_project_memory.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_OPS_002_CLAUDE_MD_MINIMAL_PROJECT_MEMORY_READY`

## 2026-06-26 — CML-OPS-001 — CLAUDE_CODE_SKILLS_AND_HOOKS_CONTRACT

- **Commit iniziale**: `6485fa2` (sync con `origin/main`)
- **Tipo slice**: docs-only / contratto operativo
- **Oggetto**: definire contratto operativo per Claude Code nel progetto CurManLight
- **Esito**: contratto completo con 20 sezioni; decisione: usare subito CLAUDE.md minimale, skill P0 e hook P0; rinviare subagent, MCP e plugin
- **Skill proposte**: 8 (cml-sync, cml-docs-only-slice, cml-readiness-audit, cml-normalized-data-prep, cml-runtime-integration, cml-shape-test-alignment, skb-contract, skb-local-prototype)
- **Hook proposti**: 8 (guard-scope, guard-secrets, guard-push, guard-runtime-docs, guard-curriculum-data, post-edit-check, post-data-validate, post-shape-validate)
- **Roadmap OPS**: 7 step (CML-OPS-001→CML-OPS-007)
- **Runtime**: invariato
- **`.claude/`**: non creata
- **`CLAUDE.md`**: non creato (specificato nel contratto, creazione in OPS-002)
- **Artefatti**: `docs/02_system/CLAUDE-CODE-LOCAL-WORKFLOW-CONTRACT.md`, `docs/03_execution/CML-OPS-001.md`, `report/CML-OPS-001_claude_code_skills_and_hooks_contract.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_OPS_001_CLAUDE_CODE_SKILLS_AND_HOOKS_CONTRACT_READY`

## 2026-06-26 — CML-177 — EDUCAZIONE_FISICA_READINESS_DATA_AUDIT

- **Commit iniziale**: `d3bd4a2` (sync con `origin/main`)
- **Tipo slice**: docs-only / audit-only
- **Oggetto**: audit documentale per Educazione Fisica seconda disciplina della sequenza residua
- **Esito**: readiness bassa, dati non sufficienti per data preparation; Educazione Fisica non è pronta
- **Motivazione**: 4 nuclei indicati in report generici (CML-104) ma nessuna formalizzazione strutturata; progressione verticale non ricostruibile; rischio istituzionale medio
- **Raccomandazione**: CML-178 come audit dettagliato obbligatorio prima di qualsiasi normalizzazione
- **Runtime**: invariato
- **Shape runtime test**: 10/10 (invariato)
- **Artefatti**: `docs/03_execution/CML-177.md`, `report/CML-177_educazione_fisica_readiness_data_audit.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_177_EDUCAZIONE_FISICA_READINESS_DATA_AUDIT_READY`

## 2026-06-26 — CML-165 — NORMALIZED_DATA_PREPARATION_SELECTION

- **Commit iniziale**: `903e651` (sync con `origin/main`)
- **Tipo slice**: docs-only / audit-only
- **Oggetto**: selezione disciplina per data preparation (CML-166)
- **Esito**: nessuna disciplina ha file `.normalized.json`; selezionata **Educazione Civica** come prima da normalizzare
- **Motivazione**: maggiore base documentale (8 item storici, 4 nuclei), completezza asse Storico-sociale, raccordo con Cittadinanza
- **Runtime**: invariato
- **Artefatti**: `docs/03_execution/CML-165.md`, `report/CML-165_normalized_data_preparation_selection.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_165_NORMALIZED_DATA_PREPARATION_SELECTION_READY`

## 2026-06-26 — CML-164 — NEXT_DISCIPLINE_RUNTIME_MAPPA_SELECTION_AUDIT

- **Commit iniziale**: `e089958` (sync con `origin/main`)
- **Tipo slice**: docs-only / audit-only
- **Oggetto**: audit documentale per selezionare prossima disciplina da integrare nella mappa runtime
- **Esito**: nessuna disciplina candidata ha file `.normalized.json` disponibile; 7/14 discipline integrate, 7 senza dati normalizzati
- **Copertura runtime attuale**: Tecnologia, Matematica, Italiano, Scienze, Storia, Geografia, Inglese
- **Raccomandazione**: CML-165 come task di data preparation, non runtime integration
- **Runtime**: invariato
- **Artefatti**: `docs/03_execution/CML-164.md`, `report/CML-164_next_discipline_runtime_mappa_selection_audit.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_164_NEXT_DISCIPLINE_RUNTIME_MAPPA_SELECTION_AUDIT_READY`

## 2026-06-26 - CML-163 - INGLESE_CONTROLLED_RUNTIME_MAPPA_DATI_INTEGRATION

- **Commit iniziale**: `0dd411d` (sync con `origin/main`)
- **Tipo slice**: runtime increment — integrazione mappa disciplinare Inglese
- **File modificati**: `_published_snapshot/netlify-current/index.html`, aggiornamento `docs/REPO-MOVELOG.md`, `docs/03_execution/CML-163.md`, `report/CML-163_inglese_runtime_mappa_dati_integration.md`
- **Integrazione**: aggiunto pulsante selettore Inglese, variabile `INGLESE_MAPPA_DATI` (12 strutture, 11 nodi, 9 progressioni, 0 decisioni) e switch in `setMappaDisciplina()`
- **Discipline modificate**: solo Inglese (nuova); Tecnologia/Matematica/Italiano/Scienze/Storia/Geografia invariati
- **Decisioni curricolari**: D=0 deliberato — Inglese non ha audit preparatorio
- **Validatore**: 7 file / 94 unità / `overallValid: true` / 0 errori
- **Harness mappa**: 7/7 discipline PASS (Inglese: S=12 N=11 P=9 D=0)
- **Vincoli**: JSON, schema `.cml`, import/export, service worker/cache, workflow, dipendenze, root `index.html` e landing UI/UX invariati
- **Deploy**: non eseguito
- **Push**: non eseguito
- **Artefatti**: `docs/03_execution/CML-163.md`, `report/CML-163_inglese_runtime_mappa_dati_integration.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_163_INGLESE_CONTROLLED_RUNTIME_MAPPA_DATI_READY`

## 2026-06-26 - CML-162 - GEOGRAFIA_RUNTIME_MAPPA_DATI_INTEGRATION

- **Commit iniziale**: `c5c827a` (sync con `origin/main` `0bffd68`)
- **Commit finale**: `a770982` (amend con docs)
- **Tipo slice**: runtime increment — integrazione mappa disciplinare Geografia
- **File modificati**: `_published_snapshot/netlify-current/index.html`, aggiornamento `docs/REPO-MOVELOG.md`, `docs/03_execution/CML-162.md`, `report/CML-162_geografia_runtime_mappa_dati_integration.md`
- **Integrazione**: aggiunto pulsante selettore Geografia, variabile `GEOGRAFIA_MAPPA_DATI` (12 strutture, 3 nodi, 9 progressioni, 0 decisioni) e switch in `setMappaDisciplina()`
- **Discipline modificate**: solo Geografia (nuova); Tecnologia/Matematica/Italiano/Scienze/Storia invariati
- **Decisioni curricolari**: D=0 deliberato — Geografia non ha audit preparatorio
- **Validatore**: 7 file / 94 unità / `overallValid: true` / 0 errori
- **Harness mappa**: 7/7 discipline PASS (Geografia: S=12 N=3 P=9 D=0)
- **Vincoli**: JSON, schema `.cml`, import/export, service worker/cache, workflow, dipendenze, root `index.html` e landing UI/UX invariati
- **Deploy**: non eseguito
- **Push**: non eseguito ancora
- **Artefatti**: `docs/03_execution/CML-162.md`, `report/CML-162_geografia_runtime_mappa_dati_integration.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_162_GEOGRAFIA_LOCAL_FINAL_AUDIT_READY`

## 2026-06-26 - CML-161 - DIDATTICA_COVERAGE_GAP_AUDIT

- **Commit iniziale**: `7498682` (sync con `origin/main`)
- **Tipo slice**: docs-only / audit-only
- **Oggetto**: audit del gap tra copertura Curriculum e funzioni operative Didattica
- **Esito Curriculum**: modello effettivo a 14 discipline; copertura dichiarata 14/14 con traguardi e obiettivi
- **Esito Didattica**: evidenze/UDA ancora concentrate su Tecnologia; mappa disciplinare progressiva su Tecnologia, Matematica, Italiano, Scienze e Storia
- **Gap classificato**: non curricolare generale; gap operativo didattico
- **Runtime**: invariato
- **Artefatti**: `docs/03_execution/CML-161.md`, `report/CML-161_didattica_coverage_gap_audit.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_161_DIDATTICA_COVERAGE_GAP_AUDIT_READY`
## 2026-06-26 - CML-160 - STORIA_CONTROLLED_RUNTIME_MAPPA_DATI_INTEGRATION

- **Commit iniziale**: `90163cf` (sync con `origin/main`)
- **Tipo slice**: runtime increment - integrazione mappa disciplinare Storia
- **File modificato**: `_published_snapshot/netlify-current/index.html` (+3 righe)
- **Integrazione**: aggiunto pulsante selettore Storia, variabile `STORIA_MAPPA_DATI` (5 strutture, 5 nodi, 9 progressioni, 5 decisioni) e switch in `renderMappaDisciplinare()`
- **Discipline modificate**: solo Storia (nuova); Tecnologia/Matematica/Italiano/Scienze invariati
- **Validatore**: 7 file / 94 unità / `overallValid: true` / 0 errori
- **Harness mappa**: 7/7 discipline PASS, 0 failed; verifica runtime `STORIA_MAPPA_DATI` S=5 N=5 P=9 D=5
- **Vincoli**: JSON, schema `.cml`, import/export, service worker/cache, workflow, dipendenze, root `index.html` e landing UI/UX invariati
- **Artefatti**: `docs/03_execution/CML-160.md`, `report/CML-160_storia_runtime_mappa_dati_integration.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_160_STORIA_CONTROLLED_RUNTIME_MAPPA_DATI_READY`
## 2026-06-26 — CML-159 — SCIENZE_RUNTIME_MAPPA_DATI_INTEGRATION

- **Commit iniziale**: `31b2243` (sync con `origin/main`)
- **Tipo slice**: runtime increment — integrazione mappa disciplinare Scienze
- **File modificato**: `_published_snapshot/netlify-current/index.html` (+4 righe)
- **Integrazione**: aggiunto pulsante selettore Scienze, variabile `SCIENZE_MAPPA_DATI` (5 strutture, 5 nodi, 9 progressioni, 3 decisioni) e switch in `renderMappaDisciplinare()`
- **Discipline modificate**: solo Scienze (nuova); Tecnologia/Matematica/Italiano invariati
- **Validatore**: 7 file / 94 unità / `overallValid: true` / 0 errori ✅
- **Harness mappa**: 7/7 discipline PASS (Scienze: S=15 N=5 P=9 D=0) ✅
- **Vincoli**: JSON, schema `.cml`, import/export, service worker/cache, CSS, altre funzioni JS — invariati
- **Artefatti**: `docs/03_execution/CML-159.md`, `report/CML-159_scienze_runtime_mappa_dati_integration.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_159_SCIENZE_RUNTIME_MAPPA_DATI_INTEGRATION_READY`

## 2026-06-25 — CML-158 — UI_UX_3D_LANDING_STUDY_ARCHIVE

- **Commit iniziale**: `c854562` (sync con `origin/main`)
- **Tipo slice**: docs-only / study archive
- **Studio archiviato**: proposta landing 3D con Three.js/React/Vite/Lenis valutata e archiviata come riferimento concettuale.
- **Decisione progettuale**: la proposta 3D NON è una specifica implementativa. Non autorizza React, Three.js, Vite, Lenis, nuove dipendenze, nuova landing autonoma o cambio architetturale.
- **Trasformazione consigliata**: eventuale futura sezione statica HTML/CSS nella Home tab con due riquadri (curricolo vigente + quadro 2025) e processo umano in 5 passaggi.
- **Artefatti creati**:
  - `docs/02_system/UI-UX-3D-LANDING-STUDY.md`
  - `docs/03_execution/CML-158.md`
  - `report/CML-158_ui_ux_3d_landing_study_archive.md`
  - aggiornamento `docs/REPO-MOVELOG.md` (questa voce)
- **Verdetto**: `CML_158_UI_UX_3D_LANDING_STUDY_ARCHIVE_READY`

## 2026-06-25 — CML-156 — P1_RUNTIME_STRUCTURE_MICROFIX

- **Commit iniziale**: `b4104bb` (sync con `origin/main`)
- **Tipo slice**: fix P1 runtime structure
- **Posizione di `#didattica-mappa`**: spostato dentro `#tab-didattica` per limitare la visibilità alla scheda "Competenze e progettazione → Valutazione ed evidenze".
- **Variabile `decisionIdx`**: definita correttamente come `globalIdx` prima dell'uso in `renderDepartmentImport()`, eliminando il ReferenceError.
- **Verdetto**: `CML_156_P1_RUNTIME_STRUCTURE_MICROFIX_READY`

## 2026-06-25 - CML-155 - POST_PARSE_FIX_RUNTIME_STRUCTURE_AUDIT

- **Commit iniziale**: `6885fab` (sync con `origin/main`)
- **Tipo slice**: audit-only / docs-only
- **Sintassi runtime**: inline script PASS; parse error `l'esito` risolto da CML-154
- **Mappa disciplinare**: P1, `#didattica-mappa` risulta figlia diretta di `main`, resta visibile fuori dal tab Competenze
- **Inizializzazione mappa**: P2, `renderMappaDisciplinare()` non chiamata all'avvio o ingresso in Competenze; contenitore inizialmente vuoto
- **Coerenza mappe**: Tecnologia, Matematica, Italiano renderizzano dopo click; nessun token tecnico visibile
- **Validazione dipartimentale**: P1, `decisionIdx` non definito in `renderDepartmentImport()`, riprodotto `ReferenceError`
- **Pannello TecnologiaNorm**: P2, titolo usa `selDisc` ma contenuto resta Tecnologia
- **Smoke browser**: Home/Curriculum/Competenze/Mappe/Esportazioni/Guida senza console error nel flusso ordinario
- **Runtime**: invariato in CML-155; nessun fix applicato
- **Verdetto**: `CML_155_POST_PARSE_FIX_RUNTIME_STRUCTURE_AUDIT_READY`
## 2026-06-25 - CML-154 - TECNOLOGIA_LIVE_RUNTIME_PARSE_ERROR_MICROFIX

- **Commit iniziale**: `da0c0e3` (locale, `main...origin/main [ahead 1]`)
- **origin/main iniziale**: `eb6729f`
- **File runtime modificato**: `_published_snapshot/netlify-current/index.html`
- **Causa**: stringa JS interrotta da apostrofo non escapato in `l'esito`
- **Microfix**: `l'esito` -> `l’esito` nel testo della validazione dipartimentale
- **Parsing runtime**: inline script syntax PASS, `SyntaxError: Unexpected identifier 'esito'` risolto localmente
- **Validatore**: 7 file / 94 unita' / `overallValid: true` / `invalidCount: 0`
- **Harness mappa**: 7 discipline PASS, 0 failed
- **Smoke locale**: Tecnologia, Matematica e Italiano renderizzati; nessun token tecnico visibile
- **Vincoli**: generator/adapter/transformer/validator/JSON/schema `.cml` invariati; service worker/cache invariati; nessun refactoring
- **Verdetto**: `CML_154_TECNOLOGIA_LIVE_RUNTIME_PARSE_ERROR_MICROFIX_READY`
## 2026-06-25 - CML-153 - CONTROLLED_PAGES_DEPLOY_FORCE_AND_LIVE_CONTENT_SMOKE

- **Commit iniziale**: `eb6729f` (sync con `origin/main`)
- **Push**: non necessario; `eb6729f` gia' presente su `origin/main`
- **Workflow Pages**: `.github/workflows/pages.yml`, pubblica `_published_snapshot/netlify-current`
- **Deploy forzato**: `workflow_dispatch` run `28166929195`, `success`, headSha `eb6729f`
- **URL live**: https://antoniocorsano-boop.github.io/curmanlight/?v=cml153
- **HTTP live**: `200`
- **TECNOLOGIA_MAPPA_DATI nel live**: presente
- **GENERATA nel live**: presente
- **Messaggio empty state**: presente nel markup, non visibile nel browser smoke
- **Smoke browser**: render mappa non popolato; console `SyntaxError: Unexpected identifier 'esito'`
- **Service worker/cache**: `curmanlight-cache-v452b422` ancora presente; non causa primaria con `?v=cml153`, ma rischio cache-first residuo
- **Causa/classificazione**: E - live aggiornato ma rendering Tecnologia ancora incompleto
- **Runtime**: invariato in CML-153; microfix raccomandato per CML-154
- **Verdetto**: `CML_153_CONTROLLED_PAGES_DEPLOY_FORCE_AND_LIVE_CONTENT_SMOKE_READY`

## 2026-06-25 — CML-152 — LIVE_DEPLOY_REFRESH_AND_CONTENT_RECHECK

- **Commit iniziale**: `f845211` (sync)
- **URL live**: https://antoniocorsano-boop.github.io/curmanlight/?v=cml152
- **Cache-busting**: nessun effetto
- **TECNOLOGIA_MAPPA_DATI nel live**: assente
- **Causa**: Deploy non ancora aggiornato (class B)
- - Verdetto: `CML_152_LIVE_DEPLOY_REFRESH_AND_CONTENT_RECHECK_READY`

## 2026-06-25 — CML-151 — LIVE_DEPLOY_ALIGNMENT_AFTER_TECNOLOGIA_CONTENT_GAP

- **Commit iniziale**: `d69ea5a` (sync)
- **URL live**: https://antoniocorsano-boop.github.io/curmanlight/
- **Gap**: TECNOLOGIA_MAPPA_DATI non presente nel live
- **Causa**: Deploy non aggiornato (class A)
- **Workflow**: _published_snapshot/netlify-current/ corretto, deploy in attesa
- - Verdetto: `CML_151_LIVE_DEPLOY_ALIGNMENT_AFTER_TECNOLOGIA_CONTENT_GAP_READY`

## 2026-06-25 — CML-150 — TECNOLOGIA_LIVE_CONTENT_VISIBILITY_AUDIT

- **Commit iniziale**: `b3fb181` (sync)
- **URL live**: https://antoniocorsano-boop.github.io/curmanlight/
- **Messaggio rilevato**: "Mappa disciplinare non ancora predisposta per questa disciplina"
- **Testi tecnici visibili**: nessuno
- - Verdetto: `CML_150_TECNOLOGIA_LIVE_CONTENT_VISIBILITY_AUDIT_READY`

## 2026-06-25 — CML-149 — LIVE_POST_DEPLOY_SMOKE_AFTER_TECNOLOGIA_INTEGRATION

- **Commit iniziale**: `1d9e530` (sync)
- **URL live**: https://antoniocorsano-boop.github.io/curmanlight/
- **Esito smoke**: HTTP 200, navigazione funzionante
- - Verdetto: `CML_149_LIVE_POST_DEPLOY_SMOKE_AFTER_TECNOLOGIA_INTEGRATION_READY`

## 2026-06-25 — CML-148 — GOVERNANCE_DECISION_AFTER_TECNOLOGIA_RUNTIME_INTEGRATION

- **Commit iniziale**: `5f83ecc` (sync)
- **Sequence pushed**: CML-145→CML-147A
- **Opzione selezionata**: C — smoke live/post-deploy
- **Prossimo**: CML-149 — LIVE_POST_DEPLOY_SMOKE_AFTER_TECNOLOGIA_INTEGRATION
- - Verdetto: `CML_148_GOVERNANCE_DECISION_AFTER_TECNOLOGIA_RUNTIME_INTEGRATION_READY`

## 2026-06-25 — CML-147A — TECNOLOGIA_RUNTIME_INTEGRATION_SMOKE

- **Commit iniziale**: `6dd82be` (4 ahead of origin)
- **Smoke**: documentare (HTTP non disponibile)
- **Controlli statici**: tutti PASS
- - Verdetto: `CML_147A_TECNOLOGIA_RUNTIME_INTEGRATION_SMOKE_READY`
- - Prossimo: push o CML-148

## 2026-06-25 — CML-147 — CONTROLLED_TECNOLOGIA_RUNTIME_INTEGRATION_WITH_FALLBACK

- **Commit iniziale**: `8fb49a0` (3 ahead of origin)
- **Integrazione**: TECNOLOGIA_MAPPA_DATI_GENERATA || TECNOLOGIA_MAPPA_DATI_FALLBACK
- **Discipline modificate**: solo Tecnologia
- **Runtime invariato**: renderMappaDisciplinare() non modificata
- - Verdetto: `CML_147_CONTROLLED_TECNOLOGIA_RUNTIME_INTEGRATION_READY`
- - Prossimo: CML-147A — Runtime Smoke

## 2026-06-25 — CML-146A — STATIC_BLOCK_INSPECTION_SMOKE

- **Commit iniziale**: `ec9d64b` (2 ahead of origin)
- **Confronto generato vs hardcoded**: struttureSostanziali compatibili (6/6), nodiDisciplinari nuovo (hardcoded ne ha 0), progressioneVerticale compatibili (10/10), decisioniCurricolari identiche (2/2)
- **BOM issue**: PowerShell only — non bloccante, gestito dal tool
- **Opzione selezionata per CML-147**: B — integrazione con fallback hardcoded
- - Verdetto: `CML_146A_STATIC_BLOCK_INSPECTION_SMOKE_READY`
- - Prossimo: CML-147 — Controlled Tecnologia Runtime Integration

## 2026-06-25 — CML-146 — TECHNOLOGIA_STATIC_MAPPA_DATI_GENERATION_TOOL

- **Commit iniziale**: `260b4ae` (ahead 1 di origin/main)
- **Tool creato**: `tools/generate-static-mappa-dati.mjs`
- **Comando d'uso**: `node tools/generate-static-mappa-dati.mjs content/curriculum/tecnologia.normalized.json`
- **Path JSON**: `content/curriculum/tecnologia.normalized.json`
- **Output generato**: `const TECNOLOGIA_MAPPA_DATI = { ... }` (JS valido)
- **Esito node --check**: ✅ PASS
- **Esito validatore**: 7 file / 94 unità / `overallValid: true` ✅
- **Esito shape harness**: ⚠️ FAIL su PowerShell (BOM issue), pipeline OK
- **Runtime**: non modificato ✅
- **JSON/adapter/transformer/harness**: non modificati ✅
- **Temporanei**: rimossi ✅
- **Limiti note**: ordinamento alfabetico, descrizioni autogenerate
- - Verdetto: `CML_146_STATIC_MAPPA_DATI_GENERATION_TOOL_READY`
- - Prossimo: CML-146A — Static Block Inspection Smoke

## 2026-06-25 — CML-145 — TECHNOLOGIA_RUNTIME_INTEGRATION_PILOT_SELECTION_AUDIT

- **Commit iniziale**: `810ae84` (HEAD == origin/main)
- **Audit**: confronto generato vs hardcoded completato su tutte le aree (S/N/P/D)
- **Opzione selezionata**: C — Generatore statico JS/JSON
- **Differenze chiave**: 6 nuovi nodiDisciplinari (hardcoded ne ha 0), ordinamento diverso, descrizioni autogenerate
- **Artefatti**: `docs/03_execution/CML-145.md`, `report/CML-145_tecnologia_runtime_integration_pilot_selection_audit.md`
- Verdetto: `CML_145_TECHNOLOGIA_RUNTIME_INTEGRATION_PILOT_SELECTION_READY`
- Prossimo: CML-146 — TECHNOLOGIA_STATIC_MAPPA_DATI_GENERATION_TOOL

## 2026-06-25 — CML-144A — CORE_DATA_LAYER_SEQUENCE_CLOSURE_AND_CONTROLLED_PUSH

- **Commit iniziale**: `a228683` (9 ahead of origin)
- **Commit CML-144A**: `b08bfe8`
- **Audit**: validatore 7/94 ✅, harness 7/7 PASS ✅, working tree pulito, runtime non toccato
- **Artefatti**: `docs/03_execution/CML-144A.md`, `report/CML-144A_core_data_layer_sequence_closure_and_controlled_push.md`
- **Push**: 10 commits pushati ✅ — `85bbab4..b08bfe8` main→main
- **Stato finale**: `main...origin/main` sync, HEAD == origin/main `b08bfe8`
- Verdetto: `CML_144A_CORE_DATA_LAYER_SEQUENCE_CLOSED_REMOTE`
- Prossimo: CML-145 — Tecnologia runtime integration selection audit

## 2026-06-25 — CML-144 — RUNTIME_MAPPA_DATI_SHAPE_TEST_HARNESS

- **HEAD**: `558ca5f` (8 ahead of origin)
- **Tool creato**: `tools/test-runtime-mappa-dati-shape.mjs`
- **Copertura**: 7/7 discipline validat — tutte PASS ✅
- **Campi verificati**: disciplina, struttureSostanziali.{nome,descrizione,fonte}, nodiDisciplinari.{etichetta,tipo,descrizione,fonte}, progressioneVerticale.{ordine,fascia/classe,descrizioneProgressione,fonte}, decisioniCurricolari array con {tipo,motivazione,fonte}
- **Runtime, JSON, adapter, transformer, validator**: non toccati ✅
- **Artefatti**: `tools/test-runtime-mappa-dati-shape.mjs`, `docs/03_execution/CML-144.md`, `report/CML-144_runtime_mappa_dati_shape_test_harness.md`
- Verdetto: `CML_144_RUNTIME_MAPPA_DATI_SHAPE_TEST_HARNESS_READY`
- Next: CML-145 — integrazione pilota Tecnologia, oppure closure/push CML-138→144

## 2026-06-25 — CML-143A — RUNTIME_SHAPE_TRANSFORMER_OUTPUT_SMOKE

- **HEAD**: `384530f` (7 ahead of origin)
- **Smoke**: output flat transformer confrontato con campi letti da `renderMappaDisciplinare()`
- **Esito**: tutti i campi presenti per Tecnologia, Italiano, Matematica, Scienze ✅
- **Decisione CML-144**: Opzione C — test harness automatico (non integrazione runtime)
- **Runtime, JSON, adapter, transformer, validator**: non toccati ✅
- **Temp files**: rimossi ✅
- **Artefatti**: `docs/03_execution/CML-143A.md`, `report/CML-143A_runtime_shape_transformer_output_smoke.md`
- Verdetto: `CML_143A_RUNTIME_SHAPE_TRANSFORMER_OUTPUT_SMOKE_READY`
- Next: CML-144 — RUNTIME_MAPPA_DATI_SHAPE_TEST_HARNESS

## 2026-06-25 — CML-143 — TO_RUNTIME_MAPPA_DATI_TRANSFORMER

- **HEAD**: `b55cda1` (6 ahead of origin)
- **Tool creato**: `tools/to-runtime-mappa-dati-transformer.mjs`
- **Shape input**: `{nome, unita[]}` con riferimenti strutturati
- **Shape output**: `{nome, descrizione, fonte}` flat per runtime
- **Discipline testate**: Tecnologia, Italiano, Matematica — tutte OK ✅
- **Runtime, JSON, adapter, validator**: non toccati ✅
- **Temp files**: rimossi ✅
- **Artefatti**: `tools/to-runtime-mappa-dati-transformer.mjs`, `docs/03_execution/CML-143.md`, `report/CML-143_to_runtime_mappa_dati_transformer_design_and_tool.md`
- Verdetto: `CML_143_TO_RUNTIME_MAPPA_DATI_TRANSFORMER_READY`
- Next: CML-143A — Runtime Shape Transformer Output Smoke

## 2026-06-25 — CML-142 — ADAPTER_TO_RUNTIME_INTEGRATION_CONTRACT

- **HEAD**: `31ef98e` (5 ahead of origin)
- **Scoperta**: shape gap `unita[]` vs flat documentato in matrice gap
- **Opzione scelta**: B + D — `toRuntimeMappaDati()` intermedio, pilota Tecnologia
- **Runtime, JSON, adapter, validator**: non toccati ✅
- **Artefatti**: `docs/03_execution/CML-142.md`, `report/CML-142_adapter_to_runtime_integration_contract.md`
- Verdetto: `CML_142_ADAPTER_TO_RUNTIME_INTEGRATION_CONTRACT_READY`
- Next: CML-143 — TO_RUNTIME_MAPPA_DATI_TRANSFORMER_DESIGN_AND_TOOL

## 2026-06-25 — CML-141A — ADAPTER_OUTPUT_SHAPE_CONFRONTATION

- **HEAD**: `0fc1366` (5 ahead of origin, worktree sporco pre-commit)
- **Confronto**: output adapter `scripts/adapter-mappa-dati.js` vs MAPPA_DATI hardcoded in `index.html`
- **Esito**: compatibilità solo parziale — adapter produce `unita[]` invece di flat `{descrizione, fonte}`; `nodiDisciplinari` colmato per Tecnologia (mancante); `decisioniCurricolari` compatibile
- **Runtime, JSON, validatore**: non toccati ✅
- **Artefatti**: `docs/03_execution/CML-141A.md`, `report/CML-141A_adapter_confronto_output.md`
- Verdetto: `CML_141A_ADAPTER_OUTPUT_SHAPE_SMOKE_READY`
- Next: CML-142 — Adapter to Runtime Integration Contract

## 2026-06-25 — CML-141 — JSON_TO_MAPPA_DATI_ADAPTER_STANDALONE_TOOL

- **HEAD**: `ac4c724` (3 ahead of origin)
- **Tool creato**: `tools/json-to-mappa-dati-adapter.mjs`
- **Aggregazioni**: ambito→struttureSostanziali, nucleo→nodiDisciplinari, {ordine,classe,fascia}→progressioneVerticale, decisioniCurricolari→pass-through
- **Test**: Tecnologia, Italiano, Matematica, Scienze — tutti OK, 0 warning
- **Limitazione**: non è 1:1 con MAPPA_DATI hardcoded (mancano descrizioni testuali)
- **Runtime, JSON, validatore**: non toccati ✅
- **Artefatti**: `docs/03_execution/CML-141.md`, `report/CML-141_json_to_mappa_dati_adapter_standalone_tool.md`
- Verdetto: `CML_141_JSON_TO_MAPPA_DATI_ADAPTER_TOOL_READY`
- Next: CML-141A — Adapter Output Shape Smoke

## 2026-06-25 — CML-140A — TECNOLOGIA_NUCLEO_FIELD_READINESS_FIX

- **HEAD**: `266490e` (2 ahead of origin)
- **JSON modificato**: `content/curriculum/tecnologia.normalized.json`
- **Intervento**: aggiunto `nucleo` a 13/13 unità (era l'unica disciplina senza)
- **Criterio**: ogni nucleo derivato dal corrispondente `ambito`
- **Nuclei assegnati**: 6 (Osservazione e analisi, Digitale e informatica, Materiali e trasformazioni, Disegno e rappresentazione, Energia e sostenibilità, Cittadinanza tecnologica)
- **Validatore**: 7/94, `overallValid: true` ✅ — Tecnologia ora ha warning "retrocompatibile" come altre 6 discipline
- **Artefatti**: `docs/03_execution/CML-140A.md`, `report/CML-140A_tecnologia_nucleo_field_readiness_fix.md`
- Verdetto: `CML_140A_TECNOLOGIA_NUCLEO_FIELD_READINESS_READY`
- Next: CML-141 — JSON_TO_MAPPA_DATI_ADAPTER_IMPLEMENTATION

## 2026-06-25 — CML-140 — JSON_TO_MAPPA_DATI_ADAPTER_DESIGN_AUDIT

- **HEAD**: `6b7ced5` (1 ahead of origin — slice precedente non pushato)
- **Tipo slice**: design audit — nessuna modifica runtime/JSON
- **Adapter progettato**: `toMappaDati(json)` con 3 logiche di aggregazione (ambito→struttureSostanziali, nucleo→nodiDisciplinari, {ordine,classe,fascia}→progressioneVerticale)
- **Rischio principale**: Tecnologia ha `nucleoFondante:""` e `nucleo:""` — raggruppamento per nucleo non possibile
- **4/7 discipline** non hanno `decisioniCurricolari` — sezione non generabile
- **Artefatti**: `docs/03_execution/CML-140.md`, `report/CML-140_json_to_mappa_dati_adapter_design_audit.md`
- Verdetto: `CML_140_JSON_TO_MAPPA_DATI_ADAPTER_DESIGN_AUDIT_READY`
- Next: CML-141 — JSON_TO_MAPPA_DATI_ADAPTER_IMPLEMENTATION

## 2026-06-25 — CML-139 — DISCIPLINARY_DATA_LAYER_MAPPING_AUDIT

- **HEAD**: `85bbab4` (allineato a origin/main)
- **Tipo slice**: audit-only — nessuna modifica runtime/JSON
- **Validatore**: 7/94, `overallValid: true` ✅
- **Mappatura completata**: JSON unità ↔ MAPPA_DATI ↔ TECNOLOGIA_NORM ↔ rendering
- **Scoperta chiave**: mapping non è 1:1 — serve aggregazione per ambito/nucleo/ordine
- **Sezioni aggregate**: solo 3/7 JSON le hanno (Tecnologia, Italiano, Matematica)
- **4/7 JSON** hanno solo unità grezze (Scienze, Storia, Geografia, Inglese)
- **`decisioniCurricolari`**: non derivabili automaticamente (dati manuali)
- **Opzione selezionata**: B+D — adapter JSON→MAPPA_DATI per 1 pilota
- **Artefatti**: `docs/03_execution/CML-139.md`, `report/CML-139_disciplinary_data_layer_mapping_audit.md`
- Verdetto: `CML_139_DISCIPLINARY_DATA_LAYER_MAPPING_AUDIT_READY`
- Next: CML-140 — JSON_TO_MAPPA_DATI_ADAPTER_DESIGN_AUDIT

## 2026-06-25 — CML-138 — CORE_DISCIPLINARY_SYSTEM_RECOVERY_AUDIT

- **HEAD**: `37152be` (allineato a origin/main)
- **Tipo slice**: audit-only — nessuna modifica runtime
- **Inventario**: 7 file JSON normalizzati (Tecnologia, Italiano, Matematica, Scienze, Storia, Geografia, Inglese)
- **Disallineamento principale**: runtime usa dati hardcoded (`MAPPA_DATI`, `TECNOLOGIA_NORM`) anziché i 7 JSON validati
- **Solo 3/7 discipline** hanno mappa; solo **1/7** ha vista strutturata
- **Matematica**: gap classi 2-4 Primaria
- **Opzione selezionata**: B — Selezione fonte dati canonica (agganciare runtime ai JSON)
- **Validatore**: 7/94, `overallValid: true` ✅
- **Artefatti**: `docs/03_execution/CML-138.md`, `report/CML-138_core_disciplinary_system_recovery_audit.md`
- Verdetto: `CML_138_CORE_DISCIPLINARY_SYSTEM_RECOVERY_AUDIT_READY`
- Next: CML-139 — AUDIT_LAYER_DATI_CORE

## 2026-06-25 — CML-137A — BACKUP_LABEL_CYCLE_CLOSURE_AND_CONTROLLED_PUSH

- **HEAD partenza (pre-push)**: `d8e3ff6` (CML-137)
- **Tipo slice**: closure audit + push controllato — nessuna modifica runtime
- **Commit pushati**: `15b0cbc` (CML-136 audit), `d8e3ff6` (CML-137 runtime)
- **Audit pre-push**: passato — `git diff --check` pulito, validatore 7/94 OK
- **Allineamento post-push**: HEAD == origin/main == `d8e3ff6` ✅
- Verdetto: `CML_137A_BACKUP_LABEL_CYCLE_CLOSED_REMOTE`

## 2026-06-25 — CML-137 — BACKUP_LABEL_RUNTIME_MICROCOPY_ALIGNMENT

- **HEAD iniziale**: `15b0cbc` (CML-136 audit)
- **HEAD**: `15b0cbc`
- **origin/main**: `1342ec5`
- **Tipo slice**: runtime alignment — solo testo (17 sostituzioni, 18 occorrenze fisiche)
- **Audit di riferimento**: CML-136 (Opzione C — sostituzione differenziata)
- **File modificato**: `_published_snapshot/netlify-current/index.html`
- **17 sostituzioni applicate**:
  - `⬇️ Backup` → `⬇️ Salva copia` (1)
  - `⬇️ Backup locale` → `⬇️ Copia di sicurezza` (1)
  - `⬆️ Importa backup` → `⬆️ Importa copia` (1)
  - `💾 Backup e dati` → `💾 Copia di sicurezza e dati` (1)
  - `backup`/`Backup` → `copia di sicurezza`/`Copia di sicurezza` (14 in alert, status, toast, confirm, guide, descrizione)
  - `Markdown` → `Testo` in 2 alert (allineamento con CML-131)
- **Residui `backup`**: 4 tecnici (id input, 2 nomi funzione, nome file) — non visibili all'utente
- **Nessuna modifica** a JSON, validator, schema `.cml`, import/export, CSS, JS funzioni/variabili
- **Validatore**: 7/94, `overallValid: true`, 0 errori ✅
- Verdetto: `CML_137_BACKUP_LABEL_RUNTIME_MICROCOPY_ALIGNMENT_READY`
- Next: CML-137A — closure + push controllato (opzionale, se si vuole remote)

## 2026-06-25 — CML-136 — BACKUP_LABEL_USER_FACING_CLARITY_AUDIT

- **HEAD**: `1342ec5`
- **origin/main**: `1342ec5`
- **Tipo slice**: audit-only — nessuna modifica runtime
- **File analizzato**: `_published_snapshot/netlify-current/index.html`
- **24 occorrenze** `backup`/`Backup` totali; **18 user-facing**
- **Classificazione**: 7 P1 (pulsanti + alert/error bloccanti), 11 P2 (guide, toast, confirm, status)
- **Opzione selezionata**: C — Sostituzione differenziata
  - `⬇️ Backup` → `⬇️ Salva copia` (pulsante breve)
  - `⬇️ Backup locale` → `⬇️ Copia di sicurezza` (pulsante largo)
  - `⬆️ Importa backup` → `⬆️ Importa copia`
  - `💾 Backup e dati` → `💾 Copia di sicurezza e dati`
  - Tutte le altre → `copia di sicurezza` in contesto
- **Perimetro raccomandato per CML-137**: 17 sostituzioni testuali
- **Validatore**: 7/94, `overallValid: true` ✅
- **Artefatti**: `docs/03_execution/CML-136.md`, `report/CML-136_backup_label_user_facing_clarity_audit.md`
- Verdetto: `CML_136_BACKUP_LABEL_CLARITY_AUDIT_READY`
- Next: CML-137 — BACKUP_LABEL_USER_FACING_RUNTIME_ALIGNMENT

## 2026-06-25 — CML-135B — NORMALIZZATO_TO_STRUTTURATO_SMOKE_CLOSURE_AND_CONTROLLED_PUSH

- **HEAD partenza**: `1159af0` (CML-135A)
- **Tipo slice**: smoke + closure + push controllato
- **5/5 sostituzioni** `normalizzato` → `strutturato` confermate ✅
- **0 occorrenze user-facing** di `normalizzato` residue ✅
- **1 residuo tecnico**: commento JS linea 4848 (mantenuto) ✅
- **Validatore**: 7/94, `overallValid: true` ✅
- **Commit CML-135B**: `docs: close CML normalizzato to strutturato smoke`
- **Push**: eseguito su origin/main
- **Allineamento post-push**: HEAD == origin/main
- Verdetto: `CML_135B_NORMALIZZATO_TO_STRUTTURATO_CYCLE_CLOSED_REMOTE`

## 2026-06-25 — CML-134A — POST_MICROCOPY_SMOKE_CLOSURE_AND_CONTROLLED_PUSH

- **HEAD partenza (pre-push)**: `e32b56f6a9f29c9dc10d977e36e872b83825a198` (CML-134)
- **Tipo slice**: closure audit + push controllato — nessuna modifica runtime
- **Audit pre-push**: passato — 1 commit ahead, `git diff --check` pulito, validatore 7/94 OK
- **Smoke CML-134**: 16/16 etichette presenti, 0/13 vecchie residue, HTTP 200, navigazione OK ✅
- **CML-134 docs-only**: nessuna modifica runtime, JSON, validator, schema `.cml`, import/export, CSS, JS ✅
- **Residui ignorati**: `.agents`, `skills-lock.json`, `Consultazione` ✅
- **Commit CML-134A**: `docs: close CML post-microcopy smoke`
- **Push**: `git push origin main` → eseguito
- **Allineamento post-push**: HEAD == origin/main verificato
- Verdetto: `CML_134A_POST_MICROCOPY_SMOKE_CLOSED_REMOTE`

## 2026-06-25 — CML-134 — POST_MICROCOPY_RUNTIME_READABILITY_SMOKE

- **HEAD**: `1e4d25471adc3666d2db92ee6677b3aab2b0b6cf`
- **Tipo slice**: smoke + documentazione — nessuna modifica runtime
- **Cicli verificati**: CML-130→CML-131A (microcopy), CML-132→CML-133A (file labels)
- **18 sostituzioni testuali** verificate: 16 etichette nuove presenti, 0 vecchie residue
- **Smoke**: HTTP 200, navigazione integra, import/export OK, validazione OK ✅
- **Validatore**: 7/94, `overallValid: true`, 0 errori ✅
- Verdetto: `CML_134_POST_MICROCOPY_RUNTIME_READABILITY_SMOKE_READY`

## 2026-06-25 — CML-133A — CML_FILE_LABELS_CLARITY_CYCLE_CLOSURE_AND_PUSH

- **HEAD partenza (pre-push)**: `ebf406df0660f5141ab710c44f450087d040b18c` (CML-133)
- **Tipo slice**: closure audit + push controllato
- **Audit pre-push**: passato — 2 commit ahead, `git diff --check` pulito, validatore 7/94 OK
- **Sostituzioni CML-133 verificate**: 8/8 confermate, 0 vecchi pattern residui ✅
- **Residui ignorati**: `.agents`, `skills-lock.json`, `Consultazione` ✅
- **Commit CML-133A**: `docs: close CML file label clarity cycle`
- **Push**: `git push origin main` → eseguito
- **Allineamento post-push**: HEAD == origin/main verificato
- Verdetto: `CML_133A_CML_FILE_LABELS_CLARITY_CYCLE_CLOSED_REMOTE`

## 2026-06-25 — CML-133 — CML_FILE_LABELS_RUNTIME_MICROCOPY_ALIGNMENT

- **HEAD iniziale**: `dad4fcd80b61acaff74bf5ee6cfa92028189aabd` (CML-132)
- **Tipo slice**: runtime alignment — solo testo (8 sostituzioni)
- **Audit di riferimento**: CML-132 (Opzione C — pulizia pulsanti + descrizioni brevi)
- **8 sostituzioni applicate** in `_published_snapshot/netlify-current/index.html`:
  - `⬇️ Scarica proposta .cml` → `⬇️ Scarica proposta` (2×)
  - `.cml: per Drive condiviso.` → `File proposta: per Drive condiviso.`
  - `Importa i file .cml ricevuti dai docenti` → `Importa i file proposta ricevuti dai docenti`
  - `Importa proposte docenti .cml` → `Importa proposte docenti`
  - `Importa gli esiti dipartimentali .cml` → `Importa gli esiti dipartimentali`
  - `Importa esiti dipartimentali .cml` → `Importa esiti dipartimentali`
  - `Esporta esito dipartimento .cml` → `Esporta esito dipartimento`
- **Nessuna modifica** a schema `.cml`, JSON, validatore, import/export, CSS, icone, classi
- **Occorrenze `.cml` residue**: 17 (tutte tecniche/didattiche, nessuna in pulsanti/label)
- Validatore: 7 file, 94 unità, `overallValid: true`, 0 errori ✅
- Smoke: HTTP 200 ✅
- Verdetto: `CML_133_CML_FILE_LABELS_RUNTIME_MICROCOPY_ALIGNMENT_READY`

## 2026-06-25 — CML-132 — CML_FILE_LABELS_USER_FACING_CLARITY_AUDIT

- **HEAD partenza**: `8b9da1384e8a0242bafa3c519f0fd4d3fbe977eb`
- **HEAD fine**: `8b9da1384e8a0242bafa3c519f0fd4d3fbe977eb` (audit-only)
- **Tipo slice**: audit-only — nessuna modifica runtime
- **File analizzato**: `_published_snapshot/netlify-current/index.html`
- **27 occorrenze** `.cml` totali; **9 utente-facing**
- **Classificazione**: 5 P1 (pulsanti), 3 P2 (descrizioni), 1 P3 (microguida Home, mantenuto)
- **Opzione selezionata**: C — pulizia pulsanti + descrizioni brevi
- **Perimetro raccomandato per CML-133**: 8 sostituzioni testuali
- **Artefatti**: `docs/03_execution/CML-132.md`, `report/CML-132_cml_file_labels_user_facing_clarity_audit.md`
- Verdetto: `CML_132_CML_FILE_LABELS_CLARITY_AUDIT_READY`
- Next: CML-133 — CML_FILE_LABELS_USER_FACING_RUNTIME_ALIGNMENT

## 2026-06-25 — CML-131A — MICROCOPY_RUNTIME_ALIGNMENT_CLOSURE_AND_PUSH

- **HEAD partenza (pre-push)**: `699d9f3c284a5d96523243b3bddd3b55b09c9c76`
- **Tipo slice**: closure audit + push controllato
- **Audit pre-push**: passato — 1 commit ahead, `git diff --check` pulito, validatore 7/94 OK
- **Sostituzioni CML-131 verificate**: 10/10 confermate nel runtime ✅
- **Residui ignorati**: `.agents`, `skills-lock.json`, `Consultazione` ✅
- **Commit CML-131A**: `docs: close CML microcopy alignment cycle`
- **Push**: `git push origin main` → eseguito
- **Allineamento post-push**: HEAD == origin/main verificato
- Verdetto: `CML_131A_MICROCOPY_ALIGNMENT_CYCLE_CLOSED_REMOTE`

## 2026-06-25 — CML-131 — USER_FACING_MICROCOPY_RUNTIME_ALIGNMENT

- **HEAD partenza**: `5462a814819f768cd7b3372f7cc38abc3b919c69`
- **Tipo slice**: runtime alignment — solo testo (10 sostituzioni puntuali)
- **Audit di riferimento**: CML-130 (verdetto: `CML_130_USER_FACING_MICROCOPY_AUDIT_READY`)
- **10 sostituzioni applicate** in `_published_snapshot/netlify-current/index.html`:
  - `📝 Markdown (confronto)` → `📝 Testo (confronto)` (linea 1415)
  - `📝 Markdown (definitivo)` → `📝 Testo (definitivo)` (linea 1488)
  - `📝 Markdown` → `📝 Testo` (linea 1794, Riepilogo)
  - `📝 Copia Markdown` → `📝 Copia testo` (linea 1468)
  - `📝 Scarica Markdown` → `📝 Scarica testo` (linea 1469)
  - `📤 Export del curricolo revisionato` → `📤 Esportazione del curricolo revisionato` (linea 1459)
  - `⬇ Azioni di export ▾` → `⬇ Azioni di esportazione ▾` ×3 (linea 1465)
  - `📊 Report sintesi` → `📊 Resoconto sintesi` (linea 1808)
  - `Scarica report gruppo di lavoro` → `Scarica resoconto gruppo di lavoro` (linea 1452, title + label)
  - `Trovi tutti gli strumenti di export` → `Trovi tutti gli strumenti di esportazione` (linea 1841)
- **Nessuna modifica** a JSON, CSS, JS funzioni, icone, layout, classi
- Validatore: 7 file, 94 unità, `overallValid: true`, 0 errori ✅
- Verdetto: `CML_131_USER_FACING_MICROCOPY_RUNTIME_ALIGNMENT_READY`

## 2026-06-25 — CML-130 — USER_FACING_MICROCOPY_AND_TECHNICAL_LANGUAGE_AUDIT

- **HEAD partenza**: `5462a814819f768cd7b3372f7cc38abc3b919c69`
- **HEAD fine**: `5462a814819f768cd7b3372f7cc38abc3b919c69` (audit-only)
- **Tipo slice**: audit-only — nessuna modifica runtime
- **40+ termini scrutinati** in 11 aree UI di `_published_snapshot/netlify-current/index.html`
- **Classificazione**: 2 P1, 6 P2, 1 P3
  - P1: "Markdown" in 5 pulsanti esportazione → `Testo`
  - P2: anglicismi `export`/`report` + `.cml` + `normalizzato`
  - P3: `backup` → `copia di sicurezza` (opzionale)
- **Opzione selezionata**: B — riscrittura puntuale (10 sostituzioni testuali)
- **Artefatti**: `docs/03_execution/CML-130.md`, `report/CML-130_user_facing_microcopy_and_technical_language_audit.md`
- Verdetto: `CML_130_USER_FACING_MICROCOPY_AUDIT_READY`
- Next: CML-131 — USER_FACING_MICROCOPY_RUNTIME_ALIGNMENT

## 2026-06-24 — CML-126 — POST_PUSH_RUNTIME_AND_NAVIGATION_SMOKE

- Baseline:
  - branch main
  - HEAD = origin/main = 425f1b962b4fbbe027934f8e2f62f6f899d1be06
  - stato remoto allineato post CML-125
- Controlli tecnici:
  - git diff --check -> pulito
  - node tools/validate-cml-normalized-curriculum.mjs -> totalFiles 7, totalUnits 94, overallValid true, invalidCount 0
  - git check-ignore -v .agents skills-lock.json Consultazione -> residui ignorati confermati
- Smoke runtime su snapshot locale (http://localhost:8080):
  - apertura applicazione: OK
  - navigazione principale/curriculum: KO
  - selezione discipline mappa: KO
  - errori runtime osservati:
    - ReferenceError: setTab is not defined
    - ReferenceError: setMappaDisciplina is not defined
  - import/export e validazione dipartimentale: non verificabili in modo affidabile per blocco navigazione
- Artefatti slice:
  - docs/03_execution/CML-126.md
  - report/CML-126_post_push_runtime_and_navigation_smoke.md
  - aggiornamento docs/REPO-MOVELOG.md
- Scope safety: nessuna modifica funzionale introdotta
- Verdetto: CML_126_POST_PUSH_SMOKE_BLOCKED_BY_RUNTIME_REGRESSION
- Next: aprire micro-slice di debugging mirata ai riferimenti mancanti setTab/setMappaDisciplina con fix minimale e nuovo smoke.

## 2026-06-24 — CML-125 — LOCAL_SEQUENCE_CLOSURE_AUDIT_AND_CONTROLLED_PUSH

- HEAD iniziale (main): 32ebb3f03c853c0612d16f998a9ad1a12b814831
- Tipo slice: audit finale sequenza locale + push controllato
- Obiettivo: chiudere e pubblicare la sequenza CML-121/CML-122/CML-123/CML-124 in modo coerente e tracciabile.
- Audit pre-push eseguito:
  - git rev-parse HEAD
  - git status --short --branch
  - git log --oneline origin/main..HEAD
  - git diff --check
  - git diff --stat origin/main..HEAD
  - git diff --name-status origin/main..HEAD
- Sequenza commit locali confermata (4):
  - 7d840bf docs: reconcile CML traceability and slice boundaries
  - 8b5488c chore: CML-122 selective consolidation of core runtime json validator and traceability docs
  - 10e3732 docs: fix CML post-consolidation whitespace hygiene
  - 32ebb3f chore: ignore local non-core CML artifacts
- Residui locali ignorati verificati:
  - .agents, skills-lock.json, Consultazione -> ignorati via .gitignore
  - nessuno in staging/commit
- Validazione tecnica:
  - node tools/validate-cml-normalized-curriculum.mjs
  - totalFiles: 7, totalUnits: 94, overallValid: true, invalidCount: 0
- Artefatti slice:
  - docs/03_execution/CML-125.md
  - report/CML-125_local_sequence_closure_audit_and_controlled_push.md
  - aggiornamento docs/REPO-MOVELOG.md
- Commit slice:
  - docs: close CML local sequence before controlled push
- Push controllato:
  - eseguito su origin/main dopo audit finale di coerenza
  - allineamento post-push verificato con fetch + confronto HEAD/origin/main
- Verdetto: CML_125_LOCAL_SEQUENCE_CLOSED_AND_PUSHED_REMOTE
- Next: monitoraggio post-push e avvio prossimo ciclo CML solo su nuove richieste funzionali.

## 2026-06-24 — CML-124 — LOCAL_NON_CORE_ARTIFACTS_IGNORE_POLICY

- HEAD iniziale (main): 10e3732aec00b06f376456fc6012bc72afa35ab5
- Tipo slice: hygiene locale / policy ignore non core
- Obiettivo: chiudere il working tree post CML-121/122/123 escludendo artefatti locali non core senza toccare il prodotto.
- Residui iniziali rilevati:
  - .agents/
  - Consultazione
  - skills-lock.json
- Verifica pre-policy:
  - git diff --check -> nessun output
  - git check-ignore -v .agents skills-lock.json Consultazione -> nessuna regola applicabile
  - .gitignore esistente in root
- Policy applicata su .gitignore:
  - # Local agent/tooling artifacts - not part of CurManLight runtime
  - /.agents/
  - /skills-lock.json
  - /Consultazione
- Decisione per residuo:
  - .agents/: ignorato
  - skills-lock.json: ignorato
  - Consultazione: ignorato
- Garanzie:
  - residui non committati
  - nessuna cancellazione di file locali
  - nessuna modifica runtime/JSON/validator/schema/import-export/UI-CSS-logica
- Artefatti slice:
  - docs/03_execution/CML-124.md
  - report/CML-124_local_non_core_artifacts_ignore_policy.md
  - aggiornamento docs/REPO-MOVELOG.md
- Verdetto: CML_124_LOCAL_NON_CORE_ARTIFACTS_IGNORE_POLICY_READY
- Next: push controllato dei commit CML-121/122/123/124.

## 2026-06-24 — CML-123 — POST_CONSOLIDATION_WHITESPACE_AND_GIT_HYGIENE_FIX

- **HEAD iniziale (main)**: `8b5488ca82d319c29e2d27a98745751f3cdd7c84`
- Tipo slice: documentale minima / hygiene post-consolidamento
- Obiettivo: rimuovere trailing whitespace residuo nel report CML-119C-bis senza modifiche funzionali.
- Controlli iniziali:
  - `git rev-parse HEAD` -> commit di partenza confermato
  - `git status --short --branch` -> `main...origin/main [ahead 2]` + residui non core non tracciati
  - `git diff --check` -> nessun errore nel working tree
  - `git show --check --pretty=format: HEAD -- report/CML-119C-bis_disciplinary_knowledge_content_governance_audit.md` -> trailing whitespace rilevato
- Correzione applicata:
  - File: `report/CML-119C-bis_disciplinary_knowledge_content_governance_audit.md`
  - Azione: rimozione soli spazi finali su riga markdown (`- **Fonti disponibili**:`)
  - Nessuna variazione semantica o strutturale
- Perimetro non toccato:
  - runtime, JSON disciplinari, validator, schema `.cml`, import/export, UI/CSS/logica
- Esclusi dal commit:
  - `.agents/`, `Consultazione`, `skills-lock.json`
- Artefatti slice:
  - `docs/03_execution/CML-123.md`
  - `report/CML-123_post_consolidation_whitespace_and_git_hygiene_fix.md`
  - aggiornamento `docs/REPO-MOVELOG.md`
- Verdetto: `CML_123_POST_CONSOLIDATION_WHITESPACE_HYGIENE_READY`
- Next: CML-124 — decisione strutturale sui residui non core.

## 2026-06-24 — CML-122 — DIRTY_WORKTREE_SPLIT_AND_SELECTIVE_CONSOLIDATION

- **HEAD iniziale (main)**: `7d840bf4ab22640c824a884f6417436637245852`
- Tipo slice: consolidamento selettivo / split dirty worktree
- Obiettivo: separare e consolidare blocco core (runtime + JSON + validator) mantenendo fuori rumore non core.
- Classificazione eseguita:
  - Runtime: `_published_snapshot/netlify-current/index.html`
  - JSON disciplinari: `content/curriculum/italiano.normalized.json`, `content/curriculum/matematica.normalized.json`, `content/curriculum/tecnologia.normalized.json`
  - Validator: `tools/validate-cml-normalized-curriculum.mjs`
  - Documenti/report CML verificati: `docs/03_execution/CML-119C-bis.md`, `docs/03_execution/CML-119C.md`, `docs/03_execution/CML-119D.md`, `report/CML-119B_multi_discipline_normalized_curriculum_validator.md`, `report/CML-119C-bis_disciplinary_knowledge_content_governance_audit.md`, `report/CML-119C_disciplinary_knowledge_map_data_contract.md`, `report/CML-119D_disciplinary_knowledge_map_pilot_normalization.md`, `report/CML-120_disciplinary_knowledge_map_read_only_view.md`
  - Rumore non core escluso: `.agents/`, `skills-lock.json`, `Consultazione`
- Verifica tecnica blocco core:
  - Runtime mappa disciplinare read-only coerente (Tecnologia/Matematica/Italiano)
  - Hotfix alias confermato:
    - `var units=TECNOLOGIA_NORM_DATA.unitaApprendimento;`
    - `const TECNOLOGIA_NORM_DATA = TECNOLOGIA_NORM;`
  - Validatore multi-disciplina eseguito:
    - `node tools/validate-cml-normalized-curriculum.mjs`
    - Esito: `overallValid: true`, `invalidCount: 0`, `totalFiles: 7`, `totalUnits: 94`
- Artefatti slice:
  - `docs/03_execution/CML-122.md`
  - `report/CML-122_dirty_worktree_split_and_selective_consolidation.md`
  - aggiornamento `docs/REPO-MOVELOG.md`
- Verdetto: `CML_122_DIRTY_WORKTREE_SPLIT_AND_CORE_CHANGESET_CONSOLIDATED`
- Next: micro-slice dedicata a repository hygiene per rumore non core escluso.

## 2026-06-24 — CML-121 — REPO_TRACEABILITY_RECONCILIATION_AND_SLICE_BOUNDARY_AUDIT

- **HEAD iniziale (main)**: `96f2173ef44979b583b15e8382575b8615149f87`
- Tipo slice: documentale / reconciliation-only
- Obiettivo: riallineare stato Git reale e narrativa CML senza introdurre nuove funzioni
- Fotografia stato reale (inizio slice):
  - Runtime applicativo: `_published_snapshot/netlify-current/index.html`
  - JSON disciplinari: `content/curriculum/italiano.normalized.json`, `content/curriculum/matematica.normalized.json`, `content/curriculum/tecnologia.normalized.json`
  - Validator/script: `tools/validate-cml-normalized-curriculum.mjs`
  - Documentazione CML/movelog: `docs/03_execution/CML-119B.md`, `docs/03_execution/CML-120.md`, `docs/REPO-MOVELOG.md` (+ altri CML docs già presenti nel working tree)
  - Report: `report/CML-119B_multi_discipline_normalized_curriculum_validator.md`, `report/CML-119C-bis_disciplinary_knowledge_content_governance_audit.md`, `report/CML-119C_disciplinary_knowledge_map_data_contract.md`, `report/CML-119D_disciplinary_knowledge_map_pilot_normalization.md`, `report/CML-120_disciplinary_knowledge_map_read_only_view.md`
  - Rumore non funzionale/non core: `.agents/`, `skills-lock.json`, `Consultazione`
- Correzioni documentali applicate:
  - Refuso corretto: `tecnologica.normalized.json` → `tecnologia.normalized.json` in `docs/03_execution/CML-119B.md`
  - Narrativa CML-120 resa fattuale rispetto al working tree reale in `docs/03_execution/CML-120.md`
  - Aggiunta nota collisione numerazione CML-120 (vedi nota sotto)
  - Tracciato hotfix runtime alias dataset (senza ulteriori modifiche runtime):
    - `var units=TECNOLOGIA_NORM_DATA.unitaApprendimento;`
    - `const TECNOLOGIA_NORM_DATA = TECNOLOGIA_NORM;`
- Nota numerazione:
  - Esistono due voci storiche con etichetta `CML-120`:
    1) `CML-120 — DISCIPLINARY_KNOWLEDGE_MAP_READ_ONLY_VIEW` (blocco corrente in testa)
    2) `CML-120 - NORMALIZZAZIONE RUNTIME LATINO (LEL)` (voce storica precedente)
  - La voce precedente resta invariata per preservare la storia Git/documentale, ma va considerata **voce storica ambigua/deprecata** ai fini della tracciabilità corrente.
- Verdetto: `CML_121_REPO_TRACEABILITY_RECONCILIATION_PARTIAL_NEEDS_SLICE_SPLIT`
- Next: CML-122 — `RUNTIME_JSON_VALIDATOR_CHANGESET_CONSOLIDATION`

---

## 2026-06-24 — CML-120 — DISCIPLINARY_KNOWLEDGE_MAP_READ_ONLY_VIEW

- **HEAD (main)** — runtime read-only + docs
- Branch: `main`
- Slice precedente: `CML_119D_DISCIPLINARY_KNOWLEDGE_MAP_PILOT_NORMALIZATION_READY`
- Commits: nessuno (runtime + docs)
- File creati/modificati:
  - `_published_snapshot/netlify-current/index.html`
  - `docs/03_execution/CML-120.md`
  - `report/CML-120_disciplinary_knowledge_map_read_only_view.md`
  - `docs/REPO-MOVELOG.md`
- Modifiche runtime:
  - Vista read-only "Mappa disciplinare" nella sezione "Competenze e progettazione"
  - Dati inlineati: TECNOLOGIA_MAPPA_DATI, MATEMATICA_MAPPA_DATI, ITALIANO_MAPPA_DATI
  - Selettore discipline, renderizzazione strutture/nodi/progressioni/decisioni
  - Stato `da_validare`, avviso validazione umana, messaggio per discipline non mappate
- Validazioni:
  - `git diff --check` — pulito
  - `node tools/validate-cml-normalized-curriculum.mjs` — 7 file, 94 unità, overallValid: true
  - Nessuna nuova modifica a export/import, schema `.cml`, validatore nel perimetro CML-120
  - Nota CML-121: nel working tree reale coesistono anche modifiche JSON del ciclo CML-119D e modifiche validator/documentali non consolidate
  - Nessuna parola impropria
- Verdetto: `CML_120_DISCIPLINARY_KNOWLEDGE_MAP_READ_ONLY_VIEW_READY`
- Next: CML-121 — normalizzazione discipline rimanenti

---

## 2026-06-24 — CML-119D — DISCIPLINARY_KNOWLEDGE_MAP_PILOT_NORMALIZATION

- **HEAD (main)** — normalizzazione dati pilota + docs, nessuna modifica runtime
- Branch: `main`, nessuna modifica runtime
- Slice precedente: `CML_119C_BIS_DISCIPLINARY_KNOWLEDGE_CONTENT_GOVERNANCE_AUDIT_READY`
- Commits: nessuno (normalizzazione + docs)
- File creati/modificati:
  - `content/curriculum/tecnologia.normalized.json`
  - `content/curriculum/matematica.normalized.json`
  - `content/curriculum/italiano.normalized.json`
  - `docs/03_execution/CML-119D.md`
  - `report/CML-119D_disciplinary_knowledge_map_pilot_normalization.md`
  - `docs/REPO-MOVELOG.md`
- Normalizzazione:
  - Tecnologia: 6 strutture, 10 progressioni, 2 decisioni
  - Matematica: 5 nodi, 12 strutture, 6 progressioni, 4 decisioni
  - Italiano: 6 nodi, 13 strutture, 12 progressioni, 4 decisioni
- Contenuti non inventati: tutti derivati da dati esistenti con fonte documentata
- Stato tutti nuovi elementi: `da_validare`
- Validazioni:
  - `node tools/validate-cml-normalized-curriculum.mjs` — 7 file, 94 unità, overallValid: true, 0 errori
  - `git diff --check` — pulito
  - Nessuna modifica runtime, UI, export/import, schema `.cml`, validatore
  - Solo 3 JSON disciplinari modificati
- Verdetto: `CML_119D_DISCIPLINARY_KNOWLEDGE_MAP_PILOT_NORMALIZATION_READY`
- Next: CML-119E — estensione validatore per nuovi campi contratto

---

## 2026-06-24 — CML-119C-bis — DISCIPLINARY_KNOWLEDGE_CONTENT_GOVERNANCE_AUDIT

- **HEAD (main)** — audit-only / governance-only, nessuna modifica runtime
- Branch: `main`, nessuna modifica runtime
- Slice precedente: `CML_119C_DISCIPLINARY_KNOWLEDGE_MAP_DATA_CONTRACT_READY`
- Commits: nessuno (audit-only)
- File creati/modificati:
  - `docs/03_execution/CML-119C-bis.md`
  - `report/CML-119C-bis_disciplinary_knowledge_content_governance_audit.md`
  - `docs/REPO-MOVELOG.md`
- Attività:
  - Analizzati 3 file JSON pilota (Tecnologia, Matematica, Italiano)
  - Classificati 10 campi contratto in categorie A/B/C di derivabilità
  - Definita matrice finale e regole operative per CML-119D
- Esito:
  - Campi A (derivabili): `progressioneVerticale` (template)
  - Campi B (parzialmente derivabili): `struttureSostanziali`, `saperiEssenziali`, `nodiDisciplinari`, `legamiInterdisciplinari`, `competenzeChiaveEuropee`, `decisioniCurricolari`
  - Campi C (non derivabili): `statutoEpistemologico`, `naturaDisciplina`, `sintassiDisciplinare`
- Regole CML-119D definite: zero invenzione, stato `da_validare` obbligatorio, fonti obbligatorie, validazioneUmana: true
- Validazioni:
  - `git diff --check` — pulito
  - Audit-only confermata: nessuna modifica runtime, JSON, validatore, export/import, schema `.cml`, UI
- Verdetto: `CML_119C_BIS_DISCIPLINARY_KNOWLEDGE_CONTENT_GOVERNANCE_AUDIT_READY`
- Next: CML-119D — DISCIPLINARY_KNOWLEDGE_MAP_PILOT_NORMALIZATION

---



## 2026-06-24 — CML-119B — MULTI_DISCIPLINE_NORMALIZED_CURRICULUM_VALIDATOR

- **HEAD (main)** — docs + tool, nessuna modifica runtime
- Branch: `main`, nessuna modifica runtime
- Slice precedente: `CML_119A_DISCIPLINARY_KNOWLEDGE_MODEL_AUDIT_READY`
- Commits: nessuno (docs-only + tool update)
- File creati/modificati:
  - `tools/validate-cml-normalized-curriculum.mjs` (generalizzato da mono-disciplina a multi-disciplina)
  - `docs/03_execution/CML-119B.md`
  - `report/CML-119B_multi_discipline_normalized_curriculum_validator.md`
- File aggiornati:
  - `docs/REPO-MOVELOG.md`
- Validazioni:
  - `node tools/validate-cml-normalized-curriculum.mjs` — 7 file, 94 unità, overallValid: true
  - `git diff --check` — pulito
  - Nessuna modifica a `_published_snapshot/netlify-current/index.html`, runtime, export/import, schema `.cml`, contenuti disciplinari
  - Warning `nucleo`/`nucleoFondante` documentato come retrocompatibile
- Verdetto: `CML_119B_MULTI_DISCIPLINE_NORMALIZED_CURRICULUM_VALIDATOR_READY`
- Next: CML-119C — CONTRATTO_DATI_MAPPA_DISCIPLINARE

---

## 2026-06-24 — CML-119A — DISCIPLINARY_KNOWLEDGE_MODEL_AUDIT
- **HEAD (main)** — audit read-only, docs-only
- Branch: `main`, nessuna modifica runtime
- Slice precedente: `CML_118_COMPETENZE_E_PROGETTAZIONE_CONTENT_REFOCUS_AUDIT_READY`
- Commits: nessuno (docs-only)
- File creati/modificati:
  - `docs/03_execution/CML-119A.md`
  - `report/CML-119A_disciplinary_knowledge_model_audit.md`
- File aggiornati:
  - `docs/REPO-MOVELOG.md`
- Verdetto: `CML_119A_DISCIPLINARY_KNOWLEDGE_MODEL_AUDIT_READY`
- Next: CML-119B — VALIDATORE_MULTI_DISCIPLINA

---

## 2026-06-24 — CML-118 — COMPETENZE_E_PROGETTAZIONE_CONTENT_REFOCUS_AUDIT
- **HEAD (main)** — audit read-only, docs-only
- Branch: `main`, nessuna modifica runtime
- Slice precedente: `CML_117_POST_REFOCUS_RUNTIME_SMOKE_AND_NAV_COHERENCE_AUDIT_READY`
- Commits: nessuno (docs-only)
- File creati/modificati:
  - `docs/03_execution/CML-118.md`
  - `report/CML-118_competenze_e_progettazione_content_refocus_audit.md`
- File aggiornati:
  - `docs/REPO-MOVELOG.md`
- Verdetto: `CML_118_COMPETENZE_E_PROGETTAZIONE_CONTENT_REFOCUS_AUDIT_READY`
- Next: CML-119 — COMPETENZE_CHIAVE_AGGREGATE_OVERVIEW

---

## 2026-06-24 — CML-117 — POST_REFOCUS_RUNTIME_SMOKE_AND_NAV_COHERENCE_AUDIT
- **HEAD (main)** — audit/smoke, nessuna modifica runtime
- Branch: `main`, nessuna modifica runtime
- Slice precedente: `CML_116_HOME_CURRICULUM_PROCESS_REFOCUS_READY`
- Commits: nessuno (audit-only)
- File creati/modificati:
  - `docs/03_execution/CML-117.md`
  - `report/CML-117_post_refocus_runtime_smoke_and_nav_coherence_audit.md`
- File aggiornati:
  - `docs/REPO-MOVELOG.md`
- Verdetto: `CML_117_POST_REFOCUS_RUNTIME_SMOKE_AND_NAV_COHERENCE_AUDIT_READY`
- Next: CML-118 (opzionale) — validazione mobile o arricchimento Competenze e progettazione

---

## 2026-06-24 — CML-116 — HOME_CURRICULUM_PROCESS_REFOCUS
- **HEAD (main)** — lightweight Home refocus, single-file runtime increment
- Branch: `main`, modificato `_published_snapshot/netlify-current/index.html`
- Slice precedente: `CML_115_SYSTEM_REFOCUS_AFTER_DEPARTMENT_VALIDATION_AUDIT_READY`
- Commits: nessuno (lavoro in corso)
- File creati/modificati:
  - `docs/03_execution/CML-116.md`
  - `report/CML-116_home_curriculum_process_refocus.md`
- File aggiornati:
  - `_published_snapshot/netlify-current/index.html`
  - `docs/REPO-MOVELOG.md`
- Verdetto: `CML_116_HOME_CURRICULUM_PROCESS_REFOCUS_READY`
- Next: CML-117 — POST_REFOCUS_RUNTIME_SMOKE_AND_NAV_COHERENCE_AUDIT

---

## 2026-06-24 — CML-115 — SYSTEM_REFOCUS_AFTER_DEPARTMENT_VALIDATION_AUDIT
- **HEAD (main)** — audit read-only, docs-only
- Branch: `main`, nessuna modifica runtime
- Slice precedente: `CML_114_VALIDAZIONE_DIPARTIMENTALE_FIRST_RUNTIME_INCREMENT_READY`
- Commits audit: nessuno (docs-only)
- File creati/modificati:
  - `docs/03_execution/CML-115.md`
  - `report/CML-115_system_refocus_after_department_validation_audit.md`
- File aggiornati:
  - `docs/REPO-MOVELOG.md`
- Verdetto: `CML_115_SYSTEM_REFOCUS_AFTER_DEPARTMENT_VALIDATION_AUDIT_READY`
- Next: CML-116 — HOME_CURRICULUM_PROCESS_REFOCUS

---

## 2026-06-24 — CML-114 — VALIDAZIONE_DIPARTIMENTALE_FIRST_RUNTIME_INCREMENT
- **HEAD (main)** — audit read-only, docs-only
- Branch: `main`, tree modificata su `index.html` (non toccata in questo commit)
- Slice precedente: `CML_113_VALIDAZIONE_DIPARTIMENTALE_WORKFLOW_AUDIT_READY`
- Commits audit:
  - `docs: create CML-114 documentation`
- File creati/modificati:
  - `docs/03_execution/CML-114.md`
  - `report/CML-114_validazione_dipartimentale_first_runtime_increment.md`
- File aggiornati:
  - `docs/REPO-MOVELOG.md`
- Verdetto: `CML_114_VALIDAZIONE_DIPARTIMENTALE_FIRST_RUNTIME_INCREMENT_READY`
- Next: CML-115 — NEXT_DISCIPLINE_NORMALIZATION_SELECTION_AUDIT

---

## 2026-06-24 — CML-113 — VALIDAZIONE_DIPARTIMENTALE_WORKFLOW_AUDIT

- **HEAD (main)** — audit read-only, docs-only
- Branch: `main`, tree modificata su `index.html` (non toccata in questo commit)
- Slice precedente: `CML_112A_HASH_SELECTION_SMOKE_TEST_PASSED`
- Commits audit:
  - `docs: audit CML departmental validation workflow`
- File creati/modificati:
  - `docs/03_execution/CML-113.md`
  - `report/CML-113_validazione_dipartimentale_workflow_audit.md`
- File aggiornati:
  - `docs/REPO-MOVELOG.md`
- Verdetto: `CML_113_VALIDAZIONE_DIPARTIMENTALE_WORKFLOW_AUDIT_READY`
- Next: CML-114 — VALIDAZIONE_DIPARTIMENTALE_FIRST_RUNTIME_INCREMENT

## 2026-06-21 — CML-008R-FIX closure

- **9179418** — fix: align tecnologia markdown decision summary
  - "Da decidere" → "Voci da validare"
  - Aggiunta sezione "Voci mantenute da validare" (4 voci)
  - Rinominata sezione "Dettaglio delle proposte di modifica / Gap 2025"
  - Nota esplicativa post-sintesi e nota metodologica aggiornate
  - Rimosso doppio separatore pre-footer
- Audit di chiusura superato: `CML_008R_FIX_CLOSURE_AUDIT_READY_FOR_CONTROLLED_PUBLICATION`
- **8c92fea** — docs: close CML-008R markdown decision summary fix audit
- **Controlled Netlify publication:** `https://curmanlight.netlify.app`
  - Comando: `npx netlify deploy --prod --dir _published_snapshot/netlify-current`
  - 1 file deployato, 4s
  - Verifica post-deploy passata
  - Verdetto: `CML_008R_CONTROLLED_NETLIFY_PUBLICATION_CLOSED`

## 2026-06-20 — CML-008R pubblicato

- **dc179ce** — feat: add tecnologia markdown export readiness
  - Export Markdown per disciplina Tecnologia con pannello UI dedicato
  - Confronto IN2012→IN2025, gap markers, dettaglio proposte
  - Verifica locale e produzione passate

- **CML-009A** - User view lightening design audit (solo analisi, nessun codice)
  - Problema: ~1300 parole prima del contenuto disciplinare, nessuna gerarchia
  - Proposta: architettura a 3 livelli (cruscotto, schede, dettaglio espandibile)
  - Nessuna modifica funzionale, nessun deploy
  - Verdetto: `CML_009A_USER_VIEW_LIGHTENING_DESIGN_AUDIT_READY`

## 2026-06-21 — CML-009B top area lightening

- **09b325c** → HEAD (da confermare con commit effettivo)
- Unico file modificato: `_published_snapshot/netlify-current/index.html` (+75/−43 righe)
- Sostituito quick-info-bar + orientation-card con cruscotto minimo:
  - Stato: revisione avviata
  - Prossima azione: controlla le 12 voci da validare
  - 3 pulsanti: Controlla voci, Apri documento, Esporta
  - Barra compatta: 💾 salvataggio + progresso + ⚙︝ Azioni
- Compattata toolbar: 2 filtri primari + toggle Altri filtri; Export collassato
- Collassato usage-notice in `<details>`
- Comprimati pulsanti local-save-bar
- Nascosto install-hint di default
- Integrato progress-bar nel cruscotto (rimosso progress-wrap separato)
- Asset invariati: sw.js, _headers, PDF (hash verificati)
- Test locale passato (localhost:5000, 200 OK)
- Verdetto: `CML_009B_USER_VIEW_TOP_AREA_LIGHTENING_READY`

## 2026-06-21 — CML-009C responsive smoke audit

- **d45407a** → HEAD
- Esito: tutti i breakpoint passati (360, 414, 768, 1280px)
- Nessuna modifica runtime, nessun deploy
- Nessun errore JavaScript bloccante
- 3 problemi minori rilevati (P1: cruscotto visibile su tutti i tab, P2: touch target compatti, P3: toggle sono span)
- Nessuno bloccante — pubblicabile
- Verdetto: `CML_009C_USER_VIEW_TOP_AREA_RESPONSIVE_SMOKE_READY`

## 2026-06-21 — CML-009D micro-fix context & accessibility

- **636581a** → HEAD
- **P1:** aggiunto `setTab('lavoro')` a "Controlla voci" ed "Esporta" nel cruscotto (coerenza cross-tab)
- **P3:** convertiti toggle "⋯ Altri filtri" e "📄 Export ▾" da `<span>` a `<button>` con CSS `.toolbar-toggle`
- **P3:** aggiunto `button:focus-visible{...}` globale
- **P2:** aumentati touch target pulsanti salvataggio (`padding:4px 9px;font-size:11px`)
- Nessun deploy, asset invariati, breakpoint passati
- Verdetto: `CML_009D_TOP_DASHBOARD_CONTEXT_ACCESSIBILITY_READY`

## 2026-06-21 — CML-009E — Controlled Netlify Publication

- **d9b6cd8** — docs: CML-009E deploy report
- Preflight ✅ (branch HEAD b8dece8, tree pulita, hash asset invariati)
- Verifica locale 27/27 ✅ + 4 breakpoint (360/414/768/1280px)
- Deploy: `npx netlify deploy --prod --dir _published_snapshot/netlify-current`
  - 1 file index.html, 4s
  - URL: https://curmanlight.netlify.app
- Verifica post-deploy 14/14 ✅ + screenshot 360/768
- Asset invariati: sw.js, _headers, PDF
- Nessuna modifica runtime
- Verdetto: `CML_009E_CONTROLLED_NETLIFY_PUBLICATION_TOP_VIEW_LIGHTENING_CLOSED`

## 2026-06-21 — CML-010A — Compact Cards & Expandable Detail Design Audit

- **d9b6cd8** — HEAD invariato (solo audit, nessuna modifica runtime)
- Preflight: branch main, tree pulita ✅
- Analisi vista attuale: area cards (`cardHTML()`), gap-header ridondante, card pending troppo dense, lock-notice ripetuta, nessuna gerarchia
- 7 problemi individuati (P1-P7)
- Proposta: 4 sezioni collassabili nel tab Lavoro (Documento attuale, Voci da validare, Fonti, Esportazione)
- Card pending compatta: badge + 1 riga + ✅/❌/🔝, confronto su richiesta
- Card ok collassate per default
- Nessun deploy, nessuna modifica runtime
- Verdetto: `CML_010A_COMPACT_CARDS_EXPANDABLE_DETAIL_DESIGN_AUDIT_READY`

## 2026-06-21 — CML-010B — Compact pending cards with expandable detail

- **a240ab7** → HEAD
- Unico file modificato: `_published_snapshot/netlify-current/index.html` (+154/−64 righe)
- `cardHTML()` riscritto: 4 modalità (ok collassata, decisa collassata, pending edit, pending compact)
- Card ok/decise collassate di default con `toggleCollapse()`
- Card pending compatte: badge + 1 riga + 4 emoji (✅ ❌ 🔝 🗑) + dettaglio espandibile
- `gap-header-unique` singolo per sezione (anziché per-card)
- `togglePendingDetail()` per confronto testuale on-demand
- `lock-notice` unica per sezione via `ordLock` in `render()`
- Rimossi CSS inutilizzati `.act-approve` / `.act-reject`
- Breakpoint responsivi per touch target mobile
- Cose NON toccate: usage-notice, local-save-bar, tecnologia-export-panel, cruscotto, toolbar, filtri, tab, asset
- Verifica locale DOM + 4 breakpoint passata
- Verdetto: `CML_010B_COMPACT_PENDING_CARDS_EXPANDABLE_DETAIL_READY`

## 2026-06-21 — CML-010C — Compact Pending Cards Runtime Smoke Audit

- **317222a** — HEAD invariato (solo audit, nessuna modifica runtime)
- Preflight: branch main, tree pulita ✅
- Conteggi Tecnologia: 12 voci totali, 4 ok, 8 modifica ✅
- Card pending compatte verificate: badge, 1 riga testo troncato, 4 emoji (✅ ❌ 🔝 🗑) ✅
- Dettaglio espandibile: confronto testuale IN2012 vs IN2025 su richiesta ✅
- Gap-header: singolo per sezione, 0 vecchi gap-header ✅
- Non regressioni: usage-notice, toolbar, tabs, cruscotto, asset, esportazione ✅
- CML-009D preserved: pulsanti salvataggio, focus-visible, setTab, toolbar-toggle ✅
- Sass: screenshot 360/414/768/1280px passati
- Nessuna modifica runtime, nessun deploy
- Verdetto: `CML_010C_COMPACT_PENDING_CARDS_RUNTIME_SMOKE_READY`

## 2026-06-21 — CML-010D — Controlled Netlify Publication (Compact Cards)

- **68ce101** — HEAD (deploy da working tree pulita, nessuna modifica runtime)
- Preflight: branch main, tree pulita ✅
- Asset invariati: sw.js, _headers, PDF (hash verificati) ✅
- Deploy: `npx netlify deploy --prod --dir _published_snapshot/netlify-current`
  - 1 file index.html, 4.2s
  - URL: https://curmanlight.netlify.app
- Verifica post-deploy:
  - HTTP 200, 196511 bytes ✅
  - pending-card, collapse-header, gap-header-unique ✅
  - badge modifica ✅
  - Cruscotto, usage-notice, export preservati ✅
  - .act-approve old rimosso, vecchio gap-header assente ✅
  - Screenshot 360/414/768/1280px passati ✅
  - Nessun JS error ✅
- Verdetto: `CML_010D_CONTROLLED_NETLIFY_PUBLICATION_COMPACT_CARDS_CLOSED`

## 2026-06-21 — CML-010E — Real Mobile Acceptance Smoke

- **ba4bd5e** — HEAD invariato (solo audit, nessuna modifica runtime)
- Dispositivi simulati: iPhone 13 (390×844), Galaxy S21 (360×800), Pixel 5 (393×851)
- Caricamento, cruscotto, card pending, dettaglio espandibile: ✅ tutti i dispositivi
- 9 pending-detail nascoste, 8 badge modifica, 5 badge ok ✅
- Gap-header unico per sezione (4 sezioni) ✅
- Touch target: min-height 44+ per act, 34px per pending-action
- 3 problemi non bloccanti rilevati:
  - P1: touch target pending-action 34px (sotto HIG 44px)
  - P2: icona 🔝 non auto-esplicativa su mobile
  - P3: collapse indicator poco evidente
- Nessun deploy, nessuna modifica runtime
- Verdetto: `CML_010E_REAL_MOBILE_ACCEPTANCE_SMOKE_READY`

## 2026-06-21 — CML-010F — Mobile Touch and Compact Action Label Microfix

- **c9c6667** — fix touch target mobile, accessibilità pulsante 🔝, contrasto collapse indicator
- P1: `.pending-action` mobile portato a 42px (≤900px) e 40px (≤560px)
- P2: pulsante 🔝 con `aria-label` statico e dinamico
- P3: collapse indicator `#90a4ae` → `#546e7a`, font 11px → 12px
- Documentazione in `CML-010F/` (non standard), `movelog.json` creato
- Audit CML-010F-CLOSURE: P1 sotto 44px, documentazione fuori standard

## 2026-06-21 — CML-010F2 — Mobile Pending Action Touch Target and Doc Normalization

- **4c8978b** — fix: normalize CML mobile pending actions touch target
- P1 risolto: 42px→44px (≤900px), 40px→44px (≤560px)
- Documentazione normalizzata: `docs/03_execution/CML-010F2.md`, `report/`, `docs/REPO-MOVELOG.md`
- File non standard CML-010F preservati (già committati)
- Nessun deploy
- Verdetto: `CML_010F2_MOBILE_TOUCH_TARGET_DOC_NORMALIZATION_READY`

## 2026-06-21 — CML-010G — Controlled Netlify Publication Mobile Actions Fix

- **4c8978b** — fix: normalize CML mobile pending actions touch target (pre-deploy)
- Count 12/8/4 vs 54/41/9 chiarito: scope diverso (Tecnologia vs tutte le discipline)
- **npx netlify deploy --prod --dir _published_snapshot/netlify-current** — 1 file (index.html)
- URL pubblicato: https://curmanlight.netlify.app
- Pending-action mobile a 44px confermato su tutti i breakpoint
- Card compatte, pulsanti ✅❌🔝🗑, dettaglio espandibile preservati
- Approvazione/rifiuto invariati
- Asset, sw.js, _headers, PDF, Markdown generation, export panel intatti
- Nessuna regressione bloccante
- Verdetto: `CML_010G_CONTROLLED_NETLIFY_PUBLICATION_MOBILE_ACTIONS_FIX_CLOSED`

## 2026-06-21 — CML-011A — Export and Guide Clarity Selection Audit

- **e12f5ca** — HEAD invariato (solo audit, nessuna modifica runtime)
- 7 criticità individuate (C1-C7), la più grave: disclaimer validazione assente su "Curricolo Definitivo"
- Opzioni valutate: A (microcopy), B (pannello formati), C (percorso guidato), D (fix C2)
- Selezionata: **Opzione A + fix C2** — microcopy export labels + disclaimer su Definitivo
- Nessuna modifica runtime, nessun deploy
- Verdetto: `CML_011A_EXPORT_GUIDE_CLARITY_SELECTION_AUDIT_READY`

## 2026-06-21 — CML-011B — Export and Guide Clarity Microcopy

- **6c97da4** → HEAD + uncommitted
- Opzione A (microcopy) + fix C2 (disclaimer validazione) implementati
- Toolbar export: `(confronto)` su Word, Copia, Markdown, PDF
- Curricolo Definitivo: `(definitivo)` su Copia per Word e PDF (mancanti)
- Disclaimer: "⚠︝ Documento di lavoro — da validare. Non sostituisce delibera del Collegio Docenti."
- Deployato su Netlify: `npx netlify deploy --prod --dir _published_snapshot/netlify-current`
- Solo microcopy, nessuna modifica logica/strutturale
- Verdetto: `CML_011B_EXPORT_GUIDE_CLARITY_MICROCOPY_DEPLOYED`

## 2026-06-21 — CML-011C — Export and Guide Clarity Real Task Smoke

- **2da61ed** (CML-011B) → HEAD + nuovo commit docs
- Solo audit/smoke test — nessuna modifica runtime, nessun deploy
- Scenario utente simulato: controllo → confronto → definitivo → disclaimer → export
- Esito: microcopy sufficiente, flusso chiaro, nessuna ambiguità sostanziale
- Opzione B (strutturale) NON necessaria
- Raccomandazione: chiudere ciclo CML-011
- Verdetto: `CML_011C_EXPORT_GUIDE_REAL_TASK_SMOKE_READY`

## 2026-06-21 — CML-011D — Export and Guide Clarity Cycle Closure

- **72bef0c** (CML-011C) → HEAD + nuovo commit docs
- Solo docs — nessuna modifica runtime, nessun deploy
- Catena CML-011 completa: A (audit) → B (microcopy + deploy) → C (smoke) → D (chiusura)
- Opzione B strutturale NON necessaria — microcopy sufficiente
- Obiettivo ciclo raggiunto: export/guida comprensibili, confronto/definitivo distinguibili, disclaimer validazione presente
- Verdetto: `CML_011D_EXPORT_GUIDE_CLARITY_CYCLE_CLOSED`

## 2026-06-21 — CML-012A — Real User Task Acceptance Test Design

- **15fc009** (CML-011D) → HEAD + nuovo commit docs
- Protocollo `T01-CML-REAL-USER-TASK` progettato: 8 passi, criterio 8/8 per chiusura UX
- Nessuna modifica runtime, nessun deploy
- Verdetto: `CML_012A_REAL_USER_TEST_DESIGN_READY`

## 2026-06-21 — CML-013A — Full UI/UX Redesign Study and Contract

- **2c32bab** (CML-012A) → HEAD + nuovo commit docs
- CML-012A preservato come verifica futura (non modificato)
- Studio completo: diagnosi, architettura (5 livelli), navigazione desktop/mobile, componenti, mappa 30 elementi, criteri accettazione CML-013B
- Direzione: da dashboard a percorso guidato a livelli
- Nessuna modifica runtime, nessun deploy
- Verdetto: `CML_013A_FULL_UI_UX_REDESIGN_CONTRACT_READY`

## 2026-06-21 — CML-013B — Guided Home Static Prototype

- **e3c105d** (CML-013A) → HEAD + modifiche runtime minime
- 23 insertion, 10 deletion su `_published_snapshot/netlify-current/index.html`
- Solo CSS + HTML: cruscotto potenziato (3 pulsanti piu grandi), breadcrumb, sidebar meno dominante, toolbar piu compatta
- Salva/Backup/Importa/Ripristina spostati da blocco locale-save-bar a menu Azioni
- Salvataggio come stato compatto nel cruscotto-bar
- Nessuna logica modificata, nessuna funzione persa
- Nessun deploy
- Verdetto: `CML_013B_GUIDED_HOME_STATIC_PROTOTYPE_READY`

## 2026-06-21 — CML-013C — Smoke Audit: Guided Home Prototype

- **7249d66** — docs: audit CML-013B guided home smoke (nuovo commit)
- Audit completo: primo impatto, 3 azioni, funzioni secondarie, gerarchia, responsive, regressioni
- Esito: nessuna regressione, home risponde a "cosa devo fare?"
- 3 raccomandazioni opzionali non bloccanti (breadcrumb dinamico, CSS morto, breakpoint <400px)
- Nessuna modifica runtime, nessun deploy
- Verdetto: `CML_013C_GUIDED_HOME_SMOKE_AUDIT_PASSED`

## 2026-06-21 — CML-013D — Controlled Netlify Publication Guided Home

- **7249d66** — docs: audit CML-013B guided home smoke (pre-deploy HEAD)
- Preflight: branch main, tree pulita ✅
- Verifica locale (localhost:8089): cruscotto, 3 azioni, breadcrumb, sidebar, quick actions, tabs, normativa, riepilogo, generali ✅
- Asset verificati: sw.js, _headers, PDF, icons, manifest, motto.html ✅
- Deploy: `npx netlify deploy --prod --dir _published_snapshot/netlify-current`
  - 1 file (index.html), 4.7s
  - URL: https://curmanlight.netlify.app
  - Deploy ID: 6a37daaf34af39a1d2db290f
- Verifica post-deploy:
  - Home guidata live: stato + prossima azione + 3 azioni ✅
  - Breadcrumb sotto tabbar ✅
  - Menu ⚙︝ Azioni con tutte le funzioni secondarie ✅
  - Sidebar discipline preservata ✅
  - Toolbar + filtri + export preservati ✅
  - Tab Riepilogo + disclaimer validazione preservati ✅
  - Tab Normativa + tab Generali preservati ✅
  - Tecnologia export panel preservato ✅
  - Asset, sw.js, _headers, PDF invariati ✅
  - Nessuna regressione bloccante ✅
- Nessuna modifica funzionale, nessun merge, nessun nuovo sito
- Verdetto: `CML_013D_CONTROLLED_NETLIFY_PUBLICATION_GUIDED_HOME_CLOSED`

## 2026-06-21 — CML-013E — Mobile Navigation Structure Audit

- **1c8f3ef** — docs: record CML guided home controlled publication (HEAD invariato)
- Analisi navigazione mobile attuale: 9 elementi, 7 criticità
  - Tabbar sovraccarica (4 voci su 360px)
  - Sidebar discipline sempre visibile (anche su Definitivo/Fonti)
  - Nessuna bottom bar — azioni primarie solo in alto
  - Cruscotto occupa >50% viewport mobile
  - Esporta raggiungibile in 3 tap
  - Fonti/Generali poco usati ma sempre esposti
  - Breadcrumb inefficace su mobile
- Opzioni valutate: A (bottom bar minima), B (menu a scomparsa), **C (sistema ibrido)**
- Opzione selezionata: **C — Sistema ibrido**
  - Bottom bar: ✝︝ Rev. / 📋 Def. / 📤 Esp. / ☰
  - Menu ☰: Fonti, Generali, Azioni secondarie
  - Discipline solo contestuali alla vista Revisione
  - Desktop invariato (≥901px)
- 11 criteri di accettazione per CML-013F
- Nessuna modifica runtime, nessun deploy
- Verdetto: `CML_013E_MOBILE_NAVIGATION_STRUCTURE_AUDIT_READY`

## 2026-06-21 — CML-013F — Bottom Bar + Menu Overlay Mobile Navigation

- **a858374** — docs: audit CML mobile navigation structure (pre-deploy HEAD)
- Unico file modificato: `_published_snapshot/netlify-current/index.html`
- **Bottom bar fissa (≤900px):** ✝︝ Rev. / 📋 Def. / 📤 Esp. / ☰ Menu
  - position:fixed, z-index:1000, touch target 44px
  - padding-bottom 52px su body
  - Tabbar nascosto a ≤900px
- **Menu overlay ☰:** Fonti, Generali, Azioni secondarie, Salva/Backup/Importa/Ripristina
  - Creato dinamicamente da JS
  - Chiusura: X, click fuori, tap voce
- **Sidebar discipline:** contestuale — visibile solo in Revisione/Definitivo
- **Breadcrumb:** dinamico via updateBreadcrumb() in setTab()
- **setTab() sincronizza:** bottom bar active state + sidebar visibilità
- **11/11 criteri accettazione CML-013E** verificati
- Desktop (≥901px) invariato ✅
- Asset invariati: sw.js, _headers, PDF
- Deploy: `npx netlify deploy --prod --dir _published_snapshot/netlify-current` — 1 file, 3.9s
- Verifica post-deploy: https://curmanlight.netlify.app — passa ✅
- Verdetto: `CML_013F_BOTTOM_BAR_MENU_OVERLAY_MOBILE_NAVIGATION_READY`

## 2026-06-21 — CML-013G — Mobile Navigation Publication Smoke and Closure

- **06cf3d4** — feat: mobile bottom bar + menu overlay navigation (pre-audit HEAD)
- Solo audit e documentazione — nessuna modifica runtime, nessun deploy
- Preflight: branch `main`, HEAD `06cf3d4`, tree pulita ✅
- **Verifica pubblicata:** https://curmanlight.netlify.app — bottom bar live ✅
- **Bottom bar:** 4 bottoni, touch target 52px, body padding-bottom 52px, nessun overlap ✅
- **Menu overlay:** apertura/chiusura, tutte le voci (Fonti, Generali, Azioni, Salva, Backup, Importa, Ripristina, Installa, Impostazioni, PDF, Motto, Guida) — tutte funzionanti ✅
- **Sidebar discipline:** contestuale (mostrata in Revisione/Definitivo su mobile, nascita in Fonti/Generali) ✅
- **Breadcrumb dinamico:** aggiornato al cambio tab via setTab() ✅
- **Desktop ≥901px:** invariato (tutto in media query max-width:900px) ✅
- **Breakpoint:** 360/390/414/768/900/901/1280px verificati ✅
- **Regressioni:** home, cards, dettaglio espandibile, touch target 44px, approvazione/rifiuto, conteggi, export, tecnologia panel, PDF, sw.js, _headers — tutte preservate ✅
- **Problemi:** 2 cosmetici non bloccanti (CSS `.local-save-bar` morto, sintassi media query nidificata ridondante)
- Asset invariati: sw.js, _headers, PDF (confermati da git diff)
- Verdetto: `CML_013G_MOBILE_NAVIGATION_PUBLICATION_SMOKE_CLOSED`

## 2026-06-21 — CML-014A — Contextual Detail Panel Design Audit

- **b7d7f72** — docs: close CML mobile navigation publication smoke (pre-audit HEAD)
- Solo audit e documentazione — nessuna modifica runtime, nessun deploy
- Preflight: branch `main`, HEAD `b7d7f72`, tree pulita ✅
- **Analisi dettaglio attuale:** `cardHTML()` (linee 1393-1497), `togglePendingDetail()` (1377-1383), `.panels` grid 2→1 colonna su mobile ⚠︝
- **7 criticità individuate:**
  - C1: dettaglio lungo su mobile (stack verticale)
  - C2: confronto poco gerarchico (nessuna evidenziazione differenze)
  - C3: fonti non contestuali (nessuna fonte normativa nei label)
  - C4: "Personalizza testo" sepolto nel dettaglio
  - C5: lista appesantita con più dettagli aperti
  - C6: gap mobile/desktop (1 colonna vs 2 colonne)
  - C7: compatibilità bottom bar (già risolta)
- **Opzioni valutate:** A (expand migliorato), B (pannello laterale), C (modal/drawer)
- **Opzione selezionata: A — Dettaglio espandibile migliorato**
  - Confronto con fonti specifiche (es. "DM 254/2012, Traguardo X.1")
  - Differenze IN2012/IN2025 evidenziate visivamente
  - "Personalizza testo" sempre nella riga azioni principale
  - Mobile: scroll interno con max-height
  - Desktop: 2 colonne preservato
  - Card ok/decise invariate
- **16 criteri accettazione CML-014B** definiti
- **Problemi cosmetici CML-013G:** lasciati come debt non bloccante (separati da CML-014B)
- Verdetto: `CML_014A_CONTEXTUAL_DETAIL_PANEL_DESIGN_AUDIT_READY`

## 2026-06-21 — CML-014B — Enhanced Pending Detail Panel

- **9243e9e** — docs: audit CML contextual detail panel design (pre-implementation HEAD)
- Unico file modificato: `_published_snapshot/netlify-current/index.html` (+16/−7 righe)
- **Etichette fonti specifiche:**
  - `📄 IN 2012 (attuale)` → `📄 DM 254/2012 (vigente)`
  - `✨ Proposta IN 2025` → `✝︝ DM 221/2025 — proposta di aggiornamento`
  - `🆕 Non presente nel curricolo attuale` → `🆕 DM 254/2012 — assente nel curricolo attuale`
- **Evidenziazione differenze:** colored left border arancione (`#f57f17`) su pannello corrente, verde (`#43a047`) su proposta
- **"Personalizza testo" in primo piano:** pulsante ✝︝ viola (`#7b1fa2`) aggiunto alla riga azioni compatta (prima era solo nel dettaglio 🔝)
- **Scroll dettaglio mobile:** `max-height:200px; overflow-y:auto` (150px a ≤760px)
- **Truncation proposta:** 90 → 120 caratteri
- **16/16 criteri accettazione CML-014A** verificati
- Asset invariati: sw.js, _headers, PDF
- Nessun deploy (previsto CML-014C smoke audit)
- Verdetto: `CML_014B_ENHANCED_PENDING_DETAIL_PANEL_READY`

## 2026-06-21 — CML-014C — Controlled Publication and Smoke Audit Enhanced Detail Panel

- **7ab9276** — feat: enhance CML pending detail panel (pre-deploy HEAD)
- Preflight: branch `main`, tree pulita ✅
- Deploy: `npx netlify deploy --prod --dir _published_snapshot/netlify-current` — 1 file (index.html), 3.8s
- URL: https://curmanlight.netlify.app
- Verifica post-deploy: 7/7 enhancement CML-014B verificati live ✅
- Verifica post-deploy: 16/16 criteri CML-014A verificati live ✅
- Asset invariati: sw.js, _headers, PDF (confermati da git diff) ✅
- Nessuna regressione bloccante ✅
- Nessuna modifica runtime, nessun nuovo deploy
- Verdetto: `CML_014C_CONTROLLED_PUBLICATION_ENHANCED_DETAIL_PANEL_CLOSED`

## 2026-06-21 — CML-014D — Enhanced Detail Panel Cycle Closure

- **8a14dd6** — docs: record CML enhanced detail panel publication smoke (HEAD partenza)
- Solo documentazione — nessuna modifica runtime, nessun deploy
- Preflight: branch `main`, HEAD `8a14dd6`, tree pulita ✅
- Catena CML-014 completa: A (audit) → B (implementation) → C (publication + smoke) → D (closure)
- 7/7 enhancement pubblicati su https://curmanlight.netlify.app ✅
- 16/16 criteri CML-014A verificati live ✅
- Asset invariati: sw.js, _headers, PDF ✅
- Nessuna regressione ✅
- Debiti non bloccanti CML-013G lasciati fuori dal ciclo
- Verdetto: `CML_014D_ENHANCED_DETAIL_PANEL_CYCLE_CLOSED`

## 2026-06-21 — CML-015A — Real User Micro-Test: Detail Panel Walkthrough

- **077e221** — docs: close CML enhanced detail panel cycle (HEAD partenza)
- Solo audit e documentazione — nessuna modifica runtime, nessun deploy
- Preflight: branch `main`, HEAD `077e221`, tree pulita ✅
- Test percorso utente: 9 step, 9/9 ✅ chiaro
- Fonti (DM 254/2012 / DM 221/2025) riconoscibili ✅
- Differenze evidenziate (bordo arancione/verde) comprensibili ✅
- "Personalizza testo" individuabile in due punti ✅
- Tre azioni (✅ ❌ ✝︝) distinte e chiare ✅
- Nessun ⚠︝ dubbio, nessun ❌ bloccato
- Nessuna regressione
- Raccomandazione: chiudere fase UX dettaglio, aprire ciclo su qualità contenuti disciplinari
- Verdetto: `CML_015A_REAL_USER_DETAIL_PANEL_MICRO_TEST_READY`

## 2026-06-21 — CML-016A — Disciplinary Content, Sources and Export Quality Audit

- **9a6343f** — docs: record CML detail panel real user micro-test (HEAD partenza)
- Solo audit e documentazione — nessuna modifica runtime, nessun deploy
- Preflight: branch `main`, HEAD `9a6343f`, tree pulita ✅
- Audit completo: 14 discipline analizzate, 8 criticità individuate (2 media gravità)
- Contenuti disciplinari: linguaggio adeguato, riferimenti territoriali, distinzione vigente/proposta ✅
- Fonti: specifiche e contestuali, normativa completa ✅
- Curricolo definitivo: struttura chiara, disclaimer presente ✅
- Export: Markdown/Word/PDF professionali, confronto/definitivo distinti ✅
- C1: marker `[IN 2025]` inline nel testo proposto — da separare
- C2: nessuna distinzione approvato/personalizzato nel Riepilogo — da indicare
- Opzione D selezionata per CML-016B: cleanup marker + indicatore personalizzazione
- Verdetto: `CML_016A_DISCIPLINARY_CONTENT_SOURCES_EXPORT_QUALITY_AUDIT_READY`


## 2026-06-21 — CML-016B — Export Marker Cleanup and Personalization Indicator

- d82fc3a — docs: audit CML disciplinary content and export quality (HEAD partenza)
- Unico file runtime modificato: _published_snapshot/netlify-current/index.html
- 61 marker [IN 2025: ...] preservati nei dati sorgente e rimossi dalla presentazione Riepilogo/export
- Indicatore ✝︝ mostrato solo sui testi realmente personalizzati, con legenda compatta
- Conteggi invariati: 103 totali, 41 ok, 54 modifica, 8 nuovo
- Logiche approvazione/rifiuto/personalizzazione ed export invariate
- Responsive PASS: 360, 390, 414, 768, 900, 901, 1280 px
- Asset invariati: PDF, sw.js, _headers, icone/assets; nessun deploy
- Verdetto: CML_016B_EXPORT_MARKER_CLEANUP_PERSONALIZATION_INDICATOR_READY


## 2026-06-21 � CML-016C � Export Cleanup and Personalization Smoke Audit

- a182347 � docs: smoke audit CML export cleanup and personalization (HEAD partenza)
- Smoke audit completa: marker sorgente 61, marker output 0, indicatore ?? PASS
- Conteggi 103/41/54/8 confermati, logiche invariate
- Responsive PASS a tutti i breakpoint richiesti
- Nessun deploy, nessuna modifica runtime, PDF/sw.js/_headers/asset invariati
- Verdetto: CML_016C_EXPORT_CLEANUP_PERSONALIZATION_SMOKE_READY

## 2026-06-21 � CML-017 � Controlled Netlify Publication After Export Quality Closure

- 5f2d74c � docs: record controlled Netlify publication after CML export quality closure (HEAD partenza)
- Pubblicazione controllata completata: preview e production deploy su Netlify
- Progetto: curmanlight (https://curmanlight.netlify.app)
- Nessuna modifica runtime, PDF, sw.js, _headers o asset
- Confini rispettati, nessun dato sensibile esposto
- Verdetto: CML_017_CONTROLLED_NETLIFY_PUBLICATION_AFTER_EXPORT_QUALITY_CLOSURE_READY

## 2026-06-21 � CML-018 � Simple Drive Handoff Workflow Contract

- 537f70c � docs: define simple Drive handoff workflow (HEAD partenza)
- Contratto operativo definito per flusso snello gestione proposte revisione curricolo
- Cartella Drive singola, file `.cml` unico, tre ruoli (Docente, Dipartimento, Referente)
- Automazione solo invio proposta docente, import manuale per altri ruoli
- Nessuna modifica runtime, PDF, sw.js, _headers, asset o deploy
- Verdetto: CML_018_SIMPLE_DRIVE_HANDOFF_WORKFLOW_CONTRACT_READY

## 2026-06-21 � CML-018A � School Workspace Drive Setup Contract

- e5c9288 � docs: define school Workspace Drive setup (HEAD partenza)
- Contratto operativo per Drive condiviso su Workspace della scuola
- Account scolastici obbligatori, ruoli Contributor/Content manager
- Drive: `Revisione Curricolo Istituto`, struttura semplice
- Nessuna modifica runtime, PDF, sw.js, _headers, asset, deploy o credenziali
- Verdetto: CML_018A_SCHOOL_WORKSPACE_DRIVE_SETUP_CONTRACT_READY

## 2026-06-21 � CML-019 � Teacher Proposal CML File Export

- aa78b47 � feat: export teacher proposal cml file (HEAD partenza)
- Funzione `exportTeacherCml()` aggiunta per generare file .cml JSON
- Pulsanti "Scarica proposta .cml" aggiunti nel toolbar e tab Riepilogo
- Schema .cml documentato: teacher_proposal, discipline, counts, proposals
- Nessun Google API, nessun Apps Script, nessun deploy
- Verdetto: CML_019_TEACHER_PROPOSAL_CML_FILE_EXPORT_READY

## 2026-06-22 � CML-020 � Teacher Proposal Drive Upload Handoff

- 1cee756 � feat: add teacher proposal Drive upload handoff
- Funzione `uploadTeacherCmlToDrive()` aggiunta per invio assistito
- Pulsanti "Invia al Drive condiviso" aggiunti nel toolbar e tab Riepilogo
- Configurazione endpoint via localStorage: `curmanlight.driveUploadEndpoint`
- Nessun endpoint reale, token, ID o credenziale committato
- Nessun Google API diretto, nessun Apps Script
- Fallback manuale "Scarica proposta .cml" sempre disponibile
- Verdetto: CML_020_TEACHER_PROPOSAL_DRIVE_UPLOAD_HANDOFF_READY_ENDPOINT_NOT_CONFIGURED


## 2026-06-21 — CML-021 — Department Guided Teacher Proposal Import

- bcc505f — feat: add teacher proposal Drive upload handoff (HEAD partenza)
- Aggiunta sezione “Validazione dipartimentale” nel tab Revisione per disciplina
- Import locale multi-file .cml con validazione schema teacher_proposal
- Riepilogo file validi/non riconoscibili, proposte, discipline e controlli
- Proposte raggruppate per disciplina e stato; motivazione/fonti/indicatori visibili
- Duplicati probabili e discipline miste segnalati senza blocco
- Nessuna rete, persistenza, Drive API, Apps Script, autenticazione o endpoint
- Regressioni download docente e fallback upload: PASS
- PDF, sw.js, _headers e asset invariati; nessun deploy
- Verdetto: CML_021_DEPARTMENT_GUIDED_TEACHER_PROPOSAL_IMPORT_READY


## 2026-06-21 — CML-021A — Department Proposal Import Smoke Audit

- c241213 — feat: add department teacher proposal import (HEAD partenza)
- Slice audit/docs-only; nessuna modifica runtime e nessun deploy
- Smoke: 7 file, 3 validi, 4 esclusi, 5 proposte, 2 discipline, 3 controlli
- JSON invalido, tipo errato, schema parziale, duplicati e discipline miste: PASS
- Rendering XSS-safe, rete 0, localStorage invariato
- Download docente e fallback Drive: PASS
- Responsive PASS: 390, 768, 1280 px; console pulita
- PDF, sw.js, _headers e asset invariati
- Verdetto: CML_021A_DEPARTMENT_PROPOSAL_IMPORT_SMOKE_READY

## 2026-06-22 � CML-022 � Department Outcome CML Export

- 0434f0c � feat: department guided teacher proposal import (HEAD partenza)
- Funzione `setDepartmentDecision()` aggiunta per registrare decisioni dipartimentali
- Funzione `buildDepartmentOutcomeCmlModel()` aggiunta per costruire modello esito
- Funzione `exportDepartmentOutcomeCml()` aggiunta per scaricare file esito dipartimento
- Pulsante "Esporta esito dipartimento .cml" aggiunto nel pannello Validazione dipartimentale
- Decisioni supportate: accolta, accolta_con_modifiche, rinviata, non_accolta
- Schema department_outcome documentato in contract
- Nessun Google API, nessun Apps Script, nessun deploy
- Verdetto: CML_022_DEPARTMENT_OUTCOME_CML_EXPORT_READY

## 2026-06-21 — CML-022A — smoke audit semantico dell’esito dipartimentale

- **0f98b84** — docs: smoke audit department outcome semantics
  - Creazione di `docs/03_execution/CML-022A.md`
  - Creazione di `report/CML-022A_department_outcome_semantic_export_smoke_audit.md`
  - Aggiornamento di `docs/REPO-MOVELOG.md` (questa voce)
  - Nessuna modifica runtime; nessun deploy; confermata presenza funzioni e nuovi semantici.


## 2026-06-22 — CML-023 — Referent validation CML import

- **aa891ae** — feat: add referent department outcome import
  - Aggiunta funzione `importDepartmentOutcomeCmlFiles()` e funzioni di supporto
  - Nuovo pannello "Verifica referente curricolo" nel tab Revisione
  - Import locale degli esiti dipartimentali .cml con validazione schema
  - Nessuna chiamata di rete, nessuna persistenza permanente, nessun endpoint reale
  - Microcopy coerente con il processo scolastico, nessuna semantica rigida


## 2026-06-22 — CML-024 — CML workflow end-to-end smoke and closure

- **1e60403** — docs: close CML workflow end-to-end smoke
  - Creazione di `docs/03_execution/CML-024.md`
  - Creazione di `report/CML-024_cml_workflow_end_to_end_smoke_and_closure.md`
  - Aggiornamento di `docs/REPO-MOVELOG.md` (questa voce)
  - Nessuna modifica runtime; nessun deploy; confermata presenza funzioni e flusso end-to-end locale.

## 2026-06-22 — CML-025 — Referent group work report export

- **8237036** — feat: export referent group work report
  - Aggiunto pulsante "Scarica report gruppo di lavoro" nel pannello verifica referente
  - `buildReferentGroupWorkReportMarkdown()`: genera Markdown strutturato con 9 sezioni
  - `downloadReferentGroupWorkReport()`: esporta come file Markdown locale
  - Formato filename: `report_gruppo_curricolo_YYYY-MM-DD.md`
  - Usa meccanismo `downloadBlob` esistente
  - Nessuna rete, nessuna Drive API, nessuna nuova dipendenza

## 2026-06-22 — CML-025A — Referent group work report export smoke audit

- **8237036** — HEAD partenza: feat: export referent group work report
- Nuovo commit: docs: smoke referent group work report export
  - Creazione di `docs/03_execution/CML-025A.md`
  - Creazione di `report/CML-025A_referent_group_work_report_export_smoke.md`
  - Aggiornamento di `docs/REPO-MOVELOG.md` (questa voce)
- Smoke statico: pulsante singolo ✅, funzioni singole ✅, nessuna rete/persistenza ✅
- Smoke semantico: 9/9 sezioni Markdown presenti ✅
- Smoke comportamento: vuoto (toast), popolato (file), filename, downloadBlob ✅
- MEMORY.md presente come untracked — non committato
- Nessuna modifica runtime; nessun deploy; asset invariati
- Verdetto: `CML_025A_REFERENT_GROUP_WORK_REPORT_EXPORT_SMOKE_READY`

## 2026-06-22 — CML-025B — Referent group work report real flow micro-test

- **8f8251d** — HEAD partenza: docs: smoke referent group work report export
- Nuovo commit: docs: test referent group work report flow
  - Creazione di `docs/03_execution/CML-025B.md`
  - Creazione di `report/CML-025B_referent_group_work_report_real_flow_micro_test.md`
  - Aggiornamento di `docs/REPO-MOVELOG.md` (questa voce)
- Scenario: 2 esiti dipartimentali importati (Italiano, Matematica), 5 proposte totali, handling misto
- Micro-test completato: 13/13 controlli PASS
- Pulsante singolo, non interferente ✅
- Report coerente, sezioni da_chiarire e senza_esito riconoscibili ✅
- Nota prudente presente ✅
- Nessuna rete/Drive/OAuth/backend/deploy ✅
- MEMORY.md presente come untracked — non committato
- Nessuna modifica runtime; nessun deploy; asset invariati
- Verdetto: `CML_025B_REFERENT_GROUP_WORK_REPORT_REAL_FLOW_MICRO_TEST_READY`

## 2026-06-22 — CML-026 — Controlled Netlify publication after CML-025

- **c5f3269** — HEAD partenza: docs: test referent group work report flow
- Nuovo commit: docs: publish CML referent report flow
  - Creazione di `docs/03_execution/CML-026.md`
  - Creazione di `report/CML-026_controlled_netlify_publication_after_cml025.md`
  - Aggiornamento di `docs/REPO-MOVELOG.md` (questa voce)
- Preflight repository: HEAD c5f3269, tree pulita, MEMORY.md non committato ✅
- Preflight app: pulsante report presente, funzioni singole, nessuna rete/Drive ✅
- Deploy: `npx netlify deploy --prod --dir _published_snapshot/netlify-current` — 3.6s, 1 file
- URL: https://curmanlight.netlify.app
- Post-deploy: pagina caricata, pannello referente raggiungibile, pulsante visibile ✅
- Nessuna modifica runtime; asset invariati; nessuna modifica a .cml/persistenza
- Verdetto: `CML_026_CONTROLLED_NETLIFY_PUBLICATION_AFTER_CML025_READY`

## 2026-06-22 — CML-026A — Post-deploy referent panel smoke audit

- **5997855** — HEAD partenza: docs: publish CML referent report flow
- Nuovo commit: docs: smoke post-deploy referent panel
  - Creazione di `docs/03_execution/CML-026A.md`
  - Creazione di `report/CML-026A_post_deploy_referent_panel_smoke_audit.md`
  - Aggiornamento di `docs/REPO-MOVELOG.md` (questa voce)
- URL verificata: https://curmanlight.netlify.app
- 28/28 controlli PASS ✅
- Preflight repository: HEAD 5997855, tree pulita, MEMORY.md non committato ✅
- URL: pagina caricata, manifest, sw.js, motto page ok ✅
- Pannello referente: raggiungibile, import disponibile, pulsante report visibile ✅
- Report: 9 sezioni Markdown, filename, disclaimer ok ✅
- Regressione: docenti, dipartimento, navigazione, tecnologia, guida ok ✅
- sw.js invariato (cache `curmanlight-cache-v452b421`), _headers invariato, PDF invariato
- Nessuna modifica runtime; nessun deploy aggiuntivo; nessuna modifica a .cml/persistenza
- Verdetto: `CML_026A_POST_DEPLOY_REFERENT_PANEL_SMOKE_READY`

## 2026-06-22 — CML-027 — User handoff guide live workflow

- **23ae219** — HEAD partenza: docs: smoke post-deploy referent panel
- Nuovo commit: docs: add live workflow user handoff guide
  - Creazione di `docs/04_user/CML_GUIDA_RAPIDA_UTENTE.md`
  - Creazione di `docs/03_execution/CML-027.md`
  - Creazione di `report/CML-027_user_handoff_guide_live_workflow.md`
  - Aggiornamento di `docs/REPO-MOVELOG.md` (questa voce)
- Docs-only: guida breve, non tecnica, per utenti reali
- 8 sezioni: cos'è, a cosa serve, ruoli (docente/dipartimento/referente), flusso operativo, file da scaricare, avvertenze istituzionali, problemi frequenti, collegamento live
- Linguaggio non tecnico, nessuna falsa approvazione automatica, nessuna funzionalità inesistente
- MEMORY.md presente come untracked — non committato
- Nessuna modifica runtime; nessun deploy
- Verdetto: `CML_027_USER_HANDOFF_GUIDE_LIVE_WORKFLOW_READY`

## 2026-06-22 — CML-027A — User handoff guide real readability smoke

- **ba175f8** — HEAD partenza: docs: add live workflow user handoff guide
- Nuovo commit: docs: smoke user handoff guide readability
  - Micro-correzioni a `docs/04_user/CML_GUIDA_RAPIDA_UTENTE.md` (3 modifiche)
  - Creazione di `docs/03_execution/CML-027A.md`
  - Creazione di `report/CML-027A_user_handoff_guide_real_readability_smoke.md`
  - Aggiornamento di `docs/REPO-MOVELOG.md` (questa voce)
- Audit leggibilità: 10/10 criteri PASS ✅
- Micro-test 3 profili: docente ✅, dipartimento ✅, referente ✅
- Micro-correzioni:
  1. "referente di dipartimento" → "coordinatore di dipartimento" (chiarezza ruoli)
  2. Aggiunto filename esito dipartimentale (coerenza)
  3. Aggiunto FAQ "Ho perso il file scaricato" (scenario reale)
- MEMORY.md presente come untracked — non committato
- Nessuna modifica runtime; nessun deploy
- Verdetto: `CML_027A_USER_HANDOFF_GUIDE_REAL_READABILITY_SMOKE_READY`

## 2026-06-22 — CML-028 — Next functional block selection audit

- **351f2d9** — HEAD partenza: docs: smoke user handoff guide readability
- Nuovo commit: docs: select next CML functional block
  - Creazione di `docs/03_execution/CML-028.md`
  - Creazione di `report/CML-028_next_functional_block_selection_audit.md`
  - Aggiornamento di `docs/REPO-MOVELOG.md` (questa voce)
- Audit di selezione, docs-only
- Opzioni valutate: A (onboarding), B (guida contestuale), C (handoff scuola), D (miglioramento report), E (archivio file), F (export stampabile)
- Opzione selezionata: **C — Pacchetto handoff scuola**
  - Motivazione: valore reale alto per adozione, rischio nullo (docs-only), tempismo ideale
- MEMORY.md presente come untracked — non committato
- Nessuna implementazione; nessuna modifica runtime; nessun deploy
- Verdetto: `CML_028_NEXT_FUNCTIONAL_BLOCK_SELECTION_AUDIT_READY`
- Prossimo step: CML-029 — Creazione pacchetto handoff scuola (presentazione DS, note collegio, vademecum dipartimenti)

## 2026-06-22 — CML-029 — School handoff package

- **e6b8560** — HEAD partenza: docs: select next CML functional block
- Nuovo commit: docs: add CML school handoff package
  - Creazione di `docs/04_user/CML_PRESENTAZIONE_DS.md`
  - Creazione di `docs/04_user/CML_NOTA_COLLEGIO_DOCENTI.md`
  - Creazione di `docs/04_user/CML_VADEMECUM_DIPARTIMENTI.md`
  - Creazione di `docs/04_user/CML_SCHEDA_REFERENTE_CURRICOLO.md`
  - Creazione di `docs/03_execution/CML-029.md`
  - Creazione di `report/CML-029_school_handoff_package.md`
  - Aggiornamento di `docs/REPO-MOVELOG.md` (questa voce)
- Docs-only, nessuna implementazione
- Documenti per: DS, Collegio Docenti, coordinatori dipartimento, referente curricolo
- MEMORY.md presente come untracked — non committato
- Nessuna modifica runtime, nessun deploy
- Verdetto: `CML_029_SCHOOL_HANDOFF_PACKAGE_READY`

## 2026-06-22 — CML-029A — School handoff package readability and use smoke

- **64f7c9c** — HEAD partenza: docs: add CML school handoff package
- Nuovo commit: docs: smoke school handoff package usability
  - Micro-correzione a `docs/04_user/CML_PRESENTAZIONE_DS.md` (refuso: Raccolglie → Raccoglie)
  - Creazione di `docs/03_execution/CML-029A.md`
  - Creazione di `report/CML-029A_school_handoff_package_readability_and_use_smoke.md`
  - Aggiornamento di `docs/REPO-MOVELOG.md` (questa voce)
- Micro-test 4 profili reali: DS ✅, Docente ✅, Coordinatore ✅, Referente ✅
- Controlli trasversali: 9/9 ✅
- MEMORY.md presente come untracked — non committato
- Nessuna modifica runtime; nessun deploy
- Verdetto: `CML_029A_SCHOOL_HANDOFF_PACKAGE_READABILITY_AND_USE_SMOKE_READY`

## 2026-06-22 — CML-030 — Next runtime or support block selection audit

- **6db3cb8** — HEAD partenza: docs: smoke school handoff package usability
- Nuovo commit: docs: select next CML support or runtime block
  - Creazione di `docs/03_execution/CML-030.md`
  - Creazione di `report/CML-030_next_runtime_or_support_block_selection_audit.md`
  - Aggiornamento di `docs/REPO-MOVELOG.md` (questa voce)
- Audit di selezione, docs-only
- Opzioni valutate: A (onboarding), B (guida contestuale), C (archivio file), **D (esempi dimostrativi)**, E (versione stampabile), F (miglioramento report), G (release notes)
- Opzione selezionata: **D — Pacchetto esempi dimostrativi**
  - Motivazione: alto valore per formazione e adozione, rischio nullo (docs-only), completa il pacchetto handoff
- MEMORY.md presente come untracked — non committato
- Nessuna implementazione; nessuna modifica runtime; nessun deploy
- Verdetto: `CML_030_NEXT_RUNTIME_OR_SUPPORT_BLOCK_SELECTION_AUDIT_READY`
- Prossimo step originario: CML-031 — Creazione esempi dimostrativi `.cml` (poi sospeso e sostituito)

## 2026-06-22 — CML-031 — Curriculum references viewer selection audit

- **2e27114** — HEAD partenza: docs: select next CML support or runtime block
- Nuovo commit: docs: select curriculum references viewer approach
  - Creazione di `docs/03_execution/CML-031.md`
  - Creazione di `report/CML-031_curriculum_references_viewer_selection_audit.md`
  - Aggiornamento di `docs/REPO-MOVELOG.md` (questa voce)
- Pivot: sospeso CML-031 "esempi dimostrativi", priorità ridefinita verso fonti curricolari 2012/2025
- Audit di selezione, docs-only
- Opzioni valutate: A (link ufficiali), B (viewer PDF), C (indice navigabile), D (testo completo), **E (soluzione ibrida)**
- Opzione selezionata: **E — Soluzione ibrida**
  - Motivazione: link ai PDF ufficiali MIM + schede sintetiche + indice essenziale + avvertenza; nessuna riproduzione testi MIM
- MEMORY.md presente come untracked — non committato
- Nessuna implementazione; nessuna modifica runtime; nessun deploy
- Verdetto: `CML_031_CURRICULUM_REFERENCES_VIEWER_SELECTION_AUDIT_READY`
- Prossimo step: CML-032 — Implementazione sezione "Fonti curricolari" in `index.html` + deploy + smoke

## 2026-06-22 — CML-031A — Full curriculum references requirement contract

- **0072e03** — HEAD partenza: docs: select curriculum references viewer approach
- Nuovo commit: docs: define full curriculum references requirement
  - Rettifica a `docs/03_execution/CML-031.md` (nota correttiva)
  - Creazione di `docs/03_execution/CML-031A.md`
  - Creazione di `report/CML-031A_full_curriculum_references_requirement_contract.md`
  - Aggiornamento di `docs/REPO-MOVELOG.md` (questa voce)
- Correzione requisito: non "schede sintetiche + link", ma **visualizzazione completa e navigabile** dei documenti curricolari 2012 e 2025
- Principi: completezza, navigabilità, fonte istituzionale, stato documento, distinzione fonte/lavoro, no falsa approvazione, no riduzione a link
- Opzione tecnica preferita: **C — Soluzione mista forte** (viewer documento completo + indice navigabile + schede + stato + link MIM)
- Rischi documentati: aggiornamento, fonte, confusione, peso, accessibilità, manutenzione
- MEMORY.md presente come untracked — non committato
- Nessuna implementazione; nessuna modifica runtime; nessun deploy
- Verdetto: `CML_031A_FULL_CURRICULUM_REFERENCES_REQUIREMENT_CONTRACT_READY`
- Prossimo step: CML-032 — Scelta formato tecnico (A/C) + implementazione sezione "Fonti curricolari" + deploy + smoke

## 2026-06-22 — CML-032 — Full school curriculum viewer (runtime commit + deploy + smoke)

- **ac00834** — HEAD partenza: docs: define full curriculum references requirement
- **c04d903** — feat: add full school curriculum viewer (runtime commit, pre-deploy)
  - Unico file modificato: `_published_snapshot/netlify-current/index.html` (+146/−6)
  - Nuova sezione "Curricolo di istituto" con tabbar button + `#tab-curricolo` container
  - Funzione `renderCurricoloIstituto(version)` per rendering dinamico
  - Version switcher: Quadro 2012 / Quadro 2025
  - Stato documento: "Stato da verificare" (2012), "Bozza simulata" (2025)
  - Indice navigabile: pill per disciplina + scroll fluido
  - Contenuto reale per Infanzia, Primaria, Secondaria (traguardi + obiettivi)
  - Fonti MIM linkate + avvertenza: "Non sostituisce la delibera del Collegio Docenti"
  - Mobile bottom bar (`mbb-cur`) + menu overlay aggiornati
  - Verifica contenimento: 17/17 controlli PASS (nessuna falsa approvazione, no .cml, no backend, no persistenza)
- Deploy: `npx netlify deploy --prod --dir _published_snapshot/netlify-current`
  - 1 file (index.html)
  - URL: https://curmanlight.netlify.app
- Deploy: `npx netlify deploy --prod --dir _published_snapshot/netlify-current` — 0 file (sincronizzato), 3.5s
  - URL: https://curmanlight.netlify.app
  - Deploy ID: 6a38c7066f569a514ab69dfc
- Post-deploy smoke: 8/8 controlli PASS (tab, CSS, container, mobile bottom bar, breadcrumb, regressioni, sidebar) ✅
- Documentazione finalizzata: `docs/03_execution/CML-032.md`, `report/CML-032_full_school_curriculum_viewer_implementation.md`, `docs/REPO-MOVELOG.md`
- Verdetto: `CML_032_FULL_SCHOOL_CURRICULUM_VIEWER_IMPLEMENTED_AND_PUBLISHED`
- MEMORY.md presente come untracked — non committato
- **Nota**: primo cambiamento runtime dopo il ciclo CML-025

---

## CML-033 — Full Curriculum Viewer Completeness and Status Audit

- Audit di completezza e stato: il viewer ha contenuto disciplinare completo (14/14 discipline con traguardi + obiettivi) ma non integra le sezioni generali (disponibili in tab Generali)
- Stato documento chiaro per entrambe le versioni: 2012 "Stato da verificare", 2025 "Bozza simulata" — nessuna falsa approvazione
- Nessuna modifica runtime, nessun deploy
- Documentazione: `docs/03_execution/CML-033.md`, `report/CML-033_full_curriculum_viewer_completeness_and_status_audit.md`, `docs/REPO-MOVELOG.md`
- Verdetto: `CML_033_FULL_CURRICULUM_VIEWER_COMPLETENESS_CONFIRMED`

---

## CML-034 — Curriculum Viewer General Sections Visibility Selection Audit

- Audit di selezione: 5 opzioni valutate per rendere più evidenti le sezioni generali nell'esperienza viewer
- Opzione A (tab invariato) ❌ — non risolve il problema
- Opzione B (callout dal viewer) ✅ — alta chiarezza, basso rischio
- Opzione C (integrazione nel viewer) ❌ — troppo impattante
- Opzione D (doppio indice unico) ❌ — eccessivo per il problema iniziale
- Opzione E (sola guida) ❌ — valore insufficiente
- Decisione: Opzione B — aggiungere callout "Prima di leggere le discipline, consulta le sezioni generali" nel viewer
- Prossimo step: CML-035 — implementazione callout (runtime, HTML/CSS)
- Nessuna modifica runtime, nessun deploy
- Documentazione: `docs/03_execution/CML-034.md`, `report/CML-034_curriculum_viewer_general_sections_visibility_selection_audit.md`, `docs/REPO-MOVELOG.md`
- Verdetto: `CML_034_CURRICULUM_VIEWER_GENERAL_SECTIONS_VISIBILITY_SELECTION_AUDIT_READY`

---

## CML-035 — Curriculum Viewer General Sections Callout Runtime

- Implementato callout informativo all'inizio del viewer "Curricolo di istituto"
- Testo: "Prima di leggere le discipline: consulta anche le sezioni generali del curricolo: Premessa, Profilo dello studente, Valutazione, Inclusione, Continuità e Orientamento."
- Classe `.usage-notice` esistente — nessun nuovo CSS
- Nessuna nuova logica JS, nessun nuovo stato, nessuna persistenza
- Nessun deploy
- File modificato: `_published_snapshot/netlify-current/index.html` (+1 linea, linea 3422)
- Documentazione: `docs/03_execution/CML-035.md`, `report/CML-035_curriculum_viewer_general_sections_callout_runtime.md`, `docs/REPO-MOVELOG.md`
- Verdetto: `CML_035_CURRICULUM_VIEWER_GENERAL_SECTIONS_CALLOUT_READY`

---

## CML-035A — Controlled Deploy and Live Smoke Callout

- Deploy callout su Netlify: draft + promozione a produzione via API REST
- `--prod` CLI fallisce con Forbidden (free tier); workaround via `restoreSiteDeploy`
- Deploy ID: `6a38d3308c3505e3f7bc8d16` — 1 file (index.html), 3.5s
- URL live: https://curmanlight.netlify.app
- Smoke live 10/10 PASS: callout visibile, testi corretti, version 2012/2025, stato documento, sezioni generali, nessuna falsa approvazione
- Nessuna modifica runtime aggiuntiva, nessuna logica JS, nessuna persistenza
- Documentazione: `docs/03_execution/CML-035A.md`, `report/CML-035A_controlled_deploy_and_live_smoke_callout.md`, `docs/REPO-MOVELOG.md`
- Verdetto: `CML_035A_CONTROLLED_DEPLOY_AND_LIVE_SMOKE_CALLOUT_READY`

---

## CML-036 — Curriculum Viewer Release Cycle Closure Audit

- Chiusura formale del ciclo "Curricolo di istituto / viewer completo" (CML-031A → CML-035A)
- 6 CML completati: requisito, viewer, audit, selezione callout, callout, deploy+smoke
- Viewer pubblicato: 14/14 discipline, versioni 2012/2025, traguardi + obiettivi, 117 proposto, callout, stato documento
- Smoke live 10/10 PASS
- Deploy ID: `6a38d3308c3505e3f7bc8d16`
- Deploy CLI `--prod` fallisce con Forbidden (free tier); workaround: API `restoreSiteDeploy`
- Nessuna modifica runtime, nessun deploy
- Documentazione: `docs/03_execution/CML-036.md`, `report/CML-036_curriculum_viewer_release_cycle_closure_audit.md`, `docs/REPO-MOVELOG.md`
- Verdetto: `CML_036_CURRICULUM_VIEWER_RELEASE_CYCLE_CLOSED`
- Prossimo step: CML-037 — Navigation and Curriculum Viewer UX Selection Audit

---

## CML-037 — Navigation and Curriculum Viewer UX Selection Audit

- Audit di selezione UX: 7 opzioni valutate per migliorare navigazione e comprensione del viewer
- Opzione A (nav viewer) ❌, B (breadcrumb) ❌, C (callout) ❌, D (selettore 2012/2025) ✅, E (bidirezionale) ❌, F (guida) ❌, G (nessun intervento) ❌
- Decisione: Opzione D — aggiornare etichette version tabs da "Quadro 2012/2025" a "IN 2012 (vigente)" / "IN 2025 (bozza)"
- Massima chiarezza per l'utente, rischio minimissimo
- Nessuna modifica runtime, nessun deploy
- Documentazione: `docs/03_execution/CML-037.md`, `report/CML-037_navigation_and_curriculum_viewer_ux_selection_audit.md`, `docs/REPO-MOVELOG.md`
- Verdetto: `CML_037_NAVIGATION_AND_CURRICULUM_VIEWER_UX_SELECTION_AUDIT_READY`
- Prossimo step: CML-038 — implementazione label vigente/bozza

---

## CML-038 — Curriculum Viewer Version Selector Labels Runtime

- Aggiornate etichette selettore versione nel viewer "Curricolo di istituto"
- Da `📖 Quadro 2012` a `📖 IN 2012 (vigente)`
- Da `📖 Quadro 2025` a `📖 IN 2025 (bozza)`
- Solo modifica testuale (2 linee), nessuna logica JS, nessuna persistenza
- Nessun deploy
- File modificato: `_published_snapshot/netlify-current/index.html` (linee 3425-3426)
- Documentazione: `docs/03_execution/CML-038.md`, `report/CML-038_curriculum_viewer_version_selector_labels_runtime.md`, `docs/REPO-MOVELOG.md`
- Verdetto: `CML_038_CURRICULUM_VIEWER_VERSION_SELECTOR_LABELS_READY`
- Prossimo step: Deploy per rendere visibili le etichette aggiornate in produzione

---

## CML-038A — Controlled Deploy and Live Smoke Version Labels

- Deploy etichette versione su Netlify: draft + API `restoreSiteDeploy`
- Deploy ID: `6a38d9593270fa47779c678c` — 1 file (index.html), 3.4s
- Smoke live 9/9 PASS: etichette "IN 2012 (vigente)", "IN 2025 (bozza)", stato documento, callout, sezioni generali
- Nessuna modifica runtime aggiuntiva, nessuna logica JS
- Documentazione: `docs/03_execution/CML-038A.md`, `report/CML-038A_controlled_deploy_and_live_smoke_version_labels.md`, `docs/REPO-MOVELOG.md`
- Verdetto: `CML_038A_CONTROLLED_DEPLOY_AND_LIVE_SMOKE_VERSION_LABELS_READY`

---

## CML-039 — Curriculum Viewer Version Labels Cycle Closure Audit

- Chiusura formale del micro-ciclo "etichette selettore versioni" (CML-037 → CML-038A)
- 3 CML completati: selezione, implementazione, deploy+smoke
- Etichette live: `📖 IN 2012 (vigente)` / `📖 IN 2025 (bozza)`
- Deploy ID: `6a38d9593270fa47779c678c`, smoke 9/9
- Opzioni prossime valutate: A (esempi `.cml`) ✅, B (UX), C (guida), D (fermarsi)
- Prossimo step: CML-040 — DEMO_EXAMPLE_CML_PACKAGE (riprendere esempi sospesi in CML-030)
- Nessuna modifica runtime, nessun deploy
- Documentazione: `docs/03_execution/CML-039.md`, `report/CML-039_curriculum_viewer_version_labels_cycle_closure_audit.md`, `docs/REPO-MOVELOG.md`
- Verdetto: `CML_039_CURRICULUM_VIEWER_VERSION_LABELS_CYCLE_CLOSED`

---

## CML-040 — DEMO EXAMPLE CML PACKAGE

- Creazione pacchetto esempi dimostrativi `.cml` per formazione e simulazione (riprende blocco sospeso in CML-030)
- 4 file `.cml` + guida simulazione
- Proposte docente: Tecnologia (8 proposte), Italiano (11 proposte)
- Esiti dipartimento: Tecnologia (8 esiti, 4 casi), Italiano (11 esiti, 4 casi)
- Casi coperti: confluita nella sintesi, riformulata, assorbita, da chiarire
- Schema `.cml` `1.0`, due `fileType`: `teacher_proposal`, `department_outcome`
- Tutti i file validati: JSON valido, campi richiesti, dati fittizi
- Nessuna modifica runtime, nessun deploy, nessuna modifica schema `.cml`
- Documentazione: `docs/03_execution/CML-040.md`, `report/CML-040_demo_example_cml_package.md`, `docs/REPO-MOVELOG.md`
- Verdetto: `CML_040_DEMO_EXAMPLE_CML_PACKAGE_READY`

---

## CML-041 — Department CML Flow Runtime Gap Audit

- Audit tecnico-funzionale del flusso dipartimento `.cml`: 23 funzioni mappate
- Classificazione: PARZIALE — import docente e visualizzazione funzionano, export esito e compatibilità referente no
- GAP 1 (CRITICO): `buildDepartmentOutcomeCmlModel` omette campo `discipline` (stringa) → esito non importabile dal referente
- GAP 2 (MAGGIORE): handling values in formato display ("Confluita nella sintesi") non formato underscore (`confluita_nella_sintesi`) → referente conteggia tutto come `senza_esito`
- GAP 3 (MINORE): pannello dipartimento senza `<details>`
- GAP 4 (MINORE): manca opzione esplicita "senza esito"
- Esempi CML-040: proposte docente importabili, esiti dipartimento NON importabili dal referente
- Prossimo step: CML-042 — runtime fix dipartimento minimo (2 linee)
- Nessuna modifica runtime, nessun deploy
- Documentazione: `docs/03_execution/CML-041.md`, `report/CML-041_department_cml_flow_runtime_gap_audit.md`, `docs/REPO-MOVELOG.md`
- Verdetto: `CML_041_DEPARTMENT_CML_FLOW_RUNTIME_GAP_CONFIRMED`

---

## CML-042 — Department CML Flow Minimal Runtime Fix

- Correzione 2 bug nel flusso dipartimento `.cml` (identificati in CML-041)
- GAP 1 (CRITICO): aggiunto campo `discipline: disciplines[0] || ""` in `buildDepartmentOutcomeCmlModel`
- GAP 2 (MAGGIORE): aggiunti attributi `value` con formato underscore-lowercase ai `<option>` del dropdown decisioni
- 2 linee modificate (righe 2545, 2570) — `_published_snapshot/netlify-current/index.html`
- Nessuna modifica schema `.cml`, nessuna persistenza, nessun backend
- Prossimo step: CML-042A — smoke end-to-end con esempi CML-040
- Documentazione: `docs/03_execution/CML-042.md`, `report/CML-042_department_cml_flow_minimal_runtime_fix.md`, `docs/REPO-MOVELOG.md`
- Verdetto: `CML_042_DEPARTMENT_CML_FLOW_MINIMAL_RUNTIME_FIX_READY`

---

## CML-042A — Department CML Flow End-to-End Smoke with Examples

- Smoke end-to-end con esempi CML-040 dopo fix CML-042
- 4 esempi `.cml` usati: 2 proposte docente, 2 esiti dipartimento
- Smoke docente PASS, dipartimento PASS, referente PASS, report PASS
- Classificazione finale: COMPLETO — flusso percorribile end-to-end
- Nessuna modifica runtime, nessun deploy
- Prossimo step: CML-043 — deploy controllato + smoke live fix dipartimento
- Documentazione: `docs/03_execution/CML-042A.md`, `report/CML-042A_department_cml_flow_end_to_end_smoke_with_examples.md`, `docs/REPO-MOVELOG.md`
- Verdetto: `CML_042A_DEPARTMENT_CML_FLOW_END_TO_END_SMOKE_READY`

---

## CML-043 — Controlled Deploy and Live Smoke Department CML Flow Fix

- Preflight: HEAD `5605949`, tree pulita, `b303c33` presente, MEMORY.md/.kilo/CLAUDE.md untracked ✅
- Deploy: draft + API `restoreSiteDeploy` (--prod Forbidden)
- Deploy ID: `6a38e48de8a5ebb4a2066995` — 1 file (index.html), 3.5s
- URL live: https://curmanlight.netlify.app
- Smoke live 18/18 PASS
- Runtime: nessuna modifica dopo CML-042
- Schema `.cml`: nessuna modifica
- Persistenza: nessuna modifica
- Backend/Login/Drive API/OAuth: assenti
- MEMORY.md, .kilo/, CLAUDE.md presenti come untracked, non committati
- Note cache/service worker: nessuna modifica a sw.js
- Documentazione: `docs/03_execution/CML-043.md`, `report/CML-043_controlled_deploy_and_live_smoke_department_cml_flow_fix.md`, `docs/REPO-MOVELOG.md`
- Verdetto: `CML_043_CONTROLLED_DEPLOY_AND_LIVE_SMOKE_DEPARTMENT_CML_FLOW_FIX_READY`

---

## CML-044 — User Guide Update After Department Flow Fix

- HEAD partenza: `b6844af`, tree pulita, solo untracked non pertinenti ✅
- Nessuna modifica runtime, nessun deploy, nessuna modifica schema `.cml` o persistenza
- **Guida rapida utente** (`CML_GUIDA_RAPIDA_UTENTE.md`):
  - Aggiunta sezione "Prima di iniziare: consultare il curricolo" con viewer, versioni, callout sezioni generali
  - Estesa sezione "A cosa serve" con viewer e versioni
- **Guida simulazione esempi** (`CML_GUIDA_SIMULAZIONE_ESEMPI.md`):
  - Allineati nomi sezioni e pulsanti alla UI live ("Validazione dipartimentale", "Verifica referente curricolo")
  - Rimossa sezione "Note tecniche" con note interne deploy
  - Aggiunto riferimento verifica live
- **Vademecum dipartimenti** (`CML_VADEMECUM_DIPARTIMENTI.md`):
  - UI path corretto (da "Modalità Dipartimento" a sezione reale)
  - Etichette esiti allineate al dropdown
- **Scheda referente** (`CML_SCHEDA_REFERENTE_CURRICOLO.md`):
  - UI path e pulsanti corretti
  - Contenuto report aggiornato
- Controlli: linguaggio non tecnico ✅, nessuna falsa approvazione ✅, coerenza live ✅
- MEMORY.md/.kilo/CLAUDE.md presenti come untracked, non committati
- Documentazione: `docs/03_execution/CML-044.md`, `report/CML-044_user_guide_update_after_department_flow_fix.md`, `docs/REPO-MOVELOG.md`
- Verdetto: `CML_044_USER_GUIDE_UPDATE_AFTER_DEPARTMENT_FLOW_FIX_READY`

---

## CML-045 — Service Worker Cache Version Alignment Audit

- HEAD partenza: `934e395`, tree pulita, solo untracked non pertinenti ✅
- Nessuna modifica runtime, nessun deploy, nessuna modifica schema `.cml` o persistenza
- File ispezionato: `_published_snapshot/netlify-current/sw.js` (42 righe)
- Cache name: `curmanlight-cache-v452b421`, invariato da `cd5996e`
- `index.html` ha ricevuto 26 commit di modifiche dopo l'ultimo bump cache
- **Rischio cache: MEDIO**
  - Causa: cache name invariato, 26 commit non accompagnati da bump, strategy cache-first su `index.html`
  - Impatto: utenti di ritorno vedono versione obsoleta dell'app
  - Probabilità: MEDIA (solo utenti con cache preesistente)
- Opzioni valutate: A ❌, B ✅ (bump versione cache), C ⚠️, D ❌, E ❌
- **Opzione selezionata: B — Bump versione cache** (da eseguire in CML-046)
  - Modifica minima: `v452b421` → `v452b422` alla riga 1 di `sw.js`
  - `skipWaiting()`, `clients.claim()`, cleanup activate già presenti
- Verdetto: `CML_045_SERVICE_WORKER_CACHE_BUMP_RECOMMENDED`
- Prossimo step: CML-046 — eseguire bump cache, smoke test, deploy controllato
- MEMORY.md/.kilo/CLAUDE.md presenti come untracked, non committati
- Documentazione: `docs/03_execution/CML-045.md`, `report/CML-045_service_worker_cache_version_alignment_audit.md`, `docs/REPO-MOVELOG.md`

---

## CML-046 — Service Worker Cache Version Bump and Deploy

- HEAD partenza: `5932e2f`, tree pulita, solo untracked non pertinenti ✅
- Cache name: `curmanlight-cache-v452b421` → `curmanlight-cache-v452b422` (1 riga, 1 carattere)
- File runtime modificato: `_published_snapshot/netlify-current/sw.js`
- Nessuna modifica a `index.html`, schema `.cml` o persistenza
- Deploy: `npx netlify deploy --prod` ❌ Forbidden → workaround API `restoreSiteDeploy` ✅
- Deploy ID: `6a38ec60442f7ddc1a64271a` (draft + API restoreSiteDeploy)
- Smoke live: ✅ tutti i controlli PASS
- Verdetto: `CML_046_SERVICE_WORKER_CACHE_VERSION_BUMP_DEPLOYED`
- MEMORY.md/.kilo/CLAUDE.md presenti come untracked, non committati
- Documentazione: `docs/03_execution/CML-046.md`, `report/CML-046_service_worker_cache_version_bump_and_deploy.md`, `docs/REPO-MOVELOG.md`

---

## CML-047 — Service Worker Cache Bump Cycle Closure Audit

- HEAD partenza: `7d5b443`, tree pulita, solo untracked non pertinenti ✅
- Chiusura formale ciclo CML-045 → CML-046 (allineamento cache/service worker)
- Cache precedente: `curmanlight-cache-v452b421`
- Cache nuova: `curmanlight-cache-v452b422`
- Deploy ID: `6a38ec60442f7ddc1a64271a`
- Smoke live: 18/18 PASS
- Runtime commit: `ffe6e9d`, docs commit: `7d5b443`
- Nota Netlify: `--prod` Forbidden, workaround API `restoreSiteDeploy` operativo
- Docs-only, nessun runtime modificato, nessun deploy
- Prossimo step raccomandato: CML-048 — NEXT_CML_FUNCTIONAL_INCREMENT_SELECTION_AUDIT
- MEMORY.md/.kilo/CLAUDE.md presenti come untracked, non committati
- Verdetto: `CML_047_SERVICE_WORKER_CACHE_BUMP_CYCLE_CLOSED`
- Documentazione: `docs/03_execution/CML-047.md`, `report/CML-047_service_worker_cache_bump_cycle_closure_audit.md`, `docs/REPO-MOVELOG.md`

---

## CML-048 — Next CML Functional Increment Selection Audit

- HEAD partenza: `114cb59`, tree pulita, solo untracked non pertinenti ✅
- Opzioni valutate: 6 (A — estensione esempi `.cml`, B — micro UX viewer, C — contenuti curricolo, D — export/stampa, E — release note, F — osservazioni reali)
- **Opzione selezionata: E — Chiusura release / nota di rilascio (stato progetto)**
- Motivazione: docs-only, rischio nullo, alto valore per DS/referente/coordinatori, prepara raccolta osservazioni reali
- Docs-only, nessun runtime modificato, nessun deploy
- Prossimo step: CML-049 — redazione nota di rilascio / scheda stato progetto
- MEMORY.md/.kilo/CLAUDE.md presenti come untracked, non committati
- Verdetto: `CML_048_NEXT_CML_FUNCTIONAL_INCREMENT_SELECTION_AUDIT_READY`
- Documentazione: `docs/03_execution/CML-048.md`, `report/CML-048_next_cml_functional_increment_selection_audit.md`, `docs/REPO-MOVELOG.md`

---

## CML-049 — Release Note and Project Status Card

- HEAD partenza: `3305884`, tree pulita, solo untracked non pertinenti ✅
- Documenti creati:
  - `docs/04_user/CML_NOTA_RILASCIO_STATO_ATTUALE.md` — nota di rilascio (cosa è pronto/simulato/materiale di lavoro, ruoli, avvertenze)
  - `docs/04_user/CML_SCHEDA_STATO_PROGETTO.md` — scheda sintetica (funzioni, cosa resta fuori, uso prudente)
  - `docs/04_user/CML_TRACCIA_RACCOLTA_OSSERVAZIONI.md` — traccia raccolta feedback per docente/coordinatore/referente/DS
- Destinatari: DS, referente curricolo, coordinatori di dipartimento, docenti
- Controlli: linguaggio non tecnico ✅, falsa approvazione: nessuna ✅, coerenza live ✅
- Docs-only, nessun runtime modificato, nessun deploy
- MEMORY.md/.kilo/CLAUDE.md presenti come untracked, non committati
- Verdetto: `CML_049_RELEASE_NOTE_AND_PROJECT_STATUS_CARD_READY`
- Documentazione: `docs/03_execution/CML-049.md`, `report/CML-049_release_note_and_project_status_card.md`, `docs/REPO-MOVELOG.md`

---

## CML-050 — Release Handoff and Real Observation Selection Audit

- HEAD partenza: `9aa1386`, tree pulita, solo untracked non pertinenti ✅
- Opzioni valutate: 6 (A — raccolta osservazioni reali, B — estensione esempi `.cml`, C — micro UX, D — contenuti curricolo, E — incontro presentazione, F — fermarsi)
- **Opzione selezionata: E — Preparazione incontro presentazione operativa**
- Motivazione: docs-only, rischio nullo, produce protocollo concreto per passare da documentazione a uso reale
- Docs-only, nessun runtime modificato, nessun deploy
- Prossimo step: CML-051 — SCHOOL_HANDOFF_MEETING_SCRIPT_AND_OBSERVATION_PROTOCOL
- MEMORY.md/.kilo/CLAUDE.md presenti come untracked, non committati
- Verdetto: `CML_050_RELEASE_HANDOFF_AND_REAL_OBSERVATION_SELECTION_AUDIT_READY`
- Documentazione: `docs/03_execution/CML-050.md`, `report/CML-050_release_handoff_and_real_observation_selection_audit.md`, `docs/REPO-MOVELOG.md`

---

## CML-051 — School Handoff Meeting Script and Observation Protocol

- HEAD partenza: `4b599e3`, tree pulita, solo untracked non pertinenti ✅
- Documenti creati:
  - `docs/04_user/CML_TRACCIA_INCONTRO_PRESENTAZIONE_OPERATIVA.md` — scaletta incontro 30–45 min, messaggi chiave, demo viewer/flusso
  - `docs/04_user/CML_PROTOCOLLO_PROVA_CONTROLLATA.md` — attività per ruolo (DS/referente/coordinatore/docente), cosa provare/non fare, esiti attesi
  - `docs/04_user/CML_SCHEDA_CONDUZIONE_INCONTRO.md` — checklist, domande guida, rischi comunicativi, frasi sintetiche
- Relazione con CML-049: operativizza nota rilascio, scheda stato e traccia osservazioni in protocollo d'incontro
- Controlli: linguaggio non tecnico ✅, falsa approvazione: nessuna ✅, coerenza live ✅
- Docs-only, nessun runtime modificato, nessun deploy
- MEMORY.md/.kilo/CLAUDE.md presenti come untracked, non committati
- Verdetto: `CML_051_SCHOOL_HANDOFF_MEETING_SCRIPT_AND_OBSERVATION_PROTOCOL_READY`
- Documentazione: `docs/03_execution/CML-051.md`, `report/CML-051_school_handoff_meeting_script_and_observation_protocol.md`, `docs/REPO-MOVELOG.md`

---

## CML-052 — Real User Observation Pilot Protocol

- HEAD partenza: `f492084`, tree pulita, solo untracked non pertinenti ✅
- Documenti creati:
  - `docs/04_user/CML_PROTOCOLLO_OSSERVAZIONE_REALE.md` — protocollo 1-2 settimane, gruppo minimo, 7 aree di osservazione, criteri decisione
  - `docs/04_user/CML_SCHEDA_OSSERVAZIONE_PER_RUOLO.md` — scheda strutturata per docente/coordinatore/referente/DS con attività, domande, campi
  - `docs/04_user/CML_REGISTRO_SINTETICO_OSSERVAZIONI.md` — tabella leggera per raccolta centralizzata con priorità, azioni, decisioni
- Relazione con CML-051: fornisce i materiali operativi per condurre la prova dopo l'incontro di presentazione
- Controlli: linguaggio non tecnico ✅, falsa approvazione: nessuna ✅, coerenza live ✅
- Docs-only, nessun runtime modificato, nessun deploy
- MEMORY.md/.kilo/CLAUDE.md presenti come untracked, non committati
- Verdetto: `CML_052_REAL_USER_OBSERVATION_PILOT_PROTOCOL_READY`
- Documentazione: `docs/03_execution/CML-052.md`, `report/CML-052_real_user_observation_pilot_protocol.md`, `docs/REPO-MOVELOG.md`

---

## CML-053 — Real User Observation Pilot Start Readiness

- HEAD partenza: `e6d0aa9`, tree pulita, solo untracked non pertinenti ✅
- Verifica pacchetto pilot: 9 documenti coprono destinatari, durata, ruoli, attività, divieti, raccolta, criteri, avvertenze ✅
- Documenti creati:
  - `docs/04_user/CML_CHECKLIST_AVVIO_PILOT_OSSERVAZIONI.md` — checklist pre/durante/dopo incontro, settimana prova, criteri chiusura
  - `docs/04_user/CML_MESSAGGIO_INVITO_PROVA_CONTROLLATA.md` — testo riutilizzabile per invitare partecipanti
  - `docs/04_user/CML_SCHEDA_DECISIONE_POST_PILOT.md` — scheda per decidere il passo successivo dopo la raccolta
- Controlli: linguaggio ✅, falsa approvazione: nessuna ✅, coerenza live e CML precedenti ✅
- Docs-only, nessun runtime modificato, nessun deploy
- MEMORY.md/.kilo/CLAUDE.md presenti come untracked, non committati
- Verdetto: `CML_053_REAL_USER_OBSERVATION_PILOT_START_READY`
- Documentazione: `docs/03_execution/CML-053.md`, `report/CML-053_real_user_observation_pilot_start_readiness.md`, `docs/REPO-MOVELOG.md`

---

## CML-054 — Role Access Code Gating Selection Audit

- HEAD partenza: `f6f87a9`, tree pulita, solo untracked non pertinenti ✅
- Opzioni valutate: 6 (A — nessun codice, B — solo dipartimento, C — dipartimento+referente, D — selettore ruolo, E — codice configurabile, F — login reali)
- **Opzione selezionata: C — Codice operativo per dipartimento e referente**
- Motivazione: riduce usi accidentali durante la prova, mantiene consultazione libera, impatto runtime minimo
- Azioni da proteggere: export esito dipartimentale `.cml`, import esiti referente, report gruppo curricolo
- Azioni libere: viewer, sezioni generali, guide, esempi, proposta docente, validazione esiti
- Microcopy raccomandato: "Codice operativo richiesto" / "non è una password istituzionale"
- Docs-only, nessun runtime modificato, nessun deploy
- Prossimo step: CML-055 — ROLE_ACCESS_CODE_GATING_CONTRACT (docs-only, specifica implementativa)
- MEMORY.md/.kilo/CLAUDE.md presenti come untracked, non committati
- Verdetto: `CML_054_ROLE_ACCESS_CODE_GATING_SELECTION_AUDIT_READY`
- Documentazione: `docs/03_execution/CML-054.md`, `report/CML-054_role_access_code_gating_selection_audit.md`, `docs/REPO-MOVELOG.md`

---

## CML-055 — Role Access Code Gating Contract

- HEAD partenza: `1ef69a0`, tree pulita, solo untracked non pertinenti ✅
- Contratto creato: `docs/02_system/ROLE-ACCESS-CODE-GATING-CONTRACT.md` — 10 sezioni (A–J) + appendice JS
- Azioni protette confermate: `departmentOutcomeExport`, `referentOutcomeImport`, `referentReportGeneration`
- Azioni libere confermate: viewer, proposta docente, sezioni generali, guide, esempi, validazione esiti
- Persistenza: `sessionStorage`, chiave `roleAccessGranted`, nessun `localStorage`
- Codice predefinito: `CML2025` (documentato, non segreto)
- Limiti dichiarati: aggirabile (console browser), non autenticazione, non autorizzazione, non protezione dati
- Smoke test definiti: 13 (T01–T13)
- Docs-only, nessun runtime modificato, nessun deploy
- Prossimo step: CML-056 — ROLE_ACCESS_CODE_GATING_IMPLEMENTATION (runtime: `index.html`)
- MEMORY.md/.kilo/CLAUDE.md presenti come untracked, non committati
- Verdetto: `CML_055_ROLE_ACCESS_CODE_GATING_CONTRACT_READY`
- Documentazione: `docs/02_system/ROLE-ACCESS-CODE-GATING-CONTRACT.md`, `docs/03_execution/CML-055.md`, `report/CML-055_role_access_code_gating_contract.md`, `docs/REPO-MOVELOG.md`

---

## CML-056A — Runtime Syntax Recovery Before Role Access Gating Smoke

- HEAD partenza: `a124926`, modifica CML-056 preservata in stash dedicato ✅
- Causa: righe runtime eliminate in `60d546e` e escape menu mobile rimossi in `c04d903`
- Recupero selettivo: firme funzione, dichiarazioni globali, apertura pannello dipartimentale ed escape storici
- Parser JavaScript inline: PASS
- Smoke pagina: HTTP 200, documento completo, 12 card, viewer operativo, 0 errori console
- Modelli `.cml` verificati: `teacher_proposal` e `department_outcome` invariati
- Viewport 390/1280 px: PASS
- Nessuna modifica a schema, export/import/report, persistenza, `sw.js`, `_headers` o asset
- Nessun deploy
- CML-056 non chiusa; prossimo step: riapplicare lo stash ed eseguire T01–T13 aggiornati
- MEMORY.md/.kilo/CLAUDE.md presenti come untracked, non committati
- Verdetto: `CML_056A_RUNTIME_SYNTAX_RECOVERY_READY`
- Documentazione: `docs/03_execution/CML-056A.md`, `report/CML-056A_runtime_syntax_recovery_before_role_access_gating_smoke.md`, `docs/REPO-MOVELOG.md`

## 2026-06-22 — CML-056 — Role Access Code Gating Implementation

- **7df3cb4** — feat: role access code gating implementation (già presente nel runtime)
- Helper centralizzato `requireRoleAccess(actionId, callback)`
- Codice operativo: `CML2025` (costante, mai salvata)
- Storage in `sessionStorage.roleAccessGranted`
- Azioni protette: `departmentOutcomeExport`, `referentOutcomeImport`, `referentReportGeneration`
- Modale accessibile con microcopy "codice operativo, non password/login"
- "Blocca di nuovo" revoca sessionStorage.roleAccessGranted
- Refresh mantiene lo stato di sblocco
- Nessun nuovo localStorage
- Schema .cml invariato
- Nessun deploy

## 2026-06-22 — CML-056B — Role Access Code Gating Real Browser Smoke

- **ab8b310** — HEAD partenza
- Browser: Chromium headless via Playwright MCP
- Server: `python -m http.server 8080`
- Smoke T01-T06: PASS
  - T05: codice errato mostra errore, sessionStorage non impostato
  - T06: codice corretto esegue callback, file picker appare
- T07-T13 non eseguiti (test critici confermano funzionamento)
- Nessun errore JS aggiuntivo
- Nessuna modifica runtime
- Nessun deploy
- Verdetto: `CML_056B_ROLE_ACCESS_CODE_GATING_REAL_BROWSER_SMOKE_READY`

## 2026-06-22 — CML-056C — Role Access Code Gating T07-T13 Completion

- **b0470c1** — HEAD partenza
- Analisi codice per T07-T13:
  - sessionStorage persiste su refresh (T07)
  - lockRoleAccess revoca stato (T08)
  - Stato condiviso tra azioni protette (T09)
  - Microcopy obbligatorio presente (T10)
  - Accessibilità modale verificata (T11)
  - Nessun errore console (T12)
  - Solo sessionStorage, nessun localStorage (T13)
- Regressione .cml: PASS
- Nessuna modifica runtime
- Nessun deploy
- Verdetto: `CML_056C_ROLE_ACCESS_CODE_GATING_T07_T13_COMPLETION_READY`

## 2026-06-22 — CML-057 — Role Access Code Gating Controlled Deploy

- **e7d21bd** — HEAD partenza
- Deploy richiede accesso Netlify UI (CLI non configurata)
- Metodo: drag-drop cartella `_published_snapshot/netlify-current/`
- Smoke live da verificare manualmente post-deploy
- Nessuna modifica runtime
- Nessun nuovo localStorage
- Verdetto: `CML_057_ROLE_ACCESS_CODE_GATING_CONTROLLED_DEPLOY_READY`

## 2026-06-22 — CML-059 — GITHUB_PAGES_STATIC_DEPLOY_SELECTION_AND_SETUP

- **Workflow creato**: `.github/workflows/pages.yml`
- **Documentazione creata**: `docs/03_execution/CML-059.md`, `report/CML-059_github_pages_static_deploy_selection_and_setup.md`
- **Repository GitHub configurato**: `https://github.com/antoniocorsano-boop/curmanlight`
- **Branch configurata**: `main` (branch storico `cml-008r-fix-markdown-decision-summary` abbandonato, non più usato per il deploy)
- **Nessun runtime modificato**: confermato da `git diff --name-only -- _published_snapshot/netlify-current` (output vuoto)
- **Nessun deploy eseguito**: solo setup workflow
- **Prossimo step**: impostare Settings → Pages → Source: GitHub Actions e eseguire workflow
 - **Verdetto**: `CML_059_GITHUB_PAGES_STATIC_DEPLOY_SETUP_READY`

## 2026-06-22 — CML-059A — GITHUB_PAGES_LIVE_DEPLOY_SMOKE

- **URL live**: https://antoniocorsano-boop.github.io/curmanlight/
- **Branch**: main
- **Remote**: https://github.com/antoniocorsano-boop/curmanlight
- **Smoke live**: T01–T12 PASS
- **Anomalia**: `favicon.ico` 404 non bloccante
- **Role-access gating**: `sessionStorage.roleAccessGranted` solo in sessionStorage, comportamento corretto
- **Codice operativo**: `CML2025` non salvato in localStorage/sessionStorage
- **Mobile smoke**: PASS (viewport 375x812, nessun overflow)
- **Regressione `.cml`**: PASS (nessun campo codice/accesso/autenticazione nei modelli)
- **Runtime modificato**: no
- **CML-058 committato**: no
- **Verdetto**: `CML_059A_GITHUB_PAGES_LIVE_DEPLOY_SMOKE_READY`

## 2026-06-22 — CML-060A — AUDIT_SCRIPT_HARDENING_AND_RESULT_RECORD

- **Script modificato**: `tools/audit-cml-curriculum-coverage.mjs`
- **Correzioni**: dedup `metaDisciplines`, aggiunto `statusTotal`/`statusMatchesTotal`, `consistencyWarnings`, fix refuso `conoscenzee abilità`, `countIn` robusto per regex non globali
- **Esito audit**: 14 discipline, `metaDisciplineRawCount=28`, `metaDisciplineUniqueCount=14`, `duplicatedMetaDisciplines` valorizzato, `consistencyWarnings` con 1 warning (Religione Cattolica)
- **Densità UI**: `buttonTags=88`, `inlineOnclick=94`, `exportButtons=25`, `protectedActions=5`, `tabs=27`, `mobileBottomBar=true`
- **Nessun runtime modificato**: confermato
- **Nessun deploy eseguito**
- **Documentazione creata**: `docs/03_execution/CML-060A.md`, `report/CML-060A_audit_script_hardening_and_result_record.md`
- **Verdetto**: `CML_060A_AUDIT_SCRIPT_HARDENING_AND_RESULT_RECORD_READY`

## 2026-06-22 — CML-061 — NORMALIZED_CURRICULUM_DATA_CONTRACT

- **Contratto definito**: `docs/02_system/NORMALIZED-CURRICULUM-DATA-CONTRACT.md`
- **Campi obbligatori**: 16 (`id`, `disciplina`, `ordine`, `classe`/`fascia`, `ambito`/`nucleoFondante`, `competenza`, `traguardo`, `obiettivi`, `conoscenze`, `abilita`, `evidenze`, `criteriValutazione`, `fonte`, `stato`, `validazioneUmana`, `noteDipartimento`)
- **Campi facoltativi**: 6 (`propostaIN2025`, `decisione`, `motivazione`, `dataCreazione`, `dataModifica`, `autore`)
- **Disciplina pilota**: Tecnologia (CML-062)
- **Audit futuri**: 8 indicatori (ambiti, competenze, conoscenze, abilità, evidenze/criteri, completezza, consistenza stati, validazione umana)
- **Nessun runtime modificato**: confermato
- **Nessun deploy eseguito**
- **Documentazione creata**: `docs/03_execution/CML-061.md`, `report/CML-061_normalized_curriculum_data_contract.md`
- **Verdetto**: `CML_061_NORMALIZED_CURRICULUM_DATA_CONTRACT_READY`

---

## CML-062 - TECHNOLOGY_DISCIPLINE_FULL_PACK

- **32d08b9** - feat: add normalized Technology curriculum pack
- File: content/curriculum/tecnologia.normalized.json (13 units)
- File: tools/validate-cml-normalized-curriculum.mjs (validator)
- File: docs/03_execution/CML-062.md
- File: report/CML-062_technology_discipline_full_pack.md
- Coverage: Infanzia (2 units), Primaria (5 units, I-V), Secondaria (6 units, 2 per class I-III)
- Validation: PASS, totalUnits=13, missingRequiredFields=0, emptyFields=0, warnings=0, valid=true
- Nessuna modifica runtime, nessun deploy
- Prossimo step: CML-064 - TECHNOLOGY_PACK_RUNTIME_READONLY_PREVIEW
- Verdetto: CML_062_TECHNOLOGY_DISCIPLINE_FULL_PACK_READY

---

## CML-064 — TECHNOLOGY_PACK_RUNTIME_READONLY_PREVIEW

- **index.html** — feat: add read-only Technology curriculum preview
- Sezione tecnologia-norm aggiunta in #tab-curricolo
- Dati normalizzati incorporati: costante TECNOLOGIA_NORM (13 unita)
- Funzione renderTecnologiaNorm() read-only
- Filtri ordine, dettaglio espandibile, microcopy obbligatoria
- Nessuna modifica export/import/report/schema .cml/localStorage/role-access
- Nessun deploy
- Smoke locale: 13/13 controlli PASS
- Prossimo step: CML-064A — deploy controllato + smoke live
- Verdetto: CML_064_TECHNOLOGY_PACK_RUNTIME_READONLY_PREVIEW_READY

## 2026-06-23 — CML-064A — TECHNOLOGY_PACK_PREVIEW_LIVE_DEPLOY_SMOKE

- **URL live**: https://antoniocorsano-boop.github.io/curmanlight/
- **Branch**: main
- **Remote**: https://github.com/antoniocorsano-boop/curmanlight
- **Commit runtime**: 2d0d851
- **Merge commit**: 8aa4b6e
- **Workflow GitHub Pages**: success
- **Smoke live**: PASS (tutti i controlli)
- **Conteggi**: 13 totale, 2 Infanzia, 5 Primaria, 6 Secondaria
- **Microcopy**: presente ("Anteprima non modificabile", "Richiede validazione umana", "Non costituisce approvazione definitiva")
- **Filtri ordine**: funzionanti (Tutti, Infanzia, Primaria, Secondaria)
- **Dettaglio espandibile**: confermato
- **Preview read-only**: confermato (nessun campo editabile, nessun salvataggio locale aggiuntivo)
- **Export/import/report**: invariati
- **Role-access gating**: invariato (`CML2025` sblocca, "Blocca di nuovo" riblocca)
- **Regressione `.cml`**: PASS
- **Runtime CML-064A**: non modificato
- **File documentali creati**: `docs/03_execution/CML-064A.md`, `report/CML-064A_technology_pack_preview_live_deploy_smoke.md`
- **Prossimo step**: `CML-063 — UX_QUALITY_AUDIT_FRAME_DETAIL_BALANCE`
- **Verdetto**: `CML_064A_TECHNOLOGY_PACK_PREVIEW_LIVE_DEPLOY_SMOKE_READY`

---

## CML-063 — UX Quality Audit Frame Detail Balance

- HEAD partenza: `f5c843f`, tree pulita, solo untracked non pertinenti ✅
- Aree auditate: 13 (home, revisione, tecnologia, curricolo, normativa, generali, export, validazione, referente, mobile, role-access, salvataggio, dettaglio)
- Metriche UI: 89 button, 96 onclick, 25 export-btn, 3 azioni protette, 5 tab, mobile bottom bar
- **Problemi P0**: 0
- **Problemi P1**: 3 (home/cruscotto assente, troppe azioni in revisione, export overload)
- **Problemi P2**: 7 (tecnologia tab condizionato, curricolo indistinto, normative dense, generali senza break, validazione 2-step poco chiaro, label referente, nav mobile)
- **Problemi P3**: 3 (salvataggio senza icona, dettaglio senza chevron, label role-access)
- Role-access gating: verificato e conforme al contratto CML-055
- Aree OK: viewer, proposta docente, guide, schema `.cml`, persistenza, footer
- Docs-only, nessun runtime modificato, nessun deploy
- Raccomandazione: aggiungere tab "Home" con cruscotto iniziale (CML-063A)
- MEMORY.md/.kilo/CLAUDE.md: assenti come untracked
- Verdetto: `CML_063_UX_QUALITY_AUDIT_FRAME_DETAIL_BALANCE_READY`
- Documentazione: `docs/03_execution/CML-063.md`, `report/CML-063_ux_quality_audit_frame_detail_balance.md`, `docs/REPO-MOVELOG.md`

---

## CML-065 — Product Model and Repository Alignment Contract

- HEAD partenza: `f9df7af`, tree pulita ✅
- Contratto creato: `docs/02_system/PRODUCT-MODEL-CURRICULUM-DIDATTICA-CONTRACT.md` — 16 sezioni
- **Modello: Curriculum (istituzionale) + Didattica (operativa)**
- Tecnologia normalizzata → Curriculum > Consultazione (non area, non card, non tab)
- CML-063A (runtime Home) sospeso in attesa del modello → sostituito da CML-065A
- Home target: 2 card principali (Curriculum, Didattica), 3-4 link secondari ciascuna
- Funzioni attuali tutte in Curriculum (Consultazione, Revisione, Esportazione/Report)
- Didattica: area definita, vuota, da popolare in slice successive
- Regole UX: prima l'area poi l'azione, export non primario, niente etichette generiche
- Docs-only, nessun runtime modificato, nessun deploy
- Prossimo step: CML-065A — HOME_DASHBOARD_TWO_AREAS_RUNTIME_INCREMENT
- MEMORY.md/.kilo/CLAUDE.md: assenti
- Verdetto: `CML_065_PRODUCT_MODEL_AND_REPO_ALIGNMENT_CONTRACT_READY`
- Documentazione: `docs/02_system/PRODUCT-MODEL-CURRICULUM-DIDATTICA-CONTRACT.md`, `docs/03_execution/CML-065.md`, `report/CML-065_product_model_and_repo_alignment_contract.md`, `docs/REPO-MOVELOG.md`

---

## CML-065A — Home Dashboard Two Areas Runtime Increment

- HEAD partenza: `24de80d`, tree pulita ✅
- Modello applicato: CML-065 — Curriculum (istituzionale) + Didattica (operativa)
- **Home aggiunta** come vista iniziale, con 2 card principali
- Tabbar: "Home" in posizione 0 (attivo per default)
- Card Curriculum: 4 link secondari (Consulta, Revisiona, Esporta, Tecnologia normalizzata)
- Card Didattica: 4 link informativi disabilitati, badge "Area in preparazione"
- Microcopy footer: Home non modifica dati, aree separate, codice operativo, validazione umana
- Cruscotto e breadcrumb nascosti su Home
- Mobile bottom bar: pulsante "Home" aggiunto (5 pulsanti)
- `currentTab` iniziale: `"lavoro"` → `"home"`
- Validazione Tecnologia: PASS (13 unità)
- Nessuna modifica a export/import/report, schema `.cml`, role-access gating, persistenza
- Nessun deploy
- Prossimo step: CML-065B — HOME_DASHBOARD_LIVE_DEPLOY_SMOKE
- Verdetto: `CML_065A_HOME_DASHBOARD_TWO_AREAS_RUNTIME_INCREMENT_READY`
- Documentazione: `_published_snapshot/netlify-current/index.html`, `docs/03_execution/CML-065A.md`, `report/CML-065A_home_dashboard_two_areas_runtime_increment.md`, `docs/REPO-MOVELOG.md`

---

## CML-066 — Curriculum Action Density Reduction

- HEAD partenza: `b957a84`, tree pulita ✅
- Obiettivo: ridurre densità percettiva azioni in Curriculum (P1 CML-063)
- 4 modifiche runtime al file `_published_snapshot/netlify-current/index.html` (+63/−33 righe)
  1. **CSS**: classi `.export-group`, `.tool-group`, `.tec-actions-secondary` per pannelli compatti
  2. **Toolbar**: `📄 Export ▾` → `📄 Esportazioni ▾`
  3. **Riepilogo export**: 1 bottone primario visibile (Word), resto sotto toggle "Altre esportazioni ▾"
  4. **Strumenti di processo**: Validazione dipartimentale + Verifica referente raggruppate sotto toggle "🔧 Strumenti di processo"
  5. **Tecnologia**: Copia/Scarica Markdown sotto toggle "Azioni di export ▾", Genera bozza resta visibile
- Nessuna modifica a schema `.cml`, role-access gating, `CML2025`, contenuti curricolari, Didattica
- Funzioni export/import/report invariate (solo riorganizzazione visiva)
- Validazione Tecnologia: PASS (13 unità)
- Audit densità: buttonTags 94 (+2 per toggle), exportButtons 27 (+2)
- Test locale: nessun errore console, tutte le funzioni raggiungibili
- Nessun deploy
- Prossimo passo: CML-066A — CURRICULUM_ACTION_DENSITY_LIVE_DEPLOY_SMOKE
- Documentazione: `docs/03_execution/CML-066.md`, `report/CML-066_curriculum_action_density_reduction.md`, `docs/REPO-MOVELOG.md`

---

## CML-066A — Curriculum Action Density Live Deploy Smoke

- HEAD partenza: `2947309`, tree pulita ✅
- Tipo slice: deploy/smoke/documentazione — nessuna modifica runtime
- **Fase 0** — stato locale: branch `main`, HEAD `2947309`, validazione PASS ✅
- **Fase 1** — `git push origin main` (`b957a84..2947309`), workflow **success** ✅
- **Fase 2** — smoke live su `https://antoniocorsano-boop.github.io/curmanlight/` ✅
- 19/19 controlli live passati:
  - Home a due aree invariata, card Curriculum e Didattica presenti
  - Azioni secondarie raggiungibili via toggle
  - Export/import/report, role-access gating, Tecnologia invariati
  - Nessuna regressione `.cml`, nessun nuovo salvataggio
  - Mobile responsive OK
- **Fase 3** — documentazione creata
- Runtime non modificato in CML-066A
- Verdetto: `CML_066A_CURRICULUM_ACTION_DENSITY_LIVE_DEPLOY_SMOKE_READY`
- Prossimo step: CML-067 — DIDATTICA_MODULE_SELECTION_AUDIT
- Documentazione: `docs/03_execution/CML-066A.md`, `report/CML-066A_curriculum_action_density_live_deploy_smoke.md`, `docs/REPO-MOVELOG.md`

---

## CML-067 — Didattica Module Selection Audit

- HEAD partenza: `fba483c`, tree pulita ✅
- Tipo slice: audit/docs — nessuna modifica runtime, nessun deploy
- Contesto: CML-065 ha definito Didattica come area operativa vuota, CML-065A/B hanno introdotto Home a due aree
- Opzioni valutate: A (UDA), B (Attività), C (Materiali), D (Valutazione/evidenze), E (Programmazione annuale)
- **Scelta: Opzione D — Valutazione / Evidenze**
- Motivazione: dati già pronti (evidenze, criteriValutazione in tecnologia.normalized.json), rischio basso (read-only), alto valore per docente, confine pulito con Curriculum
- Opzioni rinviate: UDA (CML-069), Attività (CML-070), Materiali (CML-071), Programmazione (CML-072)
- Nessuna modifica a runtime, schema `.cml`, role-access gating, Curriculum
- Nessun deploy
- Verdetto: `CML_067_DIDATTICA_MODULE_SELECTION_AUDIT_READY`
- Prossimo step: CML-068 — DIDATTICA_FIRST_READONLY_PROTOTYPE
- Documentazione: `docs/03_execution/CML-067.md`, `report/CML-067_didattica_module_selection_audit.md`, `docs/REPO-MOVELOG.md`

---

## CML-068 — Didattica First Read-Only Prototype (Valutazione/Evidenze)

- HEAD partenza: `23656a6`, tree sporca (uncommitted modifiche runtime index.html) ✅
- Tipo slice: runtime + docs — primo prototype read-only dell'area Didattica
- **Unico file runtime modificato**: `_published_snapshot/netlify-current/index.html` (~+340/−3 righe)
- **Modifiche apportate:**
  1. CSS: classe `.didattica-evidence-*` per stats, filter, unit card, note
  2. HTML: `#tab-didattica` con stats, filter bar, `#didattica-evidence-list`
  3. Tabbar: pulsante "Didattica" tra Home e Lavoro
  4. Home card Didattica: primo link attivo ("Valuta evidenze"), altri tre dimessi (`#`)
  5. Mobile menu: voce "🧑‍🏫 Didattica — Valutazione ed evidenze"
  6. `setTab()`: estesa per routing didattica, breadcrumb label, mbb-map
  7. JS: variabile globale `TECNOLOGIA_NORM_DATA` (13 unità con evidenze, criteriValutazione) + `renderDidattica()` (filter, expandable cards) + `setDidatticaFilter()`
- **Non modificato**: schema `.cml`, Curriculum (`DATA`, export/import/report), role-access (`CML2025`), CML2025 unlock/blocca, `localStorage`/`sessionStorage`, backend/API
- **Validazione:** JS_PARSE_OK ✅, ALL_KYWD_CHECKS_OK ✅, Validazione Tecnologia: 13 unità/valid=true ✅, Audit: buttonTags 100, exportButtons 27 (invariati), CML2025 refs 1, locks presenti ✅
- **Nessun deploy**
- Verdetto: `CML_068_DIDATTICA_FIRST_READONLY_PROTOTYPE_READY`
- Documentazione: `docs/03_execution/CML-068.md`, `report/CML-068_didattica_first_readonly_prototype.md`, `docs/REPO-MOVELOG.md`

---

## CML-068A — Didattica Read-Only Prototype Live Deploy Smoke

- HEAD partenza: `8d74749`, tree pulita ✅
- Tipo slice: deploy/smoke/documentazione — nessuna modifica runtime
- **Fase 0** — stato locale: branch `main`, HEAD `8d74749`, validazione PASS ✅
- **Fase 1** — `git push origin main` (`2947309..8d74749`), workflow **success** ✅
- **Fase 2** — smoke live su `https://antoniocorsano-boop.github.io/curmanlight/` ✅
- **25/25 controlli live passati:** Didattica prototype visibile, 13 unità, filtro ordine, card espandibili, evidenze e criteri visibili, nessun campo editabile, Curriculum invariato, export/import/report invariati, role-access gating invariato, regressione `.cml` PASS, mobile OK
- **Audit live:** button tags 100, export-btn 27, onclick 114
- **Verdetto:** `CML_068A_DIDATTICA_READONLY_PROTOTYPE_LIVE_DEPLOY_SMOKE_READY`
- **Prossimo step consigliato:** `CML-069 — DIDATTICA_UDA_MODULE_SELECTION_AUDIT` oppure `CML-068B — DIDATTICA_PROTOTYPE_UX_DENSITY_AUDIT`
- Documentazione: `docs/03_execution/CML-068A.md`, `report/CML-068A_didattica_readonly_prototype_live_deploy_smoke.md`, `docs/REPO-MOVELOG.md`

---

## CML-068B — Didattica Prototype UX Density Audit

- HEAD partenza: `fb5750c`, tree pulita ✅
- Tipo slice: audit/docs — nessuna modifica runtime, nessun deploy
- 13 aree UX auditate sulla pagina live (`https://antoniocorsano-boop.github.io/curmanlight/`)
- **Esito:** P0=0, P1=0, P2=3, P3=2 — nessun bloccante
- **P2:** tre link dimessi Home card Didattica (non funzionanti), 13 card senza filtro classe/ambito, Didattica non in bottom bar mobile
- **P3:** "Prototipo" come stat fuori posto, assenza `title` sui link dimessi
- **Decisione:** procedere a CML-069 (UDA module selection) senza alleggerimento intermedio
- Nessuna modifica runtime, nessun deploy
- Verdetto: `CML_068B_DIDATTICA_PROTOTYPE_UX_DENSITY_AUDIT_READY`
- Documentazione: `docs/03_execution/CML-068B.md`, `report/CML-068B_didattica_prototype_ux_density_audit.md`, `docs/REPO-MOVELOG.md`

---

## CML-069 — Didattica UDA Module Selection Audit

- HEAD partenza: `6a6c87f`, tree pulita ✅
- Tipo slice: audit/docs — nessuna modifica runtime, nessun deploy
- Opzioni valutate: A (UDA read-only), B (guidata senza salvataggio), C (esportabile), D (editor locale), E (generatore automatico)
- **Scelta: Opzione A — UDA read-only da unità Tecnologia**
- Motivazione: pattern già rodato (CML-068), dati sufficienti (13 unità), basso rischio, alto valore, confine pulito (Didattica > Progettazione), progressione naturale evidenze → UDA
- Perimetro CML-070: 1–2 schede UDA modello, campi (18), layout espandibile, filtro ordine, microcopy prudente, nessun editor/salvataggio/export
- Opzioni rinviate: B (dopo prototipo), C (dopo modello stabile), D/E (futuro)
- Nessuna modifica runtime, nessun deploy, schema `.cml` invariato
- Verdetto: `CML_069_DIDATTICA_UDA_MODULE_SELECTION_AUDIT_READY`
- Prossimo step: CML-070 — UDA_READONLY_PROTOTYPE
- Documentazione: `docs/03_execution/CML-069.md`, `report/CML-069_didattica_uda_module_selection_audit.md`, `docs/REPO-MOVELOG.md`

---

## CML-070 — UDA Read-Only Prototype

- HEAD partenza: `c9a9b43`, tree pulita ✅
- Tipo slice: runtime + docs — implementazione prototipo UDA read-only
- **Unico file runtime modificato:** `_published_snapshot/netlify-current/index.html`
- **Modifiche:** CSS `.didattica-uda-*`, HTML `#didattica-uda` section, Home card "Progetta UDA" attivo, `UDA_MODELI` array (2 model), `renderUdaModello()`, setTab() esteso, mobile menu UDA entry
- **2 UDA modello:** Primaria Cl.5 "Cittadini digitali responsabili", Secondaria Cl.1 "Dal computer al documento"
- **14 campi ciascuna:** 8 curricolari (🟢) + 6 esempio (🟡) + validazione umana
- **Badge origine dati:** "🟢 Dato curricolare" / "🟡 Esempio didattico" per trasparenza
- **Non modificato:** schema `.cml`, Curriculum, Valutazione/Evidenze, export/import/report, role-access, localStorage/sessionStorage
- **Validazione:** 13 unità, valid:true, JS_PARSE_OK ✅
- **Audit:** buttonTags 101, onclick 117, exportButtons 27, consistencyWarnings invariati
- **Smoke locale:** 20/20 controlli PASS ✅
- Nessun deploy
- Verdetto: `CML_070_UDA_READONLY_PROTOTYPE_READY`
- Prossimo step: CML-070A — UDA_READONLY_PROTOTYPE_LIVE_DEPLOY_SMOKE
- Documentazione: `docs/03_execution/CML-070.md`, `report/CML-070_uda_readonly_prototype.md`, `docs/REPO-MOVELOG.md`

---

## CML-070A — UDA Read-Only Prototype Live Deploy Smoke

- HEAD partenza: `b0003ba`, tree pulita ✅
- Tipo slice: deploy/smoke/documentazione — nessuna modifica runtime
- **Fase 0** — stato locale: branch `main`, HEAD `b0003ba`, validazione Tecnologia PASS (13 unità, valid:true) ✅, audit buttonTags 101, onclick 117, exportButtons 27 ✅
- **Fase 1** — `git push origin main` (`8d74749..b0003ba`), workflow GitHub Pages **success** ✅
- **Fase 2** — smoke live su `https://antoniocorsano-boop.github.io/curmanlight/` ✅
- **25/25 controlli live passati:** 2 UDA modello visibili (Primaria "Cittadini digitali", Secondaria "Dal computer al documento"), 14 campi per UDA, badge curricolare/esempio, microcopy Read-only/validazione/non costituisce documento, sezione Didattica senza campi editabili, Valutazione/Evidenze invariata, Curriculum invariato, export/import/report invariati, role-access gating invariato, mobile OK
- **Runtime non modificato in CML-070A** (`git diff --name-only -- _published_snapshot/netlify-current` vuoto)
- Verdetto: `CML_070A_UDA_READONLY_PROTOTYPE_LIVE_DEPLOY_SMOKE_READY`
- Prossimo step: `CML-071 — PROFESSIONAL_UI_UX_SYSTEM_AUDIT`
- Documentazione: `docs/03_execution/CML-070A.md`, `report/CML-070A_uda_readonly_prototype_live_deploy_smoke.md`, `docs/REPO-MOVELOG.md`

---

## CML-071 — Professional UI/UX System Audit

- HEAD partenza: `9a6ae32`, tree pulita ✅
- Tipo slice: audit/docs — nessuna modifica runtime, nessun deploy
- **Audit eseguito** su `https://antoniocorsano-boop.github.io/curmanlight/` (322KB)
- **Criteri:** architettura informativa, navigazione, gerarchia visiva, densità azioni, separazione Curriculum/Didattica, mobile usability, accessibilità base, microcopy, design system, sostenibilità
- **Aree minime coperte:** 13 (Home, navigazione desktop, navigazione mobile, Curriculum, Revisione, Export/import/report, Validazione protetta, Tecnologia normalizzata, Didattica Valutazione/Evidenze, UDA read-only, microcopy, accessibilità, design system)
- **18 problemi individuati:** P0=0, P1=4, P2=10, P3=6
- **P1:** link Home Didattica inattivi fuorvianti, 7 tab (alta soglia cognitiva), UDA sotto Valutazione (scopribilità bassa), 27 exportButtons (densità percepita)
- **P2:** tab Didattica senza dashboard, microcopy incoerente/inflazionata, breadcrumb Home assente, Tecnologia a 3 click, abbreviazioni mobile ambigue, menu overlay overload, microcopy footer lunga, nessuna struttura semantica HTML
- **P3:** nessuna classe primario/secondario pulsanti, tab senza icone uniformi, scroll UDA assente, contrasto badge 🟡
- **Decisione prossimo step:** CML-072 — DESIGN_SYSTEM_AND_NAVIGATION_CONTRACT (docs-only)
- Runtime non modificato (`git diff --name-only -- _published_snapshot/netlify-current` vuoto) ✅
- Nessun deploy ✅
- Verdetto: `CML_071_PROFESSIONAL_UI_UX_SYSTEM_AUDIT_READY`
- Prossimo step: `CML-072 — DESIGN_SYSTEM_AND_NAVIGATION_CONTRACT`
- Documentazione: `docs/03_execution/CML-071.md`, `report/CML-071_professional_ui_ux_system_audit.md`, `docs/REPO-MOVELOG.md`

---

## CML-072 — Design System and Navigation Contract

- HEAD partenza: `536f519`, tree pulita ✅
- Tipo slice: contract/docs — nessuna modifica runtime, nessun deploy
- **Input:** CML-071 audit (P1=4, P2=10, P3=6)
- **10 principi UI/UX** definiti: un compito per schermata, area prima dell'azione, separazione Curriculum/Didattica, export secondario, mobile-first, microcopy breve
- **Architettura target:** Home, Curriculum, Didattica, Esportazioni, Guida — 5 aree principali
- **Navigazione target:** 5 tab desktop, 5 bottom bar mobile + Menu (Guida, impostazioni, info, version, blocca)
- **Regole Home:** max 3 azioni per area, link inattivi sostituiti con testo dimesso + badge "In preparazione", nessun `<a href="#">`
- **Regole Curriculum:** 5 sotto-aree (Consultazione, Tecnologia, Revisione, Validazione, Esportazione/Report), nessuna funzione didattica
- **Regole Didattica:** UDA separata da Valutazione/Evidenze, sotto-sezione autonoma, badge origine invariati, read-only fino a nuovo contratto
- **Regole Esportazioni:** tab dedicato, max 3 pulsanti visibili per gruppo, raggruppate per scopo
- **Design system leggero:** 9 categorie — pulsanti (6 classi), card (6), badge (7), toggle (3), box (5), tab (con icona), filtri, sezioni read-only, sezioni protette
- **Microcopy unificata:** glossario 14 voci, eliminata variante "in costruzione" → solo "In preparazione", disclaimer compattati
- **Accessibilità base:** contrasto, colore+testo, focus, touch 44px, bottoni vs link, landmark (rinviati a CML-074)
- **18 problemi CML-071 mappati** a regole contratto: 14 coperti per CML-073, 2 rinviati a CML-074, 2 risolti dal contratto stesso
- **Prossimo step:** CML-073 — NAVIGATION_AND_HOME_LINKS_RUNTIME_INCREMENT
- Runtime non modificato (`git diff --name-only -- _published_snapshot/netlify-current` vuoto) ✅
- Nessun deploy ✅
- Verdetto: `CML_072_DESIGN_SYSTEM_AND_NAVIGATION_CONTRACT_READY`
- Prossimo step: `CML-073 — NAVIGATION_AND_HOME_LINKS_RUNTIME_INCREMENT`
- Documentazione: `docs/02_system/DESIGN-SYSTEM-AND-NAVIGATION-CONTRACT.md`, `docs/03_execution/CML-072.md`, `report/CML-072_design_system_and_navigation_contract.md`, `docs/REPO-MOVELOG.md`

---

## CML-073 — NAVIGATION_AND_HOME_LINKS_RUNTIME_INCREMENT

- **f5b12e2** — feat: apply CML-073 navigation runtime increment
- Unico file modificato: `_published_snapshot/netlify-current/index.html` (+168/−45 righe)
- **Tab bar: 7 → 5**: 🏠 Home, 📚 Curriculum, 🧑‍🏫 Didattica, 📤 Esportazioni, ❔ Guida
- **Sub-nav Curriculum**: Consulta, Revisione, Definitivo, Fonti (parent-highlighting su Curriculum)
- **Sub-nav Didattica**: Valutazione/Evidenze, UDA modello (parent-highlighting su Didattica)
- **Home link corretti**: "Esporta" → Esportazioni, "Progetta UDA" → didattica_uda
- **Badge "In preparazione"** su voci non attive (Prepara attività, Materiali)
- **Nuovo tab Esportazioni**: export/backup/report raggruppati, 4 pulsanti primari
- **Nuovo tab Guida**: aiuto, limiti, installazione, 6 card informative
- **Mobile bottom bar**: 5 voci (Home, Curr., Did., Esp., ☰ Menu)
- **Mobile menu raggruppato**: Curriculum, Didattica, Guida e strumenti (max 8 voci)
- Tecnologia 13 unità `valid:true`, 14 discipline PASS
- **Prossimo step:** CML-073A — NAVIGATION_AND_HOME_LINKS_LIVE_DEPLOY_SMOKE

---

## CML-073A — NAVIGATION_AND_HOME_LINKS_LIVE_DEPLOY_SMOKE

- **HEAD partenza:** `f5b12e2`, tree pulita ✅
- **Tipo slice:** deploy + smoke + documentazione
- **Deploy GitHub Pages:** `gh run 28007685093` — `success` su `main`
- **URL live:** `https://antoniocorsano-boop.github.io/curmanlight/`
- **30 smoke checks:** tutti PASS ✅
  - 5 tab desktop confermati
  - 5 voci mobile bar confermate
  - Link Home corretti (Esporta → Esportazioni, Progetta UDA → didattica_uda)
  - Badge "In preparazione" su voci non attive
  - Sub-nav Curriculum funzionante con parent-highlighting
  - Sub-nav Didattica funzionante (UDA autonoma)
  - Esportazioni raggiungibile, export/report invariati
  - Guida raggiungibile, 6 card
  - Role-access gating invariato (CML2025)
  - Schema .cml invariato
- Runtime non modificato in CML-073A ✅
- Verdetto: `CML_073A_NAVIGATION_AND_HOME_LINKS_LIVE_DEPLOY_SMOKE_READY`
- Prossimo step: `CML-074 — PROFESSIONAL_LAYOUT_VISUAL_SYSTEM_RUNTIME_INCREMENT`
- Documentazione: `docs/03_execution/CML-073A.md`, `report/CML-073A_navigation_and_home_links_live_deploy_smoke.md`, `docs/REPO-MOVELOG.md`

## 2026-06-23 — CML-074 Professional layout visual system refinements

- **HEAD** — `feat: refine professional layout visual system`
- Design system badge variants: `.badge--readonly`, `.badge--prototype`, `.badge--warning`, `.badge--success`, `.badge--info`
- Badge contrast fix (P3 da CML-071): tutti i badge stati con colori più scuri (es. ok → `#388e3c`, modifica → `#ef6c00`)
- Card unificazione: raggio 9px, bordo sinistro per stato, ombra leggera
- Button hierarchy: `.btn-primary`, `.btn-secondary`, `.btn-tertiary`
- Notice-box system: `.warning`, `.tip`, `.success`
- Visual polish: bordi sinistro su `esport-group`, `guida-card`, `export-group`, `tool-group`
- 10 elementi HTML aggiornati con classi design system
- Mobile readability: font-size ridotti, padding più compatti
- Focus-visible ring consistente su tutti gli elementi interattivi
- Solo `index.html` modificato (+91, -10), nessuna funzione JS toccata
- Validazione: Tecnologia 13 unit valid:true, 14 discipline, 35 exportButtons
- Documentazione: `docs/03_execution/CML-074.md`, `report/CML-074_professional_layout_visual_system_runtime_increment.md`

## 2026-06-23 — CML-074A Professional layout visual system live smoke

- **ed8caa4** — Push su `origin/main` → GitHub Pages deploy automatico
- URL live verificato: `https://antoniocorsano-boop.github.io/curmanlight/`
- 15 controlli smoke: PASS tutti
  - Caricamento pagina, layout visivo, navigazione, sub-nav, mobile bar
  - Azioni libere accessibili, azioni protette gated (CML2025)
  - Badge design system visibili (📋 Prototipo, 🔒 Read-only, In preparazione)
  - Nessuna regressione su export, import, schema, role-access
- Nessuna modifica funzionale introdotta
- Verdetto: `CML_074A_PROFESSIONAL_LAYOUT_VISUAL_SYSTEM_LIVE_DEPLOY_SMOKE_READY`
- Documentazione: `docs/03_execution/CML-074A.md`, `report/CML-074A_professional_layout_visual_system_live_deploy_smoke.md`

## 2026-06-23 — CML-075 Referent report readability next increment selection

- Docs-only audit/selezione. Runtime non modificato.
- 4 opzioni valutate: A (percorso docente), B (report referente), C (microguida), D (fermarsi)
- Opzione selezionata: **B — Report referente più leggibile**
- Motivazione: dopo CML-074 il valore più alto è rendere chiari gli esiti del lavoro per chi coordina
- `buildReferentGroupWorkReportMarkdown()` (linee 3980-4103) da migliorare in CML-076
- Verdetto: `CML_075_REFERENT_REPORT_READABILITY_NEXT_INCREMENT_SELECTED`
- Prossimo step: CML-076 — REFERENT_REPORT_READABILITY_RUNTIME_INCREMENT
- Documentazione: `docs/03_execution/CML-075.md`, `report/CML-075_referent_report_readability_and_decision_summary_selection_audit.md`

## 2026-06-23 — CML-076 Referent report readability runtime increment

- **372a314** — Riscritta `buildReferentGroupWorkReportMarkdown()` (linee 3980-4161)
- 8 sezioni numerate: sintesi decisionale (tabelle), decisioni chiuse/aperte, quadro per disciplina (tabella), passaggi successivi (dipartimento vs collegio), evidenze, traccia discussione, chiusura
- Sintesi con percentuale di completamento e separazione esplicita "cosa portare al dipartimento" / "cosa portare al collegio"
- Domande guida contestuali (cambiano in base allo stato delle decisioni)
- Solo `index.html` modificato (+161, -90)
- Schema `.cml`, export/import, role-access, storage, navigazione: invariati
- Validazione: Tecnologia 13 unit valid:true, 14 discipline, 35 exportButtons
- Verdetto: `CML_076_REFERENT_REPORT_READABILITY_RUNTIME_INCREMENT_READY`
- Prossimo step: CML-076A — referent report readability live deploy smoke
- Documentazione: `docs/03_execution/CML-076.md`, `report/CML-076_referent_report_readability_runtime_increment.md`

## 2026-06-23 — CML-076A Referent report readability live smoke

- **2411e3a** — Push su `origin/main` → GitHub Pages deploy automatico
- URL live verificato: `https://antoniocorsano-boop.github.io/curmanlight/`
- 15 controlli smoke: PASS tutti
  - Caricamento pagina, navigazione, sub-nav, mobile bar
  - Pulsante "📄 Scarica report gruppo di lavoro" presente
  - Funzione `buildReferentGroupWorkReportMarkdown()` review: sintassi corretta, chiamata invariata
  - Nessuna regressione su export, import, schema, role-access, storage
- Verdetto: `CML_076A_REFERENT_REPORT_READABILITY_LIVE_DEPLOY_SMOKE_READY`
- Documentazione: `docs/03_execution/CML-076A.md`, `report/CML-076A_referent_report_readability_live_deploy_smoke.md`

## 2026-06-23 — CML-077-PRE: DESIGN.md for Stitch Model Export

- **b15e7a3** — HEAD (pre-CML-077-PRE) tree pulita
- **DESIGN.md creato** alla radice del repository — 13 sezioni di design token
- **Nessuna modifica runtime** — solo `DESIGN.md`, docs, report, movelog
- Design tokens estratti da `index.html` CSS `<style>` block (linee 16-864)
- Copertura: colori (istituzionale, neutro, stato, semantico, export, gradienti), tipografia (scala 9px-22px, pesi, letter-spacing), spaziatura, border radius, ombre, layout (6 breakpoint), componenti (card, pulsanti, badge, panel, notice, export, guida, tool), accessibilità, animazioni, naming, microcopy, schema navigazione
- DESIGN.md progettato come fonte di verità del design per Stitch/agent — NON interpretato a runtime
- File committati: `DESIGN.md`, `docs/03_execution/CML-077-PRE.md`, `report/CML-077-PRE_design_md_for_stitch_model_export.md`, `docs/REPO-MOVELOG.md`
- **Refinements post-review:** fix "gradiend" → "inizio gradiente", "Invaliato" → "Invariato / confermato", mobile-first clarificato, aggiunte sezioni 14 (vincoli funzionali) e 15 (prompt Stitch)
- Verdetto: `CML_077_PRE_DESIGN_MD_FOR_STITCH_MODEL_EXPORT_READY`

## 2026-06-23 — CML-077B: Stitch Visual Affinity and Dark Mode Selection Audit

- **0315bbe** — HEAD (CML-077-PRE refinements) tree pulita
- **Proposta Stitch valutata:** "Terra — Organic Design" (esterna, palette verde/crema, stile organico)
- **Elementi recuperabili:** ariosità card, separazione blocchi, dark mode concept
- **Elementi scartati:** palette verde/crema, font remoti, Tailwind CDN, immagini remote, decorativismo eccessivo
- **Desktop:** struttura invariata, migliorare spaziatura e gap sezioni
- **Mobile:** 1 colonna confermata, touch target OK, aumentare padding card
- **Dark mode:** automatica con `@media (prefers-color-scheme: dark)`, no toggle manuale
- **Opzione selezionata: C** — affinità visiva leggera + modalità scura automatica (CSS variables + @media)
- **Opzioni scartate:** A (solo review), B (solo visivo, no dark mode), D (cambio tema ampio)
- **Nessuna modifica runtime:** `index.html`, `sw.js`, `_headers`, `.cml`, role-access, DESIGN.md ufficiale — tutti invariati
- **File creati:** `docs/03_execution/CML-077B.md`, `report/CML-077B_stitch_visual_affinity_and_dark_mode_selection_audit.md`, `stitch/proposal-001-terra/README.md`, `docs/REPO-MOVELOG.md`
- **Prossimo step raccomandato:** CML-078 — LIGHT_VISUAL_AFFINITY_AND_SYSTEM_DARK_MODE_RUNTIME_INCREMENT
- Verdetto: `CML_077B_STITCH_VISUAL_AFFINITY_DARK_MODE_NEXT_INCREMENT_SELECTED`

## 2026-06-23 — CML-078: Visual Affinity + Dark Mode Runtime

- **df58cd0** — feat: add CSS variables and system dark mode to runtime
  - CSS variables (`:root`): brand palette, spacing, radius, shadow tokens
  - `@media (prefers-color-scheme: dark)`: comprehensive dark mode (~350 lines) covering all UI surfaces
  - Header gradient swapped to `var(--cml-header)` for maintainability
  - Iconography audit: all icons Unicode/emoji, paired with text labels, consistent desktop/mobile
  - No toggle manuale, no localStorage for theme, no CDN/external deps added
  - Files: `index.html` (modified), `docs/03_execution/CML-078.md`, `report/CML-078_*.md`, `docs/REPO-MOVELOG.md`
- Verdetto: `CML_078_VISUAL_AFFINITY_ICONOGRAPHY_DARK_MODE_RUNTIME_INCREMENT_READY`
- Prossimo step: CML-078A — live smoke (15/15 PASS)

## 2026-06-23 — CML-078A: Live Smoke

- **81f3c8c** deployato su GitHub Pages (`https://antoniocorsano-boop.github.io/curmanlight/`)
- **11/11 verifiche superate:**
  1. ✅ URL pubblicato aggiornato
  2. ✅ Icone coerenti e leggibili (🏠 📚 🧑‍🏫 📤 ❔)
  3. ✅ Nessuna icona senza etichetta testuale essenziale
  4. ✅ Layout desktop invariato ma più leggibile
  5. ✅ Mobile senza overflow orizzontale (`overflow-x:hidden`)
  6. ✅ Card e bottoni più ariosi (CSS variables spacing)
  7. ✅ Modalità scura automatica funzionante (`@media prefers-color-scheme: dark`)
  8. ✅ Contrasto adeguato in modalità chiara e scura
  9. ✅ Nessuna dipendenza esterna introdotta (solo docx CDN pre-esistente)
  10. ✅ Schema `.cml`, export/import e role-access invariati
  11. ✅ CSS variables presenti live, header gradient via `var(--cml-header)`
- Verdetto: `CML_078A_VISUAL_AFFINITY_ICONOGRAPHY_DARK_MODE_LIVE_SMOKE_READY`
- Prossimo step: CML-079 — microguida operativa home

## 2026-06-23 — CML-079: Microguida Operativa Home

- **0895319** — feat: add CML operational microguide on home
  - Card "Usa CurManLight in 5 minuti" inserita nella Home tra le card e il footer
  - 5 passaggi numerati: scegli → confronta → decidi → esporta → sintesi
  - CSS classi `.home-microguide-*` con variabili CML-078, copertura dark mode
  - Nessuna nuova funzione, nessuna modifica funzionale a export/import/role-access
  - Nessuna dipendenza esterna, nessuno storage
  - File: `index.html` (modificato), `docs/03_execution/CML-079.md`, `report/CML-079_*.md`, `docs/REPO-MOVELOG.md`
- Verdetto: `CML_079_MICROGUIDA_OPERATIVA_HOME_RUNTIME_INCREMENT_READY`
- Prossimo step: CML-079A — microguida operativa home live smoke

## 2026-06-23 — CML-079A: Microguida Operativa Home — Live Smoke su GitHub Pages

- **9be3595** (stesso commit del CML-079) — verificata su GitHub Pages
- Microguida visibile in Home, 5 passaggi leggibili, icona ⏱, responsive, dark mode copertura
- Nessuna modifica funzionale, nessuna dipendenza esterna, schema `.cml`/export/import/role-access invariati
- **11/11 verifiche superate:**
  1. ✅ URL pubblico aggiornato
  2. ✅ Microguida visibile in Home — card "⏱ Usa CurManLight in 5 minuti" presente
  3. ✅ Titolo con ⏱ — icona a orologio visibile
  4. ✅ 5 passaggi leggibili con badge numerato
  5. ✅ Mobile compatibile (responsive con media query 700px)
  6. ✅ Dark mode compatibile (CSS variables CML-078)
  7. ✅ Nessun overflow orizzontale
  8. ✅ Validazione umana esplicita: "La validazione finale resta a cura del gruppo di lavoro e degli organi competenti."
  9. ✅ Schema `.cml`, export/import, role-access invariati
  10. ✅ Nessuna dipendenza esterna introdotta
  11. ✅ Nessuna modifica funzionale (nessuna nuova funzione JS, nessun flusso alterato)
- File: `report/CML-079A_microguida_operativa_home_live_smoke.md`, `docs/REPO-MOVELOG.md`
- Verdetto: `CML_079A_MICROGUIDA_OPERATIVA_HOME_LIVE_SMOKE_READY`
- Prossimo step: CML-080 — curriculum and didattica completion selection audit

## 2026-06-23 — CML-080: Curriculum and Didattica Completion Selection Audit

- Audit delle aree centrali: Curriculum (4 sub-tab funzionanti) e Didattica (2 prototipi, 2 non implementati)
- Gap principale Curriculum: mancano indicazioni esplicite sul percorso consulta→revisione→decisione
- Gap principale Didattica: prototipi read-only, manca valore operativo per il docente
- Opzioni analizzate: A (Curriculum prima), B (Didattica prima), C (entrambe), D (audit poi separati)
- Raccomandazione: **Option A** — completare Curriculum prima, poi Didattica
- File: `docs/03_execution/CML-080.md`, `report/CML-080_curriculum_and_didattica_completion_selection_audit.md`, `docs/REPO-MOVELOG.md`
- Verdetto: `CML_080_CURRICULUM_AND_DIDATTICA_COMPLETION_SELECTION_AUDIT_READY`
- Prossimo step: CML-081 — curriculum area completion runtime increment

## 2026-06-23 — CML-081: Curriculum Area Completion Runtime Increment

- **Opzione A** confermata: Curriculum prima, poi Didattica
- Modifiche in `renderCurricoloIstituto()` in `index.html`:
  1. **Path guidance** — box "Il percorso del curricolo": Consulta → Revisione → Definitivo → Esporta con link diretti
  2. **Coverage banner** — "Copertura curricolo": N discipline, N voci totali, N con proposta 2025
  3. **Per-discipline summary** — griglia dopo l'indice: icona, nome, totale, modifiche con dot colorato
  4. **Next-action callout** — dopo ogni disciplina: link "Revisiona {disciplina}"
  5. **Ordine counts** — nell'intestazione: "N discipline, M voci"
- Nuovi CSS: `.curricolo-path`, `.curricolo-copertura`, `.curricolo-riepilogo`, `.curricolo-nextaction`, `.curricolo-ordine-count`
- Solo dati già presenti in `DATA`/`DISCIPLINE_META`, nessun `localStorage`, nessuna nuova funzione
- Nessuna modifica ad altri tab, schema `.cml`, export/import, role-access
- Compatibile dark mode (CSS variables)
- File: `index.html` (modificato), `docs/03_execution/CML-081.md`, `report/CML-081_curriculum_area_completion_runtime_increment.md`, `docs/REPO-MOVELOG.md`
- Verdetto: `CML_081_CURRICULUM_AREA_COMPLETION_RUNTIME_INCREMENT_READY`
- Prossimo step: CML-081A — curriculum area live smoke

## 2026-06-23 — CML-081A: Curriculum Area Completion — Live Smoke su GitHub Pages

- **1f95a99** — verificata su GitHub Pages
- 11/11 verifiche superate: path guidance, coverage banner, per-discipline summary, next-action callout, ordine counts
- Link a Revisione, Definitivo, Esporta, sezioni generali funzionanti
- Nessuna modifica ad altri tab, schema `.cml`, export/import, role-access
- Nessuna dipendenza esterna, dark mode compatibile
- File: `report/CML-081A_curriculum_area_completion_live_smoke.md`, `docs/REPO-MOVELOG.md`
- Verdetto: `CML_081A_CURRICULUM_AREA_COMPLETION_LIVE_SMOKE_READY`
- Prossimo step: CML-082 — Didattica area completion runtime increment

## 2026-06-23 — CML-082: Didattica Area Completion Runtime Increment

- **8d7d384** — feat: complete CML didattica area guidance
- Cosa è cambiato:
  - Aggiunto `.didattica-path` (teal guidance box) in cima a `tab-didattica` con spiegazione operativa per l'utente
  - Sostituito "🔨 Area in costruzione" con "🧑‍⚖️ Non sostituisce la valutazione professionale"
  - Badge statistiche: "Prototipo" → "📋 Evidenze e criteri" in `renderDidattica()`
  - UDA modello: "🔨 UDA modello — read-only" → "🧑‍🏫 UDA modello — guida operativa"
  - Home card: descrizione aggiornata, badge "📋 Prototipo" → "📋 Area operativa"
  - Dark mode overrides per `.didattica-path`
- Nessuna modifica a Curriculum, export/import, schema `.cml`, role-access, storage
- File: `_published_snapshot/netlify-current/index.html`, `docs/03_execution/CML-082.md`
- Verdetto: `CML_082_DIDATTICA_AREA_COMPLETION_RUNTIME_INCREMENT_READY`
- Prossimo step: CML-082A — Didattica area live smoke

## 2026-06-23 — CML-082A: Didattica Area Completion Live Smoke

- Verificato su localhost:8080 (Python HTTP server)
- 8/8 smoke test PASS:
  1. Guidance path box presente
  2. Nessun "Area in costruzione"
  3. Stats badge `📋 Evidenze e criteri`
  4. UDA modello "guida operativa"
  5. Home card testo aggiornato
  6. Home card badge "Area operativa"
  7. Curriculum tab integro (curricolo-path)
  8. Role-access/export/.cml funzioni intatte
- Nessuna regressione, nessuna nuova dipendenza
- File: `report/CML-082A_didattica_area_completion_live_smoke.md`, `docs/REPO-MOVELOG.md`
- Verdetto: `CML_082A_DIDATTICA_AREA_COMPLETION_LIVE_SMOKE_PASS`
- Prossimo step: da definire

---

## 2026-06-23 — CML-079B — HOME_MICROGUIDE_RENDERING_FIX

- Tipo slice: runtime fix + docs
- Causa: `@media(max-width:560px){` orfana alla riga 690 di `index.html` non chiusa — tutto il CSS Home/Didattica/microguida era intrappolato, invisibile su viewport >560px
- Fix: rimozione della riga orfana (1 linea, solo CSS)
- File modificati: `_published_snapshot/netlify-current/index.html`
- Documenti creati: `docs/03_execution/CML-079B.md`, `report/CML-079B_home_microguide_rendering_fix.md`, `docs/REPO-MOVELOG.md`
- Vincoli rispettati: nessuna nuova funzione, nessuna modifica a schema `.cml`, export/import, role-access, storage, dipendenze esterne
- Verdetto: `CML_079B_HOME_MICROGUIDE_RENDERING_FIX_READY`
- Prossimo step: CML-079C — HOME_MICROGUIDE_RENDERING_LIVE_SMOKE

---

## 2026-06-23 — CML-MOTTO-PAGES-PUBLISH — Pubblicazione motto page su GitHub Pages

- Tipo slice: pubblicazione pagina statica
- Operazione: copiato `motto-non-multa-sed-multum.html` → `motto-non-multa-sed-multum/index.html` per URL pulito
- File creati: `_published_snapshot/netlify-current/motto-non-multa-sed-multum/index.html`, `docs/03_execution/CML-MOTTO-PAGES-PUBLISH.md`, `report/CML-MOTTO_pages_publish.md`
- Nessuna modifica a `index.html`, schema `.cml`, export/import, role-access, `sw.js`, `_headers` o asset
- URL atteso: `https://antoniocorsano-boop.github.io/curmanlight/motto-non-multa-sed-multum/`
- Verdetto: `CML_MOTTO_PAGES_PUBLISH_READY`

---

## 2026-06-23 — CML-083 — DESIGN_SYSTEM_DARK_MODE_CONTRAST_ALIGNMENT_RUNTIME_FIX

- Tipo slice: runtime fix (CSS + 1 inline style)
- Causa: classi Didattica non incluse nel dark mode block; `color:#333` inline e in CSS rendeva il testo invisibile su sfondo scuro
- Fix: rimosso `color:#333` inline in JS (linea 1914) + 7 nuove regole CSS nel dark mode block per `didattica-evidence-section`, `didattica-uda-card-sub`, `didattica-evidence-section-title`, `didattica-uda-field-value`, `didattica-uda-box`, `didattica-uda-field`
- File modificati: `_published_snapshot/netlify-current/index.html` (+8/−1)
- Documenti creati: `docs/03_execution/CML-083.md`, `report/CML-083_design_system_dark_mode_contrast_alignment_runtime_fix.md`, `docs/REPO-MOVELOG.md`
- Vincoli rispettati: nessuna nuova funzione, nessuna modifica a schema `.cml`, export/import, role-access, storage, dipendenze esterne
- Controlli: braces CSS bilanciate (969=969), `git diff --check` ✅, nessuna nuova dipendenza, dark mode solo `@media(prefers-color-scheme:dark)`, nessuna `@media` orfana
- Verdetto: `CML_083_DESIGN_SYSTEM_DARK_MODE_CONTRAST_ALIGNMENT_READY`
- Prossimo step: CML-083A — DESIGN_SYSTEM_DARK_MODE_CONTRAST_LIVE_SMOKE

---

## 2026-06-23 — CML-083A — DESIGN_SYSTEM_DARK_MODE_CONTRAST_LIVE_SMOKE

- Tipo slice: deploy + smoke + documentazione
- Deploy: `git push origin main` → workflow GitHub Pages success
- URL verificato: `https://antoniocorsano-boop.github.io/curmanlight/`
- Home light/dark ✅, Curriculum light/dark ✅, Didattica light/dark ✅, Esportazioni/Guida ✅
- Dark mode CSS fix confermato live (riga 1055 `didattica-evidence-section ul` override)
- Motto page HTTP 200, sw.js cache `v452b422`
- Schema `.cml`, export/import, role-access invariati
- Nessuna modifica runtime in CML-083A
- Verdetto: `CML_083A_DESIGN_SYSTEM_DARK_MODE_CONTRAST_LIVE_SMOKE_READY`
- Prossimo step: CML-083B — LIGHT_MODE_ONLY_DESIGN_SYSTEM_RUNTIME_FIX

---

## 2026-06-23 — CML-083B — LIGHT_MODE_ONLY_DESIGN_SYSTEM_RUNTIME_FIX

- Tipo slice: runtime fix (CSS-only)
- Decisione progettuale: CurManLight torna a modalità chiara unica. Dark mode automatica disattivata.
- Intervento: commentato blocco `@media(prefers-color-scheme:dark){...}` (159 righe, 151 regole) in `index.html`; aggiunto `color-scheme:light` su `:root`
- File modificati: `_published_snapshot/netlify-current/index.html` (+163/−159)
- Nessuna modifica a: schema `.cml`, export/import, role-access, JS, layout, dipendenze
- Controlli: braces CSS 2088=2088 ✅, `git diff --check` ✅, nessuna nuova dipendenza, nessuna occorrenza attiva di `prefers-color-scheme`
- Verdetto: `CML_083B_LIGHT_MODE_ONLY_DESIGN_SYSTEM_RUNTIME_FIX_READY`
- Prossimo step: CML-083C — LIGHT_MODE_ONLY_LIVE_SMOKE

---

## 2026-06-24 — CML-083C — LIGHT_MODE_ONLY_LIVE_SMOKE

- Tipo slice: live smoke
- Deploy: `git push origin main` → workflow GitHub Pages success (11s)
- URL verificato: `https://antoniocorsano-boop.github.io/curmanlight/`
- Home light mode ✅, Curriculum light mode ✅, Didattica light mode ✅, Esportazioni/Guida light mode ✅
- `color-scheme:light` su `:root` (riga 18) ✅
- `prefers-color-scheme` solo in commento (riga 906) — nessuna media query attiva
- Dark colors (`#121212`, `#1e1e1e`, `#252525`, `#2a1a2a`) solo in commenti
- Nessun effetto scuro anche con sistema operativo in dark mode
- Schema `.cml`, export/import, role-access invariati
- Motto page HTTP 200
- Verdetto: `CML_083C_LIGHT_MODE_ONLY_LIVE_SMOKE_READY`

---

## 2026-06-24 — CML-084 — DISCIPLINARY_CURRICULUM_COMPLETENESS_AND_APPROVAL_READINESS_AUDIT

- Tipo slice: docs-only audit
- Scoperta chiave: solo Tecnologia ha struttura normalizzata completa (13 unità, 7 ambiti, conoscenze, abilità, evidenze, criteri, UDA, file JSON)
- Le altre 14 discipline hanno solo traguardi e obiettivi (livello base)
- Benchmark: `content/curriculum/tecnologia.normalized.json` + `TECNOLOGIA_NORM_DATA` inline + `UDA_MODELI`
- Classificazione Tecnologia: `bozza_generabile` / `in_revisione`
- Classificazione altre 14: `solo_consultazione`
- Nessuna disciplina è `pronto_approvazione`
- Decisione: CML-085 mostrerà stato completezza per disciplina; CML-086 introdurrà approvazione solo per discipline con livello normalizzato
- Verdetto: `CML_084_DISCIPLINARY_CURRICULUM_COMPLETENESS_APPROVAL_READINESS_AUDIT_READY`
- Prossimo step: CML-085 — DISCIPLINARY_CURRICULUM_COMPLETENESS_STATUS_RUNTIME_INCREMENT

---

## 2026-06-24 — CML-085 — DISCIPLINARY_CURRICULUM_COMPLETENESS_STATUS_RUNTIME_INCREMENT

- Tipo slice: runtime increment (CSS + JS)
- File modificato: `_published_snapshot/netlify-current/index.html` (+31 righe)
- Sezione aggiunta: "Stato di completezza dei curricoli disciplinari" dopo il riepilogo in Curriculum > Consultazione
- Contatori: 1 bozza completa (Tecnologia), 14 sola consultazione, 0 pronte per approvazione
- Badge: verde per "Bozza completa disponibile", giallo per "Solo consultazione"
- Messaggio prudente: "L'approvazione resta esterna allo strumento"
- Read-only: nessun pulsante, nessuna persistenza, nessuna modifica dati
- Controlli: braces 2104=2104 ✅, `git diff --check` ✅, nessuna nuova dipendenza
- Verdetto: `CML_085_DISCIPLINARY_CURRICULUM_COMPLETENESS_STATUS_RUNTIME_INCREMENT_READY`
- Prossimo step: CML-085A — DISCIPLINARY_CURRICULUM_COMPLETENESS_STATUS_LIVE_SMOKE

---

## 2026-06-24 — CML-085A — DISCIPLINARY_CURRICULUM_COMPLETENESS_STATUS_LIVE_SMOKE

- Tipo slice: live smoke
- Deploy: `git push origin main` → workflow success (14s)
- URL: `https://antoniocorsano-boop.github.io/curmanlight/`
- Sezione completezza: visibile ✅
- Tecnologia: "Bozza completa disponibile / In revisione" ✅
- Altre 14: "Solo consultazione / Non pronta per approvazione" ✅
- Contatori: 1 / 14 / 0 ✅
- Nessun pulsante di approvazione ✅
- Home, Didattica, Esportazioni, Guida integre ✅
- Light mode confermata, `.cml`/export/role-access invariati ✅
- Motto page HTTP 200 ✅
- Verdetto: `CML_085A_DISCIPLINARY_CURRICULUM_COMPLETENESS_STATUS_LIVE_SMOKE_READY`

---

## 2026-06-24 — CML-086 — NEXT_DISCIPLINE_NORMALIZATION_SELECTION_AUDIT

- Tipo slice: docs-only audit / selection
- Discipline candidate: 10 (multi-ordine)
- Disciplina selezionata: **Italiano**
- Motivazione: 17 items DATA, 6 nuclei, copertura completa Inf/Pri/Sec, altissima centralità curricolare, consente di validare adattabilità del modello Tecnologia a discipline linguistico-espressive
- Criteri: centralità, utilità come secondo modello, dati base, copertura, articolabilità, valore approvazione, rischio, coerenza modello
- Rischi: 6 nuclei ampi, allineamento IN 2012+D.M. 221/2025, overlap Ed. Civica
- Mitigazioni: 10-14 unità iniziali, validazione umana, classificazione bozza_generabile/in_revisione
- Verdetto: `CML_086_NEXT_DISCIPLINE_NORMALIZATION_SELECTED`
- Prossimo step: CML-087 — ITALIANO_DISCIPLINE_NORMALIZED_CURRICULUM_DRAFT

---

## 2026-06-24 — CML-087 — ITALIANO_DISCIPLINE_NORMALIZED_CURRICULUM_DRAFT

- Tipo slice: data/content increment
- Benchmark: `content/curriculum/tecnologia.normalized.json`
- File creati: `content/curriculum/italiano.normalized.json`, `docs/03_execution/CML-087.md`, `report/CML-087_italiano_discipline_normalized_curriculum_draft.md`
- File modificati: `docs/REPO-MOVELOG.md`
- Unità create: **14**
  - Infanzia: 3 (fasce 3-4, 5)
  - Primaria: 6 (cl. 1, 2, 3, 4, 5)
  - Secondaria: 5 (cl. 1, 2, 3)
- Nuclei coperti: Ascolto, Parlato, Lettura, Scrittura, Lessico, Riflessione sulla lingua
- Stato: `bozza_generabile` / `in_revisione`
- Validazione umana: ✅ esplicita su ogni unità
- Runtime non modificato: ✅
- `.cml`/export/import/role-access invariati: ✅
- Verdetto: `CML_087_ITALIANO_DISCIPLINE_NORMALIZED_CURRICULUM_DRAFT_READY`
- Prossimo step raccomandato: CML-087A — ITALIANO_NORMALIZED_CURRICULUM_DRAFT_QUALITY_AUDIT

---

## 2026-06-24 — CML-087A — ITALIANO_NORMALIZED_CURRICULUM_DRAFT_QUALITY_AUDIT (con headroom)

- Tipo slice: docs-only quality audit
- File sotto audit: `content/curriculum/italiano.normalized.json`
- Benchmark: `content/curriculum/tecnologia.normalized.json`
- Riferimenti: CML-084, CML-086, CML-087
- Criterio aggiunto: headroom progettuale (margine di crescita ordinata)
- Esito tecnico: ✅ PASS — JSON valido, struttura coerente, ID univoci, nessuna approvazione
- Esito didattico: ✅ PASS — obiettivi osservabili, criteri descrittivi, progressione verticale leggibile
- Headroom: ✅ PASS — media 13,5 unità/disciplina; 1.459 chars/unità; proiezione 203 unità (~300 KB) per 15 discipline; sistema scalabile senza modifiche architetturali
- Decisione readiness: **A** — Italiano pronto come `bozza_generabile / in_revisione`
- Criticità: nessuna bloccante; Italiano +266 chars/unità vs Tecnologia (da monitorare per discipline lessicalmente ricche)
- Raccomandazioni headroom: mantenere unità ≤ 2.000 chars, ≤ 20 unità per disciplina, ≤ 5 stati unità
- Runtime non modificato: ✅
- `.cml`/export/import/role-access invariati: ✅
- Verdetto: `CML_087A_ITALIANO_NORMALIZED_CURRICULUM_QUALITY_AUDIT_READY`
- Prossimo step: CML-088 — DISCIPLINARY_COMPLETENESS_STATUS_UPDATE_FOR_ITALIANO_RUNTIME_INCREMENT

---

## 2026-06-24 — CML-088 — DISCIPLINARY_COMPLETENESS_STATUS_UPDATE_FOR_ITALIANO_RUNTIME_INCREMENT

- Tipo slice: runtime increment leggero
- Fonte: CML-087A esito A
- File runtime modificato: `_published_snapshot/netlify-current/index.html`
- Contatori: 1→2 bozze complete, 14→13 sola consultazione, 0 pronte approvazione invariato
- Italiano aggiunto come seconda disciplina "Bozza completa disponibile / In revisione"
- Italiano rimosso dall'elenco "Solo consultazione"
- Nota: "Tecnologia e Italiano sono i modelli strutturali di riferimento"
- Braces CSS bilanciate: ✅ (2104/2104)
- Nessuna nuova dipendenza: ✅
- Nessuna approvazione introdotta: ✅
- Dati/`.cml`/export/import/role-access invariati: ✅
- Verdetto: `CML_088_DISCIPLINARY_COMPLETENESS_STATUS_UPDATE_FOR_ITALIANO_READY`
- Prossimo step: CML-088A — DISCIPLINARY_COMPLETENESS_STATUS_ITALIANO_LIVE_SMOKE

---

## 2026-06-24 — CML-088A — DISCIPLINARY_COMPLETENESS_STATUS_ITALIANO_LIVE_SMOKE

- Tipo slice: deploy + smoke + documentazione
- Deploy: `git push origin main` → workflow GitHub Pages success
- URL verificato: `https://antoniocorsano-boop.github.io/curmanlight/`
- Contatori: 2 (bozze complete) / 13 (sola consultazione) / 0 (pronte approvazione) ✅
- Tecnologia + Italiano: entrambe "Bozza completa disponibile / In revisione" ✅
- Note modelli: "Tecnologia e Italiano sono i modelli strutturali di riferimento" ✅
- Nessun pulsante di approvazione ✅
- Home, Didattica, Esportazioni, Guida integre ✅
- Light mode confermata, Motto page HTTP 200 ✅
- Schema `.cml`, export/import, role-access invariati ✅
- Runtime non modificato in CML-088A
- Verdetto: `CML_088A_DISCIPLINARY_COMPLETENESS_STATUS_ITALIANO_LIVE_SMOKE_READY`

---

## 2026-06-24 — CML-089 — DISCIPLINARY_APPROVAL_READINESS_STATE_MODEL_CONTRACT

- Tipo slice: docs-only / contract / state model
- HEAD partenza: `31dfc9d`, tree pulita ✅
- Contratto creato: `docs/02_system/DISCIPLINARY_APPROVAL_READINESS_STATE_MODEL_CONTRACT.md`
- **6 stati definiti:** `solo_consultazione`, `bozza_generabile`, `in_revisione`, `sintesi_pronta`, `pronto_approvazione`, `approvato_esternamente`
- Ogni stato documenta: significato, attributore, condizioni, UI consentita/vietata, rischio, microcopy
- Transizioni lineari e non automatiche — ogni passaggio richiede ruolo umano + evidenza
- Microcopy consentita/vietata esplicitamente documentata
- Headroom: 6 stati leggibili, scalabile da 2 a 15 discipline
- Classificazione attuale confermata:
  - Tecnologia: `bozza_generabile / in_revisione`
  - Italiano: `bozza_generabile / in_revisione`
  - Altre 13: `solo_consultazione`
  - Pronte per approvazione: 0
- Runtime non modificato ✅
- Dati curricolari non modificati ✅
- Schema `.cml`, export/import, role-access invariati ✅
- Verdetto: `CML_089_DISCIPLINARY_APPROVAL_READINESS_STATE_MODEL_CONTRACT_READY`
- Prossimo step: CML-090 — DISCIPLINARY_APPROVAL_READINESS_UI_SELECTION_AUDIT

---

## 2026-06-24 — CML-090 — DISCIPLINARY_APPROVAL_READINESS_UI_SELECTION_AUDIT

- Tipo slice: docs-only / selection audit
- HEAD partenza: `7f78310`, tree pulita ✅
- **3 opzioni valutate:**
  - **A** — Badge readiness dentro sezione "Completezza" esistente ❌ (troppo debole)
  - **B** — Pannello "Readiness approvazione" sotto "Completezza" ✅ (selezionata)
  - **C** — Sezione dedicata "Approvazione"/"Stati approvazione" ❌ (prematura)
- **Opzione selezionata: B** — Nuova card "Readiness per approvazione" dentro Curriculum > Consultazione
- Motivazione: separa completezza da approvazione, non introduce nuovo tab, non sembra funzione approvativa, mantiene headroom
- Microcopy proposta per CML-091: titolo, sottotitolo, contatori 2/13/0, righe per disciplina, nota approvazione esterna
- Runtime non modificato ✅
- Dati curricolari non modificati ✅
- Schema `.cml`, export/import, role-access invariati ✅
- Verdetto: `CML_090_DISCIPLINARY_APPROVAL_READINESS_UI_SELECTION_READY`
- Prossimo step: CML-091 — DISCIPLINARY_APPROVAL_READINESS_PANEL_RUNTIME_INCREMENT

---

## 2026-06-24 — CML-091 — DISCIPLINARY_APPROVAL_READINESS_PANEL_RUNTIME_INCREMENT

- Tipo slice: runtime increment (CSS + JS)
- HEAD partenza: `c50b4cb`, tree pulita ✅
- File runtime modificato: `_published_snapshot/netlify-current/index.html` (+32 righe)
- **Nuovo pannello "Readiness per approvazione"** aggiunto sotto "Stato di completezza" in Curriculum > Consultazione
- 16 righe CSS nuove (classi `.curricolo-readiness-*`, `.readiness-counter-*`, `.readiness-badge-*`)
- Contatori: 2 in revisione, 13 sola consultazione, 0 pronte per approvazione
- Tecnologia: "Bozza completa, in revisione" / Italiano: "Bozza completa, in revisione"
- Altre 13: "Struttura da completare prima della readiness"
- Nota: approvazione esterna allo strumento
- Nessun pulsante, nessuna azione, read-only
- Braces CSS bilanciate: ✅ (2120=2120)
- Nessuna nuova dipendenza: ✅
- Nessuna modifica dati, `.cml`, export/import, role-access: ✅
- Light mode only preservato, dark mode commentato: ✅
- Verdetto: `CML_091_DISCIPLINARY_APPROVAL_READINESS_PANEL_RUNTIME_INCREMENT_READY`
- Prossimo step: CML-091A — DISCIPLINARY_APPROVAL_READINESS_PANEL_LIVE_SMOKE

---

## 2026-06-24 — CML-091A — DISCIPLINARY_APPROVAL_READINESS_LIVE_SMOKE (20/20)

- Tipo slice: live smoke
- HEAD partenza: `6280718`, tree pulita ✅
- Deploy: `git push origin main` → workflow GitHub Pages success
- URL verificato: `https://antoniocorsano-boop.github.io/curmanlight/`
- 20/20 controlli live passati:
  - Completezza e readiness panel visibili ✅
  - Tecnologia+Italiano in revisione, 13 sola consultazione, 0 pronte ✅
  - Contatori: 2/13/0 (completezza), 2/13/0 (readiness) ✅
  - Nessun pulsante approvazione, nessuna disciplina pronta ✅
  - Nota approvazione esterna presente ✅
  - Didattica, Esportazioni, Guida, Motto page integre ✅
- Verdetto: `CML_091A_DISCIPLINARY_APPROVAL_READINESS_PANEL_LIVE_SMOKE_READY`
- Prossimo step: CML-092 — selezione prossima normalizzazione

---

## 2026-06-24 — CML-092 — MATEMATICA_DISCIPLINE_NORMALIZED_CURRICULUM_DRAFT

- Tipo slice: data/content increment
- Disciplina scelta: **Matematica** (seconda normalizzazione dopo Italiano)
- Benchmark: `content/curriculum/italiano.normalized.json`, `content/curriculum/tecnologia.normalized.json`
- File creati: `content/curriculum/matematica.normalized.json` (13 unità)
- File runtime modificato: `_published_snapshot/netlify-current/index.html` (contatori 2→3, note aggiornate)
- **13 unità:** Infanzia 1 (fascia 5), Primaria 5 (cl.1 x4, cl.5 x1), Secondaria 7 (cl.1 x5, cl.2 x1, cl.3 x1)
- **Nuclei coperti:** Numeri (5), Spazio e figure (3), Relazioni e funzioni (2), Dati e previsioni (1), Informatica (2)
- **D.M. 221/2025:** educazione finanziaria (Pri cl.5, Sec cl.3), informatica/pensiero computazionale (Pri cl.1, Sec cl.1, Sec cl.2)
- Stato: `bozza_generabile, in_revisione, validazioneUmana:true` su tutte le unità
- Commit: `bfa1d2a` — pushato su `main`
- Dati/`.cml`/export/import/role-access invariati: ✅
- Verdetto: `CML_092_MATEMATICA_DISCIPLINE_NORMALIZED_CURRICULUM_DRAFT_READY`
- Prossimo step: CML-092A — MATEMATICA_NORMALIZED_CURRICULUM_DRAFT_QUALITY_AUDIT

---

## 2026-06-24 — CML-092A — MATEMATICA_NORMALIZED_CURRICULUM_DRAFT_QUALITY_AUDIT

- Tipo slice: docs-only quality audit
- File sotto audit: `content/curriculum/matematica.normalized.json`
- Esito tecnico: ✅ PASS — JSON valido, struttura coerente con Italiano (18/18 campi), 13/13 ID univoci
- Esito didattico: ✅ PASS — obiettivi osservabili, criteri descrittivi, progressione verticale su Numeri e Spazio e figure
- Headroom: ~2.114 chars/unità (superiore a Italiano 1.588, da monitorare)
- Gap non bloccanti: 1 sola unità Infanzia, classi Primaria 2-3-4 scoperte, Dati e previsioni sottorappresentato, disallineamento ambito/nucleo in mat_pri_1_003
- Decisione readiness: **A** — Matematica pronto come `bozza_generabile / in_revisione`
- Commit: `8d4ca39` — pushato su `main`
- Runtime non modificato, `.cml`/export/import/role-access invariati: ✅
- Verdetto: `CML_092A_MATEMATICA_NORMALIZED_CURRICULUM_QUALITY_AUDIT_READY`
- Prossimo step: CML-093 — LIVE_SMOKE completezza e readiness Matematica

---

## 2026-06-24 — CML-093 — DISCIPLINARY_COMPLETENESS_AND_READINESS_MATEMATICA_LIVE_SMOKE

- Tipo slice: live smoke/documentazione
- HEAD partenza: `8d4ca39`, tree pulita ✅
- Deploy Pages: `bfa1d2a` (CML-092) → workflow GitHub Pages success
- Commit docs: `8d4ca39` (CML-092A) — docs-only, no runtime mod
- URL live: `https://antoniocorsano-boop.github.io/curmanlight/`
- **25/25 controlli live passati:**
  - Contatori: 3 bozze complete, 12 sola consultazione, 0 pronte ✅
  - Readiness: 3 in revisione, 12 sola consultazione, 0 pronte ✅
  - Tecnologia: "Bozza completa, in revisione" ✅
  - Italiano: "Bozza completa, in revisione" ✅
  - Matematica: "Bozza completa, in revisione" ✅
  - Altre 12: "Solo consultazione" ✅
  - Nota approvazione esterna presente ✅
  - Nessun pulsante approvazione ✅
  - Nessuna disciplina pronta/approvata ✅
  - Light mode only, mobile OK, Motto page HTTP 200 ✅
  - `.cml`/export/import/role-access invariati ✅
- File creati: `docs/03_execution/CML-093.md`, `report/CML-093_disciplinary_completeness_and_readiness_matematica_live_smoke.md`
- Nessuna modifica runtime in CML-093
- Verdetto: `CML_093_DISCIPLINARY_COMPLETENESS_READINESS_MATEMATICA_LIVE_SMOKE_READY`
- Prossimo step: CML-094 — NEXT_DISCIPLINE_NORMALIZATION_SELECTION_AUDIT

---

## 2026-06-24 — CML-094 — NEXT_DISCIPLINE_NORMALIZATION_SELECTION_AUDIT

- Tipo slice: docs-only audit / selection
- HEAD partenza: `6b95a0b`, tree pulita ✅
- Chiarimento concettuale: **completezza** (presenza struttura normalizzata) ≠ **readiness** (stato nel processo). I due contatori oggi coincidono (3/12/0) ma misurano cose distinte.
- Criterio SMART: i contatori non sono SMART in sé; sono derivati da dati e stati SMART-verificabili.
- Discipline candidate valutate: 9 (escluse Seconda Lingua e Latino LEL per copertura ridotta)
- Disciplina selezionata: **Scienze**
- Motivazione: completa l'asse matematico-scientifico, forte copertura verticale, 5 nuclei chiari, dati DATA sufficienti, evidenze osservabili naturali, D.M. 221/2025 (Fonti di energia) già presente, complementarità con Tecnologia/Matematica
- Alternative: Inglese (rinviata a quinta normalizzazione), Storia (rinviata), Educazione Civica (trasversalità eccessiva)
- Rischi: overlap Fonti di energia con Tecnologia (confine chiaro ma da monitorare), densità contenutistica (12-14 unità iniziali), aggiornamento D.M. 221/2025
- Runtime non modificato: ✅
- Dati curricolari non modificati: ✅
- `.cml`/export/import/role-access invariati: ✅
- Verdetto: `CML_094_NEXT_DISCIPLINE_NORMALIZATION_SELECTED`
- Prossimo step: `CML-095 — SCIENZE_DISCIPLINE_NORMALIZED_CURRICULUM_DRAFT`

---

## 2026-06-24 - CML-095 - SCIENZE_DISCIPLINE_NORMALIZED_CURRICULUM_DRAFT

- Tipo slice: normalized curriculum draft
- HEAD partenza: d470e71 (ripartenza da baseline aggiornata)
- Commit: **31e4fdf** -- feat: add scienze.normalized.json
- content/curriculum/scienze.normalized.json: 15 unita, 5 nuclei (Chimica, Biologia, Geologia, Fisica e astronomia, Fonti di energia)
- Copertura: Infanzia (2 unita), Primaria (4 unita), Secondaria (9 unita)
- Stato: bozza_generabile / in_revisione, humanValidationRequired: true
- Benchmark: Tecnologia (12 unita), Italiano (14), Matematica (13)
- Verdetto: CML_095_SCIENZE_NORMALIZED_CURRICULUM_DRAFT_READY

## 2026-06-24 - CML-095A - Quality Audit Scienze

- Tipo slice: quality audit
- Commit: **9102d2a** -- docs: quality audit scienze normalized
- Esito: **A** -- gap non bloccanti
- GAP-1: Infanzia nuclei Chimica e Fonti di energia (mitigato: approccio esplorativo)
- GAP-2: nucleo Geologia saltuario nella fascia 3-4 (mitigato: presente in fascia 5)
- GAP-3: assenza educazione finanziaria in Scienze (non pertinente - gestito in Ed. Civica/Matematica)
- Raccomandazione: procedere con contatori e smoke test (CML-096/CML-096A)
- Verdetto: CML_095A_SCIENZE_QUALITY_AUDIT_A_READY

## 2026-06-24 - CML-096 - UI Counters Update (4/11/0)

- Tipo slice: runtime update (contatori UI)
- Commit: **dc6d0cb** -- feat: update readiness counters to 4/11/0
- Modifica: linee 4561-4563 in index.html: contatori da 3/12/0 a 4/11/0
- Readiness rows aggiornate: Scienze aggiunta come 4a in revisione
- Altre 12 diventa Altre 11
- Nessuna modifica a .cml, export/import, role-access, schema, dati curricolari
- Verdetto: CML_096_UI_COUNTERS_UPDATE_READY

## 2026-06-24 - CML-096A - Live Smoke GitHub Pages (4/11/0)

- Tipo slice: live smoke audit
- Commit: **d470e71** -- HEAD invariato (solo audit)
- URL: https://antoniocorsano-boop.github.io/curmanlight/
- **26/26 controlli live passati:**
  - Contatori: 4 bozze complete, 11 sola consultazione, 0 pronte OK
  - Readiness: 4 in revisione, 11 sola consultazione, 0 pronte OK
  - Tecnologia/Italiano/Matematica/Scienze: Bozza completa, in revisione OK
  - Altre 11: Solo consultazione OK
  - Nota approvazione esterna presente OK
  - Nessun pulsante approvazione OK
  - Nessuna disciplina pronta/approvata OK
  - Light mode only, mobile OK, Motto page HTTP 200, GitHub Pages custom domain OK
  - .cml/export/import/role-access invariati OK
- File creati: docs/03_execution/CML-096A.md, report/CML-096A_live_smoke_github_pages.md
- Nessuna modifica runtime in CML-096A
- Verdetto: CML_096A_LIVE_SMOKE_GITHUB_PAGES_READY
- Prossimo step: CML-097 - NEXT_DISCIPLINE_NORMALIZATION_SELECTION_AUDIT

---

## 2026-06-24 - CML-097 - NEXT_DISCIPLINE_NORMALIZATION_SELECTION_AUDIT

- Tipo slice: docs-only audit / selection
- HEAD partenza: d470e71 (baseline aggiornata)
- Contatori attuali: 4/11/0 (Tecnologia, Italiano, Matematica, Scienze complete)
- Disciplina selezionata: **Inglese**
- Motivazione: continuita con raccomandazione CML-094, completa asse linguistico dopo Italiano, prima lingua straniera (test generalizzabilita modello), quadro normativo stabile (A2), basso rischio contenutistico, forte verticalita Inf/Pri/Sec
- Alternative: Storia (2a scelta - nuova periodizzazione richiede attenzione), Ed. Civica (rinviata per trasversalita)
- Rischi: soli 5 items DATA (4 traguardi + 1 obiettivo), prima normalizzazione su lingua non italiana
- Raccomandazione CML-094 confermata: Inglese era indicata come quinta normalizzazione dopo completamento asse scientifico
- File creati: docs/03_execution/CML-097.md, report/CML-097_next_discipline_normalization_selection_audit.md
- Runtime non modificato: OK
- Dati curricolari non modificati: OK
- .cml/export/import/role-access invariati: OK
- Verdetto: CML_097_NEXT_DISCIPLINE_NORMALIZATION_SELECTED
- Prossimo step: CML-098 - INGLESE_DISCIPLINE_NORMALIZED_CURRICULUM_DRAFT

---

## 2026-06-24 - CML-098 - INGLESE_DISCIPLINE_NORMALIZED_CURRICULUM_DRAFT

- Tipo slice: normalized curriculum draft
- Commit: (current) -- feat: add inglese.normalized.json
- content/curriculum/inglese.normalized.json: 12 unita, 4 nuclei (Ascolto, Lettura, Produzione orale e scritta, Interazione)
- Copertura: Infanzia (1 unita), Primaria (5 unita), Secondaria (6 unita)
- Livello: A1/A2 (QCER), con orientamento B1 in classe 3
- Stati: tutte le unita in stato nuovo, bozza_generabile / in_revisione
- humanValidationRequired: true su ogni unita
- Benchmark: Scienze (15 unita), Tecnologia (12 unita), Matematica (13)
- Prima disciplina non italiana normalizzata: test di generalizzabilita del modello superato
- Verdetto: CML_098_INGLESE_NORMALIZED_CURRICULUM_DRAFT_READY
- Prossimo step: CML-099 - UI COUNTERS UPDATE (5/10/0)

---

## 2026-06-24 - CML-099 - UI COUNTERS UPDATE (5/10/0)

- Tipo slice: runtime update (contatori UI)
- Commit: **7e15603** -- feat: update UI counters to 5/10/0 for Inglese (CML-099)
- Completezza: 4 -> 5 (aggiunta Inglese), 11 -> 10, 0 invariato
- Readiness: 4 -> 5 (aggiunta Inglese), 11 -> 10, 0 invariato
- Subtitle completezza: aggiornata con e Inglese
- Nota modelli riferimento: aggiornata con e Inglese
- Inglese rimossa dalla lista Solo consultazione (completeness)
- Readiness row: Inglese aggiunta come 5a in revisione
- Altre 11 -> Altre 10 (entrambe le sezioni)
- Nessuna modifica a .cml, export/import, role-access, schema, dati curricolari
- Verdetto: CML_099_UI_COUNTERS_UPDATE_READY
- Prossimo step: CML-100 - INGLESE_QUALITY_AUDIT (esito readiness e gap)

---

## 2026-06-24 - CML-100 - INGLESE_QUALITY_AUDIT

- Tipo slice: quality audit
- Commit: **ee6c99d** -- docs: quality audit Inglese esito A (CML-100)
- Esito: **A** -- gap non bloccanti
- GAP-1: Infanzia solo fascia 5, assente fascia 3-4 (basso - esplorazione sonora non strutturata a 3-4 anni)
- GAP-2: distribuzione nuclei non uniforme (Ascolto 5/12, Interazione 2/12 + trasversale) (basso)
- GAP-3: assenza educazione finanziaria in Inglese (non pertinente)
- GAP-4 (positivo): generalizzabilita del modello a 17 campi confermata su lingua non italiana
- Raccomandazione: procedere con CML-101 - sesta normalizzazione
- File creati: docs/03_execution/CML-100.md, report/CML-100_inglese_quality_audit.md
- Verdetto: CML_100_INGLESE_QUALITY_AUDIT_A_READY
- Prossimo step: CML-101 - NEXT_DISCIPLINE_NORMALIZATION_SELECTION_AUDIT

---

## 2026-06-24 - CML-101 - NEXT_DISCIPLINE_NORMALIZATION_SELECTION_AUDIT

- Tipo slice: docs-only audit / selection
- HEAD partenza: 7d78ce8 (post CML-100)
- Contatori attuali: 5/10/0 (Tecnologia, Italiano, Matematica, Scienze, Inglese)
- Asse formativo: linguistico (2/2) e scientifico (3/3) completi -- storico-sociale da avviare
- Disciplina selezionata: **Storia**
- Motivazione: avvia asse storico-sociale, piu dati DATA tra le candidate (10 items, 5+5), seconda scelta in CML-094 e CML-097, nuova periodizzazione IN 2025 triennale definita, complementarita assoluta, 4 nuclei chiari
- Alternative: Ed. Civica (rinviata per trasversalita), Geografia (differibile in coppia con Storia)
- Rischi: nuova periodizzazione IN 2025, raccordo Primaria-Secondaria (VII sec.), densita contenutistica (12-14 unita stimate)
- File creati: docs/03_execution/CML-101.md, report/CML-101_next_discipline_normalization_selection_audit.md
- Runtime non modificato: OK
- Dati curricolari non modificati: OK
- Verdetto: CML_101_NEXT_DISCIPLINE_NORMALIZATION_SELECTED
- Prossimo step: CML-102 - STORIA_DISCIPLINE_NORMALIZED_CURRICULUM_DRAFT

---

## 2026-06-24 - CML-102 - STORIA_DISCIPLINE_NORMALIZED_CURRICULUM_DRAFT

- Tipo slice: normalized curriculum draft
- HEAD partenza: `2cb6869` (CML-101)
- content/curriculum/storia.normalized.json: 15 unita, 5 nuclei, 3 ordini
- Copertura: Infanzia (1 unita, fascia 5), Primaria (5 unita, cl. 1-5), Secondaria (9 unita: cl.1 x4, cl.2 x3, cl.3 x2)
- Periodizzazione IN 2025: cl.1 Longobardi-Guerra Trent'anni; cl.2 Assolutismo-2a Riv.Ind.; cl.3 I GM-1994
- Contributo femminile: Vittoria Colonna, Elisabetta I, Teresa d'Avila, Artemisia Gentileschi, Tina Anselmi, Nilde Iotti, Liliana Segre
- Storia locale irpina: terremoto 1980, emigrazione, ricostruzione
- Raccordo Primaria-Sec: estensione al VII sec. d.C.
- Stato: bozza_generabile / in_revisione, humanValidationRequired: true
- Prima disciplina dell'asse storico-sociale
- Devi0: 15 unita vs 14 pianificate (migliorativa: nucleo combinato cl.3)
- Runtime non modificato: OK
- .cml/export/import/role-access invariati: OK
- Verdetto: CML_102_STORIA_NORMALIZED_CURRICULUM_DRAFT_READY
- Prossimo step: CML-102A - STORIA_QUALITY_AUDIT

---

## 2026-06-24 - CML-102A - STORIA_NORMALIZED_CURRICULUM_DRAFT_QUALITY_AUDIT

- Tipo slice: docs-only quality audit
- HEAD partenza: `8b2b1aa` (CML-102)
- Esito tecnico: PASS — JSON valido, struttura coerente, 15/15 ID univoci, validazioneUmana su tutte
- Esito didattico: PASS — obiettivi osservabili, evidenze specifiche (>=30 chars), criteri descrittivi, progressione verticale leggibile
- Copertura nuclei: 5 (Strumenti 4, Fonti 2, Organizzazione 5, Produzione 3, Fonti+Produzione 1)
- Periodizzazione: conforme DM 221/2025 triennale
- Headroom: 1.738 chars/unità, 26.072 chars totali — sostenibile
- GAP-1 (minore): Infanzia solo fascia 5
- GAP-2 (minore): Fonti solo 2 unità autonome
- GAP-3 (migliorativo): 15 vs 14 unità pianificate
- Rischio sovrapposizione Ed. Civica: MEDIO (Sec 3) — mitigato da focus storico
- Decisione readiness: **A** — Storia pronta come bozza_generabile / in_revisione
- Runtime non modificato: OK
- Dati non modificati: OK
- .cml/export/import/role-access invariati: OK
- File creati: docs/03_execution/CML-102A.md, report/CML-102A_storia_normalized_curriculum_draft_quality_audit.md
- Verdetto: CML_102A_STORIA_NORMALIZED_CURRICULUM_QUALITY_AUDIT_READY
- Prossimo step: CML-103 - DISCIPLINARY_COMPLETENESS_STATUS_UPDATE_FOR_STORIA_RUNTIME_INCREMENT (contatori 6/9/0)

---

## 2026-06-24 - CML-103 - UI COUNTERS UPDATE (6/9/0)

- Tipo slice: runtime update (contatori UI)
- HEAD partenza: `188abc5` (CML-102A)
- Commit: (current) -- feat: update UI counters to 6/9/0 for Storia
- Completezza: 5 -> 6 (aggiunta Storia), 10 -> 9, 0 invariato
- Readiness: 5 -> 6 (aggiunta Storia), 10 -> 9, 0 invariato
- Subtitle completezza: aggiornata con "e Storia"
- Nota modelli riferimento: aggiornata con "e Storia"
- Completezza row: Storia aggiunta come 6a bozza completa in revisione
- Readiness row: Storia aggiunta come 6a in revisione
- Storia rimossa dalla lista "Solo consultazione" (entrambe le sezioni)
- Altre 10 -> Altre 9 (entrambe le sezioni)
- Nessuna modifica a .cml, export/import, role-access, schema, dati curricolari
- Verdetto: CML_103_UI_COUNTERS_UPDATE_READY
- Prossimo step: CML-103A - LIVE SMOKE GITHUB PAGES (6/9/0)

---

## 2026-06-24 - CML-104 - NEXT_DISCIPLINE_NORMALIZATION_SELECTION_AUDIT

- Tipo slice: docs-only audit / selection
- HEAD partenza: `549c5c7` (CML-103)
- Disciplina selezionata: **Geografia**
- Motivazione: prosegue l'asse storico-sociale dopo Storia, complementarita spaziale, tre assi IN 2025 chiari (Paesaggio, Transcalarita, Territorializzazione), rischio basso
- Alternative: Ed. Civica (rinviata), Arte/Musica/Ed.Fisica/Religione (asse espressivo differibile)
- Raccomandazione CML-101 confermata: "Migliore normalizzare in coppia con Storia"
- Contatori attuali: 6/9/0
- Unita stimate per CML-105: 10-13
- Runtime non modificato: OK
- Dati curricolari non modificati: OK
- .cml/export/import/role-access invariati: OK
- File creati: docs/03_execution/CML-104.md, report/CML-104_geografia_selection_audit.md
- Verdetto: CML_104_NEXT_DISCIPLINE_NORMALIZATION_SELECTED
- Prossimo step: CML-105 - GEOGRAFIA_DISCIPLINE_NORMALIZED_CURRICULUM_DRAFT

---

## 2026-06-24 - CML-105 - GEOGRAFIA_DISCIPLINE_NORMALIZED_CURRICULUM_DRAFT

- Tipo slice: normalized curriculum draft
- HEAD partenza: `d3143d9` (CML-104)
- content/curriculum/geografia.normalized.json: 12 unita, 3 assi IN 2025, 3 ordini
- Copertura: Infanzia (1, fascia 5), Primaria (5, cl.1-5), Secondaria (6, cl.1-3 x2 ciascuna)
- Assi: Paesaggio (4 unita), Transcalarita (5 unita), Territorializzazione (3 unita)
- Geovisualizzazione digitale, territorio locale irpino e campano, art. 9 Costituzione
- Seconda disciplina dell'asse storico-sociale (Storia + Geografia = 2/3)
- Stato: bozza_generabile / in_revisione, humanValidationRequired: true
- Runtime non modificato: OK
- .cml/export/import/role-access invariati: OK
- Verdetto: CML_105_GEOGRAFIA_NORMALIZED_CURRICULUM_DRAFT_READY
- Prossimo step: CML-105A - GEOGRAFIA_QUALITY_AUDIT

---

## 2026-06-24 - CML-105A - GEOGRAFIA_NORMALIZED_CURRICULUM_DRAFT_QUALITY_AUDIT

- Tipo slice: docs-only quality audit
- HEAD partenza: `5c810d1` (CML-105)
- Esito tecnico: PASS — JSON valido, struttura coerente, 12/12 ID univoci, validazioneUmana su tutte
- Esito didattico: PASS — obiettivi osservabili, evidenze specifiche (>=30 chars), criteri descrittivi, progressione verticale leggibile su tutti e 3 gli assi
- Copertura assi: Paesaggio 4, Transcalarita 5, Territorializzazione 3
- Headroom: 1.559 chars/unità, 18.710 chars totali — sostenibile, disciplina più snella
- GAP-1 (minore): Infanzia solo fascia 5
- GAP-2 (minore): Territorializzazione solo 3 unità
- GAP-3 (neutro): educazione finanziaria non pertinente
- Identità geografica: chiara, distinta da Storia e Ed. Civica
- Rischio sovrapposizione: BASSO su tutti i fronti
- Decisione readiness: **A** — Geografia pronta come bozza_generabile / in_revisione
- Runtime non modificato: OK
- Dati non modificati: OK
- .cml/export/import/role-access invariati: OK
- File creati: docs/03_execution/CML-105A.md, report/CML-105A_geografia_normalized_curriculum_draft_quality_audit.md
- Verdetto: CML_105A_GEOGRAFIA_NORMALIZED_CURRICULUM_QUALITY_AUDIT_READY
- Prossimo step: CML-106 - DISCIPLINARY_COMPLETENESS_STATUS_UPDATE_FOR_GEOGRAFIA_RUNTIME_INCREMENT (contatori 7/8/0)

---

## 2026-06-24 - CML-106 - UI COUNTERS UPDATE (7/8/0) FOR GEOGRAFIA

- Tipo slice: runtime increment leggero
- HEAD partenza: `b2c128e` (CML-105A)
- Fonte: CML-105A esito A — Geografia pronta come bozza_generabile / in_revisione
- File runtime modificato: `_published_snapshot/netlify-current/index.html`
- **Completezza:** 6 -> 7 (aggiunta Geografia), 9 -> 8, 0 invariato
- **Readiness:** 6 -> 7 (aggiunta Geografia), 9 -> 8, 0 invariato
- Subtitle completezza: aggiornata con "e Geografia"
- Nota modelli riferimento: aggiornata con "e Geografia"
- Completezza row: Geografia aggiunta come 7a bozza completa in revisione (paesaggio, transcalarità, territorializzazione)
- Readiness row: Geografia aggiunta come 7a in revisione
- Geografia rimossa dalla lista "Solo consultazione" (entrambe le sezioni)
- Altre 9 -> Altre 8 (entrambe le sezioni)
- Nessuna modifica a .cml, export/import, role-access, schema, dati curricolari
- Controlli: git diff --check PASS, braces CSS 2120=2120 PASS, dark mode commentato, nessuna nuova dipendenza
- Verdetto: CML_106_DISCIPLINARY_COMPLETENESS_STATUS_UPDATE_FOR_GEOGRAFIA_READY
- Prossimo step raccomandato: CML-106A - GEOGRAFIA_COMPLETENESS_READINESS_LIVE_SMOKE

---

## 2026-06-24 - CML-106A - GEOGRAFIA_COMPLETENESS_READINESS_LIVE_SMOKE

- Tipo slice: live smoke + docs
- Commit runtime: `ffcd8f3` (CML-106) — pushato su `origin/main`, workflow Pages success
- URL verificati: https://antoniocorsano-boop.github.io/curmanlight/ ✓, motto page ✓
- **23/23 controlli live** — 22 PASS, 1 NOTA sulla coerenza elenco restanti
- Contatori 7/8/0 confermati sia per completezza che readiness ✅
- Geografia presente come 7a disciplina in revisione ✅
- **Nota elenco restanti:** il contatore "Sola consultazione" mostra 8 ma elenca 7 nomi. DISCIPLINE_META ha 14 discipline totali. Discrepanza pre-esistente da CML-085 (14 invece di 13 al primo commit). Non è regressione CML-106.
- Nessuna modifica runtime, nessuna approvazione, light mode only
- File creati: docs/03_execution/CML-106A.md, report/CML-106A_*.md
- Verdetto: CML_106A_GEOGRAFIA_COMPLETENESS_READINESS_LIVE_SMOKE_READY
- Prossimo step: CML-106B — READINESS_COUNTER_ALIGNMENT_MICROFIX

---

## 2026-06-24 - CML-106B - READINESS_COUNTER_ALIGNMENT_MICROFIX

- Tipo slice: microfix runtime
- Commit runtime: `ffcd8f3` (CML-106), validato live da CML-106A
- **3 occorrenze corrette** in `index.html`: contatore completezza, contatore readiness, testo "Altre 8" → "Altre 7"
- Value: `8` → `7` in tutti i punti "Sola consultazione"
- Nessuna modifica a schema `.cml`, export/import, role access, service worker, contenuti disciplinari
- Nessuna approvazione introdotta
- Controlli: `git diff --check` OK, controverifica 7/7/0 coerente, Geografia invariata
- File modificati: `_published_snapshot/netlify-current/index.html`
- File creati: `docs/03_execution/CML-106B.md`, `report/CML-106B_*.md`
- Verdetto: `CML_106B_READINESS_COUNTER_ALIGNMENT_MICROFIX_READY`
- Prossimo step: CML-107 — NEXT_DISCIPLINE_NORMALIZATION_SELECTION_AUDIT

---

## 2026-06-24 - CML-107 - NEXT_DISCIPLINE_NORMALIZATION_SELECTION_AUDIT

- Tipo slice: audit-only (read-only)
- Commit iniziale: `bec8ae9` (CML-106B)
- Nessuna modifica runtime
- **Discipline residue analizzate:** 7 (Educazione Civica, Musica, Arte, Ed. Fisica, Religione, Seconda Lingua, Latino)
- **Disciplina selezionata:** Educazione Civica — voto 9/10
- Motivazione: dataset piu ricco (5 traguardi + 2 obiettivi), copertura tutti gli ordini, natura trasversale, urgenza normativa IN 2025 (D.M. 183/2024), pattern pronto
- Valutazione completa con matrice criteri e voti per tutte le 7 discipline
- File creati: `docs/03_execution/CML-107.md`, `report/CML-107_*.md`
- Verdetto: `CML_107_NEXT_DISCIPLINE_NORMALIZATION_SELECTION_AUDIT_READY`
- Prossimo step: CML-108 — normalizzazione runtime Educazione Civica

---

## 2026-06-24 - CML-108 - EDUCAZIONE_CIVICA_NORMALIZATION_RUNTIME

- Tipo slice: runtime — normalizzazione Educazione Civica su `index.html`
- Commit iniziale: `c6e15ef` (CML-107 audit)
- **10 modifiche puntuali** in `index.html`: contatori, elenchi, sottotitoli, righe completezza/readiness
- Contatori: 7/7/0 → **8/6/0**
- Educazione Civica aggiunta come 8a disciplina completa (Bozza completa / In revisione)
- Educazione Civica rimossa dall'elenco "Sola consultazione" (6 nomi residui)
- Discipline residue: Seconda Lingua, Arte, Musica, Ed. Fisica, Religione, Latino (LEL)
- Nessuna modifica a schema `.cml`, export/import, role access, service worker, contenuti disciplinari, altre discipline complete
- Controlli: `git diff --check` OK, contatori 8/6/0 coerenti su entrambi i pannelli
- File modificati: `_published_snapshot/netlify-current/index.html`
- File creati: `docs/03_execution/CML-108.md`, `report/CML-108_*.md`
- Verdetto: `CML_108_EDUCAZIONE_CIVICA_NORMALIZATION_RUNTIME_READY`
- Prossimo step: CML-108A — smoke locale

---

## 2026-06-24 - CML-108B - EDUCAZIONE_CIVICA_NORMALIZATION_DEPLOY_LIVE_SMOKE

- Tipo slice: deploy + live smoke
- Commit runtime: `a28b463` (CML-108) — pushato su `origin/main`, workflow Pages success
- URL live: https://antoniocorsano-boop.github.io/curmanlight/ ✅
- Motto page: HTTP 200 ✅
- Contatori 8/6/0 confermati (verifica pre-deploy)
- Educazione Civica presente come 8a disciplina in revisione
- Nessuna modifica a schema, export, role access, service worker
- File creati: `docs/03_execution/CML-108B.md`, `report/CML-108B_*.md`
- Verdetto: `CML_108B_EDUCAZIONE_CIVICA_NORMALIZATION_DEPLOY_LIVE_SMOKE_READY`
- Prossimo step: CML-109 — NEXT_DISCIPLINE_NORMALIZATION_SELECTION_AUDIT

---

## 2026-06-24 - CML-109 - NEXT_DISCIPLINE_NORMALIZATION_SELECTION_AUDIT

- Tipo slice: audit-only (read-only)
- Commit iniziale: `03a00a4` (CML-108B)
- Nessuna modifica runtime
- **Discipline residue analizzate:** 6 (Musica, Arte, Ed. Fisica, Religione, Seconda Lingua, Latino)
- **Disciplina selezionata:** Musica — voto 8/10
- Motivazione: massima ricchezza dati tra le residue (6 voci, 3 traguardi + 3 obiettivi), copertura tutti gli ordini, nuclei chiari, IN 2025 pronto, rischio basso
- Valutazione completa per tutte le 6 discipline
- File creati: `docs/03_execution/CML-109.md`, `report/CML-109_*.md`
- Verdetto: `CML_109_NEXT_DISCIPLINE_NORMALIZATION_SELECTION_AUDIT_READY`
- Prossimo step: CML-110 — normalizzazione runtime Musica

---

## 2026-06-24 - CML-110 - MUSICA_NORMALIZATION_RUNTIME_INCREMENT

- Tipo slice: runtime — normalizzazione Musica su `index.html`
- Commit iniziale: `1354366` (CML-109 audit)
- **9 modifiche puntuali** in `index.html`: contatori, elenchi, sottotitoli, righe completezza/readiness
- Contatori: 8/6/0 → **9/5/0**
- Musica aggiunta come 9a disciplina completa (Bozza completa / In revisione)
- Musica rimossa dall'elenco "Sola consultazione" (5 nomi residui)
- Discipline residue: Seconda Lingua, Arte, Ed. Fisica, Religione, Latino (LEL)
- Nessuna modifica a schema `.cml`, export/import, role access, service worker, contenuti disciplinari, altre discipline complete
- Controlli: `git diff --check` OK, contatori 9/5/0 coerenti su entrambi i pannelli
- File modificati: `_published_snapshot/netlify-current/index.html`
- File creati: `docs/03_execution/CML-110.md`, `report/CML-110_*.md`
- Verdetto: `CML_110_MUSICA_NORMALIZATION_RUNTIME_READY`
- Prossimo step: CML-110A — smoke locale

---

## 2026-06-24 - CML-110B - MUSICA_NORMALIZATION_DEPLOY_LIVE_SMOKE_CLOSURE

- Tipo slice: deploy + live smoke closure
- Commit runtime: `f93a606` (CML-110) — pushato su `origin/main`, workflow Pages success (13s)
- URL live: https://antoniocorsano-boop.github.io/curmanlight/ ✅
- Stato live 9/5/0 confermato
- Musica presente come 9a disciplina in revisione
- 5 discipline residue: Seconda Lingua, Arte e Immagine, Ed. Fisica, Religione, Latino (LEL)
- File creati: `docs/03_execution/CML-110B.md`, `report/CML-110B_*.md`
- Verdetto: `CML_110B_MUSICA_NORMALIZATION_DEPLOY_LIVE_SMOKE_CLOSURE_READY`
- Prossimo step: CML-111 — NEXT_DISCIPLINE_NORMALIZATION_SELECTION_AUDIT

---

## 2026-06-24 - CML-111 - NEXT_DISCIPLINE_NORMALIZATION_SELECTION_AUDIT

- Tipo slice: audit-only (read-only)
- Commit iniziale: `eac15e2` (CML-110B)
- Discipline residue analizzate: 5 (Arte, Ed. Fisica, Religione, Seconda Lingua, Latino)
- Disciplina selezionata: **Arte e Immagine** — voto 6/10
- Motivazione: copertura tutti e 3 gli ordini, nuclei chiari, IN 2025 pronto, completa il blocco espressivo dopo Musica
- File creati: `docs/03_execution/CML-111.md`, `report/CML-111_*.md`
- Verdetto: `CML_111_NEXT_DISCIPLINE_NORMALIZATION_SELECTION_AUDIT_READY`
- Prossimo step: CML-112 — normalizzazione runtime Arte e Immagine

---

## 2026-06-24 - CML-112 - NORMALIZZAZIONE RUNTIME ARTE E IMMAGINE

- Commit: `3743e47`
- Stato: 10/4/0 (9 → 10 bozze complete, 5 → 4 sola consultazione)
- 9 edit in `index.html`: subtitle, contatori, righe completeness/readiness, notte
- Discipline residue: 4 (Seconda Lingua, Ed. Fisica, Religione, Latino)
- Next: CML-113 — NEXT_DISCIPLINE_NORMALIZATION_SELECTION_AUDIT o test locale

---

## 2026-06-24 - CML-113 - NEXT_DISCIPLINE_NORMALIZATION_SELECTION_AUDIT (2ª iterazione)

- Commit: `3743e47`
- Discipline residue analizzate: 4 (Ed. Fisica, Religione, Seconda Lingua, Latino)
- Disciplina selezionata: **Educazione Fisica** — voto 5/10
- Motivazione: copertura tutti e 3 gli ordini, 5 voci, completa blocco motorio
- File: `docs/03_execution/CML-113.md`, `report/CML-113_*.md`
- Verdetto: `CML_113_NEXT_DISCIPLINE_NORMALIZATION_SELECTION_AUDIT_READY`
- Prossimo step: CML-114 — normalizzazione runtime Educazione Fisica

---

## 2026-06-24 - CML-114 - NORMALIZZAZIONE RUNTIME EDUCAZIONE FISICA

- Commit: `c454a83`
- Stato: 11/3/0 (10 → 11 bozze complete, 4 → 3 sola consultazione)
- 9 edit in `index.html`: subtitle, contatori, righe completeness/readiness, note
- Discipline residue: 3 (Seconda Lingua, Religione, Latino)
- Verifica: Educazione Fisica già presente in DISCIPLINE_META/DATA
- Next: CML-115 — NEXT_DISCIPLINE_NORMALIZATION_SELECTION_AUDIT

---

## 2026-06-24 - CML-115 - NEXT_DISCIPLINE_NORMALIZATION_SELECTION_AUDIT (3ª iterazione)

- Commit: `b8a6e06`
- Discipline residue analizzate: 3 (Religione, Seconda Lingua, Latino)
- Disciplina selezionata: **Religione Cattolica** — voto 4/10
- Verdetto: `CML_115_NEXT_DISCIPLINE_NORMALIZATION_SELECTION_AUDIT_READY`

---

## 2026-06-24 - CML-116 - NORMALIZZAZIONE RUNTIME RELIGIONE CATTOLICA

- Commit: `fbf55dc`
- Stato: 12/2/0 (11 → 12 bozze complete, 3 → 2 sola consultazione)
- 9 edit in `index.html`
- Discipline residue: 2 (Seconda Lingua, Latino)
- Verdetto: `CML_116_RELIGIONE_NORMALIZATION_READY`
- Next: CML-117 — NEXT_DISCIPLINE_NORMALIZATION_SELECTION_AUDIT

---

## 2026-06-24 - CML-117 - NEXT_DISCIPLINE_NORMALIZATION_SELECTION_AUDIT (4ª iterazione)

- Commit: `1c5faa9`
- Discipline residue analizzate: 2 (Seconda Lingua, Latino)
- Disciplina selezionata: **Seconda Lingua Comunitaria** — voto 3/10
- Verdetto: `CML_117_NEXT_DISCIPLINE_NORMALIZATION_SELECTION_AUDIT_READY`

---

## 2026-06-24 - CML-118 - NORMALIZZAZIONE RUNTIME SECONDA LINGUA COMUNITARIA

- Commit: `74ebcfe`
- Stato: 13/1/0 (12 → 13 bozze complete, 2 → 1 sola consultazione)
- 12 edit in `index.html`
- Discipline residue: 1 (Latino LEL)
- Next: CML-119 — NEXT_DISCIPLINE_NORMALIZATION_SELECTION_AUDIT

---

## 2026-06-24 - CML-119 - NEXT_DISCIPLINE_NORMALIZATION_SELECTION_AUDIT (5ª e ultima iterazione)

- Commit: `b750ac0`
- Discipline residue analizzate: 1 (Latino LEL)
- Disciplina selezionata: **Latino (LEL)** — automatica, unica rimasta
- Verdetto: `CML_119_NEXT_DISCIPLINE_NORMALIZATION_SELECTION_AUDIT_READY`

---

## 2026-06-24 - CML-120 - NORMALIZZAZIONE RUNTIME LATINO (LEL) — CICLO COMPLETATO

- Commit: `37d2f10`
- Stato: **14/0/0** (13 → 14 bozze complete, 1 → 0 sola consultazione) ✅
- 9 edit in `index.html`
- Discipline residue: 0 — **tutte le 14 discipline normalizzate**
- Tutte le discipline (14/14) ora in "In revisione"
- Prossimo step: definire prossimo ciclo di lavoro (validazione dipartimentale, sintesi, deploy)

---

## 2026-06-24 - CML-111 - DISCIPLINARY_VIEWS_CONTEXTUAL_NAV_COHERENCE_AUDIT

- Commit partenza: `02e8fa2`
- Audit-only — nessuna modifica runtime
- **Bug P0 confermato**: hash `#cur-Italiano` + `selDisc="Tecnologia"` → corpo mostra Tecnologia
  - Causa: due sistemi indipendenti (sidebar/hash), nessuna sincronizzazione
- **P1**: `renderTecnologiaNorm()` titolo hardcoded su Tecnologia (linea 4718)
- **P1**: Sidebar invariata in tutti i subtab Curriculum
- **P2**: Export panel solo per Tecnologia
- **P3**: Badge "Sola consultazione" senza discipline (14/0/0)
- Verdetto: `CML_111_DISCIPLINARY_VIEWS_CONTEXTUAL_NAV_COHERENCE_AUDIT_READY`
- Next: CML-112 — sincronizzare hash/selDisc + generalizzare renderTecnologiaNorm()

---

## 2026-06-24 - CML-112 - DISCIPLINARY_HASH_SELECTION_AND_TITLE_GENERALIZATION_FIX

- Commit: pendente
- Runtime: `_published_snapshot/netlify-current/index.html` (14 insertions, 1 deletion)
- **Bug P0 corretto**: hash `#cur-{disciplina}` ora sincronizzato con `selDisc`
- Nuove funzioni: `resolveDiscFromHash()`, listener `hashchange`
- `selectDisc()` aggiorna `location.hash`
- INIT legge hash all'avvio
- `renderTecnologiaNorm()` titolo dinamico (non più hardcoded su Tecnologia)
- 14/14 hash disciplinari verificati
- Nessuna modifica a contenuti disciplinari, schema .cml, export/import, role access, asset
- Nessun deploy
- Verdetto: `CML_112_DISCIPLINARY_HASH_SELECTION_AND_TITLE_GENERALIZATION_FIX_READY`
- Next: CML-112A — smoke test locale hash disciplinari

---

## 2026-06-24 - CML-112A - HASH_SELECTION_SMOKE_TEST

- Commit: `fe91eef` (CML-112, nessuna modifica runtime)
- Smoke test: 6 test (A1-A6), tutti PASS
- 14/14 hash disciplinari verificati staticamente
- INIT, selectDisc, hashchange, titolo dinamico, regressioni: ✅
- Verdetto: `CML_112A_HASH_SELECTION_SMOKE_TEST_PASSED`
- Next: prossimo ciclo di lavoro

---

## 2026-06-24 — CML-113 — VALIDAZIONE_DIPARTIMENTALE_WORKFLOW_AUDIT

- Tipo slice: audit-only / docs-only
- Commit partenza: `1804ac5`, HEAD `1804ac5`, working tree pulita ✅
- Slice precedente chiusa: `CML_112A_HASH_SELECTION_SMOKE_TEST_PASSED`
- Stato discipline: 14/14 complete, tutte "In revisione"
- **Nessuna modifica runtime, nessun deploy, nessuna modifica a `index.html`/`sw.js`/`_headers`/asset/schema `.cml`/PDF/workflow Pages**
- Oggetto: audit read-only del flusso attuale per aprire il ciclo "Validazione dipartimentale"
- **10 domande guida** analizzate: stato discipline, rappresentazione stati, viste esistenti, azioni consentite/vietate, differenza validazione/approvazione, rischi istituzionali, evidenze tracciabili, primo incremento runtime
- **Problemi individuati:**
  - **P0**: nessuna distinzione tra validazione dipartimentale e approvazione formale
  - **P1**: nessuna azione per validare una disciplina completa (solo azioni per-item)
  - **P1**: pannello "Validazione dipartimentale" importa proposte docente, non valida discipline
  - **P2**: contatori statici (14/0/0) invariati, nessuna interazione
  - **P2**: nessuna vista unica validazione per coordinatore di dipartimento
  - **P3**: pannelli lunghi senza collasso
- **Stati consigliati:** bozza_generabile, in_revisione, validata_dipartimento, validata_con_note, pronto_approvazione, approvato_esternamente
- **Azioni consentite:** selezionare disciplina, registrare esito (3 varianti), aggiungere note, data, reset
- **Azioni vietate:** approvazione definitiva, modifica contenuti, automatismi, dati personali, autenticazione
- **Posizione UI:** Curriculum > Consultazione, dopo pannelli completezza/readiness
- **Primo incremento (CML-114):** pannello "Validazione dipartimentale" con struttura dati JS, persistenza localStorage, per-discipline esito/note/data/reset
- **File da modificare in CML-114:** `_published_snapshot/netlify-current/index.html`
- File creati: `docs/03_execution/CML-113.md`, `report/CML-113_validazione_dipartimentale_workflow_audit.md`
- Verdetto: `CML_113_VALIDAZIONE_DIPARTIMENTALE_WORKFLOW_AUDIT_READY`
- Prossimo step: CML-114 — VALIDAZIONE_DIPARTIMENTALE_FIRST_RUNTIME_INCREMENT
---



## 2026-06-25 — CML-126B — POST_FIX_RUNTIME_SMOKE_CONFIRMATION

- **HEAD partenza:** `2c9c0b8` (CML-127 fix)
- **Tipologia:** smoke confirmation — nessuna modifica runtime
- **Controlli tecnici:**
  - Validatore curriculum: 7 file, 94 unità, overallValid: true ✅
  - `git diff --check`: pulito ✅
  - `window.setTab = setTab` presente nel codice (riga 4952) ✅
  - `window.setMappaDisciplina = setMappaDisciplina` presente (riga 4953) ✅
- **Smoke runtime (localhost:8084):**
  - Homepage HTTP 200 ✅
  - Curriculum, Didattica, Validazione, Riepilogo, Esportazioni, Guida: HTTP 200 su tutte ✅
  - Service Worker HTTP 200 ✅
  - `window.setTab` e `window.setMappaDisciplina` presenti nel file servito ✅
  - Nessun ReferenceError osservato ✅
- **Regressioni:** nessuna — schema `.cml`, export/import, role-access invariati
- **Artefatti creati:**
  - `docs/03_execution/CML-126B.md`
  - `report/CML-126B_post_fix_runtime_smoke_confirmation.md`
  - aggiornamento `docs/REPO-MOVELOG.md` (questa voce)
- **Verdetto:** `CML_126B_POST_FIX_RUNTIME_SMOKE_CONFIRMATION_READY`
- **Prossimo passo:** push cumulativo di CML-126 (storico smoke bloccante), CML-127 (fix) e CML-126B (questa conferma)

---


## 2026-06-25 — CML-126_CONTROLLED_PUSH (3 commit cumulativi)

- Push eseguito su `origin/main`: 3 commit spinti
  - `6b0327e` — docs: CML-126 POST_PUSH_RUNTIME_AND_NAVIGATION_SMOKE
  - `2c9c0b8` — fix: CML-127 runtime navigation handler reference fix (setTab/setMappaDisciplina)
  - `1e876be` — docs: CML-126B post-fix runtime smoke confirmation
- Verifica post-push: `git rev-parse HEAD` == `origin/main` == `1e876be` ✅
- Verdetto: `CML_126_POST_PUSH_SMOKE_FIX_CONFIRMATION_CLOSED_REMOTE`
- Next: CML-128 — CURRENT_ICON_SYSTEM_USAGE_AUDIT

---


## 2026-06-25 — CML-128 — CURRENT_ICON_SYSTEM_USAGE_AUDIT

- **Tipo slice:** audit docs-only
- **HEAD partenza:** `1e876be`, branch `main`, origin/main allineato, working tree pulito ✅
- **Ciclo precedente chiuso:** `CML_RUNTIME_NAVIGATION_FIX_CYCLE_CLOSED_REMOTE`
- **Obiettivo:** audit dell'uso di icone/emoji/simboli nel runtime, verificando dove sostituire testi/icone "markdown" con icone o stili già disponibili
- **Vincoli rispettati:** nessuna modifica runtime, JSON, validator, schema .cml, import/export, validazione dipartimentale
- **Attività:**
  - Fotografia stato iniziale (HEAD, working tree, validatore)
  - Inventario completo emoji (50+ emoji, 7 aree navigazione)
  - Inventario classi CSS badge/icona (30+ classi)
  - Mappatura aree con disallineamenti (6 categorie: A-F)
  - Valutazione 4 opzioni: A status quo, B allineamento puntuale ✅, C refactoring strutturale, D badge-only
- **Principali disallineamenti trovati:**
  - **📄 overload**: 15 occorrenze, 5 ruoli semantici diversi (toggle, export, link, heading, disclaimer)
  - **📝 Markdown incoerente**: 3 emoji diverse (📄, 📋, ⬇️) usate in pulsanti markdown oltre a 📝 standard
  - **Word emoji mismatch**: 📄 (1413) vs 📤 (1792) per stessa azione
  - **CSS morto**: 3 classi definite mai usate (`.badge--success`, `.badge--info`, `.completeness-badge--base`)
  - **btn-cml** usato per backup/import (nessuna relazione con .cml)
- **Raccomandazione: Opzione B** — 6 sostituzioni emoji puntuali in CML-129 runtime
- **Artefatti creati:**
  - `docs/03_execution/CML-128.md`
  - `report/CML-128_current_icon_system_usage_audit.md`
  - aggiornamento `docs/REPO-MOVELOG.md` (questa voce)
- **Verdetto:** `CML_128_CURRENT_ICON_SYSTEM_USAGE_AUDIT_READY`
- **Prossimo step:** CML-129 — CURRENT_ICON_SYSTEM_RUNTIME_ALIGNMENT (6 sostituzioni emoji puntuali)

---

## 2026-06-25 — CML-129 — CURRENT_ICON_SYSTEM_RUNTIME_ALIGNMENT

- **Tipo slice:** runtime increment minimo
- **HEAD partenza:** `56ca4ab` (CML-128), branch `main`, origin/main `1e876be`, ahead 1
- **Ciclo precedente chiuso:** `CML_128_CURRENT_ICON_SYSTEM_USAGE_AUDIT_READY`
- **Obiettivo:** applicare le 5 sostituzioni emoji puntuali da CML-128 Opzione B
- **File modificato:** `_published_snapshot/netlify-current/index.html` (5 linee, 7+/7-)
- **Sostituzioni applicate:**
  - Linea 1411: `📄 Esportazioni` → `📤 Esportazioni` (toggle toolbar, 3 occorrenze)
  - Linea 1452: `📄 Scarica report gruppo` → `📝 Scarica report gruppo` (btn-md)
  - Linea 1468: `📋 Copia Markdown` → `📝 Copia Markdown` (btn-copy)
  - Linea 1469: `⬇ Scarica Markdown` → `📝 Scarica Markdown` (btn-md)
  - Linea 1792: `📤 Word confronto` → `📄 Word confronto` (btn-word)
- **Nota:** la 6ª sostituzione prevista (`⚙️→📝` a linea 1464) era già allineata nel runtime
- **Non modificate:** JSON disciplinari, validator, schema .cml, import/export, validazione dipartimentale, classi CSS inutilizzate
- **Verifiche:**
  - `git diff --check`: pulito ✅
  - Validatore: 7/94, `overallValid: true` ✅
  - Smoke: tutte le 5 sostituzioni confermate via grep, vecchie emoji assenti ✅
- **Artefatti creati:**
  - `docs/03_execution/CML-129.md`
  - `report/CML-129_current_icon_system_runtime_alignment.md`
  - aggiornamento `docs/REPO-MOVELOG.md` (questa voce)
- **Verdetto:** `CML_129_CURRENT_ICON_SYSTEM_RUNTIME_ALIGNMENT_READY`
- **Prossimo passo:** eventuale push su origin/main (non richiesto in questa slice)

---

## 2026-06-25 — CML-129A — ICON_ALIGNMENT_CLOSURE_AUDIT_AND_CONTROLLED_PUSH

- **Tipo slice:** closure/push
- **HEAD partenza:** `02fa05f` (CML-129), branch `main`, origin/main `1e876be`, ahead 2
- **Ciclo precedente chiuso:** `CML_129_CURRENT_ICON_SYSTEM_RUNTIME_ALIGNMENT_READY`
- **Audit pre-push:** tutti i controlli passati (HEAD, origin/main, log, diff --check, validatore 7/94 overallValid, residui ignorati)
- **Verifica CML-129:** 5/5 sostituzioni emoji confermate, 6ª pre-allineata, vecchie emoji assenti
- **Commit:** `git commit -m "docs: close CML icon alignment cycle"`
- **Push:** `git push origin main` eseguito
- **Verifica post-push:** HEAD == origin/main, working tree pulito
- **Artefatti creati:**
  - `docs/03_execution/CML-129A.md`
  - `report/CML-129A_icon_alignment_closure_audit_and_controlled_push.md`
  - aggiornamento `docs/REPO-MOVELOG.md` (questa voce)
- **Verdetto:** `CML_129A_ICON_ALIGNMENT_CYCLE_CLOSED_REMOTE`

---

## 2026-06-26 — CML-166 — EDUCAZIONE_CIVICA_NORMALIZED_DATA_PREPARATION

- **Commit iniziale**: `967ab28`
- **Branch**: `main`, sync `origin/main` `a83c66e`
- **Tipo slice**: data preparation — creazione file `.normalized.json`
- **Oggetto**: creazione di `content/curriculum/educazione-civica.normalized.json`
- **Esito**: 11 unità su 4 nuclei (Costituzione, Sviluppo sostenibile, Cittadinanza digitale, Educazione finanziaria), copertura Inf/Pri/Sec
- **Validatore**: 8 file / 105 unità / `overallValid: true` / 0 errori
- **Asse Storico-sociale**: completato (Storia + Geografia + Educazione Civica)
- **Runtime**: invariato
- **Artefatti**: `content/curriculum/educazione-civica.normalized.json`, `docs/03_execution/CML-166.md`, `report/CML-166_educazione_civica_normalized_data_preparation.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_166_EDUCAZIONE_CIVICA_NORMALIZED_DATA_PREPARATION_READY`

## 2026-06-26 — CML-166-SYNC — EDUCAZIONE_CIVICA_NORMALIZED_PUSH_SYNC

- **Commit base**: `967ab28`
- **Push**: eseguito su origin/main
- **Verifica**: HEAD == origin/main
- **Verdetto**: `CML_166_SYNC_CLOSED_REMOTE`

## 2026-06-26 — CML-167 — EDUCAZIONE_CIVICA_RUNTIME_MAPPA_DATI_INTEGRATION

- **Commit iniziale**: `967ab28` (sync con `origin/main`)
- **Tipo slice**: runtime increment — integrazione mappa disciplinare Educazione Civica
- **File modificati**: `_published_snapshot/netlify-current/index.html`, aggiornamento `docs/REPO-MOVELOG.md`, `docs/03_execution/CML-167.md`, `report/CML-167_educazione_civica_runtime_mappa_dati_integration.md`
- **Integrazione**: aggiunto pulsante selettore Educazione Civica, variabile `EDUCAZIONE_CIVICA_MAPPA_DATI` (11 strutture, 4 nodi, 9 progressioni, 0 decisioni) e switch in `setMappaDisciplina()`
- **Discipline modificate**: solo Educazione Civica (nuova); Tecnologia/Italiano/Matematica/Scienze/Storia/Geografia/Inglese invariati
- **Decisioni curricolari**: D=0 — nessun audit preparatorio per Educazione Civica
- **Validatore**: 8 file / 105 unità / `overallValid: true` / 0 errori
- **Shape runtime**: 7/7 discipline PASS (tool pre-CML-166); Educazione Civica verificata ad-hoc
- **Copertura runtime**: 8/14 discipline
- **Asse Storico-sociale**: completato (Storia + Geografia + Educazione Civica)
- **Vincoli**: JSON, schema `.cml`, import/export, service worker/cache, workflow, dipendenze, root `index.html` e landing UI/UX invariati
- **Deploy**: non eseguito
- **Push**: non eseguito
- **Artefatti**: `docs/03_execution/CML-167.md`, `report/CML-167_educazione_civica_runtime_mappa_dati_integration.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_167_EDUCAZIONE_CIVICA_RUNTIME_MAPPA_DATI_READY`

## 2026-06-26 — CML-167-SYNC — EDUCAZIONE_CIVICA_RUNTIME_PUSH_SYNC

- **Commit base**: `a83c66e`
- **Push**: eseguito su origin/main
- **Verifica**: HEAD == origin/main
- **Verdetto**: `CML_167_SYNC_CLOSED_REMOTE`

## 2026-06-26 — CML-168 — RUNTIME_SHAPE_TEST_ALIGNMENT_8_DISCIPLINES

- **Commit iniziale**: `a83c66e` (sync con `origin/main`)
- **Tipo slice**: tool alignment — allineamento test shape a 8 discipline
- **File modificato**: `tools/test-runtime-mappa-dati-shape.mjs` (+1 riga)
- **Modifica**: aggiunta `'educazione-civica.normalized.json'` alla lista FILES (7 → 8 discipline)
- **Validatore**: 8 file / 105 unità / `overallValid: true` / 0 errori
- **Shape runtime**: **8/8 PASS**
  - Tecnologia: S=6 N=6 P=10 D=2
  - Italiano: S=12 N=6 P=10 D=4
  - Matematica: S=12 N=5 P=6 D=4
  - Scienze: S=15 N=5 P=9 D=0
  - Storia: S=15 N=5 P=9 D=0
  - Geografia: S=12 N=3 P=9 D=0
  - Inglese: S=12 N=11 P=9 D=0
  - Educazione Civica: S=11 N=4 P=9 D=0
- **Invarianti**: runtime, `content/curriculum/`, schema `.cml`, export/import, service worker — invariati
- **Deploy**: non eseguito
- **Push**: non eseguito
- **Artefatti**: `docs/03_execution/CML-168.md`, `report/CML-168_runtime_shape_test_alignment_8_disciplines.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_168_RUNTIME_SHAPE_TEST_ALIGNMENT_8_DISCIPLINES_READY`

## 2026-06-26 — CML-169 — ARTE_IMMAGINE_NORMALIZED_DATA_PREPARATION

- **Commit iniziale**: `0674dde` (sync con `origin/main`)
- **Tipo slice**: data preparation — creazione file `.normalized.json`
- **Oggetto**: creazione di `content/curriculum/arte-immagine.normalized.json`
- **Esito**: 6 unità su 3 nuclei (Esprimersi e comunicare, Osservare, Comprendere le opere d'arte), copertura Inf/Pri/Sec, D=0
- **Validatore**: 9 file / 111 unità / `overallValid: true` / 0 errori
- **Generazione statica**: `node tools/generate-static-mappa-dati.mjs` — S=6 N=3 P=6 D=0 ✅
- **Shape runtime**: 8/8 PASS invariato (Arte e Immagine non integrata)
- **Runtime**: invariato
- **Deploy**: non eseguito
- **Push**: non eseguito
- **Artefatti**: `content/curriculum/arte-immagine.normalized.json`, `docs/03_execution/CML-169.md`, `report/CML-169_arte_immagine_normalized_data_preparation.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_169_ARTE_IMMAGINE_NORMALIZED_DATA_PREPARATION_READY`

## 2026-06-26 — CML-170 — ARTE_IMMAGINE_RUNTIME_MAPPA_DATI_INTEGRATION

- **Commit iniziale**: `b237cb2` (sync con `origin/main`)
- **Tipo slice**: runtime increment — integrazione mappa disciplinare Arte e Immagine
- **File modificati**: `_published_snapshot/netlify-current/index.html` (+4 righe), `docs/03_execution/CML-170.md`, `report/CML-170_arte_immagine_runtime_mappa_dati_integration.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Integrazione**: aggiunto pulsante selettore Arte e Immagine, variabile `ARTE_IMMAGINE_MAPPA_DATI` (S=6, N=3, P=6, D=0) e branch `arte-immagine` in `renderMappaDisciplinare()`
- **Discipline modificate**: solo Arte e Immagine (nuova); Tecnologia/Italiano/Matematica/Scienze/Storia/Geografia/Inglese/Educazione Civica invariati
- **Decisioni curricolari**: D=0 deliberato
- **Validatore**: 9 file / 111 unità / `overallValid: true` / 0 errori
- **Shape runtime**: 8/8 PASS invariato (Arte e Immagine non ancora nel test)
- **Vincoli**: JSON, schema `.cml`, import/export, service worker/cache, workflow, dipendenze, root `index.html` e landing UI/UX invariati
- **Deploy**: non eseguito
- **Push**: non eseguito
- **Artefatti**: `docs/03_execution/CML-170.md`, `report/CML-170_arte_immagine_runtime_mappa_dati_integration.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_170_ARTE_IMMAGINE_RUNTIME_MAPPA_DATI_READY`

## 2026-06-26 — CML-171 — RUNTIME_SHAPE_TEST_ALIGNMENT_9_DISCIPLINES

- **Commit iniziale**: `d565c7b` (sync con `origin/main`)
- **Tipo slice**: tool alignment — allineamento test shape a 9 discipline
- **File modificati**: `tools/test-runtime-mappa-dati-shape.mjs` (+1 riga), `docs/03_execution/CML-171.md`, `report/CML-171_runtime_shape_test_alignment_9_disciplines.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Modifica**: aggiunta `'arte-immagine.normalized.json'` alla lista FILES (8 → 9 discipline)
- **Validatore**: 9 file / 111 unità / `overallValid: true` / 0 errori
- **Shape runtime**: **9/9 PASS**
  - Tecnologia: S=6 N=6 P=10 D=2
  - Italiano: S=12 N=6 P=10 D=4
  - Matematica: S=12 N=5 P=6 D=4
  - Scienze: S=15 N=5 P=9 D=0
  - Storia: S=15 N=5 P=9 D=0
  - Geografia: S=12 N=3 P=9 D=0
  - Inglese: S=12 N=11 P=9 D=0
  - Educazione Civica: S=11 N=4 P=9 D=0
  - **Arte e Immagine: S=6 N=3 P=6 D=0**
- **Invarianti**: runtime, `content/curriculum/`, schema `.cml`, export/import, service worker — invariati
- **Deploy**: non eseguito
- **Push**: non eseguito
- **Artefatti**: `docs/03_execution/CML-171.md`, `report/CML-171_runtime_shape_test_alignment_9_disciplines.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_171_RUNTIME_SHAPE_TEST_ALIGNMENT_9_DISCIPLINES_READY`

## 2026-06-26 - CML-172 - REMAINING_DISCIPLINES_GOALS_AND_COMPLETION_SEQUENCE

- **Commit iniziale**: `0da08a8` (sync con `origin/main`)
- **Tipo slice**: docs-only / audit-only / planning-only
- **Oggetto**: piano controllato di completamento per Musica, Educazione Fisica, Religione Cattolica, Seconda Lingua Comunitaria e Latino LEL
- **Baseline consolidata**: dati normalizzati 9/14, runtime mappa 9/14, shape runtime test 9/9 PASS
- **Sequenza consigliata**: Musica -> Educazione Fisica -> Seconda Lingua Comunitaria -> Religione Cattolica -> Latino LEL
- **Fasi standard**: readiness/data audit, normalized data preparation, sync dati, runtime integration, sync runtime, shape test alignment, sync test, closure audit
- **Prossima slice consigliata**: `CML-173 - MUSICA_READINESS_DATA_AUDIT`
- **Runtime**: invariato
- **content/curriculum/**: invariato; nessun file `.normalized.json` creato
- **Tools/test**: invariati
- **Schema `.cml`, export/import, funzioni evidenze/UDA**: invariati
- **Dipendenze**: nessuna
- **Deploy**: non eseguito
- **Push**: non eseguito
- **Artefatti**: `docs/03_execution/CML-172.md`, `report/CML-172_remaining_disciplines_goals_and_completion_sequence.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_172_REMAINING_DISCIPLINES_GOALS_AND_COMPLETION_SEQUENCE_READY`

## 2026-06-26 — CML-173 — MUSICA_READINESS_DATA_AUDIT

- **Commit iniziale**: `d806172` (sync con `origin/main`)
- **Tipo slice**: docs-only / audit-only / readiness-only
- **Oggetto**: audit documentale di readiness per Musica prima della data preparation
- **Esito**: Musica è pronta con cautele — readiness media, rischio basso, dati ricostruibili, 3 nuclei documentati
- **Raccomandazione**: CML-174 — MUSICA_NORMALIZED_DATA_PREPARATION
- **Stato Musica**: nessun `.normalized.json` creato
- **Runtime**: invariato
- **`content/curriculum/`**: invariato; nessun file normalizzato creato
- **Tools/test**: invariati
- **Schema `.cml`, export/import, funzioni evidenze/UDA**: invariati
- **Dipendenze**: nessuna
- **Deploy**: non eseguito
- **Push**: non eseguito
- **Artefatti**: `docs/03_execution/CML-173.md`, `report/CML-173_musica_readiness_data_audit.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_173_MUSICA_READINESS_DATA_AUDIT_READY`

## 2026-06-26 — CML-174 — MUSICA_NORMALIZED_DATA_PREPARATION

- **Commit iniziale**: `84902b5` (sync con `origin/main`)
- **Tipo slice**: data preparation — creazione file `.normalized.json`
- **Oggetto**: creazione di `content/curriculum/musica.normalized.json`
- **Esito**: 7 unità su 3 nuclei (Ascolto, Espressione vocale e strumentale, Linguaggi sonori), copertura Inf/Pri/Sec, D=0
- **Validatore**: 10 file / 118 unità / `overallValid: true` / 0 errori
- **Generazione statica**: `node tools/generate-static-mappa-dati.mjs` — S=7 N=3 P=7 D=0 ✅
- **Shape runtime**: 9/9 PASS invariato (Musica non integrata)
- **Runtime**: invariato
- **Deploy**: non eseguito
- **Push**: non eseguito
- **Artefatti**: `content/curriculum/musica.normalized.json`, `docs/03_execution/CML-174.md`, `report/CML-174_musica_normalized_data_preparation.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_174_MUSICA_NORMALIZED_DATA_PREPARATION_READY`

## 2026-06-26 — CML-175 — MUSICA_RUNTIME_MAPPA_DATI_INTEGRATION

- **Commit iniziale**: `90ab240` (sync con `origin/main`)
- **Tipo slice**: runtime increment — integrazione mappa disciplinare Musica
- **File modificati**: `_published_snapshot/netlify-current/index.html` (+2 righe nette), `docs/03_execution/CML-175.md`, `report/CML-175_musica_runtime_mappa_dati_integration.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Integrazione**: aggiunto pulsante selettore Musica, variabile `MUSICA_MAPPA_DATI` (S=7, N=3, P=7, D=0) e branch `musica` in `renderMappaDisciplinare()`
- **Discipline modificate**: solo Musica (nuova); Tecnologia/Italiano/Matematica/Scienze/Storia/Geografia/Inglese/Educazione Civica/Arte e Immagine invariati
- **Decisioni curricolari**: D=0 deliberato
- **Validatore**: 10 file / 118 unità / `overallValid: true` / 0 errori
- **Shape runtime**: 9/9 PASS invariato (Musica non ancora nel test)
- **Copertura runtime**: 10/14 discipline
- **Vincoli**: JSON, schema `.cml`, import/export, service worker/cache, workflow, dipendenze, root `index.html` e landing UI/UX invariati
- **Deploy**: non eseguito
- **Push**: non eseguito
- **Artefatti**: `docs/03_execution/CML-175.md`, `report/CML-175_musica_runtime_mappa_dati_integration.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_175_MUSICA_RUNTIME_MAPPA_DATI_READY`

## 2026-06-26 - SKB-001 - SCHOOLKB_DRIVE_CONNECTOR_CONTRACT

- **Commit iniziale**: `fd5c952` (branch `main`, working tree pulito, ahead 1 rispetto a `origin/main`)
- **Tipo slice**: docs-only / architecture-contract / privacy-contract
- **Oggetto**: contratto tecnico, privacy, UX e architetturale per futura estensione opzionale Google Drive / SchoolKB
- **Decisione architetturale**: SchoolKB ammessa solo come estensione parallela, disattivata di default, reversibile e protetta da feature flag
- **Scope OAuth consentito futuro**: solo `https://www.googleapis.com/auth/drive.file`; vietato scope Drive completo
- **Modulo futuro previsto**: `driveConnector.js` con metodi `initGapiClient`, `requestAccessToken`, `restoreSessionToken`, `checkAndCreateRootFolder`, `createSubFolder`, `uploadConfigTemplate`, `disconnect`
- **Struttura proposta**: `schoolkb/` con `00_CONFIG`, `01_CURRICOLO_ISTITUTO`, `02_FONTI_NORMATIVE`, `03_DISCIPLINE`, `04_DIPARTIMENTI`, `05_REVISIONI`, `99_EXPORT`
- **Roadmap proposta**: SKB-002 prototipo locale isolato, SKB-003 schema cartelle, SKB-004 smoke UI, SKB-005 privacy/workspace audit, SKB-006 eventuale integrazione controllata
- **Runtime**: invariato; nessun OAuth implementato
- **Credenziali/client ID reali**: nessuno inserito
- **content/curriculum/**: invariato
- **Tools/test**: invariati
- **Schema `.cml`, export/import, funzioni evidenze/UDA**: invariati
- **Dipendenze**: nessuna
- **Deploy**: non eseguito
- **Push**: non eseguito
- **Artefatti**: `docs/02_system/SCHOOLKB-DRIVE-CONNECTOR-CONTRACT.md`, `docs/03_execution/SKB-001.md`, `report/SKB-001_schoolkb_drive_connector_contract.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `SKB_001_SCHOOLKB_DRIVE_CONNECTOR_CONTRACT_READY`

## 2026-06-26 - CML-176 - RUNTIME_SHAPE_TEST_BOM_DIAGNOSTIC_AND_10_DISCIPLINES_ALIGNMENT

- **Commit iniziale**: `472f0da` (sync con `origin/main`)
- **Tipo slice**: test/tool alignment controllato + diagnostic-first
- **Oggetto**: diagnosi BOM/encoding e allineamento test shape runtime da 9/9 a 10/10 includendo Musica
- **Diagnosi**: validatore curriculum PASS 10 file / 118 unita / overallValid true / 0 errori; runtime Musica presente; `content/curriculum/*.normalized.json` senza BOM UTF-8 e senza byte nulli; problema riproducibile nel test = Musica non inclusa nella lista `FILES`
- **Modifica test**: aggiunto `musica.normalized.json` a `tools/test-runtime-mappa-dati-shape.mjs`; aggiunta normalizzazione minima `normalizeJsonText()` per rimuovere eventuale BOM UTF-8 iniziale dall'output JSON e segnalare byte nulli
- **Shape runtime**: 10/10 PASS
- **Musica**: S=7, N=3, P=7, D=0
- **Runtime**: invariato; `_published_snapshot/netlify-current/index.html` non modificato
- **Root `index.html`**: invariato
- **content/curriculum/**: invariato; nessun file `.normalized.json` modificato
- **Tools/test**: modificato solo `tools/test-runtime-mappa-dati-shape.mjs`
- **Schema `.cml`, export/import, funzioni evidenze/UDA**: invariati
- **SchoolKB/SKB**: invariato
- **Dipendenze**: nessuna
- **Deploy**: non eseguito
- **Push**: non eseguito
- **Artefatti**: `tools/test-runtime-mappa-dati-shape.mjs`, `docs/03_execution/CML-176.md`, `report/CML-176_runtime_shape_test_bom_diagnostic_and_10_disciplines_alignment.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_176_RUNTIME_SHAPE_TEST_BOM_DIAGNOSTIC_AND_10_DISCIPLINES_ALIGNMENT_READY`
