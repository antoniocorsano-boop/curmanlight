# CML-UX-FLOW-AUDIT — AUDIT CASI D'USO, RIDONDANZE UI E GOVERNANCE CURRICOLO

## Contesto
- Branch: `main`
- Commit iniziale: `e68d22d`
- Working tree: pulito
- Stato disciplinare: 14/14 complete
- Tipo slice: docs-only audit

## Fonti analizzate
- `_published_snapshot/netlify-current/index.html` (runtime effettivo)
- `docs/03_execution/CML-111.md` (navigazione disciplinare, hash, sidebar)
- `docs/03_execution/CML-113.md` (validazione dipartimentale)
- `docs/03_execution/CML-018.md` (ruoli Docente/Dipartimento/Referente)
- `docs/03_execution/CML-199.md` (schema .cml v1.0, compatibilità)

## Obiettivo
Analizzare l'interfaccia e il flusso utente per verificare se l'app sostiene:
1. approvazione del curricolo verticale di istituto;
2. gestione della transizione IN2025;
3. progettazione didattica collegata a una versione curricolare;
4. riallineamento delle progettazioni quando cambia il curricolo;
5. riduzione di scrolling, pulsanti ripetuti e sezioni ridondanti;
6. superamento dell'impostazione ancora centrata su Tecnologia;
7. mappatura esplicita dei casi d'uso scolastici.

## 1. Mappa delle sezioni attuali dell'app

### Struttura principale (tabbar)
- **Home** (`tab-home`): dashboard, microguida, quick actions
- **Curriculum** (`tab-curricolo`): consultazione curricolo istituto
- **Competenze e progettazione** (`tab-didattica`): evidenze, UDA modello
- **Esportazioni** (`tab-esportazioni`): export multi-formato
- **Guida** (`tab-guida`): documentazione

### Sotto-tab Curriculum (subnav-curriculum)
- **Consulta** (`curricolo`): visualizzazione curricolo istituto
- **Revisione** (`lavoro`): proposte di modifica, confronto 2012/2025
- **Definitivo** (`riepilogo`): voci approvate + invariate
- **Fonti** (`normativa`): riferimenti normativi

### Sotto-tab Competenze e progettazione (subnav-didattica)
- **Valutazione / Evidenze** (`didattica`): evidenze per ordine di scuola
- **UDA modello** (`didattica_uda`): UDA di esempio

### Azioni visibili per tab
- **Home**: quick actions (impostazioni, corso PDF, motto, guida rapida)
- **Curriculum/Consulta**: version tabs (2012/2025), navigazione discipline, completezza counters
- **Curriculum/Revisione**: toolbar (filtri, export), sidebar discipline, cards area, tecnologia-export-panel, department-import-panel
- **Curriculum/Definitivo**: export group (Word, altre esportazioni, .cml, Drive)
- **Curriculum/Fonti**: lista fonti normative
- **Didattica**: filtri per ordine di scuola, lista evidenze
- **Esportazioni**: export group per ogni formato
- **Guida**: card documentative

## 2. Ridondanze UI

### Pulsanti ripetuti
- **Export buttons**: presenti in toolbar (Revisione), export group (Definitivo), tecnologia-export-panel
- **Scarica proposta / Invia al Drive**: ripetuti in Revisione e Definitivo
- **Word export**: duplicato come "Word (confronto)" e "Word (definitivo)"
- **Copy/Markdown/PDF**: presenti in multiple toolbar

### Azioni fuori contesto
- **Sidebar discipline**: visibile in tutti i sub-tab Curriculum, anche in Fonti dove non è necessaria
- **Tecnologia-export-panel**: visibile solo per Tecnologia, ma export generale esiste per tutte
- **Department-import-panel**: nominato "Validazione dipartimentale" ma funziona come import proposte docenti
- **Referent-validation-panel**: nominato "Verifica referente" ma importa esiti dipartimentali

### Eccesso di scrolling
- **Curriculum/Consulta**: lunga lista discipline senza accordion
- **Curriculum/Fonti**: lista fonti non raggruppata
- **Didattica**: lista evidenze senza filtri avanzati
- **Pannelli statici**: "Stato di completezza" e "Readiness per approvazione" non collassabili

### Sezioni ridondanti
- **Due pannelli "Validazione dipartimentale"**: uno per validazione disciplina (curricolo-validation), uno per import proposte (department-import-panel)
- **Contatori statici**: completezza e readiness non sincronizzati con stato validazione reale
- **Export multipli**: stessa funzionalità esposta in modi diversi

## 3. Punti ancora centrati su Tecnologia

### Default disciplinare
- `selDisc` default: `"Tecnologia"` (linea 2076)
- Sidebar evidenzia sempre Tecnologia al primo caricamento
- Hash navigation non inizializza selDisc

### Titoli hardcoded
- `renderTecnologiaNorm()`: titolo fisso "Tecnologia — pacchetto curricolare normalizzato" (linea 4718)
- Nessuna equivalente per le altre 13 discipline normalizzate

### Pannelli specifici
- `tecnologia-export-panel`: visibile solo quando `selDisc === 'Tecnologia'` (linea 2501)
- Classi CSS specifiche: `.tecnologia-export-panel`, `.tecnologia-norm`, `.tecnologia-md-preview`

### Funzioni non generalizzate
- `generateTecnologiaBozza()`, `copyTecnologiaMarkdown()`, `downloadTecnologiaMarkdown()`
- `renderTecnologiaNorm()` non generalizzata in `renderDisciplinaNorm(disc)`

### Impatto sulla percezione dell'app
- L'app appare centrata su Tecnologia, non multi-disciplinare
- Le altre discipline sembrano "di seconda classe"
- Confusione sullo scopo dell'app (curricolo verticale vs disciplina singola)

## 4. Modello funzionale a tre piani

### Piano 1: Curricolo di istituto
- **Stato attuale**: esiste visualizzazione curricolo istituto (Consulta)
- **Versioni**: 2012 (vigente), 2025 (bozza)
- **Problema**: nessuno stato formale (vigente, in revisione, proposta, approvata, adottata, superata)
- **Gap**: manca governance di approvazione istituzionale

### Piano 2: Transizione IN2025
- **Stato attuale**: confronto 2012/2025 disponibile in Revisione
- **Problema**: nessun tracciamento dello stato di transizione
- **Gap**: manca modello di gestione del periodo transitorio

### Piano 3: Progettazione didattica
- **Stato attuale**: sezione Competenze e progettazione con evidenze e UDA modello
- **Problema**: non collegata a versioni curricolari specifiche
- **Gap**: manca legame tra progettazione didattica e versione curricolare di riferimento

## 5. Modello versioni curricolari

### Stati attuali (impliciti)
- `2012`: vigente
- `2025`: bozza

### Stati consigliati (espliciti)
- **vigente**: versione attualmente in uso
- **in_revisione**: versione in fase di revisione
- **proposta**: versione proposta ma non ancora valutata
- **approvata**: versione approvata dagli organi competenti
- **adottata**: versione adottata ufficialmente dall'istituto
- **superata**: versione non più in uso

### Gap attuale
- Nessuna rappresentazione esplicita degli stati
- Nessuna transizione di stato automatizzata
- Nessuna tracciabilità storica delle versioni

## 6. Matrice di compatibilità su tre livelli

### Livello 1: Compatibilità tecnica .cml
- **Stato attuale**: definito in CML-199 (schema v1.0)
- **Tipi file**: `teacher_proposal`, `department_outcome`
- **Validazione**: enforcement schemaVersion, item-level checks, duplicate detection
- **Gap**: compatibilità curricolare non definita

### Livello 2: Compatibilità curricolare
- **Stato attuale**: non definito
- **Problema**: una progettazione didattica può riferirsi a una versione curricolare non più vigente
- **Gap**: manca legame progettazione ↔ versione curricolare
- **Gap**: manca meccanismo di riallineamento quando cambia il curricolo

### Livello 3: Compatibilità istituzionale
- **Stato attuale**: non definito
- **Problema**: non esiste distinzione tra validazione dipartimentale e approvazione istituzionale
- **Gap**: manca governance degli stati di versione
- **Gap**: manca tracciabilità degli atti formali (Collegio dei Docenti, Consiglio di Istituto)

## 7. Correzione istituzionale obbligatoria

### Ruolo del referente
- **Stato attuale**: il referente appare come approvatore (referent-validation-panel)
- **Correzione**: il referente NON approva il curricolo
- **Ruolo corretto**: coordina, raccoglie esiti, prepara proposta, registra avanzamento

### Atti formali
- **Stato attuale**: non rappresentati
- **Correzione**: approvazione e adozione restano atti degli organi competenti
- **Organi competenti**: Collegio dei Docenti, Consiglio di Istituto

### Impatto UI
- Rimuovere qualsiasi pulsante "Approva definitivamente"
- Sostituire con "Registra stato di avanzamento"
- Aggiungere campi per data e atto di approvazione/adozione

## 8. Matrice "proposto → approvato" corretta

| Scenaro | Compatibilità | Azione richiesta |
|---------|---------------|-----------------|
| Proposto → approvato senza modifiche | Compatibile | Nessuna azione |
| Proposto → approvato con modifiche | Compatibile con avviso / da riallineare | Valutare se riallineare progettazioni |
| Proposto → rinviato | Valutazione umana richiesta | Riconsiderare proposta |
| Proposto → approvazione parziale | Da riallineare | Riallineare progettazioni interessate |
| Proposto → superato | Non più coerente | Aggiornare progettazioni a nuova versione |

## 9. Progettazione didattica nel periodo transitorio

### Capacità del docente
- **Stato attuale**: il docente può progettare senza vincoli di versione
- **Correzione**: il docente può progettare anche su versioni non definitive
- **Requisito**: devono essere registrati versione, stato, data, motivazione

### Registrazione obbligatoria
- Versione curricolare di riferimento
- Stato della versione (vigente, in_revisione, proposta, ecc.)
- Data di creazione della progettazione
- Motivazione della scelta della versione
- Possibile riallineamento necessario

### Ruolo dell'app
- **Stato attuale**: l'app non propone scenari
- **Correzione**: l'app propone scenari, ma non decide
- **Esempi**: "Questa progettazione si riferisce a una versione superata. Vuoi riallinearla?"

## 10. Mappa dei casi d'uso

### Dirigente / Referente
- Consultare stato di avanzamento del curricolo
- Visualizzare completezza disciplinare
- Importare esiti dipartimentali
- Preparare report per organi collegiali
- Registrare stati di avanzamento (non approvare)

### Dipartimento
- Importare proposte docenti
- Valutare proposte per disciplina
- Registrare esiti validazione
- Esportare esiti dipartimentali

### Docente
- Consultare curricolo vigente e proposte
- Proporre modifiche disciplinari
- Esportare proposta per dipartimento
- Progettare didattica su versione specifica
- Riallineare progettazioni quando cambia curricolo

### Organi collegiali
- Consultare report preparati dal referente
- Deliberare approvazione/adozione
- Atto formale fuori dall'app (registro ufficiale)

### Progettazione didattica
- Collegare progettazione a versione curricolare
- Tracciare versioni usate nelle progettazioni
- Segnalare progettazioni su versioni superate
- Proporre riallineamento

### Periodo transitorio IN2025
- Gestire coesistenza 2012/2025
- Tracciare stato di transizione
- Supportare decisioni su tempistiche
- Documentare motivazioni delle scelte

## 11. Wireframe testuale della nuova architettura informativa

### Nuova struttura tabbar
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

### Nuova sezione "Versioni"
- Tabella versioni curricolari con stati
- Colonne: versione, stato, data, atto, note
- Azioni: visualizza dettaglio, registra avanzamento
- Storico transizioni

### Nuova sezione "Collegamenti curricolo" in Progettazione
- Lista progettazioni didattiche
- Per ogni progettazione: versione curricolare di riferimento
- Segnalazione progettazioni su versioni superate
- Azione: riallinea a nuova versione

### Rimozione ridondanze
- Unificare export in unico pannello per tab
- Rimuovere tecnologia-export-panel (generalizzare)
- Collassare pannelli statici
- Ridurre sidebar discipline ai tab pertinenti

### Superamento centratura su Tecnologia
- Generalizzare renderTecnologiaNorm() in renderDisciplinaNorm(disc)
- Rimuovere hardcoded "Tecnologia" dai titoli
- Default disciplina: prima in ordine alfabetico o ultima usata

## 12. Rischi di regressione e mitigazioni

### Rimozione pulsanti
- **Rischio**: utenti non trovano più funzionalità
- **Mitigazione**: mantenere export in posizione prominente, testare con utenti reali

### Perdita orientamento utente
- **Rischio**: nuova struttura confonde gli utenti abituali
- **Mitigazione**: guida rapida aggiornata, tooltip, onboarding

### Regressioni export/import
- **Rischio**: modifiche rompono flussi esistenti
- **Mitigazione**: smoke test end-to-end, mantenere compatibilità .cml v1.0

### Confusione validazione/approvazione
- **Rischio**: utenti non distinguono validazione da approvazione
- **Mitigazione**: microcopy chiara, separazione UI pannelli, guida dedicata

### Eccessiva complessità degli stati
- **Rischio**: troppi stati confondono gli utenti
- **Mitigazione**: semplificare a stati essenziali, nascondere dettagli avanzati

### Automatismi percepiti come decisioni
- **Rischio**: utenti pensano che l'app decida per loro
- **Mitigazione**: esplicitare che l'app propone, non decide; messaggi chiari

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

## Verdetto
`CML_UX_FLOW_AUDIT_READY`
