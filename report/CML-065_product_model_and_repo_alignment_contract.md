# CML-065 — Product Model and Repository Alignment Contract

## Sintesi decisionale

Contratto di prodotto che distingue **Curriculum** (istituzionale) da **Didattica** (operativa). Tecnologia normalizzata collocata come pacchetto dentro Curriculum > Consultazione. Home target con 2 card principali. CML-063A (runtime Home) sospeso in attesa del modello. Docs-only.

## Matrice Curriculum / Didattica

| Aspetto      | Curriculum                 | Didattica                |
| ------------ | -------------------------- | ------------------------ |
| Natura       | Istituzionale, documentale | Operativa, flessibile    |
| Destinatari  | Scuola, dipartimento, DS   | Docente, CdC             |
| Output       | Curricolo, esiti, report   | UDA, attività, materiali |
| Validazione  | Dipartimento, collegio     | Docente, autovalutazione |
| Rigidità     | Alta (normativa)           | Bassa (adattabile)       |
| Stato in app | **Attivo**                 | **Futuro (vuoto)**       |

## Tabella "dove va cosa"

| Funzione                           | Area       | Sottoarea                |
| ---------------------------------- | ---------- | ------------------------ |
| Viewer curricolo IN 2012 / IN 2025 | Curriculum | Consultazione            |
| Sezioni generali                   | Curriculum | Consultazione            |
| Riferimenti normativi              | Curriculum | Consultazione            |
| Tecnologia normalizzata            | Curriculum | Consultazione            |
| Revisione per disciplina           | Curriculum | Revisione                |
| Confronto 2012/2025                | Curriculum | Revisione                |
| Proposta docente `.cml`            | Curriculum | Revisione (input)        |
| Validazione dipartimentale (esito) | Curriculum | Revisione                |
| Export esito dipartimentale `.cml` | Curriculum | Esportazione / Report    |
| Import esiti dipartimentali        | Curriculum | Revisione / Esportazione |
| Report gruppo curricolo            | Curriculum | Esportazione / Report    |
| UDA (futuro)                       | Didattica  | Progettazione            |
| Attività (futuro)                  | Didattica  | Attività                 |
| Valutazione (futuro)               | Didattica  | Valutazione              |
| Archivio didattico (futuro)        | Didattica  | Archivio                 |

## Tabella "cosa non deve stare in Home"

| Elemento                    | Perché                   | Dove va                           |
| --------------------------- | ------------------------ | --------------------------------- |
| Tecnologia normalizzata     | Non è area               | Curriculum > Consultazione        |
| Export esito `.cml`         | Azione secondaria        | Curriculum > Revisione (pulsante) |
| Report gruppo curricolo     | Azione secondaria        | Curriculum > Esportazione         |
| Validazione referente       | Passaggio, non area      | Curriculum > Revisione            |
| Codice operativo            | Blocco leggero, non area | Curriculum > Revisione (gating)   |
| "Strumenti" senza specifica | Etichetta generica       | Evitare                           |

## Rischi evitati

| Rischio                          | Senza contratto                    | Con contratto                      |
| -------------------------------- | ---------------------------------- | ---------------------------------- |
| Tecnologia come quarta area      | Servono 4 tab, utente confuso      | 2 aree, pacchetto dentro           |
| Ogni nuova funzione = nuova card | Home si riempie di pulsanti        | Home fissa 2 card, funzioni dentro |
| Didattica in Curriculum          | UDA/attività mescolate a revisione | Didattica ha area propria          |
| Export come azione primaria      | 25 pulsanti visibili               | Raggruppati in Esportazione        |
| Modello instabile                | Ogni slice ridefinisce le aree     | Modello fisso, slice eseguono      |

## Roadmap consigliata

| Slice        | Tipo    | Descrizione                                                                |
| ------------ | ------- | -------------------------------------------------------------------------- |
| **CML-065A** | Runtime | HOME_DASHBOARD_TWO_AREAS — Home con 2 card (Curriculum, Didattica)         |
| **CML-065B** | Smoke   | HOME_DASHBOARD_LIVE_DEPLOY_SMOKE — smoke su GitHub Pages                   |
| **CML-066**  | Runtime | CURRICULUM_ACTION_DENSITY_REDUCTION — ridurre pulsanti in revisione/export |
| **CML-067**  | Audit   | DIDATTICA_MODULE_SELECTION_AUDIT — scegliere primo modulo Didattica        |
| **CML-068**  | Runtime | DIDATTICA_FIRST_READONLY_PROTOTYPE — primo prototipo didattico             |

## Dettaglio

| Campo                         | Valore                                                          |
| ----------------------------- | --------------------------------------------------------------- |
| HEAD partenza                 | `f9df7af`                                                       |
| Contratto                     | `docs/02_system/PRODUCT-MODEL-CURRICULUM-DIDATTICA-CONTRACT.md` |
| Sezioni contratto             | 16                                                              |
| Aree definite                 | Curriculum (attivo) + Didattica (futuro)                        |
| Tecnologia normalizzata       | Curriculum > Consultazione                                      |
| CML-063A sospeso              | ✅ — sostituito da CML-065A                                     |
| Runtime non modificato        | ✅                                                              |
| Nessun deploy                 | ✅                                                              |
| MEMORY.md / .kilo / CLAUDE.md | Assenti                                                         |
| Prossimo step                 | CML-065A — HOME_DASHBOARD_TWO_AREAS_RUNTIME_INCREMENT           |
