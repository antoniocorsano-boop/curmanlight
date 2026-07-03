# CML-285 - Curriculum Indicators and Terminology Rationalization

## Attivita svolta

- Razionalizzati indicatori e microtesti della sezione Curriculum con linguaggio scolastico.
- Uniformata la semantica dei badge principali della card disciplina.
- Chiarita la distinzione tra curricolo vigente e aggiornamenti 2025 proposti.
- Aggiornati backlog, progress, execution doc e movelog.

## File modificati

- index.html
- _published_snapshot/netlify-current/index.html
- docs/02_system/PRODUCT-MATURITY-PROGRESS.md
- docs/02_system/PRODUCT-USABILITY-BACKLOG.md
- docs/03_execution/CML-285.md
- report/CML-285_curriculum_indicators_and_terminology_rationalization.md
- docs/REPO-MOVELOG.md

## Termini sostituiti

- bozza da revisionare -> proposta da valutare
- elementi del curricolo -> contenuti del curricolo
- elementi con proposta 2025 -> contenuti con aggiornamento 2025
- X elementi -> X contenuti
- +N proposte 2025 -> +N aggiornamenti 2025
- Validazione dipartimentale -> Verifica dipartimentale
- stato di completezza -> avanzamento
- valuta le voci e decidi -> valuta i contenuti e decidi
- Anteprima non modificabile -> Sola consultazione
- Richiede validazione umana -> Da confermare in dipartimento
- Non costituisce approvazione definitiva -> Non ancora approvato
- Stato: consultazione didattica -> Stato sezione: sola consultazione
- unita totali -> contenuti totali

## Indicatori razionalizzati

- Quadro superiore Curriculum: etichette orientate al compito e non tecniche.
- Focus disciplina: conteggi rinominati in termini comprensibili.
- Metadati card disciplina: stato e avvertenze semplificati.

## Problemi UX risolti

- UX-003: risolto in CML-285.
- UX-006: risolto in CML-285.

## Problemi UX ancora aperti

- UX-009: parzialmente risolto (uniformazione completata in Curriculum, non ancora estesa a tutte le sezioni).
- UX-001: parzialmente risolto (logica d'uso piu chiara, restano punti di consolidamento trasversali).

## Impatto sul carico cognitivo

- Ridotta necessita di interpretare termini astratti nei numeri e nei badge.
- Maggiore immediatezza nel capire cosa rappresentano indicatori e stato sezione.
- Migliore continuita tra consultazione e passaggio operativo alla revisione.

## Controlli eseguiti

- git status --short --branch
- git diff --check
- verifica runtime limitato a index.html e _published_snapshot/netlify-current/index.html
- controllo parita root/snapshot
- controllo sintassi JavaScript tramite estrazione script inline
- controllo termini vietati nella UI modificata
- verifica aggiornamenti backlog/progress su UX-003, UX-006, UX-009, UX-001
- verifica PM-04 in corso (non completato)

## Deploy / Push

- Nessun deploy eseguito.
- Nessun push eseguito.

## Verdict

CML_285_CURRICULUM_INDICATORS_AND_TERMINOLOGY_RATIONALIZATION_READY_LOCAL_NOT_PUSHED
