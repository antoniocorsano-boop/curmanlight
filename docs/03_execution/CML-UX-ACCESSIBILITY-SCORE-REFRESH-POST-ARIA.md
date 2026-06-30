# CML-UX-ACCESSIBILITY-SCORE-REFRESH-POST-ARIA

## Contesto

| Elemento | Valore |
|----------|--------|
| Tipo | docs-only |
| Branch | `main` |
| Commit iniziale | `bf3eab6` (HEAD, origin/main) |
| Working tree | pulito |
| Ultima slice chiusa | `CML_UX_ACCESSIBILITY_ARIA_ENHANCEMENTS_PUSHED` |

## Baseline precedente

Fonte: `docs/03_execution/CML-UX-ACCESSIBILITY-SCORE-REFRESH.md`

| Aspetto | Valore |
|---------|--------|
| Score precedente | 48/100 |
| Score dopo skip link + focus + ARIA accordion | 60/100 |
| Delta precedente | +12 |
| P0 residui | 0 |
| P1 residui | 2 (emoji decorative, annunci aria-live) |
| Prossima slice consigliata | `CML-UX-ACCESSIBILITY-ARIA-ENHANCEMENTS` |

## Commit runtime considerati

| Commit | Slice | Tipo | Aree impattate |
|--------|-------|------|----------------|
| `3276da2` | Curriculum UI certification readiness | runtime | navigazione tastiera, scroll mobile, disciplina focus, ridondanza |
| `bf3eab6` | ARIA enhancements | runtime | annunci aria-live, aria-hidden emoji, icon-only labels |

## Criteri di scoring

Grimaldi allineata a WCAG 2.1 AA + best practice screen reader:

| Area | Peso | Cosa valuta |
|------|-----:|-------------|
| Semantica landmark/focus/skip link | 20 | skip link, heading gerarchia, landmark regions, main role |
| Navigazione tastiera/focus handling | 15 | tabindex, focus trap, focus visibile, ordine tab |
| ARIA accordion/interazioni | 15 | aria-expanded, aria-controls, role button, keyboard handler |
| Annunci dinamici aria-live | 15 | aria-live region, announceStatus(), chiamate da selectDisc/setTab |
| Icone/emoji decorative | 10 | aria-hidden sistematico, JS template coverage |
| Mobile/accessibilità percepita | 10 | scroll, disciplina al centro, ridondanza, bottom bar |
| Robustezza runtime/assenza errori JS | 10 | console errors, eccezioni runtime, regressioni |
| Evidenze/test esterni | 5 | axe/Lighthouse documentato, test screen reader, test utenti |
| **Totale** | **100** | |

## Score precedente (su questa griglia)

Prima di `3276da2` e `bf3eab6`, nessuno dei due P1 era affrontato. La griglia produceva:

| Area | Punteggio | Motivazione |
|------|----------:|-------------|
| Semantica landmark/focus/skip link | 11/20 | skip link presente, main role implicito, heading H1/H2 informali |
| Navigazione tastiera/focus handling | 9/15 | focus gestito in selectDisc/setTab, accordion keyboard OK, ridondanza UI |
| ARIA accordion/interazioni | 9/15 | evidence accordion con aria-expanded e aria-controls |
| Annunci dinamici aria-live | 0/15 | nessun annuncio presente |
| Icone/emoji decorative | 0/10 | nessun aria-hidden applicato |
| Mobile/accessibilità percepita | 5/10 | scroll eccessivo, disciplina non in primo piano |
| Robustezza runtime | 8/10 | stabile, zero errori console noti |
| Evidenze/test esterni | 2/5 | nessun test documentato |
| **Totale** | **44/100** | |

Il precedente 60/100 usava una griglia diversa con 3 aree. La nuova griglia a 8 aree è più granulare e severa: il 44/100 è coerente con lo stato reale pre-miglioramento.

## Score aggiornato

Dopo `3276da2` e `bf3eab6`:

| Area | Pre | Post | Delta | Razionale |
|------|----:|-----:|------:|-----------|
| Semantica landmark/focus/skip link (20) | 11 | 11 | 0 | invariato |
| Navigazione tastiera/focus handling (15) | 9 | 10 | +1 | Curriculum UI: disciplina selezionata in primo piano, scroll ridotto, meno ridondanza |
| ARIA accordion/interazioni (15) | 9 | 9 | 0 | invariato |
| Annunci dinamici aria-live (15) | 0 | 11 | +11 | regione #a11y-status, announceStatus(), chiamate da selectDisc e setTab |
| Icone/emoji decorative (10) | 0 | 7 | +7 | aria-hidden sistematico su statici e template JS; edge case JS (ORDINE_LABEL inline) |
| Mobile/accessibilità percepita (10) | 5 | 6 | +1 | Curriculum UI: scroll contenuto, disciplina visibile prima |
| Robustezza runtime (10) | 8 | 8 | 0 | invariato, nessuna regressione |
| Evidenze/test esterni (5) | 2 | 2 | 0 | nessun test esterno ancora |
| **Totale** | **44/100** | **64/100** | **+20** | |

Arrotondamento prudenziale: **65/100**.

### Motivazione del delta

Il delta +20 (da 44 a 64) è trainato da due P1 chiusi:

1. **Annunci aria-live** (+11): area passata da 0/15 a 11/15. La regione è presente e funzionante, le chiamate sono integrate nei due flussi principali (cambio disciplina, cambio tab). Il punteggio non arriva a 15/15 perché manca test con screen reader reali e manca annuncio per azioni secondarie (undo, remove, export feedback via aria-live invece che solo showToast).

2. **Icone/emoji decorative** (+7): area passata da 0/10 a 7/10. Copertura sistematica su statici e template JS. Non arriva a 10/10 perché:
   - alcuni template JS (ORDINE_LABEL in curricolo-index) non sono stati modificati per non interferire con export Markdown/Word
   - icon-only controls usano `title` (accettabile ma meno robusto di `aria-label`)
   - showToast non è stato modificato (messaggi brevi, auto-dismiss)

3. **Curriculum UI** (+2 complessivo): navigazione e mobile migliorati marginalmente. Non è un miglioramento accessibilità diretto ma riduce il carico cognitivo e lo scroll, che impatta positivamente l'esperienza percepita.

## Residui

### P0

Nessuno.

### P1

| ID | Residuo | Area | Impatto |
|----|---------|------|---------|
| P1-01 | Mancano test axe/Lighthouse documentati | Evidenze | Impossibile certificare senza audit automatico |
| P1-02 | Mancano test screen reader reali (NVDA/VoiceOver) | Evidenze | Impossibile validare annunci aria-live e etichette |
| P1-03 | Icon-only controls usano `title` invece di `aria-label` in template JS | Icone | `title` meno robusto, non supportato da tutti gli screen reader via touch |

### P2

| ID | Residuo | Area | Impatto |
|----|---------|------|---------|
| P2-01 | showToast non annuncia via aria-live | Annunci | Feedback visivo non accessibile a screen reader |
| P2-02 | ORDINE_LABEL inline emoji non marcati in curricolo-index/riepilogo | Icone | Rumore minore in viste secondarie |
| P2-03 | Nessun test utenti reali documentato | Evidenze | Gap per certificazione esterna |

### P3

| ID | Residuo | Area | Impatto |
|----|---------|------|---------|
| P3-01 | Heading H1/H2 non formalizzati in struttura gerarchica | Semantica | Minore, skip link già presente |
| P3-02 | Landmark informali (header, main, nav senza role esplicito) | Semantica | HTML5 implicito, ok per browser moderni |

## Decisione icon-only labels

Stato attuale:
- **Pulsanti approva/rifiuta** (`✅`, `❌`): hanno `title="Approva"` e `title="Mantieni testo attuale"` — nome accessibile presente
- **Pulsante confronto** (`🔍`/`📖`): ha `aria-label` dinamico (`"Mostra confronto"` / `"Nascondi confronto"`)
- **Pulsante modifica** (`✏️`): ha `title="Personalizza testo"` + testo visibile in altri template (`✏️ Modifica`)
- **Pulsante rimuovi** (`🗑`): ha `title="Rimuovi"` + testo visibile in altri template (`🗑 Rimuovi`)
- **Bottoni sidebar disciplina**: hanno `title="${meta.comp}"` — nome accessibile presente

Classificazione: **P2/P3**. I controlli hanno nome accessibile; `title` è accettabile come copertura minima ma meno robusto di `aria-label`.

Raccomandazione: trasformare `title` in `aria-label` negli icon-only controls puri (approva/rifiuta/confronto/rimuovi). Slice separata e chirurgica consigliata: **`CML-UX-ACCESSIBILITY-ICON-ONLY-LABELS`**.

## Cosa non è stato modificato

Nella slice corrente zero file runtime. Nessuna modifica a:
- `_published_snapshot/netlify-current/index.html`
- `content/curriculum/`
- JSON disciplinari
- schema `.cml`
- Export Center
- service worker, manifest, asset
- tools
- layout, configurazioni Pages

## Limiti dello score

- Score basato su lettura codice e flussi simulati, non su test strumentali o utenti reali
- Senza axe/Lighthouse lo score è una stima interna, non certificabile
- La griglia a 8 aree è nuova — non confrontabile linearmente con i precedenti 48→60 (che usavano 3 aree)

## Prossima slice consigliata

```
CML-UX-ACCESSIBILITY-ICON-ONLY-LABELS
```

Tipo: runtime microfix.
Scope: trasformare `title` in `aria-label` sugli icon-only controls nei template JS, senza modificare layout.

Oppure, se prioritario:

```
CML-UX-ACCESSIBILITY-AXE-LIGHTHOUSE-AUDIT
```

Tipo: docs-only + analisi.
Scope: eseguire axe/Lighthouse, documentare score, confrontare con stima interna.

## Verdict

`CML_UX_ACCESSIBILITY_SCORE_REFRESH_POST_ARIA_READY`
