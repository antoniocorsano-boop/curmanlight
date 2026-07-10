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
| [comando] | [scopo] | [PASS/FAIL] |

## Esiti

[Dettaglio degli esiti: cosa ha funzionato, cosa no, anomalie riscontrate]

## Verifica della coppia applicativa

[Se applicabile: esito del confronto tra index.html e _published_snapshot/netlify-current/index.html]

## Rischi residui

- [elenco rischi non risolti o parzialmente risolti]

## Stato Git finale

```
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

## Pubblicazione

| Campo | Valore |
|-------|--------|
| Pubblicazione eseguita | si/no |
| Deploy attivato | si/no |
| Smoke test post-deploy | [esito o N/A] |

## Verdetto

```
CML_XXX_[NOME_BREVIO]_[STATO]
```

Esempi:
- `CML_XXX_FEATURE_X_READY_LOCAL_NOT_PUSHED`
- `CML_XXX_DOCS_UPDATE_PUSHED_REMOTE_NOT_PUBLISHED`
- `CML_XXX_RUNTIME_FIX_PUBLISHED_VERIFIED`
- `CML_XXX_VALIDATION_FAILED`

Il verdetto deve essere esplicito e verificabile. Non usare `PASS` in modo generico senza indicare cosa e stato controllato.

---

> **Dichiarazione**: Push [eseguito/non eseguito]. Pubblicazione [eseguita/non eseguita].
