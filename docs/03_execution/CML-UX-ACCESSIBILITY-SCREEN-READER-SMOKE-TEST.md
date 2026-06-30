# CML-UX-ACCESSIBILITY-SCREEN-READER-SMOKE-TEST

## Obiettivo

Eseguire il gate accessibilita screen reader / navigazione assistiva dopo la remediation automatica dei contrasti e dei landmark, senza modificare il runtime.

Questa slice e' audit/report only: non introduce fix, non aggiorna score, non esegue deploy e non esegue push.

## Stato iniziale

| Aspetto | Valore |
|---------|--------|
| Branch | `main` |
| HEAD iniziale | `27836d1` |
| Stato remoto | `main` allineato a `origin/main` |
| Slice precedente | `CML_UX_ACCESSIBILITY_REGION_LANDMARKS_REMEDIATION_READY` |
| Runtime landmark remediation | gia remoto |
| P0/P1/P2/P3 automatici dichiarati | 0 / 0 / 0 / 0 |
| Gate corrente | `CML-UX-ACCESSIBILITY-SCREEN-READER-SMOKE-TEST` |

## Perimetro

Invarianti rispettate:

- nessuna modifica runtime;
- nessuna modifica a `index.html`;
- nessuna modifica a `_published_snapshot/netlify-current/index.html`;
- nessuna modifica a manifest, service worker, asset, `content/curriculum/`, `tools/`;
- nessuna modifica a export/import `.cml` o schema `.cml`;
- nessun deploy;
- nessun push;
- nessun aggiornamento score accessibilita.

## File untracked preesistenti

Prima dell'esecuzione erano presenti due file non tracciati:

- `docs/03_execution/CML-UX-ACCESSIBILITY-SCREEN-READER-SMOKE-TEST.md`
- `report/CML-UX-ACCESSIBILITY-SCREEN-READER-SMOKE-TEST.md`

Entrambi sono stati letti integralmente. Erano template/protocolli non eseguiti, con checkbox vuote e verdict da compilare. Sono stati conservati come destinazione della slice e riscritti con evidenza effettiva del gate strutturale.

## Ambiente di test

| Parametro | Valore |
|-----------|--------|
| Data | 2026-06-30 |
| URL testato | `http://127.0.0.1:8125/_published_snapshot/netlify-current/index.html` |
| Runtime di riferimento | stesso HTML pubblicato in snapshot locale, HEAD `27836d1` |
| Browser | Chrome 149 headless via Chrome DevTools Protocol |
| Viewport desktop | 1365x900 |
| Viewport mobile | 390x844 |
| Screen reader reale | non disponibile |
| NVDA | non installato / non rilevato |
| VoiceOver | non applicabile su Windows |
| Tipo test | smoke strutturale assistivo + accessibility tree CDP |

## Metodologia

Poiche NVDA/VoiceOver non erano disponibili, il test non dichiara evidenza screen reader reale. E' stato eseguito uno smoke strutturale assistivo con:

- accessibility tree via `Accessibility.getFullAXTree`;
- verifica landmark principali;
- verifica `welcome-overlay` con `role="region"` e `aria-label="Benvenuto"`;
- navigazione tastiera con `Tab`;
- attivazione overlay iniziale;
- cambio tab;
- cambio disciplina;
- verifica `aria-live` status gia presente;
- verifica Export Center;
- verifica menu mobile;
- raccolta errori JavaScript reali.

## Percorsi testati

| Percorso | Esito | Evidenza |
|----------|-------|----------|
| Caricamento Home | PASS | titolo pagina presente, contenuto non vuoto, `main` visibile |
| Overlay iniziale | PASS con nota | AX tree espone `region:Benvenuto`, bottoni `Configura dati` e `Inizia subito` |
| Chiusura overlay | PASS con nota | `Inizia subito` rimuove overlay; focus non viene spostato esplicitamente |
| Navigazione tastiera | PASS con nota | Tab raggiunge skip link, header, tabbar e discipline; overlay non blocca focus verso pagina sottostante |
| Curriculum | PASS | tab Curriculum attiva, breadcrumb consultazione visibile |
| Cambio disciplina | PASS con nota | `a11y-status` annuncia `Disciplina selezionata: Matematica`; breadcrumb desktop resta temporaneamente su Italiano fino a cambio tab |
| Competenze e progettazione | PASS | tab attiva, contenuto Competenze visibile |
| Export Center | PASS | Export visibile, 18 pulsanti export rilevati nel DOM |
| Guida | PASS | tab Guida visibile |
| Mobile bottom bar | PASS | AX tree espone `navigation:Navigazione mobile`; Home/Curr./Comp./Esp./Menu presenti |
| Mobile menu | PASS | menu apre le voci Consulta/Revisione/Processo/Definitivo/Fonti/UDA/Guida/Esportazioni/Impostazioni |

## Tabella esiti

| Area | Esito | Note |
|------|-------|------|
| Landmark principali | PASS | AX tree: `banner`, `main`, `contentinfo`, mobile `navigation:Navigazione mobile` |
| Landmark welcome | PASS | `region:Benvenuto` rilevata |
| Tastiera | PASS con nota | focus order raggiunge controlli principali; overlay non ha focus trap |
| Overlay iniziale | PASS con nota | annunciabile come region; manca gestione focus esplicita post-dismiss |
| Cambio tab | PASS | tab principali cambiano stato e contenuto |
| Cambio disciplina | PASS con nota | annuncio live presente; breadcrumb desktop ha ritardo/stato stale nel percorso testato |
| Export Center | PASS | pulsanti export rilevati e nominati |
| Errori JavaScript reali | PASS | 0 eccezioni runtime; solo 404 statici non bloccanti |

## Problemi rilevati

| ID | Priorita | Area | Descrizione | Impatto |
|----|----------|------|-------------|---------|
| SR-W1 | WARNING | Overlay iniziale | Durante il test tastiera, con overlay ancora presente, il focus puo raggiungere controlli della pagina sottostante prima dei bottoni overlay. | Possibile confusione per utenti screen reader/tastiera; richiede test reale prima di stimare impatto. |
| SR-W2 | WARNING | Focus post-overlay | Dopo `Inizia subito`, il focus non viene spostato esplicitamente su `main` o su un punto stabile. | Navigazione comunque possibile; migliorabile con focus management dedicato. |
| SR-W3 | WARNING | Breadcrumb cambio disciplina | Nel percorso desktop Curriculum -> Matematica, il live status annuncia Matematica ma il breadcrumb resta temporaneamente `Curriculum — Consultazione — Italiano` fino al cambio tab. | Incoerenza testuale non bloccante, da valutare in futura remediation runtime. |

## Limiti del test

- Nessun test reale con NVDA o VoiceOver: non e' possibile dichiarare superato il gate >85 basandosi solo su questa evidenza.
- Il test CDP valida struttura, focus, DOM e accessibility tree, non la qualita della pronuncia o l'esperienza reale dello screen reader.
- Non e' stato aggiornato lo score accessibilita.

## Impatto sullo score

Score non aggiornato. La baseline resta **76/100** finche non sara disponibile evidenza reale con NVDA/VoiceOver o una sessione assistiva manuale documentata.

## Invarianti rispettate

- Runtime modificato: no.
- File runtime modificati: nessuno.
- Solo documentazione di slice e movelog.
- Push: no.

## Verdict

`CML_UX_ACCESSIBILITY_SCREEN_READER_SMOKE_TEST_READY_WITH_NOTES`
