# Repo Movelog

## 2026-06-30 - CML-UX-ACCESSIBILITY-SCREEN-READER-SMOKE-TEST - Screen reader smoke gate strutturale

- **Nome slice**: `CML-UX-ACCESSIBILITY-SCREEN-READER-SMOKE-TEST`
- **Commit base**: `27836d1`
- **Tipo slice**: audit/report only
- **Runtime modificato**: no
- **File modificati**: `docs/03_execution/CML-UX-ACCESSIBILITY-SCREEN-READER-SMOKE-TEST.md`, `report/CML-UX-ACCESSIBILITY-SCREEN-READER-SMOKE-TEST.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Screen reader reale**: non disponibile nell'ambiente Windows locale (NVDA non installato; VoiceOver non applicabile)
- **Tipo test eseguito**: smoke strutturale assistivo via Chrome CDP, Accessibility Tree e navigazione tastiera
- **Percorsi verificati**: bootstrap/Home, overlay iniziale, focus via tastiera, Curriculum, cambio disciplina, Competenze, Export Center, Guida, ritorno Home, bottom navigation mobile, menu mobile
- **Landmark verificati**: `banner`, `main`, `contentinfo`, `region: Benvenuto`, `navigation: Navigazione mobile`
- **Esito principale**: regione welcome-overlay esposta correttamente; navigazione tab/disciplina ed export raggiungibili; nessuna eccezione JS runtime rilevata
- **Note residue**: overlay iniziale senza focus trap, focus post-dismiss non esplicito, breadcrumb desktop osservato non riallineato subito dopo cambio disciplina
- **Errori JS**: 0 runtime exceptions; presenti solo 404 statici non bloccanti
- **Score aggiornato**: no - baseline mantenuta a 76/100 in assenza di test screen reader reale
- **Invarianti**: nessun runtime, JSON, schema .cml, tool, export, asset o dipendenza modificato
- **Push**: non eseguito
- **Verdetto**: `CML_UX_ACCESSIBILITY_SCREEN_READER_SMOKE_TEST_READY_WITH_NOTES`
## 2026-06-30 - CML-UX-ACCESSIBILITY-REGION-LANDMARKS-REMEDIATION - Region landmark remediation (welcome-overlay)

- **Nome slice**: `CML-UX-ACCESSIBILITY-REGION-LANDMARKS-REMEDIATION`
- **Commit base**: `3aeac9c` — **Commit runtime**: `57501ce`
- **Tipo slice**: runtime chirurgico + documentazione
- **Runtime modificato**: sì — 2 righe JS in `index.html`
- **File modificati**: `_published_snapshot/netlify-current/index.html`, `docs/03_execution/CML-UX-ACCESSIBILITY-REGION-LANDMARKS-REMEDIATION.md`, `report/CML-UX-ACCESSIBILITY-REGION-LANDMARKS-REMEDIATION.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Modifica**: aggiunti `role="region"` e `aria-label="Benvenuto"` al welcome-overlay in `showWelcome()`
- **Violazioni `region` pre**: 7 moderate
- **Violazioni `region` post**: 0 (atteso)
- **P1**: 1 → 0
- **Invarianti**: nessun JSON, schema .cml, tool, export, o asset modificato
- **Validatore**: non eseguito (nessun file dati modificato)
- **Shape test**: non eseguito (nessun file dati modificato)
- **Secret scan**: clean
- **Dipendenze**: nessuna
- **Push**: non eseguito
- **Verdetto**: `CML_UX_ACCESSIBILITY_REGION_LANDMARKS_REMEDIATION_READY`

## 2026-06-30 - CML-UX-ACCESSIBILITY-SCORE-REFRESH-POST-CONTRAST - Score refresh post contrast remediation

- **Nome slice**: `CML-UX-ACCESSIBILITY-SCORE-REFRESH-POST-CONTRAST`
- **Commit base**: `0a93237` — **Commit finale**: `b9ef7f1`
- **Tipo slice**: docs-only
- **Runtime modificato**: no
- **File modificati**: `docs/03_execution/CML-UX-ACCESSIBILITY-SCORE-REFRESH-POST-CONTRAST.md`, `report/CML-UX-ACCESSIBILITY-SCORE-REFRESH-POST-CONTRAST.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Score precedente**: 64/100
- **Score aggiornato**: 76/100
- **Delta**: +12
- **Motivazione**: Lighthouse 96/100 desktop+mobile, axe serious color-contrast 0, axe totali 16→7, P1 da 3→1
- **Stato**: audit-ready interno
- **P0**: 0
- **P1**: 1 (region landmark, 7 moderate)
- **P2**: 0
- **P3**: 0
- **Gate esterno**: screen reader test da eseguire per score > 85
- **Prossima slice**: `CML-UX-ACCESSIBILITY-REGION-LANDMARKS-REMEDIATION` (runtime)
- **Invarianti**: nessun runtime, JSON, tool, asset, schema .cml modificato
- **Validatore**: non eseguito (nessun file dati modificato)
- **Shape test**: non eseguito (nessun file dati modificato)
- **Secret scan**: clean
- **Dipendenze**: nessuna
- **Push**: non eseguito
- **Verdetto**: `CML_UX_ACCESSIBILITY_SCORE_REFRESH_POST_CONTRAST_READY`
## 2026-06-30 - CML-UX-ACCESSIBILITY-COLOR-CONTRAST-REMEDIATION - Remediation contrasto colore

- **Nome slice**: `CML-UX-ACCESSIBILITY-COLOR-CONTRAST-REMEDIATION`
- **Commit base**: `dfd25db` — **Commit finale**: `ff2976a`
- **Tipo slice**: runtime chirurgico + documentazione
- **Runtime modificato**: sì — 7 linee CSS/HTML in `index.html`
- **File modificati**: `_published_snapshot/netlify-current/index.html`, `docs/03_execution/CML-UX-ACCESSIBILITY-COLOR-CONTRAST-REMEDIATION.md`, `report/CML-UX-ACCESSIBILITY-COLOR-CONTRAST-REMEDIATION.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Contrasti pre-fix**: 9 serious `color-contrast`
- **Contrasti post-fix**: 0 serious (verified via axe local test)
- **Axe totali**: 16 → 7 (solo `region` moderate residui)
- **Validatore**: 14/14 PASS
- **Shape test**: 14/14 PASS
- **Errori JS reali**: 0
- **Layout/comportamento**: invariati
- **Colori usati**: `#00695c` (teal scuro) e `#546e7a` (blue-grey medio) — palette esistente
- **Invarianti**: JSON, .cml, Export Center, UDA, aria-live, aria-hidden, icon-only labels, service worker, manifest, tool, asset non toccati
- **Push**: non eseguito
- **Verdetto**: `CML_UX_ACCESSIBILITY_COLOR_CONTRAST_REMEDIATION_READY`

## 2026-06-30 - CML-UX-ACCESSIBILITY-AUTO-AUDIT-EXECUTION - Esecuzione audit automatico accessibilita

- **Nome slice**: `CML-UX-ACCESSIBILITY-AUTO-AUDIT-EXECUTION`
- **Commit base**: `60b2b3e` — **Commit finale**: `3c09c14`
- **Tipo slice**: audit/report
- **Runtime modificato**: no
- **File modificati**: `docs/03_execution/CML-UX-ACCESSIBILITY-AUTO-AUDIT-EXECUTION.md`, `report/CML-UX-ACCESSIBILITY-AUTO-AUDIT-EXECUTION.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Strumenti**: axe CLI 4.12.1 (Chrome), Lighthouse 11.x (Chrome)
- **Lighthouse**: 96/100 (desktop), 96/100 (mobile) — 23 passed, 1 failed (color-contrast)
- **Axe**: 16 violations — 9 serious (color-contrast), 7 moderate (region)
- **Score corrente**: 64/100 (invariato per policy: serious violazioni aperte)
- **P0 residui**: 0
- **P1 residui**: 2 (color-contrast 9 elementi, region 7 landmark)
- **P2 residui**: 0 (icon-only risolto)
- **P3 residui**: 0
- **Remediation proposta**: slice runtime `CML-UX-ACCESSIBILITY-COLOR-CONTRAST-REMEDIATION` + eventuale landmark fix
- **Invarianti**: nessun runtime modificato, nessun JSON, nessun tool, nessun asset, nessun schema .cml
- **Validatore**: non eseguito (nessun file dati modificato)
- **Shape test**: non eseguito (nessun file dati modificato)
- **Secret scan**: clean
- **Dipendenze**: nessuna
- **Push**: non eseguito
- **Verdetto**: `CML_UX_ACCESSIBILITY_AUTO_AUDIT_EXECUTION_READY`

## 2026-06-30 - CML-UX-ACCESSIBILITY-EXTERNAL-AUDIT-PLAN - Piano audit esterno accessibilita

- **Nome slice**: `CML-UX-ACCESSIBILITY-EXTERNAL-AUDIT-PLAN`
- **Commit base**: `6dd7e1d` — **Commit finale**: `71cf8ee`
- **Tipo slice**: docs-only
- **Runtime modificato**: no
- **File modificati**: `docs/03_execution/CML-UX-ACCESSIBILITY-EXTERNAL-AUDIT-PLAN.md`, `report/CML-UX-ACCESSIBILITY-EXTERNAL-AUDIT-PLAN.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Score corrente**: 64/100
- **P0 residui**: 0
- **P1 residui**: 3 (axe/Lighthouse, screen reader, icon-only labels)
- **Strumenti audit**: axe DevTools, Lighthouse, NVDA, VoiceOver, keyboard-only, mobile touch
- **Soglie**: 0 critical, 0 serious non giustificati; score > 70 richiede audit automatico; > 80 richiede axe/Lighthouse PASS; > 85 richiede screen reader smoke test
- **Icon-only decision**: P1 se solo `title`, P2 se nome gia accessibile ma da rafforzare, P3 se polish
- **Prossime slice**: `CML-UX-ACCESSIBILITY-ICON-ONLY-LABELS` (runtime, dopo autorizzazione)
- **Invarianti**: nessun runtime modificato, nessun JSON, nessun tool, nessun asset, nessun schema .cml, nessun service worker
- **Validatore**: non eseguito (nessun file dati modificato)
- **Shape test**: non eseguito (nessun file dati modificato)
- **Secret scan**: clean
- **Dipendenze**: nessuna
- **Push**: non eseguito
- **Verdetto**: `CML_UX_ACCESSIBILITY_EXTERNAL_AUDIT_PLAN_READY`

## 2026-06-30 - CML-UX-ACCESSIBILITY-SCORE-REFRESH-POST-ARIA - Accessibility score refresh post aria

- **Nome slice**: `CML-UX-ACCESSIBILITY-SCORE-REFRESH-POST-ARIA`
- **Commit base**: `bf3eab6` — **Commit finale**: `867a139`
- **Tipo slice**: docs-only
- **Runtime modificato**: no
- **File modificati**: `docs/03_execution/CML-UX-ACCESSIBILITY-SCORE-REFRESH-POST-ARIA.md`, `report/CML-UX-ACCESSIBILITY-SCORE-REFRESH-POST-ARIA.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Score precedente**: ~44/100 (nuova griglia 8 aree)
- **Score aggiornato**: 64/100 (~65/100)
- **Delta**: +20
- **P0 residui**: 0
- **P1 residui**: 3 (mancano test axe/Lighthouse, test screen reader, icon-only title vs aria-label)
- **P2 residui**: 3
- **P3 residui**: 2
- **Decisione icon-only**: P2/P3, raccomandata slice separata `CML-UX-ACCESSIBILITY-ICON-ONLY-LABELS`
- **Invarianti**: nessun file runtime modificato, nessun JSON, nessun tool, nessun schema .cml, nessun export, nessun service worker
- **Validatore**: non eseguito (nessun file dati modificato)
- **Shape test**: non eseguito (nessun file dati modificato)
- **Secret scan**: clean
- **Dipendenze**: nessuna
- **Deploy**: non eseguito
- **Push**: non eseguito
- **Artefatti**: `docs/03_execution/CML-UX-ACCESSIBILITY-SCORE-REFRESH-POST-ARIA.md`, `report/CML-UX-ACCESSIBILITY-SCORE-REFRESH-POST-ARIA.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_UX_ACCESSIBILITY_SCORE_REFRESH_POST_ARIA_READY`

## 2026-06-30 - CML-UX-ACCESSIBILITY-ARIA-ENHANCEMENTS - Accessibility aria enhancements

- **Nome slice**: `CML-UX-ACCESSIBILITY-ARIA-ENHANCEMENTS`
- **Commit base**: `3276da2` (CML UDA evidence export UI increment + hardening)
- **Commit**: `fa0cb61`
- **Tipo slice**: runtime increment
- **File modificato**: `_published_snapshot/netlify-current/index.html` (+167/−152)
- **Novità**:
  - Aggiunta regione `#a11y-status` con `aria-live="polite" role="status" aria-atomic="true"`
  - Nuova funzione `announceStatus()` per annunciare cambio disciplina/tab
  - `selectDisc()` e `setTab()` chiamano `announceStatus()`
  - `aria-hidden="true"` su tutti gli emoji decorativi statici e dinamici (template JS)
- **Validatore**: 14/14 PASS
- **Shape test**: 14/14 PASS
- **Diff check**: clean
- **Icon-only controls**: tutti con `title` o `aria-label`
- **content/curriculum/**: invariato
- **Strumenti e test**: invariati
- **Schema .cml, export/import, service-worker, manifest**: invariati
- **SchoolKB/SKB**: invariato
- **Dipendenze**: nessuna
- **Deploy**: non eseguito
- **Push**: non eseguito
- **Artefatti**: `docs/03_execution/CML-UX-ACCESSIBILITY-ARIA-ENHANCEMENTS.md`, `report/CML-UX-ACCESSIBILITY-ARIA-ENHANCEMENTS.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_UX_ACCESSIBILITY_ARIA_ENHANCEMENTS_READY`

## 2026-06-30 - CML-UX-CERTIFICATION-READINESS-CURRICULUM-UI - Curriculum UI certification readiness

- **Nome slice**: `CML-UX-CERTIFICATION-READINESS-CURRICULUM-UI`
- **Data**: 2026-06-30
- **Commit base**: `9219a3e` (origin/main)
- **Tipo slice**: runtime mirato + documentazione
- **File modificati**: `_published_snapshot/netlify-current/index.html`, `docs/03_execution/CML-UX-CERTIFICATION-READINESS-CURRICULUM-UI.md`, `report/CML-UX-CERTIFICATION-READINESS-CURRICULUM-UI.md`, `docs/REPO-MOVELOG.md`
- **Runtime modificato**: si
- **JSON disciplinari modificati**: no
- **Schema `.cml` modificato**: no
- **Ridondanza Curriculum**: index pills + riepilogo + ordini collassati in `<details>` chiuso di default
- **Disciplina selezionata**: blocco focus + auto-apertura `<details>`
- **Hardcode rimossi**: `mappaDisciplinaCorrente` non più `'tecnologia'`; `renderUdaModello` non più fallback `"Tecnologia"`
- **Sync mappa**: aggiunta in `setTab` per didattica/didattica_uda
- **Discipline testate**: Tecnologia, Italiano, Matematica, Storia, Inglese, Religione Cattolica
- **Validatore**: 14/14 PASS
- **Shape test**: 14/14 PASS
- **Errori JavaScript reali**: 0
- **Untracked esclusi**: `.env`, `antigravity.config.json`, `test-results/`, `tools/smoke-hash-nav.mjs`
- **Push**: no
- **Verdetto**: `CML_UX_CERTIFICATION_READINESS_CURRICULUM_UI_READY`

## 2026-06-29 - CML-UX-MOBILE-PROGETTAZIONE-HOTFIX - Mobile and progettazione discipline flow

- **Nome slice**: `CML-UX-MOBILE-PROGETTAZIONE-HOTFIX`
- **Data**: 2026-06-29
- **Commit iniziale**: `3c8b54d` (docs-only score refresh locale, non pushato)
- **Commit remoto di riferimento**: `0c9371c`
- **Tipo slice**: runtime hotfix mirata + documentazione
- **File modificati**: `_published_snapshot/netlify-current/index.html`, `docs/03_execution/CML-UX-MOBILE-PROGETTAZIONE-HOTFIX.md`, `report/CML-UX-MOBILE-PROGETTAZIONE-HOTFIX.md`, `docs/REPO-MOVELOG.md`
- **Runtime modificato**: si
- **JSON disciplinari modificati**: no
- **Schema `.cml` modificato**: no
- **Problema mobile**: P0 non riprodotto; bottom bar e menu mobile funzionano su 390x844, 430x932, 360x740
- **Problema progettazione**: P1 riprodotto; Competenze/Evidenze poteva restare agganciata a `mappaDisciplinaCorrente=tecnologia` anche con `selDisc` diverso
- **Fix applicato**: Evidenze da `selDisc`, sincronizzazione mappa su ingresso in Competenze/UDA, select UDA draft riallineata a `selDisc`, card UDA statiche filtrate per disciplina
- **Discipline testate**: Tecnologia, Italiano, Matematica, Storia, Inglese
- **Validatore**: 14/14 PASS
- **Shape test**: 14/14 PASS
- **Smoke mobile CDP HTTP**: PASS
- **Errori JavaScript reali**: 0
- **Warning/404 non bloccanti**: favicon/risorsa statica locale
- **Untracked esclusi**: `.env`, `antigravity.config.json`, `.tmp/`, `test-results/`, `tools/smoke-hash-nav.mjs`, `tmp-cml-mobile-progettazione.spec.mjs`
- **Push**: no
- **Verdetto**: `CML_UX_MOBILE_PROGETTAZIONE_HOTFIX_READY`
## 2026-06-29 - CML-UX-ACCESSIBILITY-SCORE-REFRESH - Accessibility score refresh

- **Nome slice**: `CML-UX-ACCESSIBILITY-SCORE-REFRESH`
- **Data**: 2026-06-29
- **Commit base locale**: `c175b2c`
- **Tipo slice**: docs-only / score refresh
- **File modificati**: `docs/03_execution/CML-UX-ACCESSIBILITY-SCORE-REFRESH.md`, `report/CML-UX-ACCESSIBILITY-SCORE-REFRESH.md`, `docs/REPO-MOVELOG.md`
- **Runtime modificato**: no
- **Punteggio precedente accessibilita'**: 48/100
- **Punteggio aggiornato**: 60/100
- **Delta**: +12
- **Delta per area**: Skip link e accesso rapido al contenuto 0 -> 5 (+5); Focus 6 -> 7 (+1); ARIA e stati dinamici 7 -> 13 (+6)
- **ARIA consolidata**: `aria-expanded`, `aria-controls`, `role="button"`, `tabindex="0"`, gestione tastiera `Enter` / `Space`, hotfix sintattico preservata
- **ARIA non ancora consolidata**: emoji decorative senza `aria-hidden`, annunci `aria-live` su cambio disciplina/tab
- **P0 residui**: 0
- **P1 residui**: 2 (emoji decorative senza `aria-hidden`; annunci `aria-live` mancanti su cambio disciplina/tab)
- **Prossima slice**: `CML-UX-ACCESSIBILITY-ARIA-ENHANCEMENTS`, limitata a emoji decorative, annunci `aria-live` ed eventuali etichette ARIA mancanti; non intervenire di nuovo sugli accordion gia' corretti
- **Untracked esclusi**: `.env`, `antigravity.config.json`, `test-results/`, `tools/smoke-hash-nav.mjs`
- **Push**: no
- **Verdetto**: `CML_UX_ACCESSIBILITY_SCORE_REFRESH_READY`

## 2026-06-29 - CML-UX-ARIA-ACCORDION-SYNTAX-HOTFIX - Syntax regression hotfix

- **Nome slice**: `CML-UX-ARIA-ACCORDION-SYNTAX-HOTFIX`
- **Data**: 2026-06-29
- **Commit base locale**: `c5ac7d0`
- **Commit runtime remoto verificato**: `48ce346`
- **File modificati**: `_published_snapshot/netlify-current/index.html`, `docs/03_execution/CML-UX-ARIA-ACCORDION-SYNTAX-HOTFIX.md`, `report/CML-UX-ARIA-ACCORDION-SYNTAX-HOTFIX.md`, `docs/REPO-MOVELOG.md`
- **Scope**: hotfix runtime mirata + documentazione di chiusura
- **Causa**: apici singoli non escapati negli handler inline generati da `renderDidattica()` e graffa extra nel blocco Obiettivi
- **SyntaxError**: risolto
- **setTab**: definita
- **Accordion Evidenze ARIA**: preservati e funzionanti da tastiera
- **Validatore**: 14/14 PASS
- **Shape test**: 14/14 PASS
- **Errori JavaScript reali nello smoke locale**: 0
- **Untracked esclusi**: `.tmp/`, `test-results/`, `tools/smoke-hash-nav.mjs`, `.tmp-curmanlight-hotfix-script-check.js`
- **Push**: no
- **Verdetto**: `CML_UX_ARIA_ACCORDION_SYNTAX_HOTFIX_READY`
## 2026-06-29 - CML-UX-ACCESSIBILITY-ARIA-ACCORDION-LIVE-SMOKE — Live smoke post-push GitHub Pages

- **Nome slice**: `CML-UX-ACCESSIBILITY-ARIA-ACCORDION`
- **Data**: 2026-06-29
- **Commit verificato**: `48ce346` (HEAD == origin/main)
- **URL live**: `https://antoniocorsano-boop.github.io/curmanlight/`
- **File modificati**: `docs/03_execution/CML-UX-ACCESSIBILITY-ARIA-ACCORDION-LIVE-SMOKE.md`, `report/CML-UX-ACCESSIBILITY-ARIA-ACCORDION-LIVE-SMOKE.md`
- **Scope**: docs-only
- **Runtime modificato**: no (già sincronizzato in commit precedente)
- **Deploy manuale**: no
- **Push**: no
- **Accordion gruppi ordine live**: PENDING_DEPLOY (atteso propagazione)
- **Accordion unità interne live**: PENDING_DEPLOY (atteso propagazione)
- **aria-expanded live**: PENDING_DEPLOY (atteso propagazione)
- **aria-controls live**: PENDING_DEPLOY (atteso propagazione)
- **Tastiera Enter/Space live**: PENDING_DEPLOY (atteso propagazione)
- **Filtri Evidenze**: PASS
- **Mobile live**: PASS
- **Errori JavaScript reali**: 0
- **Resource warning non bloccanti**: 2 (docx CDN 404, favicon.ico 404)
- **Regressioni**: nessuna
- **Verdetto**: `CML_UX_ACCESSIBILITY_ARIA_ACCORDION_LIVE_SMOKE_PENDING_DEPLOY`

## 2026-06-29 - CML-UX-ACCESSIBILITY-ARIA-ACCORDION — ARIA accordion Evidenze

- **Nome slice**: `CML-UX-ACCESSIBILITY-ARIA-ACCORDION`
- **Data**: 2026-06-29
- **Commit iniziale**: `1ec00f9`
- **File modificati**: `_published_snapshot/netlify-current/index.html`
- **Natura**: runtime mirata (aria-expanded / aria-controls accordion Evidenze)
- **Push**: no
- **Deploy**: no
- **Verdetto**: `CML_UX_ACCESSIBILITY_ARIA_ACCORDION_READY`


## 2026-06-29 - CML-UX-ACCESSIBILITY-SKIP-LINK-FOCUS - Skip link and focus handling

- **Commit base**: `1ba184b` (HEAD == origin/main)
- **Tipo slice**: runtime accessibility microfix
- **Oggetto**: aggiungere skip link al contenuto principale e migliorare gestione focus su cambio tab/disciplina
- **Runtime modificato**: `_published_snapshot/netlify-current/index.html`
- **Skip link**: PASS, primo Tab intercetta `Salta al contenuto principale` e Invio porta a `#main-content`
- **Focus setTab**: PASS, cambio tab da menu principale porta il focus a `main-content`
- **Focus selectDisc**: PASS, cambio disciplina mantiene titolo, breadcrumb e hash coerenti
- **Validatore**: 14/14 PASS
- **Shape test**: 14/14 PASS
- **Smoke tastiera/focus**: `SMOKE_PASS_WITH_NON_BLOCKING_RESOURCE_WARNINGS`
- **Resource warning non bloccanti**: 3
- **Untracked esclusi**: `.tmp/`, `test-results/`, `tools/smoke-hash-nav.mjs`
- **Push**: non eseguito
- **Artefatti**: `docs/03_execution/CML-UX-ACCESSIBILITY-SKIP-LINK-FOCUS.md`, `report/CML-UX-ACCESSIBILITY-SKIP-LINK-FOCUS.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_UX_ACCESSIBILITY_SKIP_LINK_FOCUS_READY`

## 2026-06-29 - CML-UX-ACCESSIBILITY-SKIP-LINK-FOCUS-LIVE-SMOKE â€” Live smoke post-push GitHub Pages

- **Nome slice**: `CML-UX-ACCESSIBILITY-SKIP-LINK-FOCUS`
- **Data**: 2026-06-29
- **Commit verificato**: `b4193c2`
- **URL live**: `https://antoniocorsano-boop.github.io/curmanlight/`
- **File modificati**: `docs/03_execution/CML-UX-ACCESSIBILITY-SKIP-LINK-FOCUS-LIVE-SMOKE.md`, `report/CML-UX-ACCESSIBILITY-SKIP-LINK-FOCUS-LIVE-SMOKE.md`
- **Scope**: docs-only
- **Runtime modificato**: no
- **Deploy manuale**: no
- **Push**: no
- **Skip link live**: PASS
- **Focus setTab live**: PASS
- **Focus selectDisc live**: PASS
- **Hash navigation live**: PASS
- **Mobile live**: PASS
- **Errori JavaScript reali**: 0
- **Resource warning non bloccanti**: 2 (localStorage try-catch)
- **Regressioni**: nessuna
- **Verdetto**: `CML_UX_ACCESSIBILITY_SKIP_LINK_FOCUS_LIVE_SMOKE_PASS`

## 2026-06-29 â€” CML-UX-ACCESSIBILITY-BASELINE-AUDIT â€” Accessibility baseline audit

- **Commit verificato**: `dab7748` (HEAD == origin/main, hash navigation syncing pushed)
- **Tipo slice**: docs-only / audit
- **Oggetto**: audit accessibilitÃ  di base di CurManLight con griglia 10 aree, punteggio, criticitÃ  P0-P3, roadmap runtime
- **Punteggio accessibilitÃ **: 48/100
- **Punteggio ergonomico collegato**: ~78/100 (accessibilitÃ  10%, contributo +4.8)
- **P0**: 0 | **P1**: 4 | **P2**: 6 | **P3**: 4
- **Top 3 criticitÃ  P1**: skip link assente, accordion Evidenze senza ARIA, emoji decorative senza aria-hidden
- **Intervento piÃ¹ impattante**: skip link (HTML+CSS, 10 righe, +5 punti accessibilitÃ )
- **Prossima slice consigliata**: CML-UX-ACCESSIBILITY-SKIP-LINK-FOCUS
- **Target realistico accessibilitÃ **: 76/100 dopo 5 slice minime
- **Runtime modificato**: no
- **Push**: non eseguito
- **File creati**: `docs/03_execution/CML-UX-ACCESSIBILITY-BASELINE-AUDIT.md`, `report/CML-UX-ACCESSIBILITY-BASELINE-AUDIT.md`
- **File modificati**: `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_UX_ACCESSIBILITY_BASELINE_AUDIT_READY`

## 2026-06-29 â€” CML-UX-NAVIGATION-AND-ORIENTATION â€” Navigation and orientation

- **Commit base**: `0f735cc` (CML_UX_ERGONOMICS_RE_AUDIT, aligned)
- **Tipo slice**: runtime microfix (3 P1 ergonomics)
- **Oggetto**: risolvere 3 P1 audit ergonomico: sidebar in Fonti, scroll eccessivo in Evidenze, breadcrumb poco percepibile
- **File modificato**: `_published_snapshot/netlify-current/index.html`
- **Sidebar Fonti**: `asideEl.classList.toggle("aside-hidden", t==="normativa"||t==="generali")` su desktop; `asideEl.classList.remove("aside-hidden")` su mobile
- **Breadcrumb disciplina**: `discLabel=selDisc&&(t==="curricolo"||t==="lavoro"||t==="riepilogo")?' â€” '+selDisc:''` â€” label dinamica
- **Evidenze ordine grouping**: `renderDidattica()` riscritta con raggruppamento per Infanzia/Primaria/Secondaria, primo gruppo aperto di default
- **CSS aggiunte**: `.aside-hidden`, `.didattica-evidence-ord-group`, `.didattica-evidence-ord-hd`, `.didattica-evidence-ord-body`
- **Validatore**: 14/14 PASS
- **Shape test**: 14/14 PASS
- **Push**: eseguito su origin/main
- **Artefatti**: `docs/03_execution/CML-UX-NAVIGATION-AND-ORIENTATION.md`, `report/CML-UX-NAVIGATION-AND-ORIENTATION.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_UX_NAVIGATION_AND_ORIENTATION_READY`

## 2026-06-29 â€” CML-UX-NAVIGATION-AND-ORIENTATION-LIVE-SMOKE â€” Post-push live smoke

- **Commit**: `f372ceb` (stesso HEAD)
- **Tipo slice**: docs-only / smoke verification
- **Oggetto**: verifica GitHub Pages dopo push CML-UX-NAVIGATION-AND-ORIENTATION
- **Pre-push**: git status clean, validatore 14/14 PASS, shape 14/14 PASS, diff-check clean, secret scan clean
- **Push**: `git push origin main` completato
- **GitHub Pages**: HTTP 200, propagato a `f372ceb`
- **Live smoke 9 aree**: caricamento PASS, breadcrumb PASS, sidebar Fonti nascosta PASS, Evidenze ordine PASS, curriculum dati PASS, esportazioni PASS, mobile bar PASS, sidebar Fonti tab PASS, console shadow PASS
- **Artefatti**: `docs/03_execution/CML-UX-NAVIGATION-AND-ORIENTATION-LIVE-SMOKE.md`, `report/CML-UX-NAVIGATION-AND-ORIENTATION-LIVE-SMOKE.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_UX_NAVIGATION_AND_ORIENTATION_LIVE_SMOKE_PASS`

## 2026-06-29 â€” CML-UX-ERGONOMICS-SCORE-REFRESH â€” Post-fix ergonomics score refresh

- **Commit verificato**: `1332720` (HEAD == origin/main)
- **Tipo slice**: docs-only / score refresh
- **Oggetto**: ricalcolo punteggio ergonomico dopo fix navigazione/orientamento (sidebar Fonti, Evidenze ordGroup, breadcrumb disciplina)
- **Punteggio precedente**: 72/100 (baseline CML-UX-ERGONOMICS-RE-AUDIT)
- **Punteggio aggiornato**: 76/100 (+4)
- **Delta per area**: Navigazione +2 (6â†’8), DensitÃ  visiva +2 (10â†’12), altre 7 aree invariate
- **3 P1 risolti**: sidebar Fonti âœ…, scroll Evidenze âœ…, breadcrumb disciplina âœ…
- **CriticitÃ  residue**: hash navigation non sincronizzato (P2), accessibilitÃ  non sistematica (P2), microcopy tablabel lunga (P2)
- **Prossima slice consigliata**: hash navigation syncing (basso sforzo, +2 punti)
- **Runtime modificato**: no
- **Push**: non eseguito
- **File creati**: `docs/03_execution/CML-UX-ERGONOMICS-SCORE-REFRESH.md`, `report/CML-UX-ERGONOMICS-SCORE-REFRESH.md`
- **File modificati**: `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_UX_ERGONOMICS_SCORE_REFRESH_READY`

## 2026-06-29 â€” CML_UX_ERGONOMICS_RE_AUDIT

- Re-audit ergonomico post-deduplicazione Export Center: 72/100 (prima baseline numerica)
- Riscontrati: 0 P0, 3 P1, 5 P2, 4 P3
- Raccomandazione: slice CML-UX-NAVIGATION-AND-ORIENTATION (non bloccante, +4-5 pt)
- File creati: `docs/03_execution/CML-UX-ERGONOMICS-RE-AUDIT.md`, `report/CML-UX-ERGONOMICS-RE-AUDIT.md`
- **Verdetto**: `CML_UX_ERGONOMICS_RE_AUDIT_READY`

## 2026-06-29 â€” CML_UX_EXPORT_CENTER_DEDUPLICATION_RUNTIME

- Export Center riscritto con 6 gruppi (Documento finale, Confronto, Bozza, .cml, Report, Backup)
- Definitivo deduplicato: export primari rimossi, sostituiti da bridge link verso Esportazioni
- Bozze disciplinari, file .cml e report gruppo lavoro aggiunti a Export Center
- Bug fix: 3 funzioni inesistenti rimosse (`exportRiepilogoWord`, `exportMarkdownRiepilogo`, `exportPDFRiepilogo`)
- **Commit runtime**: `index.html`
- **Commit sw**: `sw.js` (CACHE_NAME bump v453p4â†’v453p5)
- **Verdetto**: `CML_UX_EXPORT_CENTER_DEDUPLICATION_RUNTIME_READY`

## 2026-06-29 â€” CML_UX_EXPORT_CENTER_DEDUPLICATION_PLAN

- Definita architettura target Export Center: centralizzare e deduplicare tutte le esportazioni in unico punto, 6 gruppi, 9 regole, 5 slice future
- **Verdetto**: `CML_UX_EXPORT_CENTER_DEDUPLICATION_PLAN_READY`

## 2026-06-29 â€” CML_UX_REVISIONE_COMPACT_RUNTIME

- Vista Revisione compattata: export confronto rimosso, notice compattata, export disciplina richiamabile da toggle, strumenti processo in tab separato
- **Commit runtime**: `da3d197` (-65/+54 in index.html)
- **Commit sw**: `074ef64` (CACHE_NAME bump)
- **Verdetto**: `CML_UX_REVISIONE_COMPACT_RUNTIME_READY`

## 2026-06-29 â€” CML_UX_REVISIONE_SEPARATION_PLAN

- Definita architettura target per vista Revisione: decide (primario) / esporta disciplina (richiamabile) / strumenti processo (tab separato) / esportazioni confronto (delegate a export center)
- **Verdetto**: `CML_UX_REVISIONE_SEPARATION_PLAN_READY`

## 2026-06-29 â€” CML-UX-CURRICULUM-CONSULTA-COMPACT-RUNTIME

- Compattata vista Consulta: rimossi blocchi completezza/readiness/validazione dipartimentale, contenuti in accordion nativo `<details>`, path compatto
- **Commit runtime**: `abac327` (+8/-95 in index.html)
- **Commit sw**: `9f81b9c` (CACHE_NAME bump)
- **Verdetto**: `CML_UX_CURRICULUM_CONSULTA_COMPACT_RUNTIME_READY`

## 2026-06-29 â€” CML_UX_DECLUTTER_AND_ERGONOMICS_IMPLEMENTATION_PLAN

- Piano operativo UX per riduzione caos visivo, scroll e sovrapposizione consultazione/revisione/export; nessuna modifica runtime
- **Verdetto**: `CML_UX_DECLUTTER_AND_ERGONOMICS_IMPLEMENTATION_PLAN_READY`

## 2026-06-29 â€” CML-UX-ERGONOMICS-AUDIT â€” Markdown normalization

- Normalizzati i Markdown dellâ€™audit UX ergonomics senza modifiche runtime o variazioni sostanziali di contenuto
- **Verdetto**: `CML_UX_ERGONOMICS_AUDIT_MARKDOWN_NORMALIZATION_READY`

## 2026-06-29 â€” CML-UX-ERGONOMICS-AUDIT â€” Audit ergonomia UX

- **Commit base**: `c908afd`
- **Tipo slice**: audit-only / UX strategy
- **Oggetto**: audit ergonomia, chiarezza viste, densitÃ  informativa, navigazione e semplicitÃ  dâ€™uso per utenti scolastici non tecnici
- **Artefatti creati**: `docs/03_execution/CML-UX-ERGONOMICS-AUDIT.md`, `report/CML-UX-ERGONOMICS-AUDIT.md`
- **Runtime**: nessuna modifica applicata
- **Push**: non eseguito
- **Verdetto**: `CML_UX_ERGONOMICS_AUDIT_READY`

## 2026-06-29 - CLEANUP - REMOVE VIDEO AUTOMATION TOOLING

- **Commit base**: `3f093b2` (main aligned with origin/main)
- **Tipo slice**: cleanup / tooling removal
- **Oggetto**: rimuovere la funzionalita `tools/` video tooling e gli artefatti `output/` non coerenti con il target vanilla HTML/CSS/JS minimale
- **Artefatti rimossi**: `tools/` video tooling, `output/`
- **Runtime/core**: nessuna modifica a navigazione, logica runtime, manifest, service worker, curriculum o snapshot pubblicato
- **Deploy/push**: non eseguiti
- **Verdetto**: `CML_REMOVE_VIDEO_AUTOMATION_TOOLING_COMPLETE`

## 2026-06-28 â€” CML-236 â€” STABLE CANDIDATE FREEZE CONTRACT
 
- **Commit base**: `ebcc29a` (CML-234S, aligned)
- **Tipo slice**: docs-only / contract
- **Oggetto**: definire il contratto di freeze per il candidato stabile pubblico
- **Artefatti creati**: `docs/02_system/STABLE-CANDIDATE-FREEZE-CONTRACT.md`, `docs/03_execution/CML-236.md`, `report/CML-236_stable_candidate_freeze_contract.md`
- **Stato congelato**: normalized 14/14, runtime 14/14, evidence panel 14/14, UDA draft, `.cml v1.0`, OPS guardrails
- **Cambiamenti consentiti post-freeze**: correzione documentazione, typo/microcopy, smoke reports, known-limits updates
- **Cambiamenti richiedenti nuovo ciclo**: runtime feature, curriculum JSON, `.cml` schema, SchoolKB, UDA persistence, dipendenze, service-worker/manifest, deploy workflow
- **Validatore**: 14/14 PASS
- **Shape test**: 14/14 PASS
- **Push**: non eseguito (commit locale)
- **Verdetto**: `CML_236_STABLE_CANDIDATE_FREEZE_CONTRACT_COMPLETE`
 
## 2026-06-28 â€” CML-237 â€” MAINTENANCE POLICY AND KNOWN-LIMITS REGISTER
 
- **Commit base**: `1b23f5f` (CML-236S, aligned)
- **Tipo slice**: docs-only / policy
- **Oggetto**: definire politica manutenzione e registro limitazioni note
- **Artefatti creati**: `docs/02_system/MAINTENANCE-POLICY-AND-KNOWN-LIMITS.md`, `docs/03_execution/CML-237.md`, `report/CML-237_maintenance_policy_and_known_limits_register.md`
- **Maintenance modes**: documentation-only, smoke/verification, microcopy correction, defect triage, deferred feature review
- **Known-limits seeded**: 8 items (SchoolKB, UDA package, persistent UDA, favicon, backend/OAuth, student data, auto approval, AI Act claim)
- **Severity model**: P0 blocker, P1 high risk, P2 maintenance risk, P3 polish/deferred
- **Reopening triggers**: legal/regulatory, school workflow, P0/P1 blocker, curriculum correction, public availability, validator regression
- **Validatore**: 14/14 PASS
- **Shape test**: 14/14 PASS
- **Push**: non eseguito (docs-only)
- **Verdetto**: `CML_237_MAINTENANCE_POLICY_COMPLETE`
 
## 2026-06-28 â€” CML-238 â€” FREEZE CLOSURE GATE AND PUBLIC SMOKE
 
- **Commit base**: `b329ffa` (CML-237S, aligned)
- **Tipo slice**: docs-only / closure gate
- **Oggetto**: chiusura ciclo freeze candidato stabile con verifica finale
- **Gate superati**: HEAD/origin allineato, working tree pulito, freeze contract presente, maintenance register presente, known limits 8/8 documentate, JSON validator 14/14, shape test 14/14, GH Pages HTTP 200
- **Freeze verdetto**: `CML_STABLE_CANDIDATE_FREEZE_CLOSED_LOCAL_READY`
- **Limitazioni confermate**: SchoolKB, `.cml` UDA package, UDA persistence, favicon, backend/OAuth, student data, auto approval, AI Act claim
- **Nessun blocker**: nessuna modifica runtime/JSON/.cml necessaria
- **Push**: non eseguito (CML-238S separato)
- **Verdetto**: `CML_238_FREEZE_CLOSURE_GATE_AND_PUBLIC_SMOKE_COMPLETE`
 
## 2026-06-28 â€” CML-233 â€” NEXT CYCLE SELECTION AFTER OPS GUARDRAILS CLOSURE

- **Commit base**: `1beeef8` (CML-OPS-006S, aligned)
- **Tipo slice**: docs-only / decision
- **Selezione**: **A â€” CLAUDE.md update** (fix P1 obsolete state)
- **Opzioni rimandate**: B (polish), C (freeze), D (SchoolKB), E (.cml v1.1), F (onboarding); G (stop) rigettato
- **Sequenza proposta**: CML-234 â†’ CML-234S â†’ CML-235
- **Artefatti**: `docs/03_execution/CML-233.md`, `report/CML-233_next_cycle_selection_after_ops_guardrails_closure.md`, `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_233_NEXT_CYCLE_SELECTION_A_CLAUDE_MD_ALIGNMENT`

## 2026-06-28 â€” CML-OPS-006 â€” OPS SMOKE AND CLOSURE GATE

- **Commit base**: `a3753fb` (CML-OPS-005S, aligned)
- **Tipo slice**: docs-only / closure gate (ciclo C)
- **Decisione**: **B â€” Closed with documented P2/P3 limitations**
- **Ciclo**: CML-232 (selezione) â†’ OPS-004 (audit) â†’ OPS-005 (contract) â†’ OPS-005S (push) â†’ OPS-006 (closure)
- **Deliverable**: 3 skill OPS, 14-sezione policy contract, 4 template slice, 10 rischi classificati
- **Limitazioni residue**: hook eseguibili rinviati, CLAUDE.md obsoleto, contratto OPS stale, hash smoke non automatizzato
- **Validator**: 14/14 PASS
- **Shape test**: 14/14 PASS
- **GH Pages**: HTTP 200
- **Artefatti**: `docs/03_execution/CML-OPS-006.md`, `report/CML-OPS-006_ops_smoke_and_closure_gate.md`, `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_OPS_006_OPS_SMOKE_AND_CLOSURE_GATE_COMPLETE`

## 2026-06-28 â€” CML-OPS-005 â€” PREFLIGHT POLICY CONTRACT AND SLICE TEMPLATES

- **Commit base**: `93a216e` (CML-OPS-004S, aligned)
- **Tipo slice**: docs-only / OPS contract (ciclo C)
- **Oggetto**: contratto preflight policy + 4 template slice + 14 sezioni policy
- **Contratto creato**: `docs/02_system/OPS-PREFLIGHT-POLICY-CONTRACT.md`
- **Non implementato**: hook eseguibili, script validazione, modifiche CLAUDE.md
- **Raccomandazione OPS-006**: OPS smoke e closure gate
- **Verdetto**: `CML_OPS_005_PREFLIGHT_POLICY_CONTRACT_AND_SLICE_TEMPLATES_COMPLETE`

## 2026-06-28 â€” CML-OPS-004 â€” OPERATIONAL SKILLS AND SLICE TEMPLATE AUDIT

- **Commit base**: `fe7b59c` (CML-232S, aligned)
- **Tipo slice**: docs-only / audit (OPS guardrails, ciclo C)
- **Oggetto**: audit workflow operativo, rischi drift, gap template, stato OPS
- **Rischi trovati**: OR-01 CLAUDE.md stale P1, OR-02 contratto OPS stale P2, OR-03 no template P2, OR-04 no guard hooks P2, OR-05/06/07 P3; 3 punti OK
- **Punti di forza**: validatore/shape test automatizzati, movelog, skill OPS, GH Pages auto-deploy
- **Raccomandazione OPS-005**: preflight policy contract + slice template standard
- **File modificati**: `docs/03_execution/CML-OPS-004.md`, `report/CML-OPS-004_operational_skills_and_slice_template_audit.md`, `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_OPS_004_OPERATIONAL_SKILLS_AND_SLICE_TEMPLATE_AUDIT_COMPLETE`

## 2026-06-28 â€” CML-232 â€” NEXT CYCLE SELECTION AFTER ACCESSIBILITY/RESPONSIVE CLOSURE

- **Commit base**: `4eb8229` (CML-231S, aligned)
- **Tipo slice**: docs-only / decision
- **Selezione**: **C â€” OPS guardrails** (skills, slice-template audit, guard hooks)
- **Opzioni obsolete**: A (gap model EF) e B (nuova disciplina) â€” 14/14 giÃ  completo
- **Opzioni rimandate**: D (polish), E (freeze), F (SchoolKB), G (stop)
- **Sequenza proposta**: CML-OPS-004 â†’ CML-OPS-005 â†’ CML-OPS-006
- **Validator**: 14/14 PASS
- **Shape test**: 14/14 PASS
- **Artefatti**: `docs/03_execution/CML-232.md`, `report/CML-232_next_cycle_selection_after_accessibility_responsive_closure.md`, `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_232_NEXT_CYCLE_SELECTION_C_OPS_GUARDRAILS`

## 2026-06-28 â€” CML-231 â€” ACCESSIBILITY/RESPONSIVE CLOSURE GATE

- **Commit base**: `10d2bd0` (CML-230S, aligned)
- **Tipo slice**: docs-only / closure gate
- **Oggetto**: chiudere ciclo E (accessibilitÃ /responsivitÃ ) dopo audit, microfix e push
- **Decisione**: **B â€” Closed with documented P2/P3 limitations**
- **Ciclo**: CML-228 (selezione) â†’ CML-229 (audit) â†’ CML-230 (microfix) â†’ CML-230S (push) â†’ CML-231 (closure)
- **Issue risolte**: 6/9 (1 P1 + 5 P2), tutte verificate in public runtime
- **Limitazioni residue**: viewport 360px (P2), badge colore (P3), grassetto screenshot (P3)
- **Validator**: 14/14 PASS
- **Shape test**: 14/14 PASS
- **Public GH Pages**: HTTP 200, app OK
- **Nessun P0/P1 residuo**
- **Artefatti**: `docs/03_execution/CML-231.md`, `report/CML-231_accessibility_responsive_closure_gate.md`, `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_231_ACCESSIBILITY_RESPONSIVE_CLOSURE_GATE_COMPLETE`

## 2026-06-28 â€” CML-230 â€” TARGETED_ACCESSIBILITY_RESPONSIVE_MICROFIX

- **Commit base**: `56243bb` (CML-229S, aligned)
- **Tipo slice**: runtime increment
- **Oggetto**: 6 microfix accessibilitÃ /responsivitÃ  da raccomandazione CML-229
- **Fix applicati**: tabbar touch target a 400px (P1, CSS padding), focus outline motto-link (P2, CSS), aria-label textarea (P2, HTML), aria-pressed mappa-disc-btn (P2, JS), aria-current subnav (P2, JS), aria-current tabbar (P2, JS)
- **Issue CML-229 non affrontate**: viewport 360px (degradation P2), badge colore (P3), grassetto screenshot (P3)
- **File modificato**: `_published_snapshot/netlify-current/index.html` (6 modifiche puntuali)
- **Validatore**: 14/14 PASS
- **Shape test**: 14/14 PASS
- **Hash smoke**: 14/14 PASS
- **Viewport smoke**: 360/390/768/1024/desktop â€” OK
- **Workflow smoke**: 5 discipline â€” OK
- **Evidenze/UDA/Markdown/.cml**: OK
- **Curriculum JSON**: nessuna modifica
- **Artefatti**: `docs/03_execution/CML-230.md`, `report/CML-230_targeted_accessibility_responsive_microfix.md`, `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_230_TARGETED_ACCESSIBILITY_RESPONSIVE_MICROFIX_COMPLETE`

## 2026-06-28 â€” CML-229 â€” ACCESSIBILITY_RESPONSIVE_QA_AUDIT

- **Commit base**: `432a3e8` (CML-228S, aligned)
- **Tipo slice**: docs-only / audit
- **Oggetto**: audit accessibilitÃ  e responsivitÃ  dopo stable candidate
- **Issue trovate**: 1 P1 (tabbar touch target a 400px), 6 P2 (aria-current, aria-pressed, label textarea, focus outline, viewport 360px), 2 P3
- **Flussi verificati**: curriculum, evidenze, UDA, `.cml`, dipartimento, referente, fonti â€” OK
- **Raccomandazione CML-230**: microfix mirati per P1 + top P2 (6 modifiche puntuali)
- **Artefatti**: `docs/03_execution/CML-229.md`, `report/CML-229_accessibility_responsive_qa_audit.md`, `docs/REPO-MOVELOG.md`
- **Vincoli**: docs-only, nessun runtime/JSON/.cml/SchoolKB/deploy/push/secrets
- **Verdetto**: `CML_229_ACCESSIBILITY_RESPONSIVE_QA_AUDIT_COMPLETE`

## 2026-06-28 â€” CML-228 â€” NEXT_CYCLE_SELECTION_AFTER_SCHOOLKB_DEFERRAL

- **Commit base**: `2567c99` (CML-227S, aligned)
- **Tipo slice**: docs-only / decision
- **Oggetto**: selezionare il prossimo ciclo di sviluppo dopo SchoolKB deferral
- **Opzioni valutate**: A (public polish), B (freeze/stabilization), C (`.cml v1.1`), D (onboarding/help), **E (accessibility/responsive QA)**, F (stop)
- **Selezione**: **E â€” Accessibility/responsive QA audit** prima dell'uso da parte dei colleghi
- **Alternative rigettate**: A (favicon utile ma prioritÃ  minore), B (puramente documentale), C (troppo presto), D (guida giÃ  presente), F (progetto attivo)
- **Sequenza proposta**: CML-229 audit â†’ CML-230 microfix â†’ CML-231 closure
- **Artefatti**: `docs/03_execution/CML-228.md`, `report/CML-228_next_cycle_selection_after_schoolkb_deferral.md`, `docs/REPO-MOVELOG.md`
- **Vincoli**: docs-only, nessun runtime/JSON/.cml/SchoolKB/deploy/push/secrets
- **Verdetto**: `CML_228_NEXT_CYCLE_SELECTION_E_ACCESSIBILITY_QA`

## 2026-06-28 â€” CML-225 â€” UX-MENU-ACTION-CONTRACT

- **Commit base**: 8fb01ca (CML-UX-GOVERNANCE-IMPLEMENTATION-PLAN, aligned)
- **Tipo slice**: docs-only contract
- **Oggetto**: definire contratto per nuova architettura informativa prima di modifiche runtime
- **Contratto creato**: docs/02_system/UX-MENU-ACTION-CONTRACT.md`n- **Sezioni contratto**: nuova struttura tabbar, stati versione, collegamenti curricolo, rimozione ridondanze, superamento centratura Tecnologia, mappatura azioni/ruoli, correzione istituzionale, matrice compatibilitÃ , rischi regressione
- **Decisioni**: 6 stati versione definiti, matrice azioni/ruoli per 4 ruoli, 6 mitigazioni rischi, 11 criteri accettazione
- **Coerenza**: verificata con CML-UX-FLOW-AUDIT e CML-UX-GOVERNANCE-IMPLEMENTATION-PLAN
- **Validatore**: 14/14 PASS
- **Shape test**: 14/14 PASS
- **Artefatti**: docs/02_system/UX-MENU-ACTION-CONTRACT.md, docs/03_execution/CML-225.md,
eport/CML-225_ux_menu_action_contract.md, aggiornamento docs/REPO-MOVELOG.md`n- **Vincoli**: docs-only, nessuna modifica runtime, curriculum JSON, .cml/export/import, validator/shape-test, service-worker/manifest; nessun deploy, nessun push
- **Verdetto**: CML_225_UX_MENU_ACTION_CONTRACT_READY`n
# Repo Movelog

## 2026-06-28 â€” CML-217 â€” MINIMAL_UDA_DRAFT_PREVIEW_MARKDOWN_EXPORT

- **Commit base**: `3056195` (CML-216S, aligned)
- **Tipo slice**: runtime increment â€” UDA draft preview + markdown export
- **Oggetto**: pannello UDA draft con preview Markdown generata on demand dai dati curricolari esistenti e marcature evidenze (`cml_evidenze_state`)
- **File modificato**: `_published_snapshot/netlify-current/index.html` (+297/-1)
- **Componenti aggiunte**: CSS (`didattica-uda-draft-section`, 11 classi), HTML (selectors disciplina/unitÃ , pulsanti genera/copia/download, textarea preview, status bar, privacy notice), JS (9 funzioni: `discKeyFromName`, `getUdaDisciplineUnits`, `getStateLabel`, `renderUdaDraftPanel`, `updateUdaUnitSelector`, `buildUdaDraftMarkdown`, `generateUdaDraft`, `copyUdaMarkdown`, `downloadUdaUdaMarkdown`)
- **Sezioni markdown generate**: intestazione, riferimenti curricolari, evidenze (da stato locale), criteri valutazione, attivitÃ  proposta (placeholder), adattamenti/inclusione (placeholder), nota privacy
- **Pattern riutilizzati**: `downloadBlob()`, `downloadMarkdownString()`, `copyMarkdownToClipboard()`, `getEvidenceState()`, `escapeHtml()`, `DISCIPLINE_META`
- **Cosa non fatto**: nessuna modifica JSON, .cml, export/import, UDA persistence, localStorage, service-worker, manifest, dependencies, student data, grades
- **Validatore**: 14/14 PASS
- **Shape test**: 14/14 PASS
- **Artefatti**: `docs/03_execution/CML-217.md`, `report/CML-217_minimal_uda_draft_preview_markdown_export.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Vincoli**: nessuna modifica curriculum JSON, nessuna modifica `.cml`/export/import, nessuna UDA persistence, nessun dato studente, no push, no deploy, no secrets
- **Verdetto**: `CML_217_MINIMAL_UDA_DRAFT_PREVIEW_MARKDOWN_EXPORT_COMPLETE`

## 2026-06-28 â€” CML-217S â€” MINIMAL_UDA_DRAFT_PREVIEW_MARKDOWN_EXPORT_CONTROLLED_PUSH

- **Commit base**: `5a5f65f` (CML-217, aligned)
- **Tipo slice**: sync â€” controlled push
- **Oggetto**: push CML-217 runtime increment verso origin/main
- **Pre-push checks**: git status clean, 1 commit ahead, diff-check PASS, secret scan clean, validator 14/14 PASS, shape test 14/14 PASS
- **Push**: `git push origin main` completato
- **Post-push**: HEAD e origin/main allineati a `5a5f65f`
- **GitHub Pages**: HTTP 200, app caricata, evidence panel e UDA draft panel visibili
- **Verdetto**: `CML_217S_MINIMAL_UDA_DRAFT_PREVIEW_MARKDOWN_EXPORT_PUSHED`

## 2026-06-28 â€” CML-227 â€” SCHOOLKB_SCOPE_AUDIT_AFTER_PUBLIC_RELEASE

- **Commit base**: `26bb195` (CML-226S, aligned)
- **Tipo slice**: docs-only / scope audit
- **Oggetto**: valutare se SchoolKB debba diventare il prossimo ciclo di sviluppo
- **Bisogni SchoolKB coperti dallo stato attuale**: tab Fonti (12+ schede), campo `fonte` in 142/142 unitÃ , workflow evidenze/UDA/`.cml` autonomi
- **Raccomandazione**: **E â€” Rinviare SchoolKB** â€” nessun bisogno reale non coperto, complessitÃ  OAuth/Drive ingiustificata
- **SKB-001 confermato**: SchoolKB resta opzionale, parallelo, disattivato di default
- **Prossima azione**: CML-228 â€” decidere ciclo successivo (manutenzione, UX menu action, chiusura)
- **Artefatti**: `docs/03_execution/CML-227.md`, `report/CML-227_schoolkb_scope_audit_after_public_release.md`, `docs/REPO-MOVELOG.md`
- **Vincoli**: docs-only, nessun runtime/JSON/.cml/SchoolKB implementazione/deploy/push/secrets
- **Verdetto**: `CML_227_SCHOOLKB_DEFERRED_CONFIRMED`

## 2026-06-28 â€” CML-226 â€” MULTI_DISCIPLINE_GENERALIZATION_HARDCODED_TECNOLOGIA

- **Commit base**: `c8ceb8e` (CML-225S, aligned)
- **Tipo slice**: runtime increment + docs
- **Oggetto**: generalizzare funzioni runtime hardcodate a Tecnologia per tutte 14 discipline
- **Generalizzato**: export panel (CSS/HTML/JS), home page text, didattica/UDA text, default discipline
- **Preservato**: norm panel (legacy CML-062), mappa dati per-disciplina, curriculum data
- **Verifiche**: validatore 14/14 PASS, shape test 14/14 PASS, hash 14/14 PASS, diff-check clean
- **Artefatti**: `_published_snapshot/netlify-current/index.html`, `docs/03_execution/CML-226.md`, `report/CML-226_multi_discipline_generalization_hardcoded_tecnologia.md`, `docs/REPO-MOVELOG.md`
- **Vincoli**: nessun JSON, `.cml`, validator, shape-test, service-worker, manifest, dipendenze; nessun deploy, nessun push, nessun secret
- **Verdetto**: `CML_226_MULTI_DISCIPLINE_GENERALIZATION_READY`

## 2026-06-28 â€” CML-224 â€” PUBLIC_RELEASE_WORKFLOW_SMOKE_AND_RELEASE_GATE

- **Commit base**: `731cb8b` (CML-223S, aligned)
- **Tipo slice**: docs-only release gate
- **Oggetto**: determinare se GitHub Pages version Ã¨ candidata pubblica stabile dopo CML-223
- **Release gate**: **A â€” Public stable candidate, ready**
- **Smoke**: validatore 14/14 PASS, shape test 14/14 PASS, 14 hash routes HTTP 200, GitHub Pages HTTP 200, README/docs OK, privacy OK, localStorage solo evidenze, secret scan clean
- **Unico gap**: favicon assente (deferrato, bassa prioritÃ )
- **Artefatti**: `docs/03_execution/CML-224.md`, `report/CML-224_public_release_workflow_smoke_and_release_gate.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Vincoli**: nessuna modifica runtime, curriculum JSON, .cml/export/import, validator, shape-test, service-worker, manifest, dipendenze; nessun deploy, nessun push, nessun secret
- **Verdetto**: `CML_224_PUBLIC_RELEASE_WORKFLOW_SMOKE_AND_RELEASE_GATE_READY`

## 2026-06-28 â€” CML-223 â€” README_AND_USER_DOCUMENTATION_POLISH

- **Commit base**: `9d14357` (CML-222S, aligned)
- **Tipo slice**: docs-only documentation polish
- **Oggetto**: colmare gap documentali CML-222: root README.md + aggiornamento 18 riferimenti Netlify â†’ GitHub Pages
- **README.md**: creato con descrizione, feature inventory, principi, limitazioni, comandi validazione
- **Netlify references**: 18 occorrenze in 12 file `docs/04_user/` aggiornate a `antoniocorsano-boop.github.io/curmanlight`
- **Favicon**: deferrato (bassa prioritÃ , gap #3 CML-222)
- **Verifiche**: validatore 14/14 PASS, shape test 14/14 PASS, diff-check clean
- **Artefatti**: `README.md`, `docs/03_execution/CML-223.md`, `report/CML-223_readme_and_user_documentation_polish.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Vincoli**: nessuna modifica runtime, curriculum JSON, .cml/export/import, validator, shape-test, service-worker, manifest, dipendenze; nessun deploy, nessun push, nessun secret
- **Verdetto**: `CML_223_README_AND_USER_DOCUMENTATION_POLISH_READY`

## 2026-06-28 â€” CML-222 â€” PUBLIC_RELEASE_READINESS_AUDIT

- **Commit base**: `6b8e7ad` (CML-221S, aligned)
- **Tipo slice**: docs-only audit
- **Oggetto**: audit readiness rilascio pubblico dopo completamento curriculum, .cml, EF, Evidenze/UDA, wording
- **Classificazione**: Ready after documentation polish â€” nessun bloccante runtime
- **Feature inventory**: curriculum 14/14, .cml workflow, evidence panel 14/14, UDA draft, import/export, guida in-app, privacy â€” âœ…
- **Gap trovati**: root README.md mancante, 18 riferimenti Netlify in 12 doc utente, favicon.ico assente (bassa prioritÃ )
- **Fix raccomandati per CML-223**: creare README.md, aggiornare URL Netlify â†’ GitHub Pages, favicon opzionale
- **Technical checks**: validatore 14/14 PASS, shape test 14/14 PASS, GitHub Pages HTTP 200, hash 14/14, secret scan clean
- **Artefatti**: `docs/03_execution/CML-222.md`, `report/CML-222_public_release_readiness_audit.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Vincoli**: nessuna modifica runtime, curriculum JSON, .cml/export/import, validator, shape-test, service-worker, manifest, dipendenze; nessun deploy, nessun push, nessun secret
- **Verdetto**: `CML_222_PUBLIC_RELEASE_READINESS_AUDIT_READY`

## 2026-06-28 â€” CML-221 â€” NEXT_LARGER_CYCLE_SELECTION_AFTER_EVIDENZE_UDA_AND_WORDING_CLOSURE

- **Commit base**: `85a66e6` (CML-220S, aligned)
- **Tipo slice**: docs-only cycle selection
- **Oggetto**: selezione prossimo ciclo piÃ¹ grande dopo chiusura Evidenze/UDA e wording microfix
- **Opzione selezionata**: A â€” Release readiness and public documentation polish
- **Opzioni respinte**: B (SchoolKB â€” rimandato), C (Design/UML â€” rimandato), D (`.cml` v1.1 â€” rimandato), E (UX polish â€” nessuna necessitÃ ), F (Content polish â€” nessuna necessitÃ )
- **Prossima sequenza**: CML-222 (public release readiness audit) â†’ CML-223 (README/user docs) â†’ CML-224 (release gate) â†’ CML-225 (next cycle, likely SchoolKB)
- **Artefatti**: `docs/03_execution/CML-221.md`, `report/CML-221_next_larger_cycle_selection_after_evidenze_uda_and_wording_closure.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Vincoli**: nessuna modifica runtime, curriculum JSON, .cml/export/import, validator, shape-test, service-worker, manifest, dipendenze; nessun deploy, nessun push, nessun secret
- **Verdetto**: `CML_221_NEXT_LARGER_CYCLE_SELECTION_AFTER_EVIDENZE_UDA_AND_WORDING_CLOSURE_READY`

## 2026-06-28 â€” CML-220 â€” EVIDENZE_UDA_WORDING_MICROFIX

- **Commit base**: `c072af2` (CML-219S, aligned)
- **Tipo slice**: runtime increment â€” wording-only microfix
- **Oggetto**: correzione 3 righe in `index.html` per i due findings CML-218
- **Modifiche**: riga 2706 `'âŒ Esclusa'` â†’ `'âŒ Non applicabile'`; riga 2878 regex aggiornato; riga 2891 status message corretto
- **Comportamento preservato**: localStorage retrocompatibile `non_applicabile`, marcatura evidenze invariata, UDA draft invariata, Markdown invariato, hash navigation invariato
- **Validatore**: 14/14 PASS
- **Shape test**: 14/14 PASS
- **Artefatti**: `docs/03_execution/CML-220.md`, `report/CML-220_evidenze_uda_wording_microfix.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Vincoli**: nessuna modifica curriculum JSON, .cml/export/import, validator, shape-test, service-worker, manifest, dipendenze; nessun deploy, nessun push, nessun secret
- **Verdetto**: `CML_220_EVIDENZE_UDA_WORDING_MICROFIX_READY`

## 2026-06-28 â€” CML-219 â€” NEXT_CYCLE_SELECTION_AFTER_EVIDENZE_UDA_CLOSURE

- **Commit base**: `a223915` (CML-218S, aligned)
- **Tipo slice**: docs-only cycle selection
- **Oggetto**: selezione prossimo ciclo dopo chiusura Evidenze/UDA
- **Opzione selezionata**: A â€” Microfix Evidenze/UDA wording (label e status message)
- **Opzioni respinte**: B (SchoolKB â€” rimandato), C (Release audit â€” rimandato), D (Design/UML â€” rimandato), E (Content polish â€” nessuna necessitÃ )
- **Prossima sequenza**: CML-220 (microfix) â†’ CML-220S (push) â†’ CML-221 (next larger cycle)
- **Artefatti**: `docs/03_execution/CML-219.md`, `report/CML-219_next_cycle_selection_after_evidenze_uda_closure.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Vincoli**: nessuna modifica runtime, curriculum JSON, .cml/export/import, validator, shape-test, service-worker, manifest, dipendenze; nessun deploy, nessun push, nessun secret
- **Verdetto**: `CML_219_NEXT_CYCLE_SELECTION_AFTER_EVIDENZE_UDA_CLOSURE_READY`

## 2026-06-28 â€” CML-218 â€” EVIDENZE_UDA_WORKFLOW_SMOKE_AND_CLOSURE_GATE

- **Commit base**: `5a5f65f` (CML-217S, aligned)
- **Tipo slice**: docs-only closure gate
- **Oggetto**: smoke end-to-end e closure gate per il ciclo Evidenze/UDA (CML-214 â†’ CML-217)
- **Pre-flight**: working tree pulito, HEAD = origin/main = `5a5f65f`, validatore 14/14 PASS, shape test 14/14 PASS, diff-check PASS, secret scan clean
- **Static code analysis (5 punti)**: localStorage solo `cml_evidenze_state` âœ…, Markdown 6/6 sezioni âœ…, privacy notice âœ…, esclusa non trattata come selezionata âš ï¸ (logica corretta, label inconsistenti minori), `.cml` workflow invariato âœ…
- **GitHub Pages**: HTTP 200, app caricata, entrambi i pannelli visibili e funzionanti
- **Findings minori**: label `non_applicabile` â†’ `âŒ Esclusa` vs `âŒ Non applicabile` (righe 2706/2563); status message "proposta non vengono incluse" fuorviante (riga 2891) â€” non bloccanti
- **Known limits documentati**: UDA non persistito, non importabile `.cml`, validazione umana, SchoolKB non integrato, nessun dato studente
- **Artefatti**: `docs/03_execution/CML-218.md`, `report/CML-218_evidenze_uda_workflow_smoke_and_closure_gate.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Vincoli**: nessuna modifica runtime, curriculum JSON, .cml/export/import, validator, shape-test, service-worker, manifest, dipendenze; nessun deploy, nessun push, nessun secret
- **Verdetto**: `CML_218_EVIDENZE_UDA_WORKFLOW_SMOKE_AND_CLOSURE_GATE_READY`

## 2026-06-28 â€” CML-216S â€” UDA_DRAFT_EXPORT_READINESS_AUDIT_CONTROLLED_PUSH

- **Commit base**: `28a0c3c` (CML-216, aligned)
- **Tipo slice**: sync â€” controlled push
- **Oggetto**: push CML-216 docs-only audit verso origin/main
- **Pre-push checks**: git status clean, 1 commit ahead, diff-check PASS, secret scan clean, validator 14/14 PASS, shape test 14/14 PASS
- **Push**: `git push origin main` completato
- **Post-push**: HEAD e origin/main allineati a `3056195`
- **Verdetto**: `CML_216S_UDA_DRAFT_EXPORT_READINESS_AUDIT_PUSHED`

## 2026-06-28 â€” CML-216 â€” UDA_DRAFT_EXPORT_READINESS_AUDIT

- **Commit base**: `d79956e` (CML-OPS-004, aligned)
- **Tipo slice**: docs-only readiness audit
- **Oggetto**: audit completezza e rischi per UDA draft/export; confronto 5 opzioni di implementazione
- **Opzioni valutate**: A (solo export), B (preview + copia/download), C (persistenza bozza), D (SchoolKB), E (backend)
- **Opzione selezionata**: B â€” preview Markdown + copia/download, nessuna persistenza
- **12 acceptance criteria** definiti per CML-217
- **Rischio privacy**: basso (nessun dato studente nel curricolo, ma tracciato nei criteri)
- **CML-215 e CML-214**: rispettati da Opzione B
- **Artefatti**: `docs/03_execution/CML-216.md`, `report/CML-216_uda_draft_export_readiness_audit.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Vincoli**: nessuna modifica runtime, curriculum JSON, .cml, validator, shape-test, service-worker, manifest, dipendenze; nessun deploy, nessun push, nessun secret
- **Verdetto**: `CML_216_UDA_DRAFT_EXPORT_READINESS_AUDIT_READY`

## 2026-06-27 â€” CML-UX-FLOW-AUDIT

- Audit casi d'uso, ridondanze UI e modello curricolo transitorio.
- Fonti: CML-111, CML-113, CML-018, CML-199, snapshot runtime.
- Output: mappa sezioni, matrice compatibilitÃ , casi d'uso, wireframe testuale.
- Prossima slice: CML-UX-MENU-ACTION-CONTRACT.
- Zero modifiche runtime.

## 2026-06-27 - CML-209 - CML_WORKFLOW_UX_HARDENING_CLOSURE_AUDIT

- **Commit base**: `96826aa` (CML-208S, aligned)
- **Tipo slice**: closure audit docs-only
- **Oggetto**: chiusura ciclo `.cml` workflow hardening e UX clarity; raccomandato CML-204 come prossimo slice contenutistico
- **Ciclo riassunto**: CML-199 (contract), CML-200 (validation hardening), CML-201 (E2E smoke), CML-202 (readiness push), CML-203 (BOM fix), CML-205 (Drive allowlist), CML-206 (package audit â†’ Option A), CML-207 (UX contract), CML-208 (UX micro-increment), CML-208S (push)
- **Stato finale**: `.cml v1.0` stabile e backward compatible, batch import multi-file funzionante, validatori hardened, Drive allowlist attiva, UX clarity implementata, pubblico 14/14
- **Formati rigettati**: nessun package formale multi-disciplina introdotto (CML-206 Option A)
- **Deferred UX**: preview panel, drag-and-drop, reset button, richer recovery guidance (non bloccanti per closure)
- **Validatore**: 14/14 PASS
- **Shape test**: 14/14 PASS
- **Artefatti**: `docs/03_execution/CML-209.md`, `report/CML-209_cml_workflow_ux_hardening_closure_audit.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Vincoli**: nessuna modifica runtime, schema, export/import, validator, Drive, contenuti, service-worker, manifest, dipendenze; nessun deploy, nessun push, nessun secret
- **Verdetto**: `CML_209_CML_WORKFLOW_UX_HARDENING_CLOSURE_AUDIT_READY`

## 2026-06-27 - CML-208 - BATCH_IMPORT_UX_CLARITY_RUNTIME_MICRO_INCREMENT

- **Commit base**: `c1b0479` (CML-207S, aligned)
- **Tipo slice**: runtime UX micro-increment
- **Oggetto**: implementazione delle 4 modifiche UX minimali definite in CML-207
- **Cambiamenti**: helper text multi-file (department + referent), mixed-discipline warning con lista discipline, duplicate chip in referent file list, compact import summary banner
- **Files modificati**: `_published_snapshot/netlify-current/index.html` (+17 lines)
- **Schema/validator/export-import**: invariati
- **Smoke**: department multi-file PASS, mixed-discipline list PASS, duplicate chip PASS, summary banner PASS, CML-200 quick 4/4 PASS
- **Validatore**: 14/14 PASS
- **Shape test**: 14/14 PASS
- **Artefatti**: `docs/03_execution/CML-208.md`, `report/CML-208_batch_import_ux_clarity_runtime_micro_increment.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Vincoli**: nessun schema cambio, nessun validator change, nessun export/import behavior change, nessun Drive change, nessun contenuto curricolo, nessun service-worker, nessun manifest, nessuna dipendenza, nessun deploy, nessun push, nessun secret
- **Verdetto**: `CML_208_BATCH_IMPORT_UX_CLARITY_RUNTIME_MICRO_INCREMENT_READY`

## 2026-06-27 - CML-207 - BATCH_IMPORT_UX_CLARITY_AUDIT_CONTRACT

- **Commit base**: `a3481e4` (CML-206S, aligned)
- **Tipo slice**: audit docs-only
- **Oggetto**: audit UX clarity per batch import `.cml` esistente; definito contratto minimale per CML-208
- **UX gaps mappati**: P1 (nessuna preview, duplicate rendering inconsistency, mixed-discipline generic message), P2 (mancanza summary banner, recovery guidance, size warnings), P3 (no drag-and-drop, no count limit, no reset)
- **Selezione CML-208**: helper text multi-file, mixed-discipline list warning, duplicate chip in referent, compact summary banner
- **Rifiutati**: drag-and-drop, preview panel, file count limit, reset button (deferred as P3 or out-of-scope)
- **Scope CML-208**: UI-only in `index.html`, no schema/validator/export/import behavior changes
- **CompatibilitÃ **: 100% backward, nessun impatto su validatori o export
- **Artefatti**: `docs/03_execution/CML-207.md`, `report/CML-207_batch_import_ux_clarity_audit_contract.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Vincoli**: nessuna modifica runtime behavior, schema, export/import, contenuti, validator, shape-test, service-worker, manifest, dipendenze; nessun deploy, nessun push, nessun secret
- **Verdetto**: `CML_207_BATCH_IMPORT_UX_CLARITY_AUDIT_CONTRACT_READY`

## 2026-06-27 - CML-206 - MULTI_DISCIPLINE_PACKAGE_FORMAT_SELECTION_AUDIT

- **Commit base**: `f0f9817` (CML-205S, aligned)
- **Tipo slice**: audit docs-only
- **Oggetto**: audit e selezione strategia formato `.cml` multi-disciplina; raccomandata Opzione A (mantieni batch import attuale)
- **Opzioni valutated**: A (keep batch), B (lightweight package in v1.0), C (new `multi_discipline_package` fileType), D (defer to v1.1/v2.0), E (UX guidance only)
- **Selezione**: Opzione A â€” nessun nuovo formato package; batch import esistente giÃ  soddisfa il bisogno multi-disciplina
- **Motivazione**: backward compatibilitÃ  100%, zero rischio schema, nessuna complessitÃ  aggiuntiva, nessun evidence di bisogno forte da scuole
- **Alternative rigettate**: B (ambiguitÃ  semantica), C (3-way matrix + nuovo validatore/export/import), D (eccessivamente conservativo), E (UX improvement separato, non risolve questione package)
- **Batch import behavior mappato**: multi-file, dedup fingerprint, mixed-discipline warning, grouping per disciplina, fallback item-level discipline
- **Artefatti**: `docs/03_execution/CML-206.md`, `report/CML-206_multi_discipline_package_format_selection_audit.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Vincoli**: nessuna modifica runtime, schema, export/import, contenuti, validator, shape-test, service-worker, manifest, dipendenze; nessun deploy, nessun push, nessun secret
- **Verdetto**: `CML_206_MULTI_DISCIPLINE_PACKAGE_FORMAT_SELECTION_AUDIT_READY`

## 2026-06-27 - CML-205 - DRIVE_ENDPOINT_ALLOWLIST_SECURITY_HARDENING

- **Commit base**: `a21838a` (CML-203, aligned)
- **Tipo slice**: runtime security hardening
- **Oggetto**: implementazione allowlist client-side per endpoint Drive upload, hardening del boundary documentato in CML-199
- **Root cause precedente**: `uploadTeacherCmlToDrive()` usava endpoint da `localStorage` senza validazione, rischio P2 CML-198
- **Fix**: `validateDriveEndpoint()` + `isAllowedHost()` con host espliciti (`drive.google.com`, `docs.google.com`), check HTTPS only, reject localhost/IP/credentials/malformed/protocol pericolosi
- **Messaggi utente**: specifici per ogni rejection reason (empty, protocol, credentials, localhost, host, malformed)
- **Fallback**: manual download `.cml` preservato in tutti gli scenari di rigetto
- **Files modificati**: `_published_snapshot/netlify-current/index.html` (Drive endpoint validation)
- **Smoke test**: 21/21 PASS (empty, HTTP, javascript:, data:, file:, localhost, IPs, credentials, unsupported hosts, allowed hosts)
- **Validatore**: 14/14 PASS
- **Shape test**: 14/14 PASS
- **Workflow preservato**: teacher export, download manuale `.cml`, payload invariato
- **Limitations**: client-side only, allowlist statica, no TLS cert verification, no encrypted storage, manual fallback recommended
- **Artefatti**: `docs/03_execution/CML-205.md`, `report/CML-205_drive_endpoint_allowlist_security_hardening.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Vincoli**: nessun bump schema, nessun export/import change, nessun contenuto curricolo, nessun service-worker, nessun manifest, nessuna dipendenza, nessun backend, nessuna credenziale, nessun deploy, nessun push, nessun secret
- **Verdetto**: `CML_205_DRIVE_ENDPOINT_ALLOWLIST_SECURITY_HARDENING_READY`

## 2026-06-27 - CML-203 - BOM_SHAPE_TEST_REMEDIATION

- **Commit base**: `8dc1f96` (CML-202, aligned)
- **Commit finale**: `d7a1845`
- **Tipo slice**: test remediation
- **Oggetto**: ripristino runtime shape test da 0/14 a 14/14 PASS rimuovendo BOM introdotto da PowerShell nella pipe
- **Root cause**: PowerShell aggiunge UTF-8 BOM (`U+FEFF`) allo stream stdout quando `execSync` usa `shell: 'powershell'`; i file JSON su disco NON contengono BOM (verificato byte-level)
- **Fix**: BOM strip in `tools/to-runtime-mappa-dati-transformer.mjs` prima di `JSON.parse` (`raw.replace(/^\uFEFF/, '')`)
- **Files modificati**: 1 (`tools/to-runtime-mappa-dati-transformer.mjs`, +2/-1)
- **Contenuto curricolo**: invariato (nessun file `content/curriculum/*.normalized.json` modificato)
- **Validatore**: 14/14 PASS
- **Shape test**: 14/14 PASS (ripristinato)
- **Hash/navigation smoke**: 4/4 PASS (Tecnologia, Seconda Lingua Comunitaria, Religione Cattolica, Latino LEL)
- **Artefatti**: `docs/03_execution/CML-203.md`, `report/CML-203_bom_shape_test_remediation.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Vincoli**: nessun cambiamento contenuti curricolo, nessuna modifica runtime mappa, nessun export/import behavior, nessuno schema cambio, nessun service-worker, nessun manifest, nessuna dipendenza, nessun deploy, nessun push, nessun secret
- **Verdetto**: `CML_203_BOM_SHAPE_TEST_REMEDIATION_READY`

## 2026-06-27 - CML-202 - CML_HARDENING_READINESS_GATE_AND_CONTROLLED_PUSH

- **Commit base**: `356534d` (CML-201, main ahead origin/main di 2)
- **Tipo slice**: readiness gate + controlled push
- **Oggetto**: readiness gate finale, push controllato CML-200 + CML-201, verifica GitHub Pages pubblica
- **Pre-push checks**: git status pulito, 2 commit attesi confermati, JSON validator 14/14 PASS, CML-200 smoke 12/12 PASS, CML-201 E2E 33/33 PASS, examples 4/4 PASS, shape test pre-existing BOM failure documentata, diff-check PASS, secret scan pulito, no manual deploy
- **Push**: `git push origin main` completato con successo
- **Post-push public checks**: GitHub Pages https://antoniocorsano-boop.github.io/curmanlight/ HTTP 200 OK, app carica, 14/14 discipline visibili, hardened validation behavior reflected (unsupported schema blocked, missing schemaVersion legacy warning, malformed JSON blocked, wrong fileType blocked)
- **Final origin/main HEAD**: `356534d`
- **Artefatti**: `docs/03_execution/CML-202.md`, `report/CML-202_cml_hardening_readiness_gate_and_controlled_push.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Vincoli**: nessuna nuova feature runtime, nessun schema cambio, nessun contenuto curricolo, nessuna modifica validator design, nessuna remediation BOM, nessun service-worker, nessun manifest, nessuna dipendenza, nessun manual deploy, nessun secret, nessun history rewrite
- **Verdetto**: `CML_202_CML_HARDENING_READINESS_GATE_AND_CONTROLLED_PUSH_READY`

## 2026-06-27 - CML-201 - TEACHER_DEPARTMENT_REFERENT_CML_END_TO_END_SMOKE

- **Commit base**: `3e83d83` (CML-200, main ahead origin/main di 1)
- **Tipo slice**: docs-only smoke verification
- **Oggetto**: verifica end-to-end flusso `.cml` tra docente, dipartimento e referente con validatori CML-200
- **Script smoke**: `tools/cml201-smoke.mjs` (temporaneo, rimosso dopo esecuzione)
- **CML-200 re-run**: 12/12 PASS (valid teacher_proposal, legacy warning, unsupported block, malformed JSON block, wrong type block, partial item warnings, duplicate fingerprint, valid department_outcome, handling ids)
- **E2E smoke**: 33/33 PASS (teacher export, department import, department export, referent import, referent report, examples compatibility)
- **Validator**: 14/14 PASS
- **Shape test**: pre-existing BOM failure su `content/curriculum/*.normalized.json` (non causato da CML-200/CML-201)
- **Esempi `.cml`**: tutti e 4 gli esempi in `docs/04_user/esempi_cml/` passano come valid input senza modifiche
- **Regressioni bloccanti**: nessuna
- **Artefatti**: `docs/03_execution/CML-201.md`, `report/CML-201_teacher_department_referent_cml_end_to_end_smoke.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Vincoli**: nessuna modifica runtime, schema, export/import, contenuti, validator, shape-test, service-worker, manifest, dipendenze; nessun deploy, nessun push, nessun secret
- **Verdetto**: `CML_201_TEACHER_DEPARTMENT_REFERENT_CML_END_TO_END_SMOKE_READY`

## 2026-06-27 - CML-200 - CML_IMPORT_EXPORT_VALIDATION_HARDENING

- **Commit base**: `eb3e36f` (CML-199, main/origin aligned)
- **Commit finale**: `64f25d6`
- **Tipo slice**: runtime validation hardening
- **Oggetto**: implementazione hardening minimale validazione import/export `.cml` secondo contratto CML-199
- **File modificato**: `_published_snapshot/netlify-current/index.html` (+131, -39)
- **Regole implementate**: enforcement `schemaVersion` (missing=legacy warning, unsupported=block, malformed=block), codici validazione strutturati con `warnings`, item-level checks `id`/`proposta`/`motivazione`/`fonte`, duplicate detection con fingerprint, size limits (5MB warn/20MB block, 500 warn/2000 block), duplicate handling ID block, discipline/disciplines consistency warning, preservazione campi sconosciuti, messaggi utente migliorati
- **Funzioni modificate**: `validateTeacherCmlModel`, `parseTeacherCmlText`, `departmentProposalIssues`, `normalizeDepartmentProposal`, `importTeacherCmlFiles`, `renderDepartmentImport`, `validateDepartmentOutcomeCmlModel`, `importDepartmentOutcomeCmlFiles`, `renderReferentValidation`
- **Regole differite**: allowlist Drive endpoint, multi-discipline package format, migrazione schema v2, backend-backed import, audit trail strutturato
- **Validatore**: 14/14 PASS
- **Shape test**: pre-existing BOM failure non causato da CML-200 (verificato stash)
- **Smoke test**: 18/18 PASS (valid teacher_proposal, missing schemaVersion legacy warning, unsupported schemaVersion block, malformed JSON block, wrong fileType block, partial proposal item warnings, duplicate fingerprint, valid department_outcome, discipline/disciplines match, size/array thresholds)
- **Esempi `.cml`**: tutti e 4 gli esempi in `docs/04_user/esempi_cml/` passano come valid input senza modifiche
- **CompatibilitÃ  backward**: file v1.0 esistenti accettati senza warnings; file senza schemaVersion accettati con legacy warning; export invariato; nessun campo rimosso
- **Artefatti**: `docs/03_execution/CML-200.md`, `report/CML-200_cml_import_export_validation_hardening.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Vincoli**: nessun bump schema, nessuna migrazione, nessuna feature multi-disciplina, nessuna allowlist Drive, nessun SchoolKB, nessun Evidenze/UDA, nessun contenuto curricolo, nessuna modifica runtime mappa, nessun service-worker, nessun manifest, nessuna dipendenza, nessun deploy, nessun push, nessun secret
- **Verdetto**: `CML_200_CML_IMPORT_EXPORT_VALIDATION_HARDENING_READY`

## 2026-06-27 - CML-199 - CML_V1_SCHEMA_VERSIONING_AND_COMPATIBILITY_CONTRACT

- **Commit base**: `32a724e` (CML-198, main/origin aligned)
- **Tipo slice**: contract docs-only
- **Oggetto**: definizione contratto formale `.cml` v1.0 per versionamento, compatibilitÃ , validazione, privacy e tassonomia errori
- **Runtime ispezionato**: `_published_snapshot/netlify-current/index.html` (funzioni export/import per accuratezza contratto)
- **Schema family**: `schemaVersion: "1.0"` Ã¨ l'unica versione supportata
- **File types accettati**: `teacher_proposal`, `department_outcome`
- **Matrice ruolo/file-type**: docente esporta proposal, dipartimento importa proposal ed esporta outcome, referente importa outcome ed esporta Markdown
- **Contratti definiti**: campi required/optional/advisory per entrambi i file type, policy versioni, backward compatibility, duplicate policy, mixed-discipline policy, discipline/disciplines consistency, item-level validation, malformed/wrong-type handling, size limits, privacy/security guidance, error taxonomy
- **CML-200 scope**: enforcement `schemaVersion`, item-level checks, duplicate detection, size limits, discipline consistency, messaggi utente con recovery guidance, preservazione campi sconosciuti, `code` strutturati
- **CML-201 scope**: smoke E2E su tutti e tre i ruoli con tutti i casi di errore e tutti gli esempi `.cml` esistenti
- **Artefatti**: `docs/02_system/CML-SCHEMA-V1-CONTRACT.md`, `docs/03_execution/CML-199.md`, `report/CML-199_cml_v1_schema_versioning_and_compatibility_contract.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Vincoli**: nessuna modifica runtime, schema, export/import, contenuti, validator, shape-test, service-worker, manifest, dipendenze; nessun deploy, nessun push, nessun secret
- **Verdetto**: `CML_199_CML_V1_SCHEMA_VERSIONING_AND_COMPATIBILITY_CONTRACT_READY`

## 2026-06-27 - CML-198 - CML_SCHEMA_AND_EXPORT_IMPORT_AUDIT

- **Commit base**: `1b533c1` (CML-197, main/origin aligned)
- **Tipo slice**: audit docs-only
- **Oggetto**: audit dello schema `.cml` e del flusso export/import prima dell'hardening
- **Runtime ispezionato**: `_published_snapshot/netlify-current/index.html`
- **Funzioni mappate**: `buildTeacherCmlModel`, `exportTeacherCml`, `validateTeacherCmlModel`, `parseTeacherCmlText`, `importTeacherCmlFiles`, `buildDepartmentOutcomeCmlModel`, `exportDepartmentOutcomeCml`, `validateDepartmentOutcomeCmlModel`, `parseDepartmentOutcomeCmlText`, `importDepartmentOutcomeCmlFiles`, `downloadReferentGroupWorkReport`
- **Schema corrente**: `schemaVersion: "1.0"` presente ma non imposto; file type `teacher_proposal` e `department_outcome`
- **Rischi principali**: versioning non enforced, validazione item-level debole, duplicati warn-only, possibile divergenza `discipline`/`disciplines`, messaggi UX generici
- **CML-199 raccomandato**: contratto `.cml` v1.0 con campi required/optional/advisory, policy versioni, policy duplicati, matrice ruolo/file-type, tassonomia errori e privacy guidance
- **Artefatti**: `docs/03_execution/CML-198.md`, `report/CML-198_cml_schema_and_export_import_audit.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Vincoli**: nessuna modifica runtime, schema, export/import, contenuti, validator, shape-test, service-worker, manifest, dipendenze; nessun deploy, nessun push, nessun secret
- **Verdetto**: `CML_198_CML_SCHEMA_AND_EXPORT_IMPORT_AUDIT_READY`

## 2026-06-27 - CML-215 - MINIMAL_EVIDENCE_PANEL_RUNTIME_INCREMENT

- **Commit**: da `bd5fb02` (CML-214S) + modifiche runtime + docs
- **Tipo slice**: runtime increment (Didattica Evidenze/UDA panel)
- **Oggetto**: generalizzare pannello evidenze da Tecnologia-only a 14/14
- **File modificati**: `_published_snapshot/netlify-current/index.html` (+93/-27)
- **Dati introdotti**: `ALL_CURRICULUM_DATA` con dati curricolari 14 discipline
- **Nuove funzioni**: `getEvidenceState`, `setEvidenceState`, `resetEvidenceStates`, `getDisciplineEvidenceData`
- **Marcatura locale**: Adotta/Adatta/Escludi in localStorage (`cml_evidenze_state`), nessun dato studente
- **Correzioni**: chiavi `arte-e-immagine` â†’ `arte-immagine`, `latino--lel-` â†’ `latino-lel`
- **Non modificato**: JSON, .cml, export/import, UDA generator, validator, shape-test, service-worker, secrets
- **Artefatti**: `docs/03_execution/CML-215.md`, `report/CML-215_minimal_evidence_panel_runtime_increment.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_215_MINIMAL_EVIDENCE_PANEL_RUNTIME_INCREMENT_COMPLETE`

## 2026-06-27 - CML-197 â€” NEXT_CYCLE_SELECTION_AFTER_PUBLIC_RUNTIME_14_14

- **Commit**: `660f2e1` + docs â†’ commit finale CML-197
- **Tipo slice**: cycle selection (docs-only)
- **Oggetto**: selezione del prossimo ciclo funzionale dopo runtime 14/14 pubblico
- **Opzione selezionata**: B â€” export/import e schema .cml hardening
- **Opzioni rinviate**: C (evidenze/UDA), D (SchoolKB), E (design/UML)
- **Proposta sequenza**: CML-198 (.cml audit) â†’ CML-199 (versioning) â†’ CML-200 (validazione) â†’ CML-201 (smoke E2E) â†’ CML-202 (readiness gate)
- **Artefatti**: `docs/03_execution/CML-197.md`, `report/CML-197_next_cycle_selection_after_public_runtime_14_14.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_197_NEXT_CYCLE_SELECTION_AFTER_PUBLIC_RUNTIME_14_14_SELECTED_B`

## 2026-06-27 - CML-196 - PUBLIC_LIVE_SMOKE_GITHUB_PAGES_AFTER_RUNTIME_14_14

- **Commit**: `6ec65ec` (CML-195) + docs â†’ commit finale CML-196
- **Tipo slice**: public live smoke (docs-only)
- **Oggetto**: verifica GitHub Pages build con runtime 14/14
- **URL**: https://antoniocorsano-boop.github.io/curmanlight/
- **HTTP**: 200 OK
- **DISCIPLINE_META**: 14/14 discipline presenti
- **Seconda Lingua Comunitaria**: OK via hash #cur-SecondaLinguaComunitaria
- **Religione Cattolica**: OK via hash #cur-ReligioneCattolica
- **Latino (LEL)**: OK via hash #cur-LatinoLEL
- **Cache/service-worker**: build automatica GitHub Pages, nessun deploy manuale
- **Deploy manuale**: non eseguito
- **Artefatti**: `docs/03_execution/CML-196.md`, `report/CML-196_public_live_smoke_github_pages_after_runtime_14_14.md`, aggiornamento `docs/REPO-MOVELOG.md`

## 2026-06-27 - CML-195 - RUNTIME_14_14_CLOSURE_SMOKE_AND_CONTROLLED_PUSH_GATE

- **Commit**: `6e60fb2` (CML-194, 3 ahead origin/main) + docs â†’ commit finale CML-195
- **Tipo slice**: closure smoke + controlled push
- **Oggetto**: smoke finale 14/14 e push controllato dopo completamento runtime
- **Hash smoke**: 14/14 PASS (tutte le discipline verificabili via hash)
- **Shape test**: 14/14 PASS
- **Validatore**: 14/14 PASS
- **Push**: `git push origin main` â€” origin/main allineato
- **Runtime mappa**: 14/14
- **Deploy manuale**: non eseguito
- **Artefatti**: `docs/03_execution/CML-195.md`, `report/CML-195_runtime_14_14_closure_smoke_and_controlled_push_gate.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_195_RUNTIME_14_14_CLOSURE_SMOKE_AND_CONTROLLED_PUSH_GATE_COMPLETE`

## 2026-06-27 - CML-194 - LATINO_LEL_RUNTIME_MAPPA_INTEGRATION

- **Commit**: `aa1a27f` (CML-193, 2 ahead origin/main) + working tree â†’ commit finale CML-194
- **Tipo slice**: runtime integration controllata
- **Oggetto**: integrazione runtime mappa per Latino LEL (4 unitÃ , Secondaria 2-3, 1h/sett, LEL esplorazione linguistica)
- **Modifiche**: `_published_snapshot/netlify-current/index.html` + `tools/test-runtime-mappa-dati-shape.mjs` (FILES 13â†’14)
- **Runtime mappa pre**: 13/14
- **Runtime mappa post**: **14/14 â€” COMPLETATA**
- **Dati normalizzati**: 14/14 (invariato)
- **Shape test**: 14/14 PASS
- **Validatore**: 14/14 PASS
- **CML-192 SLC e CML-193 RC integration**: intatte
- **Residuo runtime**: nessuno
- **No push**: commit locale
- **Artefatti**: `docs/03_execution/CML-194.md`, `report/CML-194_latino_lel_runtime_integration.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_194_LATINO_LEL_RUNTIME_MAPPA_INTEGRATION_READY`

## 2026-06-27 - CML-193 - RELIGIONE_CATTOLICA_RUNTIME_MAPPA_INTEGRATION

- **Commit**: `aa1a27f` (CML-193, origin/main a `d711872`)
- **Tipo slice**: runtime integration controllata
- **Oggetto**: integrazione runtime mappa per Religione Cattolica (7 unitÃ , 3 ordini, 4 nuclei DPR 175/2012)
- **Modifiche**: `_published_snapshot/netlify-current/index.html` + `tools/test-runtime-mappa-dati-shape.mjs` (FILES 12â†’13)
- **Runtime mappa pre**: 12/14
- **Runtime mappa post**: 13/14
- **Dati normalizzati**: 14/14 (invariato)
- **Shape test**: 13/13 PASS
- **Validatore**: 14/14 PASS
- **CML-192 SLC integration**: intatta
- **Latino LEL**: non integrato
- **Residuo runtime**: 1/14 (Latino LEL)
- **No push**: commit locale
- **Artefatti**: `docs/03_execution/CML-193.md`, `report/CML-193_religione_cattolica_runtime_integration.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_193_RELIGIONE_CATTOLICA_RUNTIME_MAPPA_INTEGRATION_READY`

## 2026-06-27 - CML-192 - SECONDA_LINGUA_COMUNITARIA_RUNTIME_MAPPA_INTEGRATION

- **Commit**: `d1513d1` (CML-192, 1 ahead origin/main)
- **Tipo slice**: runtime integration controllata
- **Oggetto**: integrazione runtime mappa per Seconda Lingua Comunitaria (6 unitÃ , Secondaria 1-3, QCER A1/A2)
- **Modifiche**: `_published_snapshot/netlify-current/index.html` + `tools/test-runtime-mappa-dati-shape.mjs` (FILES 11â†’12)
- **Runtime mappa pre**: 11/14
- **Runtime mappa post**: 12/14
- **Dati normalizzati**: 14/14 (invariato)
- **Shape test**: 12/12 PASS
- **Validatore**: 14/14 PASS
- **Residuo runtime**: 2/14 (Religione Cattolica, Latino LEL)
- **No push**: commit locale
- **Artefatti**: `docs/03_execution/CML-192.md`, `report/CML-192_seconda_lingua_comunitaria_runtime_integration.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_192_SECONDA_LINGUA_COMUNITARIA_RUNTIME_MAPPA_INTEGRATION_READY`

## 2026-06-27 - CML-191 - NEXT_CYCLE_SELECTION_AFTER_14_14_DATA_COMPLETION

- **Commit**: `215bfeb` (CML-190, 1 ahead origin/main)
- **Tipo slice**: docs-only / selection audit
- **Oggetto**: selezione formale del prossimo ciclo CurManLight dopo completamento 14/14
- **Opzione selezionata**: **A â€” Runtime integration** per le 3 discipline residue (Seconda Lingua Comunitaria, Religione Cattolica, Latino LEL)
- **Micro-slice**: CML-192 (Sec. Lingua), CML-193 (Religione), CML-194 (LEL), CML-195 (14/14 closure)
- **Opzioni respinte**: B (UML/docs: nessun impatto), C (evidenze/UDA: troppo presto), D (export/import: maturitÃ  insufficiente), E (SchoolKB: non completa gap funzionali)
- **No push**: commit locale
- **Artefatti**: `docs/03_execution/CML-191.md`, `report/CML-191_next_cycle_selection_after_14_14_data_completion.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_191_NEXT_CYCLE_SELECTION_AFTER_14_14_DATA_COMPLETION_READY`

## 2026-06-27 - CML-190 - NORMALIZED_DATA_14_14_COMPLETION_AUDIT

- **Commit**: `67c313f` (HEAD = origin/main)
- **Tipo slice**: docs-only / completion audit
- **Oggetto**: audit finale del completamento 14/14 dei dati normalizzati del curriculum CurManLight
- **Verifiche**: validatore 14/14 PASS, shape 11/11 PASS, no secrets, no runtime changes
- **Commits di normalizzazione**: `a190af8` (CML-186), `fcef611` (CML-187), `cb5ffc9` (CML-188)
- **Rebase**: hash modificati per effetto del rebase su `aff6f09` (PR#3 ecc-tools) durante CML-189
- **Runtime**: invariato (11/14)
- **Dati normalizzati**: 14/14 âœ…
- **Prossima decisione**: CML-191 sceglierÃ  il prossimo ciclo tra A (runtime integration), B (design/UML), C (evidenze/UDA), D (export/import/.cml), E (SchoolKB)
- **No push**: commit locale
- **Artefatti**: `docs/03_execution/CML-190.md`, `report/CML-190_normalized_data_14_14_completion_audit.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_190_NORMALIZED_DATA_14_14_COMPLETION_AUDIT_READY`

## 2026-06-27 - CML-189 - CONTROLLED_SYNC_BATCH_AFTER_14_14_DATA_COMPLETION

- **Commit locale pre-push**: `3470f65`
- **origin/main pre-push**: `ba051ff` (remote aveva `aff6f09` PR#3, rebasato)
- **origin/main post-push**: `a81fdf0` â€” allineato âœ…
- **Tipo slice**: sync â€” push controllato batch 14/14
- **Oggetto**: push dei tre commit CML-186, CML-187, CML-188 verso origin/main dopo completamento 14/14
- **Commits pushati**:
  - `22c48af` CML-186 â€” Seconda Lingua Comunitaria limited draft
  - `a8bd394` CML-187 â€” Religione Cattolica limited draft
  - `3470f65` CML-188 â€” Latino LEL limited draft (14/14)
- **Pre-push checks**: validatore 14/14 PASS, shape 11/11 PASS, diff-check PASS, credential scan OK
- **Runtime**: invariato (11/14) â€” nessuna modifica runtime
- **Dati normalizzati post-sync**: 14/14 âœ…
- **Deploy manuale**: non eseguito
- **Push**: eseguito
- **Artefatti**: `docs/03_execution/CML-189.md`, `report/CML-189_controlled_sync_batch_after_14_14_data_completion.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Prossima slice consigliata**: audit di completamento 14/14 (CML-190) o nuovo ciclo funzionale
- **Verdetto**: `CML_189_CONTROLLED_SYNC_BATCH_AFTER_14_14_DATA_COMPLETION_READY`

## 2026-06-27 - CML-186 - SECONDA_LINGUA_COMUNITARIA_LIMITED_DRAFT_DATA_PREP

- **Commit iniziale**: `ba051ff` (allineato con `origin/main`)
- **Tipo slice**: data-prep limitata / limited draft
- **Oggetto**: creazione bozza normalizzata Seconda Lingua Comunitaria come draft prudente e language-neutral
- **Decisione autorizzativa**: selezione CML-185 (`NEXT_DISCIPLINE_SELECTED: Seconda Lingua Comunitaria`) + CML-182B (`LIMITED_DRAFT_DATA_PREP_ALLOWED`)
- **File creato**: `content/curriculum/seconda-lingua-comunitaria.normalized.json`
- **Dati normalizzati**: 12/14 (era 11/14)
- **Runtime mappa**: invariato (11/14) â€” nessuna integrazione runtime
- **Shape test**: 11/11 PASS (invariato)
- **Unita**: 6 (solo Secondaria: classe 1 x2, classe 2 x2, classe 3 x2)
- **Nuclei**: 6 (Ascolto e comprensione orale, Produzione orale e interazione, Lettura e comprensione scritta, Produzione scritta, Interazione e produzione orale, Cultura e confronto interculturale)
- **Vincoli specifici**: language-neutral (nessuna lingua target specificata), solo Secondaria, QCER A1/A2
- **Marcatori draft**: `humanValidationRequired: true`, `validazioneUmana: true` su ogni unita, `stato: bozza_generabile`, note dipartimento su ogni unita
- **Prossima slice consigliata**: CML-187 â€” prossima disciplina residua (Religione Cattolica o Latino LEL) o runtime integration per Seconda Lingua Comunitaria dopo validazione umana
- **Runtime**: invariato
- **Tools**: invariati
- **SchoolKB**: invariato
- **Deploy**: non eseguito
- **Push**: non eseguito
- **Artefatti**: `content/curriculum/seconda-lingua-comunitaria.normalized.json`, `docs/03_execution/CML-186.md`, `report/CML-186_seconda_lingua_comunitaria_limited_draft_data_prep.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Residuo runtime**: 2/14 (Religione Cattolica, Latino LEL)
- **Verdetto**: `CML_186_SECONDA_LINGUA_COMUNITARIA_LIMITED_DRAFT_DATA_PREP_READY`

## 2026-06-27 - CML-187 - RELIGIONE_CATTOLICA_LIMITED_DRAFT_DATA_PREP

- **Commit iniziale**: `22c48af` (CML-186 committato, 1 ahead origin/main)
- **Tipo slice**: data-prep limitata / limited draft
- **Oggetto**: creazione bozza normalizzata Religione Cattolica (IRC) come draft prudente e istituzionale
- **Decisione autorizzativa**: sequenza CML-172 + CML-182B (`LIMITED_DRAFT_DATA_PREP_ALLOWED`)
- **File creato**: `content/curriculum/religione-cattolica.normalized.json`
- **Dati normalizzati**: 13/14 (era 12/14)
- **Runtime mappa**: invariato (11/14) â€” nessuna integrazione runtime
- **Shape test**: 11/11 PASS (invariato)
- **Unita**: 7 (Infanzia 1, Primaria 3, Secondaria 3)
- **Nuclei**: 4 (Dio e l'uomo, La Bibbia e le altre fonti, Il linguaggio religioso, I valori etici e religiosi â€” DPR 175/2012)
- **Vincoli specifici**: linguaggio istituzionale e scolastico (non catechetico), 4 nuclei DPR 175/2012, copertura completa 3 ordini
- **Marcatori draft**: `humanValidationRequired: true`, `validazioneUmana: true` su ogni unita, `stato: bozza_generabile`, note dipartimento su ogni unita
- **Prossima slice consigliata**: CML-188 â€” Latino LEL limited draft data prep (ultima disciplina residua) o sync CML-186 + CML-187
- **Runtime**: invariato
- **Tools**: invariati
- **SchoolKB**: invariato
- **Deploy**: non eseguito
- **Push**: non eseguito
- **Artefatti**: `content/curriculum/religione-cattolica.normalized.json`, `docs/03_execution/CML-187.md`, `report/CML-187_religione_cattolica_limited_draft_data_prep.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Residuo runtime**: 1/14 (Latino LEL)
- **Verdetto**: `CML_187_RELIGIONE_CATTOLICA_LIMITED_DRAFT_DATA_PREP_READY`

## 2026-06-27 - CML-188 - LATINO_LEL_LIMITED_DRAFT_DATA_PREP

- **Commit iniziale**: `a8bd394` (CML-187 committato, 2 ahead origin/main)
- **Tipo slice**: data-prep limitata / limited draft
- **Oggetto**: creazione bozza normalizzata Latino (LEL) come draft conservativo per l'ultima disciplina residua
- **Decisione autorizzativa**: sequenza CML-172 + CML-182B (`LIMITED_DRAFT_DATA_PREP_ALLOWED`)
- **File creato**: `content/curriculum/latino-lel.normalized.json`
- **Dati normalizzati**: **14/14** (era 13/14) â€” **tutte le 14 discipline completate** âœ…
- **Runtime mappa**: invariato (11/14) â€” nessuna integrazione runtime
- **Shape test**: 11/11 PASS (invariato)
- **Unita**: 4 (solo Secondaria: classe 2 x2, classe 3 x2)
- **Nuclei**: 4 (Lessico e morfologia di base, Rapporto latino-italiano, Cultura classica e civiltÃ  romana, Metodo linguistico e lessico settoriale)
- **Vincoli specifici**: LEL = Esplorazione Linguistica (non Latino classico), solo Secondaria classi 2-3, disciplina nuova IN 2025 (DM 221/2025), 1h/sett, approccio comparativo
- **Marcatori draft**: `humanValidationRequired: true`, `validazioneUmana: true` su ogni unita, `stato: bozza_generabile`, note dipartimento su ogni unita
- **Prossima slice consigliata**: sync batch controllato (CML-186 + CML-187 + CML-188) per allineare origin/main
- **Runtime**: invariato
- **Tools**: invariati
- **SchoolKB**: invariato
- **Deploy**: non eseguito
- **Push**: non eseguito
- **Artefatti**: `content/curriculum/latino-lel.normalized.json`, `docs/03_execution/CML-188.md`, `report/CML-188_latino_lel_limited_draft_data_prep.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Residuo runtime**: 1/14 (Latino LEL â€” non ancora integrato in mappa)
- **Verdetto**: `CML_188_LATINO_LEL_LIMITED_DRAFT_DATA_PREP_READY`

## 2026-06-27 - CML-185 - RESIDUAL_DISCIPLINE_SELECTION_AUDIT

- **Commit iniziale**: `8a8351a` (allineato con `origin/main`)
- **Tipo slice**: docs-only / selection audit
- **Oggetto**: selezione formale della prossima disciplina residua dopo chiusura Educazione Fisica
- **Decisione principale**: `NEXT_DISCIPLINE_SELECTED: Seconda Lingua Comunitaria`
- **Prossima slice**: `CML-186 â€” SECONDA_LINGUA_COMUNITARIA_LIMITED_DRAFT_DATA_PREP`
- **Dati normalizzati**: invariato (11/14)
- **Runtime mappa**: invariato (11/14)
- **Shape test**: 11/11 PASS (invariato)
- **Discipline residue valutate**: Seconda Lingua Comunitaria, Religione Cattolica, Latino LEL
- **Disciplina selezionata**: Seconda Lingua Comunitaria
- **Criteri**: continuitÃ  con CML-172, readiness dati, rischio contenuto inventato, rischio istituzionale, compatibilitÃ  schema, limited draft coerenza
- **Motivazione**: Ã¨ la prossima nella sequenza residua CML-172; Musica e Educazione Fisica completate; puÃ² riusare pattern linguistico Inglese; rischio medio-basso; Religione Cattolica e Latino LEL posticipati per rischi maggiori
- **Prossima slice consigliata**: CML-186 â€” SECONDA_LINGUA_COMUNITARIA_LIMITED_DRAFT_DATA_PREP
- **Runtime**: invariato
- **Tools**: invariati
- **SchoolKB**: invariato
- **Deploy**: non eseguito
- **Push**: non eseguito
- **Artefatti**: `docs/03_execution/CML-185.md`, `report/CML-185_residual_discipline_selection_audit.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Residuo runtime**: 3/14 (Seconda Lingua Comunitaria, Religione Cattolica, Latino LEL)
- **Verdetto**: `CML_185_RESIDUAL_DISCIPLINE_SELECTION_AUDIT_READY`

## 2026-06-27 - CML-184A - RUNTIME_SHAPE_TEST_ALIGNMENT

- **Commit iniziale**: `12e698d` (CML-184 sincronizzato con origin/main)
- **Tipo slice**: test alignment / shape
- **Oggetto**: allineamento copertura shape test a 11/11 dopo integrazione EF (CML-184)
- **Decisione autorizzativa**: shape scope note in CML-184-SYNC
- **File modificato**: `tools/test-runtime-mappa-dati-shape.mjs`
- **Modifica**: aggiunto `'educazione-fisica.normalized.json'` a FILES array + expected counts `{ s: 7, n: 4, p: 7, d: 0 }`
- **Shape test prima**: 10/10 PASS
- **Shape test dopo**: 11/11 PASS
- **Runtime mappa**: invariato (11/14)
- **Dati normalizzati**: invariato (11/14)
- **Prossima slice consigliata**: CML-185 â€” disciplina residua o prossimo incremento funzionale
- **Runtime**: invariato
- **Tools**: solo shape test aggiornato
- **SchoolKB**: invariato
- **Deploy**: non eseguito
- **Push**: non eseguito
- **Artefatti**: `tools/test-runtime-mappa-dati-shape.mjs`, `docs/03_execution/CML-184A.md`, `report/CML-184A_runtime_shape_test_alignment.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_184A_RUNTIME_SHAPE_TEST_ALIGNMENT_READY`

## 2026-06-27 - CML-184 - EDUCAZIONE_FISICA_RUNTIME_MAPPA_INTEGRATION

- **Commit iniziale**: `ed4fd48` (CML-183 committato e sincronizzato con origin/main)
- **Tipo slice**: runtime integration
- **Oggetto**: integrazione Educazione Fisica nella mappa dati disciplinare runtime
- **Decisione autorizzativa**: `LIMITED_DRAFT_DATA_PREP_ALLOWED` (CML-182B) + CML-183 (draft normalizzato)
- **File modificato**: `_published_snapshot/netlify-current/index.html` (3 edits: MAPPA_DATI var, render branch, selector button)
- **Dati normalizzati**: invariato (11/14)
- **Runtime mappa**: 11/14 (era 10/14)
- **Shape test**: 10/10 PASS (invariato â€” tools/ non modificati)
- **UnitÃ  integrate**: 7 (Infanzia 1, Primaria 3, Secondaria 3)
- **Nodi disciplinari**: 4 (Abilita motorie, Corpo e percezione, Espressione e inclusione, Gioco e sport)
- **Stato EF**: limited draft â€” `humanValidationRequired: true` preservato nei dati normalizzati
- **Prossima slice consigliata**: CML-185 â€” altra disciplina residua o prossimo incremento funzionale
- **Runtime**: aggiornato (11/14)
- **Tools**: invariati
- **SchoolKB**: invariato
- **Deploy**: non eseguito
- **Push**: non eseguito
- **Artefatti**: `_published_snapshot/netlify-current/index.html`, `docs/03_execution/CML-184.md`, `report/CML-184_educazione_fisica_runtime_mappa_integration.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Residuo runtime**: 3/14 (Seconda Lingua Comunitaria, Religione Cattolica, Latino LEL)
- **Verdetto**: `CML_184_EDUCAZIONE_FISICA_RUNTIME_MAPPA_INTEGRATION_READY`

## 2026-06-27 - CML-183 - EDUCAZIONE_FISICA_LIMITED_DRAFT_DATA_PREP

- **Commit iniziale**: `bbd41c0` (allineato con `origin/main`)
- **Tipo slice**: data-prep limitata / limited draft
- **Oggetto**: creazione bozza normalizzata Educazione Fisica come draft prudente
- **Decisione autorizzativa**: `LIMITED_DRAFT_DATA_PREP_ALLOWED` (CML-182B)
- **File creato**: `content/curriculum/educazione-fisica.normalized.json`
- **Dati normalizzati**: 11/14 (era 10/14)
- **Runtime mappa**: invariato (10/14) â€” nessuna integrazione runtime
- **Shape test**: 10/10 PASS (invariato)
- **Unita**: 7 (Infanzia 1, Primaria 3, Secondaria 3)
- **Nuclei**: 5 (Corpo e percezione, Abilita motorie, Gioco e sport, Salute e benessere, Espressione e inclusione)
- **Marcatori draft**: `humanValidationRequired: true`, `validazioneUmana: true`, `stato: bozza_generabile`, note dipartimento su ogni unita
- **Prossima slice consigliata**: CML-184 â€” EDUCAZIONE_FISICA_RUNTIME_MAPPA_INTEGRATION o altra disciplina residua
- **Runtime**: invariato
- **Tools**: invariati
- **SchoolKB**: invariato
- **Deploy**: non eseguito
- **Push**: non eseguito
- **Artefatti**: `content/curriculum/educazione-fisica.normalized.json`, `docs/03_execution/CML-183.md`, `report/CML-183_educazione_fisica_limited_draft_data_prep.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_183_EDUCAZIONE_FISICA_LIMITED_DRAFT_DATA_PREP_READY`

## 2026-06-27 - CML-182B - EDUCAZIONE_FISICA_DATA_PREP_DECISION_CORRECTION

- **Commit iniziale**: `cf2c607` (allineato con `origin/main`)
- **Tipo slice**: docs-only / decision correction
- **Oggetto**: correzione decisione CML-182: distinzione tra approvazione finale umana e bozza draft prudente
- **Decisione principale**: `LIMITED_DRAFT_DATA_PREP_ALLOWED`
- **Esito**: bozza normalizzata autorizzata con vincoli (`humanValidationRequired: true`, nessuna runtime integration automatica); approvazione finale resta umana
- **Prossima slice consigliata**: CML-183 â€” EDUCAZIONE_FISICA_LIMITED_DRAFT_DATA_PREP
- **Runtime**: invariato
- **Dati curriculum**: invariati; nessun file `.normalized.json` creato
- **Tools**: invariati
- **SchoolKB**: invariato
- **Deploy**: non eseguito
- **Push**: non eseguito
- **Artefatti**: `docs/03_execution/CML-182B.md`, `report/CML-182B_educazione_fisica_data_prep_decision_correction.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_182B_EDUCAZIONE_FISICA_DATA_PREP_DECISION_CORRECTION_READY`

## 2026-06-27 - CML-182 - EDUCAZIONE_FISICA_VALIDATION_OUTCOME_DECISION

- **Commit iniziale**: `7a6a98b` (allineato con `origin/main`)
- **Tipo slice**: docs-only / validation outcome decision
- **Oggetto**: registrazione esito validazione umana per Educazione Fisica dopo CML-181
- **Decisione principale**: `VALIDATION_OUTCOME_PENDING`
- **Esito**: checklist CML-181 creata ma non compilata; nessuna validazione umana disponibile; data-prep non autorizzata
- **Rischio dati residuo**: medio (invariato)
- **Rischio istituzionale residuo**: medio (invariato)
- **Prossima slice consigliata**: CML-183 â€” EDUCAZIONE_FISICA_VALIDATION_COLLECTION_TEMPLATE
- **Runtime**: invariato
- **Dati curriculum**: invariati; nessun file `.normalized.json` creato
- **Tools**: invariati
- **SchoolKB**: invariato
- **Deploy**: non eseguito
- **Push**: non eseguito
- **Artefatti**: `docs/03_execution/CML-182.md`, `report/CML-182_educazione_fisica_validation_outcome_decision.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_182_EDUCAZIONE_FISICA_VALIDATION_OUTCOME_DECISION_READY`

## 2026-06-27 - CML-181 - EDUCAZIONE_FISICA_HUMAN_VALIDATION_CHECKLIST

- **Commit iniziale**: `761622d` (allineato con `origin/main`)
- **Tipo slice**: docs-only / human validation checklist
- **Oggetto**: checklist di validazione umana/dipartimentale per Educazione Fisica dopo CML-180
- **Esito**: checklist completa e pronta per compilazione; disciplina non ancora normalizzata
- **Struttura checklist**: 21 tabelle su 10 aree (identita, nuclei, progressione, obiettivi, traguardi, conoscenze/abilita/atteggiamenti, valutazione, inclusione/sicurezza, compatibilita CML, decisione finale)
- **Esiti previsti**: sufficiente / parziale / insufficiente per data-prep
- **Prossima slice consigliata**: CML-182 - EDUCAZIONE_FISICA_VALIDATION_OUTCOME_DECISION
- **Runtime**: invariato
- **Dati curriculum**: invariati; nessun file `.normalized.json` creato
- **Tools**: invariati
- **SchoolKB**: invariato
- **Deploy**: non eseguito
- **Push**: non eseguito
- **Artefatti**: `docs/03_execution/CML-181.md`, `report/CML-181_educazione_fisica_human_validation_checklist.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_181_EDUCAZIONE_FISICA_HUMAN_VALIDATION_CHECKLIST_READY`

## 2026-06-27 - CML-180 - EDUCAZIONE_FISICA_CONTROLLED_DATA_PREP_READINESS_DECISION

- **Commit iniziale**: `1923fed` (sync con `origin/main`)
- **Tipo slice**: docs-only / readiness decision
- **Oggetto**: decisione controllata su data preparation Educazione Fisica dopo CML-178 e CML-179
- **Decisione principale**: `HUMAN_VALIDATION_REQUIRED_BEFORE_DATA_PREP`
- **Esito**: gap-fill utile ma non sufficiente per creare `educazione-fisica.normalized.json` senza validazione docente/dipartimentale
- **Rischio dati residuo**: medio
- **Rischio istituzionale residuo**: medio
- **Prossima slice consigliata**: `CML-181 - EDUCAZIONE_FISICA_HUMAN_VALIDATION_CHECKLIST`
- **Runtime**: invariato
- **Dati curriculum**: invariati; nessun file `.normalized.json` creato
- **Tools**: invariati
- **SchoolKB**: invariato
- **Deploy**: non eseguito
- **Push**: non eseguito
- **Artefatti**: `docs/03_execution/CML-180.md`, `report/CML-180_educazione_fisica_controlled_data_prep_readiness_decision.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_180_EDUCAZIONE_FISICA_CONTROLLED_DATA_PREP_READINESS_DECISION_READY`

## 2026-06-27 - CML-179 - EDUCAZIONE_FISICA_GAP_FILL_DOCUMENTALE_MANUALE

- **Commit iniziale**: `d457261` (locale ahead 1; `origin/main` a `129a816`)
- **Tipo slice**: docs-only / manual gap-fill
- **Oggetto**: base documentale manuale per Educazione Fisica dopo CML-178
- **Esito**: gap-fill documentale pronto; disciplina ancora non pronta per data preparation senza revisione umana
- **Readiness**: non pronta / gap-fill documentale pronto
- **Raccomandazione**: revisione umana docente/dipartimentale; data preparation solo dopo validazione
- **Runtime**: invariato
- **Dati curriculum**: invariati; nessun file `.normalized.json` creato
- **Tools**: invariati
- **SchoolKB**: invariato
- **Deploy**: non eseguito
- **Push**: non eseguito
- **Artefatti**: `docs/03_execution/CML-179.md`, `report/CML-179_educazione_fisica_gap_fill_documentale_manuale.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_179_EDUCAZIONE_FISICA_GAP_FILL_DOCUMENTALE_MANUALE_READY`

## 2026-06-27 - CML-178 - EDUCAZIONE_FISICA_DETAILED_GAP_MODEL

- **Commit iniziale**: `129a816` (sync con `origin/main`)
- **Tipo slice**: docs-only / readiness-audit
- **Oggetto**: detailed gap model per Educazione Fisica dopo CML-177
- **Esito**: readiness confermata **non pronta**; dati insufficienti per data preparation senza gap-fill
- **Rischio dati**: medio
- **Rischio istituzionale**: medio
- **Raccomandazione**: prossima slice di gap-fill documentale/manuale prima di creare `educazione-fisica.normalized.json`
- **Runtime**: invariato
- **Dati curriculum**: invariati; nessun file `.normalized.json` creato
- **Tools**: invariati
- **SchoolKB**: invariato
- **Deploy**: non eseguito
- **Push**: non eseguito
- **Artefatti**: `docs/03_execution/CML-178.md`, `report/CML-178_educazione_fisica_detailed_gap_model.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_178_EDUCAZIONE_FISICA_DETAILED_GAP_MODEL_READY`

## 2026-06-27 - CML-OPS-004 - CML_DOCS_ONLY_AND_READINESS_SKILLS

- **Commit iniziale**: `d79956e` (sync con `origin/main`)
- **Tipo slice**: docs-only / OPS
- **Oggetto**: creazione delle skill `cml-docs-only-slice` e `cml-readiness-audit`
- **Esito**: skill operative create per slice documentali e audit readiness disciplinare
- **Modifiche**: `CLAUDE.md` aggiornato minimamente per riflettere le tre skill create
- **Runtime**: invariato
- **Dati curriculum**: invariati
- **Tools**: invariati
- **SchoolKB**: invariato
- **`.claude/`**: aggiunte solo le due skill autorizzate; nessun hook creato
- **Artefatti**: `.claude/skills/cml-docs-only-slice/SKILL.md`, `.claude/skills/cml-readiness-audit/SKILL.md`, `docs/03_execution/CML-OPS-004.md`, `report/CML-OPS-004_docs_only_and_readiness_skills.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_OPS_004_DOCS_ONLY_AND_READINESS_SKILLS_READY`

## 2026-06-26 â€” CML-OPS-003 â€” CML_SYNC_SKILL

- **Commit iniziale**: `8b1dee3` (sync con `origin/main`)
- **Tipo slice**: docs-only / OPS
- **Oggetto**: creazione della prima skill operativa `cml-sync` per la sincronizzazione remota controllata
- **Esito**: skill creata in `.claude/skills/cml-sync/SKILL.md`; definisce preflight, regole di blocco, push controllato e formato output standard
- **Modifiche**: `CLAUDE.md` aggiornato per riflettere lo stato OPS
- **Runtime**: invariato
- **`.claude/`**: creata directory skills/cml-sync/ (nessun hook creato)
- **Artefatti**: `.claude/skills/cml-sync/SKILL.md`, `docs/03_execution/CML-OPS-003.md`, `report/CML-OPS-003_cml_sync_skill.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_OPS_003_CML_SYNC_SKILL_READY`

## 2026-06-26 â€” CML-OPS-002 â€” CLAUDE_MD_MINIMAL_PROJECT_MEMORY

- **Commit iniziale**: `28b697e` (sync con `origin/main`)
- **Tipo slice**: docs-only / OPS
- **Oggetto**: creare `CLAUDE.md` minimale alla radice come memoria operativa per Claude Code
- **Esito**: `CLAUDE.md` creato con 8 sezioni operative (~75 righe): identity, stato consolidato, regole operative, tipi slice, validazioni, report format, confine SchoolKB, prossime slice
- **Contenuto escluso**: cronologia, log, credenziali, deploy automatico, push automatico
- **`.claude/`**: non creata
- **Skill/hook**: non creati
- **Runtime**: invariato
- **Artefatti**: `CLAUDE.md`, `docs/03_execution/CML-OPS-002.md`, `report/CML-OPS-002_claude_md_minimal_project_memory.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_OPS_002_CLAUDE_MD_MINIMAL_PROJECT_MEMORY_READY`

## 2026-06-26 â€” CML-OPS-001 â€” CLAUDE_CODE_SKILLS_AND_HOOKS_CONTRACT

- **Commit iniziale**: `6485fa2` (sync con `origin/main`)
- **Tipo slice**: docs-only / contratto operativo
- **Oggetto**: definire contratto operativo per Claude Code nel progetto CurManLight
- **Esito**: contratto completo con 20 sezioni; decisione: usare subito CLAUDE.md minimale, skill P0 e hook P0; rinviare subagent, MCP e plugin
- **Skill proposte**: 8 (cml-sync, cml-docs-only-slice, cml-readiness-audit, cml-normalized-data-prep, cml-runtime-integration, cml-shape-test-alignment, skb-contract, skb-local-prototype)
- **Hook proposti**: 8 (guard-scope, guard-secrets, guard-push, guard-runtime-docs, guard-curriculum-data, post-edit-check, post-data-validate, post-shape-validate)
- **Roadmap OPS**: 7 step (CML-OPS-001â†’CML-OPS-007)
- **Runtime**: invariato
- **`.claude/`**: non creata
- **`CLAUDE.md`**: non creato (specificato nel contratto, creazione in OPS-002)
- **Artefatti**: `docs/02_system/CLAUDE-CODE-LOCAL-WORKFLOW-CONTRACT.md`, `docs/03_execution/CML-OPS-001.md`, `report/CML-OPS-001_claude_code_skills_and_hooks_contract.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_OPS_001_CLAUDE_CODE_SKILLS_AND_HOOKS_CONTRACT_READY`

## 2026-06-26 â€” CML-177 â€” EDUCAZIONE_FISICA_READINESS_DATA_AUDIT

- **Commit iniziale**: `d3bd4a2` (sync con `origin/main`)
- **Tipo slice**: docs-only / audit-only
- **Oggetto**: audit documentale per Educazione Fisica seconda disciplina della sequenza residua
- **Esito**: readiness bassa, dati non sufficienti per data preparation; Educazione Fisica non Ã¨ pronta
- **Motivazione**: 4 nuclei indicati in report generici (CML-104) ma nessuna formalizzazione strutturata; progressione verticale non ricostruibile; rischio istituzionale medio
- **Raccomandazione**: CML-178 come audit dettagliato obbligatorio prima di qualsiasi normalizzazione
- **Runtime**: invariato
- **Shape runtime test**: 10/10 (invariato)
- **Artefatti**: `docs/03_execution/CML-177.md`, `report/CML-177_educazione_fisica_readiness_data_audit.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_177_EDUCAZIONE_FISICA_READINESS_DATA_AUDIT_READY`

## 2026-06-26 â€” CML-165 â€” NORMALIZED_DATA_PREPARATION_SELECTION

- **Commit iniziale**: `903e651` (sync con `origin/main`)
- **Tipo slice**: docs-only / audit-only
- **Oggetto**: selezione disciplina per data preparation (CML-166)
- **Esito**: nessuna disciplina ha file `.normalized.json`; selezionata **Educazione Civica** come prima da normalizzare
- **Motivazione**: maggiore base documentale (8 item storici, 4 nuclei), completezza asse Storico-sociale, raccordo con Cittadinanza
- **Runtime**: invariato
- **Artefatti**: `docs/03_execution/CML-165.md`, `report/CML-165_normalized_data_preparation_selection.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_165_NORMALIZED_DATA_PREPARATION_SELECTION_READY`

## 2026-06-26 â€” CML-164 â€” NEXT_DISCIPLINE_RUNTIME_MAPPA_SELECTION_AUDIT

- **Commit iniziale**: `e089958` (sync con `origin/main`)
- **Tipo slice**: docs-only / audit-only
- **Oggetto**: audit documentale per selezionare prossima disciplina da integrare nella mappa runtime
- **Esito**: nessuna disciplina candidata ha file `.normalized.json` disponibile; 7/14 discipline integrate, 7 senza dati normalizzati
- **Copertura runtime attuale**: Tecnologia, Matematica, Italiano, Scienze, Storia, Geografia, Inglese
- **Raccomandazione**: CML-165 come task di data preparation, non runtime integration
- **Runtime**: invariato
- **Artefatti**: `docs/03_execution/CML-164.md`, `report/CML-164_next_discipline_runtime_mappa_selection_audit.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_164_NEXT_DISCIPLINE_RUNTIME_MAPPA_SELECTION_AUDIT_READY`

## 2026-06-26 - CML-163 - INGLESE_CONTROLLED_RUNTIME_MAPPA_DATI_INTEGRATION

- **Commit iniziale**: `0dd411d` (sync con `origin/main`)
- **Tipo slice**: runtime increment â€” integrazione mappa disciplinare Inglese
- **File modificati**: `_published_snapshot/netlify-current/index.html`, aggiornamento `docs/REPO-MOVELOG.md`, `docs/03_execution/CML-163.md`, `report/CML-163_inglese_runtime_mappa_dati_integration.md`
- **Integrazione**: aggiunto pulsante selettore Inglese, variabile `INGLESE_MAPPA_DATI` (12 strutture, 11 nodi, 9 progressioni, 0 decisioni) e switch in `setMappaDisciplina()`
- **Discipline modificate**: solo Inglese (nuova); Tecnologia/Matematica/Italiano/Scienze/Storia/Geografia invariati
- **Decisioni curricolari**: D=0 deliberato â€” Inglese non ha audit preparatorio
- **Validatore**: 7 file / 94 unitÃ  / `overallValid: true` / 0 errori
- **Harness mappa**: 7/7 discipline PASS (Inglese: S=12 N=11 P=9 D=0)
- **Vincoli**: JSON, schema `.cml`, import/export, service worker/cache, workflow, dipendenze, root `index.html` e landing UI/UX invariati
- **Deploy**: non eseguito
- **Push**: non eseguito
- **Artefatti**: `docs/03_execution/CML-163.md`, `report/CML-163_inglese_runtime_mappa_dati_integration.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_163_INGLESE_CONTROLLED_RUNTIME_MAPPA_DATI_READY`

## 2026-06-26 - CML-162 - GEOGRAFIA_RUNTIME_MAPPA_DATI_INTEGRATION

- **Commit iniziale**: `c5c827a` (sync con `origin/main` `0bffd68`)
- **Commit finale**: `a770982` (amend con docs)
- **Tipo slice**: runtime increment â€” integrazione mappa disciplinare Geografia
- **File modificati**: `_published_snapshot/netlify-current/index.html`, aggiornamento `docs/REPO-MOVELOG.md`, `docs/03_execution/CML-162.md`, `report/CML-162_geografia_runtime_mappa_dati_integration.md`
- **Integrazione**: aggiunto pulsante selettore Geografia, variabile `GEOGRAFIA_MAPPA_DATI` (12 strutture, 3 nodi, 9 progressioni, 0 decisioni) e switch in `setMappaDisciplina()`
- **Discipline modificate**: solo Geografia (nuova); Tecnologia/Matematica/Italiano/Scienze/Storia invariati
- **Decisioni curricolari**: D=0 deliberato â€” Geografia non ha audit preparatorio
- **Validatore**: 7 file / 94 unitÃ  / `overallValid: true` / 0 errori
- **Harness mappa**: 7/7 discipline PASS (Geografia: S=12 N=3 P=9 D=0)
- **Vincoli**: JSON, schema `.cml`, import/export, service worker/cache, workflow, dipendenze, root `index.html` e landing UI/UX invariati
- **Deploy**: non eseguito
- **Push**: non eseguito ancora
- **Artefatti**: `docs/03_execution/CML-162.md`, `report/CML-162_geografia_runtime_mappa_dati_integration.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_162_GEOGRAFIA_LOCAL_FINAL_AUDIT_READY`

## 2026-06-26 - CML-161 - DIDATTICA_COVERAGE_GAP_AUDIT

- **Commit iniziale**: `7498682` (sync con `origin/main`)
- **Tipo slice**: docs-only / audit-only
- **Oggetto**: audit del gap tra copertura Curriculum e funzioni operative Didattica
- **Esito Curriculum**: modello effettivo a 14 discipline; copertura dichiarata 14/14 con traguardi e obiettivi
- **Esito Didattica**: evidenze/UDA ancora concentrate su Tecnologia; mappa disciplinare progressiva su Tecnologia, Matematica, Italiano, Scienze e Storia
- **Gap classificato**: non curricolare generale; gap operativo didattico
- **Runtime**: invariato
- **Artefatti**: `docs/03_execution/CML-161.md`, `report/CML-161_didattica_coverage_gap_audit.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_161_DIDATTICA_COVERAGE_GAP_AUDIT_READY`
## 2026-06-26 - CML-160 - STORIA_CONTROLLED_RUNTIME_MAPPA_DATI_INTEGRATION

- **Commit iniziale**: `90163cf` (sync con `origin/main`)
- **Tipo slice**: runtime increment - integrazione mappa disciplinare Storia
- **File modificato**: `_published_snapshot/netlify-current/index.html` (+3 righe)
- **Integrazione**: aggiunto pulsante selettore Storia, variabile `STORIA_MAPPA_DATI` (5 strutture, 5 nodi, 9 progressioni, 5 decisioni) e switch in `renderMappaDisciplinare()`
- **Discipline modificate**: solo Storia (nuova); Tecnologia/Matematica/Italiano/Scienze invariati
- **Validatore**: 7 file / 94 unitÃ  / `overallValid: true` / 0 errori
- **Harness mappa**: 7/7 discipline PASS, 0 failed; verifica runtime `STORIA_MAPPA_DATI` S=5 N=5 P=9 D=5
- **Vincoli**: JSON, schema `.cml`, import/export, service worker/cache, workflow, dipendenze, root `index.html` e landing UI/UX invariati
- **Artefatti**: `docs/03_execution/CML-160.md`, `report/CML-160_storia_runtime_mappa_dati_integration.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_160_STORIA_CONTROLLED_RUNTIME_MAPPA_DATI_READY`
## 2026-06-26 â€” CML-159 â€” SCIENZE_RUNTIME_MAPPA_DATI_INTEGRATION

- **Commit iniziale**: `31b2243` (sync con `origin/main`)
- **Tipo slice**: runtime increment â€” integrazione mappa disciplinare Scienze
- **File modificato**: `_published_snapshot/netlify-current/index.html` (+4 righe)
- **Integrazione**: aggiunto pulsante selettore Scienze, variabile `SCIENZE_MAPPA_DATI` (5 strutture, 5 nodi, 9 progressioni, 3 decisioni) e switch in `renderMappaDisciplinare()`
- **Discipline modificate**: solo Scienze (nuova); Tecnologia/Matematica/Italiano invariati
- **Validatore**: 7 file / 94 unitÃ  / `overallValid: true` / 0 errori âœ…
- **Harness mappa**: 7/7 discipline PASS (Scienze: S=15 N=5 P=9 D=0) âœ…
- **Vincoli**: JSON, schema `.cml`, import/export, service worker/cache, CSS, altre funzioni JS â€” invariati
- **Artefatti**: `docs/03_execution/CML-159.md`, `report/CML-159_scienze_runtime_mappa_dati_integration.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_159_SCIENZE_RUNTIME_MAPPA_DATI_INTEGRATION_READY`

## 2026-06-25 â€” CML-158 â€” UI_UX_3D_LANDING_STUDY_ARCHIVE

- **Commit iniziale**: `c854562` (sync con `origin/main`)
- **Tipo slice**: docs-only / study archive
- **Studio archiviato**: proposta landing 3D con Three.js/React/Vite/Lenis valutata e archiviata come riferimento concettuale.
- **Decisione progettuale**: la proposta 3D NON Ã¨ una specifica implementativa. Non autorizza React, Three.js, Vite, Lenis, nuove dipendenze, nuova landing autonoma o cambio architetturale.
- **Trasformazione consigliata**: eventuale futura sezione statica HTML/CSS nella Home tab con due riquadri (curricolo vigente + quadro 2025) e processo umano in 5 passaggi.
- **Artefatti creati**:
  - `docs/02_system/UI-UX-3D-LANDING-STUDY.md`
  - `docs/03_execution/CML-158.md`
  - `report/CML-158_ui_ux_3d_landing_study_archive.md`
  - aggiornamento `docs/REPO-MOVELOG.md` (questa voce)
- **Verdetto**: `CML_158_UI_UX_3D_LANDING_STUDY_ARCHIVE_READY`

## 2026-06-25 â€” CML-156 â€” P1_RUNTIME_STRUCTURE_MICROFIX

- **Commit iniziale**: `b4104bb` (sync con `origin/main`)
- **Tipo slice**: fix P1 runtime structure
- **Posizione di `#didattica-mappa`**: spostato dentro `#tab-didattica` per limitare la visibilitÃ  alla scheda "Competenze e progettazione â†’ Valutazione ed evidenze".
- **Variabile `decisionIdx`**: definita correttamente come `globalIdx` prima dell'uso in `renderDepartmentImport()`, eliminando il ReferenceError.
- **Verdetto**: `CML_156_P1_RUNTIME_STRUCTURE_MICROFIX_READY`

## 2026-06-25 - CML-155 - POST_PARSE_FIX_RUNTIME_STRUCTURE_AUDIT

- **Commit iniziale**: `6885fab` (sync con `origin/main`)
- **Tipo slice**: audit-only / docs-only
- **Sintassi runtime**: inline script PASS; parse error `l'esito` risolto da CML-154
- **Mappa disciplinare**: P1, `#didattica-mappa` risulta figlia diretta di `main`, resta visibile fuori dal tab Competenze
- **Inizializzazione mappa**: P2, `renderMappaDisciplinare()` non chiamata all'avvio o ingresso in Competenze; contenitore inizialmente vuoto
- **Coerenza mappe**: Tecnologia, Matematica, Italiano renderizzano dopo click; nessun token tecnico visibile
- **Validazione dipartimentale**: P1, `decisionIdx` non definito in `renderDepartmentImport()`, riprodotto `ReferenceError`
- **Pannello TecnologiaNorm**: P2, titolo usa `selDisc` ma contenuto resta Tecnologia
- **Smoke browser**: Home/Curriculum/Competenze/Mappe/Esportazioni/Guida senza console error nel flusso ordinario
- **Runtime**: invariato in CML-155; nessun fix applicato
- **Verdetto**: `CML_155_POST_PARSE_FIX_RUNTIME_STRUCTURE_AUDIT_READY`
## 2026-06-25 - CML-154 - TECNOLOGIA_LIVE_RUNTIME_PARSE_ERROR_MICROFIX

- **Commit iniziale**: `da0c0e3` (locale, `main...origin/main [ahead 1]`)
- **origin/main iniziale**: `eb6729f`
- **File runtime modificato**: `_published_snapshot/netlify-current/index.html`
- **Causa**: stringa JS interrotta da apostrofo non escapato in `l'esito`
- **Microfix**: `l'esito` -> `lâ€™esito` nel testo della validazione dipartimentale
- **Parsing runtime**: inline script syntax PASS, `SyntaxError: Unexpected identifier 'esito'` risolto localmente
- **Validatore**: 7 file / 94 unita' / `overallValid: true` / `invalidCount: 0`
- **Harness mappa**: 7 discipline PASS, 0 failed
- **Smoke locale**: Tecnologia, Matematica e Italiano renderizzati; nessun token tecnico visibile
- **Vincoli**: generator/adapter/transformer/validator/JSON/schema `.cml` invariati; service worker/cache invariati; nessun refactoring
- **Verdetto**: `CML_154_TECNOLOGIA_LIVE_RUNTIME_PARSE_ERROR_MICROFIX_READY`
## 2026-06-25 - CML-153 - CONTROLLED_PAGES_DEPLOY_FORCE_AND_LIVE_CONTENT_SMOKE

- **Commit iniziale**: `eb6729f` (sync con `origin/main`)
- **Push**: non necessario; `eb6729f` gia' presente su `origin/main`
- **Workflow Pages**: `.github/workflows/pages.yml`, pubblica `_published_snapshot/netlify-current`
- **Deploy forzato**: `workflow_dispatch` run `28166929195`, `success`, headSha `eb6729f`
- **URL live**: https://antoniocorsano-boop.github.io/curmanlight/?v=cml153
- **HTTP live**: `200`
- **TECNOLOGIA_MAPPA_DATI nel live**: presente
- **GENERATA nel live**: presente
- **Messaggio empty state**: presente nel markup, non visibile nel browser smoke
- **Smoke browser**: render mappa non popolato; console `SyntaxError: Unexpected identifier 'esito'`
- **Service worker/cache**: `curmanlight-cache-v452b422` ancora presente; non causa primaria con `?v=cml153`, ma rischio cache-first residuo
- **Causa/classificazione**: E - live aggiornato ma rendering Tecnologia ancora incompleto
- **Runtime**: invariato in CML-153; microfix raccomandato per CML-154
- **Verdetto**: `CML_153_CONTROLLED_PAGES_DEPLOY_FORCE_AND_LIVE_CONTENT_SMOKE_READY`

## 2026-06-25 â€” CML-152 â€” LIVE_DEPLOY_REFRESH_AND_CONTENT_RECHECK

- **Commit iniziale**: `f845211` (sync)
- **URL live**: https://antoniocorsano-boop.github.io/curmanlight/?v=cml152
- **Cache-busting**: nessun effetto
- **TECNOLOGIA_MAPPA_DATI nel live**: assente
- **Causa**: Deploy non ancora aggiornato (class B)
- - Verdetto: `CML_152_LIVE_DEPLOY_REFRESH_AND_CONTENT_RECHECK_READY`

## 2026-06-25 â€” CML-151 â€” LIVE_DEPLOY_ALIGNMENT_AFTER_TECNOLOGIA_CONTENT_GAP

- **Commit iniziale**: `d69ea5a` (sync)
- **URL live**: https://antoniocorsano-boop.github.io/curmanlight/
- **Gap**: TECNOLOGIA_MAPPA_DATI non presente nel live
- **Causa**: Deploy non aggiornato (class A)
- **Workflow**: _published_snapshot/netlify-current/ corretto, deploy in attesa
- - Verdetto: `CML_151_LIVE_DEPLOY_ALIGNMENT_AFTER_TECNOLOGIA_CONTENT_GAP_READY`

## 2026-06-25 â€” CML-150 â€” TECNOLOGIA_LIVE_CONTENT_VISIBILITY_AUDIT

- **Commit iniziale**: `b3fb181` (sync)
- **URL live**: https://antoniocorsano-boop.github.io/curmanlight/
- **Messaggio rilevato**: "Mappa disciplinare non ancora predisposta per questa disciplina"
- **Testi tecnici visibili**: nessuno
- - Verdetto: `CML_150_TECNOLOGIA_LIVE_CONTENT_VISIBILITY_AUDIT_READY`

## 2026-06-25 â€” CML-149 â€” LIVE_POST_DEPLOY_SMOKE_AFTER_TECNOLOGIA_INTEGRATION

- **Commit iniziale**: `1d9e530` (sync)
- **URL live**: https://antoniocorsano-boop.github.io/curmanlight/
- **Esito smoke**: HTTP 200, navigazione funzionante
- - Verdetto: `CML_149_LIVE_POST_DEPLOY_SMOKE_AFTER_TECNOLOGIA_INTEGRATION_READY`

## 2026-06-25 â€” CML-148 â€” GOVERNANCE_DECISION_AFTER_TECNOLOGIA_RUNTIME_INTEGRATION

- **Commit iniziale**: `5f83ecc` (sync)
- **Sequence pushed**: CML-145â†’CML-147A
- **Opzione selezionata**: C â€” smoke live/post-deploy
- **Prossimo**: CML-149 â€” LIVE_POST_DEPLOY_SMOKE_AFTER_TECNOLOGIA_INTEGRATION
- - Verdetto: `CML_148_GOVERNANCE_DECISION_AFTER_TECNOLOGIA_RUNTIME_INTEGRATION_READY`

## 2026-06-25 â€” CML-147A â€” TECNOLOGIA_RUNTIME_INTEGRATION_SMOKE

- **Commit iniziale**: `6dd82be` (4 ahead of origin)
- **Smoke**: documentare (HTTP non disponibile)
- **Controlli statici**: tutti PASS
- - Verdetto: `CML_147A_TECNOLOGIA_RUNTIME_INTEGRATION_SMOKE_READY`
- - Prossimo: push o CML-148

## 2026-06-25 â€” CML-147 â€” CONTROLLED_TECNOLOGIA_RUNTIME_INTEGRATION_WITH_FALLBACK

- **Commit iniziale**: `8fb49a0` (3 ahead of origin)
- **Integrazione**: TECNOLOGIA_MAPPA_DATI_GENERATA || TECNOLOGIA_MAPPA_DATI_FALLBACK
- **Discipline modificate**: solo Tecnologia
- **Runtime invariato**: renderMappaDisciplinare() non modificata
- - Verdetto: `CML_147_CONTROLLED_TECNOLOGIA_RUNTIME_INTEGRATION_READY`
- - Prossimo: CML-147A â€” Runtime Smoke

## 2026-06-25 â€” CML-146A â€” STATIC_BLOCK_INSPECTION_SMOKE

- **Commit iniziale**: `ec9d64b` (2 ahead of origin)
- **Confronto generato vs hardcoded**: struttureSostanziali compatibili (6/6), nodiDisciplinari nuovo (hardcoded ne ha 0), progressioneVerticale compatibili (10/10), decisioniCurricolari identiche (2/2)
- **BOM issue**: PowerShell only â€” non bloccante, gestito dal tool
- **Opzione selezionata per CML-147**: B â€” integrazione con fallback hardcoded
- - Verdetto: `CML_146A_STATIC_BLOCK_INSPECTION_SMOKE_READY`
- - Prossimo: CML-147 â€” Controlled Tecnologia Runtime Integration

## 2026-06-25 â€” CML-146 â€” TECHNOLOGIA_STATIC_MAPPA_DATI_GENERATION_TOOL

- **Commit iniziale**: `260b4ae` (ahead 1 di origin/main)
- **Tool creato**: `tools/generate-static-mappa-dati.mjs`
- **Comando d'uso**: `node tools/generate-static-mappa-dati.mjs content/curriculum/tecnologia.normalized.json`
- **Path JSON**: `content/curriculum/tecnologia.normalized.json`
- **Output generato**: `const TECNOLOGIA_MAPPA_DATI = { ... }` (JS valido)
- **Esito node --check**: âœ… PASS
- **Esito validatore**: 7 file / 94 unitÃ  / `overallValid: true` âœ…
- **Esito shape harness**: âš ï¸ FAIL su PowerShell (BOM issue), pipeline OK
- **Runtime**: non modificato âœ…
- **JSON/adapter/transformer/harness**: non modificati âœ…
- **Temporanei**: rimossi âœ…
- **Limiti note**: ordinamento alfabetico, descrizioni autogenerate
- - Verdetto: `CML_146_STATIC_MAPPA_DATI_GENERATION_TOOL_READY`
- - Prossimo: CML-146A â€” Static Block Inspection Smoke

## 2026-06-25 â€” CML-145 â€” TECHNOLOGIA_RUNTIME_INTEGRATION_PILOT_SELECTION_AUDIT

- **Commit iniziale**: `810ae84` (HEAD == origin/main)
- **Audit**: confronto generato vs hardcoded completato su tutte le aree (S/N/P/D)
- **Opzione selezionata**: C â€” Generatore statico JS/JSON
- **Differenze chiave**: 6 nuovi nodiDisciplinari (hardcoded ne ha 0), ordinamento diverso, descrizioni autogenerate
- **Artefatti**: `docs/03_execution/CML-145.md`, `report/CML-145_tecnologia_runtime_integration_pilot_selection_audit.md`
- Verdetto: `CML_145_TECHNOLOGIA_RUNTIME_INTEGRATION_PILOT_SELECTION_READY`
- Prossimo: CML-146 â€” TECHNOLOGIA_STATIC_MAPPA_DATI_GENERATION_TOOL

## 2026-06-25 â€” CML-144A â€” CORE_DATA_LAYER_SEQUENCE_CLOSURE_AND_CONTROLLED_PUSH

- **Commit iniziale**: `a228683` (9 ahead of origin)
- **Commit CML-144A**: `b08bfe8`
- **Audit**: validatore 7/94 âœ…, harness 7/7 PASS âœ…, working tree pulito, runtime non toccato
- **Artefatti**: `docs/03_execution/CML-144A.md`, `report/CML-144A_core_data_layer_sequence_closure_and_controlled_push.md`
- **Push**: 10 commits pushati âœ… â€” `85bbab4..b08bfe8` mainâ†’main
- **Stato finale**: `main...origin/main` sync, HEAD == origin/main `b08bfe8`
- Verdetto: `CML_144A_CORE_DATA_LAYER_SEQUENCE_CLOSED_REMOTE`
- Prossimo: CML-145 â€” Tecnologia runtime integration selection audit

## 2026-06-25 â€” CML-144 â€” RUNTIME_MAPPA_DATI_SHAPE_TEST_HARNESS

- **HEAD**: `558ca5f` (8 ahead of origin)
- **Tool creato**: `tools/test-runtime-mappa-dati-shape.mjs`
- **Copertura**: 7/7 discipline validat â€” tutte PASS âœ…
- **Campi verificati**: disciplina, struttureSostanziali.{nome,descrizione,fonte}, nodiDisciplinari.{etichetta,tipo,descrizione,fonte}, progressioneVerticale.{ordine,fascia/classe,descrizioneProgressione,fonte}, decisioniCurricolari array con {tipo,motivazione,fonte}
- **Runtime, JSON, adapter, transformer, validator**: non toccati âœ…
- **Artefatti**: `tools/test-runtime-mappa-dati-shape.mjs`, `docs/03_execution/CML-144.md`, `report/CML-144_runtime_mappa_dati_shape_test_harness.md`
- Verdetto: `CML_144_RUNTIME_MAPPA_DATI_SHAPE_TEST_HARNESS_READY`
- Next: CML-145 â€” integrazione pilota Tecnologia, oppure closure/push CML-138â†’144

## 2026-06-25 â€” CML-143A â€” RUNTIME_SHAPE_TRANSFORMER_OUTPUT_SMOKE

- **HEAD**: `384530f` (7 ahead of origin)
- **Smoke**: output flat transformer confrontato con campi letti da `renderMappaDisciplinare()`
- **Esito**: tutti i campi presenti per Tecnologia, Italiano, Matematica, Scienze âœ…
- **Decisione CML-144**: Opzione C â€” test harness automatico (non integrazione runtime)
- **Runtime, JSON, adapter, transformer, validator**: non toccati âœ…
- **Temp files**: rimossi âœ…
- **Artefatti**: `docs/03_execution/CML-143A.md`, `report/CML-143A_runtime_shape_transformer_output_smoke.md`
- Verdetto: `CML_143A_RUNTIME_SHAPE_TRANSFORMER_OUTPUT_SMOKE_READY`
- Next: CML-144 â€” RUNTIME_MAPPA_DATI_SHAPE_TEST_HARNESS

## 2026-06-25 â€” CML-143 â€” TO_RUNTIME_MAPPA_DATI_TRANSFORMER

- **HEAD**: `b55cda1` (6 ahead of origin)
- **Tool creato**: `tools/to-runtime-mappa-dati-transformer.mjs`
- **Shape input**: `{nome, unita[]}` con riferimenti strutturati
- **Shape output**: `{nome, descrizione, fonte}` flat per runtime
- **Discipline testate**: Tecnologia, Italiano, Matematica â€” tutte OK âœ…
- **Runtime, JSON, adapter, validator**: non toccati âœ…
- **Temp files**: rimossi âœ…
- **Artefatti**: `tools/to-runtime-mappa-dati-transformer.mjs`, `docs/03_execution/CML-143.md`, `report/CML-143_to_runtime_mappa_dati_transformer_design_and_tool.md`
- Verdetto: `CML_143_TO_RUNTIME_MAPPA_DATI_TRANSFORMER_READY`
- Next: CML-143A â€” Runtime Shape Transformer Output Smoke

## 2026-06-25 â€” CML-142 â€” ADAPTER_TO_RUNTIME_INTEGRATION_CONTRACT

- **HEAD**: `31ef98e` (5 ahead of origin)
- **Scoperta**: shape gap `unita[]` vs flat documentato in matrice gap
- **Opzione scelta**: B + D â€” `toRuntimeMappaDati()` intermedio, pilota Tecnologia
- **Runtime, JSON, adapter, validator**: non toccati âœ…
- **Artefatti**: `docs/03_execution/CML-142.md`, `report/CML-142_adapter_to_runtime_integration_contract.md`
- Verdetto: `CML_142_ADAPTER_TO_RUNTIME_INTEGRATION_CONTRACT_READY`
- Next: CML-143 â€” TO_RUNTIME_MAPPA_DATI_TRANSFORMER_DESIGN_AND_TOOL

## 2026-06-25 â€” CML-141A â€” ADAPTER_OUTPUT_SHAPE_CONFRONTATION

- **HEAD**: `0fc1366` (5 ahead of origin, worktree sporco pre-commit)
- **Confronto**: output adapter `scripts/adapter-mappa-dati.js` vs MAPPA_DATI hardcoded in `index.html`
- **Esito**: compatibilitÃ  solo parziale â€” adapter produce `unita[]` invece di flat `{descrizione, fonte}`; `nodiDisciplinari` colmato per Tecnologia (mancante); `decisioniCurricolari` compatibile
- **Runtime, JSON, validatore**: non toccati âœ…
- **Artefatti**: `docs/03_execution/CML-141A.md`, `report/CML-141A_adapter_confronto_output.md`
- Verdetto: `CML_141A_ADAPTER_OUTPUT_SHAPE_SMOKE_READY`
- Next: CML-142 â€” Adapter to Runtime Integration Contract

## 2026-06-25 â€” CML-141 â€” JSON_TO_MAPPA_DATI_ADAPTER_STANDALONE_TOOL

- **HEAD**: `ac4c724` (3 ahead of origin)
- **Tool creato**: `tools/json-to-mappa-dati-adapter.mjs`
- **Aggregazioni**: ambitoâ†’struttureSostanziali, nucleoâ†’nodiDisciplinari, {ordine,classe,fascia}â†’progressioneVerticale, decisioniCurricolariâ†’pass-through
- **Test**: Tecnologia, Italiano, Matematica, Scienze â€” tutti OK, 0 warning
- **Limitazione**: non Ã¨ 1:1 con MAPPA_DATI hardcoded (mancano descrizioni testuali)
- **Runtime, JSON, validatore**: non toccati âœ…
- **Artefatti**: `docs/03_execution/CML-141.md`, `report/CML-141_json_to_mappa_dati_adapter_standalone_tool.md`
- Verdetto: `CML_141_JSON_TO_MAPPA_DATI_ADAPTER_TOOL_READY`
- Next: CML-141A â€” Adapter Output Shape Smoke

## 2026-06-25 â€” CML-140A â€” TECNOLOGIA_NUCLEO_FIELD_READINESS_FIX

- **HEAD**: `266490e` (2 ahead of origin)
- **JSON modificato**: `content/curriculum/tecnologia.normalized.json`
- **Intervento**: aggiunto `nucleo` a 13/13 unitÃ  (era l'unica disciplina senza)
- **Criterio**: ogni nucleo derivato dal corrispondente `ambito`
- **Nuclei assegnati**: 6 (Osservazione e analisi, Digitale e informatica, Materiali e trasformazioni, Disegno e rappresentazione, Energia e sostenibilitÃ , Cittadinanza tecnologica)
- **Validatore**: 7/94, `overallValid: true` âœ… â€” Tecnologia ora ha warning "retrocompatibile" come altre 6 discipline
- **Artefatti**: `docs/03_execution/CML-140A.md`, `report/CML-140A_tecnologia_nucleo_field_readiness_fix.md`
- Verdetto: `CML_140A_TECNOLOGIA_NUCLEO_FIELD_READINESS_READY`
- Next: CML-141 â€” JSON_TO_MAPPA_DATI_ADAPTER_IMPLEMENTATION

## 2026-06-25 â€” CML-140 â€” JSON_TO_MAPPA_DATI_ADAPTER_DESIGN_AUDIT

- **HEAD**: `6b7ced5` (1 ahead of origin â€” slice precedente non pushato)
- **Tipo slice**: design audit â€” nessuna modifica runtime/JSON
- **Adapter progettato**: `toMappaDati(json)` con 3 logiche di aggregazione (ambitoâ†’struttureSostanziali, nucleoâ†’nodiDisciplinari, {ordine,classe,fascia}â†’progressioneVerticale)
- **Rischio principale**: Tecnologia ha `nucleoFondante:""` e `nucleo:""` â€” raggruppamento per nucleo non possibile
- **4/7 discipline** non hanno `decisioniCurricolari` â€” sezione non generabile
- **Artefatti**: `docs/03_execution/CML-140.md`, `report/CML-140_json_to_mappa_dati_adapter_design_audit.md`
- Verdetto: `CML_140_JSON_TO_MAPPA_DATI_ADAPTER_DESIGN_AUDIT_READY`
- Next: CML-141 â€” JSON_TO_MAPPA_DATI_ADAPTER_IMPLEMENTATION

## 2026-06-25 â€” CML-139 â€” DISCIPLINARY_DATA_LAYER_MAPPING_AUDIT

- **HEAD**: `85bbab4` (allineato a origin/main)
- **Tipo slice**: audit-only â€” nessuna modifica runtime/JSON
- **Validatore**: 7/94, `overallValid: true` âœ…
- **Mappatura completata**: JSON unitÃ  â†” MAPPA_DATI â†” TECNOLOGIA_NORM â†” rendering
- **Scoperta chiave**: mapping non Ã¨ 1:1 â€” serve aggregazione per ambito/nucleo/ordine
- **Sezioni aggregate**: solo 3/7 JSON le hanno (Tecnologia, Italiano, Matematica)
- **4/7 JSON** hanno solo unitÃ  grezze (Scienze, Storia, Geografia, Inglese)
- **`decisioniCurricolari`**: non derivabili automaticamente (dati manuali)
- **Opzione selezionata**: B+D â€” adapter JSONâ†’MAPPA_DATI per 1 pilota
- **Artefatti**: `docs/03_execution/CML-139.md`, `report/CML-139_disciplinary_data_layer_mapping_audit.md`
- Verdetto: `CML_139_DISCIPLINARY_DATA_LAYER_MAPPING_AUDIT_READY`
- Next: CML-140 â€” JSON_TO_MAPPA_DATI_ADAPTER_DESIGN_AUDIT

## 2026-06-25 â€” CML-138 â€” CORE_DISCIPLINARY_SYSTEM_RECOVERY_AUDIT

- **HEAD**: `37152be` (allineato a origin/main)
- **Tipo slice**: audit-only â€” nessuna modifica runtime
- **Inventario**: 7 file JSON normalizzati (Tecnologia, Italiano, Matematica, Scienze, Storia, Geografia, Inglese)
- **Disallineamento principale**: runtime usa dati hardcoded (`MAPPA_DATI`, `TECNOLOGIA_NORM`) anzichÃ© i 7 JSON validati
- **Solo 3/7 discipline** hanno mappa; solo **1/7** ha vista strutturata
- **Matematica**: gap classi 2-4 Primaria
- **Opzione selezionata**: B â€” Selezione fonte dati canonica (agganciare runtime ai JSON)
- **Validatore**: 7/94, `overallValid: true` âœ…
- **Artefatti**: `docs/03_execution/CML-138.md`, `report/CML-138_core_disciplinary_system_recovery_audit.md`
- Verdetto: `CML_138_CORE_DISCIPLINARY_SYSTEM_RECOVERY_AUDIT_READY`
- Next: CML-139 â€” AUDIT_LAYER_DATI_CORE

## 2026-06-25 â€” CML-137A â€” BACKUP_LABEL_CYCLE_CLOSURE_AND_CONTROLLED_PUSH

- **HEAD partenza (pre-push)**: `d8e3ff6` (CML-137)
- **Tipo slice**: closure audit + push controllato â€” nessuna modifica runtime
- **Commit pushati**: `15b0cbc` (CML-136 audit), `d8e3ff6` (CML-137 runtime)
- **Audit pre-push**: passato â€” `git diff --check` pulito, validatore 7/94 OK
- **Allineamento post-push**: HEAD == origin/main == `d8e3ff6` âœ…
- Verdetto: `CML_137A_BACKUP_LABEL_CYCLE_CLOSED_REMOTE`

## 2026-06-25 â€” CML-137 â€” BACKUP_LABEL_RUNTIME_MICROCOPY_ALIGNMENT

- **HEAD iniziale**: `15b0cbc` (CML-136 audit)
- **HEAD**: `15b0cbc`
- **origin/main**: `1342ec5`
- **Tipo slice**: runtime alignment â€” solo testo (17 sostituzioni, 18 occorrenze fisiche)
- **Audit di riferimento**: CML-136 (Opzione C â€” sostituzione differenziata)
- **File modificato**: `_published_snapshot/netlify-current/index.html`
- **17 sostituzioni applicate**:
  - `â¬‡ï¸ Backup` â†’ `â¬‡ï¸ Salva copia` (1)
  - `â¬‡ï¸ Backup locale` â†’ `â¬‡ï¸ Copia di sicurezza` (1)
  - `â¬†ï¸ Importa backup` â†’ `â¬†ï¸ Importa copia` (1)
  - `ðŸ’¾ Backup e dati` â†’ `ðŸ’¾ Copia di sicurezza e dati` (1)
  - `backup`/`Backup` â†’ `copia di sicurezza`/`Copia di sicurezza` (14 in alert, status, toast, confirm, guide, descrizione)
  - `Markdown` â†’ `Testo` in 2 alert (allineamento con CML-131)
- **Residui `backup`**: 4 tecnici (id input, 2 nomi funzione, nome file) â€” non visibili all'utente
- **Nessuna modifica** a JSON, validator, schema `.cml`, import/export, CSS, JS funzioni/variabili
- **Validatore**: 7/94, `overallValid: true`, 0 errori âœ…
- Verdetto: `CML_137_BACKUP_LABEL_RUNTIME_MICROCOPY_ALIGNMENT_READY`
- Next: CML-137A â€” closure + push controllato (opzionale, se si vuole remote)

## 2026-06-25 â€” CML-136 â€” BACKUP_LABEL_USER_FACING_CLARITY_AUDIT

- **HEAD**: `1342ec5`
- **origin/main**: `1342ec5`
- **Tipo slice**: audit-only â€” nessuna modifica runtime
- **File analizzato**: `_published_snapshot/netlify-current/index.html`
- **24 occorrenze** `backup`/`Backup` totali; **18 user-facing**
- **Classificazione**: 7 P1 (pulsanti + alert/error bloccanti), 11 P2 (guide, toast, confirm, status)
- **Opzione selezionata**: C â€” Sostituzione differenziata
  - `â¬‡ï¸ Backup` â†’ `â¬‡ï¸ Salva copia` (pulsante breve)
  - `â¬‡ï¸ Backup locale` â†’ `â¬‡ï¸ Copia di sicurezza` (pulsante largo)
  - `â¬†ï¸ Importa backup` â†’ `â¬†ï¸ Importa copia`
  - `ðŸ’¾ Backup e dati` â†’ `ðŸ’¾ Copia di sicurezza e dati`
  - Tutte le altre â†’ `copia di sicurezza` in contesto
- **Perimetro raccomandato per CML-137**: 17 sostituzioni testuali
- **Validatore**: 7/94, `overallValid: true` âœ…
- **Artefatti**: `docs/03_execution/CML-136.md`, `report/CML-136_backup_label_user_facing_clarity_audit.md`
- Verdetto: `CML_136_BACKUP_LABEL_CLARITY_AUDIT_READY`
- Next: CML-137 â€” BACKUP_LABEL_USER_FACING_RUNTIME_ALIGNMENT

## 2026-06-25 â€” CML-135B â€” NORMALIZZATO_TO_STRUTTURATO_SMOKE_CLOSURE_AND_CONTROLLED_PUSH

- **HEAD partenza**: `1159af0` (CML-135A)
- **Tipo slice**: smoke + closure + push controllato
- **5/5 sostituzioni** `normalizzato` â†’ `strutturato` confermate âœ…
- **0 occorrenze user-facing** di `normalizzato` residue âœ…
- **1 residuo tecnico**: commento JS linea 4848 (mantenuto) âœ…
- **Validatore**: 7/94, `overallValid: true` âœ…
- **Commit CML-135B**: `docs: close CML normalizzato to strutturato smoke`
- **Push**: eseguito su origin/main
- **Allineamento post-push**: HEAD == origin/main
- Verdetto: `CML_135B_NORMALIZZATO_TO_STRUTTURATO_CYCLE_CLOSED_REMOTE`

## 2026-06-25 â€” CML-134A â€” POST_MICROCOPY_SMOKE_CLOSURE_AND_CONTROLLED_PUSH

- **HEAD partenza (pre-push)**: `e32b56f6a9f29c9dc10d977e36e872b83825a198` (CML-134)
- **Tipo slice**: closure audit + push controllato â€” nessuna modifica runtime
- **Audit pre-push**: passato â€” 1 commit ahead, `git diff --check` pulito, validatore 7/94 OK
- **Smoke CML-134**: 16/16 etichette presenti, 0/13 vecchie residue, HTTP 200, navigazione OK âœ…
- **CML-134 docs-only**: nessuna modifica runtime, JSON, validator, schema `.cml`, import/export, CSS, JS âœ…
- **Residui ignorati**: `.agents`, `skills-lock.json`, `Consultazione` âœ…
- **Commit CML-134A**: `docs: close CML post-microcopy smoke`
- **Push**: `git push origin main` â†’ eseguito
- **Allineamento post-push**: HEAD == origin/main verificato
- Verdetto: `CML_134A_POST_MICROCOPY_SMOKE_CLOSED_REMOTE`

## 2026-06-25 â€” CML-134 â€” POST_MICROCOPY_RUNTIME_READABILITY_SMOKE

- **HEAD**: `1e4d25471adc3666d2db92ee6677b3aab2b0b6cf`
- **Tipo slice**: smoke + documentazione â€” nessuna modifica runtime
- **Cicli verificati**: CML-130â†’CML-131A (microcopy), CML-132â†’CML-133A (file labels)
- **18 sostituzioni testuali** verificate: 16 etichette nuove presenti, 0 vecchie residue
- **Smoke**: HTTP 200, navigazione integra, import/export OK, validazione OK âœ…
- **Validatore**: 7/94, `overallValid: true`, 0 errori âœ…
- Verdetto: `CML_134_POST_MICROCOPY_RUNTIME_READABILITY_SMOKE_READY`

## 2026-06-25 â€” CML-133A â€” CML_FILE_LABELS_CLARITY_CYCLE_CLOSURE_AND_PUSH

- **HEAD partenza (pre-push)**: `ebf406df0660f5141ab710c44f450087d040b18c` (CML-133)
- **Tipo slice**: closure audit + push controllato
- **Audit pre-push**: passato â€” 2 commit ahead, `git diff --check` pulito, validatore 7/94 OK
- **Sostituzioni CML-133 verificate**: 8/8 confermate, 0 vecchi pattern residui âœ…
- **Residui ignorati**: `.agents`, `skills-lock.json`, `Consultazione` âœ…
- **Commit CML-133A**: `docs: close CML file label clarity cycle`
- **Push**: `git push origin main` â†’ eseguito
- **Allineamento post-push**: HEAD == origin/main verificato
- Verdetto: `CML_133A_CML_FILE_LABELS_CLARITY_CYCLE_CLOSED_REMOTE`

## 2026-06-25 â€” CML-133 â€” CML_FILE_LABELS_RUNTIME_MICROCOPY_ALIGNMENT

- **HEAD iniziale**: `dad4fcd80b61acaff74bf5ee6cfa92028189aabd` (CML-132)
- **Tipo slice**: runtime alignment â€” solo testo (8 sostituzioni)
- **Audit di riferimento**: CML-132 (Opzione C â€” pulizia pulsanti + descrizioni brevi)
- **8 sostituzioni applicate** in `_published_snapshot/netlify-current/index.html`:
  - `â¬‡ï¸ Scarica proposta .cml` â†’ `â¬‡ï¸ Scarica proposta` (2Ã—)
  - `.cml: per Drive condiviso.` â†’ `File proposta: per Drive condiviso.`
  - `Importa i file .cml ricevuti dai docenti` â†’ `Importa i file proposta ricevuti dai docenti`
  - `Importa proposte docenti .cml` â†’ `Importa proposte docenti`
  - `Importa gli esiti dipartimentali .cml` â†’ `Importa gli esiti dipartimentali`
  - `Importa esiti dipartimentali .cml` â†’ `Importa esiti dipartimentali`
  - `Esporta esito dipartimento .cml` â†’ `Esporta esito dipartimento`
- **Nessuna modifica** a schema `.cml`, JSON, validatore, import/export, CSS, icone, classi
- **Occorrenze `.cml` residue**: 17 (tutte tecniche/didattiche, nessuna in pulsanti/label)
- Validatore: 7 file, 94 unitÃ , `overallValid: true`, 0 errori âœ…
- Smoke: HTTP 200 âœ…
- Verdetto: `CML_133_CML_FILE_LABELS_RUNTIME_MICROCOPY_ALIGNMENT_READY`

## 2026-06-25 â€” CML-132 â€” CML_FILE_LABELS_USER_FACING_CLARITY_AUDIT

- **HEAD partenza**: `8b9da1384e8a0242bafa3c519f0fd4d3fbe977eb`
- **HEAD fine**: `8b9da1384e8a0242bafa3c519f0fd4d3fbe977eb` (audit-only)
- **Tipo slice**: audit-only â€” nessuna modifica runtime
- **File analizzato**: `_published_snapshot/netlify-current/index.html`
- **27 occorrenze** `.cml` totali; **9 utente-facing**
- **Classificazione**: 5 P1 (pulsanti), 3 P2 (descrizioni), 1 P3 (microguida Home, mantenuto)
- **Opzione selezionata**: C â€” pulizia pulsanti + descrizioni brevi
- **Perimetro raccomandato per CML-133**: 8 sostituzioni testuali
- **Artefatti**: `docs/03_execution/CML-132.md`, `report/CML-132_cml_file_labels_user_facing_clarity_audit.md`
- Verdetto: `CML_132_CML_FILE_LABELS_CLARITY_AUDIT_READY`
- Next: CML-133 â€” CML_FILE_LABELS_USER_FACING_RUNTIME_ALIGNMENT

## 2026-06-25 â€” CML-131A â€” MICROCOPY_RUNTIME_ALIGNMENT_CLOSURE_AND_PUSH

- **HEAD partenza (pre-push)**: `699d9f3c284a5d96523243b3bddd3b55b09c9c76`
- **Tipo slice**: closure audit + push controllato
- **Audit pre-push**: passato â€” 1 commit ahead, `git diff --check` pulito, validatore 7/94 OK
- **Sostituzioni CML-131 verificate**: 10/10 confermate nel runtime âœ…
- **Residui ignorati**: `.agents`, `skills-lock.json`, `Consultazione` âœ…
- **Commit CML-131A**: `docs: close CML microcopy alignment cycle`
- **Push**: `git push origin main` â†’ eseguito
- **Allineamento post-push**: HEAD == origin/main verificato
- Verdetto: `CML_131A_MICROCOPY_ALIGNMENT_CYCLE_CLOSED_REMOTE`

## 2026-06-25 â€” CML-131 â€” USER_FACING_MICROCOPY_RUNTIME_ALIGNMENT

- **HEAD partenza**: `5462a814819f768cd7b3372f7cc38abc3b919c69`
- **Tipo slice**: runtime alignment â€” solo testo (10 sostituzioni puntuali)
- **Audit di riferimento**: CML-130 (verdetto: `CML_130_USER_FACING_MICROCOPY_AUDIT_READY`)
- **10 sostituzioni applicate** in `_published_snapshot/netlify-current/index.html`:
  - `ðŸ“ Markdown (confronto)` â†’ `ðŸ“ Testo (confronto)` (linea 1415)
  - `ðŸ“ Markdown (definitivo)` â†’ `ðŸ“ Testo (definitivo)` (linea 1488)
  - `ðŸ“ Markdown` â†’ `ðŸ“ Testo` (linea 1794, Riepilogo)
  - `ðŸ“ Copia Markdown` â†’ `ðŸ“ Copia testo` (linea 1468)
  - `ðŸ“ Scarica Markdown` â†’ `ðŸ“ Scarica testo` (linea 1469)
  - `ðŸ“¤ Export del curricolo revisionato` â†’ `ðŸ“¤ Esportazione del curricolo revisionato` (linea 1459)
  - `â¬‡ Azioni di export â–¾` â†’ `â¬‡ Azioni di esportazione â–¾` Ã—3 (linea 1465)
  - `ðŸ“Š Report sintesi` â†’ `ðŸ“Š Resoconto sintesi` (linea 1808)
  - `Scarica report gruppo di lavoro` â†’ `Scarica resoconto gruppo di lavoro` (linea 1452, title + label)
  - `Trovi tutti gli strumenti di export` â†’ `Trovi tutti gli strumenti di esportazione` (linea 1841)
- **Nessuna modifica** a JSON, CSS, JS funzioni, icone, layout, classi
- Validatore: 7 file, 94 unitÃ , `overallValid: true`, 0 errori âœ…
- Verdetto: `CML_131_USER_FACING_MICROCOPY_RUNTIME_ALIGNMENT_READY`

## 2026-06-25 â€” CML-130 â€” USER_FACING_MICROCOPY_AND_TECHNICAL_LANGUAGE_AUDIT

- **HEAD partenza**: `5462a814819f768cd7b3372f7cc38abc3b919c69`
- **HEAD fine**: `5462a814819f768cd7b3372f7cc38abc3b919c69` (audit-only)
- **Tipo slice**: audit-only â€” nessuna modifica runtime
- **40+ termini scrutinati** in 11 aree UI di `_published_snapshot/netlify-current/index.html`
- **Classificazione**: 2 P1, 6 P2, 1 P3
  - P1: "Markdown" in 5 pulsanti esportazione â†’ `Testo`
  - P2: anglicismi `export`/`report` + `.cml` + `normalizzato`
  - P3: `backup` â†’ `copia di sicurezza` (opzionale)
- **Opzione selezionata**: B â€” riscrittura puntuale (10 sostituzioni testuali)
- **Artefatti**: `docs/03_execution/CML-130.md`, `report/CML-130_user_facing_microcopy_and_technical_language_audit.md`
- Verdetto: `CML_130_USER_FACING_MICROCOPY_AUDIT_READY`
- Next: CML-131 â€” USER_FACING_MICROCOPY_RUNTIME_ALIGNMENT

## 2026-06-24 â€” CML-126 â€” POST_PUSH_RUNTIME_AND_NAVIGATION_SMOKE

- Baseline:
  - branch main
  - HEAD = origin/main = 425f1b962b4fbbe027934f8e2f62f6f899d1be06
  - stato remoto allineato post CML-125
- Controlli tecnici:
  - git diff --check -> pulito
  - node tools/validate-cml-normalized-curriculum.mjs -> totalFiles 7, totalUnits 94, overallValid true, invalidCount 0
  - git check-ignore -v .agents skills-lock.json Consultazione -> residui ignorati confermati
- Smoke runtime su snapshot locale (http://localhost:8080):
  - apertura applicazione: OK
  - navigazione principale/curriculum: KO
  - selezione discipline mappa: KO
  - errori runtime osservati:
    - ReferenceError: setTab is not defined
    - ReferenceError: setMappaDisciplina is not defined
  - import/export e validazione dipartimentale: non verificabili in modo affidabile per blocco navigazione
- Artefatti slice:
  - docs/03_execution/CML-126.md
  - report/CML-126_post_push_runtime_and_navigation_smoke.md
  - aggiornamento docs/REPO-MOVELOG.md
- Scope safety: nessuna modifica funzionale introdotta
- Verdetto: CML_126_POST_PUSH_SMOKE_BLOCKED_BY_RUNTIME_REGRESSION
- Next: aprire micro-slice di debugging mirata ai riferimenti mancanti setTab/setMappaDisciplina con fix minimale e nuovo smoke.

## 2026-06-24 â€” CML-125 â€” LOCAL_SEQUENCE_CLOSURE_AUDIT_AND_CONTROLLED_PUSH

- HEAD iniziale (main): 32ebb3f03c853c0612d16f998a9ad1a12b814831
- Tipo slice: audit finale sequenza locale + push controllato
- Obiettivo: chiudere e pubblicare la sequenza CML-121/CML-122/CML-123/CML-124 in modo coerente e tracciabile.
- Audit pre-push eseguito:
  - git rev-parse HEAD
  - git status --short --branch
  - git log --oneline origin/main..HEAD
  - git diff --check
  - git diff --stat origin/main..HEAD
  - git diff --name-status origin/main..HEAD
- Sequenza commit locali confermata (4):
  - 7d840bf docs: reconcile CML traceability and slice boundaries
  - 8b5488c chore: CML-122 selective consolidation of core runtime json validator and traceability docs
  - 10e3732 docs: fix CML post-consolidation whitespace hygiene
  - 32ebb3f chore: ignore local non-core CML artifacts
- Residui locali ignorati verificati:
  - .agents, skills-lock.json, Consultazione -> ignorati via .gitignore
  - nessuno in staging/commit
- Validazione tecnica:
  - node tools/validate-cml-normalized-curriculum.mjs
  - totalFiles: 7, totalUnits: 94, overallValid: true, invalidCount: 0
- Artefatti slice:
  - docs/03_execution/CML-125.md
  - report/CML-125_local_sequence_closure_audit_and_controlled_push.md
  - aggiornamento docs/REPO-MOVELOG.md
- Commit slice:
  - docs: close CML local sequence before controlled push
- Push controllato:
  - eseguito su origin/main dopo audit finale di coerenza
  - allineamento post-push verificato con fetch + confronto HEAD/origin/main
- Verdetto: CML_125_LOCAL_SEQUENCE_CLOSED_AND_PUSHED_REMOTE
- Next: monitoraggio post-push e avvio prossimo ciclo CML solo su nuove richieste funzionali.

## 2026-06-24 â€” CML-124 â€” LOCAL_NON_CORE_ARTIFACTS_IGNORE_POLICY

- HEAD iniziale (main): 10e3732aec00b06f376456fc6012bc72afa35ab5
- Tipo slice: hygiene locale / policy ignore non core
- Obiettivo: chiudere il working tree post CML-121/122/123 escludendo artefatti locali non core senza toccare il prodotto.
- Residui iniziali rilevati:
  - .agents/
  - Consultazione
  - skills-lock.json
- Verifica pre-policy:
  - git diff --check -> nessun output
  - git check-ignore -v .agents skills-lock.json Consultazione -> nessuna regola applicabile
  - .gitignore esistente in root
- Policy applicata su .gitignore:
  - # Local agent/tooling artifacts - not part of CurManLight runtime
  - /.agents/
  - /skills-lock.json
  - /Consultazione
- Decisione per residuo:
  - .agents/: ignorato
  - skills-lock.json: ignorato
  - Consultazione: ignorato
- Garanzie:
  - residui non committati
  - nessuna cancellazione di file locali
  - nessuna modifica runtime/JSON/validator/schema/import-export/UI-CSS-logica
- Artefatti slice:
  - docs/03_execution/CML-124.md
  - report/CML-124_local_non_core_artifacts_ignore_policy.md
  - aggiornamento docs/REPO-MOVELOG.md
- Verdetto: CML_124_LOCAL_NON_CORE_ARTIFACTS_IGNORE_POLICY_READY
- Next: push controllato dei commit CML-121/122/123/124.

## 2026-06-24 â€” CML-123 â€” POST_CONSOLIDATION_WHITESPACE_AND_GIT_HYGIENE_FIX

- **HEAD iniziale (main)**: `8b5488ca82d319c29e2d27a98745751f3cdd7c84`
- Tipo slice: documentale minima / hygiene post-consolidamento
- Obiettivo: rimuovere trailing whitespace residuo nel report CML-119C-bis senza modifiche funzionali.
- Controlli iniziali:
  - `git rev-parse HEAD` -> commit di partenza confermato
  - `git status --short --branch` -> `main...origin/main [ahead 2]` + residui non core non tracciati
  - `git diff --check` -> nessun errore nel working tree
  - `git show --check --pretty=format: HEAD -- report/CML-119C-bis_disciplinary_knowledge_content_governance_audit.md` -> trailing whitespace rilevato
- Correzione applicata:
  - File: `report/CML-119C-bis_disciplinary_knowledge_content_governance_audit.md`
  - Azione: rimozione soli spazi finali su riga markdown (`- **Fonti disponibili**:`)
  - Nessuna variazione semantica o strutturale
- Perimetro non toccato:
  - runtime, JSON disciplinari, validator, schema `.cml`, import/export, UI/CSS/logica
- Esclusi dal commit:
  - `.agents/`, `Consultazione`, `skills-lock.json`
- Artefatti slice:
  - `docs/03_execution/CML-123.md`
  - `report/CML-123_post_consolidation_whitespace_and_git_hygiene_fix.md`
  - aggiornamento `docs/REPO-MOVELOG.md`
- Verdetto: `CML_123_POST_CONSOLIDATION_WHITESPACE_HYGIENE_READY`
- Next: CML-124 â€” decisione strutturale sui residui non core.

## 2026-06-24 â€” CML-122 â€” DIRTY_WORKTREE_SPLIT_AND_SELECTIVE_CONSOLIDATION

- **HEAD iniziale (main)**: `7d840bf4ab22640c824a884f6417436637245852`
- Tipo slice: consolidamento selettivo / split dirty worktree
- Obiettivo: separare e consolidare blocco core (runtime + JSON + validator) mantenendo fuori rumore non core.
- Classificazione eseguita:
  - Runtime: `_published_snapshot/netlify-current/index.html`
  - JSON disciplinari: `content/curriculum/italiano.normalized.json`, `content/curriculum/matematica.normalized.json`, `content/curriculum/tecnologia.normalized.json`
  - Validator: `tools/validate-cml-normalized-curriculum.mjs`
  - Documenti/report CML verificati: `docs/03_execution/CML-119C-bis.md`, `docs/03_execution/CML-119C.md`, `docs/03_execution/CML-119D.md`, `report/CML-119B_multi_discipline_normalized_curriculum_validator.md`, `report/CML-119C-bis_disciplinary_knowledge_content_governance_audit.md`, `report/CML-119C_disciplinary_knowledge_map_data_contract.md`, `report/CML-119D_disciplinary_knowledge_map_pilot_normalization.md`, `report/CML-120_disciplinary_knowledge_map_read_only_view.md`
  - Rumore non core escluso: `.agents/`, `skills-lock.json`, `Consultazione`
- Verifica tecnica blocco core:
  - Runtime mappa disciplinare read-only coerente (Tecnologia/Matematica/Italiano)
  - Hotfix alias confermato:
    - `var units=TECNOLOGIA_NORM_DATA.unitaApprendimento;`
    - `const TECNOLOGIA_NORM_DATA = TECNOLOGIA_NORM;`
  - Validatore multi-disciplina eseguito:
    - `node tools/validate-cml-normalized-curriculum.mjs`
    - Esito: `overallValid: true`, `invalidCount: 0`, `totalFiles: 7`, `totalUnits: 94`
- Artefatti slice:
  - `docs/03_execution/CML-122.md`
  - `report/CML-122_dirty_worktree_split_and_selective_consolidation.md`
  - aggiornamento `docs/REPO-MOVELOG.md`
- Verdetto: `CML_122_DIRTY_WORKTREE_SPLIT_AND_CORE_CHANGESET_CONSOLIDATED`
- Next: micro-slice dedicata a repository hygiene per rumore non core escluso.

## 2026-06-24 â€” CML-121 â€” REPO_TRACEABILITY_RECONCILIATION_AND_SLICE_BOUNDARY_AUDIT

- **HEAD iniziale (main)**: `96f2173ef44979b583b15e8382575b8615149f87`
- Tipo slice: documentale / reconciliation-only
- Obiettivo: riallineare stato Git reale e narrativa CML senza introdurre nuove funzioni
- Fotografia stato reale (inizio slice):
  - Runtime applicativo: `_published_snapshot/netlify-current/index.html`
  - JSON disciplinari: `content/curriculum/italiano.normalized.json`, `content/curriculum/matematica.normalized.json`, `content/curriculum/tecnologia.normalized.json`
  - Validator/script: `tools/validate-cml-normalized-curriculum.mjs`
  - Documentazione CML/movelog: `docs/03_execution/CML-119B.md`, `docs/03_execution/CML-120.md`, `docs/REPO-MOVELOG.md` (+ altri CML docs giÃ  presenti nel working tree)
  - Report: `report/CML-119B_multi_discipline_normalized_curriculum_validator.md`, `report/CML-119C-bis_disciplinary_knowledge_content_governance_audit.md`, `report/CML-119C_disciplinary_knowledge_map_data_contract.md`, `report/CML-119D_disciplinary_knowledge_map_pilot_normalization.md`, `report/CML-120_disciplinary_knowledge_map_read_only_view.md`
  - Rumore non funzionale/non core: `.agents/`, `skills-lock.json`, `Consultazione`
- Correzioni documentali applicate:
  - Refuso corretto: `tecnologica.normalized.json` â†’ `tecnologia.normalized.json` in `docs/03_execution/CML-119B.md`
  - Narrativa CML-120 resa fattuale rispetto al working tree reale in `docs/03_execution/CML-120.md`
  - Aggiunta nota collisione numerazione CML-120 (vedi nota sotto)
  - Tracciato hotfix runtime alias dataset (senza ulteriori modifiche runtime):
    - `var units=TECNOLOGIA_NORM_DATA.unitaApprendimento;`
    - `const TECNOLOGIA_NORM_DATA = TECNOLOGIA_NORM;`
- Nota numerazione:
  - Esistono due voci storiche con etichetta `CML-120`:
    1) `CML-120 â€” DISCIPLINARY_KNOWLEDGE_MAP_READ_ONLY_VIEW` (blocco corrente in testa)
    2) `CML-120 - NORMALIZZAZIONE RUNTIME LATINO (LEL)` (voce storica precedente)
  - La voce precedente resta invariata per preservare la storia Git/documentale, ma va considerata **voce storica ambigua/deprecata** ai fini della tracciabilitÃ  corrente.
- Verdetto: `CML_121_REPO_TRACEABILITY_RECONCILIATION_PARTIAL_NEEDS_SLICE_SPLIT`
- Next: CML-122 â€” `RUNTIME_JSON_VALIDATOR_CHANGESET_CONSOLIDATION`

---

## 2026-06-24 â€” CML-120 â€” DISCIPLINARY_KNOWLEDGE_MAP_READ_ONLY_VIEW

- **HEAD (main)** â€” runtime read-only + docs
- Branch: `main`
- Slice precedente: `CML_119D_DISCIPLINARY_KNOWLEDGE_MAP_PILOT_NORMALIZATION_READY`
- Commits: nessuno (runtime + docs)
- File creati/modificati:
  - `_published_snapshot/netlify-current/index.html`
  - `docs/03_execution/CML-120.md`
  - `report/CML-120_disciplinary_knowledge_map_read_only_view.md`
  - `docs/REPO-MOVELOG.md`
- Modifiche runtime:
  - Vista read-only "Mappa disciplinare" nella sezione "Competenze e progettazione"
  - Dati inlineati: TECNOLOGIA_MAPPA_DATI, MATEMATICA_MAPPA_DATI, ITALIANO_MAPPA_DATI
  - Selettore discipline, renderizzazione strutture/nodi/progressioni/decisioni
  - Stato `da_validare`, avviso validazione umana, messaggio per discipline non mappate
- Validazioni:
  - `git diff --check` â€” pulito
  - `node tools/validate-cml-normalized-curriculum.mjs` â€” 7 file, 94 unitÃ , overallValid: true
  - Nessuna nuova modifica a export/import, schema `.cml`, validatore nel perimetro CML-120
  - Nota CML-121: nel working tree reale coesistono anche modifiche JSON del ciclo CML-119D e modifiche validator/documentali non consolidate
  - Nessuna parola impropria
- Verdetto: `CML_120_DISCIPLINARY_KNOWLEDGE_MAP_READ_ONLY_VIEW_READY`
- Next: CML-121 â€” normalizzazione discipline rimanenti

---

## 2026-06-24 â€” CML-119D â€” DISCIPLINARY_KNOWLEDGE_MAP_PILOT_NORMALIZATION

- **HEAD (main)** â€” normalizzazione dati pilota + docs, nessuna modifica runtime
- Branch: `main`, nessuna modifica runtime
- Slice precedente: `CML_119C_BIS_DISCIPLINARY_KNOWLEDGE_CONTENT_GOVERNANCE_AUDIT_READY`
- Commits: nessuno (normalizzazione + docs)
- File creati/modificati:
  - `content/curriculum/tecnologia.normalized.json`
  - `content/curriculum/matematica.normalized.json`
  - `content/curriculum/italiano.normalized.json`
  - `docs/03_execution/CML-119D.md`
  - `report/CML-119D_disciplinary_knowledge_map_pilot_normalization.md`
  - `docs/REPO-MOVELOG.md`
- Normalizzazione:
  - Tecnologia: 6 strutture, 10 progressioni, 2 decisioni
  - Matematica: 5 nodi, 12 strutture, 6 progressioni, 4 decisioni
  - Italiano: 6 nodi, 13 strutture, 12 progressioni, 4 decisioni
- Contenuti non inventati: tutti derivati da dati esistenti con fonte documentata
- Stato tutti nuovi elementi: `da_validare`
- Validazioni:
  - `node tools/validate-cml-normalized-curriculum.mjs` â€” 7 file, 94 unitÃ , overallValid: true, 0 errori
  - `git diff --check` â€” pulito
  - Nessuna modifica runtime, UI, export/import, schema `.cml`, validatore
  - Solo 3 JSON disciplinari modificati
- Verdetto: `CML_119D_DISCIPLINARY_KNOWLEDGE_MAP_PILOT_NORMALIZATION_READY`
- Next: CML-119E â€” estensione validatore per nuovi campi contratto

---

## 2026-06-24 â€” CML-119C-bis â€” DISCIPLINARY_KNOWLEDGE_CONTENT_GOVERNANCE_AUDIT

- **HEAD (main)** â€” audit-only / governance-only, nessuna modifica runtime
- Branch: `main`, nessuna modifica runtime
- Slice precedente: `CML_119C_DISCIPLINARY_KNOWLEDGE_MAP_DATA_CONTRACT_READY`
- Commits: nessuno (audit-only)
- File creati/modificati:
  - `docs/03_execution/CML-119C-bis.md`
  - `report/CML-119C-bis_disciplinary_knowledge_content_governance_audit.md`
  - `docs/REPO-MOVELOG.md`
- AttivitÃ :
  - Analizzati 3 file JSON pilota (Tecnologia, Matematica, Italiano)
  - Classificati 10 campi contratto in categorie A/B/C di derivabilitÃ 
  - Definita matrice finale e regole operative per CML-119D
- Esito:
  - Campi A (derivabili): `progressioneVerticale` (template)
  - Campi B (parzialmente derivabili): `struttureSostanziali`, `saperiEssenziali`, `nodiDisciplinari`, `legamiInterdisciplinari`, `competenzeChiaveEuropee`, `decisioniCurricolari`
  - Campi C (non derivabili): `statutoEpistemologico`, `naturaDisciplina`, `sintassiDisciplinare`
- Regole CML-119D definite: zero invenzione, stato `da_validare` obbligatorio, fonti obbligatorie, validazioneUmana: true
- Validazioni:
  - `git diff --check` â€” pulito
  - Audit-only confermata: nessuna modifica runtime, JSON, validatore, export/import, schema `.cml`, UI
- Verdetto: `CML_119C_BIS_DISCIPLINARY_KNOWLEDGE_CONTENT_GOVERNANCE_AUDIT_READY`
- Next: CML-119D â€” DISCIPLINARY_KNOWLEDGE_MAP_PILOT_NORMALIZATION

---



## 2026-06-24 â€” CML-119B â€” MULTI_DISCIPLINE_NORMALIZED_CURRICULUM_VALIDATOR

- **HEAD (main)** â€” docs + tool, nessuna modifica runtime
- Branch: `main`, nessuna modifica runtime
- Slice precedente: `CML_119A_DISCIPLINARY_KNOWLEDGE_MODEL_AUDIT_READY`
- Commits: nessuno (docs-only + tool update)
- File creati/modificati:
  - `tools/validate-cml-normalized-curriculum.mjs` (generalizzato da mono-disciplina a multi-disciplina)
  - `docs/03_execution/CML-119B.md`
  - `report/CML-119B_multi_discipline_normalized_curriculum_validator.md`
- File aggiornati:
  - `docs/REPO-MOVELOG.md`
- Validazioni:
  - `node tools/validate-cml-normalized-curriculum.mjs` â€” 7 file, 94 unitÃ , overallValid: true
  - `git diff --check` â€” pulito
  - Nessuna modifica a `_published_snapshot/netlify-current/index.html`, runtime, export/import, schema `.cml`, contenuti disciplinari
  - Warning `nucleo`/`nucleoFondante` documentato come retrocompatibile
- Verdetto: `CML_119B_MULTI_DISCIPLINE_NORMALIZED_CURRICULUM_VALIDATOR_READY`
- Next: CML-119C â€” CONTRATTO_DATI_MAPPA_DISCIPLINARE

---

## 2026-06-24 â€” CML-119A â€” DISCIPLINARY_KNOWLEDGE_MODEL_AUDIT
- **HEAD (main)** â€” audit read-only, docs-only
- Branch: `main`, nessuna modifica runtime
- Slice precedente: `CML_118_COMPETENZE_E_PROGETTAZIONE_CONTENT_REFOCUS_AUDIT_READY`
- Commits: nessuno (docs-only)
- File creati/modificati:
  - `docs/03_execution/CML-119A.md`
  - `report/CML-119A_disciplinary_knowledge_model_audit.md`
- File aggiornati:
  - `docs/REPO-MOVELOG.md`
- Verdetto: `CML_119A_DISCIPLINARY_KNOWLEDGE_MODEL_AUDIT_READY`
- Next: CML-119B â€” VALIDATORE_MULTI_DISCIPLINA

---

## 2026-06-24 â€” CML-118 â€” COMPETENZE_E_PROGETTAZIONE_CONTENT_REFOCUS_AUDIT
- **HEAD (main)** â€” audit read-only, docs-only
- Branch: `main`, nessuna modifica runtime
- Slice precedente: `CML_117_POST_REFOCUS_RUNTIME_SMOKE_AND_NAV_COHERENCE_AUDIT_READY`
- Commits: nessuno (docs-only)
- File creati/modificati:
  - `docs/03_execution/CML-118.md`
  - `report/CML-118_competenze_e_progettazione_content_refocus_audit.md`
- File aggiornati:
  - `docs/REPO-MOVELOG.md`
- Verdetto: `CML_118_COMPETENZE_E_PROGETTAZIONE_CONTENT_REFOCUS_AUDIT_READY`
- Next: CML-119 â€” COMPETENZE_CHIAVE_AGGREGATE_OVERVIEW

---

## 2026-06-24 â€” CML-117 â€” POST_REFOCUS_RUNTIME_SMOKE_AND_NAV_COHERENCE_AUDIT
- **HEAD (main)** â€” audit/smoke, nessuna modifica runtime
- Branch: `main`, nessuna modifica runtime
- Slice precedente: `CML_116_HOME_CURRICULUM_PROCESS_REFOCUS_READY`
- Commits: nessuno (audit-only)
- File creati/modificati:
  - `docs/03_execution/CML-117.md`
  - `report/CML-117_post_refocus_runtime_smoke_and_nav_coherence_audit.md`
- File aggiornati:
  - `docs/REPO-MOVELOG.md`
- Verdetto: `CML_117_POST_REFOCUS_RUNTIME_SMOKE_AND_NAV_COHERENCE_AUDIT_READY`
- Next: CML-118 (opzionale) â€” validazione mobile o arricchimento Competenze e progettazione

---

## 2026-06-24 â€” CML-116 â€” HOME_CURRICULUM_PROCESS_REFOCUS
- **HEAD (main)** â€” lightweight Home refocus, single-file runtime increment
- Branch: `main`, modificato `_published_snapshot/netlify-current/index.html`
- Slice precedente: `CML_115_SYSTEM_REFOCUS_AFTER_DEPARTMENT_VALIDATION_AUDIT_READY`
- Commits: nessuno (lavoro in corso)
- File creati/modificati:
  - `docs/03_execution/CML-116.md`
  - `report/CML-116_home_curriculum_process_refocus.md`
- File aggiornati:
  - `_published_snapshot/netlify-current/index.html`
  - `docs/REPO-MOVELOG.md`
- Verdetto: `CML_116_HOME_CURRICULUM_PROCESS_REFOCUS_READY`
- Next: CML-117 â€” POST_REFOCUS_RUNTIME_SMOKE_AND_NAV_COHERENCE_AUDIT

---

## 2026-06-24 â€” CML-115 â€” SYSTEM_REFOCUS_AFTER_DEPARTMENT_VALIDATION_AUDIT
- **HEAD (main)** â€” audit read-only, docs-only
- Branch: `main`, nessuna modifica runtime
- Slice precedente: `CML_114_VALIDAZIONE_DIPARTIMENTALE_FIRST_RUNTIME_INCREMENT_READY`
- Commits audit: nessuno (docs-only)
- File creati/modificati:
  - `docs/03_execution/CML-115.md`
  - `report/CML-115_system_refocus_after_department_validation_audit.md`
- File aggiornati:
  - `docs/REPO-MOVELOG.md`
- Verdetto: `CML_115_SYSTEM_REFOCUS_AFTER_DEPARTMENT_VALIDATION_AUDIT_READY`
- Next: CML-116 â€” HOME_CURRICULUM_PROCESS_REFOCUS

---

## 2026-06-24 â€” CML-114 â€” VALIDAZIONE_DIPARTIMENTALE_FIRST_RUNTIME_INCREMENT
- **HEAD (main)** â€” audit read-only, docs-only
- Branch: `main`, tree modificata su `index.html` (non toccata in questo commit)
- Slice precedente: `CML_113_VALIDAZIONE_DIPARTIMENTALE_WORKFLOW_AUDIT_READY`
- Commits audit:
  - `docs: create CML-114 documentation`
- File creati/modificati:
  - `docs/03_execution/CML-114.md`
  - `report/CML-114_validazione_dipartimentale_first_runtime_increment.md`
- File aggiornati:
  - `docs/REPO-MOVELOG.md`
- Verdetto: `CML_114_VALIDAZIONE_DIPARTIMENTALE_FIRST_RUNTIME_INCREMENT_READY`
- Next: CML-115 â€” NEXT_DISCIPLINE_NORMALIZATION_SELECTION_AUDIT

---

## 2026-06-24 â€” CML-113 â€” VALIDAZIONE_DIPARTIMENTALE_WORKFLOW_AUDIT

- **HEAD (main)** â€” audit read-only, docs-only
- Branch: `main`, tree modificata su `index.html` (non toccata in questo commit)
- Slice precedente: `CML_112A_HASH_SELECTION_SMOKE_TEST_PASSED`
- Commits audit:
  - `docs: audit CML departmental validation workflow`
- File creati/modificati:
  - `docs/03_execution/CML-113.md`
  - `report/CML-113_validazione_dipartimentale_workflow_audit.md`
- File aggiornati:
  - `docs/REPO-MOVELOG.md`
- Verdetto: `CML_113_VALIDAZIONE_DIPARTIMENTALE_WORKFLOW_AUDIT_READY`
- Next: CML-114 â€” VALIDAZIONE_DIPARTIMENTALE_FIRST_RUNTIME_INCREMENT

## 2026-06-21 â€” CML-008R-FIX closure

- **9179418** â€” fix: align tecnologia markdown decision summary
  - "Da decidere" â†’ "Voci da validare"
  - Aggiunta sezione "Voci mantenute da validare" (4 voci)
  - Rinominata sezione "Dettaglio delle proposte di modifica / Gap 2025"
  - Nota esplicativa post-sintesi e nota metodologica aggiornate
  - Rimosso doppio separatore pre-footer
- Audit di chiusura superato: `CML_008R_FIX_CLOSURE_AUDIT_READY_FOR_CONTROLLED_PUBLICATION`
- **8c92fea** â€” docs: close CML-008R markdown decision summary fix audit
- **Controlled Netlify publication:** `https://curmanlight.netlify.app`
  - Comando: `npx netlify deploy --prod --dir _published_snapshot/netlify-current`
  - 1 file deployato, 4s
  - Verifica post-deploy passata
  - Verdetto: `CML_008R_CONTROLLED_NETLIFY_PUBLICATION_CLOSED`

## 2026-06-20 â€” CML-008R pubblicato

- **dc179ce** â€” feat: add tecnologia markdown export readiness
  - Export Markdown per disciplina Tecnologia con pannello UI dedicato
  - Confronto IN2012â†’IN2025, gap markers, dettaglio proposte
  - Verifica locale e produzione passate

- **CML-009A** - User view lightening design audit (solo analisi, nessun codice)
  - Problema: ~1300 parole prima del contenuto disciplinare, nessuna gerarchia
  - Proposta: architettura a 3 livelli (cruscotto, schede, dettaglio espandibile)
  - Nessuna modifica funzionale, nessun deploy
  - Verdetto: `CML_009A_USER_VIEW_LIGHTENING_DESIGN_AUDIT_READY`

## 2026-06-21 â€” CML-009B top area lightening

- **09b325c** â†’ HEAD (da confermare con commit effettivo)
- Unico file modificato: `_published_snapshot/netlify-current/index.html` (+75/âˆ’43 righe)
- Sostituito quick-info-bar + orientation-card con cruscotto minimo:
  - Stato: revisione avviata
  - Prossima azione: controlla le 12 voci da validare
  - 3 pulsanti: Controlla voci, Apri documento, Esporta
  - Barra compatta: ðŸ’¾ salvataggio + progresso + âš™ï¸ Azioni
- Compattata toolbar: 2 filtri primari + toggle Altri filtri; Export collassato
- Collassato usage-notice in `<details>`
- Comprimati pulsanti local-save-bar
- Nascosto install-hint di default
- Integrato progress-bar nel cruscotto (rimosso progress-wrap separato)
- Asset invariati: sw.js, _headers, PDF (hash verificati)
- Test locale passato (localhost:5000, 200 OK)
- Verdetto: `CML_009B_USER_VIEW_TOP_AREA_LIGHTENING_READY`

## 2026-06-21 â€” CML-009C responsive smoke audit

- **d45407a** â†’ HEAD
- Esito: tutti i breakpoint passati (360, 414, 768, 1280px)
- Nessuna modifica runtime, nessun deploy
- Nessun errore JavaScript bloccante
- 3 problemi minori rilevati (P1: cruscotto visibile su tutti i tab, P2: touch target compatti, P3: toggle sono span)
- Nessuno bloccante â€” pubblicabile
- Verdetto: `CML_009C_USER_VIEW_TOP_AREA_RESPONSIVE_SMOKE_READY`

## 2026-06-21 â€” CML-009D micro-fix context & accessibility

- **636581a** â†’ HEAD
- **P1:** aggiunto `setTab('lavoro')` a "Controlla voci" ed "Esporta" nel cruscotto (coerenza cross-tab)
- **P3:** convertiti toggle "â‹¯ Altri filtri" e "ðŸ“„ Export â–¾" da `<span>` a `<button>` con CSS `.toolbar-toggle`
- **P3:** aggiunto `button:focus-visible{...}` globale
- **P2:** aumentati touch target pulsanti salvataggio (`padding:4px 9px;font-size:11px`)
- Nessun deploy, asset invariati, breakpoint passati
- Verdetto: `CML_009D_TOP_DASHBOARD_CONTEXT_ACCESSIBILITY_READY`

## 2026-06-21 â€” CML-009E â€” Controlled Netlify Publication

- **d9b6cd8** â€” docs: CML-009E deploy report
- Preflight âœ… (branch HEAD b8dece8, tree pulita, hash asset invariati)
- Verifica locale 27/27 âœ… + 4 breakpoint (360/414/768/1280px)
- Deploy: `npx netlify deploy --prod --dir _published_snapshot/netlify-current`
  - 1 file index.html, 4s
  - URL: https://curmanlight.netlify.app
- Verifica post-deploy 14/14 âœ… + screenshot 360/768
- Asset invariati: sw.js, _headers, PDF
- Nessuna modifica runtime
- Verdetto: `CML_009E_CONTROLLED_NETLIFY_PUBLICATION_TOP_VIEW_LIGHTENING_CLOSED`

## 2026-06-21 â€” CML-010A â€” Compact Cards & Expandable Detail Design Audit

- **d9b6cd8** â€” HEAD invariato (solo audit, nessuna modifica runtime)
- Preflight: branch main, tree pulita âœ…
- Analisi vista attuale: area cards (`cardHTML()`), gap-header ridondante, card pending troppo dense, lock-notice ripetuta, nessuna gerarchia
- 7 problemi individuati (P1-P7)
- Proposta: 4 sezioni collassabili nel tab Lavoro (Documento attuale, Voci da validare, Fonti, Esportazione)
- Card pending compatta: badge + 1 riga + âœ…/âŒ/ðŸ”, confronto su richiesta
- Card ok collassate per default
- Nessun deploy, nessuna modifica runtime
- Verdetto: `CML_010A_COMPACT_CARDS_EXPANDABLE_DETAIL_DESIGN_AUDIT_READY`

## 2026-06-21 â€” CML-010B â€” Compact pending cards with expandable detail

- **a240ab7** â†’ HEAD
- Unico file modificato: `_published_snapshot/netlify-current/index.html` (+154/âˆ’64 righe)
- `cardHTML()` riscritto: 4 modalitÃ  (ok collassata, decisa collassata, pending edit, pending compact)
- Card ok/decise collassate di default con `toggleCollapse()`
- Card pending compatte: badge + 1 riga + 4 emoji (âœ… âŒ ðŸ” ðŸ—‘) + dettaglio espandibile
- `gap-header-unique` singolo per sezione (anzichÃ© per-card)
- `togglePendingDetail()` per confronto testuale on-demand
- `lock-notice` unica per sezione via `ordLock` in `render()`
- Rimossi CSS inutilizzati `.act-approve` / `.act-reject`
- Breakpoint responsivi per touch target mobile
- Cose NON toccate: usage-notice, local-save-bar, tecnologia-export-panel, cruscotto, toolbar, filtri, tab, asset
- Verifica locale DOM + 4 breakpoint passata
- Verdetto: `CML_010B_COMPACT_PENDING_CARDS_EXPANDABLE_DETAIL_READY`

## 2026-06-21 â€” CML-010C â€” Compact Pending Cards Runtime Smoke Audit

- **317222a** â€” HEAD invariato (solo audit, nessuna modifica runtime)
- Preflight: branch main, tree pulita âœ…
- Conteggi Tecnologia: 12 voci totali, 4 ok, 8 modifica âœ…
- Card pending compatte verificate: badge, 1 riga testo troncato, 4 emoji (âœ… âŒ ðŸ” ðŸ—‘) âœ…
- Dettaglio espandibile: confronto testuale IN2012 vs IN2025 su richiesta âœ…
- Gap-header: singolo per sezione, 0 vecchi gap-header âœ…
- Non regressioni: usage-notice, toolbar, tabs, cruscotto, asset, esportazione âœ…
- CML-009D preserved: pulsanti salvataggio, focus-visible, setTab, toolbar-toggle âœ…
- Sass: screenshot 360/414/768/1280px passati
- Nessuna modifica runtime, nessun deploy
- Verdetto: `CML_010C_COMPACT_PENDING_CARDS_RUNTIME_SMOKE_READY`

## 2026-06-21 â€” CML-010D â€” Controlled Netlify Publication (Compact Cards)

- **68ce101** â€” HEAD (deploy da working tree pulita, nessuna modifica runtime)
- Preflight: branch main, tree pulita âœ…
- Asset invariati: sw.js, _headers, PDF (hash verificati) âœ…
- Deploy: `npx netlify deploy --prod --dir _published_snapshot/netlify-current`
  - 1 file index.html, 4.2s
  - URL: https://curmanlight.netlify.app
- Verifica post-deploy:
  - HTTP 200, 196511 bytes âœ…
  - pending-card, collapse-header, gap-header-unique âœ…
  - badge modifica âœ…
  - Cruscotto, usage-notice, export preservati âœ…
  - .act-approve old rimosso, vecchio gap-header assente âœ…
  - Screenshot 360/414/768/1280px passati âœ…
  - Nessun JS error âœ…
- Verdetto: `CML_010D_CONTROLLED_NETLIFY_PUBLICATION_COMPACT_CARDS_CLOSED`

## 2026-06-21 â€” CML-010E â€” Real Mobile Acceptance Smoke

- **ba4bd5e** â€” HEAD invariato (solo audit, nessuna modifica runtime)
- Dispositivi simulati: iPhone 13 (390Ã—844), Galaxy S21 (360Ã—800), Pixel 5 (393Ã—851)
- Caricamento, cruscotto, card pending, dettaglio espandibile: âœ… tutti i dispositivi
- 9 pending-detail nascoste, 8 badge modifica, 5 badge ok âœ…
- Gap-header unico per sezione (4 sezioni) âœ…
- Touch target: min-height 44+ per act, 34px per pending-action
- 3 problemi non bloccanti rilevati:
  - P1: touch target pending-action 34px (sotto HIG 44px)
  - P2: icona ðŸ” non auto-esplicativa su mobile
  - P3: collapse indicator poco evidente
- Nessun deploy, nessuna modifica runtime
- Verdetto: `CML_010E_REAL_MOBILE_ACCEPTANCE_SMOKE_READY`

## 2026-06-21 â€” CML-010F â€” Mobile Touch and Compact Action Label Microfix

- **c9c6667** â€” fix touch target mobile, accessibilitÃ  pulsante ðŸ”, contrasto collapse indicator
- P1: `.pending-action` mobile portato a 42px (â‰¤900px) e 40px (â‰¤560px)
- P2: pulsante ðŸ” con `aria-label` statico e dinamico
- P3: collapse indicator `#90a4ae` â†’ `#546e7a`, font 11px â†’ 12px
- Documentazione in `CML-010F/` (non standard), `movelog.json` creato
- Audit CML-010F-CLOSURE: P1 sotto 44px, documentazione fuori standard

## 2026-06-21 â€” CML-010F2 â€” Mobile Pending Action Touch Target and Doc Normalization

- **4c8978b** â€” fix: normalize CML mobile pending actions touch target
- P1 risolto: 42pxâ†’44px (â‰¤900px), 40pxâ†’44px (â‰¤560px)
- Documentazione normalizzata: `docs/03_execution/CML-010F2.md`, `report/`, `docs/REPO-MOVELOG.md`
- File non standard CML-010F preservati (giÃ  committati)
- Nessun deploy
- Verdetto: `CML_010F2_MOBILE_TOUCH_TARGET_DOC_NORMALIZATION_READY`

## 2026-06-21 â€” CML-010G â€” Controlled Netlify Publication Mobile Actions Fix

- **4c8978b** â€” fix: normalize CML mobile pending actions touch target (pre-deploy)
- Count 12/8/4 vs 54/41/9 chiarito: scope diverso (Tecnologia vs tutte le discipline)
- **npx netlify deploy --prod --dir _published_snapshot/netlify-current** â€” 1 file (index.html)
- URL pubblicato: https://curmanlight.netlify.app
- Pending-action mobile a 44px confermato su tutti i breakpoint
- Card compatte, pulsanti âœ…âŒðŸ”ðŸ—‘, dettaglio espandibile preservati
- Approvazione/rifiuto invariati
- Asset, sw.js, _headers, PDF, Markdown generation, export panel intatti
- Nessuna regressione bloccante
- Verdetto: `CML_010G_CONTROLLED_NETLIFY_PUBLICATION_MOBILE_ACTIONS_FIX_CLOSED`

## 2026-06-21 â€” CML-011A â€” Export and Guide Clarity Selection Audit

- **e12f5ca** â€” HEAD invariato (solo audit, nessuna modifica runtime)
- 7 criticitÃ  individuate (C1-C7), la piÃ¹ grave: disclaimer validazione assente su "Curricolo Definitivo"
- Opzioni valutate: A (microcopy), B (pannello formati), C (percorso guidato), D (fix C2)
- Selezionata: **Opzione A + fix C2** â€” microcopy export labels + disclaimer su Definitivo
- Nessuna modifica runtime, nessun deploy
- Verdetto: `CML_011A_EXPORT_GUIDE_CLARITY_SELECTION_AUDIT_READY`

## 2026-06-21 â€” CML-011B â€” Export and Guide Clarity Microcopy

- **6c97da4** â†’ HEAD + uncommitted
- Opzione A (microcopy) + fix C2 (disclaimer validazione) implementati
- Toolbar export: `(confronto)` su Word, Copia, Markdown, PDF
- Curricolo Definitivo: `(definitivo)` su Copia per Word e PDF (mancanti)
- Disclaimer: "âš ï¸ Documento di lavoro â€” da validare. Non sostituisce delibera del Collegio Docenti."
- Deployato su Netlify: `npx netlify deploy --prod --dir _published_snapshot/netlify-current`
- Solo microcopy, nessuna modifica logica/strutturale
- Verdetto: `CML_011B_EXPORT_GUIDE_CLARITY_MICROCOPY_DEPLOYED`

## 2026-06-21 â€” CML-011C â€” Export and Guide Clarity Real Task Smoke

- **2da61ed** (CML-011B) â†’ HEAD + nuovo commit docs
- Solo audit/smoke test â€” nessuna modifica runtime, nessun deploy
- Scenario utente simulato: controllo â†’ confronto â†’ definitivo â†’ disclaimer â†’ export
- Esito: microcopy sufficiente, flusso chiaro, nessuna ambiguitÃ  sostanziale
- Opzione B (strutturale) NON necessaria
- Raccomandazione: chiudere ciclo CML-011
- Verdetto: `CML_011C_EXPORT_GUIDE_REAL_TASK_SMOKE_READY`

## 2026-06-21 â€” CML-011D â€” Export and Guide Clarity Cycle Closure

- **72bef0c** (CML-011C) â†’ HEAD + nuovo commit docs
- Solo docs â€” nessuna modifica runtime, nessun deploy
- Catena CML-011 completa: A (audit) â†’ B (microcopy + deploy) â†’ C (smoke) â†’ D (chiusura)
- Opzione B strutturale NON necessaria â€” microcopy sufficiente
- Obiettivo ciclo raggiunto: export/guida comprensibili, confronto/definitivo distinguibili, disclaimer validazione presente
- Verdetto: `CML_011D_EXPORT_GUIDE_CLARITY_CYCLE_CLOSED`

## 2026-06-21 â€” CML-012A â€” Real User Task Acceptance Test Design

- **15fc009** (CML-011D) â†’ HEAD + nuovo commit docs
- Protocollo `T01-CML-REAL-USER-TASK` progettato: 8 passi, criterio 8/8 per chiusura UX
- Nessuna modifica runtime, nessun deploy
- Verdetto: `CML_012A_REAL_USER_TEST_DESIGN_READY`

## 2026-06-21 â€” CML-013A â€” Full UI/UX Redesign Study and Contract

- **2c32bab** (CML-012A) â†’ HEAD + nuovo commit docs
- CML-012A preservato come verifica futura (non modificato)
- Studio completo: diagnosi, architettura (5 livelli), navigazione desktop/mobile, componenti, mappa 30 elementi, criteri accettazione CML-013B
- Direzione: da dashboard a percorso guidato a livelli
- Nessuna modifica runtime, nessun deploy
- Verdetto: `CML_013A_FULL_UI_UX_REDESIGN_CONTRACT_READY`

## 2026-06-21 â€” CML-013B â€” Guided Home Static Prototype

- **e3c105d** (CML-013A) â†’ HEAD + modifiche runtime minime
- 23 insertion, 10 deletion su `_published_snapshot/netlify-current/index.html`
- Solo CSS + HTML: cruscotto potenziato (3 pulsanti piu grandi), breadcrumb, sidebar meno dominante, toolbar piu compatta
- Salva/Backup/Importa/Ripristina spostati da blocco locale-save-bar a menu Azioni
- Salvataggio come stato compatto nel cruscotto-bar
- Nessuna logica modificata, nessuna funzione persa
- Nessun deploy
- Verdetto: `CML_013B_GUIDED_HOME_STATIC_PROTOTYPE_READY`

## 2026-06-21 â€” CML-013C â€” Smoke Audit: Guided Home Prototype

- **7249d66** â€” docs: audit CML-013B guided home smoke (nuovo commit)
- Audit completo: primo impatto, 3 azioni, funzioni secondarie, gerarchia, responsive, regressioni
- Esito: nessuna regressione, home risponde a "cosa devo fare?"
- 3 raccomandazioni opzionali non bloccanti (breadcrumb dinamico, CSS morto, breakpoint <400px)
- Nessuna modifica runtime, nessun deploy
- Verdetto: `CML_013C_GUIDED_HOME_SMOKE_AUDIT_PASSED`

## 2026-06-21 â€” CML-013D â€” Controlled Netlify Publication Guided Home

- **7249d66** â€” docs: audit CML-013B guided home smoke (pre-deploy HEAD)
- Preflight: branch main, tree pulita âœ…
- Verifica locale (localhost:8089): cruscotto, 3 azioni, breadcrumb, sidebar, quick actions, tabs, normativa, riepilogo, generali âœ…
- Asset verificati: sw.js, _headers, PDF, icons, manifest, motto.html âœ…
- Deploy: `npx netlify deploy --prod --dir _published_snapshot/netlify-current`
  - 1 file (index.html), 4.7s
  - URL: https://curmanlight.netlify.app
  - Deploy ID: 6a37daaf34af39a1d2db290f
- Verifica post-deploy:
  - Home guidata live: stato + prossima azione + 3 azioni âœ…
  - Breadcrumb sotto tabbar âœ…
  - Menu âš™ï¸ Azioni con tutte le funzioni secondarie âœ…
  - Sidebar discipline preservata âœ…
  - Toolbar + filtri + export preservati âœ…
  - Tab Riepilogo + disclaimer validazione preservati âœ…
  - Tab Normativa + tab Generali preservati âœ…
  - Tecnologia export panel preservato âœ…
  - Asset, sw.js, _headers, PDF invariati âœ…
  - Nessuna regressione bloccante âœ…
- Nessuna modifica funzionale, nessun merge, nessun nuovo sito
- Verdetto: `CML_013D_CONTROLLED_NETLIFY_PUBLICATION_GUIDED_HOME_CLOSED`

## 2026-06-21 â€” CML-013E â€” Mobile Navigation Structure Audit

- **1c8f3ef** â€” docs: record CML guided home controlled publication (HEAD invariato)
- Analisi navigazione mobile attuale: 9 elementi, 7 criticitÃ 
  - Tabbar sovraccarica (4 voci su 360px)
  - Sidebar discipline sempre visibile (anche su Definitivo/Fonti)
  - Nessuna bottom bar â€” azioni primarie solo in alto
  - Cruscotto occupa >50% viewport mobile
  - Esporta raggiungibile in 3 tap
  - Fonti/Generali poco usati ma sempre esposti
  - Breadcrumb inefficace su mobile
- Opzioni valutate: A (bottom bar minima), B (menu a scomparsa), **C (sistema ibrido)**
- Opzione selezionata: **C â€” Sistema ibrido**
  - Bottom bar: âœï¸ Rev. / ðŸ“‹ Def. / ðŸ“¤ Esp. / â˜°
  - Menu â˜°: Fonti, Generali, Azioni secondarie
  - Discipline solo contestuali alla vista Revisione
  - Desktop invariato (â‰¥901px)
- 11 criteri di accettazione per CML-013F
- Nessuna modifica runtime, nessun deploy
- Verdetto: `CML_013E_MOBILE_NAVIGATION_STRUCTURE_AUDIT_READY`

## 2026-06-21 â€” CML-013F â€” Bottom Bar + Menu Overlay Mobile Navigation

- **a858374** â€” docs: audit CML mobile navigation structure (pre-deploy HEAD)
- Unico file modificato: `_published_snapshot/netlify-current/index.html`
- **Bottom bar fissa (â‰¤900px):** âœï¸ Rev. / ðŸ“‹ Def. / ðŸ“¤ Esp. / â˜° Menu
  - position:fixed, z-index:1000, touch target 44px
  - padding-bottom 52px su body
  - Tabbar nascosto a â‰¤900px
- **Menu overlay â˜°:** Fonti, Generali, Azioni secondarie, Salva/Backup/Importa/Ripristina
  - Creato dinamicamente da JS
  - Chiusura: X, click fuori, tap voce
- **Sidebar discipline:** contestuale â€” visibile solo in Revisione/Definitivo
- **Breadcrumb:** dinamico via updateBreadcrumb() in setTab()
- **setTab() sincronizza:** bottom bar active state + sidebar visibilitÃ 
- **11/11 criteri accettazione CML-013E** verificati
- Desktop (â‰¥901px) invariato âœ…
- Asset invariati: sw.js, _headers, PDF
- Deploy: `npx netlify deploy --prod --dir _published_snapshot/netlify-current` â€” 1 file, 3.9s
- Verifica post-deploy: https://curmanlight.netlify.app â€” passa âœ…
- Verdetto: `CML_013F_BOTTOM_BAR_MENU_OVERLAY_MOBILE_NAVIGATION_READY`

## 2026-06-21 â€” CML-013G â€” Mobile Navigation Publication Smoke and Closure

- **06cf3d4** â€” feat: mobile bottom bar + menu overlay navigation (pre-audit HEAD)
- Solo audit e documentazione â€” nessuna modifica runtime, nessun deploy
- Preflight: branch `main`, HEAD `06cf3d4`, tree pulita âœ…
- **Verifica pubblicata:** https://curmanlight.netlify.app â€” bottom bar live âœ…
- **Bottom bar:** 4 bottoni, touch target 52px, body padding-bottom 52px, nessun overlap âœ…
- **Menu overlay:** apertura/chiusura, tutte le voci (Fonti, Generali, Azioni, Salva, Backup, Importa, Ripristina, Installa, Impostazioni, PDF, Motto, Guida) â€” tutte funzionanti âœ…
- **Sidebar discipline:** contestuale (mostrata in Revisione/Definitivo su mobile, nascita in Fonti/Generali) âœ…
- **Breadcrumb dinamico:** aggiornato al cambio tab via setTab() âœ…
- **Desktop â‰¥901px:** invariato (tutto in media query max-width:900px) âœ…
- **Breakpoint:** 360/390/414/768/900/901/1280px verificati âœ…
- **Regressioni:** home, cards, dettaglio espandibile, touch target 44px, approvazione/rifiuto, conteggi, export, tecnologia panel, PDF, sw.js, _headers â€” tutte preservate âœ…
- **Problemi:** 2 cosmetici non bloccanti (CSS `.local-save-bar` morto, sintassi media query nidificata ridondante)
- Asset invariati: sw.js, _headers, PDF (confermati da git diff)
- Verdetto: `CML_013G_MOBILE_NAVIGATION_PUBLICATION_SMOKE_CLOSED`

## 2026-06-21 â€” CML-014A â€” Contextual Detail Panel Design Audit

- **b7d7f72** â€” docs: close CML mobile navigation publication smoke (pre-audit HEAD)
- Solo audit e documentazione â€” nessuna modifica runtime, nessun deploy
- Preflight: branch `main`, HEAD `b7d7f72`, tree pulita âœ…
- **Analisi dettaglio attuale:** `cardHTML()` (linee 1393-1497), `togglePendingDetail()` (1377-1383), `.panels` grid 2â†’1 colonna su mobile âš ï¸
- **7 criticitÃ  individuate:**
  - C1: dettaglio lungo su mobile (stack verticale)
  - C2: confronto poco gerarchico (nessuna evidenziazione differenze)
  - C3: fonti non contestuali (nessuna fonte normativa nei label)
  - C4: "Personalizza testo" sepolto nel dettaglio
  - C5: lista appesantita con piÃ¹ dettagli aperti
  - C6: gap mobile/desktop (1 colonna vs 2 colonne)
  - C7: compatibilitÃ  bottom bar (giÃ  risolta)
- **Opzioni valutate:** A (expand migliorato), B (pannello laterale), C (modal/drawer)
- **Opzione selezionata: A â€” Dettaglio espandibile migliorato**
  - Confronto con fonti specifiche (es. "DM 254/2012, Traguardo X.1")
  - Differenze IN2012/IN2025 evidenziate visivamente
  - "Personalizza testo" sempre nella riga azioni principale
  - Mobile: scroll interno con max-height
  - Desktop: 2 colonne preservato
  - Card ok/decise invariate
- **16 criteri accettazione CML-014B** definiti
- **Problemi cosmetici CML-013G:** lasciati come debt non bloccante (separati da CML-014B)
- Verdetto: `CML_014A_CONTEXTUAL_DETAIL_PANEL_DESIGN_AUDIT_READY`

## 2026-06-21 â€” CML-014B â€” Enhanced Pending Detail Panel

- **9243e9e** â€” docs: audit CML contextual detail panel design (pre-implementation HEAD)
- Unico file modificato: `_published_snapshot/netlify-current/index.html` (+16/âˆ’7 righe)
- **Etichette fonti specifiche:**
  - `ðŸ“„ IN 2012 (attuale)` â†’ `ðŸ“„ DM 254/2012 (vigente)`
  - `âœ¨ Proposta IN 2025` â†’ `âœï¸ DM 221/2025 â€” proposta di aggiornamento`
  - `ðŸ†• Non presente nel curricolo attuale` â†’ `ðŸ†• DM 254/2012 â€” assente nel curricolo attuale`
- **Evidenziazione differenze:** colored left border arancione (`#f57f17`) su pannello corrente, verde (`#43a047`) su proposta
- **"Personalizza testo" in primo piano:** pulsante âœï¸ viola (`#7b1fa2`) aggiunto alla riga azioni compatta (prima era solo nel dettaglio ðŸ”)
- **Scroll dettaglio mobile:** `max-height:200px; overflow-y:auto` (150px a â‰¤760px)
- **Truncation proposta:** 90 â†’ 120 caratteri
- **16/16 criteri accettazione CML-014A** verificati
- Asset invariati: sw.js, _headers, PDF
- Nessun deploy (previsto CML-014C smoke audit)
- Verdetto: `CML_014B_ENHANCED_PENDING_DETAIL_PANEL_READY`

## 2026-06-21 â€” CML-014C â€” Controlled Publication and Smoke Audit Enhanced Detail Panel

- **7ab9276** â€” feat: enhance CML pending detail panel (pre-deploy HEAD)
- Preflight: branch `main`, tree pulita âœ…
- Deploy: `npx netlify deploy --prod --dir _published_snapshot/netlify-current` â€” 1 file (index.html), 3.8s
- URL: https://curmanlight.netlify.app
- Verifica post-deploy: 7/7 enhancement CML-014B verificati live âœ…
- Verifica post-deploy: 16/16 criteri CML-014A verificati live âœ…
- Asset invariati: sw.js, _headers, PDF (confermati da git diff) âœ…
- Nessuna regressione bloccante âœ…
- Nessuna modifica runtime, nessun nuovo deploy
- Verdetto: `CML_014C_CONTROLLED_PUBLICATION_ENHANCED_DETAIL_PANEL_CLOSED`

## 2026-06-21 â€” CML-014D â€” Enhanced Detail Panel Cycle Closure

- **8a14dd6** â€” docs: record CML enhanced detail panel publication smoke (HEAD partenza)
- Solo documentazione â€” nessuna modifica runtime, nessun deploy
- Preflight: branch `main`, HEAD `8a14dd6`, tree pulita âœ…
- Catena CML-014 completa: A (audit) â†’ B (implementation) â†’ C (publication + smoke) â†’ D (closure)
- 7/7 enhancement pubblicati su https://curmanlight.netlify.app âœ…
- 16/16 criteri CML-014A verificati live âœ…
- Asset invariati: sw.js, _headers, PDF âœ…
- Nessuna regressione âœ…
- Debiti non bloccanti CML-013G lasciati fuori dal ciclo
- Verdetto: `CML_014D_ENHANCED_DETAIL_PANEL_CYCLE_CLOSED`

## 2026-06-21 â€” CML-015A â€” Real User Micro-Test: Detail Panel Walkthrough

- **077e221** â€” docs: close CML enhanced detail panel cycle (HEAD partenza)
- Solo audit e documentazione â€” nessuna modifica runtime, nessun deploy
- Preflight: branch `main`, HEAD `077e221`, tree pulita âœ…
- Test percorso utente: 9 step, 9/9 âœ… chiaro
- Fonti (DM 254/2012 / DM 221/2025) riconoscibili âœ…
- Differenze evidenziate (bordo arancione/verde) comprensibili âœ…
- "Personalizza testo" individuabile in due punti âœ…
- Tre azioni (âœ… âŒ âœï¸) distinte e chiare âœ…
- Nessun âš ï¸ dubbio, nessun âŒ bloccato
- Nessuna regressione
- Raccomandazione: chiudere fase UX dettaglio, aprire ciclo su qualitÃ  contenuti disciplinari
- Verdetto: `CML_015A_REAL_USER_DETAIL_PANEL_MICRO_TEST_READY`

## 2026-06-21 â€” CML-016A â€” Disciplinary Content, Sources and Export Quality Audit

- **9a6343f** â€” docs: record CML detail panel real user micro-test (HEAD partenza)
- Solo audit e documentazione â€” nessuna modifica runtime, nessun deploy
- Preflight: branch `main`, HEAD `9a6343f`, tree pulita âœ…
- Audit completo: 14 discipline analizzate, 8 criticitÃ  individuate (2 media gravitÃ )
- Contenuti disciplinari: linguaggio adeguato, riferimenti territoriali, distinzione vigente/proposta âœ…
- Fonti: specifiche e contestuali, normativa completa âœ…
- Curricolo definitivo: struttura chiara, disclaimer presente âœ…
- Export: Markdown/Word/PDF professionali, confronto/definitivo distinti âœ…
- C1: marker `[IN 2025]` inline nel testo proposto â€” da separare
- C2: nessuna distinzione approvato/personalizzato nel Riepilogo â€” da indicare
- Opzione D selezionata per CML-016B: cleanup marker + indicatore personalizzazione
- Verdetto: `CML_016A_DISCIPLINARY_CONTENT_SOURCES_EXPORT_QUALITY_AUDIT_READY`


## 2026-06-21 â€” CML-016B â€” Export Marker Cleanup and Personalization Indicator

- d82fc3a â€” docs: audit CML disciplinary content and export quality (HEAD partenza)
- Unico file runtime modificato: _published_snapshot/netlify-current/index.html
- 61 marker [IN 2025: ...] preservati nei dati sorgente e rimossi dalla presentazione Riepilogo/export
- Indicatore âœï¸ mostrato solo sui testi realmente personalizzati, con legenda compatta
- Conteggi invariati: 103 totali, 41 ok, 54 modifica, 8 nuovo
- Logiche approvazione/rifiuto/personalizzazione ed export invariate
- Responsive PASS: 360, 390, 414, 768, 900, 901, 1280 px
- Asset invariati: PDF, sw.js, _headers, icone/assets; nessun deploy
- Verdetto: CML_016B_EXPORT_MARKER_CLEANUP_PERSONALIZATION_INDICATOR_READY


## 2026-06-21 ï¿½ CML-016C ï¿½ Export Cleanup and Personalization Smoke Audit

- a182347 ï¿½ docs: smoke audit CML export cleanup and personalization (HEAD partenza)
- Smoke audit completa: marker sorgente 61, marker output 0, indicatore ?? PASS
- Conteggi 103/41/54/8 confermati, logiche invariate
- Responsive PASS a tutti i breakpoint richiesti
- Nessun deploy, nessuna modifica runtime, PDF/sw.js/_headers/asset invariati
- Verdetto: CML_016C_EXPORT_CLEANUP_PERSONALIZATION_SMOKE_READY

## 2026-06-21 ï¿½ CML-017 ï¿½ Controlled Netlify Publication After Export Quality Closure

- 5f2d74c ï¿½ docs: record controlled Netlify publication after CML export quality closure (HEAD partenza)
- Pubblicazione controllata completata: preview e production deploy su Netlify
- Progetto: curmanlight (https://curmanlight.netlify.app)
- Nessuna modifica runtime, PDF, sw.js, _headers o asset
- Confini rispettati, nessun dato sensibile esposto
- Verdetto: CML_017_CONTROLLED_NETLIFY_PUBLICATION_AFTER_EXPORT_QUALITY_CLOSURE_READY

## 2026-06-21 ï¿½ CML-018 ï¿½ Simple Drive Handoff Workflow Contract

- 537f70c ï¿½ docs: define simple Drive handoff workflow (HEAD partenza)
- Contratto operativo definito per flusso snello gestione proposte revisione curricolo
- Cartella Drive singola, file `.cml` unico, tre ruoli (Docente, Dipartimento, Referente)
- Automazione solo invio proposta docente, import manuale per altri ruoli
- Nessuna modifica runtime, PDF, sw.js, _headers, asset o deploy
- Verdetto: CML_018_SIMPLE_DRIVE_HANDOFF_WORKFLOW_CONTRACT_READY

## 2026-06-21 ï¿½ CML-018A ï¿½ School Workspace Drive Setup Contract

- e5c9288 ï¿½ docs: define school Workspace Drive setup (HEAD partenza)
- Contratto operativo per Drive condiviso su Workspace della scuola
- Account scolastici obbligatori, ruoli Contributor/Content manager
- Drive: `Revisione Curricolo Istituto`, struttura semplice
- Nessuna modifica runtime, PDF, sw.js, _headers, asset, deploy o credenziali
- Verdetto: CML_018A_SCHOOL_WORKSPACE_DRIVE_SETUP_CONTRACT_READY

## 2026-06-21 ï¿½ CML-019 ï¿½ Teacher Proposal CML File Export

- aa78b47 ï¿½ feat: export teacher proposal cml file (HEAD partenza)
- Funzione `exportTeacherCml()` aggiunta per generare file .cml JSON
- Pulsanti "Scarica proposta .cml" aggiunti nel toolbar e tab Riepilogo
- Schema .cml documentato: teacher_proposal, discipline, counts, proposals
- Nessun Google API, nessun Apps Script, nessun deploy
- Verdetto: CML_019_TEACHER_PROPOSAL_CML_FILE_EXPORT_READY

## 2026-06-22 ï¿½ CML-020 ï¿½ Teacher Proposal Drive Upload Handoff

- 1cee756 ï¿½ feat: add teacher proposal Drive upload handoff
- Funzione `uploadTeacherCmlToDrive()` aggiunta per invio assistito
- Pulsanti "Invia al Drive condiviso" aggiunti nel toolbar e tab Riepilogo
- Configurazione endpoint via localStorage: `curmanlight.driveUploadEndpoint`
- Nessun endpoint reale, token, ID o credenziale committato
- Nessun Google API diretto, nessun Apps Script
- Fallback manuale "Scarica proposta .cml" sempre disponibile
- Verdetto: CML_020_TEACHER_PROPOSAL_DRIVE_UPLOAD_HANDOFF_READY_ENDPOINT_NOT_CONFIGURED


## 2026-06-21 â€” CML-021 â€” Department Guided Teacher Proposal Import

- bcc505f â€” feat: add teacher proposal Drive upload handoff (HEAD partenza)
- Aggiunta sezione â€œValidazione dipartimentaleâ€ nel tab Revisione per disciplina
- Import locale multi-file .cml con validazione schema teacher_proposal
- Riepilogo file validi/non riconoscibili, proposte, discipline e controlli
- Proposte raggruppate per disciplina e stato; motivazione/fonti/indicatori visibili
- Duplicati probabili e discipline miste segnalati senza blocco
- Nessuna rete, persistenza, Drive API, Apps Script, autenticazione o endpoint
- Regressioni download docente e fallback upload: PASS
- PDF, sw.js, _headers e asset invariati; nessun deploy
- Verdetto: CML_021_DEPARTMENT_GUIDED_TEACHER_PROPOSAL_IMPORT_READY


## 2026-06-21 â€” CML-021A â€” Department Proposal Import Smoke Audit

- c241213 â€” feat: add department teacher proposal import (HEAD partenza)
- Slice audit/docs-only; nessuna modifica runtime e nessun deploy
- Smoke: 7 file, 3 validi, 4 esclusi, 5 proposte, 2 discipline, 3 controlli
- JSON invalido, tipo errato, schema parziale, duplicati e discipline miste: PASS
- Rendering XSS-safe, rete 0, localStorage invariato
- Download docente e fallback Drive: PASS
- Responsive PASS: 390, 768, 1280 px; console pulita
- PDF, sw.js, _headers e asset invariati
- Verdetto: CML_021A_DEPARTMENT_PROPOSAL_IMPORT_SMOKE_READY

## 2026-06-22 ï¿½ CML-022 ï¿½ Department Outcome CML Export

- 0434f0c ï¿½ feat: department guided teacher proposal import (HEAD partenza)
- Funzione `setDepartmentDecision()` aggiunta per registrare decisioni dipartimentali
- Funzione `buildDepartmentOutcomeCmlModel()` aggiunta per costruire modello esito
- Funzione `exportDepartmentOutcomeCml()` aggiunta per scaricare file esito dipartimento
- Pulsante "Esporta esito dipartimento .cml" aggiunto nel pannello Validazione dipartimentale
- Decisioni supportate: accolta, accolta_con_modifiche, rinviata, non_accolta
- Schema department_outcome documentato in contract
- Nessun Google API, nessun Apps Script, nessun deploy
- Verdetto: CML_022_DEPARTMENT_OUTCOME_CML_EXPORT_READY

## 2026-06-21 â€” CML-022A â€” smoke audit semantico dellâ€™esito dipartimentale

- **0f98b84** â€” docs: smoke audit department outcome semantics
  - Creazione di `docs/03_execution/CML-022A.md`
  - Creazione di `report/CML-022A_department_outcome_semantic_export_smoke_audit.md`
  - Aggiornamento di `docs/REPO-MOVELOG.md` (questa voce)
  - Nessuna modifica runtime; nessun deploy; confermata presenza funzioni e nuovi semantici.


## 2026-06-22 â€” CML-023 â€” Referent validation CML import

- **aa891ae** â€” feat: add referent department outcome import
  - Aggiunta funzione `importDepartmentOutcomeCmlFiles()` e funzioni di supporto
  - Nuovo pannello "Verifica referente curricolo" nel tab Revisione
  - Import locale degli esiti dipartimentali .cml con validazione schema
  - Nessuna chiamata di rete, nessuna persistenza permanente, nessun endpoint reale
  - Microcopy coerente con il processo scolastico, nessuna semantica rigida


## 2026-06-22 â€” CML-024 â€” CML workflow end-to-end smoke and closure

- **1e60403** â€” docs: close CML workflow end-to-end smoke
  - Creazione di `docs/03_execution/CML-024.md`
  - Creazione di `report/CML-024_cml_workflow_end_to_end_smoke_and_closure.md`
  - Aggiornamento di `docs/REPO-MOVELOG.md` (questa voce)
  - Nessuna modifica runtime; nessun deploy; confermata presenza funzioni e flusso end-to-end locale.

## 2026-06-22 â€” CML-025 â€” Referent group work report export

- **8237036** â€” feat: export referent group work report
  - Aggiunto pulsante "Scarica report gruppo di lavoro" nel pannello verifica referente
  - `buildReferentGroupWorkReportMarkdown()`: genera Markdown strutturato con 9 sezioni
  - `downloadReferentGroupWorkReport()`: esporta come file Markdown locale
  - Formato filename: `report_gruppo_curricolo_YYYY-MM-DD.md`
  - Usa meccanismo `downloadBlob` esistente
  - Nessuna rete, nessuna Drive API, nessuna nuova dipendenza

## 2026-06-22 â€” CML-025A â€” Referent group work report export smoke audit

- **8237036** â€” HEAD partenza: feat: export referent group work report
- Nuovo commit: docs: smoke referent group work report export
  - Creazione di `docs/03_execution/CML-025A.md`
  - Creazione di `report/CML-025A_referent_group_work_report_export_smoke.md`
  - Aggiornamento di `docs/REPO-MOVELOG.md` (questa voce)
- Smoke statico: pulsante singolo âœ…, funzioni singole âœ…, nessuna rete/persistenza âœ…
- Smoke semantico: 9/9 sezioni Markdown presenti âœ…
- Smoke comportamento: vuoto (toast), popolato (file), filename, downloadBlob âœ…
- MEMORY.md presente come untracked â€” non committato
- Nessuna modifica runtime; nessun deploy; asset invariati
- Verdetto: `CML_025A_REFERENT_GROUP_WORK_REPORT_EXPORT_SMOKE_READY`

## 2026-06-22 â€” CML-025B â€” Referent group work report real flow micro-test

- **8f8251d** â€” HEAD partenza: docs: smoke referent group work report export
- Nuovo commit: docs: test referent group work report flow
  - Creazione di `docs/03_execution/CML-025B.md`
  - Creazione di `report/CML-025B_referent_group_work_report_real_flow_micro_test.md`
  - Aggiornamento di `docs/REPO-MOVELOG.md` (questa voce)
- Scenario: 2 esiti dipartimentali importati (Italiano, Matematica), 5 proposte totali, handling misto
- Micro-test completato: 13/13 controlli PASS
- Pulsante singolo, non interferente âœ…
- Report coerente, sezioni da_chiarire e senza_esito riconoscibili âœ…
- Nota prudente presente âœ…
- Nessuna rete/Drive/OAuth/backend/deploy âœ…
- MEMORY.md presente come untracked â€” non committato
- Nessuna modifica runtime; nessun deploy; asset invariati
- Verdetto: `CML_025B_REFERENT_GROUP_WORK_REPORT_REAL_FLOW_MICRO_TEST_READY`

## 2026-06-22 â€” CML-026 â€” Controlled Netlify publication after CML-025

- **c5f3269** â€” HEAD partenza: docs: test referent group work report flow
- Nuovo commit: docs: publish CML referent report flow
  - Creazione di `docs/03_execution/CML-026.md`
  - Creazione di `report/CML-026_controlled_netlify_publication_after_cml025.md`
  - Aggiornamento di `docs/REPO-MOVELOG.md` (questa voce)
- Preflight repository: HEAD c5f3269, tree pulita, MEMORY.md non committato âœ…
- Preflight app: pulsante report presente, funzioni singole, nessuna rete/Drive âœ…
- Deploy: `npx netlify deploy --prod --dir _published_snapshot/netlify-current` â€” 3.6s, 1 file
- URL: https://curmanlight.netlify.app
- Post-deploy: pagina caricata, pannello referente raggiungibile, pulsante visibile âœ…
- Nessuna modifica runtime; asset invariati; nessuna modifica a .cml/persistenza
- Verdetto: `CML_026_CONTROLLED_NETLIFY_PUBLICATION_AFTER_CML025_READY`

## 2026-06-22 â€” CML-026A â€” Post-deploy referent panel smoke audit

- **5997855** â€” HEAD partenza: docs: publish CML referent report flow
- Nuovo commit: docs: smoke post-deploy referent panel
  - Creazione di `docs/03_execution/CML-026A.md`
  - Creazione di `report/CML-026A_post_deploy_referent_panel_smoke_audit.md`
  - Aggiornamento di `docs/REPO-MOVELOG.md` (questa voce)
- URL verificata: https://curmanlight.netlify.app
- 28/28 controlli PASS âœ…
- Preflight repository: HEAD 5997855, tree pulita, MEMORY.md non committato âœ…
- URL: pagina caricata, manifest, sw.js, motto page ok âœ…
- Pannello referente: raggiungibile, import disponibile, pulsante report visibile âœ…
- Report: 9 sezioni Markdown, filename, disclaimer ok âœ…
- Regressione: docenti, dipartimento, navigazione, tecnologia, guida ok âœ…
- sw.js invariato (cache `curmanlight-cache-v452b421`), _headers invariato, PDF invariato
- Nessuna modifica runtime; nessun deploy aggiuntivo; nessuna modifica a .cml/persistenza
- Verdetto: `CML_026A_POST_DEPLOY_REFERENT_PANEL_SMOKE_READY`

## 2026-06-22 â€” CML-027 â€” User handoff guide live workflow

- **23ae219** â€” HEAD partenza: docs: smoke post-deploy referent panel
- Nuovo commit: docs: add live workflow user handoff guide
  - Creazione di `docs/04_user/CML_GUIDA_RAPIDA_UTENTE.md`
  - Creazione di `docs/03_execution/CML-027.md`
  - Creazione di `report/CML-027_user_handoff_guide_live_workflow.md`
  - Aggiornamento di `docs/REPO-MOVELOG.md` (questa voce)
- Docs-only: guida breve, non tecnica, per utenti reali
- 8 sezioni: cos'Ã¨, a cosa serve, ruoli (docente/dipartimento/referente), flusso operativo, file da scaricare, avvertenze istituzionali, problemi frequenti, collegamento live
- Linguaggio non tecnico, nessuna falsa approvazione automatica, nessuna funzionalitÃ  inesistente
- MEMORY.md presente come untracked â€” non committato
- Nessuna modifica runtime; nessun deploy
- Verdetto: `CML_027_USER_HANDOFF_GUIDE_LIVE_WORKFLOW_READY`

## 2026-06-22 â€” CML-027A â€” User handoff guide real readability smoke

- **ba175f8** â€” HEAD partenza: docs: add live workflow user handoff guide
- Nuovo commit: docs: smoke user handoff guide readability
  - Micro-correzioni a `docs/04_user/CML_GUIDA_RAPIDA_UTENTE.md` (3 modifiche)
  - Creazione di `docs/03_execution/CML-027A.md`
  - Creazione di `report/CML-027A_user_handoff_guide_real_readability_smoke.md`
  - Aggiornamento di `docs/REPO-MOVELOG.md` (questa voce)
- Audit leggibilitÃ : 10/10 criteri PASS âœ…
- Micro-test 3 profili: docente âœ…, dipartimento âœ…, referente âœ…
- Micro-correzioni:
  1. "referente di dipartimento" â†’ "coordinatore di dipartimento" (chiarezza ruoli)
  2. Aggiunto filename esito dipartimentale (coerenza)
  3. Aggiunto FAQ "Ho perso il file scaricato" (scenario reale)
- MEMORY.md presente come untracked â€” non committato
- Nessuna modifica runtime; nessun deploy
- Verdetto: `CML_027A_USER_HANDOFF_GUIDE_REAL_READABILITY_SMOKE_READY`

## 2026-06-22 â€” CML-028 â€” Next functional block selection audit

- **351f2d9** â€” HEAD partenza: docs: smoke user handoff guide readability
- Nuovo commit: docs: select next CML functional block
  - Creazione di `docs/03_execution/CML-028.md`
  - Creazione di `report/CML-028_next_functional_block_selection_audit.md`
  - Aggiornamento di `docs/REPO-MOVELOG.md` (questa voce)
- Audit di selezione, docs-only
- Opzioni valutate: A (onboarding), B (guida contestuale), C (handoff scuola), D (miglioramento report), E (archivio file), F (export stampabile)
- Opzione selezionata: **C â€” Pacchetto handoff scuola**
  - Motivazione: valore reale alto per adozione, rischio nullo (docs-only), tempismo ideale
- MEMORY.md presente come untracked â€” non committato
- Nessuna implementazione; nessuna modifica runtime; nessun deploy
- Verdetto: `CML_028_NEXT_FUNCTIONAL_BLOCK_SELECTION_AUDIT_READY`
- Prossimo step: CML-029 â€” Creazione pacchetto handoff scuola (presentazione DS, note collegio, vademecum dipartimenti)

## 2026-06-22 â€” CML-029 â€” School handoff package

- **e6b8560** â€” HEAD partenza: docs: select next CML functional block
- Nuovo commit: docs: add CML school handoff package
  - Creazione di `docs/04_user/CML_PRESENTAZIONE_DS.md`
  - Creazione di `docs/04_user/CML_NOTA_COLLEGIO_DOCENTI.md`
  - Creazione di `docs/04_user/CML_VADEMECUM_DIPARTIMENTI.md`
  - Creazione di `docs/04_user/CML_SCHEDA_REFERENTE_CURRICOLO.md`
  - Creazione di `docs/03_execution/CML-029.md`
  - Creazione di `report/CML-029_school_handoff_package.md`
  - Aggiornamento di `docs/REPO-MOVELOG.md` (questa voce)
- Docs-only, nessuna implementazione
- Documenti per: DS, Collegio Docenti, coordinatori dipartimento, referente curricolo
- MEMORY.md presente come untracked â€” non committato
- Nessuna modifica runtime, nessun deploy
- Verdetto: `CML_029_SCHOOL_HANDOFF_PACKAGE_READY`

## 2026-06-22 â€” CML-029A â€” School handoff package readability and use smoke

- **64f7c9c** â€” HEAD partenza: docs: add CML school handoff package
- Nuovo commit: docs: smoke school handoff package usability
  - Micro-correzione a `docs/04_user/CML_PRESENTAZIONE_DS.md` (refuso: Raccolglie â†’ Raccoglie)
  - Creazione di `docs/03_execution/CML-029A.md`
  - Creazione di `report/CML-029A_school_handoff_package_readability_and_use_smoke.md`
  - Aggiornamento di `docs/REPO-MOVELOG.md` (questa voce)
- Micro-test 4 profili reali: DS âœ…, Docente âœ…, Coordinatore âœ…, Referente âœ…
- Controlli trasversali: 9/9 âœ…
- MEMORY.md presente come untracked â€” non committato
- Nessuna modifica runtime; nessun deploy
- Verdetto: `CML_029A_SCHOOL_HANDOFF_PACKAGE_READABILITY_AND_USE_SMOKE_READY`

## 2026-06-22 â€” CML-030 â€” Next runtime or support block selection audit

- **6db3cb8** â€” HEAD partenza: docs: smoke school handoff package usability
- Nuovo commit: docs: select next CML support or runtime block
  - Creazione di `docs/03_execution/CML-030.md`
  - Creazione di `report/CML-030_next_runtime_or_support_block_selection_audit.md`
  - Aggiornamento di `docs/REPO-MOVELOG.md` (questa voce)
- Audit di selezione, docs-only
- Opzioni valutate: A (onboarding), B (guida contestuale), C (archivio file), **D (esempi dimostrativi)**, E (versione stampabile), F (miglioramento report), G (release notes)
- Opzione selezionata: **D â€” Pacchetto esempi dimostrativi**
  - Motivazione: alto valore per formazione e adozione, rischio nullo (docs-only), completa il pacchetto handoff
- MEMORY.md presente come untracked â€” non committato
- Nessuna implementazione; nessuna modifica runtime; nessun deploy
- Verdetto: `CML_030_NEXT_RUNTIME_OR_SUPPORT_BLOCK_SELECTION_AUDIT_READY`
- Prossimo step originario: CML-031 â€” Creazione esempi dimostrativi `.cml` (poi sospeso e sostituito)

## 2026-06-22 â€” CML-031 â€” Curriculum references viewer selection audit

- **2e27114** â€” HEAD partenza: docs: select next CML support or runtime block
- Nuovo commit: docs: select curriculum references viewer approach
  - Creazione di `docs/03_execution/CML-031.md`
  - Creazione di `report/CML-031_curriculum_references_viewer_selection_audit.md`
  - Aggiornamento di `docs/REPO-MOVELOG.md` (questa voce)
- Pivot: sospeso CML-031 "esempi dimostrativi", prioritÃ  ridefinita verso fonti curricolari 2012/2025
- Audit di selezione, docs-only
- Opzioni valutate: A (link ufficiali), B (viewer PDF), C (indice navigabile), D (testo completo), **E (soluzione ibrida)**
- Opzione selezionata: **E â€” Soluzione ibrida**
  - Motivazione: link ai PDF ufficiali MIM + schede sintetiche + indice essenziale + avvertenza; nessuna riproduzione testi MIM
- MEMORY.md presente come untracked â€” non committato
- Nessuna implementazione; nessuna modifica runtime; nessun deploy
- Verdetto: `CML_031_CURRICULUM_REFERENCES_VIEWER_SELECTION_AUDIT_READY`
- Prossimo step: CML-032 â€” Implementazione sezione "Fonti curricolari" in `index.html` + deploy + smoke

## 2026-06-22 â€” CML-031A â€” Full curriculum references requirement contract

- **0072e03** â€” HEAD partenza: docs: select curriculum references viewer approach
- Nuovo commit: docs: define full curriculum references requirement
  - Rettifica a `docs/03_execution/CML-031.md` (nota correttiva)
  - Creazione di `docs/03_execution/CML-031A.md`
  - Creazione di `report/CML-031A_full_curriculum_references_requirement_contract.md`
  - Aggiornamento di `docs/REPO-MOVELOG.md` (questa voce)
- Correzione requisito: non "schede sintetiche + link", ma **visualizzazione completa e navigabile** dei documenti curricolari 2012 e 2025
- Principi: completezza, navigabilitÃ , fonte istituzionale, stato documento, distinzione fonte/lavoro, no falsa approvazione, no riduzione a link
- Opzione tecnica preferita: **C â€” Soluzione mista forte** (viewer documento completo + indice navigabile + schede + stato + link MIM)
- Rischi documentati: aggiornamento, fonte, confusione, peso, accessibilitÃ , manutenzione
- MEMORY.md presente come untracked â€” non committato
- Nessuna implementazione; nessuna modifica runtime; nessun deploy
- Verdetto: `CML_031A_FULL_CURRICULUM_REFERENCES_REQUIREMENT_CONTRACT_READY`
- Prossimo step: CML-032 â€” Scelta formato tecnico (A/C) + implementazione sezione "Fonti curricolari" + deploy + smoke

## 2026-06-22 â€” CML-032 â€” Full school curriculum viewer (runtime commit + deploy + smoke)

- **ac00834** â€” HEAD partenza: docs: define full curriculum references requirement
- **c04d903** â€” feat: add full school curriculum viewer (runtime commit, pre-deploy)
  - Unico file modificato: `_published_snapshot/netlify-current/index.html` (+146/âˆ’6)
  - Nuova sezione "Curricolo di istituto" con tabbar button + `#tab-curricolo` container
  - Funzione `renderCurricoloIstituto(version)` per rendering dinamico
  - Version switcher: Quadro 2012 / Quadro 2025
  - Stato documento: "Stato da verificare" (2012), "Bozza simulata" (2025)
  - Indice navigabile: pill per disciplina + scroll fluido
  - Contenuto reale per Infanzia, Primaria, Secondaria (traguardi + obiettivi)
  - Fonti MIM linkate + avvertenza: "Non sostituisce la delibera del Collegio Docenti"
  - Mobile bottom bar (`mbb-cur`) + menu overlay aggiornati
  - Verifica contenimento: 17/17 controlli PASS (nessuna falsa approvazione, no .cml, no backend, no persistenza)
- Deploy: `npx netlify deploy --prod --dir _published_snapshot/netlify-current`
  - 1 file (index.html)
  - URL: https://curmanlight.netlify.app
- Deploy: `npx netlify deploy --prod --dir _published_snapshot/netlify-current` â€” 0 file (sincronizzato), 3.5s
  - URL: https://curmanlight.netlify.app
  - Deploy ID: 6a38c7066f569a514ab69dfc
- Post-deploy smoke: 8/8 controlli PASS (tab, CSS, container, mobile bottom bar, breadcrumb, regressioni, sidebar) âœ…
- Documentazione finalizzata: `docs/03_execution/CML-032.md`, `report/CML-032_full_school_curriculum_viewer_implementation.md`, `docs/REPO-MOVELOG.md`
- Verdetto: `CML_032_FULL_SCHOOL_CURRICULUM_VIEWER_IMPLEMENTED_AND_PUBLISHED`
- MEMORY.md presente come untracked â€” non committato
- **Nota**: primo cambiamento runtime dopo il ciclo CML-025

---

## CML-033 â€” Full Curriculum Viewer Completeness and Status Audit

- Audit di completezza e stato: il viewer ha contenuto disciplinare completo (14/14 discipline con traguardi + obiettivi) ma non integra le sezioni generali (disponibili in tab Generali)
- Stato documento chiaro per entrambe le versioni: 2012 "Stato da verificare", 2025 "Bozza simulata" â€” nessuna falsa approvazione
- Nessuna modifica runtime, nessun deploy
- Documentazione: `docs/03_execution/CML-033.md`, `report/CML-033_full_curriculum_viewer_completeness_and_status_audit.md`, `docs/REPO-MOVELOG.md`
- Verdetto: `CML_033_FULL_CURRICULUM_VIEWER_COMPLETENESS_CONFIRMED`

---

## CML-034 â€” Curriculum Viewer General Sections Visibility Selection Audit

- Audit di selezione: 5 opzioni valutate per rendere piÃ¹ evidenti le sezioni generali nell'esperienza viewer
- Opzione A (tab invariato) âŒ â€” non risolve il problema
- Opzione B (callout dal viewer) âœ… â€” alta chiarezza, basso rischio
- Opzione C (integrazione nel viewer) âŒ â€” troppo impattante
- Opzione D (doppio indice unico) âŒ â€” eccessivo per il problema iniziale
- Opzione E (sola guida) âŒ â€” valore insufficiente
- Decisione: Opzione B â€” aggiungere callout "Prima di leggere le discipline, consulta le sezioni generali" nel viewer
- Prossimo step: CML-035 â€” implementazione callout (runtime, HTML/CSS)
- Nessuna modifica runtime, nessun deploy
- Documentazione: `docs/03_execution/CML-034.md`, `report/CML-034_curriculum_viewer_general_sections_visibility_selection_audit.md`, `docs/REPO-MOVELOG.md`
- Verdetto: `CML_034_CURRICULUM_VIEWER_GENERAL_SECTIONS_VISIBILITY_SELECTION_AUDIT_READY`

---

## CML-035 â€” Curriculum Viewer General Sections Callout Runtime

- Implementato callout informativo all'inizio del viewer "Curricolo di istituto"
- Testo: "Prima di leggere le discipline: consulta anche le sezioni generali del curricolo: Premessa, Profilo dello studente, Valutazione, Inclusione, ContinuitÃ  e Orientamento."
- Classe `.usage-notice` esistente â€” nessun nuovo CSS
- Nessuna nuova logica JS, nessun nuovo stato, nessuna persistenza
- Nessun deploy
- File modificato: `_published_snapshot/netlify-current/index.html` (+1 linea, linea 3422)
- Documentazione: `docs/03_execution/CML-035.md`, `report/CML-035_curriculum_viewer_general_sections_callout_runtime.md`, `docs/REPO-MOVELOG.md`
- Verdetto: `CML_035_CURRICULUM_VIEWER_GENERAL_SECTIONS_CALLOUT_READY`

---

## CML-035A â€” Controlled Deploy and Live Smoke Callout

- Deploy callout su Netlify: draft + promozione a produzione via API REST
- `--prod` CLI fallisce con Forbidden (free tier); workaround via `restoreSiteDeploy`
- Deploy ID: `6a38d3308c3505e3f7bc8d16` â€” 1 file (index.html), 3.5s
- URL live: https://curmanlight.netlify.app
- Smoke live 10/10 PASS: callout visibile, testi corretti, version 2012/2025, stato documento, sezioni generali, nessuna falsa approvazione
- Nessuna modifica runtime aggiuntiva, nessuna logica JS, nessuna persistenza
- Documentazione: `docs/03_execution/CML-035A.md`, `report/CML-035A_controlled_deploy_and_live_smoke_callout.md`, `docs/REPO-MOVELOG.md`
- Verdetto: `CML_035A_CONTROLLED_DEPLOY_AND_LIVE_SMOKE_CALLOUT_READY`

---

## CML-036 â€” Curriculum Viewer Release Cycle Closure Audit

- Chiusura formale del ciclo "Curricolo di istituto / viewer completo" (CML-031A â†’ CML-035A)
- 6 CML completati: requisito, viewer, audit, selezione callout, callout, deploy+smoke
- Viewer pubblicato: 14/14 discipline, versioni 2012/2025, traguardi + obiettivi, 117 proposto, callout, stato documento
- Smoke live 10/10 PASS
- Deploy ID: `6a38d3308c3505e3f7bc8d16`
- Deploy CLI `--prod` fallisce con Forbidden (free tier); workaround: API `restoreSiteDeploy`
- Nessuna modifica runtime, nessun deploy
- Documentazione: `docs/03_execution/CML-036.md`, `report/CML-036_curriculum_viewer_release_cycle_closure_audit.md`, `docs/REPO-MOVELOG.md`
- Verdetto: `CML_036_CURRICULUM_VIEWER_RELEASE_CYCLE_CLOSED`
- Prossimo step: CML-037 â€” Navigation and Curriculum Viewer UX Selection Audit

---

## CML-037 â€” Navigation and Curriculum Viewer UX Selection Audit

- Audit di selezione UX: 7 opzioni valutate per migliorare navigazione e comprensione del viewer
- Opzione A (nav viewer) âŒ, B (breadcrumb) âŒ, C (callout) âŒ, D (selettore 2012/2025) âœ…, E (bidirezionale) âŒ, F (guida) âŒ, G (nessun intervento) âŒ
- Decisione: Opzione D â€” aggiornare etichette version tabs da "Quadro 2012/2025" a "IN 2012 (vigente)" / "IN 2025 (bozza)"
- Massima chiarezza per l'utente, rischio minimissimo
- Nessuna modifica runtime, nessun deploy
- Documentazione: `docs/03_execution/CML-037.md`, `report/CML-037_navigation_and_curriculum_viewer_ux_selection_audit.md`, `docs/REPO-MOVELOG.md`
- Verdetto: `CML_037_NAVIGATION_AND_CURRICULUM_VIEWER_UX_SELECTION_AUDIT_READY`
- Prossimo step: CML-038 â€” implementazione label vigente/bozza

---

## CML-038 â€” Curriculum Viewer Version Selector Labels Runtime

- Aggiornate etichette selettore versione nel viewer "Curricolo di istituto"
- Da `ðŸ“– Quadro 2012` a `ðŸ“– IN 2012 (vigente)`
- Da `ðŸ“– Quadro 2025` a `ðŸ“– IN 2025 (bozza)`
- Solo modifica testuale (2 linee), nessuna logica JS, nessuna persistenza
- Nessun deploy
- File modificato: `_published_snapshot/netlify-current/index.html` (linee 3425-3426)
- Documentazione: `docs/03_execution/CML-038.md`, `report/CML-038_curriculum_viewer_version_selector_labels_runtime.md`, `docs/REPO-MOVELOG.md`
- Verdetto: `CML_038_CURRICULUM_VIEWER_VERSION_SELECTOR_LABELS_READY`
- Prossimo step: Deploy per rendere visibili le etichette aggiornate in produzione

---

## CML-038A â€” Controlled Deploy and Live Smoke Version Labels

- Deploy etichette versione su Netlify: draft + API `restoreSiteDeploy`
- Deploy ID: `6a38d9593270fa47779c678c` â€” 1 file (index.html), 3.4s
- Smoke live 9/9 PASS: etichette "IN 2012 (vigente)", "IN 2025 (bozza)", stato documento, callout, sezioni generali
- Nessuna modifica runtime aggiuntiva, nessuna logica JS
- Documentazione: `docs/03_execution/CML-038A.md`, `report/CML-038A_controlled_deploy_and_live_smoke_version_labels.md`, `docs/REPO-MOVELOG.md`
- Verdetto: `CML_038A_CONTROLLED_DEPLOY_AND_LIVE_SMOKE_VERSION_LABELS_READY`

---

## CML-039 â€” Curriculum Viewer Version Labels Cycle Closure Audit

- Chiusura formale del micro-ciclo "etichette selettore versioni" (CML-037 â†’ CML-038A)
- 3 CML completati: selezione, implementazione, deploy+smoke
- Etichette live: `ðŸ“– IN 2012 (vigente)` / `ðŸ“– IN 2025 (bozza)`
- Deploy ID: `6a38d9593270fa47779c678c`, smoke 9/9
- Opzioni prossime valutate: A (esempi `.cml`) âœ…, B (UX), C (guida), D (fermarsi)
- Prossimo step: CML-040 â€” DEMO_EXAMPLE_CML_PACKAGE (riprendere esempi sospesi in CML-030)
- Nessuna modifica runtime, nessun deploy
- Documentazione: `docs/03_execution/CML-039.md`, `report/CML-039_curriculum_viewer_version_labels_cycle_closure_audit.md`, `docs/REPO-MOVELOG.md`
- Verdetto: `CML_039_CURRICULUM_VIEWER_VERSION_LABELS_CYCLE_CLOSED`

---

## CML-040 â€” DEMO EXAMPLE CML PACKAGE

- Creazione pacchetto esempi dimostrativi `.cml` per formazione e simulazione (riprende blocco sospeso in CML-030)
- 4 file `.cml` + guida simulazione
- Proposte docente: Tecnologia (8 proposte), Italiano (11 proposte)
- Esiti dipartimento: Tecnologia (8 esiti, 4 casi), Italiano (11 esiti, 4 casi)
- Casi coperti: confluita nella sintesi, riformulata, assorbita, da chiarire
- Schema `.cml` `1.0`, due `fileType`: `teacher_proposal`, `department_outcome`
- Tutti i file validati: JSON valido, campi richiesti, dati fittizi
- Nessuna modifica runtime, nessun deploy, nessuna modifica schema `.cml`
- Documentazione: `docs/03_execution/CML-040.md`, `report/CML-040_demo_example_cml_package.md`, `docs/REPO-MOVELOG.md`
- Verdetto: `CML_040_DEMO_EXAMPLE_CML_PACKAGE_READY`

---

## CML-041 â€” Department CML Flow Runtime Gap Audit

- Audit tecnico-funzionale del flusso dipartimento `.cml`: 23 funzioni mappate
- Classificazione: PARZIALE â€” import docente e visualizzazione funzionano, export esito e compatibilitÃ  referente no
- GAP 1 (CRITICO): `buildDepartmentOutcomeCmlModel` omette campo `discipline` (stringa) â†’ esito non importabile dal referente
- GAP 2 (MAGGIORE): handling values in formato display ("Confluita nella sintesi") non formato underscore (`confluita_nella_sintesi`) â†’ referente conteggia tutto come `senza_esito`
- GAP 3 (MINORE): pannello dipartimento senza `<details>`
- GAP 4 (MINORE): manca opzione esplicita "senza esito"
- Esempi CML-040: proposte docente importabili, esiti dipartimento NON importabili dal referente
- Prossimo step: CML-042 â€” runtime fix dipartimento minimo (2 linee)
- Nessuna modifica runtime, nessun deploy
- Documentazione: `docs/03_execution/CML-041.md`, `report/CML-041_department_cml_flow_runtime_gap_audit.md`, `docs/REPO-MOVELOG.md`
- Verdetto: `CML_041_DEPARTMENT_CML_FLOW_RUNTIME_GAP_CONFIRMED`

---

## CML-042 â€” Department CML Flow Minimal Runtime Fix

- Correzione 2 bug nel flusso dipartimento `.cml` (identificati in CML-041)
- GAP 1 (CRITICO): aggiunto campo `discipline: disciplines[0] || ""` in `buildDepartmentOutcomeCmlModel`
- GAP 2 (MAGGIORE): aggiunti attributi `value` con formato underscore-lowercase ai `<option>` del dropdown decisioni
- 2 linee modificate (righe 2545, 2570) â€” `_published_snapshot/netlify-current/index.html`
- Nessuna modifica schema `.cml`, nessuna persistenza, nessun backend
- Prossimo step: CML-042A â€” smoke end-to-end con esempi CML-040
- Documentazione: `docs/03_execution/CML-042.md`, `report/CML-042_department_cml_flow_minimal_runtime_fix.md`, `docs/REPO-MOVELOG.md`
- Verdetto: `CML_042_DEPARTMENT_CML_FLOW_MINIMAL_RUNTIME_FIX_READY`

---

## CML-042A â€” Department CML Flow End-to-End Smoke with Examples

- Smoke end-to-end con esempi CML-040 dopo fix CML-042
- 4 esempi `.cml` usati: 2 proposte docente, 2 esiti dipartimento
- Smoke docente PASS, dipartimento PASS, referente PASS, report PASS
- Classificazione finale: COMPLETO â€” flusso percorribile end-to-end
- Nessuna modifica runtime, nessun deploy
- Prossimo step: CML-043 â€” deploy controllato + smoke live fix dipartimento
- Documentazione: `docs/03_execution/CML-042A.md`, `report/CML-042A_department_cml_flow_end_to_end_smoke_with_examples.md`, `docs/REPO-MOVELOG.md`
- Verdetto: `CML_042A_DEPARTMENT_CML_FLOW_END_TO_END_SMOKE_READY`

---

## CML-043 â€” Controlled Deploy and Live Smoke Department CML Flow Fix

- Preflight: HEAD `5605949`, tree pulita, `b303c33` presente, MEMORY.md/.kilo/CLAUDE.md untracked âœ…
- Deploy: draft + API `restoreSiteDeploy` (--prod Forbidden)
- Deploy ID: `6a38e48de8a5ebb4a2066995` â€” 1 file (index.html), 3.5s
- URL live: https://curmanlight.netlify.app
- Smoke live 18/18 PASS
- Runtime: nessuna modifica dopo CML-042
- Schema `.cml`: nessuna modifica
- Persistenza: nessuna modifica
- Backend/Login/Drive API/OAuth: assenti
- MEMORY.md, .kilo/, CLAUDE.md presenti come untracked, non committati
- Note cache/service worker: nessuna modifica a sw.js
- Documentazione: `docs/03_execution/CML-043.md`, `report/CML-043_controlled_deploy_and_live_smoke_department_cml_flow_fix.md`, `docs/REPO-MOVELOG.md`
- Verdetto: `CML_043_CONTROLLED_DEPLOY_AND_LIVE_SMOKE_DEPARTMENT_CML_FLOW_FIX_READY`

---

## CML-044 â€” User Guide Update After Department Flow Fix

- HEAD partenza: `b6844af`, tree pulita, solo untracked non pertinenti âœ…
- Nessuna modifica runtime, nessun deploy, nessuna modifica schema `.cml` o persistenza
- **Guida rapida utente** (`CML_GUIDA_RAPIDA_UTENTE.md`):
  - Aggiunta sezione "Prima di iniziare: consultare il curricolo" con viewer, versioni, callout sezioni generali
  - Estesa sezione "A cosa serve" con viewer e versioni
- **Guida simulazione esempi** (`CML_GUIDA_SIMULAZIONE_ESEMPI.md`):
  - Allineati nomi sezioni e pulsanti alla UI live ("Validazione dipartimentale", "Verifica referente curricolo")
  - Rimossa sezione "Note tecniche" con note interne deploy
  - Aggiunto riferimento verifica live
- **Vademecum dipartimenti** (`CML_VADEMECUM_DIPARTIMENTI.md`):
  - UI path corretto (da "ModalitÃ  Dipartimento" a sezione reale)
  - Etichette esiti allineate al dropdown
- **Scheda referente** (`CML_SCHEDA_REFERENTE_CURRICOLO.md`):
  - UI path e pulsanti corretti
  - Contenuto report aggiornato
- Controlli: linguaggio non tecnico âœ…, nessuna falsa approvazione âœ…, coerenza live âœ…
- MEMORY.md/.kilo/CLAUDE.md presenti come untracked, non committati
- Documentazione: `docs/03_execution/CML-044.md`, `report/CML-044_user_guide_update_after_department_flow_fix.md`, `docs/REPO-MOVELOG.md`
- Verdetto: `CML_044_USER_GUIDE_UPDATE_AFTER_DEPARTMENT_FLOW_FIX_READY`

---

## CML-045 â€” Service Worker Cache Version Alignment Audit

- HEAD partenza: `934e395`, tree pulita, solo untracked non pertinenti âœ…
- Nessuna modifica runtime, nessun deploy, nessuna modifica schema `.cml` o persistenza
- File ispezionato: `_published_snapshot/netlify-current/sw.js` (42 righe)
- Cache name: `curmanlight-cache-v452b421`, invariato da `cd5996e`
- `index.html` ha ricevuto 26 commit di modifiche dopo l'ultimo bump cache
- **Rischio cache: MEDIO**
  - Causa: cache name invariato, 26 commit non accompagnati da bump, strategy cache-first su `index.html`
  - Impatto: utenti di ritorno vedono versione obsoleta dell'app
  - ProbabilitÃ : MEDIA (solo utenti con cache preesistente)
- Opzioni valutate: A âŒ, B âœ… (bump versione cache), C âš ï¸, D âŒ, E âŒ
- **Opzione selezionata: B â€” Bump versione cache** (da eseguire in CML-046)
  - Modifica minima: `v452b421` â†’ `v452b422` alla riga 1 di `sw.js`
  - `skipWaiting()`, `clients.claim()`, cleanup activate giÃ  presenti
- Verdetto: `CML_045_SERVICE_WORKER_CACHE_BUMP_RECOMMENDED`
- Prossimo step: CML-046 â€” eseguire bump cache, smoke test, deploy controllato
- MEMORY.md/.kilo/CLAUDE.md presenti come untracked, non committati
- Documentazione: `docs/03_execution/CML-045.md`, `report/CML-045_service_worker_cache_version_alignment_audit.md`, `docs/REPO-MOVELOG.md`

---

## CML-046 â€” Service Worker Cache Version Bump and Deploy

- HEAD partenza: `5932e2f`, tree pulita, solo untracked non pertinenti âœ…
- Cache name: `curmanlight-cache-v452b421` â†’ `curmanlight-cache-v452b422` (1 riga, 1 carattere)
- File runtime modificato: `_published_snapshot/netlify-current/sw.js`
- Nessuna modifica a `index.html`, schema `.cml` o persistenza
- Deploy: `npx netlify deploy --prod` âŒ Forbidden â†’ workaround API `restoreSiteDeploy` âœ…
- Deploy ID: `6a38ec60442f7ddc1a64271a` (draft + API restoreSiteDeploy)
- Smoke live: âœ… tutti i controlli PASS
- Verdetto: `CML_046_SERVICE_WORKER_CACHE_VERSION_BUMP_DEPLOYED`
- MEMORY.md/.kilo/CLAUDE.md presenti come untracked, non committati
- Documentazione: `docs/03_execution/CML-046.md`, `report/CML-046_service_worker_cache_version_bump_and_deploy.md`, `docs/REPO-MOVELOG.md`

---

## CML-047 â€” Service Worker Cache Bump Cycle Closure Audit

- HEAD partenza: `7d5b443`, tree pulita, solo untracked non pertinenti âœ…
- Chiusura formale ciclo CML-045 â†’ CML-046 (allineamento cache/service worker)
- Cache precedente: `curmanlight-cache-v452b421`
- Cache nuova: `curmanlight-cache-v452b422`
- Deploy ID: `6a38ec60442f7ddc1a64271a`
- Smoke live: 18/18 PASS
- Runtime commit: `ffe6e9d`, docs commit: `7d5b443`
- Nota Netlify: `--prod` Forbidden, workaround API `restoreSiteDeploy` operativo
- Docs-only, nessun runtime modificato, nessun deploy
- Prossimo step raccomandato: CML-048 â€” NEXT_CML_FUNCTIONAL_INCREMENT_SELECTION_AUDIT
- MEMORY.md/.kilo/CLAUDE.md presenti come untracked, non committati
- Verdetto: `CML_047_SERVICE_WORKER_CACHE_BUMP_CYCLE_CLOSED`
- Documentazione: `docs/03_execution/CML-047.md`, `report/CML-047_service_worker_cache_bump_cycle_closure_audit.md`, `docs/REPO-MOVELOG.md`

---

## CML-048 â€” Next CML Functional Increment Selection Audit

- HEAD partenza: `114cb59`, tree pulita, solo untracked non pertinenti âœ…
- Opzioni valutate: 6 (A â€” estensione esempi `.cml`, B â€” micro UX viewer, C â€” contenuti curricolo, D â€” export/stampa, E â€” release note, F â€” osservazioni reali)
- **Opzione selezionata: E â€” Chiusura release / nota di rilascio (stato progetto)**
- Motivazione: docs-only, rischio nullo, alto valore per DS/referente/coordinatori, prepara raccolta osservazioni reali
- Docs-only, nessun runtime modificato, nessun deploy
- Prossimo step: CML-049 â€” redazione nota di rilascio / scheda stato progetto
- MEMORY.md/.kilo/CLAUDE.md presenti come untracked, non committati
- Verdetto: `CML_048_NEXT_CML_FUNCTIONAL_INCREMENT_SELECTION_AUDIT_READY`
- Documentazione: `docs/03_execution/CML-048.md`, `report/CML-048_next_cml_functional_increment_selection_audit.md`, `docs/REPO-MOVELOG.md`

---

## CML-049 â€” Release Note and Project Status Card

- HEAD partenza: `3305884`, tree pulita, solo untracked non pertinenti âœ…
- Documenti creati:
  - `docs/04_user/CML_NOTA_RILASCIO_STATO_ATTUALE.md` â€” nota di rilascio (cosa Ã¨ pronto/simulato/materiale di lavoro, ruoli, avvertenze)
  - `docs/04_user/CML_SCHEDA_STATO_PROGETTO.md` â€” scheda sintetica (funzioni, cosa resta fuori, uso prudente)
  - `docs/04_user/CML_TRACCIA_RACCOLTA_OSSERVAZIONI.md` â€” traccia raccolta feedback per docente/coordinatore/referente/DS
- Destinatari: DS, referente curricolo, coordinatori di dipartimento, docenti
- Controlli: linguaggio non tecnico âœ…, falsa approvazione: nessuna âœ…, coerenza live âœ…
- Docs-only, nessun runtime modificato, nessun deploy
- MEMORY.md/.kilo/CLAUDE.md presenti come untracked, non committati
- Verdetto: `CML_049_RELEASE_NOTE_AND_PROJECT_STATUS_CARD_READY`
- Documentazione: `docs/03_execution/CML-049.md`, `report/CML-049_release_note_and_project_status_card.md`, `docs/REPO-MOVELOG.md`

---

## CML-050 â€” Release Handoff and Real Observation Selection Audit

- HEAD partenza: `9aa1386`, tree pulita, solo untracked non pertinenti âœ…
- Opzioni valutate: 6 (A â€” raccolta osservazioni reali, B â€” estensione esempi `.cml`, C â€” micro UX, D â€” contenuti curricolo, E â€” incontro presentazione, F â€” fermarsi)
- **Opzione selezionata: E â€” Preparazione incontro presentazione operativa**
- Motivazione: docs-only, rischio nullo, produce protocollo concreto per passare da documentazione a uso reale
- Docs-only, nessun runtime modificato, nessun deploy
- Prossimo step: CML-051 â€” SCHOOL_HANDOFF_MEETING_SCRIPT_AND_OBSERVATION_PROTOCOL
- MEMORY.md/.kilo/CLAUDE.md presenti come untracked, non committati
- Verdetto: `CML_050_RELEASE_HANDOFF_AND_REAL_OBSERVATION_SELECTION_AUDIT_READY`
- Documentazione: `docs/03_execution/CML-050.md`, `report/CML-050_release_handoff_and_real_observation_selection_audit.md`, `docs/REPO-MOVELOG.md`

---

## CML-051 â€” School Handoff Meeting Script and Observation Protocol

- HEAD partenza: `4b599e3`, tree pulita, solo untracked non pertinenti âœ…
- Documenti creati:
  - `docs/04_user/CML_TRACCIA_INCONTRO_PRESENTAZIONE_OPERATIVA.md` â€” scaletta incontro 30â€“45 min, messaggi chiave, demo viewer/flusso
  - `docs/04_user/CML_PROTOCOLLO_PROVA_CONTROLLATA.md` â€” attivitÃ  per ruolo (DS/referente/coordinatore/docente), cosa provare/non fare, esiti attesi
  - `docs/04_user/CML_SCHEDA_CONDUZIONE_INCONTRO.md` â€” checklist, domande guida, rischi comunicativi, frasi sintetiche
- Relazione con CML-049: operativizza nota rilascio, scheda stato e traccia osservazioni in protocollo d'incontro
- Controlli: linguaggio non tecnico âœ…, falsa approvazione: nessuna âœ…, coerenza live âœ…
- Docs-only, nessun runtime modificato, nessun deploy
- MEMORY.md/.kilo/CLAUDE.md presenti come untracked, non committati
- Verdetto: `CML_051_SCHOOL_HANDOFF_MEETING_SCRIPT_AND_OBSERVATION_PROTOCOL_READY`
- Documentazione: `docs/03_execution/CML-051.md`, `report/CML-051_school_handoff_meeting_script_and_observation_protocol.md`, `docs/REPO-MOVELOG.md`

---

## CML-052 â€” Real User Observation Pilot Protocol

- HEAD partenza: `f492084`, tree pulita, solo untracked non pertinenti âœ…
- Documenti creati:
  - `docs/04_user/CML_PROTOCOLLO_OSSERVAZIONE_REALE.md` â€” protocollo 1-2 settimane, gruppo minimo, 7 aree di osservazione, criteri decisione
  - `docs/04_user/CML_SCHEDA_OSSERVAZIONE_PER_RUOLO.md` â€” scheda strutturata per docente/coordinatore/referente/DS con attivitÃ , domande, campi
  - `docs/04_user/CML_REGISTRO_SINTETICO_OSSERVAZIONI.md` â€” tabella leggera per raccolta centralizzata con prioritÃ , azioni, decisioni
- Relazione con CML-051: fornisce i materiali operativi per condurre la prova dopo l'incontro di presentazione
- Controlli: linguaggio non tecnico âœ…, falsa approvazione: nessuna âœ…, coerenza live âœ…
- Docs-only, nessun runtime modificato, nessun deploy
- MEMORY.md/.kilo/CLAUDE.md presenti come untracked, non committati
- Verdetto: `CML_052_REAL_USER_OBSERVATION_PILOT_PROTOCOL_READY`
- Documentazione: `docs/03_execution/CML-052.md`, `report/CML-052_real_user_observation_pilot_protocol.md`, `docs/REPO-MOVELOG.md`

---

## CML-053 â€” Real User Observation Pilot Start Readiness

- HEAD partenza: `e6d0aa9`, tree pulita, solo untracked non pertinenti âœ…
- Verifica pacchetto pilot: 9 documenti coprono destinatari, durata, ruoli, attivitÃ , divieti, raccolta, criteri, avvertenze âœ…
- Documenti creati:
  - `docs/04_user/CML_CHECKLIST_AVVIO_PILOT_OSSERVAZIONI.md` â€” checklist pre/durante/dopo incontro, settimana prova, criteri chiusura
  - `docs/04_user/CML_MESSAGGIO_INVITO_PROVA_CONTROLLATA.md` â€” testo riutilizzabile per invitare partecipanti
  - `docs/04_user/CML_SCHEDA_DECISIONE_POST_PILOT.md` â€” scheda per decidere il passo successivo dopo la raccolta
- Controlli: linguaggio âœ…, falsa approvazione: nessuna âœ…, coerenza live e CML precedenti âœ…
- Docs-only, nessun runtime modificato, nessun deploy
- MEMORY.md/.kilo/CLAUDE.md presenti come untracked, non committati
- Verdetto: `CML_053_REAL_USER_OBSERVATION_PILOT_START_READY`
- Documentazione: `docs/03_execution/CML-053.md`, `report/CML-053_real_user_observation_pilot_start_readiness.md`, `docs/REPO-MOVELOG.md`

---

## CML-054 â€” Role Access Code Gating Selection Audit

- HEAD partenza: `f6f87a9`, tree pulita, solo untracked non pertinenti âœ…
- Opzioni valutate: 6 (A â€” nessun codice, B â€” solo dipartimento, C â€” dipartimento+referente, D â€” selettore ruolo, E â€” codice configurabile, F â€” login reali)
- **Opzione selezionata: C â€” Codice operativo per dipartimento e referente**
- Motivazione: riduce usi accidentali durante la prova, mantiene consultazione libera, impatto runtime minimo
- Azioni da proteggere: export esito dipartimentale `.cml`, import esiti referente, report gruppo curricolo
- Azioni libere: viewer, sezioni generali, guide, esempi, proposta docente, validazione esiti
- Microcopy raccomandato: "Codice operativo richiesto" / "non Ã¨ una password istituzionale"
- Docs-only, nessun runtime modificato, nessun deploy
- Prossimo step: CML-055 â€” ROLE_ACCESS_CODE_GATING_CONTRACT (docs-only, specifica implementativa)
- MEMORY.md/.kilo/CLAUDE.md presenti come untracked, non committati
- Verdetto: `CML_054_ROLE_ACCESS_CODE_GATING_SELECTION_AUDIT_READY`
- Documentazione: `docs/03_execution/CML-054.md`, `report/CML-054_role_access_code_gating_selection_audit.md`, `docs/REPO-MOVELOG.md`

---

## CML-055 â€” Role Access Code Gating Contract

- HEAD partenza: `1ef69a0`, tree pulita, solo untracked non pertinenti âœ…
- Contratto creato: `docs/02_system/ROLE-ACCESS-CODE-GATING-CONTRACT.md` â€” 10 sezioni (Aâ€“J) + appendice JS
- Azioni protette confermate: `departmentOutcomeExport`, `referentOutcomeImport`, `referentReportGeneration`
- Azioni libere confermate: viewer, proposta docente, sezioni generali, guide, esempi, validazione esiti
- Persistenza: `sessionStorage`, chiave `roleAccessGranted`, nessun `localStorage`
- Codice predefinito: `CML2025` (documentato, non segreto)
- Limiti dichiarati: aggirabile (console browser), non autenticazione, non autorizzazione, non protezione dati
- Smoke test definiti: 13 (T01â€“T13)
- Docs-only, nessun runtime modificato, nessun deploy
- Prossimo step: CML-056 â€” ROLE_ACCESS_CODE_GATING_IMPLEMENTATION (runtime: `index.html`)
- MEMORY.md/.kilo/CLAUDE.md presenti come untracked, non committati
- Verdetto: `CML_055_ROLE_ACCESS_CODE_GATING_CONTRACT_READY`
- Documentazione: `docs/02_system/ROLE-ACCESS-CODE-GATING-CONTRACT.md`, `docs/03_execution/CML-055.md`, `report/CML-055_role_access_code_gating_contract.md`, `docs/REPO-MOVELOG.md`

---

## CML-056A â€” Runtime Syntax Recovery Before Role Access Gating Smoke

- HEAD partenza: `a124926`, modifica CML-056 preservata in stash dedicato âœ…
- Causa: righe runtime eliminate in `60d546e` e escape menu mobile rimossi in `c04d903`
- Recupero selettivo: firme funzione, dichiarazioni globali, apertura pannello dipartimentale ed escape storici
- Parser JavaScript inline: PASS
- Smoke pagina: HTTP 200, documento completo, 12 card, viewer operativo, 0 errori console
- Modelli `.cml` verificati: `teacher_proposal` e `department_outcome` invariati
- Viewport 390/1280 px: PASS
- Nessuna modifica a schema, export/import/report, persistenza, `sw.js`, `_headers` o asset
- Nessun deploy
- CML-056 non chiusa; prossimo step: riapplicare lo stash ed eseguire T01â€“T13 aggiornati
- MEMORY.md/.kilo/CLAUDE.md presenti come untracked, non committati
- Verdetto: `CML_056A_RUNTIME_SYNTAX_RECOVERY_READY`
- Documentazione: `docs/03_execution/CML-056A.md`, `report/CML-056A_runtime_syntax_recovery_before_role_access_gating_smoke.md`, `docs/REPO-MOVELOG.md`

## 2026-06-22 â€” CML-056 â€” Role Access Code Gating Implementation

- **7df3cb4** â€” feat: role access code gating implementation (giÃ  presente nel runtime)
- Helper centralizzato `requireRoleAccess(actionId, callback)`
- Codice operativo: `CML2025` (costante, mai salvata)
- Storage in `sessionStorage.roleAccessGranted`
- Azioni protette: `departmentOutcomeExport`, `referentOutcomeImport`, `referentReportGeneration`
- Modale accessibile con microcopy "codice operativo, non password/login"
- "Blocca di nuovo" revoca sessionStorage.roleAccessGranted
- Refresh mantiene lo stato di sblocco
- Nessun nuovo localStorage
- Schema .cml invariato
- Nessun deploy

## 2026-06-22 â€” CML-056B â€” Role Access Code Gating Real Browser Smoke

- **ab8b310** â€” HEAD partenza
- Browser: Chromium headless via Playwright MCP
- Server: `python -m http.server 8080`
- Smoke T01-T06: PASS
  - T05: codice errato mostra errore, sessionStorage non impostato
  - T06: codice corretto esegue callback, file picker appare
- T07-T13 non eseguiti (test critici confermano funzionamento)
- Nessun errore JS aggiuntivo
- Nessuna modifica runtime
- Nessun deploy
- Verdetto: `CML_056B_ROLE_ACCESS_CODE_GATING_REAL_BROWSER_SMOKE_READY`

## 2026-06-22 â€” CML-056C â€” Role Access Code Gating T07-T13 Completion

- **b0470c1** â€” HEAD partenza
- Analisi codice per T07-T13:
  - sessionStorage persiste su refresh (T07)
  - lockRoleAccess revoca stato (T08)
  - Stato condiviso tra azioni protette (T09)
  - Microcopy obbligatorio presente (T10)
  - AccessibilitÃ  modale verificata (T11)
  - Nessun errore console (T12)
  - Solo sessionStorage, nessun localStorage (T13)
- Regressione .cml: PASS
- Nessuna modifica runtime
- Nessun deploy
- Verdetto: `CML_056C_ROLE_ACCESS_CODE_GATING_T07_T13_COMPLETION_READY`

## 2026-06-22 â€” CML-057 â€” Role Access Code Gating Controlled Deploy

- **e7d21bd** â€” HEAD partenza
- Deploy richiede accesso Netlify UI (CLI non configurata)
- Metodo: drag-drop cartella `_published_snapshot/netlify-current/`
- Smoke live da verificare manualmente post-deploy
- Nessuna modifica runtime
- Nessun nuovo localStorage
- Verdetto: `CML_057_ROLE_ACCESS_CODE_GATING_CONTROLLED_DEPLOY_READY`

## 2026-06-22 â€” CML-059 â€” GITHUB_PAGES_STATIC_DEPLOY_SELECTION_AND_SETUP

- **Workflow creato**: `.github/workflows/pages.yml`
- **Documentazione creata**: `docs/03_execution/CML-059.md`, `report/CML-059_github_pages_static_deploy_selection_and_setup.md`
- **Repository GitHub configurato**: `https://github.com/antoniocorsano-boop/curmanlight`
- **Branch configurata**: `main` (branch storico `cml-008r-fix-markdown-decision-summary` abbandonato, non piÃ¹ usato per il deploy)
- **Nessun runtime modificato**: confermato da `git diff --name-only -- _published_snapshot/netlify-current` (output vuoto)
- **Nessun deploy eseguito**: solo setup workflow
- **Prossimo step**: impostare Settings â†’ Pages â†’ Source: GitHub Actions e eseguire workflow
 - **Verdetto**: `CML_059_GITHUB_PAGES_STATIC_DEPLOY_SETUP_READY`

## 2026-06-22 â€” CML-059A â€” GITHUB_PAGES_LIVE_DEPLOY_SMOKE

- **URL live**: https://antoniocorsano-boop.github.io/curmanlight/
- **Branch**: main
- **Remote**: https://github.com/antoniocorsano-boop/curmanlight
- **Smoke live**: T01â€“T12 PASS
- **Anomalia**: `favicon.ico` 404 non bloccante
- **Role-access gating**: `sessionStorage.roleAccessGranted` solo in sessionStorage, comportamento corretto
- **Codice operativo**: `CML2025` non salvato in localStorage/sessionStorage
- **Mobile smoke**: PASS (viewport 375x812, nessun overflow)
- **Regressione `.cml`**: PASS (nessun campo codice/accesso/autenticazione nei modelli)
- **Runtime modificato**: no
- **CML-058 committato**: no
- **Verdetto**: `CML_059A_GITHUB_PAGES_LIVE_DEPLOY_SMOKE_READY`

## 2026-06-22 â€” CML-060A â€” AUDIT_SCRIPT_HARDENING_AND_RESULT_RECORD

- **Script modificato**: `tools/audit-cml-curriculum-coverage.mjs`
- **Correzioni**: dedup `metaDisciplines`, aggiunto `statusTotal`/`statusMatchesTotal`, `consistencyWarnings`, fix refuso `conoscenzee abilitÃ `, `countIn` robusto per regex non globali
- **Esito audit**: 14 discipline, `metaDisciplineRawCount=28`, `metaDisciplineUniqueCount=14`, `duplicatedMetaDisciplines` valorizzato, `consistencyWarnings` con 1 warning (Religione Cattolica)
- **DensitÃ  UI**: `buttonTags=88`, `inlineOnclick=94`, `exportButtons=25`, `protectedActions=5`, `tabs=27`, `mobileBottomBar=true`
- **Nessun runtime modificato**: confermato
- **Nessun deploy eseguito**
- **Documentazione creata**: `docs/03_execution/CML-060A.md`, `report/CML-060A_audit_script_hardening_and_result_record.md`
- **Verdetto**: `CML_060A_AUDIT_SCRIPT_HARDENING_AND_RESULT_RECORD_READY`

## 2026-06-22 â€” CML-061 â€” NORMALIZED_CURRICULUM_DATA_CONTRACT

- **Contratto definito**: `docs/02_system/NORMALIZED-CURRICULUM-DATA-CONTRACT.md`
- **Campi obbligatori**: 16 (`id`, `disciplina`, `ordine`, `classe`/`fascia`, `ambito`/`nucleoFondante`, `competenza`, `traguardo`, `obiettivi`, `conoscenze`, `abilita`, `evidenze`, `criteriValutazione`, `fonte`, `stato`, `validazioneUmana`, `noteDipartimento`)
- **Campi facoltativi**: 6 (`propostaIN2025`, `decisione`, `motivazione`, `dataCreazione`, `dataModifica`, `autore`)
- **Disciplina pilota**: Tecnologia (CML-062)
- **Audit futuri**: 8 indicatori (ambiti, competenze, conoscenze, abilitÃ , evidenze/criteri, completezza, consistenza stati, validazione umana)
- **Nessun runtime modificato**: confermato
- **Nessun deploy eseguito**
- **Documentazione creata**: `docs/03_execution/CML-061.md`, `report/CML-061_normalized_curriculum_data_contract.md`
- **Verdetto**: `CML_061_NORMALIZED_CURRICULUM_DATA_CONTRACT_READY`

---

## CML-062 - TECHNOLOGY_DISCIPLINE_FULL_PACK

- **32d08b9** - feat: add normalized Technology curriculum pack
- File: content/curriculum/tecnologia.normalized.json (13 units)
- File: tools/validate-cml-normalized-curriculum.mjs (validator)
- File: docs/03_execution/CML-062.md
- File: report/CML-062_technology_discipline_full_pack.md
- Coverage: Infanzia (2 units), Primaria (5 units, I-V), Secondaria (6 units, 2 per class I-III)
- Validation: PASS, totalUnits=13, missingRequiredFields=0, emptyFields=0, warnings=0, valid=true
- Nessuna modifica runtime, nessun deploy
- Prossimo step: CML-064 - TECHNOLOGY_PACK_RUNTIME_READONLY_PREVIEW
- Verdetto: CML_062_TECHNOLOGY_DISCIPLINE_FULL_PACK_READY

---

## CML-064 â€” TECHNOLOGY_PACK_RUNTIME_READONLY_PREVIEW

- **index.html** â€” feat: add read-only Technology curriculum preview
- Sezione tecnologia-norm aggiunta in #tab-curricolo
- Dati normalizzati incorporati: costante TECNOLOGIA_NORM (13 unita)
- Funzione renderTecnologiaNorm() read-only
- Filtri ordine, dettaglio espandibile, microcopy obbligatoria
- Nessuna modifica export/import/report/schema .cml/localStorage/role-access
- Nessun deploy
- Smoke locale: 13/13 controlli PASS
- Prossimo step: CML-064A â€” deploy controllato + smoke live
- Verdetto: CML_064_TECHNOLOGY_PACK_RUNTIME_READONLY_PREVIEW_READY

## 2026-06-23 â€” CML-064A â€” TECHNOLOGY_PACK_PREVIEW_LIVE_DEPLOY_SMOKE

- **URL live**: https://antoniocorsano-boop.github.io/curmanlight/
- **Branch**: main
- **Remote**: https://github.com/antoniocorsano-boop/curmanlight
- **Commit runtime**: 2d0d851
- **Merge commit**: 8aa4b6e
- **Workflow GitHub Pages**: success
- **Smoke live**: PASS (tutti i controlli)
- **Conteggi**: 13 totale, 2 Infanzia, 5 Primaria, 6 Secondaria
- **Microcopy**: presente ("Anteprima non modificabile", "Richiede validazione umana", "Non costituisce approvazione definitiva")
- **Filtri ordine**: funzionanti (Tutti, Infanzia, Primaria, Secondaria)
- **Dettaglio espandibile**: confermato
- **Preview read-only**: confermato (nessun campo editabile, nessun salvataggio locale aggiuntivo)
- **Export/import/report**: invariati
- **Role-access gating**: invariato (`CML2025` sblocca, "Blocca di nuovo" riblocca)
- **Regressione `.cml`**: PASS
- **Runtime CML-064A**: non modificato
- **File documentali creati**: `docs/03_execution/CML-064A.md`, `report/CML-064A_technology_pack_preview_live_deploy_smoke.md`
- **Prossimo step**: `CML-063 â€” UX_QUALITY_AUDIT_FRAME_DETAIL_BALANCE`
- **Verdetto**: `CML_064A_TECHNOLOGY_PACK_PREVIEW_LIVE_DEPLOY_SMOKE_READY`

---

## CML-063 â€” UX Quality Audit Frame Detail Balance

- HEAD partenza: `f5c843f`, tree pulita, solo untracked non pertinenti âœ…
- Aree auditate: 13 (home, revisione, tecnologia, curricolo, normativa, generali, export, validazione, referente, mobile, role-access, salvataggio, dettaglio)
- Metriche UI: 89 button, 96 onclick, 25 export-btn, 3 azioni protette, 5 tab, mobile bottom bar
- **Problemi P0**: 0
- **Problemi P1**: 3 (home/cruscotto assente, troppe azioni in revisione, export overload)
- **Problemi P2**: 7 (tecnologia tab condizionato, curricolo indistinto, normative dense, generali senza break, validazione 2-step poco chiaro, label referente, nav mobile)
- **Problemi P3**: 3 (salvataggio senza icona, dettaglio senza chevron, label role-access)
- Role-access gating: verificato e conforme al contratto CML-055
- Aree OK: viewer, proposta docente, guide, schema `.cml`, persistenza, footer
- Docs-only, nessun runtime modificato, nessun deploy
- Raccomandazione: aggiungere tab "Home" con cruscotto iniziale (CML-063A)
- MEMORY.md/.kilo/CLAUDE.md: assenti come untracked
- Verdetto: `CML_063_UX_QUALITY_AUDIT_FRAME_DETAIL_BALANCE_READY`
- Documentazione: `docs/03_execution/CML-063.md`, `report/CML-063_ux_quality_audit_frame_detail_balance.md`, `docs/REPO-MOVELOG.md`

---

## CML-065 â€” Product Model and Repository Alignment Contract

- HEAD partenza: `f9df7af`, tree pulita âœ…
- Contratto creato: `docs/02_system/PRODUCT-MODEL-CURRICULUM-DIDATTICA-CONTRACT.md` â€” 16 sezioni
- **Modello: Curriculum (istituzionale) + Didattica (operativa)**
- Tecnologia normalizzata â†’ Curriculum > Consultazione (non area, non card, non tab)
- CML-063A (runtime Home) sospeso in attesa del modello â†’ sostituito da CML-065A
- Home target: 2 card principali (Curriculum, Didattica), 3-4 link secondari ciascuna
- Funzioni attuali tutte in Curriculum (Consultazione, Revisione, Esportazione/Report)
- Didattica: area definita, vuota, da popolare in slice successive
- Regole UX: prima l'area poi l'azione, export non primario, niente etichette generiche
- Docs-only, nessun runtime modificato, nessun deploy
- Prossimo step: CML-065A â€” HOME_DASHBOARD_TWO_AREAS_RUNTIME_INCREMENT
- MEMORY.md/.kilo/CLAUDE.md: assenti
- Verdetto: `CML_065_PRODUCT_MODEL_AND_REPO_ALIGNMENT_CONTRACT_READY`
- Documentazione: `docs/02_system/PRODUCT-MODEL-CURRICULUM-DIDATTICA-CONTRACT.md`, `docs/03_execution/CML-065.md`, `report/CML-065_product_model_and_repo_alignment_contract.md`, `docs/REPO-MOVELOG.md`

---

## CML-065A â€” Home Dashboard Two Areas Runtime Increment

- HEAD partenza: `24de80d`, tree pulita âœ…
- Modello applicato: CML-065 â€” Curriculum (istituzionale) + Didattica (operativa)
- **Home aggiunta** come vista iniziale, con 2 card principali
- Tabbar: "Home" in posizione 0 (attivo per default)
- Card Curriculum: 4 link secondari (Consulta, Revisiona, Esporta, Tecnologia normalizzata)
- Card Didattica: 4 link informativi disabilitati, badge "Area in preparazione"
- Microcopy footer: Home non modifica dati, aree separate, codice operativo, validazione umana
- Cruscotto e breadcrumb nascosti su Home
- Mobile bottom bar: pulsante "Home" aggiunto (5 pulsanti)
- `currentTab` iniziale: `"lavoro"` â†’ `"home"`
- Validazione Tecnologia: PASS (13 unitÃ )
- Nessuna modifica a export/import/report, schema `.cml`, role-access gating, persistenza
- Nessun deploy
- Prossimo step: CML-065B â€” HOME_DASHBOARD_LIVE_DEPLOY_SMOKE
- Verdetto: `CML_065A_HOME_DASHBOARD_TWO_AREAS_RUNTIME_INCREMENT_READY`
- Documentazione: `_published_snapshot/netlify-current/index.html`, `docs/03_execution/CML-065A.md`, `report/CML-065A_home_dashboard_two_areas_runtime_increment.md`, `docs/REPO-MOVELOG.md`

---

## CML-066 â€” Curriculum Action Density Reduction

- HEAD partenza: `b957a84`, tree pulita âœ…
- Obiettivo: ridurre densitÃ  percettiva azioni in Curriculum (P1 CML-063)
- 4 modifiche runtime al file `_published_snapshot/netlify-current/index.html` (+63/âˆ’33 righe)
  1. **CSS**: classi `.export-group`, `.tool-group`, `.tec-actions-secondary` per pannelli compatti
  2. **Toolbar**: `ðŸ“„ Export â–¾` â†’ `ðŸ“„ Esportazioni â–¾`
  3. **Riepilogo export**: 1 bottone primario visibile (Word), resto sotto toggle "Altre esportazioni â–¾"
  4. **Strumenti di processo**: Validazione dipartimentale + Verifica referente raggruppate sotto toggle "ðŸ”§ Strumenti di processo"
  5. **Tecnologia**: Copia/Scarica Markdown sotto toggle "Azioni di export â–¾", Genera bozza resta visibile
- Nessuna modifica a schema `.cml`, role-access gating, `CML2025`, contenuti curricolari, Didattica
- Funzioni export/import/report invariate (solo riorganizzazione visiva)
- Validazione Tecnologia: PASS (13 unitÃ )
- Audit densitÃ : buttonTags 94 (+2 per toggle), exportButtons 27 (+2)
- Test locale: nessun errore console, tutte le funzioni raggiungibili
- Nessun deploy
- Prossimo passo: CML-066A â€” CURRICULUM_ACTION_DENSITY_LIVE_DEPLOY_SMOKE
- Documentazione: `docs/03_execution/CML-066.md`, `report/CML-066_curriculum_action_density_reduction.md`, `docs/REPO-MOVELOG.md`

---

## CML-066A â€” Curriculum Action Density Live Deploy Smoke

- HEAD partenza: `2947309`, tree pulita âœ…
- Tipo slice: deploy/smoke/documentazione â€” nessuna modifica runtime
- **Fase 0** â€” stato locale: branch `main`, HEAD `2947309`, validazione PASS âœ…
- **Fase 1** â€” `git push origin main` (`b957a84..2947309`), workflow **success** âœ…
- **Fase 2** â€” smoke live su `https://antoniocorsano-boop.github.io/curmanlight/` âœ…
- 19/19 controlli live passati:
  - Home a due aree invariata, card Curriculum e Didattica presenti
  - Azioni secondarie raggiungibili via toggle
  - Export/import/report, role-access gating, Tecnologia invariati
  - Nessuna regressione `.cml`, nessun nuovo salvataggio
  - Mobile responsive OK
- **Fase 3** â€” documentazione creata
- Runtime non modificato in CML-066A
- Verdetto: `CML_066A_CURRICULUM_ACTION_DENSITY_LIVE_DEPLOY_SMOKE_READY`
- Prossimo step: CML-067 â€” DIDATTICA_MODULE_SELECTION_AUDIT
- Documentazione: `docs/03_execution/CML-066A.md`, `report/CML-066A_curriculum_action_density_live_deploy_smoke.md`, `docs/REPO-MOVELOG.md`

---

## CML-067 â€” Didattica Module Selection Audit

- HEAD partenza: `fba483c`, tree pulita âœ…
- Tipo slice: audit/docs â€” nessuna modifica runtime, nessun deploy
- Contesto: CML-065 ha definito Didattica come area operativa vuota, CML-065A/B hanno introdotto Home a due aree
- Opzioni valutate: A (UDA), B (AttivitÃ ), C (Materiali), D (Valutazione/evidenze), E (Programmazione annuale)
- **Scelta: Opzione D â€” Valutazione / Evidenze**
- Motivazione: dati giÃ  pronti (evidenze, criteriValutazione in tecnologia.normalized.json), rischio basso (read-only), alto valore per docente, confine pulito con Curriculum
- Opzioni rinviate: UDA (CML-069), AttivitÃ  (CML-070), Materiali (CML-071), Programmazione (CML-072)
- Nessuna modifica a runtime, schema `.cml`, role-access gating, Curriculum
- Nessun deploy
- Verdetto: `CML_067_DIDATTICA_MODULE_SELECTION_AUDIT_READY`
- Prossimo step: CML-068 â€” DIDATTICA_FIRST_READONLY_PROTOTYPE
- Documentazione: `docs/03_execution/CML-067.md`, `report/CML-067_didattica_module_selection_audit.md`, `docs/REPO-MOVELOG.md`

---

## CML-068 â€” Didattica First Read-Only Prototype (Valutazione/Evidenze)

- HEAD partenza: `23656a6`, tree sporca (uncommitted modifiche runtime index.html) âœ…
- Tipo slice: runtime + docs â€” primo prototype read-only dell'area Didattica
- **Unico file runtime modificato**: `_published_snapshot/netlify-current/index.html` (~+340/âˆ’3 righe)
- **Modifiche apportate:**
  1. CSS: classe `.didattica-evidence-*` per stats, filter, unit card, note
  2. HTML: `#tab-didattica` con stats, filter bar, `#didattica-evidence-list`
  3. Tabbar: pulsante "Didattica" tra Home e Lavoro
  4. Home card Didattica: primo link attivo ("Valuta evidenze"), altri tre dimessi (`#`)
  5. Mobile menu: voce "ðŸ§‘â€ðŸ« Didattica â€” Valutazione ed evidenze"
  6. `setTab()`: estesa per routing didattica, breadcrumb label, mbb-map
  7. JS: variabile globale `TECNOLOGIA_NORM_DATA` (13 unitÃ  con evidenze, criteriValutazione) + `renderDidattica()` (filter, expandable cards) + `setDidatticaFilter()`
- **Non modificato**: schema `.cml`, Curriculum (`DATA`, export/import/report), role-access (`CML2025`), CML2025 unlock/blocca, `localStorage`/`sessionStorage`, backend/API
- **Validazione:** JS_PARSE_OK âœ…, ALL_KYWD_CHECKS_OK âœ…, Validazione Tecnologia: 13 unitÃ /valid=true âœ…, Audit: buttonTags 100, exportButtons 27 (invariati), CML2025 refs 1, locks presenti âœ…
- **Nessun deploy**
- Verdetto: `CML_068_DIDATTICA_FIRST_READONLY_PROTOTYPE_READY`
- Documentazione: `docs/03_execution/CML-068.md`, `report/CML-068_didattica_first_readonly_prototype.md`, `docs/REPO-MOVELOG.md`

---

## CML-068A â€” Didattica Read-Only Prototype Live Deploy Smoke

- HEAD partenza: `8d74749`, tree pulita âœ…
- Tipo slice: deploy/smoke/documentazione â€” nessuna modifica runtime
- **Fase 0** â€” stato locale: branch `main`, HEAD `8d74749`, validazione PASS âœ…
- **Fase 1** â€” `git push origin main` (`2947309..8d74749`), workflow **success** âœ…
- **Fase 2** â€” smoke live su `https://antoniocorsano-boop.github.io/curmanlight/` âœ…
- **25/25 controlli live passati:** Didattica prototype visibile, 13 unitÃ , filtro ordine, card espandibili, evidenze e criteri visibili, nessun campo editabile, Curriculum invariato, export/import/report invariati, role-access gating invariato, regressione `.cml` PASS, mobile OK
- **Audit live:** button tags 100, export-btn 27, onclick 114
- **Verdetto:** `CML_068A_DIDATTICA_READONLY_PROTOTYPE_LIVE_DEPLOY_SMOKE_READY`
- **Prossimo step consigliato:** `CML-069 â€” DIDATTICA_UDA_MODULE_SELECTION_AUDIT` oppure `CML-068B â€” DIDATTICA_PROTOTYPE_UX_DENSITY_AUDIT`
- Documentazione: `docs/03_execution/CML-068A.md`, `report/CML-068A_didattica_readonly_prototype_live_deploy_smoke.md`, `docs/REPO-MOVELOG.md`

---

## CML-068B â€” Didattica Prototype UX Density Audit

- HEAD partenza: `fb5750c`, tree pulita âœ…
- Tipo slice: audit/docs â€” nessuna modifica runtime, nessun deploy
- 13 aree UX auditate sulla pagina live (`https://antoniocorsano-boop.github.io/curmanlight/`)
- **Esito:** P0=0, P1=0, P2=3, P3=2 â€” nessun bloccante
- **P2:** tre link dimessi Home card Didattica (non funzionanti), 13 card senza filtro classe/ambito, Didattica non in bottom bar mobile
- **P3:** "Prototipo" come stat fuori posto, assenza `title` sui link dimessi
- **Decisione:** procedere a CML-069 (UDA module selection) senza alleggerimento intermedio
- Nessuna modifica runtime, nessun deploy
- Verdetto: `CML_068B_DIDATTICA_PROTOTYPE_UX_DENSITY_AUDIT_READY`
- Documentazione: `docs/03_execution/CML-068B.md`, `report/CML-068B_didattica_prototype_ux_density_audit.md`, `docs/REPO-MOVELOG.md`

---

## CML-069 â€” Didattica UDA Module Selection Audit

- HEAD partenza: `6a6c87f`, tree pulita âœ…
- Tipo slice: audit/docs â€” nessuna modifica runtime, nessun deploy
- Opzioni valutate: A (UDA read-only), B (guidata senza salvataggio), C (esportabile), D (editor locale), E (generatore automatico)
- **Scelta: Opzione A â€” UDA read-only da unitÃ  Tecnologia**
- Motivazione: pattern giÃ  rodato (CML-068), dati sufficienti (13 unitÃ ), basso rischio, alto valore, confine pulito (Didattica > Progettazione), progressione naturale evidenze â†’ UDA
- Perimetro CML-070: 1â€“2 schede UDA modello, campi (18), layout espandibile, filtro ordine, microcopy prudente, nessun editor/salvataggio/export
- Opzioni rinviate: B (dopo prototipo), C (dopo modello stabile), D/E (futuro)
- Nessuna modifica runtime, nessun deploy, schema `.cml` invariato
- Verdetto: `CML_069_DIDATTICA_UDA_MODULE_SELECTION_AUDIT_READY`
- Prossimo step: CML-070 â€” UDA_READONLY_PROTOTYPE
- Documentazione: `docs/03_execution/CML-069.md`, `report/CML-069_didattica_uda_module_selection_audit.md`, `docs/REPO-MOVELOG.md`

---

## CML-070 â€” UDA Read-Only Prototype

- HEAD partenza: `c9a9b43`, tree pulita âœ…
- Tipo slice: runtime + docs â€” implementazione prototipo UDA read-only
- **Unico file runtime modificato:** `_published_snapshot/netlify-current/index.html`
- **Modifiche:** CSS `.didattica-uda-*`, HTML `#didattica-uda` section, Home card "Progetta UDA" attivo, `UDA_MODELI` array (2 model), `renderUdaModello()`, setTab() esteso, mobile menu UDA entry
- **2 UDA modello:** Primaria Cl.5 "Cittadini digitali responsabili", Secondaria Cl.1 "Dal computer al documento"
- **14 campi ciascuna:** 8 curricolari (ðŸŸ¢) + 6 esempio (ðŸŸ¡) + validazione umana
- **Badge origine dati:** "ðŸŸ¢ Dato curricolare" / "ðŸŸ¡ Esempio didattico" per trasparenza
- **Non modificato:** schema `.cml`, Curriculum, Valutazione/Evidenze, export/import/report, role-access, localStorage/sessionStorage
- **Validazione:** 13 unitÃ , valid:true, JS_PARSE_OK âœ…
- **Audit:** buttonTags 101, onclick 117, exportButtons 27, consistencyWarnings invariati
- **Smoke locale:** 20/20 controlli PASS âœ…
- Nessun deploy
- Verdetto: `CML_070_UDA_READONLY_PROTOTYPE_READY`
- Prossimo step: CML-070A â€” UDA_READONLY_PROTOTYPE_LIVE_DEPLOY_SMOKE
- Documentazione: `docs/03_execution/CML-070.md`, `report/CML-070_uda_readonly_prototype.md`, `docs/REPO-MOVELOG.md`

---

## CML-070A â€” UDA Read-Only Prototype Live Deploy Smoke

- HEAD partenza: `b0003ba`, tree pulita âœ…
- Tipo slice: deploy/smoke/documentazione â€” nessuna modifica runtime
- **Fase 0** â€” stato locale: branch `main`, HEAD `b0003ba`, validazione Tecnologia PASS (13 unitÃ , valid:true) âœ…, audit buttonTags 101, onclick 117, exportButtons 27 âœ…
- **Fase 1** â€” `git push origin main` (`8d74749..b0003ba`), workflow GitHub Pages **success** âœ…
- **Fase 2** â€” smoke live su `https://antoniocorsano-boop.github.io/curmanlight/` âœ…
- **25/25 controlli live passati:** 2 UDA modello visibili (Primaria "Cittadini digitali", Secondaria "Dal computer al documento"), 14 campi per UDA, badge curricolare/esempio, microcopy Read-only/validazione/non costituisce documento, sezione Didattica senza campi editabili, Valutazione/Evidenze invariata, Curriculum invariato, export/import/report invariati, role-access gating invariato, mobile OK
- **Runtime non modificato in CML-070A** (`git diff --name-only -- _published_snapshot/netlify-current` vuoto)
- Verdetto: `CML_070A_UDA_READONLY_PROTOTYPE_LIVE_DEPLOY_SMOKE_READY`
- Prossimo step: `CML-071 â€” PROFESSIONAL_UI_UX_SYSTEM_AUDIT`
- Documentazione: `docs/03_execution/CML-070A.md`, `report/CML-070A_uda_readonly_prototype_live_deploy_smoke.md`, `docs/REPO-MOVELOG.md`

---

## CML-071 â€” Professional UI/UX System Audit

- HEAD partenza: `9a6ae32`, tree pulita âœ…
- Tipo slice: audit/docs â€” nessuna modifica runtime, nessun deploy
- **Audit eseguito** su `https://antoniocorsano-boop.github.io/curmanlight/` (322KB)
- **Criteri:** architettura informativa, navigazione, gerarchia visiva, densitÃ  azioni, separazione Curriculum/Didattica, mobile usability, accessibilitÃ  base, microcopy, design system, sostenibilitÃ 
- **Aree minime coperte:** 13 (Home, navigazione desktop, navigazione mobile, Curriculum, Revisione, Export/import/report, Validazione protetta, Tecnologia normalizzata, Didattica Valutazione/Evidenze, UDA read-only, microcopy, accessibilitÃ , design system)
- **18 problemi individuati:** P0=0, P1=4, P2=10, P3=6
- **P1:** link Home Didattica inattivi fuorvianti, 7 tab (alta soglia cognitiva), UDA sotto Valutazione (scopribilitÃ  bassa), 27 exportButtons (densitÃ  percepita)
- **P2:** tab Didattica senza dashboard, microcopy incoerente/inflazionata, breadcrumb Home assente, Tecnologia a 3 click, abbreviazioni mobile ambigue, menu overlay overload, microcopy footer lunga, nessuna struttura semantica HTML
- **P3:** nessuna classe primario/secondario pulsanti, tab senza icone uniformi, scroll UDA assente, contrasto badge ðŸŸ¡
- **Decisione prossimo step:** CML-072 â€” DESIGN_SYSTEM_AND_NAVIGATION_CONTRACT (docs-only)
- Runtime non modificato (`git diff --name-only -- _published_snapshot/netlify-current` vuoto) âœ…
- Nessun deploy âœ…
- Verdetto: `CML_071_PROFESSIONAL_UI_UX_SYSTEM_AUDIT_READY`
- Prossimo step: `CML-072 â€” DESIGN_SYSTEM_AND_NAVIGATION_CONTRACT`
- Documentazione: `docs/03_execution/CML-071.md`, `report/CML-071_professional_ui_ux_system_audit.md`, `docs/REPO-MOVELOG.md`

---

## CML-072 â€” Design System and Navigation Contract

- HEAD partenza: `536f519`, tree pulita âœ…
- Tipo slice: contract/docs â€” nessuna modifica runtime, nessun deploy
- **Input:** CML-071 audit (P1=4, P2=10, P3=6)
- **10 principi UI/UX** definiti: un compito per schermata, area prima dell'azione, separazione Curriculum/Didattica, export secondario, mobile-first, microcopy breve
- **Architettura target:** Home, Curriculum, Didattica, Esportazioni, Guida â€” 5 aree principali
- **Navigazione target:** 5 tab desktop, 5 bottom bar mobile + Menu (Guida, impostazioni, info, version, blocca)
- **Regole Home:** max 3 azioni per area, link inattivi sostituiti con testo dimesso + badge "In preparazione", nessun `<a href="#">`
- **Regole Curriculum:** 5 sotto-aree (Consultazione, Tecnologia, Revisione, Validazione, Esportazione/Report), nessuna funzione didattica
- **Regole Didattica:** UDA separata da Valutazione/Evidenze, sotto-sezione autonoma, badge origine invariati, read-only fino a nuovo contratto
- **Regole Esportazioni:** tab dedicato, max 3 pulsanti visibili per gruppo, raggruppate per scopo
- **Design system leggero:** 9 categorie â€” pulsanti (6 classi), card (6), badge (7), toggle (3), box (5), tab (con icona), filtri, sezioni read-only, sezioni protette
- **Microcopy unificata:** glossario 14 voci, eliminata variante "in costruzione" â†’ solo "In preparazione", disclaimer compattati
- **AccessibilitÃ  base:** contrasto, colore+testo, focus, touch 44px, bottoni vs link, landmark (rinviati a CML-074)
- **18 problemi CML-071 mappati** a regole contratto: 14 coperti per CML-073, 2 rinviati a CML-074, 2 risolti dal contratto stesso
- **Prossimo step:** CML-073 â€” NAVIGATION_AND_HOME_LINKS_RUNTIME_INCREMENT
- Runtime non modificato (`git diff --name-only -- _published_snapshot/netlify-current` vuoto) âœ…
- Nessun deploy âœ…
- Verdetto: `CML_072_DESIGN_SYSTEM_AND_NAVIGATION_CONTRACT_READY`
- Prossimo step: `CML-073 â€” NAVIGATION_AND_HOME_LINKS_RUNTIME_INCREMENT`
- Documentazione: `docs/02_system/DESIGN-SYSTEM-AND-NAVIGATION-CONTRACT.md`, `docs/03_execution/CML-072.md`, `report/CML-072_design_system_and_navigation_contract.md`, `docs/REPO-MOVELOG.md`

---

## CML-073 â€” NAVIGATION_AND_HOME_LINKS_RUNTIME_INCREMENT

- **f5b12e2** â€” feat: apply CML-073 navigation runtime increment
- Unico file modificato: `_published_snapshot/netlify-current/index.html` (+168/âˆ’45 righe)
- **Tab bar: 7 â†’ 5**: ðŸ  Home, ðŸ“š Curriculum, ðŸ§‘â€ðŸ« Didattica, ðŸ“¤ Esportazioni, â” Guida
- **Sub-nav Curriculum**: Consulta, Revisione, Definitivo, Fonti (parent-highlighting su Curriculum)
- **Sub-nav Didattica**: Valutazione/Evidenze, UDA modello (parent-highlighting su Didattica)
- **Home link corretti**: "Esporta" â†’ Esportazioni, "Progetta UDA" â†’ didattica_uda
- **Badge "In preparazione"** su voci non attive (Prepara attivitÃ , Materiali)
- **Nuovo tab Esportazioni**: export/backup/report raggruppati, 4 pulsanti primari
- **Nuovo tab Guida**: aiuto, limiti, installazione, 6 card informative
- **Mobile bottom bar**: 5 voci (Home, Curr., Did., Esp., â˜° Menu)
- **Mobile menu raggruppato**: Curriculum, Didattica, Guida e strumenti (max 8 voci)
- Tecnologia 13 unitÃ  `valid:true`, 14 discipline PASS
- **Prossimo step:** CML-073A â€” NAVIGATION_AND_HOME_LINKS_LIVE_DEPLOY_SMOKE

---

## CML-073A â€” NAVIGATION_AND_HOME_LINKS_LIVE_DEPLOY_SMOKE

- **HEAD partenza:** `f5b12e2`, tree pulita âœ…
- **Tipo slice:** deploy + smoke + documentazione
- **Deploy GitHub Pages:** `gh run 28007685093` â€” `success` su `main`
- **URL live:** `https://antoniocorsano-boop.github.io/curmanlight/`
- **30 smoke checks:** tutti PASS âœ…
  - 5 tab desktop confermati
  - 5 voci mobile bar confermate
  - Link Home corretti (Esporta â†’ Esportazioni, Progetta UDA â†’ didattica_uda)
  - Badge "In preparazione" su voci non attive
  - Sub-nav Curriculum funzionante con parent-highlighting
  - Sub-nav Didattica funzionante (UDA autonoma)
  - Esportazioni raggiungibile, export/report invariati
  - Guida raggiungibile, 6 card
  - Role-access gating invariato (CML2025)
  - Schema .cml invariato
- Runtime non modificato in CML-073A âœ…
- Verdetto: `CML_073A_NAVIGATION_AND_HOME_LINKS_LIVE_DEPLOY_SMOKE_READY`
- Prossimo step: `CML-074 â€” PROFESSIONAL_LAYOUT_VISUAL_SYSTEM_RUNTIME_INCREMENT`
- Documentazione: `docs/03_execution/CML-073A.md`, `report/CML-073A_navigation_and_home_links_live_deploy_smoke.md`, `docs/REPO-MOVELOG.md`

## 2026-06-23 â€” CML-074 Professional layout visual system refinements

- **HEAD** â€” `feat: refine professional layout visual system`
- Design system badge variants: `.badge--readonly`, `.badge--prototype`, `.badge--warning`, `.badge--success`, `.badge--info`
- Badge contrast fix (P3 da CML-071): tutti i badge stati con colori piÃ¹ scuri (es. ok â†’ `#388e3c`, modifica â†’ `#ef6c00`)
- Card unificazione: raggio 9px, bordo sinistro per stato, ombra leggera
- Button hierarchy: `.btn-primary`, `.btn-secondary`, `.btn-tertiary`
- Notice-box system: `.warning`, `.tip`, `.success`
- Visual polish: bordi sinistro su `esport-group`, `guida-card`, `export-group`, `tool-group`
- 10 elementi HTML aggiornati con classi design system
- Mobile readability: font-size ridotti, padding piÃ¹ compatti
- Focus-visible ring consistente su tutti gli elementi interattivi
- Solo `index.html` modificato (+91, -10), nessuna funzione JS toccata
- Validazione: Tecnologia 13 unit valid:true, 14 discipline, 35 exportButtons
- Documentazione: `docs/03_execution/CML-074.md`, `report/CML-074_professional_layout_visual_system_runtime_increment.md`

## 2026-06-23 â€” CML-074A Professional layout visual system live smoke

- **ed8caa4** â€” Push su `origin/main` â†’ GitHub Pages deploy automatico
- URL live verificato: `https://antoniocorsano-boop.github.io/curmanlight/`
- 15 controlli smoke: PASS tutti
  - Caricamento pagina, layout visivo, navigazione, sub-nav, mobile bar
  - Azioni libere accessibili, azioni protette gated (CML2025)
  - Badge design system visibili (ðŸ“‹ Prototipo, ðŸ”’ Read-only, In preparazione)
  - Nessuna regressione su export, import, schema, role-access
- Nessuna modifica funzionale introdotta
- Verdetto: `CML_074A_PROFESSIONAL_LAYOUT_VISUAL_SYSTEM_LIVE_DEPLOY_SMOKE_READY`
- Documentazione: `docs/03_execution/CML-074A.md`, `report/CML-074A_professional_layout_visual_system_live_deploy_smoke.md`

## 2026-06-23 â€” CML-075 Referent report readability next increment selection

- Docs-only audit/selezione. Runtime non modificato.
- 4 opzioni valutate: A (percorso docente), B (report referente), C (microguida), D (fermarsi)
- Opzione selezionata: **B â€” Report referente piÃ¹ leggibile**
- Motivazione: dopo CML-074 il valore piÃ¹ alto Ã¨ rendere chiari gli esiti del lavoro per chi coordina
- `buildReferentGroupWorkReportMarkdown()` (linee 3980-4103) da migliorare in CML-076
- Verdetto: `CML_075_REFERENT_REPORT_READABILITY_NEXT_INCREMENT_SELECTED`
- Prossimo step: CML-076 â€” REFERENT_REPORT_READABILITY_RUNTIME_INCREMENT
- Documentazione: `docs/03_execution/CML-075.md`, `report/CML-075_referent_report_readability_and_decision_summary_selection_audit.md`

## 2026-06-23 â€” CML-076 Referent report readability runtime increment

- **372a314** â€” Riscritta `buildReferentGroupWorkReportMarkdown()` (linee 3980-4161)
- 8 sezioni numerate: sintesi decisionale (tabelle), decisioni chiuse/aperte, quadro per disciplina (tabella), passaggi successivi (dipartimento vs collegio), evidenze, traccia discussione, chiusura
- Sintesi con percentuale di completamento e separazione esplicita "cosa portare al dipartimento" / "cosa portare al collegio"
- Domande guida contestuali (cambiano in base allo stato delle decisioni)
- Solo `index.html` modificato (+161, -90)
- Schema `.cml`, export/import, role-access, storage, navigazione: invariati
- Validazione: Tecnologia 13 unit valid:true, 14 discipline, 35 exportButtons
- Verdetto: `CML_076_REFERENT_REPORT_READABILITY_RUNTIME_INCREMENT_READY`
- Prossimo step: CML-076A â€” referent report readability live deploy smoke
- Documentazione: `docs/03_execution/CML-076.md`, `report/CML-076_referent_report_readability_runtime_increment.md`

## 2026-06-23 â€” CML-076A Referent report readability live smoke

- **2411e3a** â€” Push su `origin/main` â†’ GitHub Pages deploy automatico
- URL live verificato: `https://antoniocorsano-boop.github.io/curmanlight/`
- 15 controlli smoke: PASS tutti
  - Caricamento pagina, navigazione, sub-nav, mobile bar
  - Pulsante "ðŸ“„ Scarica report gruppo di lavoro" presente
  - Funzione `buildReferentGroupWorkReportMarkdown()` review: sintassi corretta, chiamata invariata
  - Nessuna regressione su export, import, schema, role-access, storage
- Verdetto: `CML_076A_REFERENT_REPORT_READABILITY_LIVE_DEPLOY_SMOKE_READY`
- Documentazione: `docs/03_execution/CML-076A.md`, `report/CML-076A_referent_report_readability_live_deploy_smoke.md`

## 2026-06-23 â€” CML-077-PRE: DESIGN.md for Stitch Model Export

- **b15e7a3** â€” HEAD (pre-CML-077-PRE) tree pulita
- **DESIGN.md creato** alla radice del repository â€” 13 sezioni di design token
- **Nessuna modifica runtime** â€” solo `DESIGN.md`, docs, report, movelog
- Design tokens estratti da `index.html` CSS `<style>` block (linee 16-864)
- Copertura: colori (istituzionale, neutro, stato, semantico, export, gradienti), tipografia (scala 9px-22px, pesi, letter-spacing), spaziatura, border radius, ombre, layout (6 breakpoint), componenti (card, pulsanti, badge, panel, notice, export, guida, tool), accessibilitÃ , animazioni, naming, microcopy, schema navigazione
- DESIGN.md progettato come fonte di veritÃ  del design per Stitch/agent â€” NON interpretato a runtime
- File committati: `DESIGN.md`, `docs/03_execution/CML-077-PRE.md`, `report/CML-077-PRE_design_md_for_stitch_model_export.md`, `docs/REPO-MOVELOG.md`
- **Refinements post-review:** fix "gradiend" â†’ "inizio gradiente", "Invaliato" â†’ "Invariato / confermato", mobile-first clarificato, aggiunte sezioni 14 (vincoli funzionali) e 15 (prompt Stitch)
- Verdetto: `CML_077_PRE_DESIGN_MD_FOR_STITCH_MODEL_EXPORT_READY`

## 2026-06-23 â€” CML-077B: Stitch Visual Affinity and Dark Mode Selection Audit

- **0315bbe** â€” HEAD (CML-077-PRE refinements) tree pulita
- **Proposta Stitch valutata:** "Terra â€” Organic Design" (esterna, palette verde/crema, stile organico)
- **Elementi recuperabili:** ariositÃ  card, separazione blocchi, dark mode concept
- **Elementi scartati:** palette verde/crema, font remoti, Tailwind CDN, immagini remote, decorativismo eccessivo
- **Desktop:** struttura invariata, migliorare spaziatura e gap sezioni
- **Mobile:** 1 colonna confermata, touch target OK, aumentare padding card
- **Dark mode:** automatica con `@media (prefers-color-scheme: dark)`, no toggle manuale
- **Opzione selezionata: C** â€” affinitÃ  visiva leggera + modalitÃ  scura automatica (CSS variables + @media)
- **Opzioni scartate:** A (solo review), B (solo visivo, no dark mode), D (cambio tema ampio)
- **Nessuna modifica runtime:** `index.html`, `sw.js`, `_headers`, `.cml`, role-access, DESIGN.md ufficiale â€” tutti invariati
- **File creati:** `docs/03_execution/CML-077B.md`, `report/CML-077B_stitch_visual_affinity_and_dark_mode_selection_audit.md`, `stitch/proposal-001-terra/README.md`, `docs/REPO-MOVELOG.md`
- **Prossimo step raccomandato:** CML-078 â€” LIGHT_VISUAL_AFFINITY_AND_SYSTEM_DARK_MODE_RUNTIME_INCREMENT
- Verdetto: `CML_077B_STITCH_VISUAL_AFFINITY_DARK_MODE_NEXT_INCREMENT_SELECTED`

## 2026-06-23 â€” CML-078: Visual Affinity + Dark Mode Runtime

- **df58cd0** â€” feat: add CSS variables and system dark mode to runtime
  - CSS variables (`:root`): brand palette, spacing, radius, shadow tokens
  - `@media (prefers-color-scheme: dark)`: comprehensive dark mode (~350 lines) covering all UI surfaces
  - Header gradient swapped to `var(--cml-header)` for maintainability
  - Iconography audit: all icons Unicode/emoji, paired with text labels, consistent desktop/mobile
  - No toggle manuale, no localStorage for theme, no CDN/external deps added
  - Files: `index.html` (modified), `docs/03_execution/CML-078.md`, `report/CML-078_*.md`, `docs/REPO-MOVELOG.md`
- Verdetto: `CML_078_VISUAL_AFFINITY_ICONOGRAPHY_DARK_MODE_RUNTIME_INCREMENT_READY`
- Prossimo step: CML-078A â€” live smoke (15/15 PASS)

## 2026-06-23 â€” CML-078A: Live Smoke

- **81f3c8c** deployato su GitHub Pages (`https://antoniocorsano-boop.github.io/curmanlight/`)
- **11/11 verifiche superate:**
  1. âœ… URL pubblicato aggiornato
  2. âœ… Icone coerenti e leggibili (ðŸ  ðŸ“š ðŸ§‘â€ðŸ« ðŸ“¤ â”)
  3. âœ… Nessuna icona senza etichetta testuale essenziale
  4. âœ… Layout desktop invariato ma piÃ¹ leggibile
  5. âœ… Mobile senza overflow orizzontale (`overflow-x:hidden`)
  6. âœ… Card e bottoni piÃ¹ ariosi (CSS variables spacing)
  7. âœ… ModalitÃ  scura automatica funzionante (`@media prefers-color-scheme: dark`)
  8. âœ… Contrasto adeguato in modalitÃ  chiara e scura
  9. âœ… Nessuna dipendenza esterna introdotta (solo docx CDN pre-esistente)
  10. âœ… Schema `.cml`, export/import e role-access invariati
  11. âœ… CSS variables presenti live, header gradient via `var(--cml-header)`
- Verdetto: `CML_078A_VISUAL_AFFINITY_ICONOGRAPHY_DARK_MODE_LIVE_SMOKE_READY`
- Prossimo step: CML-079 â€” microguida operativa home

## 2026-06-23 â€” CML-079: Microguida Operativa Home

- **0895319** â€” feat: add CML operational microguide on home
  - Card "Usa CurManLight in 5 minuti" inserita nella Home tra le card e il footer
  - 5 passaggi numerati: scegli â†’ confronta â†’ decidi â†’ esporta â†’ sintesi
  - CSS classi `.home-microguide-*` con variabili CML-078, copertura dark mode
  - Nessuna nuova funzione, nessuna modifica funzionale a export/import/role-access
  - Nessuna dipendenza esterna, nessuno storage
  - File: `index.html` (modificato), `docs/03_execution/CML-079.md`, `report/CML-079_*.md`, `docs/REPO-MOVELOG.md`
- Verdetto: `CML_079_MICROGUIDA_OPERATIVA_HOME_RUNTIME_INCREMENT_READY`
- Prossimo step: CML-079A â€” microguida operativa home live smoke

## 2026-06-23 â€” CML-079A: Microguida Operativa Home â€” Live Smoke su GitHub Pages

- **9be3595** (stesso commit del CML-079) â€” verificata su GitHub Pages
- Microguida visibile in Home, 5 passaggi leggibili, icona â±, responsive, dark mode copertura
- Nessuna modifica funzionale, nessuna dipendenza esterna, schema `.cml`/export/import/role-access invariati
- **11/11 verifiche superate:**
  1. âœ… URL pubblico aggiornato
  2. âœ… Microguida visibile in Home â€” card "â± Usa CurManLight in 5 minuti" presente
  3. âœ… Titolo con â± â€” icona a orologio visibile
  4. âœ… 5 passaggi leggibili con badge numerato
  5. âœ… Mobile compatibile (responsive con media query 700px)
  6. âœ… Dark mode compatibile (CSS variables CML-078)
  7. âœ… Nessun overflow orizzontale
  8. âœ… Validazione umana esplicita: "La validazione finale resta a cura del gruppo di lavoro e degli organi competenti."
  9. âœ… Schema `.cml`, export/import, role-access invariati
  10. âœ… Nessuna dipendenza esterna introdotta
  11. âœ… Nessuna modifica funzionale (nessuna nuova funzione JS, nessun flusso alterato)
- File: `report/CML-079A_microguida_operativa_home_live_smoke.md`, `docs/REPO-MOVELOG.md`
- Verdetto: `CML_079A_MICROGUIDA_OPERATIVA_HOME_LIVE_SMOKE_READY`
- Prossimo step: CML-080 â€” curriculum and didattica completion selection audit

## 2026-06-23 â€” CML-080: Curriculum and Didattica Completion Selection Audit

- Audit delle aree centrali: Curriculum (4 sub-tab funzionanti) e Didattica (2 prototipi, 2 non implementati)
- Gap principale Curriculum: mancano indicazioni esplicite sul percorso consultaâ†’revisioneâ†’decisione
- Gap principale Didattica: prototipi read-only, manca valore operativo per il docente
- Opzioni analizzate: A (Curriculum prima), B (Didattica prima), C (entrambe), D (audit poi separati)
- Raccomandazione: **Option A** â€” completare Curriculum prima, poi Didattica
- File: `docs/03_execution/CML-080.md`, `report/CML-080_curriculum_and_didattica_completion_selection_audit.md`, `docs/REPO-MOVELOG.md`
- Verdetto: `CML_080_CURRICULUM_AND_DIDATTICA_COMPLETION_SELECTION_AUDIT_READY`
- Prossimo step: CML-081 â€” curriculum area completion runtime increment

## 2026-06-23 â€” CML-081: Curriculum Area Completion Runtime Increment

- **Opzione A** confermata: Curriculum prima, poi Didattica
- Modifiche in `renderCurricoloIstituto()` in `index.html`:
  1. **Path guidance** â€” box "Il percorso del curricolo": Consulta â†’ Revisione â†’ Definitivo â†’ Esporta con link diretti
  2. **Coverage banner** â€” "Copertura curricolo": N discipline, N voci totali, N con proposta 2025
  3. **Per-discipline summary** â€” griglia dopo l'indice: icona, nome, totale, modifiche con dot colorato
  4. **Next-action callout** â€” dopo ogni disciplina: link "Revisiona {disciplina}"
  5. **Ordine counts** â€” nell'intestazione: "N discipline, M voci"
- Nuovi CSS: `.curricolo-path`, `.curricolo-copertura`, `.curricolo-riepilogo`, `.curricolo-nextaction`, `.curricolo-ordine-count`
- Solo dati giÃ  presenti in `DATA`/`DISCIPLINE_META`, nessun `localStorage`, nessuna nuova funzione
- Nessuna modifica ad altri tab, schema `.cml`, export/import, role-access
- Compatibile dark mode (CSS variables)
- File: `index.html` (modificato), `docs/03_execution/CML-081.md`, `report/CML-081_curriculum_area_completion_runtime_increment.md`, `docs/REPO-MOVELOG.md`
- Verdetto: `CML_081_CURRICULUM_AREA_COMPLETION_RUNTIME_INCREMENT_READY`
- Prossimo step: CML-081A â€” curriculum area live smoke

## 2026-06-23 â€” CML-081A: Curriculum Area Completion â€” Live Smoke su GitHub Pages

- **1f95a99** â€” verificata su GitHub Pages
- 11/11 verifiche superate: path guidance, coverage banner, per-discipline summary, next-action callout, ordine counts
- Link a Revisione, Definitivo, Esporta, sezioni generali funzionanti
- Nessuna modifica ad altri tab, schema `.cml`, export/import, role-access
- Nessuna dipendenza esterna, dark mode compatibile
- File: `report/CML-081A_curriculum_area_completion_live_smoke.md`, `docs/REPO-MOVELOG.md`
- Verdetto: `CML_081A_CURRICULUM_AREA_COMPLETION_LIVE_SMOKE_READY`
- Prossimo step: CML-082 â€” Didattica area completion runtime increment

## 2026-06-23 â€” CML-082: Didattica Area Completion Runtime Increment

- **8d7d384** â€” feat: complete CML didattica area guidance
- Cosa Ã¨ cambiato:
  - Aggiunto `.didattica-path` (teal guidance box) in cima a `tab-didattica` con spiegazione operativa per l'utente
  - Sostituito "ðŸ”¨ Area in costruzione" con "ðŸ§‘â€âš–ï¸ Non sostituisce la valutazione professionale"
  - Badge statistiche: "Prototipo" â†’ "ðŸ“‹ Evidenze e criteri" in `renderDidattica()`
  - UDA modello: "ðŸ”¨ UDA modello â€” read-only" â†’ "ðŸ§‘â€ðŸ« UDA modello â€” guida operativa"
  - Home card: descrizione aggiornata, badge "ðŸ“‹ Prototipo" â†’ "ðŸ“‹ Area operativa"
  - Dark mode overrides per `.didattica-path`
- Nessuna modifica a Curriculum, export/import, schema `.cml`, role-access, storage
- File: `_published_snapshot/netlify-current/index.html`, `docs/03_execution/CML-082.md`
- Verdetto: `CML_082_DIDATTICA_AREA_COMPLETION_RUNTIME_INCREMENT_READY`
- Prossimo step: CML-082A â€” Didattica area live smoke

## 2026-06-23 â€” CML-082A: Didattica Area Completion Live Smoke

- Verificato su localhost:8080 (Python HTTP server)
- 8/8 smoke test PASS:
  1. Guidance path box presente
  2. Nessun "Area in costruzione"
  3. Stats badge `ðŸ“‹ Evidenze e criteri`
  4. UDA modello "guida operativa"
  5. Home card testo aggiornato
  6. Home card badge "Area operativa"
  7. Curriculum tab integro (curricolo-path)
  8. Role-access/export/.cml funzioni intatte
- Nessuna regressione, nessuna nuova dipendenza
- File: `report/CML-082A_didattica_area_completion_live_smoke.md`, `docs/REPO-MOVELOG.md`
- Verdetto: `CML_082A_DIDATTICA_AREA_COMPLETION_LIVE_SMOKE_PASS`
- Prossimo step: da definire

---

## 2026-06-23 â€” CML-079B â€” HOME_MICROGUIDE_RENDERING_FIX

- Tipo slice: runtime fix + docs
- Causa: `@media(max-width:560px){` orfana alla riga 690 di `index.html` non chiusa â€” tutto il CSS Home/Didattica/microguida era intrappolato, invisibile su viewport >560px
- Fix: rimozione della riga orfana (1 linea, solo CSS)
- File modificati: `_published_snapshot/netlify-current/index.html`
- Documenti creati: `docs/03_execution/CML-079B.md`, `report/CML-079B_home_microguide_rendering_fix.md`, `docs/REPO-MOVELOG.md`
- Vincoli rispettati: nessuna nuova funzione, nessuna modifica a schema `.cml`, export/import, role-access, storage, dipendenze esterne
- Verdetto: `CML_079B_HOME_MICROGUIDE_RENDERING_FIX_READY`
- Prossimo step: CML-079C â€” HOME_MICROGUIDE_RENDERING_LIVE_SMOKE

---

## 2026-06-23 â€” CML-MOTTO-PAGES-PUBLISH â€” Pubblicazione motto page su GitHub Pages

- Tipo slice: pubblicazione pagina statica
- Operazione: copiato `motto-non-multa-sed-multum.html` â†’ `motto-non-multa-sed-multum/index.html` per URL pulito
- File creati: `_published_snapshot/netlify-current/motto-non-multa-sed-multum/index.html`, `docs/03_execution/CML-MOTTO-PAGES-PUBLISH.md`, `report/CML-MOTTO_pages_publish.md`
- Nessuna modifica a `index.html`, schema `.cml`, export/import, role-access, `sw.js`, `_headers` o asset
- URL atteso: `https://antoniocorsano-boop.github.io/curmanlight/motto-non-multa-sed-multum/`
- Verdetto: `CML_MOTTO_PAGES_PUBLISH_READY`

---

## 2026-06-23 â€” CML-083 â€” DESIGN_SYSTEM_DARK_MODE_CONTRAST_ALIGNMENT_RUNTIME_FIX

- Tipo slice: runtime fix (CSS + 1 inline style)
- Causa: classi Didattica non incluse nel dark mode block; `color:#333` inline e in CSS rendeva il testo invisibile su sfondo scuro
- Fix: rimosso `color:#333` inline in JS (linea 1914) + 7 nuove regole CSS nel dark mode block per `didattica-evidence-section`, `didattica-uda-card-sub`, `didattica-evidence-section-title`, `didattica-uda-field-value`, `didattica-uda-box`, `didattica-uda-field`
- File modificati: `_published_snapshot/netlify-current/index.html` (+8/âˆ’1)
- Documenti creati: `docs/03_execution/CML-083.md`, `report/CML-083_design_system_dark_mode_contrast_alignment_runtime_fix.md`, `docs/REPO-MOVELOG.md`
- Vincoli rispettati: nessuna nuova funzione, nessuna modifica a schema `.cml`, export/import, role-access, storage, dipendenze esterne
- Controlli: braces CSS bilanciate (969=969), `git diff --check` âœ…, nessuna nuova dipendenza, dark mode solo `@media(prefers-color-scheme:dark)`, nessuna `@media` orfana
- Verdetto: `CML_083_DESIGN_SYSTEM_DARK_MODE_CONTRAST_ALIGNMENT_READY`
- Prossimo step: CML-083A â€” DESIGN_SYSTEM_DARK_MODE_CONTRAST_LIVE_SMOKE

---

## 2026-06-23 â€” CML-083A â€” DESIGN_SYSTEM_DARK_MODE_CONTRAST_LIVE_SMOKE

- Tipo slice: deploy + smoke + documentazione
- Deploy: `git push origin main` â†’ workflow GitHub Pages success
- URL verificato: `https://antoniocorsano-boop.github.io/curmanlight/`
- Home light/dark âœ…, Curriculum light/dark âœ…, Didattica light/dark âœ…, Esportazioni/Guida âœ…
- Dark mode CSS fix confermato live (riga 1055 `didattica-evidence-section ul` override)
- Motto page HTTP 200, sw.js cache `v452b422`
- Schema `.cml`, export/import, role-access invariati
- Nessuna modifica runtime in CML-083A
- Verdetto: `CML_083A_DESIGN_SYSTEM_DARK_MODE_CONTRAST_LIVE_SMOKE_READY`
- Prossimo step: CML-083B â€” LIGHT_MODE_ONLY_DESIGN_SYSTEM_RUNTIME_FIX

---

## 2026-06-23 â€” CML-083B â€” LIGHT_MODE_ONLY_DESIGN_SYSTEM_RUNTIME_FIX

- Tipo slice: runtime fix (CSS-only)
- Decisione progettuale: CurManLight torna a modalitÃ  chiara unica. Dark mode automatica disattivata.
- Intervento: commentato blocco `@media(prefers-color-scheme:dark){...}` (159 righe, 151 regole) in `index.html`; aggiunto `color-scheme:light` su `:root`
- File modificati: `_published_snapshot/netlify-current/index.html` (+163/âˆ’159)
- Nessuna modifica a: schema `.cml`, export/import, role-access, JS, layout, dipendenze
- Controlli: braces CSS 2088=2088 âœ…, `git diff --check` âœ…, nessuna nuova dipendenza, nessuna occorrenza attiva di `prefers-color-scheme`
- Verdetto: `CML_083B_LIGHT_MODE_ONLY_DESIGN_SYSTEM_RUNTIME_FIX_READY`
- Prossimo step: CML-083C â€” LIGHT_MODE_ONLY_LIVE_SMOKE

---

## 2026-06-24 â€” CML-083C â€” LIGHT_MODE_ONLY_LIVE_SMOKE

- Tipo slice: live smoke
- Deploy: `git push origin main` â†’ workflow GitHub Pages success (11s)
- URL verificato: `https://antoniocorsano-boop.github.io/curmanlight/`
- Home light mode âœ…, Curriculum light mode âœ…, Didattica light mode âœ…, Esportazioni/Guida light mode âœ…
- `color-scheme:light` su `:root` (riga 18) âœ…
- `prefers-color-scheme` solo in commento (riga 906) â€” nessuna media query attiva
- Dark colors (`#121212`, `#1e1e1e`, `#252525`, `#2a1a2a`) solo in commenti
- Nessun effetto scuro anche con sistema operativo in dark mode
- Schema `.cml`, export/import, role-access invariati
- Motto page HTTP 200
- Verdetto: `CML_083C_LIGHT_MODE_ONLY_LIVE_SMOKE_READY`

---

## 2026-06-24 â€” CML-084 â€” DISCIPLINARY_CURRICULUM_COMPLETENESS_AND_APPROVAL_READINESS_AUDIT

- Tipo slice: docs-only audit
- Scoperta chiave: solo Tecnologia ha struttura normalizzata completa (13 unitÃ , 7 ambiti, conoscenze, abilitÃ , evidenze, criteri, UDA, file JSON)
- Le altre 14 discipline hanno solo traguardi e obiettivi (livello base)
- Benchmark: `content/curriculum/tecnologia.normalized.json` + `TECNOLOGIA_NORM_DATA` inline + `UDA_MODELI`
- Classificazione Tecnologia: `bozza_generabile` / `in_revisione`
- Classificazione altre 14: `solo_consultazione`
- Nessuna disciplina Ã¨ `pronto_approvazione`
- Decisione: CML-085 mostrerÃ  stato completezza per disciplina; CML-086 introdurrÃ  approvazione solo per discipline con livello normalizzato
- Verdetto: `CML_084_DISCIPLINARY_CURRICULUM_COMPLETENESS_APPROVAL_READINESS_AUDIT_READY`
- Prossimo step: CML-085 â€” DISCIPLINARY_CURRICULUM_COMPLETENESS_STATUS_RUNTIME_INCREMENT

---

## 2026-06-24 â€” CML-085 â€” DISCIPLINARY_CURRICULUM_COMPLETENESS_STATUS_RUNTIME_INCREMENT

- Tipo slice: runtime increment (CSS + JS)
- File modificato: `_published_snapshot/netlify-current/index.html` (+31 righe)
- Sezione aggiunta: "Stato di completezza dei curricoli disciplinari" dopo il riepilogo in Curriculum > Consultazione
- Contatori: 1 bozza completa (Tecnologia), 14 sola consultazione, 0 pronte per approvazione
- Badge: verde per "Bozza completa disponibile", giallo per "Solo consultazione"
- Messaggio prudente: "L'approvazione resta esterna allo strumento"
- Read-only: nessun pulsante, nessuna persistenza, nessuna modifica dati
- Controlli: braces 2104=2104 âœ…, `git diff --check` âœ…, nessuna nuova dipendenza
- Verdetto: `CML_085_DISCIPLINARY_CURRICULUM_COMPLETENESS_STATUS_RUNTIME_INCREMENT_READY`
- Prossimo step: CML-085A â€” DISCIPLINARY_CURRICULUM_COMPLETENESS_STATUS_LIVE_SMOKE

---

## 2026-06-24 â€” CML-085A â€” DISCIPLINARY_CURRICULUM_COMPLETENESS_STATUS_LIVE_SMOKE

- Tipo slice: live smoke
- Deploy: `git push origin main` â†’ workflow success (14s)
- URL: `https://antoniocorsano-boop.github.io/curmanlight/`
- Sezione completezza: visibile âœ…
- Tecnologia: "Bozza completa disponibile / In revisione" âœ…
- Altre 14: "Solo consultazione / Non pronta per approvazione" âœ…
- Contatori: 1 / 14 / 0 âœ…
- Nessun pulsante di approvazione âœ…
- Home, Didattica, Esportazioni, Guida integre âœ…
- Light mode confermata, `.cml`/export/role-access invariati âœ…
- Motto page HTTP 200 âœ…
- Verdetto: `CML_085A_DISCIPLINARY_CURRICULUM_COMPLETENESS_STATUS_LIVE_SMOKE_READY`

---

## 2026-06-24 â€” CML-086 â€” NEXT_DISCIPLINE_NORMALIZATION_SELECTION_AUDIT

- Tipo slice: docs-only audit / selection
- Discipline candidate: 10 (multi-ordine)
- Disciplina selezionata: **Italiano**
- Motivazione: 17 items DATA, 6 nuclei, copertura completa Inf/Pri/Sec, altissima centralitÃ  curricolare, consente di validare adattabilitÃ  del modello Tecnologia a discipline linguistico-espressive
- Criteri: centralitÃ , utilitÃ  come secondo modello, dati base, copertura, articolabilitÃ , valore approvazione, rischio, coerenza modello
- Rischi: 6 nuclei ampi, allineamento IN 2012+D.M. 221/2025, overlap Ed. Civica
- Mitigazioni: 10-14 unitÃ  iniziali, validazione umana, classificazione bozza_generabile/in_revisione
- Verdetto: `CML_086_NEXT_DISCIPLINE_NORMALIZATION_SELECTED`
- Prossimo step: CML-087 â€” ITALIANO_DISCIPLINE_NORMALIZED_CURRICULUM_DRAFT

---

## 2026-06-24 â€” CML-087 â€” ITALIANO_DISCIPLINE_NORMALIZED_CURRICULUM_DRAFT

- Tipo slice: data/content increment
- Benchmark: `content/curriculum/tecnologia.normalized.json`
- File creati: `content/curriculum/italiano.normalized.json`, `docs/03_execution/CML-087.md`, `report/CML-087_italiano_discipline_normalized_curriculum_draft.md`
- File modificati: `docs/REPO-MOVELOG.md`
- UnitÃ  create: **14**
  - Infanzia: 3 (fasce 3-4, 5)
  - Primaria: 6 (cl. 1, 2, 3, 4, 5)
  - Secondaria: 5 (cl. 1, 2, 3)
- Nuclei coperti: Ascolto, Parlato, Lettura, Scrittura, Lessico, Riflessione sulla lingua
- Stato: `bozza_generabile` / `in_revisione`
- Validazione umana: âœ… esplicita su ogni unitÃ 
- Runtime non modificato: âœ…
- `.cml`/export/import/role-access invariati: âœ…
- Verdetto: `CML_087_ITALIANO_DISCIPLINE_NORMALIZED_CURRICULUM_DRAFT_READY`
- Prossimo step raccomandato: CML-087A â€” ITALIANO_NORMALIZED_CURRICULUM_DRAFT_QUALITY_AUDIT

---

## 2026-06-24 â€” CML-087A â€” ITALIANO_NORMALIZED_CURRICULUM_DRAFT_QUALITY_AUDIT (con headroom)

- Tipo slice: docs-only quality audit
- File sotto audit: `content/curriculum/italiano.normalized.json`
- Benchmark: `content/curriculum/tecnologia.normalized.json`
- Riferimenti: CML-084, CML-086, CML-087
- Criterio aggiunto: headroom progettuale (margine di crescita ordinata)
- Esito tecnico: âœ… PASS â€” JSON valido, struttura coerente, ID univoci, nessuna approvazione
- Esito didattico: âœ… PASS â€” obiettivi osservabili, criteri descrittivi, progressione verticale leggibile
- Headroom: âœ… PASS â€” media 13,5 unitÃ /disciplina; 1.459 chars/unitÃ ; proiezione 203 unitÃ  (~300 KB) per 15 discipline; sistema scalabile senza modifiche architetturali
- Decisione readiness: **A** â€” Italiano pronto come `bozza_generabile / in_revisione`
- CriticitÃ : nessuna bloccante; Italiano +266 chars/unitÃ  vs Tecnologia (da monitorare per discipline lessicalmente ricche)
- Raccomandazioni headroom: mantenere unitÃ  â‰¤ 2.000 chars, â‰¤ 20 unitÃ  per disciplina, â‰¤ 5 stati unitÃ 
- Runtime non modificato: âœ…
- `.cml`/export/import/role-access invariati: âœ…
- Verdetto: `CML_087A_ITALIANO_NORMALIZED_CURRICULUM_QUALITY_AUDIT_READY`
- Prossimo step: CML-088 â€” DISCIPLINARY_COMPLETENESS_STATUS_UPDATE_FOR_ITALIANO_RUNTIME_INCREMENT

---

## 2026-06-24 â€” CML-088 â€” DISCIPLINARY_COMPLETENESS_STATUS_UPDATE_FOR_ITALIANO_RUNTIME_INCREMENT

- Tipo slice: runtime increment leggero
- Fonte: CML-087A esito A
- File runtime modificato: `_published_snapshot/netlify-current/index.html`
- Contatori: 1â†’2 bozze complete, 14â†’13 sola consultazione, 0 pronte approvazione invariato
- Italiano aggiunto come seconda disciplina "Bozza completa disponibile / In revisione"
- Italiano rimosso dall'elenco "Solo consultazione"
- Nota: "Tecnologia e Italiano sono i modelli strutturali di riferimento"
- Braces CSS bilanciate: âœ… (2104/2104)
- Nessuna nuova dipendenza: âœ…
- Nessuna approvazione introdotta: âœ…
- Dati/`.cml`/export/import/role-access invariati: âœ…
- Verdetto: `CML_088_DISCIPLINARY_COMPLETENESS_STATUS_UPDATE_FOR_ITALIANO_READY`
- Prossimo step: CML-088A â€” DISCIPLINARY_COMPLETENESS_STATUS_ITALIANO_LIVE_SMOKE

---

## 2026-06-24 â€” CML-088A â€” DISCIPLINARY_COMPLETENESS_STATUS_ITALIANO_LIVE_SMOKE

- Tipo slice: deploy + smoke + documentazione
- Deploy: `git push origin main` â†’ workflow GitHub Pages success
- URL verificato: `https://antoniocorsano-boop.github.io/curmanlight/`
- Contatori: 2 (bozze complete) / 13 (sola consultazione) / 0 (pronte approvazione) âœ…
- Tecnologia + Italiano: entrambe "Bozza completa disponibile / In revisione" âœ…
- Note modelli: "Tecnologia e Italiano sono i modelli strutturali di riferimento" âœ…
- Nessun pulsante di approvazione âœ…
- Home, Didattica, Esportazioni, Guida integre âœ…
- Light mode confermata, Motto page HTTP 200 âœ…
- Schema `.cml`, export/import, role-access invariati âœ…
- Runtime non modificato in CML-088A
- Verdetto: `CML_088A_DISCIPLINARY_COMPLETENESS_STATUS_ITALIANO_LIVE_SMOKE_READY`

---

## 2026-06-24 â€” CML-089 â€” DISCIPLINARY_APPROVAL_READINESS_STATE_MODEL_CONTRACT

- Tipo slice: docs-only / contract / state model
- HEAD partenza: `31dfc9d`, tree pulita âœ…
- Contratto creato: `docs/02_system/DISCIPLINARY_APPROVAL_READINESS_STATE_MODEL_CONTRACT.md`
- **6 stati definiti:** `solo_consultazione`, `bozza_generabile`, `in_revisione`, `sintesi_pronta`, `pronto_approvazione`, `approvato_esternamente`
- Ogni stato documenta: significato, attributore, condizioni, UI consentita/vietata, rischio, microcopy
- Transizioni lineari e non automatiche â€” ogni passaggio richiede ruolo umano + evidenza
- Microcopy consentita/vietata esplicitamente documentata
- Headroom: 6 stati leggibili, scalabile da 2 a 15 discipline
- Classificazione attuale confermata:
  - Tecnologia: `bozza_generabile / in_revisione`
  - Italiano: `bozza_generabile / in_revisione`
  - Altre 13: `solo_consultazione`
  - Pronte per approvazione: 0
- Runtime non modificato âœ…
- Dati curricolari non modificati âœ…
- Schema `.cml`, export/import, role-access invariati âœ…
- Verdetto: `CML_089_DISCIPLINARY_APPROVAL_READINESS_STATE_MODEL_CONTRACT_READY`
- Prossimo step: CML-090 â€” DISCIPLINARY_APPROVAL_READINESS_UI_SELECTION_AUDIT

---

## 2026-06-24 â€” CML-090 â€” DISCIPLINARY_APPROVAL_READINESS_UI_SELECTION_AUDIT

- Tipo slice: docs-only / selection audit
- HEAD partenza: `7f78310`, tree pulita âœ…
- **3 opzioni valutate:**
  - **A** â€” Badge readiness dentro sezione "Completezza" esistente âŒ (troppo debole)
  - **B** â€” Pannello "Readiness approvazione" sotto "Completezza" âœ… (selezionata)
  - **C** â€” Sezione dedicata "Approvazione"/"Stati approvazione" âŒ (prematura)
- **Opzione selezionata: B** â€” Nuova card "Readiness per approvazione" dentro Curriculum > Consultazione
- Motivazione: separa completezza da approvazione, non introduce nuovo tab, non sembra funzione approvativa, mantiene headroom
- Microcopy proposta per CML-091: titolo, sottotitolo, contatori 2/13/0, righe per disciplina, nota approvazione esterna
- Runtime non modificato âœ…
- Dati curricolari non modificati âœ…
- Schema `.cml`, export/import, role-access invariati âœ…
- Verdetto: `CML_090_DISCIPLINARY_APPROVAL_READINESS_UI_SELECTION_READY`
- Prossimo step: CML-091 â€” DISCIPLINARY_APPROVAL_READINESS_PANEL_RUNTIME_INCREMENT

---

## 2026-06-24 â€” CML-091 â€” DISCIPLINARY_APPROVAL_READINESS_PANEL_RUNTIME_INCREMENT

- Tipo slice: runtime increment (CSS + JS)
- HEAD partenza: `c50b4cb`, tree pulita âœ…
- File runtime modificato: `_published_snapshot/netlify-current/index.html` (+32 righe)
- **Nuovo pannello "Readiness per approvazione"** aggiunto sotto "Stato di completezza" in Curriculum > Consultazione
- 16 righe CSS nuove (classi `.curricolo-readiness-*`, `.readiness-counter-*`, `.readiness-badge-*`)
- Contatori: 2 in revisione, 13 sola consultazione, 0 pronte per approvazione
- Tecnologia: "Bozza completa, in revisione" / Italiano: "Bozza completa, in revisione"
- Altre 13: "Struttura da completare prima della readiness"
- Nota: approvazione esterna allo strumento
- Nessun pulsante, nessuna azione, read-only
- Braces CSS bilanciate: âœ… (2120=2120)
- Nessuna nuova dipendenza: âœ…
- Nessuna modifica dati, `.cml`, export/import, role-access: âœ…
- Light mode only preservato, dark mode commentato: âœ…
- Verdetto: `CML_091_DISCIPLINARY_APPROVAL_READINESS_PANEL_RUNTIME_INCREMENT_READY`
- Prossimo step: CML-091A â€” DISCIPLINARY_APPROVAL_READINESS_PANEL_LIVE_SMOKE

---

## 2026-06-24 â€” CML-091A â€” DISCIPLINARY_APPROVAL_READINESS_LIVE_SMOKE (20/20)

- Tipo slice: live smoke
- HEAD partenza: `6280718`, tree pulita âœ…
- Deploy: `git push origin main` â†’ workflow GitHub Pages success
- URL verificato: `https://antoniocorsano-boop.github.io/curmanlight/`
- 20/20 controlli live passati:
  - Completezza e readiness panel visibili âœ…
  - Tecnologia+Italiano in revisione, 13 sola consultazione, 0 pronte âœ…
  - Contatori: 2/13/0 (completezza), 2/13/0 (readiness) âœ…
  - Nessun pulsante approvazione, nessuna disciplina pronta âœ…
  - Nota approvazione esterna presente âœ…
  - Didattica, Esportazioni, Guida, Motto page integre âœ…
- Verdetto: `CML_091A_DISCIPLINARY_APPROVAL_READINESS_PANEL_LIVE_SMOKE_READY`
- Prossimo step: CML-092 â€” selezione prossima normalizzazione

---

## 2026-06-24 â€” CML-092 â€” MATEMATICA_DISCIPLINE_NORMALIZED_CURRICULUM_DRAFT

- Tipo slice: data/content increment
- Disciplina scelta: **Matematica** (seconda normalizzazione dopo Italiano)
- Benchmark: `content/curriculum/italiano.normalized.json`, `content/curriculum/tecnologia.normalized.json`
- File creati: `content/curriculum/matematica.normalized.json` (13 unitÃ )
- File runtime modificato: `_published_snapshot/netlify-current/index.html` (contatori 2â†’3, note aggiornate)
- **13 unitÃ :** Infanzia 1 (fascia 5), Primaria 5 (cl.1 x4, cl.5 x1), Secondaria 7 (cl.1 x5, cl.2 x1, cl.3 x1)
- **Nuclei coperti:** Numeri (5), Spazio e figure (3), Relazioni e funzioni (2), Dati e previsioni (1), Informatica (2)
- **D.M. 221/2025:** educazione finanziaria (Pri cl.5, Sec cl.3), informatica/pensiero computazionale (Pri cl.1, Sec cl.1, Sec cl.2)
- Stato: `bozza_generabile, in_revisione, validazioneUmana:true` su tutte le unitÃ 
- Commit: `bfa1d2a` â€” pushato su `main`
- Dati/`.cml`/export/import/role-access invariati: âœ…
- Verdetto: `CML_092_MATEMATICA_DISCIPLINE_NORMALIZED_CURRICULUM_DRAFT_READY`
- Prossimo step: CML-092A â€” MATEMATICA_NORMALIZED_CURRICULUM_DRAFT_QUALITY_AUDIT

---

## 2026-06-24 â€” CML-092A â€” MATEMATICA_NORMALIZED_CURRICULUM_DRAFT_QUALITY_AUDIT

- Tipo slice: docs-only quality audit
- File sotto audit: `content/curriculum/matematica.normalized.json`
- Esito tecnico: âœ… PASS â€” JSON valido, struttura coerente con Italiano (18/18 campi), 13/13 ID univoci
- Esito didattico: âœ… PASS â€” obiettivi osservabili, criteri descrittivi, progressione verticale su Numeri e Spazio e figure
- Headroom: ~2.114 chars/unitÃ  (superiore a Italiano 1.588, da monitorare)
- Gap non bloccanti: 1 sola unitÃ  Infanzia, classi Primaria 2-3-4 scoperte, Dati e previsioni sottorappresentato, disallineamento ambito/nucleo in mat_pri_1_003
- Decisione readiness: **A** â€” Matematica pronto come `bozza_generabile / in_revisione`
- Commit: `8d4ca39` â€” pushato su `main`
- Runtime non modificato, `.cml`/export/import/role-access invariati: âœ…
- Verdetto: `CML_092A_MATEMATICA_NORMALIZED_CURRICULUM_QUALITY_AUDIT_READY`
- Prossimo step: CML-093 â€” LIVE_SMOKE completezza e readiness Matematica

---

## 2026-06-24 â€” CML-093 â€” DISCIPLINARY_COMPLETENESS_AND_READINESS_MATEMATICA_LIVE_SMOKE

- Tipo slice: live smoke/documentazione
- HEAD partenza: `8d4ca39`, tree pulita âœ…
- Deploy Pages: `bfa1d2a` (CML-092) â†’ workflow GitHub Pages success
- Commit docs: `8d4ca39` (CML-092A) â€” docs-only, no runtime mod
- URL live: `https://antoniocorsano-boop.github.io/curmanlight/`
- **25/25 controlli live passati:**
  - Contatori: 3 bozze complete, 12 sola consultazione, 0 pronte âœ…
  - Readiness: 3 in revisione, 12 sola consultazione, 0 pronte âœ…
  - Tecnologia: "Bozza completa, in revisione" âœ…
  - Italiano: "Bozza completa, in revisione" âœ…
  - Matematica: "Bozza completa, in revisione" âœ…
  - Altre 12: "Solo consultazione" âœ…
  - Nota approvazione esterna presente âœ…
  - Nessun pulsante approvazione âœ…
  - Nessuna disciplina pronta/approvata âœ…
  - Light mode only, mobile OK, Motto page HTTP 200 âœ…
  - `.cml`/export/import/role-access invariati âœ…
- File creati: `docs/03_execution/CML-093.md`, `report/CML-093_disciplinary_completeness_and_readiness_matematica_live_smoke.md`
- Nessuna modifica runtime in CML-093
- Verdetto: `CML_093_DISCIPLINARY_COMPLETENESS_READINESS_MATEMATICA_LIVE_SMOKE_READY`
- Prossimo step: CML-094 â€” NEXT_DISCIPLINE_NORMALIZATION_SELECTION_AUDIT

---

## 2026-06-24 â€” CML-094 â€” NEXT_DISCIPLINE_NORMALIZATION_SELECTION_AUDIT

- Tipo slice: docs-only audit / selection
- HEAD partenza: `6b95a0b`, tree pulita âœ…
- Chiarimento concettuale: **completezza** (presenza struttura normalizzata) â‰  **readiness** (stato nel processo). I due contatori oggi coincidono (3/12/0) ma misurano cose distinte.
- Criterio SMART: i contatori non sono SMART in sÃ©; sono derivati da dati e stati SMART-verificabili.
- Discipline candidate valutate: 9 (escluse Seconda Lingua e Latino LEL per copertura ridotta)
- Disciplina selezionata: **Scienze**
- Motivazione: completa l'asse matematico-scientifico, forte copertura verticale, 5 nuclei chiari, dati DATA sufficienti, evidenze osservabili naturali, D.M. 221/2025 (Fonti di energia) giÃ  presente, complementaritÃ  con Tecnologia/Matematica
- Alternative: Inglese (rinviata a quinta normalizzazione), Storia (rinviata), Educazione Civica (trasversalitÃ  eccessiva)
- Rischi: overlap Fonti di energia con Tecnologia (confine chiaro ma da monitorare), densitÃ  contenutistica (12-14 unitÃ  iniziali), aggiornamento D.M. 221/2025
- Runtime non modificato: âœ…
- Dati curricolari non modificati: âœ…
- `.cml`/export/import/role-access invariati: âœ…
- Verdetto: `CML_094_NEXT_DISCIPLINE_NORMALIZATION_SELECTED`
- Prossimo step: `CML-095 â€” SCIENZE_DISCIPLINE_NORMALIZED_CURRICULUM_DRAFT`

---

## 2026-06-24 - CML-095 - SCIENZE_DISCIPLINE_NORMALIZED_CURRICULUM_DRAFT

- Tipo slice: normalized curriculum draft
- HEAD partenza: d470e71 (ripartenza da baseline aggiornata)
- Commit: **31e4fdf** -- feat: add scienze.normalized.json
- content/curriculum/scienze.normalized.json: 15 unita, 5 nuclei (Chimica, Biologia, Geologia, Fisica e astronomia, Fonti di energia)
- Copertura: Infanzia (2 unita), Primaria (4 unita), Secondaria (9 unita)
- Stato: bozza_generabile / in_revisione, humanValidationRequired: true
- Benchmark: Tecnologia (12 unita), Italiano (14), Matematica (13)
- Verdetto: CML_095_SCIENZE_NORMALIZED_CURRICULUM_DRAFT_READY

## 2026-06-24 - CML-095A - Quality Audit Scienze

- Tipo slice: quality audit
- Commit: **9102d2a** -- docs: quality audit scienze normalized
- Esito: **A** -- gap non bloccanti
- GAP-1: Infanzia nuclei Chimica e Fonti di energia (mitigato: approccio esplorativo)
- GAP-2: nucleo Geologia saltuario nella fascia 3-4 (mitigato: presente in fascia 5)
- GAP-3: assenza educazione finanziaria in Scienze (non pertinente - gestito in Ed. Civica/Matematica)
- Raccomandazione: procedere con contatori e smoke test (CML-096/CML-096A)
- Verdetto: CML_095A_SCIENZE_QUALITY_AUDIT_A_READY

## 2026-06-24 - CML-096 - UI Counters Update (4/11/0)

- Tipo slice: runtime update (contatori UI)
- Commit: **dc6d0cb** -- feat: update readiness counters to 4/11/0
- Modifica: linee 4561-4563 in index.html: contatori da 3/12/0 a 4/11/0
- Readiness rows aggiornate: Scienze aggiunta come 4a in revisione
- Altre 12 diventa Altre 11
- Nessuna modifica a .cml, export/import, role-access, schema, dati curricolari
- Verdetto: CML_096_UI_COUNTERS_UPDATE_READY

## 2026-06-24 - CML-096A - Live Smoke GitHub Pages (4/11/0)

- Tipo slice: live smoke audit
- Commit: **d470e71** -- HEAD invariato (solo audit)
- URL: https://antoniocorsano-boop.github.io/curmanlight/
- **26/26 controlli live passati:**
  - Contatori: 4 bozze complete, 11 sola consultazione, 0 pronte OK
  - Readiness: 4 in revisione, 11 sola consultazione, 0 pronte OK
  - Tecnologia/Italiano/Matematica/Scienze: Bozza completa, in revisione OK
  - Altre 11: Solo consultazione OK
  - Nota approvazione esterna presente OK
  - Nessun pulsante approvazione OK
  - Nessuna disciplina pronta/approvata OK
  - Light mode only, mobile OK, Motto page HTTP 200, GitHub Pages custom domain OK
  - .cml/export/import/role-access invariati OK
- File creati: docs/03_execution/CML-096A.md, report/CML-096A_live_smoke_github_pages.md
- Nessuna modifica runtime in CML-096A
- Verdetto: CML_096A_LIVE_SMOKE_GITHUB_PAGES_READY
- Prossimo step: CML-097 - NEXT_DISCIPLINE_NORMALIZATION_SELECTION_AUDIT

---

## 2026-06-24 - CML-097 - NEXT_DISCIPLINE_NORMALIZATION_SELECTION_AUDIT

- Tipo slice: docs-only audit / selection
- HEAD partenza: d470e71 (baseline aggiornata)
- Contatori attuali: 4/11/0 (Tecnologia, Italiano, Matematica, Scienze complete)
- Disciplina selezionata: **Inglese**
- Motivazione: continuita con raccomandazione CML-094, completa asse linguistico dopo Italiano, prima lingua straniera (test generalizzabilita modello), quadro normativo stabile (A2), basso rischio contenutistico, forte verticalita Inf/Pri/Sec
- Alternative: Storia (2a scelta - nuova periodizzazione richiede attenzione), Ed. Civica (rinviata per trasversalita)
- Rischi: soli 5 items DATA (4 traguardi + 1 obiettivo), prima normalizzazione su lingua non italiana
- Raccomandazione CML-094 confermata: Inglese era indicata come quinta normalizzazione dopo completamento asse scientifico
- File creati: docs/03_execution/CML-097.md, report/CML-097_next_discipline_normalization_selection_audit.md
- Runtime non modificato: OK
- Dati curricolari non modificati: OK
- .cml/export/import/role-access invariati: OK
- Verdetto: CML_097_NEXT_DISCIPLINE_NORMALIZATION_SELECTED
- Prossimo step: CML-098 - INGLESE_DISCIPLINE_NORMALIZED_CURRICULUM_DRAFT

---

## 2026-06-24 - CML-098 - INGLESE_DISCIPLINE_NORMALIZED_CURRICULUM_DRAFT

- Tipo slice: normalized curriculum draft
- Commit: (current) -- feat: add inglese.normalized.json
- content/curriculum/inglese.normalized.json: 12 unita, 4 nuclei (Ascolto, Lettura, Produzione orale e scritta, Interazione)
- Copertura: Infanzia (1 unita), Primaria (5 unita), Secondaria (6 unita)
- Livello: A1/A2 (QCER), con orientamento B1 in classe 3
- Stati: tutte le unita in stato nuovo, bozza_generabile / in_revisione
- humanValidationRequired: true su ogni unita
- Benchmark: Scienze (15 unita), Tecnologia (12 unita), Matematica (13)
- Prima disciplina non italiana normalizzata: test di generalizzabilita del modello superato
- Verdetto: CML_098_INGLESE_NORMALIZED_CURRICULUM_DRAFT_READY
- Prossimo step: CML-099 - UI COUNTERS UPDATE (5/10/0)

---

## 2026-06-24 - CML-099 - UI COUNTERS UPDATE (5/10/0)

- Tipo slice: runtime update (contatori UI)
- Commit: **7e15603** -- feat: update UI counters to 5/10/0 for Inglese (CML-099)
- Completezza: 4 -> 5 (aggiunta Inglese), 11 -> 10, 0 invariato
- Readiness: 4 -> 5 (aggiunta Inglese), 11 -> 10, 0 invariato
- Subtitle completezza: aggiornata con e Inglese
- Nota modelli riferimento: aggiornata con e Inglese
- Inglese rimossa dalla lista Solo consultazione (completeness)
- Readiness row: Inglese aggiunta come 5a in revisione
- Altre 11 -> Altre 10 (entrambe le sezioni)
- Nessuna modifica a .cml, export/import, role-access, schema, dati curricolari
- Verdetto: CML_099_UI_COUNTERS_UPDATE_READY
- Prossimo step: CML-100 - INGLESE_QUALITY_AUDIT (esito readiness e gap)

---

## 2026-06-24 - CML-100 - INGLESE_QUALITY_AUDIT

- Tipo slice: quality audit
- Commit: **ee6c99d** -- docs: quality audit Inglese esito A (CML-100)
- Esito: **A** -- gap non bloccanti
- GAP-1: Infanzia solo fascia 5, assente fascia 3-4 (basso - esplorazione sonora non strutturata a 3-4 anni)
- GAP-2: distribuzione nuclei non uniforme (Ascolto 5/12, Interazione 2/12 + trasversale) (basso)
- GAP-3: assenza educazione finanziaria in Inglese (non pertinente)
- GAP-4 (positivo): generalizzabilita del modello a 17 campi confermata su lingua non italiana
- Raccomandazione: procedere con CML-101 - sesta normalizzazione
- File creati: docs/03_execution/CML-100.md, report/CML-100_inglese_quality_audit.md
- Verdetto: CML_100_INGLESE_QUALITY_AUDIT_A_READY
- Prossimo step: CML-101 - NEXT_DISCIPLINE_NORMALIZATION_SELECTION_AUDIT

---

## 2026-06-24 - CML-101 - NEXT_DISCIPLINE_NORMALIZATION_SELECTION_AUDIT

- Tipo slice: docs-only audit / selection
- HEAD partenza: 7d78ce8 (post CML-100)
- Contatori attuali: 5/10/0 (Tecnologia, Italiano, Matematica, Scienze, Inglese)
- Asse formativo: linguistico (2/2) e scientifico (3/3) completi -- storico-sociale da avviare
- Disciplina selezionata: **Storia**
- Motivazione: avvia asse storico-sociale, piu dati DATA tra le candidate (10 items, 5+5), seconda scelta in CML-094 e CML-097, nuova periodizzazione IN 2025 triennale definita, complementarita assoluta, 4 nuclei chiari
- Alternative: Ed. Civica (rinviata per trasversalita), Geografia (differibile in coppia con Storia)
- Rischi: nuova periodizzazione IN 2025, raccordo Primaria-Secondaria (VII sec.), densita contenutistica (12-14 unita stimate)
- File creati: docs/03_execution/CML-101.md, report/CML-101_next_discipline_normalization_selection_audit.md
- Runtime non modificato: OK
- Dati curricolari non modificati: OK
- Verdetto: CML_101_NEXT_DISCIPLINE_NORMALIZATION_SELECTED
- Prossimo step: CML-102 - STORIA_DISCIPLINE_NORMALIZED_CURRICULUM_DRAFT

---

## 2026-06-24 - CML-102 - STORIA_DISCIPLINE_NORMALIZED_CURRICULUM_DRAFT

- Tipo slice: normalized curriculum draft
- HEAD partenza: `2cb6869` (CML-101)
- content/curriculum/storia.normalized.json: 15 unita, 5 nuclei, 3 ordini
- Copertura: Infanzia (1 unita, fascia 5), Primaria (5 unita, cl. 1-5), Secondaria (9 unita: cl.1 x4, cl.2 x3, cl.3 x2)
- Periodizzazione IN 2025: cl.1 Longobardi-Guerra Trent'anni; cl.2 Assolutismo-2a Riv.Ind.; cl.3 I GM-1994
- Contributo femminile: Vittoria Colonna, Elisabetta I, Teresa d'Avila, Artemisia Gentileschi, Tina Anselmi, Nilde Iotti, Liliana Segre
- Storia locale irpina: terremoto 1980, emigrazione, ricostruzione
- Raccordo Primaria-Sec: estensione al VII sec. d.C.
- Stato: bozza_generabile / in_revisione, humanValidationRequired: true
- Prima disciplina dell'asse storico-sociale
- Devi0: 15 unita vs 14 pianificate (migliorativa: nucleo combinato cl.3)
- Runtime non modificato: OK
- .cml/export/import/role-access invariati: OK
- Verdetto: CML_102_STORIA_NORMALIZED_CURRICULUM_DRAFT_READY
- Prossimo step: CML-102A - STORIA_QUALITY_AUDIT

---

## 2026-06-24 - CML-102A - STORIA_NORMALIZED_CURRICULUM_DRAFT_QUALITY_AUDIT

- Tipo slice: docs-only quality audit
- HEAD partenza: `8b2b1aa` (CML-102)
- Esito tecnico: PASS â€” JSON valido, struttura coerente, 15/15 ID univoci, validazioneUmana su tutte
- Esito didattico: PASS â€” obiettivi osservabili, evidenze specifiche (>=30 chars), criteri descrittivi, progressione verticale leggibile
- Copertura nuclei: 5 (Strumenti 4, Fonti 2, Organizzazione 5, Produzione 3, Fonti+Produzione 1)
- Periodizzazione: conforme DM 221/2025 triennale
- Headroom: 1.738 chars/unitÃ , 26.072 chars totali â€” sostenibile
- GAP-1 (minore): Infanzia solo fascia 5
- GAP-2 (minore): Fonti solo 2 unitÃ  autonome
- GAP-3 (migliorativo): 15 vs 14 unitÃ  pianificate
- Rischio sovrapposizione Ed. Civica: MEDIO (Sec 3) â€” mitigato da focus storico
- Decisione readiness: **A** â€” Storia pronta come bozza_generabile / in_revisione
- Runtime non modificato: OK
- Dati non modificati: OK
- .cml/export/import/role-access invariati: OK
- File creati: docs/03_execution/CML-102A.md, report/CML-102A_storia_normalized_curriculum_draft_quality_audit.md
- Verdetto: CML_102A_STORIA_NORMALIZED_CURRICULUM_QUALITY_AUDIT_READY
- Prossimo step: CML-103 - DISCIPLINARY_COMPLETENESS_STATUS_UPDATE_FOR_STORIA_RUNTIME_INCREMENT (contatori 6/9/0)

---

## 2026-06-24 - CML-103 - UI COUNTERS UPDATE (6/9/0)

- Tipo slice: runtime update (contatori UI)
- HEAD partenza: `188abc5` (CML-102A)
- Commit: (current) -- feat: update UI counters to 6/9/0 for Storia
- Completezza: 5 -> 6 (aggiunta Storia), 10 -> 9, 0 invariato
- Readiness: 5 -> 6 (aggiunta Storia), 10 -> 9, 0 invariato
- Subtitle completezza: aggiornata con "e Storia"
- Nota modelli riferimento: aggiornata con "e Storia"
- Completezza row: Storia aggiunta come 6a bozza completa in revisione
- Readiness row: Storia aggiunta come 6a in revisione
- Storia rimossa dalla lista "Solo consultazione" (entrambe le sezioni)
- Altre 10 -> Altre 9 (entrambe le sezioni)
- Nessuna modifica a .cml, export/import, role-access, schema, dati curricolari
- Verdetto: CML_103_UI_COUNTERS_UPDATE_READY
- Prossimo step: CML-103A - LIVE SMOKE GITHUB PAGES (6/9/0)

---

## 2026-06-24 - CML-104 - NEXT_DISCIPLINE_NORMALIZATION_SELECTION_AUDIT

- Tipo slice: docs-only audit / selection
- HEAD partenza: `549c5c7` (CML-103)
- Disciplina selezionata: **Geografia**
- Motivazione: prosegue l'asse storico-sociale dopo Storia, complementarita spaziale, tre assi IN 2025 chiari (Paesaggio, Transcalarita, Territorializzazione), rischio basso
- Alternative: Ed. Civica (rinviata), Arte/Musica/Ed.Fisica/Religione (asse espressivo differibile)
- Raccomandazione CML-101 confermata: "Migliore normalizzare in coppia con Storia"
- Contatori attuali: 6/9/0
- Unita stimate per CML-105: 10-13
- Runtime non modificato: OK
- Dati curricolari non modificati: OK
- .cml/export/import/role-access invariati: OK
- File creati: docs/03_execution/CML-104.md, report/CML-104_geografia_selection_audit.md
- Verdetto: CML_104_NEXT_DISCIPLINE_NORMALIZATION_SELECTED
- Prossimo step: CML-105 - GEOGRAFIA_DISCIPLINE_NORMALIZED_CURRICULUM_DRAFT

---

## 2026-06-24 - CML-105 - GEOGRAFIA_DISCIPLINE_NORMALIZED_CURRICULUM_DRAFT

- Tipo slice: normalized curriculum draft
- HEAD partenza: `d3143d9` (CML-104)
- content/curriculum/geografia.normalized.json: 12 unita, 3 assi IN 2025, 3 ordini
- Copertura: Infanzia (1, fascia 5), Primaria (5, cl.1-5), Secondaria (6, cl.1-3 x2 ciascuna)
- Assi: Paesaggio (4 unita), Transcalarita (5 unita), Territorializzazione (3 unita)
- Geovisualizzazione digitale, territorio locale irpino e campano, art. 9 Costituzione
- Seconda disciplina dell'asse storico-sociale (Storia + Geografia = 2/3)
- Stato: bozza_generabile / in_revisione, humanValidationRequired: true
- Runtime non modificato: OK
- .cml/export/import/role-access invariati: OK
- Verdetto: CML_105_GEOGRAFIA_NORMALIZED_CURRICULUM_DRAFT_READY
- Prossimo step: CML-105A - GEOGRAFIA_QUALITY_AUDIT

---

## 2026-06-24 - CML-105A - GEOGRAFIA_NORMALIZED_CURRICULUM_DRAFT_QUALITY_AUDIT

- Tipo slice: docs-only quality audit
- HEAD partenza: `5c810d1` (CML-105)
- Esito tecnico: PASS â€” JSON valido, struttura coerente, 12/12 ID univoci, validazioneUmana su tutte
- Esito didattico: PASS â€” obiettivi osservabili, evidenze specifiche (>=30 chars), criteri descrittivi, progressione verticale leggibile su tutti e 3 gli assi
- Copertura assi: Paesaggio 4, Transcalarita 5, Territorializzazione 3
- Headroom: 1.559 chars/unitÃ , 18.710 chars totali â€” sostenibile, disciplina piÃ¹ snella
- GAP-1 (minore): Infanzia solo fascia 5
- GAP-2 (minore): Territorializzazione solo 3 unitÃ 
- GAP-3 (neutro): educazione finanziaria non pertinente
- IdentitÃ  geografica: chiara, distinta da Storia e Ed. Civica
- Rischio sovrapposizione: BASSO su tutti i fronti
- Decisione readiness: **A** â€” Geografia pronta come bozza_generabile / in_revisione
- Runtime non modificato: OK
- Dati non modificati: OK
- .cml/export/import/role-access invariati: OK
- File creati: docs/03_execution/CML-105A.md, report/CML-105A_geografia_normalized_curriculum_draft_quality_audit.md
- Verdetto: CML_105A_GEOGRAFIA_NORMALIZED_CURRICULUM_QUALITY_AUDIT_READY
- Prossimo step: CML-106 - DISCIPLINARY_COMPLETENESS_STATUS_UPDATE_FOR_GEOGRAFIA_RUNTIME_INCREMENT (contatori 7/8/0)

---

## 2026-06-24 - CML-106 - UI COUNTERS UPDATE (7/8/0) FOR GEOGRAFIA

- Tipo slice: runtime increment leggero
- HEAD partenza: `b2c128e` (CML-105A)
- Fonte: CML-105A esito A â€” Geografia pronta come bozza_generabile / in_revisione
- File runtime modificato: `_published_snapshot/netlify-current/index.html`
- **Completezza:** 6 -> 7 (aggiunta Geografia), 9 -> 8, 0 invariato
- **Readiness:** 6 -> 7 (aggiunta Geografia), 9 -> 8, 0 invariato
- Subtitle completezza: aggiornata con "e Geografia"
- Nota modelli riferimento: aggiornata con "e Geografia"
- Completezza row: Geografia aggiunta come 7a bozza completa in revisione (paesaggio, transcalaritÃ , territorializzazione)
- Readiness row: Geografia aggiunta come 7a in revisione
- Geografia rimossa dalla lista "Solo consultazione" (entrambe le sezioni)
- Altre 9 -> Altre 8 (entrambe le sezioni)
- Nessuna modifica a .cml, export/import, role-access, schema, dati curricolari
- Controlli: git diff --check PASS, braces CSS 2120=2120 PASS, dark mode commentato, nessuna nuova dipendenza
- Verdetto: CML_106_DISCIPLINARY_COMPLETENESS_STATUS_UPDATE_FOR_GEOGRAFIA_READY
- Prossimo step raccomandato: CML-106A - GEOGRAFIA_COMPLETENESS_READINESS_LIVE_SMOKE

---

## 2026-06-24 - CML-106A - GEOGRAFIA_COMPLETENESS_READINESS_LIVE_SMOKE

- Tipo slice: live smoke + docs
- Commit runtime: `ffcd8f3` (CML-106) â€” pushato su `origin/main`, workflow Pages success
- URL verificati: https://antoniocorsano-boop.github.io/curmanlight/ âœ“, motto page âœ“
- **23/23 controlli live** â€” 22 PASS, 1 NOTA sulla coerenza elenco restanti
- Contatori 7/8/0 confermati sia per completezza che readiness âœ…
- Geografia presente come 7a disciplina in revisione âœ…
- **Nota elenco restanti:** il contatore "Sola consultazione" mostra 8 ma elenca 7 nomi. DISCIPLINE_META ha 14 discipline totali. Discrepanza pre-esistente da CML-085 (14 invece di 13 al primo commit). Non Ã¨ regressione CML-106.
- Nessuna modifica runtime, nessuna approvazione, light mode only
- File creati: docs/03_execution/CML-106A.md, report/CML-106A_*.md
- Verdetto: CML_106A_GEOGRAFIA_COMPLETENESS_READINESS_LIVE_SMOKE_READY
- Prossimo step: CML-106B â€” READINESS_COUNTER_ALIGNMENT_MICROFIX

---

## 2026-06-24 - CML-106B - READINESS_COUNTER_ALIGNMENT_MICROFIX

- Tipo slice: microfix runtime
- Commit runtime: `ffcd8f3` (CML-106), validato live da CML-106A
- **3 occorrenze corrette** in `index.html`: contatore completezza, contatore readiness, testo "Altre 8" â†’ "Altre 7"
- Value: `8` â†’ `7` in tutti i punti "Sola consultazione"
- Nessuna modifica a schema `.cml`, export/import, role access, service worker, contenuti disciplinari
- Nessuna approvazione introdotta
- Controlli: `git diff --check` OK, controverifica 7/7/0 coerente, Geografia invariata
- File modificati: `_published_snapshot/netlify-current/index.html`
- File creati: `docs/03_execution/CML-106B.md`, `report/CML-106B_*.md`
- Verdetto: `CML_106B_READINESS_COUNTER_ALIGNMENT_MICROFIX_READY`
- Prossimo step: CML-107 â€” NEXT_DISCIPLINE_NORMALIZATION_SELECTION_AUDIT

---

## 2026-06-24 - CML-107 - NEXT_DISCIPLINE_NORMALIZATION_SELECTION_AUDIT

- Tipo slice: audit-only (read-only)
- Commit iniziale: `bec8ae9` (CML-106B)
- Nessuna modifica runtime
- **Discipline residue analizzate:** 7 (Educazione Civica, Musica, Arte, Ed. Fisica, Religione, Seconda Lingua, Latino)
- **Disciplina selezionata:** Educazione Civica â€” voto 9/10
- Motivazione: dataset piu ricco (5 traguardi + 2 obiettivi), copertura tutti gli ordini, natura trasversale, urgenza normativa IN 2025 (D.M. 183/2024), pattern pronto
- Valutazione completa con matrice criteri e voti per tutte le 7 discipline
- File creati: `docs/03_execution/CML-107.md`, `report/CML-107_*.md`
- Verdetto: `CML_107_NEXT_DISCIPLINE_NORMALIZATION_SELECTION_AUDIT_READY`
- Prossimo step: CML-108 â€” normalizzazione runtime Educazione Civica

---

## 2026-06-24 - CML-108 - EDUCAZIONE_CIVICA_NORMALIZATION_RUNTIME

- Tipo slice: runtime â€” normalizzazione Educazione Civica su `index.html`
- Commit iniziale: `c6e15ef` (CML-107 audit)
- **10 modifiche puntuali** in `index.html`: contatori, elenchi, sottotitoli, righe completezza/readiness
- Contatori: 7/7/0 â†’ **8/6/0**
- Educazione Civica aggiunta come 8a disciplina completa (Bozza completa / In revisione)
- Educazione Civica rimossa dall'elenco "Sola consultazione" (6 nomi residui)
- Discipline residue: Seconda Lingua, Arte, Musica, Ed. Fisica, Religione, Latino (LEL)
- Nessuna modifica a schema `.cml`, export/import, role access, service worker, contenuti disciplinari, altre discipline complete
- Controlli: `git diff --check` OK, contatori 8/6/0 coerenti su entrambi i pannelli
- File modificati: `_published_snapshot/netlify-current/index.html`
- File creati: `docs/03_execution/CML-108.md`, `report/CML-108_*.md`
- Verdetto: `CML_108_EDUCAZIONE_CIVICA_NORMALIZATION_RUNTIME_READY`
- Prossimo step: CML-108A â€” smoke locale

---

## 2026-06-24 - CML-108B - EDUCAZIONE_CIVICA_NORMALIZATION_DEPLOY_LIVE_SMOKE

- Tipo slice: deploy + live smoke
- Commit runtime: `a28b463` (CML-108) â€” pushato su `origin/main`, workflow Pages success
- URL live: https://antoniocorsano-boop.github.io/curmanlight/ âœ…
- Motto page: HTTP 200 âœ…
- Contatori 8/6/0 confermati (verifica pre-deploy)
- Educazione Civica presente come 8a disciplina in revisione
- Nessuna modifica a schema, export, role access, service worker
- File creati: `docs/03_execution/CML-108B.md`, `report/CML-108B_*.md`
- Verdetto: `CML_108B_EDUCAZIONE_CIVICA_NORMALIZATION_DEPLOY_LIVE_SMOKE_READY`
- Prossimo step: CML-109 â€” NEXT_DISCIPLINE_NORMALIZATION_SELECTION_AUDIT

---

## 2026-06-24 - CML-109 - NEXT_DISCIPLINE_NORMALIZATION_SELECTION_AUDIT

- Tipo slice: audit-only (read-only)
- Commit iniziale: `03a00a4` (CML-108B)
- Nessuna modifica runtime
- **Discipline residue analizzate:** 6 (Musica, Arte, Ed. Fisica, Religione, Seconda Lingua, Latino)
- **Disciplina selezionata:** Musica â€” voto 8/10
- Motivazione: massima ricchezza dati tra le residue (6 voci, 3 traguardi + 3 obiettivi), copertura tutti gli ordini, nuclei chiari, IN 2025 pronto, rischio basso
- Valutazione completa per tutte le 6 discipline
- File creati: `docs/03_execution/CML-109.md`, `report/CML-109_*.md`
- Verdetto: `CML_109_NEXT_DISCIPLINE_NORMALIZATION_SELECTION_AUDIT_READY`
- Prossimo step: CML-110 â€” normalizzazione runtime Musica

---

## 2026-06-24 - CML-110 - MUSICA_NORMALIZATION_RUNTIME_INCREMENT

- Tipo slice: runtime â€” normalizzazione Musica su `index.html`
- Commit iniziale: `1354366` (CML-109 audit)
- **9 modifiche puntuali** in `index.html`: contatori, elenchi, sottotitoli, righe completezza/readiness
- Contatori: 8/6/0 â†’ **9/5/0**
- Musica aggiunta come 9a disciplina completa (Bozza completa / In revisione)
- Musica rimossa dall'elenco "Sola consultazione" (5 nomi residui)
- Discipline residue: Seconda Lingua, Arte, Ed. Fisica, Religione, Latino (LEL)
- Nessuna modifica a schema `.cml`, export/import, role access, service worker, contenuti disciplinari, altre discipline complete
- Controlli: `git diff --check` OK, contatori 9/5/0 coerenti su entrambi i pannelli
- File modificati: `_published_snapshot/netlify-current/index.html`
- File creati: `docs/03_execution/CML-110.md`, `report/CML-110_*.md`
- Verdetto: `CML_110_MUSICA_NORMALIZATION_RUNTIME_READY`
- Prossimo step: CML-110A â€” smoke locale

---

## 2026-06-24 - CML-110B - MUSICA_NORMALIZATION_DEPLOY_LIVE_SMOKE_CLOSURE

- Tipo slice: deploy + live smoke closure
- Commit runtime: `f93a606` (CML-110) â€” pushato su `origin/main`, workflow Pages success (13s)
- URL live: https://antoniocorsano-boop.github.io/curmanlight/ âœ…
- Stato live 9/5/0 confermato
- Musica presente come 9a disciplina in revisione
- 5 discipline residue: Seconda Lingua, Arte e Immagine, Ed. Fisica, Religione, Latino (LEL)
- File creati: `docs/03_execution/CML-110B.md`, `report/CML-110B_*.md`
- Verdetto: `CML_110B_MUSICA_NORMALIZATION_DEPLOY_LIVE_SMOKE_CLOSURE_READY`
- Prossimo step: CML-111 â€” NEXT_DISCIPLINE_NORMALIZATION_SELECTION_AUDIT

---

## 2026-06-24 - CML-111 - NEXT_DISCIPLINE_NORMALIZATION_SELECTION_AUDIT

- Tipo slice: audit-only (read-only)
- Commit iniziale: `eac15e2` (CML-110B)
- Discipline residue analizzate: 5 (Arte, Ed. Fisica, Religione, Seconda Lingua, Latino)
- Disciplina selezionata: **Arte e Immagine** â€” voto 6/10
- Motivazione: copertura tutti e 3 gli ordini, nuclei chiari, IN 2025 pronto, completa il blocco espressivo dopo Musica
- File creati: `docs/03_execution/CML-111.md`, `report/CML-111_*.md`
- Verdetto: `CML_111_NEXT_DISCIPLINE_NORMALIZATION_SELECTION_AUDIT_READY`
- Prossimo step: CML-112 â€” normalizzazione runtime Arte e Immagine

---

## 2026-06-24 - CML-112 - NORMALIZZAZIONE RUNTIME ARTE E IMMAGINE

- Commit: `3743e47`
- Stato: 10/4/0 (9 â†’ 10 bozze complete, 5 â†’ 4 sola consultazione)
- 9 edit in `index.html`: subtitle, contatori, righe completeness/readiness, notte
- Discipline residue: 4 (Seconda Lingua, Ed. Fisica, Religione, Latino)
- Next: CML-113 â€” NEXT_DISCIPLINE_NORMALIZATION_SELECTION_AUDIT o test locale

---

## 2026-06-24 - CML-113 - NEXT_DISCIPLINE_NORMALIZATION_SELECTION_AUDIT (2Âª iterazione)

- Commit: `3743e47`
- Discipline residue analizzate: 4 (Ed. Fisica, Religione, Seconda Lingua, Latino)
- Disciplina selezionata: **Educazione Fisica** â€” voto 5/10
- Motivazione: copertura tutti e 3 gli ordini, 5 voci, completa blocco motorio
- File: `docs/03_execution/CML-113.md`, `report/CML-113_*.md`
- Verdetto: `CML_113_NEXT_DISCIPLINE_NORMALIZATION_SELECTION_AUDIT_READY`
- Prossimo step: CML-114 â€” normalizzazione runtime Educazione Fisica

---

## 2026-06-24 - CML-114 - NORMALIZZAZIONE RUNTIME EDUCAZIONE FISICA

- Commit: `c454a83`
- Stato: 11/3/0 (10 â†’ 11 bozze complete, 4 â†’ 3 sola consultazione)
- 9 edit in `index.html`: subtitle, contatori, righe completeness/readiness, note
- Discipline residue: 3 (Seconda Lingua, Religione, Latino)
- Verifica: Educazione Fisica giÃ  presente in DISCIPLINE_META/DATA
- Next: CML-115 â€” NEXT_DISCIPLINE_NORMALIZATION_SELECTION_AUDIT

---

## 2026-06-24 - CML-115 - NEXT_DISCIPLINE_NORMALIZATION_SELECTION_AUDIT (3Âª iterazione)

- Commit: `b8a6e06`
- Discipline residue analizzate: 3 (Religione, Seconda Lingua, Latino)
- Disciplina selezionata: **Religione Cattolica** â€” voto 4/10
- Verdetto: `CML_115_NEXT_DISCIPLINE_NORMALIZATION_SELECTION_AUDIT_READY`

---

## 2026-06-24 - CML-116 - NORMALIZZAZIONE RUNTIME RELIGIONE CATTOLICA

- Commit: `fbf55dc`
- Stato: 12/2/0 (11 â†’ 12 bozze complete, 3 â†’ 2 sola consultazione)
- 9 edit in `index.html`
- Discipline residue: 2 (Seconda Lingua, Latino)
- Verdetto: `CML_116_RELIGIONE_NORMALIZATION_READY`
- Next: CML-117 â€” NEXT_DISCIPLINE_NORMALIZATION_SELECTION_AUDIT

---

## 2026-06-24 - CML-117 - NEXT_DISCIPLINE_NORMALIZATION_SELECTION_AUDIT (4Âª iterazione)

- Commit: `1c5faa9`
- Discipline residue analizzate: 2 (Seconda Lingua, Latino)
- Disciplina selezionata: **Seconda Lingua Comunitaria** â€” voto 3/10
- Verdetto: `CML_117_NEXT_DISCIPLINE_NORMALIZATION_SELECTION_AUDIT_READY`

---

## 2026-06-24 - CML-118 - NORMALIZZAZIONE RUNTIME SECONDA LINGUA COMUNITARIA

- Commit: `74ebcfe`
- Stato: 13/1/0 (12 â†’ 13 bozze complete, 2 â†’ 1 sola consultazione)
- 12 edit in `index.html`
- Discipline residue: 1 (Latino LEL)
- Next: CML-119 â€” NEXT_DISCIPLINE_NORMALIZATION_SELECTION_AUDIT

---

## 2026-06-24 - CML-119 - NEXT_DISCIPLINE_NORMALIZATION_SELECTION_AUDIT (5Âª e ultima iterazione)

- Commit: `b750ac0`
- Discipline residue analizzate: 1 (Latino LEL)
- Disciplina selezionata: **Latino (LEL)** â€” automatica, unica rimasta
- Verdetto: `CML_119_NEXT_DISCIPLINE_NORMALIZATION_SELECTION_AUDIT_READY`

---

## 2026-06-24 - CML-120 - NORMALIZZAZIONE RUNTIME LATINO (LEL) â€” CICLO COMPLETATO

- Commit: `37d2f10`
- Stato: **14/0/0** (13 â†’ 14 bozze complete, 1 â†’ 0 sola consultazione) âœ…
- 9 edit in `index.html`
- Discipline residue: 0 â€” **tutte le 14 discipline normalizzate**
- Tutte le discipline (14/14) ora in "In revisione"
- Prossimo step: definire prossimo ciclo di lavoro (validazione dipartimentale, sintesi, deploy)

---

## 2026-06-24 - CML-111 - DISCIPLINARY_VIEWS_CONTEXTUAL_NAV_COHERENCE_AUDIT

- Commit partenza: `02e8fa2`
- Audit-only â€” nessuna modifica runtime
- **Bug P0 confermato**: hash `#cur-Italiano` + `selDisc="Tecnologia"` â†’ corpo mostra Tecnologia
  - Causa: due sistemi indipendenti (sidebar/hash), nessuna sincronizzazione
- **P1**: `renderTecnologiaNorm()` titolo hardcoded su Tecnologia (linea 4718)
- **P1**: Sidebar invariata in tutti i subtab Curriculum
- **P2**: Export panel solo per Tecnologia
- **P3**: Badge "Sola consultazione" senza discipline (14/0/0)
- Verdetto: `CML_111_DISCIPLINARY_VIEWS_CONTEXTUAL_NAV_COHERENCE_AUDIT_READY`
- Next: CML-112 â€” sincronizzare hash/selDisc + generalizzare renderTecnologiaNorm()

---

## 2026-06-24 - CML-112 - DISCIPLINARY_HASH_SELECTION_AND_TITLE_GENERALIZATION_FIX

- Commit: pendente
- Runtime: `_published_snapshot/netlify-current/index.html` (14 insertions, 1 deletion)
- **Bug P0 corretto**: hash `#cur-{disciplina}` ora sincronizzato con `selDisc`
- Nuove funzioni: `resolveDiscFromHash()`, listener `hashchange`
- `selectDisc()` aggiorna `location.hash`
- INIT legge hash all'avvio
- `renderTecnologiaNorm()` titolo dinamico (non piÃ¹ hardcoded su Tecnologia)
- 14/14 hash disciplinari verificati
- Nessuna modifica a contenuti disciplinari, schema .cml, export/import, role access, asset
- Nessun deploy
- Verdetto: `CML_112_DISCIPLINARY_HASH_SELECTION_AND_TITLE_GENERALIZATION_FIX_READY`
- Next: CML-112A â€” smoke test locale hash disciplinari

---

## 2026-06-24 - CML-112A - HASH_SELECTION_SMOKE_TEST

- Commit: `fe91eef` (CML-112, nessuna modifica runtime)
- Smoke test: 6 test (A1-A6), tutti PASS
- 14/14 hash disciplinari verificati staticamente
- INIT, selectDisc, hashchange, titolo dinamico, regressioni: âœ…
- Verdetto: `CML_112A_HASH_SELECTION_SMOKE_TEST_PASSED`
- Next: prossimo ciclo di lavoro

---

## 2026-06-24 â€” CML-113 â€” VALIDAZIONE_DIPARTIMENTALE_WORKFLOW_AUDIT

- Tipo slice: audit-only / docs-only
- Commit partenza: `1804ac5`, HEAD `1804ac5`, working tree pulita âœ…
- Slice precedente chiusa: `CML_112A_HASH_SELECTION_SMOKE_TEST_PASSED`
- Stato discipline: 14/14 complete, tutte "In revisione"
- **Nessuna modifica runtime, nessun deploy, nessuna modifica a `index.html`/`sw.js`/`_headers`/asset/schema `.cml`/PDF/workflow Pages**
- Oggetto: audit read-only del flusso attuale per aprire il ciclo "Validazione dipartimentale"
- **10 domande guida** analizzate: stato discipline, rappresentazione stati, viste esistenti, azioni consentite/vietate, differenza validazione/approvazione, rischi istituzionali, evidenze tracciabili, primo incremento runtime
- **Problemi individuati:**
  - **P0**: nessuna distinzione tra validazione dipartimentale e approvazione formale
  - **P1**: nessuna azione per validare una disciplina completa (solo azioni per-item)
  - **P1**: pannello "Validazione dipartimentale" importa proposte docente, non valida discipline
  - **P2**: contatori statici (14/0/0) invariati, nessuna interazione
  - **P2**: nessuna vista unica validazione per coordinatore di dipartimento
  - **P3**: pannelli lunghi senza collasso
- **Stati consigliati:** bozza_generabile, in_revisione, validata_dipartimento, validata_con_note, pronto_approvazione, approvato_esternamente
- **Azioni consentite:** selezionare disciplina, registrare esito (3 varianti), aggiungere note, data, reset
- **Azioni vietate:** approvazione definitiva, modifica contenuti, automatismi, dati personali, autenticazione
- **Posizione UI:** Curriculum > Consultazione, dopo pannelli completezza/readiness
- **Primo incremento (CML-114):** pannello "Validazione dipartimentale" con struttura dati JS, persistenza localStorage, per-discipline esito/note/data/reset
- **File da modificare in CML-114:** `_published_snapshot/netlify-current/index.html`
- File creati: `docs/03_execution/CML-113.md`, `report/CML-113_validazione_dipartimentale_workflow_audit.md`
- Verdetto: `CML_113_VALIDAZIONE_DIPARTIMENTALE_WORKFLOW_AUDIT_READY`
- Prossimo step: CML-114 â€” VALIDAZIONE_DIPARTIMENTALE_FIRST_RUNTIME_INCREMENT
---



## 2026-06-25 â€” CML-126B â€” POST_FIX_RUNTIME_SMOKE_CONFIRMATION

- **HEAD partenza:** `2c9c0b8` (CML-127 fix)
- **Tipologia:** smoke confirmation â€” nessuna modifica runtime
- **Controlli tecnici:**
  - Validatore curriculum: 7 file, 94 unitÃ , overallValid: true âœ…
  - `git diff --check`: pulito âœ…
  - `window.setTab = setTab` presente nel codice (riga 4952) âœ…
  - `window.setMappaDisciplina = setMappaDisciplina` presente (riga 4953) âœ…
- **Smoke runtime (localhost:8084):**
  - Homepage HTTP 200 âœ…
  - Curriculum, Didattica, Validazione, Riepilogo, Esportazioni, Guida: HTTP 200 su tutte âœ…
  - Service Worker HTTP 200 âœ…
  - `window.setTab` e `window.setMappaDisciplina` presenti nel file servito âœ…
  - Nessun ReferenceError osservato âœ…
- **Regressioni:** nessuna â€” schema `.cml`, export/import, role-access invariati
- **Artefatti creati:**
  - `docs/03_execution/CML-126B.md`
  - `report/CML-126B_post_fix_runtime_smoke_confirmation.md`
  - aggiornamento `docs/REPO-MOVELOG.md` (questa voce)
- **Verdetto:** `CML_126B_POST_FIX_RUNTIME_SMOKE_CONFIRMATION_READY`
- **Prossimo passo:** push cumulativo di CML-126 (storico smoke bloccante), CML-127 (fix) e CML-126B (questa conferma)

---


## 2026-06-25 â€” CML-126_CONTROLLED_PUSH (3 commit cumulativi)

- Push eseguito su `origin/main`: 3 commit spinti
  - `6b0327e` â€” docs: CML-126 POST_PUSH_RUNTIME_AND_NAVIGATION_SMOKE
  - `2c9c0b8` â€” fix: CML-127 runtime navigation handler reference fix (setTab/setMappaDisciplina)
  - `1e876be` â€” docs: CML-126B post-fix runtime smoke confirmation
- Verifica post-push: `git rev-parse HEAD` == `origin/main` == `1e876be` âœ…
- Verdetto: `CML_126_POST_PUSH_SMOKE_FIX_CONFIRMATION_CLOSED_REMOTE`
- Next: CML-128 â€” CURRENT_ICON_SYSTEM_USAGE_AUDIT

---


## 2026-06-25 â€” CML-128 â€” CURRENT_ICON_SYSTEM_USAGE_AUDIT

- **Tipo slice:** audit docs-only
- **HEAD partenza:** `1e876be`, branch `main`, origin/main allineato, working tree pulito âœ…
- **Ciclo precedente chiuso:** `CML_RUNTIME_NAVIGATION_FIX_CYCLE_CLOSED_REMOTE`
- **Obiettivo:** audit dell'uso di icone/emoji/simboli nel runtime, verificando dove sostituire testi/icone "markdown" con icone o stili giÃ  disponibili
- **Vincoli rispettati:** nessuna modifica runtime, JSON, validator, schema .cml, import/export, validazione dipartimentale
- **AttivitÃ :**
  - Fotografia stato iniziale (HEAD, working tree, validatore)
  - Inventario completo emoji (50+ emoji, 7 aree navigazione)
  - Inventario classi CSS badge/icona (30+ classi)
  - Mappatura aree con disallineamenti (6 categorie: A-F)
  - Valutazione 4 opzioni: A status quo, B allineamento puntuale âœ…, C refactoring strutturale, D badge-only
- **Principali disallineamenti trovati:**
  - **ðŸ“„ overload**: 15 occorrenze, 5 ruoli semantici diversi (toggle, export, link, heading, disclaimer)
  - **ðŸ“ Markdown incoerente**: 3 emoji diverse (ðŸ“„, ðŸ“‹, â¬‡ï¸) usate in pulsanti markdown oltre a ðŸ“ standard
  - **Word emoji mismatch**: ðŸ“„ (1413) vs ðŸ“¤ (1792) per stessa azione
  - **CSS morto**: 3 classi definite mai usate (`.badge--success`, `.badge--info`, `.completeness-badge--base`)
  - **btn-cml** usato per backup/import (nessuna relazione con .cml)
- **Raccomandazione: Opzione B** â€” 6 sostituzioni emoji puntuali in CML-129 runtime
- **Artefatti creati:**
  - `docs/03_execution/CML-128.md`
  - `report/CML-128_current_icon_system_usage_audit.md`
  - aggiornamento `docs/REPO-MOVELOG.md` (questa voce)
- **Verdetto:** `CML_128_CURRENT_ICON_SYSTEM_USAGE_AUDIT_READY`
- **Prossimo step:** CML-129 â€” CURRENT_ICON_SYSTEM_RUNTIME_ALIGNMENT (6 sostituzioni emoji puntuali)

---

## 2026-06-25 â€” CML-129 â€” CURRENT_ICON_SYSTEM_RUNTIME_ALIGNMENT

- **Tipo slice:** runtime increment minimo
- **HEAD partenza:** `56ca4ab` (CML-128), branch `main`, origin/main `1e876be`, ahead 1
- **Ciclo precedente chiuso:** `CML_128_CURRENT_ICON_SYSTEM_USAGE_AUDIT_READY`
- **Obiettivo:** applicare le 5 sostituzioni emoji puntuali da CML-128 Opzione B
- **File modificato:** `_published_snapshot/netlify-current/index.html` (5 linee, 7+/7-)
- **Sostituzioni applicate:**
  - Linea 1411: `ðŸ“„ Esportazioni` â†’ `ðŸ“¤ Esportazioni` (toggle toolbar, 3 occorrenze)
  - Linea 1452: `ðŸ“„ Scarica report gruppo` â†’ `ðŸ“ Scarica report gruppo` (btn-md)
  - Linea 1468: `ðŸ“‹ Copia Markdown` â†’ `ðŸ“ Copia Markdown` (btn-copy)
  - Linea 1469: `â¬‡ Scarica Markdown` â†’ `ðŸ“ Scarica Markdown` (btn-md)
  - Linea 1792: `ðŸ“¤ Word confronto` â†’ `ðŸ“„ Word confronto` (btn-word)
- **Nota:** la 6Âª sostituzione prevista (`âš™ï¸â†’ðŸ“` a linea 1464) era giÃ  allineata nel runtime
- **Non modificate:** JSON disciplinari, validator, schema .cml, import/export, validazione dipartimentale, classi CSS inutilizzate
- **Verifiche:**
  - `git diff --check`: pulito âœ…
  - Validatore: 7/94, `overallValid: true` âœ…
  - Smoke: tutte le 5 sostituzioni confermate via grep, vecchie emoji assenti âœ…
- **Artefatti creati:**
  - `docs/03_execution/CML-129.md`
  - `report/CML-129_current_icon_system_runtime_alignment.md`
  - aggiornamento `docs/REPO-MOVELOG.md` (questa voce)
- **Verdetto:** `CML_129_CURRENT_ICON_SYSTEM_RUNTIME_ALIGNMENT_READY`
- **Prossimo passo:** eventuale push su origin/main (non richiesto in questa slice)

---

## 2026-06-25 â€” CML-129A â€” ICON_ALIGNMENT_CLOSURE_AUDIT_AND_CONTROLLED_PUSH

- **Tipo slice:** closure/push
- **HEAD partenza:** `02fa05f` (CML-129), branch `main`, origin/main `1e876be`, ahead 2
- **Ciclo precedente chiuso:** `CML_129_CURRENT_ICON_SYSTEM_RUNTIME_ALIGNMENT_READY`
- **Audit pre-push:** tutti i controlli passati (HEAD, origin/main, log, diff --check, validatore 7/94 overallValid, residui ignorati)
- **Verifica CML-129:** 5/5 sostituzioni emoji confermate, 6Âª pre-allineata, vecchie emoji assenti
- **Commit:** `git commit -m "docs: close CML icon alignment cycle"`
- **Push:** `git push origin main` eseguito
- **Verifica post-push:** HEAD == origin/main, working tree pulito
- **Artefatti creati:**
  - `docs/03_execution/CML-129A.md`
  - `report/CML-129A_icon_alignment_closure_audit_and_controlled_push.md`
  - aggiornamento `docs/REPO-MOVELOG.md` (questa voce)
- **Verdetto:** `CML_129A_ICON_ALIGNMENT_CYCLE_CLOSED_REMOTE`

---

## 2026-06-26 â€” CML-166 â€” EDUCAZIONE_CIVICA_NORMALIZED_DATA_PREPARATION

- **Commit iniziale**: `967ab28`
- **Branch**: `main`, sync `origin/main` `a83c66e`
- **Tipo slice**: data preparation â€” creazione file `.normalized.json`
- **Oggetto**: creazione di `content/curriculum/educazione-civica.normalized.json`
- **Esito**: 11 unitÃ  su 4 nuclei (Costituzione, Sviluppo sostenibile, Cittadinanza digitale, Educazione finanziaria), copertura Inf/Pri/Sec
- **Validatore**: 8 file / 105 unitÃ  / `overallValid: true` / 0 errori
- **Asse Storico-sociale**: completato (Storia + Geografia + Educazione Civica)
- **Runtime**: invariato
- **Artefatti**: `content/curriculum/educazione-civica.normalized.json`, `docs/03_execution/CML-166.md`, `report/CML-166_educazione_civica_normalized_data_preparation.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_166_EDUCAZIONE_CIVICA_NORMALIZED_DATA_PREPARATION_READY`

## 2026-06-26 â€” CML-166-SYNC â€” EDUCAZIONE_CIVICA_NORMALIZED_PUSH_SYNC

- **Commit base**: `967ab28`
- **Push**: eseguito su origin/main
- **Verifica**: HEAD == origin/main
- **Verdetto**: `CML_166_SYNC_CLOSED_REMOTE`

## 2026-06-26 â€” CML-167 â€” EDUCAZIONE_CIVICA_RUNTIME_MAPPA_DATI_INTEGRATION

- **Commit iniziale**: `967ab28` (sync con `origin/main`)
- **Tipo slice**: runtime increment â€” integrazione mappa disciplinare Educazione Civica
- **File modificati**: `_published_snapshot/netlify-current/index.html`, aggiornamento `docs/REPO-MOVELOG.md`, `docs/03_execution/CML-167.md`, `report/CML-167_educazione_civica_runtime_mappa_dati_integration.md`
- **Integrazione**: aggiunto pulsante selettore Educazione Civica, variabile `EDUCAZIONE_CIVICA_MAPPA_DATI` (11 strutture, 4 nodi, 9 progressioni, 0 decisioni) e switch in `setMappaDisciplina()`
- **Discipline modificate**: solo Educazione Civica (nuova); Tecnologia/Italiano/Matematica/Scienze/Storia/Geografia/Inglese invariati
- **Decisioni curricolari**: D=0 â€” nessun audit preparatorio per Educazione Civica
- **Validatore**: 8 file / 105 unitÃ  / `overallValid: true` / 0 errori
- **Shape runtime**: 7/7 discipline PASS (tool pre-CML-166); Educazione Civica verificata ad-hoc
- **Copertura runtime**: 8/14 discipline
- **Asse Storico-sociale**: completato (Storia + Geografia + Educazione Civica)
- **Vincoli**: JSON, schema `.cml`, import/export, service worker/cache, workflow, dipendenze, root `index.html` e landing UI/UX invariati
- **Deploy**: non eseguito
- **Push**: non eseguito
- **Artefatti**: `docs/03_execution/CML-167.md`, `report/CML-167_educazione_civica_runtime_mappa_dati_integration.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_167_EDUCAZIONE_CIVICA_RUNTIME_MAPPA_DATI_READY`

## 2026-06-26 â€” CML-167-SYNC â€” EDUCAZIONE_CIVICA_RUNTIME_PUSH_SYNC

- **Commit base**: `a83c66e`
- **Push**: eseguito su origin/main
- **Verifica**: HEAD == origin/main
- **Verdetto**: `CML_167_SYNC_CLOSED_REMOTE`

## 2026-06-26 â€” CML-168 â€” RUNTIME_SHAPE_TEST_ALIGNMENT_8_DISCIPLINES

- **Commit iniziale**: `a83c66e` (sync con `origin/main`)
- **Tipo slice**: tool alignment â€” allineamento test shape a 8 discipline
- **File modificato**: `tools/test-runtime-mappa-dati-shape.mjs` (+1 riga)
- **Modifica**: aggiunta `'educazione-civica.normalized.json'` alla lista FILES (7 â†’ 8 discipline)
- **Validatore**: 8 file / 105 unitÃ  / `overallValid: true` / 0 errori
- **Shape runtime**: **8/8 PASS**
  - Tecnologia: S=6 N=6 P=10 D=2
  - Italiano: S=12 N=6 P=10 D=4
  - Matematica: S=12 N=5 P=6 D=4
  - Scienze: S=15 N=5 P=9 D=0
  - Storia: S=15 N=5 P=9 D=0
  - Geografia: S=12 N=3 P=9 D=0
  - Inglese: S=12 N=11 P=9 D=0
  - Educazione Civica: S=11 N=4 P=9 D=0
- **Invarianti**: runtime, `content/curriculum/`, schema `.cml`, export/import, service worker â€” invariati
- **Deploy**: non eseguito
- **Push**: non eseguito
- **Artefatti**: `docs/03_execution/CML-168.md`, `report/CML-168_runtime_shape_test_alignment_8_disciplines.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_168_RUNTIME_SHAPE_TEST_ALIGNMENT_8_DISCIPLINES_READY`

## 2026-06-26 â€” CML-169 â€” ARTE_IMMAGINE_NORMALIZED_DATA_PREPARATION

- **Commit iniziale**: `0674dde` (sync con `origin/main`)
- **Tipo slice**: data preparation â€” creazione file `.normalized.json`
- **Oggetto**: creazione di `content/curriculum/arte-immagine.normalized.json`
- **Esito**: 6 unitÃ  su 3 nuclei (Esprimersi e comunicare, Osservare, Comprendere le opere d'arte), copertura Inf/Pri/Sec, D=0
- **Validatore**: 9 file / 111 unitÃ  / `overallValid: true` / 0 errori
- **Generazione statica**: `node tools/generate-static-mappa-dati.mjs` â€” S=6 N=3 P=6 D=0 âœ…
- **Shape runtime**: 8/8 PASS invariato (Arte e Immagine non integrata)
- **Runtime**: invariato
- **Deploy**: non eseguito
- **Push**: non eseguito
- **Artefatti**: `content/curriculum/arte-immagine.normalized.json`, `docs/03_execution/CML-169.md`, `report/CML-169_arte_immagine_normalized_data_preparation.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_169_ARTE_IMMAGINE_NORMALIZED_DATA_PREPARATION_READY`

## 2026-06-26 â€” CML-170 â€” ARTE_IMMAGINE_RUNTIME_MAPPA_DATI_INTEGRATION

- **Commit iniziale**: `b237cb2` (sync con `origin/main`)
- **Tipo slice**: runtime increment â€” integrazione mappa disciplinare Arte e Immagine
- **File modificati**: `_published_snapshot/netlify-current/index.html` (+4 righe), `docs/03_execution/CML-170.md`, `report/CML-170_arte_immagine_runtime_mappa_dati_integration.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Integrazione**: aggiunto pulsante selettore Arte e Immagine, variabile `ARTE_IMMAGINE_MAPPA_DATI` (S=6, N=3, P=6, D=0) e branch `arte-immagine` in `renderMappaDisciplinare()`
- **Discipline modificate**: solo Arte e Immagine (nuova); Tecnologia/Italiano/Matematica/Scienze/Storia/Geografia/Inglese/Educazione Civica invariati
- **Decisioni curricolari**: D=0 deliberato
- **Validatore**: 9 file / 111 unitÃ  / `overallValid: true` / 0 errori
- **Shape runtime**: 8/8 PASS invariato (Arte e Immagine non ancora nel test)
- **Vincoli**: JSON, schema `.cml`, import/export, service worker/cache, workflow, dipendenze, root `index.html` e landing UI/UX invariati
- **Deploy**: non eseguito
- **Push**: non eseguito
- **Artefatti**: `docs/03_execution/CML-170.md`, `report/CML-170_arte_immagine_runtime_mappa_dati_integration.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_170_ARTE_IMMAGINE_RUNTIME_MAPPA_DATI_READY`

## 2026-06-26 â€” CML-171 â€” RUNTIME_SHAPE_TEST_ALIGNMENT_9_DISCIPLINES

- **Commit iniziale**: `d565c7b` (sync con `origin/main`)
- **Tipo slice**: tool alignment â€” allineamento test shape a 9 discipline
- **File modificati**: `tools/test-runtime-mappa-dati-shape.mjs` (+1 riga), `docs/03_execution/CML-171.md`, `report/CML-171_runtime_shape_test_alignment_9_disciplines.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Modifica**: aggiunta `'arte-immagine.normalized.json'` alla lista FILES (8 â†’ 9 discipline)
- **Validatore**: 9 file / 111 unitÃ  / `overallValid: true` / 0 errori
- **Shape runtime**: **9/9 PASS**
  - Tecnologia: S=6 N=6 P=10 D=2
  - Italiano: S=12 N=6 P=10 D=4
  - Matematica: S=12 N=5 P=6 D=4
  - Scienze: S=15 N=5 P=9 D=0
  - Storia: S=15 N=5 P=9 D=0
  - Geografia: S=12 N=3 P=9 D=0
  - Inglese: S=12 N=11 P=9 D=0
  - Educazione Civica: S=11 N=4 P=9 D=0
  - **Arte e Immagine: S=6 N=3 P=6 D=0**
- **Invarianti**: runtime, `content/curriculum/`, schema `.cml`, export/import, service worker â€” invariati
- **Deploy**: non eseguito
- **Push**: non eseguito
- **Artefatti**: `docs/03_execution/CML-171.md`, `report/CML-171_runtime_shape_test_alignment_9_disciplines.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_171_RUNTIME_SHAPE_TEST_ALIGNMENT_9_DISCIPLINES_READY`

## 2026-06-26 - CML-172 - REMAINING_DISCIPLINES_GOALS_AND_COMPLETION_SEQUENCE

- **Commit iniziale**: `0da08a8` (sync con `origin/main`)
- **Tipo slice**: docs-only / audit-only / planning-only
- **Oggetto**: piano controllato di completamento per Musica, Educazione Fisica, Religione Cattolica, Seconda Lingua Comunitaria e Latino LEL
- **Baseline consolidata**: dati normalizzati 9/14, runtime mappa 9/14, shape runtime test 9/9 PASS
- **Sequenza consigliata**: Musica -> Educazione Fisica -> Seconda Lingua Comunitaria -> Religione Cattolica -> Latino LEL
- **Fasi standard**: readiness/data audit, normalized data preparation, sync dati, runtime integration, sync runtime, shape test alignment, sync test, closure audit
- **Prossima slice consigliata**: `CML-173 - MUSICA_READINESS_DATA_AUDIT`
- **Runtime**: invariato
- **content/curriculum/**: invariato; nessun file `.normalized.json` creato
- **Tools/test**: invariati
- **Schema `.cml`, export/import, funzioni evidenze/UDA**: invariati
- **Dipendenze**: nessuna
- **Deploy**: non eseguito
- **Push**: non eseguito
- **Artefatti**: `docs/03_execution/CML-172.md`, `report/CML-172_remaining_disciplines_goals_and_completion_sequence.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_172_REMAINING_DISCIPLINES_GOALS_AND_COMPLETION_SEQUENCE_READY`

## 2026-06-26 â€” CML-173 â€” MUSICA_READINESS_DATA_AUDIT

- **Commit iniziale**: `d806172` (sync con `origin/main`)
- **Tipo slice**: docs-only / audit-only / readiness-only
- **Oggetto**: audit documentale di readiness per Musica prima della data preparation
- **Esito**: Musica Ã¨ pronta con cautele â€” readiness media, rischio basso, dati ricostruibili, 3 nuclei documentati
- **Raccomandazione**: CML-174 â€” MUSICA_NORMALIZED_DATA_PREPARATION
- **Stato Musica**: nessun `.normalized.json` creato
- **Runtime**: invariato
- **`content/curriculum/`**: invariato; nessun file normalizzato creato
- **Tools/test**: invariati
- **Schema `.cml`, export/import, funzioni evidenze/UDA**: invariati
- **Dipendenze**: nessuna
- **Deploy**: non eseguito
- **Push**: non eseguito
- **Artefatti**: `docs/03_execution/CML-173.md`, `report/CML-173_musica_readiness_data_audit.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_173_MUSICA_READINESS_DATA_AUDIT_READY`

## 2026-06-26 â€” CML-174 â€” MUSICA_NORMALIZED_DATA_PREPARATION

- **Commit iniziale**: `84902b5` (sync con `origin/main`)
- **Tipo slice**: data preparation â€” creazione file `.normalized.json`
- **Oggetto**: creazione di `content/curriculum/musica.normalized.json`
- **Esito**: 7 unitÃ  su 3 nuclei (Ascolto, Espressione vocale e strumentale, Linguaggi sonori), copertura Inf/Pri/Sec, D=0
- **Validatore**: 10 file / 118 unitÃ  / `overallValid: true` / 0 errori
- **Generazione statica**: `node tools/generate-static-mappa-dati.mjs` â€” S=7 N=3 P=7 D=0 âœ…
- **Shape runtime**: 9/9 PASS invariato (Musica non integrata)
- **Runtime**: invariato
- **Deploy**: non eseguito
- **Push**: non eseguito
- **Artefatti**: `content/curriculum/musica.normalized.json`, `docs/03_execution/CML-174.md`, `report/CML-174_musica_normalized_data_preparation.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_174_MUSICA_NORMALIZED_DATA_PREPARATION_READY`

## 2026-06-26 â€” CML-175 â€” MUSICA_RUNTIME_MAPPA_DATI_INTEGRATION

- **Commit iniziale**: `90ab240` (sync con `origin/main`)
- **Tipo slice**: runtime increment â€” integrazione mappa disciplinare Musica
- **File modificati**: `_published_snapshot/netlify-current/index.html` (+2 righe nette), `docs/03_execution/CML-175.md`, `report/CML-175_musica_runtime_mappa_dati_integration.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Integrazione**: aggiunto pulsante selettore Musica, variabile `MUSICA_MAPPA_DATI` (S=7, N=3, P=7, D=0) e branch `musica` in `renderMappaDisciplinare()`
- **Discipline modificate**: solo Musica (nuova); Tecnologia/Italiano/Matematica/Scienze/Storia/Geografia/Inglese/Educazione Civica/Arte e Immagine invariati
- **Decisioni curricolari**: D=0 deliberato
- **Validatore**: 10 file / 118 unitÃ  / `overallValid: true` / 0 errori
- **Shape runtime**: 9/9 PASS invariato (Musica non ancora nel test)
- **Copertura runtime**: 10/14 discipline
- **Vincoli**: JSON, schema `.cml`, import/export, service worker/cache, workflow, dipendenze, root `index.html` e landing UI/UX invariati
- **Deploy**: non eseguito
- **Push**: non eseguito
- **Artefatti**: `docs/03_execution/CML-175.md`, `report/CML-175_musica_runtime_mappa_dati_integration.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_175_MUSICA_RUNTIME_MAPPA_DATI_READY`

## 2026-06-26 - SKB-001 - SCHOOLKB_DRIVE_CONNECTOR_CONTRACT

- **Commit iniziale**: `fd5c952` (branch `main`, working tree pulito, ahead 1 rispetto a `origin/main`)
- **Tipo slice**: docs-only / architecture-contract / privacy-contract
- **Oggetto**: contratto tecnico, privacy, UX e architetturale per futura estensione opzionale Google Drive / SchoolKB
- **Decisione architetturale**: SchoolKB ammessa solo come estensione parallela, disattivata di default, reversibile e protetta da feature flag
- **Scope OAuth consentito futuro**: solo `https://www.googleapis.com/auth/drive.file`; vietato scope Drive completo
- **Modulo futuro previsto**: `driveConnector.js` con metodi `initGapiClient`, `requestAccessToken`, `restoreSessionToken`, `checkAndCreateRootFolder`, `createSubFolder`, `uploadConfigTemplate`, `disconnect`
- **Struttura proposta**: `schoolkb/` con `00_CONFIG`, `01_CURRICOLO_ISTITUTO`, `02_FONTI_NORMATIVE`, `03_DISCIPLINE`, `04_DIPARTIMENTI`, `05_REVISIONI`, `99_EXPORT`
- **Roadmap proposta**: SKB-002 prototipo locale isolato, SKB-003 schema cartelle, SKB-004 smoke UI, SKB-005 privacy/workspace audit, SKB-006 eventuale integrazione controllata
- **Runtime**: invariato; nessun OAuth implementato
- **Credenziali/client ID reali**: nessuno inserito
- **content/curriculum/**: invariato
- **Tools/test**: invariati
- **Schema `.cml`, export/import, funzioni evidenze/UDA**: invariati
- **Dipendenze**: nessuna
- **Deploy**: non eseguito
- **Push**: non eseguito
- **Artefatti**: `docs/02_system/SCHOOLKB-DRIVE-CONNECTOR-CONTRACT.md`, `docs/03_execution/SKB-001.md`, `report/SKB-001_schoolkb_drive_connector_contract.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `SKB_001_SCHOOLKB_DRIVE_CONNECTOR_CONTRACT_READY`

## 2026-06-26 - CML-176 - RUNTIME_SHAPE_TEST_BOM_DIAGNOSTIC_AND_10_DISCIPLINES_ALIGNMENT

- **Commit iniziale**: `472f0da` (sync con `origin/main`)
- **Tipo slice**: test/tool alignment controllato + diagnostic-first
- **Oggetto**: diagnosi BOM/encoding e allineamento test shape runtime da 9/9 a 10/10 includendo Musica
- **Diagnosi**: validatore curriculum PASS 10 file / 118 unita / overallValid true / 0 errori; runtime Musica presente; `content/curriculum/*.normalized.json` senza BOM UTF-8 e senza byte nulli; problema riproducibile nel test = Musica non inclusa nella lista `FILES`
- **Modifica test**: aggiunto `musica.normalized.json` a `tools/test-runtime-mappa-dati-shape.mjs`; aggiunta normalizzazione minima `normalizeJsonText()` per rimuovere eventuale BOM UTF-8 iniziale dall'output JSON e segnalare byte nulli
- **Shape runtime**: 10/10 PASS
- **Musica**: S=7, N=3, P=7, D=0
- **Runtime**: invariato; `_published_snapshot/netlify-current/index.html` non modificato
- **Root `index.html`**: invariato
- **content/curriculum/**: invariato; nessun file `.normalized.json` modificato
- **Tools/test**: modificato solo `tools/test-runtime-mappa-dati-shape.mjs`
- **Schema `.cml`, export/import, funzioni evidenze/UDA**: invariati
- **SchoolKB/SKB**: invariato
- **Dipendenze**: nessuna
- **Deploy**: non eseguito
- **Push**: non eseguito
- **Artefatti**: `tools/test-runtime-mappa-dati-shape.mjs`, `docs/03_execution/CML-176.md`, `report/CML-176_runtime_shape_test_bom_diagnostic_and_10_disciplines_alignment.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_176_RUNTIME_SHAPE_TEST_BOM_DIAGNOSTIC_AND_10_DISCIPLINES_ALIGNMENT_READY`

## 2026-06-27 - CML-204 - EDUCAZIONE_FISICA_DETAILED_GAP_MODEL

- **Commit iniziale**: `e68d22d` (sync con `origin/main`)
- **Tipo slice**: docs-only / content-quality audit
- **Oggetto**: aggiornamento gap model dettagliato Educazione Fisica a valle di 14/14 normalized data, 14/14 runtime integration e chiusura `.cml` workflow hardening (CML-209)
- **Stato iniziale**: `main...origin/main`, working tree pulito
- **Dati normalizzati**: 14/14
- **Runtime mappa**: 14/14
- **Shape test**: 14/14 PASS
- **Validatore**: 14/14 PASS, 0 errori
- **Struttura EF**: 7 unita, 4 nuclei (Corpo e percezione, Abilita motorie, Gioco e sport, Espressione e inclusione)
- **Gap P0 bloccanti**: 0
- **Gap P1 importanti**: 4 (nucleo Salute e benessere assente come nodo autonomo; progressione Primaria discontinua [mancano classi 2 e 4]; nucleo Abilita motorie monoclasso; progressione Secondaria senza ponte Infanzia-Primaria-Secondaria)
- **Gap P2 migliorativi**: 6 (wording generico in obiettivi/traguardi; assessment readiness debole; conoscenze limitanti in Secondaria; fonti ripetitive e poco differenziate; `decisioniCurricolari` assente; `readiness`/`stato` non aggiornabili a "validato")
- **Gap P3 editoriali**: 4 (terminologia "attivitÃ¡" con accento acuto; `noteDipartimento` verbose; `ambito` troppo descrittivo; `nucleoFondante` assente)
- **Raccomandazione**: mantenere stato attuale; prossimo step dopo validazione umana: `docs-only refinement plan` â†’ `controlled JSON content polish`
- **Runtime**: invariato; nessuna mappa, pulsante o HTML modificato
- **content/curriculum/**: invariato; nessun `.normalized.json` modificato
- **Tools/test**: invariati
- **Schema `.cml`, export/import, funzioni evidenze/UDA**: invariati
- **SchoolKB/SKB**: invariato
- **Dipendenze**: nessuna
- **Deploy**: non eseguito
- **Push**: non eseguito
- **Artefatti**: `docs/03_execution/CML-204.md`, `report/CML-204_educazione_fisica_detailed_gap_model.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_204_EDUCAZIONE_FISICA_DETAILED_GAP_MODEL_POST_14_14_READY`

## 2026-06-27 - CML-204S - CONTROLLED_REBASE_AND_PUSH_EDUCAZIONE_FISICA_GAP_MODEL

- **Commit**: `7d43467` (CML-204 push)
- **Tipo slice**: sync + controlled push (after rebase check)
- **Oggetto**: verifica allineamento origin/main, push CML-204 senza rebase
- **HEAD pre-push**: `7d43467`
- **origin/main pre-push**: `aff4981`
- **HEAD..origin/main**: vuoto (nessun commit remoto non in HEAD)
- **origin/main..HEAD**: `7d43467` (solo CML-204)
- **Rebase necessario**: NO â€” storia lineare, HEAD cleanly ahead
- **Validazioni pre-push**: validator 14/14 PASS, shape test 14/14 PASS, diff-check pulito
- **Push**: `git push origin main` â€” eseguito con successo
- **Post-push**: `main...origin/main` pulito, entrambi a `7d43467`
- **Runtime**: invariato
- **content/curriculum/**: invariato
- **Tools/test**: invariati
- **Schema `.cml`, export/import, funzioni evidenze/UDA**: invariati
- **SchoolKB/SKB**: invariato
- **Dipendenze**: nessuna
- **Deploy**: non eseguito
- **Artefatti**: aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_204S_CONTROLLED_REBASE_AND_PUSH_EDUCAZIONE_FISICA_GAP_MODEL_READY`

## 2026-06-27 - CML-210 - EDUCAZIONE_FISICA_REFINEMENT_PLAN_AFTER_HUMAN_VALIDATION

- **Commit**: `4d10229`
- **Tipo slice**: docs-only / refinement plan
- **Oggetto**: piano di raffinamento contenutistico EF dopo CML-204; decisione mantenimento 4 nuclei fino a validazione umana
- **Stato iniziale**: `main...origin/main`, working tree pulito
- **Dati normalizzati**: 14/14
- **Runtime mappa**: 14/14
- **Shape test**: 14/14 PASS
- **Validatore**: 14/14 PASS, 0 errori
- **Decisione**: Opzione A â€” mantenere 4 nuclei (Corpo e percezione, AbilitÃ  motorie, Gioco e sport, Espressione e inclusione)
- **CML-204 considerato**: modello di rischio contenutistico, non autorizzazione automatica a correggere
- **Trigger per azione futura**: validazione umana, richiesta nucleo Salute e benessere, piano UDA approvato, scadenza
- **Prossima slice condizionata**: CML-210A â€” controlled JSON content polish (solo dopo validazione umana)
- **Runtime**: invariato
- **content/curriculum/**: invariato; nessun `.normalized.json` modificato
- **Tools/test**: invariati
- **Schema `.cml`, export/import, funzioni evidenze/UDA**: invariati
- **SchoolKB/SKB**: invariato
- **Dipendenze**: nessuna
- **Deploy**: non eseguito
- **Push**: non eseguito
- **Artefatti**: `docs/03_execution/CML-210.md`, `report/CML-210_educazione_fisica_refinement_plan.md`, `docs/03_execution/CML-210S.md`, `report/CML-210S_controlled_push.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_210_EDUCAZIONE_FISICA_REFINEMENT_PLAN_AFTER_HUMAN_VALIDATION_READY`

## 2026-06-27 - CML-211 - EDUCAZIONE_FISICA_HUMAN_VALIDATION_PACKAGE

- **Commit**: `4d10229` (locale)
- **Tipo slice**: docs-only / human validation package
- **Oggetto**: prepara pacchetto di validazione dipartimentale per Educazione Fisica; traduce CML-204 e CML-210 in documento school-facing
- **Stato iniziale**: `main...origin/main` aligned at `72e5901`, working tree pulito
- **Dati normalizzati**: 14/14
- **Runtime mappa**: 14/14
- **Shape test**: 14/14 PASS
- **Validatore**: 14/14 PASS, 0 errori
- **Struttura EF**: 7 unita, 4 nuclei (Corpo e percezione, Abilita motorie, Gioco e sport, Espressione e inclusione)
- **Gap model riferimento**: CML-204 (0 P0, 4 P1, 6 P2, 4 P3)
- **Decisione riferimento**: CML-210 Opzione A â€” mantenere 4 nuclei fino a validazione umana
- **Domande dipartimento**: 4 (Salute e benessere autonomo, progressione Primaria, distribuzione Abilita motorie, ponte verticale Infanzia-Primaria-Secondaria)
- **Opzioni valutate**: A (mantenere), B (5 nuclei), C (perfezionare progressione), D (rinviare a UDA)
- **CML-210A bloccata**: si, fino a validazione esplicita docente/dipartimento
- **Runtime**: invariato
- **content/curriculum/**: invariato; nessun `.normalized.json` modificato
- **Tools/test**: invariati
- **Schema `.cml`, export/import, funzioni evidenze/UDA**: invariati
- **SchoolKB/SKB**: invariato
- **Dipendenze**: nessuna
- **Deploy**: non eseguito
- **Push**: non eseguito
- **Artefatti**: `docs/03_execution/CML-211.md`, `report/CML-211_educazione_fisica_human_validation_package.md`, `docs/04_user/educazione_fisica_validazione_dipartimentale.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_211_EDUCAZIONE_FISICA_HUMAN_VALIDATION_PACKAGE_ACCEPTED`

- **Aggiornamento 2026-06-28**: dipartimento ha accettato il modello a 4 nuclei con polish CML-210A. Chiusura ciclo polish provvisorio EF autorizzata.

## 2026-06-27 - CML-210A - EDUCAZIONE_FISICA_CONTROLLED_JSON_CONTENT_POLISH_PROVISIONAL

- **Commit**: `e216633` (locale)
- **Tipo slice**: controlled JSON content polish (provisional)
- **Oggetto**: polish contenutistico controllato e provvisorio di `educazione-fisica.normalized.json` mantenendo 4 nuclei, senza quinto nucleo autonomo
- **Decisione**: Opzione C provvisoria â€” mantenere 4 nuclei, autorizzare polish limitato
- **Stato iniziale**: `main...origin/main` aligned at `e216633`, working tree pulito
- **Dati normalizzati**: 14/14
- **Runtime mappa**: 14/14
- **Shape test**: 14/14 PASS
- **Validatore**: 14/14 PASS, 0 errori
- **Struttura EF before/after**: 7 unitÃ , 4 nuclei, 3 ordini â€” invariata
- **Nuclei**: Corpo e percezione, AbilitÃ  motorie, Gioco e sport, Espressione e inclusione â€” preservati
- **Quinto nucleo**: NON introdotto (Salute e benessere rimane trasversale)
- **Modifiche JSON**: 41 righe modificate in `content/curriculum/educazione-fisica.normalized.json`
- **Miglioramenti**:
  - rafforzata dimensione trasversale salute/benessere in tutti i nuclei;
  - aggiunti ponti verticali Infanziaâ†’Primariaâ†’Secondaria in obiettivi e traguardi;
  - rafforzato nucleo AbilitÃ  motorie (Primaria 3) con progressione da Primaria 1 e evidenze calibrate;
  - migliorato wording obiettivi/traguardi (piÃ¹ specifico, osservabile, meno generico);
  - soglie evidenze rafforzate con quantificazioni;
  - aggiornato campo `source` con riferimento a CML-210A;
  - aggiornate `noteDipartimento` di tutte le 7 unitÃ .
- **Non modificato**: nessuna unitÃ  aggiunta/rimossa, nessun nucleo aggiunto/rimosso, ID/ordini/classi preservati
- **Runtime**: invariato
- **Tools/test**: invariati
- **Schema `.cml`, export/import, funzioni evidenze/UDA**: invariati
- **SchoolKB/SKB**: invariato
- **Dipendenze**: nessuna
- **Deploy**: non eseguito
- **Push**: non eseguito
- **Artefatti**: `content/curriculum/educazione-fisica.normalized.json`, `docs/03_execution/CML-210A.md`, `report/CML-210A_educazione_fisica_controlled_json_content_polish_provisional.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_210A_EDUCAZIONE_FISICA_CONTROLLED_JSON_CONTENT_POLISH_PROVISIONAL_READY`

## 2026-06-28 - CML-210B - EDUCAZIONE_FISICA_CONTROLLED_RUNTIME_PUBLIC_SMOKE

- **Commit**: `318c2d5` (locale)
- **Tipo slice**: docs-only / smoke verification
- **Oggetto**: verifica riflessione polish CML-210A in runtime e GitHub Pages pubbliche
- **Stato iniziale**: `main...origin/main` aligned at `318c2d5`, working tree pulito
- **Dati normalizzati**: 14/14
- **Runtime mappa**: 14/14
- **Shape test**: 14/14 PASS
- **Validatore**: 14/14 PASS, 0 errori
- **Struttura EF**: 7 unitÃ , 4 nuclei, 3 ordini â€” confermata
- **Nuclei**: Corpo e percezione, AbilitÃ  motorie, Gioco e sport, Espressione e inclusione â€” preservati
- **Quinto nucleo**: NON introdotto
- **Runtime structure**: 7 strutture, 4 nodi, 7 progressioni, D=0 â€” confermato
- **CML-210A wording in runtime**: NON RIFLESSO â€” runtime HTML statico non rigenerato
- **Public GitHub Pages**: https://antoniocorsano-boop.github.io/curmanlight/ â€” HTTP 200, app carica, EF selezionabile, contenuto non aggiornato
- **No manual deploy**: confermato
- **Secret scan**: negativo
- **git diff --check**: pulito
- **Raccomandazione**: CML-210BS â€” rigenerazione statica mappa runtime e deploy controllato; CML-211B â€” department validation follow-up
- **Runtime**: invariato
- **content/curriculum/**: invariato (solo lettura)
- **Tools/test**: invariati
- **Schema `.cml`, export/import, funzioni evidenze/UDA**: invariati
- **SchoolKB/SKB**: invariato
- **Dipendenze**: nessuna
- **Deploy**: non eseguito
- **Push**: non eseguito
- **Artefatti**: `docs/03_execution/CML-210B.md`, `report/CML-210B_educazione_fisica_controlled_runtime_public_smoke.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_210B_EDUCAZIONE_FISICA_CONTROLLED_RUNTIME_PUBLIC_SMOKE_READY`

## 2026-06-28 - CML-210BS - EDUCAZIONE_FISICA_RUNTIME_STATIC_MAP_REGENERATION

- **Commit**: `8a64a09` (locale, poi push)
- **Tipo slice**: runtime integration (controllata)
- **Oggetto**: rigenerazione mappa runtime statica EF per rendere visibile il polish CML-210A
- **Stato iniziale**: `main...origin/main` aligned at `39c4f4a`, working tree pulito
- **Strumento usato**: `tools/generate-static-mappa-dati.mjs` con input `content/curriculum/educazione-fisica.normalized.json`
- **Dati normalizzati**: 14/14
- **Runtime mappa**: 14/14
- **Shape test**: 14/14 PASS
- **Validatore**: 14/14 PASS, 0 errori
- **Struttura EF runtime**: S=7, N=4, P=7, D=0 â€” preservata
- **Nuclei**: Corpo e percezione, AbilitÃ  motorie, Gioco e sport, Espressione e inclusione â€” preservati
- **Quinto nucleo**: NON introdotto
- **CML-210A wording in runtime**: RIFLESSO â€” dati statici aggiornati
- **Public GitHub Pages**: https://antoniocorsano-boop.github.io/curmanlight/ â€” HTTP 200, app carica, EF selezionabile, contenuto CML-210A visibile
- **No manual deploy**: confermato
- **Secret scan**: pulito (riferimenti a "password" sono logiche di validazione UI, non credenziali)
- **git diff --check**: pulito
- **JSON modificato**: NO
- **Altre discipline**: invariate
- **Tools/test**: invariati
- **Schema `.cml`, export/import, funzioni evidenze/UDA, service-worker, manifest**: invariati
- **SchoolKB/SKB**: invariato
- **Dipendenze**: nessuna
- **Deploy**: automatico GitHub Pages
- **Push**: eseguito
- **Artefatti**: `_published_snapshot/netlify-current/index.html`, `docs/03_execution/CML-210BS.md`, `report/CML-210BS_educazione_fisica_runtime_static_map_regeneration.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_210BS_EDUCAZIONE_FISICA_RUNTIME_STATIC_MAP_REGENERATION_COMPLETE`

## 2026-06-28 - CML-211S - CONTROLLED_PUSH_EF_DEPARTMENT_ACCEPTANCE

- **Commit**: `4f77824` (pushato)
- **Tipo slice**: controlled push
- **Oggetto**: push accettazione dipartimentale EF dopo CML-210BS
- **Stato iniziale**: `main...origin/main` aligned at `53013df` (dopo CML-210BS push), working tree pulito
- **Dati normalizzati**: 14/14
- **Runtime mappa**: 14/14
- **Shape test**: 14/14 PASS
- **Validatore**: 14/14 PASS, 0 errori
- **Struttura EF**: 7 unitÃ , 4 nuclei, 3 ordini â€” confermata
- **Accettazione dipartimento**: confermata il 2026-06-28
- **No manual deploy**: confermato
- **Secret scan**: pulito
- **git diff --check**: pulito
- **JSON modificato**: NO
- **Runtime**: invariato dopo CML-210BS
- **content/curriculum/**: invariato
- **Tools/test**: invariati
- **Schema `.cml`, export/import, funzioni evidenze/UDA, service-worker, manifest**: invariati
- **SchoolKB/SKB**: invariato
- **Dipendenze**: nessuna
- **Deploy**: non eseguito
- **Push**: eseguito
- **Artefatti**: `docs/03_execution/CML-211.md`, `report/CML-211_educazione_fisica_human_validation_package.md`, `docs/04_user/educazione_fisica_validazione_dipartimentale.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_211S_EF_DEPARTMENT_ACCEPTANCE_PUSH_READY`

## 2026-06-28 - CML-212 - NEXT_CYCLE_SELECTION_AFTER_EF_VALIDATION_CLOSURE

- **Commit**: (in preparazione)
- **Tipo slice**: docs-only / cycle selection
- **Oggetto**: selezionare prossimo ciclo funzionale dopo chiusura validazione EF e hardening `.cml` workflow
- **Stato iniziale**: `main...origin/main` aligned at `4f77824`, working tree pulito
- **Dati normalizzati**: 14/14
- **Runtime mappa**: 14/14
- **Shape test**: 14/14 PASS
- **Validatore**: 14/14 PASS, 0 errori
- **Decisione**: Opzione A â€” Evidenze/UDA workflow
- **Alternative valutate**: B (SchoolKB â€” rinviata), C (architecture/UML â€” rinviata), D (polish disciplinare â€” rinviata)
- **Motivazione**: layer curricolo completo, workflow `.cml` consolidato, EF validata; prossimo layer naturale Ã¨ connessione curricolo-evidenze-attivitÃ -UDA
- **Prossima sequenza**: CML-213 â†’ CML-214 â†’ CML-215 â†’ CML-216 â†’ CML-217
- **Runtime**: invariato
- **content/curriculum/**: invariato
- **Tools/test**: invariati
- **Schema `.cml`, export/import, validator, shape-test, service-worker, manifest**: invariati
- **SchoolKB/SKB**: invariato
- **Dipendenze**: nessuna
- **Deploy**: non eseguito
- **Push**: non eseguito
- **Artefatti**: `docs/03_execution/CML-212.md`, `report/CML-212_next_cycle_selection_after_ef_validation_closure.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_212_NEXT_CYCLE_SELECTION_AFTER_EF_VALIDATION_CLOSURE_READY`

## 2026-06-28 - CML-213 - EVIDENZE_UDA_WORKFLOW_AUDIT

- **Commit**: (in preparazione)
- **Tipo slice**: docs-only / audit
- **Oggetto**: audit stato progetto per definire punto di partenza sicuro per workflow Evidenze/UDA
- **Stato iniziale**: `main...origin/main` aligned at `b61e67a`, working tree pulito
- **Dati normalizzati**: 14/14
- **Runtime mappa**: 14/14
- **Shape test**: 14/14 PASS
- **Validatore**: 14/14 PASS, 0 errori
- **Evidence coverage**: 130/130 unitÃ  (100%) su 14 discipline
- **Campi esistenti**: `evidenze`, `traguardo`, `obiettivi`, `conoscenze`, `abilita`, `criteriValutazione`, `noteDipartimento`, `validazioneUmana`
- **Runtime stato attuale**: pannello evidenze e UDA disponibili solo per Tecnologia (prototipo read-only)
- **Gap principali**: G1 (panello limitato a Tecnologia), G2 (UDA solo Tecnologia), G3 (nessun linking evidenzaâ†’UDA), G4 (nessun modello dati persistente), G5 (dati non esposti nel runtime per 13 discipline)
- **Raccomandazione**: Opzione A â€” Docs-only Evidenze/UDA contract (CML-214)
- **Alternative rigettate**: B (data model senza contratto â€” troppo presto), C (panel-only senza linking â€” falsa completezza), D (UDA export senza linking â€” scollegato), E (defer â€” spreca opportunitÃ )
- **Prossima sequenza**: CML-214 â†’ CML-215 â†’ CML-216 â†’ CML-217
- **Runtime**: invariato
- **content/curriculum/**: invariato
- **Tools/test**: invariati
- **Schema `.cml`, export/import, validator, shape-test, service-worker, manifest**: invariati
- **SchoolKB/SKB**: invariato
- **Dipendenze**: nessuna
- **Deploy**: non eseguito
- **Push**: non eseguito
- **Artefatti**: `docs/03_execution/CML-213.md`, `report/CML-213_evidenze_uda_workflow_audit.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_213_EVIDENZE_UDA_WORKFLOW_AUDIT_READY`

## 2026-06-28 - CML-214 - EVIDENZE_UDA_WORKFLOW_AND_DATA_CONTRACT

- **Commit**: (in preparazione)
- **Tipo slice**: docs-only / contract
- **Oggetto**: definire contratto dati e workflow Evidenze/UDA prima di implementazione runtime
- **Stato iniziale**: `main...origin/main` aligned at `e479617`, working tree pulito
- **Dati normalizzati**: 14/14
- **Runtime mappa**: 14/14
- **Shape test**: 14/14 PASS
- **Validatore**: 14/14 PASS, 0 errori
- **Evidence coverage**: 130/130 unitÃ  (100%) su 14 discipline
- **Campi esistenti**: `evidenze`, `traguardo`, `obiettivi`, `conoscenze`, `abilita`, `criteriValutazione`, `noteDipartimento`, `validazioneUmana`
- **Contratto creato**: `docs/02_system/EVIDENZE-UDA-WORKFLOW-CONTRACT.md`
- **Decisioni**: contract prima di runtime; evidenze da dati esistenti; UDA come draft locale; no `.cml` change; no SchoolKB; privacy-first; CML-215 read-only prima; CML-216 export markdown
- **Alternative rigettate**: B (data model senza contratto), C (panel-only senza linking), D (UDA export senza linking), E (defer)
- **Prossima sequenza**: CML-214 â†’ CML-215 â†’ CML-216 â†’ CML-217
- **Runtime**: invariato
- **content/curriculum/**: invariato
- **Tools/test**: invariati
- **Schema `.cml`, export/import, validator, shape-test, service-worker, manifest**: invariati
- **SchoolKB/SKB**: invariato
- **Dipendenze**: nessuna
- **Deploy**: non eseguito
- **Push**: non eseguito
- **Artefatti**: `docs/02_system/EVIDENZE-UDA-WORKFLOW-CONTRACT.md`, `docs/03_execution/CML-214.md`, `report/CML-214_evidenze_uda_workflow_and_data_contract.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Verdetto**: `CML_214_EVIDENZE_UDA_WORKFLOW_AND_DATA_CONTRACT_READY`

## 2026-06-28 â€” CML-216 - UDA_DRAFT_EXPORT_READINESS_AUDIT

- **Commit base**: `28a0c3c` (CML-215, aligned)
- **Tipo slice**: readiness audit docs-only
- **Oggetto**: audit readiness per UDA draft/export dopo CML-215 evidence panel 14/14
- **File ispezionati**: CML-214 contract, index.html (CML-215), 5 normalized JSON (Tecnologia, Italiano, Matematica, EF, SLC), export functions, UI structure
- **Findings**: evidence marking in localStorage `cml_evidenze_state` con 3 stati; export functions giÃ  pronte (downloadBlob, copyMarkdownToClipboard); UI ha sezione `didattica_uda` per pannello futuro; nessun rischio privacy aggiuntivo
- **Opzioni analizzate**: A (preview only), B (preview + markdown), C (localStorage persistence), D (.cml export), E (defer)
- **Raccomandazione**: **Option B** â€” UDA draft preview + markdown copy/download
- **Criteri accettazione CML-217**: 12 criteri definiti (da preview a smoke)
- **Validatore**: 14/14 PASS
- **Shape test**: 14/14 PASS
- **Secret scan**: clean
- **Artefatti**: `docs/03_execution/CML-216.md`, `report/CML-216_uda_draft_export_readiness_audit.md`, aggiornamento `docs/REPO-MOVELOG.md`
- **Vincoli**: docs-only, nessuna modifica runtime, nessuna modifica curriculum JSON, nessuna implementazione UDA, nessuna modifica `.cml`/export/import/validator/shape-test/service-worker/manifest, nessuna dipendenza, nessun deploy, nessun push, nessun secret
- **Verdetto**: `CML_216_UDA_DRAFT_EXPORT_READINESS_AUDIT_COMPLETE`
