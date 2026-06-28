# CML-UX-GOVERNANCE-IMPLEMENTATION-PLAN

**Data**: 2026-06-28
**Commit base**: `731cb8b` (CML-224S, aligned)
**Tipo**: piano di implementazione multi-slice
**Obiettivo**: implementare governance curricolare, riduzione ridondanze UI e superamento centratura Tecnologia
**Audit riferimento**: CML-UX-FLOW-AUDIT (aff4981)

## Contesto

L'audit CML-UX-FLOW-AUDIT ha identificato gap critici non ancora risolti:
- Governance curricolare mancante (stati versione, validazione/approvazione)
- Gestione transizione IN2025 non strutturata
- Collegamento progettazione-curricolo assente
- Ridondanze UI (pulsanti ripetuti, sezioni ridondanti)
- Centratura su Tecnologia (hardcoded, funzioni non generalizzate)

Le slice successive (CML-213 → CML-224) hanno seguito un percorso diverso (Evidenze/UDA + Release), lasciando questi gap aperti.

## Strategia di implementazione

Il piano è diviso in **4 fasi sequenziali**, ciascuna con slice atomiche e riprendibili:

1. **Fase 1**: Contratto architettura informativa (docs-only)
2. **Fase 2**: Generalizzazione multi-disciplinare (runtime)
3. **Fase 3**: Governance stati versione (runtime)
4. **Fase 4**: Riduzione ridondanze UI (runtime)

Ogni slice ha:
- Obiettivo chiaro e delimitato
- Deliverables specifici
- Vincoli espliciti
- Criteri di accettazione
- Comandi di verifica

## Fase 1: Contratto architettura informativa (docs-only)

### CML-225: UX-MENU-ACTION-CONTRACT

**Obiettivo**: Definire contratto per nuova architettura informativa prima di qualsiasi modifica runtime.

**Perimetro**:
- Nuova struttura tabbar e sotto-tab
- Definizione sezione "Versioni" (stati curricolari)
- Definizione sezione "Collegamenti curricolo" (progettazione ↔ versione)
- Mappatura azioni per ogni ruolo (Dirigente/Referente, Dipartimento, Docente, Organi collegiali)
- Specifica mitigazioni rischi di regressione

**Non incluso**:
- Modifiche runtime
- Implementazione nuova UI
- Modifica comportamento esistente

**Deliverables**:
- `docs/02_system/UX-MENU-ACTION-CONTRACT.md` (contratto architettura)
- `docs/03_execution/CML-225.md` (execution log)
- `report/CML-225_ux_menu_action_contract.md` (report)

**Vincoli**:
- Docs-only
- Nessuna modifica runtime
- Nessuna modifica curriculum JSON
- Nessuna modifica `.cml`/export/import
- Nessun deploy, nessun push

**Criteri di accettazione**:
- Contratto definisce chiaramente nuova struttura tabbar
- Contratto definisce stati versione (vigente, in_revisione, proposta, approvata, adottata, superata)
- Contratto definisce matrice azioni/ruoli
- Contratto definisce mitigazioni rischi
- Report verifica coerenza con CML-UX-FLOW-AUDIT

**Comandi verifica**:
```bash
git status -sb
git log --oneline -1
git diff --check
```

**Verdetto atteso**: `CML_225_UX_MENU_ACTION_CONTRACT_READY`

---

## Fase 2: Generalizzazione multi-disciplinare (runtime)

### CML-226: MULTI-DISCIPLINE-GENERALIZATION

**Obiettivo**: Generalizzare funzioni hardcoded Tecnologia per supportare tutte le 14 discipline.

**Perimetro**:
- Generalizzare `renderTecnologiaNorm()` → `renderDisciplinaNorm(disc)`
- Generalizzare `generateTecnologiaBozza()` → `generateDisciplinaBozza(disc)`
- Generalizzare `copyTecnologiaMarkdown()` → `copyDisciplinaMarkdown(disc)`
- Generalizzare `downloadTecnologiaMarkdown()` → `downloadDisciplinaMarkdown(disc)`
- Rimuovere classi CSS specifiche (`.tecnologia-export-panel`, `.tecnologia-norm`, `.tecnologia-md-preview`)
- Rimuovere hardcoded "Tecnologia" dai titoli
- Cambiare default `selDisc` da "Tecnologia" a prima in ordine alfabetico o ultima usata

**Non incluso**:
- Modifica curriculum JSON
- Modifica `.cml` schema
- Modifica export/import
- Modifica validator/shape-test
- Modifica service-worker/manifest

**Deliverables**:
- `_published_snapshot/netlify-current/index.html` (modificato)
- `docs/03_execution/CML-226.md` (execution log)
- `report/CML-226_multi_discipline_generalization.md` (report)
- Aggiornamento `docs/REPO-MOVELOG.md`

**Vincoli**:
- Runtime increment
- Nessuna modifica curriculum JSON
- Nessuna modifica `.cml`/export/import
- Nessuna modifica validator/shape-test
- Nessun deploy, nessun push senza autorizzazione

**Criteri di accettazione**:
- Tutte le 14 discipline hanno export panel funzionante
- Default disciplina non è hardcoded "Tecnologia"
- Titoli dinamici basati su disciplina selezionata
- Nessuna classe CSS specifica Tecnologia
- Validatore 14/14 PASS
- Shape test 14/14 PASS
- GitHub Pages HTTP 200

**Comandi verifica**:
```bash
git status -sb
git diff --check
node tools/validator.js
node tools/shape-test.js
```

**Verdetto atteso**: `CML_226_MULTI_DISCIPLINE_GENERALIZATION_COMPLETE`

### CML-226S: CONTROLLED_PUSH_MULTI-DISCIPLINE

**Obiettivo**: Push controllato di CML-226.

**Perimetro**:
- Pre-push checks (git status clean, diff-check, validator, shape-test)
- Push verso origin/main
- Verifica GitHub Pages

**Deliverables**:
- `docs/03_execution/CML-226S.md` (execution log)
- Aggiornamento `docs/REPO-MOVELOG.md`

**Verdetto atteso**: `CML_226S_MULTI_DISCIPLINE_PUSHED`

---

## Fase 3: Governance stati versione (runtime)

### CML-227: CURRICULUM-VERSION-STATES

**Obiettivo**: Implementare modello stati versione curricolare (vigente, in_revisione, proposta, approvata, adottata, superata).

**Perimetro**:
- Aggiungere sezione "Versioni" in Curriculum (nuovo sotto-tab)
- Implementare tabella versioni con stati
- Colonne: versione, stato, data, atto, note, azioni
- Implementare storico transizioni
- Implementare azioni: visualizza dettaglio, registra avanzamento
- Rimuovere pulsanti "Approva definitivamente" (correzione istituzionale)
- Sostituire con "Registra stato di avanzamento"
- Aggiungere campi per data e atto di approvazione/adozione

**Non incluso**:
- Modifica curriculum JSON
- Modifica `.cml` schema
- Modifica export/import
- Modifica validator/shape-test
- Modifica service-worker/manifest

**Deliverables**:
- `_published_snapshot/netlify-current/index.html` (modificato)
- `docs/03_execution/CML-227.md` (execution log)
- `report/CML-227_curriculum_version_states.md` (report)
- Aggiornamento `docs/REPO-MOVELOG.md`

**Vincoli**:
- Runtime increment
- Nessuna modifica curriculum JSON
- Nessuna modifica `.cml`/export/import
- Nessuna modifica validator/shape-test
- Nessun deploy, nessun push senza autorizzazione

**Criteri di accettazione**:
- Sezione "Versioni" visibile e funzionante
- Tabella versioni mostra stati correttamente
- Azioni "Registra avanzamento" funzionanti
- Nessun pulsante "Approva definitivamente"
- Campi data/atto compilabili
- Validatore 14/14 PASS
- Shape test 14/14 PASS
- GitHub Pages HTTP 200

**Comandi verifica**:
```bash
git status -sb
git diff --check
node tools/validator.js
node tools/shape-test.js
```

**Verdetto atteso**: `CML_227_CURRICULUM_VERSION_STATES_COMPLETE`

### CML-227S: CONTROLLED_PUSH_VERSION_STATES

**Obiettivo**: Push controllato di CML-227.

**Perimetro**:
- Pre-push checks (git status clean, diff-check, validator, shape-test)
- Push verso origin/main
- Verifica GitHub Pages

**Deliverables**:
- `docs/03_execution/CML-227S.md` (execution log)
- Aggiornamento `docs/REPO-MOVELOG.md`

**Verdetto atteso**: `CML_227S_VERSION_STATES_PUSHED`

---

## Fase 4: Riduzione ridondanze UI (runtime)

### CML-228: UI-REDUNDANCY-REDUCTION

**Obiettivo**: Ridurre ridondanze UI identificate nell'audit.

**Perimetro**:
- Unificare export in unico pannello per tab
- Rimuovere tecnologia-export-panel (già generalizzato in CML-226)
- Collassare pannelli statici ("Stato di completezza", "Readiness per approvazione")
- Ridurre sidebar discipline ai tab pertinenti (Consulta, Revisione)
- Rimuovere duplicati export buttons (Word confronto/definitivo, Copy/Markdown/PDF multipli)
- Rinominare department-import-panel in "Importa proposte docenti"
- Rinominare referent-validation-panel in "Importa esiti dipartimentali"

**Non incluso**:
- Modifica curriculum JSON
- Modifica `.cml` schema
- Modifica export/import
- Modifica validator/shape-test
- Modifica service-worker/manifest

**Deliverables**:
- `_published_snapshot/netlify-current/index.html` (modificato)
- `docs/03_execution/CML-228.md` (execution log)
- `report/CML-228_ui_redundancy_reduction.md` (report)
- Aggiornamento `docs/REPO-MOVELOG.md`

**Vincoli**:
- Runtime increment
- Nessuna modifica curriculum JSON
- Nessuna modifica `.cml`/export/import
- Nessuna modifica validator/shape-test
- Nessun deploy, nessun push senza autorizzazione

**Criteri di accettazione**:
- Export unificato in unico pannello per tab
- Pannelli statici collassabili
- Sidebar discipline visibile solo in Consulta/Revisione
- Nomi pannelli corretti e non fuorvianti
- Nessun duplicato export buttons
- Validatore 14/14 PASS
- Shape test 14/14 PASS
- GitHub Pages HTTP 200

**Comandi verifica**:
```bash
git status -sb
git diff --check
node tools/validator.js
node tools/shape-test.js
```

**Verdetto atteso**: `CML_228_UI_REDUNDANCY_REDUCTION_COMPLETE`

### CML-228S: CONTROLLED_PUSH_UI_REDUNDANCY

**Obiettivo**: Push controllato di CML-228.

**Perimetro**:
- Pre-push checks (git status clean, diff-check, validator, shape-test)
- Push verso origin/main
- Verifica GitHub Pages

**Deliverables**:
- `docs/03_execution/CML-228S.md` (execution log)
- Aggiornamento `docs/REPO-MOVELOG.md`

**Verdetto atteso**: `CML_228S_UI_REDUNDANCY_PUSHED`

---

## Fase 5: Collegamento progettazione-curricolo (runtime)

### CML-229: PROGETTAZIONE-CURRICOLO-LINKING

**Obiettivo**: Collegare progettazione didattica a versione curricolare di riferimento.

**Perimetro**:
- Aggiungere sezione "Collegamenti curricolo" in Progettazione didattica (nuovo sotto-tab)
- Implementare lista progettazioni didattiche
- Per ogni progettazione: versione curricolare di riferimento, stato, data
- Implementare segnalazione progettazioni su versioni superate
- Implementare azione "Riallinea a nuova versione"
- Implementare registrazione obbligatoria: versione, stato, data, motivazione
- Implementare suggerimenti scenari (app propone, non decide)

**Non incluso**:
- Modifica curriculum JSON
- Modifica `.cml` schema
- Modifica export/import
- Modifica validator/shape-test
- Modifica service-worker/manifest

**Deliverables**:
- `_published_snapshot/netlify-current/index.html` (modificato)
- `docs/03_execution/CML-229.md` (execution log)
- `report/CML-229_progettazione_curricolo_linking.md` (report)
- Aggiornamento `docs/REPO-MOVELOG.md`

**Vincoli**:
- Runtime increment
- Nessuna modifica curriculum JSON
- Nessuna modifica `.cml`/export/import
- Nessuna modifica validator/shape-test
- Nessun deploy, nessun push senza autorizzazione

**Criteri di accettazione**:
- Sezione "Collegamenti curricolo" visibile e funzionante
- Lista progettazioni mostra versione riferimento
- Segnalazione progettazioni su versioni superate funzionante
- Azione "Riallinea" funzionante
- Registrazione obbligatoria implementata
- Suggerimenti scenari implementati
- Validatore 14/14 PASS
- Shape test 14/14 PASS
- GitHub Pages HTTP 200

**Comandi verifica**:
```bash
git status -sb
git diff --check
node tools/validator.js
node tools/shape-test.js
```

**Verdetto atteso**: `CML_229_PROGETTAZIONE_CURRICOLO_LINKING_COMPLETE`

### CML-229S: CONTROLLED_PUSH_PROGETTAZIONE_LINKING

**Obiettivo**: Push controllato di CML-229.

**Perimetro**:
- Pre-push checks (git status clean, diff-check, validator, shape-test)
- Push verso origin/main
- Verifica GitHub Pages

**Deliverables**:
- `docs/03_execution/CML-229S.md` (execution log)
- Aggiornamento `docs/REPO-MOVELOG.md`

**Verdetto atteso**: `CML_229S_PROGETTAZIONE_LINKING_PUSHED`

---

## Fase 6: Closure e verifica

### CML-230: UX-GOVERNANCE-CLOSURE-AUDIT

**Obiettivo**: Audit di closure per verificare che tutti i gap di CML-UX-FLOW-AUDIT siano stati risolti.

**Perimetro**:
- Verifica governance curricolare implementata
- Verifica gestione transizione IN2025 strutturata
- Verifica collegamento progettazione-curricolo implementato
- Verifica ridondanze UI ridotte
- Verifica superamento centratura Tecnologia
- Verifica casi d'uso mappati e implementati
- Smoke test end-to-end
- Verifica compatibilità con CML-224 release candidate

**Non incluso**:
- Modifiche runtime
- Modifica curriculum JSON
- Modifica `.cml`/export/import
- Nessun deploy, nessun push

**Deliverables**:
- `docs/03_execution/CML-230.md` (execution log)
- `report/CML-230_ux_governance_closure_audit.md` (report)
- Aggiornamento `docs/REPO-MOVELOG.md`

**Vincoli**:
- Docs-only
- Nessuna modifica runtime
- Nessuna modifica curriculum JSON
- Nessuna modifica `.cml`/export/import
- Nessun deploy, nessun push

**Criteri di accettazione**:
- Tutti i gap CML-UX-FLOW-AUDIT risolti
- Governance curricolare funzionante
- Ridondanze UI ridotte
- Centratura Tecnologia superata
- Collegamento progettazione-curricolo funzionante
- Validatore 14/14 PASS
- Shape test 14/14 PASS
- GitHub Pages HTTP 200
- Compatibilità CML-224 mantenuta

**Comandi verifica**:
```bash
git status -sb
git diff --check
node tools/validator.js
node tools/shape-test.js
```

**Verdetto atteso**: `CML_230_UX_GOVERNANCE_CLOSURE_AUDIT_READY`

### CML-230S: CONTROLLED_PUSH_CLOSURE

**Obiettivo**: Push controllato di CML-230.

**Perimetro**:
- Pre-push checks (git status clean, diff-check, validator, shape-test)
- Push verso origin/main
- Verifica GitHub Pages

**Deliverables**:
- `docs/03_execution/CML-230S.md` (execution log)
- Aggiornamento `docs/REPO-MOVELOG.md`

**Verdetto atteso**: `CML_230S_UX_GOVERNANCE_CLOSURE_PUSHED`

---

## Istruzioni per ripresa da altri agenti

### Stato iniziale
- Branch: `main`
- Commit base: `731cb8b` (CML-224S, aligned)
- Working tree: pulito
- Validatore: 14/14 PASS
- Shape test: 14/14 PASS

### Sequenza di esecuzione
1. Eseguire CML-225 (docs-only)
2. Eseguire CML-226 + CML-226S (runtime + push)
3. Eseguire CML-227 + CML-227S (runtime + push)
4. Eseguire CML-228 + CML-228S (runtime + push)
5. Eseguire CML-229 + CML-229S (runtime + push)
6. Eseguire CML-230 + CML-230S (docs-only + push)

### Comandi di verifica pre-slice
```bash
git status -sb
git log --oneline -1
git diff --check
node tools/validator.js
node tools/shape-test.js
```

### Comandi di verifica post-slice (runtime)
```bash
git status -sb
git diff --check
node tools/validator.js
node tools/shape-test.js
git add _published_snapshot/netlify-current/index.html docs/03_execution/CML-XXX.md report/CML-XXX_*.md docs/REPO-MOVELOG.md
git commit -m "runtime: CML-XXX description"
```

### Comandi di verifica pre-push
```bash
git status -sb
git diff --cached --check
node tools/validator.js
node tools/shape-test.js
git push origin main
git fetch origin
git status -sb
```

### Recovery in caso di errore
Se una slice fallisce:
1. Documentare l'errore nel report della slice
2. Rollback con `git reset --hard HEAD~1`
3. Aggiornare il piano con le modifiche necessarie
4. Riprovare con correzioni

### Tracking progresso
Aggiornare questo file con lo stato di ogni slice dopo il completamento:
- CML-225: [X]
- CML-226: [ ]
- CML-226S: [ ]
- CML-227: [ ]
- CML-227S: [ ]
- CML-228: [ ]
- CML-228S: [ ]
- CML-229: [ ]
- CML-229S: [ ]
- CML-230: [ ]
- CML-230S: [ ]

---

## Verdetto finale piano

`CML_UX_GOVERNANCE_IMPLEMENTATION_PLAN_READY`
