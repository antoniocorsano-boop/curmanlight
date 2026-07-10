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
| Push autorizzato | si/no |
| Pubblicazione autorizzata | si/no |

## 2. Fasi del Lavoro

### Fase 1: ANALISI

- Leggere questo file e `AGENTS.md`
- Leggere `docs/02_system/PROJECT-STATE.md`
- Eseguire `git status --short --branch`
- Eseguire `git log --oneline -5`
- Identificare il perimetro dichiarato nel task
- Ispezionare tutti i punti di utilizzo del codice coinvolto
- Documentare lo stato iniziale

### Fase 2: MODIFICA LOCALE

- Applicare la modifica minima necessaria
- Se runtime: modificare ENTRAMBI i file della coppia applicativa
- Non estendere il perimetro oltre quanto dichiarato
- Non modificare file esclusi
- Non introdurre nuove dipendenze
- Non eliminare codice prima di verificarne tutti i riferimenti

### Fase 3: VALIDAZIONE

- Eseguire i controlli minimi:
  ```bash
  git status --short --branch
  git diff --check
  ```
- Eseguire i controlli pertinenti al tipo di slice (vedi AGENTS.md)
- Se runtime: eseguire `node tools/check-app-pair.mjs`
- Se curriculum: eseguire `node tools/validate-cml-normalized-curriculum.mjs`
- Documentare l'esito di ogni controllo

### Fase 4: DOCUMENTAZIONE

- Produrre rapporto nel formato `TEMPLATE-AGENT-EXECUTION.md`
- Aggiornare `docs/REPO-MOVELOG.md` con la nuova entry
- Aggiornare `docs/02_system/PROJECT-STATE.md` se necessario

### Fase 5: COMMIT LOCALE

- Solo se autorizzato dal task
- Messaggio nel formato: `tipo: descrizione (CML-XXX)`
- Eseguire `git diff --check` prima del commit
- Verificare che il commit contenga solo i file autorizzati

### Fase 6: PUSH CONTROLLATO

- Solo se esplicitamente autorizzato
- Prima del push:
  ```bash
  git log --oneline origin/main..HEAD
  git status --short --branch
  ```
- Verificare che HEAD/origin siano allineati come atteso
- Dopo il push: verificare lo stato del remote

### Fase 7: REVISIONE

- Verificare che il codice funzioni come atteso
- Eseguire smoke test se applicabile
- Confrontare con i criteri di accettazione

### Fase 8: INTEGRAZIONE

- Solo su autorizzazione esplicita
- Non integrare branch di altri agenti
- Non risolvere conflitti arbitrariamente

### Fase 9: PUBBLICAZIONE

- Solo se esplicitamente autorizzata
- Verificare che il deploy attivi correttamente
- Eseguire smoke test post-pubblicazione

### Fase 10: CONTROLLO POST-PUBBLICAZIONE

- Verificare HTTP 200 dall'URL pubblico
- Verificare che il contenuto sia corretto
- Documentare l'esito

## 3. Regole Vincolanti

### Proprieta dei File

- Un agente non deve modificare file gia assegnati a un'altra attivita parallela
- Ogni attivita deve avere branch dedicato, insieme di file limitato, rapporto dedicato
- Gli agenti non devono integrare tra loro i branch
- Non risolvere conflitti scegliendo arbitrariamente una versione
- Non effettuare rebase, squash o modifica alla cronologia condivisa senza autorizzazione

### Separazione delle Attivita

- Ogni attivita opera su branch dedicato
- Ogni attivita ha un insieme di file limitato
- Ogni attivita produce un rapporto dedicato
- I commit sono riconoscibili per attivita
- I controlli sono pertinenti al tipo di intervento

### Nessuna Integrazione Automatica

Gli agenti non devono:
- Integrare tra loro i branch
- Risolvere conflitti scegliendo arbitrariamente una versione
- Fare rebase su attivita altrui
- Effettuare squash non autorizzati
- Modificare la cronologia condivisa

### Verifica dei File Accoppiati

Quando viene modificato uno dei file applicativi principali:
- Il controllo deve rilevare differenze non intenzionali
- Il controllo deve rilevare mancato aggiornamento della copia corrispondente
- Il controllo deve rilevare modifiche aggiuntive estranee al perimetro

### Stato Dichiarato

Ogni rapporto deve distinguere chiaramente:
- modificato localmente
- committato
- pubblicato sul remoto
- integrato
- pubblicato sul sito
- verificato dal vivo

Questi stati non sono equivalenti.

## 4. Obblighi di Trasparenza

- Non dichiarare controlli eseguiti se non sono stati realmente eseguiti
- Non dichiarare la conclusione in presenza di controlli falliti
- Non nascondere errori o warning
- Documentare ogni deviation dal piano originale
- Dichiarare esplicitamente push e pubblicazione non eseguiti

## 5. Protezioni Multi-Agent

### Isolamento

- Branch dedicati per ogni attivita
- File scope limitato e dichiarato
- Nessuna modifica a file di altri agenti senza coordinamento

### Comunicazione

- Ogni attivita e autosufficiente
- Il rapporto documenta tutto cio che serve per verificare
- Nessuna dipendenza implicita tra attivita

### Integrazione

- L'integrazione avviene solo su autorizzazione esplicita
- Il merge e gestito da un umano o da un agente dedicato
- I conflitti sono risolti con documentazione, non con scelte arbitrarie
