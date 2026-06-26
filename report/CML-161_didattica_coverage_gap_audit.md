# CML-161 - Didattica coverage gap audit

Data: 2026-06-26

## 1. Scopo

Questo audit archivia il gap tra copertura del Curriculum e copertura delle funzioni operative di Progettazione e Didattica.

La distinzione principale e':

- Curriculum istituzionale: copertura completa delle discipline;
- Progettazione e Didattica: copertura operativa parziale;
- mappa disciplinare: copertura progressiva, oggi estesa a Tecnologia, Matematica, Italiano, Scienze e Storia.

## 2. Baseline tecnica

- Branch: `main`
- Commit iniziale: `7498682`
- `origin/main`: `7498682`
- Working tree iniziale: pulito
- Slice precedente: `CML_160_SYNC_CLOSED_REMOTE`
- Modalita': docs-only / audit-only
- Push: non eseguito
- Deploy: non eseguito

Scope modificato:

- `docs/03_execution/CML-161.md`
- `report/CML-161_didattica_coverage_gap_audit.md`
- `docs/REPO-MOVELOG.md`

## 3. Curriculum vs Progettazione/Didattica

Il contratto di prodotto distingue Curriculum e Didattica:

- Curriculum: documento istituzionale, consultazione, revisione, validazione, esportazione.
- Didattica: progettazione operativa, evidenze, UDA, attivita', materiali e valutazione in classe.

Questa distinzione e' essenziale per evitare che una copertura completa del curricolo sia letta come copertura completa di tutti i moduli didattici.

## 4. Copertura Curriculum

Nel runtime il modello discipline effettivo e' di 14 discipline:

1. Italiano
2. Matematica
3. Scienze
4. Tecnologia
5. Storia
6. Latino (LEL)
7. Geografia
8. Inglese
9. Seconda Lingua Comunitaria
10. Educazione Civica
11. Arte e Immagine
12. Musica
13. Educazione Fisica
14. Religione Cattolica

Esito:

- copertura Curriculum: 14/14 discipline;
- traguardi e obiettivi presenti nel modello curricolare;
- copertura completa dichiarata nella sezione Curriculum;
- eventuale formulazione "15 discipline" non va usata: il modello effettivo verificato e' 14.

## 5. Copertura Progettazione e Didattica

La sezione Didattica contiene tre aree operative rilevanti:

- `didattica-evidence`;
- `didattica-uda`;
- `didattica-mappa`.

Esito verificato:

- evidenze e criteri: alimentati da `TECNOLOGIA_NORM_DATA.unitaApprendimento`;
- UDA modello: 2 elementi, entrambi con disciplina `Tecnologia`;
- mappa disciplinare: 5/14 discipline.

Discipline oggi presenti nella mappa disciplinare:

- Tecnologia
- Matematica
- Italiano
- Scienze
- Storia

## 6. Gap rilevato

Il gap non e' curricolare generale.

Il Curriculum dichiara una copertura completa 14/14 discipline. Il gap riguarda invece le funzioni didattiche operative:

- evidenze/UDA sono prototipali e concentrate su Tecnologia;
- la mappa disciplinare e' progressiva e copre 5/14 discipline;
- alcune sezioni Didattica potrebbero apparire piu' complete di quanto siano operativamente.

## 7. Rischi

- Percezione di copertura completa anche dove le funzioni operative sono parziali.
- Sbilanciamento verso Tecnologia nella parte didattica.
- Confusione tra curricolo istituzionale completo e strumenti operativi prototipali.
- Necessita' di chiarire UI e microcopy senza modificare subito il runtime.

## 8. Opzioni successive

A. Estendere la mappa disciplinare ad altre discipline.

B. Estendere evidenze e UDA oltre Tecnologia.

C. Chiarire nella UI che evidenze e UDA sono prototipali e concentrate su Tecnologia.

D. Mantenere il focus sulla mappa dati e rinviare evidenze/UDA.

## 9. Raccomandazione

Non intervenire subito sul runtime.

Archiviare il gap come decisione documentale CML-161 e decidere una slice successiva separata. La priorita' consigliata e' scegliere consapevolmente tra estensione della mappa disciplinare e chiarimento UI dei moduli evidenze/UDA.

## 10. Validazioni

Registrate a chiusura:

- `git diff --check`: PASS
- `git status --short --branch`: solo file documentali CML-161 prima del commit
- `git diff --name-only`: `docs/REPO-MOVELOG.md` per i file tracciati; nuovi file documentali CML-161 in `git status`

Conferme richieste:

- nessuna modifica runtime;
- nessuna modifica a `_published_snapshot/netlify-current/index.html`;
- nessuna modifica a schema `.cml`;
- nessuna modifica export/import;
- nessuna dipendenza;
- nessun deploy;
- nessun push.

## 11. Verdetto

`CML_161_DIDATTICA_COVERAGE_GAP_AUDIT_READY`
