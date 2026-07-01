# CML-UX-NON-TECHNICAL-MICROCOPY-RUNTIME-REMEDIATION

## Obiettivo
Ridurre il linguaggio tecnico nella UI ordinaria del runtime, mantenendo invariata la logica applicativa.

## Scope della slice
- File runtime modificato: `_published_snapshot/netlify-current/index.html`.
- Intervento: solo microcopy (label, helper, stati, toasts, testi guida/processo/esportazioni).
- Nessuna modifica a handler, struttura dati, schema `.cml`, persistenza o flussi di import/export.

## Interventi applicati
1. Home:
- "esporta" sostituito con linguaggio orientato al compito ("scarica", "salva file di lavoro CurManLight").
- Footer semplificato: rimozione lessico interno (codice operativo), sostituito con formulazione per ruoli autorizzati.

2. Programmazione annuale e UDA smart:
- "read-only" sostituito con "sola consultazione".
- "Copia/Scarica Markdown" sostituito con "Copia/Scarica testo modificabile".
- Rimosse chiavi tecniche `cml_*_v1` dai box informativi visibili.
- Box privacy e footer riscritti in termini didattici e non implementativi.

3. Revisione/Processo:
- "Validazione dipartimentale" rinominato in "Confronto di dipartimento".
- CTA "Importa" rinominate in "Carica" per proposte/esiti.
- Helper locali uniformati a "caricamento su questo dispositivo".

4. Esportazioni/Guida:
- Tassonomia orientata al compito: "documenti scaricabili", "testo modificabile", "file di lavoro CurManLight".
- Badge Guida: "Read-only" sostituito con "Sola consultazione".

5. Messaggi di stato/toast:
- Eliminato lessico tecnico in messaggi utente principali (`.cml`, "Markdown", "importato localmente").
- Mantenuto invariato il comportamento delle funzioni.

## Vincoli rispettati
- Nessuna modifica logica JavaScript.
- Nessuna modifica a ID, onclick, funzioni esistenti, parser/validatori.
- Nessuna modifica schema o formato file.
- Nessuna nuova dipendenza.

## Smoke check atteso
- Navigazione Home -> Processo -> Esportazioni invariata.
- Azioni copia/scarica testo UDA funzionanti.
- Caricamento proposte/esiti invariato.
- Nessun termine tecnico residuo nella UI ordinaria, eccetto commenti interni di codice.

## Verdict
`CML_UX_NON_TECHNICAL_MICROCOPY_RUNTIME_REMEDIATION_READY_LOCAL_NOT_PUSHED`
