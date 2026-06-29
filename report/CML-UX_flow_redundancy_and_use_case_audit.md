# CML-UX Flow Redundancy and Use Case Audit Report

**Data**: 2026-06-27
**Slice**: CML-UX-FLOW-AUDIT
**Tipo**: docs-only audit
**Commit base**: `e68d22d`
**Branch**: `main`

## Executive Summary

Questo audit analizza l'interfaccia e il flusso utente di CurManLight per verificare se l'app sostiene correttamente:

1. approvazione del curricolo verticale di istituto;
2. gestione della transizione IN2025;
3. progettazione didattica collegata a una versione curricolare;
4. riallineamento delle progettazioni quando cambia il curricolo;
5. riduzione di scrolling, pulsanti ripetuti e sezioni ridondanti;
6. superamentodell'impostazione ancora centrata su Tecnologia;
7. mappatura esplicita dei casi d'uso scolastici.

**Verdetto principale**: L'app ha una solida base tecnica ma presenta significative lacune nella governance curricolare, nella gestione delle versioni e nella riduzione delle ridondanze UI. L'impostazione appare ancora centrata su Tecnologia anziché multi-disciplinare.

---

## 1. Mappa delle sezioni attuali dell'app

### 1.1 Struttura principale (tabbar)

| Tab                        | ID                 | Contenuto principale                 | Sotto-tab                              |
| -------------------------- | ------------------ | ------------------------------------ | -------------------------------------- |
| Home                       | `tab-home`         | Dashboard, microguida, quick actions | Nessuno                                |
| Curriculum                 | `tab-curricolo`    | Consultazione curricolo istituto     | Consulta, Revisione, Definitivo, Fonti |
| Competenze e progettazione | `tab-didattica`    | Evidenze, UDA modello                | Valutazione/Evidenze, UDA modello      |
| Esportazioni               | `tab-esportazioni` | Export multi-formato                 | Nessuno                                |
| Guida                      | `tab-guida`        | Documentazione                       | Nessuno                                |

### 1.2 Sotto-tab Curriculum (subnav-curriculum)

| Sotto-tab  | ID          | Funzione principale                            |
| ---------- | ----------- | ---------------------------------------------- |
| Consulta   | `curricolo` | Visualizzazione curricolo istituto (2012/2025) |
| Revisione  | `lavoro`    | Proposte di modifica, confronto 2012/2025      |
| Definitivo | `riepilogo` | Voci approvate + invariate                     |
| Fonti      | `normativa` | Riferimenti normativi                          |

### 1.3 Sotto-tab Competenze e progettazione (subnav-didattica)

| Sotto-tab              | ID              | Funzione principale           |
| ---------------------- | --------------- | ----------------------------- |
| Valutazione / Evidenze | `didattica`     | Evidenze per ordine di scuola |
| UDA modello            | `didattica_uda` | UDA di esempio                |

### 1.4 Azioni visibili per tab

**Home**:

- Quick actions: impostazioni, corso PDF, motto, guida rapida
- Microguida 5-step

**Curriculum/Consulta**:

- Version tabs: 2012 (vigente), 2025 (bozza)
- Navigazione discipline (pill)
- Pannelli statici: "Stato di completezza", "Readiness per approvazione"

**Curriculum/Revisione**:

- Toolbar: filtri, export (Word, Copy, Markdown, PDF, .cml, Drive)
- Sidebar discipline (default Tecnologia)
- Cards area con proposte
- tecnologia-export-panel (solo per Tecnologia)
- department-import-panel (Validazione dipartimentale)

**Curriculum/Definitivo**:

- Export group: Word (definitivo), altre esportazioni, .cml, Drive
- Riepilogo voci approvate

**Curriculum/Fonti**:

- Lista fonti normative
- Sidebar discipline (ridondante)

**Didattica**:

- Filtri per ordine di scuola (Tutti, Infanzia, Primaria, Secondaria)
- Lista evidenze
- Mappa disciplinare

**Esportazioni**:

- Export group per ogni formato

**Guida**:

- Card documentative

---

## 2. Ridondanze UI

### 2.1 Pulsanti ripetuti

**Export buttons**:

- Presenti in: toolbar (Revisione), export group (Definitivo), tecnologia-export-panel
- Funzioni duplicate: Word, Copy, Markdown, PDF, .cml, Drive
- Impatto: confusione utente, manutenzione complessa

**Scarica proposta / Invia al Drive**:

- Ripetuti in: Revisione e Definitivo
- Stessa funzionalità, contesti diversi
- Impatto: medio

**Word export**:

- "Word (confronto)" in Revisione
- "Word (definitivo)" in Definitivo
- Stesso bottone, contesto diverso
- Impatto: basso

### 2.2 Azioni fuori contesto

**Sidebar discipline**:

- Visibile in: tutti i sub-tab Curriculum
- Problema: in Fonti non è necessaria
- Impatto: medio (rumore visivo)

**Tecnologia-export-panel**:

- Visibile solo quando: `selDisc === 'Tecnologia'`
- Problema: export generale esiste per tutte le discipline
- Impatto: alto (percezione app centrata su Tecnologia)

**Department-import-panel**:

- Nome: "Validazione dipartimentale"
- Funzione reale: import proposte docenti
- Problema: nome fuorviante
- Impatto: alto (confusione ruolo)

**Referent-validation-panel**:

- Nome: "Verifica referente curricolo"
- Funzione reale: import esiti dipartimentali
- Problema: nome fuorviante
- Impatto: alto (confusione ruolo)

### 2.3 Eccesso di scrolling

**Curriculum/Consulta**:

- Lunga lista discipline senza accordion
- 14 discipline = molto scroll
- Impatto: medio

**Curriculum/Fonti**:

- Lista fonti non raggruppata
- Scroll verticale significativo
- Impatto: basso

**Didattica**:

- Lista evidenze senza filtri avanzati
- Scroll verticale significativo
- Impatto: medio

**Pannelli statici**:

- "Stato di completezza" e "Readiness per approvazione" non collassabili
- Occupano spazio fisso
- Impatto: basso

### 2.4 Sezioni ridondanti

**Due pannelli "Validazione dipartimentale"**:

1. `curricolo-validation`: validazione disciplina (in Revisione)
2. `department-import-panel`: import proposte docenti (in Revisione)

- Problema: stesso nome, funzioni diverse
- Impatto: alto (confusione)

**Contatori statici**:

- "Stato di completezza" e "Readiness per approvazione"
- Non sincronizzati con stato validazione reale
- Impatto: medio (informazione non affidabile)

**Export multipli**:

- Stessa funzionalità esposta in modi diversi
- Toolbar, export group, tecnologia-export-panel
- Impatto: medio (confusione)

---

## 3. Punti ancora centrati su Tecnologia

### 3.1 Default disciplinare

**Codice**:

```javascript
let selDisc = 'Tecnologia' // linea 2076
```

**Problema**:

- Sidebar evidenzia sempre Tecnologia al primo caricamento
- Hash navigation non inizializza selDisc
- Impatto: percezione app centrata su Tecnologia

**Fonte**: CML-111

### 3.2 Titoli hardcoded

**Codice**:

```javascript
function renderTecnologiaNorm() {
  // ...
  html +=
    '<div class="tecnologia-norm-title">Tecnologia — pacchetto curricolare normalizzato</div>' // linea 4718
}
```

**Problema**:

- Titolo fisso "Tecnologia — pacchetto curricolare normalizzato"
- Nessuna equivalente per le altre 13 discipline normalizzate
- Impatto: medio (Tecnologia appare privilegiata)

**Fonte**: CML-111

### 3.3 Pannelli specifici

**tecnologia-export-panel**:

```css
.tecnologia-export-panel { ... } /* linea 58 */
```

```javascript
if (selDisc === 'Tecnologia') {
  // mostra tecnologia-export-panel
} // linea 2501
```

**Problema**:

- Visibile solo per Tecnologia
- Export generale esiste per tutte le discipline
- Impatto: alto (percezione app centrata su Tecnologia)

**Fonte**: CML-111

### 3.4 Funzioni non generalizzate

**Funzioni specifiche Tecnologia**:

- `generateTecnologiaBozza()`
- `copyTecnologiaMarkdown()`
- `downloadTecnologiaMarkdown()`
- `renderTecnologiaNorm()`

**Problema**:

- Non generalizzate in `generateDisciplinaBozza(disc)`, `renderDisciplinaNorm(disc)`
- Impatto: alto (codice duplicato, manutenzione complessa)

**Fonte**: CML-111

### 3.5 Impatto sulla percezione dell'app

**Percezione utente**:

- L'app appare centrata su Tecnologia, non multi-disciplinare
- Le altre discipline sembrano "di seconda classe"
- Confusione sullo scopo dell'app (curricolo verticale vs disciplina singola)

**Impatto business**:

- Ridotta adozione da parte di docenti di altre discipline
- Percezione di strumento "non neutrale"
- Potenziale resistenza all'uso

---

## 4. Modello funzionale a tre piani

### 4.1 Piano 1: Curricolo di istituto

**Stato attuale**:

- Esiste visualizzazione curricolo istituto (Consulta)
- Versioni: 2012 (vigente), 2025 (bozza)
- Pannelli statici: completezza, readiness

**Problemi**:

- Nessuno stato formale (vigente, in_revisione, proposta, approvata, adottata, superata)
- Nessuna governance di approvazione istituzionale
- Contatori statici non sincronizzati con stato reale

**Gap**:

- Manca modello di stati di versione
- Manca tracciabilità storica
- Manca distinzione validazione/approvazione

### 4.2 Piano 2: Transizione IN2025

**Stato attuale**:

- Confronto 2012/2025 disponibile in Revisione
- Version tabs in Consulta
- Home microguida menziona transizione

**Problemi**:

- Nessun tracciamento dello stato di transizione
- Nessuna gestione del periodo transitorio
- Nessuna segnalazione di progettazioni su versioni superate

**Gap**:

- Manca modello di gestione del periodo transitorio
- Manca meccanismo di riallineamento progettazioni
- Manca tracciabilità decisioni transitorie

### 4.3 Piano 3: Progettazione didattica

**Stato attuale**:

- Sezione Competenze e progettazione con evidenze e UDA modello
- Filtri per ordine di scuola
- Mappa disciplinare

**Problemi**:

- Non collegata a versioni curricolari specifiche
- Nessun tracciamento versione curricolare di riferimento
- Nessuna segnalazione progettazioni su versioni superate

**Gap**:

- Manca legame progettazione ↔ versione curricolare
- Manca meccanismo di riallineamento
- Manca tracciabilità storica

---

## 5. Modello versioni curricolari

### 5.1 Stati attuali (impliciti)

| Versione | Stato attuale | Rappresentazione                |
| -------- | ------------- | ------------------------------- |
| 2012     | vigente       | Version tab "IN 2012 (vigente)" |
| 2025     | bozza         | Version tab "IN 2025 (bozza)"   |

### 5.2 Stati consigliati (espliciti)

| Stato        | Descrizione                                   | Transizioni da         |
| ------------ | --------------------------------------------- | ---------------------- |
| vigente      | Versione attualmente in uso                   | adottata               |
| in_revisione | Versione in fase di revisione                 | proposta, vigente      |
| proposta     | Versione proposta ma non ancora valutata      | in_revisione           |
| approvata    | Versione approvata dagli organi competenti    | proposta, in_revisione |
| adottata     | Versione adottata ufficialmente dall'istituto | approvata              |
| superata     | Versione non più in uso                       | adottata, vigente      |

### 5.3 Gap attuale

**Rappresentazione**:

- Nessuna rappresentazione esplicita degli stati
- Solo etichette implicite ("vigente", "bozza")

**Transizioni**:

- Nessuna transizione di stato automatizzata
- Nessuna tracciabilità storica

**Governance**:

- Nessuna distinzione validazione/approvazione
- Nessun tracciamento atti formali

---

## 6. Matrice di compatibilità su tre livelli

### 6.1 Livello 1: Compatibilità tecnica .cml

**Stato attuale**:

- Definito in CML-199 (schema v1.0)
- Tipi file: `teacher_proposal`, `department_outcome`
- Validazione: enforcement schemaVersion, item-level checks, duplicate detection

**Valutazione**: ✅ Completo

**Gap**: Compatibilità curricolare non definita

### 6.2 Livello 2: Compatibilità curricolare

**Stato attuale**: Non definito

**Problemi**:

- Una progettazione didattica può riferirsi a una versione curricolare non più vigente
- Nessun legame progettazione ↔ versione curricolare
- Nessun meccanismo di riallineamento quando cambia il curricolo

**Gap**:

- Manca modello di compatibilità curricolare
- Manca tracciamento versioni in progettazioni
- Manca segnalazione incoerenze

**Valutazione**: ❌ Mancante

### 6.3 Livello 3: Compatibilità istituzionale

**Stato attuale**: Non definito

**Problemi**:

- Non esiste distinzione tra validazione dipartimentale e approvazione istituzionale
- Nessuna governance degli stati di versione
- Nessuna tracciabilità degli atti formali (Collegio dei Docenti, Consiglio di Istituto)

**Gap**:

- Manca modello di governance istituzionale
- Manca tracciamento atti formali
- Manca distinzione ruoli/competenze

**Valutazione**: ❌ Mancante

---

## 7. Correzione istituzionale obbligatoria

### 7.1 Ruolo del referente

**Stato attuale**:

- Il referente appare come approvatore (referent-validation-panel)
- Microcopy: "Verifica referente curricolo"
- Azione: importa esiti dipartimentali

**Problema**: Il referente NON approva il curricolo

**Correzione**:

- Ruolo corretto: coordina, raccoglie esiti, prepara proposta, registra avanzamento
- Rimuovere qualsiasi pulsante "Approva definitivamente"
- Sostituire con "Registra stato di avanzamento"

### 7.2 Atti formali

**Stato attuale**: Non rappresentati

**Correzione**:

- Approvazione e adozione restano atti degli organi competenti
- Organi competenti: Collegio dei Docenti, Consiglio di Istituto
- L'app registra data e atto, non esegue l'atto

### 7.3 Impatto UI

**Modifiche richieste**:

- Rimuovere pulsanti "Approva definitivamente"
- Aggiungere campi per data e atto di approvazione/adozione
- Separare chiaramente validazione (dipartimento) da approvazione (organi collegiali)
- Microcopy chiaro su ruoli e competenze

---

## 8. Matrice "proposto → approvato" corretta

| Scenaro                              | Compatibilità                           | Azione richiesta                          | Note                                               |
| ------------------------------------ | --------------------------------------- | ----------------------------------------- | -------------------------------------------------- |
| Proposto → approvato senza modifiche | Compatibile                             | Nessuna azione                            | Versione coerente                                  |
| Proposto → approvato con modifiche   | Compatibile con avviso / da riallineare | Valutare se riallineare progettazioni     | Modifiche minori: avviso; maggiori: riallineamento |
| Proposto → rinviato                  | Valutazione umana richiesta             | Riconsiderare proposta                    | Richiede intervento umano                          |
| Proposto → approvazione parziale     | Da riallineare                          | Riallineare progettazioni interessate     | Solo parte approvata                               |
| Proposto → superato                  | Non più coerente                        | Aggiornare progettazioni a nuova versione | Versione non più valida                            |

---

## 9. Progettazione didattica nel periodo transitorio

### 9.1 Capacità del docente

**Stato attuale**:

- Il docente può progettare senza vincoli di versione
- Nessun tracciamento versione curricolare di riferimento

**Correzione**:

- Il docente può progettare anche su versioni non definitive
- Devono essere registrati: versione, stato, data, motivazione

### 9.2 Registrazione obbligatoria

Per ogni progettazione didattica:

- **Versione curricolare di riferimento**: 2012 o 2025
- **Stato della versione**: vigente, in_revisione, proposta, ecc.
- **Data di creazione**: timestamp progettazione
- **Motivazione della scelta**: perché questa versione?
- **Possibile riallineamento necessario**: flag se riallineamento richiesto

### 9.3 Ruolo dell'app

**Stato attuale**:

- L'app non propone scenari
- Nessuna segnalazione incoerenze

**Correzione**:

- L'app propone scenari, ma non decide
- Esempi di messaggi:
  - "Questa progettazione si riferisce a una versione superata. Vuoi riallinearla?"
  - "La versione curricolare di riferimento è in revisione. Considerare riallineamento dopo approvazione."
  - "Progettazione coerente con versione vigente. Nessuna azione richiesta."

---

## 10. Mappa dei casi d'uso

### 10.1 Dirigente / Referente

**Casi d'uso**:

- Consultare stato di avanzamento del curricolo
- Visualizzare completezza disciplinare
- Importare esiti dipartimentali
- Preparare report per organi collegiali
- Registrare stati di avanzamento (non approvare)

**Azioni UI richieste**:

- Dashboard stato avanzamento
- Tabella versioni con stati
- Import esiti dipartimentali
- Export report Markdown
- Registrazione stato avanzamento (data, atto, note)

### 10.2 Dipartimento

**Casi d'uso**:

- Importare proposte docenti
- Valutare proposte per disciplina
- Registrare esiti validazione
- Esportare esiti dipartimentali

**Azioni UI richieste**:

- Import batch .cml (teacher_proposal)
- Pannello validazione per disciplina
- Selezione esito: validata, validata_con_note, rinviata
- Export .cml (department_outcome)

### 10.3 Docente

**Casi d'uso**:

- Consultare curricolo vigente e proposte
- Proporre modifiche disciplinari
- Esportare proposta per dipartimento
- Progettare didattica su versione specifica
- Riallineare progettazioni quando cambia curricolo

**Azioni UI richieste**:

- Consultazione curricolo 2012/2025
- Proposta modifiche in Revisione
- Export .cml (teacher_proposal)
- Progettazione didattica con versione riferimento
- Riallineamento progettazione

### 10.4 Organi collegiali

**Casi d'uso**:

- Consultare report preparati dal referente
- Deliberare approvazione/adozione
- Atto formale fuori dall'app (registro ufficiale)

**Azioni UI richieste**:

- Consultazione report
- Nessuna azione diretta in app (atto formale esterno)

### 10.5 Progettazione didattica

**Casi d'uso**:

- Collegare progettazione a versione curricolare
- Tracciare versioni usate nelle progettazioni
- Segnalare progettazioni su versioni superate
- Proporre riallineamento

**Azioni UI richieste**:

- Selezione versione curricolare in progettazione
- Lista progettazioni con versione riferimento
- Segnalazione progettazioni su versioni superate
- Azione riallinea a nuova versione

### 10.6 Periodo transitorio IN2025

**Casi d'uso**:

- Gestire coesistenza 2012/2025
- Tracciare stato di transizione
- Supportare decisioni su tempistiche
- Documentare motivazioni delle scelte

**Azioni UI richieste**:

- Tabella versioni con stati
- Storico transizioni
- Campi motivazione decisioni
- Report transitorio

---

## 11. Wireframe testuale della nuova architettura informativa

### 11.1 Nuova struttura tabbar

```
🏠 Home
📚 Curricolo
  📖 Consulta
  ✏️ Revisione
  📋 Definitivo
  📜 Fonti
  🔄 Versioni (nuovo)
🧑‍🏫 Progettazione didattica
  📊 Evidenze
  📋 UDA modello
  🔗 Collegamenti curricolo (nuovo)
📤 Esportazioni
❔ Guida
```

### 11.2 Nuova sezione "Versioni"

**Layout**:

- Tabella versioni curricolari con stati
- Colonne: versione, stato, data, atto, note, azioni
- Filtro per stato
- Storico transizioni

**Azioni**:

- Visualizza dettaglio versione
- Registra avanzamento (non approvare)
- Aggiungi nota
- Esporta report versione

### 11.3 Nuova sezione "Collegamenti curricolo" in Progettazione

**Layout**:

- Lista progettazioni didattiche
- Per ogni progettazione: versione curricolare di riferimento, stato, data
- Segnalazione progettazioni su versioni superate
- Filtro per versione curricolare

**Azioni**:

- Crea nuova progettazione (con selezione versione)
- Modifica progettazione
- Riallinea a nuova versione
- Esporta progettazione

### 11.4 Rimozione ridondanze

**Unificare export**:

- Unico pannello export per tab
- Rimuovere duplicati toolbar/export group/tecnologia-export-panel
- Contestualizzare export in base al tab

**Generalizzare Tecnologia**:

- Rimuovere tecnologia-export-panel
- Generalizzare renderTecnologiaNorm() in renderDisciplinaNorm(disc)
- Rimuovere hardcoded "Tecnologia" dai titoli

**Collassare pannelli statici**:

- "Stato di completezza" e "Readiness per approvazione" collassabili
- Sincronizzare con stato validazione reale

**Ridurre sidebar discipline**:

- Visibile solo nei tab pertinenti (Consulta, Revisione)
- Nascosta in Fonti

### 11.5 Superamento centratura su Tecnologia

**Generalizzare funzioni**:

- renderTecnologiaNorm() → renderDisciplinaNorm(disc)
- generateTecnologiaBozza() → generateDisciplinaBozza(disc)
- copyTecnologiaMarkdown() → copyDisciplinaMarkdown(disc)
- downloadTecnologiaMarkdown() → downloadDisciplinaMarkdown(disc)

**Default disciplina**:

- Prima in ordine alfabetico o ultima usata
- Non hardcoded "Tecnologia"

**Rimuovere hardcoded**:

- Titoli dinamici basati su disciplina
- Classi CSS generalizzate

---

## 12. Rischi di regressione e mitigazioni

### 12.1 Rimozione pulsanti

**Rischio**: Utenti non trovano più funzionalità

**Mitigazione**:

- Mantenere export in posizione prominente
- Testare con utenti reali
- Guida rapida aggiornata
- Tooltip contestuali

### 12.2 Perdita orientamento utente

**Rischio**: Nuova struttura confonde gli utenti abituali

**Mitigazione**:

- Guida rapida aggiornata
- Tooltip in-context
- Onboarding per nuovi utenti
- Mantenere percorsi esistenti dove possibile

### 12.3 Regressioni export/import

**Rischio**: Modifiche rompono flussi esistenti

**Mitigazione**:

- Smoke test end-to-end
- Mantenere compatibilità .cml v1.0
- Test con file .cml esistenti
- Rollback plan

### 12.4 Confusione validazione/approvazione

**Rischio**: Utenti non distinguono validazione da approvazione

**Mitigazione**:

- Microcopy chiaro
- Separazione UI pannelli
- Guida dedicata
- Esempi concreti

### 12.5 Eccessiva complessità degli stati

**Rischio**: Troppi stati confondono gli utenti

**Mitigazione**:

- Semplificare a stati essenziali
- Nascondere dettagli avanzati
- Progress disclosure
- Default semplici

### 12.6 Automatismi percepiti come decisioni

**Rischio**: Utenti pensano che l'app decida per loro

**Mitigazione**:

- Esplicitare che l'app propone, non decide
- Messaggi chiari: "Suggerimento", non "Decisione"
- Conferma utente per azioni critiche
- Log decisionale trasparente

---

## 13. Prossima slice consigliata

**CML-UX-MENU-ACTION-CONTRACT**

### Perimetro

- Definire contratto per nuova architettura informativa
- Specificare nuovo tabbar e sotto-tab
- Definire sezione "Versioni" e "Collegamenti curricolo"
- Mappare azioni per ogni ruolo
- Specificare mitigazioni rischi di regressione

### Non incluso

- Microfix runtime diretto
- Implementazione nuova UI
- Modifica comportamento esistente

### Deliverables

- Contratto architettura informativa
- Mockup testuali
- Matrice azioni/ruoli
- Piano mitigazione rischi

---

## Conclusioni

### Gap critici identificati

1. **Governance curricolare**: Manca modello di stati di versione e distinzione validazione/approvazione
2. **Gestione transizione**: Manca tracciamento periodo transitorio IN2025
3. **Collegamento progettazione-curricolo**: Manca legame tra progettazione didattica e versione curricolare
4. **Ridondanze UI**: Pulsanti ripetuti, sezioni ridondanti, eccesso scrolling
5. **Centratura su Tecnologia**: App appare centrata su Tecnologia, non multi-disciplinare

### Raccomandazioni prioritarie

1. **Immediato**: Correzione istituzionale (referente non approva)
2. **Breve termine**: Definizione modello stati versione
3. **Medio termine**: Implementazione sezione "Versioni"
4. **Lungo termine**: Collegamento progettazione-curricolo

### Verdetto finale

L'app ha una solida base tecnica ma richiede significativi miglioramenti nella governance curricolare, nella gestione delle versioni e nella riduzione delle ridondanze UI. La prossima slice dovrebbe focalizzarsi sulla definizione del contratto per la nuova architettura informativa (CML-UX-MENU-ACTION-CONTRACT).

`CML_UX_FLOW_AUDIT_READY`
