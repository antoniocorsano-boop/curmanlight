# CML-421B — School Document Export Needs Audit

## Mandatory Slice Header

- Macroprogramma: PM-09 Validazione con utenti / PM-05 Esperienza di lavoro / PM-07 Uniformità
- Dipende da: CML-421, CML-421A, CML-421C
- Tipo slice: docs/design-audit-only remoto
- Branch: `remote-lab/cml-419-in2012-in2025-technical-table`
- Runtime: non modificato
- Main: non modificato

## Origine

Questa slice nasce dal rilievo:

```text
CML-421-R004 — Esportazione per documenti scolastici ricorrenti
```

Durante il test simulato è emerso che l'area Esportazione deve essere organizzata per documenti scolastici reali, non solo per formati o file tecnici.

## Obiettivo

Definire gli output scolastici necessari a docente, dipartimento, referente e governance prima di implementare un centro esportazioni maturo.

La slice recupera anche ciò che il runtime `index.html` contiene già: export Word, bozza UDA Markdown, file `.cml`, backup locale, esito dipartimentale e report referente.

## Principio

L'utente deve partire dal bisogno scolastico:

```text
Che documento devo preparare?
Per quale classe, ruolo o fase di lavoro?
```

Non dal formato file.

## Export già presenti nel runtime

| Area | Export già presente / seme funzionale |
|---|---|
| Curricolo | documento Word completo / solo approvati |
| Revisione | riepilogo finale in verifica |
| UDA | bozza UDA in Markdown, copia e download |
| Backup | copia locale JSON e import backup |
| Docente | proposta `.cml` / schema teacher proposal |
| Dipartimento | import proposte, esito dipartimentale `.cml` |
| Referente | import esiti, report gruppo curricolo Markdown |
| Processo | report con cautele e validazione umana |

## Struttura esportazione corretta

```text
Esportazione
├─ Per la classe
│  ├─ Programmazione annuale
│  ├─ Programma svolto
│  ├─ Relazione finale
│  └─ Sintesi percorso
├─ Per la progettazione
│  ├─ UDA
│  ├─ Evidenze
│  ├─ Rubriche
│  └─ Collegamenti curricolo
├─ Per il curricolo
│  ├─ Estratto disciplinare
│  ├─ Documento curricolo
│  ├─ Fonti e versioni
│  └─ Sintesi finale
├─ Per il processo
│  ├─ Proposta docente .cml
│  ├─ Esito dipartimentale
│  ├─ Report referente
│  └─ Materiale per discussione collegiale
└─ Archivio e sicurezza
   ├─ Copia locale
   ├─ Pacchetto classe
   ├─ Pacchetto dipartimento
   └─ Backup .cml / JSON locale
```

## Relazione con Impostazioni

Il Contesto di lavoro non appartiene a Esportazione.

Esportazione usa il contesto globale già impostato in:

```text
Impostazioni / Contesto di lavoro
```

Se il contesto manca, Esportazione mostra solo un avviso:

```text
Per generare documenti per classe devi prima completare il Contesto di lavoro nelle Impostazioni.
```

## Catalogo documenti per classe

### Programmazione annuale per classe

Campi minimi:

```text
anno scolastico
istituto
plesso
ordine
classe
disciplina/ambito
docente
versione curricolare di riferimento
nuclei / unità / periodi
traguardi collegati
obiettivi collegati
metodologie
strumenti
verifiche
criteri di valutazione
inclusione/personalizzazione
note di raccordo
stato documento
```

### Programma svolto per classe

Campi minimi:

```text
classe
disciplina
docente
periodo/anno
unità effettivamente svolte
contenuti trattati
attività rilevanti
competenze/evidenze osservate
eventuali scostamenti dalla programmazione
note per continuità
```

### Relazione finale per classe

Campi minimi:

```text
classe
disciplina
docente
situazione generale
obiettivi raggiunti
obiettivi parzialmente raggiunti
metodologie effettive
strumenti e ambienti
valutazione complessiva
criticità
proposte per anno successivo
note inclusione senza dati personali
```

### Sintesi percorso

Documento breve per consiglio di classe o continuità:

```text
classe
disciplina
nuclei affrontati
evidenze principali
aspetti da consolidare
raccordi interdisciplinari
```

## Catalogo documenti per progettazione

```text
UDA
Evidenze selezionate
Rubriche
Collegamenti curricolo
Compiti autentici / prodotti
Percorsi interdisciplinari
```

Nota: il runtime ha già una bozza UDA Markdown; va recuperata come P1.

## Catalogo documenti per curricolo

```text
Estratto disciplinare
Documento curricolo completo
Documento solo voci approvate/confermate
Fonti e versioni
Sintesi finale del processo tecnico
```

Regola:

```text
Sintesi finale non equivale ad approvazione collegiale.
```

## Catalogo documenti per processo

```text
Proposta docente .cml
Esito dipartimentale .cml
Report referente / gruppo curricolo
Materiale per discussione collegiale
Quadro decisioni aperte
```

Il runtime contiene già:

```text
fileType: teacher_proposal
fileType: department_outcome
humanValidationRequired: true
report gruppo curricolo
```

## Catalogo archivio e sicurezza

```text
Copia locale del lavoro
Backup JSON locale
Import backup
Pacchetto classe
Pacchetto dipartimento
Pacchetto anno scolastico
```

## Classificazione documenti

| Tipo | Valore |
|---|---|
| Bozza locale | documento generato da CML, da verificare |
| Materiale di lavoro | utile per docente/dipartimento/referente |
| Esito tecnico | sintesi o report dopo confronto |
| Documento verificato | controllato umanamente |
| Atto formale | esterno all'app |

## Cautele obbligatorie

Ogni export deve indicare quando necessario:

```text
Fonte curricolare
Stato versione
Stato documento
Validazione umana richiesta
Nessun valore deliberativo automatico
Non inserire dati personali o sensibili
```

## Priorità runtime futura

```text
P1 — Consolidare Esportazione per scopo/documento
P1 — Recuperare UDA Markdown già presente
P1 — Esporre backup locale in Archivio e sicurezza
P1 — Mantenere proposta docente .cml ed esito dipartimento .cml
P2 — Programmazione annuale per classe
P2 — Programma svolto per classe
P2 — Relazione finale per classe
P2 — Report referente migliorato
P3 — Pacchetti classe/dipartimento/anno
P3 — Rubriche avanzate e documenti interdisciplinari
```

## Decisioni progettuali

### D-001 — Esportazione per documento, non per formato

La vista deve chiedere prima il documento scolastico, poi il formato.

### D-002 — Documenti per classe dipendono dal Contesto di lavoro

Senza classe/disciplina/anno scolastico non si genera documento per classe.

### D-003 — Separare documento didattico e file `.cml`

Il file `.cml` è file di lavoro del processo, non documento ordinario per il docente.

### D-004 — Relazione finale e programma svolto sono output prioritari

Sono documenti scolastici ricorrenti e devono entrare nel catalogo, anche se non subito in runtime P1.

### D-005 — Il runtime già offre basi utili

Non ripartire da zero: Word, UDA Markdown, `.cml`, backup, report referente e import dipartimento vanno recuperati.

## Non autorizzato

CML-421B non autorizza:

- runtime;
- export automatici definitivi;
- documenti istituzionali non verificati;
- cambio stack;
- merge su main.

## Output prodotti

- `docs/03_execution/CML-421B.md`
- `report/CML-421B_school_document_export_needs_audit.md`

## Verdict

```text
CML_421B_SCHOOL_DOCUMENT_EXPORT_NEEDS_AUDIT_COMPLETED_FROM_RUNTIME_INDEX_REMOTE_BRANCH
```
