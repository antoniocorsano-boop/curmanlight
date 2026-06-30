# Report — Esecuzione Audit Automatico Accessibilità CurManLight

## Riepilogo Esecutivo

Primo audit automatico (axe + Lighthouse) completato su CurManLight. Risultati buoni ma non impeccabili: **Lighthouse 96/100**, axe rileva **16 violazioni** (9 serious `color-contrast` + 7 moderate `region`). Lo score interno 64/100 resta invariato per policy: non si dichiara miglioramento senza zero serious.

## Risultati Sintetici

| Strumento | Risultato | Soglia | Verdetto |
|-----------|-----------|--------|----------|
| Lighthouse Desktop | 96/100 | ≥ 80 accettabile, ≥ 90 obiettivo | PASS |
| Lighthouse Mobile | 96/100 | ≥ 80 accettabile, ≥ 90 obiettivo | PASS |
| axe critical | 0 | 0 | PASS |
| axe serious | 9 (`color-contrast`) | 0 | FAIL |
| axe moderate | 7 (`region`) | documentati | PASS |

## Cosa Funziona

Tutti i miglioramenti precedenti sono confermati da Lighthouse:
- Skip link
- ARIA accordion
- ARIA live region
- Emoji decorative `aria-hidden`
- Icon-only labels con `aria-label`
- Navigazione da tastiera base (nessun focus trap rilevato)

## Cosa Non Funziona

### P1: Contrasto Colore (9 elementi, serious)

Aree home page e bottom bar mobile. Colore testo troppo chiaro su sfondo chiaro. Remediation semplice (cambiare valore colore CSS).

### P2: Landmark Region (7 elementi, moderate)

Contenuto `welcome-overlay` non racchiuso in landmark. Remediation semplice ma impatto basso (overlay transitorio).

## Raccomandazione

1. Aprire slice runtime `CML-UX-ACCESSIBILITY-COLOR-CONTRAST-REMEDIATION` per fixare i 9 elementi con contrasto insufficiente.
2. Contestualmente o separatamente, slice `CML-UX-ACCESSIBILITY-LANDMARK-REGION` per `welcome-overlay`.
3. Dopo remediation, rieseguire audit e aggiornare score.
4. Poi procedere con screen reader smoke test.

## Rischi Residui

| Rischio | Note |
|---------|------|
| `color-contrast` non fixato | Score bloccato sotto 71/100 |
| `region` landmark non fixato | Violazione moderate, non blocca score ma va documentata |
| Solo strumenti automatici | 20-50% copertura — serve screen reader test umano |
| Welcome overlay escluso da landmark | Transitorio, ma rilevabile in audit esterno |
