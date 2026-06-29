# CML-185 — Residual Discipline Selection Audit

Data: 2026-06-27

## 1. Scopo

Selezionare formalmente la prossima disciplina del modello curricolare CurManLight da normalizzare (creazione file `.normalized.json`) dopo la chiusura del ciclo di Educazione Fisica. La selezione è puramente documentale e non avvia alcuna data-prep o runtime integration.

## 2. Baseline tecnica

| Parametro             | Valore                                                                     |
| --------------------- | -------------------------------------------------------------------------- |
| Root Git              | `C:\Users\anton\CurManLight`                                               |
| Branch                | `main`                                                                     |
| Commit iniziale       | `8a8351a`                                                                  |
| origin/main           | `8a8351a`                                                                  |
| Working tree iniziale | pulito                                                                     |
| Verdict precedente    | `CML_184A_SYNC_CLOSED_REMOTE`                                              |
| Dati normalizzati     | 11/14                                                                      |
| Runtime mappa         | 11/14                                                                      |
| Shape test            | 11/11 PASS                                                                 |
| Skill usate           | `cml-docs-only-slice`, `cml-readiness-audit` (locali in `.claude/skills/`) |
| Deploy                | non eseguito                                                               |
| Push                  | non eseguito                                                               |

## 3. Stato consolidato post CML-184A

Dopo CML-184A, lo stato del progetto è:

- **11/14 discipline** con file `.normalized.json` presenti in `content/curriculum/`
- **11/14 discipline** integrate nella mappa runtime (`_published_snapshot/netlify-current/index.html`)
- **11/11 shape test** PASS (copertura test allineata al runtime)

Discipline completate:

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
11. Educazione Fisica (limited draft, `humanValidationRequired: true`)

## 4. Discipline residue

Tre discipline non hanno ancora un file `.normalized.json`:

| Disciplina                 | Chiave | Copertura ordini               | Item storici                       |
| -------------------------- | ------ | ------------------------------ | ---------------------------------- |
| Seconda Lingua Comunitaria | `sl_`  | Solo Secondaria (cl. 1, 2, 3)  | 2 ambiti, 1 traguardo (CML-109)    |
| Religione Cattolica        | `rc_`  | Infanzia, Primaria, Secondaria | 3 ambiti, 1 traguardo (CML-109)    |
| Latino LEL                 | `lat_` | Solo Secondaria (cl. 2, 3)     | 1 traguardo, 2 obiettivi (CML-109) |

## 5. Sequenza CML-172

CML-172 (2026-06-26) ha approvato la seguente sequenza di completamento:

1. **Musica** — completata (CML-173 → CML-174 → CML-175 → CML-176)
2. **Educazione Fisica** — completata (CML-177 → CML-178 → CML-179 → CML-180 → CML-182 → CML-182B → CML-183 → CML-184 → CML-184A)
3. **Seconda Lingua Comunitaria** — prossima candidata
4. **Religione Cattolica** — quarta
5. **Latino LEL** — quinta

## 6. Metodo di selezione

Valutazione comparativa su 7 criteri, con peso maggiore alla continuità con la sequenza già approvata (CML-172) e al principio di prudenza (rischio contenuto inventato, rischio istituzionale).

## 7. Criteri di valutazione

| #   | Criterio                       | Peso  | Descrizione                                                   |
| --- | ------------------------------ | ----- | ------------------------------------------------------------- |
| 1   | Continuità CML-172             | Alto  | Rispetto della sequenza già deliberata                        |
| 2   | Readiness dati                 | Alto  | Disponibilità di dati documentali sufficienti                 |
| 3   | Rischio contenuto inventato    | Alto  | Probabilità di introdurre dati non verificati                 |
| 4   | Rischio istituzionale          | Medio | Sensibilità della disciplina                                  |
| 5   | Compatibilità schema           | Medio | Conformità al contratto `.normalized.json` e al validatore    |
| 6   | Semplicità runtime integration | Basso | Sforzo di integrazione nella mappa runtime                    |
| 7   | Coerenza limited draft         | Medio | Applicabilità del modello con `humanValidationRequired: true` |

## 8. Valutazione Seconda Lingua Comunitaria

| Criterio                       | Giudizio                      | Note                                                                                                                                 |
| ------------------------------ | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Continuità CML-172             | **1ª nella sequenza residua** | Da CML-172: "può riusare con prudenza il pattern già collaudato con Inglese"                                                         |
| Readiness dati                 | **Media**                     | 2 ambiti, 1 traguardo documentati in CML-109; pattern Inglese esistente come riferimento strutturale                                 |
| Rischio contenuto inventato    | **Medio-basso**               | Pattern linguistico collaudato; rischio di genericità linguistica (non riferirsi a una sola lingua), ma mitigabile con limited draft |
| Rischio istituzionale          | **Basso**                     | Lingua comunitaria, nessuna sensibilità particolare                                                                                  |
| Compatibilità schema           | **Alta**                      | Stessa struttura di Inglese (lingua), buon mapping su schema normalizzato                                                            |
| Semplicità runtime integration | **Media**                     | Pattern Inglese adattabile; solo Secondaria (3 classi)                                                                               |
| Coerenza limited draft         | **Alta**                      | Adatto per limited draft con `humanValidationRequired: true`                                                                         |
| **Voto complessivo**           | **Pronta per data-prep**      |                                                                                                                                      |

## 9. Valutazione Religione Cattolica

| Criterio                       | Giudizio              | Note                                                                                                        |
| ------------------------------ | --------------------- | ----------------------------------------------------------------------------------------------------------- |
| Continuità CML-172             | **2ª nella sequenza** | Da CML-172: "rischio istituzionale alto; va trattata dopo aver stabilizzato le discipline a rischio minore" |
| Readiness dati                 | **Media-bassa**       | 3 ambiti, 1 traguardo (CML-109); warning storico di consistenza (totaleVoci=4 vs statusTotal=5 da CML-060A) |
| Rischio contenuto inventato    | **Medio-alto**        | Specificità dottrinale; rischio di contenuti inappropriati o non neutrali                                   |
| Rischio istituzionale          | **Alto**              | IRC (Insegnamento Religione Cattolica) ha implicazioni con la CEI e la normativa concordataria              |
| Compatibilità schema           | **Media**             | Nuclei specifici (Dio, Gesù, Chiesa, valori) che richiedono attenzione nel mapping                          |
| Semplicità runtime integration | **Media**             | Copertura completa (Infanzia, Primaria, Secondaria)                                                         |
| Coerenza limited draft         | **Media**             | Applicabile ma richiede validazione umana attenta                                                           |
| **Voto complessivo**           | **Da posporre**       |                                                                                                             |

## 10. Valutazione Latino LEL

| Criterio                       | Giudizio              | Note                                                                        |
| ------------------------------ | --------------------- | --------------------------------------------------------------------------- |
| Continuità CML-172             | **3ª nella sequenza** | Da CML-172: "solo dopo chiarimento rapporto con Italiano e del profilo LEL" |
| Readiness dati                 | **Bassa**             | 1 traguardo, 2 obiettivi (CML-109); solo Secondaria cl. 2-3                 |
| Rischio contenuto inventato    | **Medio**             | Perimetro LEL non chiaramente distinto da Latino classico                   |
| Rischio istituzionale          | **Medio-basso**       | Disciplina nuova IN 2025, ancora opzionale (LEL)                            |
| Compatibilità schema           | **Media**             | Solo Secondaria, perimetro ridotto; rapporto con Italiano da chiarire       |
| Semplicità runtime integration | **Bassa**             | Perimetro particolare, rapporto con Italiano non risolto                    |
| Coerenza limited draft         | **Media**             | Applicabile, ma dati troppo scarsi per un draft utile                       |
| **Voto complessivo**           | **Da posporre**       |                                                                             |

## 11. Confronto sintetico

| Criterio                       | Seconda Lingua Comunitaria | Religione Cattolica | Latino LEL  |
| ------------------------------ | -------------------------- | ------------------- | ----------- |
| Continuità CML-172             | 1ª                         | 2ª                  | 3ª          |
| Readiness dati                 | Media                      | Media-bassa         | Bassa       |
| Rischio contenuto inventato    | Medio-basso                | Medio-alto          | Medio       |
| Rischio istituzionale          | Basso                      | Alto                | Medio-basso |
| Compatibilità schema           | Alta                       | Media               | Media       |
| Semplicità runtime integration | Media                      | Media               | Bassa       |
| Coerenza limited draft         | Alta                       | Media               | Media       |
| **Indicazione**                | **Selezionata**            | Posticipare         | Posticipare |

## 12. Decisione finale

```
NEXT_DISCIPLINE_SELECTED: Seconda Lingua Comunitaria
```

### Motivazione

1. **Continuità con CML-172**: la sequenza già approvata indica Seconda Lingua Comunitaria come prossima dopo Musica ed Educazione Fisica, che sono state completate.
2. **Pattern esistente**: il modello linguistico è già stato collaudato con Inglese, riducendo il rischio di errori strutturali nella data-prep.
3. **Rischio contenuto inventato medio-basso**: la trasversalità alle lingue comunitarie è un vincolo noto e gestibile con limited draft.
4. **Rischio istituzionale basso**: nessuna implicazione concordataria o dottrinale.
5. **Prudenza**: Religione Cattolica e Latino LEL hanno rischi maggiori e beneficiano di ulteriore tempo di maturazione.

### Cosa non è stato selezionato

- **Religione Cattolica**: posticipata per rischio istituzionale alto e warning di consistenza non risolto.
- **Latino LEL**: posticipato per readiness bassa, perimetro incerto e rapporto con Italiano da chiarire.

## 13. Prossima slice proposta

`CML-186 — SECONDA_LINGUA_COMUNITARIA_LIMITED_DRAFT_DATA_PREP`

### Perimetro previsto

- Creare `content/curriculum/seconda-lingua-comunitaria.normalized.json`
- Pattern: Inglese come riferimento strutturale (stessa famiglia "lingue")
- Contenuti: trasversali alle lingue comunitarie, non riferiti a una sola lingua
- Marcatori limited draft: `humanValidationRequired: true`, `stato: bozza_generabile`, `validazioneUmana: true`
- Solo Secondaria (classi 1, 2, 3)
- `decisioniCurricolari: []` se non documentato
- Validatore curriculum PASS dopo creazione
- Non modificare runtime
- Non fare deploy
- Non fare push

## 14. Cosa non è stato fatto

- Nessun file `.normalized.json` creato
- Nessuna data-prep avviata
- Nessuna runtime integration
- Nessuna modifica a `_published_snapshot/netlify-current/index.html`
- Nessuna modifica a root `index.html`
- Nessuna modifica a `content/curriculum/`
- Nessuna modifica a `tools/`
- Nessuna modifica `.claude/`
- Nessuna modifica `CLAUDE.md`
- Nessuna modifica a schema `.cml`
- Nessuna modifica a export/import
- Nessuna modifica a funzioni evidenze/UDA
- Nessuna modifica SchoolKB
- Nessuna modifica a dipendenze
- Nessun deploy
- Nessun push

## 15. Rischi residui

| Rischio                                      | Descrizione                                                           | Mitigazione                                    |
| -------------------------------------------- | --------------------------------------------------------------------- | ---------------------------------------------- |
| Genericità linguistica                       | Il modello trasversale può risultare troppo generico se non calibrato | Limited draft con validazione umana esplicita  |
| Pattern Inglese non perfettamente adattabile | Inglese ha struttura specifica che potrebbe non calzare               | Usare Inglese come riferimento, non come copia |
| Solo Secondaria                              | Copertura limitata a un ordine                                        | Accettato per la specificità della disciplina  |
| Decisioni curricolari non documentate        | Nessuna decisione formale di dipartimento                             | `decisioniCurricolari: []`                     |

## 16. Invarianti rispettate

- [x] Dati normalizzati invariati: 11/14
- [x] Runtime mappa invariata: 11/14
- [x] Shape test: 11/11 PASS
- [x] Validatore curriculum: 11/11 PASS
- [x] Working tree: pulito
- [x] HEAD allineato a origin/main: `8a8351a`
- [x] Nessuna modifica a file non autorizzati
- [x] Nessuna credenziale, token o secret
- [x] Nessun deploy
- [x] Nessun push

## 17. Verdetto finale

```
CML_185_RESIDUAL_DISCIPLINE_SELECTION_AUDIT_READY
```
