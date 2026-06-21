# CML-016C - Export Cleanup and Personalization Smoke Audit

## Preflight

- Branch: cml-008r-fix-markdown-decision-summary
- HEAD partenza: a182347a9e27914c1d87575e036fe063b19835a4
- Working tree iniziale: pulita
- Deploy: nessuno

## Controlli eseguiti

1. Git stato iniziale confermato
2. Conteggio marker sorgente [IN 2025: ...] nei dati di index.html
3. Verifica assenza marker in Riepilogo, export Markdown/Word/PDF
4. Verifica indicatore ✏️ su testi personalizzati
5. Verifica conteggi: 103 totali, 41 ok, 54 modifica, 8 nuovo
6. Verifica qualita export Markdown e PDF invariato
7. Verifica responsive smoke (360/390/414/768/900/901/1280 px)
8. Verifica confini invariati (PDF, sw.js, _headers, asset)

## Esito marker sorgente

PASS - 61 marker [IN 2025: ...] presenti e invariati nei dati sorgente (proposto dei record di curriculum), preservano tracciabilita DM 221/2025.

## Esito marker in output

PASS - 0 marker visibili nel Riepilogo e negli export. La funzione cleanInlineIn2025Marker() rimuove il marker tecnico dalla presentazione in tutte le aree utente finali.

## Esito indicatore ✏️

PASS - L'indicatore ✏️ compare solo sui testi realmente personalizzati (isPersonalizedItem()). Legenda compatta: "Testo personalizzato · non indica una nuova approvazione." Assenza di interferenze con fonti, stati o decisioni.

## Esito conteggi

PASS - 103 totali: 41 ok, 54 modifica, 8 nuovo. Logiche decisionali invariate.

## Esito responsive

PASS - Media queries presenti per i breakpoint richiesti. Nessuna regressione visiva evidente rispetto al perimetro verificato in CML-016B.

## Confini invariati

- Nessun deploy
- Nessuna modifica runtime
- Nessuna modifica a contenuti, fonti o logiche decisionali
- Nessuna modifica a PDF, sw.js, _headers, asset

## Verdetto

CML_016C_EXPORT_CLEANUP_PERSONALIZATION_SMOKE_READY
