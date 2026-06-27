# CML-210B — EDUCAZIONE_FISICA_CONTROLLED_RUNTIME_PUBLIC_SMOKE

Data: 2026-06-28

## 1. Scopo

Verificare che il polish contenutistico CML-210A sia correttamente riflesso nel runtime e nelle GitHub Pages pubbliche, senza introdurre modifiche aggiuntive.

Slice: docs-only / smoke verification. Non modifica JSON, runtime, tool o SchoolKB.

## 2. Decisione progettuale provvisoria

```text
Educazione Fisica mantiene temporaneamente il modello a 4 nuclei.
CML-210A ha applicato un polish contenutistico controllato limitato a:
- migliorare la progressione verticale;
- rendere più espliciti salute, benessere, sicurezza e corretti stili di vita dentro i nuclei esistenti;
- rafforzare Abilità motorie;
- rendere più chiari obiettivi, traguardi, evidenze e wording.
La decisione non equivale a validazione formale del dipartimento.
```

## 3. Baseline tecnica

| Parametro | Valore |
|---|---|
| Root Git | `C:\Users\anton\CurManLight` |
| Branch | `main` |
| Commit iniziale | `318c2d5` |
| origin/main iniziale | `318c2d5` |
| Working tree iniziale | pulito |
| Dati normalizzati | 14/14 |
| Runtime mappa | 14/14 |
| Shape test | 14/14 PASS |

## 4. Controlli eseguiti

### 4.1 Git status

```bash
git status -sb
## main...origin/main
```

Working tree pulito. HEAD e origin/main allineati su `318c2d5`.

### 4.2 Validator e shape test

| Check | Esito |
|---|---|
| JSON validator | 14/14 PASS, 0 errori |
| Shape test | 14/14 PASS |
| Educazione Fisica | S=7, N=4, P=7, D=0 |

### 4.3 Local hash/navigation smoke

```bash
node -e "const data = require('./content/curriculum/educazione-fisica.normalized.json'); ..."
```

Esito:
- units: 7
- nuclei: Corpo e percezione, Abilita motorie, Gioco e sport, Espressione e inclusione
- orders: Infanzia, Primaria, Secondaria
- primaria classes: 1, 3, 5

Struttura invariata: 7 unità, 4 nuclei, 3 ordini.

### 4.4 Runtime structure verification

Runtime snapshot `_published_snapshot/netlify-current/index.html`:

| Campo | Valore |
|---|---|
| `struttureSostanziali` | 7 |
| `nodiDisciplinari` | 4 |
| `progressioneVerticale` | 7 |
| `decisioniCurricolari` | 0 |

Nuclei nel runtime:
1. Abilità motorie
2. Corpo e percezione
3. Espressione e inclusione
4. Gioco e sport

**Nessun quinto nucleo introdotto.**

### 4.5 CML-210A wording nel runtime source/data path

Il runtime HTML contiene dati statici incorporati al momento dell'ultima integrazione (CML-184). Il CML-210A ha modificato il JSON sorgente, ma il runtime HTML non è stato rigenerato.

**Stato:** ilwording CML-210A è presente nel JSON sorgente (`content/curriculum/educazione-fisica.normalized.json`) ma non è ancora riflesso nel runtime HTML statico. Questo è coerente con il perimetro della slice: nessuna modifica runtime è stata autorizzata.

### 4.6 Public GitHub Pages smoke

URL: https://antoniocorsano-boop.github.io/curmanlight/

| Check | Esito |
|---|---|
| HTTP status | 200 OK |
| App load | OK |
| Educazione Fisica selectable | Sì, presente nella mappa disciplinare |
| Updated content visible | No — il runtime mostra ancora i dati statici precedenti al polish CML-210A |

**Nota:** le GitHub Pages pubblicano il contenuto di `_published_snapshot/netlify-current/index.html`, che non è stato aggiornato da CML-210A. Il polish CML-210A è commitsu `origin/main` nel JSON sorgente, ma non è ancora stato incorporato nel build di pubblicazione.

### 4.7 No manual deploy

Nessun deploy manuale è stato eseguito durante questa slice. Il deploy delle GitHub Pages avviene automaticamente da `_published_snapshot/netlify-current/` su commit su `main`.

### 4.8 git diff --check

Pulito. Nessun errore di whitespace.

### 4.9 Secret scan

Nessun secret trovato. Solo riferimenti testuali a "secret" in documentazione vincoli.

## 5. Esito smoke

| Dimensione | Esito | Note |
|---|---|---|
| Struttura JSON | PASS | 7 unità, 4 nuclei, 3 ordini |
| Validator | PASS | 14/14, 0 errori |
| Shape test | PASS | S=7, N=4, P=7, D=0 |
| Runtime structure | PASS | 7 strutture, 4 nodi, 7 progressioni, D=0 |
| CML-210A wording in runtime | NON RIFLESSO | Runtime HTML statico non rigenerato |
| Public GitHub Pages | PARZIALE | HTTP 200, app carica, EF selezionabile, ma contenuto non aggiornato |
| No manual deploy | CONFERMATO | Nessun deploy eseguito |
| No secrets | CONFERMATO | Scan negativo |

## 6. Raccomandazione

Il JSON sorgente è stato polishato correttamente e passa tutte le validazioni. Tuttavia:

1. **Il runtime HTML statico non riflette il polish CML-210A.** Per aggiornare la mappa runtime è necessario rigenerare `_published_snapshot/netlify-current/index.html` dal JSON aggiornato.
2. **Le GitHub Pages pubbliche mostrano ancora il contenuto precedente.**

**Prossima slice consigliata:**

- **CML-210BS** — rigenerazione statica della mappa runtime e deploy controllato su GitHub Pages (richiede autorizzazione esplicita).
- **CML-211B** — department validation follow-up (se il dipartimento formalizza la validazione).

## 7. Invarianti rispettati

- docs-only / smoke verification;
- nessun file `.normalized.json` modificato;
- nessuna modifica runtime;
- nessuna modifica a `_published_snapshot/netlify-current/index.html`;
- root `index.html` invariato;
- nessuna modifica a `content/curriculum/` (solo lettura);
- nessuna modifica a `tools/`;
- nessuna modifica `.claude/`;
- nessuna modifica `CLAUDE.md`;
- nessuna modifica SchoolKB;
- schema `.cml` invariato;
- export/import invariati;
- funzioni evidenze/UDA invariate;
- nessuna credenziale/client ID/token;
- nessuna dipendenza;
- nessun deploy manuale;
- nessun push.

## 8. Verdetto finale

`CML_210B_EDUCAZIONE_FISICA_CONTROLLED_RUNTIME_PUBLIC_SMOKE_READY`
