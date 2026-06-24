# Report CML-126: Post-Push Runtime and Navigation Smoke

## Summary
Smoke post-push eseguito su snapshot locale allineato al remoto. Esito bloccato per regressione runtime della navigazione.

## Baseline
- branch: main
- HEAD: 425f1b962b4fbbe027934f8e2f62f6f899d1be06
- origin/main: 425f1b962b4fbbe027934f8e2f62f6f899d1be06
- allineamento remoto: sì

## Validazione tecnica
Comando:
- node tools/validate-cml-normalized-curriculum.mjs

Esito:
- totalFiles: 7
- totalUnits: 94
- overallValid: true
- invalidCount: 0

## Hygiene
Comando:
- git diff --check

Esito:
- pulito (nessun output)

## Residui locali
Comando:
- git check-ignore -v .agents skills-lock.json Consultazione

Esito:
- .agents ignorato
- skills-lock.json ignorato
- Consultazione ignorato

## Smoke UI/Navigazione
Ambiente:
- python -m http.server 8080 --directory _published_snapshot/netlify-current
- http://localhost:8080/

Check e outcome:
1. Apertura app: OK
2. Navigazione principale: KO
3. Accesso Curriculum: KO
4. Selezione discipline: KO
5. Hash/disciplina/corpo pagina: KO
6. Contenuti ITA/MAT/TEC: parziale (controlli presenti, vista non renderizzata)
7. Console error: KO
8. Import/export: non verificabile in modo affidabile
9. Validazione dipartimentale: non verificabile in modo affidabile
10. Residui ignorati: OK

Errori osservati:
- ReferenceError: setTab is not defined
- ReferenceError: setMappaDisciplina is not defined

## Scope safety
Nessuna modifica funzionale introdotta in questa slice.

## Decisione
- Smoke bloccato da regressione runtime; nessun push richiesto/eseguito.

## Verdetto
CML_126_POST_PUSH_SMOKE_BLOCKED_BY_RUNTIME_REGRESSION
