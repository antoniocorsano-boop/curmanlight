# CML-264 VISIBLE GOVERNANCE REFERENCES LIVE SMOKE — Report

## Sintesi

Verifica live su GitHub Pages della rimozione dei riferimenti governance visibili introdotta da CML-263. Tutti i controlli sono PASS: i riferimenti "contratto dati CML-061" e "Fonte: CML-061 / CML-062" non compaiono nella UI pubblica, mentre i nuovi testi operativi sono presenti.

## Stato tecnico di partenza

- Branch: `main`
- HEAD: `40c7612`
- Allineato con `origin/main`: sì
- Working tree: pulito

## Verifica pubblicazione CML-263

- URL: `https://antoniocorsano-boop.github.io/curmanlight/`
- HTTP status: 200 OK
- Commit CML-263 live: sì

## Matrice smoke

| Area | Controllo | Esito | Evidenza | Note |
|---|---|---|---|---|
| Home | caricamento senza errore | PASS | pagina caricata | |
| Home | navigazione principale | PASS | bottoni presenti | |
| Home | errore console bloccante | PASS | 0 errori | |
| Curriculum / Italiano | "contratto dati CML-061" assente | PASS | assente | |
| Curriculum / Italiano | "Fonte: CML-061 / CML-062" assente | PASS | assente | |
| Curriculum / Italiano | nuovo testo operativo presente | PASS | "Anteprima consultiva da verificare..." | |
| Curriculum / Italiano | "Base di lavoro..." presente | PASS | presente | |
| Curriculum / Matematica | navigazione disciplina | PASS | Matematica selezionata | |
| Curriculum / Matematica | riferimenti governance | PASS | assenti | |
| Guida | apertura funzionante | PASS | Guida rapida visibile | |
| Guida | "Cosa fare in base al ruolo" | PASS | visibile | |
| Guida | errore console | PASS | 0 errori | |
| Esportazioni | apertura funzionante | PASS | sezione visibile | |
| Esportazioni | "Quale esportazione usare?" | PASS | visibile | |
| Esportazioni | errore console | PASS | 0 errori | |
| Responsive | desktop | PASS | layout OK | |
| Responsive | mobile/tablet | PASS | bottom nav visibile | |
| Responsive | menu regressi | PASS | nessun regressione | |

## Riferimenti governance

- contratto dati: assente
- contratto dati CML-061: assente
- CML-061: assente da testo visibile
- CML-062: assente da testo visibile
- Fonte: CML-061 / CML-062: assente

Residui non bloccanti:
- `CML-062` resta in commenti tecnici non visibili e documentazione tecnica. Non è testo UI.

## Nuovi testi operativi

- Anteprima consultiva da verificare in sede di lavoro disciplinare.: presente
- Base di lavoro: materiali curricolari già predisposti: presente
- Anteprima non modificabile: presente
- Richiede validazione umana: presente
- Non costituisce approvazione definitiva: presente

## Errori console

- SyntaxError: 0
- ReferenceError: 0
- errore JavaScript bloccante: 0
- nuovo warning rilevante: 0

## Responsive

- Desktop: verificato
- Mobile/tablet: verificato
- Menu/bottom navigation: non regressi

## Validazione

- Validatore curriculum: PASS (14/14)
- Shape test: PASS (14/14)
- git diff --check: PASS

## Rischi residui

- Nessuno

## Raccomandazione prossima slice

Continuare con CML-249 — GUIDE FLOW ALIGNMENT MICRO-UX come selezionato da CML-248.

## Checklist

- [x] repository preflight verified
- [x] live URL reachable
- [x] CML-263 governance cleanup visible live
- [x] Home smoke passed
- [x] Curriculum Italiano smoke passed
- [x] second discipline smoke passed
- [x] Guide smoke passed
- [x] Exports smoke passed
- [x] console checked
- [x] responsive checked
- [x] old governance references absent from visible UI
- [x] new operational texts present
- [x] validator executed
- [x] shape test executed
- [x] runtime unchanged during CML-264
- [x] no manual deploy executed
- [x] no push executed
- [x] verdict recorded
