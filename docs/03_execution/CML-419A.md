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

Questo aggiornamento parte anche dalle fonti già definite nel repository, non solo da ricerca esterna.

## Fonti ricercate/verificate

- D.M. 254/2012 e Indicazioni Nazionali 2012;
- fonte MIM candidata per IN2025;
- eventuali atti/nota/comunicati MIM collegati a IN2025;
- Scuola in Chiaro dell'istituto indicato nel runtime;
- sito istituzionale della scuola;
- PTOF pubblicato;
- curricolo verticale pubblicato;
- RAV/rendicontazione/documenti valutativi pubblici;
- registri interni repo: `riferimenti_istituzionali_normativa.json` e `FONTI_PTOF_RAV_NORMATIVA.md`.

## Esito sintetico aggiornato

| Fonte | Esito |
|---|---|
| SRC-001 — Gazzetta Ufficiale D.M. 254/2012 | confermata esternamente |
| SRC-002 — PDF MIM D.M. 254/2012 | URL stabile ma accesso 403 dalla sessione |
| SRC-010 — pagina MIM candidata IN2025 | URL stabile candidato ma accesso 403 dalla sessione |
| SRC-011 — atto/nota/comunicato MIM IN2025 | non risolta |
| SRC-012 — Scuola in Chiaro istituto | risolta come repo-defined, verifica esterna pendente |
| SRC-013 — codice meccanografico istituto | risolta come repo-defined, verifica esterna pendente |
| SRC-014 — sito istituzionale scuola | risolta come repo-defined, verifica esterna pendente |
| SRC-015 — PTOF pubblicato | risolta come repo-defined, verifica esterna pendente |
| SRC-016 — curricolo verticale pubblicato | non risolta nel repo |
| SRC-017 — RAV/rendicontazione | risolta come repo-defined, verifica esterna pendente |

## Decisione prudenziale

Il D.M. 254/2012 può essere registrato come fonte normativa primaria tramite Gazzetta Ufficiale.

IN2025 non può essere classificata come vigente, adottata o ufficialmente recepita nel sistema finché la fonte MIM candidata non viene verificata manualmente o con accesso stabile.

Le fonti locali dell'istituto possono essere usate come base interna CML perché coerenti tra registri repo, ma devono restare etichettate come:

```text
repo-defined, verifica esterna pendente
```

Il curricolo verticale pubblicato resta non risolto finché non viene individuato sul sito istituzionale o in altra fonte scolastica verificabile.

## File aggiornati/prodotti

- `docs/04_design/CML-419_initial_source_matrix.md`
- `report/CML-419A_repo_defined_sources_audit.md`

## Gate aggiornato

```text
SRC-001 confermata
SRC-010 verificata manualmente oppure mantenuta come fonte candidata non accessibile
SRC-012 risolta come repo-defined e da verificare esternamente
SRC-014 risolta come repo-defined e da verificare esternamente
SRC-015 risolta come repo-defined e da verificare esternamente
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
2. richiedere verifica manuale locale esterna delle fonti istituto;
3. mantenere le fonti istituto come repo-defined;
4. mantenere IN2025 come materiale/proposta non vigente;
5. dichiarare il curricolo verticale pubblicato non reperito oppure continuare la ricerca.

## Verdict

```text
CML_419A_REPO_DEFINED_SOURCE_MATRIX_RECONCILED_READY_REMOTE_BRANCH
```
