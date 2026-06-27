# CML-178 - Educazione Fisica Detailed Gap Model

Data: 2026-06-27

## 1. Scopo

Questo report definisce il gap model dettagliato per Educazione Fisica dopo CML-177. L'obiettivo e stabilire se la disciplina possa passare a data preparation oppure se manchino ancora fonti e validazioni essenziali.

La slice e docs-only / readiness-audit. Non produce file `.normalized.json`, non modifica runtime, non modifica `content/curriculum/`, non modifica `tools/`, non modifica SchoolKB, non esegue deploy e non esegue push.

## 2. Baseline tecnica

| Parametro | Valore |
|---|---|
| Root Git | `C:\Users\anton\CurManLight` |
| Branch | `main` |
| Commit iniziale | `129a816` |
| origin/main iniziale | `129a816` |
| Working tree iniziale | pulito |
| Stato remoto iniziale | `main...origin/main` |
| Dati normalizzati | 10/14 |
| Runtime mappa | 10/14 |
| Shape test | 10/10 PASS |
| Skill usata | `cml-readiness-audit` |

## 3. Collegamento con CML-177

CML-177 ha concluso che Educazione Fisica non era pronta per data preparation. La motivazione principale era la distanza tra una traccia disciplinare generica e un modello dati effettivamente popolabile.

Elementi confermati da CML-177:

- readiness documentale bassa;
- rischio dati medio;
- rischio istituzionale medio;
- assenza di `educazione-fisica.normalized.json`;
- nuclei citati ma non formalizzati;
- progressione verticale non ricostruibile;
- necessita di audit aggiuntivo.

## 4. Metodo di analisi

Sono stati consultati in sola lettura:

- `.claude/skills/cml-readiness-audit/SKILL.md`;
- `docs/03_execution/CML-177.md`;
- `report/CML-177_educazione_fisica_readiness_data_audit.md`;
- file normalizzati gia presenti in `content/curriculum/`, in particolare Musica e Arte e Immagine come discipline espressive vicine per struttura;
- `tools/test-runtime-mappa-dati-shape.mjs`, per verificare i campi necessari alla mappa runtime.

Il metodo separa:

- dati disponibili;
- inferenze ragionevoli;
- dati mancanti;
- validazioni umane necessarie.

## 5. Stato dati disponibile

### Dati disponibili

- Educazione Fisica e nella sequenza residua dopo Musica.
- La copertura dei tre ordini e citata da audit precedenti.
- CML-177 registra nuclei o aree tematiche ricorrenti: corpo/movimento, gioco/sport, salute/benessere, espressione/inclusione.
- CML-177 segnala "5 voci" e "4 motori" da audit precedenti, ma senza dettaglio operativo.

### Inferenze ragionevoli

- La disciplina puo essere modellata come area motoria, relazionale, espressiva e orientata al benessere.
- I nuclei possono essere ricondotti, con prudenza, a Corpo e percezione, Abilita motorie, Gioco e sport, Salute e benessere, Espressione e inclusione.
- Le evidenze dovrebbero essere osservabili e non medicalizzate.

### Dati mancanti

- Fonte originale o estrazione DOCX con contenuti disciplinari verificabili.
- Traguardi per ordine/classe.
- Obiettivi osservabili per classe.
- Conoscenze, abilita, evidenze e criteri di valutazione.
- Progressione verticale I / II / III per Secondaria e progressione completa Primaria.
- Decisioni curricolari dipartimentali.
- Limiti lessicali su salute, sicurezza, inclusione e attivita sportiva.

## 6. Gap per nuclei disciplinari

| Nucleo possibile | Stato | Gap |
|---|---|---|
| Corpo e percezione | inferenza prudenziale | manca fonte con obiettivi, evidenze e progressione |
| Abilita motorie | inferenza prudenziale | manca distinzione tra coordinazione, equilibrio, schemi motori e prestazioni |
| Gioco e sport | parzialmente supportato come area | mancano sport/attivita, regole, fair play e criteri osservabili |
| Salute e benessere | area sensibile | manca perimetro non sanitario e non prescrittivo |
| Espressione e inclusione | inferenza prudenziale | manca validazione su inclusione, adattamenti e linguaggio |

Nessuno di questi nuclei e oggi sufficientemente formalizzato per diventare automaticamente `nodiDisciplinari` o `struttureSostanziali`.

## 7. Gap per progressione I / II / III

La progressione per Secondaria I / II / III non e disponibile in forma verificabile.

| Classe/Fascia | Stato | Rischio |
|---|---|---|
| Infanzia | citata in modo generico | rischio di descrizioni generiche su gioco motorio |
| Primaria I | non dettagliata | rischio di duplicare obiettivi di Infanzia |
| Primaria II | non dettagliata | rischio di inventare progressione intermedia |
| Primaria III | non dettagliata | rischio di introdurre abilita non documentate |
| Primaria IV | non dettagliata | rischio di salto verticale non giustificato |
| Primaria V | non dettagliata | rischio di anticipare contenuti sportivi non validati |
| Secondaria I | non dettagliata | rischio di genericita su sport e regole |
| Secondaria II | non dettagliata | rischio di progressione fittizia |
| Secondaria III | non dettagliata | rischio di contenuti salute/sicurezza non validati |

Il gap e critico per il contratto CML: `progressioneVerticale` richiede descrizioni per ordine/fascia/classe e fonte.

## 8. Gap su obiettivi e traguardi

Il repository non fornisce, per Educazione Fisica, un set affidabile di:

- traguardi per ordine;
- obiettivi osservabili;
- conoscenze;
- abilita;
- evidenze;
- criteri di valutazione.

La distinzione tra conoscenze, abilita, comportamenti e atteggiamenti e particolarmente delicata: in Educazione Fisica la valutazione rischia di slittare verso prestazione fisica, stato di salute o condotta generale se non viene definita con attenzione didattica.

## 9. Gap su lessico e leggibilita

Il lessico deve restare scolastico, osservabile e non clinico.

Rischi principali:

- formulazioni troppo tecniche su corpo, postura, allenamento o salute;
- formulazioni troppo generiche come "migliora il benessere" senza evidenza osservabile;
- sovrapposizione tra inclusione e bisogni educativi specifici senza validazione;
- ambiguita tra sport scolastico, attivita agonistica e attivita extrascolastica.

## 10. Compatibilita con schema CML

La compatibilita e solo formale. Lo schema CML puo ospitare Educazione Fisica, ma i campi sostanziali non sono oggi popolabili con sufficiente sicurezza.

Campi richiesti dal pattern normalizzato:

- `unitaApprendimento`;
- `struttureSostanziali`;
- `nodiDisciplinari`;
- `progressioneVerticale`;
- `decisioniCurricolari`;
- `source`;
- `humanValidationRequired`;
- campi per singola unita: nucleo, ambito, competenza, traguardo, obiettivi, conoscenze, abilita, evidenze, criteri, fonte, note.

## 11. Campi popolabili con sicurezza

Sono popolabili solo come metadati prudenziali, non come data preparation:

- disciplina: `Educazione Fisica`;
- meta-disciplina probabile: area motoria/espressiva, da confermare;
- stato: non pronta / audit required;
- `humanValidationRequired`: true, se e quando verra creato un file dati;
- `decisioniCurricolari`: presumibilmente `[]`, per assenza di decisioni documentate;
- indicazione che `propostaIN2025` non deve essere popolata senza fonte specifica.

## 12. Campi da non generare automaticamente

Non devono essere generati automaticamente:

- unita di apprendimento;
- traguardi;
- obiettivi;
- conoscenze;
- abilita;
- evidenze;
- criteri di valutazione;
- progressione verticale;
- strutture sostanziali;
- nodi disciplinari;
- contenuti su salute, sicurezza, prevenzione, inclusione e adattamenti.

Questi campi richiedono fonte documentale o validazione dipartimentale.

## 13. Validazioni umane necessarie

Prima della data preparation servono:

1. Conferma dei nuclei disciplinari ufficiali.
2. Conferma della progressione per classi/fasce.
3. Verifica docente/dipartimentale degli obiettivi osservabili.
4. Validazione dei traguardi.
5. Validazione del lessico su salute e benessere.
6. Validazione del lessico su inclusione e adattamenti.
7. Conferma che le evidenze non valutino condizioni fisiche o sanitarie.
8. Eventuale estrazione della fonte DOCX originale.

## 14. Rischio dati

**Medio.**

Motivazione: esistono tracce interne utili per orientare il lavoro, ma non abbastanza dettagliate per generare dati normalizzati. Il rischio non e alto solo perche la disciplina e gia inquadrata nella sequenza residua e i nuclei generali sono noti; resta pero insufficiente per produrre contenuti classe per classe.

## 15. Rischio istituzionale

**Medio.**

Motivazione: salute, sicurezza, inclusione, fair play e attivita sportiva richiedono formulazioni istituzionali precise. Una normalizzazione prematura potrebbe produrre frasi troppo sanitarie, troppo performative o non coerenti con il perimetro didattico.

## 16. Readiness verdict

**Non pronta.**

Educazione Fisica non ha dati sufficienti per classi I / II / III e non dispone di nuclei formalizzati con obiettivi, traguardi ed evidenze. La disciplina non deve passare direttamente a data preparation.

## 17. Opzioni prossima slice

| Opzione | Valutazione |
|---|---|
| Data preparation controllata | non raccomandata ora |
| Audit fonti aggiuntivo | utile se si puo accedere a fonte DOCX o documenti ufficiali |
| Gap-fill documentale/manuale | raccomandata |
| Validazione dipartimentale | necessaria, ma dopo una traccia minima compilata |
| Altro | non necessario |

## 18. Raccomandazione finale

La prossima slice consigliata e **gap-fill documentale/manuale**.

Output atteso della prossima slice:

- matrice nuclei x classi/fasce;
- traguardi e obiettivi osservabili;
- evidenze non medicalizzate;
- criteri di valutazione scolastici;
- note su salute, sicurezza, inclusione e fair play;
- decisione esplicita se procedere poi a `educazione-fisica.normalized.json`.

## 19. Invarianti rispettate

- docs-only / readiness-audit;
- nessun file `.normalized.json`;
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

## 20. Verdetto finale

`CML_178_EDUCAZIONE_FISICA_DETAILED_GAP_MODEL_READY`
