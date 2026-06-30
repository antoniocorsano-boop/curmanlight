# CML-UX-ACCESSIBILITY-SCORE-REFRESH-POST-SCREEN-READER-STRUCTURAL

## Obiettivo

Consolidare lo stato documentale accessibilita dopo il gate strutturale screen reader `CML-UX-ACCESSIBILITY-SCREEN-READER-SMOKE-TEST`, mantenendo lo score a **76/100**.

Questa slice e' docs-only / score refresh / governance accessibilita. Non introduce fix runtime, non modifica score e non dichiara superato il gate reale con NVDA o VoiceOver.

## Stato iniziale

| Aspetto | Valore |
|---------|--------|
| Branch | `main` |
| HEAD iniziale | `e28cfa5` |
| Stato remoto | `main` allineato a `origin/main` |
| Slice precedente | `CML_ACCESSIBILITY_76_STRUCTURAL_SCREEN_READER_GATE_PUSHED` |
| Score corrente | 76/100 |
| Tipo slice | docs-only / score refresh / governance accessibilita |
| Push | non eseguito |

Untracked locali da escludere e non inclusi nella slice:

- `.env`
- `antigravity.config.json`
- `test-results/`
- `tools/smoke-hash-nav.mjs`

## Stato automatico accessibilita

| Controllo | Stato |
|-----------|-------|
| Lighthouse desktop | 96/100 |
| Lighthouse mobile | 96/100 |
| axe `color-contrast` | 0 serious |
| axe `region` | 0 atteso dopo remediation landmark |
| P0 automatici | 0 |
| P1 automatici | 0 |
| P2 automatici | 0 |
| P3 automatici | 0 |
| Runtime landmark | remediation gia registrata e pushata |

Lo stato automatico e' pulito e coerente con una baseline interna avanzata. Questo non basta pero' per superare una soglia >85 senza evidenza reale di screen reader.

## Risultato screen reader strutturale

Il gate precedente e' stato eseguito come smoke strutturale assistivo via Chrome DevTools Protocol, Accessibility Tree e navigazione tastiera.

| Area | Esito | Evidenza |
|------|-------|----------|
| Screen reader reale | non eseguito | NVDA non installato; VoiceOver non applicabile su Windows |
| Accessibility Tree | PASS | `banner`, `main`, `contentinfo`, `region: Benvenuto`, `navigation: Navigazione mobile` |
| Overlay iniziale | PASS con note | `welcome-overlay` esposto come region; focus trap non completa |
| Navigazione tastiera | PASS con note | controlli principali raggiungibili; overlay non confina il focus |
| Cambio tab/disciplina | PASS con note | stato live osservato; breadcrumb desktop temporaneamente stale |
| Export Center | PASS | sezione e pulsanti export raggiungibili |
| Errori JS runtime | PASS | 0 eccezioni runtime; solo 404 statici non bloccanti |

## Motivazione mantenimento score a 76/100

Lo score resta **76/100** perche':

- i controlli automatici sono puliti, ma non equivalgono a una validazione screen reader reale;
- il gate eseguito valida struttura, focus, DOM e Accessibility Tree, non la qualita dell'esperienza con NVDA o VoiceOver;
- sono stati documentati tre warning di usabilita assistiva ancora da verificare o correggere;
- la governance precedente richiede evidenza reale screen reader prima di difendere una baseline superiore a 85/100.

## Perche non si supera 85/100

La soglia >85 non e' ancora difendibile perche' manca almeno una sessione reale documentata con NVDA o VoiceOver. Inoltre restano aperti tre elementi che possono impattare l'esperienza assistiva:

1. overlay iniziale senza focus trap;
2. focus post-dismiss non esplicito;
3. breadcrumb desktop osservato non riallineato subito dopo cambio disciplina.

Questi elementi non riaprono P0/P1 automatici, ma impediscono di trasformare lo smoke strutturale in certificazione screen reader reale.

## Backlog residuo

| Slice candidata | Tipo | Scopo |
|-----------------|------|-------|
| `CML-UX-ACCESSIBILITY-OVERLAY-FOCUS-MANAGEMENT` | runtime microfix | focus trap leggero overlay e focus post-dismiss esplicito |
| `CML-UX-ACCESSIBILITY-BREADCRUMB-SYNC-AUDIT` | audit o microfix | verificare e, se confermato, riallineare breadcrumb dopo cambio disciplina |
| `CML-UX-ACCESSIBILITY-REAL-SCREEN-READER-TEST` | audit/report | sessione reale NVDA o VoiceOver prima di valutare score >85 |

## Prossime slice consigliate

Ordine consigliato:

1. `CML-UX-ACCESSIBILITY-OVERLAY-FOCUS-MANAGEMENT` per correggere focus trap e focus post-dismiss, se si decide di intervenire runtime.
2. `CML-UX-ACCESSIBILITY-BREADCRUMB-SYNC-AUDIT` per confermare il comportamento stale e decidere se serve microfix.
3. `CML-UX-ACCESSIBILITY-REAL-SCREEN-READER-TEST` con NVDA/VoiceOver reale per eventuale rivalutazione score.

La PR #4 resta separata finche la baseline accessibilita non e' stabilizzata.

## Invarianti rispettate

- Nessuna modifica runtime.
- Nessuna modifica a `index.html`.
- Nessuna modifica a `_published_snapshot/netlify-current/index.html`.
- Nessuna modifica a `manifest.json`.
- Nessuna modifica a `service-worker.js`.
- Nessuna modifica ad `assets/`.
- Nessuna modifica a `content/curriculum/`.
- Nessuna modifica a `tools/`.
- Nessuna modifica a export/import `.cml`.
- Nessuna modifica allo schema `.cml`.
- Nessuna modifica ai dati curricolari reali.
- Nessun deploy.
- Nessun push.
- Score non incrementato oltre 76/100.
- Gate reale screen reader non dichiarato superato.

## Verdict

`CML_UX_ACCESSIBILITY_SCORE_REFRESH_POST_SCREEN_READER_STRUCTURAL_READY`