# CML-449 — B01 Post-Merge Behavior Closure

> Data: 2026-07-10  
> Base: `main` a `15e459dd`  
> Tipo: verifica post-merge, solo documentazione  
> Percorso: `B01 — Entrare e orientarsi`

## 1. Obiettivo

Verificare che l’implementazione CML-448 sia effettivamente presente su `main`, che i controlli obbligatori risultino superati e che il percorso B01 possa essere chiuso sul piano strutturale e automatico.

## 2. Evidenze verificate

### Integrazione

- PR #38 integrata;
- commit di merge: `15e459ddf48716bb8f6c310fa95a344c214287b2`;
- 9 file React/CI modificati;
- nessuna modifica al runtime legacy pubblicato;
- nessun deploy del candidato React.

### Controlli pre-merge

La CI della testa finale `fea8f773` ha superato:

- `npm ci`;
- `npm run lint`;
- `npm run test:b01`;
- `npm run build`.

I due rilievi di revisione sono stati corretti prima del merge:

- conservazione della disciplina selezionata riaprendo Impostazioni;
- chiusura del menu mobile dopo la selezione della destinazione.

### Contenuto effettivo su main

La Home integrata presenta:

- domanda iniziale “Cosa vuoi fare oggi?”;
- “Consulta il curricolo” con destinazione reale;
- “Prepara una progettazione” visibile ma non operativa;
- “Proponi un aggiornamento” con destinazione reale;
- “Esporta un documento” con destinazione reale;
- accesso esplicito a Impostazioni;
- richiamo alla validazione umana.

La navigazione operativa filtra le viste non disponibili. L’intestazione usa il titolo della vista corrente. Impostazioni costituisce una destinazione reale e consente di definire il contesto minimo di lavoro.

## 3. Verifica dei gate CML-447

| Gate | Esito |
|---|---|
| Home formulata come insieme di compiti | PASS |
| Consultazione conduce a vista reale | PASS |
| Proposta conduce a vista reale | PASS |
| Esportazione conduce a vista reale | PASS |
| Progettazione non apre un segnaposto operativo | PASS |
| Impostazioni è una destinazione reale | PASS |
| Viste incomplete escluse dalla navigazione operativa | PASS |
| Intestazione coerente con la vista | PASS |
| Disciplina conservata durante la navigazione | PASS dopo correzione review |
| Menu mobile richiudibile dopo la navigazione | PASS dopo correzione review |
| Lint, controllo B01 e build | PASS |
| Runtime legacy invariato | PASS |
| Deploy React non attivato | PASS |

## 4. Limite della chiusura

B01 è chiuso sul piano:

- strutturale;
- funzionale dichiarato;
- statico;
- di compilazione;
- di controllo automatico.

Non è ancora stato eseguito un test visivo interattivo del candidato React in un ambiente pubblicato o di anteprima. Questo non riapre CML-448, ma deve essere effettuato prima di dichiarare la nuova applicazione pronta alla sostituzione del runtime legacy.

Il test con docenti non tecnici resta parte della validazione complessiva del prodotto e non blocca l’avvio del ciclo successivo.

## 5. Decisione

Il percorso `B01 — Entrare e orientarsi` è dichiarato **chiuso tecnicamente nel candidato React**.

La migrazione può passare a:

`B02 — Consultare e comprendere il curricolo`.

## 6. Prossima slice

**CML-450 — B02 Consultation and Understanding Behavior Gap Audit**

Obiettivo:

- confrontare il comportamento atteso di consultazione con runtime legacy, audit pregressi e candidato React;
- verificare selezione disciplina, ordine di scuola, stato curricolare, fonti, filtri e densità informativa;
- produrre scarti, priorità e criteri di chiusura senza modificare il runtime.

## 7. Verdetto

```text
CML_449_B01_POST_MERGE_BEHAVIOR_CLOSURE_READY_REMOTE_BRANCH
```
