# Report: CML-084 — DISCIPLINARY_CURRICULUM_COMPLETENESS_AND_APPROVAL_READINESS_AUDIT

## Audit dettagliato

### File ispezionati

| File                              | Percorso                                                            |
| --------------------------------- | ------------------------------------------------------------------- |
| index.html (DATA)                 | `_published_snapshot/netlify-current/index.html` (righe 1741-1888)  |
| index.html (TECNOLOGIA_NORM_DATA) | `_published_snapshot/netlify-current/index.html` (righe 1893-1907)  |
| index.html (UDA_MODELI)           | `_published_snapshot/netlify-current/index.html` (righe 1962-2006)  |
| Normalizzato                      | `content/curriculum/tecnologia.normalized.json`                     |
| Esempi CML                        | `docs/04_user/esempi_cml/esempio_esito_dipartimento_tecnologia.cml` |
| Esempi CML                        | `docs/04_user/esempi_cml/esempio_esito_dipartimento_italiano.cml`   |
| Esempi CML                        | `docs/04_user/esempi_cml/esempio_proposta_docente_tecnologia.cml`   |
| Esempi CML                        | `docs/04_user/esempi_cml/esempio_proposta_docente_italiano.cml`     |

### Discipline trovate

15 discipline in `DISCIPLINE_META` (riga 1723) + `DISCIPLINE` array (riga 1739):

1. Italiano
2. Matematica
3. Scienze
4. Tecnologia
5. Storia
6. Latino (LEL)
7. Geografia
8. Inglese
9. Seconda Lingua Comunitaria
10. Educazione Civica
11. Arte e Immagine
12. Musica
13. Educazione Fisica
14. Religione Cattolica

### File normalizzati trovati

1 solo file: `content/curriculum/tecnologia.normalized.json`

### Campi verificati per disciplina

#### LIVELLO BASE (DATA object — tutte le 15 discipline)

- `traguardi[]`: ✅ presente
  - Campi per traguardo: id, ordine, classe, testo, status, proposto, decisione, testoFinale
- `obiettivi[]`: ✅ presente (per la maggior parte)
  - Campi per obiettivo: id, ordine, classe, testo, status, proposto, decisione, testoFinale

#### LIVELLO NORMALIZZATO (TECNOLOGIA_NORM_DATA — solo Tecnologia)

- `unitaApprendimento[]`: ✅ 13 unità
- Campi per unità:
  - ✅ id
  - ✅ disciplina
  - ✅ ordine (Infanzia 2, Primaria 5, Secondaria 6)
  - ✅ classe o fascia
  - ✅ ambito (7 ambiti distinti)
  - ✅ competenza
  - ✅ traguardo
  - ✅ obiettivi (array)
  - ✅ conoscenze (array)
  - ✅ abilita (array)
  - ✅ evidenze (array)
  - ✅ criteriValutazione (array)
  - ✅ fonte
  - ✅ stato
  - ✅ validazioneUmana
  - ✅ noteDipartimento

#### LIVELLO UDA (UDA_MODELI — solo Tecnologia)

- 2 modelli UDA: "Cittadini digitali responsabili", "Dal computer al documento"
- Campi: id, titolo, disciplina, ordine, classe, durataIndicativa, competenzaRiferimento, traguardo, obiettivi, conoscenze, abilita, attivitaProposta, metodologia, materiali, evidenzeOsservabili, criteriValutazione, adattamentiInclusione, notaDocente, fonteCurricolare, validazioneUmana

### Esito per disciplina

| Disciplina          | Livello                                     | Unità normalizzate | Approvazione readiness              |
| ------------------- | ------------------------------------------- | ------------------ | ----------------------------------- |
| Tecnologia          | Completo (base + normalizzato + UDA + file) | 13                 | `bozza_generabile` / `in_revisione` |
| Italiano            | Base (solo traguardi + obiettivi)           | 0                  | `solo_consultazione`                |
| Matematica          | Base (solo traguardi + obiettivi)           | 0                  | `solo_consultazione`                |
| Scienze             | Base (solo traguardi + obiettivi)           | 0                  | `solo_consultazione`                |
| Storia              | Base (solo traguardi + obiettivi)           | 0                  | `solo_consultazione`                |
| Geografia           | Base (solo traguardi + obiettivi)           | 0                  | `solo_consultazione`                |
| Inglese             | Base (solo traguardi + obiettivi)           | 0                  | `solo_consultazione`                |
| Seconda Lingua      | Base (solo traguardi + obiettivi)           | 0                  | `solo_consultazione`                |
| Educazione Civica   | Base (solo traguardi + obiettivi)           | 0                  | `solo_consultazione`                |
| Arte e Immagine     | Base (solo traguardi + obiettivi)           | 0                  | `solo_consultazione`                |
| Musica              | Base (solo traguardi + obiettivi)           | 0                  | `solo_consultazione`                |
| Educazione Fisica   | Base (solo traguardi + obiettivi)           | 0                  | `solo_consultazione`                |
| Religione Cattolica | Base (solo traguardi + obiettivi)           | 0                  | `solo_consultazione`                |
| Latino (LEL)        | Base (solo traguardi + obiettivi)           | 0                  | `solo_consultazione`                |

### Rischio identificato

La UI mostra tutte le 15 discipline come equivalenti nella lista di consultazione. Senza questa audit, un utente potrebbe presupporre che tutte le discipline siano ugualmente pronte per generare bozze curricolari o entrare in flussi di approvazione. In realtà, solo Tecnologia ha una struttura normalizzata completa.

## Controlli

| Controllo                                  | Esito |
| ------------------------------------------ | ----- |
| Docs-only (nessun file runtime modificato) | PASS  |
| `git status --short --branch` clean        | PASS  |
| `git diff --check`                         | PASS  |
| Nessuna modifica a `index.html`            | PASS  |
| Nessuna modifica a `sw.js`                 | PASS  |
| Nessuna modifica a schema `.cml`           | PASS  |
| Nessuna modifica a export/import           | PASS  |
| Nessuna modifica a role-access             | PASS  |
| Nessuna nuova dipendenza                   | PASS  |
| Nessuna approvazione generata              | PASS  |
