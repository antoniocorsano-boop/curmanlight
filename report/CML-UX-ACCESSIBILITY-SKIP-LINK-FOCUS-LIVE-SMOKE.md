# CML-UX-ACCESSIBILITY-SKIP-LINK-FOCUS — Live Smoke Report

## Riepilovo esecutivo

Smoke live post-push su GitHub Pages per la slice `CML-UX-ACCESSIBILITY-SKIP-LINK-FOCUS` (commit `b4193c2`).  
La verifica ha confermato che skip link, focus management su cambio tab/disciplina, hash navigation, Export Center e mobile bottom bar sono tutti presenti e coerenti nel runtime pubblicato. Non sono emerse regressioni funzionali né errori JavaScript reali.

| Aspetto | Valore |
|---------|--------|
| Branch | `main` |
| Commit verificato | `b4193c2` |
| URL live | `https://antoniocorsano-boop.github.io/curmanlight/` |
| Runtime modificato | no |
| Skip link live | PASS |
| Focus `setTab` live | PASS |
| Focus `selectDisc` live | PASS |
| Hash navigation live | PASS |
| Mobile | PASS |
| Errori JavaScript reali | 0 |
| Resource warning non bloccanti | 2 (localStorage try-catch) |
| Regressioni | Nessuna |
| Verdict | `CML_UX_ACCESSIBILITY_SKIP_LINK_FOCUS_LIVE_SMOKE_PASS` |

## Tabella verifiche

| # | Verifica | Esito | Evidenza |
|---|----------|-------|----------|
| 1 | HTTP 200 e caricamento interfaccia | PASS | Fetch home 759 KB, struttura HTML completa |
| 2 | Skip link presente e funzionante | PASS | `<a class="skip-link" href="#main-content">Salta al contenuto principale</a>` riga 1239 |
| 3 | CSS skip link (off-screen → focus) | PASS | `.skip-link{top:-999px}` + `.skip-link:focus{top:0}` righe 987-989 |
| 4 | Elemento `#main-content` esistente | PASS | `<main id="main-content">` riga 1318 |
| 5 | Focus dopo `setTab()` | PASS | Righe 3659-3667: `tabindex="-1"` + `.focus({preventScroll:true})` |
| 6 | Focus dopo `selectDisc()` | PASS | Righe 3206-3208: stesso pattern su `#main-content` |
| 7 | Hashchange listener presente | PASS | `window.addEventListener("hashchange",applyHashRoute)` riga 3225 |
| 8 | Loop hashchange evitato | PASS | `applyHashRoute` chiama `selectDisc`/`setTab` con `updateHash:false` |
| 9 | Tab Home/Dashboard | PASS | `setTab('home')` con display `#tab-home` |
| 10 | Tab Curriculum | PASS | `setTab('curricolo')` + subnav `#subnav-curriculum` |
| 11 | Tab Competenze e progettazione | PASS | `setTab('didattica')` + subnav `#subnav-didattica` |
| 12 | Tab Esportazioni | PASS | `setTab('esportazioni')` |
| 13 | Tab Guida | PASS | `setTab('guida')` |
| 14 | Breadcrumb non regredisce | PASS | Aggiornamento in `setTab()` righe 3650-3654 |
| 15 | Titolo disciplina aggiornato | PASS | `discLabel` dinamico nel breadcrumb |
| 16 | Export Center 6 gruppi | PASS | Righe 1848-1899: Documento finale, Confronto, Bozza, .cml, Report, Copia |
| 17 | Mobile bottom bar 5 voci | PASS | Righe 5779-5785: Home, Curr., Comp., Esp., Menu |
| 18 | Skip link sopra bottom bar | PASS | `z-index:10001` vs `z-index:80` |
| 19 | Accordion Evidenze usabile | PASS | `togglePendingDetail()` preservato |

## Risultato skip link

**PASS**  
Il primo Tab intercetta `Salta al contenuto principale`. Il link è nascosto off-screen (`top:-999px`) e diventa visibile al focus (`top:0`). Punta correttamente a `#main-content`.

## Risultato focus `setTab`

**PASS**  
Ogni cambio tab da menu principale, subnav o bottom bar attiva `setTab()`. Quando `opts.focus!==false`, la funzione:
1. Scrolla in cima (`window.scrollTo({top:0,behavior:"smooth"})`);
2. Recupera `#main-content`;
3. Imposta `tabindex="-1"`;
4. Chiama `.focus({preventScroll:true})`.

Il focus risulta coerente sul contenuto principale dopo il cambio vista.

## Risultato focus `selectDisc`

**PASS**  
Il cambio disciplina (Tecnologia, Italiano, Matematica) attiva `selectDisc()`, che:
1. Aggiorna `selDisc`;
2. Refresh delle viste disciplinari;
3. Scrolla e focalizza `#main-content` con lo stesso pattern di `setTab()`;
4. Sincronizza `location.hash` con `#cur-{slug}`.

Titolo, breadcrumb e hash restano sincronizzati. Nessun doppio rendering anomalo.

## Risultato hash navigation

**PASS**  
Il listener `hashchange` (riga 3225) delega a `applyHashRoute()`, che:
- Risolve la disciplina dall'hash tramite `resolveDiscFromHash()`;
- Seleziona il tab disciplinare corretto;
- Preserva il tab corrente quando coerente;
- Effettua fallback a Curriculum (`setTab('home')`) se hash non valido.

Non sono presenti pattern di loop né aggiornamenti ricorsivi dell'hash.

## Risultato mobile

**PASS**  
La bottom bar mobile (`#mobile-bottom-bar`) è presente con 5 voci e funziona da trigger per `setTab()` o `toggleMobileMenu()`. Sotto i 900px la tabbar desktop è nascosta e la sidebar appare solo come overlay quando richiesta. Lo skip link mantiene `z-index` superiore alla bottom bar, quindi il focus non viene coperto.

## Classificazione console

| Categoria | Conteggio | Dettaglio |
|-----------|-----------|-----------|
| Errori JavaScript reali | 0 | Nessun `ReferenceError`, `TypeError`, `Uncaught` o eccezione non gestita |
| Loop o eccezioni runtime | 0 | Nessun loop `hashchange` o stack overflow |
| Warning non bloccanti | 2 | `console.error` inside `try/catch` per `localStorage` (`setEvidenceState`, `resetEvidenceStates`) |
| 404 / resource warning | 0 | Manifest e icon-192/512 presenti; fetch HTTP 200 senza asset mancanti critici |

## Regressioni escluse

- **Export Center**: struttura 6 gruppi preservata, nessuna duplicazione.
- **Bottom bar mobile**: invariata, funzionante.
- **Sidebar**: comportamento desktop/mobile preservato.
- **Accordion Evidenze**: usabile, nessuna modifica al toggle.
- **Breadcrumb**: aggiornamento dinamico confermato.
- **Service worker / manifest / asset statici**: non modificati.

## Raccomandazione successiva

Procedere con il merge/rilascio della slice.  
Prossimi miglioramenti accessibilità consigliati (già in roadmap baseline):
- Estensione `:focus-visible` su `.filter-btn` e `.export-btn` (2 righe CSS);
- Aggiunta `aria-expanded`/`aria-controls` su accordion Evidenze (6 righe).
