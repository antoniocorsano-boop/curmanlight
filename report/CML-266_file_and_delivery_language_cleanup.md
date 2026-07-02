# CML-266 — FILE AND DELIVERY LANGUAGE CLEANUP — Report

## Sintesi esecutiva

Runtime micro-slice controllata per bonificare il linguaggio visibile su file, consegne, fonti di lavoro e materiali disciplinari. Rimossi codici di governance embedded in dati curricolari e sostituiti termini tecnici non operativi con formulazioni scolastiche coerenti. Modifiche limitate a `index.html` e snapshot, senza alterare schema, storage, import/export, logica JS o struttura applicativa.

## Collegamento a CML-260 e CML-265

- CML-260: audit backlog linguaggio/UX che ha prodotto la roadmap di cleanup
- CML-265: full UI audit residui tecnici che ha classificato R-001, R-002, R-004, R-005 come priorità per CML-266
- CML-263: ha già bonificato i template Tecnologia (contratto dati CML-061 / Fonte: CML-061 / CML-062)

## Problemi P1/P2 affrontati

| Priorita | Rilievo | Descrizione |
|---|---|---|
| P1 | R-001 | Codici `CML-xxx` in note disciplinari embedded nel runtime |
| P1 | R-002 | Formula "Pacchetto pilota CML-062" in Tecnologia |
| P2 | R-004 | `.cml` non sempre esplicitato come file di lavoro CurManLight |
| P2 | R-005 | "Report" come etichetta primaria in alcuni contesti |

## Tabella modifiche

| Testo precedente | Nuovo testo | Area | Ruolo impattato | Motivo | Rischio |
|---|---|---|---|---|---|
| `"Pacchetto pilota CML-062, Infanzia 3-4 — Esplorazione sensoriale"` | `"Materiale di lavoro da verificare, Infanzia 3-4 — Esplorazione sensoriale"` | Tecnologia noteDipartimento | Docente | Rimuovere governance interna | Basso |
| `"CML-087 — Infanzia 3-4, nucleo Ascolto..."` (122 occorrenze multi-disciplina) | `"Materiale curricolare predisposto — Infanzia 3-4, nucleo Ascolto..."` | All noteDipartimento | Docente/Dipartimento | Rimuovere codice CML visibile | Basso |
| `"CML-179, CML-183, CML-210A — Infanzia fascia 5..."` (7 occorrenze Educazione Fisica) | `"Materiale curricolare predisposto — Infanzia fascia 5..."` | Educazione Fisica noteDipartimento | Docente | Rimuovere codici governance | Basso |
| `"Audit CML-157C e curriculum normalizzato Storia."` (5 occorrenze) | `"Curriculum normalizzato Storia."` | Storia fonte | Docente | Rimuovere codice audit interno | Basso |
| `"CML-061 normalized curriculum data contract"` | `"base di lavoro disciplinare già predisposta"` | Tecnologia source | Tutti | Sostituire riferimento governance | Basso |
| `prepara report e documento finale` | `prepara il documento di sintesi e il documento finale` | Processo / Referente | Referente | Lessico operativo | Basso |
| `Report, Documento finale` | `Documento di sintesi, Documento finale` | Esportazioni / Guida ruoli | Referente | Lessico operativo | Basso |
| `Report e resoconti` | `Documento di sintesi e resoconti` | Esportazioni / Guida | Referente | Lessico operativo | Basso |
| `consegna come file .cml` | `consegna come file di lavoro CurManLight .cml` | Processo | Docente | Chiarire formato file | Basso |
| `esporta come file .cml da Esportazioni` | `esporta come file di lavoro CurManLight .cml da Esportazioni` | Processo | Dipartimento | Chiarire formato file | Basso |
| `.cml proposta` (in role guide) | `file di lavoro CurManLight (.cml) proposta` | Esportazioni | Docente | Chiarire formato file | Basso |
| `.cml esito` (in role guide) | `file di lavoro CurManLight (.cml) esito` | Esportazioni | Dipartimento | Chiarire formato file | Basso |
| `importa file .cml` | `importa file di lavoro CurManLight .cml` | Guida / Processo | Dipartimento/Referente | Chiarire formato file | Basso |
| `# Report di lavoro per il gruppo curricolo` | `# Documento di sintesi per il gruppo curricolo` | Markdown report | Referente | Lessico operativo | Basso |

## Ricerche residui

- Pattern governance (`contratto dati`, `CML-061`, `CML-062`, `Fonte: CML`, `Pacchetto pilota CML-062`) nei due runtime: **zero occorrenze visibili residue** del caso target.
- Pattern nuovi testi (`Materiale di lavoro da verificare`, `Materiale curricolare predisposto`, `base di lavoro disciplinare`, `file di lavoro CurManLight`, `documento di sintesi`): presenti in entrambe le copie runtime.

## Controlli tecnici

- `git diff --numstat` root/snapshot: bilanciato (1570+1570 per file)
- `node tools/validate-cml-normalized-curriculum.mjs`: PASS (14/14)
- `node tools/test-runtime-mappa-dati-shape.mjs`: PASS (14/14)
- `git diff --check`: nessun errore whitespace/tab
- Post-fix search: zero occorrenze governative visibili residue
- Positive search: nuove formule operative confermate
- Root/snapshot: modifiche identiche, nessun disallineamento

## Smoke locale

- Home: accessibile
- Curriculum / Tecnologia: anteprima normativa visualizzabile, note dipartimento sanificate
- Curriculum / Italiano: consultabile
- Curriculum / Matematica: consultabile
- Discipline con note precedentemente contenenti CML-xxx: Educazione Fisica, Storia, Arte e Immagine — tutte sanificate
- Processo: testo flusso revisionato
- Esportazioni: role guide e blocchi confermati

## Rischi evitati

- Nessuna modifica a logica, schema, storage o import/export
- Nessuna regressione su navigazione discipline/tab
- Nessuna variazione layout o stati operativi
- Mantenuta validità struttura dati embedded (JSON object literal preservata)

## Cosa non è stato fatto

- Nessun refactor JavaScript
- Nessuna modifica a classi/ID/hook
- Nessun deploy
- Nessun push
- Nessuna modifica a `content/`, `tools/`, validatori, schema `.cml`

## Raccomandazione prossima slice

CML-267 — EXPORT IMPORT OPERATIONAL NAMING CLEANUP. Focus residui terminologia esportazioni/importazioni sebbene già quasi completamente allineati al lessico italiano.

## Checklist finale

- [x] repository preflight verified;
- [x] CML-265 backlog considered;
- [x] visible CML codes inspected;
- [x] discipline notes reviewed;
- [x] file/delivery language reviewed;
- [x] root runtime updated;
- [x] snapshot runtime updated;
- [x] visible CML codes removed or motivated;
- [x] `.cml` explained where needed;
- [x] validator executed;
- [x] shape test executed;
- [x] root/snapshot consistency checked;
- [x] schema .cml unchanged;
- [x] storage unchanged;
- [x] import/export data logic unchanged;
- [x] no deploy executed;
- [x] no push executed;
- [x] verdict recorded;

## Verdict

`CML_266_FILE_AND_DELIVERY_LANGUAGE_CLEANUP_READY_LOCAL_NOT_PUSHED`
