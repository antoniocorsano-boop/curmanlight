# CML-079B — HOME_MICROGUIDE_RENDERING_FIX

## Contesto
Ultimo step completato: CML-082A — Didattica area live smoke.
CML-079/079A hanno introdotto la microguida "Usa CurManLight in 5 minuti" su Home.
In fase di verifica successiva su desktop (viewport >560px) la microguida risultava degradata, con rendering di testo grezzo/incompleto.

## Problema rilevato
Home non renderizzata correttamente: la microguida appariva come testo grezzo su viewport >560px. Anche le sezioni Home dashboard, Didattica e UDA risultavano compromesse.

## Causa individuata
Una `@media(max-width:560px){` orfana alla riga 690 (inserita in CML-078 o precedente) non era mai stata chiusa con `}`. Tutto il CSS successivo (Home dashboard, Home cards, Didattica, microguida, UDA) era intrappolato dentro questo media query, risultando invisibile su schermi con larghezza >560px.

## Fix applicato
Rimozione della riga `@media(max-width:560px){` orfana alla riga 690 di `_published_snapshot/netlify-current/index.html`. Le parentesi graffe risultano ora bilanciate (962 `{` = 962 `}`).

## Perimetro
- Solo CSS: rimozione 1 riga di media query
- Nessuna modifica a markup HTML, JavaScript, o contenuti
- Nessuna nuova funzione

## File modificati
- `_published_snapshot/netlify-current/index.html` (1 riga rimossa)

## Vincoli rispettati
- ✅ Nessuna nuova funzione
- ✅ Nessuna modifica schema `.cml`
- ✅ Nessuna modifica export/import docente, dipartimento o referente
- ✅ Nessuna modifica role-access gating
- ✅ Nessuna modifica codice operativo
- ✅ Nessuna modifica `localStorage`/`sessionStorage`
- ✅ Nessun backend, login, OAuth, API, database, cloud o autenticazione
- ✅ Nessuna dipendenza esterna
- ✅ Nessun Tailwind, font remoto, icona remota o immagine remota
- ✅ Contenuto funzionale della microguida invariato
- ✅ Aree Curriculum e Didattica non alterate

## Controlli eseguiti
- ✅ `git diff --check`: nessun whitespace error
- ✅ `git diff`: solo 1 riga rimossa (nessuna modifica non pertinente)
- ✅ Nessuna nuova dipendenza CDN/esterna introdotta
- ✅ Nessun nuovo uso di `localStorage`/`sessionStorage` (13 occorrenze, invariato)
- ✅ Schema `.cml`, export/import e role-access invariati
- ✅ CSS braces bilanciate: 962 `{` = 962 `}`
- ✅ Home dashboard CSS globale (fuori da `@media`)
- ✅ Home cards CSS globale
- ✅ Home microguide CSS globale
- ✅ Didattica CSS globale
- ✅ Dark mode compatibile (CSS variables intatte)
- ✅ Nessun overflow orizzontale
- ✅ Validazione umana esplicita preservata

## Esito
`CML_079B_HOME_MICROGUIDE_RENDERING_FIX_READY`

## Prossimo step raccomandato
CML-079C — HOME_MICROGUIDE_RENDERING_LIVE_SMOKE:
- Verifica live su `https://antoniocorsano-boop.github.io/curmanlight/`
- Controllare Home, microguida, Curriculum, Didattica, mobile, dark mode
