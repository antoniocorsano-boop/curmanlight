# CML-284 - Curriculum Navigation and Focus Continuity

## Attivita svolta

- Corretto il comportamento di navigazione disciplina per evitare atterraggio in area bassa della pagina.
- Reso coerente il ritorno alla testata del Curriculum dopo selezione disciplina.
- Mantenuta compatibilita con hash legacy esistenti.
- Aggiornata la governance operativa (backlog, progress, execution, movelog).

## File modificati

- index.html
- _published_snapshot/netlify-current/index.html
- docs/02_system/PRODUCT-MATURITY-PROGRESS.md
- docs/02_system/PRODUCT-USABILITY-BACKLOG.md
- docs/03_execution/CML-284.md
- report/CML-284_curriculum_navigation_and_focus_continuity.md
- docs/REPO-MOVELOG.md

## Prima / Dopo

Prima:
- cambio disciplina poteva portare l'utente su ancoraggio interno disciplina in area bassa;
- perdita di contesto immediato (titolo, stato, azioni principali) nella consultazione.

Dopo:
- cambio disciplina ricentra sempre l'utente all'inizio del contenuto principale Curriculum;
- hash di navigazione disciplina separato dagli id interni di dettaglio;
- testata disciplina subito visibile dopo selezione.

## Problemi UX risolti

- UX-002: risolto in CML-284.

## Problemi UX ancora aperti

- UX-005: parzialmente risolto (continuita migliorata in Curriculum; restano allineamenti cross-sezione).
- UX-001: parzialmente risolto (riduzione logiche miste percepite, non ancora completa).

## Impatto sul carico cognitivo

- Riduzione del tempo di ri-orientamento dopo cambio disciplina.
- Riduzione dei salti contestuali non previsti.
- Maggiore prevedibilita del punto di atterraggio.

## Controlli eseguiti

- git status --short --branch
- git diff --check
- verifica runtime limitato a index.html e _published_snapshot/netlify-current/index.html
- controllo parita root/snapshot
- controllo sintassi JavaScript su script estratti da index.html e _published_snapshot/netlify-current/index.html
- verifica backlog/progress coerenti con esito UX-002 e PM-04 in corso

## Deploy / Push

- Nessun deploy eseguito.
- Nessun push eseguito.

## Verdict

CML_284_CURRICULUM_NAVIGATION_AND_FOCUS_CONTINUITY_READY_LOCAL_NOT_PUSHED
