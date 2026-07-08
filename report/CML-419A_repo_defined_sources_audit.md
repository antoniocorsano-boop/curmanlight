# CML-419A — Repo-defined sources audit

## 1. Scopo

Questo report integra il Source Matrix Completion Gate partendo dalle fonti già definite nel repository CurManLight, invece che da sole ricerche esterne.

L'obiettivo è distinguere:

- fonti esterne confermate;
- fonti candidate non accessibili dalla sessione;
- fonti già definite nel repo e coerenti internamente;
- fonti ancora non risolte nel repo.

## 2. File repo ispezionati

| File | Ruolo |
|---|---|
| `_published_snapshot/netlify-current/riferimenti_istituzionali_normativa.json` | Registro strutturato runtime con istituto, PTOF, RAV e normativa |
| `_published_snapshot/netlify-current/docs_distribuzione/FONTI_PTOF_RAV_NORMATIVA.md` | Documento distribuzione fonti istituzionali/normative |
| `docs/03_execution/CML-045.md` | Conferma che i due file fonti sono asset precaricati nel service worker |
| `docs/03_execution/CML-297.md` | Conferma lavoro UX su chiarezza fonti 2012/2025 e proposta 2025 |
| `docs/04_user/CML_NOTA_RILASCIO_STATO_ATTUALE.md` | Conferma lessico utente su IN 2012 vigente e IN 2025 bozza/materiale di lavoro |
| `docs/03_execution/CML-004R-SELECT.md` | Conferma distinzione tra sezioni generali consultative e workflow disciplinare |

## 3. Esito principale

Il repository contiene già una base fonti strutturata e coerente internamente.

Sono presenti e coerenti tra JSON runtime e documento markdown distribuzione:

- denominazione istituto;
- comune;
- codice meccanografico `AVIC849003`;
- sito istituzionale `https://www.icdonmilaniariano.edu.it/`;
- URL Scuola in Chiaro;
- PTOF 2025-2028 con scheda e PDF;
- RAV 2022-2025 con scheda e PDF;
- D.M. 254/2012 con URL Gazzetta Ufficiale;
- riferimenti normativi generali aggiuntivi.

## 4. Classificazione aggiornata

| ID | Esito prima | Esito dopo audit repo | Nota |
|---|---|---|---|
| SRC-001 | confermata | confermata esternamente | Gazzetta Ufficiale |
| SRC-010 | candidata 403 | candidata 403 | Non classificare IN2025 come vigente |
| SRC-012 | non risolta | repo-defined consistent | Scuola in Chiaro presente nel repo |
| SRC-013 | da verificare | repo-defined consistent | Codice AVIC849003 presente in due file |
| SRC-014 | non risolta | repo-defined consistent | Sito istituto presente in due file |
| SRC-015 | non risolta | repo-defined consistent | PTOF 2025-2028 presente in due file |
| SRC-016 | non risolta | non risolta nel repo | Curricolo verticale pubblicato non individuato |
| SRC-017 | non risolta | repo-defined consistent | RAV 2022-2025 presente in due file |

## 5. Decisione prudenziale

Le fonti istituto possono essere usate nel pacchetto CML-419 come:

```text
repo-defined, verifica esterna pendente
```

Non devono ancora essere trattate come certificate esternamente finché non vengono aperte e verificate fuori dal repository.

## 6. Impatto sul gate CML-419A

Il gate migliora:

```text
SRC-012 risolta come repo-defined
SRC-014 risolta come repo-defined
SRC-015 risolta come repo-defined
SRC-017 risolta come repo-defined
```

Restano bloccanti o cautelative:

```text
SRC-010 — fonte IN2025 candidata, accesso 403 dalla sessione
SRC-016 — curricolo verticale pubblicato non risolto
```

## 7. Raccomandazione

Procedere a CML-419B, non ancora a CML-420 runtime.

CML-419B deve decidere se il prototipo può usare fonti repo-defined con etichetta prudente oppure se occorre prima una verifica manuale locale esterna.

## Verdict

```text
CML_419A_REPO_DEFINED_SOURCES_AUDIT_READY_REMOTE_BRANCH
```
