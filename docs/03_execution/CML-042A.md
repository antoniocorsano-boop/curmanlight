# CML-042A — Department CML Flow End-to-End Smoke with Examples

## Stato

Smoke end-to-end del flusso dipartimento `.cml` utilizzando gli esempi CML-040, dopo il fix runtime CML-042. Docs-only. Nessuna modifica runtime. Nessun deploy.

## Preflight

| Controllo    | Esito                                                             |
| ------------ | ----------------------------------------------------------------- |
| HEAD         | `b303c33` — fix: align department cml outcome fields (CML-042) ✅ |
| Branch       | `cml-008r-fix-markdown-decision-summary` ✅                       |
| Working tree | Pulita ✅                                                         |

## Esempi CML-040 utilizzati

| File                                        | Tipo               | Disciplina | Proposte/Esiti | Validità JSON |
| ------------------------------------------- | ------------------ | ---------- | -------------- | ------------- |
| `esempio_proposta_docente_tecnologia.cml`   | Proposta docente   | Tecnologia | 8 proposte     | ✅            |
| `esempio_proposta_docente_italiano.cml`     | Proposta docente   | Italiano   | 11 proposte    | ✅            |
| `esempio_esito_dipartimento_tecnologia.cml` | Esito dipartimento | Tecnologia | 8 esiti        | ✅            |
| `esempio_esito_dipartimento_italiano.cml`   | Esito dipartimento | Italiano   | 11 esiti       | ✅            |

## Smoke per flusso

### A. Import proposta docente — PASS

| Controllo                               | Esito                |
| --------------------------------------- | -------------------- |
| Validazione fileType (teacher_proposal) | ✅                   |
| Validazione discipline (stringa)        | ✅                   |
| Validazione proposals (array)           | ✅                   |
| Validazione humanValidationRequired     | ✅                   |
| Riconoscimento duplicati                | ✅ (via fingerprint) |
| Gestione JSON non valido / tipo errato  | ✅                   |

### B. Flusso dipartimento — PASS

| Controllo                                           | Esito        |
| --------------------------------------------------- | ------------ |
| Visualizzazione proposte importate                  | ✅           |
| Raggruppamento per disciplina + stato               | ✅           |
| Card proposta (testo, motivazione, evidenze, chips) | ✅           |
| Dropdown decisioni con valore underscore            | ✅ (CML-042) |
| Export esito include `discipline` (stringa)         | ✅ (CML-042) |
| Valori `handling` in formato underscore             | ✅ (CML-042) |

### C. Flusso referente — PASS

| Controllo                                                                                                         | Esito                        |
| ----------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| Validazione esito (fileType, discipline, disciplineWorkStatus, proposalHandling, checks, humanValidationRequired) | ✅                           |
| `discipline` (stringa) presente e non vuota                                                                       | ✅ (CML-042)                 |
| Conteggio per tipo handling (confluita, riformulata, assorbita, da_chiarire)                                      | ✅                           |
| Conteggio senza esito                                                                                             | ✅ (via handling vuoto/null) |

### D. Report gruppo curricolo — PASS

| Controllo                                | Esito |
| ---------------------------------------- | ----- |
| Generazione report                       | ✅    |
| Discipline elencate                      | ✅    |
| Conteggio confluita nella sintesi        | ✅    |
| Conteggio riformulata dal dipartimento   | ✅    |
| Conteggio assorbita in altra proposta    | ✅    |
| Conteggio da chiarire                    | ✅    |
| Conteggio senza esito                    | ✅    |
| Punti da chiarire sezione dedicata       | ✅    |
| Senza esito sezione dedicata             | ✅    |
| Nota prudente (non sostituisce delibera) | ✅    |

### E. Regressione minima — PASS

| Controllo                                               | Esito        |
| ------------------------------------------------------- | ------------ |
| Viewer curricolo                                        | ❌ Invariato |
| Etichette `📖 IN 2012 (vigente)` / `📖 IN 2025 (bozza)` | ❌ Invariate |
| Callout sezioni generali                                | ❌ Invariato |
| Export proposta docente                                 | ❌ Invariato |
| Drive non configurato                                   | ❌ Invariato |
| Assenza dati personali                                  | ✅           |

## Classificazione finale

**COMPLETO** — il flusso dipartimento `.cml` e ora percorribile end-to-end dopo il fix CML-042. Gli esempi CML-040 dimostrano il percorso docente → dipartimento → referente → report.

## Verdetto

```
CML_042A_DEPARTMENT_CML_FLOW_END_TO_END_SMOKE_READY
```
