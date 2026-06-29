# CML UX Revisione Compact Runtime

## Stato della slice

- **Tipo**: runtime increment
- **Scope**: compattare la vista Revisione rimuovendo export confronto, spostando strumenti processo in tab separato, rendendo export disciplina richiamabile
- **Runtime modificato**: `_published_snapshot/netlify-current/index.html`
- **Service worker**: `_published_snapshot/netlify-current/sw.js` (CACHE_NAME bump)
- **Base piano**: CML_UX_REVISIONE_SEPARATION_PLAN
- **Commit di partenza**: `5f436c3`
- **Verdetto**: `CML_UX_REVISIONE_COMPACT_RUNTIME_READY`

## Obiettivo

Rendere la vista Revisione uno spazio operativo centrato su **decidere**, applicando il principio:

```
Una schermata, un compito, una decisione principale.
```

## Modifiche apportate

### `_published_snapshot/netlify-current/index.html`

54 inserzioni, 65 rimozioni. Tutte le modifiche sono limitate alla vista Revisione e alla navigazione.

| Intervento                         | Azione                                                                                                       | Dettaglio                                                                                                                                                    |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Esportazioni confronto rimosse** | Rimossa `toolbar-export` (toggle + 6 pulsanti Word/Copia/Markdown/PDF/CML) dalla toolbar Revisione           | Le funzioni JS (exportWord, copyForWord, exportMarkdown, exportPDF, exportTeacherCml, uploadTeacherCmlToDrive) sono preservate per Riepilogo ed Esportazioni |
| **Usage notice compattata**        | Sostituito `<details>` con `<p>` singola riga                                                                | Da 5 righe a 1 riga: "Area Revisione: scegli, adatta o registra le decisioni..."                                                                             |
| **Strumenti processo spostati**    | Rimosso `<details class="tool-group">` da `#tab-lavoro`; creato `#tab-processo` con import/validazione       | Nuovo tab nella subnav Curriculum: `🔧 Processo`                                                                                                             |
| **Export disciplina richiamabile** | Rimosso `panel.style.display = 'block'` da `render()`; aggiunto pulsante `📝 Bozza disciplina` nella toolbar | Export disciplina visibile solo su click, non più automatico                                                                                                 |
| **Subnav aggiornata**              | Aggiunto pulsante `🔧 Processo` in `#subnav-curriculum` e `mobile-menu`                                      | 5 voci: Consulta, Revisione, Processo, Definitivo, Fonti                                                                                                     |
| **setTab() aggiornata**            | Aggiunto `processo` a parentMap, display toggle, csm array, mbbMap, sidebar show, breadcrumb, cruscotto hide | Tab processo isolato ma sotto parent "curricolo"                                                                                                             |

### `_published_snapshot/netlify-current/sw.js`

```
curmanlight-cache-v453p3-consulta-compact → curmanlight-cache-v453p4-revisione-compact
```

### Cosa NON è stato modificato

- `content/curriculum/` — invariato
- `manifest.json`, `service-worker.js` — invariati
- JSON, export/import `.cml` — invariati
- Testi curricolari — invariati
- Navigazione hash, sidebar — invariati
- CSS strutturale delle classi rimosse — preservato
- Funzioni JS esportazione — nessuna eliminata
- Flusso decisionale (approve/reject/edit/remove) — invariato
- Salvataggio locale — invariato
- Vista Consulta compatta — invariata

## Verifiche

- `node --check` su JS estratto: SYNTAX OK
- `git diff --check`: OK
- `git diff --stat`: 54 inserzioni, 65 rimozioni su 2 file runtime
- Nessun file fuori scope

## Gate superati

- Smoke hash `#home`, `#cur-Italiano`, `#cur-Matematica`: funzionante
- Passaggio Consulta → Revisione: coerente
- Revisione mostra disciplina corrente: header invariato
- Revisione non mostra export confronto: rimosso
- Revisione non mostra pannelli processo: spostati in `#tab-processo`
- Azione primaria unica nella zona decisionale: toolbar filtri + bozza disciplina toggle
- Bozza disciplina richiamabile: solo da pulsante, non più automatica
- Tab Processo navigabile da subnav e mobile menu
- Nessun ReferenceError in console

## Verdict

```
CML_UX_REVISIONE_COMPACT_RUNTIME_READY
```
