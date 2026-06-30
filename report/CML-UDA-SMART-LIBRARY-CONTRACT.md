# CML-UDA-SMART-LIBRARY-CONTRACT

## Sintesi
Contratto funzionale e dati per la futura libreria UDA smart. Specifica come generare, salvare, consultare, filtrare ed esportare bozze UDA derivate dalla programmazione annuale. Definisce schema dati, chiave locale, vincoli privacy e roadmap.

## File Modificati
- `docs/03_execution/CML-UDA-SMART-LIBRARY-CONTRACT.md`
- `report/CML-UDA-SMART-LIBRARY-CONTRACT.md`
- `docs/REPO-MOVELOG.md`

## Chiave Locale Futura Proposta
- **`cml_uda_smart_library_v1`** — array JSON di bozze UDA smart
- Indipendente da `cml_annual_planning_draft_v1` (esistente)
- Futura interazione read-only con programmazione annuale

## Contratto Dati UDA Smart (minimo)

```json
{
  "id": "uda_<slug>",
  "tipo": "uda_draft",
  "titolo": "string",
  "disciplina": "string",
  "ordine": "Infanzia|Primaria|Secondaria",
  "classe": "string|null",
  "annoScolastico": "string",
  "periodo": "string",
  "nuclei": ["string"],
  "unitaCollegate": ["string"],
  "evidenzeSelezionate": ["ev_id"],
  "obiettivoApprendimento": "string",
  "attivitaSintesi": "string",
  "criteriValutazione": ["string"],
  "durataOre": "number|null",
  "stato": "bozza|in_revisione|pronta_per_confronto|validata|archiviato",
  "autore": "string|null",
  "timestampCreazione": "ISO8601",
  "timestampModifica": "ISO8601|null",
  "fonteCurricolo": "string",
  "fonteProgrammazioneAnnuale": "string",
  "noteDocente": "string",
  "privacyNotice": "string",
  "esportabile": true|false
}
```

## Stati
- `bozza`
- `in_revisione`
- `pronta_per_confronto`
- `validata`
- `archiviato`

## Funzioni Future da Contrattualizzare
- `createNewUda`, `buildUdaFromAnnualPlan`
- `filterUdaByCriteria` (disciplina, ordine, classe, periodo, stato)
- `previewUda`, `copyUdaMarkdown`, `downloadUdaMarkdown`
- `saveUdaToLibrary`, `deleteUdaFromLibrary`, `clearUdaLibrary`
- `loadUdaLibrary`, `exportUdaToMarkdown`

## Privacy e Sicurezza
- **Nessun** dato personale di studenti
- **Nessun** nome/cognome/voto/bisogni educativi
- **Solo** descrittori operativi generici
- **Validazione** professionale obbligatoria
- **Salvataggio** solo locale (localStorage)
- **Nessuna** trasmissione online

## Integrazione Export/Import
- Schema `.cml` **non alterato**
- Export/import esistenti **non alterati**
- UDA smart = output locale/testuale
- Eventuale `.cml` = slice separata futura

## Roadmap Prossima
1. `CML-UDA-SMART-LIBRARY-CONTRACT` (docs-only, current)
2. `CML-UDA-SMART-LIBRARY-RUNTIME-SCAFFOLD`
3. `CML-UDA-SMART-DRAFT-GENERATOR`
4. `CML-UDA-SMART-MARKDOWN-EXPORT`
5. `CML-UDA-SMART-LIBRARY-FILTERS`
6. `CML-UDA-SMART-CML-SCHEMA-RESEARCH` (se necessario)

## Controlli Eseguiti
- `git status --short --branch` — clean
- `git diff --name-only` — solo file docs/report
- `git diff --check` — clean
- Secret scan — clean
- Validator curriculum — PASS (14/14)
- Shape test runtime — PASS (14/14)
- Runtime non modificato