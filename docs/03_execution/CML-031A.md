# CML-031A — Full Curriculum References Requirement Contract

## Stato

Correzione del contratto di CML-031. Il requisito non è "schede sintetiche + link" ma **visualizzazione completa e navigabile** dei documenti curricolari istituzionali 2012 e 2025.

Docs-only. Nessuna implementazione.

## Preflight

| Controllo          | Esito                                                             |
| ------------------ | ----------------------------------------------------------------- |
| HEAD partenza      | `0072e03` — docs: select curriculum references viewer approach ✅ |
| Branch             | `cml-008r-fix-markdown-decision-summary` ✅                       |
| Working tree       | Pulita (untracked: `.kilo/`, `CLAUDE.md`, `MEMORY.md`) ✅         |
| MEMORY.md presente | ✅ (non committato)                                               |
| git diff --check   | Nessun whitespace error ✅                                        |
| Runtime modificato | ❌ Nessuno                                                        |

## Requisito corretto

La sezione "Fonti curricolari" deve rendere sempre possibile la **visualizzazione completa** dei documenti curricolari istituzionali:

- **Indicazioni nazionali 2012** — D.M. 254/2012
- **Indicazioni nazionali 2025** — D.M. 9 dicembre 2025, n. 221 (o fonte ministeriale ufficiale corrispondente)

La consultazione sintetica è ammessa solo come supporto, **non sostituisce** la visualizzazione completa del testo istituzionale.

## Principi obbligatori

### 1. Completezza

L'utente deve poter visualizzare l'intero documento 2012 e l'intero documento 2025.

### 2. Navigabilità

I documenti devono essere consultabili per parti:

- Quadro generale, finalità, profilo dello studente
- Organizzazione del curricolo, campi di esperienza (se presenti)
- Discipline, traguardi, obiettivi di apprendimento
- Sezioni rilevanti per la revisione del curricolo

### 3. Fonte istituzionale

I documenti visualizzati devono corrispondere a fonti istituzionalmente valide. Non usare testi ricostruiti o copie non verificate come fonte primaria.

### 4. Stato del documento

Se un documento è transitorio, in fase di applicazione o non ancora pienamente applicabile, l'app deve mostrarlo con un messaggio chiaro, senza impedirne la visualizzazione.

### 5. Distinzione tra fonte e materiale di lavoro

L'app deve distinguere chiaramente:

- fonte ministeriale vs visualizzazione del testo
- scheda sintetica di orientamento vs proposta docente
- esito dipartimentale vs report gruppo curricolo
- curricolo di istituto da validare

### 6. Nessuna falsa approvazione

La presenza di un testo nell'app non implica approvazione del curricolo di istituto.

### 7. Nessuna riduzione a link

I link ufficiali sono necessari ma non sufficienti. Il requisito è consultazione completa dentro lo strumento o tramite viewer integrato/controllato.

### 8. Prudenza sui testi ministeriali

Prima di incorporare testi completi, valutare: fonte, formato, peso, accessibilità, aggiornabilità, rischio di disallineamento.

## Opzioni tecniche per CML-032

### Opzione A — Viewer PDF ufficiale completo

Accesso/visualizzazione ai PDF ufficiali completi, con indice interno che orienta l'utente alle parti del documento.
Valutare se i PDF restano linkati o sono inclusi come asset statici verificati.

- Rischio: basso (documento originale)
- Peso: medio-alto (PDF)
- Manutenzione: bassa

### Opzione B — Testo strutturato completo nell'app

Trasformare i testi ufficiali in dati strutturati navigabili (JSON/HTML).

- Rischio: alto (accuratezza, manutenzione, allineamento fonte)
- Peso: medio
- Manutenzione: alta

### Opzione C — Soluzione mista forte (preferita)

- Viewer completo del documento ufficiale (PDF o testo)
- Indice navigabile interno
- Schede sintetiche di orientamento
- Stato istituzionale del documento
- Link alla fonte MIM
- **Raccomandata** se tecnicamente sostenibile

## Rischi documentati

| Rischio                 | Descrizione                                                          | Mitigazione                                                                 |
| ----------------------- | -------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| Testo non aggiornato    | Il documento nell'app non corrisponde all'ultima versione MIM        | Usare PDF ufficiale verificato; indicare data di riferimento                |
| Fonte non ufficiale     | Testo ricostruito o riassunto scambiato per fonte                    | Sempre indicare e linkare la fonte MIM                                      |
| Confusione fonte/lavoro | L'utente scambia il testo MIM per curricolo d'istituto già approvato | Avvertenza istituzionale chiara in ogni schermata fonti                     |
| Peso app                | PDF o testi completi appesantiscono l'app                            | Valutare caricamento asincrono; PDF come asset separati                     |
| Accessibilità           | Documenti non accessibili a tutti gli utenti                         | Usare formati accessibili; testo alternativo per contenuti                  |
| Manutenzione            | I testi cambiano e l'app non viene aggiornata                        | Separare dati da logica; aggiornare solo quando MIM pubblica nuove versioni |

## Impatto su CML-032

CML-032 è **sospeso** fino a decisione sul formato tecnico. Le tre opzioni (A, B, C) vanno valutate con attenzione prima di implementare. La preferenza è per **Opzione C — soluzione mista forte**, ma va verificata la sostenibilità tecnica (peso PDF, hosting su Netlify, cache, indice navigabile, accessibilità).

CML-032 dovrà includere:

1. Scelta del formato tecnico
2. Implementazione sezione "Fonti curricolari"
3. Deploy + smoke

## Verdetto

```
CML_031A_FULL_CURRICULUM_REFERENCES_REQUIREMENT_CONTRACT_READY
```

## Output finale

| Campo                     | Valore                                                                                                                                                                                                     |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Verdetto                  | `CML_031A_FULL_CURRICULUM_REFERENCES_REQUIREMENT_CONTRACT_READY`                                                                                                                                           |
| Commit partenza           | `0072e03`                                                                                                                                                                                                  |
| Requisito chiarito        | Visualizzazione completa e navigabile dei documenti curricolari 2012 e 2025; schede sintetiche solo come supporto                                                                                          |
| Opzione tecnica preferita | **C — Soluzione mista forte** (viewer documento completo + indice navigabile + schede + stato + link MIM)                                                                                                  |
| CML-032                   | Sospeso fino a decisione formato tecnico                                                                                                                                                                   |
| MEMORY.md                 | Presente come untracked — non committato ✅                                                                                                                                                                |
| Docs-only                 | ✅                                                                                                                                                                                                         |
| Runtime modificato        | ❌ Nessuno                                                                                                                                                                                                 |
| Deploy                    | ❌ Nessuno                                                                                                                                                                                                 |
| Prossimo step             | **CML-032** — Scelta formato tecnico (A, B, C) + implementazione sezione "Fonti curricolari" + deploy + smoke. Oppure un micro-audit sul formato tecnico se le opzioni non sono sufficientemente valutate. |
