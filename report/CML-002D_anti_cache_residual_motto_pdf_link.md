# Report CML-002D — Anti-cache residual motto PDF link

## Risultato

Il rischio residuo documentato in CML-002C è stato chiuso aggiornando l'unico collegamento non versionato al PDF nella pagina motto.

| Controllo | Prima | Dopo |
|---|---:|---:|
| Link PDF nella pagina motto | 1 | 1 |
| Link motto con `?v=452b421` | 0 | 1 |
| Riferimenti PDF non versionati nell'intero runtime | 1 | 0 |

Tutti e quattro i link utente presenti nel runtime pubblicabile — tre in `index.html` e uno nella pagina motto — puntano ora a `Corso_CurricoloDonMilani_IN2025.pdf?v=452b421`.

## Ambito verificato

- PDF non modificato: blob locale uguale a `HEAD`, `9d392ca5b72a53fda0f7b36cdccc90ba99eab494`.
- `index.html` non modificato: blob locale uguale a `HEAD`, `207414aaa83aaf7660ec34d505b82c3d600d380c`.
- `sw.js` non modificato: blob locale uguale a `HEAD`, `721be36acb3d203bb40cfce5314b102a9509f2de`.
- Nessun altro contenuto o comportamento applicativo modificato.
- Nessun backend, API, autenticazione o Netlify Forms.
- Nessun deploy eseguito.

## Verdetto

`CML_002D_ANTI_CACHE_RESIDUAL_LINK_READY`
