# CurManLight — contesto operativo

## Progetto pubblicato

- Nome Netlify rilevato: `curmanlight`
- URL pubblico: `https://curmanlight.netlify.app/`
- Stato noto: distribuzione pronta
- Moduli Netlify: non attivi

## Decisione operativa

Il sito pubblicato non deve essere sovrascritto con i prototipi autonomi CML-001/CML-002.

La linea corretta è:

```text
CML-001R — Integrazione conservativa su curmanlight
```

## Obiettivo CML-001R

Integrare viste guidate, sezioni generali in sola lettura e contenuti del curricolo ufficiale preservando le logiche già presenti nello strumento pubblicato.

## Materiali inclusi

- `_handoff/sources/Curricolo disciplinare WORD.docx`: fonte originale caricata dall'utente.
- `_handoff/generated/cml001`: primo prototipo autonomo con 7 viste.
- `_handooff/generated/cml002`: seconda bozza con contenuti estratti dal curricolo.
- `_handoff/zips`: archivi e versioni HTML singole generati nella chat.

## Regole di sicurezza

- Non cancellare funzioni esistenti.
- Non cambiare salvataggi locali esistenti senza audit.
- Non introdurre backend, autenticazione, API, Netlify Forms o database.
- Non pubblicare su Netlify senza verifica locale.
- Non usare i prototipi come sostituzione integrale dell'app.
