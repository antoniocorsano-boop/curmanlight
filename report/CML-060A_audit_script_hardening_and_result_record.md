# Report: CML-060A — AUDIT_SCRIPT_HARDENING_AND_RESULT_RECORD

## Dettagli esecuzione

- **Script**: `tools/audit-cml-curriculum-coverage.mjs`
- **Runtime analizzato**: `_published_snapshot/netlify-current/index.html`
- **Data**: 2026-06-22
- **Branch**: `cml-060-curriculum-coverage-ux-audit`

## Output sintetico audit

### Discipline

- `disciplineCount`: 14
- `metaDisciplineRawCount`: 28
- `metaDisciplineUniqueCount`: 14
- `duplicatedMetaDisciplines`: tutte le 14 discipline (ogni disciplina appare due volte nel blocco `DISCIPLINE_META`)
- `metadataOnlyDisciplines`: []
- `dataWithoutMetadata`: []

### Copertura curricolare

- Tutte le discipline hanno dati.
- Latino (LEL) e Seconda Lingua Comunitaria: presenti solo su Secondaria.
- Campi istituzionali (`ambito`, `competenza`, `conoscenze`, `abilita`): assenti su tutte le discipline.

### Densità UI

- `buttonTags`: 88
- `inlineOnclick`: 94
- `exportButtons`: 25
- `protectedActions`: 5
- `tabs`: 27
- `mobileBottomBar`: true

### Anomalie corrette

- Duplicati in `metaDisciplines`: gestiti con dedup e tracciamento raw/unique.
- Mancanza controllo coerenza tra `totaleVoci` e somma stati: aggiunto `statusTotal` e `statusMatchesTotal`.
- Refuso `conoscenzee abilità`: corretto in `conoscenze e abilità`.

### Warning residui

- **Religione Cattolica**: `totaleVoci=4`, `statusTotal=5`. Anomalia dichiarata in `consistencyWarnings`, non nascosta.

## Raccomandazioni

- **CML-061**: definire contratto dati curricolare normalizzato (`ambito`, `competenza`, `conoscenze`, `abilita`).
- **CML-062**: avviare disciplina pilota su Tecnologia per testare il contratto.
- **CML-063**: audit qualità UX per ridurre densità pulsanti e gerarchia azioni.

## Verdetto

`CML_060A_AUDIT_SCRIPT_HARDENING_AND_RESULT_RECORD_READY`
