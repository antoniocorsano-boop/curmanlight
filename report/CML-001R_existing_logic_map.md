# CML-001R — Existing Logic Map

Audit conservativo eseguito su `C:\Users\anton\CurManLight` prima di qualsiasi modifica applicativa.

## 1. Stato Git iniziale

- Branch corrente: `cml-001r-existing-logic-map`
- Commit di partenza: `3d3e71492ae935aaa3385815200fd36913a3a4b8`
- Autore commit: `Antonio Corsano <antonio.corsano@gmail.com>`
- Data commit: `Sat Jun 20 12:14:48 2026 +0200`
- Messaggio commit: `chore: initialize curmanlight local baseline`
- Working tree iniziale: pulita

## 2. Struttura repo rilevata

### File e cartelle principali

- Root:
  - `README-FIRST.md`
  - `SETUP_CURMANLIGHT_REPO.ps1`
  - `.gitignore`
  - `docs/03_execution/CML-000-REPO-BASELINE.md`
- Cartelle documentali:
  - `docs/03_execution/`
  - `report/`
- Cartella handoff:
  - `_handoff/`
  - `_handoff/generated/cml001/`
  - `_handoff/generated/cml002/`
  - `_handoff/sources/`
  - `_handoff/zips/`
  - `_handoff/notes/`

### HTML principali

HTML applicativi presenti nel repo:

- `_handoff/generated/cml001/index.html`
- `_handoff/generated/cml002/index.html`
- `_handoff/zips/curmanlight-cml001-singlefile.html`
- `_handoff/zips/curmanlight-cml002-singlefile.html`

HTML root applicativo:

- `index.html` non presente nella radice del repo locale.

Nota: il repo locale contiene la baseline e i materiali di handoff; non contiene ancora una copia dei file runtime dello strumento pubblicato su `curmanlight.netlify.app`.

### JS

- `_handoff/generated/cml001/app.js`
- `_handoff/generated/cml001/src/data/content.js`
- `_handoff/generated/cml002/app.js`
- `_handoff/generated/cml002/src/data/content.js`

### CSS

- `_handoff/generated/cml001/styles.css`
- `_handoff/generated/cml002/styles.css`

### Dati

- `_handoff/generated/cml001/src/data/content.js`
- `_handoff/generated/cml002/src/data/content.js`
- `_handoff/sources/Curricolo disciplinare WORD.docx`

### Asset

- Nessun asset statico rilevato nei pattern immagine/font/audio/video/video/web.
- Nessun file root `netlify.toml` rilevato.
- File `netlify.toml` presenti solo dentro `_handoff/generated/cml001/` e `_handoff/generated/cml002/`.

## 3. Logiche runtime rilevate nei prototipi _handoff/generated

I prototipi `CML-001` e `CML-002` sono stati analizzati solo come riferimento. Non sono stati copiati, sostituiti o usati come sorgente applicativa attiva.

### Architettura comune

Entrambi i prototipi usano una SPA statica senza dipendenze esterne:

- `index.html` carica:
  - `./styles.css`
  - `./src/data/content.js`
  - `./app.js`
- `content.js` assegna `window.CURMANLIGHT_DATA`.
- `app.js` legge `window.CURMANLIGHT_DATA` e genera la UI nel DOM.
- Non sono presenti backend, API esterne, autenticazione, database o moduli Netlify.

### Navigazione e cambio viste

Logica rilevata:

- Sidebar generata da `data.views`.
- Pulsanti con attributo `data-view`.
- `setView(viewId)` aggiorna:
  - `activeView`
  - `window.location.hash`
  - rendering della vista
  - chiusura sidebar mobile
  - focus su `#main-content`
- Listener su `window.hashchange` per supportare navigazione tramite hash.
- Menu mobile gestito da `#menu-toggle` e `#sidebar`.

Viste implementate in entrambi i prototipi:

1. `home` — Home
2. `documento-generale` — Documento generale
3. `curricolo-attuale` — Curricolo attuale
4. `indicazioni-2012` — Indicazioni 2012
5. `nuove-2025` — Nuove Indicazioni 2025
6. `revisione` — Revisione disciplinare
7. `fonti-export` — Fonti ed esportazione

### Salvataggio locale

Logica rilevata:

- `localStorage` usato solo per le proposte di revisione.
- Chiavi:
  - `curmanlight.cml001.revisions.v1`
  - `curmanlight.cml002.revisions.v1`
- Funzioni:
  - `loadRevisions()`
  - `saveRevisions()`
- Fallback: se il parsing fallisce o `localStorage` non è disponibile, vengono usate le proposte iniziali da `data.revisions`.

Implicazione per l’app pubblicata:

- Prima di qualsiasi modifica, mappare le chiavi esistenti dello strumento pubblicato.
- Non riutilizzare chiavi locali senza migrazione esplicita.
- Non alterare schema, persistenza o reset delle proposte esistenti.

### Esportazione, stampa e copia

Logica rilevata:

- Vista `fonti-export`.
- Pulsanti:
  - `#copy-summary` → `navigator.clipboard.writeText(buildMarkdownSummary())`
  - `#download-json` → genera Blob JSON e scarica `curmanlight-riepilogo-revisione.json`
  - `#print-page` → `window.print()`
- Feedback visivo in `#export-feedback`.

Implicazione:

- Le funzioni di export/stampa/copia devono essere preservate o agganciate senza cambiare formato, filename e comportamento già noto.

### Gestione contenuti

Logica rilevata:

- `window.CURMANLIGHT_DATA` centralizza contenuti e metadati.
- Sezioni principali:
  - `meta`
  - `views`
  - `lockedGeneralSections`
  - `disciplines`
  - `references2012`
  - `references2025`
  - `revisions`
  - `sources`
- Rendering HTML generato tramite template string e `escapeHtml()`.

Differenza tra prototipi:

- `CML-001`: contenuti campione/preconfigurati; alcune discipline sono strutturate ma non allineate integralmente al documento Word.
- `CML-002`: contenuti più ricchi estratti dal documento `Curricolo disciplinare WORD.docx`, inclusi riferimenti, profilo, livelli, raccordi e discipline.

### Revisione/proposte

Logica rilevata:

- Vista `revisione`.
- Proposte modellate come array `revisions`.
- Campi modificabili:
  - `priority`
  - `status`
  - `source`
  - `note`
- Azioni:
  - `Aggiungi proposta`
  - `Ripristina proposte iniziali`
- Stati:
  - `bozza`
  - `da_verificare`
  - `validata`
- Ogni proposta resta non ufficiale e richiede validazione umana/collegiale.

### Curricolo e sezioni in sola lettura

Logica rilevata:

- `lockedGeneralSections` renderizzate come card senza input.
- Badge `Sola lettura`.
- `renderDocumentoGenerale()` espone testo istituzionale consultabile.
- `renderCurricoloAttuale()` mostra discipline e sezioni tramite accordion.
- `renderIndicazioni2012()` e `renderNuove2025()` sono viste di confronto.

Punto critico:

- Le sezioni generali devono restare consultabili e non modificabili.
- Le modifiche operative devono avvenire solo tramite proposte locali, non sovrascrivendo il documento ufficiale.

## 4. Logiche da preservare

Preservare nella futura integrazione su app pubblicata:

- Eventuali logiche di navigazione già presenti nello strumento pubblicato.
- Eventuali chiavi `localStorage`/`sessionStorage` già usate.
- Eventuali esportazioni, stampe o copie già disponibili.
- Separazione tra documento ufficiale e proposte locali.
- Assenza di backend, API, autenticazione, database e Netlify Forms.
- Validazione umana/collegiale prima di qualsiasi adozione istituzionale.
- Contenuti ufficiali come fonte, non come dati mutabili direttamente.

## 5. Parti modificabili in futuro

Dopo audit dell’app pubblicata, saranno modificabili in modo conservativo:

- Aggiunta di viste o sezioni guidate in sola lettura.
- Integrazione di contenuti curricolari ufficiali come dati statici.
- Collegamenti da home/menu verso nuove viste consultive.
- Eventuale adattamento di layout e badge per marcare le aree `Sola lettura`.
- Eventuale nuovo namespace di stato locale dedicato a CML-001R, senza interferire con chiavi esistenti.

## 6. Parti da non toccare in questa slice e nelle integrazioni iniziali

Non toccare:

- `index.html` root dell’app pubblicata, se presente in una copia futura.
- File runtime principali dell’app pubblicata senza audit completo.
- Logiche di salvataggio locale esistenti.
- Esportazioni/stampe/copy esistenti.
- Configurazione Netlify.
- Deploy o pubblicazione.
- `_handoff/generated/cml001/` e `_handoff/generated/cml002/` come sorgente da sostituire.
- `_handoff/sources/Curricolo disciplinare WORD.docx` come generatore automatico di runtime.
- File Word per produrre direttamente contenuti runtime.

## 7. Punti sicuri di integrazione futura

Punti candidati per integrazione conservativa, da applicare solo dopo aver recuperato/analizzato l’app runtime pubblicata:

- Estendere il menu esistente con una voce consultiva, se il menu è già basato su array di viste.
- Aggiungere una vista `Documento generale` o sezione `consultazione — non modificabile`.
- Inserire contenuti ufficiali tramite data adapter separato, non tramite overwrite di dati utente.
- Mantenere tutte le aree ufficiali come markup statico/render-only.
- Isolare nuove chiavi `localStorage` con prefisso dedicato, ad esempio `curmanlight.cml001r.*`, solo se necessario.
- Non alterare chiavi `curmanlight.cml001.revisions.v1` o `curmanlight.cml002.revisions.v1` rilevate nei prototipi.
- Lasciare immutati export/stampa/copy finché non viene verificata compatibilità con lo strumento pubblicato.

## 8. Trattamento CML-001/CML-002

Verifica richiesta:

- I prototipi `CML-001` e `CML-002` in `_handoff` sono trattati solo come riferimento.
- Non sono stati copiati sopra l’app esistente.
- Non è stato sostituito `index.html`.
- Non sono stati modificati HTML, CSS o JS runtime.
- Il documento Word è stato considerato fonte documentale, non sorgente runtime.

## 9. Rischi

- Rischio principale: il repo locale non contiene ancora i file runtime dello strumento pubblicato su Netlify; quindi l’audit non può mappare con certezza le logiche dell’app pubblicata oltre ai materiali presenti.
- Rischio di regressione: copiare `_handoff/generated/cml001` o `_handoff/generated/cml002` sopra l’app pubblicata sostituirebbe lo strumento esistente.
- Rischio di perdita dati: modifiche alle chiavi `localStorage` esistenti potrebbero invalidare proposte salvate dagli utenti.
- Rischio di confusione istituzionale: contenuti estratti dal Word non devono essere presentati come documento ufficiale adottato senza validazione.
- Rischio tecnico: `navigator.clipboard` può non essere disponibile in tutti i contesti browser; il fallback previsto nel prototipo rimanda a stampa/download JSON.
- Rischio di pubblicazione: modificare deploy o Netlify config violerebbe il vincolo di non pubblicazione.

## 10. Validazione finale prevista

Comandi da eseguire dopo la scrittura dei report:

```powershell
git diff --check
git status --short
```

Esito atteso:

- `git diff --check` senza output.
- `git status --short` deve mostrare solo file documentali/report creati per questa slice.

## 11. Prossimo step raccomandato

Recuperare una copia fedele dei file runtime pubblicati su Netlify nel repo locale, senza sovrascrivere `_handoff`, quindi ripetere l’audit sulle logiche reali dello strumento pubblicato prima di qualsiasi modifica applicativa.

## 12. Verdetto

`CML_001R_EXISTING_LOGIC_MAP_READY`
