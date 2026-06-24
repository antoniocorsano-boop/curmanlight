# Report CML-113 — Validazione Dipartimentale Workflow Audit

## 1. Stato Repository
| Elemento | Valore |
|----------|--------|
| Branch | `main` |
| Commit iniziale | `1804ac5` |
| Working tree | modificata su `index.html` (non stageata) |
| Slice precedente | `CML_112A_HASH_SELECTION_SMOKE_TEST_PASSED` |
| Discipline | 14/14 complete |

## 2. Sintesi del Flusso Attuale
Il codice contiene già elementi di validazione dipartimentale, sebbene non centralizzati.

### A. Pannello validazione disciplina
- Sezione `curricolo-validation` dentro `#tab-lavoro` (linea ~4681).
- Righe per ogni disciplina con select esito e note.
- Esiti: `validata`, `validata_con_note`, `rinviata`.
- Bottoni: salva / revoca / data.
- Storage: `curmanlight.departmentValidation` (localStorage).
- Funzioni JS: `setDisciplineValidation`, `saveValidation`, `resetDisciplineValidation`, `getDepartmentValidationState`.

### B. Pannello Import/Export proposte docente
- Sezione `department-import-panel` dentro `#tab-lavoro` (linea ~1348).
- Import `.cml` docente, decisioni per-proposta, export esito dipartimento `.cml`.
- Nome label "Validazione dipartimentale" fuorviante: si tratta di gestione proposte, non di validazione della disciplina intera.

### C. Pannello Verifica referente
- Sezione `referent-validation-panel` (linea ~1359).
- Import esiti dipartimentali, report gruppo Markdown.
- Protetto da role access `CML2025`.

### D. Pannelli statici di completezza/readiness
- Hardcoded 14/0/0 in `Consultazione`.
- Mostrano label “In revisione”, “Bozza completa disponibile”.
- Non sincronizzati con lo stato validazione.

### E. Tab Definitivo
- Mostra solo voci approvate a livello di item (non disciplina).
- Nessun legame con validazione dipartimentale.

## 3. Problemi Individuati
### P0
- **P0.1** Il pannello di validazione disciplina è visibile solo in `Revisione`, non in `Consultazione` o `Definitivo`, riducendo la tracciabilità istituzionale.
- **P0.2** Il pannello "Validazione dipartimentale" (import) condivide lo stesso label del pannello disciplina: ambiguità su cosa si sta validando.
- **P0.3** Il tab `Definitivo` mostra contenuti approvati singolarmente, senza stato di validazione dipartimentale, generando rischio di lettura come "approvato definitivamente".

### P1
- **P1.1** Contatori statici "Stato di completezza" e "Readiness per approvazione" non sono alimentati dal motore validazione.
- **P1.2** Non esiste un flusso visibile "pronto per approvazione" tra validazione dipartimentale e `Definitivo`.
- **P1.3** Il coordinatore di dipartimento non ha una vista unica aggregata per le discipline del proprio dipartimento.

### P2
- **P2.1** Microcopy confusa: stesso titolo per due operazioni diverse.
- **P2.2** "Readiness per approvazione" è formulazione tecnica poco accessibile.

### P3
- **P3.1** Pannelli statici lunghi (14 righe) senza collasso.

## 4. Stati Consigliati
| Stato | Significato |
|-------|-------------|
| `in_revisione` | Contenuto in lavorazione |
| `validata_dipartimento` | Validata dal dipartimento |
| `validata_con_note` | Validata con rilievi |
| `rinviata` | Rinviata per approfondimenti |
| `pronto_approvazione` | Pronta per Collegio Docenti |
| `approvato_esternamente` | Approvata formalmente |

## 5. Azioni Consentite
- Registrare esito per disciplina
- Aggiungere note opzionali
- Revocare validazione
- Visualizzare stato aggregato

## 6. Azioni Vietate
- Nessun pulsante "Approva definitivamente"
- Nessuna modifica contenuti
- Nessun automatismo di promozione
- Nessun dato personale obbligatorio
- Nessuna autenticazione reale

## 7. Posizione UI Consigliata
- Spostare/duplicare il pannello validazione disciplina in `Consulta`, dopo i pannelli statici.
- Riorganizzare `Revisione`: separare chiaramente:
  - "Validazione dipartimentale per disciplina"
  - "Import/Export proposte docente"
- Sincronizzare i contatori statici con lo stato validazione.

## 8. Primo Incremento Runtime CML-114
- Rivelare lo stato validazione in `Consultazione`.
- Sincronizzare i contatori di completezza/readiness con `curmanlight.departmentValidation`.
- Separare titoli/microcopy nei due pannelli di `Revisione`.
- Riesumare struttura JS/storage già presente senza duplicati e senza perdita dati.

## 9. File da Modificare in CML-114
- `_published_snapshot/netlify-current/index.html`

## 10. File da Non Modificare
- `sw.js`, `_headers`, asset, `.cml` schema, `.github/workflows`, PDF, manifest

## 11. Controlli Minimi per CML-114
- Pannello visibile in `Consultazione` senza regressioni layout.
- Contatori aggiornati dinamicamente dopo salvataggio validazione.
- Denominazione pannelli in `Revisione` non ambigua.
- Storage coerente e non duplicato.
- Nessuna regressione su import/export, role-access, responsive.

## 12. Verdetto Finale
```
CML_113_VALIDAZIONE_DIPARTIMENTALE_WORKFLOW_AUDIT_READY
```
Prossimo step: **CML-114 — VALIDAZIONE_DIPARTIMENTALE_FIRST_RUNTIME_INCREMENT**
