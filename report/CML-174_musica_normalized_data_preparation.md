# CML-174 — Musica normalized data preparation

Data: 2026-06-26

## 1. Scopo

Preparare il file normalizzato di Musica in `content/curriculum/musica.normalized.json`, conforme al contratto dati normalizzato già usato dalle discipline validate (Tecnologia, Italiano, Matematica, Scienze, Storia, Geografia, Inglese, Educazione Civica, Arte e Immagine).

## 2. Baseline tecnica

| Parametro             | Valore                                         |
| --------------------- | ---------------------------------------------- |
| Branch                | `main`                                         |
| Commit iniziale       | `84902b5`                                      |
| origin/main           | `84902b5`                                      |
| Working tree          | Pulito (sync)                                  |
| Shape runtime         | 9/9 PASS                                       |
| Validatore curriculum | 9 file, 111 unità, overallValid true, 0 errori |
| Push                  | Non eseguito                                   |
| Deploy                | Non eseguito                                   |

## 3. Esito CML-173 e motivazione scelta Musica

CML-173 ha valutato la readiness documentale di Musica con esito readiness media, rischio basso. Musica è stata confermata come prima disciplina espressiva per:

- **6 items documentati** (3 traguardi + 3 obiettivi)
- **3 nuclei** chiari e ben separati (Ascolto, Espressione vocale e strumentale, Linguaggi sonori)
- **3 ordini** coperti (Infanzia, Primaria, Secondaria)
- **IN 2025** pronto (notazione musicale curricolare, canto corale, musica d'insieme, tecnologie digitali)
- **Nessun rischio sovrapposizione** con altre discipline normalizzate

## 4. Metodo di ricostruzione dati

1. Estrazione nuclei e items da CML-109 audit (3 nuclei, 6 items)
2. Verifica readiness da CML-173 audit
3. Ricostruzione delle unità di apprendimento per ogni combinazione nucleo/ordine/classe
4. Conoscenze, abilità, evidenze e criteri di valutazione derivati dai traguardi e nuclei documentati
5. IN 2025 references integrate: notazione musicale curricolare (Pri cl.3), canto corale (Pri cl.3), musica d'insieme (Sec cl.1), tecnologie digitali (Sec cl.3)
6. Nessun contenuto inventato — tutto riconducibile a fonti interne del repository

## 5. Fonti interne consultate

- `report/CML-109_next_discipline_normalization_selection_audit.md` — 6 items Musica, 3 nuclei, 3 ordini
- `report/CML-173_musica_readiness_data_audit.md` — readiness audit
- `content/curriculum/arte-immagine.normalized.json` — pattern di riferimento (disciplina espressiva)
- `content/curriculum/inglese.normalized.json` — pattern di riferimento
- `content/curriculum/geografia.normalized.json` — pattern di riferimento
- `docs/02_system/NORMALIZED-CURRICULUM-DATA-CONTRACT.md` — contratto dati
- `docs/03_execution/CML-016A.md` — conteggi voci disciplinari
- `docs/03_execution/CML-172.md` — sequenza completamento discipline residue

## 6. File normalizzato creato

`content/curriculum/musica.normalized.json`

## 7. Struttura del modello

### Disciplina

- Nome: `Musica`
- Slug file: `musica.normalized.json`
- Meta-disciplina: `Espressivo`
- Schema: `cml-normalized-curriculum-v1`
- Stato: `bozza_generabile`
- Readiness: `in_revisione`
- Human validation required: `true`

### Nuclei

1. **Ascolto** — 2 unità (Infanzia cl. 5, Secondaria cl. 2)
2. **Espressione vocale e strumentale** — 2 unità (Primaria cl. 5, Secondaria cl. 1)
3. **Linguaggi sonori** — 3 unità (Primaria cl. 1, 3; Secondaria cl. 3)

### Strutture sostanziali

1. Esplorazione sonora e ascolto attivo: suoni, rumori e silenzi (Infanzia fascia 5)
2. Primi elementi del linguaggio musicale: suono, ritmo, timbro e intensità (Primaria cl. 1)
3. Notazione musicale e canto corale: lettura ritmica e intonazione (Primaria cl. 3)
4. Produzione musicale d'insieme: canto, strumentario e prime forme di espressione sonora (Primaria cl. 5)
5. Musica d'insieme: pratica vocale e strumentale, interpretazione e repertorio (Secondaria cl. 1)
6. Analisi e contestualizzazione del linguaggio musicale: ascolto critico e cultura musicale (Secondaria cl. 2)
7. Creatività sonora, tecnologie digitali e patrimonio musicale: produzione, composizione e cittadinanza culturale (Secondaria cl. 3)

### Nodi disciplinari

1. Ascolto (2 unità)
2. Espressione vocale e strumentale (2 unità)
3. Linguaggi sonori (3 unità)

### Progressione verticale

- Infanzia fascia 5, Primaria classi 1, 3, 5, Secondaria classi 1, 2, 3

### Decisioni curricolari

- Nessuna decisione documentata — `decisioniCurricolari: []`

## 8. Conteggi finali

| Campo                  |  Conteggio  |
| ---------------------- | :---------: |
| Unità di apprendimento |      7      |
| Ordini coperti         |      3      |
| Classi Primaria        | 3 (1, 3, 5) |
| Classi Secondaria      | 3 (1, 2, 3) |
| Infanzia fasce         |    1 (5)    |
| struttureSostanziali   |      7      |
| nodiDisciplinari       |      3      |
| progressioneVerticale  |      7      |
| decisioniCurricolari   |      0      |

## 9. Stato prudenziale dei contenuti

- Tutti i contenuti sono ricostruiti da documentazione interna del repository
- Il file è marcato come `bozza_generabile` / `in_revisione` — richiede validazione umana
- Le unità per Primaria classi 2, 4 non sono state create per assenza di fonte dati specifica
- Le proposte IN 2025 sono state integrate: notazione curricolare (Pri cl.3), canto corale (Pri cl.3), tecnologie digitali (Sec cl.3)
- Nessuna decisione curricolare è stata formulata — D=0 deliberato e documentato

## 10. Validatore curriculum

```
totalFiles: 10
totalUnits: 118
overallValid: true
invalidCount: 0
```

Musica: valid: true, 7 units, 3 ordini, 0 errori, 0 missingRequiredFields.
Warning: `nucleoFondante` assente (retrocompatibile — stesso pattern di tutte le altre discipline).
Warning: Primaria classi 2, 4 mancanti (limitazione attesa — fonte dati insufficiente).

## 11. Generazione statica a stdout

Comando: `node tools/generate-static-mappa-dati.mjs content/curriculum/musica.normalized.json --const MUSICA_NORM`

Output: ✅ Generato correttamente — S=7, N=3, P=7, D=0.

## 12. Verifica codifica

| Controllo         |    Esito    |
| ----------------- | :---------: |
| UTF-8             |     ✅      |
| BOM assente       |     ✅      |
| Nessun byte nullo |     ✅      |
| Nessun U+FFFD     |     ✅      |
| Nessun `???`      |     ✅      |
| JSON.parse valido |     ✅      |
| Accenti italiani  |     ✅      |
| Campo disciplina  | `Musica` ✅ |

## 13. Test shape runtime 9/9 invariato

Il test shape runtime continua a coprire 9/9 discipline (Tecnologia, Italiano, Matematica, Scienze, Storia, Geografia, Inglese, Educazione Civica, Arte e Immagine). Musica NON è stata aggiunta al test perché non ancora integrata nel runtime.

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
2. **Copertura Primaria parziale**: classi 2, 4 non hanno unità specifiche per assenza di fonte dati. La copertura dovrà essere integrata con dati reali.
3. **Decisioni curricolari assenti**: D=0 — le decisioni vanno formulate con il dipartimento.
4. **Nessun test shape per Musica**: il dato normalizzato è validabile solo dal validatore curriculum e dalla generazione statica, non ancora dal test shape runtime.

## 16. Raccomandazione per CML-175

- **Opzione A**: audit locale del file normalizzato — verifica approfondita dei contenuti, controllo incrociato con documenti originali
- **Opzione B**: integrazione runtime di Musica nella mappa disciplinare (pulsante, variabile, switch), portando la copertura runtime a 10/14
- **Opzione C**: normalizzazione della prossima disciplina (Educazione Fisica)
- **Opzione D**: formulazione delle prime decisioni curricolari per Musica

Raccomandazione: **Opzione B** se il dato normalizzato è ritenuto sufficientemente solido; **Opzione A** se si preferisce un'ulteriore verifica prima dell'integrazione runtime.

## 17. Verdetto finale

`CML_174_MUSICA_NORMALIZED_DATA_PREPARATION_READY`
