# CML-421D — Design Pre-runtime Decision Report

## 1. Scopo

Registrare che prima del runtime serve scegliere tra proposte di mock alternative.

## 2. Decisione

```text
Non procedere a CML-422 Runtime Scope Decision finché non è stata scelta una direzione mock.
```

## 3. Proposte disponibili

```text
A — Cruscotto istituzionale compatto
B — Percorso guidato per docente
C — Workspace professionale a pannelli
```

## 4. Opzione preliminare consigliata

```text
A+B con innesti C nelle viste avanzate
```

Interpretazione:

```text
Home: cruscotto istituzionale compatto
Progettazione: percorso guidato
Esportazione: percorso guidato per documento
Curricolo/fonti/versioni: cruscotto con dettagli avanzati
Processo/referente: pannelli leggeri
Mobile: guidato e compatto
```

## 5. Perché non scegliere un solo mock ora

Lo strumento deve servire più utenti:

```text
docente non tecnico
dipartimento
referente curricolo
dirigente/governance
```

Un mock unico rischia di privilegiare un solo profilo.

## 6. Gate decisionale

Prima di qualsiasi runtime scegliere:

```text
1. modello Home
2. modello header
3. modello mobile
4. modello Curricolo
5. modello Progettazione
6. modello Esportazione
7. modello Impostazioni / Contesto di lavoro
8. modello Riferimenti e guida
```

## 7. File prodotti

```text
docs/03_execution/CML-421D.md
docs/04_design/CML-421D_design_system_and_view_models.md
docs/04_design/CML-421D_mock_choice_matrix.md
report/CML-421D_design_pre_runtime_decision_report.md
```

## 8. Runtime status

```text
Runtime non modificato
Main non modificato
Deploy non eseguito
```

## Verdict

```text
CML_421D_DESIGN_SYSTEM_AND_MOCK_CHOICE_READY_REMOTE_BRANCH
```
