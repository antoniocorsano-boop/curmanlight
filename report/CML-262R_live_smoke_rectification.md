# Report — CML-262R Live Smoke Rectification for Visible Governance References

## Sintesi esecutiva

CML-262 ha verificato correttamente le sostituzioni CML-261 ma ha omesso di rilevare una classe distinta di riferimenti tecnici nella UI pubblica: codici di governance interni (CML-061, CML-062) esposti all'utente scolastico. CML-262R rettifica la documentazione e classifica il problema per le successive slice di remediation.

## Evidenze live

### Issue 1 — Template string visibile nell'intestazione Tecnologia

**Testo attuale:**
> Anteprima consultiva basata sul contratto dati CML-061. Contenuti da validare in sede dipartimentale.

**Dove:** `index.html`, template JS `renderTecnologiaNormSection()` (o equivalente)
**Visibilità:** Sempre visibile nella vista Curriculum / Tecnologia
**Problema:** Espone il codice di governance interna "CML-061" e il termine tecnico "contratto dati" a un utente scolastico (docente, referente, dirigente) per cui questi riferimenti sono incomprensibili e aumentano il carico cognitivo.

### Issue 2 — Template string visibile nei metadati Tecnologia

**Testo attuale:**
> Stato: da validare · Fonte: CML-061 / CML-062

**Dove:** `index.html`, template JS metadati
**Visibilità:** Sempre visibile nella vista Curriculum / Tecnologia
**Problema:** I codici "CML-061" e "CML-062" sono identificatori interni di slice di sviluppo, non informazioni utili per l'utente scolastico.

### Issue 3 — Note dipartimento nei dati curricolari

**Pattern:** `"Pacchetto pilota CML-062, {ordine} {classe} - {descrizione}"` in 28 campi `noteDipartimento` di `tecnologia.normalized.json`
**Visibilità:** Nella UI all'espansione dei dettagli delle unità curricolari
**Problema:** Stessa classe di governance reference, ma localizzata nei dati JSON piuttosto che nei template HTML.

## Matrice di rettifica

| Documento | Errore | Correzione |
|-----------|--------|------------|
| `docs/03_execution/CML-262.md` | Verdict: "nessun termine tecnico residuo nella UI pubblica" | Sostituito con "nessun residuo del set CML-261; restano riferimenti tecnici di governance visibili" |
| `docs/03_execution/CML-262.md` | Sezione "Residui non bloccanti" incompleta | Aggiunta classe governance references con priorità P0/P1 |
| `report/CML-262_role_language_surface_cleanup_live_smoke.md` | Matrice smoke non includeva verifica governance references | Aggiunta riga di rettifica |
| `report/CML-262_role_language_surface_cleanup_live_smoke.md` | Checklist finale non includeva governance check | Aggiunta riga |
| `docs/REPO-MOVELOG.md` | Nessuna menzione del gap | Aggiunta entry CML-262R |

## Classificazione

| Parametro | Issue 1 (template) | Issue 2 (template) | Issue 3 (dati) |
|-----------|-------------------|-------------------|----------------|
| Priorità | P0 | P0 | P1 |
| Visibilità | Diretta, sempre | Diretta, sempre | Indiretta, espansione |
| Fix in | `index.html` (template JS) | `index.html` (template JS) | `tecnologia.normalized.json` (28 campi) |
| Rischio fix | Molto basso (microcopy) | Molto basso (microcopy) | Basso (testo statico) |
| Dipendenza | Nessuna | Nessuna | Validatore JSON (post-fix) |

## Rischio residuo

Il CML-262 smoke non ha coperto il pattern "codice CML visibile" perché lo scope era limitato alle sostituzioni del style dictionary CML-261. I codici CML sono un pattern distinto, non incluso nel mandate originale di CML-261.

## Raccomandazione

Procedere con CML-263 al più presto (fix stringhe template, 2 righe) e CML-264 subito dopo (fix dati JSON, 28 occorrenze).

## Checklist finale

- [x] repository preflight verified
- [x] live governance references confirmed (3 occorrenze template + 28 dati)
- [x] CML-262 verdict rectified
- [x] CML-262 report rectified
- [x] CML-262R execution document created
- [x] CML-262R report created
- [x] REPO-MOVELOG updated
- [x] runtime unchanged during CML-262R
- [x] no deploy executed
- [x] no push executed
- [x] verdict recorded

## Verdict

```
CML_262R_LIVE_SMOKE_RECTIFICATION_VISIBLE_GOVERNANCE_REFERENCES_READY_LOCAL_NOT_PUSHED
```
