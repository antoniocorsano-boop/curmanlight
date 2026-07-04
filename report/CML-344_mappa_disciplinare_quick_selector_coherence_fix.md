# Report: CML-344 — Mappa Disciplinare Quick Selector Coherence Fix

## Problema
Nel quick selector della Mappa disciplinare risultava un residuo di coerenza sulla disciplina Tecnologia (assenza percepita o stato attivo non allineato alla disciplina corrente).

## Fix applicato/verificato
- Allineato e verificato il marker del pulsante Tecnologia in entrambi i runtime index:
  - `data-mappa="tecnologia"`
- Confermato handler coerente:
  - `onclick="setMappaDisciplina('tecnologia',this)"`
- Confermata sincronizzazione dello stato attivo tramite:
  - `syncMappaDisciplinaButtons()` (presente e richiamata)

## Runtime pair aggiornata/verificata
- `index.html`
- `_published_snapshot/netlify-current/index.html`

## Perimetro e invarianti
- Nessuna modifica a dati normalizzati.
- Nessuna modifica export/import.
- Nessuna modifica workflow ruoli.
- Nessuna modifica persistenza.
- Nessuna modifica schema `.cml`.

## Verifiche
- `git diff --check`: PASS
- `node tools/validate-cml-normalized-curriculum.mjs`: PASS
- `node tools/test-runtime-mappa-dati-shape.mjs`: PASS (14/14)
- `rg` marker selector root+snapshot: PASS
- typo check refusi target: PASS

## Operazioni di rilascio
- Push: eseguito su `main` (commit `bc7524d2518a623dda8031a029210b83380ae184`).
- Deploy GitHub Pages: completato con successo dopo rerun workflow.
- Run riuscito: `28695766095`.
- Deploy manuale: non eseguito.

## Nota di chiusura
Il primo controllo pubblico post-push aveva dato esito negativo sul marker non per regressione runtime, ma per deploy Pages fallito/stuck lato piattaforma. Dopo cancellazione del run bloccato, nuovo `workflow_dispatch` e rerun completato, la pubblicazione e risultata allineata al commit `bc7524d`.

## Verdict
`CML_344_MAPPA_DISCIPLINARE_QUICK_SELECTOR_COHERENCE_FIX_PUSHED_AND_PUBLISHED`
