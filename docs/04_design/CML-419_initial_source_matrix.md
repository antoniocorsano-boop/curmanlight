# CML-419 — Matrice fonti iniziale

## 1. Scopo

Questa matrice avvia il lavoro del Source Verification Agent. Non è ancora un repertorio completo delle fonti: distingue le fonti già confermate, le fonti candidate e le fonti da reperire o verificare con URL stabile.

Data di prima compilazione: 2026-07-08.

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
| SRC-001 | Gazzetta Ufficiale — Decreto 16 novembre 2012, n. 254 | Normativa primaria | A | https://www.gazzettaufficiale.it/eli/id/2013/02/05/13G00034/sg | 2026-07-08 | verificata_ufficiale | Curricolo/Fonti, Curricolo/Versioni, Wiki/IN2012 e IN2025 | Base normativa per classificare le Indicazioni 2012 | Verificare allegati e PDF ufficiali associati |
| SRC-002 | MIM — PDF DM 254/2012 | Documento ministeriale allegato/riferimento | A-candidato | https://www.mim.gov.it/documents/20182/51310/DM+254_2012.pdf | 2026-07-08 | candidato_non_accessibile_da_sessione | Curricolo/Fonti, Wiki/IN2012 e IN2025 | Da usare solo dopo verifica diretta del file | Accesso da sessione web non completato; verificare manualmente o con altro ambiente |
| SRC-003 | Indicazioni Nazionali 2012 — riferimento enciclopedico | Fonte secondaria | E | https://it.wikipedia.org/wiki/Indicazioni_nazionali_per_il_curricolo_della_scuola_dell%27infanzia_e_del_primo_ciclo_di_istruzione | 2026-07-08 | secondaria_supporto | Solo ricerca preliminare | Orientamento terminologico e ricerca di link primari | Non usare come fonte normativa primaria |

## 5. Fonti da reperire o verificare

| ID | Fonte da verificare | Tipo atteso | Livello atteso | Stato | Azione richiesta | Vista collegata | Rischio se non verificata |
|---|---|---|---|---|---|---|---|
| SRC-010 | MIM — pagina ufficiale o documento ufficiale IN2025 | Ministeriale / proposta / documento di consultazione | A | non_risolta | Reperire URL stabile da dominio MIM o fonte istituzionale equivalente | Curricolo/Fonti, Curricolo/Versioni, Wiki/IN2012 e IN2025 | Alto: IN2025 potrebbe essere presentata con stato improprio |
| SRC-011 | Eventuale decreto, nota o comunicato MIM collegato a IN2025 | Ministeriale / normativa / comunicazione ufficiale | A | non_risolta | Verificare natura dell'atto e data | Curricolo/Versioni, Processo aggiornamento | Alto: rischio confusione fra proposta e atto vigente |
| SRC-012 | Scuola in Chiaro — I.C. Calvario-Covotta «don Lorenzo Milani» | Anagrafica pubblica istituzionale | B | non_risolta | Reperire scheda tramite denominazione, comune e/o codice meccanografico | Wiki/Istituto, Curricolo/Fonti | Medio: dati istituto non validati da fonte pubblica |
| SRC-013 | Codice meccanografico istituto | Anagrafica ufficiale | B | da_verificare | Confermare codice usato nei documenti CML con Scuola in Chiaro | Wiki/Istituto, esportazioni | Medio: rischio intestazioni non allineate |
| SRC-014 | Sito istituzionale scuola | Fonte locale istituzionale | C | non_risolta | Reperire URL ufficiale e verificare dominio | Wiki/Istituto, Curricolo/Fonti | Medio: impossibile collegare PTOF/curricolo locale |
| SRC-015 | PTOF pubblicato | Documento scolastico locale | C | non_risolta | Reperire versione, annualità, atto o sezione pubblicazione | Curricolo/Fonti, Wiki/Processo | Alto: perimetro curricolo/PTOF non verificato |
| SRC-016 | Curricolo verticale pubblicato dalla scuola | Documento scolastico locale | C | non_risolta | Reperire file o pagina ufficiale, data e stato | Curricolo/Consulta, Curricolo/Definitivo | Alto: il sistema non può distinguere vigente locale da materiale di lavoro |
| SRC-017 | RAV / Rendicontazione / documenti valutativi pubblici | Documento scolastico / piattaforma pubblica | C/B | non_risolta | Verificare presenza su sito scuola o portali pubblici | Wiki/Istituto, governance | Medio: quadro di autovalutazione non collegato |
| SRC-018 | Regolamenti, delibere, organigramma/funzionigramma | Documento locale | C | non_risolta | Reperire solo se utili al processo curricolare | Wiki/Ruoli, governance | Basso/medio: ruoli locali non verificati |

## 6. Classificazione provvisoria IN2012 / IN2025

| Oggetto | Stato provvisorio CML-419 | Fonte primaria disponibile | Decisione prudenziale |
|---|---|---|---|
| Indicazioni Nazionali 2012 | riferimento normativo vigente da verificare rispetto al contesto d'istituto | SRC-001 | Usabile come base normativa primaria dopo controllo allegati |
| IN2025 | materiale/proposta/possibile transizione da verificare | SRC-010 non ancora risolta | Non usare come vigente; usare solo con etichetta prudente fino a fonte ufficiale stabile |
| Curricolo verticale d'istituto | documento locale da reperire | SRC-016 non ancora risolta | Non dichiarare definitivo finché non verificato su fonte locale/atto |

## 7. Impatto sulle viste

| Vista | Fonte necessaria | Stato attuale |
|---|---|---|
| Curricolo / Consulta | SRC-001 + SRC-016 | parziale |
| Curricolo / Fonti | SRC-001, SRC-002, SRC-010, SRC-014, SRC-015 | in costruzione |
| Curricolo / Versioni | SRC-001, SRC-010, SRC-016, atti locali | non pronta |
| Curricolo / Processo aggiornamento | SRC-010, SRC-015, atti locali, file di lavoro | non pronta |
| Progettazione didattica | fonte/versione curricolare di riferimento | parziale |
| Esportazione | stato documento e uso consentito | da collegare alle fonti |
| Wiki / IN2012 e IN2025 | SRC-001 + SRC-010 | parziale |
| Wiki / Istituto | SRC-012, SRC-014, SRC-015 | non pronta |

## 8. Esito della prima raccolta

La fonte normativa certa individuata nella prima raccolta è la Gazzetta Ufficiale relativa al Decreto 16 novembre 2012, n. 254.

Restano da completare:

- reperimento stabile delle fonti ufficiali IN2025;
- verifica diretta del documento MIM 2012 allegato/PDF;
- identificazione scheda Scuola in Chiaro dell'istituto;
- identificazione sito istituzionale scolastico;
- raccolta PTOF e curricolo pubblicato;
- classificazione dei documenti locali.

## 9. Decisione di blocco

Prima di un mock definitivo o di una modifica runtime, la matrice deve essere portata almeno a questo stato minimo:

```text
SRC-001 confermata
SRC-010 risolta o dichiarata esplicitamente non disponibile
SRC-012 risolta
SRC-014 risolta
SRC-015 verificata o dichiarata non reperita
SRC-016 verificata o dichiarata non reperita
```

## Verdict

```text
CML_419_INITIAL_SOURCE_MATRIX_CREATED_REMOTE_BRANCH
```
