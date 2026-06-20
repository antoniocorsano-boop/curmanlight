# CML-002R — Published Runtime Recovery Resume

## Goal

Map the published runtime folder `_published_snapshot/netlify-current/`, compare it analytically against the CML-001/CML-002 prototypes, and establish the baseline for CML-003R.

## Timeline

- **CML-002A/002B/002C/002D/002BCD**: closed (earlier cycles)
- **CML-002E**: PDF cache hard reset — executed, merged, deployed (master f8cfe76)
- **CML-002R**: recovery mapping — this document

## Files Mapped

| Path | Type | Notes |
|------|------|-------|
| `index.html` | Single-file SPA (~2135 lines) | All inline: CSS, HTML, JS, curriculum data for 14 disciplines |
| `sw.js` | Service worker | cache name `curmanlight-cache-v452b421`, skipWaiting + clients.claim |
| `_headers` | Netlify headers | Cache-Control: no-store for PDFs, sw.js, `/*` |
| `Corso_CurricoloDonMilani_IN2025_arianese_20260620.pdf` | PDF — cache-safe copy | SHA256 DD9E1961... — replaces old PDF via URL change |
| `Corso_CurricoloDonMilani_IN2025_arianese.pdf` | PDF — old copy | Still on disk, no longer linked from user-facing HTML |
| `manifest.webmanifest` | PWA manifest | PWA install supported |
| `motto-non-multa-sed-multum/index.html` | Motto page | External link target |
| `riferimenti_istituzionali_normativa.json` | JSON | Institutional references |
| `docs_distribuzione/` | Directory | Distribution docs |
| `icons/` | Directory | PWA app icons |
| `assets/external/` | Directory | External assets |

## Runtime Architecture (netlify-current/index.html)

- **Data model**: inline JS objects — `ORDINI` (3 levels), `DISCIPLINE_META` (14 disciplines), `DATA` (all traguardi + obiettivi per-item)
- **Views**: 3 tabs — Revisione per disciplina (lavoro), Curricolo definitivo (riepilogo), Riferimenti normativi (normativa)
- **Comparison model**: per-item status (ok/modifica/nuovo), side-by-side panels, approve/reject/edit workflow
- **Persistence**: `localStorage` key `curricoloVerticaleDonMilani.v3.ibrido.localState` — serializes entire DATA, userProfile, UI state
- **Exports**: Word (docx via CDN), Copy for Word (plain text), Markdown, PDF (print view)
- **PWA**: beforeinstallprompt, install guide modal, service worker with cache-first strategy
- **User profile**: nome, cognome, disciplina, ordine — controls editability by school level

## Prototype Comparison

| Feature | Runtime | cml001 | cml002 |
|---------|---------|--------|--------|
| Disciplines | 14 full curriculum | 3 sample | 3 sample |
| Comparison UI | Side-by-side panels | None | None |
| Decision model | approve/reject/edit per item | Revision proposals (metadata only) | Same |
| localStorage | Full DATA + profile | revisions array only | Same |
| Code lineage | Independent | Concept model | Concept model |

**Critical finding**: The runtime is a **functional superset** of both prototypes. They share **zero code lineage**.

## Verdict

The published runtime is more advanced than the prototypes. CML-003R must NOT import prototype code. Prototypes serve only as conceptual reference for orientation clarity, read-only sections, and workflow separation.

## Recommendations for CML-003R

1. Start from published runtime — do not copy prototypes
2. Improve orientation (add guided navigation if needed)
3. Add/expose read-only institutional/general sections (source from cml002's lockedGeneralSections conceptually)
4. Preserve all 14-discipline dataset
5. Preserve comparison workflow
6. Preserve approve/reject/edit logic
7. Preserve progress tracking
8. Preserve PWA, sw.js, _headers, PDF cache-safe links
9. Avoid localStorage key collisions
10. Do NOT modify PDF, index.html, sw.js, _headers, motto page, assets, data, or PWA files in this slice

## Files Changed

- `docs/03_execution/CML-002R.md` (new)
- `report/CML-002R_published_runtime_recovery.md` (new)
