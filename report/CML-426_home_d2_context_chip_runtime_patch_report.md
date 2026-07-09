# Report CML-426 — Home D2 Context Chip Runtime Patch

## Stato

PATCH APPLICATA — NON COMMITTATA — NON PUSHATA

## Files modificati

- `index.html` (4 modifiche)
- `_published_snapshot/netlify-current/index.html` (4 modifiche identiche)

## Summary modifiche

| # | Area | Prima | Dopo |
|---|---|---|---|
| 1 | CSS | — | `.home-context-chip` aggiunto |
| 2 | Home title | "Hub del processo curricolare" | "Cosa vuoi fare oggi?" |
| 3 | Home chip | — | `<div id="home-context-chip">` popolato da `getWorkContextChip()` |
| 4 | Bottone #2 | "Vai a Progetta" | "Prepara una progettazione" |
| 5 | Bottone #3 | "Esportazioni" | "Esporta un documento" |
| 6 | Bottone #4 | "Guida" | "Verifica fonti e limiti" |
| 7 | Validazione umana | "Lo strumento non approva autonomamente." | "La validazione resta umana. L'app prepara materiali di lavoro, non approva il curricolo." |
| 8 | JS | — | `updateHomeDisciplinePanel()` aggiorna `home-context-chip` con `getWorkContextChip()` |

## Output atteso in Home

```
Ambiente curricolare d'istituto
Tecnologia · Scuola Secondaria di I grado · A.S. 2026/27

Cosa vuoi fare oggi?

[Consulta il curricolo] [Prepara una progettazione] [Esporta un documento] [Verifica fonti e limiti]

La validazione resta umana. L'app prepara materiali di lavoro, non approva il curricolo.
```

## Validazione

- Curriculum validator: 14/14 PASS
- Runtime shape test: 14/14 PASS
- `git diff --check`: ok
- Runtime pair: allineato

## Verdetto

CML-426_HOME_D2_CONTEXT_CHIP_RUNTIME_PATCH_READY_LOCAL_NOT_PUSHED
