# CML-258 — UDA SMART AND PLANNING FLOW AUDIT

## Report di audit

**Data analisi:** 2026-07-02
**Repository:** CurManLight
**Branch:** main
**HEAD:** `44f18e9`
**Slice precedente:** CML-257 — UX MATURITY CYCLE CLOSURE

---

## Sintesi esecutiva

L'area **UDA smart / Programmazione** all'interno di "Competenze e progettazione" è stata analizzata in 6 dimensioni. L'area funziona correttamente: stati vuoti coperti (CML-238), filtri funzionanti, export locale Markdown presente, flusso Passo 1 → Passo 2 coerente. I rilievi sono di chiarezza concettuale (P3), non di blocco funzionale.

**Decisione:** nessuna runtime immediata. L'area è matura per un prototipo scolastico leggero. Opzionale CML-259 per microcopy minima.

---

## Stato tecnico di partenza

| Elemento | Stato |
|----------|-------|
| `localStorage` chiavi | `cml_annual_planning_draft_v1` (bozza annuale), `cml_uda_smart_library_v1` (libreria UDA smart) |
| Gestione dati | Solo lettura/scrittura locale, nessuna persistenza esterna |
| Dipendenze runtime | Nessuna — JavaScript vanilla |
| Validatori | Non toccati (curricolo 14/14, shape 14/14) |
| Filtri | 6 filtri + ordinamento + ricerca testo |
| Export | Markdown locale (anteprima, copia, download) |
| Relazione con .cml | Nessuna — UDA smart non usa/esporta formato `.cml` |

---

## Contesto UX dopo ciclo maturo

Il ciclo CML-252→CML-257 ha reso mature:
- **Home** — orientamento con card, badge, percorso di lavoro
- **Guida** — sezione con istruzioni per ruolo
- **Messaggi** — stati vuoti con "Cosa puoi fare ora" (Processo, import discipline)
- **Esportazioni** — guida ruolo per scelta export

L'area UDA/Programmazione non è stata toccata da questo ciclo (ultima slice su UDA smart: CML-238 — empty states micro-slice). Questo audit valuta se l'area è coerente con il resto maturo o se necessita di allineamento.

---

## Analisi dettagliata

### 1. Collocazione funzionale

**Osservazione:**
- UDA smart è **annidata** dentro "Programmazione annuale" → Passo 2 (elemento `<details>`, righe 1559–1590)
- "UDA modello" è un **sub-tab autonomo** della barra subnav-didattica (riga 1386), separato da "Programmazione annuale" (riga 1385)
- La Home "Percorso di lavoro" è incentrata su Curriculum revisione (Docente→Dipartimento→Referente→Documento) e non menziona UDA smart o Programmazione
- Guida (righe 2121–2126) elenca Valutazione/Evidenze, Programmazione annuale e UDA modello come tre voci distinte

**Rilievo:** La separazione tra "UDA modello" (sub-tab) e "UDA smart" (annidata in Programmazione) è poco evidente. Un utente che cerca "UDA" potrebbe guardare il sub-tab UDA modello e non vedere la libreria UDA smart. Il cross-link dalla nota UDA modello (riga 1597) mitiga parzialmente.

**Priorità:** P3

### 2. Comprensibilità per l'utente scolastico

**Osservazione:**
- "UDA modello" è chiaramente descritto: "Mostra come un'unità curricolare può essere trasformata in una unità di apprendimento" (riga 1596)
- "UDA smart" è descritta come "Strumento guidato per preparare una bozza UDA smart basata sulla programmazione annuale" (riga 1564)
- **Disclaimer contraddittorio** riga 1529: "Questa vista non crea UDA, non salva dati e non modifica il curricolo" — ma il Passo 2 permette di "Genera UDA da programmazione annuale" e "Salva bozza UDA"
- Il badge "📋 Area operativa" (riga 1452) segnala correttamente lo stato prototipale

**Rilievo:** Il disclaimer della Programmazione (riga 1529) è tecnicamente falso dopo l'introduzione di UDA smart. Andrebbe riscritto per: "Questa vista prepara la programmazione annuale; le UDA si generano al Passo 2."

**Priorità:** P3

### 3. Flusso operativo

**Osservazione:**
- Flusso attuale: Home → "Competenze e progettazione" → "Programmazione annuale" → Passo 1 (bozza annuale) → Passo 2 (UDA smart)
- Il "Percorso di lavoro" in Home (righe 1461–1482) descrive: Docente → Dipartimento → Referente → Documento finale
- UDA smart / Programmazione non è menzionato nel Percorso di lavoro
- Collegamento assente tra UDA smart e il flusso revisione: le bozze UDA smart non alimentano il processo di revisione curricolare (né `.cml`, né export, né validazione)

**Rilievo:** L'utente deve scoprire da solo che la progettazione didattica (UDA) è un percorso parallelo e non sequenziale rispetto alla revisione curricolare. Il Percorso di lavoro potrebbe includere un accenno: "Per la progettazione didattica, vedi Competenze e progettazione."

**Priorità:** P3

### 4. Stati e filtri

**Osservazione:**
- CML-238 ha già migliorato gli stati vuoti della libreria UDA smart
- Stato vuoto Passo 1 (riga 2870): "Nessuna unità per questa combinazione" con suggerimento azione
- Stato vuoto Passo 2 (riga 2929): "Nessuna bozza UDA salvata" con suggerimento azione
- Filtri: 6 dimensioni (disciplina, ordine, classe, periodo, stato, testo) + ordinamento
- Contatori visibili in `#uda-smart-library-filter-results` (riga 2912)
- Coerente con pattern CML-252: messaggio + azione suggerita

**Rilievo:** Funzionante. Nessuna azione necessaria.

**Priorità:** OK

### 5. Esportazione e conservazione

**Osservazione:**
- UDA smart ha export Markdown: Anteprima (`previewUdaSmartMarkdown`), Copia (`copyUdaSmartMarkdown`), Download (`downloadUdaSmartMarkdown`)
- Le Esportazioni (tab, righe 2012–2083) non elencano le UDA smart tra i gruppi esportabili
- L'UDA modello ha generazione bozza (righe 1613–1616) ma non è persistita
- Nessun formato `.cml` per UDA smart

**Rilievo:** Manca un collegamento tra la libreria UDA smart e le Esportazioni. Un docente che ha salvato una bozza UDA smart deve ricordarsi dov'è — non c'è un hub centralizzato.

**Priorità:** P3

### 6. Rischio runtime

**Osservazione:**
- **Microcopy minima:** modificare disclaimer riga 1529, aggiungere link in Home/Esportazioni — bassissimo rischio, solo stringhe
- **Modifica strutturale** (aggiungere export UDA smart in Esportazioni, nuovo storage key, nuovo formato): medio-alto rischio
- Chiavi `localStorage` esistenti sono isolate: `cml_annual_planning_draft_v1` e `cml_uda_smart_library_v1`
- Regressione possibile su: `buildGeneratedUdaSmartDraft`, `renderUdaSmartLibrary`, generatori Markdown

**Rilievo:** Per microcopy, rischio basso. Per modifiche strutturali (es. aggiungere UDA smart alle Esportazioni), rischio medio — servirebbe test accurato.

**Priorità:** Medio (strutturale) / Basso (microcopy)

---

## Tabella rilievi

| ID | Area | Rilievo | Priorità | Impatto | Soluzione proposta |
|----|------|---------|----------|---------|--------------------|
| R1 | Collocazione | UDA smart annidata in Programmazione (Passo 2), separata da UDA modello (sub-tab). Cross-link presente. | P3 | Basso | Accettare come architettura corrente |
| R2 | Comprensibilità | Disclaimer "non crea UDA" (riga 1529) contraddice presenza "Genera UDA" (Passo 2) | P3 | Medio | Riscrivere disclaimer (CML-259) |
| R3 | Flusso | "Percorso di lavoro" Home non menziona UDA/Programmazione | P3 | Basso | Aggiungere micro-link (CML-259) |
| R4 | Esportazione | UDA smart assente da Esportazioni | P3 | Basso | Aggiungere nota in Esportazioni (CML-259) |
| R5 | Stati/filtri | Funzionanti, coerenti con CML-238/252 | OK | — | — |
| R6 | Rischio | Microcopy: basso. Strutturale: medio. | — | — | Microcopy consigliata come eventuale prossima slice |

---

## Raccomandazione finale

**L'area UDA smart / Programmazione è accettabile allo stato corrente per uso scolastico leggero su prototipo.** I rilievi sono P3 e non bloccanti. L'area è coerente, funzionante e già migliorata da CML-238. Non serve una runtime immediata.

Se si decide di migliorare la chiarezza, il perimetro suggerito per una futura slice (CML-259) è minimo:
1. Una riga di disclaimer corretta in Programmazione (riga 1529)
2. Un micro-link nel "Percorso di lavoro" Home
3. Una nota in "Esportazioni" che citi le UDA smart

Beneficio atteso: basso. L'utente tipo (docente con familiarità scolastica) comprende già la struttura.

---

## Perimetro dell'eventuale CML-259 (opzionale)

- **Tipo:** runtime microfix
- **File:** solo `index.html` (e snapshot corrispondente)
- **Modifiche:** solo stringhe di visualizzazione, nessuna logica JavaScript, nessun storage, nessun handler
- **Rischio:** bassissimo
- **Scope suggerito:**
  1. Disclaimer riga 1529: "Questa vista non crea UDA, non salva dati e non modifica il curricolo" → "Questa vista prepara la programmazione annuale (Passo 1). Le UDA smart si generano al Passo 2."
  2. "Percorso di lavoro" Home (riga 1482): aggiungere "Per la progettazione didattica (UDA, programmazione), vedi Competenze e progettazione."
  3. Esportazioni (dopo riga 2016): aggiungere nota "Le bozze UDA smart si gestiscono in Competenze e progettazione → Programmazione annuale → Passo 2."

---

## Rischi da evitare

- Non modificare `localStorage` — le chiavi esistenti sono isolate e funzionanti
- Non modificare i generatori Markdown (`buildUdaSmartDraftMarkdown`, `buildAnnualPlanningMarkdown`)
- Non modificare i filtri (`matchUdaSmartDraftFilters`, `applyUdaSmartLibraryFilters`)
- Non modificare gli handler di salvataggio (`saveUdaSmartDraft`, `clearUdaSmartLibrary`)
- Non introdurre nuovi storage key senza test completo
- Non modificare schema `.cml` — UDA smart è esterna

---

## Checklist finale

- [x] repository preflight verified
- [x] runtime inspected read-only
- [x] UDA smart/planning flow reviewed
- [x] relationship with mature UX cycle reviewed
- [x] risks classified
- [x] next decision recorded
- [x] runtime unchanged
- [x] no deploy executed
- [x] no push executed
- [x] verdict recorded

---

## Verdict

```
CML_258_UDA_SMART_AND_PLANNING_FLOW_AUDIT_READY_LOCAL_NOT_PUSHED
```
