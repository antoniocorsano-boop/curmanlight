# CML-204 - Educazione Fisica Detailed Gap Model (post-14/14)

Data: 2026-06-27

## 1. Scopo

Questo report aggiorna il gap model dettagliato di Educazione Fisica dopo il raggiungimento di 14/14 normalized data, 14/14 runtime integration e chiusura del ciclo `.cml` workflow hardening (CML-209).

La slice è docs-only / content-quality audit. Non produce file `.normalized.json`, non modifica runtime, non modifica `content/curriculum/`, non modifica `tools/`, non modifica SchoolKB, non esegue deploy e non esegue push.

## 2. Baseline tecnica

| Parametro             | Valore                                                            |
| --------------------- | ----------------------------------------------------------------- |
| Root Git              | `C:\Users\anton\CurManLight`                                      |
| Branch                | `main`                                                            |
| Commit iniziale       | `e68d22d`                                                         |
| origin/main iniziale  | `e68d22d`                                                         |
| Working tree iniziale | pulito                                                            |
| Stato remoto iniziale | `main...origin/main`                                              |
| Dati normalizzati     | 14/14                                                             |
| Runtime mappa         | 14/14                                                             |
| Shape test            | 14/14 PASS                                                        |
| Slice precedente      | CML-183 (limited draft data prep) + CML-184 (runtime integration) |

## 3. Collegamento con CML-178/179/183/184

- CML-178: primo detailed gap model — disciplina non pronta, 5 nuclei proposti.
- CML-179: gap-fill documentale manuale — 5 nuclei, progressione Secondaria I/II/III, lessico controllato.
- CML-183: limited draft data prep — creato `educazione-fisica.normalized.json` con 4 nuclei (5 proposto assorbito).
- CML-184: runtime mappa integration — EF integrata in runtime con S=7, N=4, P=7, D=0.

Questo report audit la qualità contenutistica del draft esistente integrato, non la sua integrità tecnica.

## 4. Metodo di analisi

Sono stati consultati in sola lettura:

- `content/curriculum/educazione-fisica.normalized.json`
- `tools/test-runtime-mappa-dati-shape.mjs`
- `content/curriculum/musica.normalized.json` (discipline espressiva vicina)
- `content/curriculum/arte-immagine.normalized.json` (discipline espressiva vicina)
- `report/CML-178_educazione_fisica_detailed_gap_model.md`
- `report/CML-179_educazione_fisica_gap_fill_documentale_manuale.md`
- `report/CML-183_educazione_fisica_limited_draft_data_prep.md`
- `report/CML-184_educazione_fisica_runtime_mappa_integration.md`
- `_published_snapshot/netlify-current/index.html` (runtime map EF)

Il metodo confronta la struttura attuale contro:

- il modello a 5 nuclei proposto in CML-178/179;
- il livello di dettaglio di discipline già mature (Musica, Arte e Immagine);
- i requisiti di progressione verticale e assessment readiness del contratto CML.

## 5. Stato dati disponibile

### Struttura attuale Educazione Fisica

| Nucleo                   | Ordini/Classi coperte                                     |
| ------------------------ | --------------------------------------------------------- |
| Corpo e percezione       | Infanzia fascia 5, Primaria classe 1, Secondaria classe 1 |
| Abilità motorie          | Primaria classe 3                                         |
| Gioco e sport            | Primaria classe 5, Secondaria classe 2                    |
| Espressione e inclusione | Secondaria classe 3                                       |

**7 unità totali:**

- `ef_inf_5_001` — Infanzia fascia 5
- `ef_pri_1_001` — Primaria classe 1
- `ef_pri_3_001` — Primaria classe 3
- `ef_pri_5_001` — Primaria classe 5
- `ef_sec_1_001` — Secondaria classe 1
- `ef_sec_2_001` — Secondaria classe 2
- `ef_sec_3_001` — Secondaria classe 3

### Confronto con modello a 5 nuclei

Il modello CML-178/179 proponeva:

1. Corpo e percezione
2. Abilità motorie
3. Gioco e sport
4. Salute e benessere
5. Espressione e inclusione

La struttura attuale mantiene 4 di questi 5 nuclei. **Salute e benessere** non è presente come nodo disciplinare autonomo. I contenuti sono distribuiti in:

- `Espressione e inclusione` (Secondaria 3): area benessere personale e vita scolastica;
- `Gioco e sport` (Secondaria 2): area benessere scolastico, igiene, riscaldamento.

## 6. Gap model per severità

### P0 — Bloccanti

Nessun gap bloccante rilevato. La disciplina è già:

- normalizzata (7 unità, schema valido);
- integrata nel runtime (S=7, N=4, P=7, D=0);
- conforme al validator CML (14/14 PASS, 0 errori);
- conforme allo shape test (14/14 PASS).

### P1 — Importanti

#### P1-1: Nucleo "Salute e benessere" assente come nodo autonomo

Il modello a 5 nuclei prevede "Salute e benessere" come area distinta. Nella struttura attuale il tema è assorbito in altri nuclei senza identità disciplinare separata.

**Impatto:**

- la mappa runtime presenta solo 4 nodi disciplinari invece di 5;
- il tema salute/sicurezza non ha una sezione dedicata nella UI;
- la progressione non valorizza esplicitamente la dimensione educativa della salute come nucleo fondante.

**Confronto con discipline simili:**

- Musica e Arte e Immagine hanno nuclei tutti presenti e distinti nella mappa runtime.

**Azione necessaria:** decidere se mantenere l'assorbimento trasverso (scelta già presa in CML-183) o introdurre una unità dedicata.

#### P1-2: Progressione Primaria discontinua

La copertura Primaria salta le classi 2 e 4.

| Classe     | Stato    |
| ---------- | -------- |
| Primaria 1 | presente |
| Primaria 2 | MANCANTE |
| Primaria 3 | presente |
| Primaria 4 | MANCANTE |
| Primaria 5 | presente |

**Impatto:**

- la progressione verticale presenta salti non giustificati;
- il confronto con Musica e Arte e Immagine (che hanno la stessa copertura saltaria per esigenze di semplificazione) mostra che il salto è tollerabile ma va documentato come scelta deliberata;
- la school-order continuity è debole: non è chiaro se i contenuti di Primaria 1 evolvano linearmente in Primaria 3, o se manchi un ponte didattico.

#### P1-3: Nucleo "Abilità motorie" monoclasso

L'unico elemento di "Abilità motorie" è su Primaria classe 3. Non ci sono altre unità con questo nucleo in Primaria 1, 5 o in Secondaria.

**Impatto:**

- il nodo disciplinare "Abilità motorie" appare nella mappa runtime ma raccoglie una sola unità;
- la progressione su coordinazione, equilibrio e controllo motorio non è articolata su più livelli;
- la Secondaria riprende questi contenuti dentro "Corpo e percezione" (classe 1) senza una progressione esplicita da "Abilità motorie".

#### P1-4: Progressione Secondaria senza ponte Infanzia-Primaria-Secondaria

Ogni ordine scolastico è trattato come blocco separato. Mancano:

- riferimenti espliciti a quanto appreso in Infanzia/Primaria nella Secondaria;
- obiettivi che richiamino esplicitamente le basi motorie precedenti.

**Impatto:**

- la school-order continuity è debole;
- il docente non ha traccia di cosa l'alunno ha fatto prima nella stessa disciplina.

### P2 — Importanti per qualità contenutistica

#### P2-1: Wording generico in alcuni obiettivi/traguardi

Esempi:

- `ef_pri_3_001`: "adattare il movimento a spazi, ritmi e consegne variabili" — formulazione corretta ma poco contestualizzata.
- `ef_sec_1_001`: "controlla schemi motori di base in situazioni guidate" — "controlla" è un verbo adatto, ma manca specificità su quale controllo (velocità, precisione, fluidità).
- `ef_sec_3_001`: "usare movimento ed espressione corporea per comunicare, collaborare e includere" — obiettivo ambizioso ma non scomposto in passi osservabili.

#### P2-2: Assessment readiness debole

Le `evidenze` sono presenti in tutte le unità ma:

- alcune sono qualitative senza soglia osservabile chiara (`"Il bambino partecipa a un gioco motorio di gruppo per almeno 5 minuti"` — ok, ma è l'unica evidenza su partecipazione);
- manca una struttura a livelli/punteggi per disaggregare la classe;

**Confronto con discipline mature:**

- Musica e Arte e Immagine hanno evidenze più specifiche e calibrate per età.

#### P2-3: Assenza di conoscenze in alcune unità

`ef_sec_1_001`, `ef_sec_2_001`, `ef_sec_3_001` hanno `conoscenze` vuote o quasi assenti rispetto a Musica/Arte.

- `ef_sec_1_001`: `conoscenze` presenti ma legate a sicurezza e regole, non a schemi motori.
- `ef_sec_2_001`: `conoscenze` presenti ma focalizzate su fair play, non su tecniche motorie.
- `ef_sec_3_001`: `conoscenze` più ricche, ma con sovrapposizione tra "progettazione di attività motorie" e "sport scolastici".

**Impatto:** il bilanciamento conoscenze/abilità non è uniforme; la Secondaria langue sul piano teorico.

#### P2-4: Fonti ripetitive e poco differenziate

Tutte le unità citano:

- `Indicazioni Nazionali 2012, D.M. 254/2012, sezione Educazione Fisica — ...`

Manca:

- riferimento a eventuali documenti d'istituto (PTOF, dipartimento motoria);
- distinzione tra fonti ministeriali e scelte dipartimentali;
- riferimento a CML-179 come fonte diretta del contenuto.

**Confronto:** Musica e Arte includono riferimenti a D.M. 221/2025 e scelte locali.

#### P2-5: `decisioniCurricolari` assente nel runtime

Il campo `decisioniCurricolari` è vuoto (`[]`) per tutte le discipline EF. Questo non è un gap esclusivo di EF, ma è un limite per l'assessment readiness: non ci sono criteri dipartimentali formalizzati che guidano la valutazione oltre i criteri di unità.

#### P2-6: `readiness` e `stato` non aggiornabili a "validato"

Il file EF è ancora:

- `stato: "bozza_generabile"`
- `readiness: "in_revisione"`
- `humanValidationRequired: true`

Questo è corretto perché la validazione umana è ancora pendente. Tuttavia, dopo 14/14 e integrazione runtime, il file può apparire "frozen" a un livello di maturità inferiore rispetto alle altre discipline.

**Impatto:** può creare confusione su quale sia lo stato reale della disciplina nel progetto.

### P3 — Editoriali / perfezionamenti

#### P3-1: Terminologia "attività" con accento acuto

Alcune unità usano `attività` con accento acuto invece di `attività` (es. `ef_sec_3_001`). Non è un errore di validazione, ma è una inconsistenza tipografica rispetto alle altre discipline.

#### P3-2: `noteDipartimento` verbose e ripetitive

Le note sono corrette ma lunghe. Esempio:

- `ef_inf_5_001`: "Draft da validare: copertura Infanzia minimale, da integrare con indicazioni di plesso."
- `ef_pri_1_001`: "Draft da validare: copertura Primaria generica, da integrare con indicazioni di classe."

Queste note sono utili ma potrebbero essere standardizzate in una nota file-level per ridurre la verbosità.

#### P3-3: `ambito` troppo descrittivo in alcuni casi

- `ef_sec_3_001`: "Autonomia, responsabilità, espressione corporea, benessere e inclusione" — l'ambito è quasi un riassunto dell'intera unità. In Musica/Arte gli ambiti sono più stringati.

#### P3-4: `metaDiscipline` generico

`metaDiscipline: "Motoria"` è corretto, ma è unico. Non ci sono meta-discipline ibride (es. "Motoria-Espressiva") per le unità che combinano movimento e espressione.

#### P3-5: Mancanza di `nucleoFondante`

Tutte le unità EF riportano `nucleo` ma non `nucleoFondante`. Il validatore lo segnala come retrocompatibile, ma se lo schema evolvesse, EF sarebbe esposta.

### P1/P2 aggiuntivi: assessment/use-case readiness

#### P1-5: Nessuna UDA strutturata

Il contratto CML prevede UDA (Unità di Apprendimento) come struttura di progettazione didattica. Attualmente le `unitàApprendimento` sono unità valoriali, non UDA progettuali.

**Impatto:** il campo `decisioniCurricolari` e `evidenze` non sono sufficienti per progettare una UDA senza lavoro aggiuntivo del docente.

#### P2-7: Collegamento con SchoolKB assente

Come per altre discipline, EF non ha riferimenti a materiali SchoolKB. Questo è coerente con lo stato attuale (SchoolKB disabilitato), ma va registrato come gap di readiness.

## 7. Classificazione gap per categoria

| Categoria                          | Severità | Conteggio | Note                                                                                  |
| ---------------------------------- | -------- | --------- | ------------------------------------------------------------------------------------- |
| missing content                    | P1       | 2         | Nucleo Salute e benessere assente; Primaria 2 e 4 mancanti                            |
| weak progression                   | P1/P2    | 3         | Salto Primaria; monoclasso Abilità motorie; ponte Infanzia-Primaria-Secondaria debole |
| weak wording                       | P2       | 2         | Obiettivi/traguardi talvolta generici; assessment thresholds poco definite            |
| weak school-order continuity       | P1       | 1         | Nessun richiamo esplicito tra ordini                                                  |
| weak assessment/use-case readiness | P1/P2    | 2         | Nessuna UDA strutturata; evidence thresholds qualitative                              |
| purely editorial                   | P3       | 4         | Accenti, note verbose, ambiti lunghi, nucleoFondante assente                          |

## 8. Necessità di patch contenutistica futura

**Sì, una patch contenutistica è necessaria**, ma non urgente a livello tecnico.

Motivazione:

- la struttura attuale è valida e funzionante a runtime;
- i gap P1 non bloccano l'integrazione ma limitano l'uso didattico;
- i gap P2/P3 migliorano la qualità percepita e la manutenibilità.

Tuttavia:

- nessun gap P0 richiede intervento immediato;
- la disciplina può restare nello stato corrente fino a una prossima revisione umana.

## 9. Confronto ponderato con discipline mature

| Aspetto                | EF (attuale)          | Musica (riferimento)        | Arte e Immagine (riferimento) |
| ---------------------- | --------------------- | --------------------------- | ----------------------------- |
| Unità per ordine       | 1-2 per fascia/classe | 1 per fascia/classe (salto) | 1 per fascia/classe (salto)   |
| Nuclei distinti        | 4                     | 3                           | 3                             |
| Obiettivi osservabili  | Buoni                 | Buoni                       | Ottimi                        |
| Evidenze specifiche    | Discrete              | Buone                       | Ottime                        |
| Progressione verticale | Debole                | Discreta                    | Buona                         |
| Conoscenze teoriche    | Limitanti in Sec.     | Bilanciate                  | Bilanciate                    |
| Fonti differenziate    | No                    | Sì (D.M. 221/2025)          | Sì (D.M. 221/2025)            |

## 10. Raccomandazione prossima slice

### Opzione A: mantenere stato attuale (raccomandata)

- **Motivo:** nessun gap P0; la disciplina è operativa a runtime;
- **Azione:** nessuna modifica a JSON, runtime o tool;
- **Output:** solo questo report come traccia di audit;
- **Rischio:** contenuti rimangono a livello "bozza" senza upgrade.

### Opzione B: docs-only refinement plan (consigliata se si vuole agire)

- **Motivo:** i gap P1/P2 sono risolvibili senza toccare il runtime;
- **Azione:** preparare un piano di patch JSON controllata (solo EF), dopo validazione umana;
- **Output:** documento di piano in `docs/03_execution/` e report;
- **Rischio:** basso, perché il JSON è isolato e il validatore garantisce integrità.

### Opzione C: UDA/evidenze alignment later

- **Motivo:** l'integrazione UDA è un lavoro didattico, non tecnico;
- **Azione:** riservare a una revisione docente/dipartimento successiva;
- **Output:** non previsto in questa fase.

### Verdetti

| Opzione                         | Valutazione                                    |
| ------------------------------- | ---------------------------------------------- |
| A. Keep as-is                   | RACCOMANDATA ORA                               |
| B. Docs-only refinement plan    | RACCOMANDATA DOPO validazione umana            |
| C. UDA/evidenze alignment later | Necessaria, ma non come prossima slice tecnica |

## 11. Confronto con CML-178

CML-178 concludeva "Non pronta" con motivazioni tecniche (mancanza di file, di progressione, di obiettivi). Oggi:

- il file esiste;
- la progressione esiste (anche se discontinua);
- gli obiettivi esistono (anche se talvolta generici).

Il gap model aggiornato sposta il focus da **prontezza tecnica** a **qualità contenutistica**.

## 12. Readiness assessment

| Dimensione             | Stato    | Note                                                          |
| ---------------------- | -------- | ------------------------------------------------------------- |
| Validazione schema     | PASS     | 14/14, 0 errori                                               |
| Integrazione runtime   | PASS     | S=7, N=4, P=7, D=0                                            |
| Completezza classi     | PARZIALE | mancano Primaria 2, 4                                         |
| Completezza nuclei     | PARZIALE | manca Salute e benessere come nodo autonomo                   |
| Progressione verticale | DEBOLE   | salti non motivati, ponte Infanzia-Primaria-Secondaria debole |
| Assessment readiness   | DISCRETA | evidenze presenti ma soglie poco definite                     |
| UDA readiness          | ASSENTE  | non strutturata                                               |
| Lessico istituzionale  | BUONO    | conforme a CML-179, ma con margini P3                         |
| Fonti documentali      | PARZIALE | solo IN 2012 + D.M. 254/2012                                  |

## 13. Raccomandazione finale

**Prossima slice consigliata: mantenere stato attuale + tracciare gap.**

Motivazione:

- Operare un patch JSON su EF mentre le altre discipline sono in stato "bozza_generabile" simile potrebbe creare asimmetrie;
- la revisione umana docente/dipartimento è il trigger naturale per un upgrade;
- il rischio di modificare contenuti già integrati senza validazione è superiore al beneficio.

Quando la validazione umana sarà completata, la prossima slice dovrebbe essere:

- `docs-only refinement plan` (piano di patch JSON EF controllata);
- seguito da `controlled JSON content polish` (applicazione del piano).

Output atteso di una futura slice di polish:

- inserimento nucleo "Salute e benessere" come unità autonoma o conferma dell'assorbimento trasverso;
- copertura Primaria 2 e 4 (o motivazione esplicita dell'esclusione);
- strengthening della progressione verticale con riferimenti espliciti tra ordini;
- calibratura delle evidenze con soglie osservabili;
- aggiornamento fonti e note;
- aggiornamento `stato` e `readiness` a "validato" dopo revisione umana.

## 14. Invarianti rispettate

- docs-only / content-quality audit;
- nessun file `.normalized.json` modificato;
- nessuna modifica runtime;
- nessuna modifica a `_published_snapshot/netlify-current/index.html`;
- root `index.html` invariato;
- nessuna modifica a `content/curriculum/`;
- nessuna modifica a `tools/`;
- nessuna modifica `.claude/`;
- nessuna modifica `CLAUDE.md`;
- nessuna modifica SchoolKB;
- schema `.cml` invariato;
- export/import invariati;
- funzioni evidenze/UDA invariate;
- nessuna credenziale/client ID/token;
- nessuna dipendenza;
- nessun deploy;
- nessun push.

## 15. Verdetto finale

`CML_204_EDUCAZIONE_FISICA_DETAILED_GAP_MODEL_POST_14_14_READY`
