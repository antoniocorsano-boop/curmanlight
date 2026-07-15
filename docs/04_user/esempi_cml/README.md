# Libreria esempi `.cml`

Questa cartella raccoglie file di esempio per il flusso locale CurManLight.

## Tipi di file

- `teacher_proposal` — proposta preparata dal docente e sottoposta a valutazione umana.
- `department_outcome` — esito prodotto dal Dipartimento dopo la valutazione.
- altri file storici o dimostrativi — conservati per compatibilità e documentazione del flusso.

## Classificazione dei file docente

- `proposta_*.cml` — libreria gestita corrente, soggetta al contratto v1 completo.
- `esempio_proposta_docente_*.cml` — esempi legacy anteriori a `unitaId` e `testoFinale`, conservati senza riscrittura retroattiva.

I file legacy restano leggibili come testimonianza del flusso precedente, ma non sono il modello da copiare per nuove proposte.

## Lotti pilota consolidati

### Tecnologia

- intelligenza artificiale consapevole;
- economia circolare;
- benessere digitale nell'Infanzia;
- prototipazione nella Secondaria.

### Italiano

- lettura integrale e interpretazione;
- riassunto, riscrittura e revisione;
- corsivo e scrittura manuale;
- grammatica normativa e revisione dei testi.

### Educazione civica

- cittadinanza digitale e verifica delle fonti;
- sostenibilità e cura dei beni comuni;
- Costituzione e partecipazione democratica;
- etica tecnologica.

## Contratto minimo per `teacher_proposal`

Ogni nuovo esempio docente deve mantenere:

- `schemaVersion: "1.0"`;
- `fileType: "teacher_proposal"`;
- `counts.total`, `counts.ok`, `counts.modifica`, `counts.nuovo` coerenti;
- array `proposals`;
- `id` e `unitaId` stabili per ogni proposta;
- `status` tra `ok`, `modifica`, `nuovo`;
- `decisione: null`;
- `testoFinale: null`;
- `humanValidationRequired: true`;
- nessun dato personale reale;
- nessuna approvazione automatica.

## Controllo automatico

Dalla radice del repository:

```bash
node tools/validate-cml-examples.mjs
```

Il controllo:

1. legge tutti i file `.cml` della cartella;
2. verifica che il JSON sia valido e che `fileType` sia dichiarato;
3. applica il contratto v1 completo ai `teacher_proposal` gestiti `proposta_*.cml`;
4. applica ai file docente legacy soltanto i gate di leggibilità, versione e validazione umana;
5. controlla conteggi, identificativi, stati e campi decisionali della libreria gestita;
6. non tratta gli esiti dipartimentali come proposte docente.

## Regola d'uso

Gli esempi non modificano il curricolo canonico. Devono essere importati, discussi e validati dagli organi scolastici competenti prima di produrre qualsiasi testo finale.