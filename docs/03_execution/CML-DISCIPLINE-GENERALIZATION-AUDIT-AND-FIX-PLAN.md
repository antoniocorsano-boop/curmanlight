# CML-DISCIPLINE-GENERALIZATION-AUDIT-AND-FIX-PLAN

## Obiettivo
Auditare CurManLight per individuare tutti i residui in cui "Tecnologia" è ancora trattata come disciplina modello, disciplina privilegiata o default improprio, ora che il curricolo è normalizzato 14/14. Produrre una mappa chiara dei punti da generalizzare prima di sviluppare progettazione annuale e UDA disciplinari per tutte le discipline.

## Stato iniziale
- Branch: `main`
- HEAD: `c4969e2`
- origin/main: `c4969e2`
- Working tree: pulito (untracked locali esclusi)
- Slice precedente: `CML-UX-NAVIGATION-AND-SCROLLING-STABILIZATION`
- Verdict precedente: `CML_UX_NAVIGATION_AND_SCROLLING_STABILIZATION_PUSHED`
- Runtime stabile
- Accessibilità: 88/100 audit-ready interno
- P0/P1/P2 accessibilità: 0/0/0
- Curriculum: 14/14 discipline normalizzate
- Runtime mappa dati: 14/14
- Validatore CML: 14/14 PASS
- Shape test: 14/14 PASS

## Metodologia audit
Ricerche mirate su runtime e documentazione, senza modifiche runtime. Classificazione in categorie A-H.

### Termini cercati
- `Tecnologia` / `tecnologia` / `TECNOLOGIA`
- `UDA` / `didattica_uda`
- `mappaDisciplinaCorrente`
- `disciplina modello` / `esempio`
- `export Tecnologia` / `proposta Tecnologia`
- `classi prime` / `classi seconde` / `classi terze` (legati a Tecnologia)

### Viste/file analizzati
- Runtime: `_published_snapshot/netlify-current/index.html` (intero file, sezioni chiave)
- Documentazione: `docs/03_execution/` (ultimi 20 file rilevanti), `report/` (ultimi 20 file rilevanti), `README.md`
- Dati curricolari: `content/curriculum/*.normalized.json` (solo audit, nessuna modifica)
- Export/import: audit funzioni e label, nessuna modifica
- UDA/progettazione: audit `UDA_MODELI`, `renderUdaModello()`, `generateUdaDraft()`
- Viste utente: Home, Curriculum, Competenze e progettazione, UDA modello, Esportazioni, Guida, mobile navigation

## Inventario residui Tecnologia-centrici

### Residui runtime

| ID | File/Area | Occorrenza | Categoria | Priorità | Impatto utente | Rischio fix | Proposta |
|----|-----------|------------|----------|----------|----------------|-------------|----------|
| DG-01 | index.html:2442 | `var mappaDisciplinaCorrente = 'tecnologia';` | C | P1 | Tecnologia appare come default mappa quando nessuna disciplina selezionata | Basso | `discKeyFromName(selDisc) \|\| null` |
| DG-02 | index.html:2458 | `if (mappaDisciplinaCorrente === 'tecnologia'...)` primo in catena else-if | D | P2 | Solo ordinamento; tutte 14 discipline sono coperte | Basso | Mantenere o riordinare alfabeticamente |
| DG-03 | index.html:2686 | `var selectedDisc = selDisc \|\| "Tecnologia";` in `renderUdaModello()` | C | P1 | UDA modello fallback a Tecnologia quando selDisc vuoto | Basso | `selDisc \|\| ""` + messaggio guida neutrale |
| DG-04 | index.html:2974 | `let selDisc=DISCIPLINE[0]\|\|"Tecnologia"` | C | P1 | Default iniziale selDisc | Basso | `DISCIPLINE[0]` (fallback redundant) |
| DG-05 | index.html:2976 | `DEFAULT_PROFILE.disciplina=DISCIPLINE[0]\|\|"Tecnologia"` | C | P1 | Default profilo utente | Basso | `DISCIPLINE[0]` |
| DG-06 | index.html:1361 | Home link "Tecnologia normalizzata" | D | P1 | Home card punta esplicitamente a pannello Tecnologia | Basso | "Normativa disciplina" o rimuovere link specifico |
| DG-07 | index.html:1476 | Button "Tecnologia" attivo in mappa disciplinare | D | P2 | Primo button evidenziato è Tecnologia al caricamento | Basso | Attivare prima disciplina in `DISCIPLINE` |
| DG-08 | index.html:2636-2680 | Array `UDA_MODELI` (2 modelli, entrambi Tecnologia) | F | P1 | Solo Tecnologia ha UDA statiche; altre discipline mostrano "Nessun modello statico disponibile" | Medio | Aggiungere modelli per altre discipline o rendere generico il messaggio introduttivo |
| DG-09 | index.html:5794-5886 | Funzione `renderTecnologiaNorm()` | E | P2 | Nome funzione Tecnologia-specifico; logica già generalizzata per `ALL_CURRICULUM_DATA[discKey]` | Medio | Rinominare in `renderNormPanel(discKey)` |
| DG-10 | index.html:1855 | `<div id="tecnologia-norm-panel" class="tecnologia-norm">` | E | P2 | ID e class CSS Tecnologia-specifici per pannello normativa | Medio | Rinominare in `disc-norm-panel` / `disc-norm` |
| DG-11 | index.html:704-740 | CSS `.tecnologia-norm-*` (37 regole) | E | P2 | Styling Tecnologia-specifico per pannello normativa | Medio | Rinominare in `.disc-norm-*` |
| DG-12 | index.html:5638-5640 | `const TECNOLOGIA_NORM` + `TECNOLOGIA_NORM_DATA` | E | P2 | Dati inline Tecnologia legacy (CML-062 benchmark) | Basso | Mantenere come legacy read-only benchmark |
| DG-13 | index.html:2144-2305 | `TECNOLOGIA_MAPPA_DATI_FALLBACK` + `TECNOLOGIA_MAPPA_DATI_GENERATA` | E | P2 | Mappa dati Tecnologia legacy | Basso | Mantenere come legacy benchmark |

### Residui documentazione

| ID | File | Occorrenza | Categoria | Priorità | Impatto | Rischio fix | Proposta |
|----|------|------------|----------|----------|---------|-------------|----------|
| DG-14 | docs/03_execution/CML-UX-CERTIFICATION-READINESS-CURRICULUM-UI.md | Rivendica "Nessun hardcode residuo di Tecnologia nei fallback" mentre nel runtime persistono DG-01, DG-03, DG-04, DG-05 | H | P2 | Fuorviante: documenta fix come applicati ma non lo sono | Basso | Aggiornare per riflettere residui reali e stato attuale |
| DG-15 | docs/03_execution/CML-UX-MOBILE-PROGETTAZIONE-HOTFIX.md | Descrive fix mappaDisciplinaCorrente come completi | H | P3 | Storico minore; non blocca ma può confondere | Basso | Aggiungere nota "residui pendenti: vedi audit generalizzazione" |
| DG-16 | report/CML-UX-CERTIFICATION-READINESS-CURRICULUM-UI.md | "Nessun hardcode residuo di Tecnologia nei fallback" | H | P2 | Fuorviante come report ufficiale | Basso | Aggiornare report con stato reale |

### Esempi accettabili (legittimi)

| ID | File | Occorrenza | Categoria | Priorità | Note |
|----|------|------------|----------|----------|------|
| DG-17 | examples/teacher-proposal.example.cml.json | `"discipline": "Tecnologia"` | B | P3 | Esempio dichiarato, non fuorviante |
| DG-18 | examples/curriculum-discipline.example.json | `"label": "Tecnologia (esempio)"` | B | P3 | Esempio dichiarato, non fuorviante |

### Contenuti curricolari (NON modificabili in questa slice)

- `content/curriculum/tecnologia.normalized.json` — dati legittimi della disciplina Tecnologia
- `content/curriculum/*.normalized.json` — contengono la parola "tecnologia" in contesti curricolari legittimi (es. "STEM-arte", "tecnologia" in Storia/Inglese)
- Questi sono dati di contenuto, non hardcode UI

## Classificazione aggregata

| Categoria | Count | IDs | Note |
|-----------|-------|-----|------|
| A. Storico legittimo | 0 | — | Nessun residuo da classificare come storico in questa audit |
| B. Esempio accettabile | 2 | DG-17, DG-18 | Esempi dichiarati, mantenere |
| C. Default improprio | 5 | DG-01, DG-03, DG-04, DG-05, DG-02 | Fix consigliati, rischio basso |
| D. Hardcode runtime semplice | 3 | DG-06, DG-07, DG-02 | Sostituibili con disciplina corrente, rischio basso |
| E. Hardcode runtime strutturale | 5 | DG-09, DG-10, DG-11, DG-12, DG-13 | Richiedono refactor/rinominazione, rischio medio |
| F. UDA/progettazione non generalizzata | 1 | DG-08 | Richiede piano dedicato o contract |
| G. Export/import potenzialmente disciplinare | 0 | — | Già generalizzato in CML-226 |
| H. Documentazione prodotto fuorviante | 3 | DG-14, DG-15, DG-16 | Fix docs-only, rischio basso |

## Mappa decisionale

### Fix immediati semplici (micro-slice runtime)
- DG-01: rimuovere default `'tecnologia'` da `mappaDisciplinaCorrente`
- DG-03: rimuovere fallback `"Tecnologia"` da `renderUdaModello()`
- DG-04: rimuovere fallback `"Tecnologia"` da `selDisc`
- DG-05: rimuovere fallback `"Tecnologia"` da `DEFAULT_PROFILE`
- DG-06: generalizzare link Home "Tecnologia normalizzata"
- DG-07: attivare prima disciplina in lista invece di Tecnologia hardcoded

### Fix da rimandare a progettazione/UDA
- DG-08: `UDA_MODELI` — richiede decisione su modello UDA generalizzato o nuovi esempi per discipline
- DG-09, DG-10, DG-11: rinominazione funzione/ID/CSS — può attendere prossimo ciclo di pulizia naming

### Elementi storici da non toccare
- DG-12, DG-13: `TECNOLOGIA_NORM` e `TECNOLOGIA_MAPPA_DATI` — legacy benchmark CML-062, documentati e read-only
- DG-17, DG-18: esempi in `examples/` — legittimi

### Elementi da correggere solo nella guida/README
- DG-14, DG-15, DG-16: documentazione fuorviante — aggiornare in slice docs-only

### Elementi che richiedono nuova vista o schema
- Progettazione annuale/UDA generalizzata — richiede contract e schema dedicati (slice separata)

## Roadmap massima 5 slice

| # | Slice | Tipo | Focus | Residui | Priorità |
|---|-------|------|-------|---------|----------|
| 1 | `CML-DISCIPLINE-GENERALIZATION-RUNTIME-MICROFIX` | runtime microfix | Default impropri e hardcode semplici | DG-01, DG-03, DG-04, DG-05, DG-06, DG-07 | Alta |
| 2 | `CML-DISCIPLINE-GENERALIZATION-UDA-MODELS` | runtime increment | Generalizzare UDA_MODELI | DG-08 | Alta |
| 3 | `CML-DISCIPLINE-GENERALIZATION-NORM-PANEL` | runtime microfix | Rinominare funzione/ID/CSS norm panel | DG-09, DG-10, DG-11 | Media |
| 4 | `CML-DISCIPLINE-GENERALIZATION-DOCS-CLEANUP` | docs-only | Correggere documentazione fuorviante | DG-14, DG-15, DG-16 | Media |
| 5 | `CML-ANNUAL-PLAN-AND-UDA-CONTRACT` | docs-only contract | Definire schema/vista per progettazione annuale e UDA generalizzate | Nuovo | Alta |

## Prossima slice selezionata

**`CML-DISCIPLINE-GENERALIZATION-RUNTIME-MICROFIX`**

Obiettivo: correggere solo hardcode semplici e default impropri che fanno apparire Tecnologia come disciplina privilegiata nelle viste già esistenti, senza toccare UDA/progettazione strutturale.

Perimetro:
- Modificare `_published_snapshot/netlify-current/index.html`
- Rimuovere default `'tecnologia'` da `mappaDisciplinaCorrente` (DG-01)
- Rimuovere fallback `"Tecnologia"` da `renderUdaModello()` (DG-03)
- Rimuovere fallback `"Tecnologia"` da `selDisc` e `DEFAULT_PROFILE` (DG-04, DG-05)
- Generalizzare link Home "Tecnologia normalizzata" (DG-06)
- Attivare prima disciplina in lista nella mappa (DG-07)
- NON toccare: `UDA_MODELI` (DG-08), `renderTecnologiaNorm()` (DG-09), CSS/ID norm panel (DG-10, DG-11), dati legacy (DG-12, DG-13)
- NON modificare: JSON, schema .cml, tool, export/import, UDA draft generator, service-worker, manifest, README

## Invarianti rispettate
- Nessuna modifica a `content/curriculum/`
- Nessuna modifica a `tools/`, `examples/`, `assets/`
- Nessuna modifica a schema `.cml` o export/import
- Nessuna modifica a `README.md`, `AGENTS.md`, `CONTRIBUTING.md`, `CHANGELOG.md`
- Nessuna modifica a `manifest.json`, `service-worker.js`
- Nessun deploy
- Nessun push
- Accessibilità 88/100 invariata
- Validatore 14/14 invariato
- Shape test 14/14 invariato

## Verdict
```text
CML_DISCIPLINE_GENERALIZATION_AUDIT_AND_FIX_PLAN_READY
```
