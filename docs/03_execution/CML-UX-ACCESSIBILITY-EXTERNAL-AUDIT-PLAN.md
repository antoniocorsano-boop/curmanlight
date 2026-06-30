# CML-UX-ACCESSIBILITY-EXTERNAL-AUDIT-PLAN — Piano di Audit Esterno Accessibilità

## Contesto

CurManLight ha completato due cicli di miglioramento accessibilità:
- Skip link / focus handling
- ARIA accordion
- ARIA live region + annunci dinamici + emoji decorative `aria-hidden`
- Score interno documentato: 64/100 (griglia 8 aree)

Prima di procedere con nuovi fix runtime (es. icon-only labels), serve un piano di audit esterno che definisca criteri, strumenti, soglie e protocollo di test.

## Stato Corrente

| Aspetto | Valore |
|---------|--------|
| Score documentato | 64/100 |
| P0 | 0 |
| P1 | 3 (axe/Lighthouse non eseguiti, screen reader test non eseguito, icon-only labels da affinare) |
| P2 | 3 |
| P3 | 2 |
| Runtime stabile | sì |
| Normalizzati | 14/14 |
| Validator | PASS |
| Shape test | PASS |
| GH Pages | HTTP 200 |

## Aree da Testare

1. Home
2. Curriculum (elenco discipline)
3. Cambio disciplina (select/touch)
4. Competenze e Progettazione (tab)
5. UDA (contenuto dinamico)
6. Evidenze/Valutazione (accordion)
7. Esportazioni (Export Center)
8. Guida
9. Mobile bottom bar
10. Menu mobile (hamburger)
11. Accordion Evidenze (collassabile)
12. Export Center (modale)

## Discipline Minime per Test Multipagina

- Tecnologia
- Italiano
- Matematica
- Storia
- Inglese
- Religione Cattolica

## Viewport Minimi

- Desktop (> 1024px)
- 430 × 932 (iPhone 14 Pro Max)
- 390 × 844 (iPhone 14)
- 360 × 740 (Samsung Galaxy S8/Small Android)

## Strumenti di Audit

| Strumento | Ruolo | Priorità |
|-----------|-------|----------|
| axe DevTools (browser extension) | Critical/serious violation detection | Alta |
| Lighthouse Accessibility (Chrome DevTools) | Punteggio complessivo + best practices | Alta |
| NVDA + Firefox/Chrome | Screen reader smoke test su Windows | Alta |
| VoiceOver + Safari macOS/iOS | Screen reader smoke test su Apple | Media |
| TalkBack + Android | Screen reader smoke test su Android | Bassa |
| Tastiera (Tab, Shift+Tab, Enter, Escape) | Keyboard-only navigation | Alta |

## Protocollo axe

### Pagine da testare con axe

1. Home (stato iniziale, senza disciplina selezionata)
2. Home (con disciplina selezionata)
3. Curriculum (tab Curriculum attivo, prima disciplina)
4. Competenze e Progettazione (tab attivo, disciplina caricata)
5. UDA (tab UDA attivo, disciplina caricata)
6. Evidenze (accordion aperto)
7. Esportazioni (Export Center aperto)
8. Guida

### Stati dinamici da attivare prima dello scan

- Aprire un accordion Evidenze
- Cambiare disciplina via select
- Aprire Export Center (modale)
- Navigare tutti e 4 i tab principali

### Soglie PASS

| Severità | Soglia |
|----------|--------|
| Critical | 0 (tolleranza zero) |
| Serious | 0 non giustificati; giustificazione documentata per ogni deroga |
| Moderate | Documentati, classificati, con nota su impatto utente |
| Minor | Registrati ma non bloccanti |

### Registrazione risultati

Per ogni pagina testata registrare:
- URL/route
- Stato dinamico pre-scan
- Discipline selezionate
- N. violations per severità
- N. violations per impact
- Violazioni specifiche (ID, descrizione, elemento, suggerimento)
- Verdetto (PASS / PASS-CON-NOTE / FAIL)

## Protocollo Lighthouse

### URL da testare

`https://antoniocorsano-boop.github.io/curmanlight/`

### Modalità

- Desktop
- Mobile (emulazione dispositivo)

### Condizioni

- Cache pulita (hard refresh o DevTools -> Disable cache)
- Produzione live (GitHub Pages)
- Nessuna estensione di browser invasiva

### Soglie Punteggio Accessibility

| Soglia | Azione |
|--------|--------|
| ≥ 90 | Obiettivo — audit-ready |
| ≥ 80 | Accettabile temporaneo — si può procedere con altre priorità |
| < 80 | Blocco P1 — fermare miglioramenti fino a remediation |

### Attuale

Non ancora eseguito.

## Protocollo Screen Reader

### Opzioni

| Screen Reader | Browser | Piattaforma | Priorità |
|---------------|---------|-------------|----------|
| NVDA | Firefox | Windows | Alta |
| NVDA | Chrome | Windows | Alta |
| VoiceOver | Safari | macOS | Media |
| VoiceOver | Safari | iOS | Media |
| TalkBack | Chrome | Android | Bassa |

### Percorso Minimo di Test

1. Aprire Home — verificare che il titolo della pagina sia annunciato
2. Attivare skip link — verificare che il focus salti al contenuto principale
3. Cambiare tab (Curriculum → Competenze) — verificare annuncio `aria-live`
4. Cambiare disciplina (Tecnologia → Italiano) — verificare che il cambio sia annunciato
5. Ascoltare annuncio `aria-live` — verificare che non sia duplicato
6. Aprire Curriculum — verificare che la lista discipline sia leggibile
7. Aprire/chiudere accordion Evidenze — verificare stato espanso/collassato annunciato
8. Accedere a Esportazioni — verificare navigabilità del modale
9. Verificare icon-only controls — ogni bottone icona deve avere nome accessibile
10. Verificare emoji decorative — non devono essere annunciate come rumore di fondo

### Criteri PASS

- Orientamento comprensibile all'avvio di ogni vista
- Annunci dinamici non duplicati o fuori contesto
- Tutti i controlli interattivi hanno nome accessibile (label, aria-label, testo)
- Focus non si perde durante navigazione tra tab o modali
- Contenuto dinamico (cambio disciplina, apertura accordion) viene annunciato
- Emoji decorative non producono rumore eccessivo

## Protocollo Keyboard-Only

### Percorso

1. Navigare Home con Tab — skip link visibile al focus
2. Tab principale — i 4 tab sono raggiungibili con Tab
3. Select disciplina — raggiungibile e attivabile con Enter/Space
4. Pulsanti icon-only — devono essere raggiungibili e attivabili
5. Accordion — aprire/chiudere con Enter/Space
6. Export Center — aprire, navigare, chiudere con Escape
7. Focus trap — nessun focus intrappolato fuori da modali

### Criteri PASS

- Skip link visibile al focus (non solo programmaticamente)
- Ordine di tablogico corrisponde all'ordine visivo
- Nessun focus fantasma (elemento invisibile che cattura il focus)
- Escape chiude modali e riporta il focus al trigger

## Protocollo Mobile

### Percorso

1. Home su viewport 390×844 — layout si adatta
2. Bottom bar mobile — tutti e 4 i tab sono raggiungibili
3. Menu hamburger (se presente) — si apre/chiude
4. Select disciplina — touch friendly (altezza ≥ 44px)
5. Accordion — touch target adeguato
6. Pinza/zoom — layout non si rompe

### Criteri PASS

- Touch target ≥ 44×44 CSS px
- Scroll non bloccato
- Nessun overflow orizzontale non voluto
- Testi leggibili senza zoom (contrasto ≥ 4.5:1 per testo normale)

## Protocollo Icon-Only Labels

Decisione documentata per la futura runtime slice `CML-UX-ACCESSIBILITY-ICON-ONLY-LABELS`.

### Obiettivo Futuro

Sostituire progressivamente `title` con `aria-label` sugli icon-only controls presenti nell'HTML e nei template JS.

### Vincoli

- Non cambiare layout
- Non cambiare comportamento
- Preservare validatore/shape (14/14)
- Testare tastiera dopo ogni modifica

### Classificazione Consigliata

| Classificazione | Condizione |
|----------------|------------|
| P1 | Se alcuni controlli icon-only dipendono solo da `title` senza nome accessibile alternativo |
| P2 | Se tutti hanno già nome accessibile ma si vuole robustezza da audit (`aria-label` > `title`) |
| P3 | Se resta solo polish semantico (es. `title` ok, `aria-label` già presente) |

### Relazione con Questo Piano

`ICON-ONLY-LABELS` sarà la prima runtime slice successiva all'approvazione di questo piano di audit.

## Score Policy

Regole per futuri aggiornamenti dello score accessibilità:

1. **Non aumentare lo score sopra 70/100** senza almeno un audit automatico documentato (axe o Lighthouse).
2. **Non aumentare sopra 80/100** senza axe/Lighthouse PASS documentato (0 critical, 0 serious non giustificati).
3. **Non aumentare sopra 85/100** senza screen reader smoke test documentato (NVDA + percorso minimo).
4. **Non usare mai "certificato"** senza certificazione reale (es. Accessibility conformance report).
5. Usare solo le seguenti etichette:
   - "audit-ready interno" — audit automatico superato
   - "certification-readiness" — audit manuale screen reader superato
   - "pronto per verifica esterna" — tutto documentato, soglie superate

## Cosa Non È Stato Modificato

Nessun file runtime è stato toccato:

- `_published_snapshot/netlify-current/index.html` — invariato
- `content/curriculum/` — invariato
- `tools/` — invariato
- `.cml` schema — invariato
- Service worker / manifest / asset — invariati
- Layout CSS — invariato

## Prossime Slice

1. `CML-UX-ACCESSIBILITY-EXTERNAL-AUDIT-PLAN` — questa slice (docs-only)
2. `CML-UX-ACCESSIBILITY-ICON-ONLY-LABELS` — runtime increment con criteri già fissati

## Verdict

`CML_UX_ACCESSIBILITY_EXTERNAL_AUDIT_PLAN_READY`

Piano documentato. Score policy definita. Runtime intatto. Commit locale creato. Nessun push.
