# CML-CURR-AUDIT-01 — Verifica di applicabilità delle lacune di livello

## Scopo

Questo passaggio distingue:

- applicabilità temporale del quadro nazionale (`IN_2012` / `IN_2025`);
- applicabilità curricolare di una disciplina a un ordine, classe o fascia;
- presenza effettiva di unità nei file normalizzati.

Il contratto `DUAL-CURRICULUM-TEMPORAL-APPLICABILITY-CONTRACT.md` disciplina il primo punto. Non costituisce una matrice ufficiale disciplina × ordine × classe/fascia e, da solo, non consente di dichiarare non applicabile una combinazione mancante.

## Regola di classificazione

Le 22 assenze rilevate dall'audit automatico sono classificate come **gap candidati da validare**, finché non esiste una matrice disciplinare approvata che indichi uno dei seguenti esiti:

- `APPLICABILE_OBBLIGATORIO` — il livello deve essere coperto;
- `APPLICABILE_AGGREGATO` — il livello può essere coperto da una progressione pluriclasse o plurifascia;
- `NON_APPLICABILE` — la disciplina non è prevista autonomamente nel livello;
- `DA_VERIFICARE` — manca una decisione documentale o istituzionale.

Nessuna assenza viene trasformata automaticamente in errore curricolare né rimossa dall'audit.

## Registro dei 22 gap candidati

| # | Disciplina | Ordine | Livello mancante | Stato audit | Verifica richiesta |
|---:|---|---|---|---|---|
| 1 | Arte e Immagine | Infanzia | fascia 3–4 | DA_VERIFICARE | stabilire se il campo di esperienza è rappresentato autonomamente o aggregato |
| 2 | Arte e Immagine | Primaria | classe 2 | DA_VERIFICARE | verificare progressione annuale o pluriclasse |
| 3 | Arte e Immagine | Primaria | classe 4 | DA_VERIFICARE | verificare progressione annuale o pluriclasse |
| 4 | Arte e Immagine | Primaria | classe 5 | DA_VERIFICARE | verificare progressione annuale o pluriclasse |
| 5 | Educazione Civica | Infanzia | fascia 3–4 | DA_VERIFICARE | verificare rappresentazione trasversale nel campo di esperienza |
| 6 | Educazione Fisica | Infanzia | fascia 3–4 | DA_VERIFICARE | verificare rappresentazione nel campo corpo e movimento |
| 7 | Educazione Fisica | Primaria | classe 2 | DA_VERIFICARE | verificare progressione annuale o pluriclasse |
| 8 | Educazione Fisica | Primaria | classe 4 | DA_VERIFICARE | verificare progressione annuale o pluriclasse |
| 9 | Geografia | Infanzia | fascia 3–4 | DA_VERIFICARE | verificare rappresentazione nel campo conoscenza del mondo |
| 10 | Inglese | Infanzia | fascia 3–4 | DA_VERIFICARE | verificare se l'offerta è curricolare autonoma o progettuale |
| 11 | Matematica | Infanzia | fascia 3–4 | DA_VERIFICARE | verificare rappresentazione nel campo conoscenza del mondo |
| 12 | Matematica | Primaria | classe 2 | DA_VERIFICARE | verificare progressione annuale o pluriclasse |
| 13 | Matematica | Primaria | classe 3 | DA_VERIFICARE | verificare progressione annuale o pluriclasse |
| 14 | Matematica | Primaria | classe 4 | DA_VERIFICARE | verificare progressione annuale o pluriclasse |
| 15 | Musica | Infanzia | fascia 3–4 | DA_VERIFICARE | verificare rappresentazione nel campo immagini, suoni e colori |
| 16 | Musica | Primaria | classe 2 | DA_VERIFICARE | verificare progressione annuale o pluriclasse |
| 17 | Musica | Primaria | classe 4 | DA_VERIFICARE | verificare progressione annuale o pluriclasse |
| 18 | Religione Cattolica | Infanzia | fascia 3–4 | DA_VERIFICARE | verificare perimetro IRC e articolazione per fasce |
| 19 | Religione Cattolica | Primaria | classe 2 | DA_VERIFICARE | verificare progressione annuale o pluriclasse |
| 20 | Religione Cattolica | Primaria | classe 4 | DA_VERIFICARE | verificare progressione annuale o pluriclasse |
| 21 | Scienze | Infanzia | fascia 3–4 | DA_VERIFICARE | verificare rappresentazione nel campo conoscenza del mondo |
| 22 | Storia | Infanzia | fascia 3–4 | DA_VERIFICARE | verificare rappresentazione trasversale e temporale nei campi di esperienza |

## Esiti già determinabili

- Le assenze non derivano dalla transizione temporale tra IN 2012 e IN 2025: il contratto CML-477 stabilisce quale quadro usare, non elimina la necessità di rappresentare il curricolo applicabile.
- Latino LEL non viene considerato incompleto per la classe 1 perché il perimetro documentato del corpus comprende le classi 2 e 3.
- Italiano, Seconda Lingua Comunitaria e Tecnologia presentano copertura strutturale completa rispetto ai livelli già dichiarati nel corpus.
- Le dieci assenze relative all'Infanzia richiedono una decisione specifica: nell'Infanzia i contenuti sono organizzati per campi di esperienza e non devono essere automaticamente trattati come discipline autonome.
- Le dodici assenze nella Primaria possono rappresentare veri gap oppure una modellazione pluriclasse; il dato attuale non permette di scegliere tra le due ipotesi.

## Matrice necessaria per la chiusura

Per chiudere l'audit di applicabilità serve un file versionato e validato umanamente con chiave:

```text
disciplina × ordine × classe/fascia
```

Campi minimi:

```json
{
  "disciplina": "matematica",
  "ordine": "Primaria",
  "livello": "2",
  "applicabilita": "APPLICABILE_OBBLIGATORIO",
  "modalitaCopertura": "annuale",
  "fonte": "atto o decisione istituzionale",
  "humanValidationRequired": true
}
```

Il calendario temporale CML-477 deve restare un livello separato, applicato successivamente per scegliere `IN_2012` o `IN_2025` nel contesto concreto.

## Impatto sul verdetto

Il precedente conteggio di 22 P1 resta utile come allerta di copertura, ma la formulazione corretta è:

> 22 gap candidati di livello, da classificare mediante matrice di applicabilità disciplinare.

Non è ancora corretto dichiarare tutte le 22 combinazioni come lacune curricolari definitivamente confermate.

## Prossimo controllo

1. costruire la matrice di applicabilità senza modificare i contenuti;
2. associare a ogni riga una fonte normativa o una decisione istituzionale;
3. riclassificare ogni gap come obbligatorio, aggregato, non applicabile o da verificare;
4. solo per i gap obbligatori aprire una successiva proposta di integrazione curricolare;
5. mantenere ogni correzione subordinata alla validazione disciplinare umana.

`CML_CURR_AUDIT_01_APPLICABILITY_REVIEW_22_CANDIDATE_GAPS_REGISTERED`