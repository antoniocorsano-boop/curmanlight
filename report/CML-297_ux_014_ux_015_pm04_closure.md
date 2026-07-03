# Report CML-297 — UX-014 + UX-015 PM-04 Closure

## Riepilogo

| Campo | Valore |
|-------|--------|
| Branch | `main` |
| Baseline iniziale | `120408b` (CML-296) |
| Commit finale | (locale, non pushato) |
| Tipo slice | runtime microfix |
| Macroprogramma | PM-04 - Comprensione Curriculum |
| Backlog target | UX-014, UX-015 |

## Modifiche runtime

Tutte le modifiche sono state applicate su `index.html` e copiate su `_published_snapshot/netlify-current/index.html`.

### Dettaglio modifiche

1. **Badge `★ Nuova IN 2025`** → `★ Nuova (Indicazioni 2025)` — espansione abbreviazione IN in badge decisa e pending
2. **Pannello vigente** → aggiunto `— Indicazioni Nazionali 2012` al label per contestualizzare la fonte
3. **Pannello nuovo (senza testo vigente)** → `Le IN 2025` → `Le Indicazioni Nazionali 2025 (D.M. 221/2025)`
4. **Pannello proposta** → `proposta di aggiornamento` → `Indicazioni Nazionali 2025 (da valutare)` per enfatizzare necessita di valutazione
5. **Titolo Gap** → `Gap verso le IN 2025` → `Gap verso le Indicazioni Nazionali 2025`
6. **Selettore versione curriculum** → espansione IN in entrambi i valori
7. **Esportazioni CML** → allineamento nomenclature (IN 2012/IN 2025 → Indicazioni 2012/Indicazioni 2025)

## Risultati UX

| ID UX | Stato precedente | Stato finale |
|-------|-----------------|--------------|
| UX-014 | TODO | RISOLTO IN CML-297 |
| UX-015 | TODO | RISOLTO IN CML-297 |

## Avanzamento PM

| PM | Precedente | Attuale |
|----|-----------|---------|
| PM-04 | 65% | 70% |
| PM-07 | 10% | 10% |

## Non regressione

| UX ID | Esito |
|-------|-------|
| UX-001 | ✅ Confermata (testata semplificata) |
| UX-009 | ✅ Confermata (badge uniformati) |
| UX-011 | ✅ Confermata (meta ridondante assente) |
| UX-013 | ✅ Confermata (indicatori duplicati rimossi) |

## Controlli

| Controllo | Esito |
|-----------|-------|
| `git diff --check` | ✅ Nessun errore |
| Runtime parity (FC) | ✅ Nessuna differenza |
| Validatore curriculum (14 files) | ✅ 14/14 PASS |
| Shape/runtime test (14 discipline) | ✅ 14/14 PASS |

## Note

- Nessuna modifica a service worker, schema `.cml`, dati disciplinari, o architettura
- L'abbreviazione "IN" rimane nel titolo home (`IN 2012 → IN 2025`) e nel footer, dove funge da shorthand consolidato per utenti esperti
- Commit non pushato — in attesa di autorizzazione
