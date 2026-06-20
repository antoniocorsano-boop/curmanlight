# CurManLight — CML-001

Prima versione statica con viste guidate per revisione del curricolo.

## Avvio locale

Aprire `index.html` nel browser oppure avviare un piccolo server statico:

```bash
python -m http.server 8080
```

Poi aprire:

```text
http://localhost:8080
```

## Pubblicazione Netlify

Il pacchetto è statico: pubblicare la cartella radice del progetto. Il file `netlify.toml` imposta `publish = "."`.

## Dati ufficiali

I contenuti sono nel file:

```text
src/data/content.js
```

Sostituire o integrare i testi ufficiali del curricolo dentro `lockedGeneralSections`, `disciplines`, `references2012`, `references2025`, `revisions` e `sources`.

## Confini

- Nessun backend.
- Nessun modulo Netlify.
- Nessuna API esterna.
- Salvataggio locale solo nel browser.
