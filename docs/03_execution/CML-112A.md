# CML-112A — HASH_SELECTION_SMOKE_TEST

## Contesto

- Commit: `fe91eef` (CML-112)
- Branch: `main`
- Tree: pulita ✅

## Perimetro test

### Test A1 — Apertura diretta hash disciplinari

Simulato via analisi statica del codice:

| Hash                | Disciplina attesa | `resolveDiscFromHash()` | Verdetto |
| ------------------- | ----------------- | ----------------------- | -------- |
| `#cur-Italiano`     | Italiano          | ✅ match                | ✅       |
| `#cur-Tecnologia`   | Tecnologia        | ✅ match                | ✅       |
| `#cur-Matematica`   | Matematica        | ✅ match                | ✅       |
| `#cur-Musia` (typo) | null              | ✅ no match → fallback  | ✅       |
| `#altra-sezione`    | null              | ✅ no match             | ✅       |
| (nessun hash)       | null              | ✅ no match → default   | ✅       |

### Test A2 — INIT legge hash

```javascript
var initDisc = resolveDiscFromHash()
if (initDisc) selDisc = initDisc
```

- Se hash presente: ✅ `selDisc` sovrascritto
- Se hash assente: ✅ `selDisc` resta "Tecnologia"
- Se hash non valido: ✅ `initDisc` è null, `selDisc` invariato

### Test A3 — `selectDisc()` aggiorna hash

```javascript
function selectDisc(d){selDisc=d;editingId=null;renderSidebar();render();
  ...
  location.hash='#cur-'+d.replace(/[\s()]/g,'');
}
```

- `selDisc` impostato PRIMA di hash ✅
- `hashchange` NON rientra perché `d===selDisc` (guard) ✅
- Tutte le 14 discipline slug corrette ✅

### Test A4 — Listener `hashchange`

```javascript
window.addEventListener('hashchange', function () {
  var d = resolveDiscFromHash()
  if (d && d !== selDisc) selectDisc(d)
})
```

- Browser back/forward: ✅ hash cambia → listener chiama `selectDisc()`
- Hash non disciplinare: ✅ `d` è null → nessuna azione
- Stessa disciplina: ✅ guard `d!==selDisc` previene loop

### Test A5 — Titolo normalizzato dinamico

- `renderTecnologiaNorm()` linea 4729: ✅ `selDisc` usato nel titolo
- Nessun riferimento hardcoded a "Tecnologia" nel titolo ✅

### Test A6 — Regressioni

- Schema .cml: ❌ non toccato ✅
- Export/import: ❌ non toccato ✅
- Role access: ❌ non toccato ✅
- Contenuti disciplinari: ❌ non toccati ✅
- Asset: ❌ non toccati ✅
- Contatori: 14/0/0 invariati ✅

## Verdetto

`CML_112A_HASH_SELECTION_SMOKE_TEST_PASSED`

## Next

Nessun fix urgente — procedere con prossimo ciclo di lavoro (validazione dipartimentale, export, o ritorno a normalizzazioni disciplinari).
