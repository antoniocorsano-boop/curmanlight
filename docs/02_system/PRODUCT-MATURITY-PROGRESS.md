# Product Maturity Progress

Cruscotto operativo del programma di maturita prodotto CurManLight.

## Programma

PM-01 Governance
██████████ 100%

PM-02 Audit
██████████ 100%

PM-03 Orientamento
█░░░░░░░░░ 10%

PM-04 Comprensione Curriculum
███████░░░ 70%

PM-05 Esperienza di lavoro
░░░░░░░░░░ 0%

PM-06 Accompagnamento
░░░░░░░░░░ 0%

PM-07 Uniformita
█░░░░░░░░░ 10%

## Slice in esecuzione

- nessuna

## Prossima slice

- CML-305 (UX-023 — ritorno al punto di lavoro non chiaro)

## Percorso critico (fase 1)

CML-286 ⬅ completata
↓
CML-287 ⬅ audit completato
↓
CML-293 ⬅ semplificazione testata disciplina completata
↓
CML-291 ⬅ unificazione badge/stati (UX-009) completata
↓
CML-295 ⬅ indicatori duplicati (UX-013) completata
↓
CML-297 ⬅ fonti contestualizzate e chiarezza proposta 2025 (UX-014 + UX-015) completata
↓
CML-304 ⬅ terminologia glossario-compliant (UX-022) completata

## Avanzamento programmi

### Programma PM-01 - Governance

██████████
100%

### Programma PM-02 - Audit esperienza utente

██████████
100%

### Programma PM-03 - Orientamento

█░░░░░░░░░
10%

### Programma PM-04 - Comprensione del Curriculum

███████░░░
70%

### Programma PM-05 - Esperienza di lavoro

░░░░░░░░░░
0%

### Programma PM-06 - Accompagnamento

░░░░░░░░░░
0%

### Programma PM-07 - Uniformita

█░░░░░░░░░
10%

### Programma PM-09 - Validazione con utenti

░░░░░░░░░░
0%

## Stato operativo

- Ultima slice completata: CML-304 (runtime microfix — UX-022)
- Milestone di consolidamento governance: CML-282A
- Prossima slice operativa prevista: CML-305 (UX-023 — ritorno al punto di lavoro non chiaro)
- Ultimo aggiornamento: 2026-07-03 (CML-304)

## Matrice di trasformazione UX -> PM -> CML

| UX ID | Problema sintetico | Macroprogramma | Slice target | Dipendenza |
|---|---|---|---|---|
| UX-001 | Logiche miste Curriculum | PM-04 | CML-293 (risolto) | nessuna |
| UX-002 | Focus cambio disciplina | PM-03 | CML-284 (risolto) | CML-283 |
| UX-003 | Indicatori incomprensibili | PM-04 | CML-285 (risolto) | CML-283 |
| UX-004 | Guida disallineata | PM-06 | CML-286 | CML-283 |
| UX-005 | Navigazione non coerente con compito | PM-03 | CML-284 (parziale) | CML-283 |
| UX-006 | Lessico non uniforme Curriculum | PM-04 | CML-285 (risolto) | CML-285 |
| UX-007 | Home troppo densa | PM-03 | CML-289 | CML-283 |
| UX-008 | Percorsi/menu incoerenti | PM-03 | CML-290 | CML-289 |
| UX-009 | Badge non univoci | PM-07 | CML-291 (risolto) | CML-287 |
| UX-010 | Checklist UX non sistematica | PM-01 | CML-292 | nessuna |
| UX-011 | Testata Curriculum sovraccarica | PM-04 | CML-293 (risolto) | CML-283 |
| UX-012 | Sidebar discipline senza legenda unica | PM-07 | CML-294 | CML-287 |
| UX-013 | Indicatori duplicati | PM-04 | CML-295 (risolto) | CML-285 |
| UX-014 | Fonti non contestualizzate | PM-04 | CML-297 | CML-285 |
| UX-015 | Proposte 2025 non sempre chiare | PM-04 | CML-297 | CML-285 |
| UX-016 | Azioni Curriculum senza gerarchia | PM-05 | CML-298 | CML-283 |
| UX-017 | Compila troppo densa in avvio | PM-05 | CML-299 | CML-283 |
| UX-018 | Esportazioni non guidate a step | PM-05 | CML-300 | CML-299 |
| UX-019 | Guida rapida troppo estesa | PM-06 | CML-301 | CML-286 |
| UX-020 | Navigazione mobile poco esplicita | PM-03 | CML-302 | CML-290 |
| UX-021 | Residui simbolici corrotti | PM-07 | CML-303 | CML-287 |
| UX-022 | Terminologia non glossario-compliant | PM-04 | CML-304 (risolto) | CML-285 |
| UX-023 | Ritorno al punto di lavoro non chiaro | PM-03 | CML-305 | CML-284 |
| UX-024 | Componenti comuni non uniformi | PM-07 | CML-306 | CML-291 |

## Percorso critico (critical path)

1. CML-286 (riallineamento Guida)
2. CML-287 (normalizzazione iconografia)
3. CML-289 (de-densificazione Home)
4. CML-290 (coerenza menu e percorsi)
5. CML-299 (ingresso operativo Compila)
6. CML-300 (Esportazioni a step)

Motivo: questo percorso riduce prima i blocchi di orientamento/comprensione ad alta priorita e poi consolida accompagnamento e uniformita.

## Rischi aperti

1. Se CML-286/CML-287 slittano, si ritarda il consolidamento di PM-06 e PM-07 con effetti a cascata sulle fasi successive.
2. Senza CML-297, restano attive criticita su contestualizzazione fonti e chiarezza proposte 2025 nel cuore del Curriculum.
3. Senza CML-300, permane alto il rischio di scelta errata nel flusso Esportazioni.

## Decisioni aperte

1. Definire soglia oggettiva di passaggio da PM-03/PM-04 in stato IN CORSO a COMPLETATO con test utente.
2. Stabilire cadenza fissa di aggiornamento percentuali programma (per slice o per milestone).
3. Formalizzare protocollo di validazione PM-09 con utenti scolastici reali.

## Decisioni architetturali di governance

1. Le future slice sono guidate da valore utente (non da area tecnica).
2. Ogni voce UX e mappata in modo univoco a un macroprogramma PM e a una slice CML target.
3. Le dipendenze tra slice sono esplicite e governate tramite critical path.
4. Il presente documento e la fonte primaria di stato programma; backlog e roadmap restano allineati a questo cruscotto.

## Regola obbligatoria per future slice CML

Ogni execution doc deve iniziare con:

- Macroprogramma: PM-xx
- Backlog: UX-xxx
- Dipende da: CML-xxx
- Aggiorna: PRODUCT-MATURITY-PROGRESS.md
