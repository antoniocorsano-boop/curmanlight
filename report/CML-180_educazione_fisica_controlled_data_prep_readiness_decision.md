# CML-180 - Educazione Fisica Controlled Data Prep Readiness Decision

Data: 2026-06-27

## 1. Scopo

Questo report registra la decisione controllata su Educazione Fisica dopo CML-178 e CML-179: stabilire se autorizzare una data preparation controllata oppure se richiedere prima una validazione umana/dipartimentale.

La slice e documentale. Non crea `educazione-fisica.normalized.json`, non modifica runtime e non modifica dati curricolari.

## 2. Baseline tecnica

| Parametro             | Valore                                       |
| --------------------- | -------------------------------------------- |
| Branch                | `main`                                       |
| Commit iniziale       | `1923fed`                                    |
| origin/main iniziale  | `1923fed`                                    |
| Stato iniziale        | `main...origin/main`                         |
| Working tree iniziale | pulito                                       |
| Dati normalizzati     | 10/14                                        |
| Runtime mappa         | 10/14                                        |
| Shape test            | 10/10 PASS                                   |
| Skill usate           | `cml-readiness-audit`, `cml-docs-only-slice` |

## 3. Collegamento con CML-177, CML-178 e CML-179

- CML-177: readiness bassa, rischio dati medio, rischio istituzionale medio; raccomandazione di non procedere a data preparation immediata.
- CML-178: detailed gap model; i nuclei e la progressione non erano sufficienti per generare dati normalizzati.
- CML-179: gap-fill documentale/manuale; ha prodotto una bozza verificabile, ma dichiaratamente provvisoria e da validare.

## 4. Metodo di decisione

La decisione e stata presa confrontando CML-179 con i requisiti minimi richiesti da una futura normalizzazione CML:

- nuclei disciplinari stabili;
- progressione classe I / II / III distinguibile;
- obiettivi osservabili;
- traguardi compatibili con schema CML;
- lessico istituzionale controllato;
- possibilita di popolare campi senza inventare dati;
- rischio residuo su salute, sicurezza, inclusione e valutazione.

## 5. Stato dopo CML-178

CML-178 ha fotografato una disciplina non pronta:

- nuclei solo ipotetici;
- progressione non verificabile;
- obiettivi e traguardi non strutturati;
- evidenze e criteri non disponibili;
- rischio di linguaggio sanitario, performativo o generico;
- assenza di fonte DOCX o validazione dipartimentale.

## 6. Stato dopo CML-179

CML-179 ha migliorato lo stato documentale:

- cinque nuclei proposti come bozza manuale;
- progressione I / II / III per Secondaria proposta;
- obiettivi provvisori per classi I / II / III;
- traguardi provvisori;
- lessico consigliato, da usare con cautela e da evitare;
- punti espliciti da validare con docente/dipartimento.

CML-179 non ha pero trasformato la bozza in fonte validata.

## 7. Gap colmati

| Gap CML-178                       | Esito dopo CML-179                                             |
| --------------------------------- | -------------------------------------------------------------- |
| Nuclei non formalizzati           | cinque nuclei proposti come base manuale                       |
| Progressione I / II / III assente | progressione Secondaria I / II / III proposta                  |
| Obiettivi mancanti                | obiettivi provvisori formulati                                 |
| Traguardi mancanti                | traguardi provvisori formulati                                 |
| Lessico non controllato           | lessico controllato definito                                   |
| Rischi istituzionali generici     | avvertenze su salute, sicurezza, inclusione e sport scolastico |

## 8. Gap ancora aperti

- La proposta resta manuale e non validata.
- La progressione riguarda soprattutto la Secondaria; Infanzia e Primaria non sono ancora articolate in modo sufficiente.
- Conoscenze, abilita, evidenze e criteri valutativi non sono ancora pronti per JSON.
- Le fonti ufficiali o dipartimentali non sono ancora tracciate.
- Non esistono decisioni curricolari documentate.
- Salute, sicurezza e inclusione restano aree da confermare con lessico istituzionale.

## 9. Valutazione nuclei disciplinari

I nuclei proposti in CML-179 sono utili e plausibili, ma non ancora sufficientemente stabili per una bozza JSON controllata senza validazione umana.

Decisione: nuclei **quasi strutturabili**, ma da validare prima della normalizzazione.

## 10. Valutazione progressione I / II / III

La progressione I / II / III e distinguibile come bozza Secondaria:

- I: regole, schemi motori, sicurezza, partecipazione guidata;
- II: consolidamento motorio, collaborazione, ruoli;
- III: autonomia, responsabilita, fair play, riflessione su benessere e inclusione.

Resta pero incompleta per una normalizzazione complessiva della disciplina, perche non copre ancora in modo documentale Infanzia e Primaria.

## 11. Valutazione obiettivi e traguardi

Gli obiettivi CML-179 sono osservabili come formulazione didattica provvisoria. I traguardi sono coerenti come bozza, ma non sono ancora fonte curricolare validata.

Decisione: obiettivi e traguardi **utili per checklist**, non ancora trasferibili automaticamente in JSON.

## 12. Compatibilita con schema CML

La compatibilita e migliorata ma resta condizionata.

Lo schema CML richiederebbe almeno:

- `unitaApprendimento` con nucleo, ambito, competenza, traguardo, obiettivi, conoscenze, abilita, evidenze, criteri, fonte, note;
- `struttureSostanziali`;
- `nodiDisciplinari`;
- `progressioneVerticale`;
- `decisioniCurricolari`.

CML-179 aiuta sui primi livelli concettuali, ma non basta ancora per riempire tutti questi campi senza trasformare una bozza in dato curricolare.

## 13. Campi popolabili con sicurezza

In una futura data-prep, dopo validazione, potrebbero essere popolati con relativa sicurezza:

- `disciplina`: Educazione Fisica;
- `stato`: bozza generabile o equivalente prudenziale;
- `readiness`: in revisione;
- `humanValidationRequired`: true;
- `metaDiscipline`: area motoria/espressiva, se confermata;
- `decisioniCurricolari`: array vuoto se non emergono decisioni documentate;
- note di cautela sul perimetro educativo, non sanitario.

## 14. Campi da validare o trattare con cautela

Devono restare da validare o prudenti:

- nuclei definitivi;
- unita di apprendimento;
- progressione completa Infanzia/Primaria/Secondaria;
- conoscenze;
- abilita;
- evidenze;
- criteri valutativi;
- fonti;
- traguardi e obiettivi definitivi;
- contenuti su salute, sicurezza, inclusione, adattamenti e fair play.

## 15. Rischio dati residuo

**Medio.**

Il rischio e sceso rispetto allo stato pre-CML-179 perche ora esiste una base manuale. Resta medio perche il contenuto non e validato e non copre ancora tutti i campi richiesti da un JSON normalizzato.

## 16. Rischio istituzionale residuo

**Medio.**

Restano sensibili salute, sicurezza, inclusione, adattamenti e valutazione del comportamento motorio. La normalizzazione deve evitare metriche fisiche, formulazioni sanitarie, giudizi performativi e riferimenti non documentati.

## 17. Decisione principale

`HUMAN_VALIDATION_REQUIRED_BEFORE_DATA_PREP`

Risposte alle domande decisionali obbligatorie:

1. Il gap-fill CML-179 ha colmato i gap minimi individuati da CML-178? **Parzialmente.** Ha creato una base manuale, ma non validata.
2. I nuclei disciplinari sono sufficientemente stabili per una bozza JSON controllata? **Non ancora.** Sono plausibili, ma da confermare.
3. La progressione I / II / III e abbastanza distinguibile? **Si per Secondaria come bozza, no per una normalizzazione completa.**
4. Gli obiettivi sono abbastanza osservabili e compatibili con schema CML? **Sono osservabili come bozza, non ancora come dato.**
5. I contenuti richiedono ancora validazione umana prima della normalizzazione? **Si.**
6. Quali campi possono essere popolati con sicurezza? **Solo metadati prudenziali e decisioni vuote se non documentate.**
7. Quali campi devono restare prudenti, vuoti o marcati come da validare? **Nuclei, UDA, progressione, obiettivi, traguardi, evidenze, criteri, fonti, salute/sicurezza/inclusione.**
8. Quale rischio resta dopo CML-179? **Rischio dati medio e rischio istituzionale medio.**
9. Quale decisione e piu sicura per il progetto? **Validazione umana prima della data-prep.**

## 18. Condizioni operative per la prossima slice

La prossima slice deve:

- produrre una checklist docente/dipartimentale;
- confermare o correggere i cinque nuclei;
- confermare la progressione I / II / III;
- decidere come trattare Infanzia e Primaria;
- validare obiettivi e traguardi;
- validare lessico salute/sicurezza/inclusione;
- indicare quali evidenze sono osservabili senza misure improprie;
- confermare che una successiva data-prep possa restare limitata e prudente.

## 19. Opzioni scartate

| Opzione                              | Motivo scarto                                               |
| ------------------------------------ | ----------------------------------------------------------- |
| `DATA_PREP_AUTHORIZED_WITH_CAUTIONS` | troppo anticipata: mancano validazione e copertura completa |
| `DATA_PREP_BLOCKED`                  | troppo severa: CML-179 ha prodotto una base utile           |
| `LIMITED_DRAFT_DATA_PREP_ALLOWED`    | possibile in futuro, ma solo dopo validazione umana         |

## 20. Raccomandazione finale

Raccomandazione principale: `CML-181 - EDUCAZIONE_FISICA_HUMAN_VALIDATION_CHECKLIST`.

Solo dopo CML-181 si potra decidere se autorizzare una data-prep controllata o limitata.

## 21. Invarianti rispettate

- docs-only / readiness decision;
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

## 22. Verdetto finale

`CML_180_EDUCAZIONE_FISICA_CONTROLLED_DATA_PREP_READINESS_DECISION_READY`
