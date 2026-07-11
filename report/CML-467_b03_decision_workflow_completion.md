# CML-467 — B03 Decision Workflow Completion Report

## Risultato funzionale

La superficie React B03 ora copre il ciclo operativo essenziale:

1. ripristino automatico delle scelte locali;
2. confronto tra testo vigente e proposta;
3. accoglimento della proposta;
4. mantenimento del vigente;
5. richiesta motivata di revisione;
6. registrazione di un testo personalizzato;
7. riapertura della scelta;
8. salvataggio locale con feedback visibile.

## Semantica

`revision_requested` non è una decisione finale e non viene proiettata come `approvata` nel modello legacy. `accepted_custom` è invece una scelta finale di lavoro e mantiene il testo inserito dall'utente.

## Persistenza

L'app esegue l'idratazione una sola volta nel bootstrap, anche in React StrictMode, tramite il flag `workDecisionHydrated`. Lo store espone stato e messaggio della persistenza per rendere comprensibili ripristino, salvataggio ed errori.

## Accessibilità

Il feedback locale usa `role="status"` e `aria-live="polite"`. I campi di motivazione, testo e nota hanno etichette esplicite e i comandi di conferma restano disabilitati finché il contenuto obbligatorio è vuoto.

## Compatibilità residua

Le API `approve`, `reject` e `undoDecision` restano disponibili per consumatori non ancora migrati. La loro rimozione definitiva richiede un audit separato di esportazioni, filtri e progressione.

## Controllo richiesto

La branch deve superare React CI e una sola validazione locale completa prima del merge.
