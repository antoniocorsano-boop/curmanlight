# CML-525N — Interactive Demo Smoke, Recovery Flow Audit and User-Facing Guidance

## Obiettivo

Verificare il percorso dimostrativo delle bozze assistite con uno smoke browser reale e rendere comprensibili i passaggi a un docente non tecnico.

## Modifiche

- guida in tre passaggi nella vista `Laboratorio assistito`;
- chiarimento che i dati restano solo nel browser;
- smoke Playwright desktop per modifica, salvataggio, reload, checkpoint e scarto recovery;
- smoke mobile per raggiungibilità di guida, evidenze e decisione recovery;
- controllo assenza di errori console;
- gate statico `test:cml525n` e comando interattivo `test:cml525n:e2e`.

## Confini

- dati esclusivamente dimostrativi;
- nessun backend, autenticazione, telemetria o servizio remoto;
- nessun autosave temporizzato;
- nessuna applicazione automatica del recovery;
- nessuna scrittura canonica.

## Comandi

```bash
cd curman-react
npm run test:cml525n
npm run build
npm run lint
npm run preview -- --host 127.0.0.1
npm run test:cml525n:e2e
```

## Criterio di chiusura

La slice è chiusa solo con CI, audit regressivi, preview e review verdi.
