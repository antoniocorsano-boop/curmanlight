# Report: CML-087A — ITALIANO_NORMALIZED_CURRICULUM_DRAFT_QUALITY_AUDIT

## Audit dettagliato

### 1. Validità tecnica

| Sotto-controllo | Metodo | Esito |
|---|---|---|
| JSON valido | `node -e "require(...)"` | ✅ |
| `schemaVersion` presente | lettura campo | ✅ `cml-normalized-curriculum-v1` |
| `disciplina: Italiano` | lettura campo | ✅ |
| `stato: bozza_generabile` | lettura campo | ✅ |
| `readiness: in_revisione` | lettura campo | ✅ |
| `humanValidationRequired: true` | lettura campo | ✅ |
| Struttura match Tecnologia | confronto campi | ✅ 17/17 presenti |
| Campo `nucleo` extra | confronto | presente — miglioramento tracciabilità |
| ID univoci | `new Set()` size check | ✅ 14 ID, tutti univoci |
| Pattern ID corretto | regex check | ✅ `ita_{ord}_{classe/fascia}_{nnn}` |
| `classe=null` su Infanzia | verifica | ✅ conforme a Tecnologia |
| `fascia=null` su Pri/Sec | verifica | ✅ conforme a Tecnologia |
| `validazioneUmana: true` in ogni unità | iterazione | ✅ 14/14 |
| Nessuna approvazione | grep termini | ✅ nessun termine di approvazione |
| `fonte` presente in ogni unità | iterazione | ✅ 14/14 |
| `noteDipartimento` presente | iterazione | ✅ 14/14 |

### 2. Copertura ordini

| Ordine | Unità attese | Unità create | Copertura |
|---|---|---|---|
| Infanzia | ≥ 2 | 3 | ✅ (fasce 3-4, 5) |
| Primaria | ≥ 3 | 6 | ✅ (cl. 1, 2, 3, 4, 5) |
| Secondaria | ≥ 3 | 5 | ✅ (cl. 1, 2, 3) |

### 3. Copertura nuclei

| Nucleo | Unità | Ordini coperti |
|---|---|---|
| Ascolto | 3 | Infanzia, Primaria, Secondaria |
| Parlato | 2 | Infanzia, Primaria |
| Lettura | 3 | Infanzia, Primaria, Secondaria |
| Scrittura | 2 | Primaria, Secondaria |
| Acquisizione ed espansione del lessico | 2 | Primaria, Secondaria |
| Riflessione sulla lingua | 2 | Primaria, Secondaria |

### 4. Qualità contenutistica

| Sotto-controllo | Esito |
|---|---|
| Traguardi coerenti | ✅ allineati con DATA + IN 2012 |
| Obiettivi osservabili | ✅ azioni concrete (3 per unità) |
| Conoscenze distinte da abilità | ✅ |
| Abilità come azioni osservabili | ✅ |
| Evidenze utili per valutazione | ✅ |
| Criteri descrittivi (non numerici) | ✅ |
| Linguaggio scolastico chiaro | ✅ |
| Nessun contenuto enciclopedico | ✅ |
| Nessun pattern generico ("imparare a", "sapere che") | ✅ |

### 5. Progressione verticale

| Nucleo | Progressione |
|---|---|
| Ascolto | attenzione 5-10 min → consegne complesse → appunti e discorsi |
| Parlato | frasi complete → turni di parola → discussione argomentata |
| Lettura | pregrafismo → lettura scorrevole → interpretazione personale |
| Scrittura | (non in Infanzia) → ortografia e riassunto → riscrittura e testi argomentativi |
| Lessico | (non in Infanzia) → sinonimi e campi semantici → morfemi e registri |
| Riflessione lingua | (non in Infanzia) → categorie grammaticali → analisi del periodo |

### 6. Confronto con Tecnologia

| Dimensione | Tecnologia | Italiano |
|---|---|---|
| Unità totali | 13 | 14 |
| Infanzia | 2 | 3 |
| Primaria | 5 | 6 |
| Secondaria | 6 | 5 |
| Campi per unità | 17 | 18 (+ `nucleo`) |
| `stato` | "nuovo" | "nuovo" |
| `validazioneUmana` | true | true |
| Criteri valutazione | descrittivi | descrittivi |
| ID pattern | `{disc}_{ord}_{fascia/classe}_{nnn}` | `ita` invece di `tec` |

### 7. Rischi valutati

| Rischio | Valutazione | Azione |
|---|---|---|
| Contenuti troppo generici | ✅ Nessuno rilevato | — |
| Mancanza progressione verticale | ✅ Leggibile su tutti i nuclei | — |
| Lessico sottorappresentato | ⚠️ Assente in Infanzia (coerente con IN) | Da valutare in revisione umana |
| Riflessione lingua sottorappresentata | ⚠️ Assente in Infanzia (coerente con IN) | Da valutare in revisione umana |
| Criteri troppo vaghi | ✅ 3 criteri specifici per unità | — |
| Eccessiva somiglianza tra ordini | ✅ 12 ambiti distinti | — |
| Campi formalmente presenti ma deboli | ✅ Tutti i campi hanno contenuto sostanziale | — |

### 8. Readiness Italiano

| Indicatore | Valore |
|---|---|
| Classificazione come `bozza_generabile` | ✅ Sì |
| Readiness `in_revisione` | ✅ Sì |
| `pronto_approvazione` | ❌ No (corretto) |
| Fix dati necessari prima del runtime | Nessuno |

### 9. Controlli formali

| Controllo | Esito |
|---|---|
| `git status` — solo file docs | ✅ |
| `git diff --check` | ✅ |
| Docs-only | ✅ |
| Nessun dato modificato | ✅ |
| Runtime non modificato | ✅ |
| `.cml`/export/import/role-access invariati | ✅ |
| File consentiti: 3 | ✅ |

## Riepilogo

| Area | Esito |
|---|---|
| Validità tecnica | ✅ PASS |
| Copertura verticale | ✅ PASS |
| Copertura nuclei | ✅ PASS |
| Qualità contenutistica | ✅ PASS |
| Readiness approvazione | ✅ PASS |
| Rischi | ✅ Nessun rischio bloccante |
| Docs-only | ✅ CONFERMATO |

## Verdetto finale

`CML_087A_ITALIANO_NORMALIZED_CURRICULUM_QUALITY_AUDIT_READY`

**Esito: A** — Italiano pronto come `bozza_generabile / in_revisione`

Nessun fix dati richiesto.
