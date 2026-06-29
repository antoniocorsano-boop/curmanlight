# CML-173 — Musica readiness data audit

Data: 2026-06-26

## 1. Scopo

Valutare la readiness documentale di Musica per la creazione del file normalizzato `content/curriculum/musica.normalized.json`, come primo passo della sequenza residua approvata in CML-172.

## 2. Baseline tecnica

| Parametro          | Valore                       |
| ------------------ | ---------------------------- |
| Branch             | `main`                       |
| Commit iniziale    | `d806172`                    |
| origin/main        | `d806172`                    |
| Working tree       | Pulito, sync con origin/main |
| Dati normalizzati  | 9/14                         |
| Runtime mappa      | 9/14                         |
| Shape runtime test | 9/9 PASS                     |
| Push               | Non eseguito                 |
| Deploy             | Non eseguito                 |

## 3. Stato consolidato 9/14

| Area               | Stato                              |
| ------------------ | ---------------------------------- |
| Dati normalizzati  | 9 file `.normalized.json` presenti |
| Runtime mappa      | 9 discipline integrate             |
| Shape runtime test | 9/9 PASS                           |

Discipline completate: Tecnologia, Matematica, Italiano, Scienze, Storia, Geografia, Inglese, Educazione Civica, Arte e Immagine.

## 4. Esito CML-172 e posizione di Musica nella sequenza residua

CML-172 ha approvato la sequenza: Musica → Educazione Fisica → Seconda Lingua Comunitaria → Religione Cattolica → Latino LEL.

Musica è la prima candidata con raccomandazione di audit prima della data preparation. Questa slice (CML-173) esegue l'audit.

## 5. Verifica presenza/assenza di `musica.normalized.json`

**Assente.** `content/curriculum/musica.normalized.json` non esiste. Confermata la condizione di partenza.

## 6. Fonti interne consultate

- `docs/02_system/NORMALIZED-CURRICULUM-DATA-CONTRACT.md` — contratto dati normalizzato
- `docs/03_execution/CML-016A.md` — conteggi storici Musica: 5 item
- `docs/03_execution/CML-104.md` — 3 nuclei musicali, rischio basso, completezza copertura
- `docs/03_execution/CML-107.md` — 6 item (3+3), copertura completa, readiness 7/10
- `docs/03_execution/CML-109.md` — audit di selezione: 6 item, 3 nuclei, voto 8/10
- `docs/03_execution/CML-110.md` — UI counter, nessun `.normalized.json`
- `docs/03_execution/CML-165.md` — readiness media, rinviata per documentazione insufficiente
- `docs/03_execution/CML-172.md` — piano completamento, goal Musica
- `report/CML-084.md` — stato base per tutte le discipline
- `report/CML-109.md` — selezione Musica voto 8/10
- `report/CML-165.md` — readiness media, dati non documentati
- `report/CML-172.md` — sequenza e goal

## 7. Evidenze disponibili per Musica

### Copertura ordini

**Completa** — Infanzia, Primaria, Secondaria. Confermata da CML-016A, CML-104, CML-107, CML-109.

### Traguardi e obiettivi storici

CML-109 documenta 6 item:

- mu_inf1 (Infanzia, traguardo)
- mu_pri1 (Primaria, traguardo)
- mu_ob_pri1, mu_ob_pri2 (Primaria, obiettivi)
- mu_sec1 (Secondaria, traguardo)
- mu_ob_sec1 (Secondaria, obiettivo)

CML-016A documenta 5 item (4 traguardi + 1 obiettivo). Discrepanza probabilmente dovuta a diversa fase storica.

### Nuclei storici

3 nuclei identificati in CML-109 (da IN 2025 e documentazione interna):

1. **Linguaggi sonori** — comprensione, ascolto, produzione di suoni e messaggi musicali
2. **Espressione vocale e strumentale** — canto, esecuzione, produzione corale e d'insieme
3. **Ascolto** — percezione, analisi, comprensione critica dei fenomeni sonori

Il goal di CML-172 amplia prudentemente in: ascolto, produzione, linguaggio musicale, creatività sonora, patrimonio culturale — come ipotesi di lavoro.

### IN 2025

CML-109 segnala prontezza per: notazione musicale curricolare, canto corale, musica d'insieme, tecnologie digitali. Non esistono proposte IN 2025 strutturate come campo dedicato.

## 8. Gap documentali rilevati

1. **Nessun `.normalized.json`** — il dato storico esiste solo in report e nella vecchia UI, non in formato normalizzato.
2. **Discrepanza conteggi** — 5 (CML-016A) vs 6 (CML-109) item; da verificare in data preparation.
3. **Nessuna IN 2025 proposal strutturata** — `propostaIN2025` da lasciare null in tutte le unità.
4. **Nessuna decisione curricolare documentata** — `decisioniCurricolari: []`.
5. **Fonte DOCX originale non estratta** — il documento Word originale non è stato consultato per questa audit; in caso di ambiguità, privilegiare CML-109 come fonte più recente e strutturata.

## 9. Possibili strutture sostanziali

Basate sui 3 nuclei storici e sul goal CML-172, classificate per livello di prudenza:

| Struttura                                                         | Classificazione  | Note                                                                    |
| ----------------------------------------------------------------- | ---------------- | ----------------------------------------------------------------------- |
| Ascolto, percezione e comprensione dei fenomeni sonori e musicali | Ricostruibile    | Nucleo "Ascolto" documentato in CML-109 e CML-104                       |
| Produzione vocale, strumentale e ritmica                          | Ricostruibile    | Nucleo "Espressione vocale e strumentale" documentato                   |
| Linguaggio musicale e notazione                                   | Ipotesi prudente | Implicito dal nucleo "Linguaggi sonori" e IN 2025 (notazione cl. 3ª)    |
| Creatività sonora e rielaborazione                                | Ipotesi prudente | Non documentato esplicitamente ma coerente con la disciplina espressiva |
| Musica come patrimonio culturale                                  | Ipotesi prudente | Non documentato ma compatibile con IN 2025                              |
| Tecnologie digitali musicali                                      | Ipotesi prudente | Citato in CML-109 come IN 2025, non come struttura autonoma             |

## 10. Possibili nodi disciplinari

| Nodo                                               | Classificazione  |
| -------------------------------------------------- | ---------------- |
| Ascoltare e comprendere fenomeni sonori e musicali | Ricostruibile    |
| Esprimersi vocalmente e strumentalmente            | Ricostruibile    |
| Usare il linguaggio musicale e la notazione        | Ipotesi prudente |
| Creare e rielaborare sonoramente                   | Ipotesi prudente |
| Conoscere e valorizzare il patrimonio musicale     | Ipotesi prudente |

## 11. Possibile progressione verticale

| Ordine     | Disponibilità                                                                                |
| ---------- | -------------------------------------------------------------------------------------------- |
| Infanzia   | Ricostruibile (mu_inf1) — esplorazione sonora, giochi vocali, ascolto                        |
| Primaria   | Ricostruibile (mu_pri1, mu_ob_pri1, mu_ob_pri2) — notazione cl. 3ª, canto corale, produzione |
| Secondaria | Ricostruibile (mu_sec1, mu_ob_sec1) — produzione digitale, musica d'insieme, analisi         |

## 12. Decisioni curricolari

Nessuna decisione curricolare documentata per Musica. Raccomandazione: `decisioniCurricolari: []`.

## 13. Tabella readiness

| Criterio                             | Valutazione                                            |
| ------------------------------------ | ------------------------------------------------------ |
| Readiness documentale                | Media                                                  |
| Disponibilità dati                   | Bassa (solo report storici, nessun `.normalized.json`) |
| Rischio dati                         | Basso                                                  |
| Rischio istituzionale                | Basso                                                  |
| Complessità normalizzazione          | Media                                                  |
| Rischio invenzione contenuti         | Medio-basso (con cautele)                              |
| Compatibilità contratto normalizzato | Piena                                                  |
| **Raccomandazione**                  | **Pronta con cautele**                                 |

## 14. Raccomandazione per CML-174

**Musica è pronta per data preparation con cautele.**

I 3 nuclei ricostruibili (Ascolto, Produzione vocale/strumentale, Linguaggio musicale) sono sufficienti per creare il file normalizzato. Le strutture aggiuntive (creatività, patrimonio, digitale) devono essere trattate come ipotesi prudenti e verificate in data preparation.

Non sono necessari audit aggiuntivi prima della data preparation.

## 15. Scope consigliato per CML-174

- Creare `content/curriculum/musica.normalized.json`
- Non modificare runtime
- Non modificare tools
- Non aggiornare shape test
- Validare 10/10 file curriculum
- Generazione statica a stdout con `tools/generate-static-mappa-dati.mjs`
- Verifica codifica UTF-8
- Commit senza push
- Deploy non eseguito

## 16. Rischi residui

1. **Discrepanza conteggi**: CML-016A (5) vs CML-109 (6). La data preparation dovrà risolvere questa ambiguità.
2. **Ipotesi prudenti**: creatività, patrimonio e digitale sono ipotesi non formalmente documentate. Se non supportate dalla fonte DOCX, vanno omesse o marcate come esplicitamente ricostruite.
3. **Nessuna IN 2025 proposal strutturata**: il campo `propostaIN2025` resterà null in tutte le unità.
4. **Verticalità non verificata**: la progressione Infanzia→Primaria→Secondaria è documentata ma non verificata sulla fonte originale.
5. **Vecchia pipeline**: i contatori UI di CML-110 (9/5/0) non devono essere confusi con lo stato della nuova pipeline.

## 17. Verdetto finale

```
CML_173_MUSICA_READINESS_DATA_AUDIT_READY
```
