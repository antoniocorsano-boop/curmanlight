# CML-433U — Specifiche utente pre-bozzetto

## Type

docs-only / user specification / product design governance

## Macro-program

PM-03 Orientamento / PM-05 Esperienza di lavoro / PM-06 Accompagnamento / PM-09 Validazione con utenti

## Stato

MERGED_REMOTE

## Base

- Branch base: `main`
- Base remota verificata: `55c23ab` — CML-433 Teacher Task View Target Specification
- Branch remoto di lavoro: `codex/cml-433u-user-specifications-pre-mock`
- Merge commit: `67e27da` — CML-433U squash merge

## Obiettivo

Formalizzare nel repository le specifiche utente preliminari al bozzetto grafico, integrando:

- analisi dell'interfaccia desktop con intestazione compatta e pannelli apribili;
- bisogni reali dei profili scolastici;
- contesti d'uso pubblico, personale e scolastico;
- logiche di apertura e chiusura delle aree;
- stati di lavoro curricolare;
- criteri di accettazione del futuro bozzetto.

La slice non produce il bozzetto e non modifica l'interfaccia. Serve a bloccare il contratto utente prima di qualunque nuova scelta visiva o runtime.

## Input usati

- CML-432 — Teacher Task View Architecture and Mock Comparison.
- CML-433 — Teacher Task View Target Specification.
- Discussione progettuale sull'interfaccia desktop di riferimento con header compatto, aree apribili e pannelli contestuali.
- Esigenze emerse per docenti non tecnici, dipartimenti, referente curricolo e dirigente scolastico.
- Vincoli CML consolidati: nessun backend, nessun account obbligatorio, validazione umana, runtime pair invariato.

## Decisione principale

Prima del bozzetto grafico serve una specifica utente esplicita. Il bozzetto non deve nascere da preferenze estetiche, ma da un contratto verificabile:

```text
bisogno utente → contesto → vista → pannello → azione → stato → criterio di accettazione
```

## File prodotti

- `docs/03_execution/CML-433U.md`
- `report/CML-433U_specifiche_utente_pre_bozzetto.md`

## File aggiornati

- `docs/02_system/PROJECT-STATE.md`
- `docs/02_system/PRODUCT-MATURITY-PROGRESS.md`

## File non aggiornato intenzionalmente

- `docs/REPO-MOVELOG.md`

Motivo: il file è esteso oltre diecimila righe. La prima verifica remota ha mostrato che una riscrittura tramite risposta troncata produrrebbe una cancellazione massiva. La sincronizzazione del movelog va eseguita in locale o con procedura basata su patch puntuale verificabile.

## Incongruenze rilevate

### 1. PROJECT-STATE non pienamente allineato a CML-433

Il file dichiarava CML-433 come ultima slice, ma riportava ancora `4537af2` come ultimo commit di CML-432. La base remota reale verificata è `55c23ab`, commit CML-433.

### 2. REPO-MOVELOG privo delle voci CML-432 e CML-433

CML-433 dichiarava intenzionalmente il movelog non aggiornato. Il problema resta tracciato ma non corretto in questa branch, perché il file richiede una modifica locale sicura.

## Review sync

Rilievi trattati nella review della PR #19:

1. stato documentale trasformato da `in review` a `merge-ready`;
2. `Slice in esecuzione` riportata a `nessuna`;
3. incremento PM-09 da 35% a 40% motivato in `PRODUCT-MATURITY-PROGRESS.md`;
4. rinvio del movelog mantenuto come scelta intenzionale e sicura.

## Post-merge sync

CML-433UP ha riallineato lo stato post-merge:

- CML-433U dichiarata come `MERGED_REMOTE`;
- rimosse formule residue `merge-ready` dai documenti di stato;
- prossima azione spostata a CML-433M o CML-434D;
- runtime e dati curricolari invariati.

## Perimetro

Incluso:

- documento completo di specifiche utente pre-bozzetto;
- execution summary della slice;
- riallineamento documentale di stato sui file piccoli e controllabili.

Escluso:

- modifica a `index.html`;
- modifica a `_published_snapshot/netlify-current/index.html`;
- modifica ai dati curricolari;
- modifica a `docs/REPO-MOVELOG.md`;
- creazione del bozzetto grafico;
- implementazione di nuove viste;
- backend, account, raccolta remota o nuove dipendenze.

## Controlli remoti

- Repository remoto accessibile: OK.
- Branch di lavoro creata da `main`: OK.
- Base remota CML-433 individuata: `55c23ab`.
- Tentativo di sync movelog respinto: OK, evitata cancellazione massiva.
- Review PR #19 eseguita: OK.
- Micro-patch di sync stato review: OK.
- Merge PR #19: OK (`67e27da`).
- Post-merge state sync CML-433UP: OK.
- Slice docs-only: OK.
- Runtime modificato: NO.
- Dati curricolari modificati: NO.

Nota: in modalità remota via API GitHub non è disponibile shell locale per eseguire `git diff --check`, validatore curriculum o runtime shape test. Poiché la slice modifica solo documentazione piccola e non tocca runtime o dati, non introduce rischio runtime diretto.

## Gate per passare al bozzetto

Il bozzetto successivo potrà procedere solo se le specifiche utente rispondono positivamente a questi punti:

- ruoli utente esplicitati;
- contesti d'uso distinti;
- stati curricolari distinguibili;
- logica pannelli definita;
- criteri di accettazione presenti;
- perimetro runtime non modificato;
- validazione umana sempre esplicita.

## Verdetto

```text
CML_433U_USER_SPECIFICATIONS_PRE_BOZZETTO_MERGED_REMOTE
```
