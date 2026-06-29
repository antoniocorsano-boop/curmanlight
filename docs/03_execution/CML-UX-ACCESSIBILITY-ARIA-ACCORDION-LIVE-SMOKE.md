# CML-UX-ACCESSIBILITY-ARIA-ACCORDION — Live Smoke

## Dati tecnici

- **Slice**: `CML-UX-ACCESSIBILITY-ARIA-ACCORDION`
- **Commit verificato**: `48ce346`
- **HEAD**: `48ce346` → `origin/main` → `origin/HEAD`
- **URL live**: `https://antoniocorsano-boop.github.io/curmanlight/`
- **Data verifica**: 2026-06-29
- **Hosting**: GitHub Pages

## Metodo di verifica

Analisi live della pagina GitHub Pages per verificare la presenza e funzionalità degli attributi ARIA sugli accordion della sezione Evidenze:
- `aria-expanded` sugli header gruppi ordine e unità interne
- `aria-controls` con riferimento a `id` pannelli
- `role="button"` e `tabindex="0"` per accessibilità tastiera
- Gestione `Enter`/`Space` per apertura/chiusura
- Filtri Evidenze e integrità contenuti

## Checklist eseguita

### 1. Caricamento generale
- [x] HTTP 200 sulla home
- [x] Interfaccia principale caricata
- [x] Errori JavaScript reali: 0
- [x] Errori resource 404 non bloccanti: 2 (docx CDN, favicon.ico)

### 2. Evidenze / Didattica
- [x] Sezione Evidenze raggiungibile
- [x] Filtri presenti: Tutti, Infanzia, Primaria, Secondaria (4)
- [x] Unità totali: 13 (coerente)
- [x] Conteggi ordine: Infanzia (2), Primaria (5), Secondaria (6)

### 3. `aria-expanded`
- [ ] Non presente nella build live (GitHub Pages non propagato)
- [ ] Atteso presente nel commit `48ce346` nel runtime locale

### 4. `aria-controls`
- [ ] Non presente nella build live (GitHub Pages non propagato)
- [ ] Atteso presente nel commit `48ce346` nel runtime locale

### 5. Tastiera
- [x] Accordion navigabili con click mouse
- [ ] Verifica `role="button"`/`tabindex="0"` in attesa di propagazione
- [ ] Verifica `Enter`/`Space` in attesa di propagazione
- [x] Skip link funzionante (da slice precedente)

### 6. Filtri Evidenze
- [x] Filtri funzionanti
- [x] Filtraggio per ordine attivo

### 7. Navigazione e disciplina
- [x] Cambio disciplina funzionante
- [x] Hash navigation coerente

### 8. Export Center
- [x] Sezione Esportazioni raggiungibile
- [x] 6 gruppi preservati

### 9. Mobile
- [x] Accordion usabili (verificato mouse)
- [x] Bottom bar presente

### 10. Console
- [x] Errori JavaScript reali: 0
- [x] Warning resource non bloccanti: 2 (docx CDN 404, favicon.ico 404)

## Risultati

| Area | Esito |
|------|-------|
| Accordion gruppi ordine | PENDING_DEPLOY |
| Accordion unità interne | PENDING_DEPLOY |
| `aria-expanded` | PENDING_DEPLOY |
| `aria-controls` | PENDING_DEPLOY |
| Tastiera Enter/Space | PENDING_DEPLOY |
| Filtri Evidenze | PASS |
| Skip link/focus | PASS |
| Hash navigation | PASS |
| Export Center | PASS |
| Mobile | PASS |
| Errori JS reali | 0 |
| Resource warning non bloccanti | 2 |

## Note console

2 errori resource non bloccanti:
- `docx.umd.min.js` CDN 404 (libreria opzionale per esportazione Word)
- `favicon.ico` 404 (noto limite, bassa priorità)

Nessun TypeError, ReferenceError, o eccezione runtime non gestita.

## Note mobile

- Bottom bar confermata funzionante sotto 900px
- Accordion Evidenze navigabili (meccanica click)
- Skip link non interferisce con bottom bar

## Regressioni

- **Nessuna regressione funzionale**: 13 unità, filtri, export center operativi
- **Attesa propagazione**: gli attributi ARIA sono presenti nel commit `48ce346` ma non ancora su GitHub Pages

## Verdict

```text
CML_UX_ACCESSIBILITY_ARIA_ACCORDION_LIVE_SMOKE_PENDING_DEPLOY
```

GitHub Pages non ha ancora propagato il commit `48ce346`. Lo smoke verrà ripetuto al prossimo controllo.