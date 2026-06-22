# CML-060A — AUDIT_SCRIPT_HARDENING_AND_RESULT_RECORD

## Obiettivo
Rafforzare lo script `tools/audit-cml-curriculum-coverage.mjs` dopo la prima esecuzione reale, correggendo duplicazioni e aggiungendo controlli di coerenza, senza modificare il runtime CML.

## Esito prima esecuzione
Script eseguito con successo. Output JSON completo registrato in `report/CML-060A_audit_script_hardening_and_result_record.md`.

## Correzioni applicate allo script
1. Deduplicazione `metaDisciplines`: introdotto `metaDisciplineRawCount`, `metaDisciplineUniqueCount`, `duplicatedMetaDisciplines`. Tutte le 14 discipline principali risultano duplicate nel blocco `DISCIPLINE_META`.
2. Controllo coerenza `totaleVoci` vs somma stati: aggiunti `statusTotal` e `statusMatchesTotal` per ogni disciplina.
3. Array globale `consistencyWarnings`: riporta discipline con `statusTotal !== totaleVoci`.
4. Refuso corretto: `conoscenzee abilità` → `conoscenze e abilità`.
5. Funzione `countIn` resa robusta per regex non globali.

## Principali evidenze
- Discipline presenti: 14.
- `metadataOnlyDisciplines`: vuoto.
- `dataWithoutMetadata`: vuoto.
- Latino (LEL) e Seconda Lingua Comunitaria presenti solo su Secondaria.
- Nessuna disciplina ha campi strutturati sistematici: `ambito`, `competenza`, `conoscenze`, `abilita`.
- Densità UI: `buttonTags=88`, `inlineOnclick=94`, `exportButtons=25`, `protectedActions=5`, `tabs=27`, `mobileBottomBar=true`.
- Warning residuo: Religione Cattolica ha `totaleVoci=4` e `statusTotal=5`.

## Note
- Runtime non modificato.
- CML-058 non committato.
- Nessun deploy eseguito.

## Verdetto
`CML_060A_AUDIT_SCRIPT_HARDENING_AND_RESULT_RECORD_READY`
