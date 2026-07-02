# CML-265 VISIBLE TECHNICAL RESIDUALS FULL UI AUDIT — Report

## Sintesi esecutiva

Audit completo UI (statico + visibile) eseguito su runtime locale per intercettare residui tecnici percepibili dall'utente finale. Esito: nessun residuo del set critico CML-263, ma persistenza di codici `CML-xxx` in superficie Curriculum e alcune ambiguita lessicali operative.

## Stato tecnico di partenza

- Branch: `main`
- Allineamento: `main = origin/main`
- HEAD locale/remoto: `2e5b321`
- Working tree iniziale: pulito
- Nessun ahead residuo

## Metodo di ispezione

1. Static scan runtime (`rg`) su pattern tecnici/governance + pattern operativi.
2. Ispezione browser-visible read-only su tab principali, bottom navigation e 14 discipline.
3. Classificazione per priorita (P0-P3), tipo residuo e ruolo impattato.
4. Produzione backlog operativo in micro-slice.

## Superfici testate

- Home
- Curriculum
- Guida
- Processo
- Esportazioni
- Didattica
- Programmazione annuale
- UDA modello
- Revisione
- Mobile/bottom navigation
- Discipline 14/14 (incluso Latino/LEL)

## Matrice completa residui

| ID | Superficie | Testo/residuo rilevato | Evidenza | Visibile all'utente | Ruolo impattato | Tipo residuo | Priorita | Rischio | Proposta di sostituzione | Slice candidata | Note |
|---|---|---|---|---|---|---|---|---|---|---|---|
| R-001 | Curriculum (tutte discipline) | Codici `CML-xxx` in note disciplinari | browser-visible 14/14 | si | docente/dipartimento/referente/dirigente | codice CML visibile | P1 | Alto | descrizione operativa senza codice | CML-266 | residuo trasversale |
| R-002 | Curriculum Tecnologia | "Pacchetto pilota CML-062" in nota | snippet visibile | si | docente | governance interna visibile | P1 | Medio | "materiale pilota disciplinare" | CML-269 | coerente con cleanup CML-263 |
| R-003 | Curriculum Latino | badge `★NEW` | sidebar disciplina | si | docente/dirigente | naming interno | P2 | Medio | "Nuova sezione" contestuale | CML-268 | non bloccante |
| R-004 | Guida/Processo/Esportazioni | `.cml` presente ma non sempre esplicitato al primo contatto | superfici multiple | si | docente/dipartimento | formato file non spiegato | P2 | Medio | anticipare "file di lavoro CurManLight" al primo uso | CML-266 | accettabile ma migliorabile |
| R-005 | Esportazioni | "Report" come etichetta primaria in blocco azioni | tab Esportazioni | si | referente/dirigente | inglesismo tecnico | P2 | Basso | "Resoconto" come termine principale | CML-267 | non blocca uso |
| R-006 | Processo | import/esito/proposta concentrati nello stesso paragrafo | sezione intro | si | dipartimento/referente | gerarchia informativa | P2 | Basso | split in micro-step con etichetta ruolo | CML-268 | chiarezza incrementale |
| R-007 | Programmazione/UDA | "bozza" molto ricorrente senza distinzione stato uso | didattica programmazione/UDA | si | docente | esito non chiaro | P2 | Basso | legenda stati bozza/revisione/validata | CML-268 | no cambio logica |
| R-008 | Inglese | match `HEAD` in contenuto didattico | "Head Shoulders" | si | nessuno | falso positivo lessicale | P3 | Basso | nessuna azione runtime | n/a | non tecnico reale |
| R-009 | Educazione Fisica | match `schema` in "schema corporeo" | contenuto disciplinare | si | nessuno | falso positivo lessicale | P3 | Basso | nessuna azione runtime | n/a | non tecnico reale |
| R-010 | Static scan ampio | `JSON/storage/localStorage` nel codice interno | codice JS | no | nessuno | contenuto tecnico interno | n/a | n/a | nessuna azione UI | n/a | non superficie utente |

## Backlog operativo

Ordine consigliato:

1. R-001, R-002 (P1) — rimozione codici governance visibili in Curriculum
2. R-004, R-005 (P2) — lessico file/consegne e resoconti
3. R-006, R-007 (P2) — micro-gerarchia processo/stati

## Dizionario tecnico -> operativo aggiornato

- `.cml` -> file di lavoro CurManLight
- report -> resoconto
- import -> carica file di lavoro
- export -> scarica documento/file di lavoro
- bozza -> bozza di lavoro (non documento definitivo)
- esito -> esito condiviso di dipartimento

## Mappa ruoli impattati

- Docente: alto impatto su note disciplina e distinzione bozza/documento
- Dipartimento: medio-alto impatto su flusso proposta/esito
- Referente: medio impatto su report/documento finale
- Dirigente/staff: medio impatto percettivo da codici interni visibili

## Risultati validatore e shape test

- Validator curriculum: PASS (14/14)
- Shape test runtime: PASS (14/14)

## Limiti dell'audit

- Ispezione browser eseguita in locale; comportamento live puo differire temporaneamente per cache/CDN.
- Alcune occorrenze da scan statico sono state classificate non visibili o falsi positivi contestuali.

## Raccomandazioni

- Chiudere prima i residui P1 in micro-slice dedicata.
- Mantenere smoke futuri con copertura completa superfici e non solo set termini limitato.

## Roadmap (max 5 slice)

1. CML-266 — FILE AND DELIVERY LANGUAGE CLEANUP
2. CML-267 — EXPORT IMPORT OPERATIONAL NAMING CLEANUP
3. CML-268 — ROLE JOURNEY HOME DENSITY REDUCTION
4. CML-269 — DISCIPLINE CARD SOURCE LANGUAGE CLEANUP
5. CML-270 — FULL UI LANGUAGE LIVE SMOKE

## Cosa non fare

- No mega-slice runtime
- No refactor globale
- No modifiche a schema/storage/import-export logic

## Decisione finale

`RUNTIME_CLEANUP_REQUIRED_BEFORE_RELEASE`

## Checklist finale

- [x] repository preflight verified;
- [x] runtime inspected read-only;
- [x] live or browser-visible UI inspected;
- [x] Home inspected;
- [x] Curriculum inspected;
- [x] all 14 disciplines inspected or exception documented;
- [x] Guide inspected;
- [x] Process inspected;
- [x] Exports inspected;
- [x] UDA/Planning inspected;
- [x] empty/error states considered;
- [x] mobile/responsive considered;
- [x] visible technical residuals classified;
- [x] backlog produced;
- [x] validator executed;
- [x] shape test executed;
- [x] runtime unchanged;
- [x] no deploy executed;
- [x] no push executed;
- [x] verdict recorded;

## Verdict

`CML_265_VISIBLE_TECHNICAL_RESIDUALS_FULL_UI_AUDIT_READY_LOCAL_NOT_PUSHED`
