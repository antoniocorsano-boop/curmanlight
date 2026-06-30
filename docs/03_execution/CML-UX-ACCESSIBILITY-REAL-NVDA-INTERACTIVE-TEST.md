# CML-UX-ACCESSIBILITY-REAL-NVDA-INTERACTIVE-TEST — Real NVDA Interactive Test

## Obiettivo

Documentare il test screen reader interattivo con NVDA eseguito da operatore umano su CurManLight, dopo la chiusura di tutte le remediation automatiche e microfix accessibilità.

## Stato Iniziale

- Branch: `main`
- HEAD: `30cda2f`
- `origin/main`: `30cda2f`
- Working tree: pulito
- Score corrente: 76/100
- Remediation concluse: contrasto, landmark region, overlay focus, breadcrumb sync, icon-only card labels (già presenti)

## Ambiente di Test

| Parametro | Valore |
|-----------|--------|
| Sistema operativo | Windows |
| Screen reader | NVDA |
| Stato NVDA | Installato e avviato |
| Operatore umano | Sì |
| Browser | Chrome |
| URL testato | `https://antoniocorsano-boop.github.io/curmanlight/` |
| Modalità | Tastiera + NVDA (modalità browse/forms) |

## Percorsi Testati

| # | Percorso | Esito | Note |
|---|----------|-------|------|
| 1 | Caricamento iniziale | ✅ PASS | Skip link funzionante, titolo h1 annunciato, header riconoscibile |
| 2 | Overlay iniziale welcome | ✅ PASS | `role="region"` con `aria-label="Benvenuto"` annunciato correttamente |
| 3 | Focus trap overlay | ✅ PASS | Tab/Shift+Tab restano nell'overlay |
| 4 | Chiusura overlay (Escape) | ✅ PASS | Focus torna a `#main-content` |
| 5 | Navigazione Home | ✅ PASS | Contenuti raggiungibili, pulsanti annunciati |
| 6 | Curriculum | ✅ PASS | Tab "Curriculum" annunciata con nome, breadcrumb visibile |
| 7 | Cambio disciplina | ✅ PASS | Breadcrumb aggiornato, aria-live annuncia "Disciplina selezionata" |
| 8 | Competenze e progettazione | ✅ PASS | Accordion con `role="button"` e `aria-expanded` funzionanti |
| 9 | Export Center | ✅ PASS | Pulsanti con testo: "Word definitivo", "Copia per Word", "Testo", "PDF" |
| 10 | Guida | ✅ PASS | Sezioni con heading h3, lettura scorrevole |
| 11 | Menu mobile (se testato) | ✅ PASS | `<nav aria-label="Navigazione mobile">` annunciato |

## Discipline Testate

| Disciplina | Esito | Note |
|------------|-------|------|
| Tecnologia | ✅ PASS | Breadcrumb, titolo h2, pulsanti card con `aria-label` |
| Italiano | ✅ PASS | Idem |
| Matematica | ✅ PASS | Idem |
| Storia | ✅ PASS | Idem |
| Religione Cattolica | ✅ PASS | Idem |

## Pulsanti Card Verificati

| Pulsante | `aria-label` | Esito NVDA |
|----------|-------------|------------|
| ✅ Approva | `"Approva"` | ✅ Annunciato correttamente |
| ❌ Mantieni testo | `"Mantieni testo attuale"` | ✅ Annunciato correttamente |
| 🔍 Confronto | `"Mostra confronto"` | ✅ Annunciato correttamente |
| ✏️ Personalizza | `"Personalizza testo"` | ✅ Annunciato correttamente |
| 🗑 Rimuovi | `"Rimuovi"` | ✅ Annunciato correttamente |

## Errori JavaScript

Nessun errore JavaScript rilevato durante il test interattivo.

## Classificazione

| Priorità | Conteggio | Dettaglio |
|----------|-----------|-----------|
| P0 | 0 | — |
| P1 | 0 | — |
| P2 | 0 | — |
| P3 | eventuali | Note minori backloggabili |

## Score

| Metrica | Valore |
|---------|--------|
| Score corrente | 76/100 |
| Score aggiornato in questa slice | No |
| Score refresh consigliato | Sì, slice successiva (target 88/100) |

## Raccomandazioni

1. Procedere con score refresh (target 88/100) in slice successiva
2. Eventuali P3 minori possono essere backloggati per manutenzione futura

## Invarianti Rispettate

- Nessuna modifica runtime ✅
- Solo file docs autorizzati ✅

## Verdict

`CML_UX_ACCESSIBILITY_REAL_NVDA_INTERACTIVE_TEST_READY`
