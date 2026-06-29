# CML-132 — CML File Labels User-Facing Clarity Audit

## 1. Fotografia iniziale

| Parametro          | Valore                                           |
| ------------------ | ------------------------------------------------ |
| Branch             | `main`                                           |
| HEAD               | `8b9da1384e8a0242bafa3c519f0fd4d3fbe977eb`       |
| origin/main        | `8b9da1384e8a0242bafa3c519f0fd4d3fbe977eb`       |
| Working tree       | pulito (ahead 0)                                 |
| `git diff --check` | pulito                                           |
| Validatore         | 7 file, 94 unità, `overallValid: true`, 0 errori |
| Residui ignorati   | `.agents`, `skills-lock.json`, `Consultazione`   |

## 2. File analizzato

`_published_snapshot/netlify-current/index.html`

## 3. Totale occorrenze `.cml`

| Categoria                                                                     | Conteggio |
| ----------------------------------------------------------------------------- | :-------: |
| Totale `.cml` nel file                                                        |    27     |
| Tecniche (funzioni JS, attributi input, validazione, variabili, commenti CSS) |    18     |
| **Utente-facing**                                                             |   **9**   |

## 4. Classificazione per area

| #   | Area                     | Testo attuale                                                                                                                 | Contesto                 | Problema                                | Prio | Decisione                                                              |
| --- | ------------------------ | ----------------------------------------------------------------------------------------------------------------------------- | ------------------------ | --------------------------------------- | :--: | ---------------------------------------------------------------------- |
| 1   | Home microguide          | `Esporta il file <code>.cml</code> per il passaggio successivo.`                                                              | Passo 4 guida rapida     | Scopo didattico: spiega cosa cercare.   |  P3  | **Mantenere** — utile per riconoscere il file                          |
| 2   | Toolbar docente          | `⬇️ Scarica proposta .cml`                                                                                                    | Pulsante azione primaria | `.cml` nel label del pulsante — tecnico |  P1  | **Sostituire** → `⬇️ Scarica proposta`                                 |
| 3   | Toolbar note             | `Word avanzato: richiede rete. Copia/Markdown/PDF: sicuri. .cml: per Drive condiviso.`                                        | Nota sotto pulsanti      | `.cml` in descrizione tecnica           |  P2  | **Sostituire** → `...File proposta: per Drive condiviso.`              |
| 4   | Dipartimento descrizione | `Importa i file .cml ricevuti dai docenti per prepararli alla valutazione del dipartimento.`                                  | Istruzione pannello      | `.cml` descrittivo, sostituibile        |  P2  | **Sostituire** → `Importa i file proposta ricevuti dai docenti...`     |
| 5   | Dipartimento pulsante    | `Importa proposte docenti .cml`                                                                                               | Pulsante azione          | `.cml` nel label                        |  P1  | **Sostituire** → `Importa proposte docenti`                            |
| 6   | Referente descrizione    | `Importa gli esiti dipartimentali .cml per controllare completezza, evidenze e punti da chiarire prima del gruppo di lavoro.` | Istruzione pannello      | `.cml` descrittivo, sostituibile        |  P2  | **Sostituire** → `Importa gli esiti dipartimentali per controllare...` |
| 7   | Referente pulsante       | `Importa esiti dipartimentali .cml`                                                                                           | Pulsante azione          | `.cml` nel label                        |  P1  | **Sostituire** → `Importa esiti dipartimentali`                        |
| 8   | Riepilogo export         | `⬇️ Scarica proposta .cml`                                                                                                    | Pulsante (duplicato #2)  | Stesso problema #2                      |  P1  | **Sostituire** → `⬇️ Scarica proposta`                                 |
| 9   | Esito dipartimento (JS)  | `⬇️ Esporta esito dipartimento .cml`                                                                                          | Pulsante generato JS     | `.cml` nel label                        |  P1  | **Sostituire** → `⬇️ Esporta esito dipartimento`                       |

### Non problematici

- `⬆️ Invia al Drive condiviso` (2x: toolbar + riepilogo) — nessun `.cml`, OK
- `Word avanzato: richiede rete. Copia/Markdown/PDF: sicuri.` — già trattato in CML-131

## 5. Riepilogo priorità

| Priorità   | Conteggio | Descrizione                                 |
| ---------- | :-------: | ------------------------------------------- |
| P0         |     0     | Bloccante                                   |
| P1         |     5     | `.cml` in pulsanti/label azione             |
| P2         |     3     | `.cml` in descrizioni brevi ridondanti      |
| P3         |     1     | `.cml` nella microguida Home (da mantenere) |
| **Totale** |   **9**   |                                             |

## 6. Proposte di sostituzione

| #   | Testo attuale                                                    | Testo proposto                                        |
| --- | ---------------------------------------------------------------- | ----------------------------------------------------- |
| 1   | `Esporta il file <code>.cml</code> per il passaggio successivo.` | (mantenuto)                                           |
| 2   | `⬇️ Scarica proposta .cml` (toolbar)                             | `⬇️ Scarica proposta`                                 |
| 3   | `.cml: per Drive condiviso.`                                     | `File proposta: per Drive condiviso.`                 |
| 4   | `Importa i file .cml ricevuti dai docenti...`                    | `Importa i file proposta ricevuti dai docenti...`     |
| 5   | `Importa proposte docenti .cml`                                  | `Importa proposte docenti`                            |
| 6   | `Importa gli esiti dipartimentali .cml per controllare...`       | `Importa gli esiti dipartimentali per controllare...` |
| 7   | `Importa esiti dipartimentali .cml`                              | `Importa esiti dipartimentali`                        |
| 8   | `⬇️ Scarica proposta .cml` (riepilogo)                           | `⬇️ Scarica proposta`                                 |
| 9   | `⬇️ Esporta esito dipartimento .cml`                             | `⬇️ Esporta esito dipartimento`                       |

## 7. Opzioni valutate

### Opzione A — Nessuna modifica

Scartata. `.cml` in 5 pulsanti è troppo tecnico per docenti che non hanno familiarità con estensioni file.

### Opzione B — Pulizia soli pulsanti ✅* (parziale)

Sostituire `.cml` solo nei 5 pulsanti. Adeguato ma lascia incongruenza nelle descrizioni.

### Opzione C — Pulizia pulsanti + descrizioni brevi ✅ **(selezionata)**

Sostituire `.cml` in 5 pulsanti + 3 descrizioni. Mantenere nella microguida Home (scopo didattico). Massima coerenza.

### Opzione D — Rimozione quasi totale

Scartata. La microguida Home deve restare per insegnare agli utenti a riconoscere il file.

## 8. Opzione selezionata

**Opzione C** — Pulizia pulsanti + descrizioni brevi (8 sostituzioni, 1 mantenuta)

## 9. Perimetro raccomandato per CML-133

8 sostituzioni testuali in `_published_snapshot/netlify-current/index.html`:

| #   | Testo attuale                                              | Testo nuovo                                           | Linea |
| --- | ---------------------------------------------------------- | ----------------------------------------------------- | :---: |
| 1   | `⬇️ Scarica proposta .cml` (toolbar)                       | `⬇️ Scarica proposta`                                 | 1417  |
| 2   | `.cml: per Drive condiviso.`                               | `File proposta: per Drive condiviso.`                 | 1419  |
| 3   | `Importa i file .cml ricevuti dai docenti...`              | `Importa i file proposta ricevuti dai docenti...`     | 1431  |
| 4   | `Importa proposte docenti .cml`                            | `Importa proposte docenti`                            | 1434  |
| 5   | `Importa gli esiti dipartimentali .cml per controllare...` | `Importa gli esiti dipartimentali per controllare...` | 1442  |
| 6   | `Importa esiti dipartimentali .cml`                        | `Importa esiti dipartimentali`                        | 1445  |
| 7   | `⬇️ Scarica proposta .cml` (riepilogo)                     | `⬇️ Scarica proposta`                                 | 1492  |
| 8   | `⬇️ Esporta esito dipartimento .cml` (JS)                  | `⬇️ Esporta esito dipartimento`                       | 3607  |

**Esclusi da CML-133:**

- Home microguide `code>.cml</code>` — mantenuto (scopo didattico)
- `Invia al Drive condiviso` (2x) — nessun `.cml`, OK
- Attributi `accept=".cml"` negli input — tecnico, non visibile
- Nomi funzione JS, variabili, validazione — non visibili all'utente
- Toast/alert transitori — fuori perimetro UI persistente

## 10. Conferme

- **Nessun runtime modificato** in questa slice
- **Nessun JSON disciplinari, validator, schema `.cml`, import/export modificati**
- **Nessuna modifica a CSS, layout, icone o classi**
- **Nessuna introduzione di nuove funzioni o dipendenze**
- **Nessun push eseguito**

## 11. Verdetto

`CML_132_CML_FILE_LABELS_CLARITY_AUDIT_READY`

**Prossimo passo:** CML-133 — CML_FILE_LABELS_USER_FACING_RUNTIME_ALIGNMENT (8 sostituzioni testuali puntuali)
