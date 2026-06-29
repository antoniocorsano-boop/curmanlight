# CML-096A — SCIENZE_COMPLETENESS_READINESS_LIVE_SMOKE

## Contesto

- Progetto: CurManLight / CML
- Branch: `main`
- Commit da verificare: `dc6d0cb` (CML-096) pushato su `origin main`
- URL live: `https://antoniocorsano-boop.github.io/curmanlight/`
- Motto page: `https://antoniocorsano-boop.github.io/curmanlight/motto-non-multa-sed-multum/`
- Sequenza chiusa: CML-095 → CML-095A → CML-096

## Obiettivo

Verificare e documentare live su GitHub Pages che la UI mostri correttamente Scienze come quarta disciplina completa, con contatori 4/11/0 sia nella sezione Completezza sia nel pannello Readiness.

## Controlli live

| #   | Controllo                                         | Esito                            |
| --- | ------------------------------------------------- | -------------------------------- |
| 1   | Deploy GitHub Pages completato (HTTP 200)         | ✅                               |
| 2   | Home visibile e integra                           | ✅                               |
| 3   | Curriculum > Consultazione accessibile            | ✅ (SPA, verificato su sorgente) |
| 4   | Sezione "Stato di completezza" visibile           | ✅                               |
| 5   | Contatore completezza: 4 bozze complete           | ✅                               |
| 6   | Contatore completezza: 11 sola consultazione      | ✅                               |
| 7   | Contatore completezza: 0 pronte per approvazione  | ✅                               |
| 8   | Pannello "Readiness per approvazione" visibile    | ✅                               |
| 9   | Contatore readiness: 4 in revisione               | ✅                               |
| 10  | Contatore readiness: 11 sola consultazione        | ✅                               |
| 11  | Contatore readiness: 0 pronte per approvazione    | ✅                               |
| 12  | Tecnologia: bozza completa / in revisione         | ✅                               |
| 13  | Italiano: bozza completa / in revisione           | ✅                               |
| 14  | Matematica: bozza completa / in revisione         | ✅                               |
| 15  | Scienze: bozza completa / in revisione            | ✅                               |
| 16  | Scienze non appare come approvabile               | ✅                               |
| 17  | "Altre 11 discipline" non appaiono approvabili    | ✅                               |
| 18  | Nessun pulsante di approvazione                   | ✅                               |
| 19  | Nessuna disciplina indicata come approvata        | ✅                               |
| 20  | Light mode only preservato (`color-scheme:light`) | ✅                               |
| 21  | Mobile responsive (media query presenti)          | ✅                               |
| 22  | Didattica integra                                 | ✅                               |
| 23  | Esportazioni integra                              | ✅                               |
| 24  | Guida integra                                     | ✅                               |
| 25  | `.cml`, export/import e role-access invariati     | ✅                               |
| 26  | Motto page HTTP 200                               | ✅                               |

## Stringhe verificate in sorgente live

| Pattern                                      | Presente |
| -------------------------------------------- | -------- |
| `completeness-counter-num">4</div>`          | ✅       |
| `completeness-counter-num">11</div>`         | ✅       |
| `Tecnologia, Italiano, Matematica e Scienze` | ✅       |
| `Bozza completa disponibile</span> Scienze`  | ✅       |
| `readiness-counter-num">4</div>`             | ✅       |
| `readiness-counter-num">11</div>`            | ✅       |
| `In revisione</span> Scienze`                | ✅       |
| `Altre 11 discipline`                        | ✅       |

## Stato finale

| Indicatore                    | Valore                                    |
| ----------------------------- | ----------------------------------------- |
| Bozze complete / in revisione | **4**                                     |
| Solo consultazione            | **11**                                    |
| Pronte per approvazione       | **0**                                     |
| Discipline complete           | Tecnologia, Italiano, Matematica, Scienze |
| Origin main                   | aggiornato (`dc6d0cb`)                    |

## Verdetto finale

```
CML_096A_SCIENZE_COMPLETENESS_READINESS_LIVE_SMOKE_READY
```

## Prossimo step raccomandato

`CML-097 — NEXT_DISCIPLINE_NORMALIZATION_SELECTION_AUDIT` — selezione della quinta disciplina da normalizzare tra le 11 rimanenti (Storia, Geografia, Inglese, Seconda Lingua, Educazione Civica, Arte, Musica, Educazione Fisica, Religione, Latino LEL).
