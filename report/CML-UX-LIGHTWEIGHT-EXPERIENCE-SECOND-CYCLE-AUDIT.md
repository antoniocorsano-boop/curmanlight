# CML-UX-LIGHTWEIGHT-EXPERIENCE-SECOND-CYCLE-AUDIT -- Report

## Sintesi esecutiva

Il secondo audit UX conferma che il riordino P0/P1 ha stabilizzato le aree piu pesanti: Home, Revisione, Programmazione annuale, UDA, Fonti e Sezioni generali sono ora piu lineari.

Restano residui P2/P3, non bloccanti, concentrati su Esportazioni, Guida, Processo, UDA smart e stati vuoti. Non emergono motivi per riaprire i P0/P1 gia chiusi.

## Aree stabilizzate

| Area | Stato |
|---|---|
| Home | Essenziale, due ingressi principali e una nota breve |
| Revisione | Deduplicata dalle azioni di scaricamento |
| Programmazione annuale | Separata in consultazione, Passo 1 e Passo 2 |
| UDA modello | Raccordata a UDA smart |
| Fonti / Sezioni generali | Separate e consultabili |

## Aree ancora pesanti

| Area | Problema | Intervento consigliato |
|---|---|---|
| Esportazioni | Molti gruppi e pulsanti simili | Micro-riordino per compito e azioni primarie piu evidenti |
| Guida | Non allinea pienamente Processo e Passo 1/Passo 2 | Aggiornare card e percorso ruoli |
| Processo | Coordinatore e referente nello stesso tab | Rendere ruoli e fasi piu espliciti |
| UDA smart | Passo 2 ancora denso | Migliorare stati vuoti e gerarchia azioni |
| Stati vuoti | Alcuni messaggi non indicano il passo successivo | Microcopy orientato all'azione |

## Contenuti da alleggerire

- Testi di supporto ripetuti in Valutazione/Evidenze.
- Microcopy di Esportazioni per distinguere documento finale, confronto, file di lavoro, report e copia.
- Stato iniziale UDA smart (`0 UDA trovate su 0`) e messaggi senza bozza.
- Guida runtime, per nominare esplicitamente `Processo`, `Programmazione annuale`, `Passo 1` e `Passo 2`.

## Contenuti da lasciare invariati

- Dati curricolari.
- Schema e file di lavoro CurManLight.
- Import/export interni.
- Filtri UDA e selettori.
- Hash/navigation.
- Validatori e tooling.
- Workflow docente/dipartimento/referente.
- Home, salvo eventuale microcopy P3 futuro.
- Fonti e Sezioni generali.
- Quick actions, perche collassate e non prioritarie.

## Rischi residui

| Rischio | Livello | Mitigazione |
|---|---|---|
| Esportazioni: utente non distingue formato e scopo | Medio | Nomi gruppo e azione primaria piu espliciti |
| Processo: ruolo sbagliato nel pannello sbagliato | Medio-basso | Etichette coordinatore/referente e frase introduttiva |
| UDA smart: sovraccarico dopo apertura Passo 2 | Medio-basso | Stato vuoto orientato e azioni secondarie meno prominenti |
| Guida non allineata al runtime | Basso | Aggiornamento microcopy guida |

## Proposta di prossima slice

```text
CML_UX_LIGHTWEIGHT_EXPERIENCE_SECOND_CYCLE_P2_POLISH
```

Perimetro massimo raccomandato:

1. Esportazioni: gerarchia e microcopy per compito.
2. Guida: aggiornamento percorso ruoli e passi reali.
3. Processo: orientamento coordinatore/referente.
4. Programmazione/UDA smart: stati vuoti e gerarchia azioni.
5. Stati vuoti principali: messaggi orientati al prossimo passo.

## Decisione finale

Procedere solo con micro-polish P2/P3, senza nuove funzioni e senza modificare dati, schema, storage, import/export, filtri UDA, hash/nav o validatori.

## Verdict

```text
CML_UX_LIGHTWEIGHT_EXPERIENCE_SECOND_CYCLE_AUDIT_READY_LOCAL_NOT_PUSHED
```
