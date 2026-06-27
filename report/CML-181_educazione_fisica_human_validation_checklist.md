# CML-181 - Educazione Fisica Human Validation Checklist

Data: 2026-06-27

## 1. Scopo

Questo report produce una checklist di validazione umana/dipartimentale per Educazione Fisica, come deciso in CML-180. La checklist e rivolta a docente o dipartimento disciplinare per verificare se la base documentale e sufficiente ad autorizzare una futura data preparation controllata.

La slice e docs-only / human validation checklist. Non produce file `.normalized.json`, non modifica runtime, non modifica `content/curriculum/`, non modifica `tools/`, non modifica `.claude/`, non modifica `CLAUDE.md`, non modifica SchoolKB, non esegue deploy e non esegue push.

## 2. Baseline tecnica

| Parametro | Valore |
|---|---|
| Root Git | `C:\Users\anton\CurManLight` |
| Branch | `main` |
| Commit iniziale | `761622d` (allineato con `origin/main`) |
| Working tree iniziale | pulito |
| Dati normalizzati | 10/14 |
| Runtime mappa | 10/14 |
| Shape test | 10/10 PASS |
| Skill usate | `cml-readiness-audit`, `cml-docs-only-slice` |

## 3. Collegamento con CML-178, CML-179 e CML-180

### CML-178 — Detailed gap model

Ha stabilito che Educazione Fisica non era pronta per data preparation. Gap identificati:

- nuclei solo come ipotesi prudenziali;
- progressione I/II/III non verificabile;
- obiettivi e traguardi non strutturati;
- evidenze e criteri non disponibili;
- lessico a rischio sanitario/performativo/generico;
- fonti originali non estratte.

### CML-179 — Gap-fill documentale manuale

Ha prodotto una base manuale verificabile:

- 5 nuclei proposti (da validare);
- progressione Secondaria I/II/III proposta (da validare);
- obiettivi provvisori per classe (da validare);
- traguardi provvisori (da validare);
- lessico controllato con 3 fasce (consigliato/cautela/evitare).

CML-179 ha dichiarato espressamente che la base non e sufficiente per normalizzare senza validazione.

### CML-180 — Decisione controllata

Decisione: `HUMAN_VALIDATION_REQUIRED_BEFORE_DATA_PREP`.

Motivazione: il gap-fill ha migliorato la base documentale ma la trasformazione in dati normalizzati richiede conferma umana su nuclei, progressione, obiettivi, traguardi, lessico salute/sicurezza/inclusione ed evidenze.

## 4. Metodo di costruzione checklist

1. Estrazione sistematica di ogni punto che richiede validazione umana da CML-178, CML-179 e CML-180.
2. Raggruppamento per le 10 aree obbligatorie previste dal contratto CML-181.
3. Trasformazione di ogni gap in una domanda operativa, compilabile con un esito (Si/No/Parziale) e un campo note.
4. Per ogni area, indicazione del campo CML collegato e del rischio se non validato.
5. Separazione tra elementi da confermare, elementi da integrare, elementi da scegliere tra alternative, elementi non validabili automaticamente.
6. Condizioni minime per autorizzare una futura data-prep.

## 5. Checklist identita disciplinare

| Domanda | Esito atteso | Obbligatoria | Note |
|---|---|---|---|
| Il nome ufficiale della disciplina e "Educazione Fisica"? | Si | Si | |
| Esistono denominazioni alternative usate nei documenti d'istituto (es. Scienze Motorie, Attivita Motoria)? | Specificare | Si | Se si, indicare quali |
| La collocazione della disciplina e nei tre ordini: Infanzia, Primaria, Secondaria di I grado? | Si | Si | Indicare se qualche ordine e escluso o trattato diversamente |
| Il lessico usato nei documenti ufficiali di istituto corrisponde a quello dei nuclei proposti? | Si/Parziale | Si | |
| Esiste una fonte ufficiale consultabile (PTOF, curricolo d'istituto, indicazioni ministeriali)? | Specificare | Si | |

Rischio se non validato: ambiguita lessicale nei documenti generati, incoerenza con la denominazione istituzionale.

## 6. Checklist nuclei disciplinari

Validare i 5 nuclei proposti da CML-179, con possibilita di modifica, unione o eliminazione.

### Nucleo 1: Corpo, percezione e consapevolezza motoria

| Domanda | Esito | Obbligatoria |
|---|---|---|
| Il nucleo e corretto? | Confermare/Modificare/Eliminare | Si |
| La descrizione "Conoscere il proprio corpo in movimento, percepire postura, equilibrio, orientamento e controllo motorio in situazioni scolastiche" e adeguata? | Si/No/Modificare | Si |
| Il perimetro e chiaro? | Si/No | Si |
| Rischio se non validato: nucleo troppo generico, sovrapposizione con altri nuclei | | |

### Nucleo 2: Abilita motorie e coordinazione

| Domanda | Esito | Obbligatoria |
|---|---|---|
| Il nucleo e corretto? | Confermare/Modificare/Eliminare | Si |
| La descrizione "Sviluppare schemi motori, coordinazione, equilibrio, ritmo, adattamento a spazi e consegne" e adeguata? | Si/No/Modificare | Si |
| Occorre distinguere tra coordinazione fine, globale, equilibratoria? | Si/No | No |
| Rischio se non validato: obiettivi non distinguibili per classe | | |

### Nucleo 3: Gioco, sport, regole e fair play

| Domanda | Esito | Obbligatoria |
|---|---|---|
| Il nucleo e corretto? | Confermare/Modificare/Eliminare | Si |
| La descrizione "Partecipare a giochi e attivita sportive scolastiche rispettando regole, ruoli, compagni e avversari" e adeguata? | Si/No/Modificare | Si |
| Vanno elencati sport/attivita specifiche o resta generico? | Specificare | Si |
| Il perimetro e scolastico, non agonistico? | Si | Si |
| Rischio se non validato: confusione tra sport scolastico e attivita extrascolastica/agonistica | | |

### Nucleo 4: Salute, benessere, sicurezza e prevenzione scolastica

| Domanda | Esito | Obbligatoria |
|---|---|---|
| Il nucleo e corretto? | Confermare/Modificare/Eliminare | Si |
| La descrizione "Riconoscere comportamenti sicuri, cura di se, rispetto degli spazi e abitudini attive in perimetro educativo" e adeguata? | Si/No/Modificare | Si |
| Il linguaggio e educativo, non sanitario? | Si | Si |
| Vanno evitati termini come prevenzione, diagnosi, terapia, idoneita? | Si | Si |
| Rischio se non validato: formulazioni sanitarie o prescrittive, rischio istituzionale | | |

### Nucleo 5: Espressione corporea, relazione e inclusione

| Domanda | Esito | Obbligatoria |
|---|---|---|
| Il nucleo e corretto? | Confermare/Modificare/Eliminare | Si |
| La descrizione "Usare corpo e movimento per comunicare, collaborare, includere e adattare la partecipazione" e adeguata? | Si/No/Modificare | Si |
| Il lessico inclusivo e validato dal dipartimento? | Si | Si |
| Rischio se non validato: formulazioni troppo ampie, sovrapposizione con Educazione Civica o sostegno | | |

### Domande trasversali sui nuclei

| Domanda | Esito | Obbligatoria |
|---|---|---|
| I 5 nuclei sono sufficienti o occorre unirne/aggiungerne? | Specificare | Si |
| Esiste un ordine di priorita tra i nuclei? | Specificare | No |
| Qualche nucleo si sovrappone con altre discipline (Ed. Civica, Scienze)? | Specificare | Si |

## 7. Checklist progressione I / II / III

### Progressione Secondaria I / II / III

| Classe | Domanda | Esito |
|---|---|---|
| I | Gli obiettivi specifici della Classe I sono corretti? (conoscenza di se, regole, schemi motori, coordinazione di base, sicurezza) | Si/No/Parziale |
| I | Quali elementi sono esclusivi della Classe I e non ricorsivi? | Specificare |
| II | Gli obiettivi specifici della Classe II sono corretti? (consolidamento motorio, collaborazione, ruoli, giochi di squadra, fair play) | Si/No/Parziale |
| II | Quali elementi crescono per complessita rispetto alla Classe I? | Specificare |
| III | Gli obiettivi specifici della Classe III sono corretti? (autonomia, responsabilita, progettazione, riflessione su benessere) | Si/No/Parziale |
| III | Quali elementi sono di effettiva autonomia e non solo ricorsivi? | Specificare |

### Progressione Infanzia e Primaria

| Domanda | Esito | Obbligatoria |
|---|---|---|
| La progressione proposta copre solo la Secondaria. Come trattare Infanzia e Primaria? | Specificare | Si |
| Infanzia: va inclusa nella data-prep o rimandata? | Includere/Rimandare/Escludere | Si |
| Primaria classi I-V: va inclusa o rimandata? | Includere/Rimandare/Escludere | Si |
| Se esclusa, motivare la decisione | Specificare | Se esclusa |

### Ricorsivita e complessita

| Domanda | Esito | Obbligatoria |
|---|---|---|
| Quali obiettivi sono ricorsivi (presenti in piu classi)? | Elencare | Si |
| Quali obiettivi crescono per complessita tra le classi? | Specificare come | Si |
| Quali formulazioni sono troppo generiche per distinguere le classi? | Elencare | Si |

Rischio se non validato: progressione piatta, classi indistinguibili o inversione didattica.

## 8. Checklist obiettivi osservabili

| Domanda | Esito | Obbligatoria |
|---|---|---|
| Gli obiettivi Classe I descrivono azioni osservabili? (rispettare regole, eseguire schemi, partecipare, riconoscere sicurezza) | Si/No/Parziale | Si |
| Gli obiettivi Classe II descrivono azioni osservabili? (consolidare, applicare, collaborare, riflettere) | Si/No/Parziale | Si |
| Gli obiettivi Classe III descrivono azioni osservabili? (organizzare, partecipare, riconoscere, usare) | Si/No/Parziale | Si |
| Ogni obiettivo e formulato come prestazione motoria o comportamentale verificabile? | Si/No | Si |
| Sono presenti obiettivi non osservabili (es. "comprendere", "sapere", "conoscere" senza verifica)? | Elencare | Si |
| La collaborazione e descritta come comportamento osservabile? | Si/No | Si |
| Il rispetto delle regole e descritto come comportamento osservabile? | Si/No | Si |
| La sicurezza e descritta come comportamento osservabile? | Si/No | Si |
| La consapevolezza corporea e descritta come comportamento osservabile? | Si/No | Si |
| Il benessere e descritto in termini comportamentali, non sanitari? | Si/No | Si |
| L'inclusione e descritta come comportamento osservabile? | Si/No | Si |
| L'espressivita motoria e descritta come comportamento osservabile? | Si/No | No |

Rischio se non validato: obiettivi non verificabili, valutazione impossibile o affidata a percezione soggettiva.

## 9. Checklist traguardi

| Domanda | Esito | Obbligatoria |
|---|---|---|
| I traguardi Classe I sono coerenti con i nuclei proposti? | Si/No/Parziale | Si |
| I traguardi Classe II sono coerenti con i nuclei proposti? | Si/No/Parziale | Si |
| I traguardi Classe III sono coerenti con i nuclei proposti? | Si/No/Parziale | Si |
| I traguardi sono coerenti con gli obiettivi annuali corrispondenti? | Si/No/Parziale | Si |
| I traguardi descrivono competenze attese al termine del triennio (non solo della singola classe)? | Si/No | Si |
| Le formulazioni sono troppo ampie (es. "l'alunno agisce con autonomia")? | Segnalare | Si |
| I traguardi contengono elementi non verificabili? | Segnalare | Si |
| I traguardi sono distinguibili tra loro per livello di complessita? | Si/No | Si |

Rischio se non validato: traguardi generici, non utilizzabili per programmazione o certificazione delle competenze.

## 10. Checklist conoscenze / abilita / atteggiamenti

| Domanda | Esito | Obbligatoria |
|---|---|---|
| Le conoscenze sono separabili dalle abilita motorie? | Si/No/Parziale | Si |
| Le abilita motorie sono descritte come azioni osservabili? | Si/No | Si |
| I comportamenti osservabili sono distinti dalle abilita tecniche? | Si/No | Si |
| Gli atteggiamenti (partecipazione, rispetto, collaborazione) sono esplicitati? | Si/No | Si |
| Esistono elementi trasversali (educazione civica, competenze sociali) da separare? | Elencare | Si |
| Le formulazioni evitano di confondere abilita fisica e comportamento sociale? | Si/No | Si |

### Tabella riepilogativa per classe

| Classe | Conoscenze | Abilita motorie | Comportamenti | Atteggiamenti | Elementi trasversali |
|---|---|---|---|---|---|
| I | Elencare | Elencare | Elencare | Elencare | Elencare |
| II | Elencare | Elencare | Elencare | Elencare | Elencare |
| III | Elencare | Elencare | Elencare | Elencare | Elencare |

Rischio se non validato: miscuglio tra conoscenze, abilita e comportamenti; valutazione imprecisa.

## 11. Checklist valutazione

| Domanda | Esito | Obbligatoria |
|---|---|---|
| I criteri di valutazione sono osservabili? | Si/No/Parziale | Si |
| I criteri sono distinti per livello (iniziale, base, intermedio, avanzato)? | Si/No | Si |
| Le evidenze sono comportamentali, non fisiche o sanitarie? | Si | Si |
| La sicurezza e inclusa come criterio valutativo? | Si/No | Si |
| La partecipazione e inclusa come criterio valutativo? | Si/No | Si |
| I progressi individuali sono valutabili (non solo prestazione assoluta)? | Si/No | Si |
| La valutazione evita di misurare condizioni fisiche, peso, altezza, resistenza? | Si | Si |
| L'inclusione e criterio valutativo o solo contesto didattico? | Specificare | Si |
| Sono previsti adattamenti per alunni con BES/ sostegno? | Si/No | Si |
| Il giudizio finale tiene conto del percorso individuale o solo del prodotto motorio? | Specificare | Si |

Rischio se non validato: valutazione ridotta a prestazione atletica, discriminazione involontaria, mancata personalizzazione.

## 12. Checklist inclusione e sicurezza

| Domanda | Esito | Obbligatoria |
|---|---|---|
| La disciplina prevede adattamenti per alunni con difficolta motorie? | Si/No | Si |
| La disciplina prevede adattamenti per alunni con disabilita? | Si/No | Si |
| La partecipazione di tutti e garantita, indipendentemente dal livello motorio? | Si | Si |
| La sicurezza negli spazi (palestra, cortile, aula) e descritta? | Si/No | Si |
| La gestione dei materiali e delle attrezzature e regolamentata? | Si/No | Si |
| Sono previste misure di prevenzione (riscaldamento, abbigliamento, comportamenti)? | Si/No | Si |
| Il rispetto dei limiti personali (non forzare prestazioni) e esplicitato? | Si/No | Si |
| Il linguaggio usato nei documenti e non discriminatorio? | Si | Si |
| I termini come "deficit", "normalita corporea", "inadeguatezza motoria" sono evitati? | Si | Si |
| Sono previsti momenti di osservazione prima della valutazione? | Si/No | Si |

Rischio se non validato: esclusione involontaria, rischi legali o assicurativi, linguaggio non inclusivo.

## 13. Compatibilita con schema CML

| Campo CML | Popolabile con sicurezza | Da validare | Da lasciare prudente | Non generabile automaticamente |
|---|---|---|---|---|
| disciplina | Si ("Educazione Fisica") | | | |
| stato | Si ("bozza_generabile" o equivalente) | X | | |
| readiness | Si ("in_revisione") | X | | |
| humanValidationRequired | Si (true) | | | |
| source | Si (riferimento CML-179) | X | | |
| metaDiscipline | | X | | |
| unitaApprendimento | | | X | X |
| struttureSostanziali | | | X | X |
| nodiDisciplinari | | X | | |
| progressioneVerticale | | X | | |
| decisioniCurricolari | Si (array vuoto) | | | |
| nucleo | | X | | |
| ambito | | X | | |
| competenza | | | X | |
| traguardo | | X | | |
| obiettivi | | X | | |
| conoscenze | | | X | X |
| abilita | | | X | X |
| evidenze | | | X | X |
| criteriValutazione | | | X | X |
| fonte | | X | | |
| note | Si (note di cautela) | | | |
| validazioneUmana | Si (true) | | | |

Rischio se non validato: generazione di JSON con campi vuoti o inventati, violazione del contratto CML.

## 14. Campi popolabili dopo validazione

Dopo validazione umana positiva, potrebbero essere popolati con sicurezza:

- disciplina: Educazione Fisica (gia certo);
- metaDiscipline: area da confermare (motoria/espressiva);
- nodiDisciplinari: i 5 nuclei se confermati;
- progressione: Secondaria I/II/III se validata;
- obiettivi: per classe se confermati;
- traguardi: per classe se confermati;
- lessico controllato: le 3 fasce se approvate;
- humanValidationRequired: true (resta come marcatore);
- decisioniCurricolari: array vuoto se non emergono decisioni documentate;
- note: perimetro educativo non sanitario.

## 15. Campi da lasciare prudenti

Restano da trattare con cautela anche dopo validazione positiva:

- conoscenze e abilita complete per ogni unita (richiedono fonte strutturata);
- evidenze (richiedono osservazione didattica reale);
- criteri di valutazione formali (richiedono calibrazione dipartimentale);
- progressione Infanzia e Primaria (se non validate, restano escluse);
- fonti ufficiali (se non disponibili, restano a riferimento CML-179);
- contenuti su salute, sicurezza, inclusione e adattamenti (richiedono supervisione istituzionale).

## 16. Esiti possibili della validazione

### Esito A: validazione sufficiente per data-prep controllata

Condizioni:

- tutti i nuclei sono confermati (nessun nucleo rifiutato);
- la progressione Secondaria I/II/III e confermata;
- Infanzia e Primaria hanno una decisione esplicita (incluse con riserva o escluse con motivazione);
- obiettivi e traguardi sono confermati come osservabili;
- lessico salute/sicurezza/inclusione e approvato;
- criteri di valutazione sono definiti (almeno in bozza);
- il dipartimento autorizza una data preparation limitata e prudente.

### Esito B: validazione parziale, serve integrazione

Condizioni:

- almeno un nucleo richiede modifica significativa;
- la progressione ha elementi da rivedere;
- obiettivi o traguardi hanno formulazioni da correggere;
- lessico salute/sicurezza/inclusione da rivedere parzialmente;
- mancano criteri di valutazione o evidenze.

### Esito C: validazione insufficiente, data-prep bloccata

Condizioni:

- uno o piu nuclei sono rifiutati senza alternativa;
- la progressione non e distinguibile per classe;
- obiettivi o traguardi sono giudicati non osservabili;
- lessico salute/sicurezza/inclusione non approvabile;
- il dipartimento non autorizza la data preparation.

## 17. Condizioni per autorizzare data-prep

Per autorizzare una futura data preparation controllata (CML-183), devono essere soddisfatte TUTTE le seguenti condizioni minime:

1. Identita disciplinare confermata senza ambiguita.
2. Nuclei disciplinari confermati (anche con modifiche rispetto alla proposta CML-179).
3. Progressione Secondaria I/II/III confermata o sostituita con alternativa validata.
4. Decisione esplicita su come trattare Infanzia e Primaria.
5. Obiettivi osservabili per classe confermati.
6. Traguardi coerenti con nuclei e obiettivi.
7. Lessico su salute, sicurezza e inclusione approvato.
8. Criteri di valutazione definiti (anche in bozza).
9. Assenza di formulazioni sanitarie, performative o discriminatorie.
10. Il dipartimento/dirigente autorizza formalmente la data-prep.

La data preparation autorizzata deve essere controllata e limitata:

- produrre solo i dati strettamente validati;
- marcare humanValidationRequired=true su ogni unita;
- escludere campi non validati (lasciandoli vuoti o prudenti);
- includere una nota esplicita di cautela nel source.

## 18. Opzioni prossima slice

| Opzione | Valutazione |
|---|---|
| CML-182 — EDUCAZIONE_FISICA_VALIDATION_OUTCOME_DECISION | Raccomandata: registra l'esito della checklist |
| CML-183 — EDUCAZIONE_FISICA_CONTROLLED_DATA_PREP | Solo dopo esito sufficiente in CML-182 |
| Altra slice disciplina residua (Seconda Lingua, Religione, Latino) | Se Educazione Fisica e bloccata |
| Sync remota | Solo su richiesta esplicita |

## 19. Raccomandazione finale

Raccomandazione principale: **CML-182 — EDUCAZIONE_FISICA_VALIDATION_OUTCOME_DECISION**.

La checklist prodotta in questa slice e completa e pronta per essere compilata da docente/dipartimento. Dopo la compilazione, la slice CML-182 dovra registrare l'esito formale e decidere se autorizzare la data preparation controllata (CML-183) oppure richiedere integrazioni.

## 20. Invarianti rispettate

- docs-only / human validation checklist;
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

## 21. Verdetto finale

`CML_181_EDUCAZIONE_FISICA_HUMAN_VALIDATION_CHECKLIST_READY`
