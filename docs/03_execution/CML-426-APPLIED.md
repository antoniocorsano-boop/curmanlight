# CML-426 — Apply Home D2 Context Chip Runtime Patch (Applied)

- Macroprogramma: PM-03 Orientamento / PM-05 Esperienza di lavoro / PM-06 Accompagnamento / PM-07 Uniformità
- Dipende da: CML-425, CML-424, CML-421G
- Tipo slice: runtime microfix
- Runtime: modificato (index.html, _published_snapshot/netlify-current/index.html)
- Main: non ancora pushato

## Obiettivo

Superficie del Contesto di lavoro (introdotto da CML-424) sulla Home, con microcopy aggiornata e quattro azioni principali.

## Cambiamenti

### Runtime (4 modifiche per file, 8 totali)

1. **CSS** — Aggiunta classe `.home-context-chip` per il chip contesto in Home
2. **Home HTML** — Inserito `<div class="home-context-chip" id="home-context-chip">` dopo l'eyebrow; rinominato titolo da "Hub del processo curricolare" a "Cosa vuoi fare oggi?"; rinominati bottoni azione: "Vai a Progetta" → "Prepara una progettazione", "Esportazioni" → "Esporta un documento", "Guida" → "Verifica fonti e limiti"
3. **Validazione umana** — Aggiornato messaggio nel governance strip: "La validazione resta umana. L'app prepara materiali di lavoro, non approva il curricolo."
4. **JS** — Aggiunto `updateHomeContextChip()` all'interno di `updateHomeDisciplinePanel()` per popolare il chip con `getWorkContextChip()`

### Non modificati

- Dati curricolari, flusso .cml, navigazione, export, backend, deploy

## Validazione

- `git diff --check`: ok
- Curriculum validator: 14/14 PASS
- Runtime shape test: 14/14 PASS
- Runtime pair: allineato (tutte le marche identiche tra i due file)

## Verdetto

CML-426_HOME_D2_CONTEXT_CHIP_RUNTIME_PATCH_READY_LOCAL_NOT_PUSHED
