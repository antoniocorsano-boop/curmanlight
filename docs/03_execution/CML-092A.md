# CML-092A — MATEMATICA_NORMALIZED_CURRICULUM_DRAFT_QUALITY_AUDIT

## Contesto

- Progetto: CurManLight / CML
- Branch: `main`
- Ultimo step chiuso: CML-092 (`bfa1d2a`) — MATEMATICA_DISCIPLINE_NORMALIZED_CURRICULUM_DRAFT
- File sotto audit: `content/curriculum/matematica.normalized.json`
- Benchmark strutturale: `content/curriculum/italiano.normalized.json` (14 unità)
- Benchmark tecnico: `content/curriculum/tecnologia.normalized.json` (12 unità)
- Riferimenti: CML-086 (selection audit), CML-092 (draft)

## Obiettivo

Verificare la qualità tecnica, didattica e progettuale della bozza normalizzata di Matematica prima di renderla visibile nel runtime come "bozza completa disponibile" (già aggiornata in CML-092).

## Criteri di audit

1. Validità tecnica (JSON, struttura, ID, campi obbligatori)
2. Copertura verticale (Infanzia, Primaria, Secondaria)
3. Copertura nuclei (5 nuclei: Numeri, Spazio e figure, Relazioni e funzioni, Dati e previsioni, Informatica)
4. Qualità contenutistica (obiettivi, conoscenze, abilità, evidenze, criteri)
5. Coerenza con modello Italiano/Tecnologia
6. Headroom progettuale
7. Coerenza con approval readiness
8. Rischi e criticità

## Esito tecnico

| Controllo | Esito |
|---|---|
| JSON valido | ✅ |
| Struttura coerente con Italiano | ✅ (18/18 campi allineati, incl. `nucleo`) |
| ID univoci | ✅ (13/13) |
| `validazioneUmana: true` su tutte le unità | ✅ |
| Nessuna formula di approvazione | ✅ (stato: "nuovo" su tutte) |
| `classe`/`fascia` null conforme a pattern | ✅ |
| `stato: bozza_generabile` root | ✅ |
| `readiness: in_revisione` root | ✅ |

## Esito didattico

| Controllo | Esito |
|---|---|
| Traguardi coerenti con DATA + Word doc | ✅ |
| Obiettivi osservabili | ✅ (3-6 per unità) |
| Conoscenze distinte dalle abilità | ✅ |
| Abilità formulate come azioni osservabili | ✅ |
| Evidenze osservabili per valutazione | ✅ |
| Criteri descrittivi non numerici | ✅ |
| Linguaggio scolastico chiaro, non enciclopedico | ✅ |
| Nessun pattern di contenuto generico | ✅ |
| Contenuto curricolare (non programmazione annuale) | ✅ |

## Matrice nuclei/ordini

| Nucleo | Infanzia | Primaria | Secondaria | Totale |
|---|---|---|---|---|
| Numeri | 1 (fascia 5) | 2 (cl. 1, cl. 5) | 2 (cl. 1, cl. 3) | 5 |
| Spazio e figure | — | 1 (cl. 1) | 2 (cl. 1, cl. 2) | 3 |
| Relazioni e funzioni | — | 1 (cl. 1) | 1 (cl. 1) | 2 |
| Dati e previsioni | — | — | 1 (cl. 1) | 1 |
| Informatica | — | 1 (cl. 1) | 1 (cl. 1) | 2 |

## Gap riscontrati

1. **Infanzia**: 1 unità copre solo Numeri (fascia 5). Nessuna unità per fascia 3-4. Mancano Spazio e figure, Relazioni, Dati, Informatica per l'Infanzia — parzialmente giustificato dal Campo di Esperienza "La conoscenza del mondo" che integra matematica e scienze.

2. **Dati e previsioni**: 1 sola unità (Secondaria 1). Nessuna unità Primaria dedicata — la classe 1 ha un'unità "Relazioni, dati e previsioni" ma mappata come "Relazioni e funzioni". Il nucleo Dati e previsioni è sottorappresentato.

3. **Classe 2-3-4 Primaria**: Nessuna unità dedicata. Solo classe 1 (4 unità) e classe 5 (1 unità). Le classi 2, 3, 4 sono scoperte — gap dovuto a Word doc con solo contenuti per classe 1.

4. **Secondaria classi 2-3**: Solo 1 unità ciascuna (cl. 2 geometria/algoritmi, cl. 3 educazione finanziaria). Le classi 2-3 hanno copertura ridotta rispetto alla classe 1 (5 unità).

5. **Densità**: ~2.114 chars/unità, superiore a Italiano (1.588). Monitorare per discipline lessicalmente ricche.

## Valutazione headroom

### Dati misurati

| Parametro | Tecnologia | Italiano | Matematica |
|---|---|---|---|
| Unità | 12 | 14 | 13 |
| Chars totali JSON | 21.908 | 26.884 | 27.485 |
| Chars medi per unità | 1.826 | 1.920 | 2.114 |
| Campi per unità | 17 | 18 | 18 |
| Stati in uso | 1 ("nuovo") | 1 ("nuovo") | 1 |

### Proiezioni

| Scenario | Unità stimate | Dimensione JSON stimata |
|---|---|---|
| 10 discipline normalizzate | ~130 | ~325 KB |
| 15 discipline normalizzate | ~195 | ~488 KB |

### Sostenibilità UI

- Contatori aggiornati da CML-091: 3/12/0 — leggibili senza scroll
- 13-14 unità per disciplina sono gestibili in UI a lista/espansione
- ~27 KB per disciplina di dati JSON sono irrilevanti per sito statico (15 discipline = ~488 KB, ancora accettabile)
- Etichette UI sufficienti: "Bozza completa disponibile / In revisione / Solo consultazione"
- 1 solo stato per unità — nessuna frammentazione

## Punti forti

- Struttura completamente allineata con Italiano (18 campi, incluso `nucleo`)
- 12 ambiti distinti — buona diversificazione tematica
- Progressione verticale su Numeri (3 ordini) e Spazio e figure (2 ordini)
- Criteri di valutazione tutti descrittivi, nessun valore numerico
- Contenuto curricolare istituzionale, non enciclopedico
- Copertura di educazione finanziaria come da D.M. 221/2025 (cl. 5, cl. 3)
- Copertura Informatica/pensiero computazionale come da D.M. 221/2025 (Pri 1, Sec 1, Sec 2)
- Headroom positivo: sistema scalabile fino a 15 discipline

## Criticità

1. **Media**: Solo 1 unità Infanzia (fascia 5, Numeri). La matematica nell'Infanzia è integrata in "La conoscenza del mondo", ma mancano unità per fascia 3-4 e altri nuclei.
2. **Media**: Dati e previsioni ha 1 sola unità (Secondaria 1). Nessuna unità Primaria dedicata.
3. **Media**: Classi Primaria 2-3-4 scoperte. Solo classe 1 (4 unità) e classe 5 (1 unità) hanno copertura.
4. **Minore**: Secondaria classi 2-3 hanno copertura ridotta (1 unità ciascuna).
5. **Minore**: unità mat_pri_1_003 ha `ambito: "Relazioni, dati e previsioni"` ma `nucleo: "Relazioni e funzioni"` — lieve disallineamento tra ambito e nucleo.
6. **Headroom**: Matematica è più densa di Italiano (+194 chars/unità). Monitorare.

**Nessuna criticità bloccante.**

## Decisione readiness

**Esito A — Matematica è pronto come `bozza_generabile / in_revisione`.**

Nessun fix dati richiesto prima del runtime. I gap di copertura (Infanzia limitata, classi Primaria 2-3-4 scoperte, Dati e previsioni sottorappresentato) sono documentati e gestibili.

## Raccomandazioni

- In fase di revisione futura (validazione umana dipartimentale), valutare:
  - Aggiunta di unità Infanzia per fascia 3-4 e altri nuclei
  - Ampliamento copertura Primaria classi 2-3-4
  - Unità Dati e previsioni aggiuntiva per Primaria
  - Allineamento ambito/nucleo in mat_pri_1_003
- Per le prossime normalizzazioni, mantenere densità ≤ 2.500 chars/unità
- Prima di dichiarare una disciplina `pronto_approvazione`, saranno necessari:
  1. Validazione umana dipartimentale
  2. Allineamento con D.M. 221/2025 per ogni unità
  3. Verifica incrociata con Educazione Civica per overlap (educazione finanziaria)

## Prossimo step

`CML-093 — DISCIPLINARY_COMPLETENESS_STATUS_UPDATE_FOR_MATEMATICA_LIVE_SMOKE`

Verifica live di GitHub Pages: contatori 3/12/0 e pannello readiness con Matematica.

## Verdetto

`CML_092A_MATEMATICA_NORMALIZED_CURRICULUM_QUALITY_AUDIT_READY`

Esito: **A** — Matematica pronto come `bozza_generabile / in_revisione`
