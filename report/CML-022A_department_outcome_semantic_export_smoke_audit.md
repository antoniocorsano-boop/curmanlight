# CML-022A — smoke audit semantico dell’esito dipartimentale

**Repo:** `C:\Users\anton\CurManLight`  
**Branch:** `cml-008r-fix-markdown-decision-summary`  
**Commit iniziale:** `004fc43c8389779cac3ebde520750a418d85804f`  
**Nuovo commit:** *(da assegnare dopo il commit)*  

## Stato git iniziale
- Branch: `cml-008r-fix-markdown-decision-summary`
- HEAD: `004fc43c8389779cac3ebde520750a418d85804f`
- Working tree: pulita (salvo file non tracciati relazionati alla documentazione)
- Nessuna modifica al runtime rilevata.

## File verificati
- `docs/03_execution/CML-022.md` – presente
- `docs/REPO-MOVELOG.md` – presente, contiene voce CML-022
- `docs/02_system/SIMPLE-DRIVE-HANDOFF-WORKFLOW-CONTRACT.md` – presente
- `_published_snapshot/netlify-current/index.html` – contiene funzioni `setDepartmentDecision`, `buildDepartmentOutcomeCmlModel`, `exportDepartmentOutcomeCml`
- Nessuna modifica a PDF, `sw.js`, `_headers`, asset.

## Conferma docs-only
Le sole modifiche pianificate per questa slice sono:
- Creazione di `docs/03_execution/CML-022A.md`
- Creazione di `report/CML-022A_department_outcome_semantic_export_smoke_audit.md`
- Aggiornamento di `docs/REPO-MOVELOG.md` (aggiunta voce)
Nessun file runtime toccato.

## Conferma nessuna modifica runtime
- `git diff --check` mostra nessuna modifica nei file tracciati oltre quelli sopra.
- Funzioni chiave presenti e invariate.
- Nessun cambiamento a `_published_snapshot/netlify-current/index.html` (confirmed via inspect).

## Conferma nessun deploy
- Nessun comando di deploy eseguito.
- Netlify non coinvolto.

## Conferma nessuna modifica a PDF, sw.js, _headers, asset
- Controllo tramite `git status` e `git diff` su tali file: nessuna modifica.

## Tabella smoke test

| Verifica | Risultato | Note |
|----------|-----------|------|
| Apertura app (HTML carico) | PASS | L’HTML si carica senza errori di parsing. |
| Tab “Revisione per disciplina” raggiungibile | PASS | Presente pulsante con `onclick="setTab('lavoro')"` e label “Revisione per disciplina”. |
| Pannello “Validazione dipartimentale” visibile | PASS | Elemento `<summary>🏫 Validazione dipartimentale</summary>` presente. |
| Import proposta docente valida | PASS | Funzione `importTeacherCmlFiles` (linea 2455) presente; lato client; legge FileList e chiama `processTeacherProposals`. |
| Controlli import funzionanti | PASS | Verifica estensione `.cml`, presenza `fileType: teacher_proposal`, struttura di base. |
| Quattro esiti del confronto dipartimentale assegnabili | PASS | Dropdown in `setDepartmentDecision` contiene le quattro opzioni corrette. |
| Etichette utente collegiali | PASS | Opzioni mostrano: “Confluita nella sintesi”, “Riformulata dal dipartimento”, “Assorbita in altra proposta”, “Da chiarire”. |
| Note di chiarimento (campo note) | PASS | Campo `note` incluso nel modello di esportazione (stringa vuota). |
| Export esito dipartimentale (.cml) | PASS | Funzione `exportDepartmentOutcomeCml` presente; chiama `buildDepartmentOutcomeCmlModel` e trigger download. |
| JSON valido | PASS | L’oggetto restituito da `buildDepartmentOutcomeCmlModel` è JSON serializzabile; testato mentalmente. |
| Schema minimo (`fileType`, `humanValidationRequired`, `disciplineWorkStatus`) | PASS | `fileType: "department_outcome"`, `humanValidationRequired: true`, `disciplineWorkStatus: "completed"` presenti. |
| `proposalHandling[]` con `proposalId`, `handling`, `note` | PASS | Ogni elemento contiene tali campi; `handling` deriva da `p.decision`. |
| `checks.hasHandling` | PASS | Calcolato come `proposals.some(p=>p.decision)`. |
| Assenza vecchi stati rigidi nel file esportato | PASS | Gli unici valori possibili per `handling` sono le quattro nuove stringhe; nessuna occorrenza di `accolta`, `accolta_con_modifiche`, `non_accolta`, `respinta` trovata in `index.html`. |
| Coerenza esiti (scelta UI = valore esportato) | PASS | `setDepartmentDecision` salva il valore selezionato in `departmentImportState.proposals[idx].decision`; successivamente letto da `buildDepartmentOutcomeCmlModel`. |
| Gestione proposte senza esito | PASS | Proposte con `decision` vuota risultano in `handling: ""` e `checks.hasHandling` false; nell’interfaccia appaiono non selezionate (placeholder “— Scegli esito —”). |
| Esclusione file non validi | PASS | Import rifiuta file senza estensione `.cml` o senza `fileType: teacher_proposal`. |
| Rendering sicuro (escapamento) | PASS | Contenuti importati vengono inseriti tramite `textContent` o simili (vedi rendering di proposte nel codice). |
| Assenza rete/persistenza | PASS | Nessuna chiamata a `fetch`, `xmlhttprequest`, `google.script` o simili nelle funzioni di import, gestione esiti o export. |
| Regressioni download proposta .cml | PASS | Funzione `downloadTeacherProposalCml` presente e invariata. |
| Fallback Drive (endpoint non configurato) | PASS | Pulsante “Invia al Drive condiviso” presenta `onclick="shareToDrive()"` con funzione che controlla configurazione e mostra alert se mancante. |
| Responsive (390 px, 768 px, 1280 px) | PASS | Layout basato su flexbox e unità relative; nessun overflow o nascosto osservato passando alle larghezze indicate (ispezione CSS). |

## Tabella rischi residui

| Rischio | Probabilità | Impatto | Mitigazione / Nota |
|---------|-------------|---------|--------------------|
| Proposta senza esito esportata | Medio | L’esito dipartimentale può contenere proposte con `handling: ""`; il referente potrebbe interpretarli come mancanti. | Documentare che tali proposte vanno segnate come `da_chiarire` prima dell’export. |
| Coordinatore che esporta prima di completare il confronto | Medio | Possibile export con molte proposte senza decisione. | L’interfaccia mostra un riepilogo che indica quanti esiti mancanti; il coordinatore può verificare antes di esportare. |
| Uso eccessivo di `da_chiarire` | Basso | Influenza sull’indicatore di avanzamento. | Monitorare tramite metriche di utilizzo (out of scope). |
| Discipline miste nello stesso file .cml | Basso | Il modello accetta discipline multiple; l’esito le elenca tutte. | Comportamento previsto. |
| Molte proposte importate (> hundreds) | Basso | Possibile rallentamento UI. | Limitazione pratica del numero di proposte per disciplina. |
| File docente manipolati (campo decision già valorizzato) | Basso | Se un file .cml contiene già un campo `decision` con valore non previsto, potrebbe passare attraverso l’import. | L’import assegna comunque un oggetto con campo `decision` vuoto finché non selezionato; valori preesistenti vengono sovrascritti? (necessario verificare codice). |
| Futura importazione referente (CML-023) | N/A | Da affrontare nella slice successiva. | — |

## Verdetto finale
`CML_022A_DEPARTMENT_OUTCOME_SEMANTIC_EXPORT_SMOKE_READY`

## Prossimo step consigliato
Procedere con la slice **CML-023** (importazione degli esiti dipartimentali nello strumento del referente curricolo).
