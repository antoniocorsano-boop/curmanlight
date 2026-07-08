# CML-421A — Didactic Design Needs Audit Report

## 1. Scopo

Recuperare dal runtime `index.html` quanto già realizzato su curricolo, variazione proposta, revisione 2012/2025, progettazione didattica ed export, per evitare di riprogettare ignorando il lavoro esistente.

## 2. Fonti lette

```text
index.html
```

Aree osservate:

- dati curricolari 2012/2025;
- Tecnologia e altre discipline con proposte IN2025;
- profilo utente e ordine di scuola;
- salvataggio locale;
- revisione proposta;
- UDA draft;
- programmazione annuale;
- esportazioni Word/Markdown/.cml;
- import/esito dipartimento;
- report referente.

## 3. Elementi già presenti e da non perdere

### 3.1 Profilo e contesto

Il runtime contiene già:

```text
nome/cognome
disciplina
ordine
istituto
comune
codice meccanografico
```

Decisione:

```text
Riconvertire in Impostazioni / Contesto di lavoro.
```

### 3.2 Variazione proposta 2012/2025

Il runtime contiene già:

```text
status: ok / modifica / nuovo
testo 2012
proposto IN2025
decisione approvata/rifiutata
testoFinale personalizzato
marker IN2025
```

Decisione:

```text
Conservare la logica di confronto, ma riformulare lessico istituzionale: proposta, sintesi finale, validazione umana.
```

### 3.3 Tecnologia

Il runtime contiene proposte esplicite per Tecnologia:

- informatica come ambito specifico;
- hardware/software/reti;
- AI citata esplicitamente;
- CAD e disegno tecnico;
- coding/Scratch/Python;
- sicurezza informatica;
- impatto sociale e ambientale delle tecnologie;
- ceramica arianese/processi produttivi locali.

Decisione:

```text
Questi elementi vanno recuperati nella progettazione didattica e non solo nella revisione curricolare.
```

### 3.4 UDA draft

Il runtime genera una bozza UDA da:

```text
disciplina
unità
evidenze adottate/adattate/escluse
fonte curricolare
```

Con cautele già corrette:

```text
bozza locale
non validata dal dipartimento
non inserire dati sensibili
non sostituisce progettazione professionale
```

Decisione:

```text
Riutilizzare questa logica come nucleo P1 del modulo progettazione.
```

### 3.5 Processo e file .cml

Il runtime contiene:

```text
teacher proposal
department outcome
referent report
humanValidationRequired
```

Decisione:

```text
Conservare il flusso documentale, distinguendo materiale di lavoro, esito tecnico, approvazione esterna.
```

## 4. Gap funzionali per il progettista didattico

Mancano o sono da rendere espliciti:

```text
configurazione classi assegnate
anno scolastico
plesso
periodo/unità temporale
programmazione annuale per classe
programma svolto per classe
relazione finale per classe
rubriche
valutazione
inclusione/personalizzazione
compiti autentici/prodotti
collegamenti interdisciplinari
stato del documento didattico
```

## 5. Struttura raccomandata

```text
Progettazione didattica
├─ Parti dal curricolo
├─ Programmazione annuale
├─ Unità di apprendimento
├─ Evidenze e competenze
├─ Obiettivi e contenuti
├─ Attività e metodologie
├─ Valutazione e rubriche
├─ Inclusione e personalizzazione
├─ Collegamenti interdisciplinari
└─ Esporta progettazione
```

## 6. Collegamento con Esportazione

Progettazione didattica ed Esportazione devono restare distinte ma collegate.

```text
Progettazione = costruisce il contenuto professionale.
Esportazione = prepara il documento scolastico richiesto.
```

## 7. Dipendenze da Contesto di lavoro

Il modulo richiede:

```text
Impostazioni / Contesto di lavoro
```

con almeno:

```text
anno scolastico
istituto
ordine
plesso
ruolo
disciplina/ambito
classi assegnate
versione curricolare di riferimento
```

## 8. Priorità di recupero runtime

```text
P1 — Riutilizzare UDA draft esistente
P1 — Riutilizzare evidenze curricolari
P1 — Rendere esplicito il collegamento al contesto
P2 — Programmazione annuale per classe
P2 — Export progettazione
P3 — Rubriche e inclusione avanzata
```

## 9. Decisione finale

La progettazione didattica deve diventare modulo completo a rilascio progressivo.

Non va implementata da zero: il runtime contiene già basi utili che vanno recuperate e ordinate.

## 10. Runtime status

```text
Runtime non modificato
Main non modificato
Deploy non eseguito
```

## Verdict

```text
CML_421A_DIDACTIC_DESIGN_NEEDS_AUDIT_COMPLETED_FROM_RUNTIME_INDEX_REMOTE_BRANCH
```
