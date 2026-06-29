# CML UX Accessibility Baseline Audit

## Baseline tecnica

- **Commit verificato**: `dab7748` (HEAD, origin/main, origin/HEAD)
- **Runtime**: `_published_snapshot/netlify-current/index.html` (5774 righe)
- **Precedente punteggio accessibilità**: 6/10 (CML-UX-ERGONOMICS-RE-AUDIT, commit `9fa751c`)
- **Punteggio ergonomico più recente**: 76/100 (score refresh, commit `338f610`)
- **Stimato dopo hash navigation syncing**: ~78/100 (non formalizzato)

## Scopo

Eseguire un audit docs-only dell'accessibilità di base di CurManLight. Produrre punteggio numerico distinto dal punteggio ergonomico generale, classificare le criticità e produrre una roadmap runtime con priorità misurabili.

## Vincoli

- Docs-only: nessuna modifica runtime
- Nessuna modifica a `content/`, `tools/`, `sw.js`, `manifest.json`, asset
- Nessun push, nessun deploy
- Audit basato su lettura codice e simulazione flussi, non su test utente reale
- Zero dipendenze: ogni proposta deve indicare se realizzabile con solo HTML, HTML+CSS o HTML+JS minimo

## Metodo

1. Lettura completa della struttura HTML, CSS e JS del runtime
2. Conteggio e classificazione di landmark, heading, ARIA, ruoli, eventi
3. Analisi per ciascuna delle 10 aree della griglia di accessibilità
4. Assegnazione punteggio per area con motivazione
5. Classificazione criticità P0-P3
6. Roadmap verso 9/10 o 10/10

## Griglia di accessibilità

| Area | Punti |
|---|---|
| Semantica HTML e landmark | 10 |
| Navigazione da tastiera | 15 |
| Focus visibile e ordine di tabulazione | 10 |
| Skip link e accesso rapido al contenuto | 5 |
| ARIA e stati dinamici | 15 |
| Etichette, icone e controlli | 10 |
| Contrasto e leggibilità | 10 |
| Mobile/touch accessibile | 10 |
| Feedback, errori e prevenzione | 10 |
| Robustezza senza dipendenze | 5 |
| **Totale** | **100** |

## Risultati per area

### 1. Semantica HTML e landmark: 6/10

| Criterio | Esito | Evidenza |
|---|---|---|
| `<html lang="it">` | OK | Corretto |
| Landmark regions (`header`, `main`, `nav`, `aside`, `footer`) | OK | Tutti presenti e semanticamente corretti |
| `<h1>` unico per pagina | NO | 5 `<h1>` elementi — il primo nell'header statico (`<h1>Curricolo Verticale</h1>`), gli altri generati dinamicamente in template JS (esportazioni, guida, modali) |
| Gerarchia h2/h3 | PARZIALE | h2 per titoli di sezione, h3 per card e gruppi. Struttura coerente ma generata via JS — alcune viste dinamiche potrebbero saltare livelli |
| `<section>` | MINIMO | Solo 2 elementi `<section>` nonostante ci siano numerose aree logiche (accordion, pannelli, gruppi) |
| `<article>` | MINIMO | 1 solo `<article>` — le card disciplinari usano `<div class="card">` |
| `<button>` vs `<div>` | OK | Tutti i controlli cliccabili sono `<button>` corretti. Sidebar discipline usa `<button class="disc-btn">` |

**Criticità:**
- H1 multipli: `esportazioni` e `guida` generano `<h1>` in template HTML via JS
- Le card delle unità di apprendimento sono `<div>` invece di `<article>` — perdita di semantica per AT
- Le sezioni di ordine (Infanzia, Primaria, Secondaria) usano `<div class="ordine-hd">` invece di `<h2>` o `<h3>` strutturali

**Intervento consigliato:**
- Unificare gli h1: lasciare solo l'header statico, usare h2 per i titoli di pagina generati dinamicamente (basso rischio, solo JS template)
- Convertire `<div class="card">` in `<article>` (basso rischio, CSS + JS template)
- Convertire `<div class="ordine-hd">` in `<h3>` (basso rischio)

### 2. Navigazione da tastiera: 5/15

| Criterio | Esito | Evidenza |
|---|---|---|
| Uso senza mouse | PARZIALE | Tabbar, subnav, sidebar, accordion, pulsanti sono raggiungibili via Tab. L'ordine naturale segue la struttura DOM |
| Ordine tabulazione | PARZIALE | Header → Tabbar → Subnav → Sidebar → Main content. Sidebar prima del contenuto principale — l'utente deve attraversare ~14 discipline prima di arrivare al contenuto |
| Sidebar lunga | PROBLEMA | 14 discipline + 3 separatori ordine = ~17 tab stops obbligatori prima del contenuto |
| Pulsanti icona senza etichetta | P1 | Diversi pulsanti con solo emoji. Alcuni hanno `title` (buona pratica), ma `title` non è affidabile con tutte le AT |
| Tastiera su controlli dinamici | PARZIALE | I toggle `aria-expanded/aria-controls` funzionano con click ma non gestiscono esplicitamente Enter/Space (i `<button>` nativi lo fanno automaticamente) |
| Trappole da tastiera | NESSUNA | Nessuna trappola da tastiera rilevata |

**Criticità:**
- Sidebar discipline prima del main content costringe a ~17 tab stop per raggiungere il contenuto
- Nessun supporto a scorciatoie da tastiera per azioni frequenti (cambio disciplina, export)

**Intervento consigliato:**
- Skip link (vedi area 4) risolve la sidebar lunga
- Aggiungere `tabindex="-1"` agli elementi non interattivi nel flusso di tab

### 3. Focus visibile e ordine di tabulazione: 6/10

| Criterio | Esito | Evidenza |
|---|---|---|
| `:focus-visible` definito | OK | `button:focus-visible`, `a:focus-visible`, `.disc-btn:focus-visible` hanno `outline:2px solid #1a237e` |
| `:focus` su link header | OK | `.motto-link:focus` con `outline:2px solid #fff` |
| Outline coerente | PARZIALE | Alcuni controlli non hanno `:focus-visible` esplicito (es. `.filter-btn`, `.export-btn`, toggle checkbox) |
| Ordine di tab implicito | OK | `tabindex` non usato — ordine DOM naturale, nessuna anomalia |
| Focus dopo azione | ASSENTE | Dopo cambio disciplina, cambio tab, apertura accordion, nessun focus management esplicito. Il focus potrebbe rimanere su elementi ormai nascosti |
| `tabindex` esplicito | NON USATO | Zero attributi `tabindex` — l'ordine è interamente DOM-dipendente |

**Criticità:**
- Dopo `setTab()`, il focus rimane sul pulsante clicked ma la vista cambia radicalmente — l'utente AT potrebbe non accorgersi del cambiamento
- Dopo `selectDisc()`, il focus rimane sulla sidebar — il contenuto principale cambia ma non c'è spostamento del focus
- `:focus-visible` mancante su `.filter-btn`, `.export-btn`, toggle checkbox, accordion headers

**Intervento consigliato:**
- Spostare il focus su `#main-content` o sul titolo disciplina dopo `selectDisc()` e `setTab()` (JS minimo, 2-3 righe per funzione)
- Aggiungere `:focus-visible` a tutti i controlli cliccabili rimasti (CSS, bassissimo rischio)

### 4. Skip link e accesso rapido al contenuto: 0/5

| Criterio | Esito | Evidenza |
|---|---|---|
| Skip link presente | NO | Nessun link "Salta al contenuto" o equivalente |
| Possibilità di saltare la sidebar | NO | Nessun meccanismo per evitare i ~17 tab stop della sidebar discipline |
| Accesso rapido alle azioni principali | NO | Nessuna scorciatoia da tastiera |

**Criticità:**
- Utenti che usano solo tastiera devono premere Tab ~15-20 volte per ogni cambio disciplina
- Sidebar è il primo elemento dopo la toolbar — massimo impatto sul tempo di navigazione

**Intervento consigliato:**
- Aggiungere un link "Salta al contenuto" come primo elemento del `<body>`, visibile solo al focus (HTML+CSS, 10 righe)
- Il link deve puntare a `#main-content` con `scrollIntoView` + focus management
- Impatto: 0 righe JS runtime, solo HTML+CSS. Rischio: nullo
- Possibile secondo skip link nel `<nav>` della sidebar: "Salta la barra laterale"

### 5. ARIA e stati dinamici: 7/15

| Criterio | Esito | Evidenza |
|---|---|---|
| `aria-current="page"` | OK | Gestito correttamente su subnav, tabbar e bottom bar (attivato/rimosso via JS) |
| `aria-expanded` | PARZIALE | Usato su header-toggle e quick-actions-toggle, ma NON su accordion headers delle Evidenze (rendered via JS) |
| `aria-controls` | PARZIALE | Solo su header-toggle e quick-actions-toggle — assente su accordion |
| `aria-label` | PARZIALE | Usato su textarea (anteprima), su pulsante "Mostra confronto", su nav mobile. Assente su molti controlli icon-only |
| `aria-labelledby` | OK | Usato sul dialog modale |
| `aria-live="polite"` | PARZIALE | Solo su 2 feedback (import dipartimento e validazione referente). Assente sulle aree di contenuto dinamico |
| `aria-modal="true"` | OK | Sul dialog modale |
| `role="dialog"` | OK | Sul dialog modale |
| `role="alert"` | OK | Sul messaggio errore codice operativo |
| `aria-disabled` | PARZIALE | Generato dinamicamente ma insieme a `disabled` nativo — ridondante in alcuni casi |
| `aria-hidden` | NON USATO | Non presente su nessun elemento decorativo |

**Criticità:**
- Accordion Evidenze (didattica) non ha ARIA: manca `aria-expanded`, `aria-controls`, `role="region"` sui pannelli
- Emoji decorative non hanno `aria-hidden="true"` — lette come testo dalle AT
- Dopo cambio contenuto dinamico, nessun `aria-live` annuncia il cambiamento
- Tabbar e subnav non hanno `role="tablist"` / `role="tab"` / `aria-selected`

**Intervento consigliato:**
- Aggiungere `aria-expanded` e `aria-controls` agli accordion Evidenze (template JS)
- Aggiungere `aria-hidden="true"` alle emoji decorative (CSS pseudo-elementi o attributo)
- Aggiungere `role="tablist"` e `role="tab"` alla tabbar e subnav (HTML, decorativo, basso rischio)
- Aggiungere `aria-live="polite"` sulla regione contenuto principale (`<main>`)

### 6. Etichette, icone e controlli: 5/10

| Criterio | Esito | Evidenza |
|---|---|---|
| Pulsanti icona con etichetta | PARZIALE | Alcuni hanno `title` (es. "Mostra confronto"), altri no. `title` non è un sostituto completo di `aria-label` |
| Emoji come icone non spiegate | P1 | Emoji in titoli di sezione, pulsanti etichetta "?" senza contesto |
| Controlli ambigui | MINIMO | "?" nei toggle è comprensibile contestualmente ma non auto-esplicativo fuori contesto |
| Etichette visibili | OK | Form e settings hanno `<label>` con `for` |
| Coerenza testo/funzione | OK | "Genera bozza", "Scarica proposta", "Importa esiti" sono chiari |
| Badge informativi | PARZIALE | Badge con stato (ok, modifica, nuovo) hanno solo colore — nessuna icona o testo che espliciti il significato a utenti daltonici |

**Criticità:**
- Emoji decorative senza `aria-hidden` e senza alternativa testuale (es. in header tab: `🏠`, `📘`, `🎯`)
- Badge di stato basati solo su colore (verde=ok, arancione=modifica, blu=nuovo, rosso=eliminato)
- Il pulsante "Nascondi invariati" toggle non ha `aria-pressed`

**Intervento consigliato:**
- Rivedere tutte le emoji nei template: aggiungere `aria-hidden="true"` e testo visibile alternativo o `aria-label`
- Aggiungere etichette testuali o pattern ai badge di stato (es. icona ✓ per "ok", ✏ per "modifica")
- Aggiungere `aria-pressed` al toggle "Nascondi invariati"

### 7. Contrasto e leggibilità: 7/10

| Criterio | Esito | Evidenza |
|---|---|---|
| Contrasto testo principale | OK | `#333` su `#fff` (ratio ~10:1) — eccellente |
| Contrasto link | OK | `#1a237e` su `#fff` (~7:1) — buono |
| Badge warning | P3 | `#fff8e1` sfondo con `#5d4037` testo — il giallo pastello su bianco ha contrasto insufficiente |
| Badge stato | PARZIALE | Card.ok: `#f1f8e9` sfondo con testo `#333` — contrasto sufficiente ma dipende dal font-weight |
| `:focus-visible` contrasto | OK | `#1a237e` su qualsiasi sfondo — sufficiente |
| Dimensione testo corpo | 13px | Leggermente piccolo per utenti ipovedenti. Minimo raccomandato: 16px |
| Spaziatura e densità | PARZIALE | La vista Consulta è densa (3-5 schermate). Spaziatura tra card OK |

**Criticità:**
- `13px` come dimensione base del corpo testo è sotto la soglia di comfort per utenti ipovedenti
- Badge warning giallo (`#fff8e1` / `#ffe082`) su testo marrone ha contrasto insufficiente (~3:1)
- Badge di stato card basati solo su colore bordo senza pattern visivo aggiuntivo

**Intervento consigliato:**
- Aumentare `body{font-size}` da `13px` a `14px` o `15px` (CSS, 1 riga, rischio basso — testare impatto su card dense)
- Migliorare contrasto badge warning (CSS, 1 riga)

### 8. Mobile/touch accessibile: 7/10

| Criterio | Esito | Evidenza |
|---|---|---|
| Touch target min 44px | OK | Bottom bar, tabbar, pulsanti > 44px |
| Bottom bar accessibile | PARZIALE | `<nav aria-label="Navigazione mobile">` presente. Pulsanti con solo emoji + testo breve. Nessun `aria-label` individuale |
| Sidebar mobile | PARZIALE | Sidebar diventa scroll orizzontale — OK ma i pulsanti disciplina sono piccoli (~36px) su mobile stretto |
| Accordion touch | OK | Accordion con header cliccabile, target adeguato |
| Sovrapposizione | NESSUNA | Nessuna sovrapposizione rilevata |
| Uso a una mano | PARZIALE | Bottom bar in basso facilita l'uso. Tabbar in alto richiede cambio impugnatura |

**Criticità:**
- Bottom bar pulsanti hanno solo testo breve + emoji: "🏠Home", "📘Curr.", "🎯Comp.", "📤Esp.", "☰..."
- Nessun `aria-label` sui singoli pulsanti bottom bar — le etichette abbreviate ("Curr.", "Comp.", "Esp.") potrebbero non essere chiare

**Intervento consigliato:**
- Aggiungere `aria-label` completo ai pulsanti bottom bar (es. "Curricolo" invece di solo "Curr.")
- Aumentare minimo touch target disciplina sidebar mobile a 44px (CSS media query)

### 9. Feedback, errori e prevenzione: 5/10

| Criterio | Esito | Evidenza |
|---|---|---|
| Feedback dopo azioni | PARZIALE | Feedback presente su import dipartimento (`aria-live`), validazione referente, salvataggio locale. Assente su cambio disciplina, cambio tab, esportazione |
| Annuncio di cambiamento | ASSENTE | Le AT non ricevono notifica quando il contenuto principale cambia (selectDisc, setTab). Utente potrebbe non accorgersi del nuovo contenuto |
| Conferma su azioni distruttive | PARZIALE | Presente su alcune azioni di import/export via `confirm()`. Non sistematico |
| Prevenzione errori | OK | Validazione codice operativo, controllo formato file .cml, feedback visivo su operazioni |
| Messaggi di errore | OK | `role="alert"` su errore codice, feedback colorato su import — buona pratica |

**Criticità:**
- Dopo cambio disciplina o tab, nessun annuncio per AT: `aria-live` assente sulla regione principale
- Le azioni di esportazione non hanno feedback esplicito di completamento via AT
- Nessuna conferma prima di uscire da una vista con modifiche non salvate (es. Evidenze)

**Intervento consigliato:**
- Aggiungere `aria-live="polite"` su `<main>` con aggiornamento testo dopo ogni render
- Aggiungere messaggio `aria-live` dopo completamento export ("Documento pronto per il download")

### 10. Robustezza senza dipendenze: 5/5

| Criterio | Esito | Evidenza |
|---|---|---|
| Zero dipendenze runtime | OK | Solo HTML+CSS+JS vanilla. Unico script esterno: docx CDN (opzionale, defer) |
| Funziona senza JS? | NO | L'app è una SPA — richiede JS. Il contenuto statico iniziale è HTML vuoto |
| Accessibilità nativa preservata | OK | `<button>`, `<label>`, elementi semantici corretti |
| Dipendenza da CDN | OK | docx.umd.min.js è opzionale e non blocca il rendering |

**Criticità:**
- L'app non ha fallback senza JS — lo `<style>` iniziale e la struttura HTML sono sufficienti per mostrare un messaggio "Abilita JavaScript" ma non c'è un `<noscript>` esplicito

**Intervento consigliato:**
- Aggiungere `<noscript>` con messaggio per utenti senza JS (HTML, 1 riga, nessun rischio)

## Punteggio accessibilità: 48/100

| Area | Punteggio |
|---|---|
| Semantica HTML e landmark | 6 |
| Navigazione da tastiera | 5 |
| Focus visibile e ordine di tabulazione | 6 |
| Skip link e accesso rapido al contenuto | 0 |
| ARIA e stati dinamici | 7 |
| Etichette, icone e controlli | 5 |
| Contrasto e leggibilità | 7 |
| Mobile/touch accessibile | 7 |
| Feedback, errori e prevenzione | 5 |
| Robustezza senza dipendenze | 5 |
| **Totale** | **48/100** |

## Relazione con punteggio ergonomico generale

Il punteggio ergonomico generale (76/100 → ~78/100 dopo hash navigation) ha Accessibilità pesata 10% = 10 punti. Un aumento da 48/100 a 90/100 (+42 punti netti) corrisponde a +4.2 punti sul punteggio ergonomico generale.

Contributo realistico dopo interventi P1/P2:

| Area accessibilità | Punteggio attuale | Target realistico | Delta | Impatto su ergo generale |
|---|---|---|---|---|
| Semantica HTML | 6 | 9 | +3 | +0.3 |
| Navigazione da tastiera | 5 | 8 | +3 | +0.3 |
| Focus visibile | 6 | 9 | +3 | +0.3 |
| Skip link | 0 | 5 | +5 | +0.5 |
| ARIA | 7 | 11 | +4 | +0.4 |
| Etichette/icone | 5 | 8 | +3 | +0.3 |
| Contrasto | 7 | 9 | +2 | +0.2 |
| Mobile | 7 | 9 | +2 | +0.2 |
| Feedback | 5 | 8 | +3 | +0.3 |
| Robustezza | 5 | 5 | 0 | 0 |
| **Totale** | **48** | **81** | **+33** | **+3.3** |

Obiettivo realistico: 81/100 accessibilità → ergonomia da 78 a ~81/100.

## Classificazione criticità

### P0 (bloccante per compiti essenziali): 0

Nessuna criticità P0 rilevata.

### P1 (ostacola significativamente accesso, orientamento o controllo): 4

| # | Area | Descrizione | Impatto | Evidenza | Intervento | Rischio |
|---|---|---|---|---|---|---|
| P1-1 | Skip link | Nessun meccanismo per saltare header/tabbar/sidebar (~17 tab stop) | Utenti tastiera devono premere Tab 15-20 volte per arrivare al contenuto | Nessun "Salta al contenuto" nel DOM | Aggiungere skip link come primo elemento del body, visibile al focus | Nullo — solo HTML+CSS |
| P1-2 | ARIA | Accordion Evidenze senza `aria-expanded` / `aria-controls` | Utenti screen reader non sanno se un pannello è aperto o chiuso | Accordion generato da JS senza ARIA | Aggiungere attributi ARIA ai template accordion | Basso — modifica template JS |
| P1-3 | Etichette | Emoji decorative senza `aria-hidden` e senza alternativa testuale | Lette come testo ("stella", "casa", "libro") — creano confusione | Emoji in titoli sezione, pulsanti, badge | Aggiungere `aria-hidden="true"` a emoji decorative + testo alternativo dove serve | Basso — template JS e CSS |
| P1-4 | Feedback | Nessun annuncio AT dopo cambio disciplina/tab | Utente screen reader non sa che il contenuto è cambiato | `aria-live` solo su 2 feedback specifici | Aggiungere `aria-live="polite"` su `<main>` | Basso — 1 attributo HTML |

### P2 (miglioria utile con impatto moderato): 6

| # | Area | Descrizione |
|---|---|---|
| P2-1 | Semantica | 5 `<h1>` invece di 1 — invalidano la gerarchia heading. Correggere template JS |
| P2-2 | Focus | Focus non spostato dopo `selectDisc()` e `setTab()`. Aggiungere `document.getElementById("main-content").focus()` |
| P2-3 | Contrasto | Badge warning con contrasto insufficiente (`#fff8e1` su `#5d4037`). Correggere colore sfondo |
| P2-4 | ARIA | Tabbar senza `role="tablist"`/`role="tab"`. Aggiungere alla struttura HTML |
| P2-5 | Focus | `:focus-visible` mancante su `.filter-btn`, `.export-btn`, checkbox toggle |
| P2-6 | Mobile | Sidebar disciplina mobile ha touch target sotto 44px su viewport stretto |

### P3 (rifinitura): 4

| # | Area | Descrizione |
|---|---|---|
| P3-1 | Contrasto | Badge stato card basati solo su colore — aggiungere pattern o icona |
| P3-2 | ARIA | Aggiungere `aria-pressed` al toggle "Nascondi invariati" |
| P3-3 | ARIA | Aggiungere `role="region"` ai pannelli accordion con `aria-labelledby` |
| P3-4 | Robustezza | Aggiungere `<noscript>` per utenti senza JS |

## Roadmap verso accessibilità 9/10 (81/100)

### Slice 1 — Skip link + focus management (P1-1, P2-2)
- Skip link "Salta al contenuto" (HTML+CSS, 10 righe)
- Focus spostamento su `#main-content` dopo `selectDisc()` e `setTab()` (JS, 4 righe)
- Impatto su accessibilità: skip link 0→5 (+5 punti), focus 6→7 (+1 punto)
- Impatto su ergonomia generale: +0.8 punti
- Sforzo: bassissimo

### Slice 2 — ARIA sistematico (P1-2, P2-4, P3-2, P3-3)
- Accordion Evidenze con `aria-expanded`/`aria-controls` (template JS)
- Tabbar/subnav con `role="tablist"`/`role="tab"` (HTML)
- `aria-pressed` su toggle "Nascondi invariati"
- Impatto su accessibilità: +4 punti
- Impatto su ergonomia generale: +0.4 punti
- Sforzo: basso

### Slice 3 — Emoji e icone (P1-3, P2-1)
- `aria-hidden="true"` su tutte le emoji decorative
- Verificare e correggere h1 multipli nei template
- Impatto su accessibilità: +4 punti (etichette + semantica)
- Impatto su ergonomia generale: +0.6 punti
- Sforzo: basso

### Slice 4 — Feedback AT e contrasto (P1-4, P2-3, P2-5, P3-1)
- `aria-live="polite"` su `<main>`
- `:focus-visible` sui controlli mancanti
- Contrasto badge warning
- Impatto su accessibilità: +4 punti
- Impatto su ergonomia generale: +0.5 punti
- Sforzo: basso

### Slice 5 — Mobile touch refinement (P2-6)
- Touch target 44px sidebar mobile
- `aria-label` completo su bottom bar
- Impatto su accessibilità: +1 punto
- Impatto su ergonomia generale: +0.2 punti
- Sforzo: bassissimo

## Stima finale

Dopo 5 slice minime (nessuna richiede più di 10-15 righe di modifiche), l'accessibilità sale da **48/100 a ~76/100** (7.6/10 in griglia ergonomica). Il punteggio ergonomico generale sale da ~78/100 a ~81/100.

Il vero salto (oltre 81/100) richiederebbe interventi più strutturali (revisione tabindex, implementazione scorciatoie da tastiera, onboarding guidato, contrasto sistemico) che escono dallo scopo di questa audit baseline.

## Prossima slice consigliata

```
CML-UX-ACCESSIBILITY-SKIP-LINK-FOCUS
```

Skip link + focus management (P1-1 + P2-2). È l'intervento a più alto impatto (skip link 0→5) con il minimo sforzo (HTML+CSS+4 righe JS). Risolve la criticità P1 più grave e prepara il terreno per le slice successive.

## Verdict

```
CML_UX_ACCESSIBILITY_BASELINE_AUDIT_READY
```
