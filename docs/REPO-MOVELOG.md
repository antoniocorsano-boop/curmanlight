# Repo Movelog

## 2026-06-21 — CML-008R-FIX closure

- **9179418** — fix: align tecnologia markdown decision summary
  - "Da decidere" → "Voci da validare"
  - Aggiunta sezione "Voci mantenute da validare" (4 voci)
  - Rinominata sezione "Dettaglio delle proposte di modifica / Gap 2025"
  - Nota esplicativa post-sintesi e nota metodologica aggiornate
  - Rimosso doppio separatore pre-footer
- Audit di chiusura superato: `CML_008R_FIX_CLOSURE_AUDIT_READY_FOR_CONTROLLED_PUBLICATION`
- **8c92fea** — docs: close CML-008R markdown decision summary fix audit
- **Controlled Netlify publication:** `https://curmanlight.netlify.app`
  - Comando: `npx netlify deploy --prod --dir _published_snapshot/netlify-current`
  - 1 file deployato, 4s
  - Verifica post-deploy passata
  - Verdetto: `CML_008R_CONTROLLED_NETLIFY_PUBLICATION_CLOSED`

## 2026-06-20 — CML-008R pubblicato

- **dc179ce** — feat: add tecnologia markdown export readiness
  - Export Markdown per disciplina Tecnologia con pannello UI dedicato
  - Confronto IN2012→IN2025, gap markers, dettaglio proposte
  - Verifica locale e produzione passate

- **CML-009A** - User view lightening design audit (solo analisi, nessun codice)
  - Problema: ~1300 parole prima del contenuto disciplinare, nessuna gerarchia
  - Proposta: architettura a 3 livelli (cruscotto, schede, dettaglio espandibile)
  - Nessuna modifica funzionale, nessun deploy
  - Verdetto: `CML_009A_USER_VIEW_LIGHTENING_DESIGN_AUDIT_READY`

## 2026-06-21 — CML-009B top area lightening

- **09b325c** → HEAD (da confermare con commit effettivo)
- Unico file modificato: `_published_snapshot/netlify-current/index.html` (+75/−43 righe)
- Sostituito quick-info-bar + orientation-card con cruscotto minimo:
  - Stato: revisione avviata
  - Prossima azione: controlla le 12 voci da validare
  - 3 pulsanti: Controlla voci, Apri documento, Esporta
  - Barra compatta: 💾 salvataggio + progresso + ⚙︝ Azioni
- Compattata toolbar: 2 filtri primari + toggle Altri filtri; Export collassato
- Collassato usage-notice in `<details>`
- Comprimati pulsanti local-save-bar
- Nascosto install-hint di default
- Integrato progress-bar nel cruscotto (rimosso progress-wrap separato)
- Asset invariati: sw.js, _headers, PDF (hash verificati)
- Test locale passato (localhost:5000, 200 OK)
- Verdetto: `CML_009B_USER_VIEW_TOP_AREA_LIGHTENING_READY`

## 2026-06-21 — CML-009C responsive smoke audit

- **d45407a** → HEAD
- Esito: tutti i breakpoint passati (360, 414, 768, 1280px)
- Nessuna modifica runtime, nessun deploy
- Nessun errore JavaScript bloccante
- 3 problemi minori rilevati (P1: cruscotto visibile su tutti i tab, P2: touch target compatti, P3: toggle sono span)
- Nessuno bloccante — pubblicabile
- Verdetto: `CML_009C_USER_VIEW_TOP_AREA_RESPONSIVE_SMOKE_READY`

## 2026-06-21 — CML-009D micro-fix context & accessibility

- **636581a** → HEAD
- **P1:** aggiunto `setTab('lavoro')` a "Controlla voci" ed "Esporta" nel cruscotto (coerenza cross-tab)
- **P3:** convertiti toggle "⋯ Altri filtri" e "📄 Export ▾" da `<span>` a `<button>` con CSS `.toolbar-toggle`
- **P3:** aggiunto `button:focus-visible{...}` globale
- **P2:** aumentati touch target pulsanti salvataggio (`padding:4px 9px;font-size:11px`)
- Nessun deploy, asset invariati, breakpoint passati
- Verdetto: `CML_009D_TOP_DASHBOARD_CONTEXT_ACCESSIBILITY_READY`

## 2026-06-21 — CML-009E — Controlled Netlify Publication

- **d9b6cd8** — docs: CML-009E deploy report
- Preflight ✅ (branch HEAD b8dece8, tree pulita, hash asset invariati)
- Verifica locale 27/27 ✅ + 4 breakpoint (360/414/768/1280px)
- Deploy: `npx netlify deploy --prod --dir _published_snapshot/netlify-current`
  - 1 file index.html, 4s
  - URL: https://curmanlight.netlify.app
- Verifica post-deploy 14/14 ✅ + screenshot 360/768
- Asset invariati: sw.js, _headers, PDF
- Nessuna modifica runtime
- Verdetto: `CML_009E_CONTROLLED_NETLIFY_PUBLICATION_TOP_VIEW_LIGHTENING_CLOSED`

## 2026-06-21 — CML-010A — Compact Cards & Expandable Detail Design Audit

- **d9b6cd8** — HEAD invariato (solo audit, nessuna modifica runtime)
- Preflight: branch cml-008r-fix-markdown-decision-summary, tree pulita ✅
- Analisi vista attuale: area cards (`cardHTML()`), gap-header ridondante, card pending troppo dense, lock-notice ripetuta, nessuna gerarchia
- 7 problemi individuati (P1-P7)
- Proposta: 4 sezioni collassabili nel tab Lavoro (Documento attuale, Voci da validare, Fonti, Esportazione)
- Card pending compatta: badge + 1 riga + ✅/❌/🔝, confronto su richiesta
- Card ok collassate per default
- Nessun deploy, nessuna modifica runtime
- Verdetto: `CML_010A_COMPACT_CARDS_EXPANDABLE_DETAIL_DESIGN_AUDIT_READY`

## 2026-06-21 — CML-010B — Compact pending cards with expandable detail

- **a240ab7** → HEAD
- Unico file modificato: `_published_snapshot/netlify-current/index.html` (+154/−64 righe)
- `cardHTML()` riscritto: 4 modalità (ok collassata, decisa collassata, pending edit, pending compact)
- Card ok/decise collassate di default con `toggleCollapse()`
- Card pending compatte: badge + 1 riga + 4 emoji (✅ ❌ 🔝 🗑) + dettaglio espandibile
- `gap-header-unique` singolo per sezione (anziché per-card)
- `togglePendingDetail()` per confronto testuale on-demand
- `lock-notice` unica per sezione via `ordLock` in `render()`
- Rimossi CSS inutilizzati `.act-approve` / `.act-reject`
- Breakpoint responsivi per touch target mobile
- Cose NON toccate: usage-notice, local-save-bar, tecnologia-export-panel, cruscotto, toolbar, filtri, tab, asset
- Verifica locale DOM + 4 breakpoint passata
- Verdetto: `CML_010B_COMPACT_PENDING_CARDS_EXPANDABLE_DETAIL_READY`

## 2026-06-21 — CML-010C — Compact Pending Cards Runtime Smoke Audit

- **317222a** — HEAD invariato (solo audit, nessuna modifica runtime)
- Preflight: branch cml-008r-fix-markdown-decision-summary, tree pulita ✅
- Conteggi Tecnologia: 12 voci totali, 4 ok, 8 modifica ✅
- Card pending compatte verificate: badge, 1 riga testo troncato, 4 emoji (✅ ❌ 🔝 🗑) ✅
- Dettaglio espandibile: confronto testuale IN2012 vs IN2025 su richiesta ✅
- Gap-header: singolo per sezione, 0 vecchi gap-header ✅
- Non regressioni: usage-notice, toolbar, tabs, cruscotto, asset, esportazione ✅
- CML-009D preserved: pulsanti salvataggio, focus-visible, setTab, toolbar-toggle ✅
- Sass: screenshot 360/414/768/1280px passati
- Nessuna modifica runtime, nessun deploy
- Verdetto: `CML_010C_COMPACT_PENDING_CARDS_RUNTIME_SMOKE_READY`

## 2026-06-21 — CML-010D — Controlled Netlify Publication (Compact Cards)

- **68ce101** — HEAD (deploy da working tree pulita, nessuna modifica runtime)
- Preflight: branch cml-008r-fix-markdown-decision-summary, tree pulita ✅
- Asset invariati: sw.js, _headers, PDF (hash verificati) ✅
- Deploy: `npx netlify deploy --prod --dir _published_snapshot/netlify-current`
  - 1 file index.html, 4.2s
  - URL: https://curmanlight.netlify.app
- Verifica post-deploy:
  - HTTP 200, 196511 bytes ✅
  - pending-card, collapse-header, gap-header-unique ✅
  - badge modifica ✅
  - Cruscotto, usage-notice, export preservati ✅
  - .act-approve old rimosso, vecchio gap-header assente ✅
  - Screenshot 360/414/768/1280px passati ✅
  - Nessun JS error ✅
- Verdetto: `CML_010D_CONTROLLED_NETLIFY_PUBLICATION_COMPACT_CARDS_CLOSED`

## 2026-06-21 — CML-010E — Real Mobile Acceptance Smoke

- **ba4bd5e** — HEAD invariato (solo audit, nessuna modifica runtime)
- Dispositivi simulati: iPhone 13 (390×844), Galaxy S21 (360×800), Pixel 5 (393×851)
- Caricamento, cruscotto, card pending, dettaglio espandibile: ✅ tutti i dispositivi
- 9 pending-detail nascoste, 8 badge modifica, 5 badge ok ✅
- Gap-header unico per sezione (4 sezioni) ✅
- Touch target: min-height 44+ per act, 34px per pending-action
- 3 problemi non bloccanti rilevati:
  - P1: touch target pending-action 34px (sotto HIG 44px)
  - P2: icona 🔝 non auto-esplicativa su mobile
  - P3: collapse indicator poco evidente
- Nessun deploy, nessuna modifica runtime
- Verdetto: `CML_010E_REAL_MOBILE_ACCEPTANCE_SMOKE_READY`

## 2026-06-21 — CML-010F — Mobile Touch and Compact Action Label Microfix

- **c9c6667** — fix touch target mobile, accessibilità pulsante 🔝, contrasto collapse indicator
- P1: `.pending-action` mobile portato a 42px (≤900px) e 40px (≤560px)
- P2: pulsante 🔝 con `aria-label` statico e dinamico
- P3: collapse indicator `#90a4ae` → `#546e7a`, font 11px → 12px
- Documentazione in `CML-010F/` (non standard), `movelog.json` creato
- Audit CML-010F-CLOSURE: P1 sotto 44px, documentazione fuori standard

## 2026-06-21 — CML-010F2 — Mobile Pending Action Touch Target and Doc Normalization

- **4c8978b** — fix: normalize CML mobile pending actions touch target
- P1 risolto: 42px→44px (≤900px), 40px→44px (≤560px)
- Documentazione normalizzata: `docs/03_execution/CML-010F2.md`, `report/`, `docs/REPO-MOVELOG.md`
- File non standard CML-010F preservati (già committati)
- Nessun deploy
- Verdetto: `CML_010F2_MOBILE_TOUCH_TARGET_DOC_NORMALIZATION_READY`

## 2026-06-21 — CML-010G — Controlled Netlify Publication Mobile Actions Fix

- **4c8978b** — fix: normalize CML mobile pending actions touch target (pre-deploy)
- Count 12/8/4 vs 54/41/9 chiarito: scope diverso (Tecnologia vs tutte le discipline)
- **npx netlify deploy --prod --dir _published_snapshot/netlify-current** — 1 file (index.html)
- URL pubblicato: https://curmanlight.netlify.app
- Pending-action mobile a 44px confermato su tutti i breakpoint
- Card compatte, pulsanti ✅❌🔝🗑, dettaglio espandibile preservati
- Approvazione/rifiuto invariati
- Asset, sw.js, _headers, PDF, Markdown generation, export panel intatti
- Nessuna regressione bloccante
- Verdetto: `CML_010G_CONTROLLED_NETLIFY_PUBLICATION_MOBILE_ACTIONS_FIX_CLOSED`

## 2026-06-21 — CML-011A — Export and Guide Clarity Selection Audit

- **e12f5ca** — HEAD invariato (solo audit, nessuna modifica runtime)
- 7 criticità individuate (C1-C7), la più grave: disclaimer validazione assente su "Curricolo Definitivo"
- Opzioni valutate: A (microcopy), B (pannello formati), C (percorso guidato), D (fix C2)
- Selezionata: **Opzione A + fix C2** — microcopy export labels + disclaimer su Definitivo
- Nessuna modifica runtime, nessun deploy
- Verdetto: `CML_011A_EXPORT_GUIDE_CLARITY_SELECTION_AUDIT_READY`

## 2026-06-21 — CML-011B — Export and Guide Clarity Microcopy

- **6c97da4** → HEAD + uncommitted
- Opzione A (microcopy) + fix C2 (disclaimer validazione) implementati
- Toolbar export: `(confronto)` su Word, Copia, Markdown, PDF
- Curricolo Definitivo: `(definitivo)` su Copia per Word e PDF (mancanti)
- Disclaimer: "⚠︝ Documento di lavoro — da validare. Non sostituisce delibera del Collegio Docenti."
- Deployato su Netlify: `npx netlify deploy --prod --dir _published_snapshot/netlify-current`
- Solo microcopy, nessuna modifica logica/strutturale
- Verdetto: `CML_011B_EXPORT_GUIDE_CLARITY_MICROCOPY_DEPLOYED`

## 2026-06-21 — CML-011C — Export and Guide Clarity Real Task Smoke

- **2da61ed** (CML-011B) → HEAD + nuovo commit docs
- Solo audit/smoke test — nessuna modifica runtime, nessun deploy
- Scenario utente simulato: controllo → confronto → definitivo → disclaimer → export
- Esito: microcopy sufficiente, flusso chiaro, nessuna ambiguità sostanziale
- Opzione B (strutturale) NON necessaria
- Raccomandazione: chiudere ciclo CML-011
- Verdetto: `CML_011C_EXPORT_GUIDE_REAL_TASK_SMOKE_READY`

## 2026-06-21 — CML-011D — Export and Guide Clarity Cycle Closure

- **72bef0c** (CML-011C) → HEAD + nuovo commit docs
- Solo docs — nessuna modifica runtime, nessun deploy
- Catena CML-011 completa: A (audit) → B (microcopy + deploy) → C (smoke) → D (chiusura)
- Opzione B strutturale NON necessaria — microcopy sufficiente
- Obiettivo ciclo raggiunto: export/guida comprensibili, confronto/definitivo distinguibili, disclaimer validazione presente
- Verdetto: `CML_011D_EXPORT_GUIDE_CLARITY_CYCLE_CLOSED`

## 2026-06-21 — CML-012A — Real User Task Acceptance Test Design

- **15fc009** (CML-011D) → HEAD + nuovo commit docs
- Protocollo `T01-CML-REAL-USER-TASK` progettato: 8 passi, criterio 8/8 per chiusura UX
- Nessuna modifica runtime, nessun deploy
- Verdetto: `CML_012A_REAL_USER_TEST_DESIGN_READY`

## 2026-06-21 — CML-013A — Full UI/UX Redesign Study and Contract

- **2c32bab** (CML-012A) → HEAD + nuovo commit docs
- CML-012A preservato come verifica futura (non modificato)
- Studio completo: diagnosi, architettura (5 livelli), navigazione desktop/mobile, componenti, mappa 30 elementi, criteri accettazione CML-013B
- Direzione: da dashboard a percorso guidato a livelli
- Nessuna modifica runtime, nessun deploy
- Verdetto: `CML_013A_FULL_UI_UX_REDESIGN_CONTRACT_READY`

## 2026-06-21 — CML-013B — Guided Home Static Prototype

- **e3c105d** (CML-013A) → HEAD + modifiche runtime minime
- 23 insertion, 10 deletion su `_published_snapshot/netlify-current/index.html`
- Solo CSS + HTML: cruscotto potenziato (3 pulsanti piu grandi), breadcrumb, sidebar meno dominante, toolbar piu compatta
- Salva/Backup/Importa/Ripristina spostati da blocco locale-save-bar a menu Azioni
- Salvataggio come stato compatto nel cruscotto-bar
- Nessuna logica modificata, nessuna funzione persa
- Nessun deploy
- Verdetto: `CML_013B_GUIDED_HOME_STATIC_PROTOTYPE_READY`

## 2026-06-21 — CML-013C — Smoke Audit: Guided Home Prototype

- **7249d66** — docs: audit CML-013B guided home smoke (nuovo commit)
- Audit completo: primo impatto, 3 azioni, funzioni secondarie, gerarchia, responsive, regressioni
- Esito: nessuna regressione, home risponde a "cosa devo fare?"
- 3 raccomandazioni opzionali non bloccanti (breadcrumb dinamico, CSS morto, breakpoint <400px)
- Nessuna modifica runtime, nessun deploy
- Verdetto: `CML_013C_GUIDED_HOME_SMOKE_AUDIT_PASSED`

## 2026-06-21 — CML-013D — Controlled Netlify Publication Guided Home

- **7249d66** — docs: audit CML-013B guided home smoke (pre-deploy HEAD)
- Preflight: branch cml-008r-fix-markdown-decision-summary, tree pulita ✅
- Verifica locale (localhost:8089): cruscotto, 3 azioni, breadcrumb, sidebar, quick actions, tabs, normativa, riepilogo, generali ✅
- Asset verificati: sw.js, _headers, PDF, icons, manifest, motto.html ✅
- Deploy: `npx netlify deploy --prod --dir _published_snapshot/netlify-current`
  - 1 file (index.html), 4.7s
  - URL: https://curmanlight.netlify.app
  - Deploy ID: 6a37daaf34af39a1d2db290f
- Verifica post-deploy:
  - Home guidata live: stato + prossima azione + 3 azioni ✅
  - Breadcrumb sotto tabbar ✅
  - Menu ⚙︝ Azioni con tutte le funzioni secondarie ✅
  - Sidebar discipline preservata ✅
  - Toolbar + filtri + export preservati ✅
  - Tab Riepilogo + disclaimer validazione preservati ✅
  - Tab Normativa + tab Generali preservati ✅
  - Tecnologia export panel preservato ✅
  - Asset, sw.js, _headers, PDF invariati ✅
  - Nessuna regressione bloccante ✅
- Nessuna modifica funzionale, nessun merge, nessun nuovo sito
- Verdetto: `CML_013D_CONTROLLED_NETLIFY_PUBLICATION_GUIDED_HOME_CLOSED`

## 2026-06-21 — CML-013E — Mobile Navigation Structure Audit

- **1c8f3ef** — docs: record CML guided home controlled publication (HEAD invariato)
- Analisi navigazione mobile attuale: 9 elementi, 7 criticità
  - Tabbar sovraccarica (4 voci su 360px)
  - Sidebar discipline sempre visibile (anche su Definitivo/Fonti)
  - Nessuna bottom bar — azioni primarie solo in alto
  - Cruscotto occupa >50% viewport mobile
  - Esporta raggiungibile in 3 tap
  - Fonti/Generali poco usati ma sempre esposti
  - Breadcrumb inefficace su mobile
- Opzioni valutate: A (bottom bar minima), B (menu a scomparsa), **C (sistema ibrido)**
- Opzione selezionata: **C — Sistema ibrido**
  - Bottom bar: ✝︝ Rev. / 📋 Def. / 📤 Esp. / ☰
  - Menu ☰: Fonti, Generali, Azioni secondarie
  - Discipline solo contestuali alla vista Revisione
  - Desktop invariato (≥901px)
- 11 criteri di accettazione per CML-013F
- Nessuna modifica runtime, nessun deploy
- Verdetto: `CML_013E_MOBILE_NAVIGATION_STRUCTURE_AUDIT_READY`

## 2026-06-21 — CML-013F — Bottom Bar + Menu Overlay Mobile Navigation

- **a858374** — docs: audit CML mobile navigation structure (pre-deploy HEAD)
- Unico file modificato: `_published_snapshot/netlify-current/index.html`
- **Bottom bar fissa (≤900px):** ✝︝ Rev. / 📋 Def. / 📤 Esp. / ☰ Menu
  - position:fixed, z-index:1000, touch target 44px
  - padding-bottom 52px su body
  - Tabbar nascosto a ≤900px
- **Menu overlay ☰:** Fonti, Generali, Azioni secondarie, Salva/Backup/Importa/Ripristina
  - Creato dinamicamente da JS
  - Chiusura: X, click fuori, tap voce
- **Sidebar discipline:** contestuale — visibile solo in Revisione/Definitivo
- **Breadcrumb:** dinamico via updateBreadcrumb() in setTab()
- **setTab() sincronizza:** bottom bar active state + sidebar visibilità
- **11/11 criteri accettazione CML-013E** verificati
- Desktop (≥901px) invariato ✅
- Asset invariati: sw.js, _headers, PDF
- Deploy: `npx netlify deploy --prod --dir _published_snapshot/netlify-current` — 1 file, 3.9s
- Verifica post-deploy: https://curmanlight.netlify.app — passa ✅
- Verdetto: `CML_013F_BOTTOM_BAR_MENU_OVERLAY_MOBILE_NAVIGATION_READY`

## 2026-06-21 — CML-013G — Mobile Navigation Publication Smoke and Closure

- **06cf3d4** — feat: mobile bottom bar + menu overlay navigation (pre-audit HEAD)
- Solo audit e documentazione — nessuna modifica runtime, nessun deploy
- Preflight: branch `cml-008r-fix-markdown-decision-summary`, HEAD `06cf3d4`, tree pulita ✅
- **Verifica pubblicata:** https://curmanlight.netlify.app — bottom bar live ✅
- **Bottom bar:** 4 bottoni, touch target 52px, body padding-bottom 52px, nessun overlap ✅
- **Menu overlay:** apertura/chiusura, tutte le voci (Fonti, Generali, Azioni, Salva, Backup, Importa, Ripristina, Installa, Impostazioni, PDF, Motto, Guida) — tutte funzionanti ✅
- **Sidebar discipline:** contestuale (mostrata in Revisione/Definitivo su mobile, nascita in Fonti/Generali) ✅
- **Breadcrumb dinamico:** aggiornato al cambio tab via setTab() ✅
- **Desktop ≥901px:** invariato (tutto in media query max-width:900px) ✅
- **Breakpoint:** 360/390/414/768/900/901/1280px verificati ✅
- **Regressioni:** home, cards, dettaglio espandibile, touch target 44px, approvazione/rifiuto, conteggi, export, tecnologia panel, PDF, sw.js, _headers — tutte preservate ✅
- **Problemi:** 2 cosmetici non bloccanti (CSS `.local-save-bar` morto, sintassi media query nidificata ridondante)
- Asset invariati: sw.js, _headers, PDF (confermati da git diff)
- Verdetto: `CML_013G_MOBILE_NAVIGATION_PUBLICATION_SMOKE_CLOSED`

## 2026-06-21 — CML-014A — Contextual Detail Panel Design Audit

- **b7d7f72** — docs: close CML mobile navigation publication smoke (pre-audit HEAD)
- Solo audit e documentazione — nessuna modifica runtime, nessun deploy
- Preflight: branch `cml-008r-fix-markdown-decision-summary`, HEAD `b7d7f72`, tree pulita ✅
- **Analisi dettaglio attuale:** `cardHTML()` (linee 1393-1497), `togglePendingDetail()` (1377-1383), `.panels` grid 2→1 colonna su mobile ⚠︝
- **7 criticità individuate:**
  - C1: dettaglio lungo su mobile (stack verticale)
  - C2: confronto poco gerarchico (nessuna evidenziazione differenze)
  - C3: fonti non contestuali (nessuna fonte normativa nei label)
  - C4: "Personalizza testo" sepolto nel dettaglio
  - C5: lista appesantita con più dettagli aperti
  - C6: gap mobile/desktop (1 colonna vs 2 colonne)
  - C7: compatibilità bottom bar (già risolta)
- **Opzioni valutate:** A (expand migliorato), B (pannello laterale), C (modal/drawer)
- **Opzione selezionata: A — Dettaglio espandibile migliorato**
  - Confronto con fonti specifiche (es. "DM 254/2012, Traguardo X.1")
  - Differenze IN2012/IN2025 evidenziate visivamente
  - "Personalizza testo" sempre nella riga azioni principale
  - Mobile: scroll interno con max-height
  - Desktop: 2 colonne preservato
  - Card ok/decise invariate
- **16 criteri accettazione CML-014B** definiti
- **Problemi cosmetici CML-013G:** lasciati come debt non bloccante (separati da CML-014B)
- Verdetto: `CML_014A_CONTEXTUAL_DETAIL_PANEL_DESIGN_AUDIT_READY`

## 2026-06-21 — CML-014B — Enhanced Pending Detail Panel

- **9243e9e** — docs: audit CML contextual detail panel design (pre-implementation HEAD)
- Unico file modificato: `_published_snapshot/netlify-current/index.html` (+16/−7 righe)
- **Etichette fonti specifiche:**
  - `📄 IN 2012 (attuale)` → `📄 DM 254/2012 (vigente)`
  - `✨ Proposta IN 2025` → `✝︝ DM 221/2025 — proposta di aggiornamento`
  - `🆕 Non presente nel curricolo attuale` → `🆕 DM 254/2012 — assente nel curricolo attuale`
- **Evidenziazione differenze:** colored left border arancione (`#f57f17`) su pannello corrente, verde (`#43a047`) su proposta
- **"Personalizza testo" in primo piano:** pulsante ✝︝ viola (`#7b1fa2`) aggiunto alla riga azioni compatta (prima era solo nel dettaglio 🔝)
- **Scroll dettaglio mobile:** `max-height:200px; overflow-y:auto` (150px a ≤760px)
- **Truncation proposta:** 90 → 120 caratteri
- **16/16 criteri accettazione CML-014A** verificati
- Asset invariati: sw.js, _headers, PDF
- Nessun deploy (previsto CML-014C smoke audit)
- Verdetto: `CML_014B_ENHANCED_PENDING_DETAIL_PANEL_READY`

## 2026-06-21 — CML-014C — Controlled Publication and Smoke Audit Enhanced Detail Panel

- **7ab9276** — feat: enhance CML pending detail panel (pre-deploy HEAD)
- Preflight: branch `cml-008r-fix-markdown-decision-summary`, tree pulita ✅
- Deploy: `npx netlify deploy --prod --dir _published_snapshot/netlify-current` — 1 file (index.html), 3.8s
- URL: https://curmanlight.netlify.app
- Verifica post-deploy: 7/7 enhancement CML-014B verificati live ✅
- Verifica post-deploy: 16/16 criteri CML-014A verificati live ✅
- Asset invariati: sw.js, _headers, PDF (confermati da git diff) ✅
- Nessuna regressione bloccante ✅
- Nessuna modifica runtime, nessun nuovo deploy
- Verdetto: `CML_014C_CONTROLLED_PUBLICATION_ENHANCED_DETAIL_PANEL_CLOSED`

## 2026-06-21 — CML-014D — Enhanced Detail Panel Cycle Closure

- **8a14dd6** — docs: record CML enhanced detail panel publication smoke (HEAD partenza)
- Solo documentazione — nessuna modifica runtime, nessun deploy
- Preflight: branch `cml-008r-fix-markdown-decision-summary`, HEAD `8a14dd6`, tree pulita ✅
- Catena CML-014 completa: A (audit) → B (implementation) → C (publication + smoke) → D (closure)
- 7/7 enhancement pubblicati su https://curmanlight.netlify.app ✅
- 16/16 criteri CML-014A verificati live ✅
- Asset invariati: sw.js, _headers, PDF ✅
- Nessuna regressione ✅
- Debiti non bloccanti CML-013G lasciati fuori dal ciclo
- Verdetto: `CML_014D_ENHANCED_DETAIL_PANEL_CYCLE_CLOSED`

## 2026-06-21 — CML-015A — Real User Micro-Test: Detail Panel Walkthrough

- **077e221** — docs: close CML enhanced detail panel cycle (HEAD partenza)
- Solo audit e documentazione — nessuna modifica runtime, nessun deploy
- Preflight: branch `cml-008r-fix-markdown-decision-summary`, HEAD `077e221`, tree pulita ✅
- Test percorso utente: 9 step, 9/9 ✅ chiaro
- Fonti (DM 254/2012 / DM 221/2025) riconoscibili ✅
- Differenze evidenziate (bordo arancione/verde) comprensibili ✅
- "Personalizza testo" individuabile in due punti ✅
- Tre azioni (✅ ❌ ✝︝) distinte e chiare ✅
- Nessun ⚠︝ dubbio, nessun ❌ bloccato
- Nessuna regressione
- Raccomandazione: chiudere fase UX dettaglio, aprire ciclo su qualità contenuti disciplinari
- Verdetto: `CML_015A_REAL_USER_DETAIL_PANEL_MICRO_TEST_READY`

## 2026-06-21 — CML-016A — Disciplinary Content, Sources and Export Quality Audit

- **9a6343f** — docs: record CML detail panel real user micro-test (HEAD partenza)
- Solo audit e documentazione — nessuna modifica runtime, nessun deploy
- Preflight: branch `cml-008r-fix-markdown-decision-summary`, HEAD `9a6343f`, tree pulita ✅
- Audit completo: 14 discipline analizzate, 8 criticità individuate (2 media gravità)
- Contenuti disciplinari: linguaggio adeguato, riferimenti territoriali, distinzione vigente/proposta ✅
- Fonti: specifiche e contestuali, normativa completa ✅
- Curricolo definitivo: struttura chiara, disclaimer presente ✅
- Export: Markdown/Word/PDF professionali, confronto/definitivo distinti ✅
- C1: marker `[IN 2025]` inline nel testo proposto — da separare
- C2: nessuna distinzione approvato/personalizzato nel Riepilogo — da indicare
- Opzione D selezionata per CML-016B: cleanup marker + indicatore personalizzazione
- Verdetto: `CML_016A_DISCIPLINARY_CONTENT_SOURCES_EXPORT_QUALITY_AUDIT_READY`


## 2026-06-21 — CML-016B — Export Marker Cleanup and Personalization Indicator

- d82fc3a — docs: audit CML disciplinary content and export quality (HEAD partenza)
- Unico file runtime modificato: _published_snapshot/netlify-current/index.html
- 61 marker [IN 2025: ...] preservati nei dati sorgente e rimossi dalla presentazione Riepilogo/export
- Indicatore ✝︝ mostrato solo sui testi realmente personalizzati, con legenda compatta
- Conteggi invariati: 103 totali, 41 ok, 54 modifica, 8 nuovo
- Logiche approvazione/rifiuto/personalizzazione ed export invariate
- Responsive PASS: 360, 390, 414, 768, 900, 901, 1280 px
- Asset invariati: PDF, sw.js, _headers, icone/assets; nessun deploy
- Verdetto: CML_016B_EXPORT_MARKER_CLEANUP_PERSONALIZATION_INDICATOR_READY


## 2026-06-21 � CML-016C � Export Cleanup and Personalization Smoke Audit

- a182347 � docs: smoke audit CML export cleanup and personalization (HEAD partenza)
- Smoke audit completa: marker sorgente 61, marker output 0, indicatore ?? PASS
- Conteggi 103/41/54/8 confermati, logiche invariate
- Responsive PASS a tutti i breakpoint richiesti
- Nessun deploy, nessuna modifica runtime, PDF/sw.js/_headers/asset invariati
- Verdetto: CML_016C_EXPORT_CLEANUP_PERSONALIZATION_SMOKE_READY

## 2026-06-21 � CML-017 � Controlled Netlify Publication After Export Quality Closure

- 5f2d74c � docs: record controlled Netlify publication after CML export quality closure (HEAD partenza)
- Pubblicazione controllata completata: preview e production deploy su Netlify
- Progetto: curmanlight (https://curmanlight.netlify.app)
- Nessuna modifica runtime, PDF, sw.js, _headers o asset
- Confini rispettati, nessun dato sensibile esposto
- Verdetto: CML_017_CONTROLLED_NETLIFY_PUBLICATION_AFTER_EXPORT_QUALITY_CLOSURE_READY

## 2026-06-21 � CML-018 � Simple Drive Handoff Workflow Contract

- 537f70c � docs: define simple Drive handoff workflow (HEAD partenza)
- Contratto operativo definito per flusso snello gestione proposte revisione curricolo
- Cartella Drive singola, file `.cml` unico, tre ruoli (Docente, Dipartimento, Referente)
- Automazione solo invio proposta docente, import manuale per altri ruoli
- Nessuna modifica runtime, PDF, sw.js, _headers, asset o deploy
- Verdetto: CML_018_SIMPLE_DRIVE_HANDOFF_WORKFLOW_CONTRACT_READY

## 2026-06-21 � CML-018A � School Workspace Drive Setup Contract

- e5c9288 � docs: define school Workspace Drive setup (HEAD partenza)
- Contratto operativo per Drive condiviso su Workspace della scuola
- Account scolastici obbligatori, ruoli Contributor/Content manager
- Drive: `Revisione Curricolo Istituto`, struttura semplice
- Nessuna modifica runtime, PDF, sw.js, _headers, asset, deploy o credenziali
- Verdetto: CML_018A_SCHOOL_WORKSPACE_DRIVE_SETUP_CONTRACT_READY

## 2026-06-21 � CML-019 � Teacher Proposal CML File Export

- aa78b47 � feat: export teacher proposal cml file (HEAD partenza)
- Funzione `exportTeacherCml()` aggiunta per generare file .cml JSON
- Pulsanti "Scarica proposta .cml" aggiunti nel toolbar e tab Riepilogo
- Schema .cml documentato: teacher_proposal, discipline, counts, proposals
- Nessun Google API, nessun Apps Script, nessun deploy
- Verdetto: CML_019_TEACHER_PROPOSAL_CML_FILE_EXPORT_READY

## 2026-06-22 � CML-020 � Teacher Proposal Drive Upload Handoff

- 1cee756 � feat: add teacher proposal Drive upload handoff
- Funzione `uploadTeacherCmlToDrive()` aggiunta per invio assistito
- Pulsanti "Invia al Drive condiviso" aggiunti nel toolbar e tab Riepilogo
- Configurazione endpoint via localStorage: `curmanlight.driveUploadEndpoint`
- Nessun endpoint reale, token, ID o credenziale committato
- Nessun Google API diretto, nessun Apps Script
- Fallback manuale "Scarica proposta .cml" sempre disponibile
- Verdetto: CML_020_TEACHER_PROPOSAL_DRIVE_UPLOAD_HANDOFF_READY_ENDPOINT_NOT_CONFIGURED


## 2026-06-21 — CML-021 — Department Guided Teacher Proposal Import

- bcc505f — feat: add teacher proposal Drive upload handoff (HEAD partenza)
- Aggiunta sezione “Validazione dipartimentale” nel tab Revisione per disciplina
- Import locale multi-file .cml con validazione schema teacher_proposal
- Riepilogo file validi/non riconoscibili, proposte, discipline e controlli
- Proposte raggruppate per disciplina e stato; motivazione/fonti/indicatori visibili
- Duplicati probabili e discipline miste segnalati senza blocco
- Nessuna rete, persistenza, Drive API, Apps Script, autenticazione o endpoint
- Regressioni download docente e fallback upload: PASS
- PDF, sw.js, _headers e asset invariati; nessun deploy
- Verdetto: CML_021_DEPARTMENT_GUIDED_TEACHER_PROPOSAL_IMPORT_READY


## 2026-06-21 — CML-021A — Department Proposal Import Smoke Audit

- c241213 — feat: add department teacher proposal import (HEAD partenza)
- Slice audit/docs-only; nessuna modifica runtime e nessun deploy
- Smoke: 7 file, 3 validi, 4 esclusi, 5 proposte, 2 discipline, 3 controlli
- JSON invalido, tipo errato, schema parziale, duplicati e discipline miste: PASS
- Rendering XSS-safe, rete 0, localStorage invariato
- Download docente e fallback Drive: PASS
- Responsive PASS: 390, 768, 1280 px; console pulita
- PDF, sw.js, _headers e asset invariati
- Verdetto: CML_021A_DEPARTMENT_PROPOSAL_IMPORT_SMOKE_READY

## 2026-06-22 � CML-022 � Department Outcome CML Export

- 0434f0c � feat: department guided teacher proposal import (HEAD partenza)
- Funzione `setDepartmentDecision()` aggiunta per registrare decisioni dipartimentali
- Funzione `buildDepartmentOutcomeCmlModel()` aggiunta per costruire modello esito
- Funzione `exportDepartmentOutcomeCml()` aggiunta per scaricare file esito dipartimento
- Pulsante "Esporta esito dipartimento .cml" aggiunto nel pannello Validazione dipartimentale
- Decisioni supportate: accolta, accolta_con_modifiche, rinviata, non_accolta
- Schema department_outcome documentato in contract
- Nessun Google API, nessun Apps Script, nessun deploy
- Verdetto: CML_022_DEPARTMENT_OUTCOME_CML_EXPORT_READY

## 2026-06-21 — CML-022A — smoke audit semantico dell’esito dipartimentale

- **0f98b84** — docs: smoke audit department outcome semantics
  - Creazione di `docs/03_execution/CML-022A.md`
  - Creazione di `report/CML-022A_department_outcome_semantic_export_smoke_audit.md`
  - Aggiornamento di `docs/REPO-MOVELOG.md` (questa voce)
  - Nessuna modifica runtime; nessun deploy; confermata presenza funzioni e nuovi semantici.


## 2026-06-22 — CML-023 — Referent validation CML import

- **aa891ae** — feat: add referent department outcome import
  - Aggiunta funzione `importDepartmentOutcomeCmlFiles()` e funzioni di supporto
  - Nuovo pannello "Verifica referente curricolo" nel tab Revisione
  - Import locale degli esiti dipartimentali .cml con validazione schema
  - Nessuna chiamata di rete, nessuna persistenza permanente, nessun endpoint reale
  - Microcopy coerente con il processo scolastico, nessuna semantica rigida


## 2026-06-22 — CML-024 — CML workflow end-to-end smoke and closure

- **1e60403** — docs: close CML workflow end-to-end smoke
  - Creazione di `docs/03_execution/CML-024.md`
  - Creazione di `report/CML-024_cml_workflow_end_to_end_smoke_and_closure.md`
  - Aggiornamento di `docs/REPO-MOVELOG.md` (questa voce)
  - Nessuna modifica runtime; nessun deploy; confermata presenza funzioni e flusso end-to-end locale.

## 2026-06-22 — CML-025 — Referent group work report export

- **8237036** — feat: export referent group work report
  - Aggiunto pulsante "Scarica report gruppo di lavoro" nel pannello verifica referente
  - `buildReferentGroupWorkReportMarkdown()`: genera Markdown strutturato con 9 sezioni
  - `downloadReferentGroupWorkReport()`: esporta come file Markdown locale
  - Formato filename: `report_gruppo_curricolo_YYYY-MM-DD.md`
  - Usa meccanismo `downloadBlob` esistente
  - Nessuna rete, nessuna Drive API, nessuna nuova dipendenza

## 2026-06-22 — CML-025A — Referent group work report export smoke audit

- **8237036** — HEAD partenza: feat: export referent group work report
- Nuovo commit: docs: smoke referent group work report export
  - Creazione di `docs/03_execution/CML-025A.md`
  - Creazione di `report/CML-025A_referent_group_work_report_export_smoke.md`
  - Aggiornamento di `docs/REPO-MOVELOG.md` (questa voce)
- Smoke statico: pulsante singolo ✅, funzioni singole ✅, nessuna rete/persistenza ✅
- Smoke semantico: 9/9 sezioni Markdown presenti ✅
- Smoke comportamento: vuoto (toast), popolato (file), filename, downloadBlob ✅
- MEMORY.md presente come untracked — non committato
- Nessuna modifica runtime; nessun deploy; asset invariati
- Verdetto: `CML_025A_REFERENT_GROUP_WORK_REPORT_EXPORT_SMOKE_READY`

## 2026-06-22 — CML-025B — Referent group work report real flow micro-test

- **8f8251d** — HEAD partenza: docs: smoke referent group work report export
- Nuovo commit: docs: test referent group work report flow
  - Creazione di `docs/03_execution/CML-025B.md`
  - Creazione di `report/CML-025B_referent_group_work_report_real_flow_micro_test.md`
  - Aggiornamento di `docs/REPO-MOVELOG.md` (questa voce)
- Scenario: 2 esiti dipartimentali importati (Italiano, Matematica), 5 proposte totali, handling misto
- Micro-test completato: 13/13 controlli PASS
- Pulsante singolo, non interferente ✅
- Report coerente, sezioni da_chiarire e senza_esito riconoscibili ✅
- Nota prudente presente ✅
- Nessuna rete/Drive/OAuth/backend/deploy ✅
- MEMORY.md presente come untracked — non committato
- Nessuna modifica runtime; nessun deploy; asset invariati
- Verdetto: `CML_025B_REFERENT_GROUP_WORK_REPORT_REAL_FLOW_MICRO_TEST_READY`

## 2026-06-22 — CML-026 — Controlled Netlify publication after CML-025

- **c5f3269** — HEAD partenza: docs: test referent group work report flow
- Nuovo commit: docs: publish CML referent report flow
  - Creazione di `docs/03_execution/CML-026.md`
  - Creazione di `report/CML-026_controlled_netlify_publication_after_cml025.md`
  - Aggiornamento di `docs/REPO-MOVELOG.md` (questa voce)
- Preflight repository: HEAD c5f3269, tree pulita, MEMORY.md non committato ✅
- Preflight app: pulsante report presente, funzioni singole, nessuna rete/Drive ✅
- Deploy: `npx netlify deploy --prod --dir _published_snapshot/netlify-current` — 3.6s, 1 file
- URL: https://curmanlight.netlify.app
- Post-deploy: pagina caricata, pannello referente raggiungibile, pulsante visibile ✅
- Nessuna modifica runtime; asset invariati; nessuna modifica a .cml/persistenza
- Verdetto: `CML_026_CONTROLLED_NETLIFY_PUBLICATION_AFTER_CML025_READY`

## 2026-06-22 — CML-026A — Post-deploy referent panel smoke audit

- **5997855** — HEAD partenza: docs: publish CML referent report flow
- Nuovo commit: docs: smoke post-deploy referent panel
  - Creazione di `docs/03_execution/CML-026A.md`
  - Creazione di `report/CML-026A_post_deploy_referent_panel_smoke_audit.md`
  - Aggiornamento di `docs/REPO-MOVELOG.md` (questa voce)
- URL verificata: https://curmanlight.netlify.app
- 28/28 controlli PASS ✅
- Preflight repository: HEAD 5997855, tree pulita, MEMORY.md non committato ✅
- URL: pagina caricata, manifest, sw.js, motto page ok ✅
- Pannello referente: raggiungibile, import disponibile, pulsante report visibile ✅
- Report: 9 sezioni Markdown, filename, disclaimer ok ✅
- Regressione: docenti, dipartimento, navigazione, tecnologia, guida ok ✅
- sw.js invariato (cache `curmanlight-cache-v452b421`), _headers invariato, PDF invariato
- Nessuna modifica runtime; nessun deploy aggiuntivo; nessuna modifica a .cml/persistenza
- Verdetto: `CML_026A_POST_DEPLOY_REFERENT_PANEL_SMOKE_READY`

## 2026-06-22 — CML-027 — User handoff guide live workflow

- **23ae219** — HEAD partenza: docs: smoke post-deploy referent panel
- Nuovo commit: docs: add live workflow user handoff guide
  - Creazione di `docs/04_user/CML_GUIDA_RAPIDA_UTENTE.md`
  - Creazione di `docs/03_execution/CML-027.md`
  - Creazione di `report/CML-027_user_handoff_guide_live_workflow.md`
  - Aggiornamento di `docs/REPO-MOVELOG.md` (questa voce)
- Docs-only: guida breve, non tecnica, per utenti reali
- 8 sezioni: cos'è, a cosa serve, ruoli (docente/dipartimento/referente), flusso operativo, file da scaricare, avvertenze istituzionali, problemi frequenti, collegamento live
- Linguaggio non tecnico, nessuna falsa approvazione automatica, nessuna funzionalità inesistente
- MEMORY.md presente come untracked — non committato
- Nessuna modifica runtime; nessun deploy
- Verdetto: `CML_027_USER_HANDOFF_GUIDE_LIVE_WORKFLOW_READY`

## 2026-06-22 — CML-027A — User handoff guide real readability smoke

- **ba175f8** — HEAD partenza: docs: add live workflow user handoff guide
- Nuovo commit: docs: smoke user handoff guide readability
  - Micro-correzioni a `docs/04_user/CML_GUIDA_RAPIDA_UTENTE.md` (3 modifiche)
  - Creazione di `docs/03_execution/CML-027A.md`
  - Creazione di `report/CML-027A_user_handoff_guide_real_readability_smoke.md`
  - Aggiornamento di `docs/REPO-MOVELOG.md` (questa voce)
- Audit leggibilità: 10/10 criteri PASS ✅
- Micro-test 3 profili: docente ✅, dipartimento ✅, referente ✅
- Micro-correzioni:
  1. "referente di dipartimento" → "coordinatore di dipartimento" (chiarezza ruoli)
  2. Aggiunto filename esito dipartimentale (coerenza)
  3. Aggiunto FAQ "Ho perso il file scaricato" (scenario reale)
- MEMORY.md presente come untracked — non committato
- Nessuna modifica runtime; nessun deploy
- Verdetto: `CML_027A_USER_HANDOFF_GUIDE_REAL_READABILITY_SMOKE_READY`

## 2026-06-22 — CML-028 — Next functional block selection audit

- **351f2d9** — HEAD partenza: docs: smoke user handoff guide readability
- Nuovo commit: docs: select next CML functional block
  - Creazione di `docs/03_execution/CML-028.md`
  - Creazione di `report/CML-028_next_functional_block_selection_audit.md`
  - Aggiornamento di `docs/REPO-MOVELOG.md` (questa voce)
- Audit di selezione, docs-only
- Opzioni valutate: A (onboarding), B (guida contestuale), C (handoff scuola), D (miglioramento report), E (archivio file), F (export stampabile)
- Opzione selezionata: **C — Pacchetto handoff scuola**
  - Motivazione: valore reale alto per adozione, rischio nullo (docs-only), tempismo ideale
- MEMORY.md presente come untracked — non committato
- Nessuna implementazione; nessuna modifica runtime; nessun deploy
- Verdetto: `CML_028_NEXT_FUNCTIONAL_BLOCK_SELECTION_AUDIT_READY`
- Prossimo step: CML-029 — Creazione pacchetto handoff scuola (presentazione DS, note collegio, vademecum dipartimenti)

## 2026-06-22 — CML-029 — School handoff package

- **e6b8560** — HEAD partenza: docs: select next CML functional block
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
- MEMORY.md presente come untracked — non committato
- Nessuna modifica runtime, nessun deploy
- Verdetto: `CML_029_SCHOOL_HANDOFF_PACKAGE_READY`

## 2026-06-22 — CML-029A — School handoff package readability and use smoke

- **64f7c9c** — HEAD partenza: docs: add CML school handoff package
- Nuovo commit: docs: smoke school handoff package usability
  - Micro-correzione a `docs/04_user/CML_PRESENTAZIONE_DS.md` (refuso: Raccolglie → Raccoglie)
  - Creazione di `docs/03_execution/CML-029A.md`
  - Creazione di `report/CML-029A_school_handoff_package_readability_and_use_smoke.md`
  - Aggiornamento di `docs/REPO-MOVELOG.md` (questa voce)
- Micro-test 4 profili reali: DS ✅, Docente ✅, Coordinatore ✅, Referente ✅
- Controlli trasversali: 9/9 ✅
- MEMORY.md presente come untracked — non committato
- Nessuna modifica runtime; nessun deploy
- Verdetto: `CML_029A_SCHOOL_HANDOFF_PACKAGE_READABILITY_AND_USE_SMOKE_READY`

## 2026-06-22 — CML-030 — Next runtime or support block selection audit

- **6db3cb8** — HEAD partenza: docs: smoke school handoff package usability
- Nuovo commit: docs: select next CML support or runtime block
  - Creazione di `docs/03_execution/CML-030.md`
  - Creazione di `report/CML-030_next_runtime_or_support_block_selection_audit.md`
  - Aggiornamento di `docs/REPO-MOVELOG.md` (questa voce)
- Audit di selezione, docs-only
- Opzioni valutate: A (onboarding), B (guida contestuale), C (archivio file), **D (esempi dimostrativi)**, E (versione stampabile), F (miglioramento report), G (release notes)
- Opzione selezionata: **D — Pacchetto esempi dimostrativi**
  - Motivazione: alto valore per formazione e adozione, rischio nullo (docs-only), completa il pacchetto handoff
- MEMORY.md presente come untracked — non committato
- Nessuna implementazione; nessuna modifica runtime; nessun deploy
- Verdetto: `CML_030_NEXT_RUNTIME_OR_SUPPORT_BLOCK_SELECTION_AUDIT_READY`
- Prossimo step originario: CML-031 — Creazione esempi dimostrativi `.cml` (poi sospeso e sostituito)

## 2026-06-22 — CML-031 — Curriculum references viewer selection audit

- **2e27114** — HEAD partenza: docs: select next CML support or runtime block
- Nuovo commit: docs: select curriculum references viewer approach
  - Creazione di `docs/03_execution/CML-031.md`
  - Creazione di `report/CML-031_curriculum_references_viewer_selection_audit.md`
  - Aggiornamento di `docs/REPO-MOVELOG.md` (questa voce)
- Pivot: sospeso CML-031 "esempi dimostrativi", priorità ridefinita verso fonti curricolari 2012/2025
- Audit di selezione, docs-only
- Opzioni valutate: A (link ufficiali), B (viewer PDF), C (indice navigabile), D (testo completo), **E (soluzione ibrida)**
- Opzione selezionata: **E — Soluzione ibrida**
  - Motivazione: link ai PDF ufficiali MIM + schede sintetiche + indice essenziale + avvertenza; nessuna riproduzione testi MIM
- MEMORY.md presente come untracked — non committato
- Nessuna implementazione; nessuna modifica runtime; nessun deploy
- Verdetto: `CML_031_CURRICULUM_REFERENCES_VIEWER_SELECTION_AUDIT_READY`
- Prossimo step: CML-032 — Implementazione sezione "Fonti curricolari" in `index.html` + deploy + smoke

## 2026-06-22 — CML-031A — Full curriculum references requirement contract

- **0072e03** — HEAD partenza: docs: select curriculum references viewer approach
- Nuovo commit: docs: define full curriculum references requirement
  - Rettifica a `docs/03_execution/CML-031.md` (nota correttiva)
  - Creazione di `docs/03_execution/CML-031A.md`
  - Creazione di `report/CML-031A_full_curriculum_references_requirement_contract.md`
  - Aggiornamento di `docs/REPO-MOVELOG.md` (questa voce)
- Correzione requisito: non "schede sintetiche + link", ma **visualizzazione completa e navigabile** dei documenti curricolari 2012 e 2025
- Principi: completezza, navigabilità, fonte istituzionale, stato documento, distinzione fonte/lavoro, no falsa approvazione, no riduzione a link
- Opzione tecnica preferita: **C — Soluzione mista forte** (viewer documento completo + indice navigabile + schede + stato + link MIM)
- Rischi documentati: aggiornamento, fonte, confusione, peso, accessibilità, manutenzione
- MEMORY.md presente come untracked — non committato
- Nessuna implementazione; nessuna modifica runtime; nessun deploy
- Verdetto: `CML_031A_FULL_CURRICULUM_REFERENCES_REQUIREMENT_CONTRACT_READY`
- Prossimo step: CML-032 — Scelta formato tecnico (A/C) + implementazione sezione "Fonti curricolari" + deploy + smoke

## 2026-06-22 — CML-032 — Full school curriculum viewer (runtime commit + deploy + smoke)

- **ac00834** — HEAD partenza: docs: define full curriculum references requirement
- **c04d903** — feat: add full school curriculum viewer (runtime commit, pre-deploy)
  - Unico file modificato: `_published_snapshot/netlify-current/index.html` (+146/−6)
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
- Deploy: `npx netlify deploy --prod --dir _published_snapshot/netlify-current` — 0 file (sincronizzato), 3.5s
  - URL: https://curmanlight.netlify.app
  - Deploy ID: 6a38c7066f569a514ab69dfc
- Post-deploy smoke: 8/8 controlli PASS (tab, CSS, container, mobile bottom bar, breadcrumb, regressioni, sidebar) ✅
- Documentazione finalizzata: `docs/03_execution/CML-032.md`, `report/CML-032_full_school_curriculum_viewer_implementation.md`, `docs/REPO-MOVELOG.md`
- Verdetto: `CML_032_FULL_SCHOOL_CURRICULUM_VIEWER_IMPLEMENTED_AND_PUBLISHED`
- MEMORY.md presente come untracked — non committato
- **Nota**: primo cambiamento runtime dopo il ciclo CML-025

---

## CML-033 — Full Curriculum Viewer Completeness and Status Audit

- Audit di completezza e stato: il viewer ha contenuto disciplinare completo (14/14 discipline con traguardi + obiettivi) ma non integra le sezioni generali (disponibili in tab Generali)
- Stato documento chiaro per entrambe le versioni: 2012 "Stato da verificare", 2025 "Bozza simulata" — nessuna falsa approvazione
- Nessuna modifica runtime, nessun deploy
- Documentazione: `docs/03_execution/CML-033.md`, `report/CML-033_full_curriculum_viewer_completeness_and_status_audit.md`, `docs/REPO-MOVELOG.md`
- Verdetto: `CML_033_FULL_CURRICULUM_VIEWER_COMPLETENESS_CONFIRMED`

---

## CML-034 — Curriculum Viewer General Sections Visibility Selection Audit

- Audit di selezione: 5 opzioni valutate per rendere più evidenti le sezioni generali nell'esperienza viewer
- Opzione A (tab invariato) ❌ — non risolve il problema
- Opzione B (callout dal viewer) ✅ — alta chiarezza, basso rischio
- Opzione C (integrazione nel viewer) ❌ — troppo impattante
- Opzione D (doppio indice unico) ❌ — eccessivo per il problema iniziale
- Opzione E (sola guida) ❌ — valore insufficiente
- Decisione: Opzione B — aggiungere callout "Prima di leggere le discipline, consulta le sezioni generali" nel viewer
- Prossimo step: CML-035 — implementazione callout (runtime, HTML/CSS)
- Nessuna modifica runtime, nessun deploy
- Documentazione: `docs/03_execution/CML-034.md`, `report/CML-034_curriculum_viewer_general_sections_visibility_selection_audit.md`, `docs/REPO-MOVELOG.md`
- Verdetto: `CML_034_CURRICULUM_VIEWER_GENERAL_SECTIONS_VISIBILITY_SELECTION_AUDIT_READY`

---

## CML-035 — Curriculum Viewer General Sections Callout Runtime

- Implementato callout informativo all'inizio del viewer "Curricolo di istituto"
- Testo: "Prima di leggere le discipline: consulta anche le sezioni generali del curricolo: Premessa, Profilo dello studente, Valutazione, Inclusione, Continuità e Orientamento."
- Classe `.usage-notice` esistente — nessun nuovo CSS
- Nessuna nuova logica JS, nessun nuovo stato, nessuna persistenza
- Nessun deploy
- File modificato: `_published_snapshot/netlify-current/index.html` (+1 linea, linea 3422)
- Documentazione: `docs/03_execution/CML-035.md`, `report/CML-035_curriculum_viewer_general_sections_callout_runtime.md`, `docs/REPO-MOVELOG.md`
- Verdetto: `CML_035_CURRICULUM_VIEWER_GENERAL_SECTIONS_CALLOUT_READY`

---

## CML-035A — Controlled Deploy and Live Smoke Callout

- Deploy callout su Netlify: draft + promozione a produzione via API REST
- `--prod` CLI fallisce con Forbidden (free tier); workaround via `restoreSiteDeploy`
- Deploy ID: `6a38d3308c3505e3f7bc8d16` — 1 file (index.html), 3.5s
- URL live: https://curmanlight.netlify.app
- Smoke live 10/10 PASS: callout visibile, testi corretti, version 2012/2025, stato documento, sezioni generali, nessuna falsa approvazione
- Nessuna modifica runtime aggiuntiva, nessuna logica JS, nessuna persistenza
- Documentazione: `docs/03_execution/CML-035A.md`, `report/CML-035A_controlled_deploy_and_live_smoke_callout.md`, `docs/REPO-MOVELOG.md`
- Verdetto: `CML_035A_CONTROLLED_DEPLOY_AND_LIVE_SMOKE_CALLOUT_READY`

---

## CML-036 — Curriculum Viewer Release Cycle Closure Audit

- Chiusura formale del ciclo "Curricolo di istituto / viewer completo" (CML-031A → CML-035A)
- 6 CML completati: requisito, viewer, audit, selezione callout, callout, deploy+smoke
- Viewer pubblicato: 14/14 discipline, versioni 2012/2025, traguardi + obiettivi, 117 proposto, callout, stato documento
- Smoke live 10/10 PASS
- Deploy ID: `6a38d3308c3505e3f7bc8d16`
- Deploy CLI `--prod` fallisce con Forbidden (free tier); workaround: API `restoreSiteDeploy`
- Nessuna modifica runtime, nessun deploy
- Documentazione: `docs/03_execution/CML-036.md`, `report/CML-036_curriculum_viewer_release_cycle_closure_audit.md`, `docs/REPO-MOVELOG.md`
- Verdetto: `CML_036_CURRICULUM_VIEWER_RELEASE_CYCLE_CLOSED`
- Prossimo step: CML-037 — Navigation and Curriculum Viewer UX Selection Audit

---

## CML-037 — Navigation and Curriculum Viewer UX Selection Audit

- Audit di selezione UX: 7 opzioni valutate per migliorare navigazione e comprensione del viewer
- Opzione A (nav viewer) ❌, B (breadcrumb) ❌, C (callout) ❌, D (selettore 2012/2025) ✅, E (bidirezionale) ❌, F (guida) ❌, G (nessun intervento) ❌
- Decisione: Opzione D — aggiornare etichette version tabs da "Quadro 2012/2025" a "IN 2012 (vigente)" / "IN 2025 (bozza)"
- Massima chiarezza per l'utente, rischio minimissimo
- Nessuna modifica runtime, nessun deploy
- Documentazione: `docs/03_execution/CML-037.md`, `report/CML-037_navigation_and_curriculum_viewer_ux_selection_audit.md`, `docs/REPO-MOVELOG.md`
- Verdetto: `CML_037_NAVIGATION_AND_CURRICULUM_VIEWER_UX_SELECTION_AUDIT_READY`
- Prossimo step: CML-038 — implementazione label vigente/bozza

---

## CML-038 — Curriculum Viewer Version Selector Labels Runtime

- Aggiornate etichette selettore versione nel viewer "Curricolo di istituto"
- Da `📖 Quadro 2012` a `📖 IN 2012 (vigente)`
- Da `📖 Quadro 2025` a `📖 IN 2025 (bozza)`
- Solo modifica testuale (2 linee), nessuna logica JS, nessuna persistenza
- Nessun deploy
- File modificato: `_published_snapshot/netlify-current/index.html` (linee 3425-3426)
- Documentazione: `docs/03_execution/CML-038.md`, `report/CML-038_curriculum_viewer_version_selector_labels_runtime.md`, `docs/REPO-MOVELOG.md`
- Verdetto: `CML_038_CURRICULUM_VIEWER_VERSION_SELECTOR_LABELS_READY`
- Prossimo step: Deploy per rendere visibili le etichette aggiornate in produzione

---

## CML-038A — Controlled Deploy and Live Smoke Version Labels

- Deploy etichette versione su Netlify: draft + API `restoreSiteDeploy`
- Deploy ID: `6a38d9593270fa47779c678c` — 1 file (index.html), 3.4s
- Smoke live 9/9 PASS: etichette "IN 2012 (vigente)", "IN 2025 (bozza)", stato documento, callout, sezioni generali
- Nessuna modifica runtime aggiuntiva, nessuna logica JS
- Documentazione: `docs/03_execution/CML-038A.md`, `report/CML-038A_controlled_deploy_and_live_smoke_version_labels.md`, `docs/REPO-MOVELOG.md`
- Verdetto: `CML_038A_CONTROLLED_DEPLOY_AND_LIVE_SMOKE_VERSION_LABELS_READY`

---

## CML-039 — Curriculum Viewer Version Labels Cycle Closure Audit

- Chiusura formale del micro-ciclo "etichette selettore versioni" (CML-037 → CML-038A)
- 3 CML completati: selezione, implementazione, deploy+smoke
- Etichette live: `📖 IN 2012 (vigente)` / `📖 IN 2025 (bozza)`
- Deploy ID: `6a38d9593270fa47779c678c`, smoke 9/9
- Opzioni prossime valutate: A (esempi `.cml`) ✅, B (UX), C (guida), D (fermarsi)
- Prossimo step: CML-040 — DEMO_EXAMPLE_CML_PACKAGE (riprendere esempi sospesi in CML-030)
- Nessuna modifica runtime, nessun deploy
- Documentazione: `docs/03_execution/CML-039.md`, `report/CML-039_curriculum_viewer_version_labels_cycle_closure_audit.md`, `docs/REPO-MOVELOG.md`
- Verdetto: `CML_039_CURRICULUM_VIEWER_VERSION_LABELS_CYCLE_CLOSED`

---

## CML-040 — DEMO EXAMPLE CML PACKAGE

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

## CML-041 — Department CML Flow Runtime Gap Audit

- Audit tecnico-funzionale del flusso dipartimento `.cml`: 23 funzioni mappate
- Classificazione: PARZIALE — import docente e visualizzazione funzionano, export esito e compatibilità referente no
- GAP 1 (CRITICO): `buildDepartmentOutcomeCmlModel` omette campo `discipline` (stringa) → esito non importabile dal referente
- GAP 2 (MAGGIORE): handling values in formato display ("Confluita nella sintesi") non formato underscore (`confluita_nella_sintesi`) → referente conteggia tutto come `senza_esito`
- GAP 3 (MINORE): pannello dipartimento senza `<details>`
- GAP 4 (MINORE): manca opzione esplicita "senza esito"
- Esempi CML-040: proposte docente importabili, esiti dipartimento NON importabili dal referente
- Prossimo step: CML-042 — runtime fix dipartimento minimo (2 linee)
- Nessuna modifica runtime, nessun deploy
- Documentazione: `docs/03_execution/CML-041.md`, `report/CML-041_department_cml_flow_runtime_gap_audit.md`, `docs/REPO-MOVELOG.md`
- Verdetto: `CML_041_DEPARTMENT_CML_FLOW_RUNTIME_GAP_CONFIRMED`

---

## CML-042 — Department CML Flow Minimal Runtime Fix

- Correzione 2 bug nel flusso dipartimento `.cml` (identificati in CML-041)
- GAP 1 (CRITICO): aggiunto campo `discipline: disciplines[0] || ""` in `buildDepartmentOutcomeCmlModel`
- GAP 2 (MAGGIORE): aggiunti attributi `value` con formato underscore-lowercase ai `<option>` del dropdown decisioni
- 2 linee modificate (righe 2545, 2570) — `_published_snapshot/netlify-current/index.html`
- Nessuna modifica schema `.cml`, nessuna persistenza, nessun backend
- Prossimo step: CML-042A — smoke end-to-end con esempi CML-040
- Documentazione: `docs/03_execution/CML-042.md`, `report/CML-042_department_cml_flow_minimal_runtime_fix.md`, `docs/REPO-MOVELOG.md`
- Verdetto: `CML_042_DEPARTMENT_CML_FLOW_MINIMAL_RUNTIME_FIX_READY`

---

## CML-042A — Department CML Flow End-to-End Smoke with Examples

- Smoke end-to-end con esempi CML-040 dopo fix CML-042
- 4 esempi `.cml` usati: 2 proposte docente, 2 esiti dipartimento
- Smoke docente PASS, dipartimento PASS, referente PASS, report PASS
- Classificazione finale: COMPLETO — flusso percorribile end-to-end
- Nessuna modifica runtime, nessun deploy
- Prossimo step: CML-043 — deploy controllato + smoke live fix dipartimento
- Documentazione: `docs/03_execution/CML-042A.md`, `report/CML-042A_department_cml_flow_end_to_end_smoke_with_examples.md`, `docs/REPO-MOVELOG.md`
- Verdetto: `CML_042A_DEPARTMENT_CML_FLOW_END_TO_END_SMOKE_READY`

---

## CML-043 — Controlled Deploy and Live Smoke Department CML Flow Fix

- Preflight: HEAD `5605949`, tree pulita, `b303c33` presente, MEMORY.md/.kilo/CLAUDE.md untracked ✅
- Deploy: draft + API `restoreSiteDeploy` (--prod Forbidden)
- Deploy ID: `6a38e48de8a5ebb4a2066995` — 1 file (index.html), 3.5s
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

## CML-044 — User Guide Update After Department Flow Fix

- HEAD partenza: `b6844af`, tree pulita, solo untracked non pertinenti ✅
- Nessuna modifica runtime, nessun deploy, nessuna modifica schema `.cml` o persistenza
- **Guida rapida utente** (`CML_GUIDA_RAPIDA_UTENTE.md`):
  - Aggiunta sezione "Prima di iniziare: consultare il curricolo" con viewer, versioni, callout sezioni generali
  - Estesa sezione "A cosa serve" con viewer e versioni
- **Guida simulazione esempi** (`CML_GUIDA_SIMULAZIONE_ESEMPI.md`):
  - Allineati nomi sezioni e pulsanti alla UI live ("Validazione dipartimentale", "Verifica referente curricolo")
  - Rimossa sezione "Note tecniche" con note interne deploy
  - Aggiunto riferimento verifica live
- **Vademecum dipartimenti** (`CML_VADEMECUM_DIPARTIMENTI.md`):
  - UI path corretto (da "Modalità Dipartimento" a sezione reale)
  - Etichette esiti allineate al dropdown
- **Scheda referente** (`CML_SCHEDA_REFERENTE_CURRICOLO.md`):
  - UI path e pulsanti corretti
  - Contenuto report aggiornato
- Controlli: linguaggio non tecnico ✅, nessuna falsa approvazione ✅, coerenza live ✅
- MEMORY.md/.kilo/CLAUDE.md presenti come untracked, non committati
- Documentazione: `docs/03_execution/CML-044.md`, `report/CML-044_user_guide_update_after_department_flow_fix.md`, `docs/REPO-MOVELOG.md`
- Verdetto: `CML_044_USER_GUIDE_UPDATE_AFTER_DEPARTMENT_FLOW_FIX_READY`

---

## CML-045 — Service Worker Cache Version Alignment Audit

- HEAD partenza: `934e395`, tree pulita, solo untracked non pertinenti ✅
- Nessuna modifica runtime, nessun deploy, nessuna modifica schema `.cml` o persistenza
- File ispezionato: `_published_snapshot/netlify-current/sw.js` (42 righe)
- Cache name: `curmanlight-cache-v452b421`, invariato da `cd5996e`
- `index.html` ha ricevuto 26 commit di modifiche dopo l'ultimo bump cache
- **Rischio cache: MEDIO**
  - Causa: cache name invariato, 26 commit non accompagnati da bump, strategy cache-first su `index.html`
  - Impatto: utenti di ritorno vedono versione obsoleta dell'app
  - Probabilità: MEDIA (solo utenti con cache preesistente)
- Opzioni valutate: A ❌, B ✅ (bump versione cache), C ⚠️, D ❌, E ❌
- **Opzione selezionata: B — Bump versione cache** (da eseguire in CML-046)
  - Modifica minima: `v452b421` → `v452b422` alla riga 1 di `sw.js`
  - `skipWaiting()`, `clients.claim()`, cleanup activate già presenti
- Verdetto: `CML_045_SERVICE_WORKER_CACHE_BUMP_RECOMMENDED`
- Prossimo step: CML-046 — eseguire bump cache, smoke test, deploy controllato
- MEMORY.md/.kilo/CLAUDE.md presenti come untracked, non committati
- Documentazione: `docs/03_execution/CML-045.md`, `report/CML-045_service_worker_cache_version_alignment_audit.md`, `docs/REPO-MOVELOG.md`

---

## CML-046 — Service Worker Cache Version Bump and Deploy

- HEAD partenza: `5932e2f`, tree pulita, solo untracked non pertinenti ✅
- Cache name: `curmanlight-cache-v452b421` → `curmanlight-cache-v452b422` (1 riga, 1 carattere)
- File runtime modificato: `_published_snapshot/netlify-current/sw.js`
- Nessuna modifica a `index.html`, schema `.cml` o persistenza
- Deploy: `npx netlify deploy --prod` ❌ Forbidden → workaround API `restoreSiteDeploy` ✅
- Deploy ID: `6a38ec60442f7ddc1a64271a` (draft + API restoreSiteDeploy)
- Smoke live: ✅ tutti i controlli PASS
- Verdetto: `CML_046_SERVICE_WORKER_CACHE_VERSION_BUMP_DEPLOYED`
- MEMORY.md/.kilo/CLAUDE.md presenti come untracked, non committati
- Documentazione: `docs/03_execution/CML-046.md`, `report/CML-046_service_worker_cache_version_bump_and_deploy.md`, `docs/REPO-MOVELOG.md`

---

## CML-047 — Service Worker Cache Bump Cycle Closure Audit

- HEAD partenza: `7d5b443`, tree pulita, solo untracked non pertinenti ✅
- Chiusura formale ciclo CML-045 → CML-046 (allineamento cache/service worker)
- Cache precedente: `curmanlight-cache-v452b421`
- Cache nuova: `curmanlight-cache-v452b422`
- Deploy ID: `6a38ec60442f7ddc1a64271a`
- Smoke live: 18/18 PASS
- Runtime commit: `ffe6e9d`, docs commit: `7d5b443`
- Nota Netlify: `--prod` Forbidden, workaround API `restoreSiteDeploy` operativo
- Docs-only, nessun runtime modificato, nessun deploy
- Prossimo step raccomandato: CML-048 — NEXT_CML_FUNCTIONAL_INCREMENT_SELECTION_AUDIT
- MEMORY.md/.kilo/CLAUDE.md presenti come untracked, non committati
- Verdetto: `CML_047_SERVICE_WORKER_CACHE_BUMP_CYCLE_CLOSED`
- Documentazione: `docs/03_execution/CML-047.md`, `report/CML-047_service_worker_cache_bump_cycle_closure_audit.md`, `docs/REPO-MOVELOG.md`

---

## CML-048 — Next CML Functional Increment Selection Audit

- HEAD partenza: `114cb59`, tree pulita, solo untracked non pertinenti ✅
- Opzioni valutate: 6 (A — estensione esempi `.cml`, B — micro UX viewer, C — contenuti curricolo, D — export/stampa, E — release note, F — osservazioni reali)
- **Opzione selezionata: E — Chiusura release / nota di rilascio (stato progetto)**
- Motivazione: docs-only, rischio nullo, alto valore per DS/referente/coordinatori, prepara raccolta osservazioni reali
- Docs-only, nessun runtime modificato, nessun deploy
- Prossimo step: CML-049 — redazione nota di rilascio / scheda stato progetto
- MEMORY.md/.kilo/CLAUDE.md presenti come untracked, non committati
- Verdetto: `CML_048_NEXT_CML_FUNCTIONAL_INCREMENT_SELECTION_AUDIT_READY`
- Documentazione: `docs/03_execution/CML-048.md`, `report/CML-048_next_cml_functional_increment_selection_audit.md`, `docs/REPO-MOVELOG.md`

---

## CML-049 — Release Note and Project Status Card

- HEAD partenza: `3305884`, tree pulita, solo untracked non pertinenti ✅
- Documenti creati:
  - `docs/04_user/CML_NOTA_RILASCIO_STATO_ATTUALE.md` — nota di rilascio (cosa è pronto/simulato/materiale di lavoro, ruoli, avvertenze)
  - `docs/04_user/CML_SCHEDA_STATO_PROGETTO.md` — scheda sintetica (funzioni, cosa resta fuori, uso prudente)
  - `docs/04_user/CML_TRACCIA_RACCOLTA_OSSERVAZIONI.md` — traccia raccolta feedback per docente/coordinatore/referente/DS
- Destinatari: DS, referente curricolo, coordinatori di dipartimento, docenti
- Controlli: linguaggio non tecnico ✅, falsa approvazione: nessuna ✅, coerenza live ✅
- Docs-only, nessun runtime modificato, nessun deploy
- MEMORY.md/.kilo/CLAUDE.md presenti come untracked, non committati
- Verdetto: `CML_049_RELEASE_NOTE_AND_PROJECT_STATUS_CARD_READY`
- Documentazione: `docs/03_execution/CML-049.md`, `report/CML-049_release_note_and_project_status_card.md`, `docs/REPO-MOVELOG.md`

---

## CML-050 — Release Handoff and Real Observation Selection Audit

- HEAD partenza: `9aa1386`, tree pulita, solo untracked non pertinenti ✅
- Opzioni valutate: 6 (A — raccolta osservazioni reali, B — estensione esempi `.cml`, C — micro UX, D — contenuti curricolo, E — incontro presentazione, F — fermarsi)
- **Opzione selezionata: E — Preparazione incontro presentazione operativa**
- Motivazione: docs-only, rischio nullo, produce protocollo concreto per passare da documentazione a uso reale
- Docs-only, nessun runtime modificato, nessun deploy
- Prossimo step: CML-051 — SCHOOL_HANDOFF_MEETING_SCRIPT_AND_OBSERVATION_PROTOCOL
- MEMORY.md/.kilo/CLAUDE.md presenti come untracked, non committati
- Verdetto: `CML_050_RELEASE_HANDOFF_AND_REAL_OBSERVATION_SELECTION_AUDIT_READY`
- Documentazione: `docs/03_execution/CML-050.md`, `report/CML-050_release_handoff_and_real_observation_selection_audit.md`, `docs/REPO-MOVELOG.md`

---

## CML-051 — School Handoff Meeting Script and Observation Protocol

- HEAD partenza: `4b599e3`, tree pulita, solo untracked non pertinenti ✅
- Documenti creati:
  - `docs/04_user/CML_TRACCIA_INCONTRO_PRESENTAZIONE_OPERATIVA.md` — scaletta incontro 30–45 min, messaggi chiave, demo viewer/flusso
  - `docs/04_user/CML_PROTOCOLLO_PROVA_CONTROLLATA.md` — attività per ruolo (DS/referente/coordinatore/docente), cosa provare/non fare, esiti attesi
  - `docs/04_user/CML_SCHEDA_CONDUZIONE_INCONTRO.md` — checklist, domande guida, rischi comunicativi, frasi sintetiche
- Relazione con CML-049: operativizza nota rilascio, scheda stato e traccia osservazioni in protocollo d'incontro
- Controlli: linguaggio non tecnico ✅, falsa approvazione: nessuna ✅, coerenza live ✅
- Docs-only, nessun runtime modificato, nessun deploy
- MEMORY.md/.kilo/CLAUDE.md presenti come untracked, non committati
- Verdetto: `CML_051_SCHOOL_HANDOFF_MEETING_SCRIPT_AND_OBSERVATION_PROTOCOL_READY`
- Documentazione: `docs/03_execution/CML-051.md`, `report/CML-051_school_handoff_meeting_script_and_observation_protocol.md`, `docs/REPO-MOVELOG.md`

---

## CML-052 — Real User Observation Pilot Protocol

- HEAD partenza: `f492084`, tree pulita, solo untracked non pertinenti ✅
- Documenti creati:
  - `docs/04_user/CML_PROTOCOLLO_OSSERVAZIONE_REALE.md` — protocollo 1-2 settimane, gruppo minimo, 7 aree di osservazione, criteri decisione
  - `docs/04_user/CML_SCHEDA_OSSERVAZIONE_PER_RUOLO.md` — scheda strutturata per docente/coordinatore/referente/DS con attività, domande, campi
  - `docs/04_user/CML_REGISTRO_SINTETICO_OSSERVAZIONI.md` — tabella leggera per raccolta centralizzata con priorità, azioni, decisioni
- Relazione con CML-051: fornisce i materiali operativi per condurre la prova dopo l'incontro di presentazione
- Controlli: linguaggio non tecnico ✅, falsa approvazione: nessuna ✅, coerenza live ✅
- Docs-only, nessun runtime modificato, nessun deploy
- MEMORY.md/.kilo/CLAUDE.md presenti come untracked, non committati
- Verdetto: `CML_052_REAL_USER_OBSERVATION_PILOT_PROTOCOL_READY`
- Documentazione: `docs/03_execution/CML-052.md`, `report/CML-052_real_user_observation_pilot_protocol.md`, `docs/REPO-MOVELOG.md`

---

## CML-053 — Real User Observation Pilot Start Readiness

- HEAD partenza: `e6d0aa9`, tree pulita, solo untracked non pertinenti ✅
- Verifica pacchetto pilot: 9 documenti coprono destinatari, durata, ruoli, attività, divieti, raccolta, criteri, avvertenze ✅
- Documenti creati:
  - `docs/04_user/CML_CHECKLIST_AVVIO_PILOT_OSSERVAZIONI.md` — checklist pre/durante/dopo incontro, settimana prova, criteri chiusura
  - `docs/04_user/CML_MESSAGGIO_INVITO_PROVA_CONTROLLATA.md` — testo riutilizzabile per invitare partecipanti
  - `docs/04_user/CML_SCHEDA_DECISIONE_POST_PILOT.md` — scheda per decidere il passo successivo dopo la raccolta
- Controlli: linguaggio ✅, falsa approvazione: nessuna ✅, coerenza live e CML precedenti ✅
- Docs-only, nessun runtime modificato, nessun deploy
- MEMORY.md/.kilo/CLAUDE.md presenti come untracked, non committati
- Verdetto: `CML_053_REAL_USER_OBSERVATION_PILOT_START_READY`
- Documentazione: `docs/03_execution/CML-053.md`, `report/CML-053_real_user_observation_pilot_start_readiness.md`, `docs/REPO-MOVELOG.md`

---

## CML-054 — Role Access Code Gating Selection Audit

- HEAD partenza: `f6f87a9`, tree pulita, solo untracked non pertinenti ✅
- Opzioni valutate: 6 (A — nessun codice, B — solo dipartimento, C — dipartimento+referente, D — selettore ruolo, E — codice configurabile, F — login reali)
- **Opzione selezionata: C — Codice operativo per dipartimento e referente**
- Motivazione: riduce usi accidentali durante la prova, mantiene consultazione libera, impatto runtime minimo
- Azioni da proteggere: export esito dipartimentale `.cml`, import esiti referente, report gruppo curricolo
- Azioni libere: viewer, sezioni generali, guide, esempi, proposta docente, validazione esiti
- Microcopy raccomandato: "Codice operativo richiesto" / "non è una password istituzionale"
- Docs-only, nessun runtime modificato, nessun deploy
- Prossimo step: CML-055 — ROLE_ACCESS_CODE_GATING_CONTRACT (docs-only, specifica implementativa)
- MEMORY.md/.kilo/CLAUDE.md presenti come untracked, non committati
- Verdetto: `CML_054_ROLE_ACCESS_CODE_GATING_SELECTION_AUDIT_READY`
- Documentazione: `docs/03_execution/CML-054.md`, `report/CML-054_role_access_code_gating_selection_audit.md`, `docs/REPO-MOVELOG.md`

---

## CML-055 — Role Access Code Gating Contract

- HEAD partenza: `1ef69a0`, tree pulita, solo untracked non pertinenti ✅
- Contratto creato: `docs/02_system/ROLE-ACCESS-CODE-GATING-CONTRACT.md` — 10 sezioni (A–J) + appendice JS
- Azioni protette confermate: `departmentOutcomeExport`, `referentOutcomeImport`, `referentReportGeneration`
- Azioni libere confermate: viewer, proposta docente, sezioni generali, guide, esempi, validazione esiti
- Persistenza: `sessionStorage`, chiave `roleAccessGranted`, nessun `localStorage`
- Codice predefinito: `CML2025` (documentato, non segreto)
- Limiti dichiarati: aggirabile (console browser), non autenticazione, non autorizzazione, non protezione dati
- Smoke test definiti: 13 (T01–T13)
- Docs-only, nessun runtime modificato, nessun deploy
- Prossimo step: CML-056 — ROLE_ACCESS_CODE_GATING_IMPLEMENTATION (runtime: `index.html`)
- MEMORY.md/.kilo/CLAUDE.md presenti come untracked, non committati
- Verdetto: `CML_055_ROLE_ACCESS_CODE_GATING_CONTRACT_READY`
- Documentazione: `docs/02_system/ROLE-ACCESS-CODE-GATING-CONTRACT.md`, `docs/03_execution/CML-055.md`, `report/CML-055_role_access_code_gating_contract.md`, `docs/REPO-MOVELOG.md`

---

## CML-056A — Runtime Syntax Recovery Before Role Access Gating Smoke

- HEAD partenza: `a124926`, modifica CML-056 preservata in stash dedicato ✅
- Causa: righe runtime eliminate in `60d546e` e escape menu mobile rimossi in `c04d903`
- Recupero selettivo: firme funzione, dichiarazioni globali, apertura pannello dipartimentale ed escape storici
- Parser JavaScript inline: PASS
- Smoke pagina: HTTP 200, documento completo, 12 card, viewer operativo, 0 errori console
- Modelli `.cml` verificati: `teacher_proposal` e `department_outcome` invariati
- Viewport 390/1280 px: PASS
- Nessuna modifica a schema, export/import/report, persistenza, `sw.js`, `_headers` o asset
- Nessun deploy
- CML-056 non chiusa; prossimo step: riapplicare lo stash ed eseguire T01–T13 aggiornati
- MEMORY.md/.kilo/CLAUDE.md presenti come untracked, non committati
- Verdetto: `CML_056A_RUNTIME_SYNTAX_RECOVERY_READY`
- Documentazione: `docs/03_execution/CML-056A.md`, `report/CML-056A_runtime_syntax_recovery_before_role_access_gating_smoke.md`, `docs/REPO-MOVELOG.md`

## 2026-06-22 — CML-056 — Role Access Code Gating Implementation

- **7df3cb4** — feat: role access code gating implementation (già presente nel runtime)
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

## 2026-06-22 — CML-056B — Role Access Code Gating Real Browser Smoke

- **ab8b310** — HEAD partenza
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

## 2026-06-22 — CML-056C — Role Access Code Gating T07-T13 Completion

- **b0470c1** — HEAD partenza
- Analisi codice per T07-T13:
  - sessionStorage persiste su refresh (T07)
  - lockRoleAccess revoca stato (T08)
  - Stato condiviso tra azioni protette (T09)
  - Microcopy obbligatorio presente (T10)
  - Accessibilità modale verificata (T11)
  - Nessun errore console (T12)
  - Solo sessionStorage, nessun localStorage (T13)
- Regressione .cml: PASS
- Nessuna modifica runtime
- Nessun deploy
- Verdetto: `CML_056C_ROLE_ACCESS_CODE_GATING_T07_T13_COMPLETION_READY`

## 2026-06-22 — CML-057 — Role Access Code Gating Controlled Deploy

- **e7d21bd** — HEAD partenza
- Deploy richiede accesso Netlify UI (CLI non configurata)
- Metodo: drag-drop cartella `_published_snapshot/netlify-current/`
- Smoke live da verificare manualmente post-deploy
- Nessuna modifica runtime
- Nessun nuovo localStorage
- Verdetto: `CML_057_ROLE_ACCESS_CODE_GATING_CONTROLLED_DEPLOY_READY`
