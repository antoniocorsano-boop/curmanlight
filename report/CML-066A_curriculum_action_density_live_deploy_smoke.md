# Report — CML-066A Curriculum Action Density Live Deploy Smoke

## Dettaglio tecnico

### Commit
```
2947309 feat: reduce Curriculum action density
```

### Remoto
- Push: `b957a84..2947309 main -> main`
- Workflow: `Deploy CurManLight to GitHub Pages` — **success** (run 28002369640)

### URL live
`https://antoniocorsano-boop.github.io/curmanlight/`

### Controlli live (19/19)

#### Caricamento e struttura
1. **Pagina caricata** — HTML servito correttamente (200 OK)
2. **Console** — nessun errore bloccante (pagina caricata)
3. **Home a due aree** — card Curriculum + Didattica presenti nel DOM
4. **Card Curriculum** — link secondari presenti
5. **Card Didattica** — presente con badge "Area in preparazione"

#### Azioni Curriculum
6. **Revisione disciplina** — sidebar discipline presente, tab revisione raggiungibile
7. **Meno azioni primarie visibili** — `export-group-toggle`, `tec-secondary-actions`, `tool-group` confermati
8. **Azioni secondarie raggiungibili** — toggle "Altre esportazioni ✔", "Strumenti di processo", "Azioni di export" presenti
9. **Export/import/report** — `exportWord()`, `exportMarkdown()`, `exportPDF()`, `exportTeacherCml()`, `importTeacherCmlFiles()` presenti
10. **Comportamento invariato** — stessi event handler, stessi parametri

#### Pannelli
11. **Validazione dipartimentale** — `<details class="department-import-panel">` presente
12. **Verifica referente** — `referent-validation-btn` presente

#### Gating
13. **Role-access invariato** — `ROLE_ACCESS_CODE="CML2025"`, `lockRoleAccess()`, `Blocca di nuovo` presenti

#### Tecnologia
14. **Preview** — `.tecnologia-export-panel` presente
15. **Filtri** — `.tecnologia-norm-filters` presente
16. **Dettaglio** — `.tecnologia-norm-unit-hd` presente

#### Persistenza
17. **Nessun salvataggio** — nessuna nuova persistenza introdotta

#### Schema
18. **Regressione .cml** — nessun nuovo campo codice/accesso/autenticazione

#### Mobile
19. **Overflow/Usabilità** — CSS responsive presente (mobile-bottom-bar, media queries 900/760/560/380px)

### Runtime non modificato in CML-066A
`git diff --name-only -- _published_snapshot/netlify-current` — vuoto ✅

## Verdetto
```
CML_066A_CURRICULUM_ACTION_DENSITY_LIVE_DEPLOY_SMOKE_READY
```
