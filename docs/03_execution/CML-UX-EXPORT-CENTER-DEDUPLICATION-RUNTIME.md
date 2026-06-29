# CML UX Export Center Deduplication Runtime

## Stato della slice

- **Tipo**: runtime increment
- **Scope**: centralizzare tutte le esportazioni in `#tab-esportazioni`, rimuovere duplicazioni da `#tab-riepilogo`, aggiungere bozza disciplina/.cml/report mancanti
- **Runtime modificato**: `_published_snapshot/netlify-current/index.html`
- **Service worker**: `_published_snapshot/netlify-current/sw.js` (CACHE_NAME bump)
- **Base piano**: CML_UX_EXPORT_CENTER_DEDUPLICATION_PLAN
- **Commit di partenza**: `d21f765`
- **Verdetto**: `CML_UX_EXPORT_CENTER_DEDUPLICATION_RUNTIME_READY`

## Obiettivo

Trasformare `#tab-esportazioni` nell'unico Export Center centralizzato, applicando il principio:

```
Una schermata, un compito, una decisione principale.
```

## Modifiche apportate

### `_published_snapshot/netlify-current/index.html`

| Intervento                        | Azione                                                                                                                                                                         | Dettaglio                                                                                                                                                                                                   |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Export Center riscritto**       | `#tab-esportazioni` completamente riscritto con 6 gruppi: Documento finale, Confronto modifiche, Bozza disciplina, File di lavoro .cml, Report e resoconti, Copia di sicurezza | Le funzioni `exportRiepilogoWord()`, `exportMarkdownRiepilogo()`, `exportPDFRiepilogo()` erano chiamate ma inesistenti (ReferenceError) — sostituite con chiamate dirette corrette (`exportWord(true)` ecc) |
| **Navigazione forzata rimossa**   | Pulsanti Word confronto e Resoconto sintesi non navigano più forzatamente ad altri tab prima di esportare                                                                      | Word confronto chiama direttamente `exportWord()`; Resoconto chiama `setTab('riepilogo');renderRiepilogo()` senza click fraudolento                                                                         |
| **Bozza disciplina aggiunta**     | Nuovo gruppo con `generateDiscBozza()`, `copyDiscMarkdown()`, `downloadDiscMarkdown()`                                                                                         | Prima solo da toggle Revisione                                                                                                                                                                              |
| **File .cml aggiunti**            | Nuovo gruppo con `exportTeacherCml()`, `uploadTeacherCmlToDrive()`, `exportDepartmentOutcomeCml()`                                                                             | Prima solo da Definitivo/Processo                                                                                                                                                                           |
| **Report gruppo lavoro aggiunto** | Pulsante `downloadReferentGroupWorkReport()`                                                                                                                                   | Prima solo da Processo                                                                                                                                                                                      |
| **Definitivo deduplicato**        | Sostituito `.export-group` (Word, Copia, Markdown, PDF, .cml, upload Drive) con bridge link `Per esportare vai a Esportazioni`                                                 | Definitivo ora è solo riepilogo voci approvate                                                                                                                                                              |
| **Copia sicurezza mantenuta**     | Backup JSON + Importa copia invariati, stesso input file riutilizzato                                                                                                          |                                                                                                                                                                                                             |

### `_published_snapshot/netlify-current/sw.js`

```
curmanlight-cache-v453p4-revisione-compact → curmanlight-cache-v453p5-export-center
```

### Cosa NON è stato modificato

- `content/curriculum/` — invariato
- `manifest.json`, `service-worker.js` — invariati
- JSON, export/import `.cml` — invariati
- Funzioni JS esportazione — nessuna eliminata o modificata
- Funzioni `exportDepartmentOutcomeCml()`, `downloadReferentGroupWorkReport()`, `exportTeacherCml()`, `uploadTeacherCmlToDrive()`, `generateDiscBozza()`, `copyDiscMarkdown()`, `downloadDiscMarkdown()`, `exportLocalBackup()` — tutte preservate
- `#tab-processo` — `.cml` export e report referente mantenuti (accompagnano import/validazione)
- `#tab-lavoro` toggle bozza disciplina — mantenuto
- CSS classi `.export-group*`, `.tab-esportazioni`, `.esport-group*` — preservate
- Navigazione hash, sidebar, breadcrumb — invariati

## Verifiche

- `node --check` su JS estratto: SYNTAX OK
- `git diff --check`: OK
- `git diff --stat`: (calcolato al commit)

## Gate superati

- Smoke hash `#home`, `#cur-Italiano`: funzionante
- Tab Esportazioni navigabile e mostra 6 gruppi
- Tab Definitivo non mostra export primari, solo bridge link
- Nessun ReferenceError per funzioni inesistenti
- Bozza disciplina generabile da Export Center
- File .cml scaricabili da Export Center
- Resoconto sintesi naviga a Definitivo
- Copia sicurezza funzionante

## Verdict

```
CML_UX_EXPORT_CENTER_DEDUPLICATION_RUNTIME_READY
```
