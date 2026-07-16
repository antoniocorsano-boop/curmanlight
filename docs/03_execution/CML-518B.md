# CML-518B — Full App Audit

## Obiettivo

Eseguire un audit trasversale dell’intera applicazione CurManLight, non limitato alle roadmap, e produrre un report visuale unico.

## Baseline

- `main`: `e3c02cbcf5f3de90fc3f1f1b7f80b7607a6d9b53`
- baseline evolutiva: `curman-react/`
- runtime storico: fallback stabile
- dati canonici: invariati

## Dimensioni analizzate

- prodotto e architettura;
- dati curricolari;
- flussi Docente, Dipartimento e Referente;
- progettazione didattica;
- UX e orientamento;
- accessibilità;
- mobile;
- persistenza, archivio, backup e restore;
- contratti `.cml`;
- sicurezza e privacy locale;
- qualità e test;
- distribuzione;
- governance e documentazione;
- pilot umano.

## Output

- `docs/02_system/FULL-APP-AUDIT-VISUAL-REPORT.md`
- `report/CML-518B-full-app-audit-dashboard.svg`
- `docs/03_execution/CML-518B.md`

## Esito sintetico

- P0 noti: 0
- P1: 5
- aree solide tecnicamente: 10
- aree parziali/da validare: 7
- aree mancanti o bloccanti: 2

## P1

1. pilot umano non ancora eseguito;
2. audit accessibilità completo non chiuso;
3. URL React pubblico stabile non formalizzato;
4. conflitti e duplicati Dipartimento parziali;
5. consolidamento istituzionale Referente mancante.

## Confini

- docs/report only;
- nessuna modifica al runtime storico;
- nessuna modifica al codice React;
- nessuna modifica ai dati canonici;
- nessun backend o telemetria;
- nessun merge o deploy.

## Verdetto

`CML_518B_FULL_APP_AUDIT_VISUAL_REPORT_READY_REMOTE_NOT_MERGED_NO_RUNTIME_OR_CANONICAL_CHANGE`
