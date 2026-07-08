# CML-421 — Simulated User Test Results

## 1. Scopo

Registrare gli esiti del test utente simulato svolto sul prototipo CML-420.

Il test è stato condotto come sessione qualitativa su prototipo documentale/wireframe, non su runtime.

## 2. Profilo simulato

```text
Docente di scuola secondaria di primo grado
utente scolastico non tecnico
interessato a consultazione curricolo, progettazione didattica, esportazioni e chiarezza istituzionale
```

## 3. Esito generale

```text
PASS con riserve importanti
```

Il prototipo è comprensibile nella struttura generale a quattro ambienti, ma richiede correzioni prima di qualunque runtime.

## 4. Rilievi emersi

### CML-421-R001 — Sostituire Wiki

Il termine `Wiki del curricolo` è percepito come poco scolastico.

Decisione consigliata:

```text
Wiki del curricolo → Riferimenti e guida
```

### CML-421-R002 — Sostituire Definitivo

La voce `Definitivo` rischia di confondere la fine del lavoro tecnico con l'approvazione formale del Collegio.

Decisione consigliata:

```text
Definitivo → Sintesi finale
```

Regola:

```text
La Sintesi finale è l'esito tecnico del processo di revisione.
Non equivale ad approvazione collegiale.
```

### CML-421-R003 — Progettazione didattica da approfondire

L'area `Progettazione didattica` non può restare una semplice sezione accessoria.

Serve analizzare i bisogni reali del progettista didattico:

- programmazione annuale;
- UDA;
- competenze/evidenze;
- obiettivi;
- contenuti;
- metodologie;
- attività;
- valutazione;
- rubriche;
- inclusione;
- collegamenti interdisciplinari;
- esportazione dei documenti.

Decisione consigliata:

```text
Aprire CML-421A — Didactic Design Needs Audit
```

### CML-421-R004 — Esportazione per documenti scolastici ricorrenti

L'area `Esportazione` deve essere organizzata per documenti scolastici reali, non solo per formati.

Output necessari:

- programmazione annuale per classe;
- programma svolto per classe;
- relazione finale per classe;
- sintesi percorso;
- UDA;
- rubriche;
- report dipartimento;
- report referente;
- materiali per discussione collegiale;
- file `.cml`;
- pacchetti per classe/dipartimento.

Decisione consigliata:

```text
Aprire CML-421B — School Document Export Needs Audit
```

### CML-421-R005 — Contesto di lavoro in Impostazioni

La configurazione del contesto non deve stare dentro Esportazione.

Decisione consigliata:

```text
Contesto di lavoro → Impostazioni / Contesto di lavoro
```

Il contesto è trasversale a:

- Curricolo;
- Progettazione didattica;
- Esportazione;
- Riferimenti e guida.

### CML-421-R006 — Riferimenti e guida più compatta

La quarta area deve essere compatta.

Decisione consigliata:

```text
Riferimenti e guida
├─ Fonti e normativa
├─ IN2012 e IN2025
├─ Ruoli e processo
└─ Uso e limiti
```

## 5. Architettura aggiornata dopo test

```text
Header / Menu app
├─ Impostazioni
│  ├─ Contesto di lavoro
│  ├─ Preferenze esportazione
│  ├─ Dati locali
│  └─ Accessibilità
│
Navigazione principale
├─ Curricolo
├─ Progettazione didattica
├─ Esportazione
└─ Riferimenti e guida
```

## 6. Curricolo aggiornato

```text
Curricolo
├─ Consulta
├─ Estrai
├─ Fonti
├─ Versioni
├─ Processo aggiornamento
└─ Sintesi finale
```

## 7. Esportazione aggiornata

```text
Esportazione
├─ Per la classe
│  ├─ Programmazione annuale
│  ├─ Programma svolto
│  ├─ Relazione finale
│  └─ Sintesi percorso
├─ Per la progettazione
│  ├─ UDA
│  ├─ Evidenze
│  ├─ Rubriche
│  └─ Collegamenti curricolo
├─ Per il curricolo
│  ├─ Estratto disciplinare
│  ├─ Documento curricolo
│  ├─ Fonti e versioni
│  └─ Sintesi finale
├─ Per il processo
│  ├─ Proposta docente .cml
│  ├─ Esito dipartimentale
│  ├─ Report referente
│  └─ Materiale per discussione collegiale
└─ Archivio e sicurezza
   ├─ Copia locale
   ├─ Pacchetto classe
   ├─ Pacchetto dipartimento
   └─ Backup .cml
```

## 8. Decisione sul passaggio a runtime

Il test non autorizza ancora runtime.

Motivazione:

- terminologia IA da correggere;
- progettazione didattica da approfondire;
- esportazioni scolastiche da strutturare;
- contesto di lavoro da collocare in Impostazioni.

## 9. Slice successive consigliate

```text
CML-421A — Didactic Design Needs Audit
CML-421B — School Document Export Needs Audit
CML-421C — IA Terminology Corrections
```

## 10. Verdict

```text
CML_421_SIMULATED_USER_TEST_PASS_WITH_MAJOR_RESERVATIONS_REMOTE_BRANCH
```
