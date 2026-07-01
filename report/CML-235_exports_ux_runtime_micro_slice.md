# CML-235 EXPORTS UX RUNTIME MICRO-SLICE — Report

## Sintesi

Micro-intervento UX sull'area Esportazioni: badge ruolo, microcopy per fase d'uso, distinzione visiva tra documenti, file `.cml`, report e backup. Comportamento dei pulsanti invariato.

## Intervento

| Elemento | Prima | Dopo |
|---|---|---|
| Sottotitolo tab | Generico «scarica, condividi, archivia» | Orientato a ruolo e fase |
| Intro | Assente | Box `esport-intro-tip` con principio «una scelta, una conseguenza» |
| Gruppi | Solo titolo + desc parziale | Badge ruolo + desc su tutti e 6 i gruppi |
| File `.cml` | Stesso stile degli altri | Classe `tech` + nota Drive manuale |
| Confronto | Stesso bordo degli altri | Classe `compare` (arancio) |
| Report / Backup | Senza descrizione | Microcopy esplicito + badge |

## Pulsanti verificati (DOM)

Tutti presenti e con handler invariati:

- `exportWord(true)` / `exportWord()`
- `copyForWord(true)` / `copyForWord()`
- `exportMarkdown(true)` / `exportMarkdown()`
- `exportPDF(true)` / `exportPDF()`
- `generateDiscBozza()`, `copyDiscMarkdown()`, `downloadDiscMarkdown()`
- `exportTeacherCml()`, `uploadTeacherCmlToDrive()`, `exportDepartmentOutcomeCml()`
- `setTab('riepilogo');renderRiepilogo()`, `downloadReferentGroupWorkReport()`
- `saveLocalState(false);exportLocalBackup()`, import copia

## Smoke test (ispezione statica)

| Verifica | Esito |
|---|---|
| `#tab-esportazioni` presente | PASS |
| 6 gruppi `.esport-group` | PASS |
| 6 badge `.esport-role-badge` | PASS |
| Navigazione `setTab('esportazioni')` da tabbar/home | PASS |
| Home, Curriculum, Guida non modificati | PASS |
| JS syntax check estratto da HTML | PASS |

## Invarianti

- Formato `.cml`: non modificato
- JSON curriculum: non modificato
- Tools: non modificati
- Funzioni export/import: non modificate

## Rischi residui

| Rischio | Livello | Nota |
|---|---|---|
| Densità pulsanti simili (Word/Copia/Testo/PDF) | Basso | Accettato — distinzione ora a livello gruppo |
| Badge ruolo su mobile stretto | Basso | `flex-wrap` su h3 |
| Guida runtime non aggiornata su nuovi testi | Basso | Slice successiva consigliata |

## Prossima slice consigliata

**CML-236 — Guida UX runtime micro-slice** — allineare card Guida a Processo, Programmazione annuale Passo 1/2 e nuovi testi Esportazioni.
