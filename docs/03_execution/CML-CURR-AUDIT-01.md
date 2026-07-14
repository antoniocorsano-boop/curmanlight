# CML-CURR-AUDIT-01 — Audit documentale completo del curriculum

## Obiettivo

Verificare in modo sistematico l’intero patrimonio curricolare di CurManLight, senza modificare i contenuti disciplinari, per accertarne completezza, coerenza, tracciabilità e utilizzabilità nei diversi ordini di scuola.

## Perimetro

L’audit comprende tutti i dati curricolari presenti nel repository e tutte le discipline canoniche, con controllo per:

- ordine e livello scolastico;
- disciplina;
- competenze;
- traguardi per lo sviluppo delle competenze;
- obiettivi di apprendimento;
- conoscenze;
- abilità, quando presenti;
- nuclei tematici;
- unità o aggregazioni curricolari;
- fonti normative e documentali;
- stato del contenuto e validazione;
- relazioni fra livelli, discipline e strutture dati;
- corrispondenza fra dato sorgente, contratto normalizzato e consultazione React/legacy.

## Livelli di controllo

### A. Inventario strutturale

Per ogni disciplina e ordine:

- presenza del file o blocco dati;
- identificativo stabile;
- denominazione canonica;
- ordine di scuola dichiarato;
- struttura conforme al contratto normalizzato;
- conteggio di competenze, traguardi, obiettivi, conoscenze e nuclei;
- campi obbligatori mancanti, vuoti o duplicati.

### B. Coerenza verticale

- progressione fra Infanzia, Primaria e Secondaria di primo grado;
- continuità dei nuclei;
- gradualità degli obiettivi;
- assenza di salti, inversioni o ripetizioni non motivate;
- corrispondenza tra traguardi terminali e obiettivi intermedi.

### C. Coerenza orizzontale

- uniformità terminologica tra discipline;
- struttura comparabile a parità di ordine;
- uso coerente di competenza, traguardo, obiettivo, conoscenza e abilità;
- individuazione di elementi impropriamente collocati o classificati.

### D. Qualità documentale

- formulazioni incomplete, ambigue o eccessivamente generiche;
- duplicati testuali o quasi duplicati;
- errori ortografici, mojibake e punteggiatura anomala;
- riferimenti temporali o normativi non coerenti;
- fonti assenti, non identificabili o non collegate al contenuto;
- stato di validazione non dichiarato.

### E. Integrità applicativa

- corrispondenza tra dati normalizzati e runtime;
- copertura delle 14 discipline canoniche;
- copertura di tutti gli ordini dichiarati;
- elementi presenti nei dati ma non consultabili;
- elementi mostrati in interfaccia ma non riconducibili alla fonte;
- divergenze fra React, legacy e snapshot pubblicato.

## Classificazione dei rilievi

- **P0 — Integrità compromessa:** dati mancanti o non leggibili che impediscono la consultazione corretta.
- **P1 — Completezza o tracciabilità:** blocchi curricolari mancanti, fonti assenti, livelli non coperti o contratti incoerenti.
- **P2 — Coerenza didattica/documentale:** progressioni deboli, duplicazioni, classificazioni improprie o terminologia incoerente.
- **P3 — Qualità editoriale:** refusi, punteggiatura, uniformità delle etichette e micro-incoerenze.

## Deliverable

1. inventario completo per ordine e disciplina;
2. matrice di copertura di competenze, traguardi, obiettivi, conoscenze, abilità e nuclei;
3. matrice delle fonti e dello stato di validazione;
4. elenco completo dei rilievi con severità e posizione;
5. analisi della coerenza verticale;
6. analisi della coerenza orizzontale;
7. confronto dato sorgente → contratto normalizzato → runtime;
8. report sintetico direzionale;
9. piano di correzione separato, senza applicare automaticamente modifiche ai contenuti.

## Vincoli

- audit esclusivamente documentale;
- nessuna modifica ai dati curricolari durante la fase di analisi;
- nessuna normalizzazione silenziosa;
- nessuna correzione automatica dei testi;
- ogni rilievo deve essere collegato a file, disciplina, ordine e campo;
- ogni valutazione didattica deve essere distinguibile da un controllo puramente tecnico;
- validazione umana obbligatoria prima di qualunque futura modifica sostanziale.

## Sequenza di lavoro

1. mappatura delle sorgenti e dei contratti;
2. inventario quantitativo completo;
3. controllo strutturale automatizzabile;
4. controllo documentale per disciplina;
5. controllo verticale per ordine;
6. controllo trasversale e terminologico;
7. verifica delle fonti;
8. consolidamento dei rilievi;
9. definizione delle priorità di correzione.

## Stato operativo

Branch dedicata:

`codex/cml-curr-audit-01-full-curriculum-document-audit`

Completato:

- inventario automatico di 14 discipline e 142 unità;
- verifica di campi, identificativi, tipi, livelli, fonti e validazione;
- artifact GitHub Actions riproducibile anche in presenza di P0;
- rilevazione esplicita di unità prive di `ordine`;
- report direzionale iniziale;
- confronto con il contratto temporale CML-477;
- registro analitico dei 22 gap candidati di livello.

Esito dell’analisi di applicabilità:

- CML-477 determina il quadro temporale IN 2012/IN 2025;
- CML-477 non costituisce una matrice disciplina × ordine × classe/fascia;
- le 22 assenze non sono ancora classificabili tutte come lacune curricolari confermate;
- le assenze sono registrate come gap candidati da validare;
- le dieci assenze dell’Infanzia richiedono cautela perché i contenuti sono organizzati per campi di esperienza;
- le dodici assenze della Primaria devono essere distinte tra progressione annuale, aggregazione pluriclasse e gap obbligatorio.

Output aggiornati:

- `tools/audit-cml-curriculum-complete.mjs`;
- `.github/workflows/cml-curr-audit-01.yml`;
- `report/CML-CURR-AUDIT-01-complete-documentary-findings.md`;
- `report/CML-CURR-AUDIT-01-applicability-review.md`;
- artifact `report/CML-CURR-AUDIT-01/` generato dal workflow.

## Passaggio successivo

Costruire una matrice documentale di applicabilità con esito per ogni combinazione rilevante:

- `APPLICABILE_OBBLIGATORIO`;
- `APPLICABILE_AGGREGATO`;
- `NON_APPLICABILE`;
- `DA_VERIFICARE`.

La matrice dovrà indicare fonte e validazione umana. Solo i gap classificati come obbligatori potranno generare una successiva proposta di integrazione curricolare.

## Verdetto corrente

`CML_CURR_AUDIT_01_STRUCTURAL_PASS_APPLICABILITY_CLASSIFICATION_IN_PROGRESS`