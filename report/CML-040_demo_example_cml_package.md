# CML-040 — Demo Example CML Package

## Summary

Pacchetto esempi dimostrativi `.cml` per formazione e simulazione. 4 file `.cml` + guida utente. Riprende il blocco sospeso in CML-030. Nessuna modifica runtime. Nessun deploy.

## Preflight

| Controllo | Esito |
|---|---|
| HEAD | `ba80869` ✅ |
| Working tree | Pulita ✅ |
| MEMORY.md / .kilo / CLAUDE.md | ✅ non committati |

## File creati

| Percorso | Descrizione |
|---|---|
| `docs/04_user/esempi_cml/esempio_proposta_docente_tecnologia.cml` | Proposta docente Tecnologia (8 proposte) |
| `docs/04_user/esempi_cml/esempio_proposta_docente_italiano.cml` | Proposta docente Italiano (11 proposte) |
| `docs/04_user/esempi_cml/esempio_esito_dipartimento_tecnologia.cml` | Esito dipartimento Tecnologia (8 esiti) |
| `docs/04_user/esempi_cml/esempio_esito_dipartimento_italiano.cml` | Esito dipartimento Italiano (11 esiti) |
| `docs/04_user/CML_GUIDA_SIMULAZIONE_ESEMPI.md` | Guida alla simulazione |

## Schema `.cml`

JSON schema `1.0`, due `fileType`: `teacher_proposal` (proposta docente), `department_outcome` (esito dipartimentale). I campi richiesti corrispondono alla validazione nell'app.

## Casi coperti

| Caso | Tecnologia | Italiano |
|---|---|---|
| Confluita nella sintesi | 4 | 8 |
| Riformulata dal dipartimento | 2 | 1 |
| Assorbita in altra proposta | 1 | 1 |
| Da chiarire | 1 | 1 |
| Senza esito | 0 | 0 |

## Output finale

| Campo | Valore |
|---|---|
| Verdict | `CML_040_DEMO_EXAMPLE_CML_PACKAGE_READY` |
| Commit hash | In corso |
| File creati/modificati | 4 `.cml`, 1 guida, 1 exec doc, 1 report, MOVELOG |
| Esempi `.cml` creati | 4 (2 proposte, 2 esiti) |
| Casi coperti | confluita, riformulata, assorbita, da chiarire |
| Controlli PASS | JSON valido ✅, campi richiesti ✅, nessun dato reale ✅ |
| Docs-only / example-data-only | ✅ |
| Runtime modificato | ❌ Nessuno |
| Deploy | ❌ Nessuno |
| Modifica schema `.cml` | ❌ Nessuna |
| Modifica persistenza | ❌ Nessuna |
| MEMORY.md / .kilo / CLAUDE.md | ✅ non committati |
| Prossimo step | Da determinare |
