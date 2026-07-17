# CML-538 - Desktop Sidebar Vertical Scroll and Reachability Fix

## Sintesi

CML-538 corregge la raggiungibilita verticale della sidebar React. La sidebar ora scorre autonomamente nello spazio residuo sotto l'header, mentre il contenuto centrale mantiene il proprio scroll.

Verdetto:

```text
CML_538_DESKTOP_SIDEBAR_VERTICAL_SCROLL_REACHABILITY_FIXED
```

## Causa

Nel layout flex mancava `min-h-0` sui contenitori scrollabili e la sidebar non dichiarava `overflow-y-auto`. Con viewport basse, l'altezza naturale del menu superava la viewport e le ultime voci restavano sotto il bordo visibile.

## Correzione

- Shell centrale: `flex min-h-0 flex-1 overflow-hidden`.
- Main: `min-h-0 flex-1 overflow-y-auto`.
- Sidebar: `h-full min-h-0 overflow-y-auto overscroll-contain pb-6`.
- Voci menu: focus visibile esplicito con `focus-visible:outline`.

## Verifiche

| Area | Esito |
|------|-------|
| Ultima voce menu raggiungibile | PASS |
| Scroll verticale sidebar | PASS |
| Scroll contenuto centrale indipendente | PASS |
| Overflow orizzontale | PASS, assente |
| Mobile drawer | PASS |
| Stato voce selezionata | invariato |
| Runtime storico/dati/workflow | invariati |

## Limiti

La correzione non cambia densita, ordine o numero delle voci. Non introduce una nuova navigazione compatta; rende solo il menu esistente scrollabile.

## Verdetto

```text
CML_538_DESKTOP_SIDEBAR_VERTICAL_SCROLL_REACHABILITY_FIXED
```
