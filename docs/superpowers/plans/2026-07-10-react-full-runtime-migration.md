# React Full Runtime Migration — Strategic Plan

> Data: 2026-07-10
> Base: CML-442 (merge commit `c7a3b5e`)
> Branch: `codex/cml-443-parity-plan`
> Stato: docs-only, non implementativo

## Principi guida

1. **Migrazione controllata, non riscrittura**: React sostituisce il legacy funzionalità per funzionalità, senza reinventare il prodotto.
2. **Parità prima di miglioramento**: P0 obbligatorio prima del passaggio; P1 differibile con decisione formale; P2 fuori dalla migrazione.
3. **Fonte dati unica**: `content/curriculum/*.normalized.json` resta il canone; i dati React sono generati, non duplicati.
4. **Nessun doppio runtime produttivo**: React non diventa una seconda app usabile fino al passaggio ufficiale.
5. **Rollback preservato**: service worker, cache e dati legacy devono permettere il ritorno senza perdite.

## Architettura della migrazione

```
    ┌─────────────────────┐
    │  content/curriculum │ ← fonte canonica (invariata)
    └────────┬────────────┘
             │ sync (prebuild)
             ▼
    ┌─────────────────────┐
    │  curman-react/       │ ← candidato React
    │  src/data/curriculum │ ← dati generati, non versionati
    └────────┬────────────┘
             │ build
             ▼
    ┌─────────────────────┐
    │  dist/               │ ← artefatto compilato
    └────────┬────────────┘
             │ deploy (sostituisce legacy)
             ▼
    ┌─────────────────────┐
    │  GitHub Pages        │ ← unico punto di pubblicazione
    └─────────────────────┘
```

## Fasi

### Fase 0 — Stabilizzazione (CML-442) ✅ COMPLETATA

- TypeScript contracts
- Libreria utilità curriculum
- Sync dati curricolari
- Lockfile valido
- CI workflow (sola verifica)
- Gap layer absente handling

### Fase 1 — Inventario legacy (CML-444)

- Inventario sistematico del runtime legacy: navigazione, dati, azioni, persistenza, accessibilità, PWA
- Nessuna modifica al runtime
- Matrice verificabile capacità per capacità

### Fase 2 — Colmamento gap P0 (CML-445+)

Ordine suggerito per le slice realizzative:

1. **Persistenza**: Zustand → Dexie/IndexedDB per decisioni, profilo, preferenze
2. **Didattica**: viste Evidenze, Programmazione Annuale, UDA Modello
3. **PWA**: service worker, cache, manifest, offline
4. **Backup/Ripristino**: export/import stato completo
5. **Processo**: transizione fasi (validazione, verifica, approvazione)
6. **Accessibilità**: audit e remediation WCAG AA
7. **Responsive**: test e fix mobile
8. **Error handling**: stati di errore, messaggi, beforeunload

### Fase 3 — Verifica parità

- Test comparativi legacy vs React
- Round-trip `.cml` export/import
- Verifica accessibilità
- Verifica funzionamento offline
- Verifica rollback

### Fase 4 — Passaggio

- Sostituzione `_published_snapshot/netlify-current/index.html` con `dist/`
- Aggiornamento service worker e cache
- Rollout controllato
- Monitoraggio post-passaggio

## Vincoli invarianti

- `pages.yml` resta l'unico flusso di pubblicazione
- `react-ci.yml` resta solo verifica (nessun deploy)
- Dati generati non versionati
- Nessuna modifica a `_published_snapshot/` fino al passaggio
- Nessuna interruzione del servizio legacy durante la migrazione

## Metriche di completamento

| Indicatore | Target |
|------------|--------|
| Capacità P0 React complete | 46/46 |
| Capacità P1 React complete | 17/17 |
| Build Vite | ✅ |
| Lint (oxlint) | 0 errori |
| CI (react-ci) | ✅ |
| Round-trip `.cml` | ✅ |
| Offline funzionante | ✅ |
| Accessibilità WCAG AA | ✅ |
| Rollback verificato | ✅ |

## Rischi

| Rischio | Impatto | Mitigazione |
|---------|---------|-------------|
| Doppio stato concorrente (legacy↔React) | Alto | Migrazione persistenza prima di qualsiasi uso React |
| `.cml` incompatibile tra versioni | Alto | Test round-trip in Fase 3 |
| Service worker serve cache obsoleta | Alto | Nuova strategia versionamento, invalidazione cache legacy |
| React modifica dati prima del passaggio | Medio | Blocco scrittura su canone fino a Fase 4 |
| Perdita funzionalità didattiche | Alto | Inventario puntuale in CML-444 |
