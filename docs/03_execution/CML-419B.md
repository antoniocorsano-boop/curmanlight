# CML-419B — Technical Table Coherence Audit

## Mandatory Slice Header

- Macroprogramma: PM-09 Validazione con utenti / Architettura informativa / Source Verification Agent
- Dipende da: CML-419, CML-419A
- Tipo slice: docs/audit-only remoto
- Branch: `remote-lab/cml-419-in2012-in2025-technical-table`
- Runtime: non modificato
- Main: non modificato

## Obiettivo

Verificare la coerenza complessiva del pacchetto CML-419 dopo l'integrazione del Source Verification Agent e della matrice fonti riconciliata con le fonti già definite nel repository.

La slice decide se esistono le condizioni per progettare CML-420 come prototipo informativo/navigazionale, senza ancora modificare il runtime.

## Materiali verificati

| Documento | Stato |
|---|---|
| `docs/03_execution/CML-419.md` | presente |
| `docs/03_execution/CML-419A.md` | presente |
| `docs/04_design/CML-419_tavolo_tecnico_in2012_in2025.md` | presente |
| `docs/04_design/CML-419_mock_integrale_viste.md` | presente |
| `docs/04_design/CML-419_source_verification_agent.md` | presente |
| `docs/04_design/CML-419_initial_source_matrix.md` | presente e riconciliata con fonti repo |
| `report/CML-419_agentic_auditors_review.md` | presente |
| `report/CML-419_source_verification_agent_audit.md` | presente |
| `report/CML-419A_repo_defined_sources_audit.md` | presente |

## Esito fonte/perimetro

La matrice fonti aggiornata consente di distinguere tre livelli:

1. **Fonte confermata esternamente**: D.M. 254/2012 tramite Gazzetta Ufficiale.
2. **Fonti repo-defined, verifica esterna pendente**: Scuola in Chiaro, codice meccanografico, sito istituto, PTOF, RAV.
3. **Fonti ancora caute o non risolte**: IN2025 candidata MIM con accesso 403 dalla sessione, eventuale atto/nota IN2025, curricolo verticale pubblicato.

Questa distinzione è sufficiente per un prototipo CML-420 **solo se** il prototipo usa etichette prudenti e non presenta le fonti locali come certificate esternamente.

## Audit di coerenza del sistema a quattro ambienti

### 1. Curricolo

Coerente.

Motivazione:

- include consultazione, estrazione, fonti, versioni, definitivo e processo aggiornamento;
- consente di collocare il processo di revisione dentro Curricolo, non nella Home;
- permette di distinguere vigente, proposta, revisione, adottata e superata;
- può mostrare fonte e stato senza trasformare l'app in sistema deliberativo.

Condizione:

```text
IN2025 deve restare etichettata come materiale/proposta da verificare finché non è validata da fonte primaria accessibile.
```

### 2. Progettazione didattica

Coerente.

Motivazione:

- evita che CML sia solo visualizzatore del curricolo;
- collega programmazioni, UDA, evidenze e riallineamento alla versione curricolare;
- rispetta il bisogno docente di lavorare su attività reali.

Condizione:

```text
Ogni progettazione deve dichiarare la versione curricolare di riferimento.
```

### 3. Esportazione

Coerente.

Motivazione:

- riduce dispersione di pulsanti e formati;
- parte dallo scopo, dal ruolo e dall'area;
- mantiene chiara la distinzione tra documento, report, estratto e file `.cml`;
- permette di includere avvertenze sullo stato delle fonti.

Condizione:

```text
Ogni export derivato da fonte non definitiva deve riportare stato e uso consentito.
```

### 4. Wiki del curricolo

Coerente e necessaria.

Motivazione:

- la complessità IN2012/IN2025 non può essere scaricata sulla Home;
- serve un luogo stabile per spiegare fonti, ruoli, processo, lessico e limiti;
- trasforma la guida da manuale tecnico a supporto curricolare e istituzionale.

Condizione:

```text
La Wiki non deve diventare deposito caotico: deve essere strutturata per domande d'uso e per fonti.
```

## Audit sulle viste principali

| Vista | Coerenza | Decisione |
|---|---|---|
| Home | Alta | Deve mostrare solo quattro accessi + stato sintetico |
| Curricolo / Consulta | Alta | Prototipabile con fonte/stato visibili |
| Curricolo / Estrai | Alta | Prototipabile come estrazione guidata |
| Curricolo / Fonti | Alta | Da alimentare con Source Verification Agent |
| Curricolo / Definitivo | Media | Va prototipata con stato prudente: non disponibile/in preparazione/adottato solo se atto esterno |
| Curricolo / Processo aggiornamento | Alta | Visibile solo quando attivo |
| Curricolo / Versioni | Alta | Necessaria per IN2012/IN2025 e storico |
| Progettazione / Evidenze | Alta | Prototipabile |
| Progettazione / Programmazione annuale | Alta | Prototipabile |
| Progettazione / UDA modello | Alta | Prototipabile |
| Progettazione / Collegamenti curricolo | Alta | Necessaria |
| Progettazione / Riallineamento | Media | Prototipabile come segnalazione, non automazione complessa |
| Esportazione / Per scopo | Alta | Prioritaria |
| Esportazione / Per ruolo | Alta | Prioritaria |
| Esportazione / Per area | Media | Utile ma non prioritaria |
| Esportazione / File `.cml` | Alta | Necessaria per flusso esistente |
| Esportazione / Report | Alta | Necessaria |
| Esportazione / Copia di sicurezza | Media | Utile ma secondaria |
| Wiki / IN2012 e IN2025 | Alta | Prioritaria |
| Wiki / Istituto | Alta | Usare fonti repo-defined con cautela |
| Wiki / Ruoli | Alta | Prioritaria |
| Wiki / Processo | Alta | Prioritaria |
| Wiki / Lessico | Alta | Prioritaria |
| Vista mobile | Alta | Deve essere progettata, non derivata automaticamente |

## Contraddizioni o punti critici rilevati

### R-001 — IN2025 ancora non chiusa come fonte primaria accessibile

Il repository usa già riferimenti a D.M. 221/2025 e Indicazioni 2025 come materiale di lavoro. Tuttavia, la matrice CML-419A non ha ancora una fonte MIM pienamente accessibile dalla sessione.

Decisione:

```text
Usare sempre etichetta prudente: Indicazioni 2025 / proposta da valutare / materiale di lavoro.
```

### R-002 — Fonti istituto repo-defined ma non certificate esternamente nella sessione

Il repo contiene sito, Scuola in Chiaro, PTOF e RAV coerenti tra JSON e markdown. Questo basta per il prototipo, non per dichiarazione certificativa definitiva.

Decisione:

```text
Usare come base interna CML con nota: fonte definita nel repository, verifica esterna pendente.
```

### R-003 — Curricolo verticale pubblicato non risolto

Non è ancora stato individuato nel repo un file o URL del curricolo verticale pubblicato della scuola.

Decisione:

```text
Non mostrare Curricolo definitivo come adottato finché SRC-016 non è risolta.
```

### R-004 — Rischio di sovradimensionamento del mock

Il mock integrale copre molte viste. Portarle tutte subito in runtime sarebbe rischioso.

Decisione:

```text
CML-420 deve essere prototipo IA/navigazione, non implementazione completa.
```

## Decisione per CML-420

CML-420 può procedere solo come:

```text
prototipo informativo e navigazionale verificabile
```

Non deve ancora essere:

- redesign definitivo;
- modifica completa del runtime;
- cambio stack;
- backend;
- integrazione Drive/Workspace;
- sistema deliberativo;
- implementazione completa del processo curricolare.

## Perimetro consigliato CML-420

### Dentro CML-420

- Home a quattro accessi;
- architettura informativa principale;
- mappa navigazionale Curricolo / Progettazione / Esportazione / Wiki;
- microcopy di stato fonte/versione;
- wireframe logico desktop e mobile;
- priorità viste da prototipare;
- checklist usabilità per test utenti.

### Fuori da CML-420

- modifica profonda dati curricolari;
- approvazione/adottabilità curricolo;
- nuovo sistema ruoli;
- backend;
- sincronizzazione cloud;
- refactor stack;
- automazioni di crawling fonti;
- generazione documenti finali da fonti non certificate.

## Priorità CML-420

```text
P1 — Home + navigazione principale a quattro ambienti
P1 — Curricolo: Consulta / Fonti / Versioni / Processo attivo
P1 — Esportazione per scopo e ruolo
P1 — Wiki: IN2012-IN2025 / Fonti / Ruoli / Processo / Limiti
P2 — Progettazione didattica: mappa, non implementazione piena
P2 — Mobile: struttura navigazionale essenziale
P3 — Riallineamento progettazioni e storico versioni avanzato
```

## Criteri di accettazione CML-420

CML-420 dovrà passare questi criteri:

1. L'utente vede subito quattro accessi principali.
2. Il processo di aggiornamento non invade la Home.
3. IN2025 non è mai presentata come vigente.
4. Le fonti repo-defined sono etichettate con cautela.
5. Curricolo definitivo non è presentato come adottato senza SRC-016 o atto esterno.
6. Esportazione parte dallo scopo, non dal formato.
7. Wiki spiega fonti, ruoli e limiti.
8. Mobile ha logica propria.
9. Nessuna modifica runtime profonda viene fatta senza slice successiva.

## Decisione finale CML-419B

Il pacchetto CML-419 è coerente e sufficiente per passare a CML-420 **come prototipo navigazionale/documentale**, non come runtime definitivo.

## Verdict

```text
CML_419B_TECHNICAL_TABLE_COHERENCE_AUDIT_READY_REMOTE_BRANCH
```
