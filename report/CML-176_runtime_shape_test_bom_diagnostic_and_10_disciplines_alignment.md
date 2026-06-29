# CML-176 - Runtime Shape Test BOM Diagnostic and 10 Disciplines Alignment

Data: 2026-06-26

## 1. Scopo

Diagnosticare il problema segnalato sul test shape runtime, verificare se fosse legato a dati, runtime o encoding/parsing del test, e riallineare il test shape alla copertura runtime effettiva di 10/14 discipline includendo Musica.

## 2. Baseline tecnica

| Parametro           | Valore                                          |
| ------------------- | ----------------------------------------------- |
| Branch              | `main`                                          |
| Commit iniziale     | `472f0da`                                       |
| origin/main         | `472f0da`                                       |
| Working tree        | Pulito, sync                                    |
| Validatore atteso   | 10 file, 118 unita, overallValid true, 0 errori |
| Runtime atteso      | 10/14 discipline                                |
| Shape test iniziale | 9/9, Musica non inclusa                         |
| Deploy              | Non eseguito                                    |
| Push                | Non eseguito                                    |

## 3. Stato consolidato

- CML-175 sincronizzato: Musica integrata nel runtime.
- SKB-001 sincronizzato: contratto SchoolKB remoto, fuori scope.
- HEAD iniziale: `472f0da`.
- `origin/main`: `472f0da`.

## 4. Problema iniziale

Il test shape runtime era da riallineare dopo CML-175:

- dati normalizzati disponibili: 10/14;
- runtime mappa integrato: 10/14;
- test shape ancora su 9 discipline.

Era inoltre presente una nota di problema BOM/encoding segnalata in precedenza. La slice ha quindi richiesto una diagnosi prima del fix.

## 5. Diagnosi eseguita

### Validatore curriculum

`node tools/validate-cml-normalized-curriculum.mjs`:

- `totalFiles: 10`
- `totalUnits: 118`
- `overallValid: true`
- `invalidCount: 0`

### Test shape prima della modifica

`node tools/test-runtime-mappa-dati-shape.mjs`:

- PASS 9/9
- Musica non inclusa nella lista `FILES`
- nessun errore dati riproducibile nel test iniziale

### Verifica runtime Musica

`_published_snapshot/netlify-current/index.html` contiene:

- pulsante/entry Musica;
- variabile `MUSICA_MAPPA_DATI`;
- branch `musica` in `renderMappaDisciplinare()`.

Il runtime non e' stato modificato.

### Verifica dati Musica

Pipeline diretta:

- adapter su `content/curriculum/musica.normalized.json`: JSON prodotto correttamente;
- adapter + transformer: JSON runtime parsabile;
- conteggi Musica: S=7, N=3, P=7, D=0.

### Verifica encoding/parsing

Controllati i file `content/curriculum/*.normalized.json`:

- nessun BOM UTF-8 rilevato;
- nessun byte nullo rilevato;
- `musica.normalized.json` inizia con `{` (`7B`) e non con `EF BB BF`.

## 6. Esito diagnosi

Il problema riproducibile non e' nei dati e non e' nel runtime.

Esito:

- dati curriculum validi;
- runtime Musica presente;
- nessun BOM o byte nullo nei file normalizzati;
- test shape non allineato a Musica.

La modifica e' quindi limitata al test shape. La guardia BOM/encoding aggiunta opera solo sull'output JSON letto dal test: rimuove un eventuale BOM UTF-8 iniziale e segnala byte nulli come errore esplicito, senza mascherare JSON non valido.

## 7. Modifica effettuata al test

File modificato:

- `tools/test-runtime-mappa-dati-shape.mjs`

Modifiche:

1. aggiunto `'musica.normalized.json'` a `FILES`;
2. aggiunta `normalizeJsonText(raw, label)`;
3. sostituito `JSON.parse(raw.trim())` con `JSON.parse(normalizeJsonText(raw, filepath))`.

La modifica non cambia il comportamento runtime. E' un allineamento del test e una robustezza minima del parsing test.

## 8. Allineamento 10 discipline

Discipline testate dopo CML-176:

1. Tecnologia
2. Italiano
3. Matematica
4. Scienze
5. Storia
6. Geografia
7. Inglese
8. Educazione Civica
9. Arte e Immagine
10. Musica

## 9. Conteggi Musica

| Campo                      | Valore |
| -------------------------- | :----: |
| S - strutture sostanziali  |   7    |
| N - nodi disciplinari      |   3    |
| P - progressione verticale |   7    |
| D - decisioni curricolari  |   0    |

## 10. Validazioni finali

| Controllo                                           | Esito                                                  |
| --------------------------------------------------- | ------------------------------------------------------ |
| `node tools/validate-cml-normalized-curriculum.mjs` | PASS - 10 file, 118 unita, overallValid true, 0 errori |
| `node tools/test-runtime-mappa-dati-shape.mjs`      | PASS - 10/10 discipline                                |
| `git diff --check`                                  | PASS                                                   |

Shape runtime finale:

```text
Tecnologia: PASS - S=6 N=6 P=10 D=2
Italiano: PASS - S=12 N=6 P=10 D=4
Matematica: PASS - S=12 N=5 P=6 D=4
Scienze: PASS - S=15 N=5 P=9 D=0
Storia: PASS - S=15 N=5 P=9 D=0
Geografia: PASS - S=12 N=3 P=9 D=0
Inglese: PASS - S=12 N=11 P=9 D=0
Educazione Civica: PASS - S=11 N=4 P=9 D=0
Arte e Immagine: PASS - S=6 N=3 P=6 D=0
Musica: PASS - S=7 N=3 P=7 D=0
overall: PASS - 10 passed, 0 failed
```

## 11. Invarianti

- Runtime invariato.
- `_published_snapshot/netlify-current/index.html` invariato.
- Root `index.html` invariato.
- `content/curriculum/` invariato.
- `tools/validate-cml-normalized-curriculum.mjs` invariato.
- `tools/generate-static-mappa-dati.mjs` invariato.
- Schema `.cml` invariato.
- Export/import invariati.
- Funzioni evidenze/UDA invariate.
- SchoolKB invariato.
- Nessuna dipendenza.
- Nessun deploy.
- Nessun push.

## 12. Rischi residui

1. Il test shape verifica struttura e presenza campi, non la qualita' semantica dei contenuti.
2. La pipeline usa ancora shell PowerShell per la pipe adapter -> transformer; gli accenti possono degradare in output console, ma il test shape non dipende dal testo semantico.
3. Restano 4 discipline non coperte da dati/runtime/test: Educazione Fisica, Seconda Lingua Comunitaria, Religione Cattolica, Latino LEL.

## 13. Raccomandazione per CML-177

Procedere con la prossima disciplina secondo la sequenza CML-172:

- CML-177 consigliata: readiness/data audit per Educazione Fisica.

In alternativa, proseguire SKB-002 solo in ramo/slot separato, mantenendo SchoolKB fuori dal ciclo runtime curricolare.

## 14. Verdetto finale

`CML_176_RUNTIME_SHAPE_TEST_BOM_DIAGNOSTIC_AND_10_DISCIPLINES_ALIGNMENT_READY`
