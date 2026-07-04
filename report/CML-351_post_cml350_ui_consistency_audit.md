# Report: CML-351 — Post-CML-350 UI Consistency Audit and Next Microfix Selection

## Branch e baseline
- Branch: `main`
- Commit iniziale: `2227581` (chiusura CML-350 su `main`)
- Dipendenza: CML-350 (PM-07 Cross-Tab Button Uniformity Microfix)
- Tipo slice: docs-only (audit + selezione)
- Macroprogramma: PM-07 Uniformità

## Metodo
- Ricerca pattern `border-radius:\d+px` nel CSS di `_published_snapshot/netlify-current/index.html`
- 243 occorrenze trovate
- Analisi per cluster di valore e tipo di componente
- Classificazione P0-P3/HOLD

## Risultati audit

### Distribuzione border-radius nel CSS runtime

| Valore | Conteggio | Tipo prevalente | Azione |
|--------|-----------|-----------------|--------|
| 3-5px | ~8 | Badge piccoli, textarea | HOLD (design intenzionale) |
| 6px | ~11 | Elementi interattivi minori | P2 → target CML-352 |
| 7px | ~26 + 14 inline | Pulsanti/elementi interattivi | P2 → target CML-352 |
| 8px | ~12 | Pulsanti cross-tab (CML-350) | ✓ Standard stabilito |
| 9px | ~45 | Container/box | HOLD (standard container) |
| 10-12px | ~20 | Card speciali, pannelli Home | P3 (opzionale) |
| 14-16px | ~8 | Dialog/modali | HOLD (design intenzionale) |
| 18px | 1 | Pill (`.curricolo-index-pill`) | HOLD (pill intenzionale) |
| 999px | ~16 | Pill/chip/badge round | HOLD (pill intenzionale) |

### Rilievi P2 — Cluster A (border-radius:7px → 8px)

26 selettori CSS + 14 inline style `.mappa-disc-btn`:

| Selettore | Contesto | Rischio |
|-----------|----------|---------|
| `.department-import-btn` | Pulsante import dipartimento | Nullo |
| `.department-import-stat` | Stat box import | Nullo |
| `.local-save-btn` | Pulsante salvataggio locale | Nullo |
| `.readonly-order-note` | Nota ordine readonly | Nullo |
| `.gap-header` | Header gap curricolo | Nullo |
| `.gap-header-unique` | Header gap unico | Nullo |
| `.role-access-warning` | Warning role-access | Nullo |
| `.role-access-error` | Errore role-access | Nullo |
| `.grp-hd` | Header gruppo riepilogo | Nullo |
| `.act-card` | Card azione riepilogo | Nullo |
| `.norm-cat-title` | Titolo categoria normativa | Nullo |
| `.annual-draft-field select/input/textarea` | Campi bozza annuale | Nullo |
| `.annual-draft-units` | Container unità bozza | Nullo |
| `.annual-draft-btn` | Pulsanti bozza annuale | Nullo |
| `.annual-draft-status` | Status bozza annuale | Nullo |
| `.annual-draft-privacy` | Privacy bozza annuale | Nullo |
| `.uda-smart-library-filters` | Filtri libreria UDA | Nullo |
| `.uda-smart-library-field input/select/textarea` | Campi libreria UDA | Nullo |
| `.uda-smart-library-btn` | Pulsanti libreria UDA | Nullo |
| `.uda-smart-library-status` | Status libreria UDA | Nullo |
| `.uda-smart-library-preview` | Preview libreria UDA | Nullo |
| `.uda-smart-library-markdown` | Markdown libreria UDA | Nullo |
| `.uda-smart-library-card` | Card libreria UDA | Nullo |
| `.uda-smart-library-empty` | Empty state libreria UDA | Nullo |
| `.uda-smart-library-privacy` | Privacy libreria UDA | Nullo |
| `.mappa-disc-btn` ×14 | Pulsanti selettore mappa (inline) | Nullo |

### Rilievi P2 — Cluster B (border-radius:6px → 8px)

11 selettori CSS:

| Selettore | Contesto | Rischio |
|-----------|----------|---------|
| `.stat` | Statistiche header disciplina | Nullo |
| `.department-import-warning` | Warning import dipartimento | Nullo |
| `.department-file-row` | Riga file dipartimento | Nullo |
| `.ordine-hd` | Header ordine curricolo | Nullo |
| `.norm-link` | Link normativa | Nullo |
| `.orientation-note` | Nota orientamento | Nullo |
| `.curricolo-riepilogo-item` | Item riepilogo curricolo | Nullo |
| `.home-recommended-callout-btn` | Pulsante callout Home | Nullo |
| `.didattica-uda-draft-notice` | Notice bozza UDA | Nullo |
| `.didattica-uda-draft-status` | Status bozza UDA | Nullo |
| `.annual-draft-unit` | Unità bozza annuale | Nullo |

### Rilievi P2 — Cluster C (border-radius:5px, minori)

3 selettori CSS — candidati opzionali per CML-352:

| Selettore | Contesto | Rischio |
|-----------|----------|---------|
| `.norm-badge` | Badge normativa | Nullo |
| `.disc-md-preview` | Preview Markdown disciplina | Nullo |
| `.pending-action` | Azione pending card | Nullo |

### Rilievi P3 — Opzionali

- Card Home con `border-radius:11px` (4 selettori) vs standard container `9px`
- Pannelli speciali con `border-radius:12px` (7 selettori) vs standard `9px`

### HOLD — Non intervenire

- **Pill shape** (18 selettori con `border-radius:16px-999px`): design intenzionale
- **Container/box** (~45 selettori con `border-radius:9px`): standard coerente
- **Dialog/modali** (6 selettori con `border-radius:14-16px`): design intenzionale

## Prossima slice raccomandata

**CML-352 — Residual Button Border-Radius Uniformity Microfix**

- **Tipo**: runtime microfix (solo CSS)
- **Scope**: uniformare a `8px` i ~37 selettori CSS con `border-radius:7px` e `border-radius:6px` + 14 inline style `.mappa-disc-btn`
- **Rischio**: nullo
- **Reversibilità**: totale
- **Verificabilità**: diff CSS + smoke visivo
- **Impatto**: nessuno su dati, export, import, schema `.cml`, logica JS

## File modificati
- `docs/03_execution/CML-351.md`
- `report/CML-351_post_cml350_ui_consistency_audit.md`
- `docs/REPO-MOVELOG.md`

## Fuori perimetro
- Nessuna modifica runtime
- Nessuna modifica HTML, JS, dati, import/export, `.cml`
- Nessuna modifica workflow Pages, service worker, localStorage/sessionStorage
- Nessuna nuova dipendenza, build, backend, API o OAuth

## Controlli
- `git diff --check`: PASS
- `git status --short`: pulito (solo `CurManLightBrain/` untracked)
- File runtime non modificati: PASS
- Nessun file fuori perimetro: PASS

## Verdict
`CML_351_POST_CML350_UI_CONSISTENCY_AUDIT_READY_LOCAL_NOT_PUSHED`