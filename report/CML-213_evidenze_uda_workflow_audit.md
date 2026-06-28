# CML-213 — EVIDENZE_UDA_WORKFLOW_AUDIT

Data: 2026-06-28

## 1. Scopo

Audit dello stato attuale del progetto per definire il punto di partenza più sicuro per un workflow Evidenze/UDA, dopo il completamento del curriculum 14/14, l'hardening del workflow `.cml` e la validazione di Educazione Fisica.

Slice docs-only. Non modifica runtime, curriculum JSON, UDA/evidenze data model, schema `.cml`, export/import, SchoolKB, validator, shape-test, service-worker, manifest, dipendenze, deploy o push.

## 2. File ispezionati

### 2.1 Curriculum JSON (rappresentativi)

- `content/curriculum/educazione-fisica.normalized.json`
- `content/curriculum/tecnologia.normalized.json`
- `content/curriculum/italiano.normalized.json`
- `content/curriculum/matematica.normalized.json`
- `content/curriculum/inglese.normalized.json`

### 2.2 Runtime

- `_published_snapshot/netlify-current/index.html` (sezioni didattica)

### 2.3 Documenti sistema

- `docs/02_system/PRODUCT-MODEL-CURRICULUM-DIDATTICA-CONTRACT.md`
- `docs/02_system/CML-SCHEMA-V1-CONTRACT.md`
- `tools/validate-cml-normalized-curriculum.mjs`

### 2.4 Report storici

- `report/CML-161_didattica_coverage_gap_audit.md`
- `report/CML-069_didattica_uda_module_selection_audit.md`
- `report/CML-070_uda_readonly_prototype.md`
- `report/CML-080_curriculum_and_didattica_completion_selection_audit.md`

## 3. Stato attuale dati curricolo

### 3.1 Campi esistenti in `unitaApprendimento`

Tutte le discipline condividono la stessa struttura:

| Campo | Tipo | Popolato | Note |
|---|---|---|---|
| `id` | string | Sì | Identificativo univoco |
| `disciplina` | string | Sì | Nome disciplina |
| `ordine` | string | Sì | Infanzia/Primaria/Secondaria |
| `classe` | number/null | Sì | Classe numerica o null |
| `fascia` | string/null | Sì | Fascia Infanzia o null |
| `ambito` | string | Sì | Ambito disciplinare |
| `competenza` | string | Sì | Competenza di riferimento |
| `traguardo` | string | Sì | Traguardo di competenza |
| `obiettivi` | string[] | Sì | Array di obiettivi |
| `conoscenze` | string[] | Sì | Array di conoscenze |
| `abilita` | string[] | Sì | Array di abilità |
| `evidenze` | string[] | Sì | Array di evidenze osservabili |
| `criteriValutazione` | string[] | Sì | Array di criteri di valutazione |
| `fonte` | string | Sì | Fonte/ riferimento |
| `stato` | string | Sì | Stato unità (es. `nuovo`) |
| `validazioneUmana` | boolean | Sì | Richiesta validazione umana |
| `noteDipartimento` | string | Sì | Note dipartimentali |

### 3.2 Copertura evidenze

| Disciplina | Unità totali | Unità con evidenze | % copertura |
|---|---|---|---|
| Arte e Immagine | 6 | 6 | 100% |
| Educazione Civica | 11 | 11 | 100% |
| Educazione Fisica | 7 | 7 | 100% |
| Geografia | 12 | 12 | 100% |
| Inglese | 12 | 12 | 100% |
| Italiano | 14 | 14 | 100% |
| Latino (LEL) | 4 | 4 | 100% |
| Matematica | 13 | 13 | 100% |
| Musica | 7 | 7 | 100% |
| Religione Cattolica | 7 | 7 | 100% |
| Scienze | 15 | 15 | 100% |
| Seconda Lingua Comunitaria | 6 | 6 | 100% |
| Storia | 15 | 15 | 100% |
| Tecnologia | 13 | 13 | 100% |
| **Totale** | **130** | **130** | **100%** |

### 3.3 Livello di dettaglio medio per disciplina

| Disciplina | Media `evidenze`/unità | Media `obiettivi`/unità | Media `criteri`/unità |
|---|---|---|---|
| Educazione Fisica | 4.1 | 4.0 | 4.0 |
| Tecnologia | 3.0 | 3.0 | 3.0 |
| Italiano | 3.0 | 3.0 | 3.0 |
| Matematica | 3.0 | 3.0 | 3.0 |
| Inglese | 4.0 | — | — |

## 4. Stato attuale runtime Didattica

### 4.1 Evidenze (pannello "Valutazione / Evidenze")

- **Tecnologia:** funzionante, read-only, filtri per ordine (Infanzia/Primaria/Secondaria)
- **Altre discipline:** non disponibili
- Dati sorgente: `TECNOLOGIA_NORM_DATA.unitaApprendimento` (dati inline statici nel runtime)
- Campi renderizzati: traguardo, obiettivi, conoscenze, abilità, evidenze osservabili, criteri di valutazione, fonte, nota adattamento

### 4.2 UDA Modello

- **Tecnologia:** 2 modelli statici (`UDA_MODELI` array inline)
- **Altre discipline:** non disponibili
- Campi renderizzati: titolo, disciplina, ordine, classe, durata, competenza, traguardo, obiettivi, conoscenze, abilità, attività, metodologia, materiali, evidenze, criteri, adattamenti, nota, fonte, validazione
- Nessun salvataggio, nessun export dedicato

### 4.3 Mapping ruoli workflow

| Ruolo | Azioni attuali supportate | Azioni future suggerite |
|---|---|---|
| Docente | Visualizza evidenze Tecnologia, visualizza UDA Tecnologia | Seleziona disciplina/nucleo/unità, marca evidenza come utilizzabile, bozza UDA |
| Dipartimento | Valida `.cml` (Curriculum > Revisione) | Valida evidenze/UDA come parte della validazione professionale |
| Referente | Importa/esporta `.cml` | Coordina pacchetti evidenze/UDA per dipartimento |

## 5. Gap e rischi

### 5.1 Gap identificati

| ID | Gap | Severità | Impatto |
|---|---|---|---|
| G1 | Pannello evidenze limitato a Tecnologia | Alta | 13/14 discipline non hanno accesso alle proprie evidenze nel runtime |
| G2 | UDA disponibili solo per Tecnologia | Alta | Nessuna disciplina oltre Tecnologia ha modelli UDA visualizzabili |
| G3 | Nessun meccanismo di linking evidenza→UDA | Alta | Il docente non può collegare un'evidenza specifica a un modulo UDA |
| G4 | Nessun modello dati persistente per UDA/evidenze | Alta | Non esiste contratto dati per salvataggio, stato o condivisione |
| G5 | Dati evidenze esistenti ma non esposti nel runtime | Media | 130/130 unità hanno evidenze, ma solo Tecnologia le renderizza |
| G6 | Nessuna distinzione tra "evidenza validata" e "evidenza proposta" | Media | Il docente non può marcare lo stato di utilizzo di un'evidenza |
| G7 | Nessuna integrazione con `.cml` workflow | Media | Evidenze/UDA sono separati dal flusso di validazione dipartimentale |

### 5.2 Rischi per categoria

| Categoria | Rischio | Severità | Mitigazione |
|---|---|---|---|
| **Curriculum vs Didattica** | Trasformare il curricolo in programmazione lezioni troppo presto | Alta | Mantenere confine netto: evidenze sono collegate a unità curricolo, non a lezioni singole |
| **Dati persistenti** | Aggiungere persistenza senza schema chiaro | Alta | Definire contratto dati prima di ogni salvataggio |
| **Duplicazione workflow** | Duplicare logica `.cml` in area didattica | Media | Riutilicare `validazioneUmana` e `stato` esistenti, non reinventare |
| **Mixing** | Mescolare validazione evidenze con design UDA | Media | Separare: evidenza = cosa osservare; UDA = come organizzare l'apprendimento |
| **Privacy/dati** | Salvataggio locale senza consenso informato | Bassa | Evitare persistenza server-side in prima fase; usare solo sessione/clipboard |
| **Complessità UX** | Aggiungere troppi campi editabili | Media | Start read-only, poi gradualmente abilitare marcatori semplici |

## 6. Confronto opzioni

| Codice | Opzione | Rischio | Complessità | Valore immediato | Impatto schema `.cml` | Impatto runtime futuro |
|---|---|---|---|---|---|---|
| A | Docs-only Evidenze/UDA contract | **Basso** | Bassa | Medio | Nessuno | Minimo |
| B | Minimal evidence-linking data model | Medio | Media | Alto | Medio | Medio |
| C | Runtime evidence panel only (tutte le discipline) | Medio | Media | Alto | Nessuno | Medio |
| D | UDA draft/export prototype | Alto | Alta | Alto | Nessuno | Alto |
| E | Defer UDA, strengthen evidence taxonomy | Basso | Bassa | Basso | Nessuno | Minimo |

### 6.1 Perché A e non B/C/D/E

**Perché A e non B:**
Il data model senza contratto documentale produce stash di codice non allineato. Il contratto deve precedere il modello.

**Perché A e non C:**
Espandere il pannello evidenze a tutte le discipline senza un modello di linking e di stato crea una falsa sensazione di completezza: l'utente vede 14 discipline ma non può fare nulla di operativo.

**Perché A e non D:**
Un prototipo UDA esportabile prima che le evidenze siano linkabili produce modelli scollegati dal curricolo. L'UDA deve derivare da evidenze esistenti.

**Perché A e non E:**
Rinviare l'UDA a tempo indeterminato mentre il curricolo è già solido spreca un'opportunità. La tassonomia è già sufficiente (100% copertura evidenze); il blocco non è la taxonomia ma il modello di linking.

## 7. Raccomandazione

**Selezionata: A — Docs-only Evidenze/UDA contract**

CML-214 deve definire:
1. Modello dati minimo per linking evidenza→UDA
2. Stati possibili per un'evidenza (proposta, adottata, adattata, non applicabile)
3. Stati possibili per un'UDA (bozza, in uso, validato, archiviato)
4. Ruoli e permessi minimi (docente: marca evidenza; dipartimento: valida UDA)
5. Confine netto con `.cml` workflow (nessuna sovrapposizione)
6. Formato export/condivisione UDA (markdown, copia clipboard, nessun .cml modification iniziale)
7. Criteri di successo per successiva implementazione runtime (CML-215+)

## 8. Sequenza raccomandata

| Slice | Tipo | Descrizione |
|---|---|---|
| **CML-214** | Contract/docs | Evidenze/UDA data model and workflow contract |
| **CML-215** | Runtime | Minimal evidence-linking runtime increment (marca evidenza, stato UDA) |
| **CML-216** | Runtime | UDA draft/export prototype |
| **CML-217** | Smoke | Workflow smoke and closure gate |

## 9. Invarianti rispettati

- docs-only;
- nessuna modifica runtime;
- nessuna modifica curriculum JSON;
- nessuna implementazione UDA/evidenze;
- nessuna modifica SchoolKB;
- nessuna modifica schema `.cml`;
- nessuna modifica export/import;
- nessuna modifica validator/shape-test;
- nessuna modifica service-worker/manifest;
- nessuna dipendenza;
- nessun deploy;
- nessun push;
- nessun secret.

## 10. Verdetto

`CML_213_EVIDENZE_UDA_WORKFLOW_AUDIT_READY`

Raccomandazione: **CML-214 — Evidenze/UDA workflow and data contract**
