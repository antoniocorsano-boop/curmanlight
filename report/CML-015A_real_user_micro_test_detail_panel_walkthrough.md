# CML-015A — Real User Micro-Test: Detail Panel Walkthrough

## Summary

Micro-test simulato sul percorso utente del dettaglio migliorato. Verifica che un docente/revisore riesca a navigare il flusso: voce → dettaglio → confronto → fonti → decisione.

## Preflight

- **Branch:** `cml-008r-fix-markdown-decision-summary`
- **HEAD:** `077e221`
- **URL live:** https://curmanlight.netlify.app
- **Working tree:** Pulita
- **Modifiche runtime:** ❌ Nessuna | **Deploy:** ❌ Nessuno

## Risultati 9 step

| # | Azione | Esito |
|---|---|---|
| 1 | Aprire lo strumento | ✅ |
| 2 | Entrare nella revisione | ✅ |
| 3 | Individuare voce da controllare | ✅ |
| 4 | Aprire il dettaglio | ✅ |
| 5 | Riconoscere fonti e riferimenti | ✅ |
| 6 | Distinguere testo vigente/proposta | ✅ |
| 7 | Capire differenze evidenziate | ✅ |
| 8 | Individuare "Personalizza testo" | ✅ |
| 9 | Validare/respingere/personalizzare | ✅ |

9/9 ✅ chiaro. Nessun ⚠️ dubbio. Nessun ❌ bloccato.

## Regressioni

Tutte le aree preservate. Nessuna regressione.

## Raccomandazione

CML-015A passa senza ambiguità sostanziali. Chiudere fase UX dettaglio. Non servono micro-fix sul dettaglio.

Prossimo ciclo consigliato: qualità dei contenuti disciplinari / fonti / documento esportato.

## Verdetto

```
CML_015A_REAL_USER_DETAIL_PANEL_MICRO_TEST_READY
```
