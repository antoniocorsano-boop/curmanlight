# CML-326 — PM-04 Real User Test Scheduling (Report)

## Scope

- Slice type: docs-only
- Macroprogramma: PM-04 — Comprensione del Curriculum
- Focus: pianificazione test reale docente post-remediation

## Decisioni operative bloccate

1. Discipline campione: Italiano, Matematica.
2. Durata sessione: 25 minuti.
3. Criterio di uscita: soglia 80% task core PASS/PARTIAL non bloccante.
4. Nessun FAIL bloccante ammesso su accesso, comprensione iniziale, selezione disciplina, avvio Compila.

## Gate PM-04

- Stato invariato: PM-04 55%, non chiusa.
- Condizione attiva: `PM_04_CLOSURE_SUBORDINATED_TO_REAL_USER_TEST`.
- Il test abilita una review formale successiva, non una closure automatica.

## Runtime perimeter reminder

- `index.html`
- `_published_snapshot/netlify-current/index.html`

## Output

- Documento esecuzione creato: `docs/03_execution/CML-326.md`.
- Stato di sistema allineato per prossima slice CML-327 (runtime microfix focalizzata su Compila, condizionale agli esiti test).