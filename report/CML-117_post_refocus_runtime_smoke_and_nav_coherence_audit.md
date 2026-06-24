# Report CML-117: Post Refocus Runtime Smoke and Nav Coherence Audit

## Riepilogo
Audit completo post-CML-116. Verificata coerenza della navigazione, assenza di occorrenze residue "Didattica" in testo utente, correttezza di "Competenze e progettazione", assenza di parole vietate introdotte da CML-116, integrità di tutte le aree funzionali. Nessun microfix necessario.

## Controlli Eseguiti

### Ricerca "Didattica" in index.html
- 9 occorrenze trovate
- Tutte interne (CSS selectors, JS function names, JS comments, JS routing)
- Zero occorrenze utente-facing
- **Esempio residue legittime:**
  - `.didattica-evidence-filter` — classe CSS per filtri
  - `renderDidattica()` — funzione JS
  - `setDidatticaFilter()` — funzione JS
  - `t==="didattica"||t==="didattica_uda"` — routing JS
- **Decisione:** Nessuna modifica. I nomi interni sono preservati per compatibilità runtime.

### Ricerca "Competenze e progettazione" in index.html
- 9 occorrenze trovate
- Tutte in testo utente-facing
- Tutte correttamente posizionate
- **Mappatura confermata:**
  - Tabbar desktop: ✅
  - Home card: ✅
  - Footer Home: ✅
  - Tab header Valutazione: ✅
  - Tab header UDA: ✅
  - Breadcrumb: ✅
  - Mobile menu: ✅
  - Mobile bottom bar: "Comp." ✅
  - Guida: ✅

### Ricerca parole vietate/ambigue
Pattern: `approvat|definitivo|certificato|conforme|validazione automatica`
- 54 occorrenze totali
- Tutte pre-esistenti a CML-116
- Nessuna nuova occorrenza introdotta da CML-116
- **Categorie pre-esistenti legittime:**
  - `approvata/approvato` — flusso revisione utente + disclaimers corretti
  - `definitivo` — label export e riferimenti workflow referente
  - `certificato` — solo in contenuto disciplinare (certificato energetico)
  - `conforme` — zero occorrenze
  - `validazione automatica` — zero occorrenze

### Navigazione
| Elemento | Check | Note |
|----------|-------|------|
| Tabbar | Pass | Label corretta |
| Mobile bottom bar | Pass | "Comp." abbreviazione |
| Mobile menu overlay | Pass | Titolo + item |
| Breadcrumb | Pass | Labels aggiornate |
| Sub-nav | Pass | ID preservati per JS |
| Guida | Pass | Testo coerente |

### Home Process Path
| Check | Status |
|-------|--------|
| Visibile | ✅ |
| Leggibile | ✅ |
| Non invasivo | ✅ |
| Responsive | ✅ (flex-wrap:wrap) |

### Regressioni
| Area | Status |
|------|--------|
| Curriculum — Consultazione | ✅ |
| Curriculum — Revisione | ✅ |
| Curriculum — Definitivo | ✅ |
| Curriculum — Fonti | ✅ |
| Validazione dipartimentale (CML-114) | ✅ |
| Esportazioni | ✅ |
| Import .cml | ✅ |
| Role-access gating | ✅ |

## File Coinvolti
- `_published_snapshot/netlify-current/index.html` — modificato da CML-116, verificato da CML-117

## Validazioni
- `git status`: modifiche CML-116 presenti (non committate) — attese
- `git diff --check`: pulito
- Ricerca testuale: completa
- Nessun microfix necessario

## Prossimi Passi Suggeriti
1. CML-118 (opzionale): validazione mobile del processo path e label "Comp." su viewport ≤ 768px.
2. CML-119+: arricchimento contenuti in Competenze e progettazione.

## Verdetto
```text
CML_117_POST_REFOCUS_RUNTIME_SMOKE_AND_NAV_COHERENCE_AUDIT_READY
```
