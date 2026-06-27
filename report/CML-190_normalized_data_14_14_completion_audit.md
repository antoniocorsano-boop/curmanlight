# CML-190 — Normalized Data 14/14 Completion Audit

Data: 2026-06-27

## 1. Scopo

Audit finale di completamento del ciclo di normalizzazione dei dati curricolari CurManLight, convalidando che tutte le 14 discipline dispongano di file `.normalized.json` validi, che il runtime sia invariato, e che i test strutturali siano allineati.

## 2. Baseline

| Parametro | Valore |
|---|---|
| Root Git | `C:\Users\anton\CurManLight` |
| Branch | `main` |
| Commit iniziale | `67c313f` |
| origin/main | `67c313f` — allineato |
| Working tree | Pulito |
| Dati normalizzati | 14/14 |
| Runtime mappa | 11/14 |
| Shape test | 11/11 PASS |
| Validatore | 14/14 PASS, 0 errori |

## 3. Commits di normalizzazione

| Slice | Commit finale | Disciplina |
|---|---|---|
| CML-186 | `a190af8` | Seconda Lingua Comunitaria (6 unit) |
| CML-187 | `fcef611` | Religione Cattolica (7 unit) |
| CML-188 | `cb5ffc9` | Latino LEL (4 unit) |

Nota: gli hash differiscono da quelli locali originali per il rebase su `aff6f09` (PR#3 ecc-tools) durante CML-189.

## 4. Discipline normalizzate (14/14)

| # | Disciplina | File |
|---|---|---|
| 1 | Tecnologia | `tecnologia.normalized.json` |
| 2 | Italiano | `italiano.normalized.json` |
| 3 | Matematica | `matematica.normalized.json` |
| 4 | Scienze | `scienze.normalized.json` |
| 5 | Storia | `storia.normalized.json` |
| 6 | Geografia | `geografia.normalized.json` |
| 7 | Inglese | `inglese.normalized.json` |
| 8 | Educazione Civica | `educazione-civica.normalized.json` |
| 9 | Arte e Immagine | `arte-immagine.normalized.json` |
| 10 | Musica | `musica.normalized.json` |
| 11 | Educazione Fisica | `educazione-fisica.normalized.json` |
| 12 | Seconda Lingua Comunitaria | `seconda-lingua-comunitaria.normalized.json` |
| 13 | Religione Cattolica | `religione-cattolica.normalized.json` |
| 14 | Latino (LEL) | `latino-lel.normalized.json` |

## 5. Risultati validazione

| Indicatore | Valore |
|---|---|
| File totali | 14 |
| Unità totali | 142 |
| overallValid | true |
| Errori | 0 |
| Warning strutturali attesi | nucleo/nucleoFondante gap, ordini mancanti per discipline Secondaria-only |

## 6. Discipline nel runtime (11/14)

- **Presenti (11)**: Tecnologia, Italiano, Matematica, Scienze, Storia, Geografia, Inglese, Educazione Civica, Arte e Immagine, Musica, Educazione Fisica
- **Mancanti (3)**: Seconda Lingua Comunitaria, Religione Cattolica, Latino LEL

## 7. Modifiche esterne (PR#3)

Il merge PR#3 (`ecc-tools/curmanlight-1782164451663`, commit `aff6f09`) ha aggiunto:
- `.agents/skills/curmanlight/` — skill e configurazioni agente
- `.claude/ecc-tools.json`, `.claude/homunculus/`, `.claude/identity.json`, `.claude/skills/curmanlight/`
- `.codex/` — AGENTS.md, agent .toml, config.toml

Nessuna modifica a runtime, curriculum, tools, o dati di progetto.

## 8. Raccomandazione

**Prossimo ciclo**: CML-191 dovrà selezionare formalmente una delle seguenti opzioni:
- **A**: runtime integration — completare mappa per le 3 discipline mancanti
- **B**: design/UML documentation — architettura, flussi, componenti
- **C**: evidenze/UDA workflow — workflow di validazione e approvazione
- **D**: export/import e schema `.cml` hardening
- **E**: SchoolKB — knowledge base documentale

Raccomandazione personale: **A** (runtime integration) per completare la copertura della mappa prima di procedere con cicli più speculativi.

## 9. Verdetto

`CML_190_NORMALIZED_DATA_14_14_COMPLETION_AUDIT_READY`
