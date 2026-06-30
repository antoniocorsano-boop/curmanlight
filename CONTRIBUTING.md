# Contribuire a CurManLight

## Principio generale

Ogni modifica deve essere piccola, verificabile e coerente con la natura statica del progetto. CurManLight deve rimanere una PWA vanilla, senza backend e senza dipendenze runtime.

## Tipi di modifica

### Slice docs-only

Può modificare solo:

- documentazione;
- report;
- indici;
- note operative.

Non può modificare runtime, dati curricolari, strumenti o asset.

### Slice docs/examples/schemas

Può modificare:

- documentazione;
- esempi fittizi;
- schemi JSON;
- report di esecuzione.

Non può modificare dati curricolari reali o comportamento dell'app.

### Slice runtime

Può modificare il comportamento dell'app solo se autorizzata. Deve indicare chiaramente:

- problema da risolvere;
- file coinvolti;
- test eseguiti;
- regressioni verificate;
- eventuale impatto su GitHub Pages.

## Regole di perimetro

- Non modificare file fuori scope.
- Non usare modifiche massive se basta un intervento puntuale.
- Non rinominare cartelle o file canonici senza una slice dedicata.
- Non introdurre librerie, build, framework o servizi esterni.
- Non inserire dati personali o esempi riconducibili a persone reali.

## Test minimi

Eseguire sempre:

```bash
git status --short
git diff --name-only
git diff --check
```

Per dati curricolari o runtime disciplinare:

```bash
node tools/validate-cml-normalized-curriculum.mjs
node tools/test-runtime-mappa-dati-shape.mjs
```

## Commit

Usare messaggi brevi e descrittivi, ad esempio:

- `docs: add AI-readable repository scaffold`
- `docs: update CML governance notes`
- `runtime: improve curriculum navigation clarity`

## Modifiche non autorizzate

Se durante il lavoro compaiono modifiche non previste:

1. non includerle nel commit;
2. documentarle nel report;
3. non cancellarle se potrebbero appartenere a un altro lavoro in corso;
4. chiedere autorizzazione prima di integrarle.
