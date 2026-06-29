# CML-087A — ITALIANO_NORMALIZED_CURRICULUM_DRAFT_QUALITY_AUDIT

## Contesto

- Progetto: CurManLight / CML
- Branch: `main`
- Ultimo step chiuso: CML-087 (`180a176`) — ITALIANO_DISCIPLINE_NORMALIZED_CURRICULUM_DRAFT
- File sotto audit: `content/curriculum/italiano.normalized.json`
- Benchmark strutturale: `content/curriculum/tecnologia.normalized.json`
- Riferimenti: CML-084 (completeness audit), CML-086 (selection), CML-087 (draft)

## Obiettivo

Verificare la qualità tecnica, didattica e progettuale della bozza normalizzata di Italiano prima di renderla visibile nel runtime come "bozza completa disponibile".

## File analizzati

| File                                            | Ruolo                 |
| ----------------------------------------------- | --------------------- |
| `content/curriculum/italiano.normalized.json`   | Sotto audit           |
| `content/curriculum/tecnologia.normalized.json` | Benchmark strutturale |

## Criteri di audit

1. Validità tecnica (JSON, struttura, ID, campi obbligatori)
2. Copertura verticale (Infanzia, Primaria, Secondaria)
3. Copertura nuclei (6 nuclei)
4. Qualità contenutistica (obiettivi, conoscenze, abilità, evidenze, criteri)
5. Coerenza con modello Tecnologia
6. Headroom progettuale (margine di crescita ordinata del sistema)
7. Coerenza con approval readiness
8. Rischi e criticità

## Definizione operativa di headroom

_headroom = margine di crescita ordinata dell'interfaccia e dei dati, senza perdita di leggibilità, chiarezza decisionale o sostenibilità manutentiva._

Parametri misurati:

- unità totali e media per disciplina
- densità contenutistica (chars/unità)
- proiezione a 10 e 15 discipline normalizzate
- sostenibilità delle etichette UI
- varietà degli stati

## Esito tecnico

| Controllo                                            | Esito                                  |
| ---------------------------------------------------- | -------------------------------------- |
| JSON valido                                          | ✅                                     |
| Struttura coerente con Tecnologia                    | ✅ (17/17 campi allineati)             |
| Campo extra rispetto a Tecnologia                    | `nucleo` — miglioramento, non problema |
| ID univoci                                           | ✅ (14/14)                             |
| `validazioneUmana: true` su tutte le unità           | ✅                                     |
| Nessuna formula di approvazione                      | ✅                                     |
| `classe`/`fascia` null conforme a pattern Tecnologia | ✅                                     |

**Nota**: l'audit tool ha segnalato 14 falsi positivi per `classe=null` (Infanzia) e `fascia=null` (Pri/Sec). I campi sono presenti e valorizzati a `null` esattamente come nel benchmark Tecnologia.

## Esito didattico

| Controllo                                          | Esito                             |
| -------------------------------------------------- | --------------------------------- |
| Traguardi coerenti con DATA + IN 2012 proposte     | ✅                                |
| Obiettivi osservabili                              | ✅ (3 per unità, azioni concrete) |
| Conoscenze distinte dalle abilità                  | ✅                                |
| Abilità formulate come azioni osservabili          | ✅                                |
| Evidenze osservabili per valutazione               | ✅                                |
| Criteri descrittivi non numerici                   | ✅                                |
| Linguaggio scolastico chiaro, non enciclopedico    | ✅                                |
| Nessun pattern di contenuto generico               | ✅                                |
| Contenuto curricolare (non programmazione annuale) | ✅                                |

## Matrice nuclei/ordini

| Nucleo                   | Infanzia       | Primaria  | Secondaria | Totale |
| ------------------------ | -------------- | --------- | ---------- | ------ |
| Ascolto                  | 1 (fascia 3-4) | 1 (cl. 1) | 1 (cl. 1)  | 3      |
| Parlato                  | 1 (fascia 5)   | 1 (cl. 2) | —          | 2      |
| Lettura                  | 1 (fascia 5)   | 1 (cl. 3) | 1 (cl. 1)  | 3      |
| Scrittura                | —              | 2 (cl. 4) | 1 (cl. 2)  | 3      |
| Lessico                  | —              | 1 (cl. 4) | 1 (cl. 2)  | 2      |
| Riflessione sulla lingua | —              | 1 (cl. 5) | 1 (cl. 3)  | 2      |

## Valutazione headroom

### Dati misurati

| Parametro            | Tecnologia  | Italiano    | Complessivo |
| -------------------- | ----------- | ----------- | ----------- |
| Unità                | 13          | 14          | 27          |
| Chars totali JSON    | 17.184      | 22.230      | 39.414      |
| Chars medi per unità | 1.322       | 1.588       | 1.459       |
| Campi per unità      | 17          | 18          | —           |
| Stati in uso         | 1 ("nuovo") | 1 ("nuovo") | 1           |

### Proiezioni

| Scenario                   | Unità stimate | Dimensione JSON stimata |
| -------------------------- | ------------- | ----------------------- |
| 10 discipline normalizzate | ~135          | ~53 KB                  |
| 15 discipline normalizzate | ~203          | ~79 KB                  |

### Sostenibilità UI

- 135-203 unità sono gestibili da una UI a lista/espansione (non a griglia)
- 53-79 KB di dati JSON sono irrilevanti per un sito statico
- 4 etichette UI (Bozza completa disponibile / In revisione / Solo consultazione / Non pronta per approvazione) sono sufficienti e non degradano con più discipline
- 1 solo stato ("nuovo") per unità — nessuna frammentazione

### Raccomandazione headroom

Il sistema ha headroom abbondante. Nessuna azione correttiva urgente. Raccomandazioni precauzionali:

- Mantenere unità sotto 2.000 chars ciascuna nelle prossime normalizzazioni
- Non superare 20 unità per disciplina (soglia di leggibilità UI)
- Evitare di introdurre più di 4-5 stati unità
- Preferire liste comprimibili/espandibili nella UI anziché grigie fitte

## Punti forti

- Struttura completamente allineata con Tecnologia, con l'aggiunta del campo `nucleo` che migliora la tracciabilità
- 12 ambiti distinti — buona diversificazione dei contenuti
- Progressione verticale leggibile: ogni nucleo si sviluppa su almeno 2 ordini
- Criteri di valutazione tutti descrittivi, nessun valore numerico
- Contenuto scolastico istituzionale, non enciclopedico
- 14 unità ben bilanciate tra ordini (3/6/5) e nuclei (gap max 1)
- Headroom positivo: sistema scalabile fino a 15 discipline senza modifiche architetturali

## Criticità

1. **Minori**: Lessico e Riflessione sulla lingua non compaiono nell'Infanzia — coerente con le Indicazioni Nazionali (l'Infanzia lavora su ascolto, parlato e approccio alla scrittura, non su grammatica esplicita)
2. **Minori**: Scrittura assente in Infanzia — coerente (solo pregrafismo, inquadrato in Lettura)
3. **Formali**: campo `nucleo` assente in Tecnologia — non è una criticità, ma disallineamento minore dello schema
4. **Headroom**: Italiano è più denso di Tecnologia (+266 chars/unità in media) — monitorare per discipline lessicalmente ricche

Nessuna criticità bloccante.

## Decisione readiness

**Esito A — Italiano è pronto come `bozza_generabile / in_revisione`.**

Nessun fix dati richiesto prima del runtime.

## Raccomandazioni

- Nessuna raccomandazione urgente
- In fase di revisione futura (validazione umana), valutare:
  - ampliamento dell'Infanzia con unità aggiuntiva sul lessico (se ritenuto utile dal dipartimento)
  - eventuale aggiunta del campo `nucleo` anche a Tecnologia per uniformità
- Per le prossime normalizzazioni, mantenere densità ≤ 2.000 chars/unità
- Prima di dichiarare una disciplina `pronto_approvazione`, saranno necessari:
  1. Validazione umana dipartimentale
  2. Allineamento con D.M. 221/2025 per ogni unità
  3. Verifica incrociata con Educazione Civica per overlap

## Prossimo step

`CML-088 — DISCIPLINARY_COMPLETENESS_STATUS_UPDATE_FOR_ITALIANO_RUNTIME_INCREMENT`

Aggiornare la sezione Curriculum "Stato di completezza dei curricoli disciplinari":

- 2 discipline con bozza completa: Tecnologia e Italiano
- 13 discipline solo consultazione
- 0 pronte per approvazione
- Italiano visualizzato come "Bozza completa disponibile / In revisione"

## Verdetto

`CML_087A_ITALIANO_NORMALIZED_CURRICULUM_QUALITY_AUDIT_READY`

Esito: **A** — Italiano pronto come `bozza_generabile / in_revisione`
