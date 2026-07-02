# CML-267 PROFESSIONAL CURRICULUM ENVIRONMENT SPEC — Report

## Sintesi esecutiva

La slice formalizza in documentazione il modello professionale di CurManLight come ambiente curricolare articolato in due macro-aree, Curriculum e Didattica, estendendo il contratto stabile già presente nel repository.

## Stato tecnico di partenza

- Branch: `main`
- Allineamento: `main...origin/main` pulito all'avvio
- HEAD iniziale: `58d18cb`
- Working tree iniziale: pulito

## Metodo

1. Verifica dei contratti esistenti in `docs/02_system/`.
2. Verifica delle chiavi localStorage già usate dal runtime.
3. Allineamento della nuova specifica a CML-065 per evitare duplicazioni.
4. Produzione di documentazione di esecuzione, report e movelog.

## Relazione con CML-065

Il repository contiene già il contratto stabile [PRODUCT MODEL — CURRICULUM / DIDATTICA CONTRACT](../02_system/PRODUCT-MODEL-CURRICULUM-DIDATTICA-CONTRACT.md). CML-267 non lo sostituisce: lo rende operativo con layer aggiuntivi e con un lessico più adatto a una roadmap architetturale.

## Controlli tecnici

- `git diff --check`: previsto come requisito prima del commit
- Validator curriculum: previsto come requisito prima del commit
- Shape test: previsto come requisito prima del commit
- Runtime: invariato
- Storage: invariato
- Import/export dati: invariati

## Invarianti e limiti

- Nessuna modifica runtime
- Nessuna modifica schema `.cml`
- Nessuna modifica a dati curricolari normalizzati
- Nessuna integrazione API/backend/Drive
- Nessun nuovo localStorage

## Raccomandazioni

- Mantenere CML-065 come contratto base.
- Usare CML-267 come specifica di estensione e non come fonte parallela.
- Aprire CML-268 solo dopo il recepimento documentale della specifica.

## Cosa non è stato fatto

- Nessuna correzione runtime
- Nessun push
- Nessun deploy
- Nessuna modifica a index.html o snapshot runtime

## Checklist finale

- [x] repository preflight verified;
- [x] contract CML-065 inspected;
- [x] localStorage constraints validated;
- [x] docs-only scope confirmed;
- [x] runtime unchanged;
- [x] schema .cml unchanged;
- [x] storage unchanged;
- [x] import/export data unchanged;
- [x] no deploy executed;
- [x] no push executed;
- [x] verdict recorded;

## Verdict

`CML_267_PROFESSIONAL_CURRICULUM_ENVIRONMENT_SPEC_READY_LOCAL_NOT_PUSHED`
