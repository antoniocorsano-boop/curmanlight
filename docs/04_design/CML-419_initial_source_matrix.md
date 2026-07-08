# CML-419 — Matrice fonti iniziale

## 1. Scopo

Questa matrice avvia il lavoro del Source Verification Agent. Non è ancora un repertorio completo delle fonti: distingue le fonti già confermate, le fonti candidate e le fonti da reperire o verificare con URL stabile.

Data di prima compilazione: 2026-07-08.
Ultimo aggiornamento gate: 2026-07-08.

## 2. Regola di prudenza

Nessuna fonte priva di URL stabile, data di accesso e classificazione può essere usata per:

- definire una versione come vigente;
- qualificare IN2025 come adottata;
- alimentare documenti definitivi;
- sostenere decisioni di governance scolastica.

Le fonti candidate o non risolte possono orientare la ricerca, ma non alimentare direttamente il runtime o i mock definitivi.

## 3. Legenda affidabilità

| Livello | Descrizione | Uso ammesso |
|---|---|---|
| A | Fonte normativa o istituzionale primaria | Base primaria |
| B | Anagrafica ufficiale o registro pubblico istituzionale | Verifica dati istituto |
| C | Fonte istituzionale locale della scuola | Contesto locale e documenti pubblici |
| D | Documento di lavoro o materiale interno | Solo istruttoria |
| E | Fonte secondaria non ufficiale | Orientamento, mai base decisionale |
| NR | Non risolta/non verificata | Non usare per decisioni |

## 4. Fonti confermate o parzialmente confermate

| ID | Fonte | Tipo | Livello | URL / reperimento | Data accesso | Stato | Viste collegate | Uso consentito | Nota cautelativa |
|---|---|---|---|---|---|---|---|---|---|
| SRC-001 | Gazzetta Ufficiale — Decreto 16 novembre 2012, n. 254 | Normativa primaria | A | https://www.gazzettaufficiale.it/eli/id/2013/02/05/13G00034/sg | 2026-07-08 | verificata_ufficiale | Curricolo/Fonti, Curricolo/Versioni, Wiki/IN2012 e IN2025 | Base normativa primaria per D.M. 254/2012 e Indicazioni 2012 | Fonte confermata: decreto 16 novembre 2012, n. 254; GU Serie Generale n. 30 del 05-02-2013; entrata in vigore 20-02-2013 |
| SRC-002 | MIM — PDF DM 254/2012 | Documento ministeriale allegato/riferimento | A-candidato | https://www.mim.gov.it/documents/20182/51310/DM+254_2012.pdf | 2026-07-08 | candidato_non_accessibile_da_sessione_403 | Curricolo/Fonti, Wiki/IN2012 e IN2025 | Da usare solo dopo verifica diretta del file | URL stabile individuato, ma accesso da sessione non completato per risposta 403; verificare manualmente o con browser locale |
| SRC-003 | Indicazioni Nazionali 2012 — riferimento enciclopedico | Fonte secondaria | E | https://it.wikipedia.org/wiki/Indicazioni_nazionali_per_il_curricolo_della_scuola_dell%27infanzia_e_del_primo_ciclo_di_istruzione | 2026-07-08 | secondaria_supporto | Solo ricerca preliminare | Orientamento terminologico e ricerca di link primari | Non usare come fonte normativa primaria |
| SRC-010 | MIM — pagina ufficiale/candidata IN2025 | Pagina ministeriale candidata | A-candidato | https://www.mim.gov.it/-/indicazioni-nazionali-per-il-curricolo-scuola-dell-infanzia-e-scuole-del-primo-ciclo-di-istruzione | 2026-07-08 | candidato_non_accessibile_da_sessione_403 | Curricolo/Fonti, Curricolo/Versioni, Wiki/IN2012 e IN2025 | Solo come fonte candidata fino a verifica manuale | URL individuato tramite fonte secondaria; accesso diretto non riuscito per risposta 403; non classificare IN2025 come vigente/adottata |

## 5. Fonti da reperire, verificare o dichiarare non risolte

| ID | Fonte da verificare | Tipo atteso | Livello atteso | Stato | Azione richiesta | Vista collegata | Rischio se non verificata |
|---|---|---|---|---|---|---|---|
| SRC-011 | Eventuale decreto, nota o comunicato MIM collegato a IN2025 | Ministeriale / normativa / comunicazione ufficiale | A | non_risolta | Verificare natura dell'atto e data; nessun risultato stabile trovato in questa sessione | Curricolo/Versioni, Processo aggiornamento | Alto: rischio confusione fra proposta e atto vigente |
| SRC-012 | Scuola in Chiaro — I.C. Calvario-Covotta «don Lorenzo Milani» | Anagrafica pubblica istituzionale | B | non_risolta | Reperire scheda tramite denominazione esatta, comune e/o codice meccanografico; nessun risultato stabile trovato in questa sessione | Wiki/Istituto, Curricolo/Fonti | Medio: dati istituto non validati da fonte pubblica |
| SRC-013 | Codice meccanografico istituto | Anagrafica ufficiale | B | da_verificare | Confermare codice usato nei documenti CML con Scuola in Chiaro | Wiki/Istituto, esportazioni | Medio: rischio intestazioni non allineate |
| SRC-014 | Sito istituzionale scuola | Fonte locale istituzionale | C | non_risolta | Reperire URL ufficiale e verificare dominio; nessun risultato stabile trovato in questa sessione con denominazioni note | Wiki/Istituto, Curricolo/Fonti | Medio: impossibile collegare PTOF/curricolo locale |
| SRC-015 | PTOF pubblicato | Documento scolastico locale | C | non_risolta | Reperire versione, annualità, atto o sezione pubblicazione; dipende da SRC-014 | Curricolo/Fonti, Wiki/Processo | Alto: perimetro curricolo/PTOF non verificato |
| SRC-016 | Curricolo verticale pubblicato dalla scuola | Documento scolastico locale | C | non_risolta | Reperire file o pagina ufficiale, data e stato; dipende da SRC-014 | Curricolo/Consulta, Curricolo/Definitivo | Alto: il sistema non può distinguere vigente locale da materiale di lavoro |
| SRC-017 | RAV / Rendicontazione / documenti valutativi pubblici | Documento scolastico / piattaforma pubblica | C/B | non_risolta | Verificare presenza su sito scuola o portali pubblici; dipende da SRC-012/SRC-014 | Wiki/Istituto, governance | Medio: quadro di autovalutazione non collegato |
| SRC-018 | Regolamenti, delibere, organigramma/funzionigramma | Documento locale | C | non_risolta | Reperire solo se utili al processo curricolare; dipende da SRC-014 | Wiki/Ruoli, governance | Basso/medio: ruoli locali non verificati |

## 6. Classificazione provvisoria IN2012 / IN2025

| Oggetto | Stato provvisorio CML-419A | Fonte primaria disponibile | Decisione prudenziale |
|---|---|---|---|
| Indicazioni Nazionali 2012 | riferimento normativo primario confermato per D.M. 254/2012 | SRC-001 | Usabile come fonte normativa primaria per il quadro 2012; eventuale PDF MIM resta da verificare separatamente |
| IN2025 | materiale/proposta/possibile transizione da verificare | SRC-010 candidato, non accessibile da sessione | Non usare come vigente; usare solo con etichetta prudente fino a verifica ufficiale stabile e classificazione del tavolo tecnico |
| Curricolo verticale d'istituto | documento locale da reperire | SRC-016 non risolta | Non dichiarare definitivo finché non verificato su fonte locale/atto |

## 7. Impatto sulle viste

| Vista | Fonte necessaria | Stato attuale |
|---|---|---|
| Curricolo / Consulta | SRC-001 + SRC-016 | parziale; base normativa 2012 confermata, curricolo locale non risolto |
| Curricolo / Fonti | SRC-001, SRC-002, SRC-010, SRC-014, SRC-015 | in costruzione; solo SRC-001 confermata |
| Curricolo / Versioni | SRC-001, SRC-010, SRC-016, atti locali | non pronta; IN2025 e documenti locali non risolti |
| Curricolo / Processo aggiornamento | SRC-010, SRC-015, atti locali, file di lavoro | non pronta |
| Progettazione didattica | fonte/versione curricolare di riferimento | parziale; può riferirsi solo a fonte/stato verificato |
| Esportazione | stato documento e uso consentito | da collegare alle fonti; obbligatoria cautela su documenti non definitivi |
| Wiki / IN2012 e IN2025 | SRC-001 + SRC-010 | parziale; IN2012 confermata, IN2025 candidata |
| Wiki / Istituto | SRC-012, SRC-014, SRC-015 | non pronta |

## 8. Esito CML-419A Source Matrix Completion Gate

### 8.1 Confermato

- SRC-001 confermata tramite Gazzetta Ufficiale.

### 8.2 Candidate con URL ma non accessibili dalla sessione

- SRC-002 — PDF MIM D.M. 254/2012: URL stabile, accesso 403 dalla sessione.
- SRC-010 — pagina MIM candidata IN2025: URL stabile individuato, accesso 403 dalla sessione.

### 8.3 Non risolte dopo ricerca pubblica

- SRC-011 — decreto/nota/comunicato MIM IN2025.
- SRC-012 — scheda Scuola in Chiaro dell'istituto indicato nel runtime.
- SRC-014 — sito istituzionale della scuola indicata nel runtime.
- SRC-015 — PTOF pubblicato.
- SRC-016 — curricolo verticale pubblicato.
- SRC-017 — RAV/rendicontazione.

## 9. Decisione di blocco aggiornata

Prima di un mock definitivo o di una modifica runtime, la matrice deve essere portata almeno a questo stato minimo:

```text
SRC-001 confermata
SRC-010 verificata manualmente oppure dichiarata fonte candidata non accessibile
SRC-012 risolta oppure denominazione istituto da correggere/verificare
SRC-014 risolta oppure sito istituto dichiarato non reperito con query documentata
SRC-015 verificata o dichiarata non reperita
SRC-016 verificata o dichiarata non reperita
```

## 10. Raccomandazione operativa

Il gate CML-419A non consente ancora CML-420 runtime. Consente invece un passaggio di audit:

```text
CML-419B — Technical Table Coherence Audit
```

Scopo: decidere se procedere a CML-420 con mock/prototipo usando etichette prudenti e fonti non risolte dichiarate, oppure richiedere una verifica manuale locale delle fonti istituto.

## Verdict

```text
CML_419A_SOURCE_MATRIX_COMPLETION_GATE_READY_REMOTE_BRANCH
```
