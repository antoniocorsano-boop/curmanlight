# DIDACTICS LAYER CONTRACT

**Stato:** Contratto docs-only
**Riferimenti:** CML-065, CML-267, CML-268, CML-269, CML-270, CML-271, CML-272
**App:** CurManLight
**Principio guida:** la didattica non e un ambiente separato dal curricolo, ma il suo uso operativo

## 1. Scopo

Definire il Didactics Layer di CurManLight: lo strato che collega curricolo applicabile, competenze, programmazione annuale, UDA, attivita, materiali operativi, rubriche e griglie.

Questo contratto non modifica runtime, storage o dati. Serve a fissare il significato architetturale del lavoro didattico dentro il quadro curricolare gia definito.

## 2. Definizione del Didactics Layer

Il Didactics Layer e lo strato che risponde alla domanda:

> Come trasformo il curricolo applicabile in progettazione didattica concreta?

Il layer non sostituisce il curricolo, non introduce un nuovo mondo applicativo e non separa la progettazione dal quadro istituzionale.

Funzioni del layer:

- tradurre il curricolo in progettazione operativa;
- rendere esplicito il collegamento tra contesto, applicabilita e attivita;
- distinguere la base curricolare usata per la progettazione;
- mantenere coerenti programmazione, UDA, materiali e valutazione.

## 3. Relazione con il curricolo applicabile

Ogni artefatto didattico deve dichiarare il proprio riferimento curricolare.

La base puo essere:

- vigente;
- proposta IN 2025;
- validata;
- approvata;
- non ancora applicabile.

La progettazione didattica non deve apparire scollegata dal quadro istituzionale di provenienza.

## 4. Relazione con le competenze

Le competenze sono il ponte tra curricolo e lavoro didattico.

Il layer deve consentire di leggere:

- quali competenze sono attese dal curricolo applicabile;
- quali competenze vengono sviluppate nella programmazione;
- quali evidenze mostrano il raggiungimento o l'avvicinamento alle competenze.

Le competenze non sono un'etichetta separata dalla base curricolare: derivano dal riferimento applicabile e ne ereditano lo stato.

## 5. Programmazione annuale

La programmazione annuale e il primo livello operativo del Didactics Layer.

Deve poter dichiarare:

- classe o gruppo di riferimento;
- anno scolastico;
- base curricolare usata;
- competenze attese;
- scansione temporale o unita di lavoro;
- eventuali note di adattamento.

La programmazione annuale non deve essere trattata come documento slegato dal curricolo o dal contesto di lavoro.

## 6. UDA

Le UDA sono il livello progettuale piu tipico del Didactics Layer.

Ogni UDA deve poter dichiarare:

- titolo o focus;
- competenze di riferimento;
- base curricolare;
- eventuale disciplina o area disciplinare;
- attivita previste;
- materiali operativi;
- evidenze attese;
- criteri di valutazione.

L'UDA non deve nascere come oggetto isolato: deve essere riconducibile alla base curricolare, al contesto e all'applicabilita.

## 7. Attivita e materiali operativi

Il layer comprende il livello di lavoro concreto in classe o nel laboratorio.

Elementi previsti:

- attivita;
- consegne;
- materiali;
- strumenti;
- supporti;
- esempi;
- esercitazioni;
- risorse per il docente.

Questo livello deve essere leggibile come traduzione operativa della progettazione, non come archivio disordinato di contenuti.

## 8. Rubriche e griglie

Le rubriche e le griglie sono la parte valutativa del Didactics Layer.

Devono poter mostrare:

- criteri;
- livelli;
- descrittori;
- collegamento con competenze ed evidenze;
- eventuale relazione con la base curricolare.

La valutazione deve essere leggibile come conseguenza della progettazione, non come elemento separato dal curricolo.

## 9. Stato istituzionale della base curricolare usata

Ogni programmazione, UDA o documento didattico deve poter dichiarare lo stato della base curricolare da cui deriva.

Stati possibili:

- vigente;
- proposta IN 2025;
- validata;
- approvata;
- non ancora applicabile.

### 9.1 Vigente

La base e il curricolo riconosciuto come riferimento istituzionale attuale.

### 9.2 Proposta IN 2025

La base e ancora in fase di adeguamento o revisione.

### 9.3 Validata

La base ha superato la verifica prevista, ma puo richiedere ancora un passaggio istituzionale o una collocazione piu precisa.

### 9.4 Approvata

La base e stata accettata come riferimento operativo o istituzionale.

### 9.5 Non ancora applicabile

La base non e ancora pronta per essere usata nel contesto selezionato.

## 10. Relazione con i layer precedenti

Il Didactics Layer si appoggia ai layer gia definiti:

- CML-267: ambiente curricolare professionale;
- CML-268: cruscotto e onboarding;
- CML-269: contesto di lavoro;
- CML-270: applicabilita per classe e anno scolastico;
- CML-271: allineamento IN 2025;
- CML-272: processo di revisione.

Il layer didattico non sostituisce questi livelli. Li usa come fondamento per trasformare il curricolo in lavoro concreto.

## 11. Impatto su progettazione e uso operativo

Il layer deve impedire che la didattica sembri svincolata dal quadro istituzionale.

Conseguenze:

- una programmazione annuale deve essere leggibile rispetto alla base curricolare;
- una UDA deve dichiarare il proprio riferimento;
- materiali e rubriche devono mantenere il legame con le competenze;
- la lettura del prodotto deve chiarire se si tratta di contenuto vigent, in proposta, validato o approvato.

## 12. Messaggi concettuali per il sistema

Questo contratto non definisce UI runtime dettagliata, ma fissa i significati da usare in una futura slice.

### 12.1 Base vigente

> Questa progettazione usa il curricolo vigente come base.

### 12.2 Base in proposta

> Questa progettazione usa una proposta IN 2025 non ancora definitiva.

### 12.3 Base validata

> Questa progettazione usa una base validata.

### 12.4 Base approvata

> Questa progettazione usa una base approvata e applicabile.

### 12.5 Base non ancora applicabile

> Questa progettazione si appoggia a una base non ancora applicabile nel contesto selezionato.

## 13. Accessibilita e leggibilita

Il Didactics Layer deve essere leggibile anche da chi non conosce il dettaglio tecnico del repository.

Requisiti:

- la base curricolare deve essere sempre visibile o ricostruibile;
- il linguaggio deve distinguere progettazione, attivita e valutazione;
- le competenze devono essere collegate alla base;
- stati come vigente, proposta, validata, approvata e non ancora applicabile devono essere distinguibili con chiarezza.

## 14. Criteri di accettazione per futura runtime slice

Una futura slice runtime potra essere considerata conforme se:

- la programmazione annuale dichiara la base curricolare;
- ogni UDA dichiara competenze e riferimento applicabile;
- materiali e rubriche sono legati alla progettazione;
- il sistema distingue tra base vigente, proposta, validata, approvata e non ancora applicabile;
- la didattica resta chiaramente collegata al curricolo e al contesto;
- il layer non appare come ambiente separato dal prodotto.

## 15. Relazione con i contratti precedenti

- CML-065 definisce il modello base Curriculum / Didattica.
- CML-267 definisce l'ambiente curricolare professionale.
- CML-268 definisce il cruscotto e l'onboarding.
- CML-269 definisce il contesto di lavoro.
- CML-270 definisce l'applicabilita alla classe e all'anno scolastico.
- CML-271 definisce l'allineamento IN 2025.
- CML-272 definisce il processo di revisione.
- Questo contratto definisce il livello di progettazione didattica che usa quei layer come base.
