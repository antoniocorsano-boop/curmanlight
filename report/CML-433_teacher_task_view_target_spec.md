# CML-433 — Teacher Task View Target Specification

Specifica target delle viste CurManLight dopo primo pilota PM-09, CML-432 e mock grafico realistico.

---

## 1. Tesi prodotto

CurManLight non deve aggiungere altre spiegazioni. Deve ridurre il carico iniziale e rendere ogni vista orientata al compito del docente.

Formula guida:

```text
una vista = una intenzione primaria = una decisione operativa evidente
```

Il docente non deve "scoprire" lo strumento scorrendo, aprendo e leggendo molte card. Deve capire dove si trova, cosa può fare e cosa otterrà.

## 2. Traduzione del metodo di orchestrazione in regole CML

Il documento `ORCHESTRATING AI BUILDS` è stato trattato come metodo, non come codice da copiare.

### Regola CML-O1 — Piano prima del runtime

Prima di delegare una patch runtime serve una specifica scritta. Il mock non è un'immagine decorativa: è il contratto d'uso da implementare.

### Regola CML-O2 — Prompt con perimetro chiuso

Ogni futura patch deve indicare:

- task;
- vista interessata;
- file ammessi;
- file vietati;
- evidenze pilota collegate;
- hard rules;
- controlli;
- reporting.

### Regola CML-O3 — Review avversariale

La review non deve dire se la UI è "bella". Deve attaccare le claim:

- la Home riduce davvero il carico?
- il Curricolo distingue davvero vigente/proposta/stato?
- Progetta permette davvero più percorsi senza confondere?
- Esportazioni mostra davvero i materiali progettuali?
- la Guida è davvero pratica e contestuale?

### Regola CML-O4 — Verifica indipendente

Ogni implementazione dovrà essere verificata con test e screenshot. La dichiarazione dell'agente non basta.

## 3. Vista target — Home

### Contratto

| Campo | Specifica |
|---|---|
| Scopo | scegliere il compito del giorno |
| Azione primaria | accedere a una delle quattro aree operative |
| Informazioni iniziali | contesto di lavoro, validazione umana, quattro azioni |
| Informazioni da non mostrare subito | spiegazioni lunghe, promesse di prodotto, ripetizioni |
| Evidenze collegate | EVD-002, EVD-003, EVD-004 |

### Layout target

```text
[Header compatto]
Cosa vuoi fare oggi?
Scegli un compito.

[Chip contesto] Tecnologia · Secondaria I grado · A.S.
[Chip processo] Materiali da validare collegialmente

[Consulta il curricolo]
[Prepara una progettazione]
[Esporta un documento]
[Verifica fonti e limiti]

[Guida breve del compito]
```

### Hard rules Home

- Mantenere le quattro etichette principali.
- Ridurre card informative ripetitive.
- Rendere visibile la validazione umana senza testo lungo.
- Non usare linguaggio promozionale.

## 4. Vista target — Curricolo

### Contratto

| Campo | Specifica |
|---|---|
| Scopo | consultare curricolo disciplinare e proposta |
| Azione primaria | leggere/confrontare vigente e proposta |
| Informazioni iniziali | disciplina attiva, versione vigente, proposta IN 2025, stato approvativo |
| Informazioni progressive | fonti, note, dettagli, indicatori |
| Evidenze collegate | EVD-006, EVD-007, EVD-008, EVD-009 |

### Layout target

```text
Curricolo · Tecnologia
[Disciplina attiva: Tecnologia]
[Periodo transitorio IN 2025]

┌ Curricolo in vigore ┐     ┌ Proposta di aggiornamento ┐
│ IN 2012             │     │ IN 2025                    │
│ Stato: approvato    │     │ Stato: da validare         │
│ Unità essenziali    │     │ Cosa cambia                │
│ Traguardi           │     │ Proposte dipartimento      │
└─────────────────────┘     └────────────────────────────┘

[Apri confronto] [Solo vigente] [Solo proposta] [Fonti e limiti]
```

### Hard rules Curricolo

- La disciplina selezionata deve essere molto visibile.
- Non usare "percorso consigliato" se il compito è consultare.
- Non ridurre tutto a 2012/2025: mostrare anche stato istituzionale.
- Fonti e note devono essere accessibili ma secondarie.

## 5. Vista target — Progetta

### Contratto

| Campo | Specifica |
|---|---|
| Scopo | partire dal curricolo per costruire materiali didattici |
| Azione primaria | scegliere il percorso progettuale |
| Informazioni iniziali | curricolo di partenza e percorsi disponibili |
| Informazioni progressive | classi/livelli, competenze, obiettivi, attività, export |
| Evidenze collegate | EVD-010, EVD-011, EVD-012 |

### Layout target

```text
Progetta dal curricolo
Punto di partenza: Curricolo di Tecnologia

[Progettazione annuale]
Copertura bisogni formativi curricolari

[UDA da curricolo]
Scegli competenze, obiettivi e attività

[UDA da tema concreto]
Parti da problema/contesto reale

[Piano annuale attività]
Sequenza operativa e tempi
```

### Hard rules Progetta

- Non imporre uno schema unico.
- Non aprire con tre card informative ripetitive.
- Ogni percorso deve dichiarare output e punto di partenza.
- Prima di implementare compilazione avanzata serve validazione con docenti/esperti.

## 6. Vista target — Esportazioni

### Contratto

| Campo | Specifica |
|---|---|
| Scopo | ottenere un documento o file di lavoro collegato al task |
| Azione primaria | scegliere cosa esportare |
| Informazioni iniziali | tipo documento, uso previsto, origine |
| Evidenze collegate | EVD-013 |

### Layout target

```text
Esporta per compito

Curricolo                 PDF/Docx consultazione
Progettazione annuale     Bozza da rivedere
UDA                       Documento operativo
Piano attività            Sequenza annuale
File di lavoro            .cml locale
```

### Hard rules Esportazioni

- Collegare export a Progetta.
- Distinguere documento leggibile e file di lavoro.
- Non presentare categorie astratte scollegate dal compito.

## 7. Vista target — Guida

### Contratto

| Campo | Specifica |
|---|---|
| Scopo | aiutare nel momento del dubbio operativo |
| Azione primaria | aprire guida breve relativa al compito corrente |
| Informazioni iniziali | cosa sto facendo, cosa ottengo, cosa devo validare |
| Evidenze collegate | EVD-014 |

### Layout target

```text
Guida del compito

1. Cosa sto facendo?
2. Cosa ottengo?
3. È bozza o file di lavoro?
4. Serve validazione collegiale?
```

### Hard rules Guida

- Non essere manuale generale in primo piano.
- Rendere Progetta il primo ambito guidato.
- Usare esempi brevi e contestuali.

## 8. Vista target — Test guidato

### Contratto

| Campo | Specifica |
|---|---|
| Scopo | permettere al docente tester di usare e annotare |
| Azione primaria | leggere consegna, navigare, scrivere osservazioni, esportare |
| Evidenze collegate | EVD-001, EVD-005 |

### Decisione target

Il modale attuale è utile come ingresso ma non ideale per appunti durante navigazione. Due opzioni accettabili:

1. istruzioni esterne e campo annotazioni non bloccante;
2. pannello laterale/minimizzabile.

Non implementare finché Home/Curricolo/Progetta non hanno target validato.

## 9. Sequenza implementativa consigliata

| Ordine | Slice candidata | Tipo | Motivo |
|---|---|---|---|
| 1 | CML-434 Home task selector runtime | runtime micro-patch | minor rischio, azioni già validate |
| 2 | CML-435 Curricolo vigente/proposta/stato | runtime design patch | alto valore, alta severità |
| 3 | CML-436 Progetta path model spec | docs/research | prima serve processo didattico |
| 4 | CML-437 Progetta path selector runtime | runtime patch | dopo validazione esperti |
| 5 | CML-438 Esportazioni per task | runtime patch | dipende da Progetta |
| 6 | CML-439 Guida contestuale Progetta | docs/runtime microcopy | supporto operativo |

## 10. Prompt operativo per futura patch Home

```text
TASK: Implementare Home task selector CML-434. Branch: codex/cml-434-home-task-selector-runtime.

CONTEXT:
La Home deve diventare selettore rapido del compito. Evidenze: EVD-002, EVD-003, EVD-004. Mantenere le quattro azioni principali perché validate come chiare. Ridurre testi promozionali e card ripetitive. Rendere visibile validazione umana.

FILES YOU MAY TOUCH:
- index.html
- _published_snapshot/netlify-current/index.html
- docs/03_execution/CML-434.md
- report/CML-434_home_task_selector_runtime.md
- docs/02_system/PROJECT-STATE.md
- docs/02_system/PRODUCT-MATURITY-PROGRESS.md
- docs/REPO-MOVELOG.md

FILES YOU MUST NOT TOUCH:
- content/**
- tools/** unless validator invocation docs only
- service worker cache unless strictly required and justified

HARD RULES:
- Runtime pair must remain synchronized.
- No backend, no account, no remote data collection.
- Do not change curriculum data.
- Do not rename the four Home actions.
- Do not add new card layers to solve card overload.
- Use existing design tokens/classes where possible.
- If the existing DOM structure contradicts the brief, stop and report before broad refactor.

CHECKS:
- git diff --check
- node tools/validate-curriculum-data.js
- node tools/runtime-shape-test.js
- Playwright smoke desktop/mobile for Home navigation

REPORT:
- files changed
- screenshot list
- validator results
- what was deliberately not changed
- verdict
```

## 11. Review avversariale per futura patch

```text
Review CML-434 diff adversarially. Do not modify files.

Attack these claims:
1. Home is less cognitively dense than before.
2. The four primary actions remain clear and unchanged.
3. Human validation is more visible without adding long text.
4. No runtime/data/backend scope was expanded.
5. Desktop and mobile navigation still work.

Output numbered findings with severity, file/line, failing scenario and minimal fix.
No praise. No style nits unless they hide a usability or regression bug.
```

## 12. Acceptance criteria

CML-433 è accettata quando:

- le viste target sono definite;
- le hard rules per ogni vista sono esplicite;
- la sequenza implementativa è ordinata;
- il prompt futuro CML-434 è pronto;
- runtime e dati restano invariati.

## 13. Verdetto

```text
CML_433_TEACHER_TASK_VIEW_TARGET_SPEC_PUSHED_REMOTE
```
