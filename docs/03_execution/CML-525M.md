# CML-525M — End-to-End Assisted Draft Workspace Composition and Local Demo Route

## Obiettivo

Comporre repository locale, application service, shell recovery e editor delle proposte in un percorso dimostrativo completo e locale.

## Modifiche

- nuova vista `Laboratorio assistito` nel percorso curricolare;
- dataset dimostrativo privo di dati personali;
- persistenza IndexedDB/Dexie separata per la demo;
- caricamento della versione stabile già salvata;
- editor, evidenze e validazione locale integrati;
- stati di revisione allineati al contratto del validator;
- gate `npm run test:cml525m`.

## Confini

Nessun backend, autenticazione, telemetria, autosave temporizzato, promozione canonica o modifica dello schema `.cml`. La demo non usa dati reali e non aggiorna il curricolo ufficiale.

## Validazione

```bash
cd curman-react
npm run test:cml525g
npm run test:cml525h
npm run test:cml525i
npm run test:cml525j
npm run test:cml525k
npm run test:cml525l
npm run test:cml525m
npm run lint
npm run build
```

```text
CML_525M_END_TO_END_ASSISTED_DRAFT_WORKSPACE_AND_LOCAL_DEMO_ROUTE_READY_FOR_REVIEW
```
