# CML UX Revisione Separation Plan

## Stato della slice

- **Tipo**: docs-only
- **Scope**: definire contratto per separare la vista Revisione in componenti indipendenti: decisione, strumenti processo, esportazione per disciplina
- **Runtime modificato**: no
- **Base piano**: CML_UX_DECLUTTER_AND_ERGONOMICS_IMPLEMENTATION_PLAN (slice #2)
- **Commit di partenza**: `741f64f`
- **Verdetto atteso**: `CML_UX_REVISIONE_SEPARATION_PLAN_READY`

## Problema

La vista Revisione (`#tab-lavoro`) mescola **4 compiti distinti** nello stesso spazio, violando il principio `una schermata, un compito, una decisione principale`:

| Compito                                       | Elemento attuale                                        | Problema                                                        |
| --------------------------------------------- | ------------------------------------------------------- | --------------------------------------------------------------- |
| **Decidere** (approvare/rifiutare/modificare) | `cards-area` + toolbar filtri                           | Compito primario, ma affiancato da esportazioni e import        |
| **Esportare per disciplina**                  | `disc-export-panel` (bozza, copia, download)            | Sempre visibile di lato, compete con le cards per attenzione    |
| **Importare proposte**                        | `department-import-panel` + `referent-validation-panel` | Strumenti di processo, non di revisione diretta                 |
| **Esportare confronto**                       | `toolbar-export` (Word/Copia/Markdown/PDF/CML)          | Duplicato con Riepilogo, presente in toolbar sempre accessibile |

Un docente che deve **decidere** se approvare o meno una proposta si trova:

- toolbar con 9+ pulsanti (filtri + esportazioni + toggle)
- pannello esportazione disciplina visibile sopra le cards
- pannelli import/validazione in accordion sotto la toolbar
- notice ibrido (uso, requisiti, PDF corso)
- 4 diversi punti di generazione export

## Architettura target

```
Revisione
├── Decidi (compito primario)     → cards-area + toolbar filtri essenziali
├── Esporta disciplina             → pannello richiamabile, non always-on
├── Strumenti processo             → tab/folder separato (import, validazione)
└── (Esportazioni centrali)        → rimandate a slice export center (#4-5)
```

### Principio

```
La vista Revisione ha un solo compito: decidere.
```

Tutto ciò che non è **decidere** (approvare/rifiutare/modificare/aggiungere/rimuovere) deve essere:

- spostato in un pannello richiamabile (esportazione disciplina)
- spostato in un'altra vista (strumenti processo)
- rimosso in attesa della centralizzazione export (esportazioni confronto)

## Analisi componenti

### 1. Toolbar filtri (da mantenere, compattare)

| Pulsante                                 | Decisione                                       |
| ---------------------------------------- | ----------------------------------------------- |
| Tutti                                    | Mantenere                                       |
| Da decidere                              | Mantenere                                       |
| Approvati                                | Mantenere                                       |
| Rifiutati                                | Mantenere                                       |
| Invariati                                | Mantenere                                       |
| Nuovi                                    | Mantenere                                       |
| Nascondi invariati                       | Mantenere                                       |
| Altri filtri toggle                      | Mantenere                                       |
| Separatore `\|`                          | Mantenere                                       |
| **Esportazioni ▾ (toggle + 6 pulsanti)** | **Rimuovere — delegato a export center (#4-5)** |

La toolbar filtri serve al compito **decidere**: deve rimanere.

L'esportazione confronto in toolbar (`toolbar-export`) compete con il compito primario e ha corrispettivo in Riepilogo. Rimossa in attesa della centralizzazione export (slice #4-5).

### 2. Usage notice (da compattare o spostare)

| Elemento                    | Decisione                                     |
| --------------------------- | --------------------------------------------- |
| `💡 Uso ibrido e requisiti` | Compattare a 1 riga o accordion sempre chiuso |
| Link PDF corso              | Compattare a etichetta singola                |

La notice serve al primo accesso, non alla revisione corrente.

### 3. Strumenti processo (da isolare)

| Elemento                                         | Decisione                                                                          |
| ------------------------------------------------ | ---------------------------------------------------------------------------------- |
| `🔧 Strumenti di processo`                       | Estrarre in tab/folder separato `#tab-processo` o accordiono collassato di default |
| `🏫 Validazione dipartimentale` (import CML)     | Spostare in vista processo                                                         |
| `📋 Verifica referente curricolo` (import esiti) | Spostare in vista processo                                                         |
| Blocco `role-access-lock`                        | Mantenere associato alla funzione referente                                        |

Questi strumenti non servono alla revisione diretta: un docente che decide non ha bisogno di importare/produrre report. Servono al referente o al dipartimento.

### 4. Per-discipline export panel (da rendere richiamabile)

| Elemento                                          | Decisione                                               |
| ------------------------------------------------- | ------------------------------------------------------- |
| `disc-export-panel` (`display:block` dopo render) | Rendere richiamabile da toggle, non visibile di default |
| Badge `Documento di lavoro — da validare`         | Mantenere                                               |
| Genera bozza                                      | Mantenere ma spostare in toggle                         |
| Azioni di esportazione ▾                          | Mantenere ma spostare in toggle                         |
| Textarea preview                                  | Mantenere ma spostare in toggle                         |

Il pannello attualmente si attiva quando `render()` viene chiamato (linea 3385). Questo significa che ogni volta che si fa una decisione, il pannello è visibile. Deve essere **richiamabile** (es. pulsante "📝 Bozza disciplina" nella toolbar), non **sempre visibile**.

### 5. cards-area (da mantenere invariata)

| Elemento                                  | Decisione |
| ----------------------------------------- | --------- |
| Discipline header                         | Mantenere |
| Per-ordine section                        | Mantenere |
| Cards confronto (IN 2012 ↔ proposta 2025) | Mantenere |
| Decision buttons (✅ ❌ 🔍)               | Mantenere |
| Edit inline                               | Mantenere |
| Add/Remove                                | Mantenere |
| Gap notice                                | Mantenere |
| Ordine lock notice                        | Mantenere |
| Empty state                               | Mantenere |

## Backlog slice revisione

### Slice 3: CML_UX_REVISIONE_COMPACT_RUNTIME

Prima slice runtime dopo questo piano. Implementa la separazione:

1. **Rimuovere** `toolbar-export` e contenuto esportazione dalla toolbar Revisione
2. **Rimuovere** `disc-export-panel` `display:block` automatico; sostituire con pulsante "📝 Bozza disciplina" nella toolbar che mostra/nasconde il pannello
3. **Spostare** `🔧 Strumenti di processo` (department import, referent validation) in nuovo `#tab-processo` o accordiono collassato
4. **Compattare** usage notice a 1 riga
5. **Mantenere** toolbar filtri, cards-area, decision buttons invariate
6. **Bump** CACHE_NAME in `sw.js`

Gate aggiuntivi:

- Decisione su tab separato vs accordiono collassato per strumenti processo
- Verifica che export disciplina sia raggiungibile con ≤ 2 click
- Verifica che toolbar filtri non abbia perso funzionalità
- Scroll revisione: prima schermata mostra toolbar + inizio cards

### Decisioni aperte (da risolvere in slice #3)

| Decisione                             | Opzioni                                                                                  | Raccomandazione                                                   |
| ------------------------------------- | ---------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| Destinazione strumenti processo       | (a) Nuovo tab `#tab-processo` (b) Accordiono collassato in Revisione (c) Pulsante modale | (a) — separazione netta, coerente con `una schermata, un compito` |
| Posizione pulsante bozza disciplina   | (a) In toolbar filtri (b) In header disciplina (c) In cards-area                         | (a) — sempre accessibile, non compete con cards                   |
| Usage notice: nascondere o compattare | (a) Accordiono sempre chiuso (b) Testo 1 riga (c) Rimuovere                              | (b) — informazione utile al primo accesso ma non invadente        |

## Cosa NON cambia in questa slice docs-only

- Contenuti curricolari
- Navigazione hash, sidebar, subnav
- Backend, framework, dipendenze
- CSS strutturale delle classi esistenti
- Funzioni JS esistenti (nessuna eliminata)
- Flusso decisionale (approve/reject/edit/remove)
- Salvataggio locale
- sw.js / manifest.json / service-worker.js

## Gate di accettazione

- `git diff --check`: OK
- Solo `docs/03_execution/`, `report/`, `docs/REPO-MOVELOG.md` modificati
- Nessuna modifica runtime
- Verdetto documentato

## Verdetto

```
CML_UX_REVISIONE_SEPARATION_PLAN_READY
```
