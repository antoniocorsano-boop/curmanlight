# CML-251 — POST-GUIDE ALIGNMENT NEXT UX SELECTION

## Sintesi esecutiva

Completato l'allineamento della Guida al percorso operativo (CML-249 → CML-250P), questa slice docs-only valuta le tre aree UX candidate come prossima priorità e seleziona **CML-252 — EMPTY STATES AND ACTION MESSAGES MICRO-UX**.

## Stato tecnico di partenza

- Repository allineato a origin/main
- HEAD: `7cdf50b`
- Working tree pulito
- Ultima slice runtime: CML-249 (Guida allineata, commit `1fa69b6`, live su GitHub Pages)
- Ultima slice docs: CML-250P (live smoke docs pushata)

## Riepilogo catena CML-249 → CML-250P

| Slice | Tipo | Stato |
|---|---|---|
| CML-249 | Runtime micro-UX | Implementato, committato |
| CML-249P | Controlled push | Pushato su origin/main |
| CML-250 | Live smoke | Verificato su GitHub Pages |
| CML-250P | Controlled push docs | Pushato su origin/main |

## Analisi delle aree candidate

### 1. Esportazioni

**Punti di forza attuali:**
- Sezione ben strutturata con gruppi per fase
- Ruoli differenziati con badge
- Riferimento al percorso di lavoro già presente

**Aree di miglioramento:**
- Distinzione tra formati (Word, PDF, Markdown, .cml, backup) non sempre chiara per utenti non esperti
- Possibile sovrapposizione con la Guida già aggiornata

**Valutazione:** intervento utile ma potrebbe essere rimandato a dopo stati vuoti, dato che la Guida già copre parzialmente la spiegazione dei formati.

### 2. Stati vuoti e messaggi

**Punti di forza attuali:**
- Pattern `.uda-smart-library-empty` già esistente come riferimento positivo
- Messaggi in UDA library con azioni suggerite
- Feedback per import proposte ed esiti dipartimentali

**Aree di miglioramento:**
- Messaggi non uniformi tra le aree
- Assenza di "Cosa puoi fare ora" in molte schermate vuote
- Messaggi di errore/import non sempre orientativi
- Schermate senza dati non guidano all'azione successiva

**Valutazione:** massimo impatto con minimo rischio tecnico. Intervento piccolo, nessuna nuova funzione.

### 3. UDA smart / Programmazione

**Punti di forza attuali:**
- Libreria UDA con filtri funzionanti
- Messaggi vuoti già presenti (bozze, filtri, nessun risultato)

**Aree di miglioramento:**
- Relazione curricolo → programmazione → UDA non sempre evidente
- Microcopy migliorabile per coerenza con resto dell'app
- Area in evoluzione (CML recente), possibile instabilità

**Valutazione:** utile ma rischio medio. Meglio consolidare prima il resto dell'app.

## Motivazione della scelta

| Fattore | Peso |
|---|---|
| **Impatto utente** | Alto — riduce incertezza in tutte le aree |
| **Rischio tecnico** | Molto basso — solo microcopy e messaggi |
| **Dimensione** | Piccola — intervento runtime limitato |
| **Coerenza** | Rafforza percorso già pubblicato e Guida |
| **Regressione** | Molto bassa — nessuna modifica logica |

## Perimetro consigliato per CML-252

### Cosa fare
- Migliorare messaggi "nessun dato" in tutte le schermate
- Aggiungere "Cosa puoi fare ora" dopo i messaggi vuoti
- Uniformare microcopy tra le aree
- Riferire al percorso di lavoro e alla Guida dove pertinente
- Usare pattern `.xx-empty` già esistenti

### Cosa NON fare
- Nessuna nuova funzione
- Nessuna modifica a storage, schema `.cml`, import/export
- Nessuna nuova dipendenza
- Nessuna rete/API/OAuth/backend

### Criteri preliminari di accettazione per CML-252
1. Ogni schermata senza dati mostra un messaggio chiaro
2. Il messaggio include un'azione suggerita ("Cosa puoi fare ora")
3. Nessun messaggio duplica pesantemente la Guida
4. Microcopy coerente con percorso di lavoro e Guida
5. Nessuna modifica a comportamento pulsanti o logica applicativa
6. Messaggi leggibili su desktop e mobile
7. Validatori curriculum 14/14 PASS
8. Shape test runtime 14/14 PASS

## Rischi da evitare
- Duplicare la Guida nei messaggi vuoti (la Guida è il riferimento; gli stati vuoti sono micro-aiuti)
- Introdurre testi troppo lunghi in schermate già dense
- Modificare comportamento esistente dei pulsanti
- Over-engineering di messaggi per casi limite rari

## Checklist finale

- [x] repository preflight verified
- [x] post-guide alignment state reviewed
- [x] UX candidate areas reviewed (Esportazioni, Stati vuoti, UDA smart)
- [x] next runtime slice selected: CML-252 — EMPTY STATES AND ACTION MESSAGES MICRO-UX
- [x] runtime unchanged
- [x] no deploy executed
- [x] no push executed
- [x] verdict recorded

## Verdict

```
CML_251_POST_GUIDE_ALIGNMENT_NEXT_UX_SELECTION_READY_LOCAL_NOT_PUSHED
```
