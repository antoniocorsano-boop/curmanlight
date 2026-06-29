# CML-172 - Remaining Disciplines Goals and Completion Sequence

Data: 2026-06-26

## 1. Scopo

Definire il piano controllato di completamento delle discipline restanti nella pipeline dati normalizzati -> runtime mappa -> shape test.

Questa slice e' docs-only, audit-only e planning-only. Non produce dati normalizzati, non modifica runtime, non modifica test o tool e non cambia schema `.cml`, export/import o funzioni evidenze/UDA.

## 2. Baseline tecnica

| Controllo                                 | Esito                        |
| ----------------------------------------- | ---------------------------- |
| Root Git                                  | `C:/Users/anton/CurManLight` |
| Branch                                    | `main`                       |
| Commit iniziale                           | `0da08a8`                    |
| origin/main                               | `0da08a8`                    |
| Working tree iniziale                     | Pulito, sync con origin/main |
| `git diff --check` preflight              | PASS                         |
| Collisione `docs/03_execution/CML-172.md` | Assente                      |
| Collisione report CML-172                 | Assente                      |

Ultimi commit rilevanti:

```text
0da08a8 test: align runtime mappa shape to 9 disciplines
d565c7b feat: integrate arte immagine runtime mappa dati
b237cb2 data: prepare arte immagine normalized curriculum
0674dde test: align runtime mappa shape to 8 disciplines
a83c66e feat: integrate educazione civica runtime mappa dati
967ab28 feat: add educazione civica normalized curriculum data
39c066d docs: select normalized data preparation target
903e651 docs: select next runtime mappa discipline
```

## 3. Stato consolidato 9/14

| Area               | Stato                                 |
| ------------------ | ------------------------------------- |
| Dati normalizzati  | 9/14 file `.normalized.json` presenti |
| Runtime mappa      | 9/14 discipline integrate             |
| Shape runtime test | 9/9 PASS                              |

File normalizzati presenti:

1. `tecnologia.normalized.json`
2. `italiano.normalized.json`
3. `matematica.normalized.json`
4. `scienze.normalized.json`
5. `storia.normalized.json`
6. `geografia.normalized.json`
7. `inglese.normalized.json`
8. `educazione-civica.normalized.json`
9. `arte-immagine.normalized.json`

Il test `tools/test-runtime-mappa-dati-shape.mjs` copre le stesse 9 discipline. Le restanti 5 non devono essere aggiunte al runtime o al test finche' non esiste il rispettivo dato normalizzato.

## 4. Discipline completate

1. Tecnologia
2. Matematica
3. Italiano
4. Scienze
5. Storia
6. Geografia
7. Inglese
8. Educazione Civica
9. Arte e Immagine

## 5. Discipline restanti

1. Musica
2. Educazione Fisica
3. Religione Cattolica
4. Seconda Lingua Comunitaria
5. Latino LEL

Nota di controllo: alcuni report storici CML-109/CML-110 e seguenti registrano avanzamenti di contatori UI/readiness della vecchia fase, ma CML-164/CML-171 hanno ridefinito la baseline corrente sulla presenza di file `.normalized.json`, runtime mappa e shape test. In questa baseline Musica, Educazione Fisica, Religione Cattolica, Seconda Lingua Comunitaria e Latino LEL restano non completate.

## 6. Tabella comparativa discipline restanti

| Disciplina                 | Goal finale                                                                                    | Readiness documentale | Disponibilita' dati                                                | Rischio dati | Rischio istituzionale | Complessita' normalizzazione | Complessita' runtime | Fasi necessarie | Raccomandazione                          |
| -------------------------- | ---------------------------------------------------------------------------------------------- | --------------------- | ------------------------------------------------------------------ | ------------ | --------------------- | ---------------------------- | -------------------- | --------------- | ---------------------------------------- |
| Musica                     | Modello su ascolto, produzione, linguaggio musicale, creativita' sonora e patrimonio culturale | Media                 | Bassa nella pipeline corrente; storicamente 6 voci e 3 nuclei/assi | Basso-medio  | Basso                 | Media                        | Bassa-media          | A-H             | Prima candidata                          |
| Educazione Fisica          | Modello su corpo, movimento, gioco/sport, salute, espressione e inclusione                     | Medio-bassa           | Bassa; storicamente 5 voci ma audit specifico richiesto            | Medio        | Medio                 | Medio-alta                   | Media                | A-H             | Seconda, dopo audit                      |
| Seconda Lingua Comunitaria | Modello trasversale alle lingue comunitarie, comunicativo, culturale e plurilingue             | Media                 | Bassa; pattern Inglese utile ma non sufficiente                    | Medio        | Medio                 | Media                        | Media                | A-H             | Terza, con vincolo anti-monolingua       |
| Religione Cattolica        | Modello IRC prudente, culturale, antropologico, storico-religioso e valoriale                  | Medio-bassa           | Bassa; warning storici e specificita' contenutistica               | Medio-alto   | Alto                  | Alta                         | Media                | A-H             | Quarta, dopo discipline a rischio minore |
| Latino LEL                 | Modello solo dopo chiarimento perimetro LEL e rapporto con Italiano                            | Bassa                 | Assente/bassa; solo Secondaria                                     | Medio        | Medio                 | Alta per perimetro           | Medio-bassa          | A-H             | Quinta, chiusura ciclo                   |

## 7. Sequenza consigliata di completamento

1. **Musica**: rischio istituzionale basso, readiness media gia' indicata in CML-165, candidatura forte storica in CML-109 e completamento naturale dell'area espressiva gia' avviata con Arte e Immagine.
2. **Educazione Fisica**: utile per completare l'area corpo/movimento, ma richiede audit specifico per evitare normalizzazioni premature.
3. **Seconda Lingua Comunitaria**: il pattern Inglese e' utile, ma serve una struttura non monolingua e compatibile con disciplina solo Secondaria.
4. **Religione Cattolica**: rischio istituzionale alto; va affrontata dopo aver stabilizzato la procedura sulle discipline a rischio minore.
5. **Latino LEL**: readiness bassa e perimetro particolare; deve chiudere il ciclo dopo chiarimento del rapporto con Italiano e del profilo LEL.

## 8. Piano fasi standard per ciascuna disciplina

| Fase | Nome                         | Scopo                                                               | Criterio di passaggio                                                                   |
| ---- | ---------------------------- | ------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| A    | Readiness/data audit         | Verificare fonti interne, nuclei, ordini/classi, rischi e perimetro | Report audit approvabile senza dati inventati                                           |
| B    | Normalized data preparation  | Creare il file `.normalized.json` della sola disciplina             | Validatore curriculum PASS; file UTF-8; `decisioniCurricolari` vuoto se non documentato |
| C    | Sync normalized data         | Allineare commit dati con remoto                                    | HEAD locale == origin/main dopo push richiesto in slice dedicata                        |
| D    | Runtime mappa integration    | Integrare il dato normalizzato nel runtime mappa                    | Solo dopo B/C; runtime modificato puntualmente                                          |
| E    | Sync runtime integration     | Allineare commit runtime con remoto                                 | HEAD locale == origin/main                                                              |
| F    | Runtime shape test alignment | Aggiungere la disciplina al test shape                              | Shape test PASS con copertura incrementata di 1                                         |
| G    | Sync test alignment          | Allineare commit test con remoto                                    | HEAD locale == origin/main                                                              |
| H    | Closure audit                | Certificare coerenza dati/runtime/test e rischi residui             | Report finale, nessun deploy salvo richiesta                                            |

Le slice previste per ogni disciplina sono quindi:

| Disciplina                 | Slice previste                                                                                                         |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Musica                     | CML-173 audit, CML-174 data, CML-174-SYNC, CML-175 runtime, CML-175-SYNC, CML-176 shape, CML-176-SYNC, CML-177 closure |
| Educazione Fisica          | CML-178 audit, CML-179 data, CML-179-SYNC, CML-180 runtime, CML-180-SYNC, CML-181 shape, CML-181-SYNC, CML-182 closure |
| Seconda Lingua Comunitaria | CML-183 audit, CML-184 data, CML-184-SYNC, CML-185 runtime, CML-185-SYNC, CML-186 shape, CML-186-SYNC, CML-187 closure |
| Religione Cattolica        | CML-188 audit, CML-189 data, CML-189-SYNC, CML-190 runtime, CML-190-SYNC, CML-191 shape, CML-191-SYNC, CML-192 closure |
| Latino LEL                 | CML-193 audit, CML-194 data, CML-194-SYNC, CML-195 runtime, CML-195-SYNC, CML-196 shape, CML-196-SYNC, CML-197 closure |

La numerazione e' una proposta operativa: puo' essere rinumerata se emergono collisioni o slice intermedie.

## 9. Dettaglio goal per disciplina

### Musica

- **Goal finale**: completare un modello normalizzato centrato su ascolto, produzione, linguaggio musicale, creativita' sonora e patrimonio culturale, senza introdurre decisioni non documentate.
- **Scopo curricolare**: rendere navigabile la progressione musicale nei tre ordini con evidenze osservabili e criteri coerenti.
- **Tipo di disciplina**: espressiva, performativa, culturale.
- **Nuclei/strutture attese**: ascolto; produzione/esecuzione; linguaggio musicale; creativita' sonora; patrimonio musicale, solo se confermati da fonti interne.
- **Output finale atteso**: `content/curriculum/musica.normalized.json`, runtime mappa Musica, shape test 10/10.
- **Rischio dati**: basso-medio, per possibile scarsita' di dettaglio nelle fonti correnti.
- **Rischio istituzionale**: basso.
- **Complessita' normalizzazione**: media, per traduzione di pratiche espressive in evidenze e criteri.
- **Complessita' runtime**: bassa-media, dopo generazione del dato mappa.
- **Fasi necessarie**: A-H.
- **Criteri di passaggio**: audit conferma nuclei e progressione; data preparation valida; runtime solo dopo sync dati; test solo dopo runtime.

### Educazione Fisica

- **Goal finale**: completare un modello normalizzato solo dopo audit specifico su corpo, movimento, gioco/sport, salute/benessere, espressione e inclusione, evitando normalizzazioni premature.
- **Scopo curricolare**: rappresentare la progressione motoria, relazionale e di benessere con indicatori osservabili e non medicalizzati.
- **Tipo di disciplina**: motoria, relazionale, espressiva, orientata al benessere.
- **Nuclei/strutture attese**: corpo e movimento; gioco e sport; salute e benessere; espressione corporea; inclusione e regole, solo se supportati.
- **Output finale atteso**: `content/curriculum/educazione-fisica.normalized.json`, runtime mappa Educazione Fisica, shape test 11/11.
- **Rischio dati**: medio, per readiness medio-bassa e necessita' di audit.
- **Rischio istituzionale**: medio, per temi salute, sicurezza e inclusione.
- **Complessita' normalizzazione**: medio-alta.
- **Complessita' runtime**: media.
- **Fasi necessarie**: A-H.
- **Criteri di passaggio**: audit specifico obbligatorio; nessuna normalizzazione se mancano traguardi/obiettivi verificabili; criteri valutativi osservabili e prudenti.

### Religione Cattolica

- **Goal finale**: completare un modello normalizzato istituzionalmente prudente, distinguendo contenuti culturali, antropologici, storico-religiosi e valoriali, con attenzione a neutralita' e specificita' IRC.
- **Scopo curricolare**: rendere consultabile il curricolo IRC senza trasformare contenuti sensibili in formulazioni improprie o non documentate.
- **Tipo di disciplina**: culturale, antropologica, storico-religiosa, valoriale nel perimetro IRC.
- **Nuclei/strutture attese**: dimensione antropologica; linguaggi e fonti religiose; storia/cultura cristiana; dialogo e valori, solo se documentati.
- **Output finale atteso**: `content/curriculum/religione-cattolica.normalized.json`, runtime mappa Religione Cattolica, shape test 13/13 secondo sequenza proposta.
- **Rischio dati**: medio-alto.
- **Rischio istituzionale**: alto.
- **Complessita' normalizzazione**: alta.
- **Complessita' runtime**: media.
- **Fasi necessarie**: A-H.
- **Criteri di passaggio**: audit istituzionale dedicato; fonti esplicite; nessuna decisione curricolare inventata; linguaggio neutro e specifico IRC.

### Seconda Lingua Comunitaria

- **Goal finale**: completare un modello normalizzato trasversale alle lingue comunitarie, evitando riferimenti impropri a una sola lingua e mantenendo una struttura comunicativa, culturale e plurilingue.
- **Scopo curricolare**: rappresentare una disciplina linguistica solo Secondaria con competenze comunicative, culturali e plurilingui comuni.
- **Tipo di disciplina**: linguistica, comunicativa, interculturale, solo Secondaria.
- **Nuclei/strutture attese**: comprensione orale/scritta; produzione/interazione; lessico e funzioni comunicative; cultura e plurilinguismo, se documentati.
- **Output finale atteso**: `content/curriculum/seconda-lingua-comunitaria.normalized.json`, runtime mappa Seconda Lingua Comunitaria, shape test 12/12 secondo sequenza proposta.
- **Rischio dati**: medio, per rischio di genericita' o monolingua implicita.
- **Rischio istituzionale**: medio.
- **Complessita' normalizzazione**: media.
- **Complessita' runtime**: media.
- **Fasi necessarie**: A-H.
- **Criteri di passaggio**: audit chiarisce lingua/e e perimetro; struttura compatibile con regole solo Secondaria; nessun contenuto specifico di una lingua se non documentato.

### Latino LEL

- **Goal finale**: completare un modello normalizzato solo dopo chiarimento del perimetro LEL, del rapporto con Italiano e del livello sperimentale/progettuale, evitando assimilazione impropria a disciplina ordinaria.
- **Scopo curricolare**: rappresentare il percorso Latino LEL come disciplina/progetto specifico della Secondaria senza forzare verticalita' assente.
- **Tipo di disciplina**: linguistico-classica, progettuale/sperimentale, solo Secondaria.
- **Nuclei/strutture attese**: lessico e morfologia di base; rapporto latino-italiano; cultura classica; metodo linguistico, solo se confermati.
- **Output finale atteso**: `content/curriculum/latino-lel.normalized.json`, runtime mappa Latino LEL, shape test 14/14.
- **Rischio dati**: medio, con disponibilita' bassa.
- **Rischio istituzionale**: medio.
- **Complessita' normalizzazione**: alta per perimetro, anche se il runtime puo' essere piu' contenuto.
- **Complessita' runtime**: medio-bassa dopo dato valido.
- **Fasi necessarie**: A-H.
- **Criteri di passaggio**: audit chiarisce classi, natura LEL e relazione con Italiano; nessuna estensione artificiale a Infanzia/Primaria; fonte esplicita per ogni struttura.

## 10. Prossima slice consigliata

`CML-173 - MUSICA_READINESS_DATA_AUDIT`

Scope consigliato:

- Docs/report only.
- Lettura di fonti interne su Musica.
- Nessuna creazione di `musica.normalized.json`.
- Nessuna modifica runtime.
- Obiettivo: stabilire se Musica puo' passare alla data preparation e con quali nuclei.

## 11. Rischi residui

1. **Ambiguita' storica dei contatori UI**: vecchie slice hanno promosso alcune discipline nella UI senza creare file normalizzati della pipeline corrente.
2. **Fonti incomplete**: per le 5 discipline restanti la disponibilita' dati e' inferiore rispetto alle 9 discipline gia' consolidate.
3. **Rischio istituzionale IRC**: Religione Cattolica richiede linguaggio e fonti piu' prudenti.
4. **Rischio di genericita' linguistica**: Seconda Lingua Comunitaria non deve diventare Inglese duplicato o una lingua specifica non dichiarata.
5. **Perimetro Latino LEL**: non deve essere assimilato a disciplina ordinaria su tre ordini.
6. **Decisioni curricolari**: devono restare vuote se non esiste una decisione documentata.

## 12. Regole di controllo

- Una disciplina alla volta.
- Data preparation prima del runtime.
- Sync dopo ogni commit.
- Test shape solo dopo runtime.
- Nessun deploy salvo richiesta esplicita.
- Nessuna invenzione di contenuti mancanti.
- `decisioniCurricolari` vuoto se non documentato.
- Nessuna modifica a `content/curriculum/` in slice di pianificazione.
- Nessuna modifica a `tools/` in slice di pianificazione.
- Nessuna modifica a schema `.cml`, export/import o funzioni evidenze/UDA.

## 13. Verdetto finale

`CML_172_REMAINING_DISCIPLINES_GOALS_AND_COMPLETION_SEQUENCE_READY`
