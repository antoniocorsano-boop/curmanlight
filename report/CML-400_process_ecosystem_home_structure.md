# CML-400 — Process ecosystem home structure

## Sintesi

La lettura dei mock aggiornati e della pubblicazione live conferma che CurManLight deve essere rappresentato come **ambiente di processo curricolare**, non come semplice visualizzatore di curricolo o strumento di progettazione.

La struttura proposta per la Home mette in evidenza:

- fonti ufficiali e base istituzionale;
- consultazione del curricolo;
- revisione disciplinare e gap verso IN 2025;
- progettazione didattica;
- passaggi Docente → Dipartimento → Referente → Collegio;
- esportazioni per ruolo;
- validazione umana obbligatoria;
- dati locali e nessun invio automatico.

## Evidenze dalla pubblicazione live

La Pages mostra già una struttura articolata:

- tab principali: Home, Curricolo, Progetta, Esportazioni, Guida;
- sezioni curricolo: Consulta, Revisione, Processo, Definitivo, Fonti, Sezioni generali;
- area Progetta: evidenze, programmazione annuale, UDA modello;
- esportazioni: documento finale, confronto modifiche, bozza disciplina, file `.cml`, documento di sintesi, copia di sicurezza;
- guida operativa con ruolo docente, dipartimento e referente;
- principi: dati locali, nessun server, nessun invio automatico, nessuna approvazione automatica.

## Problema rilevato

La struttura corrente è funzionale, ma la Home non comunica ancora con sufficiente forza la **mappa completa del sistema**.

Rischio per l'utente:

- percepire CurManLight come raccolta di sezioni separate;
- non comprendere subito il processo di origine, proposta, confronto, validazione e approvazione;
- non cogliere il ruolo dei file `.cml` nel passaggio tra docente, dipartimento e referente;
- non distinguere immediatamente fonti ufficiali, proposte e documento approvato.

## Decisione progettuale

La Home deve diventare un **hub leggero del processo curricolare**.

Non deve sostituire le sezioni esistenti, ma spiegare la relazione tra esse.

## Struttura implementativa proposta

### Blocco 1 — Messaggio di sistema

Titolo: `Hub del processo curricolare`

Descrizione breve: CurManLight accompagna il ciclo completo del curricolo, dalla consultazione delle fonti alla validazione umana.

### Blocco 2 — Percorso operativo

Cinque passi:

1. Consulta;
2. Scegli;
3. Progetta;
4. Esporta;
5. Verifica.

Ogni passo deve essere collegato al processo istituzionale e non solo all'azione individuale.

### Blocco 3 — Processo istituzionale

Pipeline:

```text
Docente → Dipartimento → Referente → Collegio
```

Descrizione:

- Docente: prepara proposta e file `.cml`;
- Dipartimento: importa, confronta, decide;
- Referente: controlla coerenza e valida;
- Collegio: approva il documento finale.

### Blocco 4 — Aree del sistema

Card operative:

- Curricolo;
- Processo;
- Progetta;
- Esportazioni;
- Fonti;
- Guida.

### Blocco 5 — Governance e sicurezza

Badge:

- dati locali;
- nessun invio automatico;
- validazione umana obbligatoria.

## Prototipo salvato

È stato creato un prototipo statico isolato:

```text
prototypes/CML-400_process_ecosystem_home_structure.html
```

Il prototipo non modifica il runtime e serve come riferimento visivo/logico per la futura patch su `index.html` e snapshot.

## Piano per la patch runtime successiva

Slice consigliata:

```text
CML-401 — Process ecosystem Home runtime integration
```

Perimetro:

- inserire il blocco Home process hub in `index.html`;
- replicare in `_published_snapshot/netlify-current/index.html`;
- nessuna modifica a dati curricolari;
- nessuna modifica a schema `.cml`;
- nessuna nuova dipendenza;
- nessun refactor.

Verdict atteso futuro:

```text
CML_401_PROCESS_ECOSYSTEM_HOME_RUNTIME_READY_LOCAL_NOT_PUSHED
```

## Stato CML-400

Questa slice produce una base implementativa sicura e tracciabile, evitando una sostituzione remota rischiosa del file runtime all-in-one.

## Verdict

```text
CML_400_PROCESS_ECOSYSTEM_HOME_STRUCTURE_PLAN_READY
```
