# CML-087A — ITALIANO_NORMALIZED_CURRICULUM_DRAFT_QUALITY_AUDIT

## Contesto

- Progetto: CurManLight / CML
- Branch: `main`
- Ultimo step chiuso: CML-087 (`180a176`) — ITALIANO_DISCIPLINE_NORMALIZED_CURRICULUM_DRAFT
- File sotto audit: `content/curriculum/italiano.normalized.json`
- Benchmark strutturale: `content/curriculum/tecnologia.normalized.json`

## Obiettivo

Verificare la qualità strutturale e didattica della bozza normalizzata di Italiano prima di renderla visibile come "bozza completa disponibile" nel runtime.

## File analizzati

| File | Ruolo |
|---|---|
| `content/curriculum/italiano.normalized.json` | Sotto audit |
| `content/curriculum/tecnologia.normalized.json` | Benchmark strutturale |

## Criteri di audit

1. Validità tecnica (JSON, struttura, ID, campi obbligatori)
2. Copertura verticale (Infanzia, Primaria, Secondaria)
3. Copertura nuclei (6 nuclei)
4. Qualità contenutistica (obiettivi, conoscenze, abilità, evidenze, criteri)
5. Coerenza con approval readiness
6. Rischi e criticità

## Esito tecnico

| Controllo | Esito |
|---|---|
| JSON valido | ✅ |
| Struttura coerente con Tecnologia | ✅ (17/17 campi allineati) |
| Campo extra rispetto a Tecnologia | `nucleo` — miglioramento, non problema |
| ID univoci | ✅ (14/14) |
| `validazioneUmana: true` su tutte le unità | ✅ |
| Nessuna formula di approvazione | ✅ |
| `classe`/`fascia` null conforme a pattern Tecnologia | ✅ |

**Nota**: l'audit tool ha segnalato 14 "errori" per `classe=null` (Infanzia) e `fascia=null` (Pri/Sec). Si tratta di falsi positivi: i campi sono presenti e valorizzati a `null` esattamente come nel benchmark Tecnologia.

## Esito didattico

| Controllo | Esito |
|---|---|
| Traguardi coerenti con DATA + IN 2012 proposte | ✅ |
| Obiettivi osservabili | ✅ (3 per unità, azioni concrete) |
| Conoscenze distinte dalle abilità | ✅ |
| Abilità formulate come azioni osservabili | ✅ |
| Evidenze osservabili per valutazione | ✅ |
| Criteri descrittivi non numerici | ✅ |
| Linguaggio scolastico chiaro, non enciclopedico | ✅ |
| Nessun pattern di contenuto generico | ✅ |

## Matrice nuclei/ordini

| Nucleo | Infanzia | Primaria | Secondaria | Totale |
|---|---|---|---|---|
| Ascolto | 1 (fascia 3-4) | 1 (cl. 1) | 1 (cl. 1) | 3 |
| Parlato | 1 (fascia 5) | 1 (cl. 2) | — | 2 |
| Lettura | 1 (fascia 5) | 1 (cl. 3) | 1 (cl. 1) | 3 |
| Scrittura | — | 2 (cl. 4) | 1 (cl. 2) | 3 |
| Lessico | — | 1 (cl. 4) | 1 (cl. 2) | 2 |
| Riflessione sulla lingua | — | 1 (cl. 5) | 1 (cl. 3) | 2 |

## Punti forti

- Struttura completamente allineata con Tecnologia, con l'aggiunta del campo `nucleo` che migliora la tracciabilità
- 12 ambiti distinti — buona diversificazione dei contenuti
- Progressione verticale leggibile: ogni nucleo si sviluppa su almeno 2 ordini
- Criteri di valutazione tutti descrittivi, nessun valore numerico
- Contenuto scolastico istituzionale, non enciclopedico
- 14 unità ben bilanciate tra ordini (3/6/5) e nuclei (gap max 1)

## Criticità

1. **Minori**: Lessico e Riflessione sulla lingua non compaiono nell'Infanzia — coerente con le Indicazioni Nazionali (l'Infanzia lavora su ascolto, parlato e approccio alla scrittura, non su grammatica esplicita)
2. **Minori**: Scrittura assente in Infanzia — coerente (solo pregrafismo, inquadrato in Lettura)
3. **Formali**: campo `nucleo` assente in Tecnologia — non è una criticità, ma disallineamento minore dello schema

Nessuna criticità bloccante.

## Decisione readiness

**Italiano è pronto come `bozza_generabile / in_revisione`.**

Nessun fix dati richiesto prima del runtime.

## Raccomandazioni

- Nessuna raccomandazione urgente
- In fase di revisione futura (validazione umana), valutare:
  - ampliamento dell'Infanzia con unità aggiuntiva sul lessico (se ritenuto utile dal dipartimento)
  - eventuale aggiunta del campo `nucleo` anche a Tecnologia per uniformità

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
