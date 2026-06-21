# CML-016B — Export Content Marker Cleanup and Personalization Indicator

## Preflight

- Branch: cml-008r-fix-markdown-decision-summary
- HEAD partenza: d82fc3a9cca2a164fd74aa8efcc5503ec1e0af00
- Working tree iniziale: pulita
- Deploy: nessuno

## Modifica runtime

Unico file runtime modificato: _published_snapshot/netlify-current/index.html.

- Introdotta cleanInlineIn2025Marker() per rimuovere dalla presentazione il marker editoriale finale [IN 2025: ...].
- I 61 marker restano invariati nei dati sorgente per preservare tracciabilità e sostanza.
- Riepilogo ed export usano testo ripulito; il riferimento alla proposta 2025 resta nelle etichette contestuali, negli stati e nei riferimenti DM 221/2025.
- Introdotta isPersonalizedItem() per distinguere una modifica reale (testoFinale diverso da proposto).
- Il Riepilogo mostra ✏️ sulla sola voce personalizzata e una legenda compatta: “Testo personalizzato · non indica una nuova approvazione.”

## Invarianti

- Voci: 103 totali, 41 ok, 54 modifica, 8 nuovo — invariato.
- Funzioni approvazione, rifiuto, annullamento e personalizzazione: non modificate.
- Generazione Markdown/Word/PDF: architettura e flussi invariati; il modello documentale unico riceve soltanto testo presentazionale ripulito.
- Contenuti disciplinari, fonti normative e dati sostanziali: invariati.
- PDF statico, sw.js, _headers, icone e asset: invariati.
- Pannello export Tecnologia: invariato.
- Nessun deploy o merge.

## Verifiche

- Test RED confermato prima dell'implementazione: helper cleanup assente.
- Test GREEN: cleanup marker, rilevamento personalizzazione e 61 marker sorgente invariati.
- Sintassi JavaScript inline: PASS (2 script).
- Riepilogo: marker visibili 0, indicatori 1, legenda 1, testo personalizzato visibile.
- Modello export e Markdown generato: marker inline 0.
- Responsive PASS: 360, 390, 414, 768, 900, 901 e 1280 px; nessun overflow orizzontale, indicatore e legenda visibili.
- Console: nessun errore applicativo; solo richiesta preesistente favicon.ico con 404.
- Browser integrato non avviabile per policy sandbox della sessione; QA completato con Chromium headless locale via DevTools, senza installare dipendenze.

## Verdetto

CML_016B_EXPORT_MARKER_CLEANUP_PERSONALIZATION_INDICATOR_READY