# Report — CML-262 Role Language Surface Cleanup Live Smoke

## Sintesi esecutiva

Live smoke di verifica pubblicazione CML-261P su GitHub Pages. CML-261 ha sostituito termini tecnici anglicismi con lessico scolastico italiano ("UDA smart" → "UDA personalizzata", "persistita" → "salvata", "Reset" → "Ripristina marcature", "Piu" → "Più"). La verifica live conferma tutte le sostituzioni pubblicate correttamente, assenza di regressioni, validatori invariati.

## Stato tecnico di partenza

| Parametro | Valore |
|-----------|--------|
| Branch | main |
| HEAD locale | `84b89fe` (CML-261P) |
| HEAD remoto | `84b89fe` |
| main...origin/main | Allineato |
| Working tree | Pulito |
| URL live | `https://antoniocorsano-boop.github.io/curmanlight/` |

## Verifica pubblicazione CML-261

| Controllo | Esito | Evidenza |
|-----------|-------|----------|
| HTTP 200 | ✅ | Response 200 OK |
| Lunghezza contenuto | ✅ | 828,798 byte |
| Contenuto aggiornato | ✅ | "UDA personalizzata" presente, "UDA smart" assente |

## Matrice smoke

| Area | Controllo | Esito | Evidenza | Note |
|------|-----------|-------|----------|------|
| **Home** | Caricamento | ✅ | Pagina completa renderizzata | Nessun errore |
| **Home** | Percorso di lavoro | ✅ | 4 fasi visibili | Docente→Dipartimento→Referente→Documento finale |
| **Home** | Navigazione tab principali | ✅ | Curriculum, Competenze, Esportazioni, Guida | Tutti i tab raggiungibili |
| **Guida** | Blocco per ruolo | ✅ | 4 ruoli con esito atteso | Docente, Dipartimento, Referente, Documento finale |
| **Guida** | Nessun residuo vecchi termini | ✅ | "UDA smart", "persistita", "Reset", "Piu" assenti | Ricerca su HTML live |
| **Processo** | Fasi leggibili | ✅ | Dipartimento e Referente strutturati | Messaggi di azione chiari |
| **Processo** | Pulsanti azione | ✅ | Carica proposte, Carica esiti | Funzionanti |
| **Esportazioni** | Blocco "Quale esportazione usare?" | ✅ | 4 ruoli guida | Docente, Dipartimento, Referente, Tutti |
| **Esportazioni** | 6 gruppi | ✅ | Documento finale, Confronto, Bozza, .cml, Report, Backup | Completi |
| **UDA/Programmazione** | Passo 1 — Bozza annuale | ✅ | Campi compilabili | "salvata" nei messaggi |
| **UDA/Programmazione** | Passo 2 — Archivio UDA personalizzate | ✅ | "UDA personalizzata" 18 occorrenze | Termine corretto ovunque |
| **UDA/Programmazione** | Filtri e ordinamento | ✅ | "Più recenti" visibile | Ordinamento funzionante |
| **UDA/Programmazione** | "Ripristina marcature" | ✅ | Pulsante nel pannello Evidenze | Sostituisce "Reset" |
| **Discipline** | Selezione Matematica | ✅ | Dati curricolari caricati | Hash/tab corretti |
| **Discipline** | Selezione Tecnologia | ✅ | Dati curricolari caricati | Nessuna regressione |
| **Console** | Errori JS bloccanti | ✅ | Nessun ReferenceError/SyntaxError | 0 errori rilevati |
| **Responsive** | Desktop | ✅ | Layout completo | Contenuto visibile |
| **Responsive** | Bottom navigation mobile | ✅ | Icone e label presenti | Menu mobile funzionante |

## Residui linguistici trovati

| Termine | Dove | Tipo | Nota |
|---------|------|------|------|
| "Reset" | CSS class `.evidence-reset-btn` | Non bloccante | Nome tecnico interno, non superficie UI |
| "Reset" | Funzione `resetEvidenceStates()` | Non bloccante | Nome tecnico interno, non superficie UI |
| "report" | Etichetta "Report gruppo lavoro" | Rimandato a CML-263 | Non toccato per sicurezza in CML-261 |

## Residui non bloccanti motivati

- CSS class e nomi funzione JS con "reset": mantenuti perché sono identificatori tecnici interni, non visibili all'utente. La superficie UI è corretta ("Ripristina marcature").
- "report" in "Report gruppo lavoro": non toccato in CML-261 perché la roadmap CML-260 lo assegnava a CML-263 (Surface Technical Terms Cleanup).
- "CurManLight" in "Livelli di maturità CurManLight → CurMan": rimandato a CML-263.

## Rettifica CML-262R — Visible Governance References

**Scoperto post-smoke durante revisione umana.** Lo smoke CML-262 ha verificato correttamente il set CML-261 ma NON ha coperto il pattern "codici CML visibili nella UI", che costituisce una classe di problema distinta.

| Issue | Testo live | Priorità | Dove |
|-------|-----------|----------|------|
| 1 | `"Anteprima consultiva basata sul contratto dati CML-061."` | P0 | Template JS Tecnologia |
| 2 | `"Fonte: CML-061 / CML-062"` | P0 | Template JS Tecnologia (metadati) |
| 3 | `"Pacchetto pilota CML-062"` (28 occorrenze) | P1 | `noteDipartimento` in `tecnologia.normalized.json` |

**Classificazione**: governance reference visible to user. Espone codici interni di sviluppo e terminologia tecnica ("contratto dati") a utenti scolastici.

## Errori console

Nessun errore JavaScript bloccante rilevato durante il caricamento e la navigazione live.

## Risultato responsive

- Desktop: layout completo, tutte le sezioni accessibili ✅
- Mobile: bottom navigation con icone e label, menu funzionante ✅

## Validatore curriculum

14/14 valid — overallValid true, invalidCount 0 ✅

## Shape test

14/14 PASS — 0 failed ✅

## Rischi residui

| Rischio | Impatto | Mitigazione |
|---------|---------|-------------|
| Governance references visibili (CML-061, CML-062, "contratto dati") | Alto (carico cognitivo, percezione tecnica) | **CML-263 obbligatorio**: fix stringhe template |
| Codici CML nei dati JSON (28 campi noteDipartimento) | Medio | **CML-264**: fix dati curricolari |
| Eventuali termini inglesi in contesti non analizzati | Basso | Coperti da CML-265 in roadmap |
| CSS class "reset" in debug | Molto basso | Nome tecnico standard, non visibile in UI |

## Raccomandazione prossima slice

**CML-263 (obbligatoria, P0/P1)** — Visible Governance References Cleanup:
- Sostituire `"Anteprima consultiva basata sul contratto dati CML-061."` → `"Anteprima consultiva da verificare in sede di lavoro disciplinare."`
- Sostituire `"Fonte: CML-061 / CML-062"` → `"Base di lavoro: materiali curricolari già predisposti"`
- ~4 righe modificate in `index.html` + snapshot

CML-264 (consigliata, P2) — Curriculum Data Governance Cleanup (28 campi noteDipartimento in `tecnologia.normalized.json`).

## Checklist finale

- [x] repository preflight verified
- [x] live URL reachable
- [x] CML-261 language changes visible live
- [x] Home smoke passed
- [x] Guide smoke passed
- [x] Process smoke passed
- [x] Exports smoke passed
- [x] UDA/Planning smoke passed
- [x] Discipline navigation smoke passed
- [x] console checked
- [x] responsive checked
- [x] residual terms reviewed
- [x] governance references detected post-smoke (CML-262R)
- [x] validator executed
- [x] shape test executed
- [x] runtime unchanged during CML-262
- [x] no manual deploy executed
- [x] no push executed
- [x] verdict recorded

## Verdict

```
CML_262_ROLE_LANGUAGE_SURFACE_CLEANUP_LIVE_SMOKE_READY_LOCAL_NOT_PUSHED
```

### Rettifica CML-262R

```
CML_262R_LIVE_SMOKE_RECTIFICATION_VISIBLE_GOVERNANCE_REFERENCES_READY_LOCAL_NOT_PUSHED
```
