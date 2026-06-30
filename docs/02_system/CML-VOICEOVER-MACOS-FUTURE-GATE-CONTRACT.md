# CML-VOICEOVER-MACOS-FUTURE-GATE-CONTRACT

## Stato gate
- VoiceOver/macOS: futuro, non eseguito;
- non bloccante per baseline accessibilità corrente;
- non bloccante per riprendere produzione viste/funzionalità;
- richiesto solo per dichiarazioni cross-platform più forti.

## Baseline corrente
- score 88/100 audit-ready interno;
- NVDA reale passato;
- P0/P1/P2 = 0/0/0;
- P3.01–P3.10 chiusi;
- no certificazione WCAG;
- no conformità legale completa.

## Quando eseguire VoiceOver
Eseguire solo se:
- disponibile dispositivo macOS/iOS con VoiceOver;
- si vuole rafforzare validazione cross-platform;
- si pianifica incremento score o claim più ampio;
- emergono regressioni segnalate da utenti Apple.

## Criteri minimi futuri
Il test VoiceOver dovrà coprire almeno:
- caricamento iniziale;
- overlay iniziale;
- focus trap / dismiss overlay;
- Home;
- Curriculum;
- cambio disciplina;
- Competenze e progettazione;
- Export Center;
- Guida;
- mobile navigation, se su iOS;
- card proposte;
- footer/landmark.

## Criteri verdict futuri
Definire:
- READY se nessun P0/P1/P2;
- READY_WITH_NOTES se soli P3;
- BLOCKED se emergono P0/P1/P2;
- SCORE_REFRESH_CANDIDATE solo se evidenze complete e coerenti.

## Relazione con produzione viste
Dichiarare esplicitamente:
- la produzione di nuove viste può riprendere;
- ogni nuova vista dovrà rispettare baseline accessibilità attuale;
- eventuali nuove viste devono includere naming, focus, tastiera e stato corrente come requisiti minimi;
- non riaprire il ciclo accessibilità salvo regressioni o nuovo gate Apple.