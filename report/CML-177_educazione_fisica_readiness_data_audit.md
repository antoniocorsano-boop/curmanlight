# CML-177 — Educazione Fisica Readiness Data Audit

Data: 2026-06-26

## 1. Scopo

Valutare la readiness documentale di Educazione Fisica per la creazione del file normalizzato `content/curriculum/educazione-fisica.normalized.json`, seconda disciplina della sequenza residua approvata in CML-172.

## 2. Baseline tecnica

| Parametro                                 | Valore                       |
| ----------------------------------------- | ---------------------------- |
| Root Git                                  | `C:\Users\anton\CurManLight` |
| Branch                                    | `main`                       |
| Commit iniziale                           | `d3bd4a2`                    |
| origin/main                               | `d3bd4a2`                    |
| Working tree iniziale                     | Pulito, sync con origin/main |
| `git diff --check` preflight              | PASS                         |
| Collisione `docs/03_execution/CML-177.md` | Assente                      |
| Collisione report CML-177                 | Assente                      |

## 3. Stato consolidato 10/14

| Area               | Stato                                  |
| ------------------ | -------------------------------------- |
| Dati normalizzati  | 10/14 file `.normalized.json` presenti |
| Runtime mappa      | 10/14 discipline integrate             |
| Shape runtime test | 10/10 PASS                             |

### Discipline completate

1. Tecnologia
2. Matematica
3. Italiano
4. Scienze
5. Storia
6. Geografia
7. Inglese
8. Educazione Civica
9. Arte e Immagine
10. Musica

## 4. Esito CML-172 e posizione di Educazione Fisica nella sequenza residua

CML-172 ha approvato la sequenza:
**Musica → Educazione Fisica → Seconda Lingua Comunitaria → Religione Cattolica → Latino LEL**

Educazione Fisica è la seconda candidata con raccomandazione esplicita:

> "utile per completare l'area corpo/movimento, ma richiede audit specifico per evitare normalizzazioni premature"

## 5. Richiamo CML-157I

CML-157I (non trovato come file separato, ma riferito in CML-172) classificava Educazione Fisica come "non pronta".

Strutture proposte (da CML-157I):

1. Corpo e percezione
2. Abilità motorie
3. Gioco e sport
4. Salute e benessere
5. Espressionione e inclusione

**Classificazione attuale**:

| Struttura                | Classificazione  | Note                                              |
| ------------------------ | ---------------- | ------------------------------------------------- |
| Corpo e percezione       | Non supportata   | Non formalizzata, solo indicata in report genrici |
| Abilità motorie          | Ipotesi prudente | Non documentata in unità specifiche               |
| Gioco e sport            | Ipotesi prudente | Implicito in report, non strutturato              |
| Salute e benessere       | Ipotesi prudente | Temi sensibili, non formalizzati                  |
| Espressione e inclusione | Ipotesi prudente | Non specificato nella documentazione              |

## 6. Verifica presenza/assenza di `educazione-fisica.normalized.json`

**Assente.** `content/curriculum/educazione-fisica.normalized.json` non esiste. Confermata la condizione di partenza.

## 7. Fonti interne consultate

- `docs/03_execution/CML-172.md` — sequenza completamento, goal Educazione Fisica
- `report/CML-172_remaining_disciplines_goals_and_completion_sequence.md` — tabella comparativa
- `report/CML-165_normalized_data_preparation_selection.md` — "non documentato", richiede audit
- `docs/03_execution/CML-164.md` — "NON DISPONIBILE" nella readiness tab
- `report/CML-174_musica_normalized_data_preparation.md` — modello di riferimento (disciplina espressiva)
- `docs/03_execution/CML-104.md` — "4 nuclei chiari, evidenze comportamentali osservabili"
- `docs/03_execution/CML-097.md` — voto 5/10, 4 motori, Inf/Pri/Sec
- `docs/03_execution/CML-084.md` — stato `solo_consultazione`

## 8. Evidenze disponibili per Educazione Fisica

### Copertura ordini

**Completa** — Infanzia, Primaria, Secondaria. Confermata da CML-097, CML-104.

### Riferimenti a strutture/nuclei

CML-104: "4 nuclei chiari, evidenze comportamentali osservabili"

CML-172 goal:

> "Modello su corpo, movimento, gioco/sport, salute/benessere, espressione e inclusione"

### Riferimenti a conteggi

CML-113: "5 voci" (senza dettaglio specifico)

CML-016A: non presente (Educazione Fisica non elencata nei contatori)

## 9. Gap documentali rilevati

1. **Nessun `.normalized.json`** esistente
2. **Strutture non formalizzate** — i 4 nucleihanno solo indicazioni generiche
3. **Progressione verticale non strutturata** — nessun dettaglio classe/fascia
4. **Nessuna IN 2025 proposal** — nessun riferimento specifico
5. **Nessuna decisione curricolare** — `decisioniCurricolari` vuoto
6. **Fonte DOCX non consultata** — documento Word originale non estratto
7. **Rischio salute non gestito** — contenuti su salute possono confliggere con ambito sanitario

## 10. Possibili strutture sostanziali

Classificate con prudenza:

| Struttura                                        | Classificazione  | Note                                 |
| ------------------------------------------------ | ---------------- | ------------------------------------ |
| Corpo, movimento e schema corporeo               | Ipotesi prudente | Non documentata in dettaglio         |
| Gioco, regole e collaborazione sportiva          | Ipotesi prudente | Evidenze comportamentali osservabili |
| Salute, benessere e stili di vita attivi         | Ipotesi prudente | Rischio istituzionale medio          |
| Espressione corporea e comunicazione non verbale | Ipotesi prudente | Non documentata specificamente       |
| Sicurezza e prevenzione                          | Ipotesi prudente | Tema ricorrente, non formalizzato    |
| Inclusione e adattamento motorio                 | Ipotesi prudente | Non supportata da fonti              |

## 11. Possibili nodi disciplinari

| Nodo                    | Classificazione  |
| ----------------------- | ---------------- |
| Movimento e equilibrio  | Ipotesi prudente |
| Coordinazione motoria   | Ipotesi prudente |
| Gioco collaborativo     | Ipotesi prudente |
| Attività sportiva       | Ipotesi prudente |
| Salute e stili di vita  | Ipotesi prudente |
| Espressione non verbale | Ipotesi prudente |

## 12. Possibile progressione verticale

| Ordine     | Disponibilità      |
| ---------- | ------------------ |
| Infanzia   | Da audit ulteriore |
| Primaria   | Da audit ulteriore |
| Secondaria | Da audit ulteriore |

**Gap critico**: Non esiste traccia strutturata di evidenze per classe/fascia.

## 13. Decisioni curricolari

Nessuna decisione curricolare documentata per Educazione Fisica.

Raccomandazione: `decisioniCurricolari: []`

## 14. Tabella readiness

| Criterio                             | Valutazione                                           |
| ------------------------------------ | ----------------------------------------------------- |
| Readiness documentale                | Bassa                                                 |
| Disponibilità dati                   | Bassa (solo report generi, nessun `.normalized.json`) |
| Rischio dati                         | Medio                                                 |
| Rischio istituzionale                | Medio                                                 |
| Complessità normalizzazione          | Alta                                                  |
| Rischio invenzione contenuti         | Alto                                                  |
| Compatibilità contratto normalizzato | Piena (a livello formale)                             |
| **Raccomandazione**                  | **Richiede audit aggiuntivo**                         |

## 15. Confronto con Musica

| Aspetto                     | Musica                       | Educazione Fisica                       |
| --------------------------- | ---------------------------- | --------------------------------------- |
| Items documentati           | 6 (CML-109)                  | 5 indicati (CML-113) ma non dettagliati |
| Nuclei formalizzati         | 3                            | 4 indicati ma non formalizzati          |
| Progressione verticale      | Ricostruibile                | Non ricostruibile                       |
| IN 2025 references          | Espliciti (notazione, canto) | Assenti                                 |
| Rischio istituzionale       | Basso                        | Medio                                   |
| Pronta per data preparation | Sì (con cautele)             | No                                      |

Musica era pronta perché aveva nuclei e traguardi ricostruibili. Educazione Fisica non ha dati sufficienti per una ricostruzione sicura.

## 16. Raccomandazione per CML-178

**Educazione Fisica NON è pronta per data preparation.**

Non procedere con CML-178 `EDUCAZIONE_FISICA_NORMALIZED_DATA_PREPARATION` perché:

1. I nuclei non sono documentati in forma strutturata
2. La progressione verticale non è ricostruibile
3. I contenuti su salute/benessere richiedono attenzione prudenziale
4. Il rischio di invenzione contenuti è alto

## 17. Prossima slice raccomandata

`CML-178 — EDUCAZIONE_FISICA_DETAILED_AUDIT_REQUIRED`

Audit richiesto per:

- Estrarre nuclei formali dal DOCX o documentazione ufficiale
- Definire la progressione verticale classe per classe
- Classificare evidenze osservabili
- Rivedere rischio istituzionale (salute, sicurezza, inclusione)

## 18. Rischi residui

1. **Rischio salute**: contenuti "salute e benessere" possono intendersi come consigli sanitari non appropriati.
2. **Rischio inclusione**: linguaggio "inclusivo" può banalizzare bisogni educativi specifici.
3. **Rischio sport**: "gioco e sport" può confondersi con attività ASD esterne.
4. **Rischio dati non verificabili**: senza fonte DOCX non si può stabilire il contenuto ufficiale.

## 19. Verdetto finale

```
CML_177_EDUCAZIONE_FISICA_READINESS_DATA_AUDIT_READY
```
