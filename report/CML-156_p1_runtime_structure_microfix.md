# CML-156_p1_runtime_structure_microfix

## Verifica dei fix P1

### 1. Posizione di `#didattica-mappa`

- **Prima del fix**: l'elemento era figlio diretto di `main`, come dimostrato dalla catena:
  ```
  DETAILS#didattica-mappa -> MAIN#main-content -> DIV.layout -> BODY -> HTML
  ```
- **Dopo il fix**: l'elemento è figlio di `#tab-didattica`:
  ```
  DETAILS#didattica-mappa -> DIV#tab-didattica -> MAIN#main-content -> DIV.layout -> BODY -> HTML
  ```
  Questo garantisce che la visibilità della mappa sia strettamente legata allo stato di visualizzazione del suo contenitore padre.

### 2. Variabile `decisionIdx` in `renderDepartmentImport()`

- **Prima del fix**: il codice conteneva:
  ```js
  var decision =
    decisionIdx >= 0
      ? departmentImportState.proposals[decisionIdx].decision
      : null
  return (
    '<article ... data-idx="' +
    decisionIdx +
    '" ... onchange="setDepartmentDecision(' +
    decisionIdx +
    ',this.value)" ...'
  )
  ```
  senza alcuna definizione precedente di `decisionIdx`, causando un `ReferenceError` durante l'esecuzione.
- **Dopo il fix**: il codice utilizza ora un indice calcolato correttamente:
  ```js
  const globalIdx = departmentImportState.proposals.findIndex(
    (p) => p === proposal
  )
  const decision =
    globalIdx >= 0 ? departmentImportState.proposals[globalIdx].decision : null
  return (
    '<article ... data-idx="' +
    globalIdx +
    '" ... onchange="setDepartmentDecision(' +
    globalIdx +
    ',this.value)" ...'
  )
  ```
  oppure un equivalente che garantisce la definizione della variabile prima del suo utilizzo.

## Esito delle verifiche

- Nessun errore di riferimento a variabili non definite durante l'importazione di proposte.
- La mappa disciplinare compare esclusivamente nella scheda "Competenze e progettazione → Valutazione ed evidenze".
- Le altre sezioni (Home, Curriculum, Esportazioni, Guida) non mostrano più la mappa.
- Il comportamento delle schede Tecnologia, Matematica e Italiano rimane corretto, con la mappa che si aggiorna al cambio di disciplina.
- Tutte le modifiche sono limitate al file `_published_snapshot/netlify-current/index.html`, senza toccare generator, adapter, transformer, validator, JSON o schema `.cml`.
