# Report CML-256 — Exports Role-Based Clarity Live Smoke

**Data:** 2026-07-02

## Sintesi esecutiva

Live smoke del commit `af74ce2` (CML-255) su GitHub Pages. Nuovo blocco "Quale esportazione usare?" confermato nel bundle live con tutte e 4 le voci ruolo. Home, Guida, Processo, Esportazioni funzionanti. Nessuna regressione.

## Preflight Git

- Branch: `main`
- `main...origin/main` — allineato
- Working tree: pulito
- HEAD locale: `af74ce2` — coincidente con HEAD remoto

## URL live

`https://antoniocorsano-boop.github.io/curmanlight/`

## Verifica HTTP

HTTP 200 — OK

## Smoke live

| Area | Esito |
|------|-------|
| Home — "Percorso di lavoro" | ✅ |
| Guida — "Cosa fare in base al ruolo" | ✅ |
| Processo — "Processo di revisione" | ✅ |
| Esportazioni — "Esportazioni e consegne" | ✅ |
| Discipline — Matematica presente | ✅ |

## Nuovo blocco CML-255

| Elemento | Bundle live | Esito |
|----------|-------------|-------|
| "Quale esportazione usare?" | Presente | ✅ |
| Docente → Bozza disciplina, .cml proposta | Presente | ✅ |
| Dipartimento → Confronto modifiche, .cml esito | Presente | ✅ |
| Referente → Report, Documento finale | Presente | ✅ |
| Tutti → Copia di sicurezza | Presente | ✅ |
| `.esport-role-guide` occorrenze | 11 | ✅ |

## Console

Nessun errore bloccante evidente.

## Checklist

- [x] repository preflight verified
- [x] local and remote HEAD aligned before smoke
- [x] live URL HTTP 200
- [x] GitHub Pages deployment verified (content check)
- [x] Home smoke passed
- [x] Guide smoke passed
- [x] Processo navigation passed
- [x] Esportazioni smoke passed
- [x] discipline selection passed
- [x] new guide block verified (5/5 elements)
- [x] console check completed
- [x] runtime unchanged
- [x] no manual deploy executed
- [x] no force push used
- [x] verdict recorded

## Verdict

`CML_256_EXPORTS_ROLE_BASED_CLARITY_LIVE_SMOKE_READY_LOCAL_NOT_PUSHED`
