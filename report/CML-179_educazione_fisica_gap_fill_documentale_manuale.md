# CML-179 - Educazione Fisica Gap-Fill Documentale Manuale

Data: 2026-06-27

## 1. Scopo

Questo report produce una bozza documentale/manuale per Educazione Fisica dopo CML-178. Non e un file dati, non e un curricolo definitivo, non e una normalizzazione e non e pronta per runtime.

Lo scopo e trasformare i gap individuati in una base ordinata da sottoporre a revisione docente/dipartimentale prima di qualsiasi data preparation.

## 2. Baseline tecnica

| Parametro            | Valore                                               |
| -------------------- | ---------------------------------------------------- |
| Branch               | `main`                                               |
| Commit iniziale      | `d457261`                                            |
| origin/main iniziale | `129a816`                                            |
| Stato iniziale       | `main...origin/main [ahead 1]`                       |
| Slice precedente     | CML-178                                              |
| Verdict precedente   | `CML_178_EDUCAZIONE_FISICA_DETAILED_GAP_MODEL_READY` |
| Dati normalizzati    | 10/14                                                |
| Runtime mappa        | 10/14                                                |
| Shape test           | 10/10                                                |

## 3. Collegamento con CML-178

CML-178 ha stabilito che Educazione Fisica e non pronta per data preparation perche mancano fonti strutturate, progressione verticale, obiettivi osservabili, traguardi, evidenze e lessico istituzionale controllato.

CML-179 non supera automaticamente quel blocco. Produce solo una base manuale da validare.

## 4. Fonti interne consultate

- `docs/03_execution/CML-178.md`
- `report/CML-178_educazione_fisica_detailed_gap_model.md`
- `report/CML-177_educazione_fisica_readiness_data_audit.md`
- `report/CML-172_remaining_disciplines_goals_and_completion_sequence.md`
- `report/CML-113_next_discipline_normalization_selection_audit.md`
- `report/CML-109_next_discipline_normalization_selection_audit.md`
- `docs/03_execution/CML-107.md`

CML-157I non e stato trovato come file separato. Il suo contenuto resta quindi utilizzabile solo tramite il richiamo di CML-177, non come fonte primaria.

## 5. Metodo

Il metodo usato e manuale e prudenziale:

1. Riprendere i gap CML-178.
2. Convertire i nuclei solo in bozza documentale.
3. Articolare una progressione per classi I / II / III come ipotesi di lavoro.
4. Formulare obiettivi e traguardi provvisori con lessico scolastico, osservabile e non sanitario.
5. Separare cio che puo essere validato da cio che non deve essere generato automaticamente.
6. Escludere qualsiasi trasformazione in JSON normalizzato.

## 6. Nuclei curricolari proposti

I nuclei seguenti sono una base manuale da validare, non `nodiDisciplinari` gia approvati.

| Nucleo                                                | Descrizione provvisoria                                                                                                             | Validazione richiesta                              |
| ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| Corpo, percezione e consapevolezza motoria            | Conoscere il proprio corpo in movimento, percepire postura, equilibrio, orientamento e controllo motorio in situazioni scolastiche. | Confermare perimetro e termini usati.              |
| Abilita motorie e coordinazione                       | Sviluppare schemi motori, coordinazione, equilibrio, ritmo, adattamento a spazi e consegne.                                         | Definire livelli per classe.                       |
| Gioco, sport, regole e fair play                      | Partecipare a giochi e attivita sportive scolastiche rispettando regole, ruoli, compagni e avversari.                               | Chiarire elenco attivita e grado di specificita.   |
| Salute, benessere, sicurezza e prevenzione scolastica | Riconoscere comportamenti sicuri, cura di se, rispetto degli spazi e abitudini attive in perimetro educativo.                       | Evitare linguaggio sanitario o prescrittivo.       |
| Espressione corporea, relazione e inclusione          | Usare corpo e movimento per comunicare, collaborare, includere e adattare la partecipazione.                                        | Validare il lessico inclusivo con il dipartimento. |

## 7. Articolazione classe I / II / III

Questa progressione riguarda la Secondaria di I grado. E una base manuale, da validare prima di diventare progressione CML.

| Classe | Focus provvisorio                                                                                                | Scopo didattico                                                                        |
| ------ | ---------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| I      | Conoscenza di se, regole, schemi motori, coordinazione di base, sicurezza negli spazi.                           | Entrare nel lavoro motorio scolastico con attenzione a corpo, regole e partecipazione. |
| II     | Consolidamento motorio, collaborazione, ruoli, giochi di squadra, fair play e gestione delle consegne.           | Passare dalla partecipazione guidata a una collaborazione piu consapevole.             |
| III    | Autonomia, responsabilita, progettazione semplice di attivita, riflessione su benessere, sicurezza e inclusione. | Usare competenze motorie e relazionali in modo consapevole e responsabile.             |

## 8. Obiettivi di apprendimento provvisori

Gli obiettivi seguenti sono bozza documentale. Non devono essere trasferiti in `obiettivi` di un file normalizzato senza validazione.

### Classe I

- Riconoscere e rispettare regole, spazi e consegne nelle attivita motorie scolastiche.
- Eseguire schemi motori di base con attenzione a controllo, equilibrio e coordinazione.
- Partecipare a giochi motori collaborando con il gruppo.
- Riconoscere comportamenti sicuri durante attivita e spostamenti.

### Classe II

- Consolidare coordinazione, equilibrio, ritmo e adattamento motorio in contesti variati.
- Applicare regole e ruoli in giochi e attivita sportive scolastiche.
- Collaborare con compagni assumendo responsabilita semplici nel gruppo.
- Riflettere su comportamenti corretti per sicurezza, benessere e rispetto reciproco.

### Classe III

- Organizzare in modo autonomo sequenze motorie o attivita semplici rispettando obiettivo, spazio e regole.
- Partecipare a giochi e sport scolastici con fair play e responsabilita.
- Riconoscere il rapporto tra attivita motoria, benessere personale e vita scolastica, senza formulazioni sanitarie.
- Usare movimento ed espressione corporea per comunicare, collaborare e includere.

## 9. Traguardi di competenza provvisori

I traguardi sono formulati come base manuale da validare.

| Classe | Traguardo provvisorio                                                                                                                                  |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| I      | L'alunno partecipa ad attivita motorie scolastiche rispettando regole, spazi e compagni; controlla schemi motori di base in situazioni guidate.        |
| II     | L'alunno utilizza abilita motorie e collaborative in giochi e attivita strutturate, riconoscendo ruoli, regole e comportamenti sicuri.                 |
| III    | L'alunno agisce con autonomia e responsabilita in attivita motorie, sportive ed espressive, valorizzando fair play, benessere scolastico e inclusione. |

## 10. Lessico disciplinare controllato

### Lessico consigliato

- partecipazione attiva;
- coordinazione;
- equilibrio;
- orientamento nello spazio;
- regole condivise;
- fair play;
- sicurezza scolastica;
- comportamenti responsabili;
- collaborazione;
- espressione corporea;
- inclusione;
- benessere scolastico.

### Lessico da usare con cautela

- salute;
- prevenzione;
- postura;
- allenamento;
- prestazione;
- valutazione fisica;
- adattamento;
- abilita individuale.

### Lessico da evitare senza validazione

- diagnosi;
- terapia;
- idoneita fisica;
- prescrizione sanitaria;
- performance agonistica;
- normalita corporea;
- deficit;
- classificazioni cliniche.

## 11. Avvertenze istituzionali

- Il perimetro e scolastico e didattico, non sanitario.
- Le evidenze devono osservare comportamenti, partecipazione, regole e collaborazione, non condizioni fisiche personali.
- I riferimenti a salute e benessere devono restare educativi, non prescrittivi.
- Inclusione e adattamenti richiedono validazione docente/dipartimentale.
- Le attivita sportive devono essere intese come contesto scolastico, non agonistico o extrascolastico.

## 12. Compatibilita documentale con evidenze e UDA

Questa sezione non crea UDA. Indica solo una compatibilita futura.

| Area         | Compatibilita futura                                                                               | Limite attuale                       |
| ------------ | -------------------------------------------------------------------------------------------------- | ------------------------------------ |
| Evidenze     | osservare rispetto regole, collaborazione, partecipazione, controllo motorio in compiti scolastici | non usare misure fisiche o sanitarie |
| UDA          | possibile costruzione per classe e nucleo dopo validazione                                         | non generabile ora                   |
| Criteri      | partecipazione, sicurezza, responsabilita, coordinazione, fair play                                | da calibrare con docente             |
| Progressione | possibile I / II / III                                                                             | non ancora validata                  |

## 13. Campi popolabili manualmente dopo validazione

Dopo revisione umana, potrebbero diventare compilabili:

- nuclei disciplinari;
- progressione Secondaria I / II / III;
- obiettivi di apprendimento;
- traguardi;
- lessico disciplinare controllato;
- evidenze osservabili;
- criteri valutativi scolastici;
- note di dipartimento;
- eventuali esclusioni motivate.

## 14. Campi non generabili senza validazione umana

Non generare automaticamente:

- file `.normalized.json`;
- unita di apprendimento;
- strutture sostanziali definitive;
- nodi disciplinari definitivi;
- progressione verticale completa Infanzia/Primaria/Secondaria;
- conoscenze e abilita per tutte le classi;
- criteri di valutazione formali;
- decisioni curricolari;
- riferimenti sanitari, inclusivi o adattativi specifici.

## 15. Punti da validare con docente/dipartimento

1. Confermare i cinque nuclei o ridurli/accorparli.
2. Confermare se la progressione I / II / III proposta e coerente con il curricolo reale.
3. Integrare Infanzia e Primaria oppure motivarne l'esclusione temporanea.
4. Verificare traguardi e obiettivi rispetto alle fonti ufficiali e al PTOF/curricolo d'istituto.
5. Controllare lessico salute/sicurezza.
6. Controllare lessico inclusione/adattamenti.
7. Definire quali evidenze siano osservabili senza misurazioni improprie.
8. Stabilire se esistano decisioni curricolari documentate.

## 16. Esclusioni esplicite

Questa slice esclude:

- creazione di `educazione-fisica.normalized.json`;
- runtime mappa Educazione Fisica;
- shape test 11/11;
- integrazione UI;
- deploy;
- push;
- decisioni curricolari non documentate;
- contenuti sanitari o agonistici non validati;
- copia di contenuti da altre discipline.

## 17. Readiness verdict

**Non pronta / gap-fill documentale pronto.**

La disciplina resta non pronta per data preparation. La base manuale rende possibile una revisione umana mirata, ma non basta da sola per generare dati normalizzati.

## 18. Prossima slice consigliata

**Revisione umana docente/dipartimentale** oppure, solo dopo validazione esplicita, data-preparation controllata.

Raccomandazione principale: revisione umana.

## 19. Invarianti rispettate

- docs-only / manual gap-fill;
- nessun file `.normalized.json`;
- nessuna modifica runtime;
- nessuna modifica a `content/curriculum/`;
- nessuna modifica a `tools/`;
- nessuna modifica `.claude/`;
- nessuna modifica `CLAUDE.md`;
- schema `.cml` invariato;
- export/import invariati;
- funzioni evidenze/UDA invariate;
- SchoolKB invariato;
- nessuna credenziale/client ID/token;
- nessuna dipendenza;
- nessun deploy;
- nessun push.

## 20. Verdetto finale

`CML_179_EDUCAZIONE_FISICA_GAP_FILL_DOCUMENTALE_MANUALE_READY`
