# Report CML-119B: Multi Discipline Normalized Curriculum Validator

## Riepilogo
Generalizzato il validatore da mono-disciplina (Tecnologia) a multi-disciplina su tutti i file `content/curriculum/*.normalized.json`. Il validatore ora produce report aggregato per disciplina, segnala l’incongruenza `nucleo` vs `nucleoFondante` come warning retrocompatibile e non introduce modifiche a runtime, contenuti o schema.

## File Modificati
- `tools/validate-cml-normalized-curriculum.mjs`

## Risultati Validazione

### Riepilogo
| Metrica | Valore |
|---------|--------|
| File validati | 7 |
| Unità totali | 94 |
| Overall valid | true |
| Invalid count | 0 |

### Dettaglio per Disciplina
| File | Disciplina | Unità | Infanzia | Primaria | Secondaria | Valid | Warning |
|------|-----------|-------|----------|----------|------------|-------|---------|
| geografia.normalized.json | Geografia | 12 | 1 | 5 | 6 | ✅ | 12 |
| inglese.normalized.json | Inglese | 12 | 1 | 5 | 6 | ✅ | 12 |
| italiano.normalized.json | Italiano | 14 | 3 | 5 | 6 | ✅ | 14 |
| matematica.normalized.json | Matematica | 13 | 1 | 5 | 7 | ✅ | 16 |
| scienze.normalized.json | Scienze | 15 | 2 | 5 | 8 | ✅ | 15 |
| storia.normalized.json | Storia | 15 | 1 | 5 | 9 | ✅ | 15 |
| tecnologia.normalized.json | Tecnologia | 13 | 2 | 4 | 7 | ✅ | 0 |

### Warning Rilevati
- **`nucleo` vs `nucleoFondante`**: 66 unità totali con warning retrocompatibile (tutte le discipline eccetto Tecnologia usano `nucleo` invece di `nucleoFondante` come da contratto CML-061).
- **Matematica Primaria**: 3 warning per classi 2, 3, 4 mancanti in Primaria.

### Errori e Campi Mancanti
- Errori: 0
- Campi obbligatori mancanti: 0
- Campi vuoti: 0
- `validazioneUmana !== true`: 0

## Validazioni Eseguite
- `node tools/validate-cml-normalized-curriculum.mjs` — eseguito con successo (exit 0)
- `git diff --check` — pulito
- Nessuna modifica a runtime, contenuti, schema `.cml`, export/import, UI

## Prossimi Passi
- CML-119C — CONTRATTO_DATI_MAPPA_DISCIPLINARE

## Verdetto
```text
CML_119B_MULTI_DISCIPLINE_NORMALIZED_CURRICULUM_VALIDATOR_READY
```
