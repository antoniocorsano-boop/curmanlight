# Contribuire a CurManLight

## Principi

- **Zero dipendenze runtime** — non introdurre framework o package manager
- **Validazione umana** — nessuna decisione curricolare è automatizzata
- **Tracciabilità** — ogni modifica è documentata in `docs/REPO-MOVELOG.md`

## Processo

1. Verificare lo stato del repository (`git status`, `git log`)
2. Identificare il tipo di slice (docs-only, runtime, curriculum, OPS)
3. Eseguire preflight: validatore, shape test, `git diff --check`
4. Committare con messaggio descrittivo
5. Documentare in `docs/REPO-MOVELOG.md`

## Linee Guida

- Una slice per commit
- Messaggi di commit in inglese: `tipo: descrizione`
- Non modificare il runtime senza slice autorizzata
- Non modificare dati curricolari senza validazione
- Seguire lo stile del codice esistente
