# CML-182 - Educazione Fisica Validation Outcome Decision

Data: 2026-06-27

## 1. Scopo

Questo report registra l'esito formale della validazione umana/dipartimentale per Educazione Fisica dopo CML-181. La decisione stabilisce se la disciplina puo passare a data preparation controllata oppure se la validazione resta in attesa.

La slice e docs-only / validation outcome decision. Non produce file `.normalized.json`, non modifica runtime, non modifica `content/curriculum/`, non modifica `tools/`, non modifica `.claude/`, non modifica `CLAUDE.md`, non modifica SchoolKB, non esegue deploy e non esegue push.

## 2. Baseline tecnica

| Parametro             | Valore                                       |
| --------------------- | -------------------------------------------- |
| Root Git              | `C:\Users\anton\CurManLight`                 |
| Branch                | `main`                                       |
| Commit iniziale       | `7a6a98b` (allineato con `origin/main`)      |
| Working tree iniziale | pulito                                       |
| Dati normalizzati     | 10/14                                        |
| Runtime mappa         | 10/14                                        |
| Shape test            | 10/10 PASS                                   |
| Skill usate           | `cml-readiness-audit`, `cml-docs-only-slice` |

## 3. Collegamento con CML-178, CML-179, CML-180 e CML-181

### CML-178 — Detailed gap model

Ha stabilito che Educazione Fisica non era pronta per data preparation. Gap: nuclei non formalizzati, progressione assente, obiettivi e traguardi non strutturati, evidenze mancanti, lessico rischioso, fonti non estratte.

### CML-179 — Gap-fill documentale manuale

Ha prodotto una base manuale: 5 nuclei proposti, progressione Secondaria I/II/III, obiettivi e traguardi provvisori, lessico controllato. Ha dichiarato la base non sufficiente per normalizzare senza validazione.

### CML-180 — Decisione controllata

Decisione: `HUMAN_VALIDATION_REQUIRED_BEFORE_DATA_PREP`. Il gap-fill ha migliorato la base ma serve validazione umana prima della normalizzazione.

### CML-181 — Human validation checklist

Ha prodotto la checklist di validazione umana: 21 tabelle su 10 aree, 3 esiti possibili, 10 condizioni minime per autorizzare data-prep. Lo strumento e completo ma non compilato.

## 4. Metodo di decisione

1. Verifica oggettiva: la checklist CML-181 e presente nel repository come strumento.
2. Verifica compilazione: nessuna tabella della checklist contiene risposte umane (esiti, note, firme).
3. Nessuna evidenza di validazione docente/dipartimentale tracciabile nel repository.
4. Applicazione rigorosa del criterio di prudenza: non autorizzare data-prep senza validazione reale.
5. Scelta della decisione piu coerente con lo stato documentale.

## 5. Stato della checklist CML-181

| Dimensione                          | Stato                                 |
| ----------------------------------- | ------------------------------------- |
| Checklist creata                    | Si (CML-181, 405 righe, 21 tabelle)   |
| Compilata da docente/dipartimento   | No                                    |
| Risposte umane presenti             | No                                    |
| Note o integrazioni                 | No                                    |
| Firma o autorizzazione              | No                                    |
| Evidenze di validazione tracciabile | Nessuna                               |
| Stato complessivo                   | Strumento pronto, esito non pervenuto |

## 6. Evidenze disponibili

- La checklist esiste nel repository (commit `7a6a98b`).
- Il contenuto e interamente strutturale (domande, tabelle vuote, esiti attesi).
- Il report CML-181 specifica che si tratta di uno strumento compilabile, non di una validazione avvenuta.

## 7. Evidenze non disponibili

- Nessuna risposta umana a nessuna delle 10 aree della checklist.
- Nessuna conferma dei nuclei.
- Nessuna conferma della progressione I/II/III.
- Nessuna validazione di obiettivi, traguardi, valutazione, inclusione, sicurezza.
- Nessuna decisione su Infanzia e Primaria.
- Nessuna autorizzazione esplicita alla data-prep.

## 8. Valutazione delle 10 condizioni minime

Le 10 condizioni minime definite in CML-181 per autorizzare data-prep:

| #   | Condizione                                                  | Stato           |
| --- | ----------------------------------------------------------- | --------------- |
| 1   | Identita disciplinare confermata                            | Non verificata  |
| 2   | Nuclei disciplinari confermati                              | Non verificata  |
| 3   | Progressione Secondaria I/II/III confermata                 | Non verificata  |
| 4   | Decisione su Infanzia e Primaria                            | Non disponibile |
| 5   | Obiettivi osservabili confermati                            | Non verificata  |
| 6   | Traguardi coerenti                                          | Non verificati  |
| 7   | Lessico salute/sicurezza/inclusione approvato               | Non verificato  |
| 8   | Criteri di valutazione definiti                             | Non definiti    |
| 9   | Assenza formulazioni sanitarie/performative/discriminatorie | Non verificata  |
| 10  | Autorizzazione formale dipartimento                         | Non disponibile |

Esito: **0/10 condizioni soddisfatte**.

## 9. Valutazione nuclei disciplinari

Nuclei proposti in CML-179 non validati. Stato: ipotesi non confermate.

## 10. Valutazione progressione I / II / III

Progressione Secondaria I/II/III proposta in CML-179 non validata. Stato: bozza non confermata.

## 11. Valutazione obiettivi osservabili

Obiettivi provvisori CML-179 non validati. Stato: bozza non confermata.

## 12. Valutazione traguardi

Traguardi provvisori CML-179 non validati. Stato: bozza non confermata.

## 13. Valutazione conoscenze / abilita / atteggiamenti

Non definite ne validate. Stato: assenti.

## 14. Valutazione inclusione e sicurezza

Non validate. Stato: da definire.

## 15. Compatibilita con schema CML

Solo compatibilita formale. Campi sostanziali non popolabili senza validazione. Stato: invariato rispetto a CML-180.

## 16. Rischio dati residuo

**Medio**.

Il rischio non e aumentato (nessun dato inventato) ma resta invariato perche la base documentale e migliorata (gap-fill + checklist) ma non validata.

## 17. Rischio istituzionale residuo

**Medio**.

Salute, sicurezza, inclusione, fair play e valutazione restano aree non validate. Qualunque data preparation produrrebbe dati fragili su questi temi.

## 18. Decisione principale

`VALIDATION_OUTCOME_PENDING`

Risposte alle domande decisionali obbligatorie:

1. La checklist CML-181 risulta compilata? **No.**
2. Esiste un esito umano/dipartimentale tracciabile? **No.**
3. Le 10 condizioni minime di CML-181 risultano soddisfatte? **0/10.**
4. I nuclei disciplinari sono confermati? **No.**
5. La progressione I / II / III e confermata? **No.**
6. Gli obiettivi osservabili sono confermati? **No.**
7. Valutazione, inclusione e sicurezza sono validati? **No.**
8. Quali campi CML possono essere popolati solo dopo validazione? **Tutti i campi sostanziali: nuclei, unita, progressione, obiettivi, traguardi, conoscenze, abilita, evidenze, criteri, fonte.**
9. Quale rischio resta se si procede ora? **Rischio di trasformare bozze documentali in dati curricolari senza conferma umana.**
10. Qual e la decisione piu prudente? **`VALIDATION_OUTCOME_PENDING` — non autorizzare data-prep senza validazione umana reale.**

## 19. Opzioni scartate

| Opzione                                          | Motivo scarto                                                                  |
| ------------------------------------------------ | ------------------------------------------------------------------------------ |
| `VALIDATION_SUFFICIENT_FOR_CONTROLLED_DATA_PREP` | Nessuna validazione umana presente                                             |
| `VALIDATION_PARTIAL_NEEDS_INTEGRATION`           | Non c'e compilazione parziale, non c'e compilazione alcuna                     |
| `VALIDATION_INSUFFICIENT_DATA_PREP_BLOCKED`      | E troppo forte: la checklist non e stata usata, non ha prodotto esito negativo |
| `DATA_PREP_AUTHORIZED`                           | Violerebbe il principio di prudenza e la decisione CML-180                     |

## 20. Condizioni per sbloccare data-prep

Perche Educazione Fisica possa passare a data preparation controllata, serve:

1. Compilazione umana della checklist CML-181.
2. Almeno 8/10 condizioni minime soddisfatte.
3. Autorizzazione esplicita del dipartimento o del referente disciplinare.
4. Decisione su Infanzia e Primaria (includere, rimandare, escludere con motivazione).
5. Meno di 3 aree critiche (nuclei, progressione, lessico salute/sicurezza) ancora da validare.

## 21. Raccomandazione finale

Raccomandazione principale: **CML-183 — EDUCAZIONE_FISICA_VALIDATION_COLLECTION_TEMPLATE**.

La prossima slice dovrebbe creare un template operativo per raccogliere la compilazione della checklist, con:

- istruzioni chiare per il docente/dipartimento;
- formato compilabile (es. sezioni da barrare, campi testo, esito finale);
- indicazione di come restituire l'esito;
- soglia minima per autorizzare la data-prep.

In alternativa, se si ritiene che la checklist sia sufficiente come strumento e che la palla sia nel campo del dipartimento (non del repository), si puo procedere direttamente con una disciplina diversa (Seconda Lingua Comunitaria, Religione Cattolica o Latino LEL).

## 22. Invarianti rispettate

- docs-only / validation outcome decision;
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

## 23. Verdetto finale

`CML_182_EDUCAZIONE_FISICA_VALIDATION_OUTCOME_DECISION_READY`
