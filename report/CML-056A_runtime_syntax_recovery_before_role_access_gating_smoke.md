# CML-056A — Runtime syntax recovery before role access gating smoke

## Sintesi

| Voce               | Esito                                            |
| ------------------ | ------------------------------------------------ |
| Branch             | `cml-008r-fix-markdown-decision-summary`         |
| Commit iniziale    | `a12492682adc9c758f0cf384cf21f8677b8c1914`       |
| Runtime            | `_published_snapshot/netlify-current/index.html` |
| Parser inline      | PASS                                             |
| Caricamento pagina | PASS                                             |
| Errori console     | 0                                                |
| Deploy             | Non eseguito                                     |

## Evidenza iniziale

Chrome headless restituiva `SyntaxError: Unexpected token '}'` e tutte le funzioni globali risultavano non definite. Il primo punto era il corpo di `updateStats`, privo della relativa dichiarazione.

La storia Git ha identificato due cause:

1. `60d546e` aveva eliminato righe isolate distribuite nel runtime: firme di funzione, costanti/stato e il tag di apertura del pannello dipartimentale.
2. `c04d903` aveva inserito quattro handler del menu mobile senza gli escape richiesti dalla stringa JavaScript che li contiene.

## Metodo

Il recupero è stato guidato da test RED/GREEN:

1. parsing dell'intero script inline con `vm.Script`;
2. ripristino di una firma alla volta usando la versione esatta disponibile nei diff Git;
3. nuovo parsing dopo ogni modifica;
4. smoke browser locale dopo il parser GREEN.

Righe recuperate:

- firme: `updateStats`, `renderSidebar`, `truncate`, `setFilter`, `findItem`, `showToast`, `renderRiepilogo`, `buildDocumentModel`, `modelToMarkdown`, `downloadBlob`, `exportWord`, `exportPDF`, `openSettingsModal`, `toggleMobileMenu`, `showWelcome`;
- dichiarazioni: `ORDINI`, `selDisc/filterStatus/currentTab`, `LOCAL_SAVE_KEY`, `deferredInstallPrompt`;
- markup: apertura `department-import-panel`;
- menu mobile: escape per normativa, sezioni generali, curricolo ed export.

## Smoke minimo

| Controllo                                   | Esito                |
| ------------------------------------------- | -------------------- |
| Titolo e URL locale corretti                | PASS                 |
| Documento completo                          | PASS                 |
| 20 funzioni principali disponibili          | PASS                 |
| 12 card iniziali renderizzate               | PASS                 |
| Viewer curricolo visibile                   | PASS                 |
| Pannello referente presente                 | PASS                 |
| `buildTeacherCmlModel().fileType`           | `teacher_proposal`   |
| `buildDepartmentOutcomeCmlModel().fileType` | `department_outcome` |
| Console/runtime errors                      | 0                    |
| Viewport 390/1280 px                        | PASS                 |

Il Browser integrato non era utilizzabile per assenza del campo sandbox `sandboxPolicy`; il fallback è stato Chrome headless locale via CDP, senza nuove dipendenze. Le immagini QA sono rimaste in `.cache` e non vengono committate.

## Perimetro

- Nessuna modifica a `sw.js`, `_headers`, asset, PDF, file `.cml` o configurazioni Netlify.
- Nessuna modifica a schema, contenuti export/import/report o persistenza.
- Nessun backend, API, login, OAuth o dipendenza.
- Nessun deploy.
- `MEMORY.md`, `.kilo/`, `CLAUDE.md`: presenti come untracked e non inclusi.
- CML-056: preservata in stash, non chiusa in questa slice.

## Prossimo passo

Committare CML-056A, riapplicare lo stash CML-056 e completare gli smoke T01–T13 aggiornati.

`CML_056A_RUNTIME_SYNTAX_RECOVERY_READY`
