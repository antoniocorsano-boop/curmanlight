# Guida alla simulazione — Esempi dimostrativi `.cml`

## A cosa servono questi file

I file nella cartella `docs/04_user/esempi_cml/` sono **esempi dimostrativi**. Permettono di provare il flusso di lavoro di CurManLight — docente → dipartimento → referente — senza usare dati reali della scuola.

Sono utili per:
- formazione interna dei docenti sull'uso dell'app;
- presentazione del flusso a nuovi membri del dipartimento;
- test del passaggio proposte → esiti → report senza rischiare dati sensibili.

**Il flusso completo (docente → dipartimento → referente → report) è stato verificato sulla versione live dell'app**.

**Importante:** questi file non rappresentano un curricolo approvato. Usano solo dati fittizi.

## Formato `.cml`

I file `.cml` sono JSON con `fileType` che identifica il ruolo (`teacher_proposal` per proposta docente, `department_outcome` per esito dipartimentale). Seguono lo schema `1.0` riconosciuto dall'app CurManLight.

## URL app

Apri l'app all'indirizzo:
`https://antoniocorsano-boop.github.io/curmanlight`

## Flusso docente

1. Apri l'app e configura il profilo (es. disciplina: Tecnologia, ordine: Secondaria).
2. Vai alla scheda **Lavoro** e apporta modifiche ai traguardi/obiettivi proposti.
3. Usa il pulsante **"Scarica proposta .cml"** per esportare le tue proposte.
4. **In alternativa**, usa direttamente i file di esempio già pronti:
   - `esempio_proposta_docente_tecnologia.cml`
   - `esempio_proposta_docente_italiano.cml`

## Flusso dipartimento

1. Nell'app, vai alla sezione **"Validazione dipartimentale"** (si trova nella scheda "Revisione").
2. Usa il pulsante **"Importa proposte docenti .cml"** e carica uno dei file di esempio proposta docente.
3. Esamina le proposte importate. Per ogni proposta, assegna un esito tra:
   - **Confluita nella sintesi** — la proposta è stata assorbita nella sintesi finale
   - **Riformulata dal dipartimento** — la proposta è stata modificata
   - **Assorbita in altra proposta** — la proposta confluisce in altra
   - **Da chiarire** — serve un chiarimento prima di decidere
4. Usa il pulsante **"Esporta esito dipartimento .cml"** per generare l'esito.
5. **In alternativa**, carica uno dei file di esempio già pronti:
   - `esempio_esito_dipartimento_tecnologia.cml`
   - `esempio_esito_dipartimento_italiano.cml`

## Flusso referente

1. Nell'app, vai alla sezione **"Verifica referente curricolo"** (si trova nella scheda "Revisione").
2. Usa il pulsante **"Importa esiti dipartimentali .cml"** e carica uno o piu file di esito dipartimentale.
3. Il referente puo ora:
   - **Controllare completezza**: quante proposte gestite, quante discipline rappresentate
   - **Esaminare le evidenze**: elementi confluiti, riformulati, assorbiti, da chiarire, senza esito
   - **Identificare punti critici**: elementi marcati come `da_chiarire`
   - **Verificare elementi senza esito**: proposte che non hanno ricevuto un handling valido
4. Usa il pulsante **"Scarica report gruppo di lavoro"** per produrre un report di sintesi.

## Report finale atteso

Il report del referente include:
- **Sommario**: totale esiti, discipline, elementi da chiarire, elementi senza esito
- **Dettaglio per disciplina**: conteggio per ogni tipo di esito (confluita, riformulata, assorbita, da chiarire, senza esito)
- **Punti da chiarire** sezione dedicata
- **Elementi senza esito del confronto** sezione dedicata
- **Domande guida** per il gruppo di lavoro

## Cosa osservare durante la simulazione

- Le proposte importate appaiono nella scheda Dipartimento con i loro dettagli (disciplina, ordine, tipo, testo, motivazione, fonte).
- L'esito scelto per ogni proposta si riflette nel file `.cml` esportato.
- Il referente vede conteggi aggregati per tipo di esito.
- Le proposte senza handling valido appaiono come "senza esito".

## Perche non usare dati reali nella prova

I file di esempio usano solo **dati fittizi**:
- Discipline: Tecnologia, Italiano (discipline reali ma dati inventati)
- Docenti, classi e plessi: nessun riferimento a persone reali
- La scuola "Istituto Comprensivo Calvario-Covotta «don Lorenzo Milani»" e citata come scuola di riferimento ma i dati delle proposte sono fittizi
- Non ci sono nomi reali di docenti, studenti o dirigenti

Durante la formazione, usa sempre file di esempio, mai file con dati reali.

## Casi coperti dagli esempi

| Caso | Tecnologia | Italiano |
|---|---|---|
| Proposta confluita nella sintesi | te_pri1, te_sec2, te_ob_pri2, te_ob_sec1 | it_inf1, it_inf3, it_pri2, it_pri3, it_sec3, it_ob_inf2, it_ob_pri1, it_ob_pri2 |
| Proposta riformulata dal dipartimento | te_pri2, te_ob_sec2 | it_pri5 |
| Proposta assorbita in altra proposta | te_sec3 | it_sec2 |
| Proposta da chiarire | te_ob_sec3 | it_ob_sec1 |
| Proposta senza esito | (nessuna) | (nessuna) |

## Note

- I file `.cml` devono essere JSON validi.
- La validazione richiede: `fileType`, `discipline`, `proposals`/`proposalHandling`, `humanValidationRequired: true`.
- I file di esempio NON attivano il Drive condiviso (upload endpoint non configurato). Funzionano solo in modalita locale (download/import manuale).
