# Repo Movelog

## 2026-06-21 — CML-008R-FIX closure

- **9179418** — fix: align tecnologia markdown decision summary
  - "Da decidere" → "Voci da validare"
  - Aggiunta sezione "Voci mantenute da validare" (4 voci)
  - Rinominata sezione "Dettaglio delle proposte di modifica / Gap 2025"
  - Nota esplicativa post-sintesi e nota metodologica aggiornate
  - Rimosso doppio separatore pre-footer
- Audit di chiusura superato: `CML_008R_FIX_CLOSURE_AUDIT_READY_FOR_CONTROLLED_PUBLICATION`
- **8c92fea** — docs: close CML-008R markdown decision summary fix audit
- **Controlled Netlify publication:** `https://curmanlight.netlify.app`
  - Comando: `npx netlify deploy --prod --dir _published_snapshot/netlify-current`
  - 1 file deployato, 4s
  - Verifica post-deploy passata
  - Verdetto: `CML_008R_CONTROLLED_NETLIFY_PUBLICATION_CLOSED`

## 2026-06-20 — CML-008R pubblicato

- **dc179ce** — feat: add tecnologia markdown export readiness
  - Export Markdown per disciplina Tecnologia con pannello UI dedicato
  - Confronto IN2012→IN2025, gap markers, dettaglio proposte
  - Verifica locale e produzione passate

- **CML-009A** - User view lightening design audit (solo analisi, nessun codice)
  - Problema: ~1300 parole prima del contenuto disciplinare, nessuna gerarchia
  - Proposta: architettura a 3 livelli (cruscotto, schede, dettaglio espandibile)
  - Nessuna modifica funzionale, nessun deploy
  - Verdetto: `CML_009A_USER_VIEW_LIGHTENING_DESIGN_AUDIT_READY`

## 2026-06-21 — CML-009B top area lightening

- **09b325c** → HEAD (da confermare con commit effettivo)
- Unico file modificato: `_published_snapshot/netlify-current/index.html` (+75/−43 righe)
- Sostituito quick-info-bar + orientation-card con cruscotto minimo:
  - Stato: revisione avviata
  - Prossima azione: controlla le 12 voci da validare
  - 3 pulsanti: Controlla voci, Apri documento, Esporta
  - Barra compatta: 💾 salvataggio + progresso + ⚙️ Azioni
- Compattata toolbar: 2 filtri primari + toggle Altri filtri; Export collassato
- Collassato usage-notice in `<details>`
- Comprimati pulsanti local-save-bar
- Nascosto install-hint di default
- Integrato progress-bar nel cruscotto (rimosso progress-wrap separato)
- Asset invariati: sw.js, _headers, PDF (hash verificati)
- Test locale passato (localhost:5000, 200 OK)
- Verdetto: `CML_009B_USER_VIEW_TOP_AREA_LIGHTENING_READY`
