# CML-136 — Backup Label User-Facing Clarity Audit

## Fotografia iniziale

- **Branch:** `main`
- **HEAD:** `1342ec5`
- **origin/main:** `1342ec5`
- **Working tree:** pulito ✅
- **Validatore:** 7 file, 94 unità, `overallValid: true`, 0 errori ✅
- **Residui ignorati:** `.agents`, `skills-lock.json`, `Consultazione` ✅

## Ricerca occorrenze

- **File analizzato:** `_published_snapshot/netlify-current/index.html`
- **Totale occorrenze `backup`/`Backup`:** 24
- **Occorrenze tecniche (escluse):** 6 (ID input, nomi funzione, filename, chiave dati)
- **Occorrenze utente-facing:** 18

## Classificazione

### Per priorità

| Priorità | Conteggio | Descrizione                                                                    |
| -------- | --------- | ------------------------------------------------------------------------------ |
| P1       | 7         | Pulsanti (3) + messaggi di errore/alert bloccanti che possono disorientare (4) |
| P2       | 11        | Descrizioni, guide, toasts, confirm, status messages                           |
| P0/P3    | 0         | —                                                                              |

### Per area

| Area        | Conteggio | Dettaglio                                   |
| ----------- | --------- | ------------------------------------------- |
| Pulsanti    | 3         | `Backup`, `Backup locale`, `Importa backup` |
| Titoli      | 1         | `Backup e dati`                             |
| Descrizioni | 1         | `backup e report`                           |
| Guide/Hint  | 4         | Impostazioni, installazione, welcome        |
| Alert/Error | 3         | Backup non disponibile, non valido          |
| Confirm     | 2         | Importa, reset                              |
| Toast       | 2         | Backup scaricato, importato                 |
| Status      | 2         | "Usa un backup se disponibile" (×2)         |

## Opzione selezionata

**Opzione C — Sostituzione differenziata:**

| Contesto        | Testo attuale → Testo nuovo                                   |
| --------------- | ------------------------------------------------------------- |
| Pulsante breve  | `⬇️ Backup` → `⬇️ Salva copia`                                |
| Pulsante largo  | `⬇️ Backup locale` → `⬇️ Copia di sicurezza`                  |
| Pulsante import | `⬆️ Importa backup` → `⬆️ Importa copia`                      |
| Titolo sezione  | `💾 Backup e dati` → `💾 Copia di sicurezza e dati`           |
| Tutti gli altri | `backup`/`Backup` → `copia di sicurezza`/`Copia di sicurezza` |

## Perimetro raccomandato per CML-137

- **17 sostituzioni** in `_published_snapshot/netlify-current/index.html`
- Nessuna modifica a JSON disciplinari, validator, schema `.cml`, CSS, JS funzioni/variabili, import/export, validazione dipartimentale

## Residui tecnici non sostituiti

- ID input: `local-backup-input`
- Nomi funzione: `exportLocalBackup()`, `importLocalBackup()` (×2 dichiarazioni)
- Nome file: `Backup_CurricoloVerticale_...json`
- Chiave dati: `source:"...salvataggio locale"`

## Commit

- `docs: audit CML backup user-facing label`
- File committati: `docs/03_execution/CML-136.md`, `report/CML-136_backup_label_user_facing_clarity_audit.md`, `docs/REPO-MOVELOG.md`

## Verdetto

`CML_136_BACKUP_LABEL_CLARITY_AUDIT_READY`
