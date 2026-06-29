# CML-175 — Musica runtime mappa dati integration

Data: 2026-06-26

## 1. Scopo

Integrare Musica nel runtime CurManLight, portando la copertura della mappa disciplinare da 9/14 a 10/14 discipline. Questo è il primo passo dopo la data preparation di Musica (CML-174).

## 2. Baseline tecnica

| Parametro             | Valore                                          |
| --------------------- | ----------------------------------------------- |
| Branch                | `main`                                          |
| Commit iniziale       | `90ab240`                                       |
| origin/main           | `90ab240`                                       |
| Working tree          | Pulito (sync)                                   |
| Shape runtime         | 9/9 PASS                                        |
| Validatore curriculum | 10 file, 118 unità, overallValid true, 0 errori |
| Deploy                | Non eseguito                                    |
| Push                  | Non eseguito                                    |

## 3. Esito CML-174

CML-174 ha creato e validato `content/curriculum/musica.normalized.json` con:

- 7 unità
- 3 nuclei (Ascolto, Espressione vocale e strumentale, Linguaggi sonori)
- 3 ordini (Infanzia, Primaria, Secondaria)
- S=7, N=3, P=7, D=0
- Validatore: 10 file, 118 unità, overallValid true, 0 errori

## 4. Dato normalizzato usato

`content/curriculum/musica.normalized.json` — invariato rispetto a CML-174. I dati sono stati trasformati in formato runtime via pipeline adapter/transformer.

## 5. Metodo di integrazione runtime

1. Generazione della variabile `MUSICA_MAPPA_DATI` dalla pipeline adapter/transformer
2. Tre modifiche puntuali al file `_published_snapshot/netlify-current/index.html`:
   - **Pulsante**: nuovo `<button>` Musica nella toolbar dei selettori disciplina
   - **Variabile**: dichiarazione `var MUSICA_MAPPA_DATI = {...};` con il JSON inline
   - **Branch**: nuovo `else if` in `renderMappaDisciplinare()` per caricare i dati Musica
3. Nessuna modifica al file normalizzato, a tool, a schema `.cml`, a export/import

## 6. Punto di integrazione runtime

### Pulsante

Inserito dopo il pulsante "Arte e Immagine" (linea 1396):

```html
<button
  class="mappa-disc-btn"
  onclick="setMappaDisciplina('musica',this)"
  style="padding:5px 12px;border-radius:7px;border:1px solid #c5cae9;background:#fff;color:#1a237e;cursor:pointer;font-size:11px;font-weight:700"
>
  Musica
</button>
```

### Variabile

Dichiarata dopo `ARTE_IMMAGINE_MAPPA_DATI` con la mappa completa Musica.

### Branch di selezione

```javascript
else if (mappaDisciplinaCorrente === 'musica' && typeof MUSICA_MAPPA_DATI !== 'undefined') dati = MUSICA_MAPPA_DATI;
```

## 7. Conteggi Musica

| Campo                     | Conteggio |
| ------------------------- | :-------: |
| struttureSostanziali (S)  |     7     |
| nodiDisciplinari (N)      |     3     |
| progressioneVerticale (P) |     7     |
| decisioniCurricolari (D)  |     0     |

## 8. Validatore curriculum

```
totalFiles: 10
totalUnits: 118
overallValid: true
invalidCount: 0
```

Musica: valid: true, 7 units, 3 ordini, 0 errori, 0 missingRequiredFields.
Warning: `nucleoFondante` assente (retrocompatibile — stesso pattern di tutte le altre discipline).
Warning: Primaria classi 2, 4 mancanti (limitazione attesa — fonte dati insufficiente).

## 9. Shape runtime 9/9 invariata

Il test shape runtime continua a coprire 9/9 discipline (Tecnologia, Italiano, Matematica, Scienze, Storia, Geografia, Inglese, Educazione Civica, Arte e Immagine). Musica non è stata aggiunta al test in questa slice. Il riallineamento a 10/10 sarà eseguito in CML-176.

## 10. Verifica codifica MUSICA_MAPPA_DATI

| Controllo                             |         Esito         |
| ------------------------------------- | :-------------------: |
| JSON estraibile e valido              |          ✅           |
| Nessun U+FFFD                         |          ✅           |
| Nessun `???`                          |          ✅           |
| Nessun byte nullo                     |          ✅           |
| Lettere accentate italiane conservate |          ✅           |
| Disciplina                            |      `Musica` ✅      |
| struttureSostanziali                  |     7 elementi ✅     |
| nodiDisciplinari                      |     3 elementi ✅     |
| progressioneVerticale                 |     7 elementi ✅     |
| decisioniCurricolari                  | 0 elementi (vuoto) ✅ |

## 11. Discipline invarianti

| Disciplina        |    Stato     |
| ----------------- | :----------: |
| Tecnologia        | Invariata ✅ |
| Italiano          | Invariata ✅ |
| Matematica        | Invariata ✅ |
| Scienze           | Invariata ✅ |
| Storia            | Invariata ✅ |
| Geografia         | Invariata ✅ |
| Inglese           | Invariata ✅ |
| Educazione Civica | Invariata ✅ |
| Arte e Immagine   | Invariata ✅ |

## 12. Verifica invarianti

| Componente                 |         Stato         |
| -------------------------- | :-------------------: |
| `content/curriculum/`      |     Invariato ✅      |
| `tools/`                   |     Invariati ✅      |
| Schema `.cml`              |     Invariato ✅      |
| Export/import              |     Invariati ✅      |
| Funzioni evidenze/UDA      |     Invariate ✅      |
| Service worker             |     Invariato ✅      |
| Navigazione globale / Home |     Invariata ✅      |
| Dipendenze                 | Nessuna introdotta ✅ |

## 13. Rischi residui

1. **Dato non ancora testato nello shape**: Musica non è coperta dal test shape runtime (9/9). Il riallineamento sarà in CML-176.
2. **Decisioni curricolari assenti**: D=0 — le decisioni vanno formulate con il dipartimento.
3. **Dati ricostruiti**: i contenuti Musica sono ricostruiti da documentazione interna, non da delibere formali — richiedono validazione umana.

## 14. Raccomandazione per CML-176

- **Azione primaria**: riallineare `tools/test-runtime-mappa-dati-shape.mjs` da 9/9 a 10/10, aggiungendo Musica alla lista delle discipline testate
- **CML-176 dovrebbe**: aggiornare il test shape, eseguire validatore + shape test, documentare il passaggio

## 15. Verdetto finale

`CML_175_MUSICA_RUNTIME_MAPPA_DATI_READY`
