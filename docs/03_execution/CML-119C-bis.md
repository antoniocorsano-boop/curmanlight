# CML-119C-bis — DISCIPLINARY_KNOWLEDGE_CONTENT_GOVERNANCE_AUDIT

## Contesto
- CML-119A: gap epistemologico-disciplinare rilevato
- CML-119B: validatore multi-disciplina generalizzato
- CML-119C: contratto `cml-disciplinary-knowledge-map-v1` definito
- **Prima di CML-119D**: audit per evitare generazione arbitraria di contenuti disciplinari

## Principio guida
Nessun contenuto epistemologico o disciplinare deve essere inventato dal sistema senza:
1. Una fonte documentata
2. Una validazione umana esplicita

Matrice di classificazione per campo del contratto (Tecnologia, Matematica, Italiano):

| Campo | A. Derivabile dai dati esistenti | B. Derivabile parzialmente e da validare | C. Non derivabile / Richiede intervento umano | Note per pilota |
|-------|----------------------------------|------------------------------------------|-----------------------------------------------|-----------------|
| `statutoEpistemologico` | | | ✅ | Riconoscimento disciplinare: Tecnologia (scienza applicata/tecnologica), Matematica (scienza formale/logica), Italiano (scienza linguistica/letteraria). Nessun algoritmo può classificare. |
| `naturaDisciplina` | | | ✅ | Posizionamento istituzionale: richiede conoscenza del PTOF, dell'offerta formativa di istituto, delle scelte del Collegio. Non deducibile dai dati. |
| `sintassiDisciplinare` | | | ✅ | Caratterizzazione metodologica: richiede analisi disciplinare (es. Italiano = analisi testuale/lessicale/sintattica; Matematica = formalizzazione/astrazione; Tecnologia = progettazione/iterazione). Interpretazione specialistica. |
| `struttureSostanziali` | | ✅ | | Parzialmente derivabile da `ambito` + `nucleo` esistenti. Es. Matematica: Numeri, Spazio e figure, Relazioni e funzioni, Dati e previsioni, Informatica. Ma la categorizzazione in strutture sostanziali richiede interpretazione. |
| `saperiEssenziali` | | ✅ | | Derivabile per selezione da `traguardo` + `obiettivi` esistenti. Ma "essenziali" implica una gerarchia di valore che richiede validazione dipartimentale. |
| `nodiDisciplinari` | | ✅ | | Derivabile da `nucleo` (Matematica, Italiano) e da `ambito` (Tecnologia). Ma la decomposizione in nodi epistemologici/sostanziali/metodologici è un'operazione interpretativa. |
| `legamiInterdisciplinari` | | ✅ | | Derivabile per sovrapposizione di ambiti (es. Matematica-Informatica-Tecnologia). Ma i legami espliciti con altre discipline richiedono mappatura umana e motivazione. |
| `competenzeChiaveEuropee` | | ✅ | | Derivabile per allineamento con traguardi (es. competenza alfabetica → Italiano). Ma l'attribuzione esplicita a quadro europeo richiede fonte documentata (Raccomandazione 2006/962/CE) e validazione. |
| `progressioneVerticale` | ✅ (template) | ✅ (contenuto) | | Template derivabile da unità esistenti (mappatura `ambito` → `ordine`/`classe`). Ma la descrizione testuale della progressione è interpretativa e richiede validazione. |
| `decisioniCurricolari` | | ✅ | | Derivabile da `noteDipartimento` + `stato` delle unità. Le decisioni implicite (inclusioni, esclusioni, enfasi) possono essere formalizzate, ma ogni decisione richiede motivazione umana. |

## Analisi per disciplina pilota

### Tecnologia
- Struttura esistenti: 13 unità, 2 Infanzia, 4 Primaria, 7 Secondaria
- Nuclei: **nessuno** (tutti i campi `nucleo` assenti)
- Ambiti: Osservazione/analisi, Digitale/dati/procedure, Materiali/trasformazioni, Disegno/rappresentazione, Energia/sostenibilità, Cittadinanza tecnologica
- Fonti: IN2012 DM254/2012 (7), DM221/2025 (3), PTOF 2025-2028 (1), Curricolo di istituto Agenda2030 (1)
- **Rischio inventazione**: Basso per strutture/ambiti, Medio per nodi/epistemologia, Alto per legami interdisciplinari (dipendono da altre discipline)

### Matematica
- Struttura esistenti: 13 unità, 1 Infanzia, 5 Primaria (classi 1,5), 7 Secondaria (classi 1-3)
- Nuclei: Numeri (4), Spazio e figure (2), Relazioni e funzioni (2), Informatica (2), Dati e previsioni (1)
- Ambiti: Numeri/calcolo, Geometria/orientamento, Relazioni/dati/previsioni, Informatica/pensiero computazionale, Dati/statistiche, Educazione finanziaria
- Fonti: IN2012 DM254/2012 (6), DM221/2025 (5), Legge92/2019 (1)
- **Rischio inventazione**: Basso per progressione esistente, Medio per nodi (nuclei già presenti ma da interpretare), Alto per competenze chiave (mappatura non documentata)

### Italiano
- Struttura esistenti: 14 unità, 3 Infanzia, 5 Primaria, 6 Secondaria
- Nuclei: Ascolto (3), Parlato (3), Lettura (3), Scrittura (2), Riflessione sulla lingua (2), Acquisizione lessico (1)
- Ambiti: Ascolto/comunicazione orale, Produzione orale/interazione, Avvicinamento scrittura, Lettura/comprensione, Produzione scritta/ortografia, Acquisizione lessico, Riflessione sulla lingua
- Fonti: IN2012 DM254/2012 (7), DM221/2025 (6)
- **Rischio inventazione**: Basso per strutture/ambiti, Medio per nodi (nuclei già presenti ma da interpretare), Medio per competenze chiave (allineamento con quadro UE non documentato)

## Matrice finale: derivabilità per campo

```
                        | Tec | Mat | Ita | Notes
------------------------|-----|-----|-----|------------------------------------------
statutoEpistemologico   |  C  |  C  |  C  | Expertise specialistica richiesta
naturaDisciplina        |  C  |  C  |  C  | Contesto istituzionale non nei dati
sintassiDisciplinare    |  C  |  C  |  C  | Caratterizzazione metodologica
struttureSostanziali    |  B  |  B  |  B  | Derivabili da ambiti+nuclei, da validare
saperiEssenziali        |  B  |  B  |  B  | Selezionabili da traguardi, da validare
nodiDisciplinari        |  B  |  B  |  B  | Derivabili da nuclei (Mat/Ita) o ambiti (Tec), da validare
legamiInterdisciplinari |  B  |  B  |  B  | Derivabili per sovrapposizione, da validare
competenzeChiaveEuropee |  B  |  B  |  B  | Allineabili ai traguardi, fonte da documentare
progressioneVerticale   |  A* |  A* |  A* | Template derivabile; contenuto da validare
decisioniCurricolari    |  B  |  B  |  B  | Formalizzabili da note+stato, da validare
```

`A*` = il template/la struttura sono derivabili, ma il contenuto testuale richiede validazione.

## Regole operative per CML-119D

### 1. Cosa può essere normalizzato automaticamente
- **Niente**. Nessun campo nuovo può essere popolato automaticamente senza rischio di inventazione.
- L'unica computazione automatica ammessa è il calcolo della copertura verticale (già implementato in CML-119B).

### 2. Cosa può essere solo precompilato
- `progressioneVerticale`: template vuoto o con mappatura automatica delle unità esistenti (`ambito` → `ordine`/`classe`), ma senza testo descrittivo generato
- `decisioniCurricolari`: elenco vuoto o con proposte tratte da `noteDipartimento`, ma tutte in stato `da_validare` senza motivazione generata
- `struttureSostanziali`: mappatura 1:1 da `ambito` esistente (senza interpretazione aggiuntiva)

### 3. Cosa deve rimanere "da compilare"
- `statutoEpistemologico`
- `naturaDisciplina`
- `sintassiDisciplinare`
- `saperiEssenziali`
- `nodiDisciplinari`
- `legamiInterdisciplinari`
- `competenzeChiaveEuropee`

Questi campi, se presenti nel file normalizzato, devono essere compilati da personale docente/dipartimentale, non generati da script.

### 4. Cosa deve essere marcato "da_validare"
- **Tutti** i nuovi campi e tutti gli array del contratto, anche se precompilati.
- Ogni nodo, legame, competenza, decisione deve avere `stato: "da_validare"` se inserita nel file.
- Nessun campo può essere marcato come approvato, definitivo, certificato, conforme.
- Il validatore CML-119B (attuale) non controlla i nuovi campi. CML-119D o successivi aggiungeranno controlli specifici.

### 5. Regole di non inventazione (ribadite)
1. Non inventare `statutoEpistemologico`: è una scelta disciplinare dell'Istituto.
2. Non inventare `naturaDisciplina`: dipende dal PTOF e dall'offerta formativa di istituto.
3. Non inventare `sintassiDisciplinare`: richiede analisi disciplinare condivisa.
4. Non inventare `struttureSostanziali`: sono mappabili da `ambito` ma non interpretabili.
5. Non inventare `saperiEssenziali`: ogni selezione implica un giudizio di valore educativo.
6. Non inventare `nodiDisciplinari`: ogni nodo deve avere `id`, `tipo`, `descrizione`, `fonte` — senza fonte, non esiste.
7. Non inventare `legamiInterdisciplinari`: ogni legame richiede `motivazione` e `fonte` umana.
8. Non inventare `competenzeChiaveEuropee`: ogni attribuzione richiede riferimento al quadro UE e verifica.
9. Non inventare `progressioneVerticale`: ogni descrizione deve essere tratta dai traguardi esistenti, non da sintesi generiche.
10. Non inventare `decisioniCurricolari`: ogni decisione deve avere `motivazione` e `fonte` umana.

### 6. Protocollo di compilazione per CML-119D
1. Selezionare 2-3 discipline pilota (Tecnologia, Matematica, Italiano)
2. Per ogni disciplina:
   a. Lasciare vuoti i campi C (non derivabili)
   b. Precompilare solo i campi B (derivabili parzialmente) come **proposte** in stato `da_validare`
   c. Documentare ogni proposta con fonte esplicita
   d. Mantenere `validazioneUmana: true` (conferma del compilatore)
3. Eseguire validatore CML-119B (già implementato)
4. Verificare che nessun nuovo contenuto sia stato inventato senza fonte

## Vincoli rispettati
- ✅ Audit-only, nessuna modifica runtime
- ✅ Nessuna modifica a `_published_snapshot/netlify-current/index.html`
- ✅ Nessuna modifica export/import
- ✅ Nessuna modifica schema `.cml`
- ✅ Nessuna modifica JSON disciplinari
- ✅ Nessuna modifica validatore
- ✅ Nessun contenuto epistemologico inventato
- ✅ Nessuna nuova UI, persistenza, backend, API, autenticazione

## Prossimo incremento
**CML-119D — DISCIPLINARY_KNOWLEDGE_MAP_PILOT_NORMALIZATION**
- Applicare il contratto a 2-3 discipline pilota
- Rispettando rigorosamente le regole di governance definite in questo audit

## Verdetto
```text
CML_119C_BIS_DISCIPLINARY_KNOWLEDGE_CONTENT_GOVERNANCE_AUDIT_READY
```
