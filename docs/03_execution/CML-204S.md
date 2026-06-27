# CML-204S — CONTROLLED_REBASE_AND_PUSH_EDUCAZIONE_FISICA_GAP_MODEL

Data: 2026-06-27

## Scopo

Eseguire la sincronizzazione controllata e il push del commit CML-204 (`docs: model Educazione Fisica content quality gaps`) dopo verifica di allineamento con `origin/main`.

Slice docs-only + controlled push. Non modifica JSON, runtime, tool o SchoolKB.

## Baseline tecnica

| Parametro | Valore |
|---|---|
| Branch | `main` |
| Commit CML-204 | `7d43467` |
| origin/main prima del push | `aff4981` |
| HEAD prima del push | `7d43467` |
| HEAD..origin/main | vuoto (nessun commit remoto non presente in HEAD) |
| origin/main..HEAD | `7d43467` (solo CML-204) |

## 1. Verifica stato

```bash
git status -sb
## main...origin/main [ahead 1]

git log --oneline --graph --decorate --max-count=12
# Output:
# * 7d43467 (HEAD -> main) docs: model Educazione Fisica content quality gaps
# * aff4981 (origin/main, origin/HEAD) docs: audit CML UX flow and curriculum governance
# * e68d22d docs: close cml workflow ux hardening cycle
# ...

git log --oneline origin/main..HEAD
# 7d43467 docs: model Educazione Fisica content quality gaps

git log --oneline HEAD..origin/main
# (vuoto)
```

## 2. Esito verifica

HEAD è cleanly ahead di `origin/main` di un solo commit (CML-204). Non sono presenti commit remoti non incorporati nel HEAD. Non è necessario alcun rebase.

## 3. Sequenza eseguita

```bash
# Nessun fetch necessario — origin/main already reachable
# Nessun rebase necessario — linear history, no divergence

# Validazioni pre-push
node tools/validate-cml-normalized-curriculum.mjs  # 14/14 PASS
node tools/test-runtime-mappa-dati-shape.mjs        # 14/14 PASS
git diff --check                                     # pulito
```

## 4. Push

```bash
git push origin main
```

Push eseguito con successo. `origin/main` aggiornato a `7d43467`.

## 5. Validazioni post-push

```bash
git status -sb
## main...origin/main

git log --oneline -1 origin/main
# 7d43467 docs: model Educazione Fisica content quality gaps

git log --oneline -1
# 7d43467 docs: model Educazione Fisica content quality gaps
```

## 6. Contenuto sincronizzato

| File | Status |
|---|---|
| `docs/03_execution/CML-204.md` | pushato |
| `report/CML-204_educazione_fisica_detailed_gap_model.md` | pushato |
| `docs/REPO-MOVELOG.md` | invariato in questo commit (CML-204 già registrato) |

## 7. Invarianti rispettate

- docs-only + controlled push;
- nessun file `.normalized.json` modificato;
- nessuna modifica runtime;
- nessuna modifica a `_published_snapshot/netlify-current/index.html`;
- root `index.html` invariato;
- nessuna modifica a `content/curriculum/`;
- nessuna modifica a `tools/`;
- nessuna modifica `.claude/`;
- nessuna modifica `CLAUDE.md`;
- nessuna modifica SchoolKB;
- schema `.cml` invariato;
- export/import invariati;
- funzioni evidenze/UDA invariate;
- nessuna credenziale/client ID/token;
- nessuna dipendenza;
- nessun secret;
- nessun deploy (solo push documentale) dopo la prossima slice contenutistica (e comunque solo dopo validazione umana).

## 8. Verdetto finale

`CML_204S_CONTROLLED_REBASE_AND_PUSH_EDUCAZIONE_FISICA_GAP_MODEL_READY`
