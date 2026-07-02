# CML-262R — LIVE SMOKE RECTIFICATION FOR VISIBLE GOVERNANCE REFERENCES

## Contesto

CML-262 (commit `bcfce0d`) ha verificato la pubblicazione live di CML-261 con esito positivo per il set di sostituzioni autorizzate ("UDA smart" → "UDA personalizzata", "persistita/persistito" → "salvata/salvato", "Reset" → "Ripristina marcature", "Piu" → "Più").

Tuttavia, durante revisione umana della UI live, è stata rilevata una classe residua di riferimenti tecnici/governativi visibili all'utente finale, non intercettata dallo smoke CML-262.

CML-262R rettifica la documentazione CML-262 per riconoscere il gap e classifica correttamente il problema.

## Stato repository

- Branch: main
- HEAD: `bcfce0d` (CML-262 docs-only, non pushato)
- origin/main: `84b89fe` (CML-261P)
- main...origin/main: ahead 1
- Working tree: pulito

## Evidenza

**Riga 1** — template JS in `index.html`:
```
'<div class="tecnologia-norm-subtitle">Anteprima consultiva basata sul contratto dati CML-061. Contenuti da validare in sede dipartimentale.</div>'
```

**Riga 2** — template JS in `index.html`:
```
'<div class="tecnologia-norm-meta">Stato: <strong>da validare</strong> &middot; Fonte: CML-061 / CML-062</div>'
```

**Rilievo satellite** — 28 occorrenze di "CML-062" nei campi `noteDipartimento` di `tecnologia.normalized.json`, renderizzate nella UI come note delle unità curricolari (es. `"Pacchetto pilota CML-062, Primaria 1 - Oggetti e materiali"`).

## Classificazione

| Parametro | Valore |
|-----------|--------|
| Priorità | P0/P1 |
| Tipo | Governance reference visible to user |
| Impatto | Carico cognitivo, percezione tecnica, mancata operatività per ruoli scolastici |
| Visibilità | Diretta nelle stringhe template di Tecnologia (sempre visibile); satellite nei dati curricolari (visibile all'espansione unità) |
| Rischio runtime di fix | Basso se limitato a microcopy visibile |
| Dipendenze | Le occorrenze satelliti in `noteDipartimento` risiedono nei JSON curricolari (`content/curriculum/tecnologia.normalized.json`) e richiedono modifica dati contestuale |

## Correzione del verdict CML-262

Il precedente verdict CML-262 affermava "nessun termine tecnico residuo nella UI pubblica".

**Verdict corretto:**
> Nessun residuo del set CML-261. Restano riferimenti tecnici di governance visibili nella UI pubblica:
> - "contratto dati CML-061" nella stringa anteprima Tecnologia;
> - "Fonte: CML-061 / CML-062" nella stringa metadati Tecnologia;
> - "CML-062" (28x) nei campi noteDipartimento dei dati curricolari, renderizzati nella UI.
> Questi riferimenti devono essere trattati in CML-263 e CML-264.

## Prossima slice obbligatoria

### CML-263 — VISIBLE GOVERNANCE REFERENCES CLEANUP (template strings)

**Tipo:** runtime microfix
**Priorità:** Alta (P0/P1)
**Stima:** ~4 righe modificate in `index.html` + snapshot (2 stringhe template)
**Fix proposto:**

| Stringa attuale | Stringa proposta |
|-----------------|------------------|
| `Anteprima consultiva basata sul contratto dati CML-061. Contenuti da validare in sede dipartimentale.` | `Anteprima consultiva da verificare in sede di lavoro disciplinare.` |
| `Fonte: CML-061 / CML-062` | `Base di lavoro: materiali curricolari già predisposti` |
| `Stato: <strong>da validare</strong> · Fonte: CML-061 / CML-062` | `Stato: <strong>da validare</strong> · Base di lavoro: materiali curricolari già predisposti` |

### CML-264 — CURRICULUM DATA GOVERNANCE CLEANUP (JSON noteDipartimento)

**Tipo:** curriculum JSON microfix
**Priorità:** Media (P2)
**Stima:** modifica `tecnologia.normalized.json` per rimuovere "CML-062" da 28 campi `noteDipartimento`
**Fix proposto:**
- Sostituire `"Pacchetto pilota CML-062, ..."` con `"Materiali di lavoro disciplinare: ..."` in tutte le 28 occorrenze
- Sostituire occorrenze analoghe di "CML-061" nei `noteDipartimento` se presenti

## Runtime invariato durante CML-262R

Nessuna modifica a runtime, index.html, snapshot, content, tools, JSON, README, service worker, manifest, asset, configurazioni deploy, schema `.cml`, storage, import/export dati.

## Deploy manuale non eseguito

Nessun deploy manuale.

## Push non eseguito

Commit locale docs-only, non pushato.

## Verdict

```
CML_262R_LIVE_SMOKE_RECTIFICATION_VISIBLE_GOVERNANCE_REFERENCES_READY_LOCAL_NOT_PUSHED
```
