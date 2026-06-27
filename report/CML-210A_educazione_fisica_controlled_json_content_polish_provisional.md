# CML-210A — EDUCAZIONE_FISICA_CONTROLLED_JSON_CONTENT_POLISH_PROVISIONAL

Data: 2026-06-27

## 1. Scopo

Applicare un polish contenutistico controllato e provvisorio a `content/curriculum/educazione-fisica.normalized.json`, mantenendo la struttura a 4 nuclei e senza introdurre un quinto nucleo autonomo.

La slice è **provisional project polish**, non validazione formale del dipartimento.

## 2. Decisione progettuale provvisoria

```text
Educazione Fisica mantiene temporaneamente il modello a 4 nuclei.

È autorizzato un controlled JSON content polish limitato a:
- migliorare la progressione verticale;
- rendere più espliciti salute, benessere, sicurezza e corretti stili di vita dentro i nuclei esistenti;
- rafforzare Abilità motorie;
- rendere più chiari obiettivi, traguardi, evidenze e wording;
- evitare l'introduzione di un quinto nucleo autonomo senza validazione dipartimentale.

La decisione non equivale a validazione formale del dipartimento.
```

## 3. Baseline tecnica

| Parametro | Valore |
|---|---|
| Root Git | `C:\Users\anton\CurManLight` |
| Branch | `main` |
| Commit iniziale | `e216633` (CML-211 push) |
| origin/main iniziale | `e216633` |
| Working tree iniziale | pulito |
| Dati normalizzati | 14/14 |
| Runtime mappa | 14/14 |
| Shape test | 14/14 PASS |

## 4. File modificato

Solo `content/curriculum/educazione-fisica.normalized.json`

## 5. Struttura before/after

| Parametro | Before | After |
|---|---|---|
| Unità totali | 7 | 7 (invariato) |
| Nuclei | 4 | 4 (invariato) |
| Ordini | 3 | 3 (invariato) |
| Classi Primaria | 1, 3, 5 | 1, 3, 5 (invariato) |
| Classi Secondaria | 1, 2, 3 | 1, 2, 3 (invariato) |

**Nuclei preservati:**
- Corpo e percezione
- Abilità motorie
- Gioco e sport
- Espressione e inclusione

**Nessun quinto nucleo introdotto.**

## 6. Modifiche applicate per unità

### ef_inf_5_001 — Corpo e percezione, Infanzia fascia 5

- **Traguardo:** aggiunto riferimento al benessere personale durante il movimento.
- **Obiettivi:** sostituito "Esprimere emozioni e sensazioni attraverso il movimento" con "Riconoscere l'importanza del movimento per il proprio benessere" (rafforzamento dimensione salute/benessere).
- **Evidenze:** soglie più definite ("rispettando le regole", "riconosce l'importanza del movimento per il benessere").
- **Note dipartimento:** aggiornate per riflettere il polish CML-210A.

### ef_pri_1_001 — Corpo e percezione, Primaria classe 1

- **Traguardo:** aggiunto riferimento alle esperienze dell'Infanzia e al legame movimento/benessere.
- **Obiettivi:**
  - aggiunto esplicito ponte verticale da Infanzia ("collegandosi alle esperienze motorie dell'Infanzia");
  - "Coordinare movimenti" arricchito con "con crescente autonomia".
- **Note dipartimento:** aggiornate.

### ef_pri_3_001 — Abilità motorie, Primaria classe 3

- **Traguardo:** aggiunto riferimento a Primaria classe 1 ("rafforzando le basi acquisite in Primaria classe 1") e a consapevolezza posturale/benessere.
- **Obiettivi:**
  - tutti arricchiti con riferimenti più specifici;
  - primo obiettivo: aggiunto ponte da Primaria 1;
  - terzo obiettivo: specificato "corsa, salto, lancio, presa";
  - quarto obiettivo: aggiunto "mantenendo fluidità e sicurezza".
- **Evidenze:** soglie quantificate:
  - sequenza "almeno 4 passaggi combinati";
  - equilibrio "in posizione statica per almeno 10 secondi e in movimento su percorso variato";
  - lancio/presa "in almeno 4 tentativi su 5";
  - adattamento "mantenendo il controllo del movimento".
- **Note dipartimento:** aggiornate.

### ef_pri_5_001 — Gioco e sport, Primaria classe 5

- **Traguardo:** aggiunto riferimento a Primaria classe 3 ("anche a partire dalle competenze motorie sviluppate in Primaria classe 3") e a atteggiamenti responsabili verso il benessere.
- **Obiettivi:**
  - primo: specificato "rispettando regole, ruoli e spazi di gioco";
  - quarto: aggiunto "anche in relazione al benessere personale".
- **Note dipartimento:** aggiornate.

### ef_sec_1_001 — Corpo e percezione, Secondaria classe 1

- **Traguardo:** aggiunto ponte esplicito da Primaria ("anche a partire dalle competenze sviluppate in Primaria (Corpo e percezione, Abilità motorie)") e riferimento a consapevolezza del movimento.
- **Obiettivi:**
  - primo: aggiunto "anche attraverso la ripresa di schemi già consolidati in Primaria";
  - secondo: aggiunto "e consapevolezza posturale";
  - quarto: aggiunto "corretti stili di vita" e "in relazione al proprio benessere".
- **Note dipartimento:** aggiornate.

### ef_sec_2_001 — Gioco e sport, Secondaria classe 2

- **Traguardo:** aggiunto ponte da Primaria classe 5 e riferimento a corrette abitudini per sicurezza/benessere.
- **Obiettivi:**
  - primo: aggiunto "anche attraverso la ripresa di attività introdotte in Primaria";
  - secondo: aggiunto "con crescente autonomia".
- **Note dipartimento:** aggiornate.

### ef_sec_3_001 — Espressione e inclusione, Secondaria classe 3

- **Traguardo:** aggiunto ponte esplicito da Secondaria classe 1 e 2.
- **Obiettivi:**
  - quarto: aggiunto "valorizzando le esperienze dei cicli precedenti".
- **Note dipartimento:** aggiornate.

## 7. Campo `source` aggiornato

Aggiunto riferimento a CML-210A come fonte del polish provvisorio.

## 8. Cosa NON è stato modificato

1. Struttura a 4 nuclei — preservata
2. Nessun nuovo nucleo autonomo
3. Nessuna nuova unità di apprendimento
4. Nessuna modifica a ID, ordini, classi, fasce
5. Nessuna modifica runtime
6. Nessuna modifica schema `.cml`
7. Nessuna modifica a `tools/`, altre discipline, SchoolKB
8. Nessun deploy, nessun push

## 9. Validazioni

| Check | Esito |
|---|---|
| JSON validator | 14/14 PASS, 0 errori |
| Shape test | 14/14 PASS |
| Educazione Fisica | S=7, N=4, P=7, D=0 (invariato) |
| git diff --check | pulito |
| Secret scan | negativo |
| JSON parse smoke | 7 unità, 4 nuclei, 3 ordini — corretto |

## 10. Hash/runtime smoke

Il runtime map adapter legge `unitaApprendimento` e produce:
- `struttureSostanziali`: 7 (raggruppate per `ambito`)
- `nodiDisciplinari`: 4 (raggruppati per `nucleo`)
- `progressioneVerticale`: 7 (per ordine/classe/fascia)
- `decisioniCurricolari`: 0

Tutti i campi rimangono conformi allo shape test. Nessuna modifica all'adapter o al transformer.

## 11. Raccomandazione slice successiva

- **CML-210B** — controlled runtime/public smoke (se si vuole verificare la resa a runtime dopo il polish)
- **CML-211B** — department validation follow-up (se il dipartimento formalizza la validazione)

## 12. Invarianti rispettati

- 4 nuclei preservati
- 7 unità preservate
- schema `.cml` invariato
- export/import invariati
- funzioni evidenze/UDA invariate
- runtime invariato
- nessuna credenziale/client ID/token
- nessuna dipendenza
- nessun deploy
- nessun push

## 13. Verdetto finale

`CML_210A_EDUCAZIONE_FISICA_CONTROLLED_JSON_CONTENT_POLISH_PROVISIONAL_READY`
