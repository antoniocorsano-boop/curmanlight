# CML UX Export Center Deduplication Plan

## Stato della slice

- **Tipo**: docs-only
- **Scope**: piano UX per deduplicazione e centralizzazione esportazioni
- **Runtime modificato**: no
- **Base audit**: CML-UX-ERGONOMICS-AUDIT
- **Base piano**: CML-UX-DECLUTTER-AND-ERGONOMICS-IMPLEMENTATION-PLAN
- **Slice precedente**: CML_UX_REVISIONE_COMPACT_RUNTIME (`721cefb`)
- **Verdetto atteso**: `CML_UX_EXPORT_CENTER_DEDUPLICATION_PLAN_READY`

## Problema da risolvere

Le esportazioni sono state progressivamente introdotte in più viste, creando duplicazione e ambiguità. Attualmente uno stesso export può essere raggiunto da 2 o 3 punti diversi (Revisione, Definitivo, Esportazioni, Home), mentre altri export (bozza disciplina, esito dipartimento `.cml`, report referente) sono accessibili solo da viste operative non destinate all'output.

L'utente non ha un unico luogo riconoscibile per generare, scaricare o preparare output. Ogni vista deve avere un solo compito:

- **Consulta** legge.
- **Revisione** decide.
- **Processo** gestisce import/validazione.
- **Esportazioni** produce output.

Il problema attuale è che Esportazioni esiste come tab ma è incompleto: mancano diversi export e alcuni sono raggiungibili solo tramite navigazione forzata (click su Revisione/Definitivo prima di poter esportare).

## Principio guida

```
Una schermata, un compito, una decisione principale.
```

Applicazione specifica:

```
L'Export Center è l'unico luogo primario per generare, scaricare o preparare output.
```

## Inventario export attuale

| Export / Azione | Vista attuale | Funzione tecnica | Utente destinatario | Problema UX |
|---|---|---|---|---|
| **Word confronto** | `#tab-esportazioni` (via `setTab('lavoro')`) | `exportWord()` | Dipartimento | Navigazione forzata a Revisione prima di esportare |
| **Word definitivo** | `#tab-riepilogo` + `#tab-esportazioni` | `exportWord(true)`, `exportRiepilogoWord()` | Referente | Duplicato: presente in Definitivo e in Esportazioni |
| **Copia per Word (confronto)** | rimosso da Revisione (precedente slice) | `copyForWord()` | Dipartimento | Mantenere in Export Center |
| **Copia per Word (definitivo)** | `#tab-riepilogo` | `copyForWord(true)` | Referente | Solo in Definitivo, non in Esportazioni |
| **Markdown (confronto)** | rimosso da Revisione | `exportMarkdown()` | Dipartimento | Mantenere in Export Center |
| **Markdown (definitivo)** | `#tab-riepilogo` + `#tab-esportazioni` | `exportMarkdown(true)`, `exportMarkdownRiepilogo()` | Referente | Duplicato |
| **PDF (confronto)** | rimosso da Revisione | `exportPDF()` | Dipartimento | Mantenere in Export Center |
| **PDF (definitivo)** | `#tab-riepilogo` + `#tab-esportazioni` | `exportPDF(true)`, `exportPDFRiepilogo()` | Referente | Duplicato |
| **Bozza disciplina** | `#tab-lavoro` (toggle) | `generateDiscBozza()`, `copyDiscMarkdown()`, `downloadDiscMarkdown()` | Dipartimento | Non raggiungibile da Export Center |
| **Proposta docente (.cml)** | `#tab-riepilogo` | `exportTeacherCml()` | Docente | Solo in Definitivo, non in Esportazioni |
| **Upload Drive** | `#tab-riepilogo` | `uploadTeacherCmlToDrive()` | Docente | Solo in Definitivo |
| **Esito dipartimento (.cml)** | `#tab-processo` (JS) | `exportDepartmentOutcomeCml()` | Referente | Solo in Processo, non in Esportazioni |
| **Report gruppo lavoro** | `#tab-processo` | `downloadReferentGroupWorkReport()` | Referente | Solo in Processo |
| **Backup JSON** | Home (cruscotto) + `#tab-esportazioni` | `exportLocalBackup()` | Tutti | Duplicato Home/Esportazioni |
| **Importa backup** | `#tab-esportazioni` | file input | Tutti | OK in Esportazioni |
| **Resoconto sintesi** | `#tab-esportazioni` (via `setTab('riepilogo')`) | `renderRiepilogo()` + click | Referente | Navigazione forzata a Definitivo |
| **Bozza UDA Markdown** | `#tab-didattica_uda` | `copyUdaMarkdown()`, `downloadUdaMarkdown()` | Docente | Vista separata (competenze), OK dov'è |
| **.cml export utilities** | `buildTeacherCmlModel()`, `buildDepartmentOutcomeCmlModel()` | JS functions | — | Usate da export .cml, non visibili |

Alcune funzioni (`exportRiepilogoWord`, `exportMarkdownRiepilogo`, `exportPDFRiepilogo`) sono chiamate in `#tab-esportazioni` ma non hanno definizione visibile — da verificare in runtime.

## Confini tra viste

| Vista | Deve contenere | Non deve contenere |
|---|---|---|
| **Home** | Orientamento, prossima azione, accesso rapido | Export primari. Backup JSON può rimanere come azione secondaria in cruscotto |
| **Consulta** | Lettura e orientamento | Nessun export primario. Nessun pulsante export |
| **Revisione** | Decisioni (approva/rifiuta/modifica/aggiungi) | Export confronto. Bozza disciplina: solo pulsante richiamabile, non export primario |
| **Processo** | Import `.cml`, validazione, report referente | Export di documenti leggibili. `.cml` export può rimanere solo se accompagna import |
| **Definitivo** | Riepilogo voci approvate | Export primari. Può avere ponte verso Export Center ma non duplicare azioni |
| **Fonti** | Consultazione fonti e normativa | Nessun export operativo |
| **Esportazioni** | Tutti gli output utente finali o intermedi | Import, validazione, decisioni |
| **Guida** | Documentazione | Nessun export |

## Architettura target dell'Export Center

### Header Export Center

Deve mostrare:

- scopo della vista: "Tutti gli output in un unico punto"
- disciplina corrente, se rilevante (per bozze disciplinari)
- stato sintetico delle decisioni (opzionale)
- avviso breve su validazione umana

### Gruppi di esportazione

| Gruppo | Funzione | Esempi |
|---|---|---|
| **Documento istituzionale** | Output definitivo per Collegio Docenti | Word definitivo, PDF definitivo, Markdown definitivo, Copia per Word definitivo |
| **Confronto** | Output di lavoro per dipartimento | Word confronto, PDF confronto, Markdown confronto, Copia per Word confronto |
| **File di lavoro `.cml`** | Scambio dati tra docenti e referenti | Proposta docente, Esito dipartimento |
| **Bozze disciplinari** | Bozza Markdown per disciplina | Genera bozza, Copia testo, Scarica testo |
| **Copia di sicurezza** | Backup e ripristino dati | Backup JSON, Importa backup |
| **Report** | Resoconti per gruppo di lavoro | Resoconto sintesi, Report gruppo di lavoro |

### Azione primaria per gruppo

| Gruppo | Azione primaria |
|---|---|
| Documento istituzionale | **Scarica Word definitivo** |
| Confronto | **Scarica Word confronto** |
| File di lavoro `.cml` | **Esporta proposta docente** |
| Bozze disciplinari | **Genera bozza** (seguito da copia/download) |
| Copia di sicurezza | **Scarica backup** |
| Report | **Scarica resoconto** |

### Azioni secondarie

- Copia testo
- Mostra anteprima
- Torna alla Revisione
- Torna alla Consulta
- Seleziona disciplina per bozza

### Stato e feedback

Ogni export deve produrre un feedback comprensibile:

- ✅ File generato correttamente
- ⬇️ Download avviato
- ⚠️ Dati mancanti (es. nessuna decisione presa)
- ⚠️ Validazione richiesta (es. bozza non ancora generata)
- ℹ️ Azione non disponibile (es. upload Drive non configurato)
- ℹ️ Fallback manuale (es. copia manuale suggerita)

## Regole di deduplicazione

| Regola | Applicazione | Motivazione |
|---|---|---|
| **Un solo punto primario per esportare** | Tutti gli export primari in `#tab-esportazioni` | L'utente sa sempre dove andare per generare output |
| **Nessun export duplicato nelle toolbar operative** | Revisione, Definitivo, Processo non hanno export primari | Ogni vista ha un solo compito |
| **Export `.cml` separati dagli output leggibili** | Gruppo distinto "File di lavoro" | .cml non è un documento leggibile, non va confuso con Word/PDF |
| **Bozza disciplina richiamabile ma non sempre aperta** | Pulsante in Revisione + accesso in Export Center | Serve durante la decisione, ma anche come output |
| **Confronto disponibile solo da Export Center** | Non in Revisione, non in Definitivo | Evita ambiguità tra "confronto" e "definitivo" |
| **Nessun export dentro Consulta** | Già applicato | Consulta legge, non produce |
| **Nessun export prominente dentro Revisione** | Già applicato (slice precedente) | Revisione decide, non esporta |
| **Feedback obbligatorio dopo ogni azione** | Toast o messaggio visibile | L'utente sa se l'azione è riuscita |
| **Nomi export orientati all'utente** | Non nomi tecnici di funzione | Chiarezza per docente non tecnico |

## Tassonomia delle etichette

| Etichetta tecnica / attuale | Etichetta UX proposta | Motivazione |
|---|---|---|
| `exportWord()` (confronto) | **Word — Confronto modifiche** | Distingue da definitivo |
| `exportWord(true)` (definitivo) | **Word — Documento finale** | Più chiaro di "definitivo" |
| `exportMarkdown()` | **Testo Markdown** | Nome tecnico ma noto |
| `exportPDF()` | **PDF — Stampa** | Utente pensa "stampa" non "PDF" |
| `exportTeacherCml()` | **File proposta docente** | Cosa contiene, non che formato |
| `exportDepartmentOutcomeCml()` | **File esito dipartimento** | Cosa contiene |
| `buildTeacherCmlModel()` | — | Solo funzione interna, non label |
| `generateDiscBozza()` | **Genera bozza disciplina** | Azione chiara |
| `copyDiscMarkdown()` | **Copia bozza** | Breve |
| `downloadDiscMarkdown()` | **Scarica bozza** | Breve |
| `downloadReferentGroupWorkReport()` | **Report gruppo di lavoro** | Destinatario chiaro |
| `exportLocalBackup()` | **Copia di sicurezza** | Già ok |
| `uploadTeacherCmlToDrive()` | **Invia al Drive** | Già ok |
| `.cml` | **File di lavoro CurManLight** | Spiega cosa sono |
| Confronto / Definitivo | **Confronto** / **Documento finale** | Meno ambiguo |

## Backlog runtime derivato

| Ordine | Slice | Tipo | Obiettivo | File attesi |
|---|---|---|---|---|
| 1 | **CML_UX_EXPORT_CENTER_DEDUPLICATION_RUNTIME** | Runtime | Centralizzare tutti gli export in `#tab-esportazioni`, rimuovere duplicazioni da Definitivo, aggiungere bozza disciplina, .cml, report | `index.html` |
| 2 | **CML_UX_EXPORT_LABELS_CLARITY_RUNTIME** | Runtime | Applicare tassonomia etichette proposta, eliminare ambiguità confronto/definitivo | `index.html` |
| 3 | **CML_UX_CML_FILE_EXPORT_GROUPING_RUNTIME** | Runtime | Raggruppare file `.cml` in sezione dedicata con descrizione formato | `index.html` |
| 4 | **CML_UX_EXPORT_FEEDBACK_RUNTIME** | Runtime | Standardizzare feedback (toast/tooltip/messaggio) dopo ogni export | `index.html` |
| 5 | **CML_UX_EXPORT_REGRESSION_SMOKE** | Docs-only | Verificare che tutti gli export funzionino, nessuna duplicazione residua, metriche UX rispettate | Execution doc, report |

## Prima slice runtime raccomandata

```
CML_UX_EXPORT_CENTER_DEDUPLICATION_RUNTIME
```

Questa slice deve:

- Centralizzare in `#tab-esportazioni` tutti gli export oggi sparsi (bozza disciplina, `.cml` docente, `.cml` dipartimento, report referente, confronto, definitivo, backup)
- Rimuovere duplicazioni residue da `#tab-riepilogo` (sostituire con ponte "Vai a Esportazioni")
- Lasciare Consulta e Revisione senza export primari
- Distinguere output leggibili (Word/PDF/Markdown) e file `.cml`
- Non modificare schema `.cml`
- Non alterare contenuti curricolari
- Bump CACHE_NAME in `sw.js`

## Gate di accettazione

Per ogni futura slice runtime:

- `node --check` sugli script estratti
- `git diff --check`
- Nessun file fuori scope
- Smoke Home
- Smoke Consulta
- Smoke Revisione
- Smoke Processo
- Smoke Export Center
- Consulta non ha export primari
- Revisione non ha export confronto prominenti
- Export `.cml` funzionano
- Feedback dopo export presente
- Cache service worker bumpata se `index.html` cambia

## Non obiettivi

Questo piano non prevede:

- Redesign estetico generale
- Framework
- Nuove dipendenze
- Backend
- Login
- Modifica contenuti curricolari
- Modifica schema `.cml`
- Riscrittura completa
- Nuovo sistema di build
- Modifica sostanziale delle funzioni export esistenti
- Cancellazione di export utili (solo ricollocazione)

## Decisioni aperte

Da sciogliere nelle slice successive:

- Se Export Center deve rimanere tab principale (`#tab-esportazioni`) o diventare sottotab di Curriculum
- Ordine dei gruppi export (documento istituzionale primo o confronto primo)
- Distinzione visuale tra `.cml` e documenti leggibili
- Posizione della bozza disciplina (solo in Export Center o anche in Revisione come toggle)
- Necessità di anteprima prima del download
- Comportamento mobile dei gruppi export
- Feedback testuale minimo (toast vs messaggio inline)
- Eventuale riepilogo finale unico

## Verdetto finale

```
CML_UX_EXPORT_CENTER_DEDUPLICATION_PLAN_READY
```
