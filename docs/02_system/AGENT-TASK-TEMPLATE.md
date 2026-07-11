# AGENT-TASK-TEMPLATE.md — Modello di Incarico per un Agente

> Copiare questo modello in una nuova conversazione o passarlo a un agente.
> Compilare tutti i campi prima di consegnare il task.

---

## Task

### Identificazione

| Campo | Valore |
|-------|--------|
| Repository | `C:\Users\anton\CurManLight` |
| Branch iniziale | [nome branch] |
| Commit iniziale | [hash] |
| Identificativo attivita | `CML-XXX` |
| Titolo | [titolo breve] |

### Contesto

| Campo | Valore |
|-------|--------|
| Problema | [descrizione del problema o dell'obiettivo] |
| Obiettivo | [cosa deve essere verificabile al termine] |
| Tipo di slice | [docs-only / runtime microfix / runtime increment / curriculum JSON / OPS / React preview / release gate] |

### Perimetro

| Campo | Valore |
|-------|--------|
| File autorizzati | [elenco file modificabili] |
| File esclusi | [elenco file NON modificabili] |
| Modifiche ammesse | [tipologia di modifiche consentite] |
| Movelog da aggiornare | `docs/REPO-MOVELOG-v2.md` / non applicabile |
| Archivio legacy escluso | `docs/REPO-MOVELOG.md` |

### Controlli

| Campo | Valore |
|-------|--------|
| Controlli richiesti | [elenco comandi da eseguire] |
| Verdetto atteso | `CML_XXX_[NOME]_[STATO]` |
| Percorsi trigger Pages attesi nel diff | [nessuno / published / curman-react / pages.yml] |
| Verifica release-gate richiesta | si/no |

### Autorizzazioni

| Campo | Valore |
|-------|--------|
| Commit autorizzato | si/no |
| Push su branch autorizzato | si/no |
| Apertura PR autorizzata | si/no |
| Merge o push su `main` autorizzato | si/no |
| Pubblicazione Pages autorizzata | si/no |

---

## Istruzioni per l'Agente

### Prima di iniziare

1. Leggere `AGENTS.md` nella radice del repository.
2. Leggere `docs/02_system/AGENT-WORK-CONTRACT.md`.
3. Leggere `docs/02_system/AGENT-REPOSITORY-MAP.md`.
4. Leggere `docs/02_system/PROJECT-STATE.md`.
5. Confermare che il registro operativo corrente sia `docs/REPO-MOVELOG-v2.md`.
6. Verificare lo stato Git reale:

   ```bash
   git status --short --branch
   git log --oneline -5
   git rev-parse HEAD
   ```

### Durante il lavoro

1. Non basarsi su riepiloghi non confermati: verificare sempre il codice, i workflow e i documenti operativi reali.
2. Non estendere il perimetro oltre quanto dichiarato.
3. Non eliminare codice apparentemente inutilizzato prima di verificarne tutti i riferimenti.
4. Non produrre modifiche estetiche collaterali.
5. Se runtime legacy: modificare ENTRAMBI i file della coppia applicativa.
6. Se React: ricordare che l'integrazione in `main` attiva build e deploy Pages.
7. Non modificare `docs/REPO-MOVELOG.md`; e archivio legacy.
8. Eseguire i controlli richiesti dopo ogni modifica significativa.

### Al termine

1. Eseguire tutti i controlli obbligatori.
2. Produrre rapporto nel formato `TEMPLATE-AGENT-EXECUTION.md`.
3. Aggiornare `docs/REPO-MOVELOG-v2.md` se la slice richiede una registrazione.
4. Non riscrivere remotamente `docs/REPO-MOVELOG.md`.
5. Verificare i percorsi modificati rispetto a `origin/main`:

   ```bash
   git fetch origin
   git diff --name-only origin/main...HEAD
   ```

6. Se il diff include `_published_snapshot/netlify-current/**`, `curman-react/**` o `.github/workflows/pages.yml`, classificare il merge/push su `main` come operazione di pubblicazione attesa.
7. Non dichiarare la conclusione in presenza di controlli falliti non accettati.
8. Fermarsi: non eseguire push, merge o pubblicazione senza ordine esplicito.

### Divieti

- Non modificare file non autorizzati.
- Non introdurre nuove dipendenze.
- Non modificare dati curricolari senza autorizzazione dedicata.
- Non eseguire push, merge o pubblicazione senza ordine.
- Non descrivere come non-pubblicante una modifica React destinata a `main`.
- Non aggiornare il movelog legacy `docs/REPO-MOVELOG.md`.
- Non dichiarare controlli eseguiti se non sono stati realmente eseguiti.
- Non committare credenziali, segreti o token.

---

> **Nota**: questo template e generico. Il campo "File autorizzati" deve essere compilato con i percorsi reali del repository. Non usare wildcard generiche senza verifica. Le regole di pubblicazione devono essere ricontrollate direttamente in `.github/workflows/pages.yml` prima di ogni release gate.
