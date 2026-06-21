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
  - Barra compatta: 💾 salvataggio + progresso + ⚙️ Azioni
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
- Card pending compatta: badge + 1 riga + ✅/❌/🔍, confronto su richiesta
- Card ok collassate per default
- Nessun deploy, nessuna modifica runtime
- Verdetto: `CML_010A_COMPACT_CARDS_EXPANDABLE_DETAIL_DESIGN_AUDIT_READY`

## 2026-06-21 — CML-010B — Compact pending cards with expandable detail

- **a240ab7** → HEAD
- Unico file modificato: `_published_snapshot/netlify-current/index.html` (+154/−64 righe)
- `cardHTML()` riscritto: 4 modalità (ok collassata, decisa collassata, pending edit, pending compact)
- Card ok/decise collassate di default con `toggleCollapse()`
- Card pending compatte: badge + 1 riga + 4 emoji (✅ ❌ 🔍 🗑) + dettaglio espandibile
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
- Card pending compatte verificate: badge, 1 riga testo troncato, 4 emoji (✅ ❌ 🔍 🗑) ✅
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
  - P2: icona 🔍 non auto-esplicativa su mobile
  - P3: collapse indicator poco evidente
- Nessun deploy, nessuna modifica runtime
- Verdetto: `CML_010E_REAL_MOBILE_ACCEPTANCE_SMOKE_READY`

## 2026-06-21 — CML-010F — Mobile Touch and Compact Action Label Microfix

- **c9c6667** — fix touch target mobile, accessibilità pulsante 🔍, contrasto collapse indicator
- P1: `.pending-action` mobile portato a 42px (≤900px) e 40px (≤560px)
- P2: pulsante 🔍 con `aria-label` statico e dinamico
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
- Card compatte, pulsanti ✅❌🔍🗑, dettaglio espandibile preservati
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
- Disclaimer: "⚠️ Documento di lavoro — da validare. Non sostituisce delibera del Collegio Docenti."
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
