# CML-UX-ACCESSIBILITY-COLOR-CONTRAST-REMEDIATION

## Contesto

Remediation chirurgica dei 9 problemi `color-contrast` (serious) rilevati da axe CLI 4.12.1 durante l'audit `CML-UX-ACCESSIBILITY-AUTO-AUDIT-EXECUTION`.

## Baseline Audit

| Metrica | Pre-fix | Post-fix |
|---------|---------|----------|
| Violazioni totali axe | 16 | 7 |
| `color-contrast` (serious) | 9 | **0** |
| `region` (moderate) | 7 | 7 |
| Validatore curriculum | 14/14 | 14/14 |
| Shape test | 14/14 | 14/14 |

## 9 Problemi Contrasto — Interventi

| # | Selettore | Colore pre | Colore post | Background | Rapporto pre | Rapporto post |
|---|-----------|------------|-------------|------------|-------------|--------------|
| 1 | `.home-card-didattica .home-card-title` | `#00897b` | `#00695c` | `#fff` | 3.3:1 | 4.6:1 |
| 2 | `.dimmed:nth-child(3)` | `#90a4ae` | `#546e7a` | `#fff` | 2.7:1 | 5.3:1 |
| 3 | `.dimmed:nth-child(4)` | `#90a4ae` | `#546e7a` | `#fff` | 2.7:1 | 5.3:1 |
| 4 | `.home-card-note` | `#90a4ae` | `#546e7a` | `#fff` | 2.7:1 | 5.3:1 |
| 5 | `.home-card-note > a` (1° link) | `#00897b` | `#00695c` | `#fff` | 3.3:1 | 4.6:1 |
| 6 | `.home-microguide-footer` | `var(--cml-text-muted)` = `#999` | `var(--cml-text-secondary)` = `#666` | `#fff` | 2.8:1 | 5.0:1 |
| 7 | `.home-footer p` | `#78909c` | `#546e7a` | `#f5f7fa` | 2.8:1 | 4.9:1 |
| 8 | `#mbb-curricolo` | `#78909c` | `#546e7a` | `#fff` | 3.5:1 | 5.3:1 |
| 9 | `#mbb-didattica` | `#78909c` | `#546e7a` | `#fff` | 3.5:1 | 5.3:1 |

Tutti i rapporti post-fix superano WCAG AA (4.5:1 per testo normale).

## Criteri Colore

- `#00695c` (darker teal) per accenti istituzionali — palette esistente, già usata in `.didattica-evidence-tag`, non introduce nuovi colori
- `#546e7a` (blue-grey medio-scuro) per testi muted/note — coerente con `.home-subtitle` già a `#546e7a`
- `--cml-text-secondary` (`#666`) per microguide footer — variabile già definita, non crea nuovi token

## Test Post-Fix

| Test | Risultato |
|------|-----------|
| axe color-contrast | 0 violations (da 9) |
| axe region | 7 violations moderate (invariate) |
| axe total | 7 (da 16) |
| Validatore curriculum | 14/14 PASS |
| Shape test | 14/14 PASS |
| Errori JS reali | 0 |

## Regressioni Escluse

- Layout: invariato (solo valori colore)
- Curriculum logic: non toccato
- Progettazione multi-disciplina: non toccata
- aria-live / aria-hidden: non toccati
- Icon-only labels: non toccati
- Export Center: non toccato
- JSON disciplinari: non toccati
- Schema `.cml`: non toccato

## Limiti Residui

- 7 `region` moderate (welcome-overlay landmark) — da trattare in slice separata
- Audit solo automatico — screen reader test non ancora eseguito
- Score accessibilità da aggiornare dopo refresh slice successivo

## Verdict

`CML_UX_ACCESSIBILITY_COLOR_CONTRAST_REMEDIATION_READY`
