# CML-483 — Checklist di allineamento locale

1. Verificare `git status --short --branch`.
2. Conservare su branch dedicato eventuali commit o modifiche locali.
3. Eseguire `git fetch origin --prune`.
4. Portare `main` alla baseline remota CML-482 con avanzamento lineare.
5. Creare un branch locale da `origin/codex/cml-483-guided-teacher-evaluation`.
6. Eseguire lint, test B01/B02/B03, controlli CML-478/479/480/482 e build React.
7. Verificare il percorso su desktop e mobile, inclusi reload, esportazione e cancellazione.
8. Non duplicare CML-483 in `index.html` o nella snapshot legacy.
9. Non integrare in `main` prima dell'audit interattivo e della review del file esportato.
