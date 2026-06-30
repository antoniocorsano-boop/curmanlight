# Report — Score Refresh Accessibilità Post Contrast Remediation

## Riepilogo Esecutivo

Score accessibilità aggiornato da **64/100** a **76/100** (+12). Il salto è giustificato da evidenze verificabili: Lighthouse 96/100 (desktop e mobile), axe serious `color-contrast` azzerato, violazioni totali ridotte da 16 a 7 (solo moderate `region`). Lo score si qualifica come "audit-ready interno".

## Prima/Dopo

| Aspetto | Prima | Dopo |
|---------|-------|------|
| Score | 64/100 | 76/100 |
| Lighthouse | non eseguito | 96/100 desktop + mobile |
| Axe totali | 16 | 7 |
| Axe serious | 9 | 0 |
| Axe moderate | 7 | 7 |
| P0 | 0 | 0 |
| P1 | 3 | 1 |
| P2 | 3 | 0 |
| P3 | 2 | 0 |

## Tabella Score per Area

| Area | Punteggio | Note |
|------|-----------|------|
| Skip link / focus handling | ✓ | già funzionante |
| ARIA accordion | ✓ | già funzionante |
| ARIA live region | ✓ | già funzionante |
| Emoji decorative | ✓ | già funzionante |
| Icon-only labels | ✓ | risolto |
| Color contrast | ✓ | **risolto** (9 → 0) |
| Landmark region | ✗ (7 moderate) | da correggere |
| Screen reader test | non eseguito | gate per > 85 |

## Impatto Lighthouse

Entrambe le modalità (desktop, mobile) registrano 96/100. L'unico audit fallito (`color-contrast`) è stato corretto nella slice di remediation e verificato su produzione.

## Impatto axe

- **16 → 7** violazioni totali.
- **9 → 0** `color-contrast` serious.
- **7 moderate invariate** — tutte `region` (welcome-overlay senza landmark).

## Stato Contrasto

Confermato: 0 serious `color-contrast` su produzione GH Pages. Rilevazione axe CLI 4.12.1.

## Residui Region

7 occorrenze `region` moderate nel welcome-overlay. Impatto basso (overlay transitorio all'avvio), ma rilevabile in audit esterno. Da correggere in slice runtime separata.

## Rischio Residuo

| Rischio | Impatto | Mitigazione |
|---------|---------|-------------|
| `region` non corretto | Violazione moderate in audit esterno | Correggere in prossima runtime slice |
| Solo audit automatico | 20-50% copertura | Screen reader test programmato dopo remediation region |
| Score 76 auto-assegnato | Non certificato | Usare solo "audit-ready interno" |

## Raccomandazione Operativa

1. Eseguire `CML-UX-ACCESSIBILITY-REGION-LANDMARKS-REMEDIATION` (runtime)
2. Rieseguire axe/Lighthouse
3. Docs-only score refresh
4. Screen reader smoke test
5. Score refresh finale (target 85+)
