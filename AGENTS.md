# AGENTS.md — CurManLight

CurManLight è una PWA statica per il curricolo verticale d'istituto.

## Regole sintetiche

- Mantenere HTML, CSS e JavaScript vanilla.
- Non introdurre dipendenze runtime.
- Non modificare il runtime senza una slice autorizzata.
- Non modificare dati curricolari reali senza validazione dedicata.
- Usare `README.md` e `docs/index.md` come punti di ingresso.
- Usare `docs/03_execution/` e `report/` per documentare le slice.
- Conservare il principio di validazione umana delle decisioni curricolari.

## File protetti

Modificare solo con autorizzazione esplicita:

- `index.html`
- `manifest.json`
- `service-worker.js`
- `assets/`
- `content/curriculum/`
- `tools/`
- `_published_snapshot/`

## Verifiche minime

```bash
git status --short
git diff --name-only
git diff --check
```
