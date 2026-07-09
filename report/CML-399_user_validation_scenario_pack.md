# CML-399 — User Validation Scenario Pack

Pacchetto di validazione utente per docenti non tecnici.

## 1. Profilo del tester

- **Ruolo**: docente non tecnico, conoscenza del lavoro scolastico reale
- **Non deve**: valutare il codice, cliccare sequenze predefinite, eseguire collaudi
- **Deve**: valutare chiarezza, utilità, fiducia, orientamento e aderenza al processo scolastico

## 2. Scenario narrativo

> Sei un docente che deve consultare il curricolo di istituto e capire se lo strumento può aiutarti a preparare materiali di lavoro per il dipartimento, senza sostituire la decisione collegiale.

## 3. Compiti non meccanici

Consegne aperte, senza indicazioni di clic:

1. Apri lo strumento e spiega a parole tue a cosa serve
2. Individua cosa puoi fare oggi
3. Consulta una disciplina a scelta
4. Valuta se le informazioni sono comprensibili
5. Prova a preparare una proposta per il dipartimento
6. Verifica se è chiaro che la validazione resta umana
7. Annosa cosa miglioreresti o cosa non capisci

## 4. Domande di osservazione

- La Home ti fa capire a cosa serve lo strumento?
- Il testo "Cosa vuoi fare oggi?" orienta meglio rispetto a una dashboard generica?
- Il chip di contesto (scuola, anno scolastico, ruolo) è utile o passa inosservato?
- Le quattro azioni (consulta, prepara, esporta, verifica) sono comprensibili?
- È chiaro che l'app non approva il curricolo?
- Ti senti guidato nel percorso o devi esplorare a tentativi?
- Quali parole risultano troppo tecniche?
- Quale sezione useresti davvero nel lavoro di dipartimento?

## 5. Griglia di valutazione

Scala: 1 = Non chiaro, 2 = Parzialmente chiaro, 3 = Abbastanza chiaro, 4 = Chiaro, 5 = Molto chiaro

| Indicatore | Valutazione (1-5) | Note |
|---|---|---|
| Orientamento iniziale | | |
| Comprensione del processo | | |
| Fiducia nello strumento | | |
| Chiarezza dei limiti | | |
| Utilità per il dipartimento | | |
| Semplicità del linguaggio | | |
| Coerenza con il lavoro scolastico reale | | |

## 6. Formato di raccolta annotazioni

Raccogliere evidenze strutturate:

```text
COMPRESO SUBITO:
- ...

DUBBIO:
- ...

PAROLE DA SEMPLIFICARE:
- ...

AZIONI UTILI:
- ...

PARTI CHE RICHIEDONO GUIDA CONTESTUALE:
- ...

MODIFICHE CANDIDATE ALLE PROSSIME SLICE PM/UX:
- ...
```

## 7. Esiti attesi per roadmap PM/UX

L'esito non è pass/fail ma una raccolta strutturata che alimenta:

- Priorità PM-03 (Orientamento): chiarezza Home, comprensione percorso
- Priorità PM-06 (Accompagnamento): guida contestuale, parole tecniche
- Priorità PM-07 (Uniformità): coerenza terminologica
- Candidatura modifiche runtime (CML-400)

## Criterio di chiusura

```text
CML_399_USER_VALIDATION_SCENARIO_PACK_READY_LOCAL_NOT_PUSHED
```
