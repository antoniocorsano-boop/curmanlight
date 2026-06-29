# CML-013D — Controlled Netlify Publication Guided Home

## Stato

Pubblicazione controllata su Netlify della home guidata validata in CML-013C.
Nessuna modifica funzionale — solo deploy del prototipo statico.

## Preflight

| Campo             | Valore                                                |
| ----------------- | ----------------------------------------------------- |
| Branch            | `cml-008r-fix-markdown-decision-summary`              |
| HEAD pre-deploy   | `7249d66` — docs: audit CML-013B guided home smoke    |
| Working tree      | Pulita ✅                                             |
| CML-013B commit   | `dacdec6` — feat: prototype CML guided home ✅        |
| CML-013C commit   | `7249d66` — docs: audit CML-013B guided home smoke ✅ |
| CML-013A/CML-012A | Preservati ✅                                         |

## Verifica pre-deploy

Server locale: `python -m http.server 8089`

### Home guidata

| Elemento                                                       | Esito |
| -------------------------------------------------------------- | ----- |
| Breadcrumb "Revisione per disciplina" sotto tabbar             | ✅    |
| Stato: revisione avviata                                       | ✅    |
| Prossima azione: controlla le 12 voci da validare              | ✅    |
| 3 azioni: Controlla voci, Apri documento, Esporta              | ✅    |
| 💾 Ogni decisione viene conservata in questo browser.          | ✅    |
| ⚙️ Azioni ▾ con menu secondario                                | ✅    |
| Salva, Backup, Importa, Ripristina                             | ✅    |
| 📲 Installa, 👤 Impostazioni, 📘 Corso PDF, 🏛️ Motto, ❔ Guida | ✅    |
| Sidebar discipline                                             | ✅    |
| Toolbar (filtri + export)                                      | ✅    |
| Uso ibrido collassabile                                        | ✅    |
| Export Tecnologia                                              | ✅    |
| Tab Riepilogo + disclaimer                                     | ✅    |
| Tab Normativa                                                  | ✅    |
| Tab Generali                                                   | ✅    |
| Footer                                                         | ✅    |

### Asset

| Asset                                      | Esito        |
| ------------------------------------------ | ------------ |
| `sw.js`                                    | ✅ Invariato |
| `_headers`                                 | ✅ Invariato |
| `manifest.webmanifest`                     | ✅ Invariato |
| `motto-non-multa-sed-multum.html`          | ✅ Invariato |
| `riferimenti_istituzionali_normativa.json` | ✅ Invariato |
| `Corso_*.pdf` (2)                          | ✅ Invariati |
| `icons/icon-192.png`                       | ✅ Invariato |
| `icons/icon-512.png`                       | ✅ Invariato |
| `docs_distribuzione/`                      | ✅ Invariati |

### Responsive (sorgente)

| Viewport                  | Esito                            |
| ------------------------- | -------------------------------- |
| 360px (small phone)       | ✅ Breakpoint dedicato           |
| 390px (iPhone 13)         | ✅ Breakpoint 380px copre        |
| 414px (iPhone 11 Pro Max) | ✅ Breakpoint 560px copre        |
| 768px (tablet portrait)   | ✅ Breakpoint 760px dedicato     |
| 1280px (desktop)          | ✅ Breakpoint 1180/900px coprono |

### Regressioni

| Area                    | Esito         |
| ----------------------- | ------------- |
| Card compatte           | ✅ Preservate |
| Dettaglio espandibile   | ✅ Preservato |
| Touch target 44px       | ✅ Preservato |
| Approvazione/rifiuto    | ✅ Invariati  |
| Conteggi                | ✅ Invariati  |
| Markdown generation     | ✅ Invarata   |
| Tecnologia export panel | ✅ Invariato  |
| PDF/sw.js/_headers      | ✅ Invariati  |

## Deploy

- Comando: `npx netlify deploy --prod --dir _published_snapshot/netlify-current --message "CML-013D — guided home prototype"`
- Durata: 4.7s
- File uploadati: 1 (index.html — unico file modificato)
- URL produzione: https://curmanlight.netlify.app
- Unique deploy URL: https://6a37daaf34af39a1d2db290f--curmanlight.netlify.app
- Deploy ID: 6a37daaf34af39a1d2db290f

## Verifica post-deploy

| Elemento                                                  | Esito |
| --------------------------------------------------------- | ----- |
| Home guidata live                                         | ✅    |
| Stato: revisione avviata                                  | ✅    |
| Prossima azione: controlla le 12 voci da validare         | ✅    |
| 3 azioni: Controlla voci, Apri documento, Esporta         | ✅    |
| Breadcrumb: Revisione per disciplina                      | ✅    |
| Menu ⚙️ Azioni (Salva, Backup, Importa, Ripristina, ecc.) | ✅    |
| Sidebar discipline                                        | ✅    |
| Toolbar + filtri + export                                 | ✅    |
| Tab Riepilogo + disclaimer validazione                    | ✅    |
| Tab Normativa                                             | ✅    |
| Tab Generali                                              | ✅    |
| Tecnologia export panel                                   | ✅    |
| Asset invariati                                           | ✅    |
| Nessuna regressione bloccante                             | ✅    |

## Divieti rispettati

- ✅ Nessuna modifica funzionale
- ✅ Nessuna modifica a index.html (solo il deploy del commit esistente)
- ✅ Nessun merge
- ✅ Nessun nuovo sito Netlify
- ✅ Nessuna modifica a PDF, sw.js, _headers, assets
- ✅ Nessuna modifica a Markdown generation, export panel, logica approvazione/rifiuto, conteggi

## Verdetto

```
CML_013D_CONTROLLED_NETLIFY_PUBLICATION_GUIDED_HOME_CLOSED
```

## Output finale

| Campo                          | Valore                                                                              |
| ------------------------------ | ----------------------------------------------------------------------------------- |
| Verdetto                       | `CML_013D_CONTROLLED_NETLIFY_PUBLICATION_GUIDED_HOME_CLOSED`                        |
| Branch                         | `cml-008r-fix-markdown-decision-summary`                                            |
| Commit pre-deploy              | `7249d66`                                                                           |
| URL pubblicato                 | https://curmanlight.netlify.app                                                     |
| Comando deploy                 | `npx netlify deploy --prod --dir _published_snapshot/netlify-current`               |
| File modificati                | 1 (index.html)                                                                      |
| Home guidata pubblicata        | ✅                                                                                  |
| 3 azioni principali pubblicate | ✅                                                                                  |
| Menu Azioni pubblicato         | ✅                                                                                  |
| Breadcrumb pubblicato          | ✅                                                                                  |
| Asset invariati                | ✅                                                                                  |
| Regressioni bloccanti          | ✅ Nessuna                                                                          |
| Stato Git finale               | `7249d66` — working tree pulita (dopo commit docs)                                  |
| Rischi residui                 | Breadcrumb non dinamico (segnalato in CML-013C), CSS `.local-save-bar` inutilizzato |

## Prossimo step

A scelta:

- **CML-013E** — navigazione mobile (menu a scomparsa, bottom bar)
- **CML-013F** — pannello dettaglio contestuale (desktop laterale, mobile espandibile)
- Oppure ricalibrare la sequenza in base al test reale
