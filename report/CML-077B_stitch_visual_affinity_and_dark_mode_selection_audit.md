# CML-077B: Stitch Visual Affinity and Dark Mode Selection Audit — Report

## Technical Report

### Overview

| Field             | Value                              |
| ----------------- | ---------------------------------- |
| Type              | Docs-only review/selezione         |
| Branch            | `main`                             |
| Base commit       | `0315bbe`                          |
| Runtime modified  | None                               |
| Deploy            | None                               |
| Proposal reviewed | "Terra — Organic Design" by Stitch |

### Proposal Review Summary

| Aspect        | Evaluation                                                                       |
| ------------- | -------------------------------------------------------------------------------- |
| Proposal name | Terra — Organic Design (001)                                                     |
| Generator     | Stitch, based on DESIGN.md                                                       |
| Palette       | Green/cream — too distant from institutional `#1a237e`                           |
| Style         | Organic/decorative — partially compatible, not fully appropriate for school tool |
| Typography    | Remote decorative fonts — excluded                                               |
| Dependencies  | Tailwind CDN, Google Fonts, remote images — all excluded                         |
| Dark mode     | Concept valid — to implement with `prefers-color-scheme`                         |
| Card spacing  | Inspiration useful — more breathing room adoptable                               |

### Design Decisions

| Area        | Decisione                                                       |
| ----------- | --------------------------------------------------------------- |
| Desktop     | Mantenere struttura, migliorare spaziatura card e gap sezioni   |
| Mobile      | 1 colonna confermata, touch target OK, aumentare padding card   |
| Dark mode   | Automatica con `@media (prefers-color-scheme: dark)`, no toggle |
| Palette blu | Confermata `#1a237e` come primario istituzionale                |
| Dipendenze  | Zero — solo CSS locale                                          |

### Selected Option

**C — Light visual affinity + automatic system dark mode**

Rischio medio-basso. CSS variables + `@media`. Nessuna logica JS, nessuna persistenza, nessuna dipendenza esterna.

### Not Changed (verified)

- `index.html` — non modificato
- `_published_snapshot/netlify-current/index.html` — non modificato
- `DESIGN.md` ufficiale — non sostituito
- schema `.cml` — invariato
- export/import docente, dipartimento, referente — invariati
- role-access gating — invariato
- `sw.js`, `_headers`, manifest, icone, PDF — invariati
- Nessuna dipendenza esterna introdotta

### Recommendation for CML-078

1. Convertire CSS principali in variabili CSS (`--color-bg`, `--color-surface`, `--color-text`, ecc.)
2. Aggiungere `@media (prefers-color-scheme: dark)` con override variabili
3. Aumentare padding card da 7px a 8-12px
4. Rafforzare gap tra sezioni
5. Verificare badge e stati in entrambe le modalità
6. Verificare contrasto WCAG AA in dark mode

### Verdict

```
CML_077B_STITCH_VISUAL_AFFINITY_DARK_MODE_NEXT_INCREMENT_SELECTED
```
