# CML-164 — Next discipline runtime mappa selection audit

Data: 2026-06-26

## Scopo

Selezionare la prossima disciplina da integrare nella mappa dati runtime CurManLight, verificando la disponibilità e la readiness dei dati normalizzati per le discipline non ancora coperte.

## Baseline tecnica

- Branch: `main`
- Commit iniziale: `e089958`
- `origin/main`: `e089958`
- Working tree: pulito (sync)
- Push: non eseguito
- Deploy: non eseguito

## Stato runtime attuale

| Area | Valore |
| --- | --- |
| Discipline integrate | 7 / 14 |
| Tecnologia | ✅ integrata |
| Matematica | ✅ integrata |
| Italiano | ✅ integrato |
| Scienze | ✅ integrato |
| Storia | ✅ integrata |
| Geografia | ✅ integrata |
| Inglese | ✅ integrato |
| Discipline non coperte | 7 |

## Discipline candidate

Le 7 discipline dichiarate dal modello curricolare ma non ancora integrate nel runtime:

1. Educazione Civica
2. Musica
3. Arte e Immagine
4. Educazione Fisica
5. Religione Cattolica
6. Seconda Lingua Comunitaria
7. Latino LEL

## Verifica disponibilità file normalizzati

Directory `content/curriculum/` — file `*.normalized.json` presenti:

- tecnologia.normalized.json
- matematica.normalized.json
- italiano.normalized.json
- scienze.normalized.json
- storia.normalized.json
- geografia.normalized.json
- inglese.normalized.json

**Nessun file normalizzato trovato per le 7 discipline candidate.** Verifica incrociata negativa anche su `_handoff/` e altre directory.

## Tabella readiness candidate

| Disciplina | File normalizzato | Strutture | Nodi | Progressione | Decisioni | Readiness | Rischio dati | Rischio runtime | Raccomandazione |
|---|---|---|---|---|---|---|---|---|---|
| Educazione Civica | NON DISPONIBILE | N/A | N/A | N/A | N/A | non pronta | alto | alto | richiede data preparation |
| Musica | NON DISPONIBILE | N/A | N/A | N/A | N/A | non pronta | alto | alto | richiede data preparation |
| Arte e Immagine | NON DISPONIBILE | N/A | N/A | N/A | N/A | non pronta | alto | alto | richiede data preparation |
| Educazione Fisica | NON DISPONIBILE | N/A | N/A | N/A | N/A | non pronta | alto | alto | richiede data preparation |
| Religione Cattolica | NON DISPONIBILE | N/A | N/A | N/A | N/A | non pronta | alto | alto | richiede data preparation |
| Seconda Lingua Comunitaria | NON DISPONIBILE | N/A | N/A | N/A | N/A | non pronta | alto | alto | richiede data preparation |
| Latino LEL | NON DISPONIBILE | N/A | N/A | N/A | N/A | non pronta | alto | alto | richiede data preparation |

## Validatore curriculum

`node tools/validate-cml-normalized-curriculum.mjs`: PASS
- 7 file / 94 unità / `overallValid: true` / 0 errori
- Tutti i file validati corrispondono alle 7 discipline già integrate
- Nessun file candidato disponibile per la validazione

## Note sulle discipline non pronte

Nessuna delle 7 discipline candidate dispone di dati normalizzati. La copertura 14/14 dichiarata nel modello curricolare è documentale (traguardi e obiettivi) ma non si riflette in file `.normalized.json` pronti per la pipeline runtime.

## Disciplina selezionata per CML-165

**Nessuna.** Nessuna disciplina candidata ha dati normalizzati disponibili per l'integrazione runtime.

## Motivazione

Tutte le 7 discipline non ancora integrate mancano del file `.normalized.json` necessario per la pipeline adapter → transformer → mappa runtime. Tentare un'integrazione senza dati normalizzati richiederebbe invenzione di contenuti, violando il principio di prudenza curricolare già applicato in CML-159, CML-160, CML-162 e CML-163.

## Scope consigliato per CML-165

CML-165 dovrebbe essere un task di **data preparation**: creazione del file `.normalized.json` per una disciplina ancora non coperta. La scelta della disciplina per la data preparation può basarsi su:
- disponibilità di fonti (Indicazioni Nazionali 2012, proposte 2025)
- completezza dei traguardi dichiarati nel modello 14/14
- priorità didattica (es. Educazione Civica per raccordo con Cittadinanza)

## Rischi residui

- Creare dati normalizzati senza audit umano richiede cautela (stato `bozza` / `da_validare`)
- Le discipline con forte componente valoriale (Religione, Educazione Civica) richiedono attenzione specifica
- Latino LEL ha copertura solo su Secondaria di I grado — la progressione Infanzia/Primaria va gestita esplicitamente

## Verdetto

`CML_164_NEXT_DISCIPLINE_RUNTIME_MAPPA_SELECTION_AUDIT_READY`
