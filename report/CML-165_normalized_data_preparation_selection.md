# CML-165 — Normalized data preparation selection

Data: 2026-06-26

## Scopo

Selezionare quale disciplina residua normalizzare per prima (CML-166), valutando disponibilità documentale, rischi e complessità.

## Baseline tecnica

- Branch: `main`
- Commit iniziale: `903e651`
- `origin/main`: `903e651`
- Working tree: pulito (sync)
- Push: non eseguito
- Deploy: non eseguito

## Stato runtime attuale

| Area | Valore |
| --- | --- |
| Discipline integrate (mappa runtime) | 7 / 14 |
| Tecnologia | ✅ integrata |
| Matematica | ✅ integrata |
| Italiano | ✅ integrato |
| Scienze | ✅ integrato |
| Storia | ✅ integrata |
| Geografia | ✅ integrata |
| Inglese | ✅ integrato |

## Stato discipline residue

| Area | Valore |
| --- | --- |
| Discipline non integrate | 7 / 14 |
| File `.normalized.json` assenti per tutte | ✅ confermato |
| Scope | data preparation (CML-166) |

## Documentazione disponibile per disciplina

Esaminati report storici per ciascuna candidata:

| Disciplina | Report selezione | Report normalizzazione | Item DATA storici |
|---|---|---|---|
| Educazione Civica | CML-107 | CML-108 (solo UI counter) | 8 (6+2) |
| Musica | CML-109 | CML-110 (solo UI counter) | non documentato |
| Arte e Immagine | CML-111 | non trovato | 4 (3+1) |
| Educazione Fisica | CML-113 | non trovato | non documentato |
| Religione Cattolica | CML-115 | non trovato | non documentato |
| Seconda Lingua Comunitaria | CML-117 | non trovato | non documentato |
| Latino LEL | mai selezionato | non trovato | non documentato |

Nota: CML-108 e CML-110 hanno aggiornato contatori UI della vecchia completezza/readiness, NON hanno creato file `.normalized.json`.

## Tabella comparativa candidate

| Disciplina | Documentazione | Dati | Strutture | Nodi | Progressione | Readiness doc | Dati disp | Rischio dati | Rischio istituzionale | Complessità norm. | Raccomandazione |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Educazione Civica | CML-104, CML-107, CML-108 | 8 item storici, 4 nuclei (Costituzione, Sviluppo sostenibile, Cittadinanza digitale, Cittadinanza globale) | da costruire su 4 nuclei | da costruire su 4 nuclei | Inf/Pri/Sec | alta | media | medio-alto | medio-alto | media | **SELEZIONATA** |
| Arte e Immagine | CML-104, CML-111 | 4 item storici, 3 assi IN 2025 (espressivo, visivo, multimediale) | da costruire su 3 assi | da costruire su 3 assi | Inf/Pri/Sec | media | bassa | basso | basso | medio-bassa | 2ª scelta |
| Musica | CML-109, CML-110 | non documentato, 3 assi IN 2025 | da costruire | da costruire | Inf/Pri/Sec | media | bassa | basso | basso | media | rinviare |
| Educazione Fisica | CML-113 | non documentato | da costruire | da costruire | Inf/Pri/Sec | medio-bassa | bassa | medio | medio | medio-alta | rinviare |
| Religione Cattolica | CML-115 | non documentato | da costruire | da costruire | Inf/Pri/Sec | medio-bassa | bassa | medio | alto | medio-alta | rinviare |
| Seconda Lingua Comunitaria | CML-117 | non documentato, pattern Inglese | da costruire su pattern Inglese | da costruire | Inf/Pri/Sec | media | bassa | medio | medio | media | rinviare |
| Latino LEL | mai selezionato | non documentato | da costruire | da costruire | solo Secondaria | bassa | assente | medio | medio | medio-bassa | rinviare |

## Disciplina selezionata per CML-166

**Educazione Civica**

## Motivazione

1. **Maggiore base documentale**: valutata in CML-104 (rischio alto ma differibile), selezionata in CML-107, con UI counter aggiornato in CML-108. Ha 8 item DATA storici distribuiti su Infanzia/Primaria/Secondaria e 4 nuclei fondanti già identificati (Costituzione, Sviluppo sostenibile, Cittadinanza digitale, Cittadinanza globale).

2. **Completezza asse Storico-sociale**: con Educazione Civica normalizzata, l'asse Storico-sociale (Storia + Geografia + Educazione Civica) sarebbe completo, coprendo un blocco formativo significativo per il PTOF.

3. **Raccordo con Cittadinanza**: Educazione Civica ha forti legami con il tema trasversale della Cittadinanza, già presente in altre discipline (es. Tecnologia: "Cittadinanza tecnologica").

4. **Rischio gestibile**: il rischio istituzionale è medio-alto (contenuti normativi/valoriali), ma gestibile con stato `bozza` / `da_validare` e fonti esplicite (Legge 92/2019, Linee Guida Educazione Civica, IN 2025).

5. **Disciplina unica nel modello**: non ha pattern analogo da copiare, ma i 4 nuclei sono ben definiti dalla normativa.

## Discipline rinviate

| Disciplina | Motivo |
|---|---|
| Arte e Immagine | 2ª scelta — meno base documentale di Educazione Civica |
| Musica | documentazione insufficiente per normalizzazione immediata |
| Educazione Fisica | CML-113 non ha prodotto dati normalizzati; richiede audit preliminare |
| Religione Cattolica | rischio istituzionale alto; richiede attenzione specifica in slice dedicata |
| Seconda Lingua Comunitaria | pattern Inglese utilizzabile ma dati non disponibili |
| Latino LEL | solo Secondaria, mai selezionato in audit precedenti; priorità bassa |

## Scope consigliato per CML-166

- Creare `content/curriculum/educazione_civica.normalized.json`
- 8-10 unità di apprendimento su 4 nuclei (Costituzione, Sviluppo sostenibile, Cittadinanza digitale, Cittadinanza globale)
- Copertura Infanzia (1 unità), Primaria (4-5 unità), Secondaria (3-4 unità)
- Stato: `bozza`
- Fonti: Legge 92/2019, Linee Guida MIUR 2020, IN 2025 sezione Educazione Civica
- Non modificare runtime
- Non modificare altre discipline
- Non modificare schema, tool, export/import

## Validazioni da prevedere in CML-166

- `node tools/validate-cml-normalized-curriculum.mjs` — PASS atteso
- verifica shape manuale del file creato
- verifica codifica UTF-8
- verifica assenza decisioni curricolari inventate
- commit con messaggio: `feat: add educazione civica normalized curriculum data`

## Rischi residui

- Rischio istituzionale medio-alto: i contenuti di Educazione Civica toccano temi valoriali e normativi che richiedono validazione umana prima di qualsiasi pubblicazione
- I dati storici (8 item) sono riferiti al vecchio modello a traguardi/obiettivi; la mappatura in unità di apprendimento richiede interpretazione
- Decostruzione da Legge 92/2019 in unità verticali non è automatica
- Assenza di file `.normalized.json` precedente: nessun pattern diretto da seguire oltre i 4 nuclei dichiarati

## Verdetto

`CML_165_NORMALIZED_DATA_PREPARATION_SELECTION_READY`
