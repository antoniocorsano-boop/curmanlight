# CML-UX-NON-TECHNICAL-MICROCOPY-RUNTIME-REMEDIATION

## Sintesi esecutiva
Remediation runtime completata con interventi esclusivamente testuali per semplificare il microcopy non tecnico in CurManLight.

## Esito
- Runtime modificato: si (`_published_snapshot/netlify-current/index.html`).
- Tipo modifica: microcopy-only.
- Push: non eseguito.

## Macro-risultati
1. Riduzione lessico tecnico in UI ordinaria:
- rimosse esposizioni di chiavi tecniche nei box informativi visibili;
- ridotte occorrenze di termini specialistici nei flussi principali.

2. Linguaggio orientato al compito:
- `Importa` -> `Carica` dove utile al contesto operativo;
- `Markdown` -> `testo modificabile` nelle aree utente;
- `.cml` in superficie -> `file di lavoro CurManLight` dove non necessario il dettaglio tecnico.

3. Coerenza cross-tab:
- Home, Programmazione annuale, UDA smart, Processo, Esportazioni e Guida allineati alla stessa tassonomia non tecnica.

## Invarianti confermate
- Nessuna variazione di logica applicativa.
- Nessun cambiamento su schema/file format/persistenza.
- Nessuna regressione intenzionale su import/export e flussi di revisione.

## Rischio residuo
Basso: interventi di sola stringa visibile. Resta raccomandato smoke funzionale completo su:
- anteprima/copia/scarica testo UDA;
- caricamento proposte/esiti;
- navigazione tab e CTA principali.

## Verdict
`CML_UX_NON_TECHNICAL_MICROCOPY_RUNTIME_REMEDIATION_READY_LOCAL_NOT_PUSHED`
