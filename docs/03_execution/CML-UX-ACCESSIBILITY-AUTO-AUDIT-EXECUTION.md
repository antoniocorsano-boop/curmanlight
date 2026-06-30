# CML-UX-ACCESSIBILITY-AUTO-AUDIT-EXECUTION — Esecuzione Audit Automatico Accessibilità

## Contesto

Primo audit automatico (axe/Lighthouse) su CurManLight secondo il piano `CML-UX-ACCESSIBILITY-EXTERNAL-AUDIT-PLAN`. Misurazione senza remediation.

## URL Testato

`https://antoniocorsano-boop.github.io/curmanlight/`

## Strumenti

- axe DevTools CLI 4.12.1 (Chrome headless 150)
- Lighthouse 11.x (Chrome 150)

## Risultati Lighthouse

### Desktop

| Aspetto | Valore |
|---------|--------|
| Punteggio | 96/100 |
| Audit superati | 23 |
| Audit falliti | 1 |
| Non applicabili | 52 |
| **URL** | `https://antoniocorsano-boop.github.io/curmanlight/` |

### Mobile

| Aspetto | Valore |
|---------|--------|
| Punteggio | 96/100 |
| Audit superati | 23 |
| Audit falliti | 1 |
| Non applicabili | 52 |

### Audit Fallito (desktop e mobile)

| Audit | Titolo | Descrizione |
|-------|--------|-------------|
| `color-contrast` | Background and foreground colors do not have a sufficient contrast ratio | Testo a basso contrasto. 9 elementi coinvolti (vedi axe). |

## Risultati axe

| Metrica | Valore |
|---------|--------|
| Violazioni totali | 16 |
| Tipi violazione | 2 (`color-contrast`, `region`) |
| Pagine testate | 1 |

### Violazione 1: `color-contrast` — 9 occorrenze

**Severità**: serious

**Elementi coinvolti**:
1. `.home-card-didattica > .home-card-header > .home-card-title`
2. `.dimmed:nth-child(3)`
3. `.dimmed:nth-child(4)`
4. `.home-card-note`
5. `.home-card-note > a[href="#"]:nth-child(1)`
6. `.home-microguide-footer`
7. `.home-footer > p`
8. `#mbb-curricolo`
9. `#mbb-didattica`

**Regola**: WCAG 2 AA — contrasto ≥ 4.5:1 per testo normale, ≥ 3:1 per testo grande.

### Violazione 2: `region` — 7 occorrenze

**Severità**: moderate

**Elementi coinvolti**:
1. `#welcome-overlay > div > div:nth-child(1)`
2. `#welcome-overlay > div > h2`
3. `#welcome-overlay > div > p:nth-child(3)`
4. `#welcome-overlay > div > div:nth-child(4)`
5. `#welcome-overlay > div > p:nth-child(5)`
6. `#welcome-overlay > div > p:nth-child(6)`
7. `p:nth-child(7)`

**Regola**: Tutti i contenuti devono essere contenuti in landmark (es. `<main>`, `<nav>`, `<aside>`).

## Analisi

| Criterio | Risultato |
|----------|-----------|
| Lighthouse ≥ 80 | PASS (96) |
| Lighthouse ≥ 90 | PASS (96) |
| axe critical = 0 | PASS |
| axe serious = 0 | FAIL (9 `color-contrast`) |
| axe moderate documentati | PASS (7 `region`) |

### Impatto su Score Policy

Per la score policy definita:
- **Score > 70**: raggiungibile (audit automatico documentato). Bloccato da decisione: attendere remediation.
- **Score 71–80**: NON raggiungibile finché 9 serious `color-contrast` sono aperti.
- **Score 81–85**: non applicabile (richiede screen reader test).
- **Score > 85**: non applicabile.

Lo score interno rimane **64/100** fino a remediation `color-contrast`.

## Remediation Consigliata

### P1: Contrasto colore (9 elementi, axe serious)

**Aree**:
- Home card didattica (header/title)
- Elementi `dimmed`
- Home card note + link
- Footer microguida e home footer
- Bottom bar mobile (`#mbb-curricolo`, `#mbb-didattica`)

**Azione**: aumentare contrasto colore. Probabilmente colore testuale troppo chiaro su sfondo.

### P2: Landmark `region` (7 elementi, welcome overlay)

**Azione**: avvolgere contenuto `welcome-overlay` in `<main>` o `<section>` con landmark. Impatto basso perché overlay è transitorio.

## Cosa Non È Stato Modificato

Nessun file runtime, JSON, schema, tool, asset o configurazione modificata.

## Verdict

`CML_UX_ACCESSIBILITY_AUTO_AUDIT_EXECUTION_READY`

Audit eseguito. Risultati documentati. Remediation proposta ma non applicata.
