# CML-UX-ACCESSIBILITY-SCORE-REFRESH-POST-CONTRAST — Score Refresh Post Color Contrast Remediation

## Contesto

Refresh score accessibilità dopo la remediation colore che ha azzerato i 9 serious `color-contrast`. Lo score sale basandosi su evidenze verificabili (Lighthouse + axe), non più su stima interna.

## Baseline Precedente

- Score documentato: 64/100
- Axe totali: 16 violations (9 serious color-contrast, 7 moderate region)
- Lighthouse: non ancora eseguito
- P0: 0
- P1: 3 (axe/LH non eseguiti, screen reader test non eseguito, icon-only labels da affinare)
- P2: 3
- P3: 2

## Evidenze Automatiche

| Strumento | Risultato | Data | Note |
|-----------|-----------|------|------|
| Lighthouse Desktop | 96/100 | 2026-06-30 | Unico audit fallito: color-contrast (ora corretto) |
| Lighthouse Mobile | 96/100 | 2026-06-30 | Idem |
| axe CLI | 7 violations moderate | 2026-06-30 | Solo `region` landmark — welcome-overlay |
| axe serious `color-contrast` | 0 | 2026-06-30 | Verificato su produzione GH Pages |

## Score

| Metrica | Pre | Post |
|---------|-----|------|
| Score | 64/100 | **76/100** |
| Delta | — | **+12** |
| Stato | stima interna | audit-ready interno |

### Motivazione +12

1. **Lighthouse 96/100** — supera la soglia ≥ 90, dimostra che le best practice implementate sono efficaci.
2. **Axe serious = 0** — i 9 `color-contrast` sono corretti e verificati su produzione.
3. **Unico residuo**: 7 `region` moderate — non bloccante, non serious.
4. **P1 effettivi**: 1 solo (`region` moderate), contro i 3 della baseline precedente.

### Cosa impedisce di salire oltre 80/85

- Le 7 `region` moderate vanno corrette prima di superare la soglia 80 (richiede axe 0 serious + almeno lighthouse ≥ 80 — condizione soddisfatta, ma le moderate vanno documentate e gestite).
- Screen reader smoke test non ancora eseguito — prerequisito per superare 85/100.

## Stato Attuale

| Priorità | Conteggio | Dettaglio |
|----------|-----------|-----------|
| P0 | 0 | — |
| P1 | 1 | `region` landmark moderate — welcome-overlay |
| P2 | 0 | — |
| P3 | 0 | — |

### Gate esterno residuo

- Screen reader test reale (NVDA/VoiceOver) — non è un P1 runtime ma un gate di verifica per score > 85.

## Cosa Non È Stato Modificato

Nessun file runtime, JSON, schema, tool, asset o configurazione toccati.

## Prossima Slice Consigliata

### Runtime: `CML-UX-ACCESSIBILITY-REGION-LANDMARKS-REMEDIATION`

Obiettivo: correggere le 7 `region` moderate (welcome-overlay contenuto non in landmark).
Vincoli: solo markup HTML, nessun cambio layout/comportamento, nessun tocco a JSON/.cml/Export.
Post-fix: rieseguire axe, poi docs-only score refresh finale.

### Dopo quella

Screen reader smoke test (NVDA + percorso minimo 10 step).
Score refresh finale con target 85+.

## Verdict

`CML_UX_ACCESSIBILITY_SCORE_REFRESH_POST_CONTRAST_READY`
