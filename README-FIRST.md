# CurManLight — pacchetto di recupero e impostazione repo

Questo pacchetto serve a mettere in sicurezza il lavoro su `C:\Users\anton\CurManLight` prima di intervenire sull'app pubblicata su Netlify.

## Uso consigliato

1. Scaricare e decomprimere questo pacchetto.
2. Copiare tutto il contenuto nella cartella:

```text
C:\Users\anton\CurManLight
```

3. Aprire la cartella con Visual Studio Code.
4. Aprire il terminale integrato ed eseguire:

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
.\SETUP_CURMANLIGHT_REPO.ps1
```

Lo script:
- crea le cartelle documentali mancanti;
- inizializza Git solo se `.git` non esiste;
- aggiunge un `.gitignore` prudente se assente;
- registra i materiali di handoff;
- crea un commit di baseline se ci sono file non committati.

## Regola operativa

I prototipi `CML-001` e `CML-002` sono conservati in `_handoff/generated/` e non devono sostituire l'app esistente.

Lo sviluppo corretto è `CML-001R`: integrazione conservativa delle viste e dei contenuti, preservando le logiche dello strumento pubblicato.
