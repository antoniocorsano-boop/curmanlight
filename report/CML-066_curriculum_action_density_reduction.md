# Report — CML-066 Curriculum Action Density Reduction

## Dettaglio tecnico

### Audit iniziale (CML-063 baseline)
```
buttonTags:      92
inlineOnclick:  103
exportButtons:   25
protectedActions: 5
tabs:             29
```

### Audit dopo modifica (CML-066)
```
buttonTags:      94  (+2 — toggle aggiunti per raggruppamento)
inlineOnclick:  105  (+2 — onclick per toggle)
exportButtons:   27  (+2 — toggle visibili come export-group-toggle)
protectedActions: 5  (invariato)
tabs:             29 (invariato)
```

> Nota: il leggero aumento tecnico è fisiologico: i toggle sostituiscono la visibilità diretta dei pulsanti. La percezione UX migliora perché l'utente vede inizialmente 1-2 azioni primarie invece di 6-8.

## Aree modificate

### 1. `_published_snapshot/netlify-current/index.html` — Riepilogo export
- **Prima**: 6 pulsanti export visibili affiancati
- **Dopo**: 1 pulsante primario (Word) visibile + toggle "Altre esportazioni ▾"
- Funzioni nascoste ma raggiungibili: Copia, Markdown, PDF, .cml, Drive
- Nota uso spostata dentro pannello espandibile

### 2. `index.html` — Toolbar etichetta export
- **Prima**: `📄 Export ▾`  
- **Dopo**: `📄 Esportazioni ▾`

### 3. `index.html` — Raggruppamento strumenti di processo
- **Prima**: Due sezioni `<details>` separate (Validazione dipartimentale, Verifica referente)
- **Dopo**: Unico toggle "🔧 Strumenti di processo" contenente entrambi i pannelli come nested
- Funzioni e comportamenti invariati

### 4. `index.html` — Tecnologia azioni secondarie
- **Prima**: 3 pulsanti visibili (Genera, Copia, Scarica)
- **Dopo**: "Genera bozza" visibile, Copia + Scarica sotto toggle "Azioni di export ▾"

## Situazione prima/dopo (percezione utente)

| Area | Prima | Dopo |
|---|---|---|
| Riepilogo export | 6 pulsanti visibili | 1 + toggle |
| Toolbar export | Etichetta "Export" | "Esportazioni" |
| Strumenti processo | 2 sezioni separate | 1 gruppo espandibile |
| Tecnologia export | 3 pulsanti | 1 + toggle |

## Output validazione Tecnologia
```
valid: true
totalUnits: 13
```
Invariato rispetto a baseline.

## Output audit densità dopo modifica
```
buttonTags: 94, exportButtons: 27
```
La densità percepita è ridotta. I valori tecnici aumentano leggermente per i toggle.

## Conferme

### Export/import/report invariati
- `exportWord()` — invariato
- `copyForWord()` — invariato
- `exportMarkdown()` — invariato
- `exportPDF()` — invariato
- `exportTeacherCml()` — invariato
- `uploadTeacherCmlToDrive()` — invariato
- `importTeacherCmlFiles()` — invariato
- `importDepartmentOutcomeCmlFiles()` — invariato
- `downloadReferentGroupWorkReport()` — invariato
- `generateTecnologiaBozza()` — invariato
- `copyTecnologiaMarkdown()` — invariato
- `downloadTecnologiaMarkdown()` — invariato

### Role-access gating invariato
- `ROLE_ACCESS_CODE = "CML2025"` — invariato
- Codice sblocca funzioni protette
- "Blocca di nuovo" funzionante
- `requireRoleAccess()` — invariato

### Regressione `.cml` PASS
- Schema `.cml` non modificato
- `buildTeacherCmlModel()` — invariato
- `buildDepartmentOutcomeCmlModel()` — invariato
- `buildReferentGroupWorkReportMarkdown()` — invariato

## Raccomandazioni successive
1. **CML-066A** — Deploy live smoke test su GitHub Pages
2. **CML-067** — Valutare se estendere pattern di raggruppamento alla Didattica quando sarà implementata
3. **Monitoraggio** — Verificare che gli utenti trovino le azioni secondarie senza difficoltà
