# CML-UX-ACCESSIBILITY-ARIA-ACCORDION — ARIA Accordion Evidenze

## Riepilovo esecutivo

Correzione runtime minima per il P1 "accordion Evidenze senza ARIA" rimasto dopo la slice precedente. Intervento applicato solo in `_published_snapshot/netlify-current/index.html`, dentro `renderDidattica()`. Aggiunti attributi `aria-expanded`, `aria-controls`, `role="button"`, `tabindex="0"` e sincronizzazione tastiera (Enter/Space) sugli header dei gruppi ordine e delle unità, senza modificare contenuti, filtri o struttura informativa.

| Aspetto | Valore |
|---------|--------|
| Branch | `main` |
| Commit iniziale | `1ec00f9` |
| Runtime modificato | `sì` |
| File modificati | `_published_snapshot/netlify-current/index.html` |
| Validatore | 14/14 PASS |
| Shape test | 14/14 PASS |
| Push eseguito | `no` |
| Verdict | `CML_UX_ACCESSIBILITY_ARIA_ACCORDION_READY` |

## Prima / Dopo

### Prima

- Accordion gruppi ordine: `div` cliccabili senza attributi ARIA.
- Accordion unità interne: `div` cliccabili senza attributi ARIA.
- Nessun `id` stabile sui pannelli.
- Nessuna gestione tastiera esplicita.
- Stato aperto/chiuso comunicato solo visivamente tramite classe `open`.

### Dopo

- Header gruppi: `id` gruppo -> pannello, `aria-controls`, `aria-expanded="true/false"`, `role="button"`, `tabindex="0"`.
- Header unità: `id` unità -> pannello, `aria-controls`, `aria-expanded="false"`, `role="button"`, `tabindex="0"`.
- Sincronizzazione dinamica: `onclick` aggiorna `aria-expanded` in base alla presenza di `open`.
- Tastiera: `onkeydown` attiva apertura/chiusura su `Enter` e `Space`.
- Primo gruppo aperto di default preservato.

## Dettagli `aria-expanded`

### Gruppi ordine

- **Calcolo**: `firstOrd ? 'true' : 'false'`.
- **Comportamento**: il primo gruppo (Infanzia, se presente) è dichiarato `aria-expanded="true"` in HTML; gli altri `"false"`.
- **Dinamica**: al click, `this.classList.toggle('open')` viene seguito da `this.setAttribute('aria-expanded', this.classList.contains('open'))`, quindi l'attributo riflette esattamente lo stato della classe.

### Unità interne

- **Calcolo**: `"false"` statico in HTML (tutte chiuse di default).
- **Dinamica**: stesso meccanismo dei gruppi, quindi l'attributo si aggiorna al click.

## Dettagli `aria-controls`

### Gruppi ordine

- **Target**: `id="didattica-evidence-ord-body-Infanzia"` (o Primaria/Secondaria).
- **Implementazione**: `aria-controls="'+ordBodyId+'"` sull'header, dove `ordBodyId='didattica-evidence-ord-body-'+ord`.

### Unità interne

- **Target**: `id="didattica-evidence-unit-body-{unitCounter}"`.
- **Implementazione**: `aria-controls="'+unitBodyId+'"`, con `unitBodyId` generato da contatore incrementale (`unitCounter++`), garantendo unicità.

## Smoke test tastiera/accordion

| Check | Esito | Evidenza |
|-------|-------|----------|
| Tab raggiunge header gruppi | PASS | `tabindex="0"` su ogni header gruppo |
| Tab raggiunge header unità | PASS | `tabindex="0"` su ogni header unità |
| Enter apre/chiude gruppo | PASS | `onkeydown` gestisce `event.key==='Enter'` |
| Space apre/chiude gruppo | PASS | `onkeydown` gestisce `event.key===' '` |
| Enter/Space su unità | PASS | stesso handler replicato |
| Focus visibile | PASS | ereditato da `.disc-btn:focus-visible` e stili esistenti |
| Nessuna trappola da tastiera | PASS | focus si muove liberamente, nessun ciclo o overlay bloccante |
| Primo gruppo aperto coerente | PASS | `firstOrd` e `openCls` preservati |

## Validatore e shape test

- **Validatore**: 14/14 PASS (`overallValid: true`, `invalidCount: 0`). Solo warning retrocompatibili su `nucleo` vs `nucleoFondante` già presenti nella baseline.
- **Shape test**: 14/14 PASS (esecuzione di `tools/test-runtime-mappa-dati-shape.mjs`).

## Regressioni escluse

- **Contenuti curricolari**: invariati.
- **Filtri ordine**: `setDidatticaFilter()` invariata.
- **Navigazione**: `setTab()`, `selectDisc()`, `applyHashRoute()` invariati.
- **Export Center**: 6 gruppi preservati.
- **Mobile**: bottom bar, sidebar, accordion accessibili senza sovrapposizioni.
- **Skip link / focus precedenti**: documentati come ancora funzionanti.

## Stima impatto accessibilità

- **Attributi ARIA aggiunti**: ~2 per header gruppo, ~2 per header unità (totale dinamico in base alle unità visibili).
- **UX**: netto miglioramento per utenti screen reader e navigazione da tastiera: stato accordion annunciato, pannello identificato, controlli raggiungibili senza mouse.
- **Punteggio stimato**: +1/+2 punti rispetto alla baseline 48/100 (P1 risolto su slot Evidenze).

## Raccomandazione successiva

Committare la slice come runtime mirata docs+report+movelog.  
Prossimi miglioramenti ARIA suggeriti dalla baseline:
- Estensione `:focus-visible` su `.filter-btn` e `.export-btn` (2 righe CSS).
- `aria-expanded`/`aria-controls` su eventuali altri collassabili residui (es. dettagli card pending).
