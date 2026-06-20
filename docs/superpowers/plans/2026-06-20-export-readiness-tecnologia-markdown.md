# CML-008R — Export Readiness: Tecnologia Markdown Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use subagent-driven-development (recommended) or executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a structured Markdown export for the single pilot discipline Tecnologia, with work-document header, decision summary, 2012→2025 comparison, Gap 2025 markers, general sections reference, and non-deliberative disclaimer.

**Architecture:** Extend three existing functions (`buildDocumentModel`, `modelToMarkdown`, `exportMarkdown`) with optional filter/flag parameters that leave legacy behavior identical when not activated. Add a self-contained export panel to the Tecnologia view with generate/copy/download controls.

**Tech Stack:** Vanilla JS — zero libraries, zero CDN, zero backend.

---

## File Structure

| File | Role | Change |
|---|---|---|
| `_published_snapshot/netlify-current/index.html` | Single runtime file | Modify ~80-100 lines across 5 areas |
| `docs/03_execution/CML-008R.md` | Execution report | Create (post-implementation) |
| `report/CML-008R_export_readiness.md` | Summary report | Create (post-implementation) |

**Areas touched in index.html:**

| Area | Lines | Change |
|---|---|---|
| `buildDocumentModel()` | ~1562 | Add `opts.disciplineFilter` param |
| `modelToMarkdown()` | ~1618 | Add `opts` flags for structured content |
| `exportMarkdown()` | ~1766 | Add `disciplineFilter` param |
| HTML near `#tab-lavoro` | ~500-550 | Add export panel for Tecnologia |
| JS in render/event area | ~1300-1480 | Add handler and helper functions |

## Scope Check

The spec covers one discipline (Tecnologia), one format (Markdown), one UI panel. No backend, no API, no external library, no structural refactor. Fit for a single 6-task plan. If the estimate exceeds 80-100 total lines changed, the plan suggests splitting into CML-008R-a (UI panel) and CML-008R-b (Markdown generation).

---

### Task 1: Add `disciplineFilter` to `buildDocumentModel()`

**Files:** Modify `_published_snapshot/netlify-current/index.html` (~1562-1613)

- [ ] **Step 1: Read the function signature and body**

Read lines 1562-1613 of index.html to understand the current signature and iteration logic.

- [ ] **Step 2: Add `opts` parameter to the function signature**

Change:
```js
function buildDocumentModel(onlyApproved){
```
To:
```js
function buildDocumentModel(onlyApproved, opts = {}){
```

- [ ] **Step 3: Add discipline filter logic in the DISCIPLINE iteration loop**

Before the existing loop:
```js
const disciplinesToExport = opts.disciplineFilter
  ? (Array.isArray(opts.disciplineFilter) ? opts.disciplineFilter : [opts.disciplineFilter])
  : DISCIPLINE;
```

Then change `for(const disc of DISCIPLINE){` to `for(const disc of disciplinesToExport){`

- [ ] **Step 4: Add `opts` to recursive metadata (if any)**

No recursive calls exist — the function is standalone. The model returned keeps the same shape.

- [ ] **Step 5: Verify behavioral invariant**

`buildDocumentModel(true)` (no opts) iterates all `DISCIPLINE` → identical to current.

---

### Task 2: Add structured flags to `modelToMarkdown()`

**Files:** Modify `_published_snapshot/netlify-current/index.html` (~1618-1671)

- [ ] **Step 1: Read the function signature and body**

Read lines 1618-1671. The function currently takes `(model, onlyApproved)` and generates a flat Markdown string iterating all disciplines.

- [ ] **Step 2: Add `opts` parameter**

Change:
```js
function modelToMarkdown(model, onlyApproved){
```
To:
```js
function modelToMarkdown(model, onlyApproved, opts = {}){
```

With defaults:
```js
const {
  introNote = false,
  includeGeneraliRef = false,
  includeDecisionSummary = false,
  includeGapMarkers = false,
  includeDisclaimer = false,
} = opts;
```

- [ ] **Step 3: Prepend intro note when `introNote` is true**

At the top of the function, before the existing content:
```js
if (introNote) {
  md = `# ${model.titolo} — Export di lavoro

**${model.istituto}**
Livello scolastico: ${model.livelloScolastico} · Codice meccanografico: ${model.codMecc}
Disciplina: **${opts.disciplineName || ''}**
Data: ${model.data}

> 📄 **Documento di lavoro — da validare.** Non sostituisce delibera del Collegio Docenti.

---
`;
}
```

- [ ] **Step 4: Add reference to general sections when `includeGeneraliRef` is true**

After the intro, before the discipline content:
```js
if (includeGeneraliRef) {
  md += `## Riferimenti alle Sezioni generali

Le seguenti sezioni generali del curricolo sono consultabili nell'app CurManLight (tab Sezioni generali):

- Premessa
- Nuove Indicazioni Nazionali 2025
- Riferimenti normativi
- Profilo dello studente
- Competenze chiave al termine del primo ciclo
- Livelli di competenza
- Obiettivi generali del processo formativo
- Raccordo verticale tra gli ordini di scuola

---
`;
}
```

- [ ] **Step 5: Add decision summary when `includeDecisionSummary` is true**

Before the discipline iteration (or after intro + generali ref), iterate the data to compute counts:
```js
if (includeDecisionSummary && model.discipline.length === 1) {
  const disc = model.discipline[0];
  let totOk = 0, totMod = 0, totNew = 0, totApproved = 0, totRejected = 0, totPending = 0;
  disc.ordini.forEach(ord => {
    [...ord.traguardi, ...ord.obiettivi].forEach(item => {
      if (item.status === 'ok') totOk++;
      else if (item.status === 'nuovo') totNew++;
      else totMod++;
      if (item.decisione === 'approvata') totApproved++;
      else if (item.decisione === 'rifiutata') totRejected++;
      else totPending++;
    });
  });
  md += `## Sintesi delle decisioni

| Categoria | Conteggio |
|---|---|
| ✓ Invariati (IN 2012) | ${totOk} |
| ✎ Modificati | ${totMod} |
| ★ Nuovi IN 2025 | ${totNew} |
| **Approvati** | **${totApproved}** |
| **Rifiutati** | **${totRejected}** |
| **Da decidere** | **${totPending}** |

---
`;
}
```

- [ ] **Step 6: Add Gap 2025 markers in the item rendering**

During discipline item output (the existing `md += ...` per item), when `includeGapMarkers` is true and `item.status !== 'ok'`:
```js
const gapMarker = (includeGapMarkers && item.status !== 'ok')
  ? (item.status === 'nuovo'
    ? ' 🧩 Gap 2025 — nuova proposta'
    : (item.decisione ? '' : ' 🧩 Gap 2025 — proposta di modifica da validare'))
  : '';
```

Append `gapMarker` to the item status line.

- [ ] **Step 7: Add disclaimer when `includeDisclaimer` is true**

At the very end of the generated Markdown:
```js
if (includeDisclaimer) {
  md += `---
*Documento generato automaticamente dall'app CurManLight il ${model.data}.*
*Questo documento NON sostituisce:*
*- La delibera del Collegio dei Docenti*
*- L'approvazione formale del Curricolo d'Istituto*
*- Le Indicazioni Nazionali D.M. 254/2012 e D.M. 221/2025*
*Utilizzare come supporto al lavoro della Commissione Curricolo e dei Dipartimenti disciplinari.*
`;
}
```

- [ ] **Step 8: Verify behavioral invariant**

`modelToMarkdown(model, false)` (no opts) → generates the exact same output as current.

---

### Task 3: Add `disciplineFilter` to `exportMarkdown()`

**Files:** Modify `_published_snapshot/netlify-current/index.html` (~1766-1774)

- [ ] **Step 1: Read the function body**

Read lines 1766-1774. The function currently:
```js
function exportMarkdown(onlyApproved){
  const model = buildDocumentModel(onlyApproved);
  const md = modelToMarkdown(model, onlyApproved);
  const suffix = onlyApproved?"_Definitivo":"_Confronto2012-2025";
  downloadBlob(new Blob([md],{type:"text/markdown;charset=utf-8"}), `CurricoloVerticale_IC_DonMilani${suffix}_${new Date().toISOString().slice(0,10)}.md`);
}
```

- [ ] **Step 2: Add `disciplineFilter` parameter**

```js
function exportMarkdown(onlyApproved = false, disciplineFilter = null){
```

- [ ] **Step 3: Pass filter to buildDocumentModel and enable opts**

```js
const opts = disciplineFilter ? {
  disciplineFilter,
  disciplineName: disciplineFilter,
  introNote: true,
  includeGeneraliRef: true,
  includeDecisionSummary: true,
  includeGapMarkers: true,
  includeDisclaimer: true,
} : {};
const model = buildDocumentModel(onlyApproved, opts);
const md = modelToMarkdown(model, onlyApproved, opts);
```

- [ ] **Step 4: Adjust filename for single-discipline export**

After the existing filename logic, when `disciplineFilter`:
```js
const suffix = onlyApproved ? "_Definitivo" : "_Confronto2012-2025";
const discSuffix = disciplineFilter ? `_${disciplineFilter.replace(/\s+/g, '_')}` : "";
const filename = `CurricoloVerticale_IC_DonMilani${discSuffix}${suffix}_${new Date().toISOString().slice(0,10)}.md`;
```

- [ ] **Step 5: Verify behavioral invariant**

`exportMarkdown()` (no args) and `exportMarkdown(false)` produce identical files to current.

---

### Task 4: Add helper functions for copy and download

**Files:** Modify `_published_snapshot/netlify-current/index.html` (near ~1730-1770, after existing clipboard utilities)

- [ ] **Step 1: Add `downloadMarkdownString()` helper**

Reuse the existing `downloadBlob()` pattern. Add a small wrapper:
```js
function downloadMarkdownString(content, filename) {
  downloadBlob(new Blob([content], {type: "text/markdown;charset=utf-8"}), filename);
}
```

- [ ] **Step 2: Add `copyMarkdownToClipboard()` helper**

Reuse existing `copyTextToClipboard()` (lines 1730-1751). Add a wrapper for the specific case:
```js
function copyMarkdownToClipboard(content) {
  copyTextToClipboard(content);
  showToast("📋 Markdown copiato negli appunti!");
}
```

---

### Task 5: Add export panel for Tecnologia in the UI

**Files:** Modify `_published_snapshot/netlify-current/index.html` (~500-550 HTML area, plus render logic)

- [ ] **Step 1: Read the existing HTML near the toolbar and discipline title area**

Read lines ~490-550 to understand where the discipline title is rendered and how the toolbar is structured.

- [ ] **Step 2: Add export panel HTML container**

Add a hidden container in the `#tab-lavoro` area (near the toolbar or discipline header):
```html
<div id="tecnologia-export-panel" class="export-panel" style="display:none;margin: 8px 0;padding:10px 14px;background:#f5f5f5;border-radius:8px;border:1px solid #e0e0e0">
  <div style="font-size:12px;font-weight:700;color:#1a237e;margin-bottom:8px">📤 Export Tecnologia — Documento di lavoro</div>
  <div style="display:flex;gap:6px;margin-bottom:8px;flex-wrap:wrap">
    <button class="export-btn btn-md" onclick="generateTecnologiaBozza()" style="flex:1">📝 Genera bozza Tecnologia</button>
  </div>
  <textarea id="tecnologia-md-preview" readonly style="display:none;width:100%;height:180px;font-family:monospace;font-size:12px;padding:8px;border:1px solid #ccc;border-radius:4px;resize:vertical;margin-bottom:6px;background:#fff"></textarea>
  <div id="tecnologia-export-actions" style="display:none;display:flex;gap:6px;flex-wrap:wrap">
    <button class="export-btn btn-copy" onclick="copyTecnologiaMarkdown()" style="flex:1">📋 Copia Markdown</button>
    <button class="export-btn btn-md" onclick="downloadTecnologiaMarkdown()" style="flex:1">⬇ Scarica Markdown</button>
  </div>
</div>
```

- [ ] **Step 3: Add CSS for the export panel**

Add near the existing CSS (around line ~400-430):
```css
.export-panel{font-size:13px;line-height:1.5}
.export-panel button{cursor:pointer;padding:7px 14px;font-size:12px;border-radius:5px;border:1px solid #ccc;background:#fff;transition:.15s}
.export-panel button:hover{background:#e8eaf6;border-color:#5c6bc0}
```

- [ ] **Step 4: Update render/select discipline logic to show/hide the panel**

In the `selectDisc()` function (or equivalent render handler), after setting `currentDisc`:
```js
const panel = document.getElementById('tecnologia-export-panel');
if (panel) {
  panel.style.display = (currentDisc === 'Tecnologia') ? 'block' : 'none';
}
```

Also reset the panel state when switching away:
```js
document.getElementById('tecnologia-md-preview').style.display = 'none';
document.getElementById('tecnologia-export-actions').style.display = 'none';
```

---

### Task 6: Wire generate/copy/download handlers

**Files:** Modify `_published_snapshot/netlify-current/index.html` (add new functions near ~1770-1800)

- [ ] **Step 1: Add `generateTecnologiaBozza()` function**

```js
let _tecnologiaMarkdownCache = '';

function generateTecnologiaBozza() {
  const model = buildDocumentModel(true, { disciplineFilter: 'Tecnologia' });
  const opts = {
    disciplineFilter: 'Tecnologia', disciplineName: 'Tecnologia',
    introNote: true, includeGeneraliRef: true,
    includeDecisionSummary: true, includeGapMarkers: true,
    includeDisclaimer: true,
  };
  _tecnologiaMarkdownCache = modelToMarkdown(model, true, opts);
  document.getElementById('tecnologia-md-preview').value = _tecnologiaMarkdownCache;
  document.getElementById('tecnologia-md-preview').style.display = 'block';
  document.getElementById('tecnologia-export-actions').style.display = 'flex';
  showToast('✅ Bozza Tecnologia generata!');
}
```

- [ ] **Step 2: Add `copyTecnologiaMarkdown()` function**

```js
function copyTecnologiaMarkdown() {
  if (!_tecnologiaMarkdownCache) { showToast('⚠️ Genera prima la bozza.'); return; }
  copyMarkdownToClipboard(_tecnologiaMarkdownCache);
}
```

- [ ] **Step 3: Add `downloadTecnologiaMarkdown()` function**

```js
function downloadTecnologiaMarkdown() {
  if (!_tecnologiaMarkdownCache) { showToast('⚠️ Genera prima la bozza.'); return; }
  const filename = `CurricoloVerticale_IC_DonMilani_Tecnologia_Bozza_${new Date().toISOString().slice(0,10)}.md`;
  downloadMarkdownString(_tecnologiaMarkdownCache, filename);
  showToast('⬇ File Markdown scaricato!');
}
```

---

### Task 7: Smoke test and verify

**Files:** `_published_snapshot/netlify-current/index.html` (no changes)

- [ ] **Step 1: Start local server**

Run a local HTTP server (e.g. `npx http-server _published_snapshot/netlify-current/ -p 5000 -c-1`).

- [ ] **Step 2: Run smoke test checklist**

```
[ ] App carica su localhost:5000
[ ] 4 tab funzionano
[ ] Tecnologia selezionabile dalla sidebar
[ ] Pannello "Export Tecnologia" visibile con Tecnologia selezionata
[ ] Pannello NON visibile per altre discipline (es. Italiano)
[ ] Click "Genera bozza Tecnologia" → preview textarea visibile con Markdown
[ ] Il Markdown contiene "Documento di lavoro — da validare"
[ ] Il Markdown elenca le 8 sezioni generali
[ ] Il Markdown contiene sintesi decisioni con conteggi
[ ] Il Markdown contiene confronto IN2012→IN2025
[ ] Il Markdown marca gap 2025 (nuovo/modifica pendente)
[ ] Il Markdown contiene avvertenza finale
[ ] "Copia Markdown" → copia il contenuto negli appunti
[ ] "Scarica Markdown" → download .md con nome corretto
[ ] exportMarkdown() (senza filtro) → output identico a master
[ ] Approve/reject/edit funzionanti su tutte le discipline
[ ] 14 discipline con dati invariati
[ ] Tab Curricolo definitivo preservato
[ ] Tab Sezioni generali preservato
[ ] PDF cache-safe ancora linkato
[ ] Nessun errore console evidente
```

- [ ] **Step 3: Check for regression on other export formats**

```
[ ] exportWord() ancora funzionante (se CDN disponibile)
[ ] exportPDF() ancora funzionante
[ ] copyForWord() ancora funzionante
```

- [ ] **Step 4: Verify behavioral invariants with git diff**

```bash
git diff --stat _published_snapshot/netlify-current/index.html
# Expected: only the 5 areas listed in File Structure
```

---

## Rischi residui

| Rischio | Mitigazione |
|---|---|
| `modelToMarkdown()` con opts modifica anche il flusso legacy | Test obbligatorio: `exportMarkdown(true)` senza filtro produce output identico al master |
| Preview textarea potrebbe non aggiornarsi dopo approve/reject | Il pulsante "Genera bozza" rigenera sempre da zero il contenuto — lo stato corrente è sempre riflesso |
| Nome file download con spazi | Uso di `replace(/\s+/g, '_')` nel filename |
| Utente copia Markdown e lo presenta come documento definitivo | Avvertenza esplicita nell'output + nota "documento di lavoro" nell'intestazione |
| Troppe righe modificate in un unico file | Stima: ~80-100 righe totali in index.html (~4% del file) |

## Criteri di accettazione

1. `generateTecnologiaBozza()` produce preview Markdown con tutti i 9 elementi richiesti
2. Copia e download funzionano dalla UI
3. `exportMarkdown()` senza filtro → identico al precedente
4. Pannello export visibile solo per Tecnologia
5. Nessuna modifica a exportWord, exportPDF, copyForWord
6. Nessuna modifica a sw.js, _headers, manifest
7. Approve/reject/edit invariati su tutte le discipline

## Valutazione dimensione

**Stima modifiche:** ~80-100 righe totali su index.html, distribuite su 5 aree ben separate. **Non serve split** — la slice è compatta.

Verifica finale: il piano ha 7 task, ~30 step, copertura completa della spec.

## Commit message proposto

```
feat: add tecnologia markdown export readiness
```

## Verdetto atteso

```
CML_008R_EXPORT_READINESS_TECNOLOGIA_MARKDOWN_READY
```
