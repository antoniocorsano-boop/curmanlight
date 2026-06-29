# Report CML-119D: Disciplinary Knowledge Map Pilot Normalization

## Riepilogo

Applicato il contratto `cml-disciplinary-knowledge-map-v1` a 3 discipline pilota (Tecnologia, Matematica, Italiano) nel rispetto delle regole di governance CML-119C-bis. Nessun contenuto inventato: tutti i nuovi campi sono derivati dai dati esistenti, mappati 1:1 o formalizzati da `noteDipartimento`, con `fonte` documentata e `stato: "da_validare"`.

## File Modificati

- `content/curriculum/tecnologia.normalized.json`
- `content/curriculum/matematica.normalized.json`
- `content/curriculum/italiano.normalized.json`

## Dettaglio Normalizzazione

### Tecnologia

- **Nodi disciplinari**: 0 (campo non aggiunto: assenza di `nucleo` nel file)
- **Strutture sostanziali**: 6 (derivate da `ambito`)
- **Progressione verticale**: 10 voci
- **Decisioni curricolari**: 2 (da `noteDipartimento`)
- **Campi omessi**: `statutoEpistemologico`, `naturaDisciplina`, `sintassiDisciplinare`, `saperiEssenziali`, `legamiInterdisciplinari`, `competenzeChiaveEuropee`

### Matematica

- **Nodi disciplinari**: 5 (Numeri, Spazio e figure, Relazioni e funzioni, Informatica, Dati e previsioni)
- **Strutture sostanziali**: 12 (derivate da `ambito`)
- **Progressione verticale**: 6 voci
- **Decisioni curricolari**: 4 (da `noteDipartimento`)
- **Campi omessi**: `statutoEpistemologico`, `naturaDisciplina`, `sintassiDisciplinare`, `saperiEssenziali`, `legamiInterdisciplinari`, `competenzeChiaveEuropee`

### Italiano

- **Nodi disciplinari**: 6 (Ascolto, Parlato, Lettura, Scrittura, Riflessione sulla lingua, Acquisizione lessico)
- **Strutture sostanziali**: 13 (derivate da `ambito`)
- **Progressione verticale**: 12 voci
- **Decisioni curricolari**: 4 (da `noteDipartimento`)
- **Campi omessi**: `statutoEpistemologico`, `naturaDisciplina`, `sintassiDisciplinare`, `saperiEssenziali`, `legamiInterdisciplinari`, `competenzeChiaveEuropee`

## Regole di Governance Rispettate

1. **Zero invenzione**: nessun contenuto generato senza fonte esplicita
2. **Stato `da_validare`**: tutte le `decisioniCurricolari` sono in stato `da_validare`
3. **Separazione proposte/decisioni**: elementi precompilati non sono approvazioni
4. **Tracciabilità fonti**: ogni nuovo elemento riporta la fonte (unità sorgente, IN2012, DM221/2025, noteDipartimento)
5. **ValidazioneUmana**: preservata su tutte le unità curricolari esistenti

## Validazioni

- `node tools/validate-cml-normalized-curriculum.mjs` — **PASS**
  - totale file: 7
  - totale unità: 94
  - overallValid: true
  - invalidCount: 0
- `git diff --check` — pulito
- Nessuna modifica runtime, UI, export/import, schema `.cml`, validatore

## Prossimi Passi

- CML-119E: estensione validatore per nuovi campi contratto
- CML-119F: normalizzazione discipline rimanenti (Geografia, Inglese, Scienze, Storia)

## Verdetto

```text
CML_119D_DISCIPLINARY_KNOWLEDGE_MAP_PILOT_NORMALIZATION_READY
```
