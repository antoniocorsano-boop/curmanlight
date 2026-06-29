# CML UX Ergonomics Score Refresh

## Baseline tecnica

- **Commit precedente**: `9fa751c` (CML-UX-ERGONOMICS-RE-AUDIT)
- **Commit verificato**: `1332720` (HEAD, origin/main)
- **Runtime**: `_published_snapshot/netlify-current/index.html`
- **Interventi applicati dopo baseline**: CML-UX-NAVIGATION-AND-ORIENTATION (commit `f372ceb`)
  - Sidebar Fonti nascosta su desktop (`aside-hidden`)
  - Evidenze raggruppate per ordine con accordion (`ordGroups`)
  - Breadcrumb con disciplina attiva (`discLabel`)

## Punteggio precedente

**72/100** — prima baseline numerica post-deduplicazione Export Center.

## Metodo

Stessa griglia e criteri dell'audit CML-UX-ERGONOMICS-RE-AUDIT. Lettura runtime + simulazione flussi. Docs-only, nessuna modifica runtime.

## Nuova tabella punteggi

| Area                                     | Max     | Pre    | Post   | Delta  |
| ---------------------------------------- | ------- | ------ | ------ | ------ |
| Architettura informativa                 | 15      | 12     | 12     | 0      |
| Flusso per ruolo e compito               | 15      | 11     | 11     | 0      |
| Densità visiva e carico cognitivo        | 15      | 10     | 12     | +2     |
| Navigazione e orientamento               | 10      | 6      | 8      | +2     |
| Export Center e azioni di output         | 10      | 8      | 8      | 0      |
| Mobile/touch ergonomia                   | 10      | 7      | 7      | 0      |
| Accessibilità e leggibilità              | 10      | 6      | 6      | 0      |
| Microcopy e coerenza linguistica         | 10      | 8      | 8      | 0      |
| Prevenzione errori e sicurezza operativa | 5       | 4      | 4      | 0      |
| **Totale**                               | **100** | **72** | **76** | **+4** |

## Delta per area

### Navigazione e orientamento: 6 → 8 (+2)

| Aspetto          | Prima                                                      | Dopo                                             | Variazione |
| ---------------- | ---------------------------------------------------------- | ------------------------------------------------ | ---------- |
| Breadcrumb       | PARZIALE — nascosto, no disciplina                         | OK — discLabel in etichette tab, sempre visibile | +1         |
| Sidebar in Fonti | ERRATO — sidebar discipline presente in normativa/generali | OK — `aside-hidden` toggle su desktop            | +1         |
| Hash navigation  | INCOMPLETO — non sincronizza Revisione/Didattica           | INCOMPLETO — non risolto in questa slice         | 0          |
| Titolo/sezioni   | OK                                                         | OK                                               | 0          |
| Categoria attiva | OK                                                         | OK                                               | 0          |

### Densità visiva e carico cognitivo: 10 → 12 (+2)

| Schermata     | Prima                                      | Dopo                  | Variazione |
| ------------- | ------------------------------------------ | --------------------- | ---------- |
| Home          | 1-2 schermate                              | 1-2 schermate         | 0          |
| Consulta      | 3-5 schermate (contenuto per natura lungo) | 3-5 schermate         | 0          |
| Revisione     | 2-4 schermate                              | 2-4 schermate         | 0          |
| Processo      | 1-2 schermate                              | 1-2 schermate         | 0          |
| Definitivo    | 2-4 schermate                              | 2-4 schermate         | 0          |
| Fonti         | 1-2 schermate                              | 1-2 schermate         | 0          |
| Evidenze      | 3-6 schermate — ALTO                       | 2-4 schermate — MEDIO | +2         |
| UDA           | 2-3 schermate                              | 2-3 schermate         | 0          |
| Export Center | 2-3 schermate                              | 2-3 schermate         | 0          |

### Aree stabili (delta 0)

- **Architettura informativa**: il tech-centrism (`selDisc` default Tecnologia, P2 #5) e l'etichetta "Competenze e progettazione" non sono stati affrontati
- **Flusso per ruolo**: nessuna modifica ai flussi
- **Export Center**: nessuna regressione, 6 gruppi preservati, deduplicazione valida
- **Mobile**: nessuna modifica mobile-specifica
- **Accessibilità**: nessuna modifica ARIA, skip link, contrasto
- **Microcopy**: nessuna modifica terminologica
- **Prevenzione errori**: nessuna modifica ai feedback

## Criticità residue

### Ancora aperti dalla baseline

| #   | Area          | Descrizione                                                             | Gravità |
| --- | ------------- | ----------------------------------------------------------------------- | ------- |
| 4   | Navigazione   | Hash `#cur-{disciplina}` non sincronizza Revisione/Didattica            | P2      |
| 5   | Architettura  | `selDisc` default "Tecnologia" — app percepita come tech-centrica       | P2      |
| 6   | Accessibilità | Nessun skip link, ARIA non sistematico, emoji senza testo alternativo   | P2      |
| 8   | Microcopy     | Etichetta tabbar "Competenze e progettazione" lunga (30 char) su mobile | P2      |
| 9   | Export        | Backup presente in quick-actions Home e in Export Center                | P3      |
| 10  | Microcopy     | Usage-notice ancora 3-4 righe                                           | P3      |
| 11  | Accessibilità | Contrasto badge warning (giallo su bianco)                              | P3      |
| 12  | Mobile        | Abbreviazioni bottom bar non auto-esplicative                           | P3      |

### Nuove dalla navigazione fix

Nessuna nuova criticità introdotta.

## Traiettoria verso 100/100

| Area                       | Attuale | Massimo | Gap    | Sforzo stimato                                               |
| -------------------------- | ------- | ------- | ------ | ------------------------------------------------------------ |
| Architettura informativa   | 12      | 15      | 3      | Medio (ridenominazione tab, default disciplina)              |
| Flusso per ruolo           | 11      | 15      | 4      | Medio-alto (onboarding guidato, prossima azione contestuale) |
| Densità visiva             | 12      | 15      | 3      | Basso (ulteriore compressione Evidenze, Consulta)            |
| Navigazione e orientamento | 8       | 10      | 2      | Basso (hash syncing)                                         |
| Export Center              | 8       | 10      | 2      | Basso (rimuovere duplicazione backup quick-actions)          |
| Mobile/touch               | 7       | 10      | 3      | Medio (scroll Evidenze su mobile, abbreviazioni)             |
| Accessibilità              | 6       | 10      | 4      | Alto (skip link, ARIA sistematico, emoji alt-text)           |
| Microcopy                  | 8       | 10      | 2      | Basso (comprimere notice, abbreviare tablabel)               |
| Prevenzione errori         | 4       | 5       | 1      | Basso (conferma sistematica)                                 |
| **Totale**                 | **76**  | **100** | **24** | **Medio-alto**                                               |

## Priorità prossime slice

1. **Hash navigation syncing** (P2, basso sforzo, +2 punti navigazione)
2. **Accessibilità sistematica** (P2, sforzo medio, +4 punti) — skip link, ARIA, alt-text
3. **Microcopy: tablabel compatta** (P2, basso sforzo, +1 punto)
4. **Default disciplina neutrale** (P2, basso sforzo, +1-2 punti architettura)
5. **Flusso onboarding** (P2, sforzo medio, +2-3 punti flusso)

## Verifiche

- `git diff --check`: OK
- `git status --short --branch`: main, working tree pulito
- Nessun file runtime modificato

## Verdict

Il punteggio sale da 72 a 76 (+4). Le 3 P1 sono risolte. Il nuovo punteggio è affidabile e confrontabile con la baseline.

```
CML_UX_ERGONOMICS_SCORE_REFRESH_READY
```
