# CML-169 — Arte e Immagine normalized data preparation

Data: 2026-06-26

## 1. Scopo

Preparare il file normalizzato di Arte e Immagine in `content/curriculum/arte-immagine.normalized.json`, conforme al contratto dati normalizzato già usato dalle discipline validate (Tecnologia, Italiano, Matematica, Scienze, Storia, Geografia, Inglese, Educazione Civica).

## 2. Baseline tecnica

| Parametro             | Valore                                         |
| --------------------- | ---------------------------------------------- |
| Branch                | `main`                                         |
| Commit iniziale       | `0674dde`                                      |
| origin/main           | `0674dde`                                      |
| Working tree          | Pulito (sync)                                  |
| Shape runtime         | 8/8 PASS                                       |
| Validatore curriculum | 8 file, 105 unità, overallValid true, 0 errori |
| Push                  | Non eseguito                                   |
| Deploy                | Non eseguito                                   |

## 3. Esito CML-165 e motivazione scelta Arte e Immagine

CML-165 ha valutato 7 discipline candidate per data preparation. Arte e Immagine è stata selezionata come seconda scelta dopo Educazione Civica, con:

- Readiness documentale: media
- Rischio dati: basso
- Complessità normalizzazione: medio-bassa
- Motivazione: completa il blocco espressivo, 3 ordini coperti, IN 2025 pronto, rischio basso

## 4. Metodo di ricostruzione dati

1. Estrazione nuclei da DISCIPLINE_META nel runtime (`Esprimersi e comunicare · Osservare · Comprendere le opere d'arte`)
2. Estrazione traguardi/obiettivi dal DATA object nel runtime (3 traguardi + 1 obiettivo)
3. Estrazione proposte IN 2025 per voci con `status: "modifica"`
4. Ricostruzione delle unità di apprendimento per ogni combinazione nucleo/ordine/classe
5. Conoscenze, abilità, evidenze e criteri di valutazione derivati dai traguardi e nuclei documentati
6. Nessun contenuto inventato — tutto riconducibile a fonti interne del repository

## 5. Fonti interne consultate

- `_published_snapshot/netlify-current/index.html` — righe 1885 (DISCIPLINE_META), 2008-2014 (traguardi/obiettivi)
- `content/curriculum/inglese.normalized.json` — pattern di riferimento
- `content/curriculum/geografia.normalized.json` — pattern di riferimento
- `content/curriculum/scienze.normalized.json` — pattern di riferimento
- `docs/02_system/NORMALIZED-CURRICULUM-DATA-CONTRACT.md` — contratto dati
- `report/CML-165_normalized_data_preparation_selection.md` — selezione disciplina
- `report/CML-111_next_discipline_normalization_selection_audit.md` — audit normalizzazione
- `docs/03_execution/CML-084.md` — audit completezza
- `docs/03_execution/CML-016A.md` — conteggi voci disciplinari

## 6. File normalizzato creato

`content/curriculum/arte-immagine.normalized.json`

## 7. Struttura del modello

### Disciplina

- Nome: `Arte e Immagine`
- Slug file: `arte-immagine.normalized.json`
- Meta-disciplina: `Espressivo`
- Schema: `cml-normalized-curriculum-v1`
- Stato: `bozza_generabile`
- Readiness: `in_revisione`
- Human validation required: `true`

### Nuclei

1. **Esprimersi e comunicare** — 3 unità (Infanzia, Primaria cl. 1, Secondaria cl. 1)
2. **Osservare** — 2 unità (Primaria cl. 3, Secondaria cl. 3)
3. **Comprendere le opere d'arte** — 1 unità (Secondaria cl. 2)

### Strutture sostanziali

1. Esplorazione creativa di materiali, colori e tecniche espressive (Infanzia fascia 5)
2. Primi elementi del linguaggio visivo: segno, colore, composizione (Primaria cl. 1)
3. Osservazione, lettura e comprensione di immagini e opere d'arte (Primaria cl. 3)
4. Produzione creativa: progettazione, ideazione e realizzazione di elaborati visivi (Secondaria cl. 1)
5. Lettura critica dell'opera d'arte, beni culturali e prospettiva storica (Secondaria cl. 2)
6. Arte, scienza e cittadinanza: osservazione interdisciplinare e comunicazione visiva (Secondaria cl. 3)

### Nodi disciplinari

1. Esprimersi e comunicare (3 unità)
2. Osservare (2 unità)
3. Comprendere le opere d'arte (1 unità)

### Progressione verticale

- Infanzia fascia 5, Primaria classi 1 e 3, Secondaria classi 1, 2, 3

### Decisioni curricolari

- Nessuna decisione documentata — `decisioniCurricolari: []`

## 8. Conteggi finali

| Campo                  |  Conteggio  |
| ---------------------- | :---------: |
| Unità di apprendimento |      6      |
| Ordini coperti         |      3      |
| Classi Primaria        |  2 (1, 3)   |
| Classi Secondaria      | 3 (1, 2, 3) |
| Infanzia fasce         |    1 (5)    |
| struttureSostanziali   |      6      |
| nodiDisciplinari       |      3      |
| progressioneVerticale  |      6      |
| decisioniCurricolari   |      0      |

## 9. Stato prudenziale dei contenuti

- Tutti i contenuti sono ricostruiti da documentazione interna del repository
- Il file è marcato come `bozza_generabile` / `in_revisione` — richiede validazione umana
- Le unità per Primaria classi 2, 4, 5 non sono state create per assenza di fonte dati specifica
- Le proposte IN 2025 sono state integrate nelle unità Secondaria (artiste femminili, STEM-arte, ceramica arianese, strumenti digitali)
- Nessuna decisione curricolare è stata formulata — `D=0` deliberato e documentato

## 10. Validatore curriculum

```
totalFiles: 9
totalUnits: 111
overallValid: true
invalidCount: 0
```

Arte e Immagine: valid: true, 6 units, 3 ordini, 0 errori, 0 missingRequiredFields.
Warning: `nucleoFondante` assente (retrocompatibile — stesso pattern di tutte le altre discipline).
Warning: Primaria classi 2, 4, 5 mancanti (limitazione attesa — fonte dati insufficiente).

## 11. Generazione statica a stdout

Comando: `node tools/generate-static-mappa-dati.mjs content/curriculum/arte-immagine.normalized.json --const ARTE_IMMAGINE_MAPPA_DATI`

Output: ✅ Generato correttamente — S=6, N=3, P=6, D=0 — nessun redirect PowerShell.

## 12. Verifica codifica

| Controllo         |        Esito         |
| ----------------- | :------------------: |
| UTF-8             |          ✅          |
| BOM assente       |          ✅          |
| Nessun byte nullo |          ✅          |
| Nessun U+FFFD     |          ✅          |
| Nessun `???`      |          ✅          |
| JSON.parse valido |          ✅          |
| Accenti italiani  |   ✅ 23 occorrenze   |
| Campo disciplina  | `Arte e Immagine` ✅ |

## 13. Test shape runtime 8/8 invariato

Il test shape runtime continua a coprire 8/8 discipline (Tecnologia, Italiano, Matematica, Scienze, Storia, Geografia, Inglese, Educazione Civica). Arte e Immagine NON è stata aggiunta al test perché non ancora integrata nel runtime.

## 14. Verifica invarianti

| Componente                                                 |         Stato         |
| ---------------------------------------------------------- | :-------------------: |
| Runtime (`_published_snapshot/netlify-current/index.html`) |     Invariato ✅      |
| Altri file `content/curriculum/`                           |     Invariati ✅      |
| Tools (`tools/`)                                           |     Invariati ✅      |
| Schema `.cml`                                              |     Invariato ✅      |
| Export/import                                              |     Invariati ✅      |
| Funzioni evidenze/UDA                                      |     Invariate ✅      |
| Service worker                                             |     Invariato ✅      |
| Dipendenze                                                 | Nessuna introdotta ✅ |

## 15. Rischi residui

1. **Dati ricostruiti vs istituzionali**: i contenuti sono derivati da dati interni del repository, non da documenti ministeriali o delibere formali — richiedono validazione dipartimentale.
2. **Copertura Primaria parziale**: classi 2, 4, 5 non hanno unità specifiche per assenza di fonte dati. La copertura dovrà essere integrata con dati reali.
3. **Decisioni curricolari assenti**: D=0 — le decisioni vanno formulate con il dipartimento.
4. **Nessun test shape per Arte e Immagine**: il dato normalizzato è validabile solo dal validatore curriculum e dalla generazione statica, non ancora dal test shape runtime.

## 16. Raccomandazione per CML-170

- **Opzione A**: audit locale del file normalizzato — verifica approfondita dei contenuti, controllo incrociato con documenti originali
- **Opzione B**: integrazione runtime di Arte e Immagine nella mappa disciplinare (pulsante, variabile, switch), portando la copertura runtime a 9/14
- **Opzione C**: normalizzazione della prossima disciplina (Musica, Educazione Fisica, Religione Cattolica, Seconda Lingua Comunitaria o Latina LEL)
- **Opzione D**: formulazione delle prime decisioni curricolari per Arte e Immagine

Raccomandazione: **Opzione B** se il dato normalizzato è ritenuto sufficientemente solido; **Opzione A** se si preferisce un'ulteriore verifica prima dell'integrazione runtime.

## 17. Verdetto finale

`CML_169_ARTE_IMMAGINE_NORMALIZED_DATA_PREPARATION_READY`
