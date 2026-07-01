# CML-UDA-SMART-LIBRARY-RUNTIME-SCAFFOLD

## Obiettivo
Implementare il primo scaffold runtime minimo della Libreria UDA smart dentro la vista `didattica_programmazione`, sulla base del contratto `CML-UDA-SMART-LIBRARY-CONTRACT`.

## Stato iniziale
- Branch: `main`
- HEAD iniziale: `e3370649f5922bb492c590970c490f2609a93056`
- Stato iniziale: `main...origin/main`, tracked tree pulito
- Slice precedente: `CML_UDA_SMART_LIBRARY_CONTRACT_REMOTE_STABILITY_CHECK_PASSED`

## Perimetro
- Tipo slice: runtime increment controllato
- Runtime modificato: si, solo `_published_snapshot/netlify-current/index.html`
- Dati curricolari normalizzati: non modificati
- Export/import: non alterati
- Schema `.cml`: invariato
- Backend/API/endpoint/credenziali/dipendenze: non introdotti
- Push: non eseguito

## Implementazione
La vista `didattica_programmazione` ora contiene una sezione `Libreria UDA smart locale` con:
- titolo bozza UDA;
- stato: `bozza`, `in_revisione`, `pronta_per_confronto`;
- note generiche;
- salvataggio locale;
- elenco bozze salvate;
- eliminazione singola bozza;
- cancellazione completa della libreria locale.

## Chiave locale
- `cml_uda_smart_library_v1`

La chiave contiene un array JSON di bozze UDA smart. La struttura rispetta il contratto minimo, ma la slice non introduce ancora generazione automatica da programmazione annuale.

## Limiti intenzionali
- Nessun generatore avanzato UDA.
- Nessun export Markdown dedicato UDA smart.
- Nessun filtro libreria.
- Nessuna modifica a `.cml`.
- Nessun dato personale di studenti.

## Privacy
La UI dichiara che le bozze restano locali e che non devono essere inseriti nomi, cognomi, voti, bisogni educativi o dati sensibili di studenti.

## Verifiche previste
- `git status --short --branch`
- RED smoke statico iniziale su assenza scaffold
- `git diff --name-only`
- `git diff --check`
- controllo sintassi JavaScript con `node --check`
- secret scan sulle righe aggiunte
- validator curriculum
- shape test runtime
- smoke statici su sezione, chiave locale, funzioni, routing e tab esistenti

## Verdetto atteso
`CML_UDA_SMART_LIBRARY_RUNTIME_SCAFFOLD_READY_LOCAL_NOT_PUSHED`
