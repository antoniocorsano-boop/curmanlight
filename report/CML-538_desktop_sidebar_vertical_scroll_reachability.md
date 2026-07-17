# CML-538 — Desktop Sidebar Vertical Scroll and Reachability Report

## Sintesi

Il menu laterale React è stato reso scrollabile in modo indipendente dal contenuto centrale. La correzione evita che le voci inferiori restino tagliate quando l'altezza disponibile sotto l'header è ridotta.

## File runtime React modificati

- `curman-react/src/components/layout/Layout.tsx`
- `curman-react/src/components/layout/Sidebar.tsx`

## Comportamento atteso

- sidebar vincolata allo spazio disponibile nel layout;
- scorrimento verticale autonomo;
- ultima voce raggiungibile;
- contenuto centrale con scorrimento indipendente;
- focus da tastiera visibile;
- nessun overflow orizzontale;
- comportamento mobile invariato.

## Controllo deterministico

`curman-react/tools/check-cml538-desktop-sidebar-scroll.mjs` verifica la presenza dei contratti CSS essenziali e dello script npm dedicato.

## Esclusioni

- nessuna modifica al runtime storico;
- nessuna modifica allo snapshot storico;
- nessuna modifica a service worker, dati o workflow;
- nessuna modifica allo schema `.cml`.

## Verdetto remoto

```text
CML_538_DESKTOP_SIDEBAR_VERTICAL_SCROLL_REACHABILITY_DRAFT_PR_READY
```
