# Human/Synthetic Comparison Protocol

## Scopo

Questo protocollo definisce come confrontare i risultati dello swarm sintetico CurManLight con un pilot reale condotto con docenti. Lo swarm resta uno strumento di pre-validazione e regressione: non produce evidenza utente sufficiente senza confronto umano.

## Baseline

- swarm sintetico: 6 personas × 5 scenari = 30 run;
- scenari: consulta unità, crea proposta, esporta `.cml`, importa proposta, recupera lavoro;
- viewport: desktop 1440 × 1000 e mobile 390 × 844;
- evidenze sintetiche: record JSON, screenshot, log console e stato finale;
- campione umano minimo: 3 docenti;
- campione raccomandato: 5 docenti con competenze digitali e discipline differenti.

## Principi

1. I partecipanti umani ricevono gli stessi obiettivi utente degli agenti, senza sequenze di click.
2. Le evidenze sintetiche e umane restano separate fino alla fase di confronto.
3. Un finding sintetico non diventa automaticamente una modifica di prodotto.
4. Un blocco umano critico può avere priorità anche se non previsto dallo swarm.
5. Nessun dato personale degli alunni deve essere utilizzato.
6. La validazione finale resta umana.

## Unità di confronto

Ogni osservazione deve essere ricondotta alla chiave:

`scenario × profilo × viewport × punto del flusso`

Campi minimi:

- completamento;
- punto di blocco;
- numero di azioni;
- ritorni indietro;
- richieste di aiuto;
- termini ambigui;
- errore percepito;
- comprensione dello stato salvato;
- comprensione della validazione umana;
- severità;
- evidenza osservabile.

## Classificazione del confronto

### Concordanza vera

Lo swarm e almeno un partecipante umano incontrano lo stesso problema nello stesso punto del flusso.

### Segnale sintetico non confermato

Lo swarm segnala un problema che non emerge nel pilot umano. Deve essere conservato come ipotesi o regressione tecnica, non come evidenza UX confermata.

### Problema umano non previsto

Il pilot umano rileva un blocco o un'ambiguità non emersa nello swarm. Ha priorità nella calibrazione delle personas e degli scenari.

### Falso positivo sintetico

Il finding sintetico è ripetuto ma il comportamento umano mostra che il percorso è compreso e completato senza esitazione significativa.

### Falso negativo sintetico

Lo swarm completa il compito, mentre almeno un partecipante umano resta bloccato o interpreta erroneamente il processo.

## Metriche

Per ogni scenario calcolare:

- tasso di completamento sintetico;
- tasso di completamento umano;
- precisione dei finding sintetici: finding confermati / finding sintetici totali;
- copertura: problemi umani previsti dallo swarm / problemi umani totali;
- tasso di falsi positivi;
- tasso di falsi negativi;
- differenza mediana nel numero di azioni;
- differenza nelle richieste di aiuto;
- concordanza sui termini ambigui;
- concordanza sulla severità.

Le metriche non sostituiscono la lettura qualitativa delle osservazioni.

## Soglie decisionali iniziali

- blocco critico umano: intervento prioritario anche con una sola occorrenza;
- problema ricorrente umano: almeno 2 partecipanti;
- finding sintetico promosso a candidato UX: confermato da almeno 1 partecipante oppure supportato da evidenza tecnica oggettiva;
- falso positivo sistematico: almeno 3 run sintetici e nessuna conferma umana;
- scenario da ricalibrare: copertura inferiore al 50%;
- persona da ricalibrare: almeno 2 falsi positivi o 2 falsi negativi nello stesso profilo;
- swarm idoneo alla regressione: nessun falso negativo sui blocchi critici e copertura complessiva almeno 70%.

Queste soglie sono iniziali e devono essere aggiornate dopo il primo pilot reale.

## Procedura operativa

1. Congelare commit, browser e viewport della baseline.
2. Eseguire lo swarm e archiviare gli artefatti.
3. Condurre il pilot umano senza mostrare i risultati sintetici agli osservatori.
4. Normalizzare le osservazioni nel medesimo schema.
5. Abbinare osservazioni per scenario, profilo e punto del flusso.
6. Classificare concordanze, falsi positivi e falsi negativi.
7. Assegnare severità tramite revisione umana.
8. Produrre backlog distinto in:
   - correzioni UX confermate;
   - regressioni tecniche;
   - ipotesi da osservare;
   - aggiornamenti delle personas;
   - aggiornamenti degli scenari.
9. Ripetere lo swarm dopo le correzioni.
10. Verificare le correzioni con un secondo pilot umano ridotto.

## Formato del rapporto

Il rapporto consolidato deve includere:

- baseline e commit;
- composizione del campione umano;
- matrice delle osservazioni;
- finding confermati;
- falsi positivi sintetici;
- falsi negativi sintetici;
- problemi esclusivamente tecnici;
- problemi esclusivamente umani;
- modifiche proposte alle personas;
- modifiche proposte agli scenari;
- backlog con severità e prova associata;
- limiti metodologici.

## Divieti

- non usare lo swarm per dichiarare che il prodotto è usabile senza pilot umano;
- non generare automaticamente issue di prodotto da un singolo finding sintetico;
- non modificare dati curricolari canonici durante il test;
- non inviare telemetria o dati all'esterno;
- non registrare dati personali non necessari;
- non confondere successo tecnico con comprensione dell'utente.

## Gate di uscita CML-517D

Il protocollo è pronto quando:

- usa gli stessi cinque scenari di CML-517B/C;
- definisce campione, metriche e soglie;
- distingue chiaramente falsi positivi e falsi negativi;
- prevede calibrazione delle personas;
- mantiene separata evidenza sintetica ed evidenza umana;
- richiede validazione umana finale.
