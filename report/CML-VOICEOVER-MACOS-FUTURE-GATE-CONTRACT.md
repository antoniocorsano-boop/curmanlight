# CML-VOICEOVER-MACOS-FUTURE-GATE-CONTRACT — Report

## Sintesi esecutiva
Definito un contratto per il test futuro VoiceOver/macOS come gate opzionale, non bloccante per la produzione viste/funzionalità.

- Chiarisce quando e perché eseguire il test VoiceOver;
- Specifica la copertura minima attesa;
- Afferma che la produzione di viste può riprendere immediatamente;
- Stabilisce che il test non modifica automaticamente lo score 88/100;
- Dichiara esplicitamente le invarianti da rispettare in nuove viste.

## Contesto
Dopo la chiusura del ciclo P3 accessibility polish (slice CML-ACCESSIBILITY-P3-POLISH-CLOSURE), la baseline accessibilità è stabile a 88/100 audit-ready interno, con NVDA reale passato e P0/P1/P2 = 0/0/0.

Il VoiceOver/macOS rimane un futuro backlog separato: utile per validazioni cross-platform più forti, ma non indispensabile per procedere.

## Tabelle riassuntive

### Condizioni per attivare il gate
| Condizione | Descrizione |
|------------|-------------|
| Dispositivo macOS/iOS reale | Solo su hardware Apple con VoiceOver attivo |
| Voglia di rinforzo cross-platform | Per affermare compatibilità oltre Windows/NVDA |
| Regressioni segnalate | Se utenti Apple riportano problemi di accessibilità |
| Piano di claim più ambizioso | Se si vuole supportare dichiarazioni di accessibilità più forti |

### Copertura minima attesa (VoiceOver)
| Area | Verifiche minime |
|------|------------------|
| Navigazione iniziale | Lettura ruolo banner, main, contentinfo |
| Overlay iniziale | Focus trap, dismiss, ritorno focus |
| Home/Curriculum | Consultazione, revisione, definitivo |
| Cambio disciplina | Sincronizzazione breadcrumb/aria-live |
| Competenze e progettazione | Accesso pieno a tutte le sezioni |
| Export Center | Generazione report, bozze, .cml |
| Guida | Apertura e lettura documenti |
| Mobile (se iOS) | Bottom bar e menu |
| Card proposte | Label pulsanti icon-only (✓/✗/🔍/✏️/🗑️) |
| Footer/landmark | Informazioni istituto, motteggio |

### Relazione con produzione viste
| Aspetto | Direttiva |
|---------|-----------|
| Ripresa produzione | Consentita immediatamente |
| Requisiti nuove viste | Naming, focus, tastiera, stato corrente |
| Non blocco sviluppo | Non attendere VoiceOver per procedere |
| Regressioni | Da correggere prima di avanzare |

### Impatto sullo score
| Evento | Effetto su score 88/100 |
|--------|--------------------------|
| Test VoiceOver eseguito | Nessun cambiamento automatico |
| Esito READY/READY_WITH_NOTES | Può supportare futura slice di score refresh |
| Esito BLOCKED | Obbligo di fix prima di rilasciare |
| Aggiornamento score | Solo via slice separata e motivata |

## Invarianti rispettate (elenco sintetico)
- Nessuna modifica a:
  - index.html / _published_snapshot/netlify-current/index.html
  - README.md
  - manifest.json, service-worker.js
  - assets/
  - content/curriculum/
  - tools/
  - examples/
  - AGENTS.md, CONTRIBUTING.md, CHANGELOG.md
  - export/import .cml o schema .cml
  - dati curricolari reali
- Nessun deploy
- Nessun push (docs-only)
- Nessuna nuova vista/funzionalità introdotta

## Raccomandazione
Utilizzare questo contratto come riferimento futuro, senza permettere che diventi un blocco ingiustificato alla produzione di nuove viste o funzionalità.

## Verdetto
```text
CML_VOICEOVER_MACOS_FUTURE_GATE_CONTRACT_READY
```