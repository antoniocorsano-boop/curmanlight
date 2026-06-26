# Skill: `cml-docs-only-slice`

## 1. Nome e Scopo

**Skill**: `cml-docs-only-slice`

**Scopo**: gestire slice documentali senza modificare runtime, dati curricolari, tools o SchoolKB fuori scope.

## 2. Quando Usarla

- Contratti operativi o di sistema.
- Audit documentali.
- Execution docs in `docs/03_execution/`.
- Report in `report/`.
- Aggiornamenti mirati del movelog.
- Pianificazione e closure docs-only.

## 3. Quando NON Usarla

- Modifiche runtime.
- Modifiche a `content/curriculum/`.
- Modifiche a `tools/`.
- Integrazione dati.
- Deploy.
- Sync remota.
- Creazione o modifica hook.
- OAuth o SchoolKB runtime.

## 4. Input Richiesti

- Task ID.
- Baseline HEAD/origin.
- Scope autorizzato.
- Scope vietato.
- File documentali attesi.
- Verdict atteso.

## 5. Preflight Standard

Eseguire:

```bash
git status --short --branch
git rev-parse --short HEAD
git rev-parse --short origin/main
git log --oneline -8
git diff --check
```

## 6. Regole di Blocco

Bloccare se:

- Il working tree contiene file fuori scope.
- Il branch non e' `main`.
- La baseline non e' coerente con la slice.
- Runtime, dati o tools sono modificati.
- Sono presenti credenziali o token.
- Si richiede deploy o push in una slice non sync.
- Esiste collisione con execution doc o report gia' presenti.

## 7. Struttura Minima Output Documentale

- Execution doc.
- Report.
- Voce movelog.
- Eventuale contratto solo se autorizzato dallo scope.

## 8. Validazioni

- `git diff --check`
- `git status --short --branch`
- `git diff --name-only`
- Verifica scope autorizzato.
- Verifica assenza segreti.

## 9. Commit

- Staging selettivo solo dei file autorizzati.
- Commit locale con messaggio richiesto dalla slice.
- Nessun push.
- Nessun deploy.

## 10. Formato Finale

- Markdown standard.
- Tabella compatta.
- Conferme obbligatorie.
- Stato consolidato.
- Report completo solo se necessario.

## 11. Divieti

- No box-drawing table.
- No `Thought for`.
- No log lunghi.
- No verdict troncati.
- No output duplicato.

## 12. Verdict Standard

- `*_READY`
- `*_BLOCKED`
- `*_VERIFY_REQUIRED`
