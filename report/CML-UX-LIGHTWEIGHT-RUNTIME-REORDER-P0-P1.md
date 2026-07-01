# Report Operativo — CML-UX-LIGHTWEIGHT-RUNTIME-REORDER-P0-P1

Verdetto: `CML_UX_LIGHTWEIGHT_RUNTIME_REORDER_P0_P1_READY_LOCAL_NOT_PUSHED`
Tipo: runtime reorder leggero
Push: non eseguito

## 1. Sintesi esecutiva

La slice applica un riordino UI leggero sulle priorita P0/P1 senza alterare logica o dati.
Intervento concentrato su un solo file runtime (`_published_snapshot/netlify-current/index.html`) con
obiettivo di ridurre ridondanze e sovrapposizioni nella superficie utente.

## 2. Delta principale

- Home: semplificata (meno testo/process path/microguida ridondante).
- Revisione: rimossa duplicazione "Bozza disciplina"; azioni documentali centralizzate in Esportazioni.
- Programmazione annuale: separata in passi visivi (consultazione / bozza / UDA smart).
- UDA modello: raccordo esplicito verso archivio UDA smart.
- Curriculum subnav: separazione esplicita "Fonti" e "Sezioni generali".

## 3. Tabella aree / esito

| Area | Problema | Azione runtime | Esito |
|---|---|---|---|
| Home | Ridondanza orientamento | rimozione path+microguida, testo ridotto | Alleggerita |
| Revisione | Doppio punto per bozza disciplina | eliminato pannello locale, rinvio a Esportazioni | Deduplicata |
| Programmazione annuale | 3 strumenti in blocco unico | introdotti Passo 1 / Passo 2 collassabili | Più lineare |
| UDA modello | percorso non lineare verso UDA smart | aggiunto link operativo a Passo 2 | Raccordata |
| Fonti/Sezioni generali | sovrapposizione di vista | separazione reale in tab distinti + link reciproci | Chiarita |

## 4. Contenuti mantenuti invariati

- dati curricolari, schema, storage locale;
- validatori e test;
- filtri UDA e flussi `.cml` docente/dipartimento/referente;
- logica di export, generazione e navigazione base.

## 5. Verifiche

- shape test runtime: PASS (`tools/test-runtime-mappa-dati-shape.mjs`)
- diagnostica file runtime: nessun errore (`get_errors`)
- validatore curriculum: warning retrocompatibili noti, nessuna regressione introdotta.

## 6. Rischi residui

- breve adattamento utente ai nuovi punti di accesso (Bozza disciplina solo in Esportazioni);
- possibile richiesta di ulteriori semplificazioni P2 su testo e stati vuoti.

## 7. Prossima slice suggerita

`CML_UX_LIGHTWEIGHT_RUNTIME_REORDER_P2_POLISH`

Focus:
- microcopy operativo negli stati vuoti,
- ulteriore compressione testo in evidenze,
- raggruppamento finale delle azioni in Esportazioni.
