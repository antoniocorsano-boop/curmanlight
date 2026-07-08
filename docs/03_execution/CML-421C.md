# CML-421C — IA Terminology Corrections

## Mandatory Slice Header

- Macroprogramma: PM-09 Validazione con utenti / PM-03 Orientamento / PM-06 Accompagnamento / PM-07 Uniformità
- Dipende da: CML-421
- Tipo slice: docs/design-correction-only remoto
- Branch: `remote-lab/cml-419-in2012-in2025-technical-table`
- Runtime: non modificato
- Main: non modificato

## Origine

Questa slice nasce dai rilievi:

```text
CML-421-R001 — Sostituire Wiki
CML-421-R002 — Sostituire Definitivo
CML-421-R005 — Contesto di lavoro in Impostazioni
CML-421-R006 — Riferimenti e guida più compatta
```

## Obiettivo

Correggere la terminologia dell'architettura informativa prima di qualsiasi runtime.

## Correzioni applicate

### 1. Wiki del curricolo

Sostituito:

```text
Wiki del curricolo
```

con:

```text
Riferimenti e guida
```

Motivazione:

- più scolastico;
- più istituzionale;
- meno tecnico;
- più comprensibile per docenti e referenti.

### 2. Definitivo

Sostituito:

```text
Definitivo
```

con:

```text
Sintesi finale
```

Regola:

```text
La Sintesi finale è l'esito tecnico del processo di revisione.
Non equivale ad approvazione collegiale.
```

### 3. Contesto di lavoro

Collocato in:

```text
Impostazioni / Contesto di lavoro
```

Non dentro Esportazione.

### 4. Riferimenti e guida compatta

Struttura corretta:

```text
Riferimenti e guida
├─ Fonti e normativa
├─ IN2012 e IN2025
├─ Ruoli e processo
└─ Uso e limiti
```

## Documenti aggiornati

```text
docs/04_design/CML-420_ia_navigation_prototype.md
docs/04_design/CML-420_wireframes_logici.md
```

## Architettura informativa corretta

```text
Header / Menu app
├─ Impostazioni
│  ├─ Contesto di lavoro
│  ├─ Preferenze esportazione
│  ├─ Dati locali
│  └─ Accessibilità
│
Navigazione principale
├─ Curricolo
├─ Progettazione didattica
├─ Esportazione
└─ Riferimenti e guida
```

## Curricolo corretto

```text
Curricolo
├─ Consulta
├─ Estrai
├─ Fonti
├─ Versioni
├─ Processo aggiornamento
└─ Sintesi finale
```

## Regole microcopy

```text
Indicazioni 2025 — materiale/proposta da verificare; non sostituisce automaticamente il curricolo vigente.
```

```text
Fonte definita nel repository; verifica esterna pendente.
```

```text
La validazione resta umana.
```

```text
L'app prepara materiali di lavoro, non approva il curricolo.
```

## Effetto su CML-420

CML-420 resta prototipo informativo/navigazionale e non diventa runtime.

Le correzioni terminologiche sono applicate alla documentazione di prototipo, ma il passaggio runtime resta bloccato fino alla chiusura di:

```text
CML-421A — Didactic Design Needs Audit
CML-421B — School Document Export Needs Audit
```

## Non autorizzato

CML-421C non autorizza:

- runtime;
- refactor app;
- merge su main;
- deploy.

## Verdict

```text
CML_421C_IA_TERMINOLOGY_CORRECTIONS_APPLIED_REMOTE_BRANCH
```
