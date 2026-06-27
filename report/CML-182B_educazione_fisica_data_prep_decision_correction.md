# CML-182B - Educazione Fisica Data Prep Decision Correction

Data: 2026-06-27

## 1. Scopo

Correggere la decisione CML-182 (`VALIDATION_OUTCOME_PENDING`) introducendo la distinzione tra approvazione finale umana (non delegabile) e autorizzazione a creare una bozza normalizzata prudente (draft da validare).

Nuova decisione: `LIMITED_DRAFT_DATA_PREP_ALLOWED`.

La slice e docs-only correttiva. Non produce file `.normalized.json`, non modifica runtime, non modifica `content/curriculum/`, non modifica `tools/`, non modifica `.claude/`, non modifica `CLAUDE.md`, non modifica SchoolKB, non esegue deploy e non esegue push.

## 2. Baseline tecnica

| Parametro | Valore |
|---|---|
| Root Git | `C:\Users\anton\CurManLight` |
| Branch | `main` |
| Commit iniziale | `cf2c607` (allineato con `origin/main`) |
| Working tree iniziale | pulito |
| Dati normalizzati | 10/14 |
| Runtime mappa | 10/14 |
| Shape test | 10/10 PASS |
| Skill usate | `cml-readiness-audit`, `cml-docs-only-slice` |

## 3. Collegamento con CML-178, CML-179, CML-180, CML-181, CML-182

### CML-178 — Detailed gap model

Gap: nuclei non formalizzati, progressione assente, obiettivi/traguardi non strutturati, evidenze mancanti, lessico rischioso, fonti non estratte.

### CML-179 — Gap-fill documentale manuale

Base manuale: 5 nuclei proposti, progressione Secondaria I/II/III, obiettivi/traguardi provvisori, lessico controllato. Dichiara la base non sufficiente per normalizzare senza validazione.

### CML-180 — Decisione HUMAN_VALIDATION_REQUIRED_BEFORE_DATA_PREP

Validazione umana richiesta prima della data-prep. Rischio dati medio, rischio istituzionale medio.

### CML-181 — Human validation checklist

Checklist creata come strumento compilabile (21 tabelle, 10 aree). Non compilata.

### CML-182 — VALIDATION_OUTCOME_PENDING

Decisione: checklist non compilata, data-prep bloccata. Non ha distinto tra approvazione finale umana e bozza draft prudente.

## 4. Errore di CML-182

CML-182 ha bloccato anche la creazione di una bozza normalizzata prudente, confondendo due concetti distinti:

| Concetto | Descrizione | Dipende da validazione umana? |
|---|---|---|
| **Approvazione finale** | Il contenuto e validato e puo essere pubblicato/integrato nel runtime | Si, sempre |
| **Bozza draft prudente** | File `.normalized.json` con `humanValidationRequired: true`, non approvato, non integrato nel runtime | No, e un artefatto di lavoro interno |

CML-182 ha richiesto la validazione umana per entrambi. CML-182B corregge: la bozza draft e autorizzata; l'approvazione finale resta umana.

## 5. Metodo di decisione

1. Distinzione tra i due concetti sopra.
2. Verifica che il gap-fill CML-179 fornisca una base sufficiente per un draft prudente.
3. Applicazione del principio: un draft con `humanValidationRequired: true` non e pubblicato, non e integrato nel runtime, non e approvato. Puo essere creato come artefatto di lavoro.
4. Scelta `LIMITED_DRAFT_DATA_PREP_ALLOWED`.

## 6. Cosa cambia rispetto a CML-182

| Dimensione | CML-182 | CML-182B |
|---|---|---|
| Bozzo normalizzata | Bloccata | Autorizzata come draft |
| `humanValidationRequired` | N/A | true su ogni unita |
| Stato file | N/A | bozza_generabile |
| Runtime integration | Bloccata | Bloccata |
| Validazione finale | Richiesta | Resta richiesta |

## 7. Cosa non cambia

- La validazione umana resta necessaria prima di runtime integration.
- La checklist CML-181 resta lo strumento di validazione.
- Il rischio dati e medio.
- Il rischio istituzionale e medio.
- Il contenuto disciplinare non e ancora confermato da docente/dipartimento.

## 8. Vincoli della bozza autorizzata

1. `humanValidationRequired: true` in ogni unita di apprendimento.
2. `stato: "bozza_generabile"` o equivalente prudenziale.
3. Nessuna marcatura di approvazione (no `stato: "approvato"` o simile).
4. Nessuna runtime integration automatica.
5. Decisioni curricolari vuote se non documentate.
6. Note esplicite di cautela nel campo `source` e `noteDipartimento`.

## 9. Rischio dati residuo

**Medio**. Invariato. La bozza e marcata come non validata, quindi chiunque legga il file JSON sa che e un draft. Il rischio e contenuto.

## 10. Rischio istituzionale residuo

**Medio**. Invariato. La bozza non e pubblicata, non e visibile agli utenti, non e integrata nel runtime.

## 11. Decisione principale

`LIMITED_DRAFT_DATA_PREP_ALLOWED`

## 12. Opzioni scartate

| Opzione | Motivo scarto |
|---|---|
| `VALIDATION_OUTCOME_PENDING` (conferma) | Troppo prudente: blocca anche un draft interno non pubblicato |
| `DATA_PREP_AUTHORIZED_WITH_CAUTIONS` | Non ancora: la validazione finale manca |
| `VALIDATION_SUFFICIENT_FOR_CONTROLLED_DATA_PREP` | La checklist non e compilata: non si puo dichiarare sufficiente |

## 13. Condizioni per la prossima slice (CML-183)

La creazione del draft deve:

- usare CML-179 come base documentale;
- includere i 5 nuclei proposti come `nodiDisciplinari` provvisori;
- includere la progressione I/II/III proposta come `progressioneVerticale`;
- includere obiettivi e traguardi di CML-179;
- marcare ogni unita con `humanValidationRequired: true`;
- includere il lessico controllato come nota;
- lasciare conoscenze, abilita, evidenze, criteri come prudenti o vuoti;
- includere `noteDipartimento` che rinviano alla checklist CML-181.

## 14. Raccomandazione finale

Raccomandazione principale: **CML-183 — EDUCAZIONE_FISICA_LIMITED_DRAFT_DATA_PREP**.

Creare `content/curriculum/educazione-fisica.normalized.json` come bozza prudente, rispettando i vincoli sopra.

## 15. Invarianti rispettate

- docs-only / decision correction;
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

## 16. Verdetto finale

`CML_182B_EDUCAZIONE_FISICA_DATA_PREP_DECISION_CORRECTION_READY`
