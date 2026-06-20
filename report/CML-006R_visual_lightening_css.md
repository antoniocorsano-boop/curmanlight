# CML-006R — Visual Lightening / Conservative CSS Micro-Implementation

```
CML_006R_VISUAL_LIGHTENING_READY
```

## Scopo

Alleggerire visivamente CurManLight con micro-interventi CSS conservativi, senza modificare struttura, workflow, dati, funzioni o contenuti applicativi.

## Opzione selezionata

Opzione A da CML-006R-SELECT: micro-alleggerimento CSS conservativo.

## File modificati

- `_published_snapshot/netlify-current/index.html` — 38 righe CSS modificate (+38/-38)

## Sintesi alleggerimento grafico

| Elemento | Prima | Dopo |
|---|---|---|
| **Ombre contenitori** | `rgba(0,0,0,.1)` / `.08` / `.06` | `rgba(0,0,0,.05)` / `.04` |
| **Bordo card** | `1.5px solid` saturo | `1px solid` desaturato |
| **Badge** | Saturazione piena | Saturazione -15% |
| **Footer** | `#263238` / `#90a4ae` | `#37474f` / `#b0bec5` |
| **Warning border-left** | 4px | 3px |
| **Pannelli confronto** | Giallo/verde saturi | Giallo/verde pastello |
| **Norm-card hover** | Ombra 3x | Nessun aumento |
| **Tab bar border-bottom** | 2px | 1px |

## Conferme

- [x] Nessuna modifica JS funzionale
- [x] 4 tab preservati
- [x] 14 discipline preservate
- [x] Confronto IN2012→IN2025 preservato
- [x] Approve/reject/edit preservati
- [x] localStorage preservato
- [x] PDF cache-safe preservato
- [x] sw.js, _headers non modificati
- [x] Nessun backend/API/auth/Netlify Forms
- [x] Nessun deploy

## Rischi residui

1. Saturazione badge ridotta — leggibilità ancora garantita (testo bianco su colore)
2. Footer più chiaro — trade-off accettabile per ridurre dominanza visiva
3. Ombre attenuate — contenitori ancora distinguibili dallo sfondo

## Verdetto

```
CML_006R_VISUAL_LIGHTENING_READY
commit: da definire dopo commit
stato: implementazione completata, deploy non eseguito
```
