# CML-236 GUIDA UX RUNTIME MICRO-SLICE — Report

## Sintesi

Micro-aggiornamento testuale della Guida runtime: percorsi per ruolo, allineamento Esportazioni post-CML-235, Processo e Programmazione annuale. Comportamento applicativo invariato.

## Intervento

| Card | Modifica |
|---|---|
| Da dove iniziare | Rinominata e ampliata con Processo ed Esportazioni |
| Percorsi per ruolo | Nuova — docente, dipartimento, referente |
| Curriculum | Aggiunto Processo; distinte Fonti e Sezioni generali |
| Competenze e progettazione | Aggiunta Programmazione annuale Passo 1/2 |
| Esportazioni | 6 gruppi allineati a CML-235 + nota Drive manuale |
| Cosa non può fare | Validazione umana e Drive non automatico esplicitati |
| guida-note | Testo validazione aggiornato |

## Smoke test (ispezione statica)

| Verifica | Esito |
|---|---|
| `#tab-guida` presente | PASS |
| Testi «Da dove iniziare», «Percorsi per ruolo» | PASS |
| Riferimento 6 gruppi Esportazioni | PASS |
| Nota «Invia al Drive» manuale | PASS |
| `setTab('guida')` da tabbar | PASS |
| Home, Curriculum, Esportazioni navigabili | PASS |
| JS syntax check | PASS |
| Diff limitato a `#tab-guida` | PASS |

## Invarianti

- Funzioni JS e handler export: non modificati
- Formato `.cml`: non modificato
- JSON curriculum: non modificati
- Tools: non modificati

## Rischi residui

| Rischio | Livello | Nota |
|---|---|---|
| Card Processo ancora da micro-polish nel tab Processo stesso | Basso | Slice futura CML-237 |
| UDA smart stati vuoti non trattati in Guida | Basso | Backlog P2/P3 |

## Prossima slice consigliata

**CML-237 — Processo UX runtime micro-slice** — chiarire ruoli coordinatore/referente nel tab Processo.
