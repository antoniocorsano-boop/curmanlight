# CML-137 — Backup Label Runtime Microcopy Alignment

## Riferimento

CML-136 — BACKUP_LABEL_USER_FACING_CLARITY_AUDIT (Opzione C — Sostituzione differenziata)

## Commit iniziale

`15b0cbc` — docs: audit CML backup user-facing label

## File modificato

`_published_snapshot/netlify-current/index.html`

## Sostituzioni applicate

**17 sostituzioni (18 occorrenze fisiche):**

| Area                          | Occorrenze | Sostituzione                                                     |
| ----------------------------- | ---------- | ---------------------------------------------------------------- |
| Pulsante breve (quick action) | 1          | `Backup` → `Salva copia`                                         |
| Pulsante largo (export)       | 1          | `Backup locale` → `Copia di sicurezza`                           |
| Pulsante import               | 1          | `Importa backup` → `Importa copia`                               |
| Titolo sezione                | 1          | `Backup e dati` → `Copia di sicurezza e dati`                    |
| Descrizione                   | 1          | `backup` → `copia di sicurezza`                                  |
| Alert/bloccanti               | 4          | `Backup` → `Copia di sicurezza` (2 con anche `Markdown`→`Testo`) |
| Status message                | 2          | `backup` → `copia di sicurezza`                                  |
| Confirm dialog                | 2          | `backup`/`Backup` → `copia di sicurezza`/`Copia di sicurezza`    |
| Toast                         | 2          | `Backup` → `Copia di sicurezza`                                  |
| Guide/hint                    | 4          | `Backup` → `Copia di sicurezza`                                  |

## Residui `backup` (4 — tutti tecnici)

- `id="local-backup-input"` (attributo HTML)
- `function exportLocalBackup()` (nome funzione)
- `function importLocalBackup(event)` (nome funzione)
- `` `Backup_CurricoloVerticale_...json` `` (nome file download)

## Perimetro non toccato

- JSON disciplinari, validator `validate-cml-normalized-curriculum.mjs`, schema `.cml`
- Import/export logica, validazione dipartimentale
- CSS, layout, icone, classi
- Funzioni JS, variabili, chiavi dati, attributi tecnici

## Esiti

| Controllo                          | Esito                         |
| ---------------------------------- | ----------------------------- |
| `git diff --check`                 | ✅ pulito                     |
| Validatore                         | ✅ 7/94, `overallValid: true` |
| 18 nuove etichette presenti        | ✅                            |
| 0 vecchi label user-facing residui | ✅                            |
| Modifiche solo testuali            | ✅                            |

## Verdetto

`CML_137_BACKUP_LABEL_RUNTIME_MICROCOPY_ALIGNMENT_READY`
