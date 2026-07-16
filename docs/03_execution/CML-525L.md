# CML-525L — Draft Proposal Editor, Evidence Panel and Local Validation Summary

## Obiettivo

Aggiungere un editor React controllato per la revisione umana delle proposte assistite, mantenendo sempre visibili testo originario, target, evidenze e risultato della validazione locale.

## Modifiche

- `DraftProposalEditor` controllato tramite `draft` e `onChange`;
- modifica limitata a `proposedText` e stato di revisione;
- testo originario generato non modificabile;
- pannello evidenze con fonte, localizzatore ed estratto;
- riepilogo locale con esito, severità e readiness di esportazione docente;
- associazione deterministica delle finding alla proposta interessata;
- gate `npm run test:cml525l`.

## Confini

Nessuna promozione o scrittura canonica, nessuna approvazione automatica, nessun backend, cloud sync, autenticazione o telemetria. Il componente non salva autonomamente: la persistenza resta sotto il controllo della shell e del repository CML-525I/J/K.

## Validazione

```bash
cd curman-react
npm run test:cml525g
npm run test:cml525h
npm run test:cml525i
npm run test:cml525j
npm run test:cml525k
npm run test:cml525l
npm run lint
npm run build
```

```text
CML_525L_DRAFT_PROPOSAL_EDITOR_EVIDENCE_PANEL_AND_LOCAL_VALIDATION_SUMMARY_READY_FOR_REVIEW
```
