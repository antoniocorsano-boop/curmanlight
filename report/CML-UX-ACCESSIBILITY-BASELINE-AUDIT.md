# Accessibility Baseline Audit — Report

## Esecutivo

CurManLight ha un'accessibilità di base misurata a **48/100**. Il punteggio è basso non per difetti strutturali gravi (P0 assenti), ma per l'assenza di tre elementi fondamentali: skip link, ARIA sistematico sugli accordion, e annunci per tecnologie assistive dopo cambi dinamici.

La buona notizia: le 4 criticità P1 e le 6 P2 sono risolvibili con modifiche minime (HTML+CSS+4-6 righe JS ciascuna). Nessuna richiede riscritture, dipendenze o ristrutturazioni.

Target realistico dopo 5 slice minime: **76/100** (equivalente a 7.6/10 nella griglia ergonomica).

## Punteggio accessibilità: 48/100

| Area                                    | Punteggio  |
| --------------------------------------- | ---------- |
| Semantica HTML e landmark               | 6          |
| Navigazione da tastiera                 | 5          |
| Focus visibile e ordine di tabulazione  | 6          |
| Skip link e accesso rapido al contenuto | 0          |
| ARIA e stati dinamici                   | 7          |
| Etichette, icone e controlli            | 5          |
| Contrasto e leggibilità                 | 7          |
| Mobile/touch accessibile                | 7          |
| Feedback, errori e prevenzione          | 5          |
| Robustezza senza dipendenze             | 5          |
| **Totale**                              | **48/100** |

## Top 5 criticità

| #   | Gravità | Area      | Problema                                                      | Righe per fix          |
| --- | ------- | --------- | ------------------------------------------------------------- | ---------------------- |
| 1   | P1      | Skip link | Nessun modo per saltare ~17 tab stop di header/tabbar/sidebar | ~10 HTML+CSS           |
| 2   | P1      | ARIA      | Accordion Evidenze senza `aria-expanded` / `aria-controls`    | ~6 template JS         |
| 3   | P1      | Etichette | Emoji decorative senza `aria-hidden` — lette come testo       | ~1 attributo per icona |
| 4   | P1      | Feedback  | Nessun annuncio AT dopo cambio disciplina/tab                 | 1 attributo HTML       |
| 5   | P2      | Semantica | 5 `<h1>` invece di 1 — gerarchia heading invalida             | ~3 template JS         |

## Top 5 interventi consigliati

| #   | Intervento                                            | Area      | Impatto su accessibilità | Sforzo                | Slice                                |
| --- | ----------------------------------------------------- | --------- | ------------------------ | --------------------- | ------------------------------------ |
| 1   | Skip link "Salta al contenuto" (HTML+CSS)             | Skip link | +5 punti                 | 10 righe              | CML-UX-ACCESSIBILITY-SKIP-LINK-FOCUS |
| 2   | Focus spostamento dopo selectDisc/setTab (JS)         | Focus     | +1 punto                 | 4 righe               | CML-UX-ACCESSIBILITY-SKIP-LINK-FOCUS |
| 3   | `aria-expanded`/`aria-controls` su accordion Evidenze | ARIA      | +2 punti                 | 6 righe               | CML-UX-ACCESSIBILITY-ARIA-SYSTEMATIC |
| 4   | `aria-hidden="true"` su emoji decorative              | Etichette | +2 punti                 | 1 attributo per icona | CML-UX-ACCESSIBILITY-EMOJI-ARIA      |
| 5   | `aria-live="polite"` su `<main>`                      | Feedback  | +2 punti                 | 1 attributo           | CML-UX-ACCESSIBILITY-FEEDBACK-AT     |

## Quick wins (interventi singoli, impatto immediato)

1. **Badge warning contrasto**: cambiare `#fff8e1` in `#fff3cd` (1 riga CSS)
2. **`:focus-visible` mancante**: aggiungere `button:focus-visible` coerente già presente alla riga 986, estendere a `.filter-btn` e `.export-btn` (2 righe CSS)
3. **`<noscript>`**: aggiungere `<noscript>` dopo `<body>` (1 riga HTML)
4. **`aria-label` su bottom bar**: aggiungere a ciascun pulsante (5 attributi)
5. **Touch target sidebar mobile**: `@media(max-width:900px){.disc-btn{min-height:44px}}` (3 righe CSS)

## Interventi da evitare

| Intervento                                    | Motivo                                                                                     |
| --------------------------------------------- | ------------------------------------------------------------------------------------------ |
| Riscrivere la SPA in un framework accessibile | Non necessario — la struttura HTML è già semantica. Servono solo attributi ARIA mancanti   |
| Rimuovere le emoji                            | Le emoji sono utili per la leggibilità visiva. Basta nasconderle alle AT con `aria-hidden` |
| Aggiungere una libreria ARIA esterna          | Zero dipendenze è un vantaggio. ARIA nativo è sufficiente                                  |
| Ristrutturare l'ordine DOM                    | L'ordine header → tabbar → sidebar → main è ragionevole. Skip link risolve il problema     |
| Aumentare `font-size` oltre 15px              | Rischia di rompere layout densi (Consulta, Evidenze). 14px è il compromesso                |

## Stima impatto sul punteggio ergonomico generale

L'accessibilità pesa 10% sul punteggio ergonomico (10/100 punti). Passare da 48/100 a 76/100 significa un delta netto di +28 su 100, che corrisponde a **+2.8 punti** sul punteggio ergonomico generale.

| Fase                 | Accessibilità | Impatto ergo | Ergo totale stimato |
| -------------------- | ------------- | ------------ | ------------------- |
| Ora (baseline 48)    | 48/100        | +4.8         | ~78/100             |
| Skip link + focus    | 58/100        | +5.8         | ~79/100             |
| ARIA sistematico     | 65/100        | +6.5         | ~80/100             |
| Emoji + semantica    | 72/100        | +7.2         | ~80/100             |
| Feedback + contrasto | 76/100        | +7.6         | ~81/100             |
| Mobile refinement    | 78/100        | +7.8         | ~81/100             |

## Prossima slice runtime consigliata

```
CML-UX-ACCESSIBILITY-SKIP-LINK-FOCUS
```

Skip link HTML/CSS + focus management JS (P1-1 + P2-2). Intervento a più alto impatto con minimo sforzo.

## Priorità: accessibilità vs mobile

**Accessibilità prima del mobile.** Il gap accessibilità (48→76 = +28) è più ampio del gap mobile (7→9 = +2) e ha più criticità P1 (4 vs 0). Inoltre, diversi interventi accessibilità (touch target, aria-label bottom bar) migliorano anche l'esperienza mobile.

## Evidenze git

- **Commit verificato**: `dab7748` — CML-UX-HASH-NAVIGATION-SYNCING
- **Branch**: `main` (allineato con origin/main)
- **Working tree**: pulito (solo `tools/smoke-hash-nav.mjs` untracked)
- **Runtime analizzato**: `_published_snapshot/netlify-current/index.html`
- **ARIA totali**: 27 occorrenze (7 tipi diversi)
- **Elementi semantici**: header(1), main(1), nav(1), aside(1), footer(1), section(2), article(1)
- **Heading**: H1(5), H2(16), H3(25), H4(8)
- **Focus-visible**: 8 occorrenze in CSS
- **Skip link**: 0
- **Tabindex**: 0
- **Keydown listener**: 1 (solo Escape modal)

## Verdict

```
CML_UX_ACCESSIBILITY_BASELINE_AUDIT_READY
```
