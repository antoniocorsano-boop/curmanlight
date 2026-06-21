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
