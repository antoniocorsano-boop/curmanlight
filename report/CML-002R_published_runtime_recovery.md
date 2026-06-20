# CML-002R — Published Runtime Recovery

Audit eseguito su `C:\Users\anton\CurManLight` per recuperare e mappare il runtime pubblicato su Netlify.

## 1. Stato Git iniziale

- Branch corrente: `cml-002r-published-runtime-recovery`
- Commit di partenza: `c17fd55d55013ca97789a6021efcaaaaf7b21f51`
- Commit effettuato: `75cdf1b495704d19c2008ffa5244b02f847f70f6`
- Working tree iniziale: snapshot parziale già presente in `_published_snapshot/netlify-current/`

## 2. URL e deploy recuperati

- URL pubblicato: `https://curmanlight.netlify.app/`
- Deploy noto (fornito): `6a366109364eaa78f991c0b0`
- Stato deploy: `ready` (confermato via curl HEAD)

## 3. Asset pubblici recuperati

| Tipo | Percorso | Dimensione |
|------|----------|------------|
| HTML principale | `index.html` | 158889 B |
| Manifest PWA | `manifest.webmanifest` | 726 B |
| Service worker | `sw.js` | 1351 B |
| Icona 192 | `icons/icon-192.png` | 3574 B |
| Icona 512 | `icons/icon-512.png` | 10589 B |
| Corso PDF | `Corso_CurricoloDonMilani_IN2025.pdf` | 294266 B |
| Pagina motto | `motto-non-multa-sed-multum.html` | 3863 B |
| Riferimenti JSON | `riferimenti_istituzionali_normativa.json` | 2607 B |
| Fonti PTOF-RAV | `docs_distribuzione/FONTI_PTOF_RAV_NORMATIVA.md` | 2012 B |
| Note UI mobile | `docs_distribuzione/NOTE_TESTATA_ESPANDIBILE_MOBILE.txt` | 570 B |

**Asset esterni referenziati ma non inclusi:**
- `https://cdnjs.cloudflare.com/ajax/libs/docx/8.5.0/docx.umd.min.js` — `404` al momento del recupero
- Link normativi esterni (`gazzettaufficiale.it`, `eur-lex.europa.eu`, `publications.jrc.ec.europa.eu`, ...), non inclusi perché non di runtime

**Risorsa alias non recuperata:**
- `curriculum-verticale-v3-responsive-salvataggio-profilo.html` — `404`

## 4. Mappatura runtime recuperato

### 4.1 Viste presenti

Il runtime pubblicato espone 3 schede principali gestite da `setTab()`:

| ID | Etichetta | Descrizione |
|----|-----------|-------------|
| `lavoro` | ✏️ Revisione per disciplina | Area di lavoro: filtro, sidebar discipline, card traguardi/obiettivi |
| `riepilogo` | 📋 Curricolo definitivo | Riepilogo approvato/invariato, esportazioni |
| `normativa` | 📜 Riferimenti normativi | Fonti ufficiali, normativa, riferimenti 2025 |

Altri componenti UI:
- Header espandibile (`toggleHeaderDetails`)
- Quick actions barra (`toggleQuickActions`)
- Modal impostazioni (`openSettingsModal`)
- Modal installazione PWA (`handleInstallApp`, `showInstallGuide`)
- Modal welcome onboarding (`showWelcome`)
- Pagina stampa PDF (`exportPDF`)

### 4.2 Navigazione

- Sidebar discipline generata dinamicamente da `DISCIPLINE`
- Pulsanti con `onclick="selectDisc(...)"` e `onclick="setFilter(...)"`
- Nessun uso di `window.location.hash` per navigazione (diverso dai prototipi)
- Filtro status: `all`, `pending`, `approvata`, `rifiutata`, `ok`, `nuovo`

### 4.3 Salvataggio locale

- Chiave `localStorage`: `curricoloVerticaleDonMilani.v3.ibrido.localState`
- Versione payload: `1`
- Payload: `{version, savedAt, selectedDiscipline, filterStatus, currentTab, data, profile}`
- Funzioni: `saveLocalState()`, `loadLocalState()`, `resetLocalState()`, `exportLocalBackup()`, `importLocalBackup()`
- Session storage: `welcomeShown` (per non ripetere il modal welcome)

### 4.4 Esportazione / stampa / copia

- **Word**: `exportWord()` — richiede libreria docx UMD, genera `.docx` con frontespizio, tabelle confronto, intestazioni
- **Copia per Word**: `copyForWord()` — fallback a finestra popup se clipboard API non disponibile
- **Markdown**: `exportMarkdown()` — Blob `.md` con frontespizio, disciplina, ordine, traguardi/obiettivi
- **PDF**: `exportPDF()` — apre finestra formattata, invoca `window.print()`
- **Backup**: `exportLocalBackup()` — scarica `.json`
- **Importa**: `importLocalBackup(event)` — input file JSON

### 4.5 Gestione contenuti

- Dati curricolari hardcodati inline nello `<script>` di `index.html`
- Struttura `DATA` con 14 discipline:
  - Italiano, Matematica, Scienze, Tecnologia, Storia, Latino (LEL), Geografia, Inglese, Seconda Lingua Comunitaria, Educazione Civica, Arte e Immagine, Musica, Educazione Fisica, Religione Cattolica
- Totale voci: 103 (66 traguardi, 37 obiettivi)
- Stati iniziali: 54 `modifica`, 41 `ok`, 8 `nuovo`
- Tutti decisioni inizialmente `null`
- Ordini: Infanzia 19, Primaria 37, Secondaria 47
- Profili: nome, cognome, disciplina, ordine di scuola (Infanzia/Primaria/Secondaria/Tutti)
- Decisioni tramite: `approve()`, `reject()`, `saveEditAndApprove()`, `undoDecision()`, `addItem()`, `removeItem()`, `confirmRemove()`
- Sezioni generali (normativa) in sola lettura, consultabili

### 4.6 Funzioni principali

- Rendering: `render()`, `renderSidebar()`, `renderRiepilogo()`, `cardHTML()`, `setTab()`, `selectDisc()`, `setFilter()`
- Stato: `saveLocalState()`, `loadLocalState()`, `resetLocalState()`, `exportLocalState()`, `importLocalBackup()`
- Export: `exportWord()`, `copyForWord()`, `exportMarkdown()`, `exportPDF()`
- PWA: `registerOfflineSupport()`, `handleInstallApp()`, `showInstallGuide()`
- UI: `toggleHeaderDetails()`, `toggleQuickActions()`, `openSettingsModal()`, `saveSettingsProfile()`, `showWelcome()`

### 4.7 PWA / service worker

- Cache name: `curricolo-don-milani-v4-testata-espandibile`
- App shell include: index.html, manifest, PDF corso, motto page, JSON normativa, docs, icone
- Strategia cache-first, fallback a index.html

### 4.8 Dati hardcoded

- Profilo scuola: Istituto, Comune, Codice meccanografico precompilati
- Competenze e nuclei disciplinari definiti in `DISCIPLINE_META`
- Dati curricolari IN 2012 (testo) e proposte IN 2025 inline

## 5. Confronto con prototipi _handoff/generated

| Aspetto | Prototipo CML-001 | Prototipo CML-002 | Runtime pubblicato |
|--------|------------------|-------------------|--------------------|
| Struttura file | HTML + CSS separato + JS separato + content.js | HTML + CSS separato + JS separato + content.js | HTML unico inline CSS/JS |
| Dati | `window.CURMANLIGHT_DATA` | `window.CURMANLIGHT_DATA` + JSON | `DATA` hardcodato inline |
| localStorage | `curmanlight.cml001.revisions.v1` | `curmanlight.cml002.revisions.v1` | `curricoloVerticaleDonMilani.v3.ibrido.localState` |
| Navigazione hash | `window.location.hash` → `setView()` | idem | nessun hash, solo `setTab()` + sidebar |
| Service worker | no | no | sì, PWA installabile |
| Manifest/PWA | no | no | sì, `manifest.webmanifest` + icone |
| Viste | 7 viste (home, documento-generale, ...) | idem | 3 schede (lavoro, riepilogo, normativa) |
| Export | Markdown, JSON, stampa, copia | idem | Word, Markdown, PDF, copia, backup |

## 6. Punti sicuri di integrazione futura

- Aggiungere viste aperte in sola lettura senza interferire con `DATA`
- Usare `renderDocumentoGenerale()` o estendere `tab-normativa` per contenuti nuovi
- Namespace locale diverso per nuovi salvataggi (se necessario)
- Mantenere la chiave `curricoloVerticaleDonMilani.v3.ibrido.localState` immutata
- Preservare le funzioni `export*`, `copy*`, `print*`, `save*`, `load*`, `reset*`
- Agganciare eventuali interlink da quick-actions o footer

## 7. Rischi residui

- La libreria docx UMD per Word è attualmente `404` — l'esportazione Word potrebbe non funzionare
- Service worker potrebbe servire asset obsoleti se cache non invalidata
- Nessun hash history — non supporta deep-link nelle sezioni
- Nessuna protezione contro modifiche accidentali del codice inline
- I dati IN 2025 potrebbero subire aggiornamenti normativi (D.M. 221/2025 predisposto)

## 8. Conferme

- Nessun deploy eseguito
- Nessuna sostituzione del runtime esistente
- Nessun backend/API/autenticazione/introdotto
- Tutti i file recuperati sono in `_published_snapshot/netlify-current/`

## 9. Validazioni finali

Eseguire:

```powershell
git diff --check
git status --short --untracked-files=all
```

Attendi: solo i file documentali/report elencati come untracked/modificati.

## 10. Prossimo step raccomandato

- Analizzare le proposte `modifica` e `nuovo` confrontando con documentazione ufficiale
- Verificare la disponibilità futura della libreria docx UMD o sostituirla con alternativa locale
- Pianificare integrazione delle viste guidate in base al CML-001R

## 11. Verdetto

`CML_002R_PUBLISHED_RUNTIME_RECOVERY_READY`