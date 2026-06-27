# CML-188 — Latino LEL Limited Draft Data Prep

Data: 2026-06-27

## 1. Scopo

Creare il file normalizzato di Latino LEL (Esplorazione Linguistica) come bozza limitata e conservativa per l'ultima disciplina residua del curricolo CurManLight. Il completamento porta i dati normalizzati da 13/14 a 14/14.

## 2. Baseline tecnica

| Parametro | Valore |
|---|---|
| Root Git | `C:\Users\anton\CurManLight` |
| Branch | `main` |
| Commit iniziale | `a8bd394` (HEAD locale, 2 ahead origin/main) |
| origin/main | `ba051ff` (CML-185-SYNC) |
| Working tree iniziale | pulito |
| Dati normalizzati prima | 13/14 |
| Runtime mappa | 11/14 |
| Shape test | 11/11 PASS |
| Discipline residue dopo | 0 — tutte completate |
| Skill usate | `cml-readiness-audit` |

## 3. Collegamento con CML-172, CML-185, CML-186, CML-187

- CML-172: sequenza discipline residue — Latino LEL era quinta e ultima.
- CML-185: selection audit — posticipato per readiness bassa e perimetro LEL incerto.
- CML-182B: `LIMITED_DRAFT_DATA_PREP_ALLOWED`.
- CML-186: policy validatore order-absence error→warning applicata (Secondaria-only).
- CML-187: Religione Cattolica completata; Latino LEL era l'unica residua.

## 4. Fonti e riferimenti

- **D.M. 221/2025**: Nuove Indicazioni — introduzione disciplina opzionale LEL, 1h/sett, classi 2-3 Secondaria.
- **D.M. 254/2012**: Indicazioni Nazionali (Latino non previsto come disciplina a sé, ma LEL nasce con IN 2025 come opzionale).
- **CML-109**: Data audit — 1 traguardo + 2 obiettivi per LEL.
- **CML-172**: Nuclei attesi — lessico e morfologia di base; rapporto latino-italiano; cultura classica; metodo linguistico.
- **Runtime esistente**: traguardo LEL in `index.html` riga 1973 ("L'alunno comprende i fondamenti del lessico e della grammatica latina in confronto con l'italiano...").

## 5. Vincoli specifici

- Solo Secondaria classi 2-3 (LEL non copre classe 1, né Infanzia, né Primaria).
- LEL è Esplorazione Linguistica: approccio comparativo e culturale, non Latino classico.
- Linguaggio istituzionale e scolastico.
- `humanValidationRequired: true` su ogni unità.
- Ordine-absence warning dalla policy CML-186: atteso per Infanzia/Primaria e classe 1.

## 6. Struttura del JSON

| Ordine | Classe | Nucleo | Unità | ID |
|---|---|---|---|---|
| Secondaria | 2 | Lessico e morfologia di base | 1 | `lat_sec_2_001` |
| Secondaria | 2 | Rapporto latino-italiano | 1 | `lat_sec_2_002` |
| Secondaria | 3 | Cultura classica e civiltà romana | 1 | `lat_sec_3_001` |
| Secondaria | 3 | Metodo linguistico e lessico settoriale | 1 | `lat_sec_3_002` |

## 7. Note specifiche

- 4 unità totali (2 per classe Secondaria 2, 2 per classe Secondaria 3).
- Traguardo generale basato sul dato runtime preesistente.
- Ogni unità ha `validazioneUmana: true` e `noteDipartimento`.
- Approccio conservativo: contenuti istituzionali, basati su nuclei attesi CML-172.
- Nessun riferimento a contenuti non documentati.
- La disciplina è nuova (IN 2025) e opzionale — il dipartimento di lettere deve validare e adattare.

## 8. Validazioni

- [x] Validatore curriculum: **14/14 file**, overallValid **true**, 0 errori
- [x] Shape test: **11/11 PASS** (runtime invariato)
- [x] `git diff --check`: PASS
- [x] Credential scan: nessuna credenziale

## 9. Invarianti

| Invariante | Stato |
|---|---|
| `_published_snapshot/netlify-current/index.html` | Invariato |
| Root `index.html` | Invariato |
| `sw.js` | Invariato |
| Manifest | Invariato |
| `tools/` | Invariato |
| `.claude/` | Invariato |
| `CLAUDE.md` | Invariato |
| Schema `.cml` | Invariato |
| Export/import | Invariato |
| SchoolKB | Invariato |
| Dipendenze | Invariate |
| Deploy | Non eseguito |
| Push | Non eseguito |

## 10. Risultati

| Indicatore | Pre | Post |
|---|---|---|
| Dati normalizzati | 13/14 | 14/14 |
| Runtime mappa | 11/14 | 11/14 (invariato) |
| Shape test | 11/11 PASS | 11/11 PASS (invariato) |
| Validatore | 13/13 PASS | 14/14 PASS |

## 11. Prossima slice consigliata

Sync batch controllato (CML-186 + CML-187 + CML-188) per allineare `origin/main` con lo stato locale 14/14.

## 12. Verdetto

`CML_188_LATINO_LEL_LIMITED_DRAFT_DATA_PREP_READY`
