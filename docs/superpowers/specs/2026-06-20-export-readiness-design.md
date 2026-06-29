# Export/Readiness — Markdown strutturato della disciplina campione Tecnologia

**Data:** 2026-06-20
**Stato:** Revisione — in attesa di approvazione
**Branch piano:** `cml-008r-export-readiness`

## Obiettivo

Produrre un export Markdown strutturato della **sola disciplina Tecnologia** come primo passo del percorso export/readiness. L'output serve come **documento di lavoro** per il gruppo di revisione, NON come documento istituzionale finale. Il formato Markdown è scelto perché:

- **Nessuna libreria esterna richiesta** (la funzione `exportMarkdown()` esiste già, usa solo JS nativo)
- **Leggibile** in qualsiasi editor di testo, browser, o piattaforma di document sharing
- **Convertibile** in Word/PDF tramite tool esterni (Pandoc, Markdown editor), senza dipendenza dall'app
- **Versionabile** su git, confrontabile, revisionabile

## Contesto

L'app CurManLight è una SPA single-file (`index.html`, 2288 righe). Esiste già una funzione `exportMarkdown(onlyApproved=false)` che esporta tutte le discipline in Markdown, con modalità confronto e definitivo.

Tuttavia:

- L'export full-discipline è troppo dispersivo per il gruppo di lavoro che deve valutare una disciplina alla volta
- Non esiste un export focalizzato su una singola disciplina
- Non esiste un output che espliciti lo stato "documento di lavoro — da validare"
- Le sezioni generali non sono referenziate nell'export Markdown

## Strategia

Questa slice implementativa è **perimetrata**:

1. **Tecnologia come disciplina campione** — si lavora su una sola disciplina per validare il formato output prima di estenderlo alle altre 13
2. **Export Markdown strutturato** — si potenzia la funzione `exportMarkdown()` esistente, non si crea da zero
3. **Nessun DOCX diretto** — il Word rimane un obiettivo futuro, dopo aver validato il Markdown
4. **Nessun export completo di tutte le discipline** — il pilota Tecnologia serve a testare formato, struttura, e workflow di revisione

## Riferimenti

- File principale: `_published_snapshot/netlify-current/index.html`
- `exportMarkdown()`: righe 1766–1774
- `modelToMarkdown()`: righe 1618–1671
- `buildDocumentModel()`: righe 1562–1613
- Sezioni generali (HTML): righe 720–824
- `DISCIPLINE_META`: righe 836–851
- Bottoni export: righe 512–516 (Revisione), 540–544 (Definitivo)
- Funzione `exportWord()`: righe 1780–1937 (NON modificata in questa slice)
- Dati Tecnologia: righe ~940–970 (circa, all'interno di DATA)

## Output Markdown previsto

Il file `.md` generato deve contenere:

### 1. Intestazione documento

- Nome istituto, livello scolastico, codice meccanografico
- Titolo: "Curricolo Verticale di Istituto — Export di lavoro"
- Disciplina: **Tecnologia**
- Data di generazione
- Nota in evidenza: **"📄 Documento di lavoro — da validare. Non sostituisce delibera del Collegio Docenti."**

### 2. Riferimenti alle Sezioni generali

- Elenco puntato con i titoli delle 8 sezioni generali
- Nota: "Le sezioni generali sono consultabili nell'app CurManLight — tab Sezioni generali"

### 3. Sintesi decisioni

- Totale traguardi + obiettivi per Tecnologia
- Conteggio: ✓ Invariati, ✎ Modificati, ★ Nuovi 2025
- Di cui APPROVATI, RIFIUTATI, DA DECIDERE

### 4. Confronto 2012 → 2025

Per ogni item (traguardo/obiettivo) di Tecnologia:

- Stato: `✓ Invariato` / `✎ Da modificare` / `★ Nuovo 2025` / `🗑 Eliminato`
- Decisione: `APPROVATO` / `RIFIUTATO` / `DA DECIDERE`
- Se `status === "ok"`: solo testo IN2012
- Se `status === "modifica"`: testo IN2012 (attuale) + proposta IN2025 + decisione
- Se `status === "nuovo"`: solo proposta IN2025 + decisione
- Organizzato per: ordine scolastico (Infanzia / Primaria / Secondaria), poi traguardi, poi obiettivi
- Classe/grado indicato dove presente

### 5. Gap 2025

- Le voci con `status === "nuovo"` sono marcate come **"🧩 Gap 2025 — nuova proposta"**
- Le voci con `status === "modifica"` e decisione pendente sono marcate come **"🧩 Gap 2025 — proposta di modifica da validare"**
- Le voci approvate/rifiutate indicano l'esito con testo chiaro

### 6. Avvertenza finale

```
---
*Documento generato automaticamente dall'app CurManLight il ${data}.*
*Questo documento NON sostituisce:*
*- La delibera del Collegio dei Docenti*
*- L'approvazione formale del Curricolo d'Istituto*
*- Le Indicazioni Nazionali D.M. 254/2012 e D.M. 221/2025*
*Utilizzare come supporto al lavoro della Commissione Curricolo e dei Dipartimenti disciplinari.*
```

## Architettura

### Modifiche al codice

Le modifiche toccano solo `_published_snapshot/netlify-current/index.html`.

### Nuovo parametro in exportMarkdown()

La funzione `exportMarkdown()` riceve un parametro opzionale `disciplineFilter`:

```js
function exportMarkdown(onlyApproved=false, disciplineFilter=null)
```

- Se `disciplineFilter === null`: comportamento attuale (esporta tutte le discipline)
- Se `disciplineFilter === "Tecnologia"`: esporta solo Tecnologia con la nuova struttura
- In futuro: se `disciplineFilter === ["Italiano", "Matematica"]`: esporta solo quelle specificate

### Modifiche a buildDocumentModel()

Aggiungere supporto per filtro disciplina senza alterare l'interfaccia esistente:

```js
function buildDocumentModel(onlyApproved=false, { disciplineFilter=null }={})
```

- Se `disciplineFilter` è specificato, itera solo quelle discipline invece di `DISCIPLINE`
- Il resto del modello resta invariato (frontespizio, ordinamento, ecc.)

### Modifiche a modelToMarkdown()

Potenziata per accettare una configurazione di export che include:

- `introNote`: booleano — aggiunge "Documento di lavoro — da validare"
- `includeGeneraliRef`: booleano — aggiunge riferimenti sezioni generali
- `includeDecisionSummary`: booleano — aggiunge sintesi decisioni
- `includeGapMarkers`: booleano — marca esplicitamente i gap 2025
- `includeDisclaimer`: booleano — aggiunge avvertenza finale

Per questa slice: tutti i flag sono `true` quando `disciplineFilter` è specificato. Il comportamento legacy (nessun filtro) rimane identico.

### Nuova funzione: exportSingleDisciplineMarkdown()

Wrapper di `exportMarkdown()` per uso dai bottoni UI:

```js
function exportSingleDisciplineMarkdown(discipline) {
  exportMarkdown(true, discipline)
}
```

### UI — Bottone Export per disciplina

Non si aggiungono bottoni globali. Il primo accesso all'export Tecnologia avviene tramite:

**Opzione selezionata:** Un pulsante "📝 Esporta Markdown (Tecnologia)" nell'intestazione della disciplina Tecnologia nel tab Revisione, visibile solo quando la sidebar ha selezionato Tecnologia.

Posizione: nella barra del titolo della disciplina (accanto al nome Tecnologia), fuori dal flusso dei bottoni di export generali.

### Modifiche a modelToMarkdown() — struttura dettagliata

Quando `opts.introNote` è vero, il Markdown inizia con:

```markdown
# Curricolo Verticale di Istituto — Export di lavoro

**Istituto Comprensivo Calvario-Covotta «don Lorenzo Milani» — Ariano Irpino (AV)**
Livello scolastico: [Infanzia / Primaria / Secondaria I Grado] · Codice meccanografico: AVIC849003
Disciplina: **Tecnologia**
Data: 20 giugno 2026

> 📄 **Documento di lavoro — da validare.** Non sostituisce delibera del Collegio Docenti.
```

Poi segue la struttura completa: riferimenti sezioni generali, sintesi decisioni, confronto dettagliato, gap markers, avvertenza.

## Vincoli

1. **Nessuna libreria esterna** — tutto JS nativo, nessuna CDN
2. **Nessuna modifica ai dati esistenti** — DATA, DISCIPLINE_META, ORDINI, userProfile invariati
3. **Nessuna modifica a PDF** — sw.js, _headers, manifest.webmanifest, assets intatti
4. **Nessuna modifica al workflow approve/reject/edit** — funzioni, card rendering, filtri invariati
5. **Nessuna nuova chiave localStorage** — nessuna modifica a save/load/reset
6. **Nessuna modifica a exportWord(), exportPDF(), copyForWord()** — solo Markdown in questa slice
7. **Nessuna modifica a exportMarkdown() nel comportamento legacy** — se chiamata senza filtro, output identico
8. **Nessun deploy** nella slice implementativa — solo smoke locale
9. **Funzionamento offline garantito** — nessuna dipendenza esterna

## Criteri di accettazione

1. `exportMarkdown(true, "Tecnologia")` produce un file Markdown con:
   - Intestazione documento con nota "Documento di lavoro — da validare"
   - Riferimenti alle 8 sezioni generali
   - Sintesi decisioni (invariati/modificati/nuovi, approvati/rifiutati/da decidere)
   - Confronto IN2012→IN2025 per tutti gli item di Tecnologia
   - Gap 2025 marcati esplicitamente
   - Avvertenza finale sul carattere non deliberativo del documento
2. `exportMarkdown(true)` (senza filtro) produce output identico al precedente
3. `exportMarkdown(false, "Tecnologia")` produce export confronto (non definitivo) della sola Tecnologia
4. Il Markdown generato è leggibile e ben formattato
5. Nessuna modifica a exportWord, exportPDF, copyForWord
6. Nessuna modifica a sw.js, _headers, manifest.webmanifest

## Non incluso in questa slice

- Export Word/DOCX strutturato
- Sezioni generali incorporate nel documento (solo riferimenti)
- Export multi-disciplina
- Copertina, TOC, impaginazione professionale
- Selettore ordinamento per aree IN2025
- Interfaccia di export unificata
- Modifiche al tab Curricolo definitivo

## Test

### Smoke locale

```
[ ] exportMarkdown(true, "Tecnologia") → file .md scaricato
[ ] Il file .md contiene "Documento di lavoro — da validare"
[ ] Il file .md contiene riferimenti a tutte 8 sezioni generali
[ ] Il file .md contiene sintesi decisioni con conteggi corretti
[ ] Il file .md contiene confronto IN2012→IN2025 per ogni item Tecnologia
[ ] Il file .md marca i gap 2025 (nuovo/modifica pendente)
[ ] Il file .md contiene avvertenza finale
[ ] exportMarkdown(true) → output identico al precedente
[ ] exportMarkdown(false, "Tecnologia") → export confronto (non definitivo)
[ ] Nessuna modifica a exportWord(), exportPDF(), copyForWord()
[ ] Nessuna modifica a sw.js, _headers, manifest
[ ] App funzionante su localhost, tutti i tab accessibili
[ ] 14 discipline nel sidebar, dati invariati
[ ] Approve/reject/edit funzionanti come prima
```

### Verifica produzione (solo dopo merge)

```
[ ] Produzione caricata
[ ] exportMarkdown(true, "Tecnologia") funzionante
[ ] Nessuna regressione nei tab/funzioni esistenti
```
