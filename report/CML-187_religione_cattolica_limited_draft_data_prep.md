# CML-187 - Religione Cattolica Limited Draft Data Prep

Data: 2026-06-27

## 1. Scopo

Creare il file normalizzato di Religione Cattolica (IRC) come bozza limitata e istituzionalmente prudente, autorizzata dalla sequenza discipline residue CML-172 e dalla progressiva maturazione del rischio istituzionale.

## 2. Baseline tecnica

| Parametro | Valore |
|---|---|
| Root Git | `C:\Users\anton\CurManLight` |
| Branch | `main` |
| Commit iniziale | `22c48af` (HEAD locale, 1 ahead origin/main) |
| origin/main | `ba051ff` (CML-185-SYNC) |
| Working tree iniziale | pulito |
| Dati normalizzati prima | 12/14 |
| Runtime mappa | 11/14 |
| Shape test | 11/11 PASS |
| Discipline completate | Tecnologia, Italiano, Matematica, Scienze, Storia, Geografia, Inglese, Educazione Civica, Arte e Immagine, Musica, Educazione Fisica, Seconda Lingua Comunitaria |
| Discipline residue dopo | Latino LEL (ultima) |
| Skill usate | `cml-readiness-audit` |

## 3. Collegamento con CML-172, CML-185

- CML-172: sequenza discipline residue — Religione Cattolica era quarta post SLC.
- CML-185: selection audit — posticipata per rischio istituzionale alto (IRC, normativa concordataria).
- CML-182B: `LIMITED_DRAFT_DATA_PREP_ALLOWED` — autorizzazione di principio.
- CML-186: precedente data-prep completata — policy validatore CML-186 applicata.

## 4. Fonti normative e curricolari

- **DPR 175/2012**: Indicazioni didattiche per l'insegnamento della Religione Cattolica — definizione dei 4 nuclei fondamentali (Dio e l'uomo, La Bibbia e le altre fonti, Il linguaggio religioso, I valori etici e religiosi).
- **D.M. 254/2012**: Indicazioni Nazionali per il curricolo della scuola dell'infanzia e del primo ciclo.
- **D.M. 221/2025**: Nuove Indicazioni — pluralismo culturale e religioso, cittadinanza globale.
- **Intesa CEI-MIUR**: accordo per l'insegnamento della Religione Cattolica nelle scuole pubbliche.

## 5. Vincoli specifici

- Copertura completa: Infanzia + Primaria + Secondaria (DPR 175/2012 prevede IRC in tutti gli ordini).
- Linguaggio istituzionale e scolastico: descrizione di cio che gli studenti imparano, non formulazione dottrinale.
- 4 nuclei DPR 175/2012: 3 utilizzati (Dio e l'uomo, La Bibbia e le altre fonti, I valori etici e religiosi); Il linguaggio religioso integrato trasversalmente.
- `humanValidationRequired: true` su ogni unita.
- Nessun riferimento a parrocchie, diocesi, figure ecclesiastiche locali o attivita pastorali specifiche.
- Nessuna invenzione di contenuti curricolari o evidenze non documentate.

## 6. Metodo di costruzione JSON

1. Lettura dei pattern esistenti (EF, Musica) per struttura e ordini di copertura.
2. 4 nuclei DPR 175/2012 come riferimento per organizzazione dei contenuti.
3. 7 unita: 1 Infanzia + 3 Primaria + 3 Secondaria (coerente con EF 7, Musica 7).
4. Contenuti basati su fonti ufficiali IRC.
5. Marcatori draft su ogni unita.
6. Lessico controllato: istituzionale, descrittivo, non apologetico.

## 7. Pattern schema

- `schemaVersion: "cml-normalized-curriculum-v1"`
- `disciplina: "Religione Cattolica"`
- `stato: "bozza_generabile"`, `readiness: "in_revisione"`, `humanValidationRequired: true`
- `metaDiscipline: "Religione"`
- ID pattern: `rc_inf_5_001`, `rc_pri_{classe}_001`, `rc_sec_{classe}_001`

## 8. File creato

`content/curriculum/religione-cattolica.normalized.json` — 7 unita, 4 nuclei, 3 ordini.

## 9. Sintesi contenuti

| ID | Ordine | Classe | Nucleo | Contenuto |
|---|---|---|---|---|
| rc_inf_5_001 | Infanzia | fascia 5 | Dio e l'uomo | Prime scoperte religiose, racconti biblici, festivita, simboli |
| rc_pri_1_001 | Primaria | 1 | Dio e l'uomo | Bibbia, creazione, mondo come dono |
| rc_pri_3_001 | Primaria | 3 | La Bibbia e le altre fonti | Vangeli, parabola, Pasqua, prime comunita cristiane |
| rc_pri_5_001 | Primaria | 5 | I valori etici e religiosi | Comandamenti, beatitudini, dialogo interreligioso |
| rc_sec_1_001 | Secondaria | 1 | Dio e l'uomo | Antico Testamento, patriarchi, esodo, alleanza, profeti |
| rc_sec_2_001 | Secondaria | 2 | La Bibbia e le altre fonti | Nuovo Testamento, Gesu storico, Vangeli, Paolo |
| rc_sec_3_001 | Secondaria | 3 | I valori etici e religiosi | Etica cristiana, dottrina sociale, religioni monoteiste, orientali, dialogo |

## 10. Marcatori limited draft

| Marcatore | Valore |
|---|---|
| `humanValidationRequired` | `true` |
| `validazioneUmana` | `true` (ogni unita) |
| `stato` livello file | `bozza_generabile` |
| `stato` unita | `nuovo` |
| note dipartimento | Rinviano a CML-187, specificano natura di draft |

## 11. Validazioni eseguite

- Validatore curriculum: 13/14 file, overallValid true, 0 errori
- Shape test: 11/11 PASS (runtime invariato — Religione Cattolica NON integrata)
- `git diff --check`: PASS
- Credential scan: nessuna credenziale trovata

## 12. Verifica invarianti e limiti

| Invariante | Risultato |
|---|---|
| Runtime invariato (11/14) | OK |
| Shape test invariato (11/11 PASS) | OK |
| `tools/` non modificati | OK |
| Root `index.html` non modificato | OK |
| `.claude/` non modificato | OK |
| SchoolKB non modificato | OK |
| No deploy | OK |
| No push | OK |
| `humanValidationRequired: true` | OK |
| Nessuna credenziale/secret/token | OK |
| Contenuti basati su fonti ufficiali | OK |
| Nessuna invenzione curricolare | OK |

## 13. Decisioni chiave

1. **Linguaggio istituzionale**: i contenuti IRC sono descritti in termini di conoscenze e abilita scolastiche, non come formulazioni dottrinali o catechetiche.
2. **4 nuclei DPR 175/2012**: 3 nuclei utilizzati come strutturanti; Il linguaggio religioso e integrato trasversalmente (simboli, arte, celebrazioni).
3. **Copertura completa**: Infanzia + Primaria + Secondaria, coerente con la presenza dell'IRC in tutti gli ordini.
4. **Dialogo interreligioso**: trattato in chiave culturale e di cittadinanza, senza gerarchie tra religioni.
5. **7 unita**: pattern 1+3+3, coerente con EF e Musica.

## 14. Stato consolidato dopo CML-187

- Dati normalizzati: **13/14**
- Runtime mappa: **11/14** (invariato)
- Shape test: **11/11 PASS** (invariato)
- Discipline completate: 13
- Disciplina residua: **Latino LEL** (1/14)

## 15. Prossima slice consigliata

CML-188 — Latino LEL limited draft data prep (ultima disciplina residua, solo Secondaria cl. 2-3), oppure sync CML-186 + CML-187 prima di proseguire.

## 16. Verdict

`CML_187_RELIGIONE_CATTOLICA_LIMITED_DRAFT_DATA_PREP_READY`
