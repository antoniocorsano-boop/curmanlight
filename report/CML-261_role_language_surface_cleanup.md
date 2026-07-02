# Report — CML-261 Role Language Surface Cleanup

## Summary

Runtime microfix per allineare la superficie linguistica dell'app al lessico scolastico reale, come da raccomandazione CML-260 Agente 5 (School Language Consistency Auditor). 5 categorie di sostituzioni su `index.html` e snapshot: 19x "UDA smart" → "UDA personalizzata", 2x "persistita/persistito" → "salvata/salvato", 1x "Reset" (pulsante) → "Ripristina marcature", 1x "Piu" → "Più".

## Dettaglio modifiche

### 1. "UDA smart" → "UDA personalizzata" (19 occorrenze)

| # | Contesto | Vecchio | Nuovo |
|---|----------|---------|-------|
| 1 | Badge vista Programmazione | `UDA smart` | `UDA personalizzata` |
| 2 | Testo introduttivo libreria | `bozza di UDA smart` | `bozza di UDA personalizzata` |
| 3 | Placeholder filtro | `Cerca parole chiave nella bozza di UDA smart` | `Cerca parole chiave nella bozza di UDA personalizzata` |
| 4 | Testo nessuna bozza | `Nessuna bozza UDA smart` | `Nessuna bozza UDA personalizzata` |
| 5 | Anteprima testo | `Anteprima del testo UDA smart` | `Anteprima del testo UDA personalizzata` |
| 6 | Livello 4 legenda | `UDA smart / collaborative` | `UDA personalizzata / collaborative` |
| 7 | Titolo bozza generata (fallback) | `"UDA smart - ..."` | `"UDA personalizzata - ..."` |
| 8 | Titolo bozza default (collect) | `"Bozza UDA smart"` | `"Bozza UDA personalizzata"` |
| 9 | Testo salvataggio | `Bozza UDA smart salvata` | `Bozza UDA personalizzata salvata` |
| 10 | Testo generazione | `Bozza UDA smart generata` | `Bozza UDA personalizzata generata` |
| 11 | Testo nessuna bozza 2 | `Bozza UDA smart salvata` | `Bozza UDA personalizzata salvata` |
| 12 | Markdown type | `Tipo: UDA smart locale` | `Tipo: UDA personalizzata locale` |
| 13 | Not found warning | `Bozza UDA smart non trovata` | `Bozza UDA personalizzata non trovata` |
| 14 | Library empty state | `Nessuna bozza UDA smart salvata.` | `Nessuna bozza UDA personalizzata salvata.` |
| 15 | Card fallback title | `"Bozza UDA smart"` | `"Bozza UDA personalizzata"` |
| 16 | Save message | `Bozza UDA smart salvata localmente.` | `Bozza UDA personalizzata salvata localmente.` |
| 17 | Generate success | `Bozza UDA smart generata da programmazione annuale` | `Bozza UDA personalizzata generata da programmazione annuale` |
| 18 | Filter empty state | `salva o genera la prima UDA smart.` | `salva o genera la prima UDA personalizzata.` |
| 19 | Function summary | `"Titolo: "+(item.titolo||"Bozza UDA smart")` | `"Titolo: "+(item.titolo||"Bozza UDA personalizzata")` |

### 2. "persistita" → "salvata" (1 occorrenza)

- `La bozza non Ã¨ salvata: rigenerala quando serve` (testo programma annuale)

### 3. "persistito" → "salvato" (1 occorrenza)

- `Il lavoro resta salvato in locale nel browser del dispositivo.` (testo install-hint)

### 4. "Reset" (pulsante) → "Ripristina marcature" (1 occorrenza)

- Pulsante `.evidence-reset-btn` nel pannello Evidenze

### 5. "Piu" → "Più" (1 occorrenza)

- `Più recenti` nella select ordinamento UDA smart libreria

## Non modificate

- CSS class `.evidence-reset-btn` — nome tecnico interno, non superficie UI
- Nome funzione `resetEvidenceStates()` — nome tecnico interno, non superficie UI
- Variabili JS come `UDA_SMART_MD_CACHE`, `cml_uda_smart_library_v1` — storage keys interne
- `"UDA smart"` in contesti tecnici già interni (es. ID localStorage)
- "report", "import", "export" come nomi — rimandati a CML-262

## Bilancio sostituzioni

| Categoria | Occorrenze modificate | File |
|-----------|----------------------|------|
| Testo UI statico (HTML) | 13 | `index.html` + snapshot |
| Template JS (valori default, messaggi) | 17 | `index.html` + snapshot |
| CSS class/funzioni JS intenzionalmente escluse | 3 | `index.html` |
| **Totale modifiche** | **26 per file (52 totali)** | |

## Verifiche

| Check | Esito |
|-------|-------|
| Ricerca "UDA smart" rimanente (solo UI text) | 0 occorrenze → ✅ |
| Ricerca "persistita" rimanente | 0 occorrenze → ✅ |
| Ricerca "persistito" rimanente | 0 occorrenze → ✅ |
| Ricerca "Reset" come button text rimanente | 0 occorrenze → ✅ |
| Ricerca "Piu" rimanente | 0 occorrenze → ✅ |
| Ricerca "UDA personalizzata" presente | ✅ (19 occorrenze) |
| Ricerca "salvata/salvato" presente | ✅ |
| Ricerca "Ripristina marcature" presente | ✅ |
| Ricerca "Più recenti" presente | ✅ |
| Validatore curriculum 14 file | 14/14 valid, overallValid true |
| Shape test runtime | 14/14 PASS |

## Prossima slice nella roadmap

CML-262 — Export Naming Operational Microcopy (P1, ~15 righe modificate previste):
- "Resoconto sintesi" → spostare in view
- "Copia per Word" → "Scarica documento (docx)"
- "Testo" → "Scheda testo completo"
- Legenda formato file prima del download
- "Cosa ottieni" tooltip per ogni export
