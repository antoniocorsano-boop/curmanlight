# Synthetic User Swarm Model

## Scopo

Modello riutilizzabile di swarm di agenti operativi per la pre-validazione di CurManLight. Lo swarm simula tipologie di utenza scolastica con obiettivi, competenze, vincoli ed errori realistici. Non sostituisce il pilot con docenti reali.

## Principi

- esecuzione locale o in CI;
- nessun backend, telemetria o invio di dati all'esterno;
- soli dati sintetici;
- scenari basati su obiettivi utente, non su sequenze di click;
- separazione tra persone, compiti, osservatori e arbitro;
- evidenze ripetibili e versionate;
- validazione umana finale obbligatoria.

## Agenti-persona

Ogni persona dichiara ruolo, competenza digitale, obiettivo, lessico conosciuto, tolleranza alla complessità, errori probabili e criteri di successo.

Profili iniziali:

1. docente poco esperto;
2. docente esperto;
3. docente disciplinare;
4. coordinatore di dipartimento;
5. referente curricolo;
6. dirigente;
7. docente di sostegno;
8. utente mobile-first;
9. utente scettico;
10. utente frettoloso.

## Agenti di compito

Compiti indipendenti dalle persone:

- trovare disciplina e unità;
- comprendere fonte e stato;
- preparare una proposta;
- esportare un `.cml`;
- importare una proposta;
- confrontare proposte;
- produrre un esito dipartimentale;
- riprendere un lavoro;
- eseguire backup e ripristino;
- spiegare se il curricolo canonico è cambiato.

Prompt corretto: “Vuoi proporre una modifica a un'unità e consegnarla al coordinatore.”

Prompt da evitare: istruzioni che rivelano tab, pulsanti o sequenza UI.

## Osservatori

### UX

Rileva esitazioni, ritorni indietro, click inutili, azioni non trovate, richieste di aiuto e abbandono.

### Linguistico

Rileva termini tecnici, etichette ambigue, incoerenze e confusione tra proposta, esito e curricolo canonico.

### Processo

Controlla ruoli, stati, passaggio Docente → Dipartimento → Referente, assenza di approvazioni implicite e validazione umana.

### Tecnico

Controlla console, perdita dati, import/export, persistenza, backup/restore, mobile, accessibilità e integrità `.cml`.

## Arbitro

Consolida i risultati, elimina duplicati, distingue evidenze da supposizioni, assegna severità, identifica falsi positivi e impedisce che un singolo profilo determini la conclusione generale.

## Ciclo operativo

```text
Baseline → scenario → persona → navigazione reale → traccia azioni → osservatori → confronto multi-persona → arbitraggio → rapporto
```

Ogni run parte dalla stessa baseline e da stato locale isolato.

## Tipi di swarm

- esplorazione: cerca problemi nuovi;
- regressione: ripete scenari stabili;
- avversariale: file malformati, duplicati, ruoli errati, interruzioni e dati incompleti;
- comprensione: verifica cosa l'utente crede sia stato salvato, chi deve validare e se il curricolo è cambiato.

## Evidenza minima

```json
{
  "runId": "cml-swarm-001",
  "baseline": "commit-sha",
  "persona": "docente_poco_esperto",
  "scenario": "esporta_proposta",
  "viewport": "desktop",
  "completed": false,
  "blockingPoint": "distinzione_salva_esporta",
  "actions": 11,
  "backtracks": 3,
  "helpRequests": 2,
  "ambiguities": ["curricolo definitivo", "proposta docente"],
  "severity": "high",
  "evidence": ["Ha aperto due volte Esportazioni senza individuare il file corretto"],
  "humanReviewRequired": true
}
```

## Severità

- critical: perdita dati, modifica non intenzionale del curricolo, blocco totale o violazione del gate umano;
- high: compito non completabile da più profili o ambiguità che induce errore;
- medium: compito completabile con esitazioni o aiuto;
- low: problema non bloccante.

Una segnalazione diventa candidata a issue se ricorre in almeno due profili, è un singolo evento critical oppure è una regressione verificata.

## Struttura proposta

```text
agent-evaluation/
  personas/
  scenarios/
  observers/
  schemas/
  fixtures/
  runs/
  reports/
  orchestrator.mjs
```

## Prima iterazione

- 6 persone;
- 5 scenari;
- 4 osservatori;
- 1 arbitro;
- desktop e mobile;
- 30 esecuzioni principali.

Scenari:

1. consultare un'unità;
2. comprendere fonte e stato;
3. creare ed esportare una proposta;
4. importare una proposta e produrre un esito;
5. backup, restore e spiegazione di ciò che è cambiato.

## Relazione con il pilot umano

```text
swarm sintetico → correzione blocchi evidenti → pilot reale → confronto sintetico/reale → taratura → regressione automatizzata
```

Lo swarm non può dichiarare PM-09 completato senza evidenze umane.

## Roadmap

- CML-517A — Synthetic User Swarm Architecture;
- CML-517B — Browser Agent Harness;
- CML-517C — First Synthetic Pilot;
- CML-517D — Human/Synthetic Comparison Protocol;
- CML-517E — Regression Swarm.

## Governance

- nessun agente approva modifiche curricolari;
- nessun output sintetico diventa automaticamente una decisione di prodotto;
- ogni issue deve citare evidenze osservabili;
- ogni modifica proposta richiede verifica umana;
- persone e scenari sono versionati;
- questo documento è la fonte primaria del modello swarm CurManLight.
