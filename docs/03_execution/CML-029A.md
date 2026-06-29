# CML-029A — School Handoff Package Readability and Use Smoke

## Stato

Micro-validazione documentale del pacchetto handoff scuola. 4 profili simulati. Docs-only.

## Preflight

| Controllo          | Esito                                                          |
| ------------------ | -------------------------------------------------------------- |
| HEAD partenza      | `64f7c9c` — docs: add CML school handoff package ✅            |
| Working tree       | Pulita (solo untracked: `.kilo/`, `CLAUDE.md`, `MEMORY.md`) ✅ |
| MEMORY.md presente | ✅ (non committato)                                            |
| git diff --check   | Nessun whitespace error ✅                                     |
| Runtime modificato | ❌ Nessuno                                                     |

## Profili verificati

### A — Dirigente Scolastico (CML_PRESENTAZIONE_DS.md)

| Controllo                        | Esito                                                                                                                                            |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| Finalità dello strumento         | ✅ "aiuta l'istituto a gestire il lavoro di aggiornamento del curricolo verticale"                                                               |
| Vantaggio organizzativo          | ✅ "Senza uno strumento comune è difficile: raccogliere proposte, conservare esiti, produrre report, mantenere traccia"                          |
| Limiti istituzionali             | ✅ "Non produce verbali, delibere o atti amministrativi"                                                                                         |
| Assenza automatismi deliberativi | ✅ "offre un formato comune e una sequenza chiara di passaggi, lasciando a ciascun organo la responsabilità della discussione e della decisione" |
| Ruolo organi collegiali          | ✅ "L'esito finale passa agli organi competenti per la delibera"                                                                                 |

### B — Docente (CML_NOTA_COLLEGIO_DOCENTI.md + CML_GUIDA_RAPIDA_UTENTE.md)

| Controllo                         | Esito                                                                             |
| --------------------------------- | --------------------------------------------------------------------------------- |
| Cosa deve fare                    | ✅ 5 passaggi chiari: aprire, selezionare, indicare modifiche, scaricare, inviare |
| Quale file produrre               | ✅ "Scaricare il file .cml della propria proposta"                                |
| Nessun dato personale             | ✅ (esplicito nella guida e vademecum; implicito nella nota)                      |
| Proposta come materiale di lavoro | ✅ "strumento di supporto che aiuta a organizzare il materiale di lavoro"         |

### C — Coordinatore di dipartimento (CML_VADEMECUM_DIPARTIMENTI.md)

| Controllo                                                           | Esito                                                               |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| Come raccogliere proposte                                           | ✅ 5 passi operativi (raccolta, import, discussione, export, invio) |
| Come gestire esiti                                                  | ✅ Tabella con 4 esiti + menu a tendina                             |
| Distinguere proposta confluita, riformulata, assorbita, da chiarire | ✅ Ogni esito ha definizione univoca                                |
| Quale file inviare al referente                                     | ✅ "Il file .cml con l'esito va inviato al referente curricolo"     |

### D — Referente curricolo (CML_SCHEDA_REFERENTE_CURRICOLO.md)

| Controllo                 | Esito                                                                        |
| ------------------------- | ---------------------------------------------------------------------------- |
| Come importare gli esiti  | ✅ 4 passaggi: aprire, modalità referente, importa .cml, verifica riepilogo  |
| Come leggere il riepilogo | ✅ "Le voci contrassegnate con l'indicatore ✏️ sono proposte personalizzate" |
| Come generare il report   | ✅ "Usare il pulsante 'Genera report gruppo di lavoro'"                      |
| Uso prudente del report   | ✅ "Il report generato da CurManLight non è un atto deliberativo"            |

## Controlli trasversali

| Controllo                                                    | Esito                     |
| ------------------------------------------------------------ | ------------------------- |
| Linguaggio istituzionale ma non burocratico                  | ✅                        |
| Testi brevi e operativi                                      | ✅ (48-62 righe ciascuno) |
| Nessun tecnicismo inutile                                    | ✅                        |
| Nessun riferimento a commit, branch, codice, CLI, repository | ✅                        |
| Nessuna funzionalità non presente nella versione live        | ✅                        |
| Nessuna falsa approvazione automatica                        | ✅                        |
| Nessun invito a inserire dati personali o sensibili          | ✅                        |
| Coerenza con URL live                                        | ✅                        |
| Coerenza tra guida rapida e pacchetto scuola                 | ✅                        |

## Micro-correzioni applicate

| #   | File                      | Correzione                                      |
| --- | ------------------------- | ----------------------------------------------- |
| 1   | `CML_PRESENTAZIONE_DS.md` | "Raccolglie" → "Raccoglie" (refuso ortografico) |

## Verdetto

```
CML_029A_SCHOOL_HANDOFF_PACKAGE_READABILITY_AND_USE_SMOKE_READY
```

## Raccomandazione prossima slice

Pacchetto handoff scuola verificato su 4 profili.
Prossimo step possibile: CML-030 selection audit per scegliere tra onboarding (A), guida contestuale (B), archivio file (E) o altro.
