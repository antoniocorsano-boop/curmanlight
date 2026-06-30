# CML-ANNUAL-PLANNING-EDITABLE-PROGRAMMAZIONE

## Obiettivo
Implementare il primo incremento controllato della Programmazione annuale editabile dentro la vista `didattica_programmazione`, trasformando il quadro read-only in una bozza operativa locale.

## Stato iniziale
- Branch: `main`
- HEAD iniziale: `099e0cb7bd239ad67a6ecb27a518229058371c06`
- Slice precedente: `CML_ANNUAL_PLANNING_VIEW_LEVELS_ORDS_PUSHED_REMOTE`
- Working tree tracked: pulito prima delle modifiche
- Untracked esclusi/non toccati: `.env`, `_dummy_path/`, `antigravity.config.json`, `test-results/`, `tools/smoke-hash-nav.mjs`

## Perimetro
- Tipo slice: runtime increment controllato
- Runtime modificato: si, solo `_published_snapshot/netlify-current/index.html`
- Dati curricolari normalizzati: non modificati
- Export/import esistenti: non alterati
- Schema `.cml`: invariato
- Backend/API/endpoint/credenziali/dipendenze: non introdotti
- Push: non eseguito

## Implementazione
La vista Programmazione annuale mantiene il quadro read-only gia presente e aggiunge la sezione `Bozza programmazione annuale locale`.

Campi introdotti:
- disciplina;
- ordine;
- classe/fascia;
- anno scolastico;
- unita curricolari selezionate dai dati gia presenti;
- periodo;
- stato della bozza: `bozza`, `in revisione`, `pronta per confronto`;
- note generiche di programmazione.

## Persistenza locale
- Chiave: `cml_annual_planning_draft_v1`
- Ambito: una bozza locale sul dispositivo
- Azioni: salvataggio locale, cancellazione bozza, copia Markdown
- Nessuna integrazione con export/import istituzionali
- Nessuna modifica allo schema `.cml`

## Contratto dati runtime
La bozza locale usa una struttura coerente con la research specification:

```json
{
  "id": "pa_<data>_locale",
  "tipo": "programmazione_annuale",
  "disciplina": "string",
  "ordine": "Infanzia|Primaria|Secondaria",
  "classe": "string",
  "annoScolastico": "string",
  "unitaSelezionate": ["unit_id"],
  "periodi": [{ "periodo": "string", "unitaIds": ["unit_id"], "durataOre": null, "note": null }],
  "stato": "bozza|in revisione|pronta per confronto",
  "autore": null,
  "timestamp": "ISO8601",
  "timestampModifica": "ISO8601",
  "noteGeneriche": "string"
}
```

## Privacy e limiti
- Non sono richiesti dati personali di studenti.
- Non sono previsti nomi, cognomi, voti, bisogni educativi o dati sensibili.
- Le note sono dichiarate come generiche e operative.
- La bozza richiede validazione professionale prima di ogni uso istituzionale.

## Non-obiettivi
- Nessuna UDA reale nuova.
- Nessun backend o salvataggio remoto.
- Nessun nuovo export istituzionale.
- Nessuna modifica a curriculum JSON, tools, asset, manifest o service worker.

## Verifiche previste
- `git status --short --branch`
- `git diff --name-only`
- `git diff --check`
- controllo sintassi JavaScript con `node --check`
- secret scan sulle righe aggiunte
- validator curriculum
- shape test runtime
- smoke statici su vista, campi, salvataggio locale, cancellazione e copia Markdown

## Verdetto atteso
`CML_ANNUAL_PLANNING_EDITABLE_PROGRAMMAZIONE_READY_LOCAL_NOT_PUSHED`
