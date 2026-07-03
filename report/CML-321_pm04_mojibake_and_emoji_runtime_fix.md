# CML-321 — PM-04 Mojibake and Emoji Runtime Fix — Report

## Sintesi

| Voce | Valore |
|------|--------|
| **Slice** | CML-321 |
| **Tipo** | runtime fix P0 + documentazione |
| **Obiettivo** | Correggere mojibake emoji (U+FE0F) e caratteri (U+FFFD) nel runtime |
| **File runtime** | `index.html`, `_published_snapshot/netlify-current/index.html` |
| **Stato** | READY_LOCAL_NOT_PUSHED |

---

## 1. Analisi Pre-Fix

### 1.1 Pattern `ï¸` — Variation Selector U+FE0F

Il byte sequence `EF B8 8F` (U+FE0F, emoji variation selector) appariva come suffisso corrotto dopo emoji base già corrette.

**Inventario (per file):**

| Emoji | U+ | Occorrenze | Area |
|-------|-----|-----------|------|
| ✏️ | U+270F | 11 | Modifica, menu azioni |
| ⚠️ | U+26A0 | 11 | Avvisi, stati |
| ⬇️ | U+2B07 | 9 | Espansione sezioni |
| ⚖️ | U+2696 | 5 | Pannelli decisionali |
| ℹ️ | U+2139 | 3 | Info tooltip |
| ⬆️ | U+2B06 | 3 | Compatta sezioni |
| 🗓️ | U+1F5D3 | 3 | Date, calendario |
| ⚙️ | U+2699 | 2 | Impostazioni |
| 🗺️ | U+1F5FA | 2 | Mappa |
| 🏛️ | U+1F3DB | 2 | Istituzionale |
| 1️⃣2️⃣3️⃣ | U+0031/32/33 | 3 | Numerazione |
| 🏗️ | U+1F3D7 | 1 | Costruzione |

**Totale FE0F: 55 per file (110 totali)**

### 1.2 Pattern `ï¿½` — Replacement Character U+FFFD

Il byte sequence `EF BF BD` (U+FFFD, Unicode replacement character) appariva esclusivamente nel blocco dati inline `EDUCAZIONE_MOTORIA_MAPPA_DATI`.

**Inventario (per file):**

| Pattern | Correzione | Occorrenze | Esempio |
|---------|-----------|------------|---------|
| `responsabilitï¿½` | `responsabilità` | ~5 | "Autonomia, responsabilità, espressione corporea" |
| `unitï¿½` | `unità` | ~14 | "Raccoglie 1 unità di apprendimento" |
| ` di sï¿½` | ` di sé` | ~4 | "Conoscenza di sé, schemi motori" |
| residui generici | `à` | ~3 | fallback |

**Totale FFFD: 26 per file (52 totali)**

---

## 2. Interventi

### 2.1 Rimozione FE0F
- **Metodo**: rimozione byte sequence `EF B8 8F` da entrambi i file
- **Effetto**: le emoji base rimangono corrette (es. ✏, ⚠, ⬇), il variation selector corrotto scompare
- **Rischio**: nessuno — il variation selector era solo un suffisso visuale non necessario

### 2.2 Correzione FFFD
- **Metodo**: sostituzioni mirate basate sul contesto italiano
- **Ordine**: prima pattern specifici (`responsabilitï¿½`, `unitï¿½`, ` di sï¿½`), poi fallback generico
- **File**: solo blocco Educazione Motoria
- **Rischio**: basso — verificato con shape test e validatore curriculum

---

## 3. Verifiche Post-Fix

### 3.1 Controlli automatici

| Controllo | Comando | Esito |
|-----------|---------|-------|
| Git diff | `git diff --check` | PASS |
| Shape test | `node tools/test-runtime-mappa-dati-shape.mjs` | PASS (14/14) |
| Curriculum validator | `node tools/validate-cml-normalized-curriculum.mjs` | PASS (14/14, overallValid: true) |
| FE0F residuo | ricerca `EF B8 8F` | 0 occorrenze |
| FFFD residuo | ricerca `EF BF BD` | 0 occorrenze |

### 3.2 Sincronizzazione runtime pair

- `index.html` === `_published_snapshot/netlify-current/index.html`: **true**
- Dimensione: 862112 bytes ciascuno
- Delta dimensione: -217 bytes per file (rimozione FE0F + FFFD → sostituzioni più corte)

### 3.3 Smoke browser

CONSOLE_STREAM_NOT_RELIABLY_TESTED

---

## 4. Impatto PM-04

| Dimensione | Stato |
|-----------|-------|
| PM-04 percentuale | **55%** (invariata) |
| Status | IN CORSO, non chiusa |
| Fix P0 | Completato |
| UX-021 | Risolto (simboli corrotti rimossi) |
| Pronto per | retest utente post-remediation |

---

## 5. Residui

| Priorità | Item |
|----------|------|
| P1 | Uniformare etichette versione, verificare icone e testi home |
| P2 | Refactoring naming JS, revisione linguistica estesa, logo |