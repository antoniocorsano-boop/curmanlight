# CML-UX-ACCESSIBILITY-SCORE-REFRESH-POST-ARIA — Report

## Riepilogo esecutivo

Refresh documentale del punteggio accessibilità CurManLight dopo le slice runtime `3276da2` (Curriculum UI certification readiness) e `bf3eab6` (aria-live + aria-hidden). Lo score passa da **~44/100** a **64/100** (~65/100) sulla nuova griglia a 8 aree, con delta **+20**. I due P1 precedenti (emoji decorative, annunci aria-live) sono chiusi.

| Aspetto | Valore |
|---------|--------|
| Branch | `main` |
| Commit iniziale | `bf3eab6` |
| Runtime modificato | no |
| Score precedente (nuova griglia) | ~44/100 |
| Score aggiornato | 64/100 (arrotondato ~65/100) |
| Delta | +20 |
| P0 residui | 0 |
| P1 residui | 3 |
| Prossima slice | `CML-UX-ACCESSIBILITY-ICON-ONLY-LABELS` o `CML-UX-ACCESSIBILITY-AXE-LIGHTHOUSE-AUDIT` |
| Push eseguito | no |
| Verdict | `CML_UX_ACCESSIBILITY_SCORE_REFRESH_POST_ARIA_READY` |

## Impatto di `3276da2` — Curriculum UI

| Aspetto | Effetto |
|---------|---------|
| Navigazione tastiera | disciplina selezionata in primo piano, ridondanza collassata |
| Mobile | scroll ridotto, contenuto utile raggiunto prima |
| Delta score | +2 complessivo (+1 navigazione, +1 mobile) |
| Regressioni | zero, verificato in smoke post-push |

Non è un miglioramento accessibilità diretto ma riduce il carico cognitivo e migliora l'esperienza percepita specialmente su schermi piccoli.

## Impatto di `bf3eab6` — ARIA enhancements

| Aspetto | Effetto |
|---------|---------|
| Annunci aria-live | regione #a11y-status + announceStatus(), chiamata da selectDisc e setTab |
| Emoji decorative | aria-hidden="true" sistematico su statici e template JS |
| Icon-only controls | tutti coperti da title o aria-label |
| Delta score | +18 complessivo (+11 annunci, +7 icone) |
| Regressioni | zero, verificato in smoke post-push |

Chiusi i due P1 della slice precedente.

## Tabella residui

| Priorità | Residuo | Note |
|----------|---------|------|
| P0 | — | nessuno |
| P1-01 | Mancano test axe/Lighthouse | impossibile certificare senza audit automatico |
| P1-02 | Mancano test screen reader reali | NVDA/VoiceOver necessario per validazione |
| P1-03 | Icon-only usano `title` non `aria-label` | meno robusto, affinamento raccomandato |
| P2-01 | showToast non annuncia via aria-live | feedback visivo non accessibile |
| P2-02 | Inline emoji in ORDINE_LABEL non marcati | edge case in viste secondarie |
| P2-03 | Nessun test utenti reali | gap per certificazione esterna |
| P3-01 | Heading H1/H2 informali | minore, skip link presente |
| P3-02 | Landmark HTML5 impliciti | ok per browser moderni |

## Stato audit-ready

Il runtime CurManLight è **audit-ready interno**: le criticità maggiori per screen reader sono risolte, gli annunci dinamici sono funzionanti, le emoji decorative sono sistematicamente nascoste. Manca validazione esterna (axe/Lighthouse + test utenti reali) per dichiarare conformità WCAG 2.1 AA.

## Cosa manca per verifica esterna

1. Esecuzione axe DevTools / Lighthouse Accessibility audit
2. Test con NVDA (Windows) e VoiceOver (macOS/iOS)
3. Eventuale validazione con utenti reali
4. Formalizzazione landmark regions
5. Trasformazione `title` → `aria-label` su icon-only controls puri

## Raccomandazione successiva

Due opzioni:

| Slice | Tipo | Scope |
|-------|------|-------|
| `CML-UX-ACCESSIBILITY-ICON-ONLY-LABELS` | runtime microfix | trasformare title in aria-label sui 4 bottoni icon-only (approva, rifiuta, confronto, rimuovi) |
| `CML-UX-ACCESSIBILITY-AXE-LIGHTHOUSE-AUDIT` | docs-only | eseguire e documentare audit automatico |

Raccomandata: iniziare con **ICON-ONLY-LABELS** (microfix rapido, scope limitato), poi **AXE-LIGHTHOUSE-AUDIT** per validazione strumentale.

## File modificati

- `docs/03_execution/CML-UX-ACCESSIBILITY-SCORE-REFRESH-POST-ARIA.md`
- `report/CML-UX-ACCESSIBILITY-SCORE-REFRESH-POST-ARIA.md`
- `docs/REPO-MOVELOG.md`

## Esclusioni

- `.env`
- `antigravity.config.json`
- `test-results/`
- `tools/smoke-hash-nav.mjs`

## Conclusione

Il punteggio accessibilità stimato passa da **~44/100** a **64/100** (+20). Le due P1 sono chiuse. Il runtime è audit-ready interno. La prossima slice può essere l'affinamento icon-only labels o l'audit strumentale, a scelta.
