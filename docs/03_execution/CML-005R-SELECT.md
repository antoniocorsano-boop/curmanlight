# CML-005R-SELECT — Gap 2025 Operational Review Model Selection

## Stato iniziale

| Campo                    | Valore                                       |
| ------------------------ | -------------------------------------------- |
| Branch                   | `cml-005r-select-gap-2025-operational-model` |
| HEAD                     | `e88a2ef` (identico a master)                |
| Working tree             | pulita                                       |
| Master contiene CML-004R | sì, commit `e88a2ef`                         |

## Runtime analizzato

`_published_snapshot/netlify-current/index.html` (~2284 linee, single-file SPA).

**Struttura attuale dei tab:**

1. `lavoro` — Revisione per disciplina (side-by-side IN2012 vs IN2025, approve/reject/edit)
2. `riepilogo` — Curricolo definitivo (solo voci approvate/invariant)
3. `normativa` — Riferimenti normativi
4. `generali` — Sezioni generali (sola lettura)

**Dati disciplinari:** 14 discipline, ognuna con array `traguardi` e `obiettivi`; ogni item ha:

- `testo` (base IN2012)
- `proposto` (proposta IN2025)
- `status`: `"ok"` | `"modifica"` | `"nuovo"`
- `decisione`: `null` | `"approvata"` | `"rifiutata"`
- `testoFinale` (testo personalizzato dopo modifica)

**Stati decisionali:**

- Item con `status: "ok"`: badge "Nessuna modifica necessaria"
- Item con `status: "modifica"` o `"nuovo"` e `decisione: null`: confronto side-by-side, pulsanti Approvo/Modifico/Mantieni
- Item con `decisione` impostata: badge "Hai approvato" / "Hai mantenuto" + undo

**Gap 2025 attuale:** card nella sezione `normativa` (righe 701-713), categoria "⚡ Area di lavoro successiva — Gap verso le IN 2025", con descrizione concettuale e warning.

## Problema Gap 2025 rilevato

1. Il Gap 2025 è presente come **avviso metodologico** nella tab Riferimenti normativi — spiega il principio ma non connette esplicitamente l'utente al workflow decisionale.
2. La revisione disciplinare (tab Revisione) mostra già il confronto IN2012↔IN2025, ma **non esplicita** che le voci `modifica`/`nuovo` rappresentano proprio il gap da risolvere.
3. Rischio A: l'utente pensa che le IN2025 sovrascrivano automaticamente la base 2012 (perché il confronto è già visibile).
4. Rischio B: il Gap 2025 resta solo un avviso nella normativa, senza connessione operativa alla revisione disciplinare.
5. Non esiste un indicatore di "questa voce è un gap 2025 da validare" nel contesto della revisione — l'unico segnale è il badge "✎ Le IN 2025 propongono una modifica" / "★ Proposta nuova nelle IN 2025".

## Opzioni valutate

### Opzione A — Solo microcopy nella card Riferimenti normativi

| Criterio                    | Valutazione                                                    |
| --------------------------- | -------------------------------------------------------------- |
| Chiarezza                   | Media — spiega ma non guida all'azione                         |
| Impatto UI                  | Minimo (solo testo)                                            |
| Rischio regressione         | Nullo                                                          |
| Coerenza "human validation" | Parziale — non rafforza il messaggio nel luogo della decisione |
| Coerenza CML-003R/004R      | Buona                                                          |
| Impatto mobile              | Nessuno                                                        |
| File toccati                | index.html (~5 righe)                                          |
| Rischio localStorage        | Nessuno                                                        |
| Rischio PDF/PWA/cache       | Nessuno                                                        |

**Verdetto:** Non basta da sola — l'utente deve trovare il gap nel contesto della revisione, non solo leggerne il principio.

### Opzione B — Indicatore "Gap 2025" dentro Revisione per disciplina + microcopy normativa

| Criterio                    | Valutazione                                                                  |
| --------------------------- | ---------------------------------------------------------------------------- |
| Chiarezza                   | Alta — il gap viene risolto dove si decide                                   |
| Impatto UI                  | Medio — aggiunge un'intestazione descrittiva nel pannello di revisione       |
| Rischio regressione         | Basso — modifica solo rendering HTML esistente, non tocca logica decisionale |
| Coerenza "human validation" | Piena — ogni voce è marcata come gap da validare                             |
| Coerenza CML-003R/004R      | Piena — non altera navigazione, non crea nuovi flussi                        |
| Impatto mobile              | Basso — una riga di testo in più per card                                    |
| File toccati                | index.html (~20-30 righe)                                                    |
| Rischio localStorage        | Nessuno                                                                      |
| Rischio PDF/PWA/cache       | Nessuno                                                                      |

**Verdetto:** Opzione raccomandata.

### Opzione C — Nuovo tab dedicato "Gap 2025"

| Criterio                    | Valutazione                                                                    |
| --------------------------- | ------------------------------------------------------------------------------ |
| Chiarezza                   | Alta iniziale, ma separa il gap dal workflow decisionale                       |
| Impatto UI                  | Alto — 5° tab, complessità navigazione                                         |
| Rischio regressione         | Medio — nuovo tab, nuove dipendenze                                            |
| Coerenza "human validation" | Parziale — il gap è visibile ma separato dalla decisione                       |
| Coerenza CML-003R/004R      | Media — aumenta il numero di tab, allontana dalla logica "revisione unificata" |
| Impatto mobile              | Significativo — 5 tab su schermi piccoli                                       |
| File toccati                | index.html (~80-100 righe)                                                     |
| Rischio localStorage        | Basso (se non introduce nuove chiavi)                                          |
| Rischio PDF/PWA/cache       | Nessuno                                                                        |

**Verdetto:** Sconsigliata — separa il gap dal luogo dove si decide, aumenta complessità UI.

## Opzione selezionata: **Opzione B**

### Motivazione

1. **Il gap viene risolto dove già si decide:** la Revisione per disciplina è già il luogo del confronto IN2012↔IN2025. Aggiungere un'intestazione "Gap 2025 della disciplina" rende esplicito che ogni voce `modifica`/`nuovo` è un gap da validare.
2. **Minimo impatto:** nessuna nuova struttura dati, nessun nuovo tab, nessuna modifica ai flussi esistenti. Solo microcopy nel template HTML.
3. **Coerenza con l'esistente:** l'orientation card (CML-003R) dice già "confronta 2012 e 2025" / "approva, modifica o mantieni". La microcopy normativa viene rafforzata per chiudere il cerchio.
4. **Human validation rispettata:** l'utente deve esplicitamente approvare/respingere/modificare ogni gap — nessuna sovrascrittura automatica.
5. **Separazione chiara dei ruoli:**
   - Riferimenti normativi → spiega il principio
   - Revisione per disciplina → risolve il gap
   - Curricolo definitivo → mostra solo esiti validati
   - Sezioni generali → consultazione non modificabile

## Perimetro CML-005R implementativo

### File ammessi

- `_published_snapshot/netlify-current/index.html`

### File vietati

- `sw.js`, `_headers`, `manifest.webmanifest`
- Assets (icone, PDF, font)
- Qualsiasi file fuori da `_published_snapshot/netlify-current/`

### Punto esatto di inserimento blocco Gap 2025

**A) Card Riferimenti normativi** (riga 706-707):
Sostituire la `norm-desc` con testo che include un link/azione chiara: "apri Revisione per disciplina".

**B) Intestazione sezione card da decidere** (area righe 1274-1305):
Aggiungere un'intestazione sopra il pannello di confronto, visibile solo quando `item.status === "modifica" || item.status === "nuovo"` e `!item.decisione`:

```
<div class="gap-header">
  <span class="gap-label">🧩 Gap 2025 della disciplina</span>
  <span class="gap-desc">Queste proposte evidenziano possibili integrazioni rispetto al curricolo vigente. Ogni voce deve essere valutata dal gruppo di lavoro prima di entrare nel curricolo definitivo.</span>
</div>
```

### Microcopy raccomandato

**Card Riferimenti normativi (norm-desc, riga 707):**

```
La base 2012 deve essere completata prima. Le proposte collegate alle Indicazioni 2025 non devono sovrascrivere la fonte ufficiale: devono comparire come gap, integrazioni o modifiche da discutere. I gap 2025 non modificano automaticamente il curricolo. Apri <a href="#" onclick="setTab('lavoro');return false">Revisione per disciplina</a> per valutare ogni proposta, confrontarla con il curricolo vigente e decidere se approvarla, respingerla o modificarla.
```

**Blocco Revisione per disciplina (nuovo elemento sopra le card da decidere):**

```
🧩 Gap 2025 della disciplina — Queste proposte evidenziano possibili integrazioni rispetto al curricolo vigente. Ogni voce deve essere valutata dal gruppo di lavoro prima di entrare nel curricolo definitivo. Base 2012, evidenze d'istituto e proposta 2025 restano distinguibili fino alla validazione.
```

### Criteri di accettazione

1. Il tab "Riferimenti normativi" contiene un link cliccabile "Revisione per disciplina" che porta al tab lavoro
2. La revisione disciplinare mostra un'intestazione "Gap 2025 della disciplina" sopra le voci da decidere
3. Le card da decidere (modifica/nuovo) mantengono il confronto side-by-side IN2012↔IN2025
4. I pulsanti Approvo/Modifico/Mantieni sono invariati
5. Le card già decise (approvata/rifiutata) non mostrano l'intestazione gap
6. Le card ok (invariate) non mostrano l'intestazione gap
7. Nessuna modifica ai dati delle 14 discipline
8. Nessuna nuova chiave localStorage
9. Nessuna modifica a PDF, sw.js, _headers

### Smoke test richiesto

```
[ ] Tab "Riferimenti normativi": link "Revisione per disciplina" funzionante → apre tab lavoro
[ ] Tab Revisione per disciplina: card "modifica" mostrano intestazione "🧩 Gap 2025 della disciplina"
[ ] Tab Revisione per disciplina: card "nuovo" mostrano intestazione "🧩 Gap 2025 della disciplina"
[ ] Tab Revisione per disciplina: card "approvata" NON mostrano intestazione gap
[ ] Tab Revisione per disciplina: card "rifiutata" NON mostrano intestazione gap
[ ] Tab Revisione per disciplina: card "ok" NON mostrano intestazione gap
[ ] Approva → card passa a stato "approvata", gap header scompare
[ ] Respingi → card passa a "rifiutata", gap header scompare
[ ] Modifica + Salva → card passa ad approvata, gap header scompare
[ ] 14 discipline preservate
[ ] Confronto IN2012→IN2025 preservato
[ ] Tab Curricolo definitivo preservato
[ ] Tab Sezioni generali preservato
[ ] PDF cache-safe ancora linkato
[ ] Print layout preservato
```

## Rischi residui

1. **L'utente potrebbe ignorare l'intestazione** — mitigato dal link nella normativa che richiama esplicitamente l'azione.
2. **L'intestazione aggiunge rumore visivo per chi ha già capito il flusso** — mitigato dal fatto che scompare dopo la decisione (è visibile solo sulle card da decidere).
3. **L'utente potrebbe comunque pensare che le IN2025 sovrascrivano** — mitigato dalla microcopy esplicita sia nella normativa sia nel blocco revisione.

## Conferme

- [x] Nessuna modifica al runtime (questa slice è solo audit/selezione)
- [x] Nessun deploy eseguito
- [x] Nessuna modifica a index.html, dati discipline, workflow, confronto, tab generali, PDF, sw.js, _headers
- [x] Nessun backend/API/auth/Netlify Forms introdotto
- [x] Nessun codice da prototipi CML-001/CML-002
