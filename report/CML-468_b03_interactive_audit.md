# CML-468 — B03 Interactive Audit Report

## Esito sintetico

L’audit Chromium ha dimostrato che l’infrastruttura B03 introdotta da CML-463–467 compila e supera i contratti automatici, ma non è ancora raggiungibile come flusso operativo completo perché manca il livello dati di confronto.

## Evidenze

- React CI PASS sulla branch di audit;
- build Vite servita correttamente su preview locale GitHub Actions;
- Chromium avviato correttamente;
- navigazione desktop e mobile funzionante;
- form Impostazioni compilabile e salvabile nella sessione;
- Revisione raggiungibile;
- persistenza B03 inizializzata senza errori console;
- 14 discipline presenti nel selettore;
- 0 discipline con `GapLayer` disponibile;
- 0 card decisionali azionabili.

## Diagnosi

`useGapLayer` cerca moduli nel percorso:

```text
src/data/gap/<slug>.gap.json
```

Nella build corrente non è disponibile alcun modulo corrispondente. Di conseguenza la UI applica correttamente il fallback “Funzione non disponibile”.

Non si tratta di un errore dei pulsanti, dello store o della persistenza: manca l’input di dominio che alimenta il confronto vigente/proposta.

## Correzioni del test

Durante l’audit sono stati eliminati falsi negativi dovuti a:

- selettori Playwright ambigui nel form;
- messaggio iniziale valido “Nessun lavoro precedente da ripristinare”;
- assunzione errata che Tecnologia avesse già un gap layer;
- necessità di selezionare dinamicamente una disciplina azionabile.

Dopo tali correzioni l’audit continua a fallire esclusivamente perché nessuna disciplina è azionabile.

## Rischio prodotto

Senza almeno un gap layer verificabile:

- B03 non può essere provato da un docente;
- non è possibile validare realmente accoglimento, mantenimento, revisione o personalizzazione;
- la persistenza è verificata solo contrattualmente, non attraverso il percorso UI completo;
- la dicitura “percorso B03 completo” deve essere intesa come completezza del motore, non ancora del prodotto utilizzabile.

## Prossima slice necessaria

Una slice dati dedicata deve:

1. individuare una fonte reale e tracciabile delle proposte IN 2025;
2. definire la corrispondenza tra unità vigente e testo proposto;
3. produrre `GapLayer` conformi a `gap-v1`;
4. validare ID, ordine, nucleo, fonte e stato;
5. evitare trasformazioni automatiche presentate come contenuto normativo certo;
6. riattivare e superare l’audit CML-468.

## Verdetto

```text
CML_468_B03_INTERACTIVE_AUDIT_BLOCKED_NO_GAP_LAYER_AVAILABLE
```
