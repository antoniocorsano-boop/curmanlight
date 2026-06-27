# CML-210BS — EDUCAZIONE_FISICA_RUNTIME_STATIC_MAP_REGENERATION

Data: 2026-06-28

## 1. Scopo

Rigenerare la mappa runtime statica di Educazione Fisica in `_published_snapshot/netlify-current/index.html` per renderizzare il polish contenutistico CML-210A.

## 2. File modificati

- `_published_snapshot/netlify-current/index.html`

## 3. Controlli

| Check | Esito |
|---|---|
| JSON validator | 14/14 PASS, 0 errori |
| Shape test | 14/14 PASS |
| Educazione Fisica runtime | S=7, N=4, P=7, D=0 |
| CML-210A wording presente | Sì |
| Altre discipline | Invariate |
| git diff --check | Pulito |
| Secret scan | Pulito |
| Manual deploy | Nessuno |
| Push | `53013df` |

## 4. Esito pubblico

URL: https://antoniocorsano-boop.github.io/curmanlight/#cur-EducazioneFisica

- HTTP 200 OK
- App carica
- Hash `#cur-EducazioneFisica` confermato
- `benessere` presente nel DOM (CML-210A wording visibile)
- Educazione Fisica selezionabile
- Contenuto CML-210A visibile

## 5. Verdetto

`CML_210BS_EDUCAZIONE_FISICA_RUNTIME_STATIC_MAP_REGENERATION_COMPLETE`

## 6. Commits

| Step | Commit |
|---|---|
| Start | `39c4f4a` |
| CML-210BS | `53013df` |
| Pushed | `53013df` |
