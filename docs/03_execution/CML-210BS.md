# CML-210BS — EDUCAZIONE_FISICA_RUNTIME_STATIC_MAP_REGENERATION

Data: 2026-06-28

## 1. Scopo

Rigenerare la mappa runtime statica di Educazione Fisica in `_published_snapshot/netlify-current/index.html` affinché il polish contenutistico CML-210A sia visibile nel runtime e su GitHub Pages.

Slice: runtime integration (controllata). Modifica solo la mappa statica EF nel runtime HTML.

## 2. Decisione progettuale

```text
Mantenuto il modello a 4 nuclei (Corpo e percezione, Abilità motorie, Gioco e sport, Espressione e inclusione).
Nessun quinto nucleo introdotto.
Rigenerata la mappa statica da content/curriculum/educazione-fisica.normalized.json tramite tool generate-static-mappa-dati.mjs.
```

## 3. Baseline tecnica

| Parametro                | Valore                       |
| ------------------------ | ---------------------------- |
| Root Git                 | `C:\Users\anton\CurManLight` |
| Branch                   | `main`                       |
| Commit iniziale          | `39c4f4a`                    |
| origin/main iniziale     | `39c4f4a`                    |
| Working tree iniziale    | pulito                       |
| Dati normalizzati        | 14/14                        |
| Runtime mappa            | 14/14                        |
| Shape test pre-esistente | 14/14 PASS                   |

## 4. Controlli eseguiti

### 4.1 Git status

```bash
git status -sb
## main...origin/main
 M _published_snapshot/netlify-current/index.html
```

HEAD e origin/main allineati su `39c4f4a`. Working tree con modifica attesa.

### 4.2 Inspect JSON sorgente

```bash
node -e "const d=require('./content/curriculum/educazione-fisica.normalized.json'); console.log('units:',d.unitaApprendimento.length,'nuclei:',[...new Set(d.unitaApprendimento.map(u=>u.nucleo))].join(','));"
```

Esito: units: 7, nuclei: Corpo e percezione, Abilita motorie, Gioco e sport, Espressione e inclusione.

### 4.3 Rigenerazione mappa runtime

```bash
node tools/generate-static-mappa-dati.mjs content/curriculum/educazione-fisica.normalized.json --const EDUCAZIONE_FISICA_MAPPA_DATI > /tmp/ef_map_new.js
```

Sostituito il blocco `var EDUCAZIONE_FISICA_MAPPA_DATI = ...` in `_published_snapshot/netlify-current/index.html` con il nuovo blocco rigenerato.

### 4.4 Validator e shape test

| Check             | Esito                |
| ----------------- | -------------------- |
| JSON validator    | 14/14 PASS, 0 errori |
| Shape test        | 14/14 PASS           |
| Educazione Fisica | S=7, N=4, P=7, D=0   |

### 4.5 Hash/navigation smoke

```bash
node -e "const fs=require('fs'); const html=fs.readFileSync('_published_snapshot/netlify-current/index.html','utf8'); const m=html.match(/var EDUCAZIONE_FISICA_MAPPA_DATI = ({.*?});/s); if(m){ const d=JSON.parse(m[1]); console.log('units:',d.struttureSostanziali.length,'nuclei:',d.nodiDisciplinari.length,'progression:',d.progressioneVerticale.length,'D:',d.decisioniCurricolari.length); }"
```

Esito: units: 7, nuclei: 4, progression: 7, D: 0.

Nuclei: Abilita motorie, Corpo e percezione, Espressione e inclusione, Gioco e sport.

### 4.6 CML-210A wording nel runtime

Verificata presenza nel nuovo blocco runtime HTML di:

- `benessere` in `Autonomia, responsabilità, espressione corporea, benessere e inclusione`
- progressione verticale con ponti Infanzia → Primaria → Secondaria
- nucleo `Abilità motorie` rafforzato

### 4.7 Altre discipline

Verificato che le righe `var TECNOLOGIA_MAPPA_DATI`, `var MATEMATICA_MAPPA_DATI`, `var ITALIANO_MAPPA_DATI` e le altre discipline rimangono invariati.

### 4.8 Public GitHub Pages smoke

URL: https://antoniocorsano-boop.github.io/curmanlight/#cur-EducazioneFisica

| Check                        | Esito                                          |
| ---------------------------- | ---------------------------------------------- |
| HTTP status                  | 200 OK                                         |
| App load                     | OK                                             |
| Hash navigation              | `#cur-EducazioneFisica` — confermato           |
| CML-210A content visible     | Sì — `benessere` presente nel DOM della pagina |
| Educazione Fisica selectable | Sì (dati statici aggiornati)                   |

Nota: i nuclei (`Abilità motorie`, `Corpo e percezione`, `Gioco e sport`, `Espressione e inclusione`) sono renderizzati dinamicamente dal runtime JS; la loro presenza è confermata dalla struttura S=7,N=4,P=7,D=0 verificata nello step 4.5.

### 4.9 git diff --check

Pulito. Nessun errore di whitespace.

### 4.10 Secret scan

Scansione mirata su `_published_snapshot/netlify-current/index.html`:

- Trovati riferimenti a `password` in logiche di validazione URL e in microcopy UI (`codice operativo, non password istituzionale`).
- Nessun secret, token, chiave privata o credenziale reale presente.

### 4.11 No manual deploy

Nessun deploy manuale eseguito. Aggiornamento GitHub Pages avvenuto automaticamente da commit su `main`.

## 5. Esito

| Dimensione                  | Esito      | Note                                     |
| --------------------------- | ---------- | ---------------------------------------- |
| Struttura JSON              | PASS       | 7 unità, 4 nuclei                        |
| Validator                   | PASS       | 14/14, 0 errori                          |
| Shape test                  | PASS       | S=7, N=4, P=7, D=0                       |
| Runtime structure           | PASS       | 7 strutture, 4 nodi, 7 progressioni, D=0 |
| CML-210A wording in runtime | RIFLESSO   | Dati statici aggiornati                  |
| Public GitHub Pages         | PASS       | HTTP 200, contenuto aggiornato visibile  |
| No manual deploy            | CONFERMATO | Auto-deploy da GitHub Pages              |
| No secrets                  | CONFERMATO | Scan pulito                              |

## 6. Commits

| Step      | Commit    |
| --------- | --------- |
| Start     | `39c4f4a` |
| CML-210BS | `53013df` |
| Pushed    | `53013df` |

## 7. File modificati

- `_published_snapshot/netlify-current/index.html`

## 8. Invarianti rispettati

- `content/curriculum/educazione-fisica.normalized.json` non modificato;
- nessuna modifica ad altre discipline;
- nessuna modifica a `tools/`;
- nessuna modifica schema `.cml` / export-import / validator / shape-test;
- nessuna SchoolKB / UDA / evidenze;
- nessun service-worker / manifest;
- nessuna dipendenza;
- nessuna credenziale;
- nessun deploy manuale.

## 9. Verdetto finale

`CML_210BS_EDUCAZIONE_FISICA_RUNTIME_STATIC_MAP_REGENERATION_COMPLETE`

## 10. Prossima slice consigliata

- **CML-211B** — department validation follow-up.
- Oppure: **chiusura ciclo polish provvisorio EF** se il dipartimento accetta il modello a 4 nuclei con il wording CML-210A.
