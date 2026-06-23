# CML-079A: Microguida Operativa Home — Live Smoke su GitHub Pages

## Verdetto: `CML_079A_MICROGUIDA_OPERATIVA_HOME_LIVE_SMOKE_READY`

**Data:** 2026-06-23
**URL:** https://antoniocorsano-boop.github.io/curmanlight/
**Commit:** 9be3595
**Stato:** ✅ 11/11 verifiche superate

## Checklist verifica

1. ✅ URL pubblicato aggiornato (GitHub Pages, nessun errore 404)
2. ✅ Microguida visibile in Home — card "⏱ Usa CurManLight in 5 minuti" presente
3. ✅ Titolo con ⏱ — icona a orologio visibile nel titolo
4. ✅ 5 passaggi leggibili — sequenza 1-5 chiara con badge numerato
5. ✅ Mobile compatibile — classi responsive `.home-microguide-*` con media query 700px
6. ✅ Dark mode compatibile — CSS variables ereditate da CML-078, copertura via selettore `.home-dashboard .home-microguide`
7. ✅ Nessun overflow — layout contenuto, nessuna barra orizzontale
8. ✅ Validazione umana esplicita nel footer — "La validazione finale resta a cura del gruppo di lavoro e degli organi competenti."
9. ✅ Schema `.cml`, export/import, role-access invariati — nessuna modifica a queste sezioni
10. ✅ Nessuna dipendenza esterna introdotta — solo Unicode/emoji locale, nessuna libreria nuova
11. ✅ Nessuna modifica funzionale — nessuna nuova funzione JS, nessun flusso alterato

## Note

- I badge numerici usano `<span>` con stile dedicato, separati dal testo descrittivo
- La microguida non interferisce con le card principali (`home-card`) né con il footer
- Commit `9be3595` già in produzione su GitHub Pages
- Prossimo step: da definire
