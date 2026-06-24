# CML-105A — GEOGRAFIA_NORMALIZED_CURRICULUM_DRAFT_QUALITY_AUDIT

- **Data:** 2026-06-24
- **Tipo slice:** docs-only quality audit
- **HEAD partenza:** `5c810d1` (CML-105)
- **File sotto audit:** `content/curriculum/geografia.normalized.json`
- **Benchmark:** `tecnologia.normalized.json`, `italiano.normalized.json`, `matematica.normalized.json`, `scienze.normalized.json`, `inglese.normalized.json`, `storia.normalized.json`

## Obiettivo

Verificare la qualità tecnica, didattica, geografica, verticale e progettuale di Geografia prima dell'aggiornamento runtime dei contatori UI.

## Criteri di audit

1. Validità tecnica (JSON, struttura, campi, ID)
2. Copertura ordini/classi
3. Copertura assi IN 2025
4. Qualità geografica (concetti spaziali, carte, paesaggio, scale, sostenibilità)
5. Rapporto con Storia e Ed. Civica
6. Completezza vs readiness
7. SMART verificabilità
8. Headroom
9. Rischi specifici Geografia

## Esito tecnico

✅ PASS — JSON valido, struttura coerente (17 campi), ID univoci (12/12), `validazioneUmana: true` su tutte le unità, nessuna formula approvativa

## Esito didattico

✅ PASS — obiettivi osservabili (max 5 per unità), conoscenze distinte da abilità, evidenze concrete (≥30 chars), criteri descrittivi, progressione verticale leggibile su tutti e 3 gli assi

## Matrice assi/ordini

| Asse | Infanzia | Primaria | Secondaria | Totale |
|------|----------|----------|------------|--------|
| **Paesaggio** | 1 (fas.5) | 2 (cl.1, cl.2) | 1 (cl.1) | 4 |
| **Transcalarità** | — | 2 (cl.3, cl.5) | 3 (cl.1, cl.2, cl.3) | 5 |
| **Territorializzazione** | — | 1 (cl.4) | 2 (cl.2, cl.3) | 3 |

## Valutazione identità geografica

- **Concetti spaziali**: presenti su tutte le unità (topologia, orientamento, scala, regione, paesaggio, territorio)
- **Orientamento e carte**: progressione chiara da spazio vissuto (Inf/Pri 1) a carte geografiche (Pri 3) a GIS digitale (Sec 2-3)
- **Paesaggio**: trattato come bene culturale (art. 9 Cost.) in Sec 1, non come semplice nomenclatura
- **Relazioni uomo-ambiente**: asse Territorializzazione (Sec 2: comunità e ambiente, Sec 3: territorio locale)
- **Scale spaziali**: Transcalarità come filo conduttore da Pri 3 a Sec 3
- **Sostenibilità**: integrata in Territorializzazione (SDGs, Agenda 2030)
- **Territorio locale irpino**: presente in 1 unità su 12 (geo_sec_3_002) — non provincializza il curricolo

## Valutazione rapporto con Storia e Ed. Civica

- **Geografia vs Storia**: nettamente distinta. Storia lavora su tempo e fonti, Geografia su spazio e relazioni territoriali. Nessuna sovrapposizione testuale.
- **Geografia vs Ed. Civica**: Geografia tratta sostenibilità e art. 9 Cost. da prospettiva territoriale (trasformazioni, paesaggio), non normativa (diritti, doveri, istituzioni). Confine chiaro.
- **Connections**: presenti ma non sostituiscono l'identità disciplinare. Cittadinanza planetaria in Sec 3 è geografica (geopolitica, globalizzazione), non civica.

## Valutazione completezza/readiness

- **Completezza:** struttura normalizzata completa (12 unità, 3 assi, 3 ordini)
- **Readiness:** `bozza_generabile / in_revisione` — nessuna approvazione
- Tutte le unità in stato `nuovo`, `validazioneUmana: true`
- Nessuna unità classificata come pronta per approvazione

## Valutazione SMART

- **Specifici:** ✅ obiettivi mirati su concetti geografici specifici (orientamento, carte, paesaggio, transcalarità, sostenibilità)
- **Misurabili/osservabili:** ✅ evidenze formulano azioni concrete (localizzare, confrontare, descrivere, creare mappe)
- **Attuabili:** ✅ linguaggio scolastico, carichi adeguati per classe
- **Rilevanti:** ✅ centralità nell'asse storico-sociale, copertura IN 2025
- **Temporalmente collocati:** ✅ progressione per classe/ordine chiara su ogni asse

## Valutazione headroom

| Metrica | Geografia | Storia | Tecnologia | Italiano | Matematica | Scienze | Inglese |
|---------|-----------|--------|------------|----------|------------|---------|---------|
| Unità | 12 | 15 | 13 | 14 | 13 | 15 | 12 |
| Chars/unità | 1.559 | 1.738 | — | 1.588 | 2.114 | — | — |
| Totale chars | 18.710 | 26.072 | — | 22.233 | 27.483 | — | — |

Headroom: sostenibile. 12 unità, 1.559 chars/unità — ben al di sotto della media complessiva. Ottima compatibilità con futuro contatore 7/8/0.

## Punti forti

- Tre assi IN 2025 formalizzati come nuclei curricolari — prima normalizzazione ad applicarli esplicitamente
- Progressione verticale chiara su ogni asse (Paesaggio: locale → culturale; Transcalarità: mappe → geopolitica; Territorializzazione: Italia → sostenibilità → territorio locale)
- Equilibrio tra geografia fisica e antropica
- Geovisualizzazione digitale integrata (non accessoria)
- Territorio locale irpino presente ma non preponderante (1/12 unità)
- Evidenze osservabili e criteri descrittivi su tutte le unità
- Totale chars contenuto (18.710) — disciplina più snella tra le normalizzate

## Criticità

- **GAP-1 (minore):** Infanzia solo fascia 5, assente fascia 3-4. Motivazione: orientamento spaziale a 3-4 anni è prevalentemente esplorazione motoria non strutturata — gap basso, identico a Storia.
- **GAP-2 (minore):** Territorializzazione solo 3 unità — copertura sufficiente ma concentrata in Pri 4, Sec 2, Sec 3.
- **GAP-3 (neutro):** Assenza di educazione finanziaria e cambiamenti climatici in chiave civica (non pertinenti — gestiti in Ed. Civica/Matematica).

## Rischi specifici Geografia (non bloccanti)

- **Rischio nomenclatura (BASSO):** obiettivi focalizzati su competenze, non su elenchi di nomi geografici
- **Rischio sovrapposizione Ed. Civica (BASSO):** sostenibilità trattata da prospettiva geografica (territorio, non norme)
- **Rischio sovrapposizione Storia (BASSO):** focus spaziale vs temporale — complementari, non sovrapposti
- **Rischio provincialismo (BASSO):** 1 unità su 12 dedicata a Irpinia — appropriato per curricolo locale
- **Rischio progressione debole (BASSO):** tutti e 3 gli assi hanno progressione verticale leggibile

## Decisione readiness

**A — Geografia pronta come `bozza_generabile / in_revisione`**

Nessun fix dati richiesto. GAP-1, GAP-2, GAP-3 non bloccanti. Rischi mitigati.

## Prossimo step

CML-106 — DISCIPLINARY_COMPLETENESS_STATUS_UPDATE_FOR_GEOGRAFIA_RUNTIME_INCREMENT (contatori UI 7/8/0)

## Verdetto

`CML_105A_GEOGRAFIA_NORMALIZED_CURRICULUM_QUALITY_AUDIT_READY`
