# CML-276E - UTF-8 PUBLIC RUNTIME ENCODING AUDIT AND FIX

## Sintesi
Audit e fix completati. La corruzione Unicode era presente nel sorgente runtime (root e snapshot), non solo nella resa live. Applicato fix conservativo su entrambe le copie runtime con parita confermata.

## Evidenze Audit

### 1) Meta charset
- index.html: <meta charset="UTF-8">
- _published_snapshot/netlify-current/index.html: <meta charset="UTF-8">

### 2) Pattern mojibake nel sorgente (pre-fix)
- BAD_MATCH_COUNT elevato e diffuso su titolo, header, testi UI, badge e dati embedded.
- Esempi rilevati pre-fix:
  - Curricolo Verticale 2012â†’2025 â€” ...
  - ðŸ“š
  - Â·

### 3) Header live
- Content-Type: text/html; charset=utf-8

## Intervento tecnico
Applicato decoder segment-wise cp1252->utf8 solo su segmenti che migliorano il testo e senza replacement characters.

Risultato post-fix:
- root BAD_MATCH_COUNT=0
- snapshot BAD_MATCH_COUNT=0
- replacement character introdotti=0

## Verifiche post-fix
- Ricerca pattern corrotti su root+snapshot: 0 match
- Parita root/snapshot: hash SHA256 uguali
- git diff --check: PASS
- node tools/validate-cml-normalized-curriculum.mjs: PASS
- node tools/test-runtime-mappa-dati-shape.mjs: PASS (14/14)

## Impatti
- Runtime: solo normalizzazione testuale Unicode, nessuna modifica logica intenzionale
- Schema .cml: invariato
- Storage: invariato
- Import/export: invariati

## Verdict
CML_276E_UTF8_PUBLIC_RUNTIME_ENCODING_FIXED
