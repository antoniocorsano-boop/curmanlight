# CML-345P — Push Reconciliation and Deploy Verification

## 1. Obiettivo
Confermare in modo tracciabile lo stato post-slice CML-345:
- commit remoto allineato;
- deploy GitHub Pages riuscito;
- smoke pubblico remoto positivo.

## 2. Riconciliazione Git (Fase 1)
Comandi eseguiti:

```bash
git status --short --branch --untracked-files=all
git rev-parse --short HEAD
git rev-parse --short origin/main
git log --oneline --decorate -5
git ls-remote origin refs/heads/main
git branch -vv
```

Esito iniziale:
- `HEAD = 8e3c725`
- `origin/main = 598441a`
- classificazione: CML-345 presente solo in locale, non ancora pushata.

## 3. Push controllato (Fase 2A)
Comando eseguito:

```bash
git push origin main
```

Esito push:
- remoto aggiornato `598441a..8e3c725` su `main`.

Verifica post-push:

```bash
git status --short --branch --untracked-files=all
git rev-parse --short HEAD
git rev-parse --short origin/main
git ls-remote origin refs/heads/main
```

Esito post-push:
- `HEAD = 8e3c725`
- `origin/main = 8e3c725`
- branch locale allineato a remoto.

## 4. Verifica deploy Pages (Fase 3)
Run GitHub Actions rilevato sul commit atteso:
- Workflow: `Deploy CurManLight to GitHub Pages`
- Run: `28696777749`
- Head SHA: `8e3c72592d3e2726af2eae1033984f199b8de3ac`
- Job `deploy`: `success`.

Note:
- presente annotazione non bloccante su deprecazione Node.js 20 in alcune action;
- artefatto `github-pages` prodotto e deploy completato.

## 5. Smoke remoto pubblico (Fase 4)
URL verificato con cache-buster:
- `https://antoniocorsano-boop.github.io/curmanlight/?v=cml345-verify-...`

Checklist 9 punti:
1. Home/Cruscotto `Esporta` apre `Esportazioni`: PASS
2. `Controlla voci` apre `Revisione` con filtro `Da decidere` attivo: PASS
3. `Apri documento` apre `Curricolo finale in verifica`: PASS
4. Tabbar desktop mostra `Curricolo` (non `Curriculum`): PASS
5. Sotto-nav mostra `Finale in verifica` (non `Definitivo`): PASS
6. Vista riepilogo mostra `Curricolo finale in verifica`: PASS
7. Esportazioni mantiene gruppi e pulsanti: PASS
8. Guida coerente con `Tutti gli scaricamenti sono nel tab Esportazioni`: PASS
9. Nessun errore JavaScript bloccante in console: PASS

## 6. Perimetro e invarianti
- Nessuna modifica runtime in questa slice docs-only.
- Nessuna modifica dati curricolari.
- Nessuna modifica schema `.cml`.
- Nessuna modifica strumenti di validazione.
- Nessuna modifica logiche import/export.

## 7. Verdict
`CML_345P_PUSH_AND_PUBLISH_VERIFICATION_READY_LOCAL_NOT_PUSHED`
