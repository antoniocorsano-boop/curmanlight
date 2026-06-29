# CML-155: Post Parse Fix Runtime Structure Audit

## Sintesi

CML-155 conferma che CML-154 ha risolto il parse error principale, ma individua tre problemi runtime/strutturali residui da correggere in slice separati.

Audit-only: nessuna modifica runtime.

## Stato repository

| Campo           | Valore    |
| --------------- | --------- |
| Branch          | `main`    |
| Commit iniziale | `6885fab` |
| origin/main     | `6885fab` |
| Stato           | allineato |

## Sintassi runtime

- Inline script syntax: PASS (`vm.Script`).
- `l’esito` presente nel contesto JS corretto.
- `l'esito` resta solo in HTML statico della Home, non e' causa di parse error.
- `TECNOLOGIA_MAPPA_DATI = TECNOLOGIA_MAPPA_DATI_GENERATA || TECNOLOGIA_MAPPA_DATI_FALLBACK` presente.

## Finding 1 - P1 - Mappa fuori tab

La mappa disciplinare e' figlia diretta di `main#main-content`, non di `#tab-didattica`.

Evidenza browser:

```text
DETAILS#didattica-mappa -> MAIN#main-content -> DIV.layout -> BODY -> HTML
```

Effetto osservato:

- mappa visibile in Home;
- mappa visibile in Curriculum;
- mappa visibile in Esportazioni e Guida;
- contenuto mappa resta persistente dopo cambio tab.

## Finding 2 - P2 - Mappa non inizializzata

`renderMappaDisciplinare()` viene chiamata da `setMappaDisciplina()`, ma non all'avvio e non quando `setTab('didattica')` entra nella sezione Competenze.

Effetto osservato: Competenze iniziale mostra contenitore vuoto finche' l'utente non clicca Tecnologia/Matematica/Italiano.

## Finding 3 - P1 - `decisionIdx` non definito

`renderDepartmentImport()` usa `decisionIdx` senza definirlo:

```js
var decision =
  decisionIdx >= 0
    ? departmentImportState.proposals[decisionIdx].decision
    : null
```

Smoke mirato con import mock valido:

```text
ReferenceError: decisionIdx is not defined
```

Impatto: import/validazione dipartimentale bloccante quando esistono proposte `.cml` da renderizzare.

## Finding 4 - P2 - Titolo TecnologiaNorm incoerente

`renderTecnologiaNorm()` legge sempre `TECNOLOGIA_NORM` (13 unita', disciplina Tecnologia), ma il titolo usa `selDisc`.

Effetto osservato:

- con `selDisc = Matematica`, titolo Matematica ma corpo Tecnologia;
- con `selDisc = Italiano`, titolo Italiano ma corpo Tecnologia.

## Smoke browser ordinario

Browser plugin in-app tentato, ma bloccato da MCP `missing field sandboxPolicy`; fallback Playwright esterno usato da `C:\tmp\cml153-pw`.

Percorso:

- Home
- Curriculum
- Competenze e progettazione
- Mappa Tecnologia
- Mappa Matematica
- Mappa Italiano
- Esportazioni
- Guida

Risultato:

- nessun console error/pageerror nel flusso ordinario;
- mappe popolano contenuti reali dopo click;
- empty state nascosto quando i dati sono presenti;
- nessun token tecnico visibile nel contenitore mappa.

## Raccomandazione

Aprire `CML-156` come runtime microfix mirato per:

1. ricollocare o gestire `#didattica-mappa` sotto controllo tab;
2. inizializzare la mappa quando si entra in Competenze;
3. correggere `decisionIdx` oppure separarlo in slice immediatamente successivo se si vuole ridurre il rischio.

Il titolo `renderTecnologiaNorm()` puo' essere CML-157 se si vuole tenere CML-156 focalizzato su mappa/import.
