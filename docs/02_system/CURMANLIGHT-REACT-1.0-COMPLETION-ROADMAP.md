# CurManLight React 1.0 — Completion Roadmap

## Stato complessivo

Avanzamento stimato verso una versione 1.0 realmente utilizzabile: **89%**.

La percentuale è ponderata su dati, consultazione, processo, persistenza, esportazioni, progettazione, qualità e pubblicazione. Il valore sostituisce la baseline precedente del 68% e registra le slice effettivamente completate fino a CML-504.

| Area | Peso | Avanzamento |
|---|---:|---:|
| Dati curricolari e contratti | 15% | 95% |
| Consultazione del curricolo | 12% | 95% |
| Proposte di aggiornamento e confronto | 12% | 95% |
| Test guidato per docenti | 8% | 85% |
| Persistenza ed esportazioni | 10% | 90% |
| Contesto utente e impostazioni | 8% | 80% |
| Progettazione annuale e UDA | 12% | 25% |
| Processo, stati e ruoli | 8% | 90% |
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
6. esportarla;
7. importare più proposte nel Dipartimento;
8. registrare e esportare un esito dipartimentale;
9. importare, validare ed esportare gli esiti nel ruolo Referente;
10. preparare una programmazione annuale o una UDA;
11. recuperare il lavoro senza perdita di dati;
12. utilizzare correttamente l’app da desktop e mobile;
13. comprendere sempre stato, ruolo e prossimo passo.

Fuori dalla 1.0: backend centrale, telemetria, autenticazione proprietaria, approvazione automatica e integrazione Drive/Workspace completa.

## Fasi completate

### Fase 1 — Home e contesto

**Completata**

- CML-488 — Audit visuale completo Home React.
- CML-489 — Contesto di lavoro essenziale.
- CML-490 — Home contestuale.

Criterio raggiunto: dalla Home è chiaro cosa fare, per quale ruolo e con quale prossimo passo.

### Fase 2 — Consultazione completa

**Completata**

- CML-491 — Consultazione B04 definitiva.
- CML-492 — Orientamento nel dettaglio.
- CML-493 — Stati vuoti ed errori.

Criterio raggiunto: consultazione utilizzabile senza conoscere la struttura tecnica dei dati.

### Fase 3 — Proposta docente completa

**Completata**

- CML-494 — Creazione proposta.
- CML-495 — Stati della proposta.
- CML-496 — Validazioni preventive.
- CML-497 — Esportazione proposta `.cml`.

Criterio raggiunto: una proposta può essere creata, chiusa ed esportata senza perdita di informazioni.

### Fase 4 — Processo dipartimentale

**Completata**

- CML-498 — Import multiplo delle proposte.
- CML-499 — Coda dipartimentale.
- CML-500 — Decisione dipartimentale.
- CML-501 — Esportazione esito dipartimentale.

Criterio raggiunto: il Dipartimento può lavorare su più proposte e generare un esito verificabile.

### Fase 5 — Processo Referente

**Completata**

- CML-502 — Import multiplo degli esiti dipartimentali.
- CML-503 — Validazione finale del Referente.
- CML-504 — Esportazione `referent_validation.cml`.

Criterio raggiunto: il Referente può importare gli esiti, registrarne la validazione finale e produrre un artefatto locale tracciabile.

## Piano di completamento residuo

### Fase 6 — Progettazione didattica

**89% → 94%**

- CML-506 — Programmazione annuale essenziale.
- CML-507 — UDA essenziale.
- CML-508 — Riutilizzo dei dati curricolari.
- CML-509 — Salvataggio e duplicazione.
- CML-510 — Esportazione progettazione.

Criterio di chiusura: un docente può produrre, salvare, duplicare ed esportare una programmazione annuale o una UDA completa usando i dati curricolari già presenti.

### Fase 7 — Persistenza e sicurezza locale

**94% → 97%**

- CML-511 — Archivio locale unificato.
- CML-512 — Backup e ripristino.
- CML-513 — Migrazione degli schemi.
- CML-514 — Recupero da errore.

Criterio di chiusura: nessun lavoro va perso senza un avviso esplicito e ogni archivio può essere ripristinato o migrato in modo controllato.

### Fase 8 — Qualità del prodotto

**97% → 99%**

- CML-515 — Audit accessibilità.
- CML-516 — Audit responsive.
- CML-517 — Test end-to-end dei ruoli Docente, Dipartimento e Referente.
- CML-518 — Test con docenti non tecnici.
- CML-519 — Correzioni emerse dal test.

Criterio di chiusura: i flussi principali sono verificati su desktop e mobile, con controlli automatici e prove d’uso non tecniche.

### Fase 9 — Release 1.0

**99% → 100%**

- CML-520 — Pulizia del repository.
- CML-521 — Identità e terminologia finale.
- CML-522 — Documentazione utente.
- CML-523 — Release candidate.
- CML-524 — Pubblicazione CurManLight 1.0.

Criterio di chiusura: repository pulito, documentazione coerente, release candidate verificata e versione 1.0 pubblicata.

## Sequenza operativa riallineata

```text
CML-488 → CML-490   Home e contesto                         COMPLETATA
CML-491 → CML-493   Consultazione completa                  COMPLETATA
CML-494 → CML-497   Proposta docente                        COMPLETATA
CML-498 → CML-501   Processo dipartimentale                 COMPLETATA
CML-502 → CML-504   Processo Referente                      COMPLETATA
CML-505             Riallineamento roadmap                  IN CORSO
CML-506 → CML-510   Progettazione annuale e UDA             PROSSIMA MACROFASE
CML-511 → CML-514   Persistenza, backup e recupero          PIANIFICATA
CML-515 → CML-519   Qualità, audit e test utenti            PIANIFICATA
CML-520 → CML-524   Release 1.0                             PIANIFICATA
```

## Traguardi percentuali

| Traguardo | Avanzamento |
|---|---:|
| Stato riallineato dopo CML-504 | 89% |
| Progettazione e UDA complete | 94% |
| Persistenza e backup completi | 97% |
| Audit e test utenti completati | 99% |
| Release CurManLight 1.0 | 100% |

## Regole di numerazione

- I codici CML-502, CML-503 e CML-504 restano assegnati al processo Referente già completato.
- CML-505 è riservata al presente riallineamento documentale.
- La progettazione didattica riparte da CML-506.
- Nessun codice già utilizzato può essere riassegnato a una nuova funzione.

## Prossima slice

**CML-506 — Programmazione annuale essenziale**

Obiettivo: introdurre un primo flusso docente per costruire una programmazione annuale a partire dal curricolo selezionato, con struttura locale, sezioni minime obbligatorie e nessuna dipendenza da backend o servizi remoti.

Prima dell’implementazione devono essere definiti:

- contratto dati della programmazione;
- sezioni obbligatorie e facoltative;
- relazione con disciplina, ordine e anno scolastico;
- strategia di salvataggio locale;
- confine tra programmazione annuale e UDA.

## Verdetto

`CML_REACT_1_0_ROADMAP_REALIGNED_AFTER_REFERENT_FLOW`
