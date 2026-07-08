# CML-419B — Technical Table Coherence Audit Report

## 1. Scopo

Verificare se il pacchetto CML-419/CML-419A è abbastanza coerente per autorizzare una fase successiva CML-420.

## 2. Decisione sintetica

```text
Procedere a CML-420 solo come prototipo informativo/navigazionale verificabile.
```

Non procedere ancora a runtime definitivo.

## 3. Condizioni confermate

| Area | Esito |
|---|---|
| Tavolo tecnico IN2012/IN2025 | coerente |
| Sistema a quattro ambienti | coerente |
| Source Verification Agent | necessario e correttamente integrato |
| Matrice fonti | sufficiente per prototipo, non per certificazione definitiva |
| Fonti istituto | repo-defined, verifica esterna pendente |
| IN2025 | fonte candidata, non classificabile come vigente |
| Curricolo verticale pubblicato | non risolto |
| Runtime | non toccato |
| Main | non toccato |

## 4. Decisioni vincolanti

### D-001 — IN2025

IN2025 resta:

```text
materiale/proposta da valutare
```

Non deve essere presentata come curricolo vigente o adottato.

### D-002 — Fonti istituto

Scuola in Chiaro, sito, PTOF e RAV possono essere usati nel prototipo come:

```text
fonti definite nel repository, verifica esterna pendente
```

### D-003 — Curricolo definitivo

La vista Curricolo definitivo non può dichiarare un documento adottato finché non viene risolta la fonte del curricolo verticale pubblicato o un atto esterno.

### D-004 — CML-420

CML-420 deve essere progettato come:

```text
prototipo IA/navigazione principale
```

Non come riscrittura dell'app.

## 5. Perimetro ammesso per CML-420

- Home a quattro accessi;
- architettura informativa principale;
- mappa navigazionale desktop/mobile;
- microcopy di stato fonte/versione;
- priorità delle viste;
- prototipo/wireframe logico;
- checklist di test utente.

## 6. Fuori perimetro CML-420

- backend;
- Drive/Workspace;
- login istituzionale;
- cambio stack;
- automazione crawling fonti;
- approvazione curricolo;
- adozione curricolo;
- refactor completo runtime;
- modifica profonda dei dati curricolari.

## 7. Rischi residui

| Rischio | Gravità | Mitigazione |
|---|---:|---|
| IN2025 percepita come vigente | Alta | Etichetta prudente sempre visibile |
| Fonti istituto date per certificate | Media | Marcatura repo-defined/verifica esterna pendente |
| Curricolo definitivo anticipato | Alta | Stato non disponibile/in preparazione finché SRC-016 non risolta |
| Mock troppo ampio | Media | CML-420 limitato a IA e navigazione |
| Runtime prematuro | Alta | Nessuna implementazione prima del prototipo approvato |

## 8. Raccomandazione finale

Procedere con:

```text
CML-420 — IA e navigazione principale: prototipo verificabile
```

CML-420 dovrà produrre un prototipo logico/documentale delle viste prioritarie, non una modifica runtime definitiva.

## Verdict

```text
CML_419B_TECHNICAL_TABLE_COHERENCE_AUDIT_REPORT_READY_REMOTE_BRANCH
```
