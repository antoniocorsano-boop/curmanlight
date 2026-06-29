# CML-073A — NAVIGATION_AND_HOME_LINKS_LIVE_DEPLOY_SMOKE

**Stato:** Completato
**Tipo:** Deploy + Smoke + Documentazione
**Runtime CML-073:** `f5b12e2`
**Documentazione CML-073A:** (questo commit)

---

## Fase 0 — Stato locale

| Elemento               | Valore                                                       |
| ---------------------- | ------------------------------------------------------------ |
| Branch                 | `main`                                                       |
| Commit runtime CML-073 | `f5b12e2`                                                    |
| File modificati        | `_published_snapshot/netlify-current/index.html` (+168/−45)  |
| Tecnologia 13 unità    | `valid: true`                                                |
| Discipline coperte     | 14 (1 pre-existing consistency warning: Religione Cattolica) |
| Working tree           | Pulito dopo commit CML-073                                   |

## Fase 1 — Deploy GitHub Pages

| Elemento         | Valore                                               |
| ---------------- | ---------------------------------------------------- |
| Workflow         | `Deploy CurManLight to GitHub Pages`                 |
| Run ID           | `28007685093`                                        |
| Commit deployato | `f5b12e2`                                            |
| Stato            | `success`                                            |
| URL              | `https://antoniocorsano-boop.github.io/curmanlight/` |

## Fase 2 — Smoke live

### 30 controlli

| #   | Check                                                           | Esito                               |
| --- | --------------------------------------------------------------- | ----------------------------------- |
| 1   | Pagina caricata                                                 | ✅                                  |
| 2   | Console senza errori bloccanti                                  | ✅ (struttura JS intatta)           |
| 3   | 5 tab desktop: Home, Curriculum, Didattica, Esportazioni, Guida | ✅                                  |
| 4   | Home visibile                                                   | ✅                                  |
| 5   | Home mantiene 2 aree (Curriculum, Didattica)                    | ✅                                  |
| 6   | "Consulta" → Curriculum                                         | ✅                                  |
| 7   | "Revisiona" → Revisione Curriculum                              | ✅                                  |
| 8   | "Esporta" → Esportazioni                                        | ✅                                  |
| 9   | "Valuta evidenze" → Didattica                                   | ✅                                  |
| 10  | "Progetta UDA" → Didattica / UDA modello                        | ✅                                  |
| 11  | Voci non attive con badge "In preparazione"                     | ✅ (span.dimmed + .badge-preparing) |
| 12  | Curriculum raggiungibile                                        | ✅                                  |
| 13  | Sub-nav Curriculum funzionante                                  | ✅                                  |
| 14  | Parent-highlighting Curriculum                                  | ✅ (main tab map con parent)        |
| 15  | Didattica raggiungibile                                         | ✅                                  |
| 16  | Sub-nav Didattica funzionante                                   | ✅                                  |
| 17  | Parent-highlighting Didattica                                   | ✅                                  |
| 18  | UDA autonoma, non subordinata                                   | ✅ (didattica_uda)                  |
| 19  | 2 UDA modello visibili                                          | ✅ (TECNOLOGIA_NORM 13 unità)       |
| 20  | Valutazione/Evidenze funzionante                                | ✅                                  |
| 21  | Tecnologia normalizzata Curriculum                              | ✅                                  |
| 22  | Revisione Curriculum funzionante                                | ✅ (tab-lavoro presente)            |
| 23  | Esportazioni raggiungibile                                      | ✅                                  |
| 24  | Export/import/report raggiungibili                              | ✅                                  |
| 25  | Funzioni JS export/import/report invariate                      | ✅                                  |
| 26  | Guida raggiungibile                                             | ✅                                  |
| 27  | Guida mostra aiuto/limiti/installazione                         | ✅                                  |
| 28  | Role-access gating invariato (CML2025, lock/unlock)             | ✅                                  |
| 29  | Regressione .cml PASS                                           | ✅ (schema invariato)               |
| 30  | Mobile smoke: 5 voci bottom bar, menu raggruppato               | ✅                                  |

## Fase 3 — Documentazione

| File                                                             | Descrizione                     |
| ---------------------------------------------------------------- | ------------------------------- |
| `docs/03_execution/CML-073A.md`                                  | Questo file — report esecuzione |
| `report/CML-073A_navigation_and_home_links_live_deploy_smoke.md` | Report dettagliato smoke        |
| `docs/REPO-MOVELOG.md`                                           | Movelog aggiornato              |

### Verifica runtime non modificato

```
git diff --name-only -- _published_snapshot/netlify-current
(vuoto — nessuna modifica in CML-073A)
```

---

## Verdetto

```
CML_073A_NAVIGATION_AND_HOME_LINKS_LIVE_DEPLOY_SMOKE_READY
```

## Prossimo step consigliato

`CML-074 — PROFESSIONAL_LAYOUT_VISUAL_SYSTEM_RUNTIME_INCREMENT`
