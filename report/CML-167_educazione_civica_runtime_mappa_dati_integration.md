# CML-167 — Educazione Civica Runtime Mappa Dati Integration

Data: 2026-06-26

## 1. Scopo

Integrare Educazione Civica nel runtime CurManLight come ottava disciplina della mappa dati, utilizzando il file normalizzato creato in CML-166.

## 2. Baseline tecnica

- Branch: `main`
- Commit iniziale: `967ab28` (CML-166 sync closed remote)
- origin/main: `967ab28`
- Working tree iniziale: pulito (sync)
- Push: non eseguito
- Deploy: non eseguito

## 3. Esito CML-166

CML-166 ha creato e validato `content/curriculum/educazione-civica.normalized.json` con 11 unità, 4 nuclei, 3 ordini. Validatore: 8 file, 105 unità, overallValid true, 0 errori.

## 4. Dato normalizzato usato

- File: `content/curriculum/educazione-civica.normalized.json`
- Stato: in lettura sola — non modificato
- Generazione mappa dati tramite script Node ad-hoc che replica lo stesso shape di Geografia e Inglese (formato "JSON curriculum strutturato")

## 5. Metodo di integrazione runtime

Runtime increment controllato: tre modifiche puntuali in `_published_snapshot/netlify-current/index.html`:

1. **Pulsante** — aggiunto dopo il pulsante Inglese
2. **Variabile** — `var EDUCAZIONE_CIVICA_MAPPA_DATI = {compactJSON}` inserita dopo `INGLESE_MAPPA_DATI`
3. **Branch** — `else if` in `renderMappaDisciplinare()` per caricare i dati

## 6. Punto di integrazione runtime

| Elemento | Dettaglio |
|----------|-----------|
| Pulsante | `setMappaDisciplina('educazione-civica', this)` |
| Variabile | `EDUCAZIONE_CIVICA_MAPPA_DATI` |
| Branch | `mappaDisciplinaCorrente === 'educazione-civica'` |

## 7. Conteggi Educazione Civica

| Campo | Valore |
|-------|:------:|
| struttureSostanziali | 11 |
| nodiDisciplinari | 4 |
| progressioneVerticale | 9 |
| decisioniCurricolari | 0 |
| Stato decisioni | D=0 (deliberato) |

## 8. Validatore curriculum

`node tools/validate-cml-normalized-curriculum.mjs`:

- 8 file
- 105 unità
- overallValid: true
- 0 errori
- ✅

## 9. Shape runtime

`node tools/test-runtime-mappa-dati-shape.mjs`:

- 7/7 discipline PASS (Tecnologia, Italiano, Matematica, Scienze, Storia, Geografia, Inglese)
- Educazione Civica non inclusa nel file list hardcoded del tool — verificata separatamente
- ✅

## 10. Verifica codifica

| Controllo | Esito |
|-----------|:-----:|
| JSON valido | ✅ |
| Nessun \\uFFFD | ✅ |
| Nessun `???` | ✅ |
| Nessun `??` | ✅ |
| Accenti italiani (\\u00e0) | ✅ |

## 11. Discipline invarianti

| Disciplina | Stato |
|------------|:-----:|
| Tecnologia | ✅ invariata |
| Matematica | ✅ invariata |
| Italiano | ✅ invariato |
| Scienze | ✅ invariate |
| Storia | ✅ invariata |
| Geografia | ✅ invariata |
| Inglese | ✅ invariato |

## 12. Verifica invarianti

- `content/curriculum/` — nessuna modifica ✅
- export/import — nessuna modifica ✅
- schema `.cml` — nessuna modifica ✅
- tools/ — nessuna modifica ✅
- dipendenze — nessuna introdotta ✅
- funzioni evidenze/UDA — nessuna modifica ✅

## 13. Rischi residui

- D=0 decisioni curricolari: la disciplina non ha ancora audit preparatorio; le decisioni andranno formulate in slice successiva
- Il tool `test-runtime-mappa-dati-shape.mjs` ha hardcoded la lista delle 7 discipline originali; Educazione Civica non è testata dal tool ma è stata verificata con script ad-hoc
- La mappa dati è generata automaticamente dal file normalizzato — il contenuto didattico è in bozza e richiede validazione dipartimentale

## 14. Raccomandazione per CML-168

La prossima slice dovrebbe dedicarsi a:
- Audit delle decisioni curricolari per Educazione Civica (D>0)
- Oppure normalizzazione della prossima disciplina (Musica, Arte e Immagine, Educazione Fisica)
- Oppure integrazione evidenze/UDA per le discipline già normalizzate

## 15. Verdetto finale

`CML_167_EDUCAZIONE_CIVICA_RUNTIME_MAPPA_DATI_READY`
