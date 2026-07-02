# CML-249 — GUIDE FLOW ALIGNMENT MICRO-UX

## Sintesi esecutiva

La sezione Guida di CurManLight è stata allineata al percorso operativo Docente → Dipartimento → Referente → Documento finale / Esportazioni già visibile in Home. La card "Percorsi per ruolo" è stata sostituita con "Cosa fare in base al ruolo", più strutturata e con esiti attesi espliciti per ogni fase. Modifica circoscritta a due file HTML, zero nuove dipendenze, zero cambiamenti comportamentali.

## Problema UX affrontato

La Guida rapida conteneva una card "Percorsi per ruolo" con tre voci (Docente, Dipartimento, Referente) prive di esito atteso e senza la quarta fase (Documento finale / Esportazioni). Il collegamento con il "Percorso di lavoro" della Home risultava debole.

## Soluzione applicata

1. **Sottotitolo aggiornato**: da descrizione generica a richiamo esplicito al percorso di lavoro in Home
2. **Card sostituita**: "Percorsi per ruolo" → "Cosa fare in base al ruolo" con:
   - 4 fasi allineate al flusso operativo
   - Ogni fase include: ruolo, azione, area/schermata, esito atteso
   - Microtesto finale per utenti che non sanno da dove partire
   - Stessa classe CSS `.guida-card.tip` — zero nuovi stili

## Dettaglio tecnico delle modifiche

### `index.html` (righe 2074, 2085-2091)

```diff
-    <p class="sub">Percorsi brevi per ruolo: cosa fare, dove andare, cosa resta sempre manuale.</p>
+    <p class="sub">Ogni ruolo ha un compito essenziale e un esito da produrre. Usa la Guida insieme al percorso di lavoro in Home.</p>

-    <div class="guida-card tip">
-      <h3><span aria-hidden="true">🧭</span> Percorsi per ruolo</h3>
-      <ul>
-        <li><strong>Docente</strong> — Consulta il curriculum → ...</li>
-        <li><strong>Dipartimento</strong> — In Processo ...</li>
-        <li><strong>Referente</strong> — In Processo ...</li>
-      </ul>
-    </div>
+    <div class="guida-card tip">
+      <h3><span aria-hidden="true">🧭</span> Cosa fare in base al ruolo</h3>
+      <p style="font-size:11px;color:#78909c;margin:0 0 10px;line-height:1.4">Usa la Guida insieme al percorso di lavoro: ogni ruolo ha un compito essenziale e un esito da produrre.</p>
+      <ul>
+        <li><strong>Docente</strong> — Prepara o personalizza una proposta nella <strong>Revisione</strong> ... <small>Esito atteso: proposta pronta per il confronto dipartimentale.</small></li>
+        <li><strong>Dipartimento</strong> — In <strong>Processo</strong> confronta ... <small>Esito atteso: esito dipartimentale da consegnare al referente.</small></li>
+        <li><strong>Referente</strong> — In <strong>Processo</strong> importa ... <small>Esito atteso: validazione finale del percorso di revisione.</small></li>
+        <li><strong>Documento finale / Esportazioni</strong> — In <strong>Esportazioni</strong> genera ... <small>Esito atteso: curricolo aggiornato e file di supporto disponibili.</small></li>
+      </ul>
+      <p style="font-size:10px;color:#90a4ae;margin:6px 0 0;padding-top:6px;border-top:1px solid #eee;font-style:italic">Se non sai da dove partire, individua prima il tuo ruolo e poi segui l'azione indicata.</p>
+    </div>
```

### `_published_snapshot/netlify-current/index.html`

Modifica identica replicata per coerenza runtime.

## File modificati

| File | Tipo modifica |
|---|---|
| `index.html` | 2 inserzioni, 1 rimozione (sostituzione card + sottotitolo) |
| `_published_snapshot/netlify-current/index.html` | Identico |

## Controlli eseguiti e relativi esiti

| Controllo | Esito |
|---|---|
| Git preflight (branch main, HEAD allineato, working tree pulito) | PASS |
| `git diff --check` | PASS (nessun warning) |
| File modificati consentiti | OK |
| `node tools/validate-cml-normalized-curriculum.mjs` | 14/14 PASS |
| `node tools/test-runtime-mappa-dati-shape.mjs` | 14/14 PASS |
| Secret scan (password/token/apikey/private_key) | Nessun secret trovato |

## Rischi evitati

- **Nessuna duplicazione pesante** della Home: la Guida aggiunge dettagli operativi senza ripetere la sintesi del "Percorso di lavoro"
- **Nessuna regressione** su navigazione, tab e hash: la modifica è puramente HTML/CSS, zero JS toccato
- **Nessuna alterazione** del comportamento di pulsanti, processi o flussi

## Regressioni verificate

- [x] Navigazione Home → Guida → Processo → Esportazioni funzionante
- [x] Selezione disciplina funzionante
- [x] Hash/tab invariati
- [x] Blocco "Percorso di lavoro" ancora visibile in Home
- [x] Layout responsive preservato (classi esistenti)

## Checklist finale

- [x] repository preflight verified
- [x] guide section inspected
- [x] runtime scope limited
- [x] guide aligned to process flow
- [x] no schema change
- [x] no storage change
- [x] no import/export data contract change
- [x] no new dependency
- [x] validators executed or explicitly documented if unavailable
- [x] smoke test completed
- [x] secret scan clean
- [x] no deploy executed
- [x] no push executed
- [x] verdict recorded

## Verdict

```
CML_249_GUIDE_FLOW_ALIGNMENT_MICRO_UX_READY_LOCAL_NOT_PUSHED
```
