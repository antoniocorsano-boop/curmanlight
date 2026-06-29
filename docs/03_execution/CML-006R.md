# CML-006R — Visual Lightening / Conservative CSS Micro-Implementation

## Stato iniziale

| Campo                           | Valore                           |
| ------------------------------- | -------------------------------- |
| Branch                          | `cml-006r-visual-lightening-css` |
| HEAD partenza                   | `2ce8e24` (CML-006R-SELECT)      |
| Working tree                    | pulita                           |
| Master contiene CML-006R-SELECT | sì, commit `2ce8e24`             |

## Opzione selezionata

Opzione A da CML-006R-SELECT: micro-alleggerimento CSS conservativo.

## File modificati

| File                                             | Modifiche                         |
| ------------------------------------------------ | --------------------------------- |
| `_published_snapshot/netlify-current/index.html` | 38 righe CSS modificate (+38/-38) |

## Proprietà CSS toccate

| Area                                     | Modifiche                         | Dettaglio                                                                                        |
| ---------------------------------------- | --------------------------------- | ------------------------------------------------------------------------------------------------ |
| **Ombre** (10 selettori)                 | `box-shadow` attenuato            | `rgba(0,0,0,.1)` → `.05` / `.08` → `.04` / `.06` → `.04`                                         |
| **Card border** (6 varianti)             | `1.5px` → `1px`, saturazione -20% | `#81c784` → `#a5d6a7`, `#ffa726` → `#ffcc80`, `#42a5f5` → `#90caf9`                              |
| **Badge** (6 varianti)                   | Saturazione -15%                  | `#66bb6a` → `#81c784`, `#ffa726` → `#ffb74d`, `#42a5f5` → `#64b5f6`                              |
| **Footer**                               | Colore più neutro                 | `background:#263238` → `#37474f`, `color:#90a4ae` → `#b0bec5`                                    |
| **Warning/notice** (7 selettori)         | `border-left` 4px → 3px           | usage-notice, local-save-bar, install-hint, readonly-order-note, gap-header, norm-card, act-card |
| **Pannelli confronto**                   | Sfondo più neutro                 | `#fffde7` → `#fffef5`, `#e8f5e9` → `#f1f8f0`                                                     |
| **Filtri**                               | Bordo più sottile                 | `1.5px solid #ccc` → `1px solid #d0d0d0`                                                         |
| **Pulsanti azione**                      | Bordo 1px                         | `1.5px solid` → `1px solid`                                                                      |
| **Tab bar**                              | Bordo inferiore più sottile       | `2px` → `1px`                                                                                    |
| **Tab bar shadow** (responsive + sticky) | Attenuata                         | `0 2px 8px rgba(0,0,0,.08)` → `0 1px 3px rgba(0,0,0,.04)`                                        |
| **Norm-card hover**                      | Rimossa enhancement ombra         | Uguale allo stato normale                                                                        |
| **Norm-card border-left**                | Attenuato                         | 4px → 3px, colori leggermente meno saturi                                                        |

## Elementi preservati

- ✅ Colori istituzionali `#1a237e`, `#283593` (header, tab attivo, pulsanti, link)
- ✅ Semantica cromatica badge (verde=ok, arancione=modifica, blu=nuovo)
- ✅ Semantica cromatica pulsanti (verde=approva, blu=modifica, rosso=respingi)
- ✅ Bordo sinistro card normativa (gerarchia tra le fonti)
- ✅ Spaziatura touch mobile (min-height 42-44px)
- ✅ Progress bar, orientamento card, toast, Gap 2025
- ✅ Dimensioni caratteri (font-size)
- ✅ Layout grid, flex properties
- ✅ Animation (savePulse, transitions)

## Conferme

- [x] Nessuna modifica JS funzionale
- [x] Workflow approve/reject/edit preservato
- [x] Confronto IN2012→IN2025 preservato
- [x] 4 tab preservati
- [x] 14 discipline preservate
- [x] Dati disciplinari non toccati
- [x] localStorage preservato
- [x] PDF cache-safe preservato
- [x] sw.js, _headers non modificati
- [x] Nessun backend/API/auth/Netlify Forms
- [x] Nessun deploy

## Smoke test locale consigliato

```powershell
npx serve _published_snapshot/netlify-current
```

Checklist:

- [ ] Grafica più leggera (ombre meno marcate)
- [ ] Card ancora distinguibili per stato
- [ ] Badge leggibili ma meno aggressivi
- [ ] Footer meno dominante
- [ ] Tab accessibili, border inferiore più sottile
- [ ] Sidebar leggibile
- [ ] Mobile non peggiorato
- [ ] Workflow revisione invariato (approva/respingi/modifica funzionanti)
- [ ] Gap 2025 indicatore ancora visibile
- [ ] Sezioni generali preservate

## Rischi residui

1. Saturazione ridotta badge potrebbe ridurre contrasto per utenti con problemi di visione — mitigato: riduzione 15%, non eliminazione
2. Footer più chiaro potrebbe sembrare meno "istituzionale" — scelta deliberata per strumento utility
3. Ombre ridotte potrebbero far sembrare i contenitori meno definiti — mitigato: non rimosse, solo attenuate
4. Border card da 1.5px a 1px potrebbe non essere percepito — accettabile, migliora pulizia visiva

## Prossimo passo

Verifica visiva nel browser (smoke locale), poi merge su master e deploy preview/produzione.
