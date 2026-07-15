# CML-MILANI-CROSSWALK — Audit curricolo d’istituto

## Obiettivo

Confrontare il curricolo verticale dell’I.C. Calvario-Covotta “don Lorenzo Milani” con i dati curricolari normalizzati di CurManLight, senza alterare il patrimonio canonico.

## Input

- `CURRICOLO_VERTICALE_COMPLETO_MILANI.md` fornito dall’utente;
- contratto dati React `CurriculumDisciplina` / `UnitaApprendimento`;
- baseline CurManLight: 14 discipline, 142 unità normalizzate, validazione strutturale completata.

## Output

Creato `report/CML_MILANI_CURRICULUM_CROSSWALK_AUDIT.md` con:

- confronto di copertura;
- matrice per tutte le 14 discipline;
- mapping dei campi Milani verso CurManLight;
- classificazione A-E;
- contenuti prioritari candidati;
- blocchi all’importazione automatica;
- criticità editoriali e documentali;
- processo di integrazione raccomandato.

## Decisioni

- CurManLight resta la base canonica operativa.
- Il documento Milani è una fonte d’istituto candidata.
- Nessuna etichetta `[APPROVATO 2025]` viene trasferita senza estremi verificabili di delibera.
- Nessun contenuto viene importato direttamente.
- Seconda Lingua Comunitaria e Latino/LEL non vengono estesi automaticamente a Infanzia e Primaria.
- IRC e attività alternative devono restare distinti.

## Impatto runtime

Nessuno.

## Impatto sui dati curricolari

Nessuno.

## Verdetto

`CML_MILANI_CROSSWALK_AUDIT_READY_FOR_REVIEW`
