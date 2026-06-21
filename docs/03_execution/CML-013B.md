# CML-013B — Guided Home Static Prototype

## Stato

Primo prototipo runtime della nuova home guidata.
Solo orientamento iniziale — nessuna ristrutturazione completa della navigazione.

## Preflight

- Branch: `cml-008r-fix-markdown-decision-summary`
- HEAD partenza: `e3c105d` (CML-013A)
- Working tree: pulita prima delle modifiche
- CML-013A preservato ✅
- CML-012A preservato ✅

## Modifiche (23 insertions, 10 deletions — solo `index.html`)

### CSS aggiunte (17 righe)

| Area | Cosa | Effetto |
|---|---|---|
| `.path-breadcrumb` | Nuovo breadcrumb | Indicatore di percorso sotto la tabbar |
| `.cruscotto-btn` | Font 13px, padding 9px 18px, box-shadow | Pulsanti principali più grandi e riconoscibili |
| `.cruscotto-primary` | Box-shadow potenziato | Pulsante "Controlla voci" più evidente |
| `.cruscotto-state` | Font 11px | Stato leggermente più leggibile |
| `.cruscotto-next` | Font 16px | Prossima azione più visibile |
| `.aside-box` | Box-shadow leggero | Sidebar desktop meno dominante |
| `.aside-title` | Background #78909c, padding ridotto | Intestazione sidebar più discreta |
| `.toolbar` | Box-shadow rimosso, border #eceff1 | Toolbar visivamente più leggero |
| `.filter-btn` | Font 10px, padding 3px 9px | Filtri più compatti (desktop) |

### HTML modifiche (6 righe nette)

| Dove | Cosa | Perché |
|---|---|---|
| Dopo tabbar | Breadcrumb "Revisione per disciplina" | Percorso di navigazione visibile |
| `cruscotto-bar` | `local-save-status` inline nel save span | Stato salvataggio come testo compatto |
| `quick-actions` | Aggiunti Salva, Backup, Importa, Ripristina | Funzioni secondarie nel menu Azioni |
| `tab-lavoro` | Rimossa `local-save-bar` | Non più blocco dominante, funzioni in Azioni |

## Criteri di accettazione (da CML-013A)

| Criterio | Esito |
|---|---|
| Max 3 azioni principali visibili | ✅ Controlla voci, Apri documento, Esporta |
| Discipline accessibili ma non dominanti | ✅ Sidebar più discreta su desktop, orizzontale su mobile |
| Salvataggio come stato, non blocco | ✅ Testo compatto nel cruscotto-bar; pulsanti in Azioni |
| Funzioni secondarie nel menu Azioni | ✅ Salva/Backup/Importa/Ripristina/Installa/Guida in Azioni |
| Nessuna perdita funzionale | ✅ Tutte le funzioni accessibili |
| Nessuna regressione mobile | ✅ Breakpoint invariati, touch target 44px preservato |
| Conteggi invariati | ✅ Non modificati |
| Logica approvazione/rifiuto invariata | ✅ Non modificata |

## Funzioni preservate

| Funzione | Nuova collocazione |
|---|---|
| Controlla voci | Pulsante primario nel cruscotto |
| Apri documento (Curricolo Definitivo) | Pulsante nel cruscotto (tab Riepilogo) |
| Esporta | Pulsante nel cruscotto (tab Lavoro→toolbar) |
| Filtri (Da decidere, Tutti, Altri filtri) | Toolbar in tab Lavoro |
| Export confronto (Word/Copia/MD/PDF) | Toolbar in tab Lavoro |
| Export definitivo | Tab Riepilogo |
| Salvataggio locale | Stato in cruscotto-bar + pulsante in Azioni |
| Backup / Importa / Ripristina | Menu Azioni |
| Installazione app | Menu Azioni |
| Impostazioni / onboarding | Menu Azioni |
| Guida rapida | Menu Azioni |
| Corso PDF / Motto | Menu Azioni |
| Uso ibrido e requisiti | Dettaglio collassabile in tab Lavoro |
| Fonti normative | Tab Normativa |
| Sezioni generali | Tab Generali |
| Disclaimer validazione | Su export confronto e definitivo (invariato) |
| Breadcrumb | Nuovo — sotto tabbar |

## Asset invariati

- ✅ Markdown generation
- ✅ Tecnologia export panel
- ✅ PDF, sw.js, _headers, manifest, icons
- ✅ Nessun backend

## Verdetto

```
CML_013B_GUIDED_HOME_STATIC_PROTOTYPE_READY
```

## Prossimo step

CML-013C — Smoke audit della nuova home (verificare primo impatto utente prima di proseguire con navigazione mobile o pannello dettaglio).
