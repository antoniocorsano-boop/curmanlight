# Report CML-119C-bis: Disciplinary Knowledge Content Governance Audit

## Riepilogo
Audit governance completo prima della normalizzazione pilota CML-119D. Classificati tutti i 10 campi del contratto `cml-disciplinary-knowledge-map-v1` in tre categorie di derivabilità: A (derivabile dai dati), B (derivabile parzialmente e da validare), C (non derivabile / richiede intervento umano). Identificati rischi di inventazione e regole operative per CML-119D.

## Disciplina analizzate

### Tecnologia
- File: `content/curriculum/tecnologia.normalized.json`
- Unità: 13
- Copertura: Infanzia (2), Primaria (4), Secondaria (7)
- Nuclei: **nessuno** (campo `nucleo` assente in tutte le unità)
- Ambiti: Osservazione/analisi oggetti, Digitale/dati/procedure, Materiali/trasformazioni, Disegno/rappresentazione, Energia/sostenibilità, Cittadinanza tecnologica
- Fonti: IN2012 DM254/2012 (7), DM221/2025 (3), PTOF 2025-2028 (1), Curricolo di istituto Agenda2030 (1)

### Matematica
- File: `content/curriculum/matematica.normalized.json`
- Unità: 13
- Copertura: Infanzia (1), Primaria (5, solo classi 1 e 5), Secondaria (7)
- Nuclei: Numeri (4), Spazio e figure (2), Relazioni e funzioni (2), Informatica (2), Dati e previsioni (1)
- Ambiti: Numeri/calcolo, Geometria/orientamento, Relazioni/dati/previsioni, Informatica/pensiero computazionale, Dati/statistiche/probabilità, Educazione finanziaria
- Fonti: IN2012 DM254/2012 (6), DM221/2025 (5), Legge92/2019 (1)

### Italiano
- File: `content/curriculum/italiano.normalized.json`
- Unità: 14
- Copertura: Infanzia (3), Primaria (5), Secondaria (6)
- Nuclei: Ascolto (3), Parlato (3), Lettura (3), Scrittura (2), Riflessione sulla lingua (2), Acquisizione lessico (1)
- Ambiti: Ascolto/comunicazione orale, Produzione orale/interazione, Avvicinamento scrittura, Lettura/comprensione, Produzione scritta/ortografia, Acquisizione lessico, Riflessione sulla lingua
- Fonti: IN2012 DM254/2012 (7), DM221/2025 (6)

## Matrice di classificazione campi contratto

| Campo | Tecnologia | Matematica | Italiano | Categoria |
|-------|-----------|------------|----------|-----------|
| `statutoEpistemologico` | C | C | C | Non derivabile / Richiede intervento umano |
| `naturaDisciplina` | C | C | C | Non derivabile / Richiede intervento umano |
| `sintassiDisciplinare` | C | C | C | Non derivabile / Richiede intervento umano |
| `struttureSostanziali` | B | B | B | Derivabile parzialmente e da validare |
| `saperiEssenziali` | B | B | B | Derivabile parzialmente e da validare |
| `nodiDisciplinari` | B | B | B | Derivabile parzialmente e da validare |
| `legamiInterdisciplinari` | B | B | B | Derivabile parzialmente e da validare |
| `competenzeChiaveEuropee` | B | B | B | Derivabile parzialmente e da validare |
| `progressioneVerticale` | A* | A* | A* | Derivabile (template) — contenuto da validare |
| `decisioniCurricolari` | B | B | B | Derivabile parzialmente e da validare |

`A*` = struttura/template derivabile automaticamente dai dati esistenti; contenuto testuale e interpretazione richiedono validazione umana.

## Categoria A: Derivabile dai dati esistenti

### `progressioneVerticale` (template)
- **Tecnologia**: 13 unità mappabili per ordine/classe/fascia
- **Matematica**: 13 unità mappabili, con gap in Primaria (classi 2-4)
- **Italiano**: 14 unità mappabili per ordine/classe
- **Derivabilità**: il template può essere generato automaticamente enumerando le unità per `ordine` e `classe`
- **Rischio inventazione**: basso per struttura, medio per contenuto testuale
- **Validazione richiesta**: dipartimentale, per confermare che la progressione descritta corrisponda all'intenzione curricolare

## Categoria B: Derivabili parzialmente e da validare

### `struttureSostanziali`
- **Fonti disponibili**: campi `ambito` esistenti (6 Tecnologia, 6 Matematica, 7 Italiano)
- **Derivabilità**: mappatura 1:1 da `ambito` a `strutturaSostanziale`
- **Rischio inventazione**: basso per elenco, medio per interpretazione (l'ambito è già una struttura sostanziale?)
- **Validazione richiesta**: dipartimentale, per confermare naming e raggruppamenti

### `saperiEssenziali`
- **Fonti disponibili**: `traguardo` + `obiettivi` esistenti
- **Derivabilità**: selezione da traguardi/obiettivi, ma "essenziali" implica giudizio di valore
- **Rischio inventazione**: medio (selezione arbitraria senza criterio)
- **Validazione richiesta**: dipartimentale obbligatoria

### `nodiDisciplinari`
- **Fonti disponibili**: 
  - Matematica: `nucleo` (Numeri, Spazio e figure, Relazioni e funzioni, Informatica, Dati e previsioni)
  - Italiano: `nucleo` (Ascolto, Parlato, Lettura, Scrittura, Riflessione sulla lingua, Acquisizione lessico)
  - Tecnologia: assenza di `nucleo`, derivabili solo da `ambito`
- **Derivabilità**: parziale. I `nucleo` esistenti sono candidati naturali, ma la classificazione in `tipo` (epistemologico, sostanziale, ecc.) è interpretativa
- **Rischio inventazione**: medio-alto (classificazione tipologica non documentata)
- **Validazione richiesta**: dipartimentale obbligatoria

### `legamiInterdisciplinari`
- **Fonti disponibili**: sovrapposizione di ambiti tra discipline (es. Matematica-Informatica-Tecnologia)
- **Derivabilità**: solo per coincidenza di ambiti. I legami espliciti intenzionali non esistono nei dati
- **Rischio inventazione**: alto (nessun dato esplicito di legame)
- **Validazione richiesta**: dipartimentale + collegiale (per legami tra discipline)

### `competenzeChiaveEuropee`
- **Fonti disponibili**: Raccomandazione 2006/962/CE (non presente nei dati), allineamento implicito con traguardi
- **Derivabilità**: solo per allineamento informale tra traguardi e descrizioni UE. Nessun mapping documentato
- **Rischio inventazione**: alto (attribuzione senza fonte diretta)
- **Validazione richiesta**: dipartimentale + referente curricolo

### `decisioniCurricolari`
- **Fonti disponibili**: `noteDipartimento` + `stato` delle unità
- **Derivabilità**: formalizzazione di decisioni implicite (esclusioni, inclusioni, enfasi) da note esistenti
- **Rischio inventazione**: medio (motivazione da ricostruire da note)
- **Validazione richiesta**: dipartimentale

## Categoria C: Non derivabile / Richiede intervento umano

### `statutoEpistemologico`
- **Definizione**: natura della disciplina come campo di conoscenza
- **Tecnologia**: "scienza applicata/tecnologica" / "sapere operativo con strumenti"
- **Matematica**: "scienza formale/logica" / "scienza delle strutture quantitative e relazionali"
- **Italiano**: "scienza linguistica/letteraria" / "scienza umana del linguaggio e della letteratura"
- **Derivabilità**: **Nessuna**. Nessun dato JSON contiene questa informazione
- **Rischio inventazione**: **Massimo**. Attribuire uno statuto è una scelta disciplinare
- **Validazione richiesta**: Collegio Docenti / dipartimento

### `naturaDisciplina`
- **Definizione**: posizionamento istituzionale e culturale nel curricolo
- **Derivabilità**: **Nessuna**. Dipende da PTOF, scelte di istituto, contesto territoriale
- **Rischio inventazione**: **Massimo**. Implica giudizi su ruolo e identità della disciplina
- **Validazione richiesta**: Collegio Docenti / DS

### `sintassiDisciplinare`
- **Definizione**: linguaggio, simboli, metodi caratteristici
- **Derivabilità**: **Nessuna algoritmica**. Richiede analisi metodologica (es. Italiano = analisi testuale/lessicale/sintattica; Matematica = formalizzazione/astrazione; Tecnologia = progettazione/iterazione/testing)
- **Rischio inventazione**: **Alto**. Caratterizzazione metodologica non documentata
- **Validazione richiesta**: dipartimento

## Raccomandazioni per CML-119D

### Norme tassative
1. **Zero invenzione**: nessun campo può essere popolato senza fonte esplicita
2. **Stato `da_validare`**: tutti i nuovi array/campi del contratto, se inseriti, devono essere in stato `da_validare`
3. **Separazione proposte/decisioni**: proposte precompilate ≠ decisioni approvate
4. **ValidazioneUmana**: ogni nuovo contenuto deve avere `validazioneUmana: true` (conferma del compilatore umano)
5. **Tracciabilità fonti**: ogni elemento nuovo deve avere campo `fonte` non vuoto

### Livelli di normalizzazione consentiti in CML-119D

| Livello | Azione consentita | Esempio |
|---------|-------------------|---------|
| 1 | Validazione esistente | Confermare che `nucleo` e `nucleoFondante` siano usati correttamente |
| 2 | Estrazione template | Generare struttura `progressioneVerticale` da unità esistenti (senza testo generato) |
| 3 | Mappatura 1:1 | Mappare `ambito` → `struttureSostanziali` (senza rinominare/interpretare) |
| 4 | Proposta documentata | Inserire `nodiDisciplinari` tratti da `nucleo` esistenti, con `fonte` al file sorgente |
| 5 | Non consentito | Generare `statutoEpistemologico`, `naturaDisciplina`, `sintassiDisciplinare` senzainput umano documentato |

### Esempio di proposta accettabile per CML-119D
```json
{
  "nodiDisciplinari": [
    {
      "id": "nod_mat_001",
      "etichetta": "Numeri",
      "tipo": "sostanziale",
      "descrizione": "Nucleo numerico: sistemi di numerazione, operazioni, relazioni quantitative",
      "fonte": "Derivato da nucleo 'Numeri' in mat_inf_5_001, mat_pri_1_001, mat_pri_5_001, mat_sec_1_001, mat_sec_3_001",
      "legami": [],
      "stato": "da_validare",
      "validazioneUmana": true
    }
  ],
  "decisioniCurricolari": [
    {
      "id": "dec_mat_001",
      "tipo": "inclusione",
      "nodiRiferimento": ["nod_mat_001"],
      "unitaRiferimento": ["mat_pri_1_001"],
      "motivazione": "Il nucleo Numeri è presente in Primaria 1 come da IN2012",
      "stato": "da_validare",
      "fonte": "Indicazioni Nazionali 2012, D.M. 254/2012, sezione Matematica — Numeri",
      "validazioneUmana": true
    }
  ]
}
```

### Esempio di proposta NON accettabile
```json
{
  "statutoEpistemologico": "La Matematica è la scienza dei numeri e delle figure geometriche"
}
```
Motivo: formulazione generica senza fonte istituzionale, senza validazione, potenzialmente inventata.

## Validazione audit

| Controllo | Esito |
|-----------|-------|
| Audit-only, nessuna modifica runtime | ✅ |
| Nessuna modifica `_published_snapshot/netlify-current/index.html` | ✅ |
| Nessuna modifica export/import | ✅ |
| Nessuna modifica schema `.cml` | ✅ |
| Nessuna modifica JSON disciplinari | ✅ |
| Nessuna modifica validatore | ✅ |
| Nessun contenuto epistemologico inventato | ✅ |
| Nessuna nuova UI, persistenza, backend, API, autenticazione | ✅ |

## Verdetto
```text
CML_119C_BIS_DISCIPLINARY_KNOWLEDGE_CONTENT_GOVERNANCE_AUDIT_READY
```
