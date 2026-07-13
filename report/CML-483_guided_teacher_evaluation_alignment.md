# CML-483 — Analisi di allineamento remoto/locale

## Baseline remota

- `main`: `db88ff463b3470d09ff9945205d903e5d7b85923`
- ultimo cluster integrato: CML-482
- branch funzionale: `codex/cml-483-guided-teacher-evaluation`

## Superfici applicative

### Legacy

- `index.html`
- `_published_snapshot/netlify-current/index.html`

Le due copie sono una coppia vincolata e devono restare identiche. CML-483 non le modifica.

### React

- `curman-react/`

È la superficie su cui sono attivi i percorsi B02 e B03, il contesto di applicabilità e il registro delle versioni. CML-483 interviene qui.

## Delta CML-483

- nuovo componente `GuidedTeacherEvaluation`;
- inserimento nella Home React;
- persistenza locale versionata;
- esportazione JSON locale;
- nessuna dipendenza nuova;
- nessuna modifica a store, curricoli, Gap, decisioni o formati `.cml`.

## Rischi di allineamento locale

1. Una copia locale precedente a CML-482 non contiene la baseline React necessaria.
2. Un `main` locale con commit propri non deve essere resettato in modo distruttivo.
3. Modifiche locali non committate in `HomeView.tsx` possono produrre conflitti.
4. Non va applicato manualmente lo stesso percorso al runtime legacy: creerebbe due implementazioni divergenti.
5. Un merge su `main` di modifiche in `curman-react/**` è release-affecting e attiva la pipeline Pages prevista dal repository.

## Procedura locale raccomandata

```bash
git status --short --branch
git log --oneline --decorate -5
git fetch origin --prune
```

Con working tree pulita e `main` senza commit locali:

```bash
git switch main
git pull --ff-only origin main
git switch --track origin/codex/cml-483-guided-teacher-evaluation
```

Con commit locali da conservare:

```bash
git switch -c backup/local-before-cml483
git switch main
git pull --ff-only origin main
git switch -c local/cml-483 origin/codex/cml-483-guided-teacher-evaluation
```

Con modifiche non committate, creare prima un commit su branch dedicato oppure usare uno stash nominato; non eseguire reset distruttivi.

## Controlli locali

```bash
cd curman-react
npm ci
npm run lint
npm run test:b01
npm run test:b02
npm run test:b03
npm run test:cml478
npm run test:cml479
npm run test:cml480
npm run test:cml482
npm run build
```

Dalla radice:

```bash
node tools/check-app-pair.mjs
node scripts/validate-curriculum-data.mjs
node scripts/runtime-shape-test.mjs
git diff --check
```

## Decisione

Allineare il locale al branch remoto React; mantenere invariata la coppia legacy fino a una decisione esplicita di prodotto.
