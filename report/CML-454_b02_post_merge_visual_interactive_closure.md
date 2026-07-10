# CML-454 — B02 Post-Merge Visual Interactive Closure

> Data: 2026-07-10  
> Base: `main` dopo CML-452 e CML-453  
> Tipo: chiusura comportamentale, solo documentazione  
> Percorso: `B02 — Consultare e comprendere il curricolo`

## 1. Catena verificata

### CML-450 — Audit degli scarti

Ha individuato come blocchi principali:

- consultazione mescolata alla revisione;
- ordine di scuola implicito;
- fonte, stato e validazione non esposti;
- filtro per nucleo non disponibile nella UI;
- dettaglio curricolare irraggiungibile.

### CML-451 — Contratto realizzativo

Ha definito:

- consultazione read-only;
- curricolo di riferimento esplicito;
- filtri disciplina, ordine e nucleo;
- card sintetiche con dettaglio espandibile;
- stati vuoti distinti;
- audit obbligatorio desktop e mobile.

### CML-452 — Implementazione React

PR #45 integrata con commit di merge:

`24998c84430c7838f07ed5dd7f32863e86114b58`

La realizzazione ha introdotto:

- sincronizzazione dei metadati generali del curricolo;
- filtri diretti di disciplina, ordine e nucleo;
- riepilogo con stato, fonte e validazione;
- consultazione read-only;
- dettaglio con competenza, obiettivi, conoscenze, abilità, evidenze e criteri;
- test automatico `test:b02`;
- CI completa positiva.

### CML-453 — Audit dell’anteprima pubblicata

PR #46 integrata con commit di merge:

`851cbd5004b98e53005f8a90e24497418e969fa5`

L’audit ha eseguito Chromium su:

- desktop `1440 × 1000`;
- mobile `390 × 844`.

## 2. Esito dei controlli

- **46 controlli superati su 46**;
- **0 controlli falliti**;
- **0 errori console**.

Sono stati verificati:

- nessuna disciplina preimpostata;
- tutte le 14 discipline canoniche;
- ordine e nucleo inizialmente inibiti e poi attivati;
- metadati di riferimento, fonte e validazione;
- cambio dell’ordine;
- selezione del nucleo;
- coerenza del numero dei risultati;
- apertura e chiusura del dettaglio;
- presenza di obiettivi, conoscenze, abilità, evidenze e criteri;
- assenza di azioni Approva/Rifiuta;
- azzeramento dei filtri con disciplina mantenuta;
- comportamento coerente su desktop e mobile.

## 3. Gate di chiusura

| Gate | Esito |
|---|---|
| Consultazione read-only | PASS |
| Disciplina visibile e selezionabile | PASS |
| Ordine visibile e selezionabile | PASS |
| Nucleo visibile e selezionabile | PASS |
| Curricolo di riferimento riconoscibile | PASS |
| Fonte, stato e validazione consultabili | PASS |
| Dettaglio completo raggiungibile | PASS |
| Nessuna azione decisionale | PASS |
| Stati iniziali e risultati coerenti | PASS |
| Desktop | PASS |
| Mobile | PASS |
| Errori console | 0 |
| Runtime legacy invariato | PASS |

## 4. Limiti residui

La chiusura B02 non comprende:

- ricerca testuale avanzata;
- persistenza completa tra sessioni;
- confronto tra vigente e proposta;
- decisioni di approvazione o rifiuto;
- validazione con docenti non tecnici.

Questi elementi appartengono ai cicli successivi e non riaprono B02.

## 5. Decisione

Il percorso `B02 — Consultare e comprendere il curricolo` è dichiarato **chiuso tecnicamente, visivamente e interattivamente nel candidato React**.

La migrazione può proseguire con:

`B03 — Confrontare e decidere`.

## 6. Prossima slice

**CML-455 — B03 Comparison and Decision Behavior Gap Audit**

Obiettivo:

- verificare separazione tra proposta e curricolo vigente;
- analizzare confronto, decisione, annullamento, motivazioni e stato del processo;
- confrontare runtime legacy, candidato React e contratti già presenti;
- produrre scarti e criteri di chiusura senza modificare il runtime.

## 7. Verdetto

```text
CML_454_B02_POST_MERGE_VISUAL_INTERACTIVE_CLOSURE_READY_REMOTE_BRANCH
```
