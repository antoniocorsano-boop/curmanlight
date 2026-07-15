# Libreria esempi `.cml`

Questa cartella raccoglie file di esempio per il flusso locale CurManLight.

## Tipi di file

- `teacher_proposal` — proposta preparata dal docente e sottoposta a valutazione umana.
- `department_outcome` — esito prodotto dal Dipartimento dopo la valutazione.
- altri file storici o dimostrativi — conservati per compatibilità e documentazione del flusso.

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
3. applica il contratto v1 completo ai soli `teacher_proposal`;
4. controlla conteggi, identificativi, stati e gate di validazione umana;
5. non tratta gli esiti dipartimentali come proposte docente.

## Regola d'uso

Gli esempi non modificano il curricolo canonico. Devono essere importati, discussi e validati dagli organi scolastici competenti prima di produrre qualsiasi testo finale.