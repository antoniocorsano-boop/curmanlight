# CML-102A — STORIA_NORMALIZED_CURRICULUM_DRAFT_QUALITY_AUDIT

- **Data:** 2026-06-24
- **Tipo slice:** docs-only quality audit
- **HEAD partenza:** `8b2b1aa` (CML-102)
- **File sotto audit:** `content/curriculum/storia.normalized.json`
- **Benchmark:** `tecnologia.normalized.json`, `italiano.normalized.json`, `matematica.normalized.json`, `scienze.normalized.json`, `inglese.normalized.json`

## Obiettivo

Verificare la qualità tecnica, didattica, storica, verticale e progettuale di Storia prima dell'aggiornamento runtime dei contatori UI.

## Criteri di audit

1. Validità tecnica (JSON, struttura, campi, ID)
2. Copertura ordini/classi
3. Copertura nuclei
4. Periodizzazione (DM 221/2025)
5. Qualità didattica
6. Completezza vs readiness
7. SMART verificabilità
8. Headroom
9. Rischi specifici Storia

## Esito tecnico

✅ PASS — JSON valido, struttura coerente (17 campi), ID univoci (15/15), `validazioneUmana: true` su tutte le unità, nessuna formula approvativa

## Esito didattico

✅ PASS — obiettivi osservabili (max 5 per unità), conoscenze distinte da abilità, evidenze concrete (≥30 chars), criteri descrittivi, progressione verticale leggibile, linguaggio scolastico chiaro

## Matrice nuclei/ordini

| Nucleo | Infanzia | Primaria | Secondaria |
|--------|----------|----------|------------|
| Strumenti concettuali e periodizzazione | 1 (fas.5) | 1 (cl.1) | 2 (cl.1, cl.2) |
| Uso delle fonti | — | 1 (cl.2) | 1 (cl.1) |
| Organizzazione delle informazioni | — | 2 (cl.3, cl.5) | 3 (cl.1, cl.2, cl.3) |
| Produzione scritta e orale | — | 1 (cl.4) | 2 (cl.1, cl.2) |
| Uso delle fonti e produzione (combinato) | — | — | 1 (cl.3) |

## Valutazione periodizzazione

- **Sec 1:** Longobardi → Guerra dei Trent'anni (coerente DM 221/2025)
- **Sec 2:** Assolutismo → Seconda Rivoluzione Industriale (coerente)
- **Sec 3:** I Guerra Mondiale → 1994 (coerente)
- **Primaria cl. 5:** estensione al VII sec. d.C. per raccordo con Secondaria
- **Nessun salto cronologico, nessuna ripetizione enciclopedica**

## Valutazione completezza/readiness

- **Completezza:** struttura normalizzata completa (15 unità, 5 nuclei, 3 ordini)
- **Readiness:** `bozza_generabile / in_revisione` — nessuna approvazione
- Tutte le unità in stato `nuovo`, `validazioneUmana: true`
- Nessuna unità classificata come pronta per approvazione

## Valutazione SMART

- **Specifici:** ✅ obiettivi mirati su eventi/periodi specifici (Longobardi, Riforma, Assolutismo, ecc.)
- **Misurabili/osservabili:** ✅ evidenze formulano azioni concrete descrivibili
- **Attuabili:** ✅ linguaggio scolastico, carichi adeguati per classe
- **Rilevanti:** ✅ centralità disciplinare, copertura nucleo, significato formativo
- **Temporalmente collocati:** ✅ periodizzazione esplicita DM 221/2025

## Valutazione headroom

| Metrica | Storia | Tecnologia | Italiano | Matematica | Scienze | Inglese |
|---------|--------|------------|----------|------------|---------|---------|
| Unità | 15 | 13 | 14 | 13 | 15 | 12 |
| Chars/unità | 1.738 | — | 1.588 | 2.114 | — | — |
| Totale chars | 26.072 | — | 22.233 | 27.483 | — | — |

Headroom: sostenibile. 15 unità, ~1.738 chars/unità, ben distribuite. Nessun rischio di densità eccessiva.

## Punti forti

- Progressione verticale chiara su tutti i nuclei
- Periodizzazione precisa conforme DM 221/2025
- Contributo femminile valorizzato in 4 unità (non tokenistico)
- Storia locale irpina integrata in unità finale
- Bilanciamento tra fonti, periodizzazione, organizzazione e produzione
- Evidenze osservabili e criteri descrittivi su tutte le unità
- Assenza di enciclopedismo (max 5 obiettivi/unità)

## Criticità

- **GAP-1 (minore):** Infanzia solo fascia 5, assente fascia 3-4. Motivazione: percezione del tempo a 3-4 anni è principalmente esplorazione sensoriale non strutturata — gap basso.
- **GAP-2 (minore):** nucleo Uso delle fonti solo 2 unità (Pri 2, Sec 1). La terza unità Sec 3 è nucleo combinato — copertura comunque adeguata.
- **GAP-3 (positivo):** 15 unità vs 14 pianificate. Deviazione migliorativa (nucleo combinato in cl. 3 per memoria/cittadinanza).

## Rischi specifici Storia (non bloccanti)

- **Rischio sovrapposizione Ed. Civica (MEDIO):** unità Sec 3 su memoria e cittadinanza potrebbe sovrapporsi. Mitigato: focus storico su fonti, interpretazione storiografica, storia locale — non educazione civica.
- **Rischio periodizzazione rigida (BASSO):** la scansione triennale è chiara ma non rigida — ogni unità lavora per competenze, non per elenco eventi.
- **Rischio enciclopedismo (BASSO):** obiettivi contenuti (max 5), nessuna unità è un elenco di eventi.

## Decisione readiness

**A — Storia pronta come `bozza_generabile / in_revisione`**

Nessun fix dati richiesto. GAP-1, GAP-2, GAP-3 non bloccanti. Rischi mitigati.

## Prossimo step

CML-103 — DISCIPLINARY_COMPLETENESS_STATUS_UPDATE_FOR_STORIA_RUNTIME_INCREMENT (contatori UI 6/9/0)

## Verdetto

`CML_102A_STORIA_NORMALIZED_CURRICULUM_QUALITY_AUDIT_READY`
