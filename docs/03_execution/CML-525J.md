# CML-525J — Assisted Draft Application Service and Recovery-Oriented React Integration

## Obiettivo

Aggiungere un application service sopra il repository locale CML-525I e un hook React headless per salvataggio, checkpoint, conflitto e recovery.

## Modifiche

- service con `inspect`, `save`, `checkpoint`, `restore` e `discardRecovery`;
- conflitti di versione esposti come outcome strutturati;
- checkpoint recovery vincolato alla versione stabile;
- hook `useAssistedDraftWorkspace` con stati espliciti;
- ispezioni obsolete ignorate dopo il cambio di draft;
- recovery rilevato all'apertura e mai applicato automaticamente;
- gate `npm run test:cml525j`.

## Confini

Nessuna nuova schermata, nessun autosave temporizzato, nessuna modifica ai dati canonici o allo schema `.cml`, nessun backend, autenticazione, cloud sync o telemetria.

## Validazione

```bash
cd curman-react
npm run test:cml525g
npm run test:cml525h
npm run test:cml525i
npm run test:cml525j
npm run lint
npm run build
```

```text
CML_525J_ASSISTED_DRAFT_APPLICATION_SERVICE_AND_RECOVERY_REACT_INTEGRATION_READY_FOR_REVIEW
```
