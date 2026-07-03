# CML-282 - Product Usability First Audit

## Attivita svolta

- Eseguito audit completo UX da prospettiva utente scolastico non tecnico.
- Valutate 8 aree: Home, Curriculum, Compila, Esportazioni, Guida, Guida rapida, Navigazione, Componenti comuni.
- Eseguito audit specifico Curriculum su testata, selezione disciplina, struttura, navigazione, indicatori, fonti, proposte 2025, azioni.
- Eseguito audit iconografia, audit terminologia (allineamento glossario), audit navigazione.
- Aggiornato Product Usability Backlog con voci UX tracciabili e dipendenze.
- Aggiornata roadmap con PM-02 in stato COMPLETATO e macro-slice derivate.

## Documenti aggiornati

- `docs/02_system/PRODUCT-USABILITY-BACKLOG.md`
- `docs/02_system/PRODUCT-USABILITY-AND-UX-MATURITY-ROADMAP.md`
- `docs/03_execution/CML-282.md`
- `report/CML-282_product_usability_first_audit.md`
- `docs/REPO-MOVELOG.md`

## Backlog iniziale post-audit

- Totale problemi tracciati: 24
- Distribuzione priorita:
  - P0: 3
  - P1: 18
  - P2: 3

Aree piu critiche:
- Curriculum (logiche miste, indicatori, azioni e focus)
- Navigazione/focus (continuita e ricentraggio)
- Terminologia/indicatori (lessico non uniforme)
- Esportazioni (sovraccarico decisionale)

## Matrice di trasformazione (spina dorsale programma)

| UX ID | Problema | Macroprogramma | Slice | Dipendenza |
|---|---|---|---|---|
| UX-001 | Curriculum con logiche miste | PM-04 | CML-283 | nessuna |
| UX-002 | Focus disciplina | PM-03 | CML-284 | CML-283 |
| UX-003 | Indicatori incomprensibili | PM-04 | CML-285 | CML-283 |
| UX-004 | Guida disallineata | PM-06 | CML-286 | CML-283 |
| UX-005 | Iconografia incoerente | PM-07 | CML-287 | CML-283 |
| UX-006 | Terminologia Curriculum non uniforme | PM-04 | CML-288 | CML-285 |
| UX-007 | Home troppo densa | PM-03 | CML-289 | CML-283 |
| UX-008 | Navigazione non coerente | PM-03 | CML-290 | CML-289 |
| UX-009 | Box/badge non univoci | PM-07 | CML-291 | CML-287 |
| UX-010 | Checklist UX non sistematica | PM-01 | CML-292 | nessuna |
| UX-011 | Testata Curriculum sovraccarica | PM-04 | CML-293 | CML-283 |
| UX-012 | Segnali disciplina non uniformi | PM-07 | CML-294 | CML-287 |
| UX-013 | Indicatori duplicati | PM-04 | CML-295 | CML-285 |
| UX-014 | Fonti poco contestualizzate | PM-04 | CML-296 | CML-285 |
| UX-015 | Proposte 2025 poco chiare | PM-04 | CML-297 | CML-285 |
| UX-016 | Azioni Curriculum senza gerarchia | PM-05 | CML-298 | CML-283 |
| UX-017 | Compila densa in avvio | PM-05 | CML-299 | CML-283 |
| UX-018 | Esportazioni non guidate | PM-05 | CML-300 | CML-299 |
| UX-019 | Guida rapida poco rapida | PM-06 | CML-301 | CML-286 |
| UX-020 | Navigazione mobile abbreviata | PM-03 | CML-302 | CML-290 |
| UX-021 | Residui simbolici corrotti | PM-07 | CML-303 | CML-287 |
| UX-022 | Lessico non glossario-compliant | PM-04 | CML-304 | CML-285 |
| UX-023 | Ritorno al punto di lavoro non chiaro | PM-03 | CML-305 | CML-284 |
| UX-024 | Componenti comuni disomogenei | PM-07 | CML-306 | CML-291 |

## Critical path preliminare

`CML-283 -> CML-284 -> CML-285 -> CML-289 -> CML-290 -> CML-299 -> CML-300 -> CML-286 -> CML-287`

## Rischi residui

1. Se le slice di razionalizzazione non partono dalle voci P0, permane blocco di orientamento in Curriculum.
2. Se la normalizzazione terminologica e iconografica non e trasversale, la coerenza UX restera fragile.
3. Se non si introduce un percorso guidato in Esportazioni, la probabilita di scelta errata del formato resta alta.

## Prossima attivita raccomandata

Avviare CML-283 come prima macro-slice di razionalizzazione: separare in modo netto le logiche Curriculum (consultazione, revisione, azione) e ridurre il carico cognitivo nella testata.

## Vincoli rispettati

- Nessuna modifica runtime.
- Nessuna modifica `index.html`.
- Nessuna modifica `_published_snapshot/`.
- Nessuna modifica CSS/JavaScript/dati/esportazioni/workflow/configurazioni/dipendenze.
- Nessun deploy.
- Nessun push.

## Stato di chiusura

Audit completato, consolidamento governance demandato a CML-282A prima dell'avvio CML-283.

## Verdict

`CML_282_PRODUCT_USABILITY_FIRST_AUDIT_COMPLETED_AWAITING_282A_CONSOLIDATION`
