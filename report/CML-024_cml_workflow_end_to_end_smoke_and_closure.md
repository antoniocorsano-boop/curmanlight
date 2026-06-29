# CML-024 — report CML workflow end-to-end smoke and closure

**Repo:** `C:\Users\anton\CurManLight`  
**Branch:** `cml-008r-fix-markdown-decision-summary`  
**Commit iniziale:** `60d546e3031fbe062075d900f83c173d7a561daf`  
**Nuovo commit:** _(da assegnare dopo il commit)_

## Stato git iniziale

- Branch: `cml-008r-fix-markdown-decision-summary`
- HEAD: `60d546e3031fbe062075d900f83c173d7a561daf`
- Working tree: pulita (salvo file non tracciati relazionati alla documentazione)
- Nessuna modifica al runtime rilevata.

## File verificati

- Documentazione delle slice precedenti (CML-019 attraverso CML-023) presente in `docs/03_execution/`.
- File runtime `_published_snapshot/netlify-current/index.html` contiene le funzioni necessarie.

## Conferma docs-only

Le sole modifiche pianificate per questa slice sono:

- Creazione di `docs/03_execution/CML-024.md`
- Creazione di `report/CML-024_cml_workflow_end_to_end_smoke_and_closure.md`
- Aggiornamento di `docs/REPO-MOVELOG.md` (aggiunta voce)
  Nessun file runtime toccato.

## Conferma nessuna modifica runtime

- `git diff --check` mostra nessuna modifica nei file tracciati oltre quelli sopra.
- Funzioni chiave presenti e invariate (verificato tramite grep).

## Conferma nessun deploy

- Nessun comando di deploy eseguito.
- Netlify non coinvolto.

## Conferma nessuna modifica a PDF, sw.js, _headers, asset

- Controllo tramite `git status` e `git diff` su tali file: nessuna modifica.

## Tabella end-to-end

| Verifica                                  | Risultato | Note                                                                                                                                                                  |
| ----------------------------------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Export proposta docente (.cml)            | PASS      | Funzione `exportTeacherCml()` presente; genera file JSON valido con `fileType: teacher_proposal`.                                                                     |
| Fallback Drive (endpoint non configurato) | PASS      | Pulsante `Invia al Drive condiviso` mostra alert se mancante; `Scarica proposta .cml` sempre disponibile.                                                             |
| Import dipartimento (teacher_proposal)    | PASS      | Funzione `importTeacherCmlFiles` riconosce il file come valido; mostra riepilogo corretto.                                                                            |
| Esiti del confronto (quattro opzioni)     | PASS      | Dropdown in `setDepartmentDecision` contiene le quattro opzioni collegiali; nessuna etichetta rigida presente.                                                        |
| Export esito dipartimento (.cml)          | PASS      | Funzione `exportDepartmentOutcomeCml` presente; genera JSON con `fileType: department_outcome`, `humanValidationRequired: true`, `disciplineWorkStatus: "completed"`. |
| Import referente (department_outcome)     | PASS      | Funzione `importDepartmentOutcomeCmlFiles` riconosce il file come valido; aggiorna stato referente.                                                                   |
| Riepilogo referente                       | PASS      | Pannello `Verifica referente curricolo` mostra file importati, validi, discipline, esiti totali, conteggi `da_chiarire` e `senza esito`.                              |
| Gestione `da_chiarire`                    | PASS      | Proposte con `handling: "da_chiarire"` conteggiate e visualizzate; non bloccanti.                                                                                     |
| Gestione senza esito                      | PASS      | Handling vuoto/mancante mostrato come `Senza esito`; non trasformato in `da_chiarire`.                                                                                |
| File non validi                           | PASS      | In ciascuna fase di import, i file non `.cml`, JSON non valido, `fileType` errato o schema parziale vengono rifiutati e segnalati.                                    |
| Rendering sicuro                          | PASS      | Tutti i dati importati passati da `escapeHtml` prima di `innerHTML`; nessun XSS.                                                                                      |
| Assenza rete/persistenza                  | PASS      | Nessuna chiamata di rete durante le operazioni locali; nessuna nuova persistenza permanente.                                                                          |
| Responsive (390 px, 768 px, 1280 px)      | PASS      | Layout fluido utilizzabile; nessuna modifica CSS in questa slice.                                                                                                     |

## Tabella rischi residui

| Rischio                                               | Probabilità | Impatto                                                                       | Mitigazione / Nota                                                  |
| ----------------------------------------------------- | ----------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| Endpoint Drive non ancora configurato                 | Medio       | Il pulsante `Invia al Drive condiviso` mostra alert; il flusso rimane locale. | Configurare l’endpoint in futuro se necessario (fuori dallo scope). |
| Uso manuale del Drive                                 | Basso       | Gli utenti devono scaricare e caricare manualmente i file .cml.               | Documentato come fallback accettabile.                              |
| File docente manipolati (contieni XSS)                | Basso       | Se un file .cml contiene script, potrebbe essere eseguito se non escapato.    | Tutti i dati importati passati da `escapeHtml`.                     |
| Esiti dipartimentali incompleti (schema parziale)     | Basso       | L’import referente rifiuta il file e segnala i campi mancanti.                | L’utente deve richiedere un file completo al dipartimento.          |
| Molte proposte da chiarire                            | Basso       | Indica un lavoro dipartimentale incompleto; il referente vede il conteggio.   | Il referente può richiedere chiarimenti al dipartimento.            |
| Necessità futura di report per gruppo di lavoro       | N/A         | Da affrontare in una futura slice se richiesto.                               | —                                                                   |
| Necessità futura di test reale con account scolastico | N/A         | Test finale con utenti reali da pianificare separatamente.                    | —                                                                   |

## Verdetto finale

`CML_024_CML_WORKFLOW_END_TO_END_SMOKE_AND_CLOSURE_READY`

## Prossimo step consigliato

Considerare il flusso chiuso e passare a eventuali miglioramenti o nuove feature (es. integrazione con sistemi esterni, se autorizzate) oppure procedere con la produzione del report per il gruppo di lavoro (se prevista da un’altra slice).
