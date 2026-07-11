# AGENT-WORK-CONTRACT.md — Contratto Operativo per Attivita

> Ogni attivita sugli agenti e trattata come porzione autonoma con obblighi precisi.

## 1. Struttura di un'Attivita

Ogni attivita deve essere definita prima dell'inizio dei lavori e deve contenere:

| Campo | Descrizione |
|-------|-------------|
| Identificativo | `CML-XXX` univoco |
| Titolo | Descrizione breve e chiara |
| Problema osservato | Cosa non funziona o cosa manca |
| Obiettivo verificabile | Cosa sara verificabile al termine |
| Perimetro ammesso | Limiti esatti dell'intervento |
| File autorizzati | Lista esplicita dei file modificabili |
| File esclusi | Lista esplicita dei file non modificabili |
| Criteri di accettazione | Condizioni che devono essere soddisfatte |
| Controlli obbligatori | Comandi da eseguire prima di dichiarare concluso |
| Stato iniziale | Snapshot del repository prima dell'inizio |
| Stato finale | Snapshot atteso al termine |
| Commit autorizzato | si/no — specificare messaggio |
| Push su branch autorizzato | si/no |
| Merge o push su `main` autorizzato | si/no |
| Pubblicazione autorizzata | si/no |
| Percorsi trigger Pages presenti | si/no — indicare quali |

## 2. Fasi del Lavoro

### Fase 1: ANALISI

- Leggere questo file e `AGENTS.md`.
- Leggere `docs/02_system/PROJECT-STATE.md`.
- Confermare che il movelog operativo corrente sia `docs/REPO-MOVELOG-v2.md`.
- Eseguire `git status --short --branch`.
- Eseguire `git log --oneline -5`.
- Identificare il perimetro dichiarato nel task.
- Ispezionare tutti i punti di utilizzo del codice coinvolto.
- Documentare lo stato iniziale.

### Fase 2: MODIFICA LOCALE

- Applicare la modifica minima necessaria.
- Se runtime legacy: modificare ENTRAMBI i file della coppia applicativa.
- Non estendere il perimetro oltre quanto dichiarato.
- Non modificare file esclusi.
- Non introdurre nuove dipendenze.
- Non eliminare codice prima di verificarne tutti i riferimenti.
- Non aggiornare `docs/REPO-MOVELOG.md`: e archivio legacy protetto.

### Fase 3: VALIDAZIONE

- Eseguire i controlli minimi:

  ```bash
  git status --short --branch
  git diff --check
  ```

- Eseguire i controlli pertinenti al tipo di slice.
- Se runtime legacy: eseguire `node tools/check-app-pair.mjs`.
- Se curriculum: eseguire `node tools/validate-cml-normalized-curriculum.mjs`.
- Se React: eseguire almeno lint e build in `curman-react/`.
- Documentare l'esito di ogni controllo.
- Distinguere il funzionamento del validatore dallo stato dell'invariante verificato.

### Fase 4: DOCUMENTAZIONE

- Produrre il rapporto nel formato `TEMPLATE-AGENT-EXECUTION.md`.
- Aggiornare `docs/REPO-MOVELOG-v2.md` quando la slice deve essere registrata.
- Non riscrivere remotamente `docs/REPO-MOVELOG.md`, che resta archivio legacy.
- Aggiornare `docs/02_system/PROJECT-STATE.md` soltanto quando richiesto dal perimetro o necessario per riflettere lo stato corrente.

### Fase 5: COMMIT LOCALE

- Solo se autorizzato dal task.
- Messaggio nel formato: `tipo: descrizione (CML-XXX)`.
- Eseguire `git diff --check` prima del commit.
- Verificare che il commit contenga solo i file autorizzati.
- Non includere file locali o non tracciati estranei alla slice.

### Fase 6: PUSH SU BRANCH DEDICATO

- Solo se esplicitamente autorizzato.
- Prima del push:

  ```bash
  git log --oneline origin/main..HEAD
  git status --short --branch
  git diff --name-only origin/main...HEAD
  ```

- Verificare che HEAD e remoto siano allineati come atteso.
- Dopo il push, verificare il branch remoto.
- Un push su branch dedicato non equivale a pubblicazione GitHub Pages.

### Fase 7: RELEASE-GATE PRIMA DI `main`

Prima di qualunque merge o push su `main`, classificare il diff rispetto a `origin/main`.

Il workflow Pages viene attivato da modifiche in almeno uno dei seguenti percorsi:

```text
_published_snapshot/netlify-current/**
curman-react/**
.github/workflows/pages.yml
```

Se il diff include uno di questi percorsi:

- il merge o push su `main` deve essere autorizzato esplicitamente;
- la pubblicazione deve essere considerata attesa;
- non e consentito descrivere la slice come "non pubblicante";
- devono essere previsti monitoraggio del workflow e verifica post-deploy;
- una modifica React-only resta release-affecting perche il job costruisce e distribuisce l'artifact Pages combinato.

Se il diff non include percorsi trigger, il merge su `main` non attiva automaticamente `pages.yml` per il relativo evento `push`; restano comunque necessari i normali controlli di integrazione.

### Fase 8: REVISIONE

- Verificare che il contenuto funzioni come atteso.
- Eseguire smoke test se applicabile.
- Confrontare con i criteri di accettazione.
- Controllare che documentazione, workflow e comportamento reale non siano in contraddizione.

### Fase 9: INTEGRAZIONE

- Solo su autorizzazione esplicita.
- Non integrare branch di altri agenti senza incarico dedicato.
- Non risolvere conflitti arbitrariamente.
- Prima del merge, ripetere il release-gate sui percorsi effettivi della PR.

### Fase 10: PUBBLICAZIONE E CONTROLLO POST-PUBBLICAZIONE

Quando il merge o push su `main` include un percorso trigger Pages:

- verificare che il workflow `.github/workflows/pages.yml` venga avviato;
- monitorare build e deploy;
- verificare il runtime legacy pubblico;
- verificare `/react-preview/` se la slice coinvolge `curman-react/**` o il workflow Pages;
- eseguire smoke test post-pubblicazione;
- documentare URL, run, esito e anomalie.

## 3. Regole Vincolanti

### Proprieta dei File

- Un agente non deve modificare file gia assegnati a un'altra attivita parallela.
- Ogni attivita deve avere branch dedicato, insieme di file limitato e rapporto dedicato.
- Gli agenti non devono integrare tra loro i branch senza autorizzazione.
- Non risolvere conflitti scegliendo arbitrariamente una versione.
- Non effettuare rebase, squash o modifica alla cronologia condivisa senza autorizzazione.

### Autorita Documentale

- `docs/02_system/PROJECT-STATE.md` determina lo stato operativo corrente.
- `docs/REPO-MOVELOG-v2.md` e il registro operativo corrente.
- `docs/REPO-MOVELOG.md` e archivio legacy e non deve essere riscritto da remoto.
- Se un template o una guida indica il movelog legacy, la guida e obsoleta e va corretta prima di proseguire.

### Separazione delle Attivita

- Ogni attivita opera su branch dedicato.
- Ogni attivita ha un insieme di file limitato.
- Ogni attivita produce un rapporto dedicato.
- I commit sono riconoscibili per attivita.
- I controlli sono pertinenti al tipo di intervento.

### Nessuna Integrazione Automatica

Gli agenti non devono:

- integrare tra loro i branch senza ordine;
- risolvere conflitti scegliendo arbitrariamente una versione;
- fare rebase su attivita altrui senza coordinamento;
- effettuare squash non autorizzati;
- modificare la cronologia condivisa.

### Verifica dei File Accoppiati

Quando viene modificato uno dei file applicativi legacy principali:

- il controllo deve rilevare differenze non intenzionali;
- il controllo deve rilevare mancato aggiornamento della copia corrispondente;
- il controllo deve rilevare modifiche aggiuntive estranee al perimetro.

### Stato Dichiarato

Ogni rapporto deve distinguere chiaramente:

- modificato localmente;
- committato;
- pubblicato su branch remoto;
- PR aperta;
- integrato in `main`;
- workflow Pages attivato o non attivato;
- pubblicato sul sito;
- verificato dal vivo.

Questi stati non sono equivalenti.

## 4. Obblighi di Trasparenza

- Non dichiarare controlli eseguiti se non sono stati realmente eseguiti.
- Non dichiarare la conclusione in presenza di controlli falliti non accettati.
- Non nascondere errori o warning.
- Documentare ogni deviazione dal piano originale.
- Dichiarare esplicitamente push, merge, trigger Pages e pubblicazione.
- Non usare "non pubblicato" come sinonimo di "nessuna modifica al runtime legacy".

## 5. Protezioni Multi-Agent

### Isolamento

- Branch dedicati per ogni attivita.
- File scope limitato e dichiarato.
- Nessuna modifica a file di altri agenti senza coordinamento.

### Comunicazione

- Ogni attivita e autosufficiente.
- Il rapporto documenta tutto cio che serve per verificare.
- Nessuna dipendenza implicita tra attivita.

### Integrazione

- L'integrazione avviene solo su autorizzazione esplicita.
- Il merge e gestito da un umano o da un agente dedicato.
- I conflitti sono risolti con documentazione, non con scelte arbitrarie.
- Il release-gate viene ripetuto immediatamente prima dell'integrazione.
