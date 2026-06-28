# UX-MENU-ACTION-CONTRACT

**Versione**: 1.0
**Data**: 2026-06-28
**Audit riferimento**: CML-UX-FLOW-AUDIT (aff4981)
**Piano riferimento**: CML-UX-GOVERNANCE-IMPLEMENTATION-PLAN (8fb01ca)

## 1. Obiettivo

Definire il contratto per la nuova architettura informativa di CurManLight, includendo:
- Nuova struttura tabbar e sotto-tab
- Modello stati versione curricolare
- Collegamento progettazione-curricolo
- Mappatura azioni per ruolo
- Mitigazioni rischi di regressione

Questo contratto deve essere approvato prima di qualsiasi modifica runtime.

## 2. Nuova struttura tabbar

### 2.1 Tabbar principale

```
🏠 Home
📚 Curricolo
🧑‍🏫 Progettazione didattica
📤 Esportazioni
❔ Guida
```

### 2.2 Sotto-tab Curriculum

```
📖 Consulta
✏️ Revisione
📋 Definitivo
📜 Fonti
🔄 Versioni (nuovo)
```

### 2.3 Sotto-tab Progettazione didattica

```
📊 Evidenze
📋 UDA modello
🔗 Collegamenti curricolo (nuovo)
```

## 3. Sezione "Versioni" (nuovo sotto-tab Curriculum)

### 3.1 Posizione
- Tab: Curriculum
- Sotto-tab: Versioni
- ID: `tab-versioni`

### 3.2 Layout

**Tabella versioni curricolari**:
- Colonne: versione, stato, data, atto, note, azioni
- Filtro per stato
- Storico transizioni

### 3.3 Stati versione

| Stato | Descrizione | Transizioni da |
|-------|-------------|----------------|
| vigente | Versione attualmente in uso | adottata |
| in_revisione | Versione in fase di revisione | proposta, vigente |
| proposta | Versione proposta ma non ancora valutata | in_revisione |
| approvata | Versione approvata dagli organi competenti | proposta, in_revisione |
| adottata | Versione adottata ufficialmente dall'istituto | approvata |
| superata | Versione non più in uso | adottata, vigente |

### 3.4 Azioni per versione

- **Visualizza dettaglio**: mostra contenuti versione
- **Registra avanzamento**: registra stato avanzamento (non approva)
- **Aggiungi nota**: aggiunge nota alla versione
- **Esporta report**: esporta report versione

### 3.5 Campi per registrazione avanzamento

- Data registrazione
- Tipo atto (es. delibera Collegio dei Docenti, delibera Consiglio di Istituto)
- Numero atto
- Note
- Motivazione

### 3.6 Storico transizioni

- Tabella storico con: data, stato precedente, stato nuovo, atto, note
- Filtro per data
- Esportazione storico

## 4. Sezione "Collegamenti curricolo" (nuovo sotto-tab Progettazione)

### 4.1 Posizione
- Tab: Progettazione didattica
- Sotto-tab: Collegamenti curricolo
- ID: `tab-collegamenti-curricolo`

### 4.2 Layout

**Lista progettazioni didattiche**:
- Per ogni progettazione: titolo, versione curricolare di riferimento, stato versione, data creazione, azioni
- Filtro per versione curricolare
- Filtro per stato versione
- Segnalazione progettazioni su versioni superate

### 4.3 Campi progettazione

- Titolo progettazione
- Versione curricolare di riferimento (2012, 2025, ecc.)
- Stato versione (vigente, in_revisione, proposta, ecc.)
- Data creazione
- Motivazione scelta versione
- Flag riallineamento necessario
- Note

### 4.4 Azioni progettazione

- **Crea nuova progettazione**: con selezione versione curricolare
- **Modifica progettazione**: modifica campi
- **Riallinea a nuova versione**: riallinea progettazione a versione corrente
- **Esporta progettazione**: esporta progettazione

### 4.5 Segnalazioni

- **Versione superata**: "Questa progettazione si riferisce a una versione superata. Vuoi riallinearla?"
- **Versione in revisione**: "La versione curricolare di riferimento è in revisione. Considerare riallineamento dopo approvazione."
- **Versione coerente**: "Progettazione coerente con versione vigente. Nessuna azione richiesta."

## 5. Rimozione ridondanze UI

### 5.1 Export unificato

- Unico pannello export per tab
- Contestualizzazione export in base al tab
- Rimozione duplicati toolbar/export group

### 5.2 Pannelli statici

- "Stato di completezza" e "Readiness per approvazione" collassabili
- Sincronizzazione con stato validazione reale

### 5.3 Sidebar discipline

- Visibile solo nei tab pertinenti (Consulta, Revisione)
- Nascosta in Fonti

### 5.4 Rinomine pannelli

- `department-import-panel` → "Importa proposte docenti"
- `referent-validation-panel` → "Importa esiti dipartimentali"

## 6. Superamento centratura su Tecnologia

### 6.1 Generalizzazione funzioni

- `renderTecnologiaNorm()` → `renderDisciplinaNorm(disc)`
- `generateTecnologiaBozza()` → `generateDisciplinaBozza(disc)`
- `copyTecnologiaMarkdown()` → `copyDisciplinaMarkdown(disc)`
- `downloadTecnologiaMarkdown()` → `downloadDisciplinaMarkdown(disc)`

### 6.2 Rimozione hardcoded

- Titoli dinamici basati su disciplina selezionata
- Rimozione classi CSS specifiche (`.tecnologia-export-panel`, `.tecnologia-norm`, `.tecnologia-md-preview`)

### 6.3 Default disciplina

- Prima in ordine alfabetico o ultima usata
- Non hardcoded "Tecnologia"

## 7. Mappatura azioni per ruolo

### 7.1 Dirigente / Referente

| Azione | Sezione | Descrizione |
|--------|---------|-------------|
| Consultare stato avanzamento curricolo | Versioni | Visualizza tabella versioni con stati |
| Visualizzare completezza disciplinare | Consulta | Visualizza contatori completezza |
| Importare esiti dipartimentali | Revisione | Importa file .cml department_outcome |
| Preparare report organi collegiali | Versioni | Esporta report versione |
| Registrare stato avanzamento | Versioni | Registra avanzamento (non approva) |

### 7.2 Dipartimento

| Azione | Sezione | Descrizione |
|--------|---------|-------------|
| Importare proposte docenti | Revisione | Importa file .cml teacher_proposal |
| Valutare proposte disciplina | Revisione | Valuta proposte per disciplina |
- Registrare esiti validazione | Revisione | Registra esito (validata, validata_con_note, rinviata) |
| Esportare esiti dipartimentali | Revisione | Esporta file .cml department_outcome |

### 7.3 Docente

| Azione | Sezione | Descrizione |
|--------|---------|-------------|
| Consultare curricolo vigente | Consulta | Visualizza curricolo 2012 |
| Consultare proposte | Revisione | Visualizza confronto 2012/2025 |
| Proporre modifiche disciplinari | Revisione | Propone modifiche in Revisione |
| Esportare proposta dipartimento | Revisione | Esporta file .cml teacher_proposal |
| Progettare didattica versione specifica | Collegamenti curricolo | Crea progettazione con versione riferimento |
| Riallineare progettazioni | Collegamenti curricolo | Riallinea progettazione a nuova versione |

### 7.4 Organi collegiali

| Azione | Sezione | Descrizione |
|--------|---------|-------------|
| Consultare report referente | Versioni | Visualizza report preparati |
| Deliberare approvazione/adozione | Esterno | Atto formale fuori dall'app (registro ufficiale) |

## 8. Correzione istituzionale obbligatoria

### 8.1 Ruolo referente

- Il referente **NON approva** il curricolo
- Ruolo corretto: coordina, raccoglie esiti, prepara proposta, registra avanzamento

### 8.2 Atti formali

- Approvazione e adozione restano atti degli organi competenti
- Organi competenti: Collegio dei Docenti, Consiglio di Istituto
- L'app registra data e atto, non esegue l'atto

### 8.3 Impatto UI

- Rimuovere qualsiasi pulsante "Approva definitivamente"
- Sostituire con "Registra stato di avanzamento"
- Aggiungere campi per data e atto di approvazione/adozione

## 9. Matrice compatibilità

### 9.1 Livello 1: Compatibilità tecnica .cml

- Definito in CML-199 (schema v1.0)
- Tipi file: `teacher_proposal`, `department_outcome`
- Validazione: enforcement schemaVersion, item-level checks, duplicate detection

### 9.2 Livello 2: Compatibilità curricolare

- Progettazione didattica collegata a versione curricolare
- Segnalazione progettazioni su versioni superate
- Meccanismo riallineamento quando cambia curricolo

### 9.3 Livello 3: Compatibilità istituzionale

- Distinzione validazione dipartimentale vs approvazione istituzionale
- Governance stati versione
- Tracciabilità atti formali

## 10. Rischi di regressione e mitigazioni

### 10.1 Rimozione pulsanti

**Rischio**: Utenti non trovano più funzionalità

**Mitigazione**:
- Mantenere export in posizione prominente
- Testare con utenti reali
- Guida rapida aggiornata

### 10.2 Perdita orientamento utente

**Rischio**: Nuova struttura confonde utenti abituali

**Mitigazione**:
- Guida rapida aggiornata
- Tooltip in-context
- Onboarding per nuovi utenti
- Mantenere percorsi esistenti dove possibile

### 10.3 Regressioni export/import

**Rischio**: Modifiche rompono flussi esistenti

**Mitigazione**:
- Smoke test end-to-end
- Mantenere compatibilità .cml v1.0
- Test con file .cml esistenti
- Rollback plan

### 10.4 Confusione validazione/approvazione

**Rischio**: Utenti non distinguono validazione da approvazione

**Mitigazione**:
- Microcopy chiaro
- Separazione UI pannelli
- Guida dedicata
- Esempi concreti

### 10.5 Eccessiva complessità stati

**Rischio**: Troppi stati confondono utenti

**Mitigazione**:
- Semplificare a stati essenziali
- Nascondere dettagli avanzati
- Progress disclosure
- Default semplici

### 10.6 Automatismi percepiti come decisioni

**Rischio**: Utenti pensano che l'app decida per loro

**Mitigazione**:
- Esplicitare che l'app propone, non decide
- Messaggi chiari: "Suggerimento", non "Decisione"
- Conferma utente per azioni critiche
- Log decisionale trasparente

## 11. Criteri di accettazione

### 11.1 Criteri contratto

- Contratto definisce chiaramente nuova struttura tabbar
- Contratto definisce stati versione (vigente, in_revisione, proposta, approvata, adottata, superata)
- Contratto definisce matrice azioni/ruoli
- Contratto definisce mitigazioni rischi
- Report verifica coerenza con CML-UX-FLOW-AUDIT

### 11.2 Criteri implementazione (fasi successive)

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

## 12. Prossima slice

Dopo approvazione di questo contratto, procedere con:
- CML-226: Multi-discipline generalization (runtime)
- CML-227: Curriculum version states (runtime)
- CML-228: UI redundancy reduction (runtime)
- CML-229: Progettazione-curricolo linking (runtime)
- CML-230: Closure audit (docs-only)

## 13. Approvazione

Questo contratto deve essere approvato prima di procedere con qualsiasi modifica runtime.

**Stato**: [ ] Approvato / [ ] Da approvare
**Data approvazione**: ___________
**Approvato da**: ___________
