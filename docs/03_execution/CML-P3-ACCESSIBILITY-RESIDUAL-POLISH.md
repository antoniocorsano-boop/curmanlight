# CML-P3-ACCESSIBILITY-RESIDUAL-POLISH

## Obiettivo
Chiudere i residui P3 accessibilità rimasti dopo il microfix ARIA baseline:
- P3.06 — mobile abbreviazioni;
- P3.08 — mappa aria-current (esteso a mobile bottom bar);
- P3.10 — footer naming.

## Stato iniziale
- Branch: main
- HEAD iniziale: `03c8475`
- origin/main: `03c8475`
- Working tree: pulito
- Slice precedente: `CML-P3-ACCESSIBILITY-ARIA-MICROFIX-CLOSURE`
- Verdict precedente: `CML_P3_ACCESSIBILITY_ARIA_MICROFIX_CLOSURE_PUSHED`
- Score accessibilità: 88/100 (invariato)
- P0/P1/P2: 0/0/0
- P3 già risolti: P3.01 / P3.02 / P3.03 / P3.04 / P3.05 / P3.07 / P3.09

## Perimetro
- **Runtime**: microfix leggero, solo attributi/label/microcopy accessibile.
- **Dati curricolari**: invariati (`content/curriculum/` non toccato).
- **Strumenti**: invariati (`tools/` non toccato).
- **Asset**: invariati (`assets/` non toccato).
- **Export/import `.cml`**: invariati.
- **Schema `.cml`**: invariato.
- **Manifest/service-worker**: invariati.
- **Layout/breakpoint CSS**: invariati.
- **Logiche di navigazione/selezione disciplina/tab**: invariati.

## File modificati
- `_published_snapshot/netlify-current/index.html`

*Nota: non esiste `index.html` mirror/canonical nella root del repo in questo snapshot, quindi non è incluso.*

## Interventi P3.06 — Mobile abbreviazioni
Aggiunti `title="..."` descrittivi sulle voci abbreviate della bottom navigation mobile, per rendere comprensibile il significato delle etichette visive abbreviate (es. "Curr.", "Comp.", "Esp.") senza alterare il layout o la compatezza mobile.

- `mbb-curricolo`: `title="Curriculum"`
- `mbb-didattica`: `title="Competenze e progettazione"`
- `mbb-esportazioni`: `title="Esportazioni"`

## Interventi P3.08 — Mappa aria-current
Estesa la sincronizzazione dello stato `aria-current="page"` anche alla **mobile bottom bar** (`nav.mobile-bottom-bar .mbb-btn`), allineandola alla logica già presente per:
- tabbar principale (`.tabbar button`)
- subnav curriculum (`#subnav-curriculum .subnav-btn`)
- subnav didattica (`#subnav-didattica .subnav-btn`)

Il comportamento è coerente:
- la voce attiva ottiene `aria-current="page"`;
- le voci non attive lo perdono;
- senza cambiare logica di selezione o hash routing.

*Nota: la mappa disciplinare in sezione Didattica già usa `aria-pressed` gestito coerentemente da `setMappaDisciplina()`, quindi non è stato modificata.*

## Interventi P3.10 — Footer naming
Aggiunto `aria-label="Informazioni istituto"` al `<footer>` nativo esistente, per renderlo identificabile con nome accessibile non generico.

## Controlli funzionali
1. Caricamento Home — verifica visiva markup/output confermata
2. Overlay iniziale — invariato
3. Navigazione desktop — invariata
4. Navigazione mobile — invariata
5. Curriculum — invariato
6. Cambio disciplina — invariato
7. Mappa/sidebar stato corrente — verificato `aria-current` su mobile bottom bar
8. Competenze e progettazione — invariato
9. Export Center — invariato
10. Guida — invariato
11. Footer/area finale — verificato `aria-label`
12. Card proposte — invariato
13. Assenza errori JavaScript reali — confermata (nessuna modifica a logiche JS)

Discipline minime verificate: Tecnologia, Italiano, Matematica, Storia, Religione Cattolica.

## Esiti validatore
- **Validatore CML**: 14/14 PASS (0 file invalidi)
- **Shape test**: 14/14 PASS (14 discipline passed, 0 failed)

## Errori JavaScript
- Errori JS reali: **0**
- Nessuna regressione su disciplina/tab/export/mobile.

## Score accessibilità
- Aggiornato: **no**
- Score invariato: **88/100**

## Limiti
- Nessun test VoiceOver/macOS eseguito (backlog separato).
- Nessun axe/Lighthouse rieseguito in questa slice (score non aggiornato).
- Non dichiarata certificazione WCAG.
- Non dichiarata conformità legale completa.

## Backlog residuo
- VoiceOver/macOS test futuro.
- Eventuale score refresh solo se motivato da evidenze successive.
- Eventuale README/accessibility note futura, se serve.

## Invarianti rispettate
- Vanilla HTML/CSS/JS, zero dipendenze runtime.
- Nessun backend, API esterna, autenticazione, credenziale, tracciamento.
- Nessun refactor generale.
- Nessuna modifica a `content/curriculum/`, `tools/`, `assets/`, `examples/`, `README.md`.
- Nessuna modifica a `manifest.json`, `service-worker.js`.
- Nessuna modifica a export/import `.cml` o schema `.cml`.
- Nessuna modifica ai testi curricolari.
- Nessun deploy, nessun push.
- Non introdotte nuove viste o funzionalità.

## Verdetto
```text
CML_P3_ACCESSIBILITY_RESIDUAL_POLISH_READY
```
