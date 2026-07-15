# CurManLight React 1.0 — Completion Roadmap

## Stato complessivo

Avanzamento stimato verso una versione 1.0 realmente utilizzabile: **94%**.

La percentuale registra lo stato effettivo dopo:

- completamento del flusso Docente → Dipartimento → Referente;
- audit end-to-end CML-505;
- chiusura dei due P1 contrattuali con CML-506;
- riallineamento della navigazione e della visibilità dei ruoli con CML-507;
- Programmazione annuale foundation con CML-508;
- UDA essenziale con CML-509;
- riutilizzo guidato dei dati curricolari con CML-510;
- salvataggio e duplicazione controllata con CML-511;
- esportazione locale Markdown e JSON con CML-512.

| Area | Peso | Avanzamento |
|---|---:|---:|
| Dati curricolari e contratti | 15% | 97% |
| Consultazione del curricolo | 12% | 95% |
| Proposte di aggiornamento e confronto | 12% | 96% |
| Test guidato per docenti | 8% | 85% |
| Persistenza ed esportazioni | 10% | 93% |
| Contesto utente e impostazioni | 8% | 82% |
| Progettazione annuale e UDA | 12% | 100% |
| Processo, stati e ruoli | 8% | 94% |
| Modalità pubblica/personale/istituto | 5% | 35% |
| UX, accessibilità e mobile | 5% | 80% |
| Deploy, preview e distribuzione | 3% | 90% |
| Documentazione e rilascio | 2% | 80% |

## Definizione di prodotto finito

CurManLight 1.0 è completata quando consente di:

1. impostare il contesto di lavoro;
2. consultare il curricolo;
3. confrontare contenuti e fonti;
4. preparare e salvare una proposta docente;
5. esportarla in un formato accettato dal passaggio successivo;
6. importare più proposte nel Dipartimento;
7. registrare ed esportare un esito dipartimentale;
8. importare, validare ed esportare gli esiti nel ruolo Referente;
9. completare il round-trip dei tre formati `.cml` senza perdita di tracciabilità;
10. preparare una programmazione annuale o una UDA;
11. recuperare il lavoro senza perdita di dati;
12. utilizzare correttamente l’app da desktop e mobile;
13. comprendere sempre stato, ruolo e prossimo passo.

Fuori dalla 1.0: backend centrale, telemetria, autenticazione proprietaria, approvazione automatica e integrazione Drive/Workspace completa.

## Fasi completate

### Fase 1 — Home e contesto

- CML-488 — Audit visuale completo Home React.
- CML-489 — Contesto di lavoro essenziale.
- CML-490 — Home contestuale.

### Fase 2 — Consultazione completa

- CML-491 — Consultazione B04 definitiva.
- CML-492 — Orientamento nel dettaglio.
- CML-493 — Stati vuoti ed errori.

### Fase 3 — Proposta docente

- CML-494 — Creazione proposta.
- CML-495 — Stati della proposta.
- CML-496 — Validazioni preventive.
- CML-497 — Esportazione proposta `.cml`.

### Fase 4 — Processo dipartimentale

- CML-498 — Import multiplo delle proposte.
- CML-499 — Coda dipartimentale.
- CML-500 — Decisione dipartimentale.
- CML-501 — Esportazione esito dipartimentale.

### Fase 5 — Processo Referente e chiusura contratti

- CML-502 — Import multiplo degli esiti dipartimentali.
- CML-503 — Validazione finale del Referente.
- CML-504 — Esportazione `referent_validation.cml`.
- CML-505 — Audit end-to-end del flusso `.cml`.
- CML-506 — Chiusura dei contratti e test round-trip.

Criterio raggiunto: i tre formati `.cml` sono riconosciuti dal parser comune e il file prodotto da ciascun ruolo è compatibile con il passaggio successivo.

### Fase 6 — Navigazione dei ruoli

- CML-507 — Visibilità dei ruoli e dei passaggi nella navigazione React.

Criterio raggiunto: Docente, Dipartimento e Referente risultano riconoscibili senza introdurre viste fittizie.

### Fase 7 — Progettazione didattica

- CML-508 — Programmazione annuale foundation.
- CML-509 — UDA essenziale.
- CML-510 — Riutilizzo dei dati curricolari.
- CML-511 — Salvataggio e duplicazione.
- CML-512 — Esportazione progettazione.

Avanzamento della fase: **100%**.

Criterio raggiunto: un docente può produrre, salvare, duplicare ed esportare una programmazione annuale o una UDA completa usando i dati curricolari già presenti.

## Piano di completamento residuo

### Fase 8 — Persistenza e sicurezza locale

**94% → 97%**

- CML-513 — Archivio locale unificato.
- CML-514 — Backup e ripristino.
- CML-515 — Migrazione degli schemi.
- CML-516 — Recupero da errore.

Criterio di chiusura: nessun lavoro va perso senza un avviso esplicito e ogni archivio può essere ripristinato o migrato in modo controllato.

### Fase 9 — Qualità del prodotto

**97% → 99%**

- CML-517 — Audit accessibilità.
- CML-518 — Audit responsive.
- CML-519 — Test end-to-end dei ruoli Docente, Dipartimento e Referente.
- CML-520 — Test con docenti non tecnici.
- CML-521 — Correzioni emerse dal test.

### Fase 10 — Release 1.0

**99% → 100%**

- CML-522 — Pulizia del repository.
- CML-523 — Identità e terminologia finale.
- CML-524 — Documentazione utente.
- CML-525 — Release candidate.
- CML-526 — Pubblicazione CurManLight 1.0.

## Sequenza operativa riallineata

```text
CML-488 → CML-490   Home e contesto                         COMPLETATA
CML-491 → CML-493   Consultazione completa                  COMPLETATA
CML-494 → CML-497   Proposta docente                        COMPLETATA
CML-498 → CML-501   Processo dipartimentale                 COMPLETATA
CML-502 → CML-504   Processo Referente                      COMPLETATA
CML-505             Audit end-to-end `.cml`                 COMPLETATO
CML-506             Chiusura contratti e round-trip         COMPLETATA
CML-507             Visibilità ruoli nella navigazione      COMPLETATA
CML-508 → CML-512   Progettazione annuale e UDA             COMPLETATA
CML-513 → CML-516   Persistenza, backup e recupero          PIANIFICATA
CML-517 → CML-521   Qualità, audit e test utenti            PIANIFICATA
CML-522 → CML-526   Release 1.0                             PIANIFICATA
```

## Traguardi percentuali

| Traguardo | Avanzamento |
|---|---:|
| Stato dopo CML-507 | 89% |
| Stato dopo CML-510 | 92% |
| Progettazione e UDA complete | 94% |
| Persistenza e backup completi | 97% |
| Audit e test utenti completati | 99% |
| Release CurManLight 1.0 | 100% |

## Regole di numerazione

- CML-502, CML-503 e CML-504 restano assegnate al processo Referente.
- CML-505 resta assegnata all’audit end-to-end.
- CML-506 resta assegnata alla chiusura dei contratti `.cml`.
- CML-507 resta assegnata alla visibilità dei ruoli nella navigazione.
- La progettazione didattica occupa CML-508 → CML-512.
- La persistenza e sicurezza locale prosegue da CML-513.
- Nessun codice già utilizzato può essere riassegnato.

## Prossima slice operativa

**CML-513 — Archivio locale unificato**

Stato: pianificata.

Confini della slice:

- inventario degli store locali React esistenti;
- indice unificato dei documenti salvati;
- accesso esplicito a Programmazioni annuali, UDA e documenti di processo;
- nessuna migrazione distruttiva in questa slice;
- nessun backend, autenticazione o servizio remoto;
- mantenimento della compatibilità con CML-508 → CML-512.

Dopo CML-513, la roadmap prosegue con CML-514 — Backup e ripristino.

## Verdetto

`CML_REACT_1_0_ROADMAP_REALIGNED_THROUGH_CML_512_AT_94_PERCENT`
