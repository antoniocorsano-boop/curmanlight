# CML-421F — Mock D2 Usability Review

## Mandatory Slice Header

- Macroprogramma: PM-09 Validazione con utenti / PM-03 Orientamento / PM-05 Esperienza di lavoro / PM-06 Accompagnamento / PM-07 Uniformità
- Dipende da: CML-421E-SELECTION, CML-421G, CML-421H
- Tipo slice: docs/usability-review-only remoto
- Branch: `remote-lab/cml-419-in2012-in2025-technical-table`
- Runtime: non modificato
- Main: non modificato

## Scopo

Verificare la direzione visuale e funzionale:

```text
D2 — Ibrido guidato-professionale con sobrietà istituzionale
```

prima di passare a una futura decisione runtime.

## Formula D2 da verificare

```text
Guidato per il docente.
Professionale nelle viste avanzate.
Sobrio nella cornice istituzionale.
```

## Profili simulati

```text
Docente non tecnico
Coordinatore/dipartimento
Referente curricolo
Dirigente/collaboratore governance
Utente mobile
```

## Criteri di review

| Criterio | Domanda |
|---|---|
| Orientamento | l'utente capisce dove andare? |
| Azione | l'utente capisce cosa fare ora? |
| Contesto | anno scolastico, disciplina, ordine e classi sono chiari? |
| Curricolo | IN2012/IN2025, fonti e versioni sono distinguibili? |
| Progettazione | programmazione annuale e UDA risultano raggiungibili? |
| Esportazione | i documenti scolastici sono più evidenti dei formati? |
| Governance | sintesi finale non viene confusa con approvazione? |
| Mobile | le viste restano compatte e usabili? |
| Visual Contract | il mock rispetta CML-421G e CML-421H? |

## Scenario 1 — Docente non tecnico / Home

### Vista D2 attesa

```text
Ambiente curricolare d'istituto
Contesto: Tecnologia · Secondaria · A.S. 2026/27

Cosa vuoi fare oggi?

[Consulta il curricolo]
[Prepara una progettazione]
[Esporta un documento]
[Verifica fonti e limiti]

La validazione resta umana. L'app prepara materiali di lavoro, non approva il curricolo.
```

### Esito review

```text
PASS
```

Motivazione:

```text
La domanda guida aiuta il docente.
La cornice istituzionale resta leggibile.
I quattro accessi sono comprensibili.
Anno scolastico nel chip contesto è corretto.
```

### Rischio residuo

```text
Il testo di validazione non deve diventare troppo lungo in Home.
```

## Scenario 2 — Docente / Progettazione didattica

### Vista D2 attesa

```text
Che cosa vuoi preparare?

[Parti dal curricolo]
[Programmazione annuale]
[UDA]
[Evidenze e collegamenti]
```

### Esito review

```text
PASS con riserva
```

Motivazione:

```text
La logica guidata è corretta.
Programmazione annuale e UDA sono visibili.
Serve però una microcopy chiara per distinguere programmazione annuale, UDA e documenti finali.
```

### Correzione richiesta

```text
Aggiungere una frase breve: "Qui prepari bozze didattiche collegate al curricolo. I documenti finali si esportano nella sezione Esportazione."
```

## Scenario 3 — Docente / Esportazione

### Vista D2 attesa

```text
Che documento devi preparare?

Per la classe:
- Programmazione annuale
- Programma svolto
- Relazione finale
- Sintesi percorso

Per il processo:
- Proposta docente .cml
- Esito dipartimentale .cml
- Report referente
```

### Esito review

```text
PASS
```

Motivazione:

```text
Il documento scolastico viene prima del formato.
Anno scolastico è richiesto dal Contesto di lavoro.
File .cml resta distinto dai documenti ordinari.
```

### Rischio residuo

```text
Non mescolare documenti per classe e file di processo nella stessa card visiva.
```

## Scenario 4 — Referente / Fonti e versioni

### Vista D2 attesa

```text
Tabella fonti/versioni
Scheda dettaglio leggera
Stato fonte: confermata / candidata / repo-defined / non risolta
Stato versione: vigente / proposta / sintesi finale / in attesa atto
```

### Esito review

```text
PASS
```

Motivazione:

```text
C leggero è adatto alle viste avanzate.
Aiuta il referente senza caricare la Home o il docente.
```

### Vincolo

```text
Il pannello C deve restare contestuale, non permanente in tutta l'app.
```

## Scenario 5 — Processo / Governance

### Vista D2 attesa

```text
Docente → Dipartimento → Referente → Organi esterni

Azioni:
- importa proposta
- registra esito
- prepara sintesi
- esporta materiale

Avviso:
La Sintesi finale è esito tecnico. Non equivale ad approvazione collegiale.
```

### Esito review

```text
PASS
```

Motivazione:

```text
La pipeline è corretta.
La distinzione tra lavoro tecnico e approvazione esterna è esplicita.
```

## Scenario 6 — Impostazioni / Contesto di lavoro

### Vista D2 attesa

```text
Anno scolastico
Istituto
Ordine di scuola
Plesso / sede
Ruolo
Disciplina o ambito
Classi assegnate
Versione curricolare di riferimento
```

### Esito review

```text
PASS
```

Motivazione:

```text
Anno scolastico è collocato correttamente.
Il contesto resta globale e non viene duplicato in Esportazione.
```

### Vincolo

```text
Il salvataggio del contesto deve restare locale e comprensibile.
```

## Scenario 7 — Mobile

### Vista D2 attesa

```text
Topbar: Ambiente + stato breve + impostazioni
Bottom bar: Curricolo | Progetta | Esporta | Guida
Card a colonna singola
Dettagli fonte/stato espandibili
```

### Esito review

```text
PASS con riserva
```

Motivazione:

```text
Il modello B è corretto su mobile.
Le viste C leggere devono diventare drawer/accordion, non pannelli fissi.
```

### Correzione richiesta

```text
Su mobile: Fonti, Versioni e Processo devono usare sezioni espandibili.
```

## Sintesi esiti

| Scenario | Esito |
|---|---|
| Home docente | PASS |
| Progettazione | PASS con riserva |
| Esportazione | PASS |
| Fonti/versioni | PASS |
| Processo/governance | PASS |
| Contesto/anno scolastico | PASS |
| Mobile | PASS con riserva |

## Decisione CML-421F

```text
Mock D2 confermato come direzione pre-runtime.
```

Non richiede ritorno a A/B/C.

Richiede due correzioni prima di CML-422:

```text
1. microcopy Progettazione: chiarire bozze didattiche vs documenti finali;
2. mobile: pannelli C come sezioni espandibili, non pannelli fissi.
```

## Implicazione per CML-422

CML-422 può essere aperto solo come:

```text
Runtime Scope Decision
```

non come implementazione diretta.

La prima micro-slice runtime dovrà essere piccola, conforme a CML-421G/H/F e preferibilmente focalizzata su uno dei seguenti ambiti:

```text
1. Impostazioni / Contesto di lavoro con anno scolastico;
2. Home D2 con chip contesto e quattro azioni guidate;
3. Esportazione per documento con avviso contesto mancante.
```

## Non autorizzato

CML-421F non autorizza:

- runtime;
- modifica di `index.html`;
- deploy;
- merge su main;
- implementazione dell'intero mock D2.

## Verdict

```text
CML_421F_MOCK_D2_USABILITY_REVIEW_PASS_WITH_MINOR_RESERVATIONS_REMOTE_BRANCH
```
