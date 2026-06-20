# CML-001R — Piano di integrazione conservativa

## Fase 1 — Baseline

1. Aprire `C:\Users\anton\CurManLight` in Visual Studio Code.
2. Eseguire `SETUP_CURMANLIGHT_REPO.ps1`.
3. Verificare `git status --short --branch`.
4. Identificare i file effettivi dell'app pubblicabile: `index.html`, eventuali `app.js`, `style.css`, cartelle `src/`, `data/`, `assets/`.

## Fase 2 — Mappatura logiche esistenti

Produrre un report con:

- viste attuali;
- funzioni attuali;
- chiavi `localStorage` o `sessionStorage`;
- pulsanti/azioni;
- funzioni di esportazione/stampa;
- dati caricati;
- eventuali dipendenze.

Verdetto atteso:

```text
CML_001R_EXISTING_LOGIC_MAP_READY
```

## Fase 3 — Integrazione minima

Aggiungere solo:

- vista o sezione `Documento generale` in sola lettura;
- contenuti essenziali da curricolo ufficiale;
- badge chiaro `consultazione — non modificabile`;
- collegamento dall'home o dal menu esistente;
- nessuna modifica alle logiche operative.

Verdetto atteso:

```text
CML_001R_READONLY_GENERAL_SECTIONS_INTEGRATED
```

## Fase 4 — Verifica

Controllare:

- app apre localmente;
- funzioni preesistenti ancora operative;
- salvataggi locali non persi;
- esportazione/stampa invariata;
- sezioni generali non modificabili;
- nessun backend/API/auth introdotto.

Verdetto finale:

```text
CML_001R_LOGICHE_ESISTENTI_PRESERVATE
```
