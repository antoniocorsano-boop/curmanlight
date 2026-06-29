# CML-225 UX Menu Action Contract Report

**Data**: 2026-06-28
**Slice**: CML-225 — UX-MENU-ACTION-CONTRACT
**Tipo**: docs-only contract
**Commit base**: `8fb01ca` (CML-UX-GOVERNANCE-IMPLEMENTATION-PLAN, aligned)
**Branch**: `main`

## Executive Summary

Questo report documenta la creazione del contratto per la nuova architettura informativa di CurManLight, definito per risolvere i gap identificati nell'audit CML-UX-FLOW-AUDIT. Il contratto definisce la nuova struttura UI, il modello di stati versione curricolare, il collegamento progettazione-curricolo, la mappatura azioni per ruolo e le mitigazioni dei rischi di regressione.

**Verdetto**: `CML_225_UX_MENU_ACTION_CONTRACT_READY`

---

## Contesto

### Audit riferimento

L'audit CML-UX-FLOW-AUDIT (aff4981) ha identificato i seguenti gap critici:

1. Governance curricolare mancante (stati versione, validazione/approvazione)
2. Gestione transizione IN2025 non strutturata
3. Collegamento progettazione-curricolo assente
4. Ridondanze UI (pulsanti ripetuti, sezioni ridondanti)
5. Centratura su Tecnologia (hardcoded, funzioni non generalizzate)

### Piano implementazione

Il piano CML-UX-GOVERNANCE-IMPLEMENTATION-PLAN (8fb01ca) definisce 6 fasi sequenziali:

- Fase 1: Contratto architettura informativa (docs-only) → CML-225
- Fase 2: Generalizzazione multi-disciplinare (runtime) → CML-226
- Fase 3: Governance stati versione (runtime) → CML-227
- Fase 4: Riduzione ridondanze UI (runtime) → CML-228
- Fase 5: Collegamento progettazione-curricolo (runtime) → CML-229
- Fase 6: Closure e verifica (docs-only) → CML-230

CML-225 è la prima slice del piano e deve essere completata prima di qualsiasi modifica runtime.

---

## Deliverables

### 1. Contratto architettura informativa

**File**: `docs/02_system/UX-MENU-ACTION-CONTRACT.md`

**Sezioni**:

1. Obiettivo
2. Nuova struttura tabbar
3. Sezione "Versioni" (nuovo sotto-tab Curriculum)
4. Sezione "Collegamenti curricolo" (nuovo sotto-tab Progettazione)
5. Rimozione ridondanze UI
6. Superamento centratura su Tecnologia
7. Mappatura azioni per ruolo
8. Correzione istituzionale obbligatoria
9. Matrice compatibilità
10. Rischi di regressione e mitigazioni
11. Criteri di accettazione
12. Prossima slice
13. Approvazione

### 2. Execution log

**File**: `docs/03_execution/CML-225.md`

**Contenuto**:

- Contesto
- Fonti analizzate
- Obiettivo
- Deliverables
- Vincoli
- Esecuzione
- Verifiche
- Criteri di accettazione
- Verdetto

### 3. Report

**File**: `report/CML-225_ux_menu_action_contract.md` (questo file)

### 4. REPO-MOVELOG aggiornamento

**File**: `docs/REPO-MOVELOG.md`

---

## Nuova struttura tabbar

### Tabbar principale

```
🏠 Home
📚 Curricolo
🧑‍🏫 Progettazione didattica
📤 Esportazioni
❔ Guida
```

### Sotto-tab Curriculum

```
📖 Consulta
✏️ Revisione
📋 Definitivo
📜 Fonti
🔄 Versioni (nuovo)
```

### Sotto-tab Progettazione didattica

```
📊 Evidenze
📋 UDA modello
🔗 Collegamenti curricolo (nuovo)
```

---

## Sezione "Versioni"

### Posizione

- Tab: Curriculum
- Sotto-tab: Versioni
- ID: `tab-versioni`

### Layout

**Tabella versioni curricolari**:

- Colonne: versione, stato, data, atto, note, azioni
- Filtro per stato
- Storico transizioni

### Stati versione

| Stato        | Descrizione                                   | Transizioni da         |
| ------------ | --------------------------------------------- | ---------------------- |
| vigente      | Versione attualmente in uso                   | adottata               |
| in_revisione | Versione in fase di revisione                 | proposta, vigente      |
| proposta     | Versione proposta ma non ancora valutata      | in_revisione           |
| approvata    | Versione approvata dagli organi competenti    | proposta, in_revisione |
| adottata     | Versione adottata ufficialmente dall'istituto | approvata              |
| superata     | Versione non più in uso                       | adottata, vigente      |

### Azioni per versione

- Visualizza dettaglio
- Registra avanzamento (non approva)
- Aggiungi nota
- Esporta report

### Campi registrazione avanzamento

- Data registrazione
- Tipo atto (delibera Collegio dei Docenti, delibera Consiglio di Istituto)
- Numero atto
- Note
- Motivazione

---

## Sezione "Collegamenti curricolo"

### Posizione

- Tab: Progettazione didattica
- Sotto-tab: Collegamenti curricolo
- ID: `tab-collegamenti-curricolo`

### Layout

**Lista progettazioni didattiche**:

- Per ogni progettazione: titolo, versione curricolare di riferimento, stato versione, data creazione, azioni
- Filtro per versione curricolare
- Filtro per stato versione
- Segnalazione progettazioni su versioni superate

### Campi progettazione

- Titolo progettazione
- Versione curricolare di riferimento (2012, 2025, ecc.)
- Stato versione (vigente, in_revisione, proposta, ecc.)
- Data creazione
- Motivazione scelta versione
- Flag riallineamento necessario
- Note

### Azioni progettazione

- Crea nuova progettazione (con selezione versione curricolare)
- Modifica progettazione
- Riallinea a nuova versione
- Esporta progettazione

### Segnalazioni

- **Versione superata**: "Questa progettazione si riferisce a una versione superata. Vuoi rialinearla?"
- **Versione in revisione**: "La versione curricolare di riferimento è in revisione. Considerare riallineamento dopo approvazione."
- **Versione coerente**: "Progettazione coerente con versione vigente. Nessuna azione richiesta."

---

## Rimozione ridondanze UI

### Export unificato

- Unico pannello export per tab
- Contestualizzazione export in base al tab
- Rimozione duplicati toolbar/export group

### Pannelli statici

- "Stato di completezza" e "Readiness per approvazione" collassabili
- Sincronizzazione con stato validazione reale

### Sidebar discipline

- Visibile solo nei tab pertinenti (Consulta, Revisione)
- Nascosta in Fonti

### Rinomine pannelli

- `department-import-panel` → "Importa proposte docenti"
- `referent-validation-panel` → "Importa esiti dipartimentali"

---

## Superamento centratura su Tecnologia

### Generalizzazione funzioni

- `renderTecnologiaNorm()` → `renderDisciplinaNorm(disc)`
- `generateTecnologiaBozza()` → `generateDisciplinaBozza(disc)`
- `copyTecnologiaMarkdown()` → `copyDisciplinaMarkdown(disc)`
- `downloadTecnologiaMarkdown()` → `downloadDisciplinaMarkdown(disc)`

### Rimozione hardcoded

- Titoli dinamici basati su disciplina selezionata
- Rimozione classi CSS specifiche (`.tecnologia-export-panel`, `.tecnologia-norm`, `.tecnologia-md-preview`)

### Default disciplina

- Prima in ordine alfabetico o ultima usata
- Non hardcoded "Tecnologia"

---

## Mappatura azioni per ruolo

### Dirigente / Referente

| Azione                                 | Sezione   | Descrizione                           |
| -------------------------------------- | --------- | ------------------------------------- |
| Consultare stato avanzamento curricolo | Versioni  | Visualizza tabella versioni con stati |
| Visualizzare completezza disciplinare  | Consulta  | Visualizza contatori completezza      |
| Importare esiti dipartimentali         | Revisione | Importa file .cml department_outcome  |
| Preparare report organi collegiali     | Versioni  | Esporta report versione               |
| Registrare stato avanzamento           | Versioni  | Registra avanzamento (non approva)    |

### Dipartimento

| Azione                         | Sezione   | Descrizione                                            |
| ------------------------------ | --------- | ------------------------------------------------------ |
| Importare proposte docenti     | Revisione | Importa file .cml teacher_proposal                     |
| Valutare proposte disciplina   | Revisione | Valuta proposte per disciplina                         |
| Registrare esiti validazione   | Revisione | Registra esito (validata, validata_con_note, rinviata) |
| Esportare esiti dipartimentali | Revisione | Esporta file .cml department_outcome                   |

### Docente

| Azione                                  | Sezione                | Descrizione                                 |
| --------------------------------------- | ---------------------- | ------------------------------------------- |
| Consultare curricolo vigente            | Consulta               | Visualizza curricolo 2012                   |
| Consultare proposte                     | Revisione              | Visualizza confronto 2012/2025              |
| Proporre modifiche disciplinari         | Revisione              | Propone modifiche in Revisione              |
| Esportare proposta dipartimento         | Revisione              | Esporta file .cml teacher_proposal          |
| Progettare didattica versione specifica | Collegamenti curricolo | Crea progettazione con versione riferimento |
| Riallineare progettazioni               | Collegamenti curricolo | Riallinea progettazione a nuova versione    |

### Organi collegiali

| Azione                           | Sezione  | Descrizione                                      |
| -------------------------------- | -------- | ------------------------------------------------ |
| Consultare report referente      | Versioni | Visualizza report preparati                      |
| Deliberare approvazione/adozione | Esterno  | Atto formale fuori dall'app (registro ufficiale) |

---

## Correzione istituzionale obbligatoria

### Ruolo referente

- Il referente **NON approva** il curricolo
- Ruolo corretto: coordina, raccoglie esiti, prepara proposta, registra avanzamento

### Atti formali

- Approvazione e adozione restano atti degli organi competenti
- Organi competenti: Collegio dei Docenti, Consiglio di Istituto
- L'app registra data e atto, non esegue l'atto

### Impatto UI

- Rimuovere qualsiasi pulsante "Approva definitivamente"
- Sostituire con "Registra stato di avanzamento"
- Aggiungere campi per data e atto di approvazione/adozione

---

## Matrice compatibilità

### Livello 1: Compatibilità tecnica .cml

- Definito in CML-199 (schema v1.0)
- Tipi file: `teacher_proposal`, `department_outcome`
- Validazione: enforcement schemaVersion, item-level checks, duplicate detection

### Livello 2: Compatibilità curricolare

- Progettazione didattica collegata a versione curricolare
- Segnalazione progettazioni su versioni superate
- Meccanismo riallineamento quando cambia curricolo

### Livello 3: Compatibilità istituzionale

- Distinzione validazione dipartimentale vs approvazione istituzionale
- Governance stati versione
- Tracciabilità atti formali

---

## Rischi di regressione e mitigazioni

### 1. Rimozione pulsanti

**Rischio**: Utenti non trovano più funzionalità
**Mitigazione**: Mantenere export in posizione prominente, testare con utenti reali, guida rapida aggiornata

### 2. Perdita orientamento utente

**Rischio**: Nuova struttura confonde utenti abituali
**Mitigazione**: Guida rapida aggiornata, tooltip in-context, onboarding per nuovi utenti, mantenere percorsi esistenti dove possibile

### 3. Regressioni export/import

**Rischio**: Modifiche rompono flussi esistenti
**Mitigazione**: Smoke test end-to-end, mantenere compatibilità .cml v1.0, test con file .cml esistenti, rollback plan

### 4. Confusione validazione/approvazione

**Rischio**: Utenti non distinguono validazione da approvazione
**Mitigazione**: Microcopy chiaro, separazione UI pannelli, guida dedicata, esempi concreti

### 5. Eccessiva complessità stati

**Rischio**: Troppi stati confondono utenti
**Mitigazione**: Semplificare a stati essenziali, nascondere dettagli avanzati, progress disclosure, default semplici

### 6. Automatismi percepiti come decisioni

**Rischio**: Utenti pensano che l'app decida per loro
**Mitigazione**: Esplicitare che l'app propone, non decide, messaggi chiari "Suggerimento" non "Decisione", conferma utente per azioni critiche, log decisionale trasparente

---

## Criteri di accettazione

### Criteri contratto

- [x] Contratto definisce chiaramente nuova struttura tabbar
- [x] Contratto definisce stati versione (vigente, in_revisione, proposta, approvata, adottata, superata)
- [x] Contratto definisce matrice azioni/ruoli
- [x] Contratto definisce mitigazioni rischi
- [x] Report verifica coerenza con CML-UX-FLOW-AUDIT

### Criteri implementazione (fasi successive)

- Sezione "Versioni" visibile e funzionante
- Sezione "Collegamenti curricolo" visibile e funzionante
- Tutte le 14 discipline hanno export panel funzionante
- Default disciplina non hardcoded "Tecnologia"
- Titoli dinamici basati su disciplina selezionata
- Nessuna classe CSS specifica Tecnologia
- Pannelli statici collassabili
- Sidebar discipline visibile solo in Consulta/Revisione
- Nomi pannelli corretti e non fuorvianti
- Nessun duplicato export buttons
- Validatore 14/14 PASS
- Shape test 14/14 PASS
- GitHub Pages HTTP 200

---

## Verifiche eseguite

### Git status

```bash
git status -sb
```

**Risultato**: `## main...origin/main` (allineato)

### Git diff check

```bash
git diff --check
```

**Risultato**: Nessun errore

### Validatore

```bash
node tools/validator.js
```

**Risultato**: 14/14 PASS

### Shape test

```bash
node tools/shape-test.js
```

**Risultato**: 14/14 PASS

---

## Coerenza con audit e piano

### Coerenza con CML-UX-FLOW-AUDIT

- Governance curricolare mancante → ✅ Risolto in contratto (sezione Versioni)
- Gestione transizione IN2025 non strutturata → ✅ Risolto in contratto (stati versione)
- Collegamento progettazione-curricolo assente → ✅ Risolto in contratto (sezione Collegamenti curricolo)
- Ridondanze UI → ✅ Risolto in contratto (sezione Rimozione ridondanze)
- Centratura su Tecnologia → ✅ Risolto in contratto (sezione Superamento centratura)

### Coerenza con CML-UX-GOVERNANCE-IMPLEMENTATION-PLAN

- Fase 1: Contratto architettura informativa (docs-only) → ✅ CML-225
- Fase 2: Generalizzazione multi-disciplinare (runtime) → CML-226
- Fase 3: Governance stati versione (runtime) → CML-227
- Fase 4: Riduzione ridondanze UI (runtime) → CML-228
- Fase 5: Collegamento progettazione-curricolo (runtime) → CML-229
- Fase 6: Closure e verifica (docs-only) → CML-230

---

## Vincoli rispettati

- [x] Docs-only
- [x] Nessuna modifica runtime
- [x] Nessuna modifica curriculum JSON
- [x] Nessuna modifica `.cml`/export/import
- [x] Nessun deploy
- [x] Nessun push

---

## Prossima slice

CML-226: Multi-discipline generalization (runtime)

**Obiettivo**: Generalizzare funzioni hardcoded Tecnologia per supportare tutte le 14 discipline.

---

## Conclusioni

Il contratto UX-MENU-ACTION-CONTRACT è stato definito con successo. Il contratto risolve tutti i gap identificati nell'audit CML-UX-FLOW-AUDIT ed è coerente con il piano di implementazione CML-UX-GOVERNANCE-IMPLEMENTATION-PLAN.

Il contratto deve essere approvato prima di procedere con qualsiasi modifica runtime. Una volta approvato, la prossima slice sarà CML-226 (Multi-discipline generalization).

---

## Verdetto finale

`CML_225_UX_MENU_ACTION_CONTRACT_READY`
