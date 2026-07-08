# CML-421E — Full View Mock Proposals

## Mandatory Slice Header

- Macroprogramma: PM-09 Validazione con utenti / PM-03 Orientamento / PM-06 Accompagnamento / PM-07 Uniformità
- Dipende da: CML-421D
- Tipo slice: docs/mock-proposal-only remoto
- Branch: `remote-lab/cml-419-in2012-in2025-technical-table`
- Runtime: non modificato
- Main: non modificato

## Origine

CML-421D ha stabilito che prima del runtime occorre scegliere tra più direzioni di mock.

CML-421E produce le proposte complete da valutare.

## Obiettivo

Preparare mock testuali completi per:

```text
A — Cruscotto istituzionale compatto
B — Percorso guidato per docente
C — Workspace professionale a pannelli
D — Ibrido raccomandato A+B con innesti C
```

## Viste incluse

Ogni proposta deve coprire almeno:

```text
Home
Curricolo / Consulta
Curricolo / Fonti
Curricolo / Versioni
Curricolo / Processo aggiornamento
Curricolo / Sintesi finale
Progettazione / Parti dal curricolo
Progettazione / Programmazione annuale
Progettazione / UDA
Esportazione / Per la classe
Esportazione / Per il processo
Riferimenti e guida
Impostazioni / Contesto di lavoro
Mobile
```

## Regole comuni

```text
Non usare Wiki.
Non usare Definitivo.
Usare Sintesi finale per esito tecnico.
Usare Riferimenti e guida.
Tenere Contesto di lavoro in Impostazioni.
Dichiarare validazione umana dove serve.
Distinguere documenti scolastici e file .cml.
Non presentare IN2025 come vigente.
Non presentare l'app come sistema di approvazione.
```

## Output attesi

```text
docs/04_design/CML-421E_mock_A_institutional_dashboard.md
docs/04_design/CML-421E_mock_B_guided_teacher_path.md
docs/04_design/CML-421E_mock_C_professional_workspace.md
docs/04_design/CML-421E_mock_D_hybrid_recommended.md
report/CML-421E_mock_selection_pack.md
```

## Gate successivo

Dopo CML-421E occorre una scelta umana:

```text
scegli A, B, C, D oppure combinazione modificata
```

Solo dopo si passa a:

```text
CML-421F — Mockup Usability Review
```

## Non autorizzato

CML-421E non autorizza:

- runtime;
- merge su main;
- deploy;
- scelta automatica definitiva;
- modifica di `index.html`.

## Verdict atteso

```text
CML_421E_FULL_VIEW_MOCK_PROPOSALS_READY_REMOTE_BRANCH
```
