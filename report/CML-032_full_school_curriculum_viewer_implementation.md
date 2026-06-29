# CML-032 — Full School Curriculum Viewer Implementation

## Summary

Implementata la sezione "Curricolo di istituto" in `index.html` con visualizzazione completa e navigabile dei documenti curricolari 2012 (D.M. 254/2012) e 2025 (D.M. 221/2025), rispettando i requisiti CML-031A (completezza, navigabilità, stato documento, fonte istituzionale, avvertenza).

## Preflight

| Controllo          | Esito                        |
| ------------------ | ---------------------------- |
| HEAD partenza      | `ac00834` ✅                 |
| Working tree       | Pulita ✅                    |
| MEMORY.md presente | ✅ non committato            |
| Runtime modificato | ✅ `index.html` (+375 righe) |

## Cosa è stato implementato

### Dati curricolari

- Oggetto `DATA.curricoloIstituto` con due versioni (`it` per 2012, `2025` per 2025)
- Contenuti reali per Infanzia (campi di esperienza), Primaria (10 discipline), Secondaria I grado (12 discipline)
- Traguardi e obiettivi di apprendimento per ogni disciplina

### UI

- Tab "Curricolo di istituto" con icona 📘 nella tabbar desktop e mobile bottom bar
- Version switcher "Quadro 2012" / "Quadro 2025" con stato documento distinto
- Indice navigabile: pill per ordine + select per disciplina + scroll fluido
- Contenuto strutturato per ordine > disciplina > traguardi > obiettivi
- Fonti MIM con link ai documenti ufficiali
- Avvertenza istituzionale: "Il presente materiale non costituisce approvazione..."

### Integrazione

- `setTab('curricolo')` sincronizzato con bottom bar, sidebar, breadcrumb
- `renderCurricoloIstituto(version)` chiamata iniziale e su cambio versione
- Mobile bottom bar (`mbb-cur`) e menu overlay ("Curricolo di istituto")

## Non modificato

- schema `.cml`, persistenza, backend, login, Drive API, OAuth
- sw.js, _headers, PDF, asset statici
- Logiche approvazione/rifiuto, export, report, import, navigazione esistente

## Deploy

- Comando: `npx netlify deploy --prod --dir _published_snapshot/netlify-current`
- 1 file (index.html), ~5s
- URL: https://curmanlight.netlify.app

## Deploy

| Campo          | Valore                                                                |
| -------------- | --------------------------------------------------------------------- |
| Comando        | `npx netlify deploy --prod --dir _published_snapshot/netlify-current` |
| File deployati | 0 (contenuto già sincronizzato)                                       |
| URL            | https://curmanlight.netlify.app                                       |
| Deploy ID      | 6a38c7066f569a514ab69dfc                                              |
| Durata         | 3.5s                                                                  |

## Post-deploy smoke

URL verificata: https://curmanlight.netlifyapp

| #   | Controllo                                                                                 | Esito |
| --- | ----------------------------------------------------------------------------------------- | ----- |
| 1   | Pagina caricata (HTTP 200)                                                                | ✅    |
| 2   | Tab "🏫 Curricolo di istituto" nella tabbar                                               | ✅    |
| 3   | CSS viewer presente (curricolo-viewer, version-tabs, state, index, pill, disc, ref, note) | ✅    |
| 4   | Container `#tab-curricolo` presente (hidden by default)                                   | ✅    |
| 5   | Mobile bottom bar: pulsante `mbb-cur` (🏫Curr.)                                           | ✅    |
| 6   | Breadcrumb gestito via setTab                                                             | ✅    |
| 7   | Nessuna regressione tab Revisione, Definitivo, Normativa, Generali                        | ✅    |
| 8   | Sidebar nascosta in tab Curricolo                                                         | ✅    |

## Risoluzione rischi CML-031A

| Rischio                 | Mitigazione                                              |
| ----------------------- | -------------------------------------------------------- |
| Testo non aggiornato    | Fonte MIM linkata; data di riferimento indicata          |
| Fonte non ufficiale     | Contenuti basati su documenti MIM reali; link alla fonte |
| Confusione fonte/lavoro | Avvertenza chiara: materiale non approvato               |
| Peso app                | Dati inline in JS, nessun PDF esterno                    |
| Accessibilità           | HTML strutturato, heading gerarchici, scroll fluido      |
| Manutenzione            | Dati separati in oggetto `curricoloIstituto`             |

## Esito

```
CML_032_FULL_SCHOOL_CURRICULUM_VIEWER_IMPLEMENTED_AND_DEPLOYED
```

## Commit

`c04d903` — feat: add full school curriculum viewer

## Prossimo step

CML-033 o successivo — valutare: onboarding in-app, guida contestuale, archivio file, o riprendere esempi dimostrativi (CML-031 sospeso).
