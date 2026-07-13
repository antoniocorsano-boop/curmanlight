# CurManLight React 1.0 — Completion Roadmap

## Stato complessivo

Avanzamento stimato verso una versione 1.0 realmente utilizzabile: **68%**.

La percentuale è ponderata su dati, consultazione, processo, persistenza, esportazioni, progettazione, qualità e pubblicazione.

| Area | Peso | Avanzamento |
|---|---:|---:|
| Dati curricolari e contratti | 15% | 95% |
| Consultazione del curricolo | 12% | 90% |
| Proposte di aggiornamento e confronto | 12% | 75% |
| Test guidato per docenti | 8% | 85% |
| Persistenza ed esportazioni | 10% | 70% |
| Contesto utente e impostazioni | 8% | 65% |
| Progettazione annuale e UDA | 12% | 25% |
| Processo, stati e ruoli | 8% | 45% |
| Modalità pubblica/personale/istituto | 5% | 30% |
| UX, accessibilità e mobile | 5% | 65% |
| Deploy, preview e distribuzione | 3% | 85% |
| Documentazione e rilascio | 2% | 70% |

## Definizione di prodotto finito

CurManLight 1.0 è completata quando consente di:

1. impostare il contesto di lavoro;
2. consultare il curricolo;
3. confrontare contenuti e fonti;
4. preparare una proposta;
5. salvarla localmente;
6. esportarla;
7. importare proposte di altri docenti;
8. produrre un esito dipartimentale;
9. preparare una programmazione annuale o una UDA;
10. recuperare il lavoro senza perdita di dati;
11. utilizzare correttamente l’app da desktop e mobile;
12. comprendere sempre stato, ruolo e prossimo passo.

Fuori dalla 1.0: backend centrale, telemetria, autenticazione proprietaria, approvazione automatica e integrazione Drive/Workspace completa.

## Piano di completamento

### Fase 1 — Home e contesto

**68% → 72%**

- CML-488 — Audit visuale completo Home React.
- CML-489 — Contesto di lavoro essenziale.
- CML-490 — Home contestuale.

Criterio di chiusura: dalla Home è sempre chiaro cosa fare e perché.

### Fase 2 — Consultazione completa

**72% → 77%**

- CML-491 — Consultazione B04 definitiva.
- CML-492 — Orientamento nel dettaglio.
- CML-493 — Stati vuoti ed errori.

Criterio di chiusura: consultazione utilizzabile senza conoscere la struttura tecnica dei dati.

### Fase 3 — Proposta docente completa

**77% → 83%**

- CML-494 — Creazione proposta.
- CML-495 — Stati della proposta.
- CML-496 — Validazioni preventive.
- CML-497 — Esportazione proposta `.cml`.

Criterio di chiusura: una proposta può essere creata, chiusa, esportata e riaperta senza perdita di informazioni.

### Fase 4 — Processo dipartimentale

**83% → 88%**

- CML-498 — Import multiplo delle proposte.
- CML-499 — Coda dipartimentale.
- CML-500 — Decisione dipartimentale.
- CML-501 — Esportazione esito dipartimentale.

Criterio di chiusura: il dipartimento può lavorare su più proposte e generare un esito verificabile.

### Fase 5 — Progettazione didattica

**88% → 93%**

- CML-502 — Programmazione annuale.
- CML-503 — UDA essenziale.
- CML-504 — Riutilizzo dei dati curricolari.
- CML-505 — Salvataggio e duplicazione.
- CML-506 — Esportazione progettazione.

Criterio di chiusura: un docente può produrre una programmazione annuale o una UDA completa.

### Fase 6 — Persistenza e sicurezza locale

**93% → 96%**

- CML-507 — Archivio locale unificato.
- CML-508 — Backup e ripristino.
- CML-509 — Migrazione degli schemi.
- CML-510 — Recupero da errore.

Criterio di chiusura: nessun lavoro va perso senza un avviso esplicito.

### Fase 7 — Qualità del prodotto

**96% → 99%**

- CML-511 — Audit accessibilità.
- CML-512 — Audit responsive.
- CML-513 — Test end-to-end.
- CML-514 — Test con docenti non tecnici.
- CML-515 — Correzioni emerse dal test.

### Fase 8 — Release 1.0

**99% → 100%**

- CML-516 — Pulizia del repository.
- CML-517 — Identità e terminologia finale.
- CML-518 — Documentazione utente.
- CML-519 — Release candidate.
- CML-520 — Pubblicazione CurManLight 1.0.

## Sequenza operativa

```text
CML-488 → CML-490   Home e contesto
CML-491 → CML-493   Consultazione completa
CML-494 → CML-497   Proposta docente
CML-498 → CML-501   Processo dipartimentale
CML-502 → CML-506   Progettazione e UDA
CML-507 → CML-510   Persistenza e backup
CML-511 → CML-515   Qualità e test utenti
CML-516 → CML-520   Release 1.0
```

## Traguardi percentuali

| Traguardo | Avanzamento |
|---|---:|
| Stato attuale | 68% |
| Home e contesto chiusi | 72% |
| Consultazione completa | 77% |
| Proposta docente completa | 83% |
| Processo dipartimentale completo | 88% |
| Progettazione e UDA complete | 93% |
| Persistenza e backup completi | 96% |
| Audit e test utenti completati | 99% |
| Release CurManLight 1.0 | 100% |

## Prossima slice

**CML-488 — React Home Complete Visual Audit**

Non introdurre nuove funzionalità prima di chiudere Home, contesto e navigazione, poiché costituiscono il punto di ingresso dell’intero prodotto.

## Verdetto

`CML_REACT_1_0_COMPLETION_ROADMAP_BASELINE_SAVED`
