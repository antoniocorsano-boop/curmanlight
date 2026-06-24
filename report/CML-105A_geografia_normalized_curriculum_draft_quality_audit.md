# Report CML-105A — Geografia normalized curriculum quality audit

## General

- **Commit iniziale:** `5c810d1` (CML-105)
- **File sotto audit:** `content/curriculum/geografia.normalized.json`
- **Tipo slice:** docs-only quality audit
- **Dati non modificati:** ✅
- **Runtime non modificato:** ✅
- **Schema `.cml`, export/import, role-access invariati:** ✅
- **Branch:** `main`
- **Baseline:** `d3143d9` (CML-104)

## JSON checks

- JSON valido: ✅
- 12 unità, 17 campi per unità: ✅
- ID univoci (formato `geo_{ordine}_{classe}_{numero}`): ✅
- `validazioneUmana: true` su tutte le 12 unità: ✅
- Nessuna formula approvativa (nessun `pronto_approvazione`, `approvato`, `definitivo`): ✅
- Schema versione `cml-normalized-curriculum-v1`: ✅

## Field checks

| Campo | Presente | Note |
|-------|----------|------|
| id | ✅ 12/12 | Unici, formato `geo_{ordine}_{classe/fascia}_{numero}` |
| disciplina | ✅ 12/12 | "Geografia" |
| ordine | ✅ 12/12 | Inf/Pri/Sec |
| classe/fascia | ✅ 12/12 | |
| nucleo | ✅ 12/12 | 3 assi |
| ambito | ✅ 12/12 | Specifici |
| competenza | ✅ 12/12 | |
| traguardo | ✅ 12/12 | |
| obiettivi | ✅ 12/12 | Max 5 per unità |
| conoscenze | ✅ 12/12 | |
| abilità | ✅ 12/12 | |
| evidenze | ✅ 12/12 | ≥30 chars |
| criteriValutazione | ✅ 12/12 | Descrittivi |
| fonte | ✅ 12/12 | |
| stato | ✅ 12/12 | Tutti "nuovo" |
| validazioneUmana | ✅ 12/12 | true |
| noteDipartimento | ✅ 12/12 | |

## Assi coverage

| Asse | Unità | Progressione verticale |
|------|-------|----------------------|
| **Paesaggio** | 4 | Inf(5) orientamento → Pri(1) spazio vissuto → Pri(2) elementi naturali/antropici → Sec(1) art.9 Costituzione |
| **Transcalarità** | 5 | Pri(3) carte → Pri(5) Italia/Europa → Sec(1) scale → Sec(2) popolaz/economia → Sec(3) geopolitica/clima |
| **Territorializzazione** | 3 | Pri(4) Italia fisica → Sec(2) comunità/ambiente → Sec(3) Irpinia/Campania |

## Ordini/classi coverage

| Ordine | Unità | Classi coperte |
|--------|-------|---------------|
| Infanzia | 1 | Fascia 5 |
| Primaria | 5 | Cl.1, 2, 3, 4, 5 |
| Secondaria | 6 | Cl.1 (2), Cl.2 (2), Cl.3 (2) |

## Human validation checks

- `humanValidationRequired: true` nel metadata root: ✅
- `validazioneUmana: true` su ogni unità: ✅ 12/12
- Nessuna unità con `validazioneUmana` assente: ✅

## Structural comparison with benchmarks

| Metrica | Geografia | Storia | Tecnol. | Italiano | Matem. | Scienze | Inglese |
|---------|-----------|--------|---------|----------|--------|---------|---------|
| Unità | 12 | 15 | 13 | 14 | 13 | 15 | 12 |
| Assi/nuclei | 3 | 5 | 0* | 6 | 5 | 5 | 11* |
| Ordini | 3 | 3 | 3 | 3 | 3 | 3 | 3 |
| Chars/unità | 1.559 | 1.738 | — | 1.588 | 2.114 | — | — |

## Readiness Geografia

- **Readiness:** `bozza_generabile / in_revisione`
- **Completezza strutturale:** ✅
- **Approvazione:** nessuna
- **Stato unità:** tutte `nuovo`

## Risk assessment

| Rischio | Livello | Note |
|---------|---------|------|
| Nomenclatura geografica | BASSO | Obiettivi per competenze, non elenchi di luoghi |
| Sovrapposizione Ed. Civica | BASSO | Sostenibilità da prospettiva territoriale |
| Sovrapposizione Storia | BASSO | Spazio vs tempo, complementari |
| Provincialismo (Irpinia) | BASSO | 1/12 unità |
| Criteri vaghi | BASSO | Criteri descrittivi osservabili |
| Progressione debole | BASSO | Verticalità su tutti e 3 gli assi |

## Gaps identified

- **GAP-1 (minore):** Infanzia solo fascia 5. Assente fascia 3-4. Identico a Storia. Mitigato: orientamento spaziale a 3-4 anni è prevalentemente esplorazione motoria.
- **GAP-2 (minore):** Territorializzazione solo 3 unità. Copertura sufficiente ma concentrata.
- **GAP-3 (neutro):** Assenza educazione finanziaria e clima in chiave civica (non pertinenti).

## Verdetto finale

**A — Geografia pronta come `bozza_generabile / in_revisione`**

Nessun fix dati richiesto. GAP-1, GAP-2, GAP-3 non bloccanti. Rischi mitigati.

## Prossimo step raccomandato

CML-106 — DISCIPLINARY_COMPLETENESS_STATUS_UPDATE_FOR_GEOGRAFIA_RUNTIME_INCREMENT (contatori UI 7/8/0)
