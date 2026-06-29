# CML-UX-ACCESSIBILITY-ARIA-ACCORDION

## Stato della slice

- **Tipo**: runtime accessibility microfix
- **P1 affrontato**: accordion Evidenze privi di `aria-expanded` / `aria-controls`
- **Commit iniziale**: `1ec00f9`
- **Runtime modificato**: `_published_snapshot/netlify-current/index.html`
- **Verdetto**: `CML_UX_ACCESSIBILITY_ARIA_ACCORDION_READY`

## Obiettivo

Risolvere il P1 rimasto dopo lo skip-link/focus fix: rendere riconoscibili e controllabili da tastiera gli accordion della sezione Evidenze (gruppi per ordine e unità interne) aggiungendo attributi ARIA minimi, identificativi stabili e sincronizzazione dello stato aperto/chiuso, senza modificare contenuti, filtri o comportamento funzionale.

## Vincoli

- Vanilla HTML/CSS/JS, zero dipendenze runtime.
- Nessuna modifica a `content/curriculum/`, `.cml`, JSON, manifest, service worker, asset, README, Export Center.
- Nessun push/deploy manuale.
- Logica di filtro `setDidatticaFilter()` preservata.

## Analisi iniziale

- **Funzione**: `renderDidattica()` in `_published_snapshot/netlify-current/index.html` (righe ~2540-2612).
- **Struttura accordion**:
  - Gruppi ordine: Infanzia, Primaria, Secondaria.
  - Unità interne: ogni unità di apprendimento all'interno del gruppo.
- **Controllo cliccabile**: `div` con `onclick` inline che alterna la classe `open` sull'header e sul pannello successivo (`nextElementSibling`).
- **Primo gruppo aperto**: sì, `firstOrd` imposta `open` di default sul primo gruppo.
- **Filtro ordine**: `setDidatticaFilter(f,btn)` aggiorna `didatticaFilter` e chiama `renderDidattica()`.

## Interventi runtime applicati

### A. Accordion gruppi ordine

Per ogni gruppo generato in `renderDidattica()`:

- Aggiunto `id` stabile al pannello: `didattica-evidence-ord-body-{ord}`.
- Aggiunto `aria-controls` sull'header che punta a tale `id`.
- Aggiunto `aria-expanded` calcolato: `"true"` se primo gruppo (`firstOrd`), `"false"` altrimenti.
- Aggiunto `role="button"`, `tabindex="0"`.
- Modificato `onclick` per aggiornare dinamicamente `aria-expanded` dopo il toggle.
- Aggiunto `onkeydown` per attivare apertura/chiusura con `Enter` e `Space`.

### B. Accordion unità interne

Per ogni unità:

- Aggiunto contatore `unitCounter` per `id` univoci.
- Aggiunto `id` al pannello: `didattica-evidence-unit-body-{unitCounter}`.
- Aggiunto `aria-controls` sull'header.
- Impostato `aria-expanded="false"` di default.
- Aggiunti `role="button"`, `tabindex="0"`, `onkeydown` e sincronizzazione `aria-expanded` nel `onclick`.

### C. Compatibilità

- Mantenuta struttura `div` esistente (nessuna sostituzione con `<details>/<summary>`).
- Nessuna modifica ai contenuti, classi CSS, logica di filtro o rendering delle card.
- `setDidatticaFilter()` invariata.

## File modificati

- `_published_snapshot/netlify-current/index.html` (solo `renderDidattica()`)

## Test eseguiti

1. **Funzionali Evidenze**
   - Sezione Evidenze raggiungibile.
   - Gruppi Infanzia/Primaria/Secondaria presenti.
   - Conteggi invariati.
   - Primo gruppo aperto preservato.
   - Apertura/chiusura gruppi funzionante.
   - Accordion unità interne funzionanti.

2. **Attributi ARIA**
   - `aria-controls` punta a `id` esistenti.
   - `aria-expanded` cambia coerentemente con lo stato `open`.
   - Nessun `id` duplicato.
   - Nessun attributo orfano.

3. **Filtri**
   - `setDidatticaFilter()` preservata.
   - Filtri attivi prima del raggruppamento.
   - Apertura/chiusura accordion non rompe il filtraggio.

4. **Tastiera**
   - Controlli accordion raggiungibili da tastiera.
   - `Enter` e `Space` attivano apertura/chiusura.
   - Focus visibile confermato (`.disc-btn:focus-visible` e stili esistenti).
   - Nessuna trappola da tastiera.

5. **Navigazione e hash**
   - Curriculum hash preservato.
   - Didattica/Evidenze nel tab corretto.
   - Cambio disciplina preserva hash, titolo, breadcrumb.
   - Nessun loop `hashchange`.

6. **Accessibilità precedente**
   - Skip link funzionante.
   - Focus `setTab` funzionante.
   - Focus `selectDisc` funzionante.

7. **Export Center**
   - Sezione raggiungibile.
   - 6 gruppi invariati.

8. **Mobile**
   - Accordion usabili su viewport ridotta.
   - Bottom bar invariata.
   - Nessuna sovrapposizione.

## Rischi di regressione

- **Nessuna regressione su contenuti o conteggi**: i dati (`units`) sono invariati.
- **Nessuna regressione su filtri**: `setDidatticaFilter()` chiama ancora `renderDidattica()`.
- **Nessuna regressione su navigazione**: routing `setTab`, `selectDisc`, `hashchange` invariati.
- **Rischio minimo di duplicazione id**: mitigato dal contatore `unitCounter` e da id gruppo basati su `ord`.

## Risultati

| Area                     | Esito      |
| ------------------------ | ---------- |
| Accordion gruppi ordine  | PASS       |
| Accordion unità interne  | PASS       |
| `aria-expanded`          | PASS       |
| `aria-controls`          | PASS       |
| Validatore curriculum    | 14/14 PASS |
| Shape test               | 14/14 PASS |
| Smoke tastiera/accordion | PASS       |
| Regressioni              | Nessuna    |

## Verdict

```text
CML_UX_ACCESSIBILITY_ARIA_ACCORDION_READY
```
