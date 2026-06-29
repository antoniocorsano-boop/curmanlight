# Report CML-115: System Refocus After Department Validation Audit

## Riepilogo

Audit documentale post-CML-114 per allineare il sistema alla nuova Navigation Map introdotta in CLAUDE.md. Nessuna modifica runtime. Il sistema mantiene tutte le funzionalità esistenti. Didattica viene confermata come area da mantenere, ma ricollocata in "Competenze e progettazione". Proposto CML-116 come prossimo incremento minimo sulla Home.

## Mappatura Sezioni Esistenti

### Home (`#tab-home`)

- **Stato:** funzionale, senza modifiche necessarie in questa slice.
- **Contenuti:** cruscotto, prossima azione, Home cards (Curriculum + Didattica), microguida.
- **Problematiche:** le Home cards ancora referenziano "Didattica" invece di "Competenze e progettazione" e non includono "Validazione dipartimentale" né "Riepilogo" come aree autonome.

### Curriculum (`#tab-curricolo`)

- **Stato:** funzionale, robusto.
- **Sub-nav:** Consulta / Revisione / Definitivo / Fonti.
- **Validazione dipartimentale (CML-114):** pannello informativo in Consultazione, 14 righe, dropdown disabilitato, note disabilitate, bottone disabilitato. Nessuna interazione, nessuna persistenza.
- **Problematiche:** "Definitivo" è dentro la sub-nav di Curriculum, ma la Navigation Map target lo vuole come sezione autonoma "Riepilogo".

### Didattica (`#tab-didattica`)

- **Stato:** prototipo readonly funzionante.
- **Contenuti:** Valutazione/Evidenze per Tecnologia (13 unità) + UDA modello (2 schede).
- **Valutazione:** utile come materiale di progettazione, ma manca il quadro teorico (competenze chiave, nodi disciplinari, collegamenti interdisciplinari, continuità verticale, indicazioni operative).
- **Decisione:** rinominare in "Competenze e progettazione" senza rimuovere i contenuti esistenti.

### Revisione (Curriculum > Revisione / `#tab-lavoro`)

- **Stato:** core del sistema, massima protezione.
- **Contenuti:** filtri, import .cml docente, import .cml dipartimentale, export Tecnologia, cards dinamiche, decisioni (approva/rifiuta/annulla).
- **Decisione:** rimane nella sub-nav di Curriculum.

### Riepilogo (Curriculum > Definitivo / `#tab-riepilogo`)

- **Stato:** funzionale.
- **Contenuti:** riepilogo voci approvate, export Word/Markdown/PDF/.cml/Drive.
- **Decisione:** può essere promosso a sezione autonoma nella navigazione principale come "Riepilogo".

### Esportazioni (`#tab-esportazioni`)

- **Stato:** funzionale.
- **Contenuti:** export documento istituzionale, backup, report gruppo.
- **Decisione:** invariata.

### Guida (`#tab-guida`)

- **Stato:** funzionale.
- **Contenuti:** microguida per aree.
- **Decisione:** invariata, ma da aggiornare in CML-116 per riflettere la nuova mappa.

## Funzioni da Proteggere

| Funzione                                    | Linea          | Note                                |
| ------------------------------------------- | -------------- | ----------------------------------- |
| `setTab()`                                  | 2780           | Router principale — critico         |
| `renderCurricoloIstituto()`                 | 4541           | Include pannello CML-114            |
| `render()`                                  | 2549           | Rendering Revisione                 |
| `renderRiepilogo()`                         | 2733           | Definitivo/Riepilogo                |
| `renderDidattica()`                         | 2024           | Futuro "Competenze e progettazione" |
| `renderUdaModello()`                        | 2123           | Futuro "Competenze e progettazione" |
| `selectDisc()` / `resolveDiscFromHash()`    | 2382/2388      | Selezione disciplina                |
| `cardHTML()`                                | 2421           | Generazione cards revisione         |
| `approve()` / `reject()` / `undoDecision()` | 2626/2637/2647 | Flusso decisionale                  |
| `saveLocalState()` / `loadLocalState()`     | 2208/2238      | Persistenza locale                  |
| Export/Import functions                     | varie          | docx, pdf, md, cml, backup          |
| Role-access gating                          | 4105+          | Protezione aree riservate           |

## Validazioni Eseguite

- `git status` iniziale: nessuna modifica a file tracciati, solo untracked (.agents, Consultazione, skills-lock.json).
- `git diff --check`: nessun whitespace error.
- Runtime invariato: `_published_snapshot/netlify-current/index.html` non toccato.
- Schema `.cml` invariato.
- Export/Import invariati.
- Service worker invariato.
- Nessuna regressione su: Curriculum, Validazione dipartimentale, Revisione, Riepilogo, Esportazioni, Guida.

## Prossimi Passi

1. CML-116: aggiornamento leggero Home e breadcrumb per riflettere la nuova mappa.
2. CML-117+: arricchimento di "Competenze e progettazione" con contenuti strutturati (non in questa slice).

## Verdetto

```text
CML_115_SYSTEM_REFOCUS_AFTER_DEPARTMENT_VALIDATION_AUDIT_READY
```
