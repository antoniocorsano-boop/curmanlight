# CML-027A — User Handoff Guide Real Readability Smoke

## Stato

Smoke audit di leggibilità e coerenza della guida rapida utente per il flusso live. Docs-only. Micro-correzioni applicate. Nessuna modifica runtime. Nessun deploy.

## Preflight

| Controllo          | Esito                                                          |
| ------------------ | -------------------------------------------------------------- |
| HEAD               | `ba175f8` — docs: add live workflow user handoff guide ✅      |
| Branch             | `cml-008r-fix-markdown-decision-summary` ✅                    |
| Working tree       | Pulita (solo untracked: `.kilo/`, `CLAUDE.md`, `MEMORY.md`) ✅ |
| MEMORY.md presente | ✅ (non committato)                                            |
| git diff --check   | Nessun whitespace error ✅                                     |
| Runtime modificato | ❌ Nessuno                                                     |

## Audit leggibilità

| Criterio                                                               | Esito |
| ---------------------------------------------------------------------- | ----- |
| Il lettore capisce entro le prime righe che cosa fa CurManLight        | ✅    |
| Il lettore capisce che produce materiali di lavoro, non atti approvati | ✅    |
| Ruoli distinti (docente, dipartimento, referente)                      | ✅    |
| Flusso operativo comprensibile senza conoscere il progetto             | ✅    |
| Lessico scolastico, non tecnico                                        | ✅    |
| Nessun riferimento a commit, slice, codice, CLI, repository            | ✅    |
| Nessuna funzionalità inesistente citata                                | ✅    |
| Non induce a inserire dati personali o sensibili                       | ✅    |
| Avvertenze istituzionali chiare ma non eccessive                       | ✅    |
| Problemi frequenti utili e concreti                                    | ✅    |

## Micro-test tre profili

### Docente

| Controllo                           | Esito                                                           |
| ----------------------------------- | --------------------------------------------------------------- |
| Capisce da dove partire             | ✅ (https://curmanlight.netlify.app → Revisione per disciplina) |
| Capisce quale file scaricare        | ✅ (`proposta_docente_Disciplina_YYYY-MM-DD.cml`)               |
| Capisce quale output produce        | ✅ (proposta personale .cml)                                    |
| Capisce che serve validazione umana | ✅ (avvertenze istituzionali)                                   |
| Istruzioni non ambigue              | ✅                                                              |

### Coordinatore di dipartimento

| Controllo                              | Esito                                    |
| -------------------------------------- | ---------------------------------------- |
| Capisce da dove partire                | ✅ (sezione Validazione dipartimentale)  |
| Capisce quale file importare/scaricare | ✅ (`esito_dipartimento_YYYY-MM-DD.cml`) |
| Capisce quale output produce           | ✅ (esito dipartimentale .cml)           |
| Capisce che serve validazione umana    | ✅                                       |
| Istruzioni non ambigue                 | ✅                                       |

### Referente curricolo

| Controllo                              | Esito                                          |
| -------------------------------------- | ---------------------------------------------- |
| Capisce da dove partire                | ✅ (sezione Verifica referente curricolo)      |
| Capisce quale file importare/scaricare | ✅ (esiti dipartimentali .cml → report gruppo) |
| Capisce quale output produce           | ✅ (`report_gruppo_curricolo_YYYY-MM-DD.md`)   |
| Capisce che serve validazione umana    | ✅                                             |
| Istruzioni non ambigue                 | ✅                                             |

## Micro-correzioni applicate

| #   | Correzione                                                   | Ragione                                                                    |
| --- | ------------------------------------------------------------ | -------------------------------------------------------------------------- |
| 1   | "referente di dipartimento" → "coordinatore di dipartimento" | Evita confusione con "referente curricolo" (ruolo diverso)                 |
| 2   | Aggiunto nome file esito dipartimentale nella sezione 5      | Coerenza con le altre sezioni (docente e referente mostravano il filename) |
| 3   | Aggiunto FAQ "Ho perso il file scaricato"                    | Scenario reale frequente non coperto                                       |

## Verdetto

```
CML_027A_USER_HANDOFF_GUIDE_REAL_READABILITY_SMOKE_READY
```

## Output finale

| Campo              | Valore                                                                                                                                                                                                           |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Verdetto           | `CML_027A_USER_HANDOFF_GUIDE_REAL_READABILITY_SMOKE_READY`                                                                                                                                                       |
| Branch             | `cml-008r-fix-markdown-decision-summary`                                                                                                                                                                         |
| Commit partenza    | `ba175f8` — docs: add live workflow user handoff guide                                                                                                                                                           |
| Nuovo commit       | `HEAD` (dopo commit docs)                                                                                                                                                                                        |
| File modificati    | `docs/04_user/CML_GUIDA_RAPIDA_UTENTE.md` (micro-corretto), `docs/03_execution/CML-027A.md` (nuovo), `report/CML-027A_user_handoff_guide_real_readability_smoke.md` (nuovo), `docs/REPO-MOVELOG.md` (modificato) |
| MEMORY.md          | Presente come untracked — non committato ✅                                                                                                                                                                      |
| Docs-only          | ✅                                                                                                                                                                                                               |
| Runtime modificato | ❌ Nessuno                                                                                                                                                                                                       |
| Deploy             | ❌ Nessuno                                                                                                                                                                                                       |
| Working tree       | Pulita (untracked non pertinenti esclusi) ✅                                                                                                                                                                     |
| Raccomandazione    | **CML-028** — nuovo blocco funzionale. Guida utente verificata e micro-corretta, pronta per distribuzione ai referenti.                                                                                          |
