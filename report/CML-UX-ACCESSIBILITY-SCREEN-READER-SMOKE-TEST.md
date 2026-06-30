# CML-UX-ACCESSIBILITY-SCREEN-READER-SMOKE-TEST - Report

## Sintesi esecutiva

Gate screen reader eseguito come **smoke strutturale assistivo**, non come test reale NVDA/VoiceOver. NVDA non risulta installato/attivo sulla macchina Windows; VoiceOver non e' applicabile.

Il runtime espone correttamente i landmark principali e il nuovo `welcome-overlay` come `region:Benvenuto`. La navigazione tastiera e i percorsi principali risultano utilizzabili, con note non bloccanti su focus trap overlay, focus post-dismiss e breadcrumb dopo cambio disciplina.

Score non aggiornato: resta **76/100**.

## Tabella controlli

| Controllo | Esito | Evidenza |
|-----------|-------|----------|
| Branch/HEAD | PASS | `main`, HEAD `27836d1` iniziale |
| Runtime invariato | PASS | nessuna modifica a HTML/runtime |
| Screen reader reale | N/D | NVDA non rilevato; VoiceOver non disponibile su Windows |
| Accessibility tree | PASS | `banner`, `main`, `contentinfo`, `region:Benvenuto`, mobile `navigation:Navigazione mobile` |
| Overlay iniziale | PASS con nota | region e label presenti; focus trap non verificata come completa |
| Tastiera | PASS con nota | Tab raggiunge controlli principali; focus entra anche nella pagina sottostante con overlay presente |
| Cambio tab | PASS | Curriculum, Competenze, Export, Guida, Home attivabili |
| Cambio disciplina | PASS con nota | live status annuncia disciplina; breadcrumb stale nel percorso desktop osservato |
| Export Center | PASS | 18 pulsanti export rilevati |
| Errori JS | PASS | 0 eccezioni reali; 404 statici non bloccanti |

## Percorsi testati

| Percorso | Esito | Note |
|----------|-------|------|
| Caricamento Home | PASS | contenuto presente, pagina non blank |
| Overlay iniziale | PASS con nota | `role="region"`, `aria-label="Benvenuto"`, bottoni presenti |
| Dismiss overlay | PASS con nota | overlay rimosso; focus management migliorabile |
| Navigazione tastiera iniziale | PASS con nota | skip link, header, tabbar e discipline raggiungibili |
| Curriculum | PASS | contenuto Curriculum visibile |
| Cambio disciplina Matematica | PASS con nota | `a11y-status`: `Disciplina selezionata: Matematica` |
| Competenze e progettazione | PASS | sezione visibile dopo cambio tab |
| Export Center | PASS | sezione e pulsanti presenti |
| Guida | PASS | sezione visibile |
| Mobile Curriculum/Competenze/Export/Menu | PASS | bottom bar e menu mobile presenti nell'AX tree |

## Esito landmark

PASS.

Accessibility tree desktop iniziale:

- `banner`
- `complementary`
- `main`
- `contentinfo`
- `region:Benvenuto`

Accessibility tree mobile iniziale:

- `banner`
- `main`
- `contentinfo`
- `region:Benvenuto`
- `navigation:Navigazione mobile`

## Esito tastiera

PASS con nota.

Il focus da `Tab` raggiunge:

- skip link `Salta al contenuto principale`;
- `Dettagli` header;
- tabbar Home/Curriculum/Competenze/Esportazioni/Guida;
- discipline sidebar.

Nota: con overlay ancora visibile, il focus non resta confinato nei pulsanti dell'overlay. Questo e' documentato come warning e non corretto in questa slice per vincolo audit/report only.

## Esito overlay iniziale

PASS con nota.

- `#welcome-overlay` presente al caricamento con profilo pulito.
- `role="region"` presente.
- `aria-label="Benvenuto"` presente.
- Bottoni `Configura dati` e `Inizia subito` esposti nell'AX tree.
- `Inizia subito` rimuove overlay.
- Focus post-dismiss non viene riposizionato esplicitamente.

## Esito cambio tab/disciplina

PASS con nota.

- Cambio tab Curriculum/Competenze/Export/Guida/Home riuscito.
- Cambio disciplina a Matematica riuscito.
- `a11y-status` annuncia `Disciplina selezionata: Matematica`.
- Nota: nel percorso desktop osservato, breadcrumb resta temporaneamente su `Curriculum — Consultazione — Italiano` dopo il cambio disciplina e prima del cambio tab successivo.

## Esito export center

PASS.

Export Center visibile e con 18 pulsanti rilevati, inclusi formati Word, testo, PDF, bozza, report e backup.

## Errori JS

| Tipo | Esito |
|------|-------|
| Eccezioni runtime | 0 |
| Console error app | 0 |
| 404 statici | presenti, non bloccanti |

I 404 osservati sono risorse statiche locali/fav icon e non bloccano il runtime.

## Scope enforcement

Modificati solo:

- `docs/03_execution/CML-UX-ACCESSIBILITY-SCREEN-READER-SMOKE-TEST.md`
- `report/CML-UX-ACCESSIBILITY-SCREEN-READER-SMOKE-TEST.md`
- `docs/REPO-MOVELOG.md`

Non modificati:

- `index.html`
- `_published_snapshot/netlify-current/index.html`
- manifest/service worker/assets
- `content/curriculum/`
- `tools/`
- schema/export/import `.cml`

## Raccomandazioni

1. Eseguire una sessione reale con NVDA + Firefox o Chrome prima di dichiarare score >85.
2. Valutare in una futura slice runtime una focus trap leggera per `welcome-overlay` oppure almeno focus iniziale sui bottoni overlay.
3. Valutare focus esplicito post-dismiss verso `main-content` o heading Home.
4. Verificare il refresh breadcrumb dopo cambio disciplina in Curriculum.

## Verdict

`CML_UX_ACCESSIBILITY_SCREEN_READER_SMOKE_TEST_READY_WITH_NOTES`
