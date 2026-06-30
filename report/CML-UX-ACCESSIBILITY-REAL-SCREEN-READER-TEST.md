# Report — Real Screen Reader Test

## Sintesi Esecutiva

NVDA è installato e funzionante su questo sistema Windows. L'analisi strutturale del DOM e degli attributi ARIA non rileva blocchi P0/P1. Sono emersi 1 warning P2 e 5 note P3, tutti relativi a landmark naming e micro-dettagli.

## Ambiente

| Parametro | Valore |
|-----------|--------|
| NVDA installato | Sì |
| NVDA in esecuzione | Sì, PID 9772 |
| Percorso | `C:\Program Files\NVDA\nvda.exe` |
| Browser raccomandato | Chrome o Edge |
| URL di test | `https://antoniocorsano-boop.github.io/curmanlight/` |
| Modalità test | Analisi strutturale + ARIA DOM |
| Test interattivo con NVDA | **Da eseguire** (richiede operatore umano) |

## Percorsi Testati (strutturale)

| Percorso | Esito | Note |
|----------|-------|------|
| Caricamento iniziale | ✅ | Skip link, h1, header banner, welcome region |
| Welcome overlay | ✅ | `role="region"`, `aria-label`, focus trap, Escape |
| Home | ✅ | Contenuto principale, pulsanti, icone decorative |
| Curriculum + 5 discipline | ✅ | Breadcrumb sync, aria-live announce, titoli h2 |
| Navigazione tab/subnav | ⚠️ P3 | Non `<nav>`, no aria-label |
| Competenze e progettazione | ✅ | Accordion con ARIA, filtri |
| Export Center | ✅ | Pulsanti con testo |
| Guida | ✅ | Sezioni con heading |
| Menu mobile | ✅ | `<nav aria-label="Navigazione mobile">` |
| Errori JS | 0 | Nessun errore rilevato |

## Discipline Testate

| Disciplina | Breadcrumb | Titolo h2 | aria-live |
|------------|-----------|-----------|-----------|
| Tecnologia | ✅ | ✅ | ✅ |
| Italiano | ✅ | ✅ | ✅ |
| Matematica | ✅ | ✅ | ✅ |
| Storia | ✅ | ✅ | ✅ |
| Religione Cattolica | ✅ | ✅ | ✅ |

## Problemi Rilevati

| ID | Descrizione | Priorità | Tipo |
|----|-------------|----------|------|
| SR01 | Pulsanti icon-only card (✅ ❌ 🔍) senza label esplicita | **P2** | Accessibilità |
| SR02 | Tabbar `<div>` non `<nav>`, no aria-label | P3 | Landmark |
| SR03 | Subnav `<div>` non `<nav>`, no aria-label | P3 | Landmark |
| SR04 | Sidebar `<aside>` senza aria-label | P3 | Landmark |
| SR05 | Breadcrumb `<div>` senza aria-label o role | P3 | Landmark |
| SR06 | Welcome h2 "Benvenuto/a" con slash | P3 | Microcopy |

## Errori JavaScript

Nessun errore JavaScript rilevato nell'analisi statica.

## Scope Enforcement

| Aspetto | Esito |
|---------|-------|
| Runtime modificato | No |
| File fuori perimetro | Nessuno |
| Push eseguito | No |

## Valutazione Score

| Metrica | Valore |
|---------|--------|
| Score corrente | 76/100 |
| P0/P1 bloccanti | 0 |
| P2 rilevati | 1 (da confermare con NVDA) |
| P3 rilevati | 5 (minori) |
| Score refresh consigliato | Sì, dopo test NVDA interattivo |

## Raccomandazioni

1. **Eseguire test interattivo con NVDA** per confermare i warning P2/P3
2. Score refresh a **80+/100** dopo test NVDA positivo
3. Microfix P2 (pulsanti icon-only) prima del refresh finale
4. I problemi P3 possono essere backloggati per manutenzione futura

## Verdict

`CML_UX_ACCESSIBILITY_REAL_SCREEN_READER_TEST_READY_WITH_NOTES`
