# CML-421H — School Year Placement Report

## 1. Scopo

Consolidare la collocazione di `Anno scolastico` nell'architettura informativa e nel Visual Contract canonico.

## 2. Decisione

```text
Anno scolastico è dato globale di contesto.
```

Origine canonica:

```text
Impostazioni / Contesto di lavoro / Anno scolastico
```

Visualizzazione sintetica:

```text
Header / chip contesto
```

Esempio:

```text
Tecnologia · Secondaria · A.S. 2026/27
```

## 3. Propagazione

Anno scolastico deve comparire nei metadata di:

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

## 4. Dove non va messo come origine

```text
Non dentro Esportazione come configurazione primaria.
Non solo nella Home.
Non solo nei singoli documenti.
Non come campo libero ripetuto ogni volta.
```

## 5. Regola UI

Se manca:

```text
Completa l'Anno scolastico in Impostazioni / Contesto di lavoro per generare documenti per classe o report.
```

Se presente:

```text
Usarlo nel chip di contesto e precompilare documenti/export.
```

## 6. Visual Contract aggiornato

Aggiornato:

```text
docs/04_design/CML-421G_canonical_visual_contract.md
```

Nuove regole aggiunte:

```text
Anno scolastico come dato canonico del Contesto di lavoro
Anno scolastico nei metadata documentali
Anno scolastico in Card documento
Icona calendario per Anno scolastico
Divieto di configurarlo solo in Esportazione
Gate runtime: dichiarare come viene gestito Anno scolastico
```

## 7. Runtime status

```text
Runtime non modificato
Main non modificato
Deploy non eseguito
```

## Verdict

```text
CML_421H_SCHOOL_YEAR_PLACEMENT_CONSOLIDATED_REMOTE_BRANCH
```
