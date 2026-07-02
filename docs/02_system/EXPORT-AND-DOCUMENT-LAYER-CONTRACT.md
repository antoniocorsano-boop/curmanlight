# EXPORT AND DOCUMENT LAYER CONTRACT

**Stato:** Contratto docs-only
**Riferimenti:** CML-065, CML-267, CML-268, CML-269, CML-270, CML-271, CML-272, CML-273
**App:** CurManLight
**Principio guida:** prima chiedere quale documento serve, poi decidere il formato

## 1. Scopo

Definire l'Export and Document Layer di CurManLight: lo strato che organizza i documenti da produrre, i file di lavoro `.cml`, i backup, i documenti istituzionali, i documenti di revisione, i documenti didattici e i report di avanzamento.

Questo contratto non modifica runtime, storage o dati. Serve a fissare il significato architetturale della produzione documentale e dell'esportazione.

## 2. Domanda guida

L'Export and Document Layer risponde alla domanda:

> Quale documento devi produrre?

La domanda non e: in quale formato vuoi esportare.

Il formato viene dopo la tipologia documentale e dopo lo stato della fonte.

## 3. Definizione del layer

Il layer organizza il passaggio dal contenuto alla sua forma documentale finale.

Non gestisce soltanto il file, ma l'intenzione documentale:

- che cosa si vuole produrre;
- da quale base deriva;
- con quale grado di ufficialita;
- con quale livello di verifica;
- per quale uso.

Il layer non sostituisce il curricolo, il contesto o la revisione: li rende esportabili in modo leggibile.

## 4. Tipi di documento

I documenti devono essere classificati per scopo, non per estensione file.

### 4.1 Documenti istituzionali

Documenti che rappresentano il quadro ufficiale o il consolidamento del curricolo.

Esempi:

- curricolo vigente;
- documento approvato;
- esito istituzionale;
- sintesi ufficiale.

### 4.2 Documenti di revisione

Documenti che accompagnano il confronto e l'adeguamento.

Esempi:

- proposta di adeguamento;
- confronto tra versioni;
- nota di revisione;
- documento di lavoro del dipartimento.

### 4.3 Documenti didattici

Documenti operativi collegati a progettazione, competenze e UDA.

Esempi:

- programmazione annuale;
- UDA;
- attivita e materiali;
- rubriche e griglie;
- documento didattico operativo.

### 4.4 File di lavoro `.cml`

Il file `.cml` e il formato di scambio CurManLight.

Caratteristiche:

- e il file di lavoro della piattaforma;
- non viene modificato a mano;
- rappresenta uno stato intermedio o un esito di lavoro;
- puo contenere proposta, esito dipartimentale o validazione referente secondo il workflow.

### 4.5 Backup

Il backup conserva una copia di sicurezza o di recupero.

### 4.6 Report di avanzamento

Il report di avanzamento documenta lo stato di una slice, di un ciclo o di un processo.

## 5. Relazione tra documento esportato e stato della fonte

Ogni documento esportato deve dichiarare da quale stato proviene.

Stati fonte possibili:

- vigente;
- proposta IN 2025;
- validata;
- approvata;
- non ancora applicabile;
- in revisione;
- archiviata.

Regola centrale:

- un documento esportato non deve far sembrare definitiva una fonte che non lo e;
- una proposta non deve essere esportata come se fosse gia un documento ufficiale;
- un documento didattico deve dichiarare la sua base curricolare;
- un file `.cml` deve essere riconoscibile come file di lavoro e non come atto finale quando non lo e.

## 6. Distinzione tra ufficiale, lavoro e operativo

Il layer deve distinguere tre livelli.

### 6.1 Documento ufficiale

Documento che rappresenta una posizione istituzionale o un esito consolidato.

### 6.2 Documento di lavoro

Documento intermedio, consultivo o di revisione.

### 6.3 Documento didattico operativo

Documento usato per la progettazione e la pratica in classe.

La distinzione deve restare visibile anche quando il file viene esportato o condiviso.

## 7. Regole per i documenti istituzionali

- devono riferirsi al curricolo vigente, approvato o validato, se appropriato;
- devono indicare chiaramente la fonte;
- non devono confondere proposta e decisione;
- devono poter essere ricondotti a un percorso di revisione o approvazione.

## 8. Regole per i documenti di revisione

- devono esplicitare il loro stato intermedio;
- devono riportare note o segnali di cautela se il contenuto non e definitivo;
- non devono essere interpretati come atti finali;
- devono mantenere il legame con il processo di revisione e con l'allineamento IN 2025.

## 9. Regole per i documenti didattici

- devono dichiarare la base curricolare utilizzata;
- devono riferirsi al contesto di lavoro e all'applicabilita;
- devono essere leggibili come strumenti operativi;
- devono distinguere l'uso in classe dalla validazione istituzionale.

## 10. Regole per il file `.cml`

Il file `.cml` e il file di lavoro CurManLight.

Deve essere riconoscibile come:

- proposta;
- esito dipartimentale;
- validazione referente;
- pacchetto di scambio;
- file intermedio o di handoff.

Il layer deve evitare che il `.cml` venga percepito come un formato generico o come un documento finale senza contesto.

## 11. Backup e recupero

Il backup serve a proteggere il lavoro, non a creare una copia equivalente all'ufficiale.

Requisiti:

- il backup deve essere riconoscibile come tale;
- non deve sostituire il documento ufficiale;
- deve facilitare il recupero o il ripristino;
- deve mantenere il rapporto con il documento fonte.

## 12. Relazione con i report di avanzamento

Il report di avanzamento deve descrivere:

- cosa e stato prodotto;
- da quale stato si e partiti;
- quali gate sono stati superati;
- quale documento o layer e stato consolidato;
- quale blocco rimane aperto.

Il report non e il prodotto finale del lavoro: e il documento che racconta il lavoro.

## 13. Avvertenze quando la fonte non e validata

Quando un documento deriva da materiale non validato, il layer deve prevedere avvertenze chiare.

Esempi di messaggio concettuale:

> Documento derivato da materiale non validato.

> Base ancora in proposta: il contenuto non va trattato come ufficiale.

> Questo documento e di lavoro, non di consolidamento istituzionale.

## 14. Relazione con il formato file

Il formato e una scelta tecnica secondaria rispetto al documento.

Il layer non parte da Word, PDF o Markdown. Parte dal bisogno documentale:

- atto ufficiale;
- documento di revisione;
- documento didattico;
- file di scambio `.cml`;
- backup;
- report.

Il formato viene scelto solo dopo aver definito lo scopo.

## 15. Accessibilita e leggibilita

Il layer deve essere leggibile da chi deve produrre o leggere documenti senza dover interpretare l'intero sistema.

Requisiti:

- lo scopo del documento deve essere esplicito;
- il rapporto con la fonte deve essere leggibile;
- ufficiale, lavoro e operativo devono essere distinti;
- un documento non validato deve portare un segnale di cautela.

## 16. Criteri di accettazione per futura runtime slice

Una futura slice runtime potra essere considerata conforme se:

- l'utente parte dalla domanda sul documento da produrre;
- la tipologia documentale precede il formato;
- il documento esportato dichiara la base fonte;
- il sistema distingue ufficiale, lavoro e operativo;
- i file `.cml` sono leggibili come file di lavoro;
- i documenti derivati da materiale non validato portano avvertenze;
- il layer resta coerente con CML-273 e con gli stati istituzionali gia definiti.

## 17. Relazione con i contratti precedenti

- CML-065 definisce il modello base Curriculum / Didattica.
- CML-267 definisce l'ambiente curricolare professionale.
- CML-268 definisce il cruscotto e l'onboarding.
- CML-269 definisce il contesto di lavoro.
- CML-270 definisce l'applicabilita.
- CML-271 definisce l'allineamento IN 2025.
- CML-272 definisce il processo di revisione.
- CML-273 definisce il lavoro didattico.
- Questo contratto definisce come quei contenuti diventano documenti e file di scambio.
