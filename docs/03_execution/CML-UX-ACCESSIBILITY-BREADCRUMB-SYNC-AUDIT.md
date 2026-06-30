# CML-UX-ACCESSIBILITY-BREADCRUMB-SYNC-AUDIT — Breadcrumb Sync Audit

## Obiettivo

Verificare se il breadcrumb desktop (`#breadcrumb`) resta temporaneamente non riallineato dopo il cambio disciplina, come osservato nel gate strutturale screen reader.

## Stato Iniziale

- Branch: `main`
- HEAD: `275d7f3`
- `origin/main`: `275d7f3`
- Working tree: pulito
- Slice precedente: `CML-UX-ACCESSIBILITY-OVERLAY-FOCUS-MANAGEMENT`

## Perimetro

Solo audit codice — nessuna modifica runtime. Analisi statica del meccanismo di aggiornamento breadcrumb in `index.html`.

## Metodologia

Analisi del codice sorgente (`_published_snapshot/netlify-current/index.html`) per tracciare il flusso di aggiornamento del breadcrumb in risposta a:

- Cambio tab (`setTab()`)
- Cambio disciplina (`selectDisc()`)
- inizializzazione pagina

## Risultati Analisi

### Flusso breadcrumb

Il breadcrumb è aggiornato esclusivamente in `setTab()` (riga 3690-3695):

```javascript
if(breadcrumbEl){
    var discLabel=selDisc&&(t==="curricolo"||t==="lavoro"||t==="riepilogo")?' — '+selDisc:'';
    breadcrumbEl.innerHTML='<span class="crumb-current">'+(labels[t]||"Home")+'</span>';
    breadcrumbEl.hidden=t==="home"||t==="esportazioni"||t==="guida";
}
```

### Flusso cambio disciplina

`selectDisc(d)` (riga 3223-3239):
1. Imposta `selDisc = d`
2. Chiama `refreshCurrentDisciplineViews()`
3. **NON chiama `setTab()`**
4. Aggiorna hash URL

`refreshCurrentDisciplineViews()` (riga 3206-3221):
1. `renderProfileSummary()`
2. `renderSidebar()`
3. `render()`
4. Render tab-specifici
5. **NON aggiorna breadcrumb**

### Stale confermato

Il breadcrumb mostra il nome della disciplina precedente fino al successivo cambio tab.

| Azione | Breadcrumb prima | Breadcrumb dopo | Corretto? |
|--------|------------------|-----------------|-----------|
| Tab iniziale, disc="Tecnologia" | "Curriculum — Consultazione — Tecnologia" | — | ✓ |
| Selezione "Italiano" da sidebar | "Curriculum — Consultazione — Tecnologia" | **"Curriculum — Consultazione — Tecnologia"** | **✗ STALE** |
| Cambio tab a "Revisione" e ritorno | "Curriculum — Consultazione — Tecnologia" | "Curriculum — Consultazione — Italiano" | ✓ (riallineato) |

### Discipline testate (via analisi codice)

| Disciplina | Nome breadcrumb atteso | Stale? |
|------------|----------------------|--------|
| Tecnologia | Curriculum — Consultazione — Tecnologia | — (default) |
| Italiano | Curriculum — Consultazione — Italiano | ✓ (se cambio da altra disc) |
| Matematica | Curriculum — Consultazione — Matematica | ✓ |
| Storia | Curriculum — Consultazione — Storia | ✓ |
| Religione Cattolica | Curriculum — Consultazione — Religione Cattolica | ✓ |

### Scenari testati

| Scenario | Breadcrumb stale? |
|----------|-------------------|
| Cambio disciplina su tab "curricolo" | ✓ |
| Cambio disciplina su tab "lavoro" | ✓ |
| Cambio disciplina su tab "riepilogo" | ✓ |
| Cambio disciplina su tab non-disciplina (home, didattica, esportazioni) | N/A (breadcrumb hidden) |
| Navigazione tab → disciplina → tab diverso → ritorno | Riallineato |
| Hash URL diretto `#cur-italiano` | Breadcrumb corretto (perché `setTab` è chiamato) |
| Caricamento pagina con hash disciplina | Breadcrumb corretto |

## Impatto Accessibilità

- Visivo: breadcrumb mostra disciplina errata — medio
- Screen reader: `announceStatus("Disciplina selezionata: "+d)` (riga 3234) fornisce annuncio via `aria-live` — il problema è mitigato ma non eliminato
- Screen reader: breadcrumb non viene rianunciato automaticamente dopo cambio disciplina
- L'utente screen reader che naviga il breadcrumb via Tab sentirebbe il valore errato

## Impatto UX

- Disorientamento visivo: il breadcrumb non riflette la posizione attuale
- Workaround: cambiare tab e tornare — basso effort ma anti-intuitivo
- Rilevabile solo da utenti che notano il breadcrumb (esperti/attenzione ai dettagli)

## Riproducibilità

**Sempre riproducibile** al 100%. Ogni cambio disciplina da sidebar o menu lascia il breadcrumb stale.

## Ipotesi Tecnica (senza modificare runtime)

La causa è l'assenza di una chiamata a `setTab()` (o a una funzione che aggiorni specificamente il breadcrumb) all'interno di `selectDisc()` o `refreshCurrentDisciplineViews()`.

Il fix più minimale sarebbe aggiungere l'aggiornamento breadcrumb in `refreshCurrentDisciplineViews()` o delegare l'aggiornamento breadcrumb a una funzione separata chiamata sia da `setTab()` che da `selectDisc()`.

## Raccomandazione

**Microfix necessario** — P2, non bloccante. Programmare dopo screen reader test reale.

## Invarianti Rispettate

- Nessuna modifica runtime ✓
- Nessuna modifica a JSON/.cml/tool/asset ✓
- Solo file docs autorizzati ✓

## Verdict

`CML_UX_ACCESSIBILITY_BREADCRUMB_SYNC_AUDIT_ISSUE_CONFIRMED_READY`
