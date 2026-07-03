# CML-286 - Guide and Quick Guide Alignment

## Attivita svolta

- Verificata coerenza terminologica tra interfaccia, Guida tab e Guida rapida (welcome overlay).
- Correzione accenti mancanti in `showWelcome()` nei due runtime.
- Integrata tabella "Sezioni principali" in `CML_GUIDA_RAPIDA_UTENTE.md` con righe Esportazioni e Guida.
- Allineato `PROJECT-STATE.md` allo stato CML-285P.
- Aggiornati stati UX-004 e UX-019 nel backlog.
- Spuntata checklist UX-STANDARDS per guida allineata.

## File modificati

- index.html
- _published_snapshot/netlify-current/index.html
- docs/02_system/PROJECT-STATE.md
- docs/02_system/PRODUCT-USABILITY-BACKLOG.md
- docs/02_system/UX-STANDARDS.md
- docs/04_user/CML_GUIDA_RAPIDA_UTENTE.md
- docs/03_execution/CML-286.md
- report/CML-286_guide_and_quick_guide_alignment.md
- docs/REPO-MOVELOG.md

## Correzione accenti

- "applicabilita" -> "applicabilità" (in showWelcome)
- "attivita" -> "attività" (in showWelcome)

## Tabella sezioni aggiornata (CML_GUIDA_RAPIDA_UTENTE.md)

Aggiunte:
- **Esportazioni** — Scarica documenti finali, confronti modifiche, bozze, file `.cml` e copie di sicurezza
- **Guida** — Istruzioni su ruoli, sezioni, installazione e limiti dello strumento

## Stato roadmap

- PM-04: in corso 55% (coerente)
- UX-003: RISOLTO (coerente)
- UX-006: RISOLTO (coerente)
- UX-001: PARZIALMENTE RISOLTO (coerente)
- UX-009: PARZIALMENTE RISOLTO (coerente)

## Note

- I contenuti del tab Guida (tab-guida) erano gia coerenti con l'interfaccia corrente: nessuna modifica necessaria.
- La Guida simulazione esempi (`CML_GUIDA_SIMULAZIONE_ESEMPI.md`) era gia allineata.
- La rifattorizzazione completa della Guida rapida (contenuti estesi -> compatti) rimandata a CML-301.
