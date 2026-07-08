# CML-419 — Matrice fonti iniziale

## 1. Scopo

Questa matrice avvia il lavoro del Source Verification Agent. Il secondo passaggio parte dalle fonti già definite nel repository e le confronta con la prima ricerca esterna.

Data di prima compilazione: 2026-07-08.
Ultimo aggiornamento gate: 2026-07-08.

## 2. Regola di prudenza

Nessuna fonte priva di URL stabile, data di accesso e classificazione può essere usata per:

- definire una versione come vigente;
- qualificare IN2025 come adottata;
- alimentare documenti definitivi;
- sostenere decisioni di governance scolastica.

Le fonti definite nel repository possono essere usate come base interna CML solo se coerenti tra più file del repo. Restano comunque da verificare esternamente prima di essere classificate come definitivamente certificate.

## 3. Legenda affidabilità

| Livello | Descrizione | Uso ammesso |
|---|---|---|
| A | Fonte normativa o istituzionale primaria | Base primaria |
| A-candidato | Fonte primaria candidata, non ancora accessibile/verificata in sessione | Solo con cautela |
| B | Anagrafica ufficiale o registro pubblico istituzionale | Verifica dati istituto |
| B-repo | Anagrafica definita nel repo e coerente tra file interni | Uso interno CML, verifica esterna pendente |
| C | Fonte istituzionale locale della scuola | Contesto locale e documenti pubblici |
| C-repo | Fonte locale definita nel repo e coerente tra file interni | Uso interno CML, verifica esterna pendente |
| D | Documento di lavoro o materiale interno | Solo istruttoria |
| E | Fonte secondaria non ufficiale | Orientamento, mai base decisionale |
| NR | Non risolta/non verificata | Non usare per decisioni |

## 4. Fonti confermate, candidate o definite nel repo

| ID | Fonte | Tipo | Livello | URL / reperimento | Data accesso | Stato | Viste collegate | Uso consentito | Nota cautelativa |
|---|---|---|---|---|---|---|---|---|---|
| SRC-001 | Gazzetta Ufficiale — Decreto 16 novembre 2012, n. 254 | Normativa primaria | A | https://www.gazzettaufficiale.it/eli/id/2013/02/05/13G00034/sg | 2026-07-08 | verificata_ufficiale | Curricolo/Fonti, Curricolo/Versioni, Wiki/IN2012 e IN2025 | Base normativa primaria per D.M. 254/2012 e Indicazioni 2012 | Fonte confermata: decreto 16 novembre 2012, n. 254; GU Serie Generale n. 30 del 05-02-2013; entrata in vigore 20-02-2013 |
| SRC-002 | MIM — PDF DM 254/2012 | Documento ministeriale allegato/riferimento | A-candidato | https://www.mim.gov.it/documents/20182/51310/DM+254_2012.pdf | 2026-07-08 | candidato_non_accessibile_da_sessione_403 | Curricolo/Fonti, Wiki/IN2012 e IN2025 | Da usare solo dopo verifica diretta del file | URL stabile individuato, ma accesso da sessione non completato per risposta 403 |
| SRC-003 | Indicazioni Nazionali 2012 — riferimento enciclopedico | Fonte secondaria | E | https://it.wikipedia.org/wiki/Indicazioni_nazionali_per_il_curricolo_della_scuola_dell%27infanzia_e_del_primo_ciclo_di_istruzione | 2026-07-08 | secondaria_supporto | Solo ricerca preliminare | Orientamento terminologico e ricerca di link primari | Non usare come fonte normativa primaria |
| SRC-010 | MIM — pagina ufficiale/candidata IN2025 | Pagina ministeriale candidata | A-candidato | https://www.mim.gov.it/-/indicazioni-nazionali-per-il-curricolo-scuola-dell-infanzia-e-scuole-del-primo-ciclo-di-istruzione | 2026-07-08 | candidato_non_accessibile_da_sessione_403 | Curricolo/Fonti, Curricolo/Versioni, Wiki/IN2012 e IN2025 | Solo come fonte candidata fino a verifica manuale | Non classificare IN2025 come vigente/adottata |
| SRC-012 | Scuola in Chiaro — IC Calvario-Covotta | Anagrafica pubblica istituzionale definita nel repo | B-repo | https://cercalatuascuola.istruzione.it/cercalatuascuola/istituti/AVIC849003/ic-calvario-covotta/ | 2026-07-08 | repo_defined_consistent | Wiki/Istituto, Curricolo/Fonti | Uso interno CML per intestazioni e contesto, con verifica esterna pendente | URL presente sia in JSON runtime sia in documento distribuzione fonti |
| SRC-013 | Codice meccanografico AVIC849003 | Anagrafica istituto definita nel repo | B-repo | `AVIC849003` in `_published_snapshot/netlify-current/riferimenti_istituzionali_normativa.json` e `docs_distribuzione/FONTI_PTOF_RAV_NORMATIVA.md` | 2026-07-08 | repo_defined_consistent | Wiki/Istituto, esportazioni | Uso interno CML con verifica esterna pendente | Coerente tra JSON runtime e markdown distribuzione |
| SRC-014 | Sito istituzionale scuola | Fonte locale istituzionale definita nel repo | C-repo | https://www.icdonmilaniariano.edu.it/ | 2026-07-08 | repo_defined_consistent | Wiki/Istituto, Curricolo/Fonti | Uso interno CML con verifica esterna pendente | Coerente tra JSON runtime e markdown distribuzione |
| SRC-015 | PTOF 2025-2028 | Documento scolastico locale definito nel repo | C-repo | Scheda: https://www.icdonmilaniariano.edu.it/documento/ptof-25-28/ — PDF: https://www.icdonmilaniariano.edu.it/wp-content/uploads/2025/05/AVIC849003-202528-202425-20241227.pdf | 2026-07-08 | repo_defined_consistent | Curricolo/Fonti, Wiki/Processo, Governance | Uso interno come contesto PTOF, con verifica esterna pendente | Data pubblicazione/revisione repo: 14.05.2025 |
| SRC-017 | RAV 2022-2025 | Documento scolastico locale definito nel repo | C-repo | Scheda: https://www.icdonmilaniariano.edu.it/documento/rav-2022-2025/ — PDF: https://www.icdonmilaniariano.edu.it/wp-content/uploads/2025/05/RAV_202425_AVIC849003_20241220114045.pdf | 2026-07-08 | repo_defined_consistent | Wiki/Istituto, Governance, Curricolo/Fonti | Uso interno come contesto RAV, con verifica esterna pendente | Data pubblicazione/revisione repo: 14.05.2025 |
| SRC-020 | Documento distribuzione fonti PTOF/RAV/Normativa | Documento interno repo | D | `_published_snapshot/netlify-current/docs_distribuzione/FONTI_PTOF_RAV_NORMATIVA.md` | 2026-07-08 | repo_internal_source_register | Source Verification Agent, Wiki/Fondi, Governance | Registro interno da cui estrarre fonti già definite | Non è fonte esterna, ma conferma la coerenza interna del repo |
| SRC-021 | JSON riferimenti istituzionali e normativa | Dato runtime interno repo | D | `_published_snapshot/netlify-current/riferimenti_istituzionali_normativa.json` | 2026-07-08 | repo_internal_structured_source_register | Runtime, Curricolo/Fonti, Wiki/Istituto | Registro strutturato interno da riconciliare con fonti esterne | Non è fonte esterna; serve per audit e coerenza runtime |

## 5. Fonti ancora da reperire, verificare o dichiarare non risolte

| ID | Fonte da verificare | Tipo atteso | Livello atteso | Stato | Azione richiesta | Vista collegata | Rischio se non verificata |
|---|---|---|---|---|---|---|---|
| SRC-011 | Eventuale decreto, nota o comunicato MIM collegato a IN2025 | Ministeriale / normativa / comunicazione ufficiale | A | non_risolta | Verificare natura dell'atto e data | Curricolo/Versioni, Processo aggiornamento | Alto: rischio confusione fra proposta e atto vigente |
| SRC-016 | Curricolo verticale pubblicato dalla scuola | Documento scolastico locale | C | non_risolta_nel_repo | Reperire file o pagina ufficiale, data e stato sul sito istituto | Curricolo/Consulta, Curricolo/Definitivo | Alto: il sistema non può distinguere vigente locale da materiale di lavoro |
| SRC-018 | Regolamenti, delibere, organigramma/funzionigramma | Documento locale | C | non_risolta_nel_repo | Reperire solo se utili al processo curricolare | Wiki/Ruoli, governance | Basso/medio: ruoli locali non verificati |

## 6. Classificazione provvisoria IN2012 / IN2025

| Oggetto | Stato provvisorio CML-419A | Fonte primaria disponibile | Decisione prudenziale |
|---|---|---|---|
| Indicazioni Nazionali 2012 | riferimento normativo primario confermato per D.M. 254/2012 | SRC-001 | Usabile come fonte normativa primaria per il quadro 2012; eventuale PDF MIM resta da verificare separatamente |
| IN2025 | materiale/proposta/possibile transizione da verificare | SRC-010 candidato, non accessibile da sessione; repo usa DM 221/2025 come riferimento testuale interno | Non usare come vigente; usare solo con etichetta prudente fino a verifica ufficiale stabile e classificazione del tavolo tecnico |
| Curricolo verticale d'istituto | documento locale da reperire | SRC-016 non risolta | Non dichiarare definitivo finché non verificato su fonte locale/atto |
| PTOF/RAV istituto | fonti locali definite nel repo | SRC-015 e SRC-017 | Usabili come contesto interno con verifica esterna pendente |

## 7. Impatto sulle viste dopo riconciliazione repo

| Vista | Fonte necessaria | Stato aggiornato |
|---|---|---|
| Curricolo / Consulta | SRC-001 + SRC-016 | parziale; base normativa 2012 confermata, curricolo locale non risolto |
| Curricolo / Fonti | SRC-001, SRC-002, SRC-010, SRC-014, SRC-015, SRC-017, SRC-020, SRC-021 | in costruzione; fonti istituto repo-defined coerenti |
| Curricolo / Versioni | SRC-001, SRC-010, SRC-016, atti locali | non pronta; IN2025 e curricolo locale restano non risolti |
| Curricolo / Processo aggiornamento | SRC-010, SRC-015, atti locali, file di lavoro | parziale; PTOF/RAV repo-defined, atti locali non risolti |
| Progettazione didattica | fonte/versione curricolare di riferimento | parziale; può riferirsi solo a fonte/stato verificato |
| Esportazione | stato documento e uso consentito | da collegare alle fonti; obbligatoria cautela su documenti non definitivi |
| Wiki / IN2012 e IN2025 | SRC-001 + SRC-010 | parziale; IN2012 confermata, IN2025 candidata |
| Wiki / Istituto | SRC-012, SRC-013, SRC-014, SRC-015, SRC-017 | pronta come base interna repo-defined, verifica esterna pendente |

## 8. Esito CML-419A repo-defined source audit

### 8.1 Confermato esternamente

- SRC-001 confermata tramite Gazzetta Ufficiale.

### 8.2 Riconciliato internamente nel repo

- SRC-012 Scuola in Chiaro: presente e coerente tra JSON runtime e markdown distribuzione.
- SRC-013 codice meccanografico `AVIC849003`: presente e coerente.
- SRC-014 sito istituto: presente e coerente.
- SRC-015 PTOF 2025-2028: scheda e PDF presenti e coerenti.
- SRC-017 RAV 2022-2025: scheda e PDF presenti e coerenti.
- SRC-020/SRC-021: registri interni fonti coerenti.

### 8.3 Candidate con URL ma non accessibili dalla sessione

- SRC-002 — PDF MIM D.M. 254/2012: URL stabile, accesso 403 dalla sessione.
- SRC-010 — pagina MIM candidata IN2025: URL stabile individuato, accesso 403 dalla sessione.

### 8.4 Non risolte nel repo

- SRC-011 — decreto/nota/comunicato MIM IN2025 distinto dalla pagina candidata.
- SRC-016 — curricolo verticale pubblicato dalla scuola.
- SRC-018 — regolamenti/delibere/organigramma/funzionigramma utili al processo.

## 9. Gate aggiornato prima di CML-420

```text
SRC-001 confermata
SRC-010 verificata manualmente oppure mantenuta come fonte candidata non accessibile
SRC-012 risolta come repo-defined e da verificare esternamente
SRC-014 risolta come repo-defined e da verificare esternamente
SRC-015 risolta come repo-defined e da verificare esternamente
SRC-016 verificata o dichiarata non reperita
```

## 10. Raccomandazione operativa

Il gate CML-419A ora consente CML-419B, non ancora CML-420 runtime.

CML-419B dovrà decidere se procedere al mock/prototipo con questi vincoli:

- fonti istituto marcate come `repo-defined, verifica esterna pendente`;
- IN2025 sempre etichettata come materiale/proposta da verificare;
- curricolo verticale pubblicato non dichiarato definitivo finché SRC-016 non è risolta;
- nessuna approvazione o adozione dentro l'app.

## Verdict

```text
CML_419A_REPO_DEFINED_SOURCE_MATRIX_RECONCILED_REMOTE_BRANCH
```
