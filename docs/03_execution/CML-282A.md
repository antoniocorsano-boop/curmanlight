# CML-282A - Product Governance Consolidation Milestone

## Scopo della milestone

Completare la governance introdotta da CML-281/CML-282 prima dell'avvio di CML-283, rendendo espliciti:
- matrice di trasformazione UX -> PM -> CML;
- dipendenze tra future slice;
- percorso critico del programma;
- cruscotto permanente di avanzamento programma.

## Tipo e perimetro

- Tipo: docs-only.
- Perimetro: documentazione di sistema, execution, report, movelog.

## Vincoli rispettati

- Nessuna modifica runtime/index/snapshot.
- Nessuna modifica CSS/JavaScript/dati/esportazioni/workflow/configurazioni/dipendenze.
- Nessun deploy.
- Nessun push.

## Deliverable CML-282A

1. Nuovo cruscotto programma:
   - `docs/02_system/PRODUCT-MATURITY-PROGRESS.md`
2. Definition of Done di macro-programma:
   - `docs/02_system/PRODUCT-MATURITY-ACCEPTANCE-CRITERIA.md`
3. Riorganizzazione roadmap per valore utente:
   - PM-03 Orientamento
   - PM-04 Comprensione del Curriculum
   - PM-05 Esperienza di lavoro
   - PM-06 Accompagnamento
   - PM-07 Uniformita
4. Matrice UX -> PM -> CML con dipendenze esplicite.
5. Definizione del critical path di trasformazione.
6. Regola obbligatoria future slice: Macroprogramma + Backlog + Dipende da + Aggiorna progress.

## Impatto operativo

Da questa milestone in poi la prossima slice non viene scelta ad hoc: e derivata dal cruscotto e dalle dipendenze dichiarate.

## Prossima slice

- CML-283 (inizio percorso critico).

## Regola operativa da ora in poi

Ogni futura slice CML deve aprire l'execution doc con:

- Macroprogramma: PM-xx
- Backlog: UX-xxx
- Dipende da: CML-xxx
- Aggiorna: `PRODUCT-MATURITY-PROGRESS.md`

## Verdetto

`CML_282A_PRODUCT_GOVERNANCE_CONSOLIDATION_READY_LOCAL_NOT_PUSHED`
