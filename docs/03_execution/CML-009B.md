# CML-009B — User View Top Area Lightening Runtime Increment

## Stato

Intervento sulla parte alta della vista utente completato.

## Modifiche applicate

Unico file modificato: `_published_snapshot/netlify-current/index.html`

| Elemento rimosso                              | Sostituito con                      |
| --------------------------------------------- | ----------------------------------- |
| `quick-info-bar` (save chip, profile, Azioni) | Cruscotto minimo                    |
| `orientation-card` (spiegazione 5 passi)      | Cruscotto minimo                    |
| `progress-wrap` (separato, 3 righe)           | Integrato nella barra del cruscotto |

| Elemento modificato | Prima                             | Dopo                                         |
| ------------------- | --------------------------------- | -------------------------------------------- |
| toolbar filtri      | 6 pulsanti sempre visibili        | 2 pulsanti primari + toggle "⋯ Altri filtri" |
| toolbar export      | 4 pulsanti + nota sempre visibili | Toggle "📄 Export ▾"                         |
| `usage-notice`      | Testo sempre visibile             | `<details>` collassato                       |
| `local-save-bar`    | 5 pulsanti + testo esteso         | Testo + 4 pulsanti compatti                  |
| `install-hint`      | Visibile di default               | Nascosto (`display:none`)                    |

## Cosa non toccato

Tabs (riepilogo, normativa, generali), sidebar discipline, cards-area, tecnologia export panel, Markdown generation, PDF, sw.js, _headers, assets, dati discipline, logica JavaScript.

## Verifiche eseguite

1. Branch: `cml-008r-fix-markdown-decision-summary`, HEAD `09b325c`
2. Working tree pulita prima delle modifiche: ✅
3. Solo area pre-cards modificata: ✅
4. Sezioni escluse non modificate: ✅
5. PDF, sw.js, _headers invariati (hash verificati): ✅
6. Pagina apribile localmente (localhost:5000, 200 OK): ✅
7. Prima azione utile visibile molto prima: ✅
8. Nessun errore JavaScript (renderProfileSummary non trova più `active-profile-summary`, ma la guardia `if(!el) return` impedisce errori): ✅
9. Repository pulito dopo le modifiche: ✅

## Prossimo passo

CML-009C — Verifica responsiva su mobile/tablet della vista alleggerita.
