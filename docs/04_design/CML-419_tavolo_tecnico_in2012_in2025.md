# CML-419 — Tavolo tecnico IN2012/IN2025

## 1. Premessa

Questa nota consolida il tavolo tecnico preliminare necessario prima di qualunque mock runtime o redesign dell'interfaccia CurManLight.

Il tema non è solo visivo. Il nodo centrale è il rapporto fra:

- curricolo vigente fondato sulle Indicazioni Nazionali 2012;
- materiali/proposte IN2025;
- processo scolastico di aggiornamento;
- progettazione didattica collegata al curricolo;
- esportazioni e documenti di lavoro;
- responsabilità istituzionali e validazione umana.

## 2. Principio guida

CurManLight deve essere trattato come **ambiente curricolare d'istituto**, non come semplice visualizzatore del curricolo.

La Home deve dare accesso immediato a quattro ambienti:

```text
Curricolo | Progettazione didattica | Esportazione | Wiki del curricolo
```

Il processo di aggiornamento non deve dominare l'interfaccia: deve essere collocato dentro **Curricolo** e diventare visibile quando attivo.

## 3. Questioni IN2012 / IN2025

| Questione | Domanda tecnica | Decisione raccomandata |
|---|---|---|
| Stato IN2012 | È curricolo vigente o riferimento storico? | Resta riferimento vigente finché la scuola non adotta formalmente una nuova versione |
| Stato IN2025 | È testo definitivo, bozza, proposta o materiale di lavoro? | Deve essere trattato come proposta/materiale di lavoro fino a decisione formale |
| Confronto | Si confrontano testi interi o unità curricolari? | Il confronto deve avvenire per disciplina/campo, ordine, classe/fascia, nuclei, traguardi, obiettivi |
| Processo | Quando compare il processo di aggiornamento? | Solo quando la scuola dichiara una fase di revisione attiva |
| Versioni | Come si registrano gli stati? | Vista Versioni con stato, data, fonte, atto, note e storico |
| Progettazioni pregresse | Cosa accade se cambia il curricolo? | Le progettazioni collegate a versioni superate devono essere segnalate come da riallineare |
| Delibera | Chi approva? | Organi collegiali e procedure esterne, non l'app |

## 4. Perimetro del sistema

### 4.1 Dentro il sistema

CurManLight può e deve sostenere:

- consultazione del curricolo;
- confronto tra curricolo vigente e materiali/proposte di aggiornamento;
- estrazione di parti del curricolo;
- progettazione didattica collegata al curricolo;
- esportazione di documenti, estratti, proposte, report, copie di sicurezza;
- raccolta di proposte docente tramite file `.cml`;
- sintesi dipartimentale;
- controllo e sintesi del referente;
- registrazione dello stato di avanzamento;
- wiki operativa e curricolare;
- validazione umana;
- funzionamento locale, senza invio automatico.

### 4.2 Fuori dal sistema

Devono restare fuori:

- approvazione automatica del curricolo;
- sostituzione del Collegio Docenti o del Consiglio di Istituto;
- gestione formale degli atti amministrativi;
- protocollo ufficiale;
- archiviazione sostitutiva;
- gestione di dati personali degli alunni;
- invio automatico a Drive, email o server esterni;
- decisioni normative o interpretative non verificate.

## 5. Ruoli e responsabilità

| Ruolo | Può fare | Non può fare dentro l'app |
|---|---|---|
| Docente | Consultare, progettare, proporre, esportare proposta | Approvare il curricolo |
| Dipartimento | Valutare proposte, riformulare, produrre esito | Adottare formalmente il curricolo |
| Referente | Raccogliere esiti, controllare coerenza, preparare sintesi, registrare avanzamento | Approvare autonomamente |
| Dirigente / governance | Consultare stato, coordinare processo, usare report | Sostituire atti formali con azione nell'app |
| Collegio / organi competenti | Deliberare in sede esterna | Essere sostituiti dal sistema |

## 6. Stati curricolari

```text
vigente → in revisione → proposta → approvata → adottata → superata
```

### 6.1 Definizioni operative

| Stato | Significato |
|---|---|
| vigente | Versione curricolare in uso nella scuola |
| in revisione | Versione o area curricolare oggetto di lavoro interno |
| proposta | Testo o struttura proposta ma non ancora deliberata |
| approvata | Esito formalmente approvato dagli organi competenti |
| adottata | Versione entrata nell'uso ufficiale dell'istituto |
| superata | Versione non più in uso, ma storicamente consultabile |

## 7. Architettura funzionale raccomandata

```text
Ambiente curricolare d'istituto
├─ Home
├─ Curricolo
├─ Progettazione didattica
├─ Esportazione
└─ Wiki del curricolo
```

### 7.1 Curricolo

Funzioni:

- consultare;
- estrarre;
- leggere fonti;
- vedere versione definitiva;
- accedere al processo quando attivo;
- gestire versioni e storico.

### 7.2 Progettazione didattica

Funzioni:

- evidenze;
- programmazione annuale;
- UDA modello;
- collegamenti al curricolo;
- riallineamento a nuova versione.

### 7.3 Esportazione

Funzioni:

- esportazione per scopo;
- esportazione per ruolo;
- esportazione per area;
- file `.cml`;
- report;
- copie di sicurezza.

### 7.4 Wiki del curricolo

Funzioni:

- guida operativa;
- IN2012 e IN2025;
- curricolo verticale;
- ruoli;
- processo;
- progettazione;
- esportazioni;
- lessico;
- domande frequenti;
- limiti dello strumento.

## 8. Architettura tecnica e stack

### 8.1 Stato attuale da preservare

- App statica;
- GitHub Pages;
- runtime single-file;
- dati locali;
- file `.cml`;
- localStorage;
- nessun server obbligatorio;
- nessun invio automatico;
- root e snapshot runtime da mantenere allineati.

### 8.2 Evoluzione A — Conservativa

```text
HTML unico + JavaScript locale + localStorage + file .cml
```

Adatta alla fase attuale. Riduce i rischi, ma rende più difficile la crescita futura.

### 8.3 Evoluzione B — Statica modulare

```text
App statica modulare
├─ dati curricolari separati
├─ componenti UI separati
├─ moduli esportazione
└─ nessun backend obbligatorio
```

Più manutenibile, ma richiede refactor progressivo e test rigorosi.

### 8.4 Evoluzione C — Workspace opzionale

```text
Uso pubblico + uso personale + uso scolastico Workspace
```

Scenario istituzionalmente più avanzato, ma da valutare solo dopo aver stabilizzato ruoli, privacy, dati, autorizzazioni e responsabilità.

## 9. Decisione architetturale raccomandata

Non cambiare stack in CML-419.

Prima occorre stabilizzare:

1. perimetro IN2012/IN2025;
2. stati curricolari;
3. ruoli;
4. viste principali;
5. mock integrale;
6. audit agentico.

Solo dopo si può valutare una modularizzazione progressiva.

## 10. Rischi principali

| Rischio | Gravità | Mitigazione |
|---|---:|---|
| Confondere IN2025 con testo già adottato | Alta | Etichette stato sempre visibili |
| Dare all'app valore deliberativo | Alta | Microcopy: registra avanzamento, non approva |
| Rendere il processo troppo invasivo | Media | Processo dentro Curricolo, visibile solo se attivo |
| Spezzare il collegamento curricolo-progettazione | Alta | Versione curricolare obbligatoria per progettazione |
| Moltiplicare pulsanti export | Media | Centro unico di esportazione per scopo |
| Appesantire Home | Media | Quattro accessi principali e pannello stato compatto |
| Snaturare stack prudente | Alta | Nessun cambio architetturale prima del mock verificato |

## 11. Decisione del tavolo tecnico

Il tavolo tecnico raccomanda di procedere con mock integrale **prima** di ogni runtime.

La priorità non è disegnare una schermata bella, ma definire un sistema coerente che distingua:

- documento vigente;
- proposta di aggiornamento;
- processo scolastico;
- progettazione didattica;
- esportazioni;
- supporto/wiki;
- decisioni umane e atti esterni.

## 12. Output atteso

Il presente documento è la base per:

```text
CML-419_mock_integrale_viste.md
CML-419_agentic_auditors_review.md
```

## Verdict

```text
CML_419_TECHNICAL_TABLE_IN2012_IN2025_DOSSIER_READY
```
