# CML-276D — HOME DASHBOARD CONTROLLED PUBLICATION SYNC

Tipo slice: docs-only
Runtime modificato: no (salvo no-op marker tecnico gia pubblicato su main)
Deploy: tentato via GitHub Actions Pages
Push: non eseguito in questa slice di report
Verdict atteso: `CML_276D_HOME_DASHBOARD_CONTROLLED_PUBLICATION_SYNC_BLOCKED_BY_PAGES_DEPLOYMENT_QUEUE`

## Contesto

CML-276C ha verificato che il runtime live era stale rispetto a main. CML-276D apre un tentativo controllato di publication sync su GitHub Pages.

## Obiettivo

- forzare deploy Pages del runtime aggiornato;
- verificare allineamento live con main;
- chiudere il gap tra codice pubblicato e codice servito.

## Azioni eseguite

1. trigger manuale workflow `pages.yml` (run `28598881752`) su branch `main`;
2. verifica run: step `Deploy to GitHub Pages` rimasto in stato `deployment_queued` fino a timeout;
3. analisi run fallita precedente (`28597650676`): timeout queue e cancellazione deploy;
4. retry manuale (`28599127618`) fallita con `Deployment cancelled`;
5. push tecnico su nuovo SHA (`975e40d`) con marker no-op in root/snapshot per nuova publication attempt;
6. run push-triggered (`28599380782`) fallita con errore esplicito:
   - `Deployment request failed ... due to in progress deployment. Please cancel 1380aa6... first or wait for it to complete.`
7. tentativo cancel API del deployment bloccante (`1380aa6...`) respinto dal backend con stato incoerente (`finished` ma ancora lock lato deploy);
8. ulteriore retry (`28599570256`) rimasto in coda/in_progress, poi cancellazione richiesta per fermare attesa indefinita.

## Evidenze tecniche

- live URL continua a servire Home vecchia e modale automatico;
- raw `main` contiene Home nuova (banner inline, no autowelcome);
- lock deployment GitHub Pages impedisce nuovi deploy sullo SHA aggiornato.

## Invarianti

- nessuna modifica a dati curricolari, schema `.cml`, export/import, storage, validatori;
- nessuna modifica UX in questa slice di report.

## Esito

Sincronizzazione pubblicazione non completata per blocco infrastrutturale GitHub Pages (deployment lock/queue).

## Next Step operativo

Ripetere CML-276D quando il lock deployment si libera:

1. trigger `pages.yml` su `main`;
2. verificare run `success` step deploy-pages;
3. rifare smoke live e chiudere con verdict PASS/FAIL.

## Verdict

`CML_276D_HOME_DASHBOARD_CONTROLLED_PUBLICATION_SYNC_BLOCKED_BY_PAGES_DEPLOYMENT_QUEUE`
