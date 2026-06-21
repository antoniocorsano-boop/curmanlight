# CML-010A — Compact Cards & Expandable Detail Design Audit

## Stato

Audit progettuale completato. Nessuna modifica runtime.

## Preflight

| Verifica | Esito |
|---|---|
| Branch | `cml-008r-fix-markdown-decision-summary` ✅ |
| HEAD | `d9b6cd8` (docs: CML-009E deploy report) ✅ |
| Working tree | pulita ✅ |
| Deploy in produzione | https://curmanlight.netlify.app ✅ |
| Modifiche runtime in questo blocco | NESSUNA ✅ |
| Deploy in questo blocco | NESSUNO ✅ |

## Analisi della vista attuale dopo CML-009E

### A — Area Cards (`#cards-area`, `cardHTML()`)

Il contenuto principale del tab **Lavoro** è generato da `render()` nel `#cards-area` e presenta per ogni disciplina:

1. **Disc-header**: icona, nome disciplina, competenza, nuclei
2. **Card "ok"** (invariati): badge + testo intero + 2 bottoni (Modifica, Rimuovi)
3. **Card "decise"** (approvate/rifiutate): badge esito + testo finale + 3 bottoni (Cambio idea, Modifica, Rimuovi)
4. **Card "da decidere"** (pending — modifica/nuovo): blocco complesso con:
   - **Gap-header** di 3 righe ripetuto per ogni card (obbligatorio ma ridondante dopo la prima)
   - Pannelli affiancati (testo IN 2012 vs proposta IN 2025)
   - Lock-notice per ordine di scuola (se non corrisponde al profilo)
   - 4 bottoni azione (Approva, Modifica, Mantieni testo attuale, Elimina)
5. **Add-row**: 2 bottoni per aggiungere traguardi/obiettivi

### B — Problemi individuati

| # | Problema | Impatto | Nota |
|---|---|---|---|
| P1 | **Densità verticale**: card pending occupano ~300-400px ciascuna + gap-header (120px) | Utenza mobile perde il filo, scroll infinito | Le card "da decidere" sono le più importanti ma presentate come blocchi massivi |
| P2 | **Gap-header ripetuto** ad ogni card | Ridondanza severa: stesso testo per tutte le card pending della stessa disciplina | Va spostato fuori dal ciclo, come avviso unico sopra la lista |
| P3 | **Testo completo sempre visibile** anche per card ok/decise | Le card ok sono le più numerose e schiacciano quelle pending verso il basso | Utile collassare per default le sezioni meno prioritarie |
| P4 | **Nessuna gerarchia visiva** tra card pending | Tutte le card pending appaiono ugualmente importanti | Servono indicatori di urgenza/priorità (es. gap 2025 più rilevante) |
| P5 | **Side-by-side panels** inefficaci su mobile (si impilano) | Su schermi piccoli il confronto diventa lungo/scorrimento verticale | Va ridisegnato come dettaglio espandibile, non vista default |
| P6 | **Lock-notice ripetuta** per ogni card fuori ordine | Stessa notifica replicata N volte | Va spostata come avviso unico per sezione |
| P7 | **Azioni pending troppo invadenti** (3-4 bottoni per card) | Stanchezza decisionale | Ridurre a 1 azione primaria + menu azioni secondarie |

### C — Cosa NON toccare (già pubblicato in CML-009E)

| Area | Stato |
|---|---|
| **Cruscotto** (lines 440-470 CSS, 506-531 HTML) | ✅ Pubblicato e verificato CML-009E |
| **Toolbar** | ✅ Alleggerita in CML-009B |
| **Usage-notice** collassato in `<details>` | ✅ Alleggerito |
| **Local-save-bar** compatta | ✅ Alleggerita |
| **Tecnologia export panel** | ✅ Intatto, nascosto per default su altre discipline |
| **Tab Riepilogo** — `renderRiepilogo()` | ✅ Compatto, va bene così |
| **Tab Normativa** | ✅ Già ben organizzato, intatto |
| **Tab Generali** | ✅ Già compatto, intatto |
| **Markdown generation** | ✅ Intatto |
| **PDF / sw.js / _headers / assets** | ✅ Invariati |
| **Netlify deploy config** | ✅ Intatto |

## Proposta nuova struttura a schede compatte

### Principio guida

> Una schermata, una decisione.

### Architettura delle schede (Tab Lavoro)

La vista corrente mostra tutto insieme. La proposta separa in **4 schede orizzontali** (tipo tab secondari interni al tab Lavoro, oppure sezioni con header collassabile):

```
┌─────────────────────────────────────────────┐
│ [📄 Documento] [⏳ Voci da validare] [📚 Fonti] [📤 Esportazione] │  ← micro-tab o collapsible section
└─────────────────────────────────────────────┘
```

Alternativa mobile: accordion sections invece di micro-tab (evita micro-tab annidati).

---

### Scheda 1 — Documento attuale

**Scopo**: Mostrare il curricolo vigente IN 2012 (voci ok + già decise) senza distrarre.

| Campo | Valore |
|---|---|
| **Titolo** | 📄 Documento attuale — IN 2012 |
| **Testo breve** | "X traguardi e Y obiettivi per questa disciplina" |
| **Dato principale** | Conteggio: N invariate, M approvate, P rifiutate |
| **Azione principale** | 📖 Mostra dettaglio (espande) |
| **Azione secondaria** | ✏️ Modifica (solo se necessario) |
| **Dettaglio collassabile** | Elenco testi IN 2012 (compatto, senza pannelli) |
| **Cosa non perdere** | Badge esito per ogni voce; possibilità di cambiare idea (riaprire decisione) |

### Scheda 2 — Voci da validare

**Scopo**: Mostrare SOLO le voci pending (modifica/nuovo), una alla volta o in lista compatta.

| Campo | Valore |
|---|---|
| **Titolo** | ⏳ Voci da validare |
| **Testo breve** | "12 voci richiedono una decisione" |
| **Dato principale** | Progresso: 3/12 decise |
| **Azione principale** | ✅ Approva / ❌ Mantieni testo attuale (su ogni voce) |
| **Azione secondaria** | ✏️ Personalizza testo |
| **Dettaglio collassabile** | 🔍 Mostra confronto (testo IN 2012 vs proposta IN 2025) |
| **Cosa non perdere** | Gap-header unico all'inizio della sezione; distinzione tra "modifica" e "nuovo"; possibilità di tornare indietro |

### Scheda 3 — Fonti e riferimenti

**Scopo**: Mostrare metadati della disciplina (competenze, nuclei, fonte normativa, gap 2025).

| Campo | Valore |
|---|---|
| **Titolo** | 📚 Fonti e riferimenti |
| **Testo breve** | "Competenza, nuclei, normativa di riferimento" |
| **Dato principale** | Competenza chiave + nuclei fondanti |
| **Azione principale** | 📖 Apri normativa (tab normativa) |
| **Azione secondaria** | — |
| **Dettaglio collassabile** | Nota metodologica IN 2025; gap specifici della disciplina |
| **Cosa non perdere** | Raccordo PTOF/RAV; contributi locali (es. ceramica arianese); riferimenti normativi precisi |

### Scheda 4 — Esportazione

**Scopo**: Già presente come `tecnologia-export-panel`. Resta invariata.

| Campo | Valore |
|---|---|
| **Titolo** | 📤 Esportazione |
| **Azione principale** | 📝 Genera bozza Markdown |
| **Azione secondaria** | 📋 Copia / ⬇ Scarica / 🖨 PDF |
| **Dettaglio collassabile** | Preview Markdown (textarea) |

## Schema riassuntivo scheda → sintesi → azione → espandibile

| Scheda | Titolo | Testo breve | Azione principale | Azione secondaria | Dettaglio espandibile |
|---|---|---|---|---|---|
| 1 | 📄 Documento attuale | N voci IN 2012 ok/decise | 📖 Mostra dettaglio | ✏️ Modifica | Elenco testi + badge esito |
| 2 | ⏳ Voci da validare | X pending in questa disciplina | ✅ Approva | ✏️ Personalizza | 🔍 Confronto IN 2012 vs 2025 |
| 3 | 📚 Fonti e riferimenti | Competenza + nuclei | 📖 Apri normativa | — | Nota metodologica |
| 4 | 📤 Esportazione | Bozza Markdown | 📝 Genera | 📋 Copia / ⬇ Scarica | Preview textarea |

## Hash visivo dell'architettura proposta

```
┌─────────────────────────────────────────────────────────┐
│ 📄 Documento attuale (IN 2012)  [▾ 12 traguardi, 8 ob.] │  ← collassabile
│    • Traguardo 1 (✓ ok)                                  │
│    • Traguardo 2 (✅ approvata)                          │
│    ...                                                   │
├─────────────────────────────────────────────────────────┤
│ ⏳ Voci da validare (3/12 decise)  [▾ 9 pending]         │  ← collassabile
│    ⚠ Gap 2025: nota unica per disciplina (non ripetuta) │
│    ┌─────────────────────────────────────────────────┐   │
│    │ ★ Nuovo | 📍 Cl. 3ª | [✅] [✏️] [❌] [🔍]        │   │  ← card compatta
│    │ "Sviluppa competenze di educazione finanziaria"   │   │  → 🔍 mostra pannelli
│    └─────────────────────────────────────────────────┘   │
│    ...                                                   │
├─────────────────────────────────────────────────────────┤
│ 📚 Fonti e riferimento  [▾ mostra]                      │  ← collassabile
│    🎯 Competenza alfabetica funzionale                   │
│    📚 Nuclei: Ascolto, Lettura, Scrittura...            │
│    📜 D.M. 221/2025 | IN 2012 | Gap 2025                │
├─────────────────────────────────────────────────────────┤
│ 📤 Esportazione  [▾ mostra]                              │  ← già esistente
│    [Genera bozza] [Copia] [Scarica]                      │
│    ┌────────────────────────────────────────────────┐    │
│    │ Preview Markdown...                             │    │
│    └────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────┘
```

## Cose da implementare in CML-010B

1. **Rimuovere gap-header dal ciclo card** → spostare come avviso unico prima del loop pending
2. **Aggiungere sezioni collassabili** (Documento attuale, Voci da validare, Fonti, Esportazione) nel tab Lavoro/WIP
3. **Card pending compatta**: badge + 1-2 righe di testo + ✅ approva + ❌ rifiuta + 🔍 dettaglio — il confronto completo si apre su richiesta
4. **Card ok collassate per default** — mostra solo badge esito + conteggio, espande su "Mostra"
5. **Avviso lock-notice unico** per l'intera disciplina/ordine, non per card
6. **Progresso per sezione** — non solo percentuale globale ma contatore "X/N decise"

## Cose da NON implementare in CML-010B

- Non toccare cruscotto (CML-009E)
- Non toccare toolbar/filtri
- Non toccare usage-notice / local-save-bar
- Non toccare tecnologia-export-panel (giusto)
- Non toccare riepilogo/normativa/generali tab
- Non toccare Markdown/PDF generation
- Non toccare sw.js / _headers / assets
- Non toccare deploy / Netlify

## Verdetto

```
CML_010A_COMPACT_CARDS_EXPANDABLE_DETAIL_DESIGN_AUDIT_READY
```
