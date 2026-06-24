# Report CML-102A — Storia normalized curriculum quality audit

## General

- **Commit iniziale:** `8b2b1aa` (CML-102)
- **File sotto audit:** `content/curriculum/storia.normalized.json`
- **Tipo slice:** docs-only quality audit
- **Dati non modificati:** ✅
- **Runtime non modificato:** ✅
- **Schema `.cml`, export/import, role-access invariati:** ✅
- **Branch:** `main`
- **Baseline:** 2cb6869 (CML-101)

## JSON checks

- JSON valido: ✅
- 15 unità, 17 campi per unità: ✅
- ID univoci (formato `sto_{ordine}_{classe}_{numero}`): ✅
- `validazioneUmana: true` su tutte le 15 unità: ✅
- Nessuna formula approvativa (nessun `pronto_approvazione`, `approvato`, `definitivo`): ✅
- Schema versione `cml-normalized-curriculum-v1`: ✅

## Field checks

| Campo | Presente | Note |
|-------|----------|------|
| id | ✅ 15/15 | Unici |
| disciplina | ✅ 15/15 | "Storia" |
| ordine | ✅ 15/15 | Inf/Pri/Sec |
| classe/fascia | ✅ 15/15 | |
| nucleo | ✅ 15/15 | 5 nuclei |
| ambito | ✅ 15/15 | Specifici |
| competenza | ✅ 15/15 | |
| traguardo | ✅ 15/15 | |
| obiettivi | ✅ 15/15 | Max 5 per unità |
| conoscenze | ✅ 15/15 | |
| abilità | ✅ 15/15 | |
| evidenze | ✅ 15/15 | ≥30 chars |
| criteriValutazione | ✅ 15/15 | Descrittivi |
| fonte | ✅ 15/15 | |
| stato | ✅ 15/15 | Tutti "nuovo" |
| validazioneUmana | ✅ 15/15 | true |
| noteDipartimento | ✅ 15/15 | |

## Nuclei coverage

| Nucleo | Unit | Progressione |
|--------|------|-------------|
| Strumenti concettuali e periodizzazione | 4 | Inf(5) → Pri(1) → Sec(1) → Sec(2) |
| Uso delle fonti | 2 | Pri(2) → Sec(1) |
| Organizzazione delle informazioni | 5 | Pri(3) → Pri(5) → Sec(1) → Sec(2) → Sec(3) |
| Produzione scritta e orale | 3 | Pri(4) → Sec(1) → Sec(2) |
| Uso delle fonti e produzione (comb.) | 1 | Sec(3) |

## Ordini/classi coverage

| Ordine | Unità | Classi coperte |
|--------|-------|---------------|
| Infanzia | 1 | Fascia 5 |
| Primaria | 5 | Cl.1, 2, 3, 4, 5 |
| Secondaria | 9 | Cl.1 (4), Cl.2 (3), Cl.3 (2) |

## Periodizzazione checks

- Sec 1: Longobardi → Guerra dei Trent'anni — ✅ DM 221/2025
- Sec 2: Assolutismo → Seconda Riv. Ind. — ✅ DM 221/2025
- Sec 3: I GM → 1994 — ✅ DM 221/2025
- Primaria cl.5: estensione VII sec. d.C. — ✅ raccordo
- Nessun salto cronologico: ✅
- Nessuna ripetizione: ✅

## Human validation checks

- `humanValidationRequired: true` nel metadata root: ✅
- `validazioneUmana: true` su ogni unità: ✅ 15/15
- Nessuna unità con `validazioneUmana` assente: ✅

## Structural comparison with benchmarks

| Metrica | Storia | Tecnol. | Italiano | Matem. | Scienze | Inglese |
|---------|--------|---------|----------|--------|---------|---------|
| Unità | 15 | 13 | 14 | 13 | 15 | 12 |
| Nuclei | 5 | 0* | 6 | 5 | 5 | 11* |
| Ordini | 3 | 3 | 3 | 3 | 3 | 3 |
| Chars/unità | 1.738 | — | 1.588 | 2.114 | — | — |

*Tecnologia: nucleo non differenziato (tutti "Tecnologia"). Inglese: nuclei granulari (per competenza linguistica).

## Readiness Storia

- **Readiness:** `bozza_generabile / in_revisione`
- **Completezza strutturale:** ✅
- **Approvazione:** nessuna
- **Stato unità:** tutte `nuovo`

## Risk assessment

| Rischio | Livello | Note |
|---------|---------|------|
| Enciclopedismo | BASSO | Max 5 obiettivi/unità |
| Sovrapposizione Geografia | BASSO | Focus cronologico, non geografico |
| Sovrapposizione Ed. Civica | MEDIO | Sec 3 su cittadinanza — mitigato da focus storico |
| Periodizzazione rigida | BASSO | Unità per competenze, non elenchi |
| Criteri vaghi | BASSO | Criteri descrittivi osservabili |
| Progressione debole | BASSO | Verticalità su tutti i nuclei |

## Gaps identified

- **GAP-1 (minore):** Infanzia solo fascia 5. Assente fascia 3-4. Mitigato: percezione del tempo a 3-4 anni è prevalentemente esplorazione non strutturata.
- **GAP-2 (minore):** Uso delle fonti solo 2 unità autonome (Pri 2, Sec 1). Mitigato: Sec 3 ha nucleo combinato fonti+produzione.
- **GAP-3 (migliorativo):** 15 unità vs 14 pianificate. Aggiunto nucleo combinato in Sec 3 per memoria/cittadinanza.

## Verdetto finale

**A — Storia pronta come `bozza_generabile / in_revisione`**

Nessun fix dati richiesto. GAP-1, GAP-2 non bloccanti. GAP-3 migliorativo. Rischi mitigati.

## Prossimo step raccomandato

CML-103 — DISCIPLINARY_COMPLETENESS_STATUS_UPDATE_FOR_STORIA_RUNTIME_INCREMENT (contatori UI 6/9/0)
