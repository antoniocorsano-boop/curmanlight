# CML-210B — EDUCAZIONE_FISICA_CONTROLLED_RUNTIME_PUBLIC_SMOKE

Data: 2026-06-28

## 1. Scopo

Verificare che il polish contenutistico CML-210A sia correttamente riflesso nel runtime e nelle GitHub Pages pubbliche.

## 2. Controlli eseguiti

### Git status

```bash
git status -sb
## main...origin/main
```

HEAD e origin/main allineati su `318c2d5`. Working tree pulito.

### Validazioni

| Check             | Esito                |
| ----------------- | -------------------- |
| JSON validator    | 14/14 PASS, 0 errori |
| Shape test        | 14/14 PASS           |
| Educazione Fisica | S=7, N=4, P=7, D=0   |

### Struttura JSON

- units: 7
- nuclei: Corpo e percezione, Abilità motorie, Gioco e sport, Espressione e inclusione
- orders: Infanzia, Primaria, Secondaria
- primaria classes: 1, 3, 5

### Runtime structure

Runtime snapshot `_published_snapshot/netlify-current/index.html`:

- struttureSostanziali: 7
- nodiDisciplinari: 4
- progressioneVerticale: 7
- decisioniCurricolari: 0

Nuclei: Abilità motorie, Corpo e percezione, Espressione e inclusione, Gioco e sport.

### CML-210A wording nel runtime

Ilwording CML-210A è presente nel JSON sorgente ma **non è ancora riflesso nel runtime HTML statico**. Il runtime non è stato rigenerato.

### Public GitHub Pages

URL: https://antoniocorsano-boop.github.io/curmanlight/

- HTTP 200 OK
- App carica
- Educazione Fisica selezionabile
- Contenuto aggiornato: **No** — mostra dati statici precedenti al polish CML-210A

### No manual deploy

Nessun deploy manuale eseguito. GitHub Pages usa `_published_snapshot/netlify-current/`.

### git diff --check

Pulito.

### Secret scan

Negativo.

## 3. Esito

| Dimensione                  | Esito        |
| --------------------------- | ------------ |
| Struttura JSON              | PASS         |
| Validator                   | PASS         |
| Shape test                  | PASS         |
| Runtime structure           | PASS         |
| CML-210A wording in runtime | NON RIFLESSO |
| Public GitHub Pages         | PARZIALE     |
| No manual deploy            | CONFERMATO   |
| No secrets                  | CONFERMATO   |

## 4. Raccomandazione

Rigenerare `_published_snapshot/netlify-current/index.html` dal JSON aggiornato (CML-210BS) per rendere il polish visibile in pubblico.

## 5. Verdetto

`CML_210B_EDUCAZIONE_FISICA_CONTROLLED_RUNTIME_PUBLIC_SMOKE_READY`
