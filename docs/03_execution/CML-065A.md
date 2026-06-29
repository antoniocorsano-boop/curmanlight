# CML-065A — Home Dashboard Two Areas Runtime Increment

## Obiettivo

Allineare il runtime CurManLight al modello di prodotto CML-065, aggiungendo una Home/cruscotto iniziale con due aree principali: Curriculum e Didattica.

## Rapporto con CML-065

CML-065 ha definito il modello concettuale (Curriculum istituzionale + Didattica operativa). Questa slice implementa la Home come primo passo runtime, con 2 card principali. CML-063A (UX_FRAME_DETAIL_RUNTIME_FIX) è stato sostituito da questa slice.

## Scelta Home a due aree

La Home segue il contratto CML-065 e le regole UX definite:

- 2 card principali (Curriculum, Didattica)
- Massimo 4 link secondari per card
- Tecnologia normalizzata come link secondario sotto Curriculum
- Didattica come area futura (badge "Area in preparazione", link disabilitati)
- Microcopy di orientamento, non azioni operative

## Cosa è stato aggiunto

| Elemento                   | Dettaglio                                                               |
| -------------------------- | ----------------------------------------------------------------------- |
| Tab "Home"                 | Posizione 0 nella tabbar, attivo per default                            |
| Card Curriculum            | 4 link secondari: Consulta, Revisiona, Esporta, Tecnologia normalizzata |
| Card Didattica             | 4 link informativi (disabilitati), badge "Area in preparazione"         |
| CSS home dashboard         | `.home-dashboard`, `.home-card`, `.home-card-links`, ecc.               |
| Breadcrumb Home            | Label "Home", nascosto su Home                                          |
| Cruscotto nascosto su Home | `cruscotto.hidden=true` quando tab=home                                 |
| Mobile bottom bar Home     | Pulsante "Home" come primo elemento                                     |
| Inizializzazione           | `currentTab="home"`, `tab-home` visibile, `tab-lavoro` nascosto         |

## Cosa non è stato modificato

- Export/import/report: invariati ✅
- Schema `.cml`: invariato ✅
- Role-access gating: invariato (`CML2025`) ✅
- Pacchetto Tecnologia normalizzata: invariato ✅
- Persistenza: invariata (solo `sessionStorage`) ✅
- Altre tab (lavoro, riepilogo, normativa, generali, curricolo): invariate ✅
- Mobile menu overlay: invariato ✅

## Smoke locale

| Controllo                                    | Esito                      |
| -------------------------------------------- | -------------------------- |
| Validazione Tecnologia                       | PASS (13 unità, 0 warning) |
| Home visibile nel sorgente                   | ✅                         |
| Home titolo "Da dove vuoi iniziare?"         | ✅                         |
| 2 card principali (Curriculum, Didattica)    | ✅                         |
| Tecnologia normalizzata come link secondario | ✅                         |
| Didattica badge "Area in preparazione"       | ✅                         |
| Microcopy footer presente                    | ✅                         |
| Breadcrumb nascosto su Home                  | ✅                         |
| Cruscotto nascosto su Home                   | ✅                         |
| Tabbar "Home" primo pulsante                 | ✅                         |
| Mobile bottom bar "Home"                     | ✅                         |
| Navigazione verso Revisione                  | ✅                         |
| Navigazione verso Curricolo                  | ✅                         |
| Navigazione verso Tecnologia normalizzata    | ✅                         |
| Export/import/report invariati               | ✅                         |
| Role-access gating invariato                 | ✅                         |
| Regressione `.cml`                           | PASS                       |

## Limiti

- La Home è statica (nessun JS di rendering dinamico)
- I link Didattica non aprono funzioni reali (area in preparazione)
- Le funzioni esistenti non sono state riorganizzate in sottoaree (sarà in CML-066)
- Il server HTTP non è stato testato live (ambiente shell limitato), ma il codice è coerente con il funzionamento esistente

## Prossimo passo

**CML-065B — HOME_DASHBOARD_LIVE_DEPLOY_SMOKE**: deploy su GitHub Pages e smoke test live.

## Verdetto

```
CML_065A_HOME_DASHBOARD_TWO_AREAS_RUNTIME_INCREMENT_READY
```
