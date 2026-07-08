# CML-421B — School Document Export Needs Audit Report

## 1. Scopo

Completare l'audit sui documenti scolastici da esportare, recuperando ciò che `index.html` contiene già e ordinandolo secondo bisogni reali della scuola.

## 2. Export già presenti nel runtime

| Output | Stato runtime | Decisione |
|---|---|---|
| Documento Word curricolo | presente | conservare |
| Documento Word solo approvati/confermati | presente | conservare con lessico aggiornato |
| Bozza UDA Markdown | presente | recuperare come P1 |
| Copia/Download UDA | presente | conservare |
| Backup locale JSON | presente | spostare concettualmente in Archivio e sicurezza |
| Import backup | presente | conservare |
| Proposta docente `.cml` | presente come schema/flusso | conservare |
| Import proposte dipartimento | presente | conservare |
| Esito dipartimentale `.cml` | presente | conservare |
| Report referente / gruppo curricolo | presente | conservare |

## 3. Documenti scolastici da aggiungere al catalogo

### Per la classe

```text
Programmazione annuale per classe
Programma svolto per classe
Relazione finale per classe
Sintesi percorso
```

### Per la progettazione

```text
UDA
Evidenze
Rubriche
Collegamenti curricolo
Compiti autentici / prodotti
Percorsi interdisciplinari
```

### Per il curricolo

```text
Estratto disciplinare
Documento curricolo completo
Documento solo voci confermate/approvate
Fonti e versioni
Sintesi finale
```

### Per il processo

```text
Proposta docente .cml
Esito dipartimentale .cml
Report referente
Materiale per discussione collegiale
Quadro decisioni aperte
```

### Archivio e sicurezza

```text
Copia locale
Backup JSON
Import backup
Pacchetto classe
Pacchetto dipartimento
Pacchetto anno scolastico
```

## 4. Decisioni chiave

### D-001 — Esportazione per documento

La vista deve partire dal documento scolastico richiesto, non dal formato.

### D-002 — Contesto globale

I documenti per classe dipendono da:

```text
Impostazioni / Contesto di lavoro
```

Non da una configurazione interna a Esportazione.

### D-003 — Separare documenti e file di lavoro

`.cml` resta file di lavoro/processo, non documento ordinario.

### D-004 — Documenti ricorrenti prioritari

Programmazione annuale, programma svolto e relazione finale sono prioritari perché ricorrono nel lavoro docente reale.

### D-005 — Recuperare, non rifare

Il runtime ha già basi funzionanti: Word, UDA Markdown, `.cml`, backup, import dipartimento, report referente.

## 5. Priorità runtime futura

```text
P1 — Esportazione per documento/scopo
P1 — UDA Markdown già presente
P1 — Backup in Archivio e sicurezza
P1 — Proposta docente .cml ed esito dipartimento .cml
P2 — Programmazione annuale per classe
P2 — Programma svolto per classe
P2 — Relazione finale per classe
P2 — Report referente migliorato
P3 — Pacchetti classe/dipartimento/anno
P3 — Rubriche avanzate e documenti interdisciplinari
```

## 6. Criteri per runtime futuro

Prima di implementare export nuovi, verificare:

```text
Contesto di lavoro presente
Classe/disciplina/anno definiti
Fonte curricolare indicata
Stato versione indicato
Stato documento indicato
Validazione umana dichiarata
Assenza di dati personali o sensibili
```

## 7. Runtime status

```text
Runtime non modificato
Main non modificato
Deploy non eseguito
```

## Verdict

```text
CML_421B_SCHOOL_DOCUMENT_EXPORT_NEEDS_AUDIT_COMPLETED_FROM_RUNTIME_INDEX_REMOTE_BRANCH
```
