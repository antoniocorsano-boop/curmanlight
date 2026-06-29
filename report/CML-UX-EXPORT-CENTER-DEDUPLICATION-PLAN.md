# Report — CML UX Export Center Deduplication Plan

## Sintesi esecutiva

Piano docs-only per centralizzare tutte le esportazioni in un unico Export Center riconoscibile, eliminando duplicazioni tra Revisione, Definitivo, Processo, Home ed Esportazioni. Inventariati 17 export/azioni, identificati 6 gruppi target, definite 9 regole di deduplicazione.

## Decisione principale

```
Consulta legge.
Revisione decide.
Processo gestisce.
Esportazioni producono output.
```

## Priorità UX

| Priorità | Area | Motivo | Azione |
|---|---|---|---|
| 1 | Export sparsi in 5 viste | Duplicazione e ambiguità | Centralizzare in Export Center |
| 2 | Export mancanti in Esportazioni | Bozza disciplina, .cml, report non raggiungibili | Aggiungere tutti gli export |
| 3 | Etichette ambigue | Confronto/Definitivo confondono | Tassonomia chiara |
| 4 | Feedback assente | Utente non sa se export è riuscito | Feedback obbligatorio |

## Inventario sintetico export

| Export | Dove dovrebbe stare | Note |
|---|---|---|
| Word confronto | Esportazioni → gruppo Confronto | Oggi via navigazione forzata |
| Word definitivo | Esportazioni → gruppo Documento istituzionale | Oggi duplicato Definitivo/Esportazioni |
| PDF/Markdown confronto | Esportazioni → gruppo Confronto | Oggi solo in Revisione (rimosso) |
| PDF/Markdown definitivo | Esportazioni → gruppo Documento istituzionale | Oggi duplicato |
| Bozza disciplina | Esportazioni → gruppo Bozze | Oggi solo in Revisione (toggle) |
| Proposta docente `.cml` | Esportazioni → gruppo File di lavoro | Oggi solo in Definitivo |
| Esito dipartimento `.cml` | Esportazioni → gruppo File di lavoro | Oggi solo in Processo |
| Report gruppo lavoro | Esportazioni → gruppo Report | Oggi solo in Processo |
| Backup JSON | Esportazioni → gruppo Copia sicurezza | Già presente |

## Modello target

| Componente | Funzione | Regola UX |
|---|---|---|
| Header Export Center | Spiegare scopo, mostra disciplina | Una riga + avviso validazione |
| Gruppo Documento istituzionale | Output finale per Collegio | Azione primaria: Scarica Word definitivo |
| Gruppo Confronto | Output di lavoro per dipartimento | Azione primaria: Scarica Word confronto |
| Gruppo File di lavoro `.cml` | Scambio dati tra ruoli | Separato da documenti leggibili |
| Gruppo Bozze disciplinari | Bozza Markdown per disciplina | Richiede selezione disciplina |
| Gruppo Copia sicurezza | Backup/ripristino | Già ok |
| Gruppo Report | Resoconti | Report sintesi + gruppo lavoro |
| Feedback | Toast/messaggio dopo export | Obbligatorio dopo ogni azione |

## Roadmap proposta

| Step | Slice | Esito atteso |
|---|---|---|
| 1 | CML_UX_EXPORT_CENTER_DEDUPLICATION_RUNTIME | Export centralizzati, duplicazioni rimosse |
| 2 | CML_UX_EXPORT_LABELS_CLARITY_RUNTIME | Etichette chiare, non ambigue |
| 3 | CML_UX_CML_FILE_EXPORT_GROUPING_RUNTIME | `.cml` in gruppo dedicato |
| 4 | CML_UX_EXPORT_FEEDBACK_RUNTIME | Feedback standardizzato |
| 5 | CML_UX_EXPORT_REGRESSION_SMOKE | Verifica finale |

## Rischi controllati

| Rischio | Contromisura |
|---|---|
| Export non trovati dopo spostamento | Export Center accessibile da subnav + cruscotto |
| Duplicazioni residue | Gate smoke verifica assenza export in viste non-export |
| Docente confuso da etichette nuove | Tassonomia testata, nomi orientati all'utente |
| `.cml` confuso con documenti leggibili | Gruppo separato + descrizione formato |

## Prima azione consigliata

```
CML_UX_EXPORT_CENTER_DEDUPLICATION_RUNTIME
```

## Verdict

```
CML_UX_EXPORT_CENTER_DEDUPLICATION_PLAN_READY
```
