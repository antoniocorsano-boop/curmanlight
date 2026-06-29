# CML UX Ergonomics Re-Audit

## Baseline tecnica

- **Commit**: `9fa751c` (HEAD, origin/main, origin/HEAD allineati)
- **Runtime**: `_published_snapshot/netlify-current/index.html` (5740 righe)
- **Precedenti UX**: 2 audit (CML-UX-ERGONOMICS-AUDIT, CML-UX-FLOW-AUDIT), 1 piano declutter, 2 piani separazione, 2 runtime compact, 2 piani export center, 1 runtime deduplicazione
- **Interventi eseguiti**: Revisione compattata, Processo separato, Consulta accordion, Export Center deduplicato
- **Modifiche dal primo audit**: sidebar disciplina integrata, accordion nativo, tab Processo, Export Center 6 gruppi, bridge Definitivo

## Scopo

Misurare l'ergonomia corrente dopo gli interventi UX del ciclo (CML_UX_REVISIONE_COMPACT_RUNTIME → CML_UX_EXPORT_CENTER_DEDUPLICATION_RUNTIME). Produrre punteggio numerico comparabile e identificare criticità residue.

## Vincoli

- Docs-only: nessuna modifica runtime
- Nessuna modifica a `content/`, `tools/`, `sw.js`, `manifest.json`
- Nessun deploy, nessun push
- Misurazione basata su lettura codice e simulazione flussi, non su test utente reale

## Metodo di audit

1. Lettura completa del runtime HTML/CSS (5740 righe)
2. Analisi per area di punteggio con griglia numerica
3. Verifica dei 6 ruoli utente target
4. Confronto con audit precedenti (CML-UX-ERGONOMICS-AUDIT, CML-UX-FLOW-AUDIT)
5. Classificazione criticità P0-P3

## Griglia di punteggio

| Area | Punti | Peso |
|---|---|---|
| Architettura informativa | 15 | 15% |
| Flusso per ruolo e compito | 15 | 15% |
| Densità visiva e carico cognitivo | 15 | 15% |
| Navigazione e orientamento | 10 | 10% |
| Export Center e azioni di output | 10 | 10% |
| Mobile/touch ergonomia | 10 | 10% |
| Accessibilità e leggibilità | 10 | 10% |
| Microcopy e coerenza linguistica | 10 | 10% |
| Prevenzione errori e sicurezza operativa | 5 | 5% |
| **Totale** | **100** | 100% |

## Risultati per area

### 1. Architettura informativa: 12/15

| Criterio | Esito | Evidenza |
|---|---|---|
| Sezioni principali comprensibili | OK | Home, Curriculum (5 sub), Competenze (2 sub), Esportazioni, Guida |
| Rapporto Curriculum/Revisione/Definitivo chiaro | OK | Subnav separa nettamente i 3 compiti |
| Ridondanze residue | MINIME | Quick-azioni "Salva copia" in Home e in Export Center (2 punti) |
| Menu coerente con compiti reali | PARZIALE | "Competenze e progettazione" unisce 2 compiti distinti (Evidenze + UDA) sotto un'etichetta lunga |

**Miglioramento rispetto al ciclo precedente**: SÌ. Export Center ora è un vero hub, non più un tab incompleto. Definitivo è solo riepilogo. Ridondanza quasi eliminata.

### 2. Flusso per ruolo e compito: 11/15

| Ruolo | Ingresso | Azione primaria | Passaggio successivo | Chiaro? |
|---|---|---|---|---|
| Docente | Home → Curriculum | Revisione → decidi → .cml | Esportazioni → Scarica proposta docente | SÌ |
| Dipartimento | Home → Curriculum → Processo | Import .cml → valuta | Esportazioni → Confronto / Bozza | SÌ |
| Referente | Home → Curriculum → Processo | Import esiti | Esportazioni → Report gruppo lavoro | SÌ |
| Consultazione | Home → Curriculum → Consulta | Leggi | Cambia disciplina | SÌ |
| Valutazione | Home → Competenze | Marcature evidenze | UDA modello | SÌ |
| UDA | Home → Competenze → UDA modello | Genera bozza | Copia/Scarica | SÌ |

**Osservazioni**: I flussi sono chiari ma mancano:
- Onboarding guidato per primo accesso (microguida presente ma statica)
- Indicazione di "prossima azione" contestuale oltre al cruscotto

**Confronto**: Migliorato molto (Export Center ha chiuso il gap "dove esporto?"). Precedente audit segnalava flussi ambigui — ora risolti.

### 3. Densità visiva e carico cognitivo: 10/15

| Schermata | Scroll stimato | Azioni visibili | Giudizio |
|---|---|---|---|
| Home | 1-2 schermate | 3 primarie + quick-actions | OK |
| Consulta | 3-5 schermate | 1 primaria + filtri | ALTO (contenuto disciplinare per natura lungo) |
| Revisione | 2-4 schermate | 5+ filtri + toggle bozza | MEDIO (migliorato dopo compact) |
| Processo | 1-2 schermate | 2 import + 1 report | OK |
| Definitivo | 2-4 schermate | 0 export (solo bridge) | OK (leggero dopo rimozione export) |
| Fonti | 1-2 schermate | 0 operativi | OK |
| Evidenze | 3-6 schermate | 1 filtro + marcature | ALTO |
| UDA | 2-3 schermate | 3 azioni | OK |
| Export Center | 2-3 schermate | 6 gruppi, ~20 azioni | MEDIO (ma raggruppato, navigabile) |

**Miglioramento**: Revisione da 4-6 a 2-4 schermate (compact). Export Center da 3-5 a 2-3 (raggruppamento più chiaro, nessuna navigazione forzata). Definitivo più leggero senza export.

**Residuo**: Didattica/Evidenze rimane la vista più densa (3-6 schermate).

### 4. Navigazione e orientamento: 6/10

| Aspetto | Giudizio | Evidenza |
|---|---|---|
| Breadcrumb | PARZIALE | Esiste ma nascosto in molte viste (solo `hidden` di default, mostrato su certi tab) |
| Hash navigation | INCOMPLETO | `#cur-{disciplina}` funziona per Consulta ma non sincronizza Revisione/Didattica |
| Sidebar in Fonti | ERRATO | Sidebar discipline ancora visibile in Fonti (P0 dal primo audit, non risolto) |
| Titolo/sezione coerenti | OK | Ogni tab ha titolo esplicito e coerente |
| Categoria attiva | OK | Pulsante attivo nella subnav/tabbar |

**Issue persistente**: La sidebar discipline in Fonti (`#tab-normativa` dentro `<div class="layout">` con `<aside>`) non è mai stata risolta. L'utente vede un elenco discipline quando sta consultando fonti normative.

### 5. Export Center e azioni di output: 8/10

| Criterio | Esito |
|---|---|
| Azioni raggruppate meglio? | SÌ — 6 gruppi coerenti |
| Doppioni? | NO — bridge link in Definitivo, niente duplicazione |
| 6 gruppi comprensibili? | SÌ — Documento finale, Confronto, Bozza, .cml, Report, Backup |
| Utente capisce cosa produrre? | SÌ — ogni gruppo ha descrizione e titolo |
| Migliorato rispetto a prima? | NETTAMENTE — prima aveva 3 gruppi incompleti con navigazione forzata |
| Copia sicurezza duplicata? | MINIMA — pulsante anche in quick-actions Home, ma accettabile per urgenza |

### 6. Mobile/touch ergonomia: 7/10

| Aspetto | Giudizio | Evidenza |
|---|---|---|
| Bottom bar | OK | 5 voci, etichette brevi (Curr., Comp., Esp.) |
| Touch target | OK | min-height 40-44px su tutti i controlli |
| Azioni principali raggiungibili | SÌ | Tabbar sticky in alto, bottom bar sticky |
| Scroll su mobile | ALTO | Consulta/Evidenze richiedono scroll significativo |
| Sezioni desktop-centrico | PARZIALE | Sidebar diventa scroll orizzontale — OK |
| Export buttons mobile | OK | Flex 1 1 100% su viewport ridotto |

### 7. Accessibilità e leggibilità: 6/10

| Aspetto | Giudizio |
|---|---|
| Contrasto testo | OK (fondi chiari, testo scuro) |
| Gerarchia visiva | OK (h2, h3, badge, card) |
| Dimensione controlli | OK (min 40px) |
| Etichette ARIA | PARZIALI (alcuni toggle hanno `aria-expanded`, ma non sistematico) |
| Icone non spiegate | MOLTE (emoji onnipresenti, alcune senza testo alternativo) |
| Skip link | ASSENTE |
| Navigazione da tastiera | NON VERIFICATA (complesso via SPA con tab dinamici) |

### 8. Microcopy e coerenza linguistica: 8/10

| Aspetto | Giudizio |
|---|---|
| Linguaggio scolastico naturale | OK — "voci approvate", "proposta docente", "esito dipartimento" |
| Etichette aiutano l'azione | OK — "Genera bozza", "Scarica proposta", "Importa esiti" |
| Residui tecnici | MINIMI — ".cml" è tecnico ma spiegato come "File di lavoro" |
| Terminologia coerente | OK — validazione, proposta, documento, bozza, file .cml usati in modo consistente |
| "Definitivo" vs "Riepilogo" | MIGLIORATO — ora "Definitivo" è chiaro |

### 9. Prevenzione errori e sicurezza operativa: 4/5

| Aspetto | Giudizio |
|---|---|
| Dati solo locali | OK — nessun rischio perdita dati server |
| Validazione umana | OK — messaggi chiari in ogni sezione |
| Toast feedback | OK — azioni con feedback visivo |
| Role access lock | OK — alcune azioni protette |
| Conferma azioni distruttive | PARZIALE — reset richiede conferma, ma non sistematico |

## Punteggio complessivo: 72/100

| Area | Punteggio | Max |
|---|---|---|
| Architettura informativa | 12 | 15 |
| Flusso per ruolo e compito | 11 | 15 |
| Densità visiva e carico cognitivo | 10 | 15 |
| Navigazione e orientamento | 6 | 10 |
| Export Center e azioni di output | 8 | 10 |
| Mobile/touch ergonomia | 7 | 10 |
| Accessibilità e leggibilità | 6 | 10 |
| Microcopy e coerenza linguistica | 8 | 10 |
| Prevenzione errori e sicurezza operativa | 4 | 5 |
| **Totale** | **72** | **100** |

## Confronto con audit precedenti

Baseline numerica non disponibile — i precedenti audit (CML-UX-ERGONOMICS-AUDIT, CML-UX-FLOW-AUDIT) erano qualitativi senza punteggio. Questo audit stabilisce la **prima baseline ergonomica numerica post-deduplicazione**.

**Miglioramenti qualitativi rispetto al ciclo UX**:

| Problema precedente (P1) | Stato attuale | Delta |
|---|---|---|
| Export duplicati in 3 punti | RISOLTO — unico Export Center | ++ |
| Scroll 4-6 schermate in Revisione | RIDOTTO a 2-4 | + |
| Navigazione forzata (esportazioni che cliccano altri tab) | ELIMINATO — chiamate dirette | ++ |
| Tab Processo mancante | CREATO in CML_UX_REVISIONE_COMPACT_RUNTIME | ++ |
| Bozza disciplina non in Export Center | AGGIUNTA | + |
| .cml export solo da Processo | AGGIUNTO in Export Center | + |

**Problemi precedenti non risolti**:

| Problema | Area | Gravità |
|---|---|---|
| Sidebar in Fonti | Navigazione | P1 |
| Scroll in Evidenze (3-6 schermate) | Densità | P1 |
| Hash non sincronizzato | Navigazione | P2 |
| Tech-centrism (selDisc default) | Architettura | P2 |
| Breadcrumb nascosto | Orientamento | P2 |
| Nessuno skip link | Accessibilità | P2 |

## Criticità residue

### P0 — Nessuna

Tutti i compiti essenziali funzionano. Nessun blocco del workflow.

### P1 — Fatica elevata

| # | Area | Descrizione | Impatto | Evidenza |
|---|---|---|---|---|
| 1 | Navigazione | Sidebar discipline visibile anche in Fonti | Utente vede elenco discipline mentre consulta normativa — disorientamento | `<aside>` non nascosto in `#tab-normativa` |
| 2 | Densità | Scroll 3-6 schermate in Evidenze (tab-didattica) | Carico cognitivo alto su mobile | Lista evidenze lunga, filtri solo per ordine |
| 3 | Orientamento | Breadcrumb hidden di default | Utente non vede sempre il percorso attuale | `#breadcrumb` ha `hidden` nativo |

### P2 — Miglioria importante

| # | Area | Descrizione |
|---|---|---|
| 4 | Navigazione | Hash `#cur-{disciplina}` non sincronizza tab Revisione/Didattica |
| 5 | Architettura | `selDisc` default "Tecnologia" — app percepita come tech-centrica |
| 6 | Accessibilità | Nessun skip link, ARIA non sistematico, emoji senza testo alternativo |
| 7 | Orientamento | Breadcrumb nascosto in viste dove sarebbe utile (Consulta, Definitivo) |
| 8 | Microcopy | Etichetta tabbar "Competenze e progettazione" lunga (30 char) su mobile |

### P3 — Rifinitura

| # | Area | Descrizione |
|---|---|---|
| 9 | Export | Backup presente in quick-actions Home e in Export Center (duplicazione minore) |
| 10 | Microcopy | Alcuni usage-notice ancora 3-4 righe |
| 11 | Accessibilità | Contrasto badge warning (giallo su bianco) potrebbe essere migliorato |
| 12 | Mobile | Abbreviazioni bottom bar "Curr."/"Comp."/"Esp." non auto-esplicative al primo colpo |

## Raccomandazione sulla prossima slice

L'app è in uno stato stabile e funzionante. 72/100 indica margine di miglioramento ma nessun blocco.

**Prossima slice consigliata: CML-UX-NAVIGATION-AND-ORIENTATION** (runtime, non bloccante)

Risolverebbe i 3 P1 residui:
1. Sidebar in Fonti — nascondere `<aside>` quando tab non è Curriculum
2. Breadcrumb sempre visibile — rimuovere `hidden` di default
3. Hash navigation sincronizzata — estendere a Revisione/Didattica

Impatto previsto: +4-5 punti (navigazione 6→10, architettura informativa 12→14).

**In alternativa**: nessuna slice runtime urgente. L'app è usabile e stabile per l'uso scolastico.

## Controlli

- `git diff --check`: OK
- `git status --short --branch`: main, working tree pulito
- Nessun file runtime modificato

## Verdict

```
CML_UX_ERGONOMICS_RE_AUDIT_READY
```
