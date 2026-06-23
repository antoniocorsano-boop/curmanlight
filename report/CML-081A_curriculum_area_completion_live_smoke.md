# CML-081A — Curriculum Area Completion — Live Smoke su GitHub Pages

## Verdetto: `CML_081A_CURRICULUM_AREA_COMPLETION_LIVE_SMOKE_READY`

**Data:** 2026-06-23
**URL:** https://antoniocorsano-boop.github.io/curmanlight/
**Commit:** 1f95a99
**Stato:** ✅ 11/11 verifiche superate

## Checklist verifica

1. ✅ URL pubblico aggiornato — GitHub Pages deploy completato
2. ✅ Path guidance visibile in Consulta — box "Il percorso del curricolo" con 4 step
3. ✅ Coverage banner — "Copertura curricolo" con conteggio discipline, voci totali, proposte 2025
4. ✅ Per-discipline summary — griglia compatta dopo l'indice con dot colorato e conteggi
5. ✅ Next-action callout — "✏️ Revisiona {disciplina}" dopo ogni disciplina
6. ✅ Ordine counts — "N discipline, M voci" negli header di Infanzia/Primaria/Secondaria
7. ✅ Link funzionanti — Revisione, Definitivo, Esporta, sezioni generali via `setTab()`
8. ✅ Dark mode compatibile — CSS variables per tutti i nuovi elementi
9. ✅ Nessuna modifica ad altri tab — Didattica, Esportazioni, Guida, Home invariati
10. ✅ Schema `.cml`, export/import, role-access invariati
11. ✅ Nessuna dipendenza esterna introdotta

## Note

- Testato via ispezione del sorgente HTML live su GitHub Pages
- "Definitivo" qualificato come "documento di lavoro finale — non sostituisce la delibera"
- "Copertura curricolo" usato invece di "Mappa completa" per non suggerire validazione istituzionale
- Solo `renderCurricoloIstituto()` modificata — nessuna altra funzione toccata
