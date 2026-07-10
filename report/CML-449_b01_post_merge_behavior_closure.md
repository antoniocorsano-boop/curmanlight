# CML-449 — B01 Post-Merge Behavior Closure

> Data: 2026-07-10  
> Base finale: `main` dopo CML-449A, CML-449B e CML-449C  
> Tipo: verifica post-merge e chiusura comportamentale  
> Percorso: `B01 — Entrare e orientarsi`

## 1. Obiettivo

Verificare che l’implementazione CML-448 sia presente su `main`, che i controlli automatici risultino superati e che il percorso B01 sia utilizzabile su desktop e mobile nell’anteprima React pubblicata.

## 2. Catena verificata

### CML-448 — Implementazione B01

- PR #38 integrata;
- commit di merge `15e459ddf48716bb8f6c310fa95a344c214287b2`;
- Home orientata ai compiti;
- Consultazione, Proposta ed Esportazioni collegate a viste reali;
- Progettazione visibile ma non operativa;
- Impostazioni reale;
- viste incomplete escluse dalla navigazione;
- intestazione coerente con la vista corrente.

### CML-449A — Anteprima separata

- PR #40 integrata;
- candidato React pubblicato nel percorso isolato `/curmanlight/react-preview/`;
- runtime legacy mantenuto alla radice;
- nessuna sostituzione della versione ufficiale.

### CML-449B — Audit interattivo

Il primo audit con Chromium/Playwright ha rilevato un blocco mobile:

- menu aperto al caricamento;
- sovrapposizione al contenuto;
- assenza di fondale oscurato;
- percorso mobile non considerabile concluso.

### CML-449C — Correzione mobile

- PR #42 integrata;
- commit di merge `df759ee28f9ad405b2a42b6a320cf348790ae634`;
- menu chiuso inizialmente su schermo ridotto;
- pannello mobile opaco;
- fondale oscurato;
- chiusura su fondale, tasto Esc e selezione della destinazione;
- blocco dello scorrimento mentre il menu è aperto;
- CI React interamente positiva.

## 3. Controlli automatici

La CI React ha superato:

- `npm ci`;
- `npm run lint`;
- `npm run test:b01`;
- `npm run build`.

L’audit remoto finale ha eseguito Chromium sull’anteprima pubblicata con:

- viewport desktop `1440 × 1000`;
- viewport mobile `390 × 844`.

Esito finale:

- **28 controlli superati su 28**;
- **0 controlli falliti**;
- **0 errori console**.

## 4. Risultati verificati

| Gate | Desktop | Mobile |
|---|---:|---:|
| Home e titolo iniziale | PASS | PASS |
| Quattro attività visibili | PASS | PASS |
| Progettazione non operativa | PASS | PASS |
| Consultazione raggiungibile | PASS | PASS |
| Proposta raggiungibile | PASS | PASS |
| Esportazioni raggiungibili | PASS | PASS |
| Impostazioni raggiungibili | PASS | PASS |
| Salvataggio del contesto | PASS | PASS |
| Disciplina conservata nella sessione | PASS | PASS |
| Menu apribile | PASS | PASS |
| Menu chiuso dopo navigazione | PASS | PASS |
| Errori console | 0 | 0 |

## 5. Evidenze prodotte

L’audit ha prodotto schermate di:

- Home desktop e mobile;
- Consultazione desktop e mobile;
- Proposta desktop e mobile;
- Esportazioni desktop e mobile;
- Impostazioni desktop e mobile;
- stato mobile dopo la navigazione.

Gli strumenti di audit sono stati integrati con PR #41 e possono essere riutilizzati nei cicli successivi.

## 6. Limiti residui

La chiusura B01 non equivale alla validazione complessiva del prodotto.

Restano fuori dal perimetro:

- prova con docenti non tecnici;
- persistenza completa tra sessioni, prevista nel ciclo B04;
- completamento del percorso di progettazione;
- parità completa con il runtime legacy;
- decisione finale di sostituzione della versione pubblicata.

Questi elementi non riaprono B01.

## 7. Decisione

Il percorso `B01 — Entrare e orientarsi` è dichiarato **chiuso tecnicamente, visivamente e interattivamente nel candidato React**.

La migrazione può passare a:

`B02 — Consultare e comprendere il curricolo`.

## 8. Prossima slice

**CML-450 — B02 Consultation and Understanding Behavior Gap Audit**

Obiettivo:

- confrontare comportamento atteso, runtime legacy, audit pregressi e candidato React;
- verificare selezione della disciplina, ordine di scuola, stato curricolare, fonti, filtri e densità informativa;
- produrre scarti, priorità e criteri di chiusura senza modificare il runtime.

## 9. Verdetto

```text
CML_449_B01_POST_MERGE_VISUAL_INTERACTIVE_CLOSURE_READY_REMOTE_BRANCH
```
