# CML-013D — Controlled Netlify Publication Guided Home

**Data:** 2026-06-21
**Branch:** `cml-008r-fix-markdown-decision-summary`
**HEAD:** `7249d66`

## Riassunto

Pubblicata su Netlify la home guidata (CML-013B) dopo smoke audit positivo (CML-013C).

## Catena

```
CML-013A (contratto redesign) → CML-013B (prototipo) → CML-013C (smoke audit) → CML-013D (deploy)
```

## Verifiche

- Pre-deploy: locale su porta 8089 — tutti gli elementi verificati
- Post-deploy: https://curmanlight.netlify.app — home guidata live
- 1 solo file deployato: `index.html`
- Asset (sw.js, _headers, PDF, icons, manifest) invariati

## Esito

✅ Home guidata pubblicata
✅ Stato + prossima azione + 3 azioni live
✅ Breadcrumb visibile
✅ Menu Azioni funzionante
✅ Nessuna regressione

## Verdetto

```
CML_013D_CONTROLLED_NETLIFY_PUBLICATION_GUIDED_HOME_CLOSED
```
