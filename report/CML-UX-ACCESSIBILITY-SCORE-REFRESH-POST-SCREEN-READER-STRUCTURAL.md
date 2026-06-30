# CML-UX-ACCESSIBILITY-SCORE-REFRESH-POST-SCREEN-READER-STRUCTURAL - Report

## Sintesi esecutiva

La baseline accessibilita CurManLight resta confermata a **76/100** dopo il gate strutturale screen reader. I gate automatici risultano puliti e lo smoke assistivo ha verificato struttura, landmark, tastiera, overlay, cambio tab/disciplina, Export Center e menu mobile.

Non e' stato eseguito un test reale con NVDA o VoiceOver. Per questo motivo lo score non viene incrementato oltre 76/100 e la soglia >85 resta pendente.

## Tabella score

| Voce | Valore |
|------|--------|
| Score precedente | 76/100 |
| Score aggiornato | 76/100 |
| Delta | +0 |
| Stato | audit-ready interno avanzato |
| Motivo mancato incremento | gate screen reader reale non eseguito |
| Soglia >85 | non ancora difendibile |

## Tabella controlli automatici

| Controllo | Esito | Note |
|-----------|-------|------|
| Lighthouse desktop | PASS | 96/100 |
| Lighthouse mobile | PASS | 96/100 |
| axe `color-contrast` | PASS | 0 serious |
| axe `region` | PASS atteso | 0 atteso dopo remediation landmark |
| P0 automatici | PASS | 0 |
| P1 automatici | PASS | 0 |
| P2 automatici | PASS | 0 |
| P3 automatici | PASS | 0 |
| Errori JS runtime | PASS | 0 eccezioni reali nel gate strutturale precedente |

## Tabella gate screen reader

| Controllo | Stato | Evidenza |
|-----------|-------|----------|
| Screen reader reale | pendente | NVDA non installato; VoiceOver non applicabile su Windows |
| Smoke strutturale assistivo | completato | Chrome CDP, Accessibility Tree, tastiera |
| Landmark principali | PASS | `banner`, `main`, `contentinfo`, `region: Benvenuto`, mobile `navigation` |
| Overlay iniziale | PASS con note | region esposta; focus trap non completa |
| Navigazione tastiera | PASS con note | controlli principali raggiungibili |
| Cambio disciplina/tab | PASS con note | live status osservato; breadcrumb desktop da verificare |
| Export Center | PASS | sezione e controlli raggiungibili |
| Menu mobile | PASS | navigazione mobile esposta |

## Tabella backlog residuo

| Backlog | Priorita probabile | Tipo | Nota |
|---------|--------------------|------|------|
| `CML-UX-ACCESSIBILITY-OVERLAY-FOCUS-MANAGEMENT` | P2 | runtime microfix | focus trap overlay e focus post-dismiss esplicito |
| `CML-UX-ACCESSIBILITY-BREADCRUMB-SYNC-AUDIT` | P2/P3 | audit o microfix | confermare breadcrumb stale dopo cambio disciplina |
| `CML-UX-ACCESSIBILITY-REAL-SCREEN-READER-TEST` | gate | audit/report | necessario per valutare score >85 |

## Scope enforcement

Modificati solo i file documentali autorizzati:

- `docs/03_execution/CML-UX-ACCESSIBILITY-SCORE-REFRESH-POST-SCREEN-READER-STRUCTURAL.md`
- `report/CML-UX-ACCESSIBILITY-SCORE-REFRESH-POST-SCREEN-READER-STRUCTURAL.md`
- `docs/REPO-MOVELOG.md`

Non modificati:

- `index.html`
- `_published_snapshot/netlify-current/index.html`
- `manifest.json`
- `service-worker.js`
- `assets/`
- `content/curriculum/`
- `tools/`
- export/import `.cml`
- schema `.cml`
- dati curricolari reali

## Raccomandazioni

1. Mantenere la baseline remota a 76/100 finche non esiste evidenza reale NVDA o VoiceOver.
2. Trattare overlay focus management come micro-slice runtime separata, senza mescolarla al refresh score.
3. Verificare il breadcrumb stale con una slice audit dedicata prima di correggere runtime.
4. Pianificare `CML-UX-ACCESSIBILITY-REAL-SCREEN-READER-TEST` come gate decisivo per eventuale score >85.

## Verdict

`CML_UX_ACCESSIBILITY_SCORE_REFRESH_POST_SCREEN_READER_STRUCTURAL_READY`