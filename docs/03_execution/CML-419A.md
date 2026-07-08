# CML-419A — Source Matrix Completion Gate

## Mandatory Slice Header

- Macroprogramma: PM-09 Validazione con utenti / Source Verification Agent
- Dipende da: CML-419
- Tipo slice: docs/research-only remoto
- Branch: `remote-lab/cml-419-in2012-in2025-technical-table`
- Runtime: non modificato
- Main: non modificato

## Obiettivo

Aggiornare la matrice fonti iniziale prodotta in CML-419, verificando il gate minimo prima di qualunque mock definitivo o runtime.

## Fonti ricercate

- D.M. 254/2012 e Indicazioni Nazionali 2012;
- fonte MIM candidata per IN2025;
- eventuali atti/nota/comunicati MIM collegati a IN2025;
- Scuola in Chiaro dell'istituto indicato nel runtime;
- sito istituzionale della scuola;
- PTOF pubblicato;
- curricolo verticale pubblicato;
- RAV/rendicontazione/documenti valutativi pubblici.

## Esito sintetico

| Fonte | Esito |
|---|---|
| SRC-001 — Gazzetta Ufficiale D.M. 254/2012 | confermata |
| SRC-002 — PDF MIM D.M. 254/2012 | URL stabile ma accesso 403 dalla sessione |
| SRC-010 — pagina MIM candidata IN2025 | URL stabile candidato ma accesso 403 dalla sessione |
| SRC-011 — atto/nota/comunicato MIM IN2025 | non risolta |
| SRC-012 — Scuola in Chiaro istituto | non risolta |
| SRC-014 — sito istituzionale scuola | non risolta |
| SRC-015 — PTOF pubblicato | non risolta |
| SRC-016 — curricolo verticale pubblicato | non risolta |
| SRC-017 — RAV/rendicontazione | non risolta |

## Decisione prudenziale

Il D.M. 254/2012 può essere registrato come fonte normativa primaria tramite Gazzetta Ufficiale.

IN2025 non può essere classificata come vigente, adottata o ufficialmente recepita nel sistema finché la fonte MIM candidata non viene verificata manualmente o con accesso stabile.

Le fonti locali dell'istituto non possono essere usate per intestazioni, PTOF, curricolo pubblicato o governance finché non vengono risolte con URL certo.

## File aggiornato

- `docs/04_design/CML-419_initial_source_matrix.md`

## Gate aggiornato

```text
SRC-001 confermata
SRC-010 verificata manualmente oppure dichiarata fonte candidata non accessibile
SRC-012 risolta oppure denominazione istituto da correggere/verificare
SRC-014 risolta oppure sito istituto dichiarato non reperito con query documentata
SRC-015 verificata o dichiarata non reperita
SRC-016 verificata o dichiarata non reperita
```

## Raccomandazione

Non procedere direttamente a CML-420 runtime.

Procedere prima a:

```text
CML-419B — Technical Table Coherence Audit
```

per decidere se:

1. procedere al mock/prototipo con etichette prudenti;
2. richiedere verifica manuale locale delle fonti istituto;
3. correggere denominazioni istituto/codici se le fonti pubbliche non corrispondono;
4. mantenere IN2025 come materiale/proposta non vigente.

## Verdict

```text
CML_419A_SOURCE_MATRIX_COMPLETION_GATE_READY_REMOTE_BRANCH
```
