# CML-182B - EDUCAZIONE_FISICA_DATA_PREP_DECISION_CORRECTION

Data: 2026-06-27

## Obiettivo

Correggere la decisione di CML-182 distinguendo tra approvazione finale (che resta umana/dipartimentale) e autorizzazione a creare una bozza normalizzata prudente (che puo essere concessa come draft da validare).

Nuova decisione: `LIMITED_DRAFT_DATA_PREP_ALLOWED`.

Questa slice e docs-only correttiva. Non crea `educazione-fisica.normalized.json`, non modifica runtime, non modifica `content/curriculum/`, non modifica `tools/`, non modifica `.claude/`, non modifica `CLAUDE.md`, non modifica SchoolKB, non esegue deploy e non esegue push.

## Baseline

| Campo                 | Valore                                    |
| --------------------- | ----------------------------------------- |
| Repository            | `C:\Users\anton\CurManLight`              |
| Branch                | `main`                                    |
| Commit iniziale       | `cf2c607`                                 |
| origin/main iniziale  | `cf2c607`                                 |
| Working tree iniziale | pulito                                    |
| Stato remoto iniziale | `main...origin/main`                      |
| Slice precedente      | CML-182 (commit `cf2c607`, sincronizzato) |
| Decisione precedente  | `VALIDATION_OUTCOME_PENDING`              |
| Nuova decisione       | `LIMITED_DRAFT_DATA_PREP_ALLOWED`         |
| Dati normalizzati     | 10/14                                     |
| Runtime mappa         | 10/14                                     |
| Shape test            | 10/10 PASS                                |
| Deploy                | non eseguito                              |

## Scope autorizzato

- `docs/03_execution/CML-182B.md`
- `report/CML-182B_educazione_fisica_data_prep_decision_correction.md`
- `docs/REPO-MOVELOG.md`

## Scope vietato

- `content/curriculum/`
- qualsiasi file `.normalized.json`
- `_published_snapshot/netlify-current/index.html`
- `_published_snapshot/netlify-current/sw.js`
- `index.html`
- `tools/`
- `.claude/`
- `CLAUDE.md`
- `docs/02_system/`
- schema `.cml`
- file `.cml`
- export/import
- funzioni evidenze/UDA
- SchoolKB docs/runtime
- dipendenze
- deploy
- push

## Riferimenti CML-178, CML-179, CML-180, CML-181, CML-182

- CML-178: detailed gap model — disciplina non pronta.
- CML-179: gap-fill documentale/manuale — base manuale prodotta.
- CML-180: decisione `HUMAN_VALIDATION_REQUIRED_BEFORE_DATA_PREP`.
- CML-181: checklist di validazione umana creata (strumento, non compilata).
- CML-182: decisione `VALIDATION_OUTCOME_PENDING` — troppo prudente per la creazione di un draft prudente.

## Metodologia

1. Distinzione tra due concetti:
   - **Approvazione finale**: resta umana/dipartimentale, mai automatizzata.
   - **Bozza normalizzata prudente**: puo essere autorizzata come draft con `humanValidationRequired: true`, senza marcarla come approvata e senza autorizzare runtime integration automatica.
2. CML-182 non ha operato questa distinzione e ha bloccato anche la bozza.
3. CML-182B corregge la decisione: il draft prudente e autorizzato.

## Decisione principale

`LIMITED_DRAFT_DATA_PREP_ALLOWED`

## Significato operativo

- Si puo creare `educazione-fisica.normalized.json` come bozza.
- Il file deve contenere `humanValidationRequired: true` in ogni unita.
- Il file non deve essere marcato come approvato (`stato: bozza_generabile` o equivalente prudenziale).
- La bozza non autorizza runtime integration automatica.
- La validazione finale (docente/dipartimento) resta necessaria prima di qualsiasi integrazione runtime.
- Il workflow CurManLight gestisce la validazione come processo separato.

## Distinzione tra CML-182 e CML-182B

| Dimensione                  | CML-182                     | CML-182B (correzione)                             |
| --------------------------- | --------------------------- | ------------------------------------------------- |
| Validazione umana richiesta | Per tutto                   | Per approvazione finale si; per draft prudente no |
| Bozza normalizzata          | Bloccata                    | Autorizzata come draft                            |
| `humanValidationRequired`   | N/A                         | true su ogni unita                                |
| Runtime integration         | Bloccata                    | Bloccata                                          |
| Prossima slice              | CML-183 — template raccolta | CML-183 — limited draft data prep                 |

## Rischio dati residuo

Medio. La bozza sara marcata come non validata. Il rischio e contenuto dal flag `humanValidationRequired` e dall'assenza di runtime integration automatica.

## Rischio istituzionale residuo

Medio. Restano da validare salute, sicurezza, inclusione e valutazione prima di qualunque pubblicazione. La bozza draft non e visibile agli utenti finali.

## Prossima slice consigliata

CML-183 — EDUCAZIONE_FISICA_LIMITED_DRAFT_DATA_PREP

Creare `content/curriculum/educazione-fisica.normalized.json` come bozza prudente con `humanValidationRequired: true`.

## Validazioni

Preflight eseguito:

- `git rev-parse --show-toplevel` -> `C:/Users/anton/CurManLight`
- `git branch --show-current` -> `main`
- `git status --short --branch` -> `## main...origin/main`
- `git rev-parse --short HEAD` -> `cf2c607`
- `git rev-parse --short origin/main` -> `cf2c607`
- `git diff --check` -> PASS
- collisione `docs/03_execution/CML-182B.md` -> assente
- collisione `report/CML-182B_educazione_fisica_data_prep_decision_correction.md` -> assente

## Conferme

- docs-only / decision correction: confermato.
- Nessun file `.normalized.json`: confermato.
- Nessuna modifica runtime: confermato.
- Nessuna modifica `content/curriculum/`: confermato.
- Nessuna modifica `tools/`: confermato.
- Nessuna modifica `.claude/`: confermato.
- Nessuna modifica `CLAUDE.md`: confermato.
- Nessuna modifica SchoolKB: confermato.
- Nessun deploy: confermato.
- Nessun push: confermato.

## Verdict locale

`CML_182B_EDUCAZIONE_FISICA_DATA_PREP_DECISION_CORRECTION_READY`
