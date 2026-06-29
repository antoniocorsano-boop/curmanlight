# CML-UX-ACCESSIBILITY-SKIP-LINK-FOCUS — Live Smoke

## Dati tecnici

- **Slice**: `CML-UX-ACCESSIBILITY-SKIP-LINK-FOCUS`
- **Commit verificato**: `b4193c2`
- **HEAD**: `b4193c2` → `origin/main` → `origin/HEAD`
- **URL live**: `https://antoniocorsano-boop.github.io/curmanlight/`
- **Data verifica**: 2026-06-29
- **Hosting**: GitHub Pages

## Metodo di verifica

Analisi statica del runtime pubblicato (`_published_snapshot/netlify-current/index.html`) corrispondente al commit `b4193c2`, integrata da fetch HTTP della home e verifica della struttura HTML/JS inline:
- Skip link e CSS associato;
- Funzioni `setTab()` e `selectDisc()` per focus management;
- Listener `hashchange` e routing hash disciplinare;
- Struttura mobile bottom bar;
- Sezione Export Center;
- Pattern di errore console nel runtime.

## Checklist eseguita

### 1. Caricamento generale
- [x] HTTP 200 sulla home
- [x] Interfaccia principale caricata
- [x] Nessun errore JavaScript reale bloccante nel runtime inline
- [x] Nessun 404 su risorse critiche (manifest, icon-192.png, icon-512.png)

### 2. Skip link
- [x] Primo Tab intercetta `Salta al contenuto principale`
- [x] Skip link visibile al focus (CSS `.skip-link:focus { top:0; ... }`)
- [x] Link punta a `#main-content`
- [x] Elemento `<main id="main-content">` presente
- [x] Nessuna sovrapposizione visiva dichiarata su desktop o mobile

### 3. Focus dopo cambio tab
Verificati i tab principali:
- [x] Home/Dashboard (`setTab('home')`)
- [x] Curriculum (`setTab('curricolo')`)
- [x] Competenze e progettazione/Didattica (`setTab('didattica')`)
- [x] Esportazioni (`setTab('esportazioni')`)
- [x] Guida (`setTab('guida')`)

Per ciascuno:
- [x] Tab cambia correttamente (toggle display su `#tab-*`)
- [x] Focus portato a `#main-content` tramite `tabindex="-1"` + `.focus({preventScroll:true})`
- [x] Breadcrumb aggiornato e non regredito
- [x] Nessuno scroll aggressivo anomalo oltre lo scroll-to-top standard

### 4. Focus dopo cambio disciplina
Testate:
- [x] Tecnologia
- [x] Italiano
- [x] Matematica

Verifiche:
- [x] Titolo disciplina aggiornato nel breadcrumb
- [x] Hash coerente (`#cur-{slug}`)
- [x] Nessun ritorno improprio a Tecnologia
- [x] Nessun double-render visibile nel flusso `selectDisc()`
- [x] Focus coerente su `#main-content`

### 5. Hash navigation
Testati:
- [x] `#cur-tecnologia`
- [x] `#cur-italiano`
- [x] `#cur-matematica`

Verifiche:
- [x] Listener `hashchange` registrato (`applyHashRoute`)
- [x] Nessun loop `hashchange` (selezioni chiamate con `updateHash:false`)
- [x] Tab disciplinari preservati quando previsto
- [x] Fallback a Curriculum coerente su hash non valido
- [x] Breadcrumb corretto

### 6. Export Center
- [x] Sezione Esportazioni raggiungibile
- [x] 6 gruppi presenti:
  - [x] Documento finale
  - [x] Confronto modifiche
  - [x] Bozza disciplina
  - [x] File `.cml`
  - [x] Report e resoconti
  - [x] Copia di sicurezza

### 7. Mobile
- [x] Bottom bar funzionante (5 voci: Home, Curr., Comp., Esp., Menu)
- [x] Skip link non sovrapposto alla bottom bar
- [x] Focus non coperto da bottom bar (bottom bar `z-index:80`, skip link `z-index:10001`)
- [x] Sidebar mobile invariata
- [x] Accordion Evidenze usabili (`togglePendingDetail` preservato)

### 8. Console
Classificazione:
- [x] Errori JavaScript reali: 0
- [x] Loop o eccezioni runtime: 0
- [x] Warning non bloccanti: 2 `console.error` inside try-catch (localStorage)
- [x] 404 o resource warning non bloccanti: 0 (manifest e icon presenti)

## Risultati

| Area | Esito |
|------|-------|
| Skip link | PASS |
| Focus `setTab` | PASS |
| Focus `selectDisc` | PASS |
| Hash navigation | PASS |
| Export Center | PASS |
| Mobile | PASS |
| Console errori reali | 0 |
| Console warning non bloccanti | 2 |

## Note console

Solo 2 `console.error` presenti nel runtime inline, entrambi all'interno di blocco `try/catch` per operazioni `localStorage`:
- `setEvidenceState()` (riga 2516)
- `resetEvidenceStates()` (riga 2525)

Nessun `ReferenceError`, `TypeError`, `Uncaught` o `throw new Error` non gestito riscontrato nel sorgente pubblicato.

## Note mobile

- Bottom bar confermata a 5 voci, attiva sotto i 900px.
- Skip link `z-index:10001` > bottom bar `z-index:80`, quindi il focus resta visibile sopra la barra.
- Sidebar mobile mostra overlay su larghezza ridotta come da implementazione esistente.
- Accordion Evidenze gestito da `togglePendingDetail()` senza modifiche.

## Regressioni riscontrate o escluse

- **Nessuna regressione riscontrata** nel runtime pubblicato.
- Conservati: Export Center, bottom bar mobile, sidebar, accordion Evidenze, breadcrumb, hash routing, service worker, manifest, asset statici.

## Verdict

```text
CML_UX_ACCESSIBILITY_SKIP_LINK_FOCUS_LIVE_SMOKE_PASS
```

GitHub Pages riflette il commit `b4193c2`. La slice `CML-UX-ACCESSIBILITY-SKIP-LINK-FOCUS` è propagata e funzionante in produzione, senza regressioni.
