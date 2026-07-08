# CML-421H — School Year Placement Expert Review

## Mandatory Slice Header

- Macroprogramma: PM-09 Validazione con utenti / PM-03 Orientamento / PM-05 Esperienza di lavoro / PM-07 Uniformità
- Dipende da: CML-421G
- Tipo slice: docs/expert-review-only remoto
- Branch: `remote-lab/cml-419-in2012-in2025-technical-table`
- Runtime: non modificato
- Main: non modificato

## Questione

Dove va collocato `anno scolastico` nell'architettura di CurManLight?

## Verdetto sintetico

```text
Anno scolastico è dato globale di contesto.
Si imposta in Impostazioni / Contesto di lavoro.
Si mostra in forma sintetica nell'header/chip contesto.
Si propaga a progettazione, esportazioni, report e backup.
Non è un filtro locale di Esportazione.
Non è una proprietà della sola Home.
```

## Expert review

### 1. Esperto governance scolastica

Decisione:

```text
Anno scolastico è necessario per distinguere materiali di lavoro, documenti prodotti, versioni curricolari e report.
```

Motivo:

```text
Una programmazione annuale, un programma svolto, una relazione finale o un report referente non sono interpretabili correttamente senza anno scolastico.
```

### 2. Esperto progettazione didattica

Decisione:

```text
Anno scolastico deve alimentare Programmazione annuale, UDA, programma svolto e relazione finale.
```

Motivo:

```text
Il docente lavora per classe e anno; la stessa classe o disciplina può avere materiali diversi in anni scolastici diversi.
```

### 3. Esperto UX/accessibilità

Decisione:

```text
Anno scolastico deve essere visibile ma non invadente.
```

Forma consigliata:

```text
chip di contesto: Tecnologia · Secondaria · A.S. 2026/27
```

oppure:

```text
Contesto attivo: Tecnologia · Secondaria · A.S. 2026/27
```

### 4. Esperto architettura dati

Decisione:

```text
Anno scolastico deve stare nel Contesto di lavoro e nei metadata degli export.
```

Motivo:

```text
Serve per salvataggio locale, backup, export, report e futura separazione dei materiali per anno.
```

## Collocazione canonica

### Fonte primaria di impostazione

```text
Impostazioni / Contesto di lavoro / Anno scolastico
```

### Visualizzazione sintetica

```text
Header / chip contesto
```

Esempio:

```text
Tecnologia · Secondaria · A.S. 2026/27
```

### Propagazione obbligatoria

Anno scolastico deve comparire in:

```text
programmazione annuale per classe
UDA
programma svolto
relazione finale
sintesi percorso
proposta docente .cml
esito dipartimentale .cml
report referente
backup locale
pacchetti classe/dipartimento/anno
```

## Dove NON va collocato come origine

```text
Non dentro Esportazione come configurazione primaria.
Non solo nella Home.
Non solo nei singoli documenti.
Non come campo libero ripetuto ogni volta.
```

Esportazione può richiederlo solo se manca dal Contesto di lavoro.

## Regola UI

Se l'anno scolastico manca:

```text
Completa l'Anno scolastico in Impostazioni / Contesto di lavoro per generare documenti per classe o report.
```

Se è presente:

```text
Mostrare in header/chip sintetico e precompilare gli export.
```

## Regola documentale

Ogni documento scolastico generato deve includere:

```text
Istituto
Anno scolastico
Ordine
Classe, se pertinente
Disciplina/ambito
Docente/ruolo, se pertinente
Versione curricolare di riferimento
Stato documento
```

## Impatto sul Visual Contract

CML-421G va integrato con una sezione esplicita:

```text
Anno scolastico come dato canonico del Contesto di lavoro
```

## Non autorizzato

CML-421H non autorizza:

- runtime;
- modifica di index.html;
- deploy;
- merge su main.

## Verdict

```text
CML_421H_SCHOOL_YEAR_PLACEMENT_EXPERT_REVIEW_READY_REMOTE_BRANCH
```
