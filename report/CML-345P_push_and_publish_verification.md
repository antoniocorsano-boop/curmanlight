# Report: CML-345P — Push and Publish Verification

## Scope
Verifica operativa post-CML-345 su tre assi:
- stato Git locale/remoto;
- stato deploy GitHub Pages;
- comportamento runtime sulla pagina pubblica.

## Risultato sintetico
- Push CML-345 confermato su `main` al commit `8e3c725`.
- Deploy Pages associato al commit confermato come riuscito.
- Smoke remoto 9/9 PASS.

## Evidenze chiave
- Reconciliation pre-push: `HEAD=8e3c725`, `origin/main=598441a`.
- Push controllato: `598441a..8e3c725  main -> main`.
- Reconciliation post-push: `HEAD=8e3c725`, `origin/main=8e3c725`.
- Workflow run: `28696777749`, job `deploy` concluso `success`.
- URL pubblico verificato con cache-buster.

## Smoke remoto
1. CTA Esporta -> Esportazioni: PASS
2. Controlla voci -> Revisione + Da decidere attivo: PASS
3. Apri documento -> Curricolo finale in verifica: PASS
4. Tabbar: Curricolo, non Curriculum: PASS
5. Sotto-nav: Finale in verifica, non Definitivo: PASS
6. Riepilogo: Curricolo finale in verifica: PASS
7. Esportazioni: gruppi e pulsanti presenti: PASS
8. Guida: coerenza su scaricamenti in Esportazioni: PASS
9. Console: nessun errore JS bloccante: PASS

## Vincoli rispettati
- Nessuna modifica runtime.
- Nessuna modifica a dati, schema `.cml`, validatori, logiche import/export.

## Verdict
`CML_345P_PUSH_AND_PUBLISH_VERIFICATION_READY_LOCAL_NOT_PUSHED`
