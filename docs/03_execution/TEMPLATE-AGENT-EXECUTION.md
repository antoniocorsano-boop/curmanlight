# TEMPLATE-AGENT-EXECUTION.md — Modello di Rapporto di Esecuzione

> Copiare questo modello per ogni attivita. Compilare tutti i campi.

---

# [IDENTIFICATIVO] — [TITOLO]

## Stato

| Campo | Valore |
|-------|--------|
| Stato | [IN_PROGRESS / COMPLETED / BLOCKED] |
| Branch | [nome branch] |
| Commit iniziale | [hash] |
| Commit finale | [hash o N/A] |
| Data inizio | [YYYY-MM-DD] |
| Data fine | [YYYY-MM-DD o N/A] |

## Obiettivo

[Descrizione concisa e verificabile dell'obiettivo]

## Contesto iniziale

[Stato del repository prima dell'intervento: branch, commit, working tree, modifiche preesistenti]

## Perimetro

### File autorizzati

- [elenco file]

### File esclusi

- [elenco file]

### Modifiche ammesse

- [tipologia di modifiche consentite]

### Autorita documentale

- Movelog operativo: `docs/REPO-MOVELOG-v2.md`
- Archivio legacy escluso: `docs/REPO-MOVELOG.md`

## Analisi

[Risultati dell'analisi eseguita: punti di utilizzo, dipendenze, rischi identificati]

## Modifiche

[Descrizione concisa di ogni modifica effettuata]

## File modificati

| File | Tipo modifica | Righe aggiunte | Rimosse |
|------|---------------|----------------|---------|
| [file] | [aggiunta/modifica/rimozione] | [N] | [N] |

## Controlli eseguiti

| Comando | Scopo | Esito |
|---------|-------|-------|
| `git status --short --branch` | Stato working tree | [PASS/FAIL] |
| `git diff --check` | Conflitti whitespace | [PASS/FAIL] |
| `git diff --name-only origin/main...HEAD` | Perimetro e trigger release | [PASS/FAIL] |
| [comando] | [scopo] | [PASS/FAIL] |

## Esiti

[Dettaglio degli esiti: cosa ha funzionato, cosa no, anomalie riscontrate]

## Verifica della coppia applicativa

[Se applicabile: distinguere funzionamento di `check-app-pair.mjs` dallo stato PAIR_SYNC/PAIR_DIVERGED]

## Release-gate GitHub Pages

### Percorsi trigger presenti nel diff

| Percorso | Presente | Effetto se integrato in `main` |
|---|---|---|
| `_published_snapshot/netlify-current/**` | si/no | Deploy del contenuto legacy |
| `curman-react/**` | si/no | Build React e deploy Pages combinato |
| `.github/workflows/pages.yml` | si/no | Esecuzione del workflow Pages |

### Classificazione

| Campo | Valore |
|---|---|
| Push su branch dedicato | eseguito/non eseguito |
| PR aperta | si/no |
| Merge o push su `main` | eseguito/non eseguito |
| Deploy Pages atteso | si/no |
| Workflow Pages avviato | si/no/N/A |
| Pubblicazione verificata | si/no/N/A |

Una modifica React-only integrata in `main` deve essere classificata come release-affecting, anche se il runtime legacy non e stato modificato.

## Rischi residui

- [elenco rischi non risolti o parzialmente risolti]

## Stato Git finale

```text
[output di git status --short --branch]
[output di git log --oneline -3]
```

## Push

| Campo | Valore |
|-------|--------|
| Push eseguito | si/no |
| Branch remoto | [nome branch remoto o N/A] |
| Commit pushato | [hash o N/A] |
| Verifica post-push | [esito o N/A] |

## Integrazione

| Campo | Valore |
|---|---|
| PR | [numero/URL o N/A] |
| Merge eseguito | si/no |
| Commit di merge | [hash o N/A] |
| Trigger Pages presenti | [elenco o nessuno] |

## Pubblicazione

| Campo | Valore |
|-------|--------|
| Deploy attivato | si/no/N/A |
| Run workflow | [ID/URL o N/A] |
| Pubblicazione completata | si/no/N/A |
| Smoke legacy | [esito o N/A] |
| Smoke React preview | [esito o N/A] |

## Movelog

| Campo | Valore |
|---|---|
| `docs/REPO-MOVELOG-v2.md` aggiornato | si/no/non applicabile |
| `docs/REPO-MOVELOG.md` modificato | deve essere `no` per operazioni remote |

## Verdetto

```text
CML_XXX_[NOME_BREVIO]_[STATO]
```

Esempi:

- `CML_XXX_FEATURE_X_READY_LOCAL_NOT_PUSHED`
- `CML_XXX_DOCS_UPDATE_PUSHED_REMOTE_PR_OPEN_NOT_MERGED`
- `CML_XXX_REACT_CHANGE_MERGED_PAGES_DEPLOY_PENDING`
- `CML_XXX_RUNTIME_FIX_PUBLISHED_VERIFIED`
- `CML_XXX_VALIDATION_FAILED`

Il verdetto deve essere esplicito e verificabile. Non usare `PASS` in modo generico e non usare "non pubblicato" per una modifica che, una volta integrata in `main`, ha attivato il workflow Pages.

---

> **Dichiarazione**: distinguere sempre modifica locale, push su branch, PR, merge su `main`, deploy Pages e verifica pubblica.
