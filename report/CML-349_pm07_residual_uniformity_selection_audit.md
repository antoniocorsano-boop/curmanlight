# Report: CML-349 — PM-07 Residual Uniformity Selection Audit

## Branch e baseline
- Branch: `codex/cml-349-pm07-residual-uniformity-selection-audit`
- Commit iniziale: `5622ae6` (HEAD `main`, chiusura documentale CML-345-348)
- Tipo slice: docs-only (selection audit)
- Macroprogramma: PM-07 Uniformità

## Stato consolidato CML-345-348
- Verdict: `CML_345_348_MERGED_AND_PUBLISHED`
- PR #6 → merge `e87e023` → Pages run `28698122997` → HTTP 200 → smoke pubblico PASS
- Chiusura documentale: `5622ae6`
- Stato operativo: `READY_FOR_NEXT_SELECTION_AUDIT`

## Fonti lette
- `docs/02_system/PROJECT-STATE.md`
- `docs/02_system/PRODUCT-MATURITY-PROGRESS.md`
- `docs/02_system/PRODUCT-USABILITY-AND-UX-MATURITY-ROADMAP.md`
- `docs/02_system/PRODUCT-USABILITY-BACKLOG.md`
- `docs/02_system/PRODUCT-MATURITY-ACCEPTANCE-CRITERIA.md`
- `docs/02_system/UX-STANDARDS.md`
- `docs/REPO-MOVELOG.md`
- `docs/03_execution/CML-345-348-revision-ui-cluster.md`
- `report/CML-345-348_revision_ui_cluster.md`
- Runtime: `index.html` (audit testuale statico in sola lettura)

## Metodologia audit
Audit testuale e visivo statico del runtime (`index.html`) in sola lettura, senza modifiche. Strumenti: `findstr`, `Select-String`, `search_files`, ispezione manuale CSS/HTML. Cinque assi candidati analizzati.

## Sintesi audit per candidato

### C1 — Icone ancora emoji/testuali
- **Stato**: ~330+ emoji residue nel runtime. SVG sprite esistenti (~10 simboli) usati solo in navigazione, cruscotto e pulsanti revisione (CML-345-348). La stragrande maggioranza dei pulsanti azione, etichette stato, callout, form UDA usa ancora emoji.
- **Classificazione**: ~328 emoji funzionali da uniformare, ~2 emoji contenutistici (📌, 🎯 in form UDA), ~20+ icone SVG già coerenti.
- **Verdetto**: RIMANDATO. Intervento troppo vasto per slice singola; da pianificare progressivamente per area.

### C2 — Uniformità pulsanti cross-tab
- **Stato**: border-radius varia 6px–999px tra tab. Padding 5px–18px. Font-size 10px–13px. Gerarchia visuale assente in Processo, debole in Curricolo. ARIA presente solo in pulsanti revisione e cruscotto toggle.
- **Differenze chiave**: Home (pill + callout, buona gerarchia), Curricolo (filter-btn pill + disc-btn sidebar + export-btn rettangolari), Processo (emoji, nessuna gerarchia), Esportazioni (btn colorati per formato), Guida (minima).
- **Verdetto**: **SELEZIONATO**. Piccolo, visibile, reversibile, basso rischio, alto impatto percepito.

### C3 — Coerenza card e callout
- **Stato**: 7 famiglie card, 9 famiglie callout/alert/banner. Duplicazioni strutturali (~80% CSS condiviso tra home-card, home-context-card, home-applicability-card). Incoerenze: padding 7px–16px, border-radius 6px–14px, shadow 0–3 livelli.
- **Verdetto**: RIMANDATO. Richiede refactoring CSS strutturale; da affrontare dopo pulsanti e icone.

### C4 — Microcopy operativo
- **Stato**: Generalmente buono dopo CML-319. Residui minori: "File e salvataggio" tecnicamente insolito, tab "Riepilogo" ambiguo, emoji in etichette form, "Curricolo"/"Curriculum" non uniforme.
- **Verdetto**: RIMANDATO. Miglioramenti marginali; da accodare ad altri interventi.

### C5 — Dashboard/progress globale
- **Stato**: Nessuna dashboard strutturata presente. Cruscotto Home orientato alle azioni. Dati potenziali (avanzamento revisione, completamento 14/14, validazione dipartimentale) non aggregati in una vista.
- **Verdetto**: RIMANDATO. Richiede contratto dati preliminare prima di qualsiasi implementazione.

## Matrice di selezione

| Criterio | C1: Icone emoji | C2: Pulsanti cross-tab | C3: Card/callout | C4: Microcopy | C5: Dashboard |
|---|---|---|---|---|---|
| Impatto utente | Alto | Medio-Alto | Medio | Basso | Alto (futuro) |
| Riduzione carico cognitivo | Alto | Alto | Medio | Basso | Medio |
| Rischio runtime | Medio-Alto | Basso | Medio | Basso | Alto |
| Rischio dati/export | Basso | Basso | Basso | Basso | Medio |
| Chiarezza governance | Media | Alta | Media | Alta | Bassa |
| Facilità di validazione | Media | Alta | Media | Alta | Bassa |
| Dimensione stimata slice | Grande | Media | Media-Grande | Piccola | Grande |
| Necessità contratto preliminare | No | No | No | No | **Sì** |
| Priorità consigliata | Media | **Alta** | Bassa-Media | Bassa | Rimandato |

## Decisione

### Candidato scelto
**C2 — Uniformità pulsanti cross-tab**

### Candidati scartati o rimandati
- C1: RIMANDATO (troppo vasto, approccio progressivo per aree)
- C3: RIMANDATO (refactoring CSS strutturale, dopo C2)
- C4: RIMANDATO (marginale, da accodare)
- C5: RIMANDATO (richiede contratto dati preliminare)

### Motivazione
1. Piccolo, visibile, reversibile — solo CSS/HTML, nessuna logica JS
2. Alto impatto percepito — ogni interazione utente coinvolge pulsanti
3. Basso rischio — nessun impatto su dati, export, storage, workflow
4. Coerente con PM-07 — allinea componenti comuni (UX-024)
5. Prepara il terreno per C1 — pattern coerenti facilitano sostituzione emoji→SVG
6. Validabile rapidamente — smoke visivo cross-tab

### Prossima slice raccomandata
**CML-350 — PM-07 Cross-Tab Button Uniformity Microfix**
- Tipo: runtime microfix
- Macroprogramma: PM-07 Uniformità
- Backlog: UX-024 (componenti comuni non uniformi)
- Dipende da: CML-349

### Perimetro minimo CML-350
- Uniformare `border-radius` pulsanti (es. 8px)
- Uniformare `padding` base (6px–12px)
- Allineare `font-size` (11px–12px)
- Aggiungere `aria-label` mancanti
- Uniformare `focus-visible`
- NON toccare: emoji, SVG sprite, logica JS, dati, export

### File coinvolti in CML-350
- `index.html` (CSS + HTML)
- `_published_snapshot/netlify-current/index.html` (sincrono)

## Controlli eseguiti
- `git status --short --branch`: solo file docs
- `git diff --check`: PASS
- Preflight: branch `main` allineato a `origin/main`, HEAD `5622ae6`, working tree pulito
- Branch dedicato: `codex/cml-349-pm07-residual-uniformity-selection-audit`

## Fuori perimetro
- Nessuna modifica runtime
- Nessuna modifica a `_published_snapshot/netlify-current/index.html`
- Nessuna modifica a root `index.html`
- Nessuna modifica a service worker, workflow Pages, import/export, schema `.cml`, localStorage/sessionStorage
- Nessuna nuova dipendenza, build, backend, API, OAuth
- Nessun push, nessun PR, nessun deploy

## Verdict finale
`CML_349_PM07_RESIDUAL_UNIFORMITY_SELECTION_AUDIT_READY_LOCAL_NOT_PUSHED`