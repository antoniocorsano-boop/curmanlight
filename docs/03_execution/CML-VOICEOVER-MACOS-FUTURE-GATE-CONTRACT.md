# CML-VOICEOVER-MACOS-FUTURE-GATE-CONTRACT

## Obiettivo
Definire un contratto per il test futuro VoiceOver/macOS come gate opzionale, non bloccante per il prosieguo della produzione viste/funzionalità.

Questo documento non implementa alcun test; stabilisce solo:
- quando è ragionevole eseguirlo;
- cosa dovrebbe coprire;
- come si relaziona con la produzione viste;
- quale impatto ha sullo score accessibilità.

## Stato iniziale
- Branch: main
- HEAD: b206f93 (post-chiusura ciclo P3 accessibility polish)
- Score accessibilità: 88/100 audit-ready interno
- Runtime: stabile, ultima modifica solo attributi/label/microcopy
- VoiceOver/macOS: non eseguito, backlog separato

## Perimetro
- Nessuna modifica runtime;
- Nessuna modifica a dati, export/import, schema .cml, assets, manifest, service-worker;
- Solo documentazione e contratto futuro.

## Quando attivare il gate
- solo su dispositivo macOS/iOS reale con VoiceOver;
- se si desidera rafforzare la validazione cross-platform;
- se emergono regressioni segnalate da utenti Apple;
- prima di alzare claim di accessibilità oltre “audit-ready interno”.

## Copertura minima attesa
Il test VoiceOver dovrebbe verificare, almeno:
1. Navigazione iniziale e lettura ruolo banner, main, contentinfo.
2. Gestione focus nell’overlay iniziale (trap, dismiss, ritorno focus).
3. Home, Curriculum (consultazione/revisione/definitivo).
4. Cambio disciplina e sincronizzazione breadcrumb/aria-live.
5. Competenze e progettazione.
6. Export Center e generazione report.
7. Guida documenti.
8. Mobile bottom bar (se testato su iOS).
9. Card proposte (label pulsanti icon-only).
10. Footer e landmark informativi.

## Relazione con la produzione viste
Dichiarare esplicitamente che:
- la produzione di nuove viste può riprendere immediatamente;
- ogni nuova vista deve ereditare e non degradare la baseline accessibilità attuale;
- per ogni nuova vista, i requisiti minimi sono:
  - labeling accessibile (aria-label, titolo, testo visibile coerente);
  - gestione focus corretta su ingresso/uscita;
  - stato corrente comunicato (aria-current, aria-selected, aria-pressed);
  - interazione tastiera completa (Tab, Enter, Space, Esc);
  - stato ARIA coerente per controlli dinamici.
- Non è richiesto di rallentare lo sviluppo per attendere il test VoiceOut;
- Eventuali regressioni introdotte da nuove viste dovranno essere corrette prima di procedere.

## Impatto sullo score
- Il risultato del test VoiceOver NON modifica lo score 88/100 salvo esplicito decisione di aggiornare;
- Eventuale score refresh sarebbe una slice separata, motivata da evidenze complete;
- Il verdetto del test VoiceOver può essere:
  - READY: nessun P0/P1/P2;
  - READY_WITH_NOTES: soli P3;
  - BLOCKED: presenza di P0/P1/P2.
- Un esito READY o READY_WITH_NOTES può supportare una successiva slice di score refresh.

## Invarianti rispettate
- Nessuna modifica a index.html, manifest.json, service-worker.js;
- Nessuna modifica a content/curriculum/, tools/, assets/, examples/;
- Nessuna modifica a export/import .cml o schema .cml;
- Nessuna modifica ai dati curricolari reali;
- Nessun deploy;
- Nessun push (questa slice è docs-only);
- Non introdotte nuove viste o funzionalità.

## Raccomandazione
Tenere questo contratto come riferimento per un eventuale futuro test VoiceOver/macOS, senza bloccarlo come prerequisito per riprendere la produzione viste.

## Verdetto
```text
CML_VOICEOVER_MACOS_FUTURE_GATE_CONTRACT_READY
```