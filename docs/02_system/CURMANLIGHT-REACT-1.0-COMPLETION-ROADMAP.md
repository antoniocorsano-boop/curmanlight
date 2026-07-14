# CurManLight React 1.0 — Completion Roadmap

## Stato complessivo

Avanzamento stimato verso una versione 1.0 realmente utilizzabile: **88%**.

La percentuale è ponderata su dati, consultazione, processo, persistenza, esportazioni, progettazione, qualità e pubblicazione. Il valore sostituisce la baseline precedente del 68% e registra lo stato effettivo fino all’audit CML-505.

Il flusso Docente → Dipartimento → Referente è implementato, ma l’audit end-to-end ha rilevato due gap P1 nei contratti `.cml`. Per questo il processo non viene considerato definitivamente chiuso fino a CML-506.

| Area | Peso | Avanzamento |
|---|---:|---:|
| Dati curricolari e contratti | 15% | 90% |
| Consultazione del curricolo | 12% | 95% |
| Proposte di aggiornamento e confronto | 12% | 95% |
| Test guidato per docenti | 8% | 85% |
| Persistenza ed esportazioni | 10% | 88% |
| Contesto utente e impostazioni | 8% | 80% |
| Progettazione annuale e UDA | 12% | 25% |
| Processo, stati e ruoli | 8% | 88% |
| Modalità pubblica/personale/istituto | 5% | 35% |
| UX, accessibilità e mobile | 5% | 75% |
| Deploy, preview e distribuzione | 3% | 90% |
| Documentazione e rilascio | 2% | 75% |

## Definizione di prodotto finito

CurManLight 1.0 è completata quando consente di:

1. impostare il contesto di lavoro;
2. consultare il curricolo;
3. confrontare contenuti e fonti;
4. preparare una proposta docente;
5. salvarla localmente;
6. esportarla in un formato accettato dal passaggio successivo;
7. importare più proposte nel Dipartimento;
8. registrare e esportare un esito dipartimentale;
9. importare, validare ed esportare gli esiti nel ruolo Referente;
10. completare il round-trip dei tre formati `.cml` senza perdita di tracciabilità;
11. preparare una programmazione annuale o una UDA;
12. recuperare il lavoro senza perdita di dati;
13. utilizzare correttamente l’app da desktop e mobile;
14. comprendere sempre stato, ruolo e prossimo passo.

Fuori dalla 1.0: backend centrale, telemetria, autenticazione proprietaria, approvazione automatica e integrazione Drive/Workspace completa.

## Fasi completate

### Fase 1 — Home e contesto

**Completata**

- CML-488 — Audit visuale completo Home React.
- CML-489 — Contesto di lavoro essenziale.
- CML-490 — Home contestuale.

### Fase 2 — Consultazione completa

**Completata**

- CML-491 — Consultazione B04 definitiva.
- CML-492 — Orientamento nel dettaglio.
- CML-493 — Stati vuoti ed errori.

### Fase 3 — Proposta docente

**Implementata; chiusura contrattuale demandata a CML-506**

- CML-494 — Creazione proposta.
- CML-495 — Stati della proposta.
- CML-496 — Validazioni preventive.
- CML-497 — Esportazione proposta `.cml`.

### Fase 4 — Processo dipartimentale

**Implementata; round-trip da consolidare in CML-506**

- CML-498 — Import multiplo delle proposte.
- CML-499 — Coda dipartimentale.
- CML-500 — Decisione dipartimentale.
- CML-501 — Esportazione esito dipartimentale.

### Fase 5 — Processo Referente

**Implementata; parser comune da completare in CML-506**

- CML-502 — Import multiplo degli esiti dipartimentali.
- CML-503 — Validazione finale del Referente.
- CML-504 — Esportazione `referent_validation.cml`.
- CML-505 — Audit end-to-end del flusso `.cml`.

L’audit CML-505 ha rilevato due P1:

1. il builder React della proposta docente non valorizza `motivazione` e `fonte`, mentre l’import Dipartimento le richiede;
2. il parser comune riconosce solo `teacher_proposal` e `department_outcome`, ma non `referent_validation`.

## Piano di completamento residuo

### Fase 6 — Chiusura contratti e round-trip

**88% → 89%**

- CML-506 — CML Contract Closure and Round-Trip Tests.

Criterio di chiusura:

- ogni file prodotto da un ruolo è accettato dal ruolo successivo;
- `motivazione` e `fonte` sono sempre valorizzate con fallback espliciti;
- `parseCmlFile` gestisce tutti e tre i formati;
- test positivi e negativi coprono `teacher_proposal`, `department_outcome` e `referent_validation`;
- il percorso completo mantiene identità e tracciabilità.

### Fase 7 — Progettazione didattica

**89% → 94%**

- CML-507 — Programmazione annuale essenziale.
- CML-508 — UDA essenziale.
- CML-509 — Riutilizzo dei dati curricolari.
- CML-510 — Salvataggio e duplicazione.
- CML-511 — Esportazione progettazione.

Criterio di chiusura: un docente può produrre, salvare, duplicare ed esportare una programmazione annuale o una UDA completa usando i dati curricolari già presenti.

### Fase 8 — Persistenza e sicurezza locale

**94% → 97%**

- CML-512 — Archivio locale unificato.
- CML-513 — Backup e ripristino.
- CML-514 — Migrazione degli schemi.
- CML-515 — Recupero da errore.

Criterio di chiusura: nessun lavoro va perso senza un avviso esplicito e ogni archivio può essere ripristinato o migrato in modo controllato.

### Fase 9 — Qualità del prodotto

**97% → 99%**

- CML-516 — Audit accessibilità.
- CML-517 — Audit responsive.
- CML-518 — Test end-to-end dei ruoli Docente, Dipartimento e Referente.
- CML-519 — Test con docenti non tecnici.
- CML-520 — Correzioni emerse dal test.

### Fase 10 — Release 1.0

**99% → 100%**

- CML-521 — Pulizia del repository.
- CML-522 — Identità e terminologia finale.
- CML-523 — Documentazione utente.
- CML-524 — Release candidate.
- CML-525 — Pubblicazione CurManLight 1.0.

## Sequenza operativa riallineata

```text
CML-488 → CML-490   Home e contesto                         COMPLETATA
CML-491 → CML-493   Consultazione completa                  COMPLETATA
CML-494 → CML-497   Proposta docente                        IMPLEMENTATA
CML-498 → CML-501   Processo dipartimentale                 IMPLEMENTATO
CML-502 → CML-504   Processo Referente                      IMPLEMENTATO
CML-505             Audit end-to-end `.cml`                 COMPLETATO
CML-505R            Riallineamento roadmap                  IN CORSO
CML-506             Chiusura contratti e round-trip         PROSSIMA SLICE
CML-507 → CML-511   Progettazione annuale e UDA             PIANIFICATA
CML-512 → CML-515   Persistenza, backup e recupero          PIANIFICATA
CML-516 → CML-520   Qualità, audit e test utenti            PIANIFICATA
CML-521 → CML-525   Release 1.0                             PIANIFICATA
```

## Traguardi percentuali

| Traguardo | Avanzamento |
|---|---:|
| Stato dopo audit CML-505 | 88% |
| Contratti `.cml` chiusi | 89% |
| Progettazione e UDA complete | 94% |
| Persistenza e backup completi | 97% |
| Audit e test utenti completati | 99% |
| Release CurManLight 1.0 | 100% |

## Regole di numerazione

- CML-502, CML-503 e CML-504 restano assegnate al processo Referente.
- CML-505 resta assegnata all’audit end-to-end già completato.
- CML-505R identifica esclusivamente il presente riallineamento documentale.
- CML-506 resta riservata alla chiusura dei due P1 contrattuali.
- La progettazione didattica riparte da CML-507.
- Nessun codice già utilizzato può essere riassegnato.

## Prossima slice

**CML-506 — CML Contract Closure and Round-Trip Tests**

Priorità operative:

1. estendere `ProposalItem` con `motivazione` e `fonte`;
2. derivare i valori da `GapEntry.motivazione` e `GapEntry.sourceRefs` con fallback espliciti;
3. aggiungere `referent_validation` a `parseCmlFile`;
4. introdurre una matrice di test positiva e negativa per tutti e tre i formati;
5. verificare il round-trip completo Docente → Dipartimento → Referente.

Non avviare la progettazione didattica prima della chiusura dei due P1.

## Verdetto

`CML_REACT_1_0_ROADMAP_REALIGNED_AFTER_END_TO_END_AUDIT`
