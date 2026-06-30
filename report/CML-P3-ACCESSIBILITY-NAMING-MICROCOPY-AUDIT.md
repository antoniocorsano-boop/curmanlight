# Report — P3 Accessibility Naming and Microcopy Audit

## Sintesi Esecutiva

Audit P3 completato: 10 issue P3 rilevate in landmark naming, overlay ARIA, breadcrumb, navigazione mobile, annunci dinamici. Zero P0/P1/P2. Score 88/100 invariato. Nessuna modifica runtime.

## Baseline

| Aspetto | Valore |
|---------|--------|
| HEAD / `origin/main` | `cc52e30` |
| Accessibilità | 88/100 invariato |
| P0/P1/P2 | 0/0/0 confermato |
| Score aggiornato | No |

## Percorsi Testati

| Percorso | Esito P3 |
|----------|----------|
| Home | Clean |
| Welcome overlay | P3.02 (role region→dialog) |
| Curriculum (Consulta/Revisione/Definitivo/Fonti) | P3.04, P3.05 (breadcrumb) |
| Cambio disciplina | P3.07, P3.08 (aria-current) |
| Competenze e progettazione | Clean |
| Export Center | Clean |
| Guida | Clean |
| Menu mobile | P3.06 (abbreviazioni) |
| Card proposte | Clean |
| Settings overlay | P3.03 (dialog role) |

## Discipline Testate

Tutte P3-clean nella struttura dati (nessuna issue specifica per disciplina).

## Issue P3

| ID | Area | Impatto | Priorità | Slice Consigliata |
|----|------|---------|----------|-------------------|
| P3.01 | aside landmark | Basso | Media | Microfix ARIA |
| P3.02 | Welcome overlay role | Basso | Media | Microfix ARIA |
| P3.03 | Settings dialog role | Medio | Media | Microfix ARIA |
| P3.04 | Breadcrumb nav role | Basso | Media | Microfix ARIA |
| P3.05 | Breadcrumb aria-current | Basso | Bassa | Backlog |
| P3.06 | Mobile nav abbreviazioni | Medio | Bassa | Backlog |
| P3.07 | Sidebar aria-current | Basso | Media | Microfix ARIA |
| P3.08 | Mappa aria-current | Basso | Bassa | Backlog |
| P3.09 | Progress aria-live | Medio | Media | Microfix ARIA |
| P3.10 | Footer naming | Basso | Bassa | Backlog |

## Rischi/Regressioni

| Azione | Rischio |
|--------|---------|
| P3.06 testo completo mobile | Overflow layout su schermi < 360px |
| Tutte le altre | Regressione nulla (solo attributi HTML) |

## Scope Enforcement

| Aspetto | Esito |
|---------|-------|
| Runtime modificato | No |
| File fuori perimetro | Nessuno |
| Score aggiornato | No |
| WCAG dichiarato | No |

## Raccomandazioni

Eseguire slice runtime microfix successiva su: P3.01, P3.02, P3.03, P3.04, P3.07, P3.09 (6 issue a costo zero/estremamente basso).

## Backlog Residuo

- P3.05, P3.06, P3.08, P3.10 (non critici)
- VoiceOver/macOS test (slice futura)

## Verdict

`CML_P3_ACCESSIBILITY_NAMING_MICROCOPY_AUDIT_READY`
