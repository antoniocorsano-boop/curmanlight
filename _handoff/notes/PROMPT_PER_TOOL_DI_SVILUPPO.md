# Prompt per tool di sviluppo locale

Lavoriamo nella cartella:

```text
C:\Users\anton\CurManLight
```

Obiettivo immediato:
preparare il repository locale e mappare lo strumento esistente prima di qualsiasi modifica.

Regole:
- Non sostituire l'app con `_handoff/generated/cml001` o `_handoff/generated/cml002`.
- I prototipi sono solo riferimento di interfaccia e contenuti.
- Preservare le logiche già presenti nello strumento pubblicato su Netlify `curmanlight`.
- Non introdurre backend, API, Netlify Forms, autenticazione o database.
- Non modificare export/stampa/salvataggi locali prima di averli mappati.

Step 1:
Esegui:

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
.\SETUP_CURMANLIGHT_REPO.ps1
```

Step 2:
Leggi i file esistenti dell'app, in particolare:
- `index.html`
- eventuali file JS/CSS
- eventuali cartelle `src`, `data`, `assets`
- `_handoff/CURMANLIGHT_CONTEXT.md`
- `_handoff/CML-001R-INTEGRATION-SAFE-PLAN.md`

Step 3:
Produci un report, senza modificare codice, con:
- elenco file dell'app;
- viste presenti;
- funzioni attive;
- pulsanti/azioni;
- uso di `localStorage` o `sessionStorage`;
- export/stampa;
- rischi di regressione;
- proposta di micro-intervento CML-001R.

Output richiesto:

```text
CML_001R_EXISTING_LOGIC_MAP_READY
```
