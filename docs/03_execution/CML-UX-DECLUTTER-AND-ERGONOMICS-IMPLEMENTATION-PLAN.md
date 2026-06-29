# CML UX Declutter and Ergonomics Implementation Plan

## Stato della slice

- **Tipo**: docs-only
- **Scope**: piano operativo UX per riduzione caos visivo, scroll e sovrapposizione consultazione/revisione/export
- **Runtime modificato**: no
- **Base audit**: CML-UX-ERGONOMICS-AUDIT
- **Commit di partenza**: `6e1fa3b` (docs: normalize CML UX ergonomics audit markdown)
- **Verdetto atteso**: `CML_UX_DECLUTTER_AND_ERGONOMICS_IMPLEMENTATION_PLAN_READY`

## Problema da risolvere

Le viste curriculum sono troppo dense e mescolano compiti diversi nello stesso spazio.

Un docente che vuole **consultare** il curricolo si trova davanti sidebar, azioni editoriali, pulsanti export, badge di stato, filtri e note — elementi che servono alla revisione, non alla lettura.

Uno stesso utente in momenti diversi (leggere, revisionare, esportare) deve navigare contenuti identici ma con bisogni opposti: concentrazione vs. controllo. Scroll prolungati (3–6 schermate) e azioni duplicate in 3 punti (Revisione, Definitivo, Esportazioni) costringono l'utente scolastico a interpretare la logica dello strumento invece di seguire il proprio compito.

## Principio guida

```
Una schermata, un compito, una decisione principale.
```

Applicato a CurManLight significa:

- **Consulta** = leggere e orientarsi (nessuna azione editoriale visibile)
- **Revisione** = decidere, approvare, modificare (esportazione fuori dalla vista)
- **Fonti** = trovare riferimenti (sidebar rimossa)
- **Esportazioni** = scegliere formato e generare (unico punto di export)
- **Competenze** = marcare evidenze e produrre bozze UDA (due sottoview distinte)

## Utenti e compiti principali

| Utente | Compito principale | Bisogno UX | Rischio attuale |
|---|---|---|---|
| **Docente** | Consultare il curricolo della propria disciplina | Lettura chiara, trovare i contenuti senza rumore | Sidebar, badge e azioni editoriali distraggono dalla lettura |
| **Dipartimento** | Revisionare e validare il curricolo | Confronto voci, decisione su modifiche, esportazione sintetica | Scroll 4–6 schermate, export duplicati confondono il flusso |
| **Referente** | Aggregare e produrre documento finale ordinato | Raccolta dati multi-disciplina, report unico | Azioni frammentate tra Revisione, Definitivo, Esportazioni |
| **Dirigente / staff** | Visione d'insieme e verifica conformità | Dashboard chiara, accesso rapido ai documenti istituzionali | Navigazione 5+1 voci, nessuna vista orientativa per accesso rapido |
| **Gruppo curricolo / consultatore esterno** | Esplorare il curricolo per confronto o ricerca | Navigazione semplice, fonti collegate, nessuna azione editoriale | Sidebar e tool operativi confondono chi non conosce lo strumento |

## Architettura UX target

### Home

Deve orientare e proporre il prossimo passo. Stats tecniche (14 discipline, unità, ecc.) spostate nella vista Curriculum o in un pannello richiamabile. Breve microguida visibile al primo accesso.

### Curriculum / Consulta

Deve servire solo a leggere e orientarsi. Nessuna sidebar, nessuna azione editoriale. Indice accordion per ordine scuola. Badge solo se informativi (non decisionali). Esportazione non presente.

### Curriculum / Revisione

Deve servire a decidere, adattare, validare. Cards confronto sintetiche. Sidebar disciplina presente. Pannello export richiamabile da toggle, non always-on. Riepilogo iniziale con conteggio voci. Import e validazione in sezione separata.

### Curriculum / Fonti

Deve contenere riferimenti e materiali di supporto. Sidebar rimossa. Filtro per tipologia fondoconsultabile. Accesso rapido a link e PDF.

### Esportazioni

Deve centralizzare export e download. Raggruppamento per destinazione (istituzionale, dipartimento, disciplina). Eliminate replica da Revisione e Definitivo. Azione primaria unica: scegliere formato e generare.

### Competenze e progettazione

Deve distinguere competenze, evidenze, UDA in due sottoview con navigazione esplicita. Evidenze: marcatura Adotta/Adatta/Escludi, filtro per disciplina, reset locale. UDA: generazione bozza, copia, download. Mappa disciplinare in accordion compresso, non in vista principale.

### Guida

Deve spiegare il processo senza invadere il lavoro. Struttura attuale invariata.

## Regole di decluttering

| Regola | Applicazione | Motivazione |
|---|---|---|
| **Azione primaria unica** | Ogni vista ha un solo pulsante/azione principale evidente | L'utente sa sempre cosa fare per primo |
| **Export fuori dalle viste lunghe** | Export rimosso da Revisione e Definitivo; unico punto in Esportazioni | Elimina duplicazione, riduce scelte concorrenti |
| **Fonti separate** | Sidebar rimossa da Fonti; filtro per tipologia | Fonti sono consultazione, non revisione |
| **Revisione separata dalla consultazione** | Sidebar, badge, azioni visibili solo in Revisione | Leggere e decidere sono compiti diversi |
| **Contenuti lunghi chiusi in dettaglio** | Sezioni oltre 3 schermate comprimibili con accordion o toggle | Riduce scroll senza nascondere informazioni |
| **Badge e avvisi solo se decisivi** | Badge stato visibili solo in Revisione; notice max 2 righe | Warning fatigue reale, badge non decisionali tolgono attenzione |
| **Massimo due livelli di navigazione visibili** | Tabbar + subnav corrente; breadcrumb per profondità | Soglia cognitiva rispettata |
| **Nessuna duplicazione di azioni** | Ogni azione appare in un solo punto dello strumento | Chiarezza e prevedibilità |
| **Titolo, hash, menu e contenuto sempre coerenti** | Hash URL, titolo vista, voce menu attiva e contenuto sincronizzati | L'utente sa sempre dove si trova |

## Metriche UX e soglie

| Metrica | Soglia | Metodo di verifica |
|---|---|---|
| Scroll massimo vista consultazione | ≤ 2 schermate (viewport 768px) | Ispezione visiva + screenshot |
| Clic per consultare una disciplina | ≤ 2 da Home | Percorso minimo |
| Clic per arrivare alla revisione | ≤ 3 da Home | Percorso minimo con cambio ruolo |
| Numero di pulsanti primari visibili | ≤ 1 per vista | Ispezione DOM |
| Blocchi informativi nella prima schermata | ≤ 5 | Screenshot viewport 768px |
| Coerenza hash/menu/titolo/contenuto | 100% viste | Smoke test manuale |
| Leggibilità etichette | Nessuna abbreviazione ambigua | Review collegiale |
| Separazione consultazione/revisione/export | Nessuna azione export in consulta/revisione | Ispezione DOM + smoke |

## Backlog ordinato delle slice future

| Ordine | Slice | Tipo | Obiettivo | File attesi |
|---:|---|---|---|---|
| 1 | **CML_UX_CURRICULUM_CONSULTA_COMPACT_RUNTIME** | Runtime | Ridurre scroll vista disciplina, sintesi iniziale, sezioni compatte/accordion, export/revisione fuori dalla vista | `index.html` |
| 2 | **CML_UX_REVISIONE_SEPARATION_PLAN** | Docs-only | Definire contratto per vista revisione separata da consulta: cards confronto, export toggle, import/validazione sezione | Execution doc, report |
| 3 | **CML_UX_REVISIONE_COMPACT_RUNTIME** | Runtime | Implementare vista revisione compatta: riepilogo iniziale, pannello export toggle, sidebar presente | `index.html` |
| 4 | **CML_UX_EXPORT_CENTER_DEDUPLICATION_PLAN** | Docs-only | Definire contratto per centralizzazione export: raggruppamento destinazione, rimozione da Revisione/Definitivo | Execution doc, report |
| 5 | **CML_UX_EXPORT_CENTER_DEDUPLICATION_RUNTIME** | Runtime | Implementare export center unico, rimuovere pulsanti duplicati | `index.html` |
| 6 | **CML_UX_FONTI_SEPARATION_RUNTIME** | Runtime | Rimuovere sidebar da Fonti, aggiungere filtro per tipologia | `index.html` |
| 7 | **CML_UX_EVIDENZE_UDA_SPLIT_PLAN** | Docs-only | Definire contratto per separazione Evidenze/UDA in due sottoview | Execution doc, report |
| 8 | **CML_UX_EVIDENZE_UDA_SPLIT_RUNTIME** | Runtime | Implementare navigazione esplicita Evidenze/UDA, accordion mappa disciplinare | `index.html` |
| 9 | **CML_UX_HOME_ORIENTATION_RUNTIME** | Runtime | Spostare stats tecniche, microguida per primo accesso | `index.html` |
| 10 | **CML_UX_ERGONOMICS_REGRESSION_GATE** | Docs-only + smoke | Verificare metriche UX, scroll, azione unica, coerenza hash/menu/titolo | Execution doc, report |

## Prima slice runtime raccomandata

```
CML_UX_CURRICULUM_CONSULTA_COMPACT_RUNTIME
```

Questa slice deve:

- **Ridurre scroll** nella vista disciplina: le sezioni che superano 3 schermate sono compresse con accordion per ordine scuola
- **Mostrare una sintesi iniziale**: conteggio unità, discipline visibili, stato versione
- **Usare sezioni compatte o accordion**: i contenuti lunghi sono chiusi in dettaglio espandibile
- **Tenere export e revisione fuori dalla vista consulta**: nessun pulsante export, nessuna azione editoriale visibile in modalità lettura
- **Mantenere navigazione disciplinare coerente**: hash, titolo, menu e contenuto sincronizzati
- **Non alterare contenuti curricolari**: solo struttura di presentazione, nessuna modifica ai dati

## Gate di accettazione

Per ogni futura slice runtime:

- `node --check` sugli script estratti dal file HTML (nessun syntax error)
- `git diff --check` (nessun whitespace error)
- Nessun file fuori scope (solo `_published_snapshot/netlify-current/index.html` per runtime)
- Smoke hash/menu/titolo/contenuto (stato coerente dopo modifica)
- Smoke Home (nessuna regressione vista principale)
- Verifica mobile minima (viewport 390px, 768px)
- Verifica scroll (vista modificata sotto soglia definita)
- Verifica azione primaria unica (un solo pulsante principale per vista)

## Non obiettivi

Questo piano non prevede:

- **Redesign estetico generico**: non si cambia la palette, il font o lo stile visivo complessivo
- **Framework**: nessuna introduzione di React, Vue, Svelte o altri framework
- **Dipendenze**: nessuna nuova libreria, pacchetto npm o CDN
- **Backend**: nessun server, database, API o persistenza remota
- **Login**: nessuna autenticazione, autorizzazione o profilazione utente
- **Cambio contenuti curricolari**: i dati disciplinari restano invariati
- **Riscrittura completa**: lo strumento esistente viene modificato per sottrazione e riorganizzazione, non riscritto
- **Nuova architettura build**: nessun bundler, compilatore o pipeline di build

## Decisioni aperte

Le seguenti decisioni sono rinviate alle slice successive:

- **Formato accordion**: decidere se accordion nativo (dettaglio HTML) o toggle JS personalizzato
- **Posizione indice disciplina**: in cima alla vista, in sidebar compressa o in pannello richiamabile
- **Trattamento fonti**: se filtro per tipologia è sufficiente o servono schede/folder
- **Rapporto tra consulta e revisione**: se due viste separate (tab/subnav) o toggle locale nella stessa vista
- **Gestione mobile**: come adattare accordion, toggle e azione primaria a viewport 360–390px
- **Alleggerimento Home**: se stats tecniche vanno rimosse, spostate in vista Curriculum o rese richiamabili

## Verdict finale

```
CML_UX_DECLUTTER_AND_ERGONOMICS_IMPLEMENTATION_PLAN_READY
```
