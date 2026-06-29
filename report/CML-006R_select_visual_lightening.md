# CML-006R-SELECT — Visual Lightening / Graphic Density Audit

## Verdetto

```
CML_006R_SELECT_VISUAL_LIGHTENING_READY
```

## Stato iniziale

| Campo           | Valore                              |
| --------------- | ----------------------------------- |
| Branch partenza | `master` (`c5ffa0a`, CML-005R)      |
| Branch lavoro   | `cml-006r-select-visual-lightening` |
| Working tree    | pulita                              |

## Runtime analizzato

`_published_snapshot/netlify-current/index.html` — CSS inline righe 16-434.

Componenti con maggiore densità visiva: card/badge (~55 righe CSS), responsive queries (~130 righe CSS), header compatto (~60 righe CSS).

## Criticità visive rilevate

1. **8 ombre (`box-shadow`) distinte** su contenitori — effetto "galleggiamento" generalizzato
2. **5 varianti di bordo card saturo** — griglia di cornici colorate
3. **7 badge a saturazione piena** — testo bianco su fondo colore
4. **3 pulsanti azione con hover invertito** per card — molti cambi di stato visivi
5. **Footer blu scuro (`#263238`)** — troppo dominante per uno strumento utility
6. **Warning/notice multipli con bordo sinistro 4px** — visivamente pesanti se compresenti
7. **Pannelli confronto bicolore** (giallo/verde) — aggiungono densità cromatica

## Elementi da preservare

- Colore istituzionale `#1a237e` (identità visiva)
- Badge semantici (ok/modifica/nuovo) — solo saturazione, non colore base
- Pulsanti approva/modifica/respingi — semantica cromatica chiara
- Bordo sinistro card normativa (gerarchia)
- Spaziatura touch mobile (min-height 42-44px)
- Progress bar, orientamento card, toast

## Opzioni valutate

| Opzione                          | Vantaggi                             | Rischi                              | Stima     |
| -------------------------------- | ------------------------------------ | ----------------------------------- | --------- |
| **A — Micro-alleggerimento CSS** | Sicuro, immediato, regressione bassa | Miglioramento non radicale          | 30-45 min |
| **B — Densità layout**           | Più informazioni visibili            | Può peggiorare leggibilità mobile   | 20-30 min |
| **C — Redesign ampio**           | Nuova interfaccia pulita             | Regressione alta, richiede più test | 2-3 ore   |

## Opzione selezionata: **A (con micro-integrazioni da B)**

### Motivazione

1. Massima sicurezza — solo proprietà CSS, nessuna modifica strutturale
2. Rischio regressione minimo — ombre/bordi/sfumature non influenzano posizionamento
3. Coerenza con tutte le slice precedenti — non altera funzionalità stabilizzate
4. Prerequisito per eventuali redesign futuri
5. Allineamento con "strumento scolastico leggero"

## Perimetro CML-006R implementativo

### File ammessi

- `_published_snapshot/netlify-current/index.html`

### File vietati

- HTML strutturale, funzioni JS, dati discipline
- sw.js, _headers, manifest.webmanifest, PDF, assets

### Interventi previsti

| Elemento                 | Da                               | A                                 |
| ------------------------ | -------------------------------- | --------------------------------- |
| `box-shadow` contenitori | `rgba(0,0,0,.1)` / `.08` / `.06` | `rgba(0,0,0,.05)`                 |
| `border-color` card      | `#81c784`, `#ffa726`, `#42a5f5`  | Saturazione -15/20%               |
| `border-width` card      | `1.5px solid`                    | `1px solid`                       |
| `background` badge       | Saturazione piena                | Saturazione -15/20%, testo `#333` |
| `background` footer      | `#263238`                        | Grigio più neutro                 |
| `border-left` warning    | `4px`                            | `3px`                             |
| `background` panels      | `#fffde7` / `#e8f5e9`            | Sfondo più neutro                 |

### Elementi NON toccati

- Colori istituzionali, semantica cromatica pulsanti, status badge base, spaziature touch, font-size, layout grid, animation

### Criteri di accettazione

1. Contenitori mantengono posizione/dimensione
2. Badge restano distinguibili
3. Pulsanti mantengono semantica cromatica
4. Layout identico a master
5. Stampa funzionante

## Rischi residui

1. Saturazione ridotta → meno contrasto per utenti con problemi di visione (mitigato: riduzione 15-20%)
2. Footer più chiaro → potrebbe sembrare staccato (mitigato: contrasto sufficiente)
3. Ombre ridotte → effetto piatto (mitigato: non rimosse, solo attenuate)

## File creati

- `docs/03_execution/CML-006R-SELECT.md`
- `report/CML-006R_select_visual_lightening.md`

## Conferme

- [x] Nessuna modifica runtime
- [x] Nessun deploy
- [x] Nessuna modifica a index.html, JS, dati, workflow, PDF, sw.js, _headers
- [x] Nessun backend/API/auth/Netlify Forms
- [x] Nessun codice da prototipi

## Hash commit

Da definire dopo commit dei report.
