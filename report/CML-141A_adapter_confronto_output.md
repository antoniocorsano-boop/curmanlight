# CML-141A: Adapter output vs MAPPA_DATI shape confrontation

## Fotografia iniziale

- File: `_published_snapshot/netlify-current/index.html`
- Hardcoded MAPPA_DATI per: Tecnologia, Matematica, Italiano
- Adapter target: Tecnologia (pilota)
- Runtime renderer: `renderMappaDisciplinare()` in `window.renderCurriculumView`

## Confronto chiave per chiave

### `disciplina`

- Hardcoded: `"Tecnologia"` (stringa)
- Adapter: `"Tecnologia"` (stringa)
- **Compatibile** ✅

### `struttureSostanziali` item

- Hardcoded: `{id, nome, descrizione, fonte}`
- Adapter: `{nome, unita: [{id, titolo, ordine, classe, fascia, nucleo}]}`
- **Parziale** — Adapter arricchisce con unità collegate ma non ha `id`, `descrizione`, `fonte`
- Hardcoded: 6 items | Adapter: 6 items (stesso numero)

### `nodiDisciplinari`

- Hardcoded: SOLO per Matematica (5) e Italiano (6) — Tecnologia manca completamente
- Adapter: Generato per tutte le discipline (Tecnologia: 6 items)
- **Gap colmato** — L'adapter produce dati che nel MAPPA_DATI hardcoded non esistevano per Tecnologia
- Shape: Adapter usa `{etichetta, unita: [...]}` invece di `{id, etichetta, tipo, descrizione, fonte, legami}`

### `progressioneVerticale` item

- Hardcoded: `{id, ordine, fascia|classe, descrizioneProgressione, nodiRiferimento, fonte}`
- Adapter: `{ordine, classe, fascia, unita: [{id, titolo, ordine, classe, fascia, nucleo}]}`
- **Parziale** — Adapter raggruppa unità invece di descrizione sintetica; manca `id`, `descrizioneProgressione`, `nodiRiferimento`, `fonte`
- Hardcoded: 10 items | Adapter: 10 items (stesso numero)

### `decisioniCurricolari` item

- Hardcoded: `{id, tipo, nodiRiferimento, unitaRiferimento, motivazione, stato, fonte}`
- Adapter: `{id, tipo, nodiRiferimento, unitaRiferimento, motivazione, stato, fonte}` (pass-through)
- **Compatibile** ✅

## Differenze strutturali principali

| Aspetto            | Hardcoded                           | Adapter                                |
| ------------------ | ----------------------------------- | -------------------------------------- |
| Codifica contenuto | Descrizioni testuali piatte         | Array `unita` con oggetti strutturati  |
| `nodiRiferimento`  | Presente in `progressioneVerticale` | Assente da `progressioneVerticale`     |
| ID univoci         | `id` su ogni item                   | Senza `id` — identità dentro `unita[]` |
| `nodiDisciplinari` | Solo Mat/Ita (non Tecnologia)       | Tutte le discipline                    |

## Impatto su renderMappaDisciplinare()

Il runtime si aspetta campi flat (`descrizione`, `descrizioneProgressione`, `nodiRiferimento`) che l'adapter non produce. L'adapter produce invece `unita[]` — un formato più ricco ma strutturalmente diverso. Servirebbe una `renderMappaDisciplinareV2()` o un trasformatore intermedio per usare l'output adapter direttamente nel runtime.

## Files di lavoro

- `_published_snapshot/netlify-current/index.html` — sorgente MAPPA_DATI hardcoded e runtime
- `report/CML-141_json_to_mappa_dati_adapter_standalone_tool.md` — design e implementazione adapter
- `tmp-tecnologia-mappa.json` (cancellato) — output adapter per Tecnologia
