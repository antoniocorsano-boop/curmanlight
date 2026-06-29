# CML-008R — Export Readiness: Tecnologia Markdown

## Stato iniziale

| Campo             | Valore                                                                      |
| ----------------- | --------------------------------------------------------------------------- |
| Branch            | `cml-008r-export-readiness-tecnologia-markdown-clean`                       |
| HEAD partenza     | `40957ea` (master con CML-007R chiuso)                                      |
| Working tree      | pulita                                                                      |
| File toccati      | `_published_snapshot/netlify-current/index.html`                            |
| File creati       | `docs/03_execution/CML-008R.md`, `report/CML-008R_export_readiness.md`      |
| Riferimento audit | `dde523c` (branch CML-008R originale — non cherry-piccato)                  |
| Spec              | `docs/superpowers/specs/2026-06-20-export-readiness-design.md`              |
| Piano             | `docs/superpowers/plans/2026-06-20-export-readiness-tecnologia-markdown.md` |
| SELECT            | `docs/03_execution/CML-008R-SELECT.md`                                      |

## Ricostruzione pulita

CML-008R è stato ricostruito da master pulito (`40957ea`) dopo la recovery di CML-007R. Il precedente commit `dde523c` sulla branch `cml-008r-export-readiness-tecnologia-markdown` è stato usato **solo come riferimento tecnico** — nessun cherry-pick, la nuova branch è indipendente.

## Refinement post-audit

Dopo lo smoke iniziale, l'export Markdown è stato rifinito:

1. **Dettaglio delle proposte di revisione**: nuova sezione dopo il confronto disciplinare, con tabella `Area | Base vigente/IN2012 | Proposta 2025 | Stato` che elenca tutte le voci da modificare/nuove con il loro stato decisionale
2. **Intestazione disciplina**: rinominata da `## Tecnologia` a `## Tecnologia — raccordo verticale` per chiarezza
3. **Nota metodologica**: "Base vigente, proposta 2025 e decisione del gruppo di lavoro restano distinguibili fino alla validazione finale."
4. **Footer pulito**: sostituito corsivo riga-per-riga con lista Markdown pulita; citazione normativa generica ("Indicazioni Nazionali vigenti e gli eventuali aggiornamenti ministeriali formalmente adottati") invece del riferimento specifico D.M. 221/2025
5. **Solo confronto**: `generateTecnologiaBozza()` ora chiama `buildDocumentModel(false)` per esportare tutte le voci (incluse quelle da decidere), non solo le approvate

## File modificati

| File                                             | Modifica                     | Rischio                   |
| ------------------------------------------------ | ---------------------------- | ------------------------- |
| `_published_snapshot/netlify-current/index.html` | 202 ins, 16 del (~218 righe) | Basso — legacy preservato |

## Funzioni modificate/aggiunte

### Modificate (comportamento legacy preservato)

| Funzione                                         | Modifica                                                                                                                                                 |
| ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `buildDocumentModel(onlyApproved, opts)`         | Nuovo parametro `opts.disciplineFilter` per filtrare discipline                                                                                          |
| `modelToMarkdown(model, onlyApproved, opts)`     | Nuovo parametro `opts` con flag: `introNote`, `includeGeneraliRef`, `includeDecisionSummary`, `includeGapMarkers`, `includeDisclaimer`, `disciplineName` |
| `exportMarkdown(onlyApproved, disciplineFilter)` | Nuovo parametro `disciplineFilter`; senza filtro → output identico                                                                                       |

### Aggiunte

| Funzione                                    | Scopo                                                |
| ------------------------------------------- | ---------------------------------------------------- |
| `downloadMarkdownString(content, filename)` | Wrapper download Blob per Markdown                   |
| `copyMarkdownToClipboard(content)`          | Copia Markdown negli appunti con fallback finestra   |
| `generateTecnologiaBozza()`                 | Genera bozza Markdown di Tecnologia e mostra preview |
| `copyTecnologiaMarkdown()`                  | Copia la bozza generata negli appunti                |
| `downloadTecnologiaMarkdown()`              | Scarica la bozza come file `.md`                     |
| `_tecnologiaMarkdownCache`                  | Cache della bozza generata                           |

## UI export aggiunta

Pannello `#tecnologia-export-panel` nel tab Revisione, visibile solo quando la disciplina selezionata è **Tecnologia**.

**Contenuto:**

- Intestazione: "📤 Export del curricolo revisionato"
- Badge: "Documento di lavoro — da validare"
- Descrizione: "L'export produce una bozza Markdown della disciplina Tecnologia. La validazione finale resta affidata al gruppo di lavoro e agli organi collegiali competenti."
- Pulsante: "📝 Genera bozza Tecnologia"
- Pulsante: "📋 Copia Markdown" (disabilitato fino a generazione)
- Pulsante: "⬇ Scarica Markdown" (disabilitato fino a generazione)
- Textarea preview read-only del Markdown generato

## Contenuto Markdown prodotto

1. **Intestazione**: istituto, livello, cod. meccanografico, disciplina Tecnologia, data
2. **Nota**: "📄 **Documento di lavoro — da validare.** Non sostituisce delibera del Collegio Docenti."
3. **Riferimenti alle Sezioni generali**: elenco 8 sezioni con nota di consultazione
4. **Sintesi delle decisioni**: tabella con conteggi (invariati, modificati, nuovi, approvati, rifiutati, da decidere, totale voci)
5. **Confronto IN2012→IN2025**: per ogni item, stato, decisione, testo attuale/proposta
6. **Gap 2025**: marcatori espliciti per nuove proposte e modifiche pendenti
7. **Avvertenza finale**: documento non sostituisce delibera o approvazione formale

## Conferme

- [x] **Export limitato a Tecnologia**: solo la disciplina campione
- [x] **Nessun DOCX**: `exportWord()`, `exportPDF()`, `copyForWord()` non toccate
- [x] **Workflow approve/reject/edit preservato**: funzioni, card rendering, filtri invariati
- [x] **Dati 14 discipline preservati**: DATA, DISCIPLINE_META, ORDINI, userProfile invariati
- [x] **Nessuna libreria esterna**: solo JS nativo, nessuna CDN, nessun import
- [x] **Nessuna nuova chiave localStorage**: nessuna modifica a save/load/reset
- [x] **PDF cache-safe preservato**: `Corso_CurricoloDonMilani_IN2025_arianese_20260620.pdf` ancora linkato
- [x] **Vecchio PDF non referenziato**: nessun link a `Corso_CurricoloDonMilani_IN2025.pdf`
- [x] **sw.js/\_headers/manifest non modificati**
- [x] **Nessun backend/API/auth/Netlify Forms**
- [x] **Comportamento legacy preservato**: `exportMarkdown(true)` senza filtro → output identico
- [x] **Nessun deploy**
- [x] **Nessun cherry-pick da `dde523c`**: branch ricreata da master pulito
- [x] **Nessun nuovo fetch / XMLHttpRequest / CDN**

## Smoke test locale

Server attivo su `http://localhost:5000`.

### Verifiche statiche (file diretto UTF-8)

| Verifica                                                 | Esito |
| -------------------------------------------------------- | ----- |
| Pannello export panel presente                           | ✅    |
| Pulsante "Genera bozza Tecnologia" presente              | ✅    |
| Pulsante "Copia Markdown" presente                       | ✅    |
| Pulsante "Scarica Markdown" presente                     | ✅    |
| Preview textarea presente                                | ✅    |
| Cache `_tecnologiaMarkdownCache` definita                | ✅    |
| `introNote` in modelToMarkdown                           | ✅    |
| `includeDisclaimer` presente                             | ✅    |
| `includeGapMarkers` presente                             | ✅    |
| `includeGeneraliRef` presente                            | ✅    |
| `includeDecisionSummary` presente                        | ✅    |
| "Documento di lavoro — da validare" presente             | ✅    |
| "Non sostituisce delibera del Collegio Docenti" presente | ✅    |
| `disciplineFilter` in buildDocumentModel                 | ✅    |
| `exportWord(onlyApproved` invariato                      | ✅    |
| 4 tab (lavoro, riepilogo, normativa, generali)           | ✅    |
| PDF cache-safe linkato                                   | ✅    |
| Vecchio PDF non referenziato                             | ✅    |
| Approve/reject/edit funzioni presenti                    | ✅    |
| Git diff --check pulito                                  | ✅    |
| Soli 3 file modificati/creati                            | ✅    |

## Rischi residui

| Rischio                                             | Mitigazione                                                             |
| --------------------------------------------------- | ----------------------------------------------------------------------- |
| Preview non aggiornata dopo approve/reject          | Il pulsante "Genera bozza" rigenera sempre da zero                      |
| Utente copia Markdown e lo presenta come definitivo | Avvertenza esplicita nell'output + badge "Documento di lavoro" nella UI |
| Pannello visibile su schermi molto stretti          | Media query 640px compatta; print CSS lo nasconde                       |
| Dipendenza dal nome esatto "Tecnologia"             | Coerente con DISCIPLINE_META — se rinominata, va aggiornato             |

## Prossimo passo

Validazione manuale nel browser e, se tutto ok, merge su master e deploy su Netlify.
