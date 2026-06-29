# CML-183 - Educazione Fisica Limited Draft Data Prep

Data: 2026-06-27

## 1. Scopo

Creare il file normalizzato di Educazione Fisica come bozza limitata e prudente, autorizzata da CML-182B (`LIMITED_DRAFT_DATA_PREP_ALLOWED`). La bozza e marcata come da validare, non approvata, non integrata nel runtime.

## 2. Baseline tecnica

| Parametro               | Valore                                       |
| ----------------------- | -------------------------------------------- |
| Root Git                | `C:\Users\anton\CurManLight`                 |
| Branch                  | `main`                                       |
| Commit iniziale         | `bbd41c0` (allineato con `origin/main`)      |
| Working tree iniziale   | pulito                                       |
| Dati normalizzati prima | 10/14                                        |
| Runtime mappa           | 10/14                                        |
| Shape test              | 10/10 PASS                                   |
| Skill usate             | `cml-readiness-audit`, `cml-docs-only-slice` |

## 3. Collegamento con CML-178/179/180/182B

- CML-178: detailed gap model — disciplina non pronta per data-prep.
- CML-179: gap-fill manuale — 5 nuclei proposti, progressione Secondaria I/II/III, obiettivi/traguardi provvisori, lessico controllato.
- CML-180: `HUMAN_VALIDATION_REQUIRED_BEFORE_DATA_PREP` — validazione umana richiesta.
- CML-182: `VALIDATION_OUTCOME_PENDING` — troppo prudente.
- CML-182B: `LIMITED_DRAFT_DATA_PREP_ALLOWED` — bozza autorizzata come draft prudente; approvazione finale resta umana.

## 4. Decisione autorizzativa CML-182B

`LIMITED_DRAFT_DATA_PREP_ALLOWED` autorizza:

- creazione del JSON normalizzato come bozza;
- `humanValidationRequired: true` su ogni unita;
- stato non approvato;
- assenza di runtime integration automatica.

## 5. Metodo di costruzione JSON

1. Lettura dei JSON esistenti in `content/curriculum/` per copiare schema, campi e convenzioni.
2. Lettura del validatore in `tools/` per vincoli schema obbligatori.
3. Contenuti basati esclusivamente su CML-179 (gap-fill manuale).
4. 5 nuclei: Corpo e percezione, Abilita motorie, Gioco e sport, Salute e benessere, Espressione e inclusione.
5. 3 ordini obbligatori: Infanzia, Primaria, Secondaria.
6. Secondaria I/II/III dettagliata da CML-179.
7. Infanzia e Primaria come copertura generica, da integrare dopo validazione.
8. Lessico controllato: nessun termine sanitario, performativo, discriminatorio.

## 6. Pattern schema osservato nei JSON esistenti

- `schemaVersion: "cml-normalized-curriculum-v1"`
- `disciplina`, `stato`, `readiness`, `humanValidationRequired`, `source`, `metaDiscipline`
- `unitaApprendimento` array con campi: id, disciplina, ordine, classe, fascia, nucleo, ambito, competenza, traguardo, obiettivi, conoscenze, abilita, evidenze, criteriValutazione, fonte, stato, validazioneUmana, noteDipartimento
- `validazioneUmana: true` su ogni unita (richiesto dal validatore)
- `stato: "nuovo"` su ogni unita
- ID pattern: `ef_inf_5_001`, `ef_pri_1_001`, ..., `ef_sec_3_001`

## 7. File creato

`content/curriculum/educazione-fisica.normalized.json`

## 8. Nuclei inseriti

| Nucleo                   | Ordini coperti                     |
| ------------------------ | ---------------------------------- |
| Corpo e percezione       | Infanzia, Primaria 1, Secondaria 1 |
| Abilita motorie          | Primaria 3                         |
| Gioco e sport            | Primaria 5, Secondaria 2           |
| Espressione e inclusione | Secondaria 3                       |

Nota: il nucleo "Salute e benessere" non ha una unita dedicata autonoma; i relativi contenuti sono distribuiti nelle unita di Gioco e sport (Secondaria 2, area benessere scolastico) ed Espressione e inclusione (Secondaria 3, area benessere personale). Questo riflette la natura trasversale del tema e la cautela lessicale richiesta da CML-179.

## 9. Progressione I / II / III

| Classe         | Nucleo                   | Focus                                                         |
| -------------- | ------------------------ | ------------------------------------------------------------- |
| Secondaria I   | Corpo e percezione       | Regole, schemi motori, coordinazione, sicurezza               |
| Secondaria II  | Gioco e sport            | Consolidamento, collaborazione, ruoli, fair play              |
| Secondaria III | Espressione e inclusione | Autonomia, responsabilita, espressione, benessere, inclusione |

## 10. Marcatori di validazione umana

- `humanValidationRequired: true` a livello di file.
- `validazioneUmana: true` su ogni unita (requisito validatore).
- `stato: "bozza_generabile"` (non approvato).
- `stato: "nuovo"` su ogni unita.
- `noteDipartimento` su ogni unita: indica fonte CML-179/CML-183 e natura di draft.
- Nessuna marcatura di approvazione finale.
- Nessun campo che suggerisca validazione gia avvenuta.

## 11. Limiti della bozza

- Infanzia e Primaria hanno copertura minimale (1 unita ogni 1-2 classi).
- Non copre tutte le classi Primaria (solo 1, 3, 5).
- Non ha conoscenze/abilita/evidenze validate da docente/dipartimento.
- I contenuti di salute, sicurezza e inclusione sono formulati in modo prudenziale.
- Le attivita sportive non sono specificate (da definire con dipartimento).
- La progressione Infanzia-Primaria-Secondaria non e completa.

## 12. Cosa non e stato fatto

- Runtime integration: non eseguita.
- Modifica a `_published_snapshot/netlify-current/index.html`: non eseguita.
- Modifica a `tools/`: non eseguita.
- Modifica a `.claude/`: non eseguita.
- Modifica a `CLAUDE.md`: non eseguita.
- Modifica a SchoolKB: non eseguita.
- Approvazione finale: non dichiarata.
- Push: non eseguito.
- Deploy: non eseguito.

## 13. Validazione JSON

Eseguito con `node tools/validate-cml-normalized-curriculum.mjs`:

- totalFiles: 11 (10 + Educazione Fisica)
- totalUnits: 125 (118 + 7)
- overallValid: true
- invalidCount: 0
- Educazione Fisica: valid, 7 units, 3 orders, 0 errors

## 14. Shape test runtime

Eseguito con `node tools/test-runtime-mappa-dati-shape.mjs`:

- 10/10 PASS
- Runtime mappa invariato: 10/14
- Educazione Fisica non integrata

## 15. Rischi residui

| Rischio       | Livello | Note                                                                      |
| ------------- | ------- | ------------------------------------------------------------------------- |
| Dati          | Medio   | Bozza non validata, ma marcata come tale                                  |
| Istituzionale | Medio   | Salute/sicurezza/inclusione formulate in modo prudenziale ma non validate |

## 16. Invarianti rispettate

- data-prep limitata
- `educazione-fisica.normalized.json` creato
- `humanValidationRequired: true` presente
- nessuna runtime integration
- runtime invariato (10/14)
- nessuna modifica a `_published_snapshot/netlify-current/index.html`
- root `index.html` invariato
- nessuna modifica a `tools/`
- nessuna modifica `.claude/`
- nessuna modifica `CLAUDE.md`
- schema `.cml` invariato
- export/import invariati
- funzioni evidenze/UDA invariate
- SchoolKB invariato
- nessuna credenziale/client ID/token
- nessuna dipendenza
- nessun deploy
- nessun push

## 17. Raccomandazione finale

Prossima slice consigliata: **CML-184 — EDUCAZIONE_FISICA_RUNTIME_MAPPA_INTEGRATION** (dopo validazione) oppure passare alla prossima disciplina residua (Seconda Lingua Comunitaria, Religione Cattolica, Latino LEL).

## 18. Verdetto finale

`CML_183_EDUCAZIONE_FISICA_LIMITED_DRAFT_DATA_PREP_READY`
