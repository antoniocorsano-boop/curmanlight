# Report: CML-087 — ITALIANO_DISCIPLINE_NORMALIZED_CURRICULUM_DRAFT

## Commit iniziale
`f533966` — `docs: select next CML discipline normalization` (CML-086)

## File creati/modificati

| File | Azione |
|---|---|
| `content/curriculum/italiano.normalized.json` | Creato |
| `docs/03_execution/CML-087.md` | Creato |
| `report/CML-087_italiano_discipline_normalized_curriculum_draft.md` | Creato |
| `docs/REPO-MOVELOG.md` | Modificato |

## Benchmark usato
`content/curriculum/tecnologia.normalized.json` (13 unità, schema v1)

## Numero unità create
**14** unità di apprendimento

| Ordine | Unità | ID |
|---|---|---|
| Infanzia | 3 | `ita_inf_3_001`, `ita_inf_5_001`, `ita_inf_5_002` |
| Primaria | 6 | `ita_pri_1_001`, `ita_pri_2_001`, `ita_pri_3_001`, `ita_pri_4_001`, `ita_pri_4_002`, `ita_pri_5_001` |
| Secondaria | 5 | `ita_sec_1_001`, `ita_sec_1_002`, `ita_sec_2_001`, `ita_sec_2_002`, `ita_sec_3_001` |

## Nuclei coperti

| Nucleo | Unità |
|---|---|
| Ascolto | Inf 3-4, Pri 1, Sec 1 |
| Parlato | Inf 5, Pri 2 |
| Lettura | Inf 5, Pri 3, Sec 1 |
| Scrittura | Pri 4, Sec 2 |
| Acquisizione ed espansione del lessico | Pri 4, Sec 2 |
| Riflessione sulla lingua | Pri 5, Sec 3 |

## Campi verificati per unità

| Campo | Presente in tutte |
|---|---|
| `id` | ✅ 14/14 |
| `disciplina` | ✅ 14/14 |
| `ordine` | ✅ 14/14 |
| `classe` o `fascia` | ✅ 14/14 |
| `ambito` | ✅ 14/14 |
| `nucleo` | ✅ 14/14 |
| `competenza` | ✅ 14/14 |
| `traguardo` | ✅ 14/14 |
| `obiettivi` (≥3) | ✅ 14/14 |
| `conoscenze` (≥3) | ✅ 14/14 |
| `abilita` (≥3) | ✅ 14/14 |
| `evidenze` (≥3) | ✅ 14/14 |
| `criteriValutazione` (≥3) | ✅ 14/14 |
| `fonte` | ✅ 14/14 |
| `stato` ("nuovo") | ✅ 14/14 |
| `validazioneUmana` (true) | ✅ 14/14 |
| `noteDipartimento` | ✅ 14/14 |

## Conferma validazione umana
Ogni unità ha `validazioneUmana: true`. Il file ha `humanValidationRequired: true`.

## Conferma nessuna approvazione
- Nessuna unità indicata come "pronta per approvazione"
- Nessuna formula "approvato", "deliberato", "validato definitivamente"
- Stato: `bozza_generabile` / `in_revisione`

## Conferma runtime non modificato
- `_published_snapshot/netlify-current/index.html` non toccato
- `sw.js` non toccato
- `_headers` non toccato

## Conferma `.cml`, export/import e role-access invariati
- Schema `.cml` non modificato
- Export/import runtime non modificato
- Role-access runtime non modificato

## Controlli

| Controllo | Esito |
|---|---|
| `git status` — 4 file consentiti | ✅ |
| `git diff --check` | ✅ |
| Validazione JSON (Node.js) | ✅ |
| Copertura Inf/Pri/Sec | ✅ |
| Almeno 1 unità per nucleo | ✅ |
| Conoscenze presenti in tutte le unità | ✅ |
| Abilità presenti in tutte le unità | ✅ |
| Evidenze presenti in tutte le unità | ✅ |
| Criteri valutazione presenti | ✅ |
| Validazione umana esplicita | ✅ |
| Nessuna approvazione | ✅ |
| Nessuna dipendenza esterna | ✅ |

## Verdetto finale

`CML_087_ITALIANO_DISCIPLINE_NORMALIZED_CURRICULUM_DRAFT_READY`

## Prossimo step raccomandato

`CML-087A — ITALIANO_NORMALIZED_CURRICULUM_DRAFT_QUALITY_AUDIT`
