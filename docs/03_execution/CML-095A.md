# CML-095A — SCIENZE_NORMALIZED_CURRICULUM_DRAFT_QUALITY_AUDIT

## Contesto

- Progetto: CurManLight / CML
- Branch: `main`
- Ultimo step chiuso: CML-095 (`31e4fdf`) — SCIENZE_DISCIPLINE_NORMALIZED_CURRICULUM_DRAFT
- File sotto audit: `content/curriculum/scienze.normalized.json`
- Benchmark strutturale: `content/curriculum/italiano.normalized.json` (14 unità), `content/curriculum/tecnologia.normalized.json` (12 unità), `content/curriculum/matematica.normalized.json` (13 unità)
- Riferimenti: CML-094 (selection audit), CML-095 (draft)
- UI contatori invariati: 3/12/0 (Scienze non rende visibile in runtime fino a completamento audit)

## Obiettivo

Verificare la qualità tecnica, didattica e progettuale della bozza normalizzata di Scienze prima di renderla visibile nel runtime.

## Criteri di audit

1. Validità tecnica (JSON, struttura, ID, campi obbligatori)
2. Copertura verticale (Infanzia, Primaria, Secondaria)
3. Copertura nuclei (5 nuclei scientifici)
4. Qualità contenutistica (obiettivi, conoscenze, abilità, evidenze, criteri)
5. Coerenza con modello Italiano/Tecnologia/Matematica
6. Gestione overlap Energia con Tecnologia
7. Headroom progettuale
8. Coerenza con approval readiness
9. Rischi e criticità

## Esito tecnico

| Controllo                                                                                                                                   | Esito                        |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| JSON valido                                                                                                                                 | ✅                           |
| Struttura coerente con Italiano (18 campi, incl. `nucleo`)                                                                                  | ✅                           |
| ID univoci                                                                                                                                  | ✅ (15/15)                   |
| `validazioneUmana: true` su tutte le unità                                                                                                  | ✅                           |
| Nessuna formula di approvazione                                                                                                             | ✅ (stato: "nuovo" su tutte) |
| `classe`/`fascia` null conforme a pattern (Infanzia: classe null, fascia valorizzata; Primaria/Secondaria: fascia null, classe valorizzata) | ✅                           |
| `stato: bozza_generabile` root                                                                                                              | ✅                           |
| `readiness: in_revisione` root                                                                                                              | ✅                           |

## Esito didattico

| Controllo                                                                                                   | Esito |
| ----------------------------------------------------------------------------------------------------------- | ----- |
| Traguardi coerenti con DATA HTML (6 traguardi: sc_inf1, sc_pri1, sc_pri2, sc_sec1, sc_sec2, sc_sec3)        | ✅    |
| Traguardi con stato "modifica" (sc_pri2, sc_sec2) riflessi in unità dedicate (sci_pri_5_001, sci_sec_3_001) | ✅    |
| Traguardo "nuovo" (sc_sec3) implementato come unità dedicata (sci_sec_3_002)                                | ✅    |
| Obiettivi osservabili (3-5 per unità)                                                                       | ✅    |
| Conoscenze distinte dalle abilità                                                                           | ✅    |
| Abilità formulate come azioni osservabili                                                                   | ✅    |
| Evidenze osservabili per valutazione                                                                        | ✅    |
| Criteri descrittivi non numerici                                                                            | ✅    |
| Linguaggio scolastico chiaro, non enciclopedico                                                             | ✅    |
| Nessun pattern di contenuto generico                                                                        | ✅    |
| Contenuto curricolare (non programmazione annuale)                                                          | ✅    |
| Progressione verticale su Osservazione (3 ordini) e Viventi (3 ordini)                                      | ✅    |

## Matrice nuclei/ordini

| Nucleo                            | Infanzia     | Primaria  | Secondaria       | Totale |
| --------------------------------- | ------------ | --------- | ---------------- | ------ |
| Osservazione e metodo scientifico | 1 (fascia 5) | 1 (cl. 1) | 2 (cl. 1, cl. 3) | 4      |
| Viventi e ambiente                | 1 (fascia 5) | 1 (cl. 2) | 2 (cl. 1, cl. 2) | 4      |
| Materia e trasformazioni          | —            | 1 (cl. 3) | 1 (cl. 1)        | 2      |
| Terra, ambiente e sostenibilità   | —            | 1 (cl. 4) | 2 (cl. 2, cl. 3) | 3      |
| Energia e fenomeni                | —            | 1 (cl. 5) | 1 (cl. 3)        | 2      |

## Allineamento traguardi DATA ↔ unità

| Traguardo DATA | Stato DATA | Unità riferimento | Copertura                                      |
| -------------- | ---------- | ----------------- | ---------------------------------------------- |
| sc_inf1        | ok         | sci_inf_5_001     | ✅ Osservazione, domande, ipotesi              |
| sc_pri1        | ok         | sci_pri_1_001     | ✅ Curiosità, spiegazioni                      |
| sc_pri2        | modifica   | sci_pri_5_001     | ✅ Cura ambiente, fonti energia, sostenibilità |
| sc_sec1        | ok         | sci_sec_1_001     | ✅ Esplorazione, sperimentazione               |
| sc_sec2        | modifica   | sci_sec_3_001     | ✅ Fonti energia, storia, figure femminili     |
| sc_sec3        | nuovo      | sci_sec_3_002     | ✅ Errore, decisioni informate                 |

## Gestione overlap Energia con Tecnologia

| Aspetto           | Scienze (adottato)                              | Tecnologia (separato)                     | Verifica |
| ----------------- | ----------------------------------------------- | ----------------------------------------- | -------- |
| Focus             | Fenomeno naturale, trasformazione, osservazione | Ciclo produttivo, impianti, progettazione | ✅       |
| Rinnovabili       | Come fonte naturale                             | Come tecnologia di produzione             | ✅       |
| Sostenibilità     | Impatto ambientale, comportamenti individuali   | Efficienza, progettazione sostenibile     | ✅       |
| Storicità         | Scoperte scientifiche, figure femminili         | Evoluzione tecnologica                    | ✅       |
| Note dipartimento | "taglio scientifico, non tecnologico"           | N/A                                       | ✅       |

## Gap riscontrati

1. **Infanzia — copertura limitata**: 2 unità, entrambe su fascia 5, solo 2 nuclei (Osservazione, Viventi). Nessuna unità per fascia 3-4. Mancano Materia, Terra, Energia per l'Infanzia — parzialmente giustificato dal Campo di Esperienza "La conoscenza del mondo" che integra scienze in modo trasversale.

2. **Materia e trasformazioni**: 2 unità (Pri 3, Sec 1). Copertura minima. Nessuna unità Secondaria 2 o 3 dedicata a chimica avanzata o fisica (onde, luce, suono).

3. **Energia e fenomeni**: 2 unità (Pri 5, Sec 3). Nucleo nuovo da D.M. 221/2025. Copertura minima giustificata dalla novità del nucleo.

4. **Primaria — 1 unità per classe**: Ogni classe ha 1 unità. Scienze in Primaria ha 1 ora settimanale tipica — 1 unità per classe è coerente.

5. **Densità**: ~2.184 chars/unità, superiore a Matematica (2.114) e Italiano (1.920). Contenuto scientifico richiede più dettaglio tecnico.

## Valutazione headroom

### Dati misurati

| Parametro            | Tecnologia  | Italiano    | Matematica  | Scienze     |
| -------------------- | ----------- | ----------- | ----------- | ----------- |
| Unità                | 12          | 14          | 13          | 15          |
| Chars totali JSON    | 21.908      | 26.884      | 27.485      | 32.762      |
| Chars medi per unità | 1.826       | 1.920       | 2.114       | 2.184       |
| Campi per unità      | 17          | 18          | 18          | 18          |
| Stati in uso         | 1 ("nuovo") | 1 ("nuovo") | 1 ("nuovo") | 1 ("nuovo") |

### Proiezioni

| Scenario                   | Unità stimate | Dimensione JSON stimata |
| -------------------------- | ------------- | ----------------------- |
| 10 discipline normalizzate | ~140          | ~350 KB                 |
| 15 discipline normalizzate | ~210          | ~525 KB                 |

### Sostenibilità UI

- Contatori invariati a 3/12/0 — Scienze non ancora visibile in runtime
- 15 unità per Scienze sono gestibili in UI a lista/espansione
- ~33 KB per disciplina — irrilevante per sito statico
- 1 solo stato per unità — nessuna frammentazione

## Punti forti

- Struttura completamente allineata con Italiano (18 campi, incluso `nucleo`)
- 15 ambiti distinti — buona diversificazione tematica
- Progressione verticale su Osservazione (3 ordini) e Viventi (3 ordini)
- Criteri di valutazione tutti descrittivi, nessun valore numerico
- Contenuto curricolare istituzionale, non enciclopedico
- Allineamento completo con D.M. 221/2025: fonti di energia (sci_pri_5_001, sci_sec_3_001), errore scientifico (sci_sec_3_002), storia della scienza e prospettiva di genere (sci_sec_3_001)
- Gestione esplicita dell'overlap Energia con Tecnologia
- Traguardi con stato "modifica" e "nuovo" implementati in unità dedicate
- Headroom positivo: sistema scalabile fino a 15 discipline

## Criticità

1. **Media**: Solo 2 unità Infanzia (fascia 5, 2 nuclei). Mancano unità per fascia 3-4 e per i nuclei Materia, Terra, Energia. Parzialmente giustificato dall'integrazione nel Campo di Esperienza.
2. **Minore**: Materia e trasformazioni ha 2 unità — copertura minima. Chimica/fisica avanzata per Secondaria 2-3 mancante.
3. **Minore**: Densità 2.184 chars/unità — monitorare per discipline scientifiche future.
4. **Minore**: sci_pri_5_001 competenza ("Conosce le diverse forme e fonti di energia") è simile per forma a sci_sec_3_001 — differenziare meglio in revisione.

**Nessuna criticità bloccante.**

## Decisione readiness

**Esito A — Scienze è pronto come `bozza_generabile / in_revisione`.**

Nessun fix dati richiesto prima del runtime. I gap di copertura (Infanzia limitata, Materia copertura minima, Energia copertura minima) sono documentati e gestibili.

## Raccomandazioni

- In fase di revisione futura (validazione umana dipartimentale), valutare:
  - Aggiunta di unità Infanzia per fascia 3-4 (esplorazione tattile, stagioni)
  - Ampliamento Materia e trasformazioni con unità Secondaria 2 (onde, luce, chimica)
  - Unità Energia aggiuntiva per Secondaria 2 (fenomeni termici, elettricità)
  - Differenziazione competenza tra sci_pri_5_001 e sci_sec_3_001
- Per le prossime normalizzazioni, mantenere densità ≤ 2.500 chars/unità
- Prima di dichiarare una disciplina `pronto_approvazione`, saranno necessari:
  1. Validazione umana dipartimentale
  2. Allineamento con D.M. 221/2025 per ogni unità
  3. Verifica incrociata con Educazione Civica per overlap (sostenibilità, ambiente)

## Prossimo step

`CML-096 — SCIENZE_COMPLETENESS_STATUS_UPDATE_LIVE` (aggiornamento contatori UI e pannello readiness su GitHub Pages)

## Verdetto

`CML_095A_SCIENZE_NORMALIZED_CURRICULUM_QUALITY_AUDIT_READY`

Esito: **A** — Scienze pronto come `bozza_generabile / in_revisione`
