# Report: CML-345 — Dashboard Export and Navigation Coherence Microfix

## Problema
Audit remoto post-deploy ha evidenziato incoerenze operative residue su CTA dashboard, lessico di navigazione e distinzione tra salvataggio locale ed esportazioni istituzionali.

## Interventi applicati
- CTA `Esporta` nel cruscotto allineata a `setTab('esportazioni')`.
- Lessico navigazione principale uniformato a `Curricolo`.
- Etichetta utente `Definitivo` sostituita con `Finale in verifica` dove pertinente.
- Titolo riepilogo aggiornato in `Curricolo finale in verifica`.
- Microcopy aggiunta in `File e salvataggio` per distinguere:
  - salvataggio locale browser
  - produzione documenti e file di lavoro in `Esportazioni`

## Runtime pair aggiornata
- `index.html`
- `_published_snapshot/netlify-current/index.html`

## Verifiche
- `git diff --check`: PASS
- validator curriculum: PASS
- shape test runtime: PASS (14/14)
- parita root/snapshot sui marker CML-345: PASS
- smoke Playwright 8/8: PASS

## Confini rispettati
- Nessuna modifica a:
  - schema `.cml`
  - dati disciplinari
  - validatori
  - import/export model
  - logiche di ruolo

## Esito
- Ready local, non pushed.
- Nessun deploy eseguito.

## Verdict
`CML_345_DASHBOARD_EXPORT_AND_NAVIGATION_COHERENCE_MICROFIX_READY_LOCAL_NOT_PUSHED`
