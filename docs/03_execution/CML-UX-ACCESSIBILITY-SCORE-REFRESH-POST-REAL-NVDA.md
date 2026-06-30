# CML-UX-ACCESSIBILITY-SCORE-REFRESH-POST-REAL-NVDA — Score Refresh After Real NVDA Gate

## Obiettivo

Aggiornare lo score accessibilità CurManLight da 76/100 a 88/100 dopo il test reale NVDA interattivo con operatore umano.

## Stato Iniziale

- Branch: `main`
- HEAD iniziale: `1e47aa9`
- `origin/main`: `1e47aa9`
- Working tree: pulito
- Score precedente: 76/100

## Perimetro

Docs-only / score refresh / governance accessibilità. Nessuna modifica runtime.

## Evidenze Usate

| # | Evidenza | Riferimento |
|---|----------|-------------|
| 1 | Lighthouse desktop/mobile 96/100 | Score refresh post contrasto |
| 2 | axe color-contrast: 0 serious | Remediation contrasto |
| 3 | axe region: remediation completata | Region landmark remediation |
| 4 | Overlay focus trap: implementato | Overlay focus management |
| 5 | Focus post-dismiss: `#main-content` | Overlay focus management |
| 6 | Breadcrumb stale: risolto | Breadcrumb sync microfix |
| 7 | Pulsanti icon-only: già dotati di `aria-label` | Verifica strutturale |
| 8 | NVDA interattivo reale: passato (operatore umano) | Real NVDA interactive test |
| 9 | P0/P1/P2: 0/0/0 | Tutte le slice |
| 10 | Errori JS reali: 0 | Tutte le slice |

## Score

| Metrica | Pre | Post |
|---------|-----|------|
| Score | 76/100 | **88/100** |
| Delta | — | **+12** |
| Stato | audit-ready interno | audit-ready avanzato |

### Motivazione +12

1. **Lighthouse 96/100** confermato in slice precedente.
2. **Axe serious = 0** da remediation contrasto.
3. **Axe region = 0** da remediation landmark.
4. **Overlay focus trap** completato e verificato.
5. **Breadcrumb stale** risolto con microfix.
6. **Pulsanti icon-only** già dotati di `aria-label` — nessun fix necessario.
7. **NVDA reale passato** — validazione percorsi 11/11, discipline 5/5, P0/P1/P2 = 0.

### Limiti Dichiarati

- Score interno **audit-ready**, non certificazione WCAG.
- **P3 minori** ancora backloggabili (landmark naming, microcopy).
- Test su **percorso rappresentativo**, non esaustivo universale.
- **VoiceOver** non testato — ambiente Windows.
- Nessuna dichiarazione di **conformità legale completa**.

## Backlog Residuo

- P3 landmark naming/microcopy polish
- Eventuale VoiceOver/macOS test futuro
- Nuova PR readability scaffold da baseline pulita
- Eventuale refresh README accessibilità

## Invarianti Rispettate

- Nessuna modifica runtime ✅
- Solo file docs autorizzati ✅

## Verdict

`CML_UX_ACCESSIBILITY_SCORE_REFRESH_POST_REAL_NVDA_READY`
