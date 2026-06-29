# CML-014A — Contextual Detail Panel Design Audit

## Stato

Audit e progettazione del pannello dettaglio contestuale per le voci di revisione.
Solo audit — nessuna modifica runtime, nessun deploy.

## Preflight

| Campo                           | Valore                                   |
| ------------------------------- | ---------------------------------------- |
| Branch                          | `cml-008r-fix-markdown-decision-summary` |
| HEAD                            | `b7d7f72`                                |
| Working tree                    | Pulita ✅                                |
| URL pubblicato                  | `https://curmanlight.netlify.app`        |
| Nessuna modifica runtime        | ✅                                       |
| Nessun deploy                   | ✅                                       |
| CML-013A/B/C/D/E/F/G preservati | ✅                                       |

## 1. Analisi del dettaglio attuale

### Componenti coinvolti

| Componente                           | Linee     | Funzione                                     |
| ------------------------------------ | --------- | -------------------------------------------- |
| `cardHTML()`                         | 1393-1497 | Genera HTML completa della card              |
| `togglePendingDetail(id)`            | 1377-1383 | Apre/chiude dettaglio confronto              |
| `toggleCollapse(id)`                 | 1385-1391 | Apre/chiude card ok/decise                   |
| `.pending-detail`                    | 176-177   | CSS: nascosto per default, `.open` lo mostra |
| `.panels` / `.panel`                 | 131-138   | Griglia di confronto 2 colonne               |
| `.pending-body` / `.pending-actions` | 164-167   | Riga compatta badge + 4 azioni               |
| `.card-acts`                         | 142       | Footer azioni secondarie                     |

### Flusso utente attuale

```
Card pending compatta:
┌──────────────────────────────────┐
│ ✎ Modifica proposta  📍 3ª      │
│ Proposta IN 2025: testo troncato │
│ ✅ ❌ 🔍 🗑                      │
├──────────────────────────────────┤
│ (🔍 cliccato)                    │
│ ┌──────────┬─────────────┐       │
│ │ IN 2012  │ ✨ IN 2025  │       │
│ │ (attuale)│ (proposta)  │       │
│ └──────────┴─────────────┘       │
│ [✏️ Personalizza testo]          │
└──────────────────────────────────┘
```

Su mobile (≤760px), i pannelli diventano 1 colonna (stack verticale).

### Card ok/decise

```
┌──────────────────────────────────┐
│ ✓ Nessuna modifica  📍 3ª       │
│ Testo troncato...           ▸    │  ← clicca per espandere
├──────────────────────────────────┤
│ (testo completo se espanso)      │
│ [✏️ Modifica] [🗑 Rimuovi]      │
└──────────────────────────────────┘
```

## 2. Criticità individuate

| #   | Criticità                                                                                                                                                                                                | Componente                              | Impatto                          |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- | -------------------------------- |
| C1  | **Dettaglio lungo su mobile** — su ≤760px i pannelli stackano verticalmente. Il confronto IN2012/IN2025 diventa una colonna molto alta, richiede scrolling eccessivo                                     | `.panels` → `grid-template-columns:1fr` | Medio — peggiora con voci lunghe |
| C2  | **Confronto poco gerarchico** — nessuna evidenziazione delle differenze tra IN2012 e proposta. L'utente deve confrontare manualmente due blocchi di testo                                                | `.panel .panel-text`                    | Alto — rallenta "comprendo"      |
| C3  | **Fonti non contestuali** — il pannello mostra "IN 2012 (attuale)" e "Proposta IN 2025" ma non indica la fonte normativa specifica (es. "DM 254/2012, Traguardo X")                                      | `panel-lbl`                             | Medio — riduce trust             |
| C4  | **Rischio confondere dettaglio e azione** — pulsanti ✅ ❌ nella riga compatta, 🔍 apre dettaglio, ma "Personalizza testo" è solo NEL dettaglio. Se chiudi il dettaglio, perdi accesso rapido all'editor | `pending-actions` vs `card-acts`        | Medio — flusso interrotto        |
| C5  | **Lista appesantita con più dettagli aperti** — se l'utente apre 🔍 su più card pending, la lista diventa molto lunga. Nessun collapse automatico all'apertura di un altro dettaglio                     | `togglePendingDetail()`                 | Basso — uso raro                 |
| C6  | **Gap mobile/desktop** — su desktop 2 colonne (confrontabile), su mobile 1 colonna (non comparabile). L'utente mobile ha esperienza peggiore                                                             | `.panels` responsive                    | Medio                            |
| C7  | **Compatibilità bottom bar** — `body{padding-bottom:52px}` risolve overlap. Ma il dettaglio lungo può estendersi sotto la bottom bar, rendendo l'ultima parte poco visibile                              | padding-bottom                          | Basso — già risolto              |

## 3. Opzioni valutate

### Opzione A — Dettaglio espandibile migliorato

Il dettaglio resta nella card, ma con miglioramenti di gerarchia, confronto e fonti.

```
Card pending migliorata:
┌──────────────────────────────────┐
│ ✎ Modifica proposta  📍 3ª      │
│ Proposta IN 2025                 │
│ (testo completo o sintesi)       │
│ ✅ ❌ 🔍 ✏️ 🗑                  │  ← "Personalizza" in primo piano
├──────────────────────────────────┤
│ 🔍 = dettaglio espandibile       │
│ ┌ IN 2012 ──────────────────┐   │
│ │ DM 254/2012 · Traguardo X │   │
│ │ Testo originale...         │   │
│ │ [testo normale]            │   │
│ ├────────────────────────────┤   │
│ │ ➕ DM 221/2025 · Gap       │   │
│ │ 📌 differenza evidenziata  │   │
│ │ Proposta: nuovo testo...   │   │
│ │ [testo grassetto/diff]     │   │
│ └────────────────────────────┘   │
│ [✏️ Personalizza testo]          │
└──────────────────────────────────┘
```

| Aspetto                        | Valutazione                                                      |
| ------------------------------ | ---------------------------------------------------------------- |
| **Valore per docente**         | Confronto più chiaro, fonti visibili, "Personalizza" non sepolto |
| **Rischio**                    | Basso — modifica solo `cardHTML()` e CSS                         |
| **Impatto desktop**            | Basso — 2 colonne preservate                                     |
| **Impatto mobile**             | Medio — sezioni compatte con scroll interno                      |
| **File interessati**           | `index.html` (solo CSS + JS `cardHTML()`)                        |
| **Cosa non toccare**           | Logica approvazione/rifiuto, conteggi, export, asset             |
| **Compatibilità bottom bar**   | ✅ padding-bottom 52px già presente                              |
| **Compatibilità menu overlay** | ✅ nessun nuovo z-index                                          |
| **Raccomandazione**            | ✅ Basso rischio, massimo valore informativo                     |

### Opzione B — Pannello laterale desktop + pannello mobile dedicato

Desktop: dettaglio in un pannello a destra (tipo sidebar).
Mobile: dettaglio a tutta larghezza sotto la card o in drawer.

```
Desktop:
┌──────────────────────┬──────────┐
│ Lista card           │ Dettaglio│
│ ┌──────────────────┐ │ voce     │
│ │ Card pending     │ │ ──────── │
│ │ ✅❌🔍          │ │ IN 2012  │
│ └──────────────────┘ │ VS       │
│ ┌──────────────────┐ │ IN 2025  │
│ │ Card ok          │ │          │
│ └──────────────────┘ │ Azioni   │
└──────────────────────┴──────────┘

Mobile:
┌──────────────────────┐
│ Card pending         │
│ ✅❌🔍             │
│ ──────────────────── │
│ Dettaglio full-width │  ← expand sotto la card
│ IN 2012 / IN 2025    │
│ Azioni               │
└──────────────────────┘
```

| Aspetto                        | Valutazione                                                                        |
| ------------------------------ | ---------------------------------------------------------------------------------- |
| **Valore per docente**         | Desktop: confronto laterale sempre visibile. Mobile: dettaglio dedicato            |
| **Rischio**                    | Alto — modifica layout completo (aggiunta colonna), rischio regressioni responsive |
| **Impatto desktop**            | Alto — richiede modifica al layout grid/flex della pagina                          |
| **Impatto mobile**             | Medio — simile a Opzione A su mobile                                               |
| **File interessati**           | `index.html` (CSS layout, JS gestione pannello)                                    |
| **Cosa non toccare**           | Stessi divieti                                                                     |
| **Compatibilità bottom bar**   | ⚠️ Il pannello laterale potrebbe intersecare la bottom bar su tablet               |
| **Compatibilità menu overlay** | ✅                                                                                 |
| **Raccomandazione**            | ⚠️ Troppo impattante per un primo incremento. Rimandare a CML-014C/D               |

### Opzione C — Modal / drawer contestuale

Il dettaglio si apre in un overlay modale/drawer dal basso, sovrapposto alla lista.

```
┌──────────────────────────────┐
│ Card pending                 │
│ ✅❌🔍                     │
│ Card pending                 │
│ ✅❌🔍                     │
│ ...                          │
├──────────────────────────────┤
│ ┌────────────────────────┐   │
│ │ Dettaglio voce         │   │  ← overlay/sheet
│ │ ─────────────────────  │   │
│ │ IN 2012 (attuale)      │   │
│ │ ...                    │   │
│ │                        │   │
│ │ Proposta IN 2025       │   │
│ │ ...                    │   │
│ │                        │   │
│ │ [✏️ Personalizza]      │   │
│ │ [Chiudi]               │   │
│ └────────────────────────┘   │
└──────────────────────────────┘
```

| Aspetto                        | Valutazione                                                                                          |
| ------------------------------ | ---------------------------------------------------------------------------------------------------- |
| **Valore per docente**         | Lista sempre pulita, dettaglio a schermo intero                                                      |
| **Rischio**                    | Alto — modal su modal (welcome, settings, menu overlay già esistono). Accessibilità mobile complessa |
| **Impatto desktop**            | Medio — overlay su desktop può disorientare                                                          |
| **Impatto mobile**             | Alto — gesture conflitto, scroll inside modal, overlap con bottom bar                                |
| **File interessati**           | `index.html` (nuovo overlay HTML+CSS+JS)                                                             |
| **Cosa non toccare**           | Stessi divieti                                                                                       |
| **Compatibilità bottom bar**   | ⚠️ Bottom bar z-index:80, overlay servirebbe z-index >80 ma <90 (menu). Margine stretto              |
| **Compatibilità menu overlay** | ⚠️ Già esiste menu overlay z-index:90. Dettaglio overlay = terzo livello                             |
| **Raccomandazione**            | ❌ Sovraccarica il sistema di overlay già presente. Rimandare                                        |

## 4. Opzione selezionata: A — Dettaglio espandibile migliorato

### Motivi

1. **Rischio minimo**: modifica solo `cardHTML()` e CSS `.pending-detail`, `.panels`, `.panel`. Nessuna modifica al layout della pagina.
2. **Valore informativo massimo**: fonti contestuali + differenze evidenziate risolvono C2 e C3 — i problemi principali.
3. **Compatibilità garantita**: bottom bar (padding 52px già presente), menu overlay (nessun nuovo z-index), sidebar contestuale (nessuna modifica).
4. **Progressione naturale**: si migliora l'esistente prima di introdurre nuovi pattern. Opzione B può essere CML-014C futuro.
5. **Nessuna modifica ai dati**: la logica di approvazione/rifiuto, conteggi, export, asset resta intatta.

### Schema architetturale CML-014B

```
Card pending migliorata:
┌──────────────────────────────────────┐
│ ✎ Modifica proposta  📍 3ª          │  ← badge + classe
│ Proposta IN 2025: testo completo     │  ← proposta sempre visibile (no troncato)
│ [✅ Approva] [❌ Mantieni] [🔍 Confronto] [✏️ Testo] [🗑] │
├──────────────────────────────────────┤
│ (🔍 = confronto strutturato)         │
│ ┌ IN 2012 — DM 254/2012, X.1 ────┐  │  ← sempre 2 colonne su desktop
│ │ Testo originale...              │  │     1 colonna su mobile
│ └─────────────────────────────────┘  │
│ ┌ IN 2025 — DM 221/2025, X.1 ────┐  │
│ │ Proposta di aggiornamento...    │  │
│ │ 📌 differenza evidenziata       │  │
│ └─────────────────────────────────┘  │
│ [✏️ Personalizza testo]              │
└──────────────────────────────────────┘
```

### Miglioramenti specifici

| Aspetto                   | Prima                                   | Dopo                                                               |
| ------------------------- | --------------------------------------- | ------------------------------------------------------------------ |
| Testo proposta            | Troncato a 90 caratteri                 | Completo (o comunque più lungo) — l'utente deve vedere la proposta |
| Pulsante "Personalizza"   | Solo dentro dettaglio 🔍                | Sempre visibile nella riga azioni                                  |
| Fonti confronto           | Solo "IN 2012 (attuale)" label generica | Etichetta con fonte specifica (es. "DM 254/2012, Traguardo X.1")   |
| Evidenziazione differenze | Nessuna — due blocchi di testo uguali   | Evidenziazione testo modificato/aggiunto/rimosso                   |
| Pannelli su mobile        | 1 colonna senza scroll                  | 1 colonna con scroll interno e max-height                          |
| Card ok/decise            | Collassate per default                  | Invariato (funziona bene)                                          |

## 5. Criteri di accettazione per CML-014B

| #   | Criterio                                     | Note                                                      |
| --- | -------------------------------------------- | --------------------------------------------------------- |
| 1   | Dettaglio accessibile senza perdere contesto | 🔍 apre confronto nella card, non la sostituisce          |
| 2   | Confronto leggibile su desktop               | Pannelli side-by-side ≥761px                              |
| 3   | Confronto leggibile su mobile                | Pannelli 1 colonna con scroll interno, max-height         |
| 4   | Fonti specificate nel confronto              | Almeno "DM 254/2012" vs "DM 221/2025" nei label           |
| 5   | Differenze evidenziate                       | Testo modificato/aggiunto visivamente distinguibile       |
| 6   | "Personalizza testo" sempre in primo piano   | Pulsante ✏️ nella riga azioni, non solo nel dettaglio     |
| 7   | Azioni approva/rifiuta sempre chiare         | ✅ ❌ nella riga compatta, invariate                      |
| 8   | Nessuna perdita informativa                  | Ogni informazione attuale deve rimanere accessibile       |
| 9   | Nessuna modifica ai dati                     | Local storage, salvataggio, backup inalterati             |
| 10  | Nessuna modifica ai conteggi                 | Sidebar conteggi, filtri invariati                        |
| 11  | Nessuna regressione mobile                   | Bottom bar, menu overlay, sidebar contestuale funzionanti |
| 12  | Nessuna regressione desktop                  | Layout ≥901px invariato                                   |
| 13  | Compatibilità con bottom bar                 | body padding-bottom 52px preservato                       |
| 14  | Compatibilità con breadcrumb dinamico        | Breadcrumb invariato                                      |
| 15  | Card ok/decise invariate                     | Collapse meccanismo preserved                             |
| 16  | Export e tecnologia panel invariati          | Markdown, Word, PDF generation preserved                  |

## 6. Problemi cosmetici CML-013G

| #   | Descrizione                                                                               | Decisione                                                                                                           |
| --- | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| P1  | CSS `.local-save-bar` morto (non più usato nel DOM)                                       | Lasciare come debt non bloccante. Non interferisce con pannello dettaglio. Possibile micro-pulizia futura separata. |
| P2  | Media query nidificata `@media(max-width:900px)and (max-width:380px)` sintassi ridondante | Lasciare come debt non bloccante. Non interferisce con pannello dettaglio.                                          |

Entrambi i problemi sono **cosmetici** e non interferiscono con CML-014B.
Vanno tenuti separati — eventuale CML-014X di micro-pulizia.

## 7. Cosa NON deve essere toccato in CML-014B

- ❌ Logica approvazione/rifiuto (`approve()`, `reject()`, `undoDecision()`)
- ❌ Conteggi
- ❌ Tecnologia export panel
- ❌ Markdown generation (`buildDocumentModel()`, `exportMarkdown()`)
- ❌ PDF, sw.js, _headers, manifest, icons
- ❌ Asset
- ❌ Desktop breakpoint ≥901px
- ❌ Bottom bar, menu overlay, sidebar contestuale, breadcrumb

## 8. Verdetto

```
CML_014A_CONTEXTUAL_DETAIL_PANEL_DESIGN_AUDIT_READY
```

## Output finale

| Campo                         | Valore                                                         |
| ----------------------------- | -------------------------------------------------------------- |
| Verdetto                      | `CML_014A_CONTEXTUAL_DETAIL_PANEL_DESIGN_AUDIT_READY`          |
| Branch                        | `cml-008r-fix-markdown-decision-summary`                       |
| HEAD partenza                 | `b7d7f72`                                                      |
| Criticità individuate         | 7 (C1-C7)                                                      |
| Opzioni valutate              | A (expand migliorato), B (pannello laterale), C (modal/drawer) |
| Opzione selezionata           | **A — Dettaglio espandibile migliorato**                       |
| Criteri accettazione CML-014B | 16 criteri                                                     |
| Problemi cosmetici CML-013G   | Lasciati come debt non bloccante (separati da CML-014B)        |
| Modifica runtime              | ❌ Nessuna                                                     |
| Deploy                        | ❌ Nessuno                                                     |
| Stato Git finale              | `b7d7f72` + commit docs                                        |

## Prossimo step

**CML-014B — Enhanced pending detail panel**
Implementazione dell'Opzione A: miglioramento gerarchia confronto, fonti contestuali, differenze evidenziate, pulsante "Personalizza" in primo piano. Modifiche solo a `index.html` (CSS + JS `cardHTML()`).
