# CML-276E - UTF-8 PUBLIC RUNTIME ENCODING AUDIT AND FIX

## Tipo slice
Runtime microfix + docs

## Obiettivo
Ripristinare la leggibilita Unicode del runtime pubblico, eliminando i pattern di mojibake nel sorgente mantenendo parita root/snapshot e senza cambiare logiche funzionali.

## Scope autorizzato
- index.html
- _published_snapshot/netlify-current/index.html
- docs/03_execution/CML-276E.md
- report/CML-276E_utf8_public_runtime_encoding_audit_and_fix.md
- docs/REPO-MOVELOG.md

## Controlli richiesti
1. Presenza di meta charset UTF-8 su root e snapshot.
2. Ricerca pattern corrotti nel sorgente:
   - ðŸ
   - â€™
   - â€œ
   - â€
   - Â·
   - Ã
3. Verifica header live:
   - Content-Type: text/html; charset=utf-8
4. Parita root/snapshot dopo fix.
5. Gate repository:
   - git diff --check
   - node tools/validate-cml-normalized-curriculum.mjs
   - node tools/test-runtime-mappa-dati-shape.mjs

## Metodo applicato
- Decoder segment-wise cp1252->utf8 su sequenze mojibake note, con criterio conservativo:
  - applica decode solo se riduce pattern corrotti
  - non introduce replacement character
- Applicazione identica su root e snapshot.

## Esito atteso
CML_276E_UTF8_PUBLIC_RUNTIME_ENCODING_FIXED
