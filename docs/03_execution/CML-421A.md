# CML-421A — Didactic Design Needs Audit

## Mandatory Slice Header

- Macroprogramma: PM-09 Validazione con utenti / PM-05 Esperienza di lavoro / PM-06 Accompagnamento
- Dipende da: CML-421, CML-421C
- Tipo slice: docs/design-audit-only remoto
- Branch: `remote-lab/cml-419-in2012-in2025-technical-table`
- Runtime: non modificato
- Main: non modificato

## Origine

Questa slice nasce dal rilievo:

```text
CML-421-R003 — Progettazione didattica da approfondire
```

Durante il test simulato è emerso che l'area `Progettazione didattica` non può essere trattata come semplice sezione accessoria.

## Obiettivo

Definire i bisogni reali del docente/progettista didattico prima di trasformare l'area in interfaccia runtime.

Questa revisione parte anche dalla lettura del file runtime `index.html`, per recuperare ciò che l'app ha già implementato su curricolo, variazione proposta, revisione 2012/2025, UDA, programmazione ed esportazioni.

## Elementi già presenti nel runtime

La lettura di `index.html` mostra che CML contiene già una base significativa:

| Area runtime | Elementi recuperati |
|---|---|
| Contesto/profilo | `userProfile`, disciplina, ordine, istituto, codice meccanografico, salvataggio locale |
| Curricolo 2012/2025 | `curricoloVersion`, marker IN2025, confronto testo attuale/proposto |
| Revisione proposta | stati `ok`, `modifica`, `nuovo`, decisioni approvata/rifiutata, personalizzazione testo |
| Vincolo ordine | sola consultazione se l'utente non opera sull'ordine selezionato |
| Progettazione didattica | area `didattica`, `didattica_programmazione`, `didattica_uda` |
| UDA | bozza UDA generata da disciplina, unità ed evidenze locali |
| Evidenze | evidenze adottate/adattate/escluse come base per UDA |
| Privacy/professionalità | UDA come bozza locale, nessun dato sensibile, non sostituisce progettazione professionale |
| Esportazioni | Word, Markdown, `.cml`, backup locale, report referente |
| Processo | proposta docente, esito dipartimento, report gruppo curricolo, validazione umana richiesta |

## Osservazioni runtime principali

### 1. Progettazione didattica già esiste come seme funzionale

Il runtime non è solo curricolo/revisione. Esiste già una triade didattica:

```text
Progetta
├─ Evidenze curricolari
├─ Programmazione annuale
└─ UDA modello
```

Questa struttura va recuperata e non sostituita senza motivo.

### 2. UDA già vincolata a evidenze e unità

La bozza UDA viene costruita dal curricolo e dalle marcature evidenze locali.

Regola già presente e da conservare:

```text
La bozza non sostituisce la progettazione didattica professionale.
```

### 3. Il contesto di lavoro è già embrionale

Il runtime contiene:

```text
nome/cognome
disciplina
ordine
istituto
comune
codice meccanografico
```

CML-421C ha deciso correttamente che questo deve diventare funzione globale in:

```text
Impostazioni / Contesto di lavoro
```

### 4. Revisione curricolare e progettazione sono collegate, ma non ancora abbastanza

Il runtime collega la progettazione a disciplina/unità/evidenze, ma manca ancora una struttura matura per:

- classe specifica;
- annualità;
- periodo;
- livello di dettaglio;
- metodologie;
- attività;
- valutazione;
- rubriche;
- inclusione;
- prodotto finale;
- relazione con programmazione annuale e documenti finali.

## Bisogni del progettista didattico

Il docente/progettista ha bisogno di lavorare almeno su cinque livelli:

```text
1. Contesto
2. Curricolo di riferimento
3. Progettazione annuale
4. UDA / percorso didattico
5. Valutazione, documentazione ed export
```

## Struttura funzionale raccomandata

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

## Campi minimi: programmazione annuale

```text
Anno scolastico
Docente
Disciplina/ambito
Ordine
Classe
Plesso
Versione curricolare di riferimento
Nuclei/ambiti
Traguardi collegati
Obiettivi collegati
Unità/periodi
Metodologie prevalenti
Strumenti e ambienti
Verifiche previste
Criteri di valutazione
Inclusione/personalizzazione
Note di raccordo verticale
Stato documento: bozza / verificato / consegnato
```

## Campi minimi: UDA

```text
Titolo
Classe
Disciplina/ambito
Periodo/durata
Situazione di partenza
Competenze/evidenze
Traguardi collegati
Obiettivi collegati
Contenuti
Attività
Metodologie
Strumenti
Prodotto/compito autentico
Verifica
Rubrica/criteri
Adattamenti inclusivi
Collegamenti interdisciplinari
Fonte curricolare
Stato: bozza locale / verificata / esportata
```

## Campi minimi: valutazione/rubriche

```text
Evidenza osservabile
Livelli
Descrittori
Criteri
Strumenti di osservazione
Collegamento a obiettivi/traguardi
Note per inclusione
```

## Decisioni progettuali

### D-001 — Modulo pieno, non semplice collegamento

Progettazione didattica deve diventare un modulo funzionale completo, ma a rilascio progressivo.

### D-002 — Programmazione annuale e UDA distinte

Programmazione annuale e UDA devono restare sezioni distinte ma collegate.

### D-003 — Evidenze come ponte curricolo-progettazione

Le evidenze sono il ponte naturale tra curricolo e progettazione.

### D-004 — Il docente resta autore professionale

CML può predisporre tracce, bozze e collegamenti, ma non deve presentare la progettazione come automaticamente corretta o definitiva.

### D-005 — Contesto globale obbligatorio

Per generare programmazione annuale, programma svolto o relazione finale, CML deve usare `Impostazioni / Contesto di lavoro`.

## Priorità runtime futura

Se in futuro si dovesse portare qualcosa in runtime, l'ordine raccomandato è:

```text
P1 — Impostazioni / Contesto di lavoro
P1 — Progettazione: Parti dal curricolo + Evidenze
P1 — UDA modello, recuperando la bozza già presente
P2 — Programmazione annuale per classe
P2 — Esporta progettazione
P3 — Rubriche avanzate
P3 — Inclusione/personalizzazione avanzata
```

## Cosa non fare subito

```text
Non generare progettazioni complete come definitive.
Non fondere Programmazione annuale e UDA in una sola vista.
Non mettere il Contesto di lavoro dentro Esportazione.
Non cancellare il lavoro runtime già fatto su UDA/evidenze.
Non implementare rubriche avanzate senza nuovo test utente.
```

## Output prodotti

- `docs/03_execution/CML-421A.md`
- `report/CML-421A_didactic_design_needs_audit.md`

## Non autorizzato

CML-421A non autorizza:

- runtime;
- generazione automatica completa di progettazioni;
- sostituzione del giudizio professionale docente;
- cambio stack;
- merge su main.

## Verdict

```text
CML_421A_DIDACTIC_DESIGN_NEEDS_AUDIT_COMPLETED_FROM_RUNTIME_INDEX_REMOTE_BRANCH
```
