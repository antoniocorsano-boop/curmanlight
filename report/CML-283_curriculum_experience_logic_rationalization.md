# CML-283 - Curriculum Experience Logic Rationalization

## Attivita svolta

- Razionalizzati microtesti e etichette della sezione Curriculum in chiave comprensione utente non tecnico.
- Rafforzata distinzione tra curricolo vigente e proposte 2025.
- Rinominati indicatori non comprensibili nella vista principale.
- Ridotto lessico tecnico residuo nelle aree di testata disciplina.
- Ridotto rumore visivo senza introdurre nuovi elementi funzionali.

## File modificati

- `index.html`
- `_published_snapshot/netlify-current/index.html`
- `docs/02_system/PRODUCT-MATURITY-PROGRESS.md`
- `docs/02_system/PRODUCT-USABILITY-BACKLOG.md`
- `docs/03_execution/CML-283.md`
- `report/CML-283_curriculum_experience_logic_rationalization.md`
- `docs/REPO-MOVELOG.md`

## Problemi UX risolti

- UX-003 (indicatori poco comprensibili): risolto nella vista principale.
- UX-001 (logiche miste): ridotto in parte con percorso esplicito e testata piu chiara.
- UX-006 (lessico tecnico residuo): ridotto in parte (termini principali semplificati).
- UX-009 (box/badge non univoci): ridotto in parte nella card disciplina.

## Problemi UX rimasti

- Residua complessita della testata estesa e dei pattern badge globali (da completare in CML-293/CML-291).
- Focus e ritorno tra discipline/sezioni (CML-284/CML-305).
- Uniformita completa terminologia cross-sezione (CML-288/CML-304).

## Impatto sul carico cognitivo

- Riduzione media del carico cognitivo in ingresso alla sezione Curriculum.
- Diminuzione di termini astratti/tecnici nella vista principale.
- Migliore chiarezza decisionale su cosa leggere prima e cosa fare dopo.

## Controlli eseguiti

- `git status --short --branch`
- `git diff --check`
- verifica differenze runtime limitate a `index.html` e `_published_snapshot/netlify-current/index.html`
- controllo assenza termini vietati nei testi aggiornati (`voci totali`, `copertura curricolo`, `pacchetto curricolare`)
- controllo presenza aggiornamenti governance

## Deploy/Push

- Nessun deploy eseguito.
- Nessun push eseguito.

## Verdict

`CML_283_CURRICULUM_EXPERIENCE_LOGIC_RATIONALIZATION_READY_LOCAL_NOT_PUSHED`
