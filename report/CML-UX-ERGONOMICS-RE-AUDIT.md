# Report — CML UX Ergonomics Re-Audit

## Executive summary

Audit ergonomico post-deduplicazione Export Center. Punteggio complessivo: **72/100**. App stabile, flussi chiari per tutti i ruoli, Export Center funzionante. Tre P1 residui (sidebar in Fonti, scroll Evidenze, breadcrumb nascosto). Nessuna slice runtime urgente.

## Punteggio complessivo

**72/100**

## Tabella punteggi per area

| Area | Punteggio | Max | % |
|---|---|---|---|
| Architettura informativa | 12 | 15 | 80% |
| Flusso per ruolo e compito | 11 | 15 | 73% |
| Densità visiva e carico cognitivo | 10 | 15 | 67% |
| Navigazione e orientamento | 6 | 10 | 60% |
| Export Center e azioni di output | 8 | 10 | 80% |
| Mobile/touch ergonomia | 7 | 10 | 70% |
| Accessibilità e leggibilità | 6 | 10 | 60% |
| Microcopy e coerenza linguistica | 8 | 10 | 80% |
| Prevenzione errori e sicurezza operativa | 4 | 5 | 80% |

## Delta rispetto alla situazione precedente

Baseline numerica non disponibile — audit precedenti erano qualitativi senza punteggio. Questo audit stabilisce la prima baseline numerica.

**Miglioramenti qualitativi**:

| Criticità precedente | Stato |
|---|---|
| Export duplicati in 3 punti | RISOLTO |
| Navigazione forzata (click fraudolenti) | ELIMINATO |
| Export .cml non in Export Center | AGGIUNTO |
| Bozza disciplina non in Export Center | AGGIUNTO |
| Revisione 4-6 schermate | RIDOTTO a 2-4 |
| Definitivo con export primari | SOSTITUITO da bridge |

## Top 5 miglioramenti

1. Export Center con 6 gruppi completi e nessuna navigazione forzata
2. Definitivo deduplicato — solo riepilogo voci approvate
3. Bozza disciplina accessibile sia da Revisione (toggle) che Export Center
4. File .cml (proposta docente, esito dipartimento) centralizzati
5. Report gruppo lavoro accessibile da Export Center

## Top 5 problemi residui

1. Sidebar discipline visibile in Fonti (P1)
2. Scroll 3-6 schermate in Evidenze (P1)
3. Breadcrumb nascosto di default (P1)
4. Hash navigation non sincronizzata oltre Consulta (P2)
5. Nessun skip link / ARIA non sistematico (P2)

## Elenco criticità classificate

### P0: 0
### P1: 3
| # | Area | Descrizione |
|---|---|---|
| 1 | Navigazione | Sidebar discipline visibile in Fonti |
| 2 | Densità | Scroll eccessivo in Evidenze (3-6 schermate) |
| 3 | Orientamento | Breadcrumb hidden di default |

### P2: 5
| # | Area | Descrizione |
|---|---|---|
| 4 | Navigazione | Hash non sincronizzato oltre Consulta |
| 5 | Architettura | selDisc default Tecnologia (percezione tech-centrica) |
| 6 | Accessibilità | Skip link assente, ARIA parziale, emoji senza alt text |
| 7 | Orientamento | Breadcrumb non visibile in viste chiave |
| 8 | Microcopy | Etichetta tabbar "Competenze e progettazione" lunga su mobile |

### P3: 4
| # | Area | Descrizione |
|---|---|---|
| 9 | Export | Backup duplicato (Home quick-actions + Export Center) |
| 10 | Microcopy | Usage-notice ancora 3-4 righe |
| 11 | Accessibilità | Contrasto badge warning |
| 12 | Mobile | Abbreviazioni bottom bar non auto-esplicative |

## Raccomandazione operativa

L'app è usabile e stabile. Nessuna slice runtime urgente.

**Prossima slice consigliata**: `CML-UX-NAVIGATION-AND-ORIENTATION` (non bloccante, +4-5 punti stimati)

Coprirebbe:
- Sidebar nascosta in Fonti
- Breadcrumb sempre visibile
- Hash navigation sincronizzata

## Evidenze git finali

```
## main...origin/main
9fa751c (HEAD -> main, origin/main, origin/HEAD)
```

## Verdict

```
CML_UX_ERGONOMICS_RE_AUDIT_READY
```
