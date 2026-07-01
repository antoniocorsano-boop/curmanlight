# CML-UX-NON-TECHNICAL-MICROCOPY-RUNTIME-REMEDIATION-PLAN

## Sintesi esecutiva
Piano docs-only completato per guidare una futura remediation runtime del microcopy senza cambiare logica, schema, storage o funzionalita.

Stato preflight:
- branch `main` allineato in forma `ahead 1`;
- commit locale audit `ca1390c` confermato non pushato su `origin/main` (`83084c4`).

Decisione:
- procedere con una prossima slice runtime limitata al testo visibile in UI, secondo priorita P0/P1/P2.

## Tabella interventi principali
| Area | Severita | Intervento | Nuovo orientamento linguistico | Criterio di accettazione |
|---|---|---|---|---|
| Programmazione privacy | P0 | nascondere chiavi interne e schema/storage | bozza salvata sul dispositivo, documento ufficiale invariato | nessuna chiave tecnica visibile |
| Libreria UDA privacy | P0 | rimuovere riferimenti cml_* | bozze solo su questo dispositivo | nessun identificatore tecnico in UI |
| Home micro-guida | P1 | rinomina export .cml | scarica file di lavoro CurManLight | compito chiaro senza estensione tecnica |
| Processo dipartimento/referente | P1/P2 | da Importa a Carica | carica proposte/esiti ricevuti | flusso comprensibile a primo uso |
| UDA/Revisione/Esportazioni | P1 | sostituire Markdown/Export | testo modificabile/scarica documento | riduzione carico cognitivo lessicale |
| Guida e badge | P2 | read-only/prototipo -> termini scolastici | sola consultazione/versione di prova | coerenza tono UI |

## Elenco testi da sostituire
- Import/Importa
- Export/Esporta
- File .cml
- Markdown
- Bozza locale
- Validazione (con distinzione ruolo-specifica)
- Read-only

## Elenco testi da nascondere
- chiavi storage `cml_*_v1`
- riferimenti diretti a schema e dettagli implementativi
- dettagli diagnostici o infrastrutturali in superficie utente

## Elenco testi da spostare nei report tecnici
- JSON, schema, runtime, hash, storage, localStorage, endpoint, payload, adapter, fallback
- validator, shape test, commit, branch, deploy, smoke test

## Rischi residui
- regressione semantica se la sostituzione linguistica altera il significato operativo.
- regressione UX mobile se etichette piu lunghe rompono allineamenti.
- regressione funzionale indiretta se vengono toccati handler anziche sole stringhe.
- incongruenze terminologiche tra tab diversi se la remediation non e completa.

## Criteri di accettazione per la futura runtime remediation
1. Solo microcopy aggiornato, nessuna nuova funzionalita.
2. Nessun cambiamento di logica dati/schema/storage/import-export interno.
3. Nessun termine tecnico in UI ordinaria salvo casi strettamente necessari e contestualizzati.
4. Flussi Home, Programmazione, Libreria UDA, Dipartimento, Referente, Esportazioni invariati funzionalmente.
5. Smoke test minimo completato con esito positivo.

## Raccomandazione operativa finale
Eseguire la prossima slice runtime come microfix testuale a perimetro chiuso:
- priorita P0 poi P1, infine P2;
- sostituzione centralizzata del lessico tecnico con tassonomia scolastica concordata;
- verifica finale con smoke funzionale e lessicale;
- nessun push automatico.

## Verdict
CML_UX_NON_TECHNICAL_MICROCOPY_RUNTIME_REMEDIATION_PLAN_READY_LOCAL_NOT_PUSHED
