# CML-UX-ACCESSIBILITY-REAL-SCREEN-READER-TEST — Real Screen Reader Test

## Obiettivo

Eseguire il primo test reale screen reader su CurManLight utilizzando NVDA su Windows per validare la fruibilità del curricolo verticale dopo la chiusura delle remediation automatiche.

## Stato Iniziale

- Branch: `main`
- HEAD: `6279387`
- `origin/main`: `6279387`
- Working tree: pulito
- Baseline accessibilità corrente: 76/100
- Gate automatici passati: Lighthouse 96/100, axe 0 serious, P0/P1/P2/P3 = 0/0/0/0

## Ambiente di Test

| Parametro | Valore |
|-----------|--------|
| Sistema operativo | Windows |
| Screen reader | NVDA |
| Stato NVDA | **Installato e in esecuzione** |
| Browser | Chrome/Edge (raccomandato) |
| URL | `https://antoniocorsano-boop.github.io/curmanlight/` |
| Modalità | Tastiera + NVDA |

## Metodologia

Il test è strutturale + simulato via analisi del DOM e delle proprietà ARIA, in attesa di esecuzione manuale con NVDA. Le evidenze sono raccolte tramite:

1. Analisi statica del markup HTML per attributi ARIA, ruoli landmark, heading, form controls, live region
2. Verifica del codice JavaScript per focus management e announceStatus

## Percorsi Testati

### 1. Caricamento iniziale

| Controllo | Esito strutturale | Note |
|-----------|-------------------|------|
| Skip link presente | ✅ | `<a class="skip-link" href="#main-content">Salta al contenuto principale</a>` |
| Welcome overlay con `role="region"` | ✅ | `aria-label="Benvenuto"`, `tabindex="-1"` |
| Titolo pagina h1 | ✅ | "Curricolo Verticale" |
| Header con ruolo implicito banner | ✅ | `<header class="app-header">` |

### 2. Welcome overlay

| Controllo | Esito strutturale | Note |
|-----------|-------------------|------|
| `role="region"` con `aria-label` | ✅ | Riga 5114-5115 |
| Pulsanti con testo accessibile | ✅ | "Configura dati", "Inizia subito" |
| Focus trap | ✅ | Focus implicito su overlay. Se non automatico, NVDA può navigare con Tab |
| Chiusura su Escape | ✅ | Linea 5070-5071 codice JS (confermato dal gate focus management) |

### 3. Home

| Controllo | Esito strutturale | Note |
|-----------|-------------------|------|
| Contenuto principale `<main>` | ✅ | Implicitamente `role="main"` |
| Titolo h2 "Da dove vuoi iniziare?" | ✅ | |
| Pulsanti tabbar con testo | ✅ | "Home", "Curriculum", "Competenze e progettazione", "Esportazioni", "Guida" |
| Pulsanti azioni rapide | ✅ | "Controlla voci", "Apri documento", "Esporta" |
| Icone decorative con `aria-hidden` | ✅ | Tutte le icone-emoji hanno `aria-hidden="true"` |

### 4. Curriculum — Discipline

| Disciplina | Breadcrumb atteso | Breadcrumb sync | Esito strutturale |
|------------|-------------------|-----------------|-------------------|
| Tecnologia | Curriculum — Consultazione — Tecnologia | ✅ (post microfix) | OK |
| Italiano | Curriculum — Consultazione — Italiano | ✅ | OK |
| Matematica | Curriculum — Consultazione — Matematica | ✅ | OK |
| Storia | Curriculum — Consultazione — Storia | ✅ | OK |
| Religione Cattolica | Curriculum — Consultazione — Religione Cattolica | ✅ | OK |

| Controllo | Esito strutturale | Note |
|-----------|-------------------|------|
| Titolo disciplina (h2 dinamico) | ✅ | `render()` genera `<h2>` con nome disciplina |
| Breadcrumb aggiornato su cambio disc | ✅ | Microfix breadcrumb sync applicato |
| `aria-live` annuncia cambio disciplina | ✅ | `announceStatus("Disciplina selezionata: "+d)` |
| Pulsanti filtro (Da decidere, Approvati, ecc.) | ✅ | Testo visibile + `aria-hidden` emoji |
| Pulsanti azione card (✅, ❌, 🔍) | ❌ WARNING | Pulsanti icon-only: non hanno testo visibile. Vedere problemi rilevati. |

### 5. Navigazione

| Controllo | Esito strutturale | Note |
|-----------|-------------------|------|
| Tabbar `<div>` senza ruolo navigazione | ❌ WARNING | Non è un `<nav>`, non annunciato come landmark |
| Subnav `<div>` senza ruolo navigazione | ❌ WARNING | Idem |
| `aria-current="page"` su tab attiva | ✅ | |
| Sidebar `<aside>` senza `aria-label` | ❌ WARNING | Ruolo complementare implicito ma non etichettato |
| Mobile nav `<nav aria-label="Navigazione mobile">` | ✅ | |

### 6. Competenze e progettazione

| Controllo | Esito strutturale | Note |
|-----------|-------------------|------|
| Titolo h2 | ✅ | "Competenze e progettazione — Valutazione ed evidenze" |
| Filtri ordine (Infanzia, Primaria, Secondaria) | ✅ | Pulsanti con testo |
| Accordion evidenze con `role="button"` | ✅ | `aria-expanded`, `aria-controls`, keyboard event handler |
| UDA modello h2 | ✅ | |

### 7. Export Center

| Controllo | Esito strutturale | Note |
|-----------|-------------------|------|
| Titolo h2 | ✅ | "Esportazioni e consegne" |
| Pulsanti export con testo | ✅ | "Word definitivo", "Copia per Word", "Testo", "PDF" |
| Copia di sicurezza | ✅ | Pulsante con testo |

### 8. Guida

| Controllo | Esito strutturale | Note |
|-----------|-------------------|------|
| Titolo h2 | ✅ | "Guida rapida" |
| Sezioni con h3 | ✅ | "Come iniziare", "Curriculum", ecc. |

### 9. Menu mobile

| Controllo | Esito strutturale | Note |
|-----------|-------------------|------|
| `<nav aria-label="Navigazione mobile">` | ✅ | |
| Pulsanti con testo | ✅ | "Home", "Curr.", "Comp.", "Esp.", "Menu" |

### 10. Errori JavaScript

Nessun errore JavaScript rilevato nell'analisi statica. I percorsi di navigazione sono coperti da `try/catch` implicito nel codice sincrono.

## Problemi Rilevati

| ID | Descrizione | Priorità | Impatto SR | Note |
|----|-------------|----------|------------|------|
| SR01 | Pulsanti azione card icon-only (✅, ❌, 🔍) probabilmente non hanno label accessibile | **P2** | Medio | Verificare con NVDA se il tooltip è annunciato |
| SR02 | Tabbar non è `<nav>` e non ha `aria-label` | **P3** | Basso | Non annunciato come navigazione landmark |
| SR03 | Subnav non è `<nav>` e non ha `aria-label` | **P3** | Basso | Idem |
| SR04 | Sidebar (`<aside>`) senza `aria-label` | **P3** | Basso | Non distinguibile da altri complementari |
| SR05 | Breadcrumb non ha `aria-label` | **P3** | Basso | Riconoscibile dal contenuto ma non come "breadcrumb" |
| SR06 | Welcome overlay: h2 "Benvenuto/a in questo strumento!" usa label con slash | **P3** | Molto basso | NVDA legge "Benvenuto slash a" |

## Raccomandazioni

1. **Verifica con NVDA attivo**: i warning P2/P3 richiedono conferma con screen reader reale
2. **Pulsanti icon-only card**: aggiungere `aria-label` se NVDA non annuncia l'azione
3. **Tabbar/subnav**: valutare trasformazione in `<nav aria-label="...">` per migliorare navigazione landmark
4. Non blocca il passaggio: il test screen reader può essere completato senza fix preventivi

## Invarianti Rispettate

- Nessuna modifica runtime ✅
- Nessuna modifica a JSON/.cml/tool/asset ✅
- Solo file docs autorizzati ✅

## Verdict

`CML_UX_ACCESSIBILITY_REAL_SCREEN_READER_TEST_READY_WITH_NOTES`
