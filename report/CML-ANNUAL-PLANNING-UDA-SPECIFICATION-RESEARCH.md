# CML-ANNUAL-PLANNING-UDA-SPECIFICATION-RESEARCH

## Obiettivo
Specificare i requisiti per il passaggio da CurManLight a CurMan integrato, definendo:
- modello di maturità (5 livelli);
- schema programmazione annuale;
- schema UDA smart;
- workflow collaborazione asincrona;
- requisiti per fase sul campo e raccolta/analisi;
- roadmap di slice.

## Stato iniziale
- **Branch**: `main`
- **HEAD**: `e559625` — `runtime: generalize CML discipline-facing labels`
- **Working tree**: pulito (solo file non tracciati excluded)
- **Accessibilità**: 88/100 (audit-ready)
- **Curriculum**: 14/14 discipline normalizzate
- **Runtime mappa dati**: 14/14 PASS
- **Shape test**: 14/14 PASS

## Perimetro
- **Tipo slice**: docs-only / research-specification
- **Runtime**: non modificato
- **File autorizzati**: solo documenti (md)
- **Vincoli**: nessun deploy, nessun push, nessun dato curricolare, nessun runtime, nessun export/import

## Decisioni specifiche (confermate)

| Decisione | Valore | Note |
|-----------|--------|------|
| **Locus** | Estendi CML-214 | `docs/02_system/EVIDENZE-UDA-WORKFLOW-CONTRACT.md` |
| **Programmazione annuale** | View/aggregazione derivata | Metadati in `localStorage` (`cml_annual_planning`) |
| **UDA** | Editabili/salvabili | Workflow `bozza → validato → archiviato` |
| **`.cml`** | Invariato | Confine curricolo/didattica |
| **Collaborazione** | Asincrona | Docente modifica, dipartimento valida |
| **Privacy** | Solo descrittori operativi | Niente dati personali o sanitari |

## Schema programmazione annuale

```json
{
  "id": "pa_<slug>",
  "tipo": "programmazione_annuale",
  "disciplina": "string",
  "ordine": "Infanzia|Primaria|Secondaria",
  "classe": "string|null",
  "annoScolastico": "string",
  "unitaSelezionate": ["unit_id"],
  "periodi": [{ "periodo": "string", "unitaIds": ["unit_id"], "durataOre": n, "note": "string|null" }],
  "stato": "bozza|adottata|in_revisione|archiviato",
  "autore": "string|null",
  "timestampCreazione": "ISO8601",
  "timestampModifica": "ISO8601|null"
}
```

## Schema UDA generalizzata

```json
{
  "id": "uda_<slug>",
  "tipo": "uda_draft",
  "titolo": "string",
  "disciplina": "string",
  "ordine": "Infanzia|Primaria|Secondaria",
  "classe": "string|null",
  "nuclei": ["string"],
  "unitaCollegate": ["string"],
  "evidenzeSelezionate": ["ev_id"],
  "obiettivoApprendimento": "string",
  "attivitaSintesi": "string",
  "criteriValutazione": ["string"],
  "durataOre": "number|null",
  "stato": "bozza|in_uso|validato|archiviato",
  "autore": "string|null",
  "timestampCreazione": "ISO8601",
  "timestampModifica": "ISO8601|null",
  "fonteCurricolo": "string",
  "esportabile": true|false
}
```

## Livelli di maturità CurManLight → CurMan

| Livello | Descrizione |
|---------|-------------|
| **1** | Consultazione curricolo (già consolidato) |
| **2** | Revisione/transizione IN2012/IN2025 (già consolidato) |
| **3** | Progettazione annuale (obiettivo slice) |
| **4** | UDA smart/collaborative (futuro) |
| **5** | Fase sul campo, raccolta e analisi (futuro) |

## Roadmap proposta

| # | Slice | Tipo | Obiettivo |
|---|-------|------|-----------|
| 1 | CML-ANNUAL-PLANNING-UDA-SPECIFICATION-RESEARCH | docs-only | Specificare requisiti |
| 2 | CML-ANNUAL-PLANNING-VIEW-LEVELS-ORDS | runtime | Vista filtri ordine/classe |
| 3 | CML-ANNUAL-PLANNING-EDITABLE-PROGRAMMAZIONE | runtime | Editor programmazione |
| 4 | CML-UDA-SMART-LIBRARY-CONTRACT | docs-only | Banca UDA smart |
| 5 | CML-ANNUAL-PLANNING-UDA-GENERALIZATION | runtime | UDA generalizzate |
| 6 | CML-ANNUAL-PLANNING-INTERDISCIPLINARY | runtime | UDA interdisciplinari |

## Requisiti per area

### Programmazione annuale
- Selezione unità per disciplina/ordine/classe
- Assegnazione periodi e durata
- Note operative generiche
- Stato e workflow di validazione

### UDA smart
- Template preformulati
- Filtri per disciplina/ordine/classe
- Generazione da unità curricolari
- Collazione con analisi

### Fase sul campo
- Raccolta evidenze osservabili
- Note di adattamento generiche
- Rimodulazioni

### Raccolta/analisi
- Sintesi per docente/dipartimento
- Identificazione nodi critici
- Proposte per revisione curricolare

## Rischi e limiti
- **Rischio**: eccessiva flessibilità → mitigare con schema minimo
- **Privacy**: tutti i campi sono descrittori generici, mai dati personali
- **Conflitto con CML-214**: mantenere boundary esistente

## Verdetto
`CML_ANNUAL_PLANNING_UDA_SPECIFICATION_RESEARCH_READY`