# CML-419 — Confronto critico con auditors agentici

## 1. Scopo

Questo report simula un confronto critico con auditors agentici specializzati. Non sostituisce il tavolo tecnico umano, ma serve a individuare rischi, lacune e condizioni di accettazione prima di procedere a mock runtime.

## 2. Perimetro revisionato

Gli auditors hanno valutato:

- rapporto IN2012/IN2025;
- perimetro del sistema;
- architettura funzionale;
- stack attuale ed evoluzioni;
- mock integrale di tutte le viste importanti;
- ruoli e responsabilità;
- rischi di usabilità;
- rischio di regressione rispetto al runtime attuale.

## 3. Auditor normativo-curricolare

### Osservazioni

1. La distinzione fra curricolo vigente e materiali/proposte IN2025 deve essere sempre esplicita.
2. Ogni vista curricolare deve mostrare lo stato della voce o della versione.
3. La voce `approvata` non deve essere generata dall'app, ma registrata dopo atto esterno.
4. La sezione Fonti deve distinguere fonte ufficiale, materiale di lavoro, elaborazione d'istituto.
5. La Wiki deve spiegare la differenza tra Indicazioni 2012, materiali IN2025, proposta, revisione e adozione.

### Rischi

| Rischio | Gravità | Mitigazione |
|---|---:|---|
| IN2025 percepita come già vigente | Alta | Badge stato e microcopy prudente |
| Confusione tra proposta e documento adottato | Alta | Vista Versioni obbligatoria |
| Processo interno scambiato per approvazione | Alta | Usare `Registra avanzamento`, non `Approva` |

### Verdict auditor

```text
PASS_CON_RISERVA: procedere solo se gli stati curricolari sono sempre visibili.
```

## 4. Auditor didattico

### Osservazioni

1. Il sistema ideale deve valorizzare Progettazione didattica come ambiente autonomo.
2. UDA, programmazione annuale ed evidenze devono essere collegate a una versione curricolare.
3. Le progettazioni collegate a versioni superate devono essere segnalate.
4. La progettazione non deve limitarsi a copiare testo dal curricolo.
5. Il docente deve poter partire da un bisogno didattico concreto.

### Rischi

| Rischio | Gravità | Mitigazione |
|---|---:|---|
| Progettazione ridotta ad appendice del curricolo | Alta | Ambiente Progettazione autonomo |
| Mancanza di collegamento curricolo-UDA | Alta | Sotto-vista Collegamenti curricolo |
| Sovraccarico per docente non tecnico | Media | Azioni orientate al compito |

### Verdict auditor

```text
PASS: la struttura proposta è didatticamente coerente se il collegamento curricolo-progettazione diventa requisito primario.
```

## 5. Auditor architetturale

### Osservazioni

1. Lo stack attuale è prudente e adatto alla fase corrente.
2. Non va introdotto backend prima di stabilizzare il modello informativo.
3. La modularizzazione futura è auspicabile, ma non deve precedere il mock integrale.
4. Il runtime single-file richiede patch locali controllate.
5. Ogni modifica runtime dovrà mantenere allineati `index.html` e `_published_snapshot/netlify-current/index.html`.

### Rischi

| Rischio | Gravità | Mitigazione |
|---|---:|---|
| Refactor prematuro dello stack | Alta | CML-419 solo docs/design |
| Runtime modificato via sostituzione completa remota | Alta | Patch locale controllata |
| Divergenza root/snapshot | Alta | Controllo obbligatorio su entrambi i file |
| Crescita del file unico ingestibile | Media | Piano di modularizzazione successivo |

### Verdict auditor

```text
PASS_CON_RISERVA: nessun cambio stack prima di prototipo e test.
```

## 6. Auditor usabilità/accessibilità

### Osservazioni

1. La Home a quattro accessi è più comprensibile del processo completo in evidenza permanente.
2. Il processo deve emergere come stato contestuale del Curricolo.
3. Il centro Esportazione deve partire dallo scopo, non dal formato.
4. La Wiki deve diventare supporto contestuale e non solo manuale.
5. La vista mobile deve essere progettata separatamente.

### Rischi

| Rischio | Gravità | Mitigazione |
|---|---:|---|
| Home troppo densa | Media | Quattro card + stato compatto |
| Esportazioni confuse | Alta | Export per scopo e ruolo |
| Mobile derivato male dal desktop | Media | Mock mobile autonomo |
| Lessico tecnico | Media | Wiki/lessico e microcopy scolastico |

### Verdict auditor

```text
PASS: la direzione migliora orientamento e carico cognitivo.
```

## 7. Auditor governance scolastica

### Osservazioni

1. Il sistema deve mantenere fuori dall'app le decisioni formali.
2. Il referente coordina e registra avanzamento, non approva.
3. Gli organi collegiali devono restare esplicitamente fuori dal flusso automatico.
4. Il dirigente deve avere vista di stato e report, non pulsanti deliberativi.
5. Ogni documento esportato deve essere presentato come materiale di lavoro da verificare.

### Rischi

| Rischio | Gravità | Mitigazione |
|---|---:|---|
| App percepita come sistema di approvazione | Alta | Microcopy istituzionale prudente |
| Referente sovraccaricato di potere decisionale | Alta | Ruolo definito come coordinamento |
| Documenti esportati percepiti come finali | Media | Stato e avvisi nei documenti |

### Verdict auditor

```text
PASS_CON_RISERVA: governance corretta se l'app registra, non delibera.
```

## 8. Sintesi criticità trasversali

| Criticità | Priorità | Decisione |
|---|---:|---|
| Stato IN2025 ambiguo | P1 | Definire sempre come materiale/proposta finché non adottato |
| Processo troppo invasivo | P1 | Collocarlo dentro Curricolo, attivo solo quando serve |
| Progettazione non collegata al curricolo | P1 | Collegamento obbligatorio a versione e obiettivi/traguardi |
| Esportazioni sparse | P2 | Centro unico per scopo/ruolo/area |
| Wiki ridotta a guida tecnica | P2 | Evoluzione in Wiki del curricolo |
| Mobile non progettato | P2 | Mock mobile dedicato |
| Stack cambiato troppo presto | P1 | Nessun cambio stack in CML-419/CML-420 iniziale |

## 9. Raccomandazione congiunta degli auditors

Procedere con la seguente sequenza:

```text
CML-419 — Tavolo tecnico e mock integrale
↓
Revisione umana del tavolo tecnico
↓
CML-420 — Prototipo IA/navigazione principale verificabile
↓
Test utente leggero sulle quattro aree
↓
Decisione su eventuale runtime progressivo
```

## 10. Decisione finale

Non procedere ancora con modifica runtime.

CML-419 deve essere considerato un pacchetto di analisi e pre-design che preserva:

- rapporto IN2012/IN2025;
- perimetro istituzionale;
- sistema a quattro ambienti;
- tutte le viste importanti;
- architettura prudente;
- mock logico completo;
- audit critico.

## Verdict

```text
CML_419_AGENTIC_AUDITORS_REVIEW_READY_REMOTE_BRANCH
```
