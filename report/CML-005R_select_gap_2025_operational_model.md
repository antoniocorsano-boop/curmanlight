# CML-005R-SELECT — Gap 2025 Operational Review Model

## Verdetto

```
CML_005R_SELECT_GAP_2025_OPERATIONAL_MODEL_READY
```

## Stato iniziale

| Campo           | Valore                                       |
| --------------- | -------------------------------------------- |
| Branch partenza | `master`                                     |
| HEAD partenza   | `e88a2ef` (CML-004R)                         |
| Branch lavoro   | `cml-005r-select-gap-2025-operational-model` |

## Runtime analizzato

`_published_snapshot/netlify-current/index.html` — single-file SPA, 2284 righe.

**Tabs attuali:** Revisione per disciplina | Curricolo definitivo | Riferimenti normativi | Sezioni generali (4 tabs).

**Dati:** 14 discipline, ognuna con traguardi e obiettivi. Ogni item ha:

- `testo` (base IN2012)
- `proposto` (proposta IN2025)
- `status`: "ok" | "modifica" | "nuovo"
- `decisione`: null | "approvata" | "rifiutata"

## Problema Gap 2025 rilevato

1. Il Gap 2025 è presente solo come **card concettuale** nella tab Riferimenti normativi (righe 701-713): spiega il principio ma non connette al workflow decisionale.
2. La Revisione per disciplina mostra già il confronto IN2012↔IN2025, ma **non esplicita** che le voci `modifica`/`nuovo` rappresentano il gap da validare.
3. **Rischio A:** l'utente pensa che le IN2025 sovrascrivano automaticamente (perché il confronto è già visibile).
4. **Rischio B:** il Gap 2025 resta solo un avviso metodologico, senza aggancio operativo.

## Opzioni valutate

| Opzione                                     | Descrizione                                                                                       | Vantaggi                                                           | Rischi                                                                                  |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | --------------------------------------------------------------------------------------- |
| **A — Solo microcopy normativa**            | Modificare solo la card esistente nei Riferimenti normativi                                       | Impatto minimo, zero regressione                                   | Non basta: l'utente non trova il gap nel contesto della decisione                       |
| **B — Indicatore in Revisione + microcopy** | Aggiungere intestazione "Gap 2025 della disciplina" nelle card da decidere + link nella normativa | Gap risolto dove si decide, massima chiarezza, nessun nuovo flusso | Rischio rumore visivo (mitigato: scompare dopo decisione)                               |
| **C — Nuovo tab dedicato**                  | 5° tab "Gap 2025" separato                                                                        | Massima visibilità iniziale                                        | Separa il gap dal workflow decisionale, aumenta complessità navigazione, impatto mobile |

## Opzione selezionata: **Opzione B**

### Motivazione

1. Il gap viene risolto **nel luogo dove già si decide** (Revisione per disciplina)
2. **Minimo impatto:** nessuna nuova struttura dati, nessun nuovo tab, solo microcopy HTML
3. **Human validation rispettata:** l'utente deve approvare/respingere/modificare ogni gap
4. **Separazione chiara dei ruoli:**
   - **Riferimenti normativi** → spiega il principio (con link alla revisione)
   - **Revisione per disciplina** → risolve il gap (con intestazione esplicita)
   - **Curricolo definitivo** → mostra solo esiti validati
   - **Sezioni generali** → consultazione non modificabile
5. Coerente con l'orientation card CML-003R ("confronta 2012 e 2025" → "approva, modifica o mantieni")

### Perimetro implementativo CML-005R

| Elemento                             | Dettaglio                                                                                                                              |
| ------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------- |
| **File ammessi**                     | `_published_snapshot/netlify-current/index.html`                                                                                       |
| **File vietati**                     | sw.js, _headers, manifest.webmanifest, PDF, assets, qualsiasi altro file                                                               |
| **Punto A — Card normativa**         | Righe 706-707: aggiungere link `<a onclick="setTab('lavoro')">` nel testo descrittivo                                                  |
| **Punto B — Intestazione revisione** | Template card da decidere (righe 1274-1305): aggiungere `<div class="gap-header">` visibile solo su `modifica`/`nuovo` senza decisione |
| **localStorage**                     | Nessuna nuova chiave                                                                                                                   |
| **Dati discipline**                  | Non modificati                                                                                                                         |

### Microcopy raccomandato

**Card Riferimenti normativi:**

> I gap 2025 non modificano automaticamente il curricolo. Apri Revisione per disciplina per valutare ogni proposta, confrontarla con il curricolo vigente e decidere se approvarla, respingerla o modificarla.

**Blocco Revisione per disciplina (intestazione card da decidere):**

> 🧩 Gap 2025 della disciplina — Queste proposte evidenziano possibili integrazioni rispetto al curricolo vigente. Ogni voce deve essere valutata dal gruppo di lavoro prima di entrare nel curricolo definitivo. Base 2012, evidenze d'istituto e proposta 2025 restano distinguibili fino alla validazione.

### Criteri di accettazione

- Link nella normativa → click apre tab Revisione
- Intestazione gap visibile solo su card `modifica`/`nuovo` senza decisione
- Intestazione scompare dopo approvazione/rifiuto
- Workflow decisionale invariato
- Nessuna modifica a dati, localStorage, PDF, cache

## Rischi residui

1. Utente ignora l'intestazione → mitigato dal link nella normativa
2. Rumore visivo per utenti esperti → l'intestazione scompare dopo la decisione
3. Utente pensa comunque a sovrascrittura automatica → microcopy esplicita in due punti

## Commit finale

```
e88a2ef (nessuna modifica runtime — solo documenti di selezione)
```

## Stato Git finale

```
## cml-005r-select-gap-2025-operational-model
?? docs/03_execution/CML-005R-SELECT.md
?? report/CML-005R_select_gap_2025_operational_model.md
```

Solo i due file di report sono creati. Nessuna modifica al runtime.
