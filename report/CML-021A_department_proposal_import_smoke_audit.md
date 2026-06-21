# CML-021A — Department Proposal Import Smoke Audit

## Stato iniziale

| Controllo | Esito |
|---|---|
| Branch | cml-008r-fix-markdown-decision-summary |
| HEAD | c241213 |
| Working tree | Pulita |
| Tipo slice | Audit/docs-only |
| Modifiche runtime | Nessuna |
| Deploy | Nessuno |

## Smoke test

| Controllo | Esito |
|---|---|
| App e tab Revisione | PASS |
| Pannello Validazione dipartimentale | PASS |
| Import valido | PASS |
| Import multiplo | PASS — 7 file / 3 validi / 5 proposte |
| JSON invalido | PASS — escluso e segnalato |
| fileType errato | PASS — escluso e segnalato |
| Schema parziale | PASS — escluso e segnalato |
| Duplicati | PASS — duplicato probabile segnalato |
| Discipline miste | PASS — 2 discipline, avviso non bloccante |
| Rendering escapato | PASS — payload HTML non eseguito |
| Assenza rete | PASS — 0 richieste durante import |
| Assenza persistenza | PASS — localStorage invariato |
| Download .cml | PASS — teacher_proposal generato |
| Fallback Drive | PASS — endpoint non configurato |
| Cleanup marker / indicatore ✏️ | PASS |
| Responsive | PASS — 390 / 768 / 1280 px |
| Console | PASS — nessun errore |

## Rischi residui

| Rischio | Stato/Mitigazione |
|---|---|
| File docente incompleto | Segnalato ed escluso dalle proposte |
| File manipolato | Schema + escaping; nessuna autenticità crittografica |
| Molte proposte insieme | Vista scrollabile; stress test di volumi elevati rinviato |
| Discipline miste | Avviso non bloccante |
| Coordinatore poco esperto | Microcopy e riepilogo espliciti |
| Esito dipartimentale | Non ancora esportato; perimetro CML-022 |

## Confini confermati

- Solo documentazione CML-021A.
- Nessuna modifica a runtime, schema .cml, PDF, sw.js, _headers o asset.
- Nessuna API Google, Apps Script, autenticazione, endpoint, token o credenziale.
- Nessun deploy o push.

Il Browser integrato non era utilizzabile per policy sandbox mancante; lo smoke è stato eseguito con Chromium headless locale via DevTools, bypassando cache e service worker.

## Verdetto

CML_021A_DEPARTMENT_PROPOSAL_IMPORT_SMOKE_READY