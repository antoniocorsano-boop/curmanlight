# CML-DISCIPLINE-GENERALIZATION-RUNTIME-MICROFIX

## Obiettivo
Correggere solo i residui semplici in cui “Tecnologia” appare ancora come disciplina modello, disciplina privilegiata o default improprio nelle viste utente esistenti.
La slice rende le viste più neutre e multi-disciplina, senza entrare nella generalizzazione strutturale di UDA/progettazione, export/import o raccolta/analisi.

## Stato iniziale
- Branch: main
- HEAD iniziale: c4969e2 (da audit precedente)
- origin/main: allineato
- Working tree: pulito (esclusi untracked locali)
- Slice precedente: CML-DISCIPLINE-GENERALIZATION-AUDIT-AND-FIX-PLAN
- Verdict precedente: CML_DISCIPLINE_GENERALIZATION_AUDIT_AND_FIX_PLAN_READY

## Perimetro
- Correggere solo C (default impropri), D (hardcode semplici), H (microcopy/documentazione utente visibili senza refactor)
- Non modificare: E (hardcode strutturale), F (UDA/progettazione non generalizzata), G (export/import disciplinare)
- File modificabili: _published_snapshot/netlify-current/index.html, docs/03_execution/..., report/..., docs/REPO-MOVELOG.md
- Nessun deploy, nessun push, nessun refactor generale

## File modificati
- _published_snapshot/netlify-current/index.html

## Residui C/D/H trattati
### C3 - Default impropri (3):
1. DG-01: `selectedDisc = "Tecnologia"` in `renderUdaModello()` → `selectedDisc = selDisc || DISCIPLINE[0] || null;`
2. DG-02: `selDisc=DISCIPLINE[0] || "Tecnologia"` → `selDisc=DISCIPLINE[0];`
3. DG-03: `DEFAULT_PROFILE.disciplina=DISCIPLINE[0] || "Tecnologia"` → `DEFAULT_PROFILE.disciplina=DISCIPLINE[0];`

### D2 - Hardcode semplici (2):
1. DG-04: Home link "Tecnologia normalizzata" → "Curriculum normalizzato" (già fatto)
2. DG-05: Button "Tecnologia" attivo nella mappa → 
   - Rimosso `active` dal bottone Tecnologia
   - Aggiunto `active` al bottone Italiano (prima disciplina)

## Residui E/F/G esclusi (per scope)
- DG-06-F: UDA_MODELI array (solo modelli Tecnologia) - F categoria (UDA non generalizzata)
- DG-07-E: Funzione `renderTecnologiaNorm()` - E categoria (hardcode strutturale)
- DG-08-G: Export panel solo per Tecnologia - G categoria (export/import)

## Controlli funzionali eseguiti
1. **Home**: Caricamento, overlay, navigazione principale ✓
2. **Curriculum**: Cambio disciplina (Italiano, Matematica, Scienze, Tecnologia, Religione Cattolica) - titoli e label corretti ✓
3. **Competenze e progettazione**: Verifica mostra disciplina corrente come esempio (non solo Tecnologia) ✓
4. **UDA/didattica**: Titoli e microcopy verificati, nessuna generalizzazione forzata (riservato a slice futura) ✓
5. **Export Center**: Raggiungibile, nessuna regressione, payload/export non modificati ✓
6. **Guida**: Raggiungibile, nessuna regressione navigazione ✓
7. **Mobile**: Navigazione invariata, disciplina corrente coerente ✓
8. **Console**: Errori JavaScript reali: 0 ✓

## Validatori automatici
- `node tools/validate-cml-normalized-curriculum.mjs`: 14/14 PASS ✓
- `node tools/test-runtime-mappa-dati-shape.mjs`: 14/14 PASS ✓
- Runtime mappa dati: 14/14 preservato ✓
- Export/import: Non modificati ✓
- Content/curriculum: Non modificato ✓
- Errori JS reali: 0 ✓
- Accessibilità: 88/100 invariata (non aggiornata) ✓

## Limiti
- Non implementata progettazione annuale
- Non implementate UDA generalizzate  
- Non implementata raccolta informazioni
- Non implementata analisi
- Non modificato payload .cml
- Non aggiornato score accessibilità
- Non dichiarata certificazione WCAG o conformità legale

## Backlog residuo
- CML-ANNUAL-PLANNING-AND-UDA-GENERALIZATION-CONTRACT (P0)
- CML-EXPORT-IMPORT-DISCIPLINE-GENERALIZATION-AUDIT (se necessario)
- CML-COLLECTION-AND-ANALYSIS-VIEW-CONTRACT
- VoiceOver/macOS test futuro

## Invarianti rispettate
- Nessuna modifica a content/curriculum/, tools/, assets/, examples/
- Nessuna modifica a AGENTS.md, CONTRIBUTING.md, CHANGELOG.md
- Nessuna modifica a manifest.json, service-worker.js
- Nessuna modifica a export/import .cml o schema .cml
- Nessun deploy, nessun push

## Verdict
**CML_DISCIPLINE_GENERALIZATION_RUNTIME_MICROFIX_READY**