# Disciplinary Approval Readiness — State Model Contract

## Scopo

Definire un modello di stati per la gestione dell'approvazione dei curricoli disciplinari, distinguendo tra completezza strutturale, revisione umana, readiness per approvazione e approvazione esterna documentata. Il modello prepara la futura interfaccia senza introdurre approvazioni automatiche o stati ambigui.

## Principi

1. **Completezza ≠ Approvazione**: una disciplina può essere strutturalmente completa senza essere approvata.
2. **Stati dichiarativi, non automatici**: nessuno stato viene assegnato automaticamente dal sistema.
3. **Tracciabilità umana**: ogni transizione di stato deve corrispondere a una decisione documentabile (verbale, delibera, nota).
4. **Gradualità**: gli stati coprono l'intero ciclo di vita di una disciplina, da `solo_consultazione` a `approvato_esternamente`.
5. **Non oltrepassare i confini**: il sistema non genera approvazioni, non delibera, non sostituisce organi scolastici.
6. **UI prudente**: l'interfaccia mostra lo stato in modo informativo, mai assertivo.
7. **Headroom**: massimo 5–6 stati leggibili, etichette brevi, scalabile da 2 a 15 discipline.

## Glossario

| Termine | Significato |
|---|---|
| Completezza strutturale | La disciplina ha tutti i campi normalizzati (traguardi, obiettivi, conoscenze, abilità, evidenze, criteri, unità organizzate per ordine) |
| Bozza disciplinare | Documento normalizzato generabile dal sistema (.md, .docx, .cml) |
| Revisione | Controllo umano della bozza (dipartimento, commissione, referente) |
| Readiness per approvazione | Stato dichiarabile solo dopo check umano e documento di sintesi |
| Approvazione esterna | Delibera formale del Collegio Docenti o altro organo competente, fuori dallo strumento |

## Modello Stati

### 1. `solo_consultazione`

| Campo | Valore |
|---|---|
| Significato | Disciplina con traguardi e obiettivi di base. Non ha struttura normalizzata completa. |
| Chi lo attribuisce | Default iniziale. Nessuna azione richiesta. |
| Condizioni minime | La disciplina esiste in `DISCIPLINE_META` e `DATA` con traguardi + obiettivi. |
| Cosa l'UI può mostrare | Badge "Solo consultazione", label "Non pronta per approvazione". |
| Cosa l'UI non può fare | Mostrare pulsanti "Approva", "Invia", "Conferma". |
| Rischio se usato male | Nessuno — è lo stato di partenza. |
| Microcopy | "Solo consultazione" / "Non pronta per approvazione" |

### 2. `bozza_generabile`

| Campo | Valore |
|---|---|
| Significato | Disciplina con struttura normalizzata completa. Può produrre bozza disciplinare. |
| Chi lo attribuisce | Sviluppatore / redattore curricolo, con validazione umana esplicita (campo `validazioneUmana` su ogni unità). |
| Condizioni minime | File normalizzato `.json` presente e valido; tutte le unità hanno `validazioneUmana: true`. |
| Cosa l'UI può mostrare | Badge "Bozza completa disponibile", label "In revisione". |
| Cosa l'UI non può fare | Mostrare badge "Approvato", "Pronto per approvazione", o pulsanti di conferma automatica. |
| Rischio se usato male | Si può credere che "bozza completa" equivalga a "curricolo pronto". Mitigazione: microcopy esplicita. |
| Microcopy | "Bozza completa disponibile" / "Richiede validazione umana" |

### 3. `in_revisione`

| Campo | Valore |
|---|---|
| Significato | Bozza completa sottoposta a controllo dipartimentale. Non approvata. |
| Chi lo attribuisce | Coordinatore di dipartimento / referente curricolo, dopo avvio formale della revisione. |
| Condizioni minime | La disciplina è in stato `bozza_generabile`; esiste un avvio documentato del processo di revisione. |
| Cosa l'UI può mostrare | Badge "In revisione", note dipartimentali, proposte di modifica, decisioni parziali. |
| Cosa l'UI non può fare | Chiudere automaticamente la revisione, assegnare `sintesi_pronta` senza intervento umano. |
| Rischio se usato male | Revisione percepita come definitiva. Mitigazione: stato "In revisione" non è terminale. |
| Microcopy | "In revisione" / "Voci da validare: N" / "Controlla e decidi" |

### 4. `sintesi_pronta`

| Campo | Valore |
|---|---|
| Significato | Bozza revisionata e coerente. Pronta per essere portata agli organi competenti. Non ancora approvata. |
| Chi lo attribuisce | Referente curricolo, dopo verifica della completezza della revisione. |
| Condizioni minime | Tutte le voci della disciplina sono state valutate (approvate, respinte, modificate); esiste un documento di sintesi. |
| Cosa l'UI può mostrare | Badge "Sintesi pronta", link "Scarica sintesi", nota "Da portare al Collegio Docenti". |
| Cosa l'UI non può fare | Assegnare automaticamente `sintesi_pronta` al completamento della revisione; mostrare "Approvato". |
| Rischio se usato male | Si può confondere "sintesi pronta" con "approvato". Mitigazione: microcopy esplicita che rimanda agli organi. |
| Microcopy | "Sintesi pronta" / "Pronta per gli organi competenti" / "Da portare al Collegio Docenti" |

### 5. `pronto_approvazione`

| Campo | Valore |
|---|---|
| Significato | Stato dichiarabile solo dopo controllo umano e documento di sintesi. Non deve essere assegnato automaticamente. |
| Chi lo attribuisce | Referente curricolo / DS, con evidenza documentale (verbale, nota, report). |
| Condizioni minime | Disciplina in `sintesi_pronta`; documento di sintesi prodotto; nota umana che attesta la readiness. |
| Cosa l'UI può mostrare | Badge "Pronta per approvazione", nota "Richiede delibera del Collegio Docenti". |
| Cosa l'UI non può fare | Assegnare automaticamente; mostrare "Approvato" o "Deliberato". |
| Rischio se usato male | Alto — si può scambiare per approvazione effettiva. Mitigazione: microcopy obbligatoria e stato non terminale. |
| Microcopy | "Pronta per approvazione" / "Richiede delibera del Collegio Docenti" / "L'approvazione resta esterna" |

### 6. `approvato_esternamente`

| Campo | Valore |
|---|---|
| Significato | Stato manuale/documentale. Indica che l'approvazione è avvenuta fuori dallo strumento. |
| Chi lo attribuisce | Referente curricolo / DS, con riferimento a delibera, verbale o atto scolastico. |
| Condizioni minime | Riferimento a delibera (numero, data, organo); disciplina in `pronto_approvazione` o `sintesi_pronta`. |
| Cosa l'UI può mostrare | Badge "Approvata esternamente", riferimento alla delibera, nota "Atto esterno allo strumento". |
| Cosa l'UI non può fare | Generare la delibera; assegnare automaticamente lo stato; mostrare "Approvato" senza "esternamente". |
| Rischio se usato male | Alto — equivoco che l'app abbia approvato. Mitigazione: obbligo di riferimento a delibera + microcopy chiara. |
| Microcopy | "Approvata esternamente" / "Delibera N/X del GG/MM/AAAA" / "Atto esterno allo strumento" |

## Condizioni di Transizione

```
solo_consultazione ──[normalizzazione + validazione umana]──> bozza_generabile
bozza_generabile   ──[avvio revisione]─────────────────────> in_revisione
in_revisione       ──[completamento revisione]─────────────> sintesi_pronta
sintesi_pronta     ──[check umano + documento]─────────────> pronto_approvazione
pronto_approvazione ──[delibera esterna]───────────────────> approvato_esternamente
```

Nessuna transizione è automatica. Ogni passaggio richiede una decisione documentabile da parte di un ruolo umano.

## Responsabilità Umana

| Transizione | Ruolo | Evidenza minima |
|---|---|---|
| `solo_consultazione` → `bozza_generabile` | Sviluppatore + validatore | Validazione umana su ogni unità (`validazioneUmana: true`) |
| `bozza_generabile` → `in_revisione` | Coordinatore di dipartimento | Avvio formale (nota, email, verbale) |
| `in_revisione` → `sintesi_pronta` | Referente curricolo | Completezza revisione verificata |
| `sintesi_pronta` → `pronto_approvazione` | Referente / DS | Documento di sintesi + nota |
| `pronto_approvazione` → `approvato_esternamente` | DS / Segreteria | Riferimento a delibera |

## Microcopy Consentita

- "Bozza completa disponibile"
- "In revisione"
- "Sintesi pronta"
- "Pronta per approvazione"
- "Approvata esternamente"
- "L'approvazione resta esterna allo strumento."
- "Serve validazione degli organi competenti."
- "Stato documentale, non automatico."
- "Richiede delibera del Collegio Docenti"
- "Da portare agli organi competenti"
- "Non sostituisce la delibera del Collegio Docenti"

## Microcopy Vietata

- "Approvato" senza "esternamente"
- "Validato automaticamente"
- "Curricolo definitivo"
- "Delibera generata"
- "Approvazione completata"
- "Confermato dall'app"
- "Pronto" senza contesto
- "Approvazione automatica"
- "Stato finale"
- "Definitivo" per disciplina non ancora deliberata

## Comportamento UI Futuro

- Badge colorato per stato (non solo testo)
- Legenda esplicativa sotto la tabella
- Nessun pulsante di azione su stati non raggiungibili
- Una decisione principale per schermata
- Stati raggruppati: pre-approvazione (1–3) e post-approvazione (4–6)
- Microcopy sempre visibile, mai in tooltip nascosto
- Nessuna icona che suggerisca "ok" o "check" per stati non approvati

## Comportamento Dati Futuro

- Il campo `stato` in ogni unità normalizzata segue il modello stati
- Il campo è testuale, non booleano
- Il campo non viene mai sovrascritto automaticamente
- Il `validazioneUmana` rimane campo separato (booleano) per singola unità
- Il riferimento a delibera è un campo opzionale (stringa) in `approvato_esternamente`
- Nessun timestamp automatico di approvazione
- Nessun flag "approvato" a livello di disciplina

## Limiti

- Il modello non è implementato a runtime. È un contratto per sviluppi futuri.
- Non esiste UI per la transizione degli stati.
- Non esiste persistenza degli stati.
- Non esiste backend per la registrazione delle delibere.
- Il `pronto_approvazione` non è assegnabile nell'interfaccia attuale.
- Il `approvato_esternamente` richiede un campo di riferimento a delibera non ancora implementato.

## Criteri di Accettazione

1. Il modello distingue tra completezza e approvazione.
2. Il modello distingue tra bozza completa e pronta per approvazione.
3. Nessuno stato è attribuibile automaticamente.
4. Ogni transizione richiede un ruolo umano e una evidenza minima.
5. La microcopy consentita/vietata è esplicitamente documentata.
6. Il modello è scalabile da 2 a 15 discipline.
7. Tecnologia e Italiano sono classificati al massimo `bozza_generabile / in_revisione`.
8. Le altre 13 discipline sono classificate al massimo `solo_consultazione`.
9. Nessuna disciplina è indicata come pronta per approvazione.
10. Nessun pulsante di approvazione è introdotto.
11. Il runtime non è modificato.
12. I dati curricolari non sono modificati.

## Non-Goals

- Implementare UI per la gestione degli stati.
- Assegnare stati automaticamente.
- Modificare il runtime o i dati.
- Introdurre backend, login, OAuth, API, database o cloud.
- Modificare export/import o schema `.cml`.
- Modificare role-access gating.
- Generare approvazioni o delibere.
- Sostituire organi scolastici.
