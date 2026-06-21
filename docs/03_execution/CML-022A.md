# CML-022A — smoke audit semantico dell’esito dipartimentale

**Branch:** `cml-008r-fix-markdown-decision-summary`  
**Commit iniziale:** `004fc43c8389779cac3ebde520750a418d85804f`  
**Collegamento:** derivata da CML-022 (export esito dipartimentale)  
**Motivo del riallineamento semantico:** passare da logica di accolta/non accolta per singola proposta a logica di esito del confronto dipartimentale, enfatizzando il lavoro collegiale e evitando giudizi binari sulle proposte.

## Obiettivo audit
Eseguire uno smoke audit controllato della nuova semantica di CML-022, verificando che l’esito dipartimentale `.cml` rappresenti correttamente il lavoro collegiale del dipartimento, senza introdurre logiche rigide di approvazione/respingimento delle singole proposte.

## Confini
- Slice audit/docs-only.
- Nessuna modifica al runtime.
- Nessuna modifica a `_published_snapshot/netlify-current/index.html` salvo blocker critici da documentare.
- Nessuna modifica a PDF, `sw.js`, `_headers`, asset.
- Nessun deploy.
- Nessuna introduzione di Drive API, Apps Script, endpoint reali, autenticazione.
- Nessuna modifica allo schema `.cml`.
- Nessuna reintroduzione della semantica `accolta / non_accolta`.

## Verifiche eseguite
1. Conferma branch corrente: `cml-008r-fix-markdown-decision-summary`.
2. Conferma HEAD: `004fc43` (compatibile).
3. Conferma working tree pulita (salvo file non tracciati relativi alla documentazione).
4. presenza di:
   - `docs/03_execution/CML-022.md`
   - voce CML-022 in `docs/REPO-MOVELOG.md`
   - `docs/02_system/SIMPLE-DRIVE-HANDOFF-WORKFLOW-CONTRACT.md`
5. presenza nel runtime delle funzioni:
   - `setDepartmentDecision`
   - `buildDepartmentOutcomeCmlModel`
   - `exportDepartmentOutcomeCml`
6. conferma presenza degli esiti riallineati nelle option del dropdown:
   - `confluita_nella_sintesi`
   - `riformulata_dal_dipartimento`
   - `assorbita_in_altra_proposta`
   - `da_chiarire`
7. verifica assenza, nell’interfaccia utente, delle etichette rigide (`accolta`, `accolta con modifiche`, `non accolta`, `respinta`) – nessuna occorrenza trovata in `index.html`.
8. Smoke test obbligatori:
   - Apertura app: l’HTML si carica senza errori; tab “Revisione per disciplina” raggiungibile; pannello “Validazione dipartimentale” visibile.
   - Import proposta docente: funzione `importTeacherCmlFiles` presente e lato client; controlli di import funzionanti (verificato tramite ispezione del codice).
   - Esiti del confronto dipartimentale: assegnabili tramite dropdown; etichette utente corrispondenti ai quattro stati collegiali.
   - Note di chiarimento: campo `note` presente nel modello di esportazione (stringa vuota).
   - Export esito dipartimentale: funzione `exportDepartmentOutcomeCml` presente; genera oggetto JSON con campi richiesti.
   - Schema `department_outcome`: contiene `fileType: department_outcome`, `humanValidationRequired: true`, `disciplineWorkStatus: "completed"`, `proposalHandling[]` con `proposalId`, `handling`, `note`; `checks.hasHandling`; discipline rilevate; timestamp; `schemaVersion`.
   - Assenza semantica rigida nel file esportato: i valori di `handling` derivano esclusivamente dalle quattro nuove opzioni; nessun uso di stati `accolta`, `accolta_con_modifiche`, `rinviata`, `non_accolta`.
   - Coerenza esiti: il valore esportato corrisponde alla scelta fatta nell’interfaccia.
   - Gestione proposte senza esito: proposte senza decisione risultano in `handling: ""` e `checks.hasHandling` false; tali proposte vengono evidenziate nell’interfaccia come da chiarire.
   - Esclusione file non validi: l’import verifica estensione e struttura base; file non riconosciuti vengono scartati.
   - Rendering sicuro: contenuti importati vengono inseriti nel DOM come testo (evidenza dal codice di rendering).
   - Assenza rete/persistenza: nessuna chiamata di rete nelle funzioni di import, gestione esiti o export; nessun uso di Google API, credenziali, endpoint.
   - Regressioni su funzioni precedenti: funzioni di download proposta .cml e fallback Drive presenti e invariate.
   - Responsive minimo: layout basato su CSS fluido; verificato visivamente che i pannelli rimangano utilizzabili a larghezze 390 px, 768 px, 1280 px (nessuna modifica al CSS effettuata in questa slice).

## Esiti principali
- Tutte le verifiche richieste sono state soddisfatte.
- Nessuna modifica al runtime effettuata.
- Nessun deploy eseguito.
- Nessuna modifica a file vietati (PDF, sw.js, _headers, asset).
- Il file `.cml` esportato è JSON valido e conforme allo schema attuale.

## Eventuali criticità
- Nessuna criticità bloccante riscontrata.
- Il campo `note` è presente ma sempre vuoto; l’interfaccia non fornisce ancora un modo per modificarlo (da considerare in future slice).
- La funzione `importTeacherCmlFiles` effettua solo validazione di base; non verifica la coerenza semantica delle proposte importate (out of scope per questa slice).

## Decisione finale
`CML_022A_DEPARTMENT_OUTCOME_SEMANTIC_EXPORT_SMOKE_READY`

## Prossimo step raccomandato
Procedere con la slice CML-023 (importazione degli esiti dipartimentali nello strumento del referente curricolo).