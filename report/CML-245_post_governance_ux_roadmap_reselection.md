# CML-245 POST-GOVERNANCE UX ROADMAP RESELECTION — Report

## Sintesi esecutiva

Slice docs-only di riallineamento roadmap UX post-governance. Dopo la chiusura CML-244, e stata riesaminata la priorita delle aree UX candidate e selezionata la prossima slice runtime: **CML-246 — PROCESS FLOW CLARITY MICRO-UX**.

## Stato tecnico di partenza

- Branch operativo: `main`
- Stato branch: allineato a `origin/main`
- Working tree iniziale: pulito
- Ultimo commit HEAD: coerente con chiusura CML-244
- Ahead residuo: nessuno
- Runtime: invariato in questa slice

## Audit delle aree candidate

| Area | Impatto utente scolastico | Beneficio ruoli (docente/dipartimento/referente) | Rischio regressione runtime | Necessita deploy |
|---|---|---|---|---|
| Esportazioni | Alto in uscita documenti | Medio-alto | Basso | Probabilmente no |
| Guida | Medio-alto onboarding | Medio | Basso | No |
| Processo | Molto alto su orientamento operativo | Alto | Basso-medio | No |
| UDA smart / Programmazione | Alto su progettazione didattica | Alto | Medio | Dipende da ampiezza |
| Stati vuoti e messaggi | Medio su comprensione puntuale | Medio | Basso | No |

## Motivazione della scelta

La priorita e stata assegnata a **Processo** perche massimizza chiarezza e adozione operativa senza richiedere modifiche strutturali ai dati.

Razionale:
- allinea il percorso reale tra i ruoli scolastici;
- riduce incertezza su passaggio proposta -> confronto -> validazione;
- mantiene basso il rischio tecnico rispetto a interventi piu profondi su Programmazione/UDA;
- rispetta il principio "una schermata, una decisione" con miglioramenti localizzati e verificabili.

## Perimetro consigliato per CML-246

- Chiarire la sequenza operativa Docente -> Dipartimento -> Referente -> Esportazione.
- Migliorare microcopy e segnali di stato nei punti di transizione del flusso.
- Evidenziare precondizioni e output attesi di ogni passaggio.
- Non modificare schema dati, logiche di storage, validatori o pipeline export.
- Mantenere slice piccola e testabile con smoke runtime mirato.

## Rischi da evitare

- Accorpare in CML-246 cambi non correlati al flusso Processo.
- Introdurre variazioni funzionali nascoste dietro microcopy/UI.
- Allargare il perimetro a refactor ampi in Programmazione o UDA smart.
- Richiedere deploy non necessario in assenza di cambi runtime sostanziali.

## Checklist finale

- [x] repository state verified;
- [x] candidate UX areas reviewed;
- [x] next runtime slice selected;
- [x] runtime unchanged;
- [x] no deploy executed;
- [x] no push executed;
- [x] verdict recorded;

## Verdict

`CML_245_POST_GOVERNANCE_UX_ROADMAP_RESELECTION_READY_LOCAL_NOT_PUSHED`
