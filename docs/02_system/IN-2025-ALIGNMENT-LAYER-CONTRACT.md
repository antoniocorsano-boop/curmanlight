# IN 2025 ALIGNMENT LAYER CONTRACT

**Stato:** Contratto docs-only
**Riferimenti:** CML-065, CML-267, CML-268, CML-269, CML-270
**App:** CurManLight
**Principio guida:** distinguere con rigore ciò che è vigente, ciò che è proposta e ciò che è già validato o approvato

## 1. Scopo

Definire l'IN 2025 Alignment Layer di CurManLight: lo strato che separa e mette in relazione curricolo vigente, proposte di adeguamento, materiali non validati, parti validate e parti approvate o applicabili.

Questo contratto non modifica runtime, storage o dati. Serve a fissare il lessico architetturale che guiderà le future slice di revisione e progettazione.

## 2. Definizione del layer

L'IN 2025 Alignment Layer è lo strato che risponde alla domanda:

> In che stato si trova questo contenuto rispetto all'adeguamento IN 2025?

Non coincide con l'applicabilità alla classe e non sostituisce il Work Context Layer.

Funzioni del layer:

- distinguere tra materiale vigente e materiale in adeguamento;
- rendere esplicito ciò che è ancora proposta e ciò che è già validato;
- evitare di confondere contenuti consultabili con contenuti istituzionalmente operativi;
- supportare una lettura chiara del passaggio da revisione a istituzionalizzazione.

## 3. Separazione tra vigente, proposta e validato

Il layer deve mantenere distinti tre piani.

### 3.1 Curricolo vigente

È il riferimento istituzionale già valido.

### 3.2 Proposta di adeguamento

È materiale di lavoro in fase di elaborazione o revisione.

### 3.3 Contenuto validato / approvato

È il contenuto che ha superato la fase di verifica ed è pronto per essere trattato come riferimento istituzionale o operativo, secondo il suo stato.

La separazione non è solo semantica: deve impedire che una proposta venga letta come già vigente.

## 4. Stati del layer

Gli stati principali sono:

- vigente;
- proposta;
- non validato;
- validato;
- approvato;
- applicabile;
- non applicabile;
- archiviato.

### 4.1 Vigente

Contenuto attualmente riconosciuto come riferimento base.

### 4.2 Proposta

Contenuto in elaborazione, non ancora consolidato.

### 4.3 Non validato

Contenuto disponibile come materiale di lavoro, ma non ancora verificato istituzionalmente.

### 4.4 Validato

Contenuto passato attraverso un processo di verifica.

### 4.5 Approvato

Contenuto formalmente accettato e pronto a entrare nel quadro operativo.

### 4.6 Applicabile

Contenuto pronto a essere usato nel perimetro già definito da contesto e applicabilità.

### 4.7 Non applicabile

Contenuto non ancora utilizzabile per una specifica classe o anno scolastico.

### 4.8 Archiviato

Contenuto conservato come storico o come traccia di lavoro superata.

## 5. Relazione con Curricolo vigente

Il curricolo vigente è la base. Il layer deve mostrare se un contenuto è allineato al vigente o se appartiene a una fase diversa.

Regole:

- il vigente non va confuso con la proposta;
- il vigente può convivere con materiali di revisione, ma deve restare chiaramente riconoscibile;
- una proposta non può sostituire il vigente senza passaggio di stato.

## 6. Relazione con adeguamento IN 2025

L'adeguamento IN 2025 è il caso d'uso principale del layer.

Il sistema deve permettere di distinguere:

- contenuti ancora da allineare;
- contenuti in revisione;
- contenuti già allineati ma non ancora applicabili;
- contenuti allineati e pronti per l'uso istituzionale o operativo.

## 7. Relazione con processo di revisione

Il layer di allineamento descrive il passaggio dei contenuti attraverso la revisione.

Il processo deve poter distinguere:

- proposta iniziale;
- confronto e modifica;
- validazione;
- approvazione;
- applicabilità o archiviazione.

## 8. Relazione con Applicability Layer

L'Applicability Layer dice quale curricolo vale per una classe e un anno scolastico.

L'IN 2025 Alignment Layer dice in che stato si trova quel contenuto rispetto al suo allineamento.

Relazione pratica:

- un contenuto può essere allineato ma non ancora applicabile;
- un contenuto può essere vigente e quindi già applicabile;
- un contenuto può essere in proposta e quindi non applicabile;
- l'applicabilità dipende anche dal contesto istituzionale definito altrove.

## 9. Impatto su Progettazione e competenze

La progettazione didattica deve conoscere lo stato del contenuto.

Il layer aiuta a evitare che una programmazione usi materiale ancora non validato come se fosse già pienamente istituzionale.

## 10. Impatto su UDA

Le UDA devono dichiarare se si basano su contenuti vigenti, su contenuti allineati o su proposte non ancora validate.

## 11. Impatto su Esportazioni

Le esportazioni devono distinguere tra:

- documento vigente;
- documento in proposta;
- documento validato;
- documento approvato;
- documento archiviato.

Questo evita che un export venga interpretato come già definitivo quando non lo è.

## 12. Messaggi concettuali per il sistema

Questo contratto non definisce UI dettagliata, ma fissa i significati da usare in una futura slice runtime.

### 12.1 Curricolo vigente

> Questo contenuto appartiene al curricolo vigente.

### 12.2 Proposta non validata

> Questo contenuto è ancora una proposta di adeguamento.

### 12.3 Contenuto validato

> Questo contenuto è stato validato ed è pronto per il passaggio successivo.

### 12.4 Contenuto approvato

> Questo contenuto è approvato e può essere trattato come riferimento operativo.

### 12.5 Contenuto non applicabile

> Questo contenuto non è ancora applicabile nel contesto selezionato.

## 13. Accessibilità e leggibilità

Il layer deve essere leggibile in modo semplice e univoco.

Requisiti:

- gli stati devono essere distinguibili con parole chiare;
- le differenze tra proposta, validato e approvato non devono essere ambigue;
- il linguaggio deve restare istituzionale ma comprensibile;
- chi legge deve capire subito se un contenuto è consultivo, in lavorazione o operativo.

## 14. Criteri di accettazione per futura runtime slice

Una futura slice runtime potrà essere considerata conforme se:

- il curricolo vigente è separato dalla proposta;
- il materiale non validato è chiaramente identificabile;
- validato, approvato e applicabile non vengono confusi;
- l'allineamento IN 2025 è leggibile senza ambiguità;
- esportazioni e UDA possono dichiarare lo stato corretto;
- il layer resta coerente con CML-270 e con il processo di revisione.

## 15. Relazione con i contratti precedenti

- CML-065 definisce il modello base Curriculum / Didattica.
- CML-267 definisce l'ambiente curricolare professionale.
- CML-268 definisce il cruscotto e l'onboarding.
- CML-269 definisce il contesto di lavoro.
- CML-270 definisce l'applicabilità alla classe e all'anno scolastico.
- Questo contratto definisce lo stato di allineamento del contenuto verso IN 2025.
