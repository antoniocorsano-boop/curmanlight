# Skill: `cml-sync`

## 1. Nome e Scopo
**Skill**: `cml-sync`
**Scopo**: Sincronizzare commit locali già completati e verificati su origin/main, standardizzando le slice di tipo `*-SYNC` (CML, SKB, OPS).

## 2. Quando usarla
- Durante l'esecuzione di slice di tipo `SYNC` (es. `CML-XXX-SYNC`, `SKB-XXX-SYNC`, `CML-OPS-XXX-SYNC`).
- Quando il commit locale è già stato creato e verificato.
- Quando il working tree è atteso pulito.
- Quando non è richiesto alcun deploy automatico.

## 3. Quando NON usarla
- Se la slice non è ancora stata committata.
- Se il working tree è sporco.
- Se il branch corrente non è `main`.
- Se HEAD locale e origin/main non sono coerenti (es. divergenza non prevista).
- Se i file nel commit sono fuori dallo scope autorizzato della slice.
- Se sono necessarie correzioni al runtime o ai dati.
- Per eseguire deploy.

## 4. Input Richiesti
Prima di procedere, identifica:
- **Task/Slice Name**: (es. `CML-OPS-003-SYNC`)
- **HEAD locale atteso**: hash del commit da pushare.
- **origin/main atteso**: hash attuale del remoto.
- **Messaggio commit atteso**: testo esatto del commit.
- **File autorizzati**: elenco dei file che devono essere presenti nel commit.
- **Invarianti**: set di elementi che non devono essere stati modificati.
- **Validazioni specifiche**: eventuali comandi di test richiesti per il tipo di slice.

## 5. Preflight Standard
Eseguire i seguenti comandi e analizzare l'output:
```bash
git status --short --branch
git rev-parse --short HEAD
git rev-parse --short origin/main
git log --oneline -8
git show --stat --name-status --oneline HEAD
git diff --check HEAD~1..HEAD
git diff HEAD~1..HEAD --name-only
```

## 6. Regole di Blocco
**Bloccare l'operazione (NON FARE PUSH) se**:
- HEAD locale è diverso da quello atteso.
- origin/main è diverso da quello atteso.
- Il branch non è `main` o non è esattamente `ahead 1`.
- Il working tree non è pulito.
- I file modificati nel commit differiscono dallo scope autorizzato.
- `git diff --check` rileva errori di whitespace.
- Vengono rilevati token, API key, client ID o credenziali nei file modificati.
- Viene richiesto un deploy implicitamente.
- Qualsiasi condizione di preflight non è verificabile.

## 7. Validazioni Opzionali per Tipo Slice
A seconda della slice, eseguire prima del push:
- **Data Preparation**: `node tools/validate-cml-normalized-curriculum.mjs`
- **Runtime/Test**: `node tools/test-runtime-mappa-dati-shape.mjs`
- **Docs-only**: Verifica rigorosa di scope + `git diff --check`.
- **SKB**: Scan specifico per secret/client ID.

## 8. Push Controllato
Se e solo se tutte le condizioni di preflight e validazione passano:
```bash
git push origin main
```
**Divieti**:
- Non fare deploy.
- Non creare nuovi commit durante la sync.

## 9. Validazione Post-Push
Verificare l'allineamento remoto:
```bash
git status --short --branch
git rev-parse --short HEAD
git rev-parse --short origin/main
git log --oneline -8
```

## 10. Formato Output Finale
Imporre l'uso di Markdown standard. **Divieto assoluto di tabelle box-drawing larghe**.

L'output deve contenere:
1. **Output finale breve** (Tabella Markdown compatta)
2. **Conferme obbligatorie** (Elenco breve di invarianti e check)
3. **Stato consolidato** (Parametri CML/SKB/OPS)
4. **Report completo** (Solo se richiesto, per audit complessi o in caso di errori; altrimenti indicare solo percorso file e decisioni critiche)
5. **Verdict finale**

## 11. Template Output Finale (Tabella Compatta)

| Campo | Valore |
|---|---|
| Task | ... |
| Branch | ... |
| HEAD locale | ... |
| HEAD origin/main | ... |
| Push eseguito | sì/no |
| Main allineato | sì/no |
| Working tree | ... |
| Deploy | non eseguito |
| Scope | ... |
| File nel commit | ... |
| Prossima slice consigliata | ... |
| Verdict | ... |

## 12. Divieti di Output
- NO tabelle box-drawing larghe.
- NO diciture `Thought for`.
- NO log terminali completi e ridondanti.
- NO troncamento di campi critici (hash, messaggi commit).
- NO verdict abbreviati o corrotti.
- NO invenzione dello stato remoto.

## 13. Verdict Standard
- Successo: `*_SYNC_CLOSED_REMOTE`
- Blocco: `*_SYNC_BLOCKED`
- Necessaria verifica: `*_SYNC_VERIFY_REQUIRED`
